n.d(t, { Z: () => M });
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
    p = n(581883),
    _ = n(874893),
    m = n(981631);
function h(e, t, n) {
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
                h(e, t, n[t]);
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
    O = _.K2,
    v = (0, l.Z)(),
    S = O[v],
    I = null;
function T() {
    return __OVERLAY__ || null == I ? (0, c.Z)(v, O, S) : I;
}
function C() {
    let e = T();
    return e !== S && ((S = e), (0, u.Z)(S), !0);
}
class A extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (null == e ? void 0 : e.theme) != null &&
            ((y = 1),
            (S = e.theme),
            (0, u.Z)(S),
            null != e.preferences && (O = e.preferences),
            (0, a.wj)(S) && (O[_.zd.DARK] = S)),
            this.waitFor(f.ZP, d.Z, p.Z, s.Z);
    }
    getState() {
        return {
            theme: this.theme,
            preferences: O,
            status: y,
        };
    }
    get theme() {
        return S;
    }
    get systemTheme() {
        return v;
    }
    themePreferenceForSystemTheme(e) {
        return O[e];
    }
}
function N() {
    return 0 === y && ((O = b(g({}, O), { [_.zd.DARK]: m.BRd.DARKER })), (y = 1)), C();
}
function P() {
    return (0, a.ap)(T());
}
function R(e) {
    return (I = null), !e.isSwitchingAccount && S !== m.BRd.DARK && ((S = m.BRd.DARK), (0, u.Z)(S), C());
}
function D(e) {
    let { systemTheme: t } = e;
    return (v = t), C();
}
function w(e) {
    return (O = g({}, O, e.preferences)), C();
}
function x(e) {
    return (I = e.theme), C();
}
function L() {
    return (I = null), C();
}
function j() {
    return C();
}
h(A, "displayName", "ThemeStore"),
    h(A, "persistKey", "ThemeStore"),
    h(A, "migrations", [
        (e) => {
            let t = e.theme;
            return "amoled" === t && (t = "midnight"), b(g({}, e), { theme: t });
        },
        (e) => e,
    ]);
let M = new A(o.Z, {
    CACHE_LOADED: C,
    CONNECTION_OPEN: N,
    LOGOUT: R,
    OVERLAY_INITIALIZE: C,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: C,
    UNSYNCED_USER_SETTINGS_UPDATE: C,
    USER_SETTINGS_PROTO_UPDATE: C,
    RESET_PREVIEW_CLIENT_THEME: C,
    SYSTEM_THEME_CHANGE: D,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: P,
    UPDATE_THEME_PREFERENCES: w,
    SET_THEME_OVERRIDE: x,
    CLEAR_THEME_OVERRIDE: L,
    REFRESH_THEME: j,
});
