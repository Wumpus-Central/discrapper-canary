"use strict";
n.d(t, { A: () => v });
var i = n(17928),
    r = n(462887),
    a = n(228366),
    s = n(677313),
    l = n(873298),
    o = n(775602),
    d = n(644235),
    c = n(284016),
    u = n(742023),
    _ = n(617617),
    E = n(652215),
    A = n(185928),
    h = n(661531),
    I = n(353835),
    f = n(723702);
function p(e) {
    if (!__OVERLAY__ && f.isPlatformEmbedded)
        try {
            let t = h.A.colors.BACKGROUND_BASE_LOWEST.resolve({ theme: e, saturation: o.Ay.saturation }).hex();
            I.A.setApplicationBackgroundColor(t);
        } catch {}
}
var T = n(594061),
    m = n(355097);
let g = 0,
    S = A.qj,
    N = (0, s.A)(),
    C = S[N],
    O = null,
    R = {},
    L = !1;
function D() {
    let e =
        __OVERLAY__ || null == O
            ? (function (e, t) {
                  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                  if (__OVERLAY__) return E.NJ8.DARK;
                  let i = A.dP;
                  if (o.Ay.syncForcedColors && "active" === o.Ay.systemForcedColors && e !== A.Fc.NO_PREFERENCE)
                      return e;
                  let r = c.A.getAppearanceSettings(),
                      a = r?.theme,
                      s = _.A.settings.appearance,
                      h =
                          null != r
                              ? r.clientThemeSettings?.customUserThemeSettings
                              : s?.clientThemeSettings?.customUserThemeSettings;
                  return u.Ay.useSystemTheme === A.Q_.ON && e !== A.Fc.NO_PREFERENCE
                      ? n
                          ? t[e]
                          : (0, d.GX)(t[e], h)
                      : null != a
                        ? (0, d.GX)(a, r?.clientThemeSettings?.customUserThemeSettings)
                        : (0, d.GX)(i[s?.theme ?? l.Sx.UNSET], s?.clientThemeSettings?.customUserThemeSettings);
              })(N, S, L)
            : O;
    return e !== C && (p((C = e)), !0);
}
class y extends i.Ay.PersistedStore {
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
            ((g = 1),
            p((C = e.theme)),
            null != e.preferences && (S = e.preferences),
            null != e.syncedClientThemes && (R = e.syncedClientThemes),
            null != e.syncedThemesEnabled && (L = e.syncedThemesEnabled),
            (0, r.M)(C) && (S[A.Fc.DARK] = C)),
            this.waitFor(u.Ay, c.A, _.A);
    }
    getState() {
        return { theme: this.theme, preferences: S, syncedClientThemes: R, syncedThemesEnabled: L, status: g };
    }
    get theme() {
        return C;
    }
    get systemTheme() {
        return N;
    }
    themePreferenceForSystemTheme(e) {
        return S[e];
    }
    getSyncedClientTheme(e) {
        return R[e];
    }
    isSameAsDeviceThemeEnabled() {
        return L;
    }
}
let v = new y(a.h, {
    CACHE_LOADED: D,
    CONNECTION_OPEN: function () {
        return (
            0 === g && ((S = { ...S, [A.Fc.DARK]: E.NJ8.DARKER }), (g = 1)),
            u.Ay.darkSidebar &&
                (_.A.settings.appearance?.darkSidebar ||
                    T.wc.updateAsync(
                        "appearance",
                        (e) => {
                            e.darkSidebar = !0;
                        },
                        m.Sb.INFREQUENT_USER_ACTION,
                    ),
                a.h.wait(() => {
                    a.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { darkSidebar: !1 } });
                })),
            D()
        );
    },
    LOGOUT: function (e) {
        return (O = null), (R = {}), (L = !1), !e.isSwitchingAccount && C !== E.NJ8.DARK && (p((C = E.NJ8.DARK)), D());
    },
    OVERLAY_INITIALIZE: D,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function (e) {
        return null != e.changes.appearance && (O = null), D();
    },
    UNSYNCED_USER_SETTINGS_UPDATE: D,
    USER_SETTINGS_PROTO_UPDATE: D,
    RESET_PREVIEW_CLIENT_THEME: D,
    SYSTEM_THEME_CHANGE: function (e) {
        let { systemTheme: t } = e;
        return (N = t), D();
    },
    UPDATE_THEME_PREFERENCES: function (e) {
        return (S = { ...S, ...e.preferences }), D();
    },
    UPDATE_SYNCED_CLIENT_THEME: function (e) {
        return (R = { ...R, [e.systemTheme]: e.clientTheme }), !0;
    },
    SET_SAME_AS_DEVICE_THEME_ENABLED: function (e) {
        return L !== e.enabled && ((L = e.enabled), !0);
    },
    CLEAR_SYNCED_CLIENT_THEMES: function () {
        let e = L || null != R[A.Fc.LIGHT] || null != R[A.Fc.DARK];
        return (R = {}), (L = !1), e;
    },
    SET_THEME_OVERRIDE: function (e) {
        return (O = e.theme), D();
    },
    CLEAR_THEME_OVERRIDE: function () {
        return (O = null), D();
    },
    REFRESH_THEME: function () {
        return D();
    },
});
