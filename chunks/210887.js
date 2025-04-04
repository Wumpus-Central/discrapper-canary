n.d(t, { Z: () => x });
var r,
    i = n(442837),
    o = n(780384),
    a = n(570140),
    s = n(607070),
    l = n(514361),
    c = n(540059),
    u = n(541049),
    d = n(765287),
    f = n(49214),
    _ = n(238514),
    p = n(740492),
    h = n(581883),
    m = n(874893),
    g = n(981631);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = 0,
    I = (0, c.O_)('ThemeStore') ? m.K2 : m.o5,
    S = (0, u.Z)(),
    T = I[S];
function N() {
    return (0, d.Z)(S, I);
}
function A() {
    let e = N();
    return e === T || ((T = e), (0, f.Z)(T), !0);
}
class C extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (null == e ? void 0 : e.theme) != null && ((O = 1), (T = e.theme), (0, f.Z)(T), null != e.preferences && (I = e.preferences), (0, o.wj)(T) && (I[m.zd.DARK] = T)), this.waitFor(p.ZP, _.Z, h.Z, s.Z);
    }
    getState() {
        return {
            theme: this.theme,
            preferences: I,
            status: O
        };
    }
    get darkSidebar() {
        return (0, o.ap)(this.theme) && p.ZP.darkSidebar && null == l.Z.gradientPreset;
    }
    get theme() {
        return N();
    }
    get systemTheme() {
        return S;
    }
    themePreferenceForSystemTheme(e) {
        return I[e];
    }
}
function R() {
    return (0, c.O_)('ThemeStore') && 0 === O && ((I = v(b({}, I), { [m.zd.DARK]: g.BRd.DARKER })), (O = 1)), A();
}
function P() {
    return (0, o.ap)(N());
}
function w(e) {
    return !e.isSwitchingAccount && T !== g.BRd.DARK && ((T = g.BRd.DARK), (0, f.Z)(T), A());
}
function D(e) {
    let { systemTheme: t } = e;
    return (S = t), A();
}
function L(e) {
    return (I = b({}, I, e.preferences)), A();
}
E(C, 'displayName', 'ThemeStore'),
    E(C, 'persistKey', 'ThemeStore'),
    E(C, 'migrations', [
        (e) => {
            let t = e.theme;
            return 'amoled' === t && (t = 'midnight'), v(b({}, e), { theme: t });
        },
        (e) => e
    ]);
let x = new C(a.Z, {
    CACHE_LOADED: A,
    CONNECTION_OPEN: R,
    LOGOUT: w,
    OVERLAY_INITIALIZE: A,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: A,
    UNSYNCED_USER_SETTINGS_UPDATE: A,
    USER_SETTINGS_PROTO_UPDATE: A,
    RESET_PREVIEW_CLIENT_THEME: A,
    SYSTEM_THEME_CHANGE: D,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: P,
    UPDATE_THEME_PREFERENCES: L
});
