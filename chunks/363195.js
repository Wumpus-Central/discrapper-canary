"use strict";
n.d(t, { A: () => y });
var i = n(17928),
    r = n(462887),
    a = n(228366),
    s = n(677313),
    l = n(873298),
    o = n(775602),
    d = n(284016),
    c = n(742023),
    u = n(617617),
    _ = n(652215),
    E = n(185928),
    A = n(661531),
    h = n(353835),
    I = n(723702);
function f(e) {
    if (!__OVERLAY__ && I.isPlatformEmbedded)
        try {
            let t = A.A.colors.BACKGROUND_BASE_LOWEST.resolve({ theme: e, saturation: o.Ay.saturation }).hex();
            h.A.setApplicationBackgroundColor(t);
        } catch {}
}
var p = n(594061),
    T = n(355097);
let m = 0,
    g = E.qj,
    S = (0, s.A)(),
    N = g[S],
    C = null,
    R = {},
    O = !1;
function L() {
    let e = (function () {
        if (!__OVERLAY__ && null != C) return C;
        var e = S,
            t = g;
        if (__OVERLAY__) return _.NJ8.DARK;
        let n = E.dP;
        if (o.Ay.syncForcedColors && "active" === o.Ay.systemForcedColors && e !== E.Fc.NO_PREFERENCE) return e;
        if (c.Ay.useSystemTheme === E.Q_.ON && e !== E.Fc.NO_PREFERENCE) return t[e];
        let i = d.A.getAppearanceSettings()?.theme;
        return null != i ? i : n[u.A.settings.appearance?.theme ?? l.Sx.UNSET];
    })();
    return e !== N && (f((N = e)), !0);
}
class D extends i.Ay.PersistedStore {
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
            ((m = 1),
            f((N = e.theme)),
            null != e.preferences && (g = e.preferences),
            null != e.syncedClientThemes && (R = e.syncedClientThemes),
            null != e.syncedThemesEnabled && (O = e.syncedThemesEnabled),
            (0, r.M)(N) && (g[E.Fc.DARK] = N)),
            this.waitFor(c.Ay, d.A, u.A);
    }
    getState() {
        return { theme: this.theme, preferences: g, syncedClientThemes: R, syncedThemesEnabled: O, status: m };
    }
    get theme() {
        return N;
    }
    get systemTheme() {
        return S;
    }
    themePreferenceForSystemTheme(e) {
        return g[e];
    }
    getSyncedClientTheme(e) {
        return R[e];
    }
    isSameAsDeviceThemeEnabled() {
        return O;
    }
}
let y = new D(a.h, {
    CACHE_LOADED: L,
    CONNECTION_OPEN: function () {
        return (
            0 === m && ((g = { ...g, [E.Fc.DARK]: _.NJ8.DARKER }), (m = 1)),
            c.Ay.darkSidebar &&
                (u.A.settings.appearance?.darkSidebar ||
                    p.wc.updateAsync(
                        "appearance",
                        (e) => {
                            e.darkSidebar = !0;
                        },
                        T.Sb.INFREQUENT_USER_ACTION,
                    ),
                a.h.wait(() => {
                    a.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { darkSidebar: !1 } });
                })),
            L()
        );
    },
    LOGOUT: function (e) {
        return (C = null), (R = {}), (O = !1), !e.isSwitchingAccount && N !== _.NJ8.DARK && (f((N = _.NJ8.DARK)), L());
    },
    OVERLAY_INITIALIZE: L,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function (e) {
        return null != e.changes.appearance && (C = null), L();
    },
    UNSYNCED_USER_SETTINGS_UPDATE: L,
    USER_SETTINGS_PROTO_UPDATE: L,
    RESET_PREVIEW_CLIENT_THEME: L,
    SYSTEM_THEME_CHANGE: function (e) {
        let { systemTheme: t } = e;
        return (S = t), L();
    },
    UPDATE_THEME_PREFERENCES: function (e) {
        return (g = { ...g, ...e.preferences }), L();
    },
    UPDATE_SYNCED_CLIENT_THEME: function (e) {
        return (R = { ...R, [e.systemTheme]: e.clientTheme }), !0;
    },
    SET_SAME_AS_DEVICE_THEME_ENABLED: function (e) {
        return O !== e.enabled && ((O = e.enabled), !0);
    },
    CLEAR_SYNCED_CLIENT_THEMES: function () {
        let e = O || null != R[E.Fc.LIGHT] || null != R[E.Fc.DARK];
        return (R = {}), (O = !1), e;
    },
    SET_THEME_OVERRIDE: function (e) {
        return (C = e.theme), L();
    },
    CLEAR_THEME_OVERRIDE: function () {
        return (C = null), L();
    },
    REFRESH_THEME: function () {
        return L();
    },
});
