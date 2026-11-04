var i = n(73153);
n.d(
    t,
    {},
    {
        QQ: function (e) {
            i.h.dispatch({ type: "EMBEDDED_APP_SHIM_DISCONNECT", iframeId: e });
        },
        WR: function (e, t) {
            i.h.dispatch({ type: "EMBEDDED_APP_SHIM_STATE_UPDATE", iframeId: e, state: t });
        },
        dY: function (e, t) {
            i.h.dispatch({ type: "EMBEDDED_APP_SHIM_PIPE_OPEN", iframeId: e, pipe: t });
        },
    },
);
