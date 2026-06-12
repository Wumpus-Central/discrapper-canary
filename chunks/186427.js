"use strict";
n.d(t, { A: () => _ });
var i = n(439372),
    r = n(710195),
    s = n(723702);
let a = (0, n(945810).mj)({
    name: "2026-04-overlay-fps-limit",
    kind: "user",
    defaultConfig: { overlayFPSLimit: void 0, mainWindowFPSLimit: void 0 },
    variations: {
        1: { overlayFPSLimit: 60, mainWindowFPSLimit: void 0 },
        2: { overlayFPSLimit: 30, mainWindowFPSLimit: void 0 },
        3: { overlayFPSLimit: 30, mainWindowFPSLimit: 30 },
    },
});
function o(e) {
    let { location: t } = e;
    return a.getConfig({ location: t });
}
let l = !1,
    u = null;
function c() {
    (0, s.isWindows)() && (u = o({ location: "updateSwitch" }));
}
class d extends i.A {
    stores = new Map().set(r.A, () => {
        if (l) {
            let e = o({ location: "experimentStoreUpdate" });
            u !== e && c();
        }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            l || ((0, s.isWindows)() && ((l = !0), await c()));
        },
        LOGOUT: () => {
            (l = !1), (u = null);
        },
    };
    getOverlayFPSLimit() {
        return u?.overlayFPSLimit;
    }
    getMainWindowFPSLimit() {
        return u?.mainWindowFPSLimit;
    }
}
let _ = new d();
