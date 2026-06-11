"use strict";
n.d(t, { Ay: () => A, IG: () => f, _1: () => h });
var i,
    r,
    s = n(17928),
    a = n(506774),
    o = n(228366),
    l = n(885386),
    u = n(617617),
    c = n(353835),
    d = n(652215),
    _ = n(381941),
    h = (((i = {}).DEFAULT = "default"), (i.HIGH = "high"), i),
    f = (((r = {}).FLEXIBLE = "flexible"), (r.CONDENSED = "condensed"), (r.HIDDEN = "hidden"), r);
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
        appsButtonEnabled: !0,
        expressionPickerFormat: "flexible",
        condensePickerWhenNarrow: !0,
        emojiButtonEnabled: !0,
        gifButtonEnabled: !0,
        stickerButtonEnabled: !0,
    },
    E = p,
    m = {
        12: "font-size-12",
        14: "font-size-14",
        15: "font-size-15",
        16: "font-size-16",
        18: "font-size-18",
        20: "font-size-20",
        24: "font-size-24",
    };
class g extends s.Ay.DeviceSettingsStore {
    static displayName = "AccessibilityStore";
    static persistKey = "AccessibilityStore";
    static migrations = [
        () => {
            let e = "a11yFontScale",
                t = "a11yZoom",
                n = "a11yColorblindMode",
                i = a.w.get(e) || 100,
                r = a.w.get(t) || d.hH7.ZOOM_DEFAULT,
                s = a.w.get(n) || !1;
            return (
                a.w.remove(e),
                a.w.remove(t),
                a.w.remove(n),
                { fontScale: i, zoom: r, colorblindMode: s, keyboardModeEnabled: !1 }
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
        (e) => ({
            ...e,
            appsButtonEnabled: !0,
            expressionPickerFormat: "flexible",
            condensePickerWhenNarrow: !0,
            emojiButtonEnabled: !0,
            gifButtonEnabled: !0,
            stickerButtonEnabled: !0,
        }),
    ];
    initialize(e) {
        this.waitFor(u.A),
            isNaN((E = { ...p, ...(e ?? null) }).fontSize) && (E.fontSize = d.hH7.FONT_SIZE_DEFAULT),
            0 > _.qh.indexOf(null != E.messageGroupSpacing ? E.messageGroupSpacing : -1) &&
                (E.messageGroupSpacing = null);
    }
    get fontScale() {
        return (E.fontSize / d.hH7.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return E.fontSize;
    }
    get isFontScaledUp() {
        return E.fontSize > d.hH7.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return E.fontSize < d.hH7.FONT_SIZE_DEFAULT;
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
        return E.zoom;
    }
    get isZoomedIn() {
        return E.zoom > d.hH7.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return E.zoom < d.hH7.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return E.keyboardModeEnabled;
    }
    get colorblindMode() {
        return E.colorblindMode;
    }
    get lowContrastMode() {
        return E.lowContrastMode;
    }
    get saturation() {
        return E.saturation;
    }
    get contrast() {
        return E.contrast;
    }
    get desaturateUserColors() {
        return E.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return E.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return E.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != E.messageGroupSpacing ? E.messageGroupSpacing : l.hH.getSetting() ? _.y5 : _.ES;
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
        return E.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return E.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return E.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return E.prefersReducedMotion;
    }
    get useReducedMotion() {
        switch (E.prefersReducedMotion) {
            case "no-preference":
                return !1;
            case "reduce":
                return !0;
            default:
                return "reduce" === E.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return E.systemForcedColors;
    }
    get syncForcedColors() {
        return E.syncForcedColors;
    }
    get useForcedColors() {
        return !!E.syncForcedColors && "active" === E.systemForcedColors;
    }
    get systemPrefersContrast() {
        return E.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return E.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return E.alwaysShowLinkDecorations;
    }
    get enableCustomCursor() {
        return E.enableCustomCursor;
    }
    get roleStyle() {
        return E.roleStyle;
    }
    get displayNameStylesEnabled() {
        return E.displayNameStylesEnabled;
    }
    get isHighContrastModeEnabled() {
        return "high" === E.contrastMode;
    }
    get isSwitchIconsEnabled() {
        return E.switchIconsEnabled;
    }
    get isAppsButtonEnabled() {
        return E.appsButtonEnabled;
    }
    get expressionPickerFormat() {
        return E.expressionPickerFormat;
    }
    get condensePickerWhenNarrow() {
        return E.condensePickerWhenNarrow;
    }
    get isEmojiButtonEnabled() {
        return E.emojiButtonEnabled;
    }
    get isGifButtonEnabled() {
        return E.gifButtonEnabled;
    }
    get isStickerButtonEnabled() {
        return E.stickerButtonEnabled;
    }
    getUserAgnosticState() {
        return E;
    }
}
let A = new g(o.h, {
    ACCESSIBILITY_SET_FONT_SIZE: function (e) {
        var t;
        let n = ((t = e.fontSize), d.hH7.FONT_SIZES.indexOf(t) >= 0 ? t : d.hH7.FONT_SIZE_DEFAULT);
        if (n > d.hH7.FONT_SIZE_MAX || n < d.hH7.FONT_SIZE_MIN || E.fontSize === n) return !1;
        (E = { ...E }).fontSize = n;
    },
    ACCESSIBILITY_SET_ZOOM: function (e) {
        if (e.zoom < d.hH7.ZOOM_MIN || e.zoom > d.hH7.ZOOM_MAX || E.zoom === e.zoom) return !1;
        ((E = { ...E }).zoom = e.zoom), c.A.setZoomFactor(E.zoom);
    },
    ACCESSIBILITY_RESET_TO_DEFAULT: function () {
        let e = E.fontSize !== d.hH7.FONT_SIZE_DEFAULT,
            t = E.zoom !== d.hH7.ZOOM_DEFAULT;
        if (!e && !t) return !1;
        (E = { ...E }).fontSize !== d.hH7.FONT_SIZE_DEFAULT && (E.fontSize = d.hH7.FONT_SIZE_DEFAULT),
            E.zoom !== d.hH7.ZOOM_DEFAULT && ((E.zoom = d.hH7.ZOOM_DEFAULT), c.A.setZoomFactor(E.zoom));
    },
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function () {
        if (E.keyboardModeEnabled) return !1;
        (E = { ...E }).keyboardModeEnabled = !0;
    },
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function () {
        if (!E.keyboardModeEnabled) return !1;
        (E = { ...E }).keyboardModeEnabled = !1;
    },
    ACCESSIBILITY_COLORBLIND_TOGGLE: function () {
        (E = { ...E }).colorblindMode = !E.colorblindMode;
    },
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function () {
        (E = { ...E }).lowContrastMode = !E.lowContrastMode;
    },
    ACCESSIBILITY_SET_SATURATION: function (e) {
        (E = { ...E }).saturation = e.saturation;
    },
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function () {
        (E = { ...E }).desaturateUserColors = !E.desaturateUserColors;
    },
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function (e) {
        E = { ...E, systemForcedColors: e.systemForcedColors ?? "none" };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function (e) {
        if (E.systemPrefersContrast === e.systemPrefersContrast) return !1;
        E = { ...E, systemPrefersContrast: e.systemPrefersContrast };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function (e) {
        if (E.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
        E = { ...E, systemPrefersReducedMotion: e.systemPrefersReducedMotion };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function (e) {
        if (E.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
        E = { ...E, systemPrefersCrossfades: e.systemPrefersCrossfades };
    },
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function (e) {
        if (E.prefersReducedMotion === e.prefersReducedMotion) return !1;
        E = { ...E, prefersReducedMotion: e.prefersReducedMotion };
    },
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function (e) {
        E.syncForcedColors = e.syncForcedColors;
    },
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function (e) {
        E = { ...E, alwaysShowLinkDecorations: e.alwaysShowLinkDecorations };
    },
    ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: function (e) {
        E = { ...E, enableCustomCursor: e.enableCustomCursor };
    },
    ACCESSIBILITY_SET_ROLE_STYLE: function (e) {
        E.roleStyle = e.roleStyle;
    },
    ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: function (e) {
        E.displayNameStylesEnabled = e.enabled;
    },
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function () {
        E.forcedColorsModalSeen = !0;
    },
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function () {
        E = { ...E, keyboardNavigationExplainerModalSeen: !0 };
    },
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function (e) {
        let { messageGroupSpacing: t } = e;
        E = { ...E, messageGroupSpacing: t };
    },
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function () {
        (E = { ...E }).submitButtonEnabled = !E.submitButtonEnabled;
    },
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function () {
        (E = { ...E }).syncProfileThemeWithUserTheme = !E.syncProfileThemeWithUserTheme;
    },
    ACCESSIBILITY_SET_CONTRAST: function (e) {
        let { contrast: t } = e;
        E = { ...E, contrast: t };
    },
    ACCESSIBILITY_SET_CONTRAST_MODE: function (e) {
        let { contrastMode: t } = e;
        E = { ...E, contrastMode: t };
    },
    ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: function (e) {
        E = { ...E, switchIconsEnabled: e.switchIconsEnabled };
    },
    ACCESSIBILITY_SET_CHAT_BAR_SETTINGS: function (e) {
        E = {
            ...E,
            ...(null != e.appsButtonEnabled && { appsButtonEnabled: e.appsButtonEnabled }),
            ...(null != e.expressionPickerFormat && { expressionPickerFormat: e.expressionPickerFormat }),
            ...(null != e.condensePickerWhenNarrow && { condensePickerWhenNarrow: e.condensePickerWhenNarrow }),
            ...(null != e.emojiButtonEnabled && { emojiButtonEnabled: e.emojiButtonEnabled }),
            ...(null != e.gifButtonEnabled && { gifButtonEnabled: e.gifButtonEnabled }),
            ...(null != e.stickerButtonEnabled && { stickerButtonEnabled: e.stickerButtonEnabled }),
        };
    },
});
