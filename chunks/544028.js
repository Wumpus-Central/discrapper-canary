"use strict";
n.d(t, { A: () => L });
var r = n(311907),
    i = n(582754),
    a = n(73153),
    s = n(775602),
    o = n(677313),
    l = n(403528),
    u = n(997579),
    c = n(284016),
    d = n(964404),
    _ = n(617617),
    f = n(185928),
    p = n(652215);
let h = 0,
    m = f.qj,
    g = (0, o.A)(),
    E = m[g],
    A = null;
function I() {
    return __OVERLAY__ || null == A ? (0, l.A)(g, m) : A;
}
function T() {
    let e = I();
    return e !== E && ((E = e), (0, u.A)(E), !0);
}
class y extends r.Ay.PersistedStore {
    static displayName = "ThemeStore";
    static persistKey = "ThemeStore";
    static migrations = [
        (e) => {
            let t = e.theme;
            return "amoled" === t && (t = "midnight"), { ...e, theme: t };
        },
        (e) => e,
    ];
    initialize(e) {
        e?.theme != null &&
            ((h = 1),
            (E = e.theme),
            (0, u.A)(E),
            null != e.preferences && (m = e.preferences),
            (0, i.Mw)(E) && (m[f.Fc.DARK] = E)),
            this.waitFor(d.Ay, c.A, _.A, s.A);
    }
    getState() {
        return { theme: this.theme, preferences: m, status: h };
    }
    get theme() {
        return E;
    }
    get systemTheme() {
        return g;
    }
    themePreferenceForSystemTheme(e) {
        return m[e];
    }
}
function S() {
    return 0 === h && ((m = { ...m, [f.Fc.DARK]: p.NJ8.DARKER }), (h = 1)), T();
}
function v() {
    return (0, i.qB)(I());
}
function C(e) {
    return (A = null), !e.isSwitchingAccount && E !== p.NJ8.DARK && ((E = p.NJ8.DARK), (0, u.A)(E), T());
}
function b(e) {
    let { systemTheme: t } = e;
    return (g = t), T();
}
function N(e) {
    return (m = { ...m, ...e.preferences }), T();
}
function R(e) {
    return (A = e.theme), T();
}
function O() {
    return (A = null), T();
}
function D() {
    return T();
}
let L = new y(a.h, {
    CACHE_LOADED: T,
    CONNECTION_OPEN: S,
    LOGOUT: C,
    OVERLAY_INITIALIZE: T,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: T,
    UNSYNCED_USER_SETTINGS_UPDATE: T,
    USER_SETTINGS_PROTO_UPDATE: T,
    RESET_PREVIEW_CLIENT_THEME: T,
    SYSTEM_THEME_CHANGE: b,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: v,
    UPDATE_THEME_PREFERENCES: N,
    SET_THEME_OVERRIDE: R,
    CLEAR_THEME_OVERRIDE: O,
    REFRESH_THEME: D,
});
