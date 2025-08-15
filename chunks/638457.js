n.d(t, { Z: () => o });
var r = n(131951),
    i = n(65154);
function a(e) {
    return e.supports(i.AN.MEDIAPIPE) && Object.values(e.getVideoDevices()).length > 0;
}
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z;
    return a(e);
}
