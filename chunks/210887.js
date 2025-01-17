let i;
var a,
    s,
    o = r(442837),
    l = r(524437),
    u = r(692547),
    c = r(780384),
    d = r(570140),
    f = r(607070),
    _ = r(47760),
    h = r(540059),
    p = r(541049);
r(449934);
var m = r(12647),
    g = r(358085),
    E = r(238514),
    v = r(740492),
    I = r(581883),
    T = r(874893),
    b = r(981631),
    y = r(469115);
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
let A = null !== (a = (0, p.Z)()) && void 0 !== a ? a : b.BRd.DARK,
    N = null,
    C = !1;
function R() {
    var e, n;
    if (__OVERLAY__) return b.BRd.DARK;
    if (f.Z.syncForcedColors && 'active' === f.Z.systemForcedColors && null != i) return i;
    let r = v.ZP.useSystemTheme;
    if (r === T.K.ON && null != i) return i;
    let a = null === (e = E.Z.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
    if (null != a) return a;
    let s = null === (n = I.Z.settings.appearance) || void 0 === n ? void 0 : n.theme;
    if (null == s) return A;
    if (!(0, h.i9)('ThemeStore')) return s === l.Q2.LIGHT ? b.BRd.LIGHT : b.BRd.DARK;
    switch (s) {
        case l.Q2.LIGHT:
            return b.BRd.LIGHT;
        case l.Q2.DARK:
            return b.BRd.DARK;
        case l.Q2.DARKER:
            return b.BRd.DARKER;
        case l.Q2.MIDNIGHT:
            return b.BRd.MIDNIGHT;
        default:
            return b.BRd.DARK;
    }
}
function O() {
    let e = R();
    return e;
}
function D() {
    return B();
}
function L() {
    return B();
}
function x() {
    return (0, c.ap)(O());
}
function w(e) {
    return !e.isSwitchingAccount && A !== b.BRd.DARK && ((A = b.BRd.DARK), G(), B());
}
function P(e) {
    let { systemTheme: n } = e;
    return (N = n), B();
}
function M(e) {
    return (i = e.systemPrefersColorScheme), B();
}
function k(e) {
    var n, r;
    let { presetId: i } = e;
    A = null != i && null !== (r = null === (n = y.qt[i]) || void 0 === n ? void 0 : n.theme) && void 0 !== r ? r : O();
    let a = null != i;
    return C !== a ? ((C = a), !0) : U();
}
function U() {
    let e = O();
    return !(0, _.qu)(A, e) && ((A = e), !0);
}
function B() {
    let e = O();
    return e !== A && ((A = e), !0);
}
function G() {
    !__OVERLAY__ && g.isPlatformEmbedded && m.Z.setApplicationBackgroundColor((0, c.wj)(O()) ? u.Z.unsafe_rawColors.PRIMARY_700.resolve({ saturation: f.Z.saturation }).hsl() : u.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: f.Z.saturation }).hsl());
}
class Z extends (s = o.ZP.PersistedStore) {
    initialize(e) {
        (null == e ? void 0 : e.theme) != null && (A = e.theme), this.waitFor(v.ZP, E.Z, I.Z, f.Z);
    }
    getState() {
        return { theme: this.theme };
    }
    get darkSidebar() {
        return (0, c.ap)(this.theme) && v.ZP.darkSidebar && !C;
    }
    get theme() {
        return O();
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
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: L,
        UNSYNCED_USER_SETTINGS_UPDATE: L,
        USER_SETTINGS_PROTO_UPDATE: D,
        UPDATE_BACKGROUND_GRADIENT_PRESET: k,
        RESET_PREVIEW_CLIENT_THEME: D,
        SYSTEM_THEME_CHANGE: P,
        ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: M,
        ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: x
    }));
