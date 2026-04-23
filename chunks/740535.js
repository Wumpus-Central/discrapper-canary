"use strict";
n.d(t, { A: () => c });
var i = n(439372),
    r = n(710195),
    s = n(723702);
let a = (0, n(945810).mj)({
    name: "2026-04-rust-bs-patch",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function o(e) {
    let { location: t } = e;
    return a.getConfig({ location: t });
}
let l = !1,
    d = null;
async function _() {
    if (
        (0, s.isWindows)() &&
        window.DiscordNative?.settings?.set != null &&
        (window.DiscordNative.nativeModules.getUpdaterVersion?.() ?? 0) >= 4
    ) {
        let { enabled: e } = o({ location: "updateSwitch" });
        await window.DiscordNative.settings.set("USE_RUST_BSPATCH", e), (d = e);
    }
}
class u extends i.A {
    stores = new Map().set(r.A, () => {
        if (l) {
            let { enabled: e } = o({ location: "experimentStoreUpdate" });
            d !== e && _();
        }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            l || window.DiscordNative?.settings?.set == null || ((0, s.isWindows)() && ((l = !0), await _()));
        },
        LOGOUT: () => {
            (l = !1), (d = null);
        },
    };
}
let c = new u();
