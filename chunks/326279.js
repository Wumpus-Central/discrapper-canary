n.d(t, {
    Gl: () => o,
    Wz: () => l,
    mo: () => i,
});
var a = n(570140);
function i(e, t, n) {
    a.Z.dispatch({
        type: "CONNECTED_DEVICE_SWITCH",
        displayName: e,
        connectedDevicePreference: t,
        location: n,
    });
}
function l(e) {
    a.Z.dispatch({
        type: "CONNECTED_DEVICE_DONT_SWITCH",
        displayName: e,
    });
}
function o(e) {
    a.Z.dispatch({
        type: "CONNECTED_DEVICE_IGNORE",
        displayName: e,
    });
}
