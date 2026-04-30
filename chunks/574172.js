"use strict";
n.r(t),
    n.d(t, {
        addStylesheet: () => c,
        close: () => l,
        open: () => s,
        openCallTilePopout: () => o,
        openChannelCallPopout: () => a,
        setAlwaysOnTop: () => u,
    });
var i = n(228366);
let r = { menubar: !1, toolbar: !1, location: !1, directories: !1 };
function s(e, t, n) {
    return i.h.dispatch({ type: "POPOUT_WINDOW_OPEN", key: e, features: { ...r, ...n }, render: t });
}
function a(e) {
    return i.h.dispatch({ type: "CHANNEL_CALL_POPOUT_WINDOW_OPEN", channel: e });
}
function o(e, t) {
    return i.h.dispatch({ type: "CALL_TILE_POPOUT_WINDOW_OPEN", channelId: e, participantId: t });
}
function l(e) {
    return i.h.dispatch({ type: "POPOUT_WINDOW_CLOSE", key: e });
}
function u(e, t) {
    return i.h.dispatch({ type: "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", alwaysOnTop: t, key: e });
}
function c(e, t) {
    return i.h.dispatch({ type: "POPOUT_WINDOW_ADD_STYLESHEET", url: e, integrity: t });
}
