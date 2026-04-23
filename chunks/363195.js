"use strict";
n.d(t, { A: () => O });
var i = n(17928),
    r = n(462887),
    s = n(228366),
    a = n(775602),
    o = n(677313),
    l = n(873298),
    d = n(284016),
    _ = n(964404),
    u = n(617617),
    c = n(652215),
    E = n(185928),
    h = n(661531),
    m = n(353835),
    f = n(723702);
function g(e) {
    if (!__OVERLAY__ && f.isPlatformEmbedded)
        try {
            let t = h.A.colors.BACKGROUND_BASE_LOWEST.resolve({ theme: e, saturation: a.A.saturation }).hex();
            m.A.setApplicationBackgroundColor(t);
        } catch {}
}
let p = 0,
    A = E.qj,
    I = (0, o.A)(),
    T = A[I],
    S = null;
function N() {
    if (!__OVERLAY__ && null != S) return S;
    var e = I,
        t = A;
    if (__OVERLAY__) return c.NJ8.DARK;
    let n = E.dP;
    if (a.A.syncForcedColors && "active" === a.A.systemForcedColors && e !== E.Fc.NO_PREFERENCE) return e;
    if (_.Ay.useSystemTheme === E.Q_.ON && e !== E.Fc.NO_PREFERENCE) return t[e];
    let i = d.A.getAppearanceSettings()?.theme;
    return null != i ? i : n[u.A.settings.appearance?.theme ?? l.Sx.UNSET];
}
function C() {
    let e = N();
    return e !== T && (g((T = e)), !0);
}
class R extends i.Ay.PersistedStore {
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
            ((p = 1),
            g((T = e.theme)),
            null != e.preferences && (A = e.preferences),
            (0, r.M)(T) && (A[E.Fc.DARK] = T)),
            this.waitFor(_.Ay, d.A, u.A, a.A);
    }
    getState() {
        return { theme: this.theme, preferences: A, status: p };
    }
    get theme() {
        return T;
    }
    get systemTheme() {
        return I;
    }
    themePreferenceForSystemTheme(e) {
        return A[e];
    }
}
let O = new R(s.h, {
    CACHE_LOADED: C,
    CONNECTION_OPEN: function () {
        return 0 === p && ((A = { ...A, [E.Fc.DARK]: c.NJ8.DARKER }), (p = 1)), C();
    },
    LOGOUT: function (e) {
        return (S = null), !e.isSwitchingAccount && T !== c.NJ8.DARK && (g((T = c.NJ8.DARK)), C());
    },
    OVERLAY_INITIALIZE: C,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: C,
    UNSYNCED_USER_SETTINGS_UPDATE: C,
    USER_SETTINGS_PROTO_UPDATE: C,
    RESET_PREVIEW_CLIENT_THEME: C,
    SYSTEM_THEME_CHANGE: function (e) {
        let { systemTheme: t } = e;
        return (I = t), C();
    },
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function () {
        return (0, r.q)(N());
    },
    UPDATE_THEME_PREFERENCES: function (e) {
        return (A = { ...A, ...e.preferences }), C();
    },
    SET_THEME_OVERRIDE: function (e) {
        return (S = e.theme), C();
    },
    CLEAR_THEME_OVERRIDE: function () {
        return (S = null), C();
    },
    REFRESH_THEME: function () {
        return C();
    },
});
