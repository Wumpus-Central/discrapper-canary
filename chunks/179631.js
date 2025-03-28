n.r(t),
    n.d(t, {
        getDeviceState: () => a,
        logger: () => o
    });
var r = n(259443),
    i = n(342825);
let o = new r.Yd('native/DeviceState.tsx');
function a(e) {
    let { fallback: t = !0 } = e;
    return t ? Promise.resolve(i.f) : Promise.reject('Cannot get device state on web');
}
