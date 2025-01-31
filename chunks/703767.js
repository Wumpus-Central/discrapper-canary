n.d(t, { Z: () => _ }), n(653041), n(47120);
var i = n(147913),
    r = n(579806);
n(987170);
var a = n(998502);
function s(e, t, n) {
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
let o = [0, 0],
    l = [];
function u(e) {
    for (let t of e) if (t[0] === o[0] && t[1] === o[1]) return !0;
    return !1;
}
let c = !1;
function d() {
    let e = {};
    for (let t of l)
        if (u(t.gpus)) {
            let n = t.experiment.getCurrentConfig({ location: 'updateFlags' });
            e = {
                ...e,
                ...n
            };
        }
    a.ZP.setChromiumSwitches(e);
}
class f extends i.Z {
    constructor(...e) {
        super(...e),
            s(this, 'actions', {
                POST_CONNECTION_OPEN: async () => {
                    try {
                        var e, t, n, i;
                        if (c || (null === (t = window.DiscordNative) || void 0 === t ? void 0 : null === (e = t.gpuSettings) || void 0 === e ? void 0 : e.setChromiumSwitches) == null) return;
                        let a = await r.Z.processUtils.getSystemInfo();
                        for (let e of null !== (i = null === (n = a.electronGPUInfo) || void 0 === n ? void 0 : n.gpuDevice) && void 0 !== i ? i : []) !0 === e.active && (o = [e.vendorId, e.deviceId]);
                        for (let e of ((c = !0), l)) u(e.gpus) && e.experiment.subscribe({ location: 'GPU experiment subscription' }, d);
                        d();
                    } catch (e) {}
                }
            });
    }
}
let _ = new f();
