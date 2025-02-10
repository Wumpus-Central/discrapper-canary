let i;
n.d(t, { Z: () => V }), n(653041);
var r,
    a,
    s = n(442837),
    o = n(524437),
    l = n(900089),
    u = n(780384),
    c = n(570140),
    d = n(607070),
    f = n(47760),
    _ = n(540059),
    p = n(541049);
n(449934);
var h = n(12647),
    m = n(358085),
    g = n(238514),
    E = n(740492),
    v = n(581883),
    y = n(874893),
    I = n(981631),
    T = n(469115);
function b(e, t, n) {
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
let S = null !== (r = (0, p.Z)()) && void 0 !== r ? r : I.BRd.DARK,
    A = null,
    N = null,
    C = !1;
function R() {
    var e, t;
    if (__OVERLAY__) return I.BRd.DARK;
    if (d.Z.syncForcedColors && 'active' === d.Z.systemForcedColors && null != i) return i;
    if (E.ZP.useSystemTheme === y.K.ON && null != i) return (0, _.O_)('ThemeStore') ? ((0, u.wj)(i) ? (null != A ? A : I.BRd.DARK) : I.BRd.LIGHT) : i;
    let n = null === (e = g.Z.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
    if (null != n) return n;
    let r = null === (t = v.Z.settings.appearance) || void 0 === t ? void 0 : t.theme;
    if (null == r) return S;
    if (!(0, _.O_)('ThemeStore')) return r === o.Q2.LIGHT ? I.BRd.LIGHT : I.BRd.DARK;
    switch (r) {
        case o.Q2.DARK:
        case o.Q2.DARKER:
            return null != A ? A : I.BRd.DARK;
        case o.Q2.LIGHT:
            return I.BRd.LIGHT;
        case o.Q2.MIDNIGHT:
            return I.BRd.MIDNIGHT;
        default:
            return I.BRd.DARK;
    }
}
function O() {
    return R();
}
function D() {
    return B();
}
function L() {
    return B();
}
function x() {
    return (0, u.ap)(O());
}
function P(e) {
    return !e.isSwitchingAccount && S !== I.BRd.DARK && ((S = I.BRd.DARK), Z(), B());
}
function w(e) {
    let { systemTheme: t } = e;
    return (N = t), B();
}
function M(e) {
    return (i = e.systemPrefersColorScheme), B();
}
function k(e) {
    var t, n;
    let { presetId: i } = e;
    S = null != i && null !== (n = null === (t = T.qt[i]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : O();
    let r = null != i;
    return C !== r ? ((C = r), !0) : G();
}
function U(e) {
    let { theme: t } = e;
    A = t;
}
function G() {
    let e = O();
    return !(0, f.qu)(S, e) && ((S = e), !0);
}
function B() {
    let e = O();
    return e !== S && (Z((S = e)), !0);
}
function Z(e) {
    if (!__OVERLAY__ && m.isPlatformEmbedded) {
        let t = [],
            n = (0, _.O_)('ThemeStore');
        n && t.push('visual-refresh');
        try {
            let i = (0, l.uJ)(n ? 'BACKGROUND_TERTIARY' : 'BACKGROUND_SECONDARY', {
                theme: null != e ? e : O(),
                saturation: d.Z.saturation,
                enabledExperiments: t
            });
            h.Z.setApplicationBackgroundColor(i);
        } catch {}
    }
}
class F extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        if ((null == e ? void 0 : e.theme) != null) {
            var t;
            Z((S = e.theme)), (A = null !== (t = e.selectedDarkTheme) && void 0 !== t ? t : null);
        }
        this.waitFor(E.ZP, g.Z, v.Z, d.Z);
    }
    getState() {
        return {
            theme: this.theme,
            selectedDarkTheme: A
        };
    }
    get darkSidebar() {
        return (0, u.ap)(this.theme) && E.ZP.darkSidebar && !C;
    }
    get theme() {
        return O();
    }
    get selectedDarkTheme() {
        return A;
    }
    get systemTheme() {
        return N;
    }
    get systemPrefersColorScheme() {
        return i;
    }
    get isSystemThemeAvailable() {
        return null !== N;
    }
}
b(F, 'displayName', 'ThemeStore'),
    b(F, 'persistKey', 'ThemeStore'),
    b(F, 'migrations', [
        (e) => {
            let t = e.theme;
            return (
                'amoled' === t && (t = 'midnight'),
                {
                    ...e,
                    theme: t
                }
            );
        }
    ]);
let V = new F(c.Z, {
    CACHE_LOADED: D,
    CONNECTION_OPEN: D,
    LOGOUT: P,
    OVERLAY_INITIALIZE: D,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: L,
    UNSYNCED_USER_SETTINGS_UPDATE: L,
    USER_SETTINGS_PROTO_UPDATE: D,
    UPDATE_BACKGROUND_GRADIENT_PRESET: k,
    RESET_PREVIEW_CLIENT_THEME: D,
    SYSTEM_THEME_CHANGE: w,
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: M,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: x,
    SET_DARK_MODE_THEME: U
});
