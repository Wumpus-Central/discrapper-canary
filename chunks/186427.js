"use strict";
n.d(t, { A: () => c });
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
    _ = null;
function d() {
    (0, s.isWindows)() && (_ = o({ location: "updateSwitch" }));
}
class u extends i.A {
    stores = new Map().set(r.A, () => {
        if (l) {
            let e = o({ location: "experimentStoreUpdate" });
            _ !== e && d();
        }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            l || ((0, s.isWindows)() && ((l = !0), await d()));
        },
        LOGOUT: () => {
            (l = !1), (_ = null);
        },
    };
    getOverlayFPSLimit() {
        return _?.overlayFPSLimit;
    }
    getMainWindowFPSLimit() {
        return _?.mainWindowFPSLimit;
    }
}
let c = new u();
