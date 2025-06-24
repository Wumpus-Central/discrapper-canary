n.d(t, { Z: () => L });
var r,
    i = n(442837),
    a = n(780384),
    o = n(570140),
    s = n(607070),
    l = n(514361),
    c = n(541049),
    u = n(765287),
    d = n(49214),
    f = n(238514),
    _ = n(740492),
    p = n(581883),
    h = n(874893),
    m = n(981631);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = 0,
    v = h.K2,
    I = (0, c.Z)(),
    T = v[I];
function S() {
    return (0, u.Z)(I, v, T);
}
function A() {
    let e = S();
    return e === T || ((T = e), (0, d.Z)(T), !0);
}
class N extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (null == e ? void 0 : e.theme) != null && ((O = 1), (T = e.theme), (0, d.Z)(T), null != e.preferences && (v = e.preferences), (0, a.wj)(T) && (v[h.zd.DARK] = T)), this.waitFor(_.ZP, f.Z, p.Z, s.Z);
    }
    getState() {
        return {
            theme: this.theme,
            preferences: v,
            status: O
        };
    }
    get darkSidebar() {
        return (0, a.ap)(this.theme) && _.ZP.darkSidebar && null == l.Z.gradientPreset;
    }
    get theme() {
        return S();
    }
    get systemTheme() {
        return I;
    }
    themePreferenceForSystemTheme(e) {
        return v[e];
    }
}
function C() {
    return 0 === O && ((v = y(E({}, v), { [h.zd.DARK]: m.BRd.DARKER })), (O = 1)), A();
}
function R() {
    return (0, a.ap)(S());
}
function P(e) {
    return !e.isSwitchingAccount && T !== m.BRd.DARK && ((T = m.BRd.DARK), (0, d.Z)(T), A());
}
function w(e) {
    let { systemTheme: t } = e;
    return (I = t), A();
}
function D(e) {
    return (v = E({}, v, e.preferences)), A();
}
g(N, 'displayName', 'ThemeStore'),
    g(N, 'persistKey', 'ThemeStore'),
    g(N, 'migrations', [
        (e) => {
            let t = e.theme;
            return 'amoled' === t && (t = 'midnight'), y(E({}, e), { theme: t });
        },
        (e) => e
    ]);
let L = new N(o.Z, {
    CACHE_LOADED: A,
    CONNECTION_OPEN: C,
    LOGOUT: P,
    OVERLAY_INITIALIZE: A,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: A,
    UNSYNCED_USER_SETTINGS_UPDATE: A,
    USER_SETTINGS_PROTO_UPDATE: A,
    RESET_PREVIEW_CLIENT_THEME: A,
    SYSTEM_THEME_CHANGE: w,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: R,
    UPDATE_THEME_PREFERENCES: D
});
