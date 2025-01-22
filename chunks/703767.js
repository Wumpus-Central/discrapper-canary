var i = r(653041);
var a = r(47120);
var o = r(147913),
    s = r(579806);
r(987170);
var l = r(998502);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = [0, 0];
function d(e) {
    let n = e.toString(16);
    for (; n.length < 4; ) n = '0' + n;
    return n;
}
let f = [];
function p(e) {
    for (let n of e) if (n[0] === c[0] && n[1] === c[1]) return !0;
    return !1;
}
let h = !1;
function _() {
    let e = {};
    for (let n of f)
        if (p(n.gpus)) {
            let r = n.experiment.getCurrentConfig({ location: 'updateFlags' });
            e = {
                ...e,
                ...r
            };
        }
    l.ZP.setChromiumSwitches(e);
}
class m extends o.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                POST_CONNECTION_OPEN: async () => {
                    try {
                        var e, n, r, i;
                        if (h || (null === (n = window.DiscordNative) || void 0 === n ? void 0 : null === (e = n.gpuSettings) || void 0 === e ? void 0 : e.setChromiumSwitches) == null) return;
                        let a = await s.Z.processUtils.getSystemInfo();
                        for (let e of null !== (i = null === (r = a.electronGPUInfo) || void 0 === r ? void 0 : r.gpuDevice) && void 0 !== i ? i : []) !0 === e.active && (c = [e.vendorId, e.deviceId]);
                        for (let e of ((h = !0), f)) p(e.gpus) && e.experiment.subscribe({ location: 'GPU experiment subscription' }, _);
                        _();
                    } catch (e) {}
                }
            });
    }
}
n.Z = new m();
