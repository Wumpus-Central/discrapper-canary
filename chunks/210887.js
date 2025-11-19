n.d(t, { Z: () => k });
var r,
    i = n(442837),
    a = n(780384),
    o = n(570140),
    s = n(607070),
    l = n(541049),
    c = n(765287),
    u = n(49214),
    d = n(238514),
    f = n(740492),
    _ = n(581883),
    p = n(874893),
    h = n(981631);
function m(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 0,
    O = p.K2,
    v = (0, l.Z)(),
    I = O[v],
    T = null;
function S() {
    return __OVERLAY__ || null == T ? (0, c.Z)(v, O, I) : T;
}
function A() {
    let e = S();
    return e !== I && ((I = e), (0, u.Z)(I), !0);
}
class C extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (null == e ? void 0 : e.theme) != null &&
            ((y = 1),
            (I = e.theme),
            (0, u.Z)(I),
            null != e.preferences && (O = e.preferences),
            (0, a.wj)(I) && (O[p.zd.DARK] = I)),
            this.waitFor(f.ZP, d.Z, _.Z, s.Z);
    }
    getState() {
        return {
            theme: this.theme,
            preferences: O,
            status: y,
        };
    }
    get theme() {
        return I;
    }
    get systemTheme() {
        return v;
    }
    themePreferenceForSystemTheme(e) {
        return O[e];
    }
}
function N() {
    return 0 === y && ((O = b(g({}, O), { [p.zd.DARK]: h.BRd.DARKER })), (y = 1)), A();
}
function R() {
    return (0, a.ap)(S());
}
function P(e) {
    return (T = null), !e.isSwitchingAccount && I !== h.BRd.DARK && ((I = h.BRd.DARK), (0, u.Z)(I), A());
}
function D(e) {
    let { systemTheme: t } = e;
    return (v = t), A();
}
function w(e) {
    return (O = g({}, O, e.preferences)), A();
}
function L(e) {
    return (T = e.theme), A();
}
function x() {
    return (T = null), A();
}
function M() {
    return A();
}
m(C, "displayName", "ThemeStore"),
    m(C, "persistKey", "ThemeStore"),
    m(C, "migrations", [
        (e) => {
            let t = e.theme;
            return "amoled" === t && (t = "midnight"), b(g({}, e), { theme: t });
        },
        (e) => e,
    ]);
let k = new C(o.Z, {
    CACHE_LOADED: A,
    CONNECTION_OPEN: N,
    LOGOUT: P,
    OVERLAY_INITIALIZE: A,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: A,
    UNSYNCED_USER_SETTINGS_UPDATE: A,
    USER_SETTINGS_PROTO_UPDATE: A,
    RESET_PREVIEW_CLIENT_THEME: A,
    SYSTEM_THEME_CHANGE: D,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: R,
    UPDATE_THEME_PREFERENCES: w,
    SET_THEME_OVERRIDE: L,
    CLEAR_THEME_OVERRIDE: x,
    REFRESH_THEME: M,
});
