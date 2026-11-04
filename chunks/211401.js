var l = n(73153);
n.d(
    t,
    {},
    {
        R: function (e, t, n, i) {
            l.h.dispatch({
                type: "APP_LAUNCHER_SHOW",
                entrypoint: e,
                activeViewType: t,
                initialState: n,
                activeChannelId: i,
            });
        },
        k: function (e) {
            l.h.dispatch({ type: "APP_LAUNCHER_DISMISS", closeReason: e });
        },
    },
);
