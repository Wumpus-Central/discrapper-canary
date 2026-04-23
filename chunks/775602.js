"use strict";
n.d(t, { A: () => g, _: () => c });
var i,
    r = n(17928),
    s = n(506774),
    a = n(228366),
    o = n(253932),
    l = n(617617),
    d = n(353835),
    _ = n(652215),
    u = n(381941),
    c = (((i = {}).DEFAULT = "default"), (i.HIGH = "high"), i);
let E = {
        fontSize: _.hH7.FONT_SIZE_DEFAULT,
        zoom: _.hH7.ZOOM_DEFAULT,
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
    h = E,
    m = {
        12: "font-size-12",
        14: "font-size-14",
        15: "font-size-15",
        16: "font-size-16",
        18: "font-size-18",
        20: "font-size-20",
        24: "font-size-24",
    };
class f extends r.Ay.DeviceSettingsStore {
    static displayName = "AccessibilityStore";
    static persistKey = "AccessibilityStore";
    static migrations = [
        () => {
            let e = "a11yFontScale",
                t = "a11yZoom",
                n = "a11yColorblindMode",
                i = s.w.get(e) || 100,
                r = s.w.get(t) || _.hH7.ZOOM_DEFAULT,
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
            isNaN((h = { ...E, ...(e ?? null) }).fontSize) && (h.fontSize = _.hH7.FONT_SIZE_DEFAULT),
            0 > u.qh.indexOf(null != h.messageGroupSpacing ? h.messageGroupSpacing : -1) &&
                (h.messageGroupSpacing = null);
    }
    get fontScale() {
        return (h.fontSize / _.hH7.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return h.fontSize;
    }
    get isFontScaledUp() {
        return h.fontSize > _.hH7.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return h.fontSize < _.hH7.FONT_SIZE_DEFAULT;
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
        return h.zoom > _.hH7.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return h.zoom < _.hH7.ZOOM_DEFAULT;
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
        return null != h.messageGroupSpacing ? h.messageGroupSpacing : o.hH.getSetting() ? u.y5 : u.ES;
    }
    get isMessageGroupSpacingIncreased() {
        let e = o.hH.getSetting() ? u.y5 : u.ES;
        return this.messageGroupSpacing > e;
    }
    get isMessageGroupSpacingDecreased() {
        let e = o.hH.getSetting() ? u.y5 : u.ES;
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
let g = new f(a.h, {
    ACCESSIBILITY_SET_FONT_SIZE: function (e) {
        var t;
        let n = ((t = e.fontSize), _.hH7.FONT_SIZES.indexOf(t) >= 0 ? t : _.hH7.FONT_SIZE_DEFAULT);
        if (n > _.hH7.FONT_SIZE_MAX || n < _.hH7.FONT_SIZE_MIN || h.fontSize === n) return !1;
        (h = { ...h }).fontSize = n;
    },
    ACCESSIBILITY_SET_ZOOM: function (e) {
        if (e.zoom < _.hH7.ZOOM_MIN || e.zoom > _.hH7.ZOOM_MAX || h.zoom === e.zoom) return !1;
        ((h = { ...h }).zoom = e.zoom), d.A.setZoomFactor(h.zoom);
    },
    ACCESSIBILITY_RESET_TO_DEFAULT: function () {
        let e = h.fontSize !== _.hH7.FONT_SIZE_DEFAULT,
            t = h.zoom !== _.hH7.ZOOM_DEFAULT;
        if (!e && !t) return !1;
        (h = { ...h }).fontSize !== _.hH7.FONT_SIZE_DEFAULT && (h.fontSize = _.hH7.FONT_SIZE_DEFAULT),
            h.zoom !== _.hH7.ZOOM_DEFAULT && ((h.zoom = _.hH7.ZOOM_DEFAULT), d.A.setZoomFactor(h.zoom));
    },
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function () {
        if (h.keyboardModeEnabled) return !1;
        (h = { ...h }).keyboardModeEnabled = !0;
    },
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function () {
        if (!h.keyboardModeEnabled) return !1;
        (h = { ...h }).keyboardModeEnabled = !1;
    },
    ACCESSIBILITY_COLORBLIND_TOGGLE: function () {
        (h = { ...h }).colorblindMode = !h.colorblindMode;
    },
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function () {
        (h = { ...h }).lowContrastMode = !h.lowContrastMode;
    },
    ACCESSIBILITY_SET_SATURATION: function (e) {
        (h = { ...h }).saturation = e.saturation;
    },
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function () {
        (h = { ...h }).desaturateUserColors = !h.desaturateUserColors;
    },
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function (e) {
        return (h = { ...h, systemForcedColors: e.systemForcedColors ?? "none" }), !0;
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function (e) {
        if (h.systemPrefersContrast === e.systemPrefersContrast) return !1;
        h = { ...h, systemPrefersContrast: e.systemPrefersContrast };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function (e) {
        if (h.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
        h = { ...h, systemPrefersReducedMotion: e.systemPrefersReducedMotion };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function (e) {
        if (h.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
        h = { ...h, systemPrefersCrossfades: e.systemPrefersCrossfades };
    },
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function (e) {
        if (h.prefersReducedMotion === e.prefersReducedMotion) return !1;
        h = { ...h, prefersReducedMotion: e.prefersReducedMotion };
    },
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function (e) {
        h.syncForcedColors = e.syncForcedColors;
    },
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function (e) {
        h = { ...h, alwaysShowLinkDecorations: e.alwaysShowLinkDecorations };
    },
    ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: function (e) {
        h = { ...h, enableCustomCursor: e.enableCustomCursor };
    },
    ACCESSIBILITY_SET_ROLE_STYLE: function (e) {
        h.roleStyle = e.roleStyle;
    },
    ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: function (e) {
        h.displayNameStylesEnabled = e.enabled;
    },
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function () {
        h.forcedColorsModalSeen = !0;
    },
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function () {
        h = { ...h, keyboardNavigationExplainerModalSeen: !0 };
    },
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function (e) {
        let { messageGroupSpacing: t } = e;
        h = { ...h, messageGroupSpacing: t };
    },
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function () {
        (h = { ...h }).submitButtonEnabled = !h.submitButtonEnabled;
    },
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function () {
        (h = { ...h }).syncProfileThemeWithUserTheme = !h.syncProfileThemeWithUserTheme;
    },
    ACCESSIBILITY_SET_CONTRAST: function (e) {
        let { contrast: t } = e;
        h = { ...h, contrast: t };
    },
    ACCESSIBILITY_SET_CONTRAST_MODE: function (e) {
        let { contrastMode: t } = e;
        h = { ...h, contrastMode: t };
    },
    ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: function (e) {
        h = { ...h, switchIconsEnabled: e.switchIconsEnabled };
    },
});
