"use strict";
n.d(t, { oq: () => m, qC: () => g, xI: () => p, WF: () => I, Eg: () => f, p7: () => S, P7: () => T });
var i = n(517846),
    r = n(636537),
    a = n(228366),
    s = n(493336),
    l = n(27620),
    o = n(828488),
    d = n(727011),
    c = n(619065),
    u = n(17928);
let _ = 0;
class E extends u.Ay.DeviceSettingsStore {
    static displayName = "TopicalNavigationSurveyStore";
    static persistKey = "TopicalNavigationSurveyStore";
    initialize(e) {
        _ = e?.channelsExposedCount ?? 0;
    }
    shouldTriggerOnNextExposure() {
        return 2 === _;
    }
    getState() {
        return { channelsExposedCount: _ };
    }
    getUserAgnosticState() {
        return { channelsExposedCount: _ };
    }
}
let A = new E(a.h, {
    TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION: function () {
        _++;
    },
});
n(575279);
var h = n(652215);
async function I(e) {
    let {
        channelId: t,
        guildId: n,
        direction: i,
        anchor: s,
        limit: l = 25,
        isJump: d,
        throwOnError: u = !1,
        hydrateMessages: _,
    } = e;
    if (!(0, o.Lc)(n, "fetch_channel_conversations")) return;
    let E = `${i}:${s}:${l}:${!0 === d}`;
    if (c.A.isListFetchPending(t, E)) return;
    a.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: t, direction: i, requestKey: E, isJump: d ?? !1 });
    let A = { limit: l };
    null != s && ("before" === i ? (A.before = s) : "after" === i ? (A.after = s) : (A.around = s)),
        null != _ && ((A.include_messages = !0), (A.message_limit = _.limit ?? void 0));
    try {
        let e = (
            await r.Bo.get({ url: h.Rsh.CHANNEL_CONVERSATIONS(t), query: A, oldFormErrors: !0, rejectWithError: !0 })
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
        if ((a.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: t, requestKey: E }), u))
            throw Error("Failed to fetch conversations");
    }
}
function f() {
    a.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function p(e, t, n) {
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    a.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: e, conversationId: n }),
        g(e, t, n, { includeReactions: !0, includeMessageReferences: !0 });
    let r = c.A.getConversationMetadata(e, n);
    i &&
        r?.conversation.startMessageId != null &&
        s.A.jumpToMessage({ channelId: e, messageId: r.conversation.startMessageId, flash: !1 });
}
function T(e, t) {
    a.h.dispatch({ type: "CLEAR_CONVERSATION_SELECTION", channelId: e, conversationId: t });
}
function m(e, t, n) {
    a.h.dispatch({ type: "SET_CONVERSATION_FEEDBACK_RATING", channelId: e, conversationId: t, rating: n });
}
async function g(e, t, n, i) {
    if (!(0, o.Lc)(t, "fetch_conversation")) return;
    let { previewLimit: s, includeMessageReferences: l, includeReactions: d } = i ?? {},
        u = null == s,
        _ = c.A.getConversationMetadata(e, n);
    if ((u ? _?.fullyHydrated !== !0 : _?.hydratedMessages == null) && !c.A.isConversationFetchPending(n, u)) {
        a.h.dispatch({ type: "CONVERSATION_FETCH_START", channelId: e, conversationId: n, full: u });
        try {
            let t = await r.Bo.get({
                url: h.Rsh.CHANNEL_CONVERSATION_MESSAGES(e, n),
                query: { limit: s, include_ancestors: l, include_reactions: d },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            a.h.dispatch({
                type: "CONVERSATION_FETCH_SUCCESS",
                channelId: e,
                conversationId: n,
                messages: t.body.messages,
                messageReferences: t.body.ancestors,
                fullyHydrated: u,
            });
        } catch (t) {
            a.h.dispatch({ type: "CONVERSATION_FETCH_FAILURE", channelId: e, conversationId: n, full: u });
        }
    }
}
function S(e, t, n) {
    d.X.trackEntrypointImpression({ channelId: e.id, conversationCount: n }),
        A.shouldTriggerOnNextExposure() && l.Ay.fireSurveyAction(i.w.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS),
        a.h.dispatch({
            type: "TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION",
            channel: e,
            guildId: t,
            conversationCount: n,
        });
}
