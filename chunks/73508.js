n.d(t, { A: () => _ }), n(321073), n(896048);
var r = n(439372),
    i = n(77729);
n(143770);
var a = n(837921);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
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
    for (let t of c) u(t.gpus) && (e = o({}, e, t.experiment.getCurrentConfig({ location: "updateFlags" })));
    a.Ay.setChromiumSwitches(e);
}
class p extends r.A {
    constructor(...e) {
        super(...e),
            s(this, "actions", {
                POST_CONNECTION_OPEN: async () => {
                    try {
                        var e, t, n, r;
                        if (
                            d ||
                            (null == (n = window.DiscordNative) || null == (t = n.gpuSettings)
                                ? void 0
                                : t.setChromiumSwitches) == null
                        )
                            return;
                        for (let t of null !=
                        (e =
                            null == (r = (await i.A.processUtils.getSystemInfo()).electronGPUInfo)
                                ? void 0
                                : r.gpuDevice)
                            ? e
                            : [])
                            !0 === t.active && (l = [t.vendorId, t.deviceId]);
                        for (let e of ((d = !0), c))
                            u(e.gpus) && e.experiment.subscribe({ location: "GPU experiment subscription" }, f);
                        f();
                    } catch (e) {}
                },
            });
    }
}
let _ = new p();
