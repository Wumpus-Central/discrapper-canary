n.r(t),
    n.d(t, {
        getDeviceState: () => o,
        logger: () => a
    });
var r = n(259443),
    i = n(342825);
let a = new r.Yd('native/DeviceState.tsx');
function o() {
    let { fallback: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fallback: !0 };
    return e ? Promise.resolve(i.f) : Promise.reject('Cannot get device state on web');
}
