n.r(t),
    n.d(t, {
        addStylesheet: () => f,
        close: () => u,
        open: () => o,
        openCallTilePopout: () => c,
        openChannelCallPopout: () => l,
        setAlwaysOnTop: () => d,
    });
var r = n(73153);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
let s = {
    menubar: !1,
    toolbar: !1,
    location: !1,
    directories: !1,
};
function o(e, t, n) {
    return r.h.dispatch({
        type: "POPOUT_WINDOW_OPEN",
        key: e,
        features: a({}, s, n),
        render: t,
    });
}
function l(e) {
    return r.h.dispatch({
        type: "CHANNEL_CALL_POPOUT_WINDOW_OPEN",
        channel: e,
    });
}
function c(e, t) {
    return r.h.dispatch({
        type: "CALL_TILE_POPOUT_WINDOW_OPEN",
        channelId: e,
        participantId: t,
    });
}
function u(e) {
    return r.h.dispatch({
        type: "POPOUT_WINDOW_CLOSE",
        key: e,
    });
}
function d(e, t) {
    return r.h.dispatch({
        type: "POPOUT_WINDOW_SET_ALWAYS_ON_TOP",
        alwaysOnTop: t,
        key: e,
    });
}
function f(e, t) {
    return r.h.dispatch({
        type: "POPOUT_WINDOW_ADD_STYLESHEET",
        url: e,
        integrity: t,
    });
}
