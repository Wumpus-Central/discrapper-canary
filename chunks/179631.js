(n.r(t),
    n.d(t, {
        getDeviceState: () => o,
        logger: () => a
    }));
var r = n(710845),
    i = n(342825);
let a = new r.Z('native/DeviceState.tsx');
function o() {
    let { fallback: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fallback: !0 };
    return e ? Promise.resolve(i.f) : Promise.reject('Cannot get device state on web');
}
