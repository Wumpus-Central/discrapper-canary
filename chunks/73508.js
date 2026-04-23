"use strict";
n.d(t, { A: () => c }), n(321073);
var i = n(439372),
    r = n(77729);
n(36200);
var s = n(19575);
let a = [0, 0],
    o = [];
function l(e) {
    for (let t of e) if (t[0] === a[0] && t[1] === a[1]) return !0;
    return !1;
}
let d = !1;
function _() {
    let e = {};
    for (let t of o)
        if (l(t.gpus)) {
            let n = t.experiment.getCurrentConfig({ location: "updateFlags" });
            e = { ...e, ...n };
        }
    s.Ay.setChromiumSwitches(e);
}
class u extends i.A {
    actions = {
        POST_CONNECTION_OPEN: async () => {
            try {
                if (d || window.DiscordNative?.gpuSettings?.setChromiumSwitches == null) return;
                let e = await r.A.processUtils.getSystemInfo();
                for (let t of e.electronGPUInfo?.gpuDevice ?? []) !0 === t.active && (a = [t.vendorId, t.deviceId]);
                for (let e of ((d = !0), o))
                    l(e.gpus) && e.experiment.subscribe({ location: "GPU experiment subscription" }, _);
                _();
            } catch (e) {}
        },
    };
}
let c = new u();
