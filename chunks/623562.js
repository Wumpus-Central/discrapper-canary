n.d(t, { oq: () => g, qC: () => S, xI: () => T, WF: () => f, Eg: () => p, p7: () => N, P7: () => m });
var i = n(517846),
    r = n(636537),
    a = n(228366),
    s = n(148494),
    l = n(27620),
    o = n(828488),
    d = n(987741),
    c = n(727011),
    u = n(958720),
    _ = n(17928);
let E = 0;
class A extends _.Ay.DeviceSettingsStore {
    static displayName = "TopicalNavigationSurveyStore";
    static persistKey = "TopicalNavigationSurveyStore";
    initialize(e) {
        E = e?.channelsExposedCount ?? 0;
    }
    shouldTriggerOnNextExposure() {
        return E >= 2;
    }
    getState() {
        return { channelsExposedCount: E };
    }
    getUserAgnosticState() {
        return { channelsExposedCount: E };
    }
}
let h = new A(a.h, {
    TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION: function () {
        E++;
    },
});
n(575279);
var I = n(652215);
async function f(e) {
    let {
        channelId: t,
        guildId: n,
        direction: i,
        anchor: s,
        limit: l = 25,
        isJump: d,
        throwOnError: c = !1,
        hydrateMessages: _,
    } = e;
    if (!(0, o.Lc)(n, "fetch_channel_conversations")) return;
    let E = `${i}:${s}:${l}:${!0 === d}`;
    if (u.A.isListFetchPending(t, E)) return;
    a.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: t, direction: i, requestKey: E, isJump: d ?? !1 });
    let A = { limit: l };
    (null != s && ("before" === i ? (A.before = s) : "after" === i ? (A.after = s) : (A.around = s)),
        null != _ && ((A.include_messages = !0), (A.message_limit = _.limit ?? void 0)));
    try {
        let e = (
            await r.Bo.get({ url: I.Rsh.CHANNEL_CONVERSATIONS(t), query: A, oldFormErrors: !0, rejectWithError: !0 })
        ).body.conversations;
        return (
            a.h.dispatch({
                type: "CONVERSATIONS_FETCH_SUCCESS",
                channelId: t,
                rawConversations: e,
                direction: i,
                requestKey: E,
                anchor: s,
                isJump: d ?? !1,
                fullyHydrated: _?.limit == null,
            }),
            e
        );
    } catch {
        if ((a.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: t, requestKey: E }), c))
            throw Error("Failed to fetch conversations");
    }
}
function p() {
    a.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function T(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    (a.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: e, conversationId: n }),
        S(e, n, { includeReactions: !0, includeMessageReferences: !0 }));
    let r = u.A.getConversationMetadata(e, n);
    i &&
        r?.conversation.startMessageId != null &&
        s.A.jumpToMessage({ channelId: e, messageId: r.conversation.startMessageId, flash: !1 });
}
function m(e, t) {
    a.h.dispatch({ type: "CLEAR_CONVERSATION_SELECTION", channelId: e, conversationId: t });
}
function g(e, t, n) {
    a.h.dispatch({ type: "SET_CONVERSATION_FEEDBACK_RATING", channelId: e, conversationId: t, rating: n });
}
async function S(e, t, n) {
    let { previewLimit: i, includeMessageReferences: s, includeReactions: l, isStandalone: o = !1 } = n ?? {},
        c = null == i;
    if (c) {
        if (o ? d.A.isFullyHydrated(t) : u.A.isFullyHydrated(e, t)) return;
    } else if (null != (o ? d.A.getHydratedMessages(t) : u.A.getHydratedMessages(e, t))) return;
    if (!(o ? d.A.isConversationFetchPending(t, c) : u.A.isConversationFetchPending(t, c))) {
        a.h.dispatch({ type: "CONVERSATION_FETCH_START", channelId: e, conversationId: t, full: c, isStandalone: o });
        try {
            let n = await r.Bo.get({
                url: I.Rsh.CHANNEL_CONVERSATION_MESSAGES(e, t),
                query: { limit: i, include_message_references: s, include_reactions: l },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            a.h.dispatch({
                type: "CONVERSATION_FETCH_SUCCESS",
                channelId: e,
                conversationId: t,
                messages: n.body.messages,
                messageReferences: n.body.reference_messages,
                fullyHydrated: c,
                isStandalone: o,
            });
        } catch {
            a.h.dispatch({
                type: "CONVERSATION_FETCH_FAILURE",
                channelId: e,
                conversationId: t,
                full: c,
                isStandalone: o,
            });
        }
    }
}
function N(e, t) {
    (c.X.trackEntrypointImpression({ channelId: e, conversationCount: t }),
        h.shouldTriggerOnNextExposure() && l.Ay.fireSurveyAction(i.w.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS),
        a.h.dispatch({ type: "TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION" }));
}
