"use strict";
n.d(t, {
    Eg: () => a,
    UA: () => r,
    WF: () =>
        function e(t) {
            let { channelId: n, limit: a = 25, before: r, after: o, around: u, isStaleRefresh: c } = t;
            if (i.h.isDispatching())
                return void Promise.resolve().then(() =>
                    e({ channelId: n, limit: a, before: r, after: o, around: u, isStaleRefresh: c }),
                );
            let d = null != u ? "around" : null != o ? "after" : "before";
            i.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: n, direction: d });
            let m = { limit: a };
            null != r && (m.before = r),
                null != o && (m.after = o),
                null != u && (m.around = u),
                l.Bo.get({
                    url: s.Rsh.CHANNEL_CONVERSATIONS(n),
                    query: m,
                    oldFormErrors: !0,
                    rejectWithError: !0,
                }).then(
                    (e) => {
                        let t = e.body;
                        i.h.dispatch({
                            type: "CONVERSATIONS_FETCH_SUCCESS",
                            channelId: n,
                            conversations: t.conversations,
                            direction: d,
                            beforeShortCircuited: t.before_short_circuited,
                            afterShortCircuited: t.after_short_circuited,
                            anchor: u ?? r ?? o,
                            isStaleRefresh: c ?? !1,
                        });
                    },
                    () => {
                        i.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: n });
                    },
                );
        },
    xI: () =>
        function e(t, n) {
            i.h.isDispatching()
                ? Promise.resolve().then(() => e(t, n))
                : i.h.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId: t, conversationId: n });
        },
});
var l = n(562465),
    i = n(73153);
n(705448);
var s = n(652215);
function a() {
    i.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function r(e, t) {
    i.h.dispatch({ type: "CONVERSATIONS_HOVER_CONVERSATION", channelId: e, conversationId: t });
}
