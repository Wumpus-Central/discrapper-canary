n.d(t, {
    X: () => b,
    Z: () => J,
});
var r,
    i = n(442837),
    a = n(433517),
    o = n(780384),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var b = (function (e) {
    return (e.DEFAULT = "default"), (e.HIGH = "high"), e;
})({});
let y = {
        fontSize: d.yqN.FONT_SIZE_DEFAULT,
        zoom: d.yqN.ZOOM_DEFAULT,
        keyboardModeEnabled: !1,
        contrastMode: "default",
        colorblindMode: !1,
        lowContrastMode: !1,
        saturation: 1,
        contrast: 1,
        desaturateUserColors: !1,
        forcedColorsModalSeen: !1,
        keyboardNavigationExplainerModalSeen: !1,
        messageGroupSpacing: null,
        systemPrefersReducedMotion: "no-preference",
        systemPrefersCrossfades: !1,
        prefersReducedMotion: "auto",
        systemForcedColors: "none",
        syncForcedColors: !0,
        systemPrefersContrast: "no-preference",
        alwaysShowLinkDecorations: !1,
        roleStyle: "username",
        displayNameStylesEnabled: !0,
        submitButtonEnabled: !1,
        syncProfileThemeWithUserTheme: !1,
        enableCustomCursor: !0,
        switchIconsEnabled: !1,
    },
    O = y,
    v = {
        12: "font-size-12",
        14: "font-size-14",
        15: "font-size-15",
        16: "font-size-16",
        18: "font-size-18",
        20: "font-size-20",
        24: "font-size-24",
    };
function I(e) {
    return d.yqN.FONT_SIZES.indexOf(e) >= 0 ? e : d.yqN.FONT_SIZE_DEFAULT;
}
function T(e) {
    let t = I(e.fontSize);
    if (t > d.yqN.FONT_SIZE_MAX || t < d.yqN.FONT_SIZE_MIN || O.fontSize === t) return !1;
    (O = p({}, O)).fontSize = t;
}
function S(e) {
    if (e.zoom < d.yqN.ZOOM_MIN || e.zoom > d.yqN.ZOOM_MAX || O.zoom === e.zoom) return !1;
    ((O = p({}, O)).zoom = e.zoom), u.Z.setZoomFactor(O.zoom);
}
function A() {
    let e = O.fontSize !== d.yqN.FONT_SIZE_DEFAULT,
        t = O.zoom !== d.yqN.ZOOM_DEFAULT;
    if (!e && !t) return !1;
    (O = p({}, O)).fontSize !== d.yqN.FONT_SIZE_DEFAULT && (O.fontSize = d.yqN.FONT_SIZE_DEFAULT),
        O.zoom !== d.yqN.ZOOM_DEFAULT && ((O.zoom = d.yqN.ZOOM_DEFAULT), u.Z.setZoomFactor(O.zoom));
}
function C() {
    if (O.keyboardModeEnabled) return !1;
    (O = p({}, O)).keyboardModeEnabled = !0;
}
function N() {
    if (!O.keyboardModeEnabled) return !1;
    (O = p({}, O)).keyboardModeEnabled = !1;
}
function R() {
    (O = p({}, O)).colorblindMode = !O.colorblindMode;
}
function P() {
    (O = p({}, O)).lowContrastMode = !O.lowContrastMode;
}
function w(e) {
    O.syncForcedColors = e.syncForcedColors;
}
function D(e) {
    (O = p({}, O)).saturation = e.saturation;
}
function x() {
    (O = p({}, O)).desaturateUserColors = !O.desaturateUserColors;
}
function L(e) {
    O.roleStyle = e.roleStyle;
}
function M(e) {
    O.displayNameStylesEnabled = e.enabled;
}
function j() {
    (O = p({}, O)).submitButtonEnabled = !O.submitButtonEnabled;
}
function k() {
    (O = p({}, O)).syncProfileThemeWithUserTheme = !O.syncProfileThemeWithUserTheme;
}
function U(e) {
    if (O.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
    O = m(p({}, O), { systemPrefersReducedMotion: e.systemPrefersReducedMotion });
}
function G(e) {
    if (O.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
    O = m(p({}, O), { systemPrefersCrossfades: e.systemPrefersCrossfades });
}
function B(e) {
    if (O.prefersReducedMotion === e.prefersReducedMotion) return !1;
    O = m(p({}, O), { prefersReducedMotion: e.prefersReducedMotion });
}
function Z(e) {
    if (O.systemPrefersContrast === e.systemPrefersContrast) return !1;
    O = m(p({}, O), { systemPrefersContrast: e.systemPrefersContrast });
}
function F(e) {
    O = m(p({}, O), { alwaysShowLinkDecorations: e.alwaysShowLinkDecorations });
}
function V(e) {
    O = m(p({}, O), { enableCustomCursor: e.enableCustomCursor });
}
function H(e) {
    var t;
    return (O = m(p({}, O), { systemForcedColors: null != (t = e.systemForcedColors) ? t : "none" })), !0;
}
function Y() {
    O.forcedColorsModalSeen = !0;
}
function W() {
    O = m(p({}, O), { keyboardNavigationExplainerModalSeen: !0 });
}
function K(e) {
    let { messageGroupSpacing: t } = e;
    O = m(p({}, O), { messageGroupSpacing: t });
}
function z(e) {
    let { contrast: t } = e;
    O = m(p({}, O), { contrast: t });
}
function q(e) {
    let { contrastMode: t } = e;
    O = m(p({}, O), { contrastMode: t });
}
function X(e) {
    O = m(p({}, O), { switchIconsEnabled: e.switchIconsEnabled });
}
class Q extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(c.Z),
            isNaN((O = p({}, y, null != e ? e : null)).fontSize) && (O.fontSize = d.yqN.FONT_SIZE_DEFAULT),
            0 > f.fP.indexOf(null != O.messageGroupSpacing ? O.messageGroupSpacing : -1) &&
                (O.messageGroupSpacing = null);
    }
    get fontScale() {
        return (O.fontSize / d.yqN.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return O.fontSize;
    }
    get isFontScaledUp() {
        return O.fontSize > d.yqN.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return O.fontSize < d.yqN.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        var e;
        let t = null != (e = v[this.fontSize]) ? e : "";
        return this.isFontScaledUp
            ? "a11y-font-scaled-up ".concat(t)
            : this.isFontScaledDown
              ? "a11y-font-scaled-down ".concat(t)
              : "".concat(t);
    }
    get zoom() {
        return O.zoom;
    }
    get isZoomedIn() {
        return O.zoom > d.yqN.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return O.zoom < d.yqN.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return O.keyboardModeEnabled;
    }
    get colorblindMode() {
        return O.colorblindMode;
    }
    get lowContrastMode() {
        return O.lowContrastMode;
    }
    get saturation() {
        return O.saturation;
    }
    get contrast() {
        return O.contrast;
    }
    get desaturateUserColors() {
        return O.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return O.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return O.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != O.messageGroupSpacing ? O.messageGroupSpacing : l.jU.getSetting() ? f.c8 : f.pq;
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
        return O.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return O.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return O.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return O.prefersReducedMotion;
    }
    get useReducedMotion() {
        switch (O.prefersReducedMotion) {
            case "no-preference":
                return !1;
            case "reduce":
                return !0;
            default:
                return "reduce" === O.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return O.systemForcedColors;
    }
    get syncForcedColors() {
        return O.syncForcedColors;
    }
    get useForcedColors() {
        return !!O.syncForcedColors && "active" === O.systemForcedColors;
    }
    get systemPrefersContrast() {
        return O.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return O.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return O.alwaysShowLinkDecorations;
    }
    get enableCustomCursor() {
        return O.enableCustomCursor;
    }
    get roleStyle() {
        return O.roleStyle;
    }
    get displayNameStylesEnabled() {
        return O.displayNameStylesEnabled;
    }
    get isHighContrastModeEnabled() {
        return "high" === O.contrastMode;
    }
    get isSwitchIconsEnabled() {
        return O.switchIconsEnabled;
    }
    getUserAgnosticState() {
        return O;
    }
}
_(Q, "displayName", "AccessibilityStore"),
    _(Q, "persistKey", "AccessibilityStore"),
    _(Q, "migrations", [
        () => {
            let e = "a11yFontScale",
                t = "a11yZoom",
                n = "a11yColorblindMode",
                r = a.K.get(e) || 100,
                i = a.K.get(t) || d.yqN.ZOOM_DEFAULT,
                o = a.K.get(n) || !1;
            return (
                a.K.remove(e),
                a.K.remove(t),
                a.K.remove(n),
                {
                    fontScale: r,
                    zoom: i,
                    colorblindMode: o,
                    keyboardModeEnabled: !1,
                }
            );
        },
        (e) => {
            let { fontScale: t } = e,
                n = g(e, ["fontScale"]),
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
                systemPrefersReducedMotion: "no-preference",
                prefersReducedMotion: "auto",
            }),
        (e) => m(p({}, e), { alwaysShowLinkDecorations: e.saturation <= o.AE }),
        (e) => m(p({}, e), { disableVoiceBackgrounds: !1 }),
        (e) => {
            try {
                delete e.disableVoiceBackgrounds;
            } catch (e) {}
            return e;
        },
        (e) => {
            try {
                delete e.hideGuildTags;
            } catch (e) {}
            return e;
        },
        (e) => m(p({}, e), { enableCustomCursor: !0 }),
    ]);
let J = new Q(s.Z, {
    ACCESSIBILITY_SET_FONT_SIZE: T,
    ACCESSIBILITY_SET_ZOOM: S,
    ACCESSIBILITY_RESET_TO_DEFAULT: A,
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: C,
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: N,
    ACCESSIBILITY_COLORBLIND_TOGGLE: R,
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: P,
    ACCESSIBILITY_SET_SATURATION: D,
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: x,
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: H,
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: Z,
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: U,
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: G,
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: B,
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: w,
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: F,
    ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: V,
    ACCESSIBILITY_SET_ROLE_STYLE: L,
    ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: M,
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: Y,
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: W,
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: K,
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: j,
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: k,
    ACCESSIBILITY_SET_CONTRAST: z,
    ACCESSIBILITY_SET_CONTRAST_MODE: q,
    ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: X,
});
