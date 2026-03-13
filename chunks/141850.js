n.d(t, {
    Eg: () => a,
    UA: () => s,
    WF: () =>
        function e(t) {
            let { channelId: n, limit: a = 5, before: s, after: o, around: d } = t;
            if (l.h.isDispatching())
                return void Promise.resolve().then(() => e({ channelId: n, limit: a, before: s, after: o, around: d }));
            let c = null != d ? "around" : null != o ? "after" : "before";
            l.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: n, direction: c });
            let u = { limit: a };
            null != s && (u.before = s),
                null != o && (u.after = o),
                null != d && (u.around = d),
                i.Bo.get({
                    url: r.Rsh.CHANNEL_CONVERSATIONS(n),
                    query: u,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (e) => {
                        let t = e.body;
                        l.h.dispatch({
                            type: "CONVERSATIONS_FETCH_SUCCESS",
                            channelId: n,
                            conversations: t.conversations,
                            direction: c,
                            beforeShortCircuited: t.before_short_circuited,
                            afterShortCircuited: t.after_short_circuited,
                            anchor: d ?? s ?? o,
                        });
                    },
                    () => {
                        l.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: n });
                    },
                );
        },
    s4: () =>
        function e(t, n) {
            l.h.isDispatching()
                ? Promise.resolve().then(() => e(t, n))
                : l.h.dispatch({ type: "CONVERSATIONS_SCROLL_TO", channelId: t, conversationId: n });
        },
});
var i = n(562465),
    l = n(73153),
    r = n(652215);
function a() {
    l.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function s(e, t) {
    l.h.dispatch({ type: "CONVERSATIONS_HOVER_CONVERSATION", channelId: e, conversationId: t });
}
