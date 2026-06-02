"use strict";
n.d(t, { oq: () => p, qC: () => E, xI: () => h, WF: () => d, Eg: () => _, P7: () => f });
var i = n(636537),
    r = n(228366),
    s = n(720149),
    a = n(403362),
    o = n(828488),
    l = n(958720);
function u(e) {
    var t;
    let n = e.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
        i =
            null != n
                ? (function (e) {
                      try {
                          let t = JSON.parse(e);
                          if ("string" == typeof t?.title && "string" == typeof t?.brief_summary)
                              return {
                                  title: t.title,
                                  brief_summary: t.brief_summary,
                                  key_points: Array.isArray(t.key_points)
                                      ? t.key_points.map((e) => e?.text).filter((e) => "string" == typeof e)
                                      : [],
                              };
                          return null;
                      } catch {
                          return null;
                      }
                  })(n.content_json)
                : null;
    return i?.title == null || "" === i.title
        ? null
        : {
              id: e.id,
              title: i.title,
              briefSummary: i.brief_summary ?? null,
              keyPoints: i.key_points,
              channelId: e.channel_id,
              guildId: e.guild_id,
              messageIds: e.message_ids,
              userIds: e.user_ids,
              startMessageId: e.start_message_id,
              endMessageId: e.end_message_id,
              messageCount: e.message_count,
              userCount: e.user_count,
              keywords: e.keywords ?? [],
              summaryMap:
                  null != e.summary_map
                      ? {
                            entries: e.summary_map.entries.map((e) => ({
                                summaryType: e.summary_type,
                                contentJson: e.content_json,
                            })),
                        }
                      : null,
              engagement: e.engagement,
              substance: e.substance,
              dynamics: e.dynamics,
              moderation:
                  null != e.moderation
                      ? {
                            status: (t = e.moderation).status,
                            statusReason: t.status_reason,
                            messageViolationRate: t.message_violation_rate,
                            flaggedMessageCount: t.flagged_message_count,
                            totalMessageCount: t.total_message_count,
                            flaggedMessageIds: t.flagged_message_ids,
                            flaggedMessageDetails: t.flagged_message_details.map((e) => ({
                                messageId: e.message_id,
                                category: e.category,
                                severity: e.severity,
                                confidence: e.confidence,
                                reason: e.reason,
                            })),
                            flaggedSummaryDetails: t.flagged_summary_details,
                            flaggedTitle: t.flagged_title,
                            flaggedSummary: t.flagged_summary,
                            flaggedKeyPoints: t.flagged_key_points,
                            failedMessageIds: t.failed_message_ids,
                        }
                      : null,
          };
}
n(575279);
var c = n(652215);
function d(e) {
    let { channelId: t, guildId: n, limit: s = 25, before: l, after: d, around: _, isStaleRefresh: h } = e;
    if (!(0, o.uJ)(n, "fetch_channel_conversations")) return;
    let f = null != _ ? "around" : null != d ? "after" : "before";
    r.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: t, direction: f });
    let p = { limit: s };
    null != l && (p.before = l),
        null != d && (p.after = d),
        null != _ && (p.around = _),
        i.Bo.get({ url: c.Rsh.CHANNEL_CONVERSATIONS(t), query: p, oldFormErrors: !0, rejectWithError: !0 }).then(
            (e) => {
                r.h.dispatch({
                    type: "CONVERSATIONS_FETCH_SUCCESS",
                    channelId: t,
                    conversations: e.body.conversations.map(u).filter(a.Vq),
                    direction: f,
                    beforeShortCircuited: e.body.before_short_circuited,
                    afterShortCircuited: e.body.after_short_circuited,
                    anchor: _ ?? l ?? d,
                    isStaleRefresh: h ?? !1,
                });
            },
            () => {
                r.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: t });
            },
        );
}
function _() {
    r.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function h(e, t, n) {
    r.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: e, conversationId: n }), E(e, t, n, { full: !0 });
    let i = l.A.getConversationMetadata(e, n);
    i?.conversation.startMessageId != null &&
        s.A.jumpToMessage({ channelId: e, messageId: i.conversation.startMessageId, flash: !1 });
}
function f(e, t) {
    r.h.dispatch({ type: "CLEAR_CONVERSATION_SELECTION", channelId: e, conversationId: t });
}
function p(e, t, n) {
    r.h.dispatch({ type: "SET_CONVERSATION_FEEDBACK_RATING", channelId: e, conversationId: t, rating: n });
}
async function E(e, t, n) {
    let { full: s = !1 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!(0, o.uJ)(t, "fetch_conversation")) return;
    let a = l.A.getConversationMetadata(e, n);
    if ((s ? a?.fullyHydrated !== !0 : a?.hydratedMessages == null) && !l.A.isConversationFetchPending(n, s)) {
        r.h.dispatch({ type: "CONVERSATION_FETCH_START", channelId: e, conversationId: n, full: s });
        try {
            let t = await i.Bo.get({
                url: c.Rsh.CHANNEL_CONVERSATION_MESSAGES(e, n),
                query: s ? {} : { limit: 4 },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            r.h.dispatch({
                type: "CONVERSATION_FETCH_SUCCESS",
                channelId: e,
                conversationId: n,
                messages: t.body.messages,
                fullyHydrated: s,
            });
        } catch {
            r.h.dispatch({ type: "CONVERSATION_FETCH_FAILURE", channelId: e, conversationId: n, full: s });
        }
    }
}
