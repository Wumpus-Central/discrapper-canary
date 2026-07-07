"use strict";
n.d(t, { A: () => R });
var i = n(17928),
    r = n(462887),
    s = n(228366),
    a = n(677313),
    o = n(873298),
    l = n(775602),
    u = n(284016),
    c = n(742023),
    d = n(617617),
    _ = n(652215),
    h = n(185928),
    f = n(661531),
    E = n(353835),
    p = n(723702);
function m(e) {
    if (!__OVERLAY__ && p.isPlatformEmbedded)
        try {
            let t = f.A.colors.BACKGROUND_BASE_LOWEST.resolve({ theme: e, saturation: l.Ay.saturation }).hex();
            E.A.setApplicationBackgroundColor(t);
        } catch {}
}
var g = n(594061),
    A = n(355097);
let I = 0,
    T = h.qj,
    S = (0, a.A)(),
    N = T[S],
    C = null;
function y() {
    let e = (function () {
        if (!__OVERLAY__ && null != C) return C;
        var e = S,
            t = T;
        if (__OVERLAY__) return _.NJ8.DARK;
        let n = h.dP;
        if (l.Ay.syncForcedColors && "active" === l.Ay.systemForcedColors && e !== h.Fc.NO_PREFERENCE) return e;
        if (c.Ay.useSystemTheme === h.Q_.ON && e !== h.Fc.NO_PREFERENCE) return t[e];
        let i = u.A.getAppearanceSettings()?.theme;
        return null != i ? i : n[d.A.settings.appearance?.theme ?? o.Sx.UNSET];
    })();
    return e !== N && (m((N = e)), !0);
}
class O extends i.Ay.PersistedStore {
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
            ((I = 1),
            m((N = e.theme)),
            null != e.preferences && (T = e.preferences),
            (0, r.M)(N) && (T[h.Fc.DARK] = N)),
            this.waitFor(c.Ay, u.A, d.A);
    }
    getState() {
        return { theme: this.theme, preferences: T, status: I };
    }
    get theme() {
        return N;
    }
    get systemTheme() {
        return S;
    }
    themePreferenceForSystemTheme(e) {
        return T[e];
    }
}
let R = new O(s.h, {
    CACHE_LOADED: y,
    CONNECTION_OPEN: function () {
        return (
            0 === I && ((T = { ...T, [h.Fc.DARK]: _.NJ8.DARKER }), (I = 1)),
            c.Ay.darkSidebar &&
                (d.A.settings.appearance?.darkSidebar ||
                    g.wc.updateAsync(
                        "appearance",
                        (e) => {
                            e.darkSidebar = !0;
                        },
                        A.Sb.INFREQUENT_USER_ACTION,
                    ),
                s.h.wait(() => {
                    s.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { darkSidebar: !1 } });
                })),
            y()
        );
    },
    LOGOUT: function (e) {
        return (C = null), !e.isSwitchingAccount && N !== _.NJ8.DARK && (m((N = _.NJ8.DARK)), y());
    },
    OVERLAY_INITIALIZE: y,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function (e) {
        return null != e.changes.appearance && (C = null), y();
    },
    UNSYNCED_USER_SETTINGS_UPDATE: y,
    USER_SETTINGS_PROTO_UPDATE: y,
    RESET_PREVIEW_CLIENT_THEME: y,
    SYSTEM_THEME_CHANGE: function (e) {
        let { systemTheme: t } = e;
        return (S = t), y();
    },
    UPDATE_THEME_PREFERENCES: function (e) {
        return (T = { ...T, ...e.preferences }), y();
    },
    SET_THEME_OVERRIDE: function (e) {
        return (C = e.theme), y();
    },
    CLEAR_THEME_OVERRIDE: function () {
        return (C = null), y();
    },
    REFRESH_THEME: function () {
        return y();
    },
});
