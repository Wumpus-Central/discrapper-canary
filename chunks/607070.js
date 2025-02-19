n.d(t, { Z: () => z });
var r,
    i = n(442837),
    o = n(433517),
    a = n(780384),
    s = n(570140),
    l = n(695346),
    c = n(581883),
    u = n(12647),
    d = n(981631),
    f = n(959517);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = {
        fontSize: d.yqN.FONT_SIZE_DEFAULT,
        zoom: d.yqN.ZOOM_DEFAULT,
        keyboardModeEnabled: !1,
        colorblindMode: !1,
        lowContrastMode: !1,
        saturation: 1,
        contrast: 1,
        desaturateUserColors: !1,
        forcedColorsModalSeen: !1,
        keyboardNavigationExplainerModalSeen: !1,
        messageGroupSpacing: null,
        systemPrefersReducedMotion: 'no-preference',
        systemPrefersCrossfades: !1,
        prefersReducedMotion: 'auto',
        systemForcedColors: 'none',
        syncForcedColors: !0,
        systemPrefersContrast: 'no-preference',
        alwaysShowLinkDecorations: !1,
        roleStyle: 'username',
        submitButtonEnabled: !1,
        syncProfileThemeWithUserTheme: !1,
        hideGuildTags: !1
    },
    b = v,
    y = {
        12: 'font-size-12',
        14: 'font-size-14',
        15: 'font-size-15',
        16: 'font-size-16',
        18: 'font-size-18',
        20: 'font-size-20',
        24: 'font-size-24'
    };
function O(e) {
    return d.yqN.FONT_SIZES.indexOf(e) >= 0 ? e : d.yqN.FONT_SIZE_DEFAULT;
}
function S(e) {
    let t = O(e.fontSize);
    if (t > d.yqN.FONT_SIZE_MAX || t < d.yqN.FONT_SIZE_MIN || b.fontSize === t) return !1;
    (b = _({}, b)).fontSize = t;
}
function I(e) {
    if (e.zoom < d.yqN.ZOOM_MIN || e.zoom > d.yqN.ZOOM_MAX || b.zoom === e.zoom) return !1;
    ((b = _({}, b)).zoom = e.zoom), u.Z.setZoomFactor(b.zoom);
}
function T() {
    let e = b.fontSize !== d.yqN.FONT_SIZE_DEFAULT,
        t = b.zoom !== d.yqN.ZOOM_DEFAULT;
    if (!e && !t) return !1;
    (b = _({}, b)).fontSize !== d.yqN.FONT_SIZE_DEFAULT && (b.fontSize = d.yqN.FONT_SIZE_DEFAULT), b.zoom !== d.yqN.ZOOM_DEFAULT && ((b.zoom = d.yqN.ZOOM_DEFAULT), u.Z.setZoomFactor(b.zoom));
}
function N() {
    if (b.keyboardModeEnabled) return !1;
    (b = _({}, b)).keyboardModeEnabled = !0;
}
function A() {
    if (!b.keyboardModeEnabled) return !1;
    (b = _({}, b)).keyboardModeEnabled = !1;
}
function C() {
    (b = _({}, b)).colorblindMode = !b.colorblindMode;
}
function R() {
    (b = _({}, b)).lowContrastMode = !b.lowContrastMode;
}
function P(e) {
    b.syncForcedColors = e.syncForcedColors;
}
function w(e) {
    (b = _({}, b)).saturation = e.saturation;
}
function D() {
    (b = _({}, b)).desaturateUserColors = !b.desaturateUserColors;
}
function x(e) {
    b.roleStyle = e.roleStyle;
}
function L() {
    (b = _({}, b)).submitButtonEnabled = !b.submitButtonEnabled;
}
function M() {
    (b = _({}, b)).syncProfileThemeWithUserTheme = !b.syncProfileThemeWithUserTheme;
}
function k(e) {
    if (b.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
    b = m(_({}, b), { systemPrefersReducedMotion: e.systemPrefersReducedMotion });
}
function j(e) {
    if (b.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
    b = m(_({}, b), { systemPrefersCrossfades: e.systemPrefersCrossfades });
}
function U(e) {
    if (b.prefersReducedMotion === e.prefersReducedMotion) return !1;
    b = m(_({}, b), { prefersReducedMotion: e.prefersReducedMotion });
}
function G(e) {
    if (b.systemPrefersContrast === e.systemPrefersContrast) return !1;
    b = m(_({}, b), { systemPrefersContrast: e.systemPrefersContrast });
}
function B(e) {
    b = m(_({}, b), { alwaysShowLinkDecorations: e.alwaysShowLinkDecorations });
}
function Z(e) {
    var t;
    return (b = m(_({}, b), { systemForcedColors: null !== (t = e.systemForcedColors) && void 0 !== t ? t : 'none' })), !0;
}
function F() {
    b.forcedColorsModalSeen = !0;
}
function V() {
    b = m(_({}, b), { keyboardNavigationExplainerModalSeen: !0 });
}
function H(e) {
    let { messageGroupSpacing: t } = e;
    b = m(_({}, b), { messageGroupSpacing: t });
}
function W(e) {
    let { contrast: t } = e;
    b = m(_({}, b), { contrast: t });
}
function Y(e) {
    let { hideTags: t } = e;
    b = m(_({}, b), { hideGuildTags: t });
}
class K extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(c.Z), isNaN((b = _({}, v, null != e ? e : null)).fontSize) && (b.fontSize = d.yqN.FONT_SIZE_DEFAULT), 0 > f.fP.indexOf(null != b.messageGroupSpacing ? b.messageGroupSpacing : -1) && (b.messageGroupSpacing = null);
    }
    get fontScale() {
        return (b.fontSize / d.yqN.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return b.fontSize;
    }
    get isFontScaledUp() {
        return b.fontSize > d.yqN.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return b.fontSize < d.yqN.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        var e;
        let t = null !== (e = y[this.fontSize]) && void 0 !== e ? e : '';
        return this.isFontScaledUp ? 'a11y-font-scaled-up '.concat(t) : this.isFontScaledDown ? 'a11y-font-scaled-down '.concat(t) : ''.concat(t);
    }
    get zoom() {
        return b.zoom;
    }
    get isZoomedIn() {
        return b.zoom > d.yqN.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return b.zoom < d.yqN.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return b.keyboardModeEnabled;
    }
    get colorblindMode() {
        return b.colorblindMode;
    }
    get lowContrastMode() {
        return b.lowContrastMode;
    }
    get saturation() {
        return b.saturation;
    }
    get contrast() {
        return b.contrast;
    }
    get desaturateUserColors() {
        return b.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return b.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return b.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != b.messageGroupSpacing ? b.messageGroupSpacing : l.jU.getSetting() ? f.c8 : f.pq;
    }
    get isMessageGroupSpacingIncreased() {
        let e = l.jU.getSetting() ? f.c8 : f.pq;
        return this.messageGroupSpacing > e;
    }
    get isMessageGroupSpacingDecreased() {
        let e = l.jU.getSetting() ? f.c8 : f.pq;
        return this.messageGroupSpacing < e;
    }
    get isSubmitButtonEnabled() {
        return b.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return b.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return b.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return b.prefersReducedMotion;
    }
    get useReducedMotion() {
        switch (b.prefersReducedMotion) {
            case 'no-preference':
                return !1;
            case 'reduce':
                return !0;
            default:
                return 'reduce' === b.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return b.systemForcedColors;
    }
    get syncForcedColors() {
        return b.syncForcedColors;
    }
    get useForcedColors() {
        return !!b.syncForcedColors && 'active' === b.systemForcedColors;
    }
    get systemPrefersContrast() {
        return b.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return b.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return b.alwaysShowLinkDecorations;
    }
    get roleStyle() {
        return b.roleStyle;
    }
    get hideTags() {
        return b.hideGuildTags;
    }
    getUserAgnosticState() {
        return b;
    }
}
p(K, 'displayName', 'AccessibilityStore'),
    p(K, 'persistKey', 'AccessibilityStore'),
    p(K, 'migrations', [
        () => {
            let e = 'a11yFontScale',
                t = 'a11yZoom',
                n = 'a11yColorblindMode',
                r = o.K.get(e) || 100,
                i = o.K.get(t) || d.yqN.ZOOM_DEFAULT,
                a = o.K.get(n) || !1;
            return (
                o.K.remove(e),
                o.K.remove(t),
                o.K.remove(n),
                {
                    fontScale: r,
                    zoom: i,
                    colorblindMode: a,
                    keyboardModeEnabled: !1
                }
            );
        },
        (e) => {
            let { fontScale: t } = e,
                n = g(e, ['fontScale']),
                r = 16;
            switch (t) {
                case 82:
                    r = 12;
                    break;
                case 92:
                    r = 15;
                    break;
                case 100:
                    r = 16;
                    break;
                case 110:
                    r = 18;
                    break;
                case 125:
                    r = 20;
                    break;
                case 150:
                    r = 24;
            }
            return m(_({}, n), { fontSize: r });
        },
        (e) => m(_({}, e), { darkSidebar: !1 }),
        (e) => m(_({}, e), { messageGroupSpacing: null }),
        (e) =>
            m(_({}, e), {
                systemPrefersReducedMotion: 'no-preference',
                prefersReducedMotion: 'auto'
            }),
        (e) => m(_({}, e), { alwaysShowLinkDecorations: e.saturation <= a.AE }),
        (e) => m(_({}, e), { disableVoiceBackgrounds: !1 }),
        (e) => {
            try {
                delete e.disableVoiceBackgrounds;
            } catch (e) {}
            return e;
        }
    ]);
let z = new K(s.Z, {
    ACCESSIBILITY_SET_FONT_SIZE: S,
    ACCESSIBILITY_SET_ZOOM: I,
    ACCESSIBILITY_RESET_TO_DEFAULT: T,
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: N,
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: A,
    ACCESSIBILITY_COLORBLIND_TOGGLE: C,
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: R,
    ACCESSIBILITY_SET_SATURATION: w,
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: D,
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: Z,
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: G,
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: k,
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: j,
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: U,
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: P,
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: B,
    ACCESSIBILITY_SET_ROLE_STYLE: x,
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: F,
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: V,
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: H,
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: L,
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: M,
    ACCESSIBILITY_SET_CONTRAST: W,
    ACCESSIBILITY_SET_HIDE_TAGS: Y
});
