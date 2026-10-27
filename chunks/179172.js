n.d(t, { BG: () => l, Bv: () => a, TO: () => s, mk: () => r });
var i = n(73153);
function s(e, t, n) {
    i.h.dispatch({ type: "CONNECTED_DEVICE_SWITCH", displayName: e, connectedDevicePreference: t, location: n });
}
function r() {
    i.h.dispatch({ type: "CONNECTED_DEVICE_DONT_SWITCH" });
}
function l(e) {
    i.h.dispatch({ type: "CONNECTED_DEVICE_IGNORE", displayName: e });
}
function a(e) {
    i.h.dispatch({ type: "CONNECTED_DEVICE_NEVER_SHOW_MODAL", neverShowModal: e });
}
