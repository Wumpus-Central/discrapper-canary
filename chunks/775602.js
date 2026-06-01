"use strict";
n.d(t, { A: () => m, _: () => _ });
var i,
    r = n(17928),
    s = n(506774),
    a = n(228366),
    o = n(885386),
    l = n(617617),
    u = n(353835),
    c = n(652215),
    d = n(381941),
    _ = (((i = {}).DEFAULT = "default"), (i.HIGH = "high"), i);
let h = {
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
    f = h,
    p = {
        12: "font-size-12",
        14: "font-size-14",
        15: "font-size-15",
        16: "font-size-16",
        18: "font-size-18",
        20: "font-size-20",
        24: "font-size-24",
    };
class E extends r.Ay.DeviceSettingsStore {
    static displayName = "AccessibilityStore";
    static persistKey = "AccessibilityStore";
    static migrations = [
        () => {
            let e = "a11yFontScale",
                t = "a11yZoom",
                n = "a11yColorblindMode",
                i = s.w.get(e) || 100,
                r = s.w.get(t) || c.hH7.ZOOM_DEFAULT,
                a = s.w.get(n) || !1;
            return (
                s.w.remove(e),
                s.w.remove(t),
                s.w.remove(n),
                { fontScale: i, zoom: r, colorblindMode: a, keyboardModeEnabled: !1 }
            );
        },
        (e) => {
            let { fontScale: t, ...n } = e,
                i = 16;
            switch (t) {
                case 82:
                    i = 12;
                    break;
                case 92:
                    i = 15;
                    break;
                case 100:
                    i = 16;
                    break;
                case 110:
                    i = 18;
                    break;
                case 125:
                    i = 20;
                    break;
                case 150:
                    i = 24;
            }
            return { ...n, fontSize: i };
        },
        (e) => ({ ...e, darkSidebar: !1 }),
        (e) => ({ ...e, messageGroupSpacing: null }),
        (e) => ({ ...e, systemPrefersReducedMotion: "no-preference", prefersReducedMotion: "auto" }),
        (e) => ({ ...e, alwaysShowLinkDecorations: e.saturation <= 0.4 }),
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
            isNaN((f = { ...h, ...(e ?? null) }).fontSize) && (f.fontSize = c.hH7.FONT_SIZE_DEFAULT),
            0 > d.qh.indexOf(null != f.messageGroupSpacing ? f.messageGroupSpacing : -1) &&
                (f.messageGroupSpacing = null);
    }
    get fontScale() {
        return (f.fontSize / c.hH7.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return f.fontSize;
    }
    get isFontScaledUp() {
        return f.fontSize > c.hH7.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return f.fontSize < c.hH7.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        let e = p[this.fontSize] ?? "";
        return this.isFontScaledUp
            ? `a11y-font-scaled-up ${e}`
            : this.isFontScaledDown
              ? `a11y-font-scaled-down ${e}`
              : `${e}`;
    }
    get zoom() {
        return f.zoom;
    }
    get isZoomedIn() {
        return f.zoom > c.hH7.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return f.zoom < c.hH7.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return f.keyboardModeEnabled;
    }
    get colorblindMode() {
        return f.colorblindMode;
    }
    get lowContrastMode() {
        return f.lowContrastMode;
    }
    get saturation() {
        return f.saturation;
    }
    get contrast() {
        return f.contrast;
    }
    get desaturateUserColors() {
        return f.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return f.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return f.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != f.messageGroupSpacing ? f.messageGroupSpacing : o.hH.getSetting() ? d.y5 : d.ES;
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
        return f.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return f.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return f.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return f.prefersReducedMotion;
    }
    get useReducedMotion() {
        switch (f.prefersReducedMotion) {
            case "no-preference":
                return !1;
            case "reduce":
                return !0;
            default:
                return "reduce" === f.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return f.systemForcedColors;
    }
    get syncForcedColors() {
        return f.syncForcedColors;
    }
    get useForcedColors() {
        return !!f.syncForcedColors && "active" === f.systemForcedColors;
    }
    get systemPrefersContrast() {
        return f.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return f.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return f.alwaysShowLinkDecorations;
    }
    get enableCustomCursor() {
        return f.enableCustomCursor;
    }
    get roleStyle() {
        return f.roleStyle;
    }
    get displayNameStylesEnabled() {
        return f.displayNameStylesEnabled;
    }
    get isHighContrastModeEnabled() {
        return "high" === f.contrastMode;
    }
    get isSwitchIconsEnabled() {
        return f.switchIconsEnabled;
    }
    getUserAgnosticState() {
        return f;
    }
}
let m = new E(a.h, {
    ACCESSIBILITY_SET_FONT_SIZE: function (e) {
        var t;
        let n = ((t = e.fontSize), c.hH7.FONT_SIZES.indexOf(t) >= 0 ? t : c.hH7.FONT_SIZE_DEFAULT);
        if (n > c.hH7.FONT_SIZE_MAX || n < c.hH7.FONT_SIZE_MIN || f.fontSize === n) return !1;
        (f = { ...f }).fontSize = n;
    },
    ACCESSIBILITY_SET_ZOOM: function (e) {
        if (e.zoom < c.hH7.ZOOM_MIN || e.zoom > c.hH7.ZOOM_MAX || f.zoom === e.zoom) return !1;
        ((f = { ...f }).zoom = e.zoom), u.A.setZoomFactor(f.zoom);
    },
    ACCESSIBILITY_RESET_TO_DEFAULT: function () {
        let e = f.fontSize !== c.hH7.FONT_SIZE_DEFAULT,
            t = f.zoom !== c.hH7.ZOOM_DEFAULT;
        if (!e && !t) return !1;
        (f = { ...f }).fontSize !== c.hH7.FONT_SIZE_DEFAULT && (f.fontSize = c.hH7.FONT_SIZE_DEFAULT),
            f.zoom !== c.hH7.ZOOM_DEFAULT && ((f.zoom = c.hH7.ZOOM_DEFAULT), u.A.setZoomFactor(f.zoom));
    },
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function () {
        if (f.keyboardModeEnabled) return !1;
        (f = { ...f }).keyboardModeEnabled = !0;
    },
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function () {
        if (!f.keyboardModeEnabled) return !1;
        (f = { ...f }).keyboardModeEnabled = !1;
    },
    ACCESSIBILITY_COLORBLIND_TOGGLE: function () {
        (f = { ...f }).colorblindMode = !f.colorblindMode;
    },
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function () {
        (f = { ...f }).lowContrastMode = !f.lowContrastMode;
    },
    ACCESSIBILITY_SET_SATURATION: function (e) {
        (f = { ...f }).saturation = e.saturation;
    },
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function () {
        (f = { ...f }).desaturateUserColors = !f.desaturateUserColors;
    },
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function (e) {
        f = { ...f, systemForcedColors: e.systemForcedColors ?? "none" };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function (e) {
        if (f.systemPrefersContrast === e.systemPrefersContrast) return !1;
        f = { ...f, systemPrefersContrast: e.systemPrefersContrast };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function (e) {
        if (f.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
        f = { ...f, systemPrefersReducedMotion: e.systemPrefersReducedMotion };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function (e) {
        if (f.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
        f = { ...f, systemPrefersCrossfades: e.systemPrefersCrossfades };
    },
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function (e) {
        if (f.prefersReducedMotion === e.prefersReducedMotion) return !1;
        f = { ...f, prefersReducedMotion: e.prefersReducedMotion };
    },
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function (e) {
        f.syncForcedColors = e.syncForcedColors;
    },
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function (e) {
        f = { ...f, alwaysShowLinkDecorations: e.alwaysShowLinkDecorations };
    },
    ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: function (e) {
        f = { ...f, enableCustomCursor: e.enableCustomCursor };
    },
    ACCESSIBILITY_SET_ROLE_STYLE: function (e) {
        f.roleStyle = e.roleStyle;
    },
    ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: function (e) {
        f.displayNameStylesEnabled = e.enabled;
    },
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function () {
        f.forcedColorsModalSeen = !0;
    },
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function () {
        f = { ...f, keyboardNavigationExplainerModalSeen: !0 };
    },
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function (e) {
        let { messageGroupSpacing: t } = e;
        f = { ...f, messageGroupSpacing: t };
    },
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function () {
        (f = { ...f }).submitButtonEnabled = !f.submitButtonEnabled;
    },
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function () {
        (f = { ...f }).syncProfileThemeWithUserTheme = !f.syncProfileThemeWithUserTheme;
    },
    ACCESSIBILITY_SET_CONTRAST: function (e) {
        let { contrast: t } = e;
        f = { ...f, contrast: t };
    },
    ACCESSIBILITY_SET_CONTRAST_MODE: function (e) {
        let { contrastMode: t } = e;
        f = { ...f, contrastMode: t };
    },
    ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: function (e) {
        f = { ...f, switchIconsEnabled: e.switchIconsEnabled };
    },
});
