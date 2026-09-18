n.d(t, { BG: () => s, Bv: () => a, TO: () => l, mk: () => r });
var i = n(228366);
function l(e, t, n) {
    i.h.dispatch({ type: "CONNECTED_DEVICE_SWITCH", displayName: e, connectedDevicePreference: t, location: n });
}
function r() {
    i.h.dispatch({ type: "CONNECTED_DEVICE_DONT_SWITCH" });
}
function s(e) {
    i.h.dispatch({ type: "CONNECTED_DEVICE_IGNORE", displayName: e });
}
function a(e) {
    i.h.dispatch({ type: "CONNECTED_DEVICE_NEVER_SHOW_MODAL", neverShowModal: e });
}
