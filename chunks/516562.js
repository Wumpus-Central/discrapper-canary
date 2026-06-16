"use strict";
n.d(t, { A: () => _ });
var i = n(439372),
    r = n(710195),
    s = n(723702);
let a = (0, n(945810).mj)({
    name: "2026-04-desktop-tti-update-backoff",
    kind: "user",
    defaultConfig: { maxBackoffMs: 3e4 },
    variations: { 1: { maxBackoffMs: 2e4 }, 2: { maxBackoffMs: 1e4 }, 3: { maxBackoffMs: 3e3 } },
});
function o(e) {
    let { location: t } = e;
    return a.getConfig({ location: t });
}
let l = !1,
    u = null;
async function c() {
    if (!(0, s.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let { maxBackoffMs: e } = o({ location: "updateSwitch" }),
        t = "DESKTOP_TTI_UPDATE_BACKOFF_MAX_MS";
    e !== (await window.DiscordNative.settings.get(t, 3e4)) && (await window.DiscordNative.settings.set(t, e)), (u = e);
}
class d extends i.A {
    stores = new Map().set(r.A, () => {
        if (l) {
            let { maxBackoffMs: e } = o({ location: "experimentStoreUpdate" });
            u !== e && c();
        }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            l || window.DiscordNative?.settings?.set == null || ((0, s.isDesktop)() && ((l = !0), await c()));
        },
        LOGOUT: () => {
            (l = !1), (u = null);
        },
    };
}
let _ = new d();
