"use strict";
n.d(t, { A: () => y });
var r = n(311907),
    i = n(462887),
    s = n(73153),
    a = n(775602),
    o = n(677313),
    l = n(403528),
    u = n(997579),
    c = n(284016),
    d = n(964404),
    _ = n(617617),
    f = n(185928),
    p = n(652215);
let h = 0,
    E = f.qj,
    m = (0, o.A)(),
    g = E[m],
    A = null;
function I() {
    return __OVERLAY__ || null == A ? (0, l.A)(m, E) : A;
}
function T() {
    let e = I();
    return e !== g && ((g = e), (0, u.A)(g), !0);
}
class S extends r.Ay.PersistedStore {
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
            (g = e.theme),
            (0, u.A)(g),
            null != e.preferences && (E = e.preferences),
            (0, i.M)(g) && (E[f.Fc.DARK] = g)),
            this.waitFor(d.Ay, c.A, _.A, a.A);
    }
    getState() {
        return { theme: this.theme, preferences: E, status: h };
    }
    get theme() {
        return g;
    }
    get systemTheme() {
        return m;
    }
    themePreferenceForSystemTheme(e) {
        return E[e];
    }
}
let y = new S(s.h, {
    CACHE_LOADED: T,
    CONNECTION_OPEN: function () {
        return 0 === h && ((E = { ...E, [f.Fc.DARK]: p.NJ8.DARKER }), (h = 1)), T();
    },
    LOGOUT: function (e) {
        return (A = null), !e.isSwitchingAccount && g !== p.NJ8.DARK && ((g = p.NJ8.DARK), (0, u.A)(g), T());
    },
    OVERLAY_INITIALIZE: T,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: T,
    UNSYNCED_USER_SETTINGS_UPDATE: T,
    USER_SETTINGS_PROTO_UPDATE: T,
    RESET_PREVIEW_CLIENT_THEME: T,
    SYSTEM_THEME_CHANGE: function (e) {
        let { systemTheme: t } = e;
        return (m = t), T();
    },
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function () {
        return (0, i.q)(I());
    },
    UPDATE_THEME_PREFERENCES: function (e) {
        return (E = { ...E, ...e.preferences }), T();
    },
    SET_THEME_OVERRIDE: function (e) {
        return (A = e.theme), T();
    },
    CLEAR_THEME_OVERRIDE: function () {
        return (A = null), T();
    },
    REFRESH_THEME: function () {
        return T();
    },
});
