n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(439372),
    i = n(217222),
    a = n(353835),
    o = n(723702),
    s = n(751496);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = !1,
    u = null;
async function d() {
    var e, t;
    if (
        (0, o.isWindows)() &&
        !a.A.getAppHardwareAccelerationEnabled() &&
        (null == (t = window.DiscordNative) || null == (e = t.settings) ? void 0 : e.set) != null
    ) {
        let { enabled: e } = (0, s.b)({
            location: "updateSwitch",
        });
        await window.DiscordNative.settings.set("enableH264MFElectron", e), (u = e);
    }
}
class f extends r.A {
    constructor(...e) {
        super(...e),
            l(
                this,
                "stores",
                new Map().set(i.A, () => {
                    if (c && !a.A.getAppHardwareAccelerationEnabled()) {
                        let { enabled: e } = (0, s.b)({
                            location: "experimentStoreUpdate",
                        });
                        u !== e && d();
                    }
                }),
            ),
            l(this, "actions", {
                POST_CONNECTION_OPEN: async () => {
                    var e, t;
                    c ||
                        (null == (t = window.DiscordNative) || null == (e = t.settings) ? void 0 : e.set) == null ||
                        ((0, o.isWindows)() && ((c = !0), await d()));
                },
                LOGOUT: () => {
                    (c = !1), (u = null);
                },
            });
    }
}
let p = new f();
