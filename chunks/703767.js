n.d(t, { Z: () => p }), n(653041), n(47120);
var r = n(147913),
    i = n(579806);
n(987170);
var o = n(998502);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
let l = [0, 0],
    c = [];
function u(e) {
    for (let t of e) if (t[0] === l[0] && t[1] === l[1]) return !0;
    return !1;
}
let d = !1;
function f() {
    let e = {};
    for (let t of c) u(t.gpus) && (e = s({}, e, t.experiment.getCurrentConfig({ location: 'updateFlags' })));
    o.ZP.setChromiumSwitches(e);
}
class _ extends r.Z {
    constructor(...e) {
        super(...e),
            a(this, 'actions', {
                POST_CONNECTION_OPEN: async () => {
                    try {
                        var e, t, n, r;
                        if (d || (null == (t = window.DiscordNative) || null == (e = t.gpuSettings) ? void 0 : e.setChromiumSwitches) == null) return;
                        for (let e of null != (r = null == (n = (await i.Z.processUtils.getSystemInfo()).electronGPUInfo) ? void 0 : n.gpuDevice) ? r : []) !0 === e.active && (l = [e.vendorId, e.deviceId]);
                        for (let e of ((d = !0), c)) u(e.gpus) && e.experiment.subscribe({ location: 'GPU experiment subscription' }, f);
                        f();
                    } catch (e) {}
                }
            });
    }
}
let p = new _();
