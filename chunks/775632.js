"use strict";
n.d(t, { oq: () => S, qC: () => N, xI: () => I, WF: () => g, Eg: () => A, p7: () => C, P7: () => T });
var i = n(517846),
    r = n(636537),
    s = n(228366),
    a = n(493336),
    o = n(27620),
    l = n(403362),
    u = n(828488),
    c = n(727011),
    d = n(958720);
function _(e) {
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
var h = n(17928);
let f = 0;
class E extends h.Ay.DeviceSettingsStore {
    static displayName = "TopicalNavigationSurveyStore";
    static persistKey = "TopicalNavigationSurveyStore";
    initialize(e) {
        f = e?.channelsExposedCount ?? 0;
    }
    shouldTriggerOnNextExposure() {
        return 2 === f;
    }
    getState() {
        return { channelsExposedCount: f };
    }
    getUserAgnosticState() {
        return { channelsExposedCount: f };
    }
}
let p = new E(s.h, {
    TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION: function () {
        f++;
    },
});
n(575279);
var m = n(652215);
async function g(e) {
    let { channelId: t, guildId: n, direction: i, anchor: a, limit: o = 25, isJump: c, throwOnError: h = !1 } = e;
    if (!(0, u.Lc)(n, "fetch_channel_conversations")) return;
    let f = `${i}:${a}:${o}:${!0 === c}`;
    if (d.A.isListFetchPending(t, f)) return;
    s.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: t, direction: i, requestKey: f, isJump: c ?? !1 });
    let E = { limit: o };
    null != a && ("before" === i ? (E.before = a) : "after" === i ? (E.after = a) : (E.around = a));
    try {
        let e = (
            await r.Bo.get({ url: m.Rsh.CHANNEL_CONVERSATIONS(t), query: E, oldFormErrors: !0, rejectWithError: !0 })
        ).body.conversations
            .map(_)
            .filter(l.Vq);
        return (
            s.h.dispatch({
                type: "CONVERSATIONS_FETCH_SUCCESS",
                channelId: t,
                conversations: e,
                direction: i,
                requestKey: f,
                anchor: a,
                isJump: c ?? !1,
            }),
            e
        );
    } catch {
        if ((s.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: t, requestKey: f }), h))
            throw Error("Failed to fetch conversations");
    }
}
function A() {
    s.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function I(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    s.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: e, conversationId: n }), N(e, t, n, { full: !0 });
    let r = d.A.getConversationMetadata(e, n);
    i &&
        r?.conversation.startMessageId != null &&
        a.A.jumpToMessage({ channelId: e, messageId: r.conversation.startMessageId, flash: !1 });
}
function T(e, t) {
    s.h.dispatch({ type: "CLEAR_CONVERSATION_SELECTION", channelId: e, conversationId: t });
}
function S(e, t, n) {
    s.h.dispatch({ type: "SET_CONVERSATION_FEEDBACK_RATING", channelId: e, conversationId: t, rating: n });
}
async function N(e, t, n) {
    let { full: i = !1, previewLimit: a = 4 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!(0, u.Lc)(t, "fetch_conversation")) return;
    let o = d.A.getConversationMetadata(e, n);
    if ((i ? o?.fullyHydrated !== !0 : o?.hydratedMessages == null) && !d.A.isConversationFetchPending(n, i)) {
        s.h.dispatch({ type: "CONVERSATION_FETCH_START", channelId: e, conversationId: n, full: i });
        try {
            let t = await r.Bo.get({
                url: m.Rsh.CHANNEL_CONVERSATION_MESSAGES(e, n),
                query: i ? {} : { limit: a },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            s.h.dispatch({
                type: "CONVERSATION_FETCH_SUCCESS",
                channelId: e,
                conversationId: n,
                messages: t.body.messages,
                fullyHydrated: i,
            });
        } catch {
            s.h.dispatch({ type: "CONVERSATION_FETCH_FAILURE", channelId: e, conversationId: n, full: i });
        }
    }
}
function C(e, t, n) {
    c.X.trackEntrypointImpression({ channel: e, conversationCount: n }),
        p.shouldTriggerOnNextExposure() && o.Ay.fireSurveyAction(i.w.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS),
        s.h.dispatch({
            type: "TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION",
            channel: e,
            guildId: t,
            conversationCount: n,
        });
}
