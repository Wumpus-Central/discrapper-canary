"use strict";
n.d(t, { oq: () => N, qC: () => C, xI: () => g, WF: () => T, Eg: () => m, p7: () => R, P7: () => S });
var i = n(517846),
    r = n(636537),
    a = n(228366),
    s = n(493336),
    l = n(27620),
    o = n(403362),
    d = n(828488),
    c = n(727011),
    u = n(958720),
    _ = n(735438);
function E(e) {
    var t;
    let n = e.summary_map?.entries.find((e) => "TOPIC_EXTRACTION_SUMMARY" === e.summary_type),
        i =
            null != n
                ? (function (e) {
                      try {
                          let t = JSON.parse(e);
                          if ("string" == typeof t?.title && "string" == typeof t?.brief_summary)
                              return {
                                  title: (0, _.upperFirst)(t.title),
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
var A = n(17928);
let h = 0;
class I extends A.Ay.DeviceSettingsStore {
    static displayName = "TopicalNavigationSurveyStore";
    static persistKey = "TopicalNavigationSurveyStore";
    initialize(e) {
        h = e?.channelsExposedCount ?? 0;
    }
    shouldTriggerOnNextExposure() {
        return 2 === h;
    }
    getState() {
        return { channelsExposedCount: h };
    }
    getUserAgnosticState() {
        return { channelsExposedCount: h };
    }
}
let f = new I(a.h, {
    TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION: function () {
        h++;
    },
});
n(575279);
var p = n(652215);
async function T(e) {
    let { channelId: t, guildId: n, direction: i, anchor: s, limit: l = 25, isJump: c, throwOnError: _ = !1 } = e;
    if (!(0, d.Lc)(n, "fetch_channel_conversations")) return;
    let A = `${i}:${s}:${l}:${!0 === c}`;
    if (u.A.isListFetchPending(t, A)) return;
    a.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: t, direction: i, requestKey: A, isJump: c ?? !1 });
    let h = { limit: l };
    null != s && ("before" === i ? (h.before = s) : "after" === i ? (h.after = s) : (h.around = s));
    try {
        let e = (
            await r.Bo.get({ url: p.Rsh.CHANNEL_CONVERSATIONS(t), query: h, oldFormErrors: !0, rejectWithError: !0 })
        ).body.conversations
            .map(E)
            .filter(o.Vq);
        return (
            a.h.dispatch({
                type: "CONVERSATIONS_FETCH_SUCCESS",
                channelId: t,
                conversations: e,
                direction: i,
                requestKey: A,
                anchor: s,
                isJump: c ?? !1,
            }),
            e
        );
    } catch {
        if ((a.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: t, requestKey: A }), _))
            throw Error("Failed to fetch conversations");
    }
}
function m() {
    a.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function g(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    a.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: e, conversationId: n }), C(e, t, n, { full: !0 });
    let r = u.A.getConversationMetadata(e, n);
    i &&
        r?.conversation.startMessageId != null &&
        s.A.jumpToMessage({ channelId: e, messageId: r.conversation.startMessageId, flash: !1 });
}
function S(e, t) {
    a.h.dispatch({ type: "CLEAR_CONVERSATION_SELECTION", channelId: e, conversationId: t });
}
function N(e, t, n) {
    a.h.dispatch({ type: "SET_CONVERSATION_FEEDBACK_RATING", channelId: e, conversationId: t, rating: n });
}
async function C(e, t, n) {
    let { full: i = !1, previewLimit: s = 4 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (!(0, d.Lc)(t, "fetch_conversation")) return;
    let l = u.A.getConversationMetadata(e, n);
    if ((i ? l?.fullyHydrated !== !0 : l?.hydratedMessages == null) && !u.A.isConversationFetchPending(n, i)) {
        a.h.dispatch({ type: "CONVERSATION_FETCH_START", channelId: e, conversationId: n, full: i });
        try {
            let t = await r.Bo.get({
                url: p.Rsh.CHANNEL_CONVERSATION_MESSAGES(e, n),
                query: i ? {} : { limit: s },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            a.h.dispatch({
                type: "CONVERSATION_FETCH_SUCCESS",
                channelId: e,
                conversationId: n,
                messages: t.body.messages,
                fullyHydrated: i,
            });
        } catch {
            a.h.dispatch({ type: "CONVERSATION_FETCH_FAILURE", channelId: e, conversationId: n, full: i });
        }
    }
}
function R(e, t, n) {
    c.X.trackEntrypointImpression({ channel: e, conversationCount: n }),
        f.shouldTriggerOnNextExposure() && l.Ay.fireSurveyAction(i.w.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS),
        a.h.dispatch({
            type: "TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION",
            channel: e,
            guildId: t,
            conversationCount: n,
        });
}
