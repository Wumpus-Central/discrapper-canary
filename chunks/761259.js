"use strict";
n.d(t, { xI: () => _, Eg: () => d, WF: () => c });
var i = n(636537),
    r = n(228366),
    s = n(720149),
    a = n(403362),
    o = n(958720);
function l(e) {
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
n(705448);
var u = n(652215);
function c(e) {
    let { channelId: t, limit: n = 25, before: s, after: o, around: c, isStaleRefresh: d } = e,
        _ = null != c ? "around" : null != o ? "after" : "before";
    r.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: t, direction: _ });
    let f = { limit: n };
    null != s && (f.before = s),
        null != o && (f.after = o),
        null != c && (f.around = c),
        i.Bo.get({ url: u.Rsh.CHANNEL_CONVERSATIONS(t), query: f, oldFormErrors: !0, rejectWithError: !0 }).then(
            (e) => {
                r.h.dispatch({
                    type: "CONVERSATIONS_FETCH_SUCCESS",
                    channelId: t,
                    conversations: e.body.conversations.map(l).filter(a.Vq),
                    direction: _,
                    beforeShortCircuited: e.body.before_short_circuited,
                    afterShortCircuited: e.body.after_short_circuited,
                    anchor: c ?? s ?? o,
                    isStaleRefresh: d ?? !1,
                });
            },
            () => {
                r.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: t });
            },
        );
}
function d() {
    r.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function _(e, t) {
    r.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: e, conversationId: t }), f(e, t);
    let n = o.A.getConversationMetadata(e, t);
    n?.conversation.startMessageId != null &&
        s.A.jumpToMessage({ channelId: e, messageId: n.conversation.startMessageId, flash: !1 });
}
async function f(e, t) {
    if (o.A.getConversationMetadata(e, t)?.hydratedMessages == null) {
        r.h.dispatch({ type: "CONVERSATION_FETCH_START", channelId: e, conversationId: t });
        try {
            let n = await i.Bo.get({
                    url: u.Rsh.CHANNEL_CONVERSATION(e, t),
                    query: { include_messages: !0 },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }),
                s = l(n.body);
            if (null == s)
                return void r.h.dispatch({ type: "CONVERSATION_FETCH_FAILURE", channelId: e, conversationId: t });
            r.h.dispatch({
                type: "CONVERSATION_FETCH_SUCCESS",
                channelId: e,
                conversationId: t,
                conversation: s,
                messages: n.body.messages ?? [],
            });
        } catch {
            r.h.dispatch({ type: "CONVERSATION_FETCH_FAILURE", channelId: e, conversationId: t });
        }
    }
}
