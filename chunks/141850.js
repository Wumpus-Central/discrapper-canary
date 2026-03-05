n.d(t, {
    E: () => a,
    W: () =>
        function e(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                a = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            l.h.isDispatching()
                ? Promise.resolve().then(() => e(t, n, a, r))
                : (l.h.dispatch({ type: "CONVERSATIONS_FETCH_START", channelId: t, isLoadMore: r }),
                  i.Bo.get({
                      url: s.Rsh.CHANNEL_CONVERSATIONS(t),
                      query: { limit: n, ...(null != a ? { before: a } : {}) },
                      oldFormErrors: !0,
                      rejectWithError: !0,
                  }).then(
                      (e) => {
                          let n = e.body;
                          l.h.dispatch({
                              type: "CONVERSATIONS_FETCH_SUCCESS",
                              channelId: t,
                              conversations: n.conversations,
                              isLoadMore: r,
                          });
                      },
                      () => {
                          l.h.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: t });
                      },
                  ));
        },
});
var i = n(562465),
    l = n(73153),
    s = n(652215);
function a() {
    l.h.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
