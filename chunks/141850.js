n.d(t, {
    Eg: () => a,
    UA: () => l,
    WF: () =>
        function e(t) {
            let { channelId: n, limit: a = 25, before: l, after: o, around: c, isStaleRefresh: d } = t;
            if (r.h.isDispatching())
                return void Promise.resolve().then(() =>
                    e({ channelId: n, limit: a, before: l, after: o, around: c, isStaleRefresh: d }),
                );
            let u = null != c ? "around" : null != o ? "after" : "before";
            r.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: n, direction: u });
            let m = { limit: a };
            null != l && (m.before = l),
                null != o && (m.after = o),
                null != c && (m.around = c),
                i.Bo.get({
                    url: s.Rsh.CHANNEL_CONVERSATIONS(n),
                    query: m,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (e) => {
                        let t = e.body;
                        r.h.dispatch({
                            type: "CONVERSATIONS_FETCH_SUCCESS",
                            channelId: n,
                            conversations: t.conversations,
                            direction: u,
                            beforeShortCircuited: t.before_short_circuited,
                            afterShortCircuited: t.after_short_circuited,
                            anchor: c ?? l ?? o,
                            isStaleRefresh: d ?? !1,
                        });
                    },
                    () => {
                        r.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: n });
                    },
                );
        },
    xI: () =>
        function e(t, n) {
            r.h.isDispatching()
                ? Promise.resolve().then(() => e(t, n))
                : r.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: t, conversationId: n });
        },
});
var i = n(636537),
    r = n(228366);
n(705448);
var s = n(652215);
function a() {
    r.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function l(e, t) {
    r.h.dispatch({ type: "CONVERSATIONS_HOVER_CONVERSATION", channelId: e, conversationId: t });
}
