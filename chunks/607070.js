n.d(t, {
    X: () => y,
    Z: () => $,
});
var r,
    i = n(442837),
    a = n(433517),
    o = n(780384),
    s = n(570140),
    l = n(661247),
    c = n(695346),
    u = n(581883),
    d = n(12647),
    f = n(981631),
    p = n(959517);
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
function m(e) {
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
function g(e, t) {
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
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var y = (function (e) {
    return (e.DEFAULT = "default"), (e.HIGH = "high"), e;
})({});
let O = {
        fontSize: f.yqN.FONT_SIZE_DEFAULT,
        zoom: f.yqN.ZOOM_DEFAULT,
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
    v = O,
    S = {
        12: "font-size-12",
        14: "font-size-14",
        15: "font-size-15",
        16: "font-size-16",
        18: "font-size-18",
        20: "font-size-20",
        24: "font-size-24",
    };
function I(e) {
    return f.yqN.FONT_SIZES.indexOf(e) >= 0 ? e : f.yqN.FONT_SIZE_DEFAULT;
}
function T(e) {
    let t = I(e.fontSize);
    if (t > f.yqN.FONT_SIZE_MAX || t < f.yqN.FONT_SIZE_MIN || v.fontSize === t) return !1;
    (v = m({}, v)).fontSize = t;
}
function A(e) {
    if (e.zoom < f.yqN.ZOOM_MIN || e.zoom > f.yqN.ZOOM_MAX || v.zoom === e.zoom) return !1;
    ((v = m({}, v)).zoom = e.zoom), d.Z.setZoomFactor(v.zoom);
}
function C() {
    let e = v.fontSize !== f.yqN.FONT_SIZE_DEFAULT,
        t = v.zoom !== f.yqN.ZOOM_DEFAULT;
    if (!e && !t) return !1;
    (v = m({}, v)).fontSize !== f.yqN.FONT_SIZE_DEFAULT && (v.fontSize = f.yqN.FONT_SIZE_DEFAULT),
        v.zoom !== f.yqN.ZOOM_DEFAULT && ((v.zoom = f.yqN.ZOOM_DEFAULT), d.Z.setZoomFactor(v.zoom));
}
function N() {
    if (v.keyboardModeEnabled) return !1;
    (v = m({}, v)).keyboardModeEnabled = !0;
}
function P() {
    if (!v.keyboardModeEnabled) return !1;
    (v = m({}, v)).keyboardModeEnabled = !1;
}
function R() {
    (v = m({}, v)).colorblindMode = !v.colorblindMode;
}
function D() {
    (v = m({}, v)).lowContrastMode = !v.lowContrastMode;
}
function w(e) {
    v.syncForcedColors = e.syncForcedColors;
}
function x(e) {
    (v = m({}, v)).saturation = e.saturation;
}
function L() {
    (v = m({}, v)).desaturateUserColors = !v.desaturateUserColors;
}
function j(e) {
    v.roleStyle = e.roleStyle;
}
function M(e) {
    v.displayNameStylesEnabled = e.enabled;
}
function k() {
    (v = m({}, v)).submitButtonEnabled = !v.submitButtonEnabled;
}
function U() {
    (v = m({}, v)).syncProfileThemeWithUserTheme = !v.syncProfileThemeWithUserTheme;
}
function G(e) {
    if (v.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
    v = g(m({}, v), { systemPrefersReducedMotion: e.systemPrefersReducedMotion });
}
function Z(e) {
    if (v.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
    v = g(m({}, v), { systemPrefersCrossfades: e.systemPrefersCrossfades });
}
function B(e) {
    if (v.prefersReducedMotion === e.prefersReducedMotion) return !1;
    v = g(m({}, v), { prefersReducedMotion: e.prefersReducedMotion });
}
function F(e) {
    if (v.systemPrefersContrast === e.systemPrefersContrast) return !1;
    v = g(m({}, v), { systemPrefersContrast: e.systemPrefersContrast });
}
function V(e) {
    v = g(m({}, v), { alwaysShowLinkDecorations: e.alwaysShowLinkDecorations });
}
function H(e) {
    v = g(m({}, v), { enableCustomCursor: e.enableCustomCursor });
}
function Y(e) {
    var t;
    return (v = g(m({}, v), { systemForcedColors: null != (t = e.systemForcedColors) ? t : "none" })), !0;
}
function W() {
    v.forcedColorsModalSeen = !0;
}
function K() {
    v = g(m({}, v), { keyboardNavigationExplainerModalSeen: !0 });
}
function z(e) {
    let { messageGroupSpacing: t } = e;
    v = g(m({}, v), { messageGroupSpacing: t });
}
function q(e) {
    let { contrast: t } = e;
    v = g(m({}, v), { contrast: t });
}
function Q(e) {
    let { contrastMode: t } = e;
    v = g(m({}, v), { contrastMode: t });
}
function X(e) {
    v = g(m({}, v), { switchIconsEnabled: e.switchIconsEnabled });
}
class J extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        this.waitFor(u.Z),
            this.waitFor(l.Z),
            isNaN((v = m({}, O, null != e ? e : null)).fontSize) && (v.fontSize = f.yqN.FONT_SIZE_DEFAULT),
            0 > p.fP.indexOf(null != v.messageGroupSpacing ? v.messageGroupSpacing : -1) &&
                (v.messageGroupSpacing = null);
    }
    get fontScale() {
        return (v.fontSize / f.yqN.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return v.fontSize;
    }
    get isFontScaledUp() {
        return v.fontSize > f.yqN.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return v.fontSize < f.yqN.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        var e;
        let t = null != (e = S[this.fontSize]) ? e : "";
        return this.isFontScaledUp
            ? "a11y-font-scaled-up ".concat(t)
            : this.isFontScaledDown
              ? "a11y-font-scaled-down ".concat(t)
              : "".concat(t);
    }
    get zoom() {
        return v.zoom;
    }
    get isZoomedIn() {
        return v.zoom > f.yqN.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return v.zoom < f.yqN.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return v.keyboardModeEnabled;
    }
    get colorblindMode() {
        return v.colorblindMode;
    }
    get lowContrastMode() {
        return v.lowContrastMode;
    }
    get saturation() {
        return v.saturation;
    }
    get contrast() {
        return v.contrast;
    }
    get desaturateUserColors() {
        return v.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return v.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return v.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != v.messageGroupSpacing ? v.messageGroupSpacing : c.jU.getSetting() ? p.c8 : p.pq;
    }
    get isMessageGroupSpacingIncreased() {
        let e = c.jU.getSetting() ? p.c8 : p.pq;
        return this.messageGroupSpacing > e;
    }
    get isMessageGroupSpacingDecreased() {
        let e = c.jU.getSetting() ? p.c8 : p.pq;
        return this.messageGroupSpacing < e;
    }
    get isSubmitButtonEnabled() {
        return v.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return v.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return v.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return v.prefersReducedMotion;
    }
    get useReducedMotion() {
        if (l.Z.active) return !0;
        switch (v.prefersReducedMotion) {
            case "no-preference":
                return !1;
            case "reduce":
                return !0;
            default:
                return "reduce" === v.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return v.systemForcedColors;
    }
    get syncForcedColors() {
        return v.syncForcedColors;
    }
    get useForcedColors() {
        return !!v.syncForcedColors && "active" === v.systemForcedColors;
    }
    get systemPrefersContrast() {
        return v.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return v.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return v.alwaysShowLinkDecorations;
    }
    get enableCustomCursor() {
        return v.enableCustomCursor;
    }
    get roleStyle() {
        return v.roleStyle;
    }
    get displayNameStylesEnabled() {
        return v.displayNameStylesEnabled;
    }
    get isHighContrastModeEnabled() {
        return "high" === v.contrastMode;
    }
    get isSwitchIconsEnabled() {
        return v.switchIconsEnabled;
    }
    getUserAgnosticState() {
        return v;
    }
}
_(J, "displayName", "AccessibilityStore"),
    _(J, "persistKey", "AccessibilityStore"),
    _(J, "migrations", [
        () => {
            let e = "a11yFontScale",
                t = "a11yZoom",
                n = "a11yColorblindMode",
                r = a.K.get(e) || 100,
                i = a.K.get(t) || f.yqN.ZOOM_DEFAULT,
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
                n = E(e, ["fontScale"]),
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
            return g(m({}, n), { fontSize: r });
        },
        (e) => g(m({}, e), { darkSidebar: !1 }),
        (e) => g(m({}, e), { messageGroupSpacing: null }),
        (e) =>
            g(m({}, e), {
                systemPrefersReducedMotion: "no-preference",
                prefersReducedMotion: "auto",
            }),
        (e) => g(m({}, e), { alwaysShowLinkDecorations: e.saturation <= o.AE }),
        (e) => g(m({}, e), { disableVoiceBackgrounds: !1 }),
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
        (e) => g(m({}, e), { enableCustomCursor: !0 }),
    ]);
let $ = new J(s.Z, {
    ACCESSIBILITY_SET_FONT_SIZE: T,
    ACCESSIBILITY_SET_ZOOM: A,
    ACCESSIBILITY_RESET_TO_DEFAULT: C,
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: N,
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: P,
    ACCESSIBILITY_COLORBLIND_TOGGLE: R,
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: D,
    ACCESSIBILITY_SET_SATURATION: x,
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: L,
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: Y,
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: F,
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: G,
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: Z,
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: B,
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: w,
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: V,
    ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: H,
    ACCESSIBILITY_SET_ROLE_STYLE: j,
    ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: M,
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: W,
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: K,
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: z,
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: k,
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: U,
    ACCESSIBILITY_SET_CONTRAST: q,
    ACCESSIBILITY_SET_CONTRAST_MODE: Q,
    ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: X,
});
