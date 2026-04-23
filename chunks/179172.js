n.d(t, { BG: () => r, TO: () => i, mk: () => l });
var a = n(73153);
function i(e, t, n) {
    a.h.dispatch({ type: "CONNECTED_DEVICE_SWITCH", displayName: e, connectedDevicePreference: t, location: n });
}
function l(e) {
    a.h.dispatch({ type: "CONNECTED_DEVICE_DONT_SWITCH", displayName: e });
}
function r(e) {
    a.h.dispatch({ type: "CONNECTED_DEVICE_IGNORE", displayName: e });
}
