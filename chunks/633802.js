n.d(t, { QQ: () => s, WR: () => a, dY: () => r });
var i = n(73153);
function r(e, t) {
    i.h.dispatch({ type: "EMBEDDED_APP_SHIM_PIPE_OPEN", iframeId: e, pipe: t });
}
function a(e, t) {
    i.h.dispatch({ type: "EMBEDDED_APP_SHIM_STATE_UPDATE", iframeId: e, state: t });
}
function s(e) {
    i.h.dispatch({ type: "EMBEDDED_APP_SHIM_DISCONNECT", iframeId: e });
}
