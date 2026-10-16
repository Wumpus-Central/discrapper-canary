n.d(t, {
    xI: () => g,
    ik: () => T,
    Rl: () => C,
    WF: () => p,
    Eg: () => m,
    P7: () => N,
    qC: () => R,
    p7: () => L,
    oq: () => O,
});
var i = n(517846),
    r = n(636537),
    a = n(73153),
    s = n(148494),
    l = n(27620),
    o = n(181041),
    d = n(828488),
    c = n(987741),
    u = n(727011),
    _ = n(120570),
    E = n(17928);
let A = 0;
class h extends E.Ay.DeviceSettingsStore {
    static displayName = "TopicalNavigationSurveyStore";
    static persistKey = "TopicalNavigationSurveyStore";
    initialize(e) {
        A = e?.channelsExposedCount ?? 0;
    }
    shouldTriggerOnNextExposure() {
        return A >= 2;
    }
    getState() {
        return { channelsExposedCount: A };
    }
    getUserAgnosticState() {
        return { channelsExposedCount: A };
    }
}
let f = new h(a.h, {
    TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION: function () {
        A++;
    },
});
n(575279);
var I = n(652215);
async function p(e) {
    let {
        channelId: t,
        guildId: n,
        direction: i,
        anchor: s,
        limit: l = 25,
        isJump: c,
        throwOnError: u = !1,
        hydrateMessages: E,
    } = e;
    if (!(0, d.Lc)(n, "fetch_channel_conversations")) return;
    let A = `${i}:${s}:${l}:${!0 === c}`;
    if (o.A.isListFetchPending(t, A)) return;
    a.h.dispatch({
        type: "CHANNEL_CONVERSATIONS_FETCH_START",
        channelId: t,
        direction: i,
        requestKey: A,
        isJump: c ?? !1,
    });
    let h = { limit: l };
    (null != s && ("before" === i ? (h.before = s) : "after" === i ? (h.after = s) : (h.around = s)),
        null != E && ((h.include_messages = !0), (h.message_limit = E.limit ?? void 0)));
    try {
        let e = (
            await r.Bo.get({ url: I.Rsh.CHANNEL_CONVERSATIONS(t), query: h, oldFormErrors: !0, rejectWithError: !0 })
        ).body.conversations;
        return (
            a.h.dispatch({
                type: "CHANNEL_CONVERSATIONS_FETCH_SUCCESS",
                channelId: t,
                rawConversations: e,
                direction: i,
                requestKey: A,
                anchor: s,
                isJump: c ?? !1,
                fullyHydrated: E?.limit == null,
                selectedConversationId: _.A.getSelectedConversationId(t),
            }),
            e
        );
    } catch {
        if ((a.h.dispatch({ type: "CHANNEL_CONVERSATIONS_FETCH_FAILURE", channelId: t, requestKey: A }), u))
            throw Error("Failed to fetch conversations");
    }
}
async function T(e, t) {
    if (!c.A.touchConversation(t))
        try {
            let n = await r.Bo.get({ url: I.Rsh.CHANNEL_CONVERSATION(e, t), oldFormErrors: !0, rejectWithError: !0 });
            a.h.dispatch({ type: "CONVERSATION_FETCH_SUCCESS", channelId: e, rawConversation: n.body });
        } catch {}
}
function m() {
    a.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function g(e, t, n) {
    let { cacheType: i, shouldJump: r = !0 } = n;
    if (
        null == t ||
        (a.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: e, conversationId: t, cacheType: i }),
        S(e, t, i),
        !r)
    )
        return;
    let l = _.A.getConversation(e)?.startMessageId;
    null != l && s.A.jumpToMessage({ channelId: e, messageId: l, flash: !1 });
}
async function S(e, t, n) {
    ("preview" === n && (await T(e, t)), R(e, t, { includeReactions: !0, includeMessageReferences: !0, cacheType: n }));
}
function N(e, t) {
    a.h.dispatch({ type: "CLEAR_CONVERSATION_SELECTION", channelId: e, conversationId: t });
}
function C() {
    a.h.dispatch({ type: "CONVERSATION_FOCUS_REQUEST" });
}
function O(e, t, n) {
    a.h.dispatch({ type: "SET_CONVERSATION_FEEDBACK_RATING", channelId: e, conversationId: t, rating: n });
}
async function R(e, t, n) {
    let { previewLimit: i, includeMessageReferences: s, includeReactions: l, cacheType: d } = n,
        u = null == i;
    if (u) {
        if ("preview" === d ? c.A.isFullyHydrated(t) : o.A.isFullyHydrated(e, t)) return;
    } else if (null != ("preview" === d ? c.A.getHydratedMessages(t) : o.A.getHydratedMessages(e, t))) return;
    if (!("preview" === d ? c.A.isConversationFetchPending(t, u) : o.A.isConversationFetchPending(t, u))) {
        a.h.dispatch({
            type: "CONVERSATION_MESSAGES_FETCH_START",
            channelId: e,
            conversationId: t,
            full: u,
            cacheType: d,
        });
        try {
            let n = await r.Bo.get({
                url: I.Rsh.CHANNEL_CONVERSATION_MESSAGES(e, t),
                query: { limit: i, include_message_references: s, include_reactions: l },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            a.h.dispatch({
                type: "CONVERSATION_MESSAGES_FETCH_SUCCESS",
                channelId: e,
                conversationId: t,
                messages: n.body.messages,
                messageReferences: n.body.reference_messages,
                fullyHydrated: u,
                cacheType: d,
            });
        } catch {
            a.h.dispatch({
                type: "CONVERSATION_MESSAGES_FETCH_FAILURE",
                channelId: e,
                conversationId: t,
                full: u,
                cacheType: d,
            });
        }
    }
}
function L(e, t) {
    (u.X.trackEntrypointImpression({ channelId: e, conversationCount: t }),
        f.shouldTriggerOnNextExposure() && l.Ay.fireSurveyAction(i.w.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS),
        a.h.dispatch({ type: "TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION" }));
}
