"use strict";
n.d(t, { A: () => _ }), n(321073);
var i = n(439372),
    r = n(77729);
n(36200);
var a = n(19575);
let s = [],
    l = [];
function o(e) {
    return e.some((e) => s.some((t) => t[0] === e[0] && t[1] === e[1]));
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
                for (let t of ((s = (e.electronGPUInfo?.gpuDevice ?? []).map((e) => [e.vendorId, e.deviceId])),
                (d = !0),
                l))
                    o(t.gpus) && t.experiment.subscribe({ location: "GPU experiment subscription" }, c);
                c();
            } catch (e) {}
        },
    };
}
let _ = new u();
