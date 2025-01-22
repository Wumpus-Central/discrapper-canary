let i;
var a,
    o,
    s = r(442837),
    l = r(524437),
    u = r(692547),
    c = r(780384),
    d = r(570140),
    f = r(607070),
    p = r(47760),
    h = r(540059),
    _ = r(541049);
r(449934);
var m = r(12647),
    g = r(358085),
    E = r(238514),
    v = r(740492),
    y = r(581883),
    b = r(874893),
    I = r(981631),
    T = r(469115);
function S(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let A = null !== (a = (0, _.Z)()) && void 0 !== a ? a : I.BRd.DARK,
    C = null,
    N = !1;
function R() {
    var e, n;
    if (__OVERLAY__) return I.BRd.DARK;
    if (f.Z.syncForcedColors && 'active' === f.Z.systemForcedColors && null != i) return i;
    let r = v.ZP.useSystemTheme;
    if (r === b.K.ON && null != i) return i;
    let a = null === (e = E.Z.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
    if (null != a) return a;
    let o = null === (n = y.Z.settings.appearance) || void 0 === n ? void 0 : n.theme;
    if (null == o) return A;
    if (!(0, h.i9)('ThemeStore')) return o === l.Q2.LIGHT ? I.BRd.LIGHT : I.BRd.DARK;
    switch (o) {
        case l.Q2.LIGHT:
            return I.BRd.LIGHT;
        case l.Q2.DARK:
            return I.BRd.DARK;
        case l.Q2.DARKER:
            return I.BRd.DARKER;
        case l.Q2.MIDNIGHT:
            return I.BRd.MIDNIGHT;
        default:
            return I.BRd.DARK;
    }
}
function O() {
    let e = R();
    return e;
}
function D() {
    return B();
}
function x() {
    return B();
}
function L() {
    return (0, c.ap)(O());
}
function w(e) {
    return !e.isSwitchingAccount && A !== I.BRd.DARK && ((A = I.BRd.DARK), G(), B());
}
function P(e) {
    let { systemTheme: n } = e;
    return (C = n), B();
}
function M(e) {
    return (i = e.systemPrefersColorScheme), B();
}
function k(e) {
    var n, r;
    let { presetId: i } = e;
    A = null != i && null !== (r = null === (n = T.qt[i]) || void 0 === n ? void 0 : n.theme) && void 0 !== r ? r : O();
    let a = null != i;
    return N !== a ? ((N = a), !0) : U();
}
function U() {
    let e = O();
    return !(0, p.qu)(A, e) && ((A = e), !0);
}
function B() {
    let e = O();
    return e !== A && ((A = e), !0);
}
function G() {
    !__OVERLAY__ && g.isPlatformEmbedded && m.Z.setApplicationBackgroundColor((0, c.wj)(O()) ? u.Z.unsafe_rawColors.PRIMARY_700.resolve({ saturation: f.Z.saturation }).hsl() : u.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: f.Z.saturation }).hsl());
}
class Z extends (o = s.ZP.PersistedStore) {
    initialize(e) {
        (null == e ? void 0 : e.theme) != null && (A = e.theme), this.waitFor(v.ZP, E.Z, y.Z, f.Z);
    }
    getState() {
        return { theme: this.theme };
    }
    get darkSidebar() {
        return (0, c.ap)(this.theme) && v.ZP.darkSidebar && !N;
    }
    get theme() {
        return O();
    }
    get systemTheme() {
        return C;
    }
    get systemPrefersColorScheme() {
        return i;
    }
    get isSystemThemeAvailable() {
        return null !== C;
    }
}
S(Z, 'displayName', 'ThemeStore'),
    S(Z, 'persistKey', 'ThemeStore'),
    S(Z, 'migrations', [
        (e) => {
            let n = e.theme;
            return (
                'amoled' === n && (n = 'midnight'),
                {
                    ...e,
                    theme: n
                }
            );
        }
    ]),
    (n.Z = new Z(d.Z, {
        CACHE_LOADED: D,
        CONNECTION_OPEN: D,
        LOGOUT: w,
        OVERLAY_INITIALIZE: D,
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: x,
        UNSYNCED_USER_SETTINGS_UPDATE: x,
        USER_SETTINGS_PROTO_UPDATE: D,
        UPDATE_BACKGROUND_GRADIENT_PRESET: k,
        RESET_PREVIEW_CLIENT_THEME: D,
        SYSTEM_THEME_CHANGE: P,
        ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: M,
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: L
    }));
