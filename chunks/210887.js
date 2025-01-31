let i;
n.d(t, { Z: () => Z });
var r,
    a,
    s = n(442837),
    o = n(524437),
    l = n(692547),
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
    b = n(469115);
function T(e, t, n) {
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
    N = !1;
function C() {
    var e, t;
    if (__OVERLAY__) return I.BRd.DARK;
    if ((d.Z.syncForcedColors && 'active' === d.Z.systemForcedColors && null != i) || (E.ZP.useSystemTheme === y.K.ON && null != i)) return i;
    let n = null === (e = g.Z.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
    if (null != n) return n;
    let r = null === (t = v.Z.settings.appearance) || void 0 === t ? void 0 : t.theme;
    if (null == r) return S;
    if (!(0, _.i9)('ThemeStore')) return r === o.Q2.LIGHT ? I.BRd.LIGHT : I.BRd.DARK;
    switch (r) {
        case o.Q2.LIGHT:
            return I.BRd.LIGHT;
        case o.Q2.DARK:
            return I.BRd.DARK;
        case o.Q2.DARKER:
            return I.BRd.DARKER;
        case o.Q2.MIDNIGHT:
            return I.BRd.MIDNIGHT;
        default:
            return I.BRd.DARK;
    }
}
function R() {
    return C();
}
function O() {
    return U();
}
function D() {
    return U();
}
function x() {
    return (0, u.ap)(R());
}
function L(e) {
    return !e.isSwitchingAccount && S !== I.BRd.DARK && ((S = I.BRd.DARK), G(), U());
}
function P(e) {
    let { systemTheme: t } = e;
    return (A = t), U();
}
function w(e) {
    return (i = e.systemPrefersColorScheme), U();
}
function M(e) {
    var t, n;
    let { presetId: i } = e;
    S = null != i && null !== (n = null === (t = b.qt[i]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : R();
    let r = null != i;
    return N !== r ? ((N = r), !0) : k();
}
function k() {
    let e = R();
    return !(0, f.qu)(S, e) && ((S = e), !0);
}
function U() {
    let e = R();
    return e !== S && ((S = e), !0);
}
function G() {
    !__OVERLAY__ && m.isPlatformEmbedded && h.Z.setApplicationBackgroundColor((0, u.wj)(R()) ? l.Z.unsafe_rawColors.PRIMARY_700.resolve({ saturation: d.Z.saturation }).hsl() : l.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: d.Z.saturation }).hsl());
}
class B extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        (null == e ? void 0 : e.theme) != null && (S = e.theme), this.waitFor(E.ZP, g.Z, v.Z, d.Z);
    }
    getState() {
        return { theme: this.theme };
    }
    get darkSidebar() {
        return (0, u.ap)(this.theme) && E.ZP.darkSidebar && !N;
    }
    get theme() {
        return R();
    }
    get systemTheme() {
        return A;
    }
    get systemPrefersColorScheme() {
        return i;
    }
    get isSystemThemeAvailable() {
        return null !== A;
    }
}
T(B, 'displayName', 'ThemeStore'),
    T(B, 'persistKey', 'ThemeStore'),
    T(B, 'migrations', [
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
let Z = new B(c.Z, {
    CACHE_LOADED: O,
    CONNECTION_OPEN: O,
    LOGOUT: L,
    OVERLAY_INITIALIZE: O,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: D,
    UNSYNCED_USER_SETTINGS_UPDATE: D,
    USER_SETTINGS_PROTO_UPDATE: O,
    UPDATE_BACKGROUND_GRADIENT_PRESET: M,
    RESET_PREVIEW_CLIENT_THEME: O,
    SYSTEM_THEME_CHANGE: P,
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: w,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: x
});
