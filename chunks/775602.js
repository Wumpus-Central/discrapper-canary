"use strict";
n.d(t, { A: () => K, _: () => f });
var r = n(311907),
    i = n(506774),
    a = n(582754),
    s = n(73153),
    o = n(802124),
    l = n(253932),
    u = n(617617),
    c = n(353835),
    d = n(652215),
    _ = n(381941),
    f = (function (e) {
        return (e.DEFAULT = "default"), (e.HIGH = "high"), e;
    })({});
let p = {
        fontSize: d.hH7.FONT_SIZE_DEFAULT,
        zoom: d.hH7.ZOOM_DEFAULT,
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
    h = p,
    m = {
        12: "font-size-12",
        14: "font-size-14",
        15: "font-size-15",
        16: "font-size-16",
        18: "font-size-18",
        20: "font-size-20",
        24: "font-size-24",
    };
function g(e) {
    return d.hH7.FONT_SIZES.indexOf(e) >= 0 ? e : d.hH7.FONT_SIZE_DEFAULT;
}
function E(e) {
    let t = g(e.fontSize);
    if (t > d.hH7.FONT_SIZE_MAX || t < d.hH7.FONT_SIZE_MIN || h.fontSize === t) return !1;
    (h = { ...h }).fontSize = t;
}
function A(e) {
    if (e.zoom < d.hH7.ZOOM_MIN || e.zoom > d.hH7.ZOOM_MAX || h.zoom === e.zoom) return !1;
    ((h = { ...h }).zoom = e.zoom), c.A.setZoomFactor(h.zoom);
}
function I() {
    let e = h.fontSize !== d.hH7.FONT_SIZE_DEFAULT,
        t = h.zoom !== d.hH7.ZOOM_DEFAULT;
    if (!e && !t) return !1;
    (h = { ...h }).fontSize !== d.hH7.FONT_SIZE_DEFAULT && (h.fontSize = d.hH7.FONT_SIZE_DEFAULT),
        h.zoom !== d.hH7.ZOOM_DEFAULT && ((h.zoom = d.hH7.ZOOM_DEFAULT), c.A.setZoomFactor(h.zoom));
}
function T() {
    if (h.keyboardModeEnabled) return !1;
    (h = { ...h }).keyboardModeEnabled = !0;
}
function y() {
    if (!h.keyboardModeEnabled) return !1;
    (h = { ...h }).keyboardModeEnabled = !1;
}
function S() {
    (h = { ...h }).colorblindMode = !h.colorblindMode;
}
function v() {
    (h = { ...h }).lowContrastMode = !h.lowContrastMode;
}
function C(e) {
    h.syncForcedColors = e.syncForcedColors;
}
function b(e) {
    (h = { ...h }).saturation = e.saturation;
}
function N() {
    (h = { ...h }).desaturateUserColors = !h.desaturateUserColors;
}
function R(e) {
    h.roleStyle = e.roleStyle;
}
function O(e) {
    h.displayNameStylesEnabled = e.enabled;
}
function D() {
    (h = { ...h }).submitButtonEnabled = !h.submitButtonEnabled;
}
function L() {
    (h = { ...h }).syncProfileThemeWithUserTheme = !h.syncProfileThemeWithUserTheme;
}
function w(e) {
    if (h.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
    h = { ...h, systemPrefersReducedMotion: e.systemPrefersReducedMotion };
}
function x(e) {
    if (h.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
    h = { ...h, systemPrefersCrossfades: e.systemPrefersCrossfades };
}
function P(e) {
    if (h.prefersReducedMotion === e.prefersReducedMotion) return !1;
    h = { ...h, prefersReducedMotion: e.prefersReducedMotion };
}
function M(e) {
    if (h.systemPrefersContrast === e.systemPrefersContrast) return !1;
    h = { ...h, systemPrefersContrast: e.systemPrefersContrast };
}
function k(e) {
    h = { ...h, alwaysShowLinkDecorations: e.alwaysShowLinkDecorations };
}
function U(e) {
    h = { ...h, enableCustomCursor: e.enableCustomCursor };
}
function G(e) {
    return (h = { ...h, systemForcedColors: e.systemForcedColors ?? "none" }), !0;
}
function V() {
    h.forcedColorsModalSeen = !0;
}
function F() {
    h = { ...h, keyboardNavigationExplainerModalSeen: !0 };
}
function B(e) {
    let { messageGroupSpacing: t } = e;
    h = { ...h, messageGroupSpacing: t };
}
function j(e) {
    let { contrast: t } = e;
    h = { ...h, contrast: t };
}
function H(e) {
    let { contrastMode: t } = e;
    h = { ...h, contrastMode: t };
}
function Y(e) {
    h = { ...h, switchIconsEnabled: e.switchIconsEnabled };
}
class W extends r.Ay.DeviceSettingsStore {
    static displayName = "AccessibilityStore";
    static persistKey = "AccessibilityStore";
    static migrations = [
        () => {
            let e = "a11yFontScale",
                t = "a11yZoom",
                n = "a11yColorblindMode",
                r = i.w.get(e) || 100,
                a = i.w.get(t) || d.hH7.ZOOM_DEFAULT,
                s = i.w.get(n) || !1;
            return (
                i.w.remove(e),
                i.w.remove(t),
                i.w.remove(n),
                { fontScale: r, zoom: a, colorblindMode: s, keyboardModeEnabled: !1 }
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
        (e) => ({ ...e, alwaysShowLinkDecorations: e.saturation <= a.yv }),
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
        this.waitFor(u.A),
            this.waitFor(o.A),
            isNaN((h = { ...p, ...(e ?? null) }).fontSize) && (h.fontSize = d.hH7.FONT_SIZE_DEFAULT),
            0 > _.qh.indexOf(null != h.messageGroupSpacing ? h.messageGroupSpacing : -1) &&
                (h.messageGroupSpacing = null);
    }
    get fontScale() {
        return (h.fontSize / d.hH7.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return h.fontSize;
    }
    get isFontScaledUp() {
        return h.fontSize > d.hH7.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return h.fontSize < d.hH7.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        let e = m[this.fontSize] ?? "";
        return this.isFontScaledUp
            ? `a11y-font-scaled-up ${e}`
            : this.isFontScaledDown
              ? `a11y-font-scaled-down ${e}`
              : `${e}`;
    }
    get zoom() {
        return h.zoom;
    }
    get isZoomedIn() {
        return h.zoom > d.hH7.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return h.zoom < d.hH7.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return h.keyboardModeEnabled;
    }
    get colorblindMode() {
        return h.colorblindMode;
    }
    get lowContrastMode() {
        return h.lowContrastMode;
    }
    get saturation() {
        return h.saturation;
    }
    get contrast() {
        return h.contrast;
    }
    get desaturateUserColors() {
        return h.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return h.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return h.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != h.messageGroupSpacing ? h.messageGroupSpacing : l.hH.getSetting() ? _.y5 : _.ES;
    }
    get isMessageGroupSpacingIncreased() {
        let e = l.hH.getSetting() ? _.y5 : _.ES;
        return this.messageGroupSpacing > e;
    }
    get isMessageGroupSpacingDecreased() {
        let e = l.hH.getSetting() ? _.y5 : _.ES;
        return this.messageGroupSpacing < e;
    }
    get isSubmitButtonEnabled() {
        return h.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return h.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return h.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return h.prefersReducedMotion;
    }
    get useReducedMotion() {
        if (o.A.active) return !0;
        switch (h.prefersReducedMotion) {
            case "no-preference":
                return !1;
            case "reduce":
                return !0;
            default:
                return "reduce" === h.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return h.systemForcedColors;
    }
    get syncForcedColors() {
        return h.syncForcedColors;
    }
    get useForcedColors() {
        return !!h.syncForcedColors && "active" === h.systemForcedColors;
    }
    get systemPrefersContrast() {
        return h.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return h.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return h.alwaysShowLinkDecorations;
    }
    get enableCustomCursor() {
        return h.enableCustomCursor;
    }
    get roleStyle() {
        return h.roleStyle;
    }
    get displayNameStylesEnabled() {
        return h.displayNameStylesEnabled;
    }
    get isHighContrastModeEnabled() {
        return "high" === h.contrastMode;
    }
    get isSwitchIconsEnabled() {
        return h.switchIconsEnabled;
    }
    getUserAgnosticState() {
        return h;
    }
}
let K = new W(s.h, {
    ACCESSIBILITY_SET_FONT_SIZE: E,
    ACCESSIBILITY_SET_ZOOM: A,
    ACCESSIBILITY_RESET_TO_DEFAULT: I,
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: T,
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: y,
    ACCESSIBILITY_COLORBLIND_TOGGLE: S,
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: v,
    ACCESSIBILITY_SET_SATURATION: b,
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: N,
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: G,
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: M,
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: w,
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: x,
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: P,
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: C,
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: k,
    ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: U,
    ACCESSIBILITY_SET_ROLE_STYLE: R,
    ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: O,
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: V,
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: F,
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: B,
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: D,
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: L,
    ACCESSIBILITY_SET_CONTRAST: j,
    ACCESSIBILITY_SET_CONTRAST_MODE: H,
    ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: Y,
});
