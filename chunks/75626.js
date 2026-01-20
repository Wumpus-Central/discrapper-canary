n.d(t, { Z: () => f }), n(388685);
var r = n(147913),
    i = n(633289),
    a = n(358085),
    o = n(232850);
function s(e, t, n) {
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
let l = !1,
    c = null;
async function u() {
    var e, t;
    if (
        (0, a.isWindows)() &&
        (null == (t = window.DiscordNative) || null == (e = t.settings) ? void 0 : e.set) != null
    ) {
        let { enabled: e } = (0, o.F)({ location: "updateSwitch" });
        await window.DiscordNative.settings.set("enableH264MFElectron", e), (c = e);
    }
}
class d extends r.Z {
    constructor(...e) {
        super(...e),
            s(
                this,
                "stores",
                new Map().set(i.Z, () => {
                    if (l) {
                        let { enabled: e } = (0, o.F)({ location: "experimentStoreUpdate" });
                        c !== e && u();
                    }
                }),
            ),
            s(this, "actions", {
                POST_CONNECTION_OPEN: async () => {
                    var e, t;
                    !l &&
                        (null == (t = window.DiscordNative) || null == (e = t.settings) ? void 0 : e.set) != null &&
                        (0, a.isWindows)() &&
                        ((l = !0), await u());
                },
                LOGOUT: () => {
                    (l = !1), (c = null);
                },
            });
    }
}
let f = new d();
