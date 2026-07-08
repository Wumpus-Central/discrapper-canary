"use strict";
n.d(t, { A: () => _ }), n(321073);
var i = n(439372),
    r = n(77729);
n(36200);
var a = n(19575);
let s = [0, 0],
    l = [];
function o(e) {
    for (let t of e) if (t[0] === s[0] && t[1] === s[1]) return !0;
    return !1;
}
let d = !1;
function c() {
    let e = {};
    for (let t of l)
        if (o(t.gpus)) {
            let n = t.experiment.getCurrentConfig({ location: "updateFlags" });
            e = { ...e, ...n };
        }
    a.Ay.setChromiumSwitches(e);
}
class u extends i.A {
    actions = {
        POST_CONNECTION_OPEN: async () => {
            try {
                if (d || window.DiscordNative?.gpuSettings?.setChromiumSwitches == null) return;
                let e = await r.A.processUtils.getSystemInfo();
                for (let t of e.electronGPUInfo?.gpuDevice ?? []) !0 === t.active && (s = [t.vendorId, t.deviceId]);
                for (let e of ((d = !0), l))
                    o(e.gpus) && e.experiment.subscribe({ location: "GPU experiment subscription" }, c);
                c();
            } catch (e) {}
        },
    };
}
let _ = new u();
