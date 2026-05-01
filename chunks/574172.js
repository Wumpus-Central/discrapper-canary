n.r(t),
    n.d(t, {
        addStylesheet: () => c,
        close: () => o,
        open: () => r,
        openCallTilePopout: () => l,
        openChannelCallPopout: () => s,
        setAlwaysOnTop: () => d,
    });
var i = n(228366);
let a = { menubar: !1, toolbar: !1, location: !1, directories: !1 };
function r(e, t, n) {
    return i.h.dispatch({ type: "POPOUT_WINDOW_OPEN", key: e, features: { ...a, ...n }, render: t });
}
function s(e) {
    return i.h.dispatch({ type: "CHANNEL_CALL_POPOUT_WINDOW_OPEN", channel: e });
}
function l(e, t) {
    return i.h.dispatch({ type: "CALL_TILE_POPOUT_WINDOW_OPEN", channelId: e, participantId: t });
}
function o(e) {
    return i.h.dispatch({ type: "POPOUT_WINDOW_CLOSE", key: e });
}
function d(e, t) {
    return i.h.dispatch({ type: "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", alwaysOnTop: t, key: e });
}
function c(e, t) {
    return i.h.dispatch({ type: "POPOUT_WINDOW_ADD_STYLESHEET", url: e, integrity: t });
}
