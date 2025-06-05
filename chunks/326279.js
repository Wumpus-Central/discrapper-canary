n.d(t, {
    Gl: () => l,
    Wz: () => o,
    mo: () => a,
    oI: () => r
});
var i = n(570140);
function a(e, t, n) {
    i.Z.dispatch({
        type: 'CONNECTED_DEVICE_SWITCH',
        displayName: e,
        connectedDevicePreference: t,
        location: n
    });
}
function o(e) {
    i.Z.dispatch({
        type: 'CONNECTED_DEVICE_DONT_SWITCH',
        displayName: e
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'CONNECTED_DEVICE_IGNORE',
        displayName: e
    });
}
function r() {
    i.Z.dispatch({ type: 'CONNECTED_DEVICE_NEVER_SHOW_MODAL' });
}
