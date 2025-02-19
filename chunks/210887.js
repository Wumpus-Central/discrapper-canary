let r;
n.d(t, { Z: () => W }), n(653041);
var i,
    o,
    a = n(442837),
    s = n(524437),
    l = n(900089),
    c = n(780384),
    u = n(570140),
    d = n(607070),
    f = n(47760),
    p = n(540059),
    _ = n(541049);
n(449934);
var h = n(12647),
    m = n(358085),
    g = n(238514),
    E = n(740492),
    v = n(581883),
    b = n(874893),
    y = n(981631),
    O = n(469115);
function S(e, t, n) {
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
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = null !== (i = (0, _.Z)()) && void 0 !== i ? i : y.BRd.DARK,
    C = null,
    R = null,
    P = !1;
function w() {
    var e, t;
    if (__OVERLAY__) return y.BRd.DARK;
    if (d.Z.syncForcedColors && 'active' === d.Z.systemForcedColors && null != r) return r;
    if (E.ZP.useSystemTheme === b.K.ON && null != r) return (0, p.O_)('ThemeStore') ? ((0, c.wj)(r) ? (null != C ? C : y.BRd.DARK) : y.BRd.LIGHT) : r;
    let n = null === (e = g.Z.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
    if (null != n) return n;
    let i = null === (t = v.Z.settings.appearance) || void 0 === t ? void 0 : t.theme;
    if (null == i) return A;
    if (!(0, p.O_)('ThemeStore')) return i === s.Q2.LIGHT ? y.BRd.LIGHT : y.BRd.DARK;
    switch (i) {
        case s.Q2.DARK:
        case s.Q2.DARKER:
            return null != C ? C : y.BRd.DARK;
        case s.Q2.LIGHT:
            return y.BRd.LIGHT;
        case s.Q2.MIDNIGHT:
            return y.BRd.MIDNIGHT;
        default:
            return y.BRd.DARK;
    }
}
function D() {
    return w();
}
function x() {
    return F();
}
function L() {
    return F();
}
function M() {
    return (0, c.ap)(D());
}
function k(e) {
    return !e.isSwitchingAccount && A !== y.BRd.DARK && ((A = y.BRd.DARK), V(), F());
}
function j(e) {
    let { systemTheme: t } = e;
    return (R = t), F();
}
function U(e) {
    return (r = e.systemPrefersColorScheme), F();
}
function G(e) {
    var t, n;
    let { presetId: r } = e;
    A = null != r && null !== (n = null === (t = O.qt[r]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : D();
    let i = null != r;
    return P !== i ? ((P = i), !0) : Z();
}
function B(e) {
    let { theme: t } = e;
    C = t;
}
function Z() {
    let e = D();
    return !(0, f.qu)(A, e) && ((A = e), !0);
}
function F() {
    let e = D();
    return e !== A && (V((A = e)), !0);
}
function V(e) {
    if (!__OVERLAY__ && m.isPlatformEmbedded) {
        let t = [],
            n = (0, p.O_)('ThemeStore');
        n && t.push('visual-refresh');
        try {
            let r = (0, l.uJ)(n ? 'BACKGROUND_TERTIARY' : 'BACKGROUND_SECONDARY', {
                theme: null != e ? e : D(),
                saturation: d.Z.saturation,
                enabledExperiments: t
            });
            h.Z.setApplicationBackgroundColor(r);
        } catch (e) {}
    }
}
class H extends (o = a.ZP.PersistedStore) {
    initialize(e) {
        if ((null == e ? void 0 : e.theme) != null) {
            var t;
            V((A = e.theme)), (C = null !== (t = e.selectedDarkTheme) && void 0 !== t ? t : null);
        }
        this.waitFor(E.ZP, g.Z, v.Z, d.Z);
    }
    getState() {
        return {
            theme: this.theme,
            selectedDarkTheme: C
        };
    }
    get darkSidebar() {
        return (0, c.ap)(this.theme) && E.ZP.darkSidebar && !P;
    }
    get theme() {
        return D();
    }
    get selectedDarkTheme() {
        return C;
    }
    get systemTheme() {
        return R;
    }
    get systemPrefersColorScheme() {
        return r;
    }
    get isSystemThemeAvailable() {
        return null !== R;
    }
}
S(H, 'displayName', 'ThemeStore'),
    S(H, 'persistKey', 'ThemeStore'),
    S(H, 'migrations', [
        (e) => {
            let t = e.theme;
            return 'amoled' === t && (t = 'midnight'), N(I({}, e), { theme: t });
        }
    ]);
let W = new H(u.Z, {
    CACHE_LOADED: x,
    CONNECTION_OPEN: x,
    LOGOUT: k,
    OVERLAY_INITIALIZE: x,
    SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: L,
    UNSYNCED_USER_SETTINGS_UPDATE: L,
    USER_SETTINGS_PROTO_UPDATE: x,
    UPDATE_BACKGROUND_GRADIENT_PRESET: G,
    RESET_PREVIEW_CLIENT_THEME: x,
    SYSTEM_THEME_CHANGE: j,
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: U,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: M,
    SET_DARK_MODE_THEME: B
});
