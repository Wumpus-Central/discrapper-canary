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
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
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
let b = {
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
    y = b,
    v = {
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
function I(e) {
    let t = O(e.fontSize);
    if (t > d.yqN.FONT_SIZE_MAX || t < d.yqN.FONT_SIZE_MIN || y.fontSize === t) return !1;
    (y = p({}, y)).fontSize = t;
}
function S(e) {
    if (e.zoom < d.yqN.ZOOM_MIN || e.zoom > d.yqN.ZOOM_MAX || y.zoom === e.zoom) return !1;
    ((y = p({}, y)).zoom = e.zoom), u.Z.setZoomFactor(y.zoom);
}
function T() {
    let e = y.fontSize !== d.yqN.FONT_SIZE_DEFAULT,
        t = y.zoom !== d.yqN.ZOOM_DEFAULT;
    if (!e && !t) return !1;
    (y = p({}, y)).fontSize !== d.yqN.FONT_SIZE_DEFAULT && (y.fontSize = d.yqN.FONT_SIZE_DEFAULT), y.zoom !== d.yqN.ZOOM_DEFAULT && ((y.zoom = d.yqN.ZOOM_DEFAULT), u.Z.setZoomFactor(y.zoom));
}
function N() {
    if (y.keyboardModeEnabled) return !1;
    (y = p({}, y)).keyboardModeEnabled = !0;
}
function A() {
    if (!y.keyboardModeEnabled) return !1;
    (y = p({}, y)).keyboardModeEnabled = !1;
}
function C() {
    (y = p({}, y)).colorblindMode = !y.colorblindMode;
}
function R() {
    (y = p({}, y)).lowContrastMode = !y.lowContrastMode;
}
function P(e) {
    y.syncForcedColors = e.syncForcedColors;
}
function w(e) {
    (y = p({}, y)).saturation = e.saturation;
}
function D() {
    (y = p({}, y)).desaturateUserColors = !y.desaturateUserColors;
}
function L(e) {
    y.roleStyle = e.roleStyle;
}
function x() {
    (y = p({}, y)).submitButtonEnabled = !y.submitButtonEnabled;
}
function M() {
    (y = p({}, y)).syncProfileThemeWithUserTheme = !y.syncProfileThemeWithUserTheme;
}
function k(e) {
    if (y.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
    y = m(p({}, y), { systemPrefersReducedMotion: e.systemPrefersReducedMotion });
}
function j(e) {
    if (y.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
    y = m(p({}, y), { systemPrefersCrossfades: e.systemPrefersCrossfades });
}
function U(e) {
    if (y.prefersReducedMotion === e.prefersReducedMotion) return !1;
    y = m(p({}, y), { prefersReducedMotion: e.prefersReducedMotion });
}
function G(e) {
    if (y.systemPrefersContrast === e.systemPrefersContrast) return !1;
    y = m(p({}, y), { systemPrefersContrast: e.systemPrefersContrast });
}
function B(e) {
    y = m(p({}, y), { alwaysShowLinkDecorations: e.alwaysShowLinkDecorations });
}
function F(e) {
    var t;
    return (y = m(p({}, y), { systemForcedColors: null != (t = e.systemForcedColors) ? t : 'none' })), !0;
}
function V() {
    y.forcedColorsModalSeen = !0;
}
function Z() {
    y = m(p({}, y), { keyboardNavigationExplainerModalSeen: !0 });
}
function H(e) {
    let { messageGroupSpacing: t } = e;
    y = m(p({}, y), { messageGroupSpacing: t });
}
function W(e) {
    let { contrast: t } = e;
    y = m(p({}, y), { contrast: t });
}
function Y(e) {
    let { hideTags: t } = e;
    y = m(p({}, y), { hideGuildTags: t });
}
class K extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(c.Z), isNaN((y = p({}, b, null != e ? e : null)).fontSize) && (y.fontSize = d.yqN.FONT_SIZE_DEFAULT), 0 > f.fP.indexOf(null != y.messageGroupSpacing ? y.messageGroupSpacing : -1) && (y.messageGroupSpacing = null);
    }
    get fontScale() {
        return (y.fontSize / d.yqN.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return y.fontSize;
    }
    get isFontScaledUp() {
        return y.fontSize > d.yqN.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return y.fontSize < d.yqN.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        var e;
        let t = null != (e = v[this.fontSize]) ? e : '';
        return this.isFontScaledUp ? 'a11y-font-scaled-up '.concat(t) : this.isFontScaledDown ? 'a11y-font-scaled-down '.concat(t) : ''.concat(t);
    }
    get zoom() {
        return y.zoom;
    }
    get isZoomedIn() {
        return y.zoom > d.yqN.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return y.zoom < d.yqN.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return y.keyboardModeEnabled;
    }
    get colorblindMode() {
        return y.colorblindMode;
    }
    get lowContrastMode() {
        return y.lowContrastMode;
    }
    get saturation() {
        return y.saturation;
    }
    get contrast() {
        return y.contrast;
    }
    get desaturateUserColors() {
        return y.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return y.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return y.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != y.messageGroupSpacing ? y.messageGroupSpacing : l.jU.getSetting() ? f.c8 : f.pq;
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
        return y.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return y.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return y.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return y.prefersReducedMotion;
    }
    get useReducedMotion() {
        switch (y.prefersReducedMotion) {
            case 'no-preference':
                return !1;
            case 'reduce':
                return !0;
            default:
                return 'reduce' === y.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return y.systemForcedColors;
    }
    get syncForcedColors() {
        return y.syncForcedColors;
    }
    get useForcedColors() {
        return !!y.syncForcedColors && 'active' === y.systemForcedColors;
    }
    get systemPrefersContrast() {
        return y.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return y.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return y.alwaysShowLinkDecorations;
    }
    get roleStyle() {
        return y.roleStyle;
    }
    get hideTags() {
        return y.hideGuildTags;
    }
    getUserAgnosticState() {
        return y;
    }
}
_(K, 'displayName', 'AccessibilityStore'),
    _(K, 'persistKey', 'AccessibilityStore'),
    _(K, 'migrations', [
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
            return m(p({}, n), { fontSize: r });
        },
        (e) => m(p({}, e), { darkSidebar: !1 }),
        (e) => m(p({}, e), { messageGroupSpacing: null }),
        (e) =>
            m(p({}, e), {
                systemPrefersReducedMotion: 'no-preference',
                prefersReducedMotion: 'auto'
            }),
        (e) => m(p({}, e), { alwaysShowLinkDecorations: e.saturation <= a.AE }),
        (e) => m(p({}, e), { disableVoiceBackgrounds: !1 }),
        (e) => {
            try {
                delete e.disableVoiceBackgrounds;
            } catch (e) {}
            return e;
        }
    ]);
let z = new K(s.Z, {
    ACCESSIBILITY_SET_FONT_SIZE: I,
    ACCESSIBILITY_SET_ZOOM: S,
    ACCESSIBILITY_RESET_TO_DEFAULT: T,
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: N,
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: A,
    ACCESSIBILITY_COLORBLIND_TOGGLE: C,
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: R,
    ACCESSIBILITY_SET_SATURATION: w,
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: D,
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: F,
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: G,
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: k,
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: j,
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: U,
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: P,
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: B,
    ACCESSIBILITY_SET_ROLE_STYLE: L,
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: V,
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: Z,
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: H,
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: x,
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: M,
    ACCESSIBILITY_SET_CONTRAST: W,
    ACCESSIBILITY_SET_HIDE_TAGS: Y
});
