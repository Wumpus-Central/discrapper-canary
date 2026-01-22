n.d(t, {
    A: () => f,
}),
    n(896048);
var r = n(439372),
    i = n(217222),
    a = n(723702),
    s = n(751496);

function o(e, t, n) {
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
        let { enabled: e } = (0, s.b)({
            location: "updateSwitch",
        });
        await window.DiscordNative.settings.set("enableH264MFElectron", e), (c = e);
    }
}
class d extends r.A {
    constructor(...e) {
        super(...e),
            o(
                this,
                "stores",
                new Map().set(i.A, () => {
                    if (l) {
                        let { enabled: e } = (0, s.b)({
                            location: "experimentStoreUpdate",
                        });
                        c !== e && u();
                    }
                }),
            ),
            o(this, "actions", {
                POST_CONNECTION_OPEN: async () => {
                    var e, t;
                    l ||
                        (null == (t = window.DiscordNative) || null == (e = t.settings) ? void 0 : e.set) == null ||
                        ((0, a.isWindows)() && ((l = !0), await u()));
                },
                LOGOUT: () => {
                    (l = !1), (c = null);
                },
            });
    }
}
let f = new d();
