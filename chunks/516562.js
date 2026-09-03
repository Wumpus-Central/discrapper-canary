n.d(t, { A: () => _ });
var i = n(439372),
    r = n(710195),
    a = n(723702);
let s = (0, n(945810).mj)({
    name: "2026-04-desktop-tti-update-backoff",
    kind: "user",
    defaultConfig: { maxBackoffMs: 3e4 },
    variations: { 1: { maxBackoffMs: 2e4 }, 2: { maxBackoffMs: 1e4 }, 3: { maxBackoffMs: 3e3 } },
});
function l(e) {
    let { location: t } = e;
    return s.getConfig({ location: t });
}
let o = !1,
    d = null;
async function c() {
    if (!(0, a.isDesktop)() || window.DiscordNative?.settings?.set == null) return;
    let { maxBackoffMs: e } = l({ location: "updateSwitch" }),
        t = "DESKTOP_TTI_UPDATE_BACKOFF_MAX_MS";
    e !== (await window.DiscordNative.settings.get(t, 3e4)) && (await window.DiscordNative.settings.set(t, e)), (d = e);
}
class u extends i.A {
    stores = new Map().set(r.A, () => {
        if (o) {
            let { maxBackoffMs: e } = l({ location: "experimentStoreUpdate" });
            d !== e && c();
        }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            o || window.DiscordNative?.settings?.set == null || ((0, a.isDesktop)() && ((o = !0), await c()));
        },
        LOGOUT: () => {
            (o = !1), (d = null);
        },
    };
}
let _ = new u();
