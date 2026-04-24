"use strict";
n.d(t, {
    Eg: () => l,
    UA: () => s,
    WF: () =>
        function e(t) {
            let { channelId: n, limit: l = 25, before: s, after: o, around: c, isStaleRefresh: d } = t;
            if (r.h.isDispatching())
                return void Promise.resolve().then(() =>
                    e({ channelId: n, limit: l, before: s, after: o, around: c, isStaleRefresh: d }),
                );
            let u = null != c ? "around" : null != o ? "after" : "before";
            r.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: n, direction: u });
            let _ = { limit: l };
            null != s && (_.before = s),
                null != o && (_.after = o),
                null != c && (_.around = c),
                a.Bo.get({
                    url: i.Rsh.CHANNEL_CONVERSATIONS(n),
                    query: _,
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
                            anchor: c ?? s ?? o,
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
var a = n(636537),
    r = n(228366);
n(705448);
var i = n(652215);
function l() {
    r.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
function s(e, t) {
    r.h.dispatch({ type: "CONVERSATIONS_HOVER_CONVERSATION", channelId: e, conversationId: t });
}
