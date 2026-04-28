r.d(e, {
    Eg: () => s,
    UA: () => n,
    WF: () =>
        function t(e) {
            let { channelId: r, limit: s = 25, before: n, after: c, around: a, isStaleRefresh: E } = e;
            if (h.h.isDispatching())
                return void Promise.resolve().then(() =>
                    t({ channelId: r, limit: s, before: n, after: c, around: a, isStaleRefresh: E }),
                );
            let S = null != a ? "around" : null != c ? "after" : "before";
            h.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: r, direction: S });
            let p = { limit: s };
            null != n && (p.before = n),
                null != c && (p.after = c),
                null != a && (p.around = a),
                i.Bo.get({
                    url: o.Rsh.CHANNEL_CONVERSATIONS(r),
                    query: p,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (t) => {
                        let e = t.body;
                        h.h.dispatch({
                            type: "CONVERSATIONS_FETCH_SUCCESS",
                            channelId: r,
                            conversations: e.conversations,
                            direction: S,
                            beforeShortCircuited: e.before_short_circuited,
                            afterShortCircuited: e.after_short_circuited,
                            anchor: a ?? n ?? c,
                            isStaleRefresh: E ?? !1,
                        });
                    },
                    () => {
                        h.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: r });
                    },
                );
        },
    xI: () =>
        function t(e, r) {
            h.h.isDispatching()
                ? Promise.resolve().then(() => t(e, r))
                : h.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: e, conversationId: r });
        },
});
var i = r(636537),
    h = r(228366);
r(705448);
var o = r(652215);
function s() {
    h.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function n(t, e) {
    h.h.dispatch({ type: "CONVERSATIONS_HOVER_CONVERSATION", channelId: t, conversationId: e });
}
