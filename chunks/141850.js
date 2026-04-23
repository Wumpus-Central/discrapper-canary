"use strict";
n.d(t, {
    Eg: () => i,
    UA: () => r,
    WF: () =>
        function e(t) {
            let { channelId: n, limit: i = 25, before: r, after: o, around: c, isStaleRefresh: u } = t;
            if (a.h.isDispatching())
                return void Promise.resolve().then(() =>
                    e({ channelId: n, limit: i, before: r, after: o, around: c, isStaleRefresh: u }),
                );
            let d = null != c ? "around" : null != o ? "after" : "before";
            a.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: n, direction: d });
            let m = { limit: i };
            null != r && (m.before = r),
                null != o && (m.after = o),
                null != c && (m.around = c),
                l.Bo.get({
                    url: s.Rsh.CHANNEL_CONVERSATIONS(n),
                    query: m,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (e) => {
                        let t = e.body;
                        a.h.dispatch({
                            type: "CONVERSATIONS_FETCH_SUCCESS",
                            channelId: n,
                            conversations: t.conversations,
                            direction: d,
                            beforeShortCircuited: t.before_short_circuited,
                            afterShortCircuited: t.after_short_circuited,
                            anchor: c ?? r ?? o,
                            isStaleRefresh: u ?? !1,
                        });
                    },
                    () => {
                        a.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: n });
                    },
                );
        },
    xI: () =>
        function e(t, n) {
            a.h.isDispatching()
                ? Promise.resolve().then(() => e(t, n))
                : a.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: t, conversationId: n });
        },
});
var l = n(562465),
    a = n(73153);
n(705448);
var s = n(652215);
function i() {
    a.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function r(e, t) {
    a.h.dispatch({ type: "CONVERSATIONS_HOVER_CONVERSATION", channelId: e, conversationId: t });
}
