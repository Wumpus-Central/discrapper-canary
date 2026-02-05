"use strict";
n.d(t, { A: () => _ }), n(321073);
var r = n(439372),
    i = n(77729);
n(143770);
var a = n(837921);
let s = [0, 0],
    o = [];
function l(e) {
    for (let t of e) if (t[0] === s[0] && t[1] === s[1]) return !0;
    return !1;
}
let u = !1;
function c() {
    let e = {};
    for (let t of o)
        if (l(t.gpus)) {
            let n = t.experiment.getCurrentConfig({ location: "updateFlags" });
            e = { ...e, ...n };
        }
    a.Ay.setChromiumSwitches(e);
}
class d extends r.A {
    actions = {
        POST_CONNECTION_OPEN: async () => {
            try {
                if (u || window.DiscordNative?.gpuSettings?.setChromiumSwitches == null) return;
                let e = await i.A.processUtils.getSystemInfo();
                for (let t of e.electronGPUInfo?.gpuDevice ?? []) !0 === t.active && (s = [t.vendorId, t.deviceId]);
                for (let e of ((u = !0), o))
                    l(e.gpus) && e.experiment.subscribe({ location: "GPU experiment subscription" }, c);
                c();
            } catch (e) {}
        },
    };
}
let _ = new d();
