n.d(t, { A: () => _ });
var i = n(439372),
    r = n(710195),
    a = n(723702);
let s = (0, n(945810).mj)({
    name: "2026-04-overlay-fps-limit",
    kind: "user",
    defaultConfig: { overlayFPSLimit: void 0, mainWindowFPSLimit: void 0 },
    variations: {
        1: { overlayFPSLimit: 60, mainWindowFPSLimit: void 0 },
        2: { overlayFPSLimit: 30, mainWindowFPSLimit: void 0 },
        3: { overlayFPSLimit: 30, mainWindowFPSLimit: 30 },
    },
});
function l(e) {
    let { location: t } = e;
    return s.getConfig({ location: t });
}
let o = !1,
    d = null;
function c() {
    (0, a.isWindows)() && (d = l({ location: "updateSwitch" }));
}
class u extends i.A {
    stores = new Map().set(r.A, () => {
        if (o) {
            let e = l({ location: "experimentStoreUpdate" });
            d !== e && c();
        }
    });
    actions = {
        POST_CONNECTION_OPEN: async () => {
            o || ((0, a.isWindows)() && ((o = !0), await c()));
        },
        LOGOUT: () => {
            (o = !1), (d = null);
        },
    };
    getOverlayFPSLimit() {
        return d?.overlayFPSLimit;
    }
    getMainWindowFPSLimit() {
        return d?.mainWindowFPSLimit;
    }
}
let _ = new u();
