n.d(t, { A: () => x });
var i = n(956759),
    r = n.n(i),
    a = n(855986),
    s = n(462887),
    l = n(73153),
    o = n(677313),
    d = n(873298),
    c = n(775602),
    u = n(644235),
    _ = n(284016),
    E = n(964404),
    A = n(617617),
    f = n(652215),
    h = n(185928),
    I = n(646514),
    p = n(353835),
    m = n(723702);
function T(e) {
    if (!__OVERLAY__ && m.isPlatformEmbedded)
        try {
            let t = I.A.colors.BACKGROUND_BASE_LOWEST.resolve({ theme: e, saturation: c.Ay.saturation }).hex();
            p.A.setApplicationBackgroundColor(t);
        } catch {}
}
var g = n(594061),
    S = n(355097);
let N = 0,
    C = new Set(Object.values(f.NJ8)),
    O = h.qj;
function R(e) {
    return "string" == typeof e && C.has(e);
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.NJ8.DARK;
    return R(e) ? e : t;
}
function y(e) {
    return r()(O, (t, n) => {
        let i = e[n];
        return R(i) ? i : t;
    });
}
let D = { ...O },
    b = (0, o.A)(),
    v = D[b],
    P = null,
    M = {},
    U = !1;
function w() {
    let e =
        __OVERLAY__ || null == P
            ? L(
                  (function (e, t) {
                      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                      if (__OVERLAY__) return f.NJ8.DARK;
                      let i = h.dP;
                      if (c.Ay.syncForcedColors && "active" === c.Ay.systemForcedColors && e !== h.Fc.NO_PREFERENCE)
                          return t[e];
                      let r = _.A.getAppearanceSettings(),
                          a = r?.theme,
                          s = A.A.settings.appearance,
                          l =
                              null != r
                                  ? r.clientThemeSettings?.customUserThemeSettings
                                  : s?.clientThemeSettings?.customUserThemeSettings;
                      return E.Ay.useSystemTheme === h.Q_.ON && e !== h.Fc.NO_PREFERENCE
                          ? n
                              ? t[e]
                              : (0, u.GX)(t[e], l)
                          : null != a
                            ? (0, u.GX)(a, r?.clientThemeSettings?.customUserThemeSettings)
                            : (0, u.GX)(i[s?.theme ?? d.Sx.UNSET], s?.clientThemeSettings?.customUserThemeSettings);
                  })(b, D, U),
              )
            : L(P);
    return e !== v && (T((v = e)), !0);
}
class G extends a.Ay.PersistedStore {
    static displayName = "ThemeStore";
    static persistKey = "ThemeStore";
    static migrations = [
        (e) => {
            let t = "amoled" === e.theme ? f.NJ8.ONYX : e.theme;
            return { ...e, theme: t };
        },
        (e) => e,
        (e) => {
            let t = null == e.preferences ? e.preferences : y(e.preferences),
                n = null == e.theme ? e.theme : L(e.theme, t?.[h.Fc.DARK]);
            return { ...e, theme: n, preferences: t };
        },
    ];
    initialize(e) {
        (e?.theme != null &&
            ((N = 1),
            null != e.preferences && (D = y(e.preferences)),
            T((v = L(e.theme, D[h.Fc.DARK]))),
            null != e.syncedClientThemes && (M = e.syncedClientThemes),
            null != e.syncedThemesEnabled && (U = e.syncedThemesEnabled),
            (0, s.M)(v) && (D = { ...D, [h.Fc.DARK]: v })),
            this.waitFor(E.Ay, _.A, A.A));
    }
    getState() {
        return { theme: this.theme, preferences: D, syncedClientThemes: M, syncedThemesEnabled: U, status: N };
    }
    get theme() {
        return v;
    }
    get systemTheme() {
        return b;
    }
    themePreferenceForSystemTheme(e) {
        return D[e];
    }
    getSyncedClientTheme(e) {
        return M[e];
    }
    isSameAsDeviceThemeEnabled() {
        return U;
    }
}
let x = new G(l.h, {
    CACHE_LOADED: w,
    CONNECTION_OPEN: function () {
        return (
            0 === N && ((D = { ...D, [h.Fc.DARK]: f.NJ8.DARK }), (N = 1)),
            E.Ay.darkSidebar &&
                (A.A.settings.appearance?.darkSidebar ||
                    g.wc.updateAsync(
                        "appearance",
                        (e) => {
                            e.darkSidebar = !0;
                        },
                        S.Sb.INFREQUENT_USER_ACTION,
                    ),
                l.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { darkSidebar: !1 } })),
            w()
        );
    },
    LOGOUT: function (e) {
        return (
            (P = null), (M = {}), (U = !1), !e.isSwitchingAccount && v !== f.NJ8.DARK && (T((v = f.NJ8.DARK)), w())
        );
    },
    OVERLAY_INITIALIZE: w,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function (e) {
        return (null != e.changes.appearance && (P = null), w());
    },
    UNSYNCED_USER_SETTINGS_UPDATE: w,
    USER_SETTINGS_PROTO_UPDATE: w,
    RESET_PREVIEW_CLIENT_THEME: w,
    SYSTEM_THEME_CHANGE: function (e) {
        let { systemTheme: t } = e;
        return ((b = t), w());
    },
    UPDATE_THEME_PREFERENCES: function (e) {
        return ((D = y({ ...D, ...e.preferences })), w());
    },
    UPDATE_SYNCED_CLIENT_THEME: function (e) {
        return ((M = { ...M, [e.systemTheme]: e.clientTheme }), !0);
    },
    SET_SAME_AS_DEVICE_THEME_ENABLED: function (e) {
        return U !== e.enabled && ((U = e.enabled), !0);
    },
    CLEAR_SYNCED_CLIENT_THEMES: function () {
        let e = U || null != M[h.Fc.LIGHT] || null != M[h.Fc.DARK];
        return ((M = {}), (U = !1), e);
    },
    SET_THEME_OVERRIDE: function (e) {
        return ((P = e.theme), w());
    },
    CLEAR_THEME_OVERRIDE: function () {
        return ((P = null), w());
    },
    REFRESH_THEME: function () {
        return w();
    },
});
