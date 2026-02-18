"use strict";
n.d(t, { A: () => W, _: () => _ });
var r = n(311907),
    i = n(506774),
    s = n(582754),
    a = n(73153),
    o = n(253932),
    l = n(617617),
    u = n(353835),
    c = n(652215),
    d = n(381941),
    _ = (function (e) {
        return (e.DEFAULT = "default"), (e.HIGH = "high"), e;
    })({});
let f = {
        fontSize: c.hH7.FONT_SIZE_DEFAULT,
        zoom: c.hH7.ZOOM_DEFAULT,
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
    p = f,
    h = {
        12: "font-size-12",
        14: "font-size-14",
        15: "font-size-15",
        16: "font-size-16",
        18: "font-size-18",
        20: "font-size-20",
        24: "font-size-24",
    };
function m(e) {
    return c.hH7.FONT_SIZES.indexOf(e) >= 0 ? e : c.hH7.FONT_SIZE_DEFAULT;
}
function E(e) {
    let t = m(e.fontSize);
    if (t > c.hH7.FONT_SIZE_MAX || t < c.hH7.FONT_SIZE_MIN || p.fontSize === t) return !1;
    (p = { ...p }).fontSize = t;
}
function g(e) {
    if (e.zoom < c.hH7.ZOOM_MIN || e.zoom > c.hH7.ZOOM_MAX || p.zoom === e.zoom) return !1;
    ((p = { ...p }).zoom = e.zoom), u.A.setZoomFactor(p.zoom);
}
function A() {
    let e = p.fontSize !== c.hH7.FONT_SIZE_DEFAULT,
        t = p.zoom !== c.hH7.ZOOM_DEFAULT;
    if (!e && !t) return !1;
    (p = { ...p }).fontSize !== c.hH7.FONT_SIZE_DEFAULT && (p.fontSize = c.hH7.FONT_SIZE_DEFAULT),
        p.zoom !== c.hH7.ZOOM_DEFAULT && ((p.zoom = c.hH7.ZOOM_DEFAULT), u.A.setZoomFactor(p.zoom));
}
function I() {
    if (p.keyboardModeEnabled) return !1;
    (p = { ...p }).keyboardModeEnabled = !0;
}
function T() {
    if (!p.keyboardModeEnabled) return !1;
    (p = { ...p }).keyboardModeEnabled = !1;
}
function S() {
    (p = { ...p }).colorblindMode = !p.colorblindMode;
}
function y() {
    (p = { ...p }).lowContrastMode = !p.lowContrastMode;
}
function v(e) {
    p.syncForcedColors = e.syncForcedColors;
}
function N(e) {
    (p = { ...p }).saturation = e.saturation;
}
function C() {
    (p = { ...p }).desaturateUserColors = !p.desaturateUserColors;
}
function b(e) {
    p.roleStyle = e.roleStyle;
}
function R(e) {
    p.displayNameStylesEnabled = e.enabled;
}
function O() {
    (p = { ...p }).submitButtonEnabled = !p.submitButtonEnabled;
}
function D() {
    (p = { ...p }).syncProfileThemeWithUserTheme = !p.syncProfileThemeWithUserTheme;
}
function L(e) {
    if (p.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
    p = { ...p, systemPrefersReducedMotion: e.systemPrefersReducedMotion };
}
function w(e) {
    if (p.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
    p = { ...p, systemPrefersCrossfades: e.systemPrefersCrossfades };
}
function x(e) {
    if (p.prefersReducedMotion === e.prefersReducedMotion) return !1;
    p = { ...p, prefersReducedMotion: e.prefersReducedMotion };
}
function M(e) {
    if (p.systemPrefersContrast === e.systemPrefersContrast) return !1;
    p = { ...p, systemPrefersContrast: e.systemPrefersContrast };
}
function P(e) {
    p = { ...p, alwaysShowLinkDecorations: e.alwaysShowLinkDecorations };
}
function k(e) {
    p = { ...p, enableCustomCursor: e.enableCustomCursor };
}
function U(e) {
    return (p = { ...p, systemForcedColors: e.systemForcedColors ?? "none" }), !0;
}
function G() {
    p.forcedColorsModalSeen = !0;
}
function F() {
    p = { ...p, keyboardNavigationExplainerModalSeen: !0 };
}
function V(e) {
    let { messageGroupSpacing: t } = e;
    p = { ...p, messageGroupSpacing: t };
}
function B(e) {
    let { contrast: t } = e;
    p = { ...p, contrast: t };
}
function H(e) {
    let { contrastMode: t } = e;
    p = { ...p, contrastMode: t };
}
function j(e) {
    p = { ...p, switchIconsEnabled: e.switchIconsEnabled };
}
class Y extends r.Ay.DeviceSettingsStore {
    static displayName = "AccessibilityStore";
    static persistKey = "AccessibilityStore";
    static migrations = [
        () => {
            let e = "a11yFontScale",
                t = "a11yZoom",
                n = "a11yColorblindMode",
                r = i.w.get(e) || 100,
                s = i.w.get(t) || c.hH7.ZOOM_DEFAULT,
                a = i.w.get(n) || !1;
            return (
                i.w.remove(e),
                i.w.remove(t),
                i.w.remove(n),
                { fontScale: r, zoom: s, colorblindMode: a, keyboardModeEnabled: !1 }
            );
        },
        (e) => {
            let { fontScale: t, ...n } = e,
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
            return { ...n, fontSize: r };
        },
        (e) => ({ ...e, darkSidebar: !1 }),
        (e) => ({ ...e, messageGroupSpacing: null }),
        (e) => ({ ...e, systemPrefersReducedMotion: "no-preference", prefersReducedMotion: "auto" }),
        (e) => ({ ...e, alwaysShowLinkDecorations: e.saturation <= s.yv }),
        (e) => ({ ...e, disableVoiceBackgrounds: !1 }),
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
        (e) => ({ ...e, enableCustomCursor: !0 }),
    ];
    initialize(e) {
        this.waitFor(l.A),
            isNaN((p = { ...f, ...(e ?? null) }).fontSize) && (p.fontSize = c.hH7.FONT_SIZE_DEFAULT),
            0 > d.qh.indexOf(null != p.messageGroupSpacing ? p.messageGroupSpacing : -1) &&
                (p.messageGroupSpacing = null);
    }
    get fontScale() {
        return (p.fontSize / c.hH7.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return p.fontSize;
    }
    get isFontScaledUp() {
        return p.fontSize > c.hH7.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return p.fontSize < c.hH7.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        let e = h[this.fontSize] ?? "";
        return this.isFontScaledUp
            ? `a11y-font-scaled-up ${e}`
            : this.isFontScaledDown
              ? `a11y-font-scaled-down ${e}`
              : `${e}`;
    }
    get zoom() {
        return p.zoom;
    }
    get isZoomedIn() {
        return p.zoom > c.hH7.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return p.zoom < c.hH7.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return p.keyboardModeEnabled;
    }
    get colorblindMode() {
        return p.colorblindMode;
    }
    get lowContrastMode() {
        return p.lowContrastMode;
    }
    get saturation() {
        return p.saturation;
    }
    get contrast() {
        return p.contrast;
    }
    get desaturateUserColors() {
        return p.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return p.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return p.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != p.messageGroupSpacing ? p.messageGroupSpacing : o.hH.getSetting() ? d.y5 : d.ES;
    }
    get isMessageGroupSpacingIncreased() {
        let e = o.hH.getSetting() ? d.y5 : d.ES;
        return this.messageGroupSpacing > e;
    }
    get isMessageGroupSpacingDecreased() {
        let e = o.hH.getSetting() ? d.y5 : d.ES;
        return this.messageGroupSpacing < e;
    }
    get isSubmitButtonEnabled() {
        return p.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return p.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return p.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return p.prefersReducedMotion;
    }
    get useReducedMotion() {
        switch (p.prefersReducedMotion) {
            case "no-preference":
                return !1;
            case "reduce":
                return !0;
            default:
                return "reduce" === p.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return p.systemForcedColors;
    }
    get syncForcedColors() {
        return p.syncForcedColors;
    }
    get useForcedColors() {
        return !!p.syncForcedColors && "active" === p.systemForcedColors;
    }
    get systemPrefersContrast() {
        return p.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return p.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return p.alwaysShowLinkDecorations;
    }
    get enableCustomCursor() {
        return p.enableCustomCursor;
    }
    get roleStyle() {
        return p.roleStyle;
    }
    get displayNameStylesEnabled() {
        return p.displayNameStylesEnabled;
    }
    get isHighContrastModeEnabled() {
        return "high" === p.contrastMode;
    }
    get isSwitchIconsEnabled() {
        return p.switchIconsEnabled;
    }
    getUserAgnosticState() {
        return p;
    }
}
let W = new Y(a.h, {
    ACCESSIBILITY_SET_FONT_SIZE: E,
    ACCESSIBILITY_SET_ZOOM: g,
    ACCESSIBILITY_RESET_TO_DEFAULT: A,
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: I,
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: T,
    ACCESSIBILITY_COLORBLIND_TOGGLE: S,
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: y,
    ACCESSIBILITY_SET_SATURATION: N,
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: C,
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: U,
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: M,
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: L,
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: w,
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: x,
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: v,
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: P,
    ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: k,
    ACCESSIBILITY_SET_ROLE_STYLE: b,
    ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: R,
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: G,
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: F,
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: V,
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: O,
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: D,
    ACCESSIBILITY_SET_CONTRAST: B,
    ACCESSIBILITY_SET_CONTRAST_MODE: H,
    ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: j,
});
