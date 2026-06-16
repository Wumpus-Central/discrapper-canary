"use strict";
n.d(t, { Ay: () => T, IG: () => p, _1: () => f });
var i,
    r,
    s = n(17928),
    a = n(506774),
    o = n(228366),
    l = n(363195),
    u = n(885386),
    c = n(617617),
    d = n(353835),
    _ = n(652215),
    h = n(381941),
    f = (((i = {}).DEFAULT = "default"), (i.HIGH = "high"), i),
    p = (((r = {}).FLEXIBLE = "flexible"), (r.CONDENSED = "condensed"), (r.HIDDEN = "hidden"), r);
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
        officialMessageStyle: "default",
        officialMessageStyleExplicitlySet: !1,
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
    m = E,
    g = {
        12: "font-size-12",
        14: "font-size-14",
        15: "font-size-15",
        16: "font-size-16",
        18: "font-size-18",
        20: "font-size-20",
        24: "font-size-24",
    };
function A() {
    let e;
    return (
        !m.officialMessageStyleExplicitlySet &&
        !!(
            "default" === m.officialMessageStyle &&
            l.A.theme === _.NJ8.LIGHT &&
            (null != (e = u.eh.getSetting()).backgroundGradientPresetId ||
                (e.customUserThemeSettings?.colors?.length ?? 0) > 0)
        ) &&
        ((m.officialMessageStyle = "no_text_color"), !0)
    );
}
class I extends s.Ay.DeviceSettingsStore {
    static displayName = "AccessibilityStore";
    static persistKey = "AccessibilityStore";
    static migrations = [
        () => {
            let e = "a11yFontScale",
                t = "a11yZoom",
                n = "a11yColorblindMode",
                i = a.w.get(e) || 100,
                r = a.w.get(t) || _.hH7.ZOOM_DEFAULT,
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
        this.waitFor(c.A),
            isNaN((m = { ...E, ...(e ?? null) }).fontSize) && (m.fontSize = _.hH7.FONT_SIZE_DEFAULT),
            0 > h.qh.indexOf(null != m.messageGroupSpacing ? m.messageGroupSpacing : -1) &&
                (m.messageGroupSpacing = null),
            this.syncWith([c.A], A);
    }
    get fontScale() {
        return (m.fontSize / _.hH7.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return m.fontSize;
    }
    get isFontScaledUp() {
        return m.fontSize > _.hH7.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return m.fontSize < _.hH7.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        let e = g[this.fontSize] ?? "";
        return this.isFontScaledUp
            ? `a11y-font-scaled-up ${e}`
            : this.isFontScaledDown
              ? `a11y-font-scaled-down ${e}`
              : `${e}`;
    }
    get zoom() {
        return m.zoom;
    }
    get isZoomedIn() {
        return m.zoom > _.hH7.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return m.zoom < _.hH7.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return m.keyboardModeEnabled;
    }
    get colorblindMode() {
        return m.colorblindMode;
    }
    get lowContrastMode() {
        return m.lowContrastMode;
    }
    get saturation() {
        return m.saturation;
    }
    get contrast() {
        return m.contrast;
    }
    get desaturateUserColors() {
        return m.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return m.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return m.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != m.messageGroupSpacing ? m.messageGroupSpacing : u.hH.getSetting() ? h.y5 : h.ES;
    }
    get isMessageGroupSpacingIncreased() {
        let e = u.hH.getSetting() ? h.y5 : h.ES;
        return this.messageGroupSpacing > e;
    }
    get isMessageGroupSpacingDecreased() {
        let e = u.hH.getSetting() ? h.y5 : h.ES;
        return this.messageGroupSpacing < e;
    }
    get isSubmitButtonEnabled() {
        return m.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return m.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return m.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return m.prefersReducedMotion;
    }
    get useReducedMotion() {
        switch (m.prefersReducedMotion) {
            case "no-preference":
                return !1;
            case "reduce":
                return !0;
            default:
                return "reduce" === m.systemPrefersReducedMotion;
        }
    }
    get systemForcedColors() {
        return m.systemForcedColors;
    }
    get syncForcedColors() {
        return m.syncForcedColors;
    }
    get useForcedColors() {
        return !!m.syncForcedColors && "active" === m.systemForcedColors;
    }
    get systemPrefersContrast() {
        return m.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return m.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return m.alwaysShowLinkDecorations;
    }
    get enableCustomCursor() {
        return m.enableCustomCursor;
    }
    get roleStyle() {
        return m.roleStyle;
    }
    get officialMessageStyle() {
        return m.officialMessageStyle;
    }
    get displayNameStylesEnabled() {
        return m.displayNameStylesEnabled;
    }
    get isHighContrastModeEnabled() {
        return "high" === m.contrastMode;
    }
    get isSwitchIconsEnabled() {
        return m.switchIconsEnabled;
    }
    get isAppsButtonEnabled() {
        return m.appsButtonEnabled;
    }
    get expressionPickerFormat() {
        return m.expressionPickerFormat;
    }
    get condensePickerWhenNarrow() {
        return m.condensePickerWhenNarrow;
    }
    get isEmojiButtonEnabled() {
        return m.emojiButtonEnabled;
    }
    get isGifButtonEnabled() {
        return m.gifButtonEnabled;
    }
    get isStickerButtonEnabled() {
        return m.stickerButtonEnabled;
    }
    getUserAgnosticState() {
        return m;
    }
}
let T = new I(o.h, {
    ACCESSIBILITY_SET_FONT_SIZE: function (e) {
        var t;
        let n = ((t = e.fontSize), _.hH7.FONT_SIZES.indexOf(t) >= 0 ? t : _.hH7.FONT_SIZE_DEFAULT);
        if (n > _.hH7.FONT_SIZE_MAX || n < _.hH7.FONT_SIZE_MIN || m.fontSize === n) return !1;
        (m = { ...m }).fontSize = n;
    },
    ACCESSIBILITY_SET_ZOOM: function (e) {
        if (e.zoom < _.hH7.ZOOM_MIN || e.zoom > _.hH7.ZOOM_MAX || m.zoom === e.zoom) return !1;
        ((m = { ...m }).zoom = e.zoom), d.A.setZoomFactor(m.zoom);
    },
    ACCESSIBILITY_RESET_TO_DEFAULT: function () {
        let e = m.fontSize !== _.hH7.FONT_SIZE_DEFAULT,
            t = m.zoom !== _.hH7.ZOOM_DEFAULT;
        if (!e && !t) return !1;
        (m = { ...m }).fontSize !== _.hH7.FONT_SIZE_DEFAULT && (m.fontSize = _.hH7.FONT_SIZE_DEFAULT),
            m.zoom !== _.hH7.ZOOM_DEFAULT && ((m.zoom = _.hH7.ZOOM_DEFAULT), d.A.setZoomFactor(m.zoom));
    },
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function () {
        if (m.keyboardModeEnabled) return !1;
        (m = { ...m }).keyboardModeEnabled = !0;
    },
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function () {
        if (!m.keyboardModeEnabled) return !1;
        (m = { ...m }).keyboardModeEnabled = !1;
    },
    ACCESSIBILITY_COLORBLIND_TOGGLE: function () {
        (m = { ...m }).colorblindMode = !m.colorblindMode;
    },
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function () {
        (m = { ...m }).lowContrastMode = !m.lowContrastMode;
    },
    ACCESSIBILITY_SET_SATURATION: function (e) {
        (m = { ...m }).saturation = e.saturation;
    },
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function () {
        (m = { ...m }).desaturateUserColors = !m.desaturateUserColors;
    },
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function (e) {
        m = { ...m, systemForcedColors: e.systemForcedColors ?? "none" };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function (e) {
        if (m.systemPrefersContrast === e.systemPrefersContrast) return !1;
        m = { ...m, systemPrefersContrast: e.systemPrefersContrast };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function (e) {
        if (m.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
        m = { ...m, systemPrefersReducedMotion: e.systemPrefersReducedMotion };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function (e) {
        if (m.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
        m = { ...m, systemPrefersCrossfades: e.systemPrefersCrossfades };
    },
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function (e) {
        if (m.prefersReducedMotion === e.prefersReducedMotion) return !1;
        m = { ...m, prefersReducedMotion: e.prefersReducedMotion };
    },
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function (e) {
        m.syncForcedColors = e.syncForcedColors;
    },
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function (e) {
        m = { ...m, alwaysShowLinkDecorations: e.alwaysShowLinkDecorations };
    },
    ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: function (e) {
        m = { ...m, enableCustomCursor: e.enableCustomCursor };
    },
    ACCESSIBILITY_SET_ROLE_STYLE: function (e) {
        m.roleStyle = e.roleStyle;
    },
    ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE: function (e) {
        (m.officialMessageStyle = e.officialMessageStyle), (m.officialMessageStyleExplicitlySet = !0);
    },
    ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: function (e) {
        m.displayNameStylesEnabled = e.enabled;
    },
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function () {
        m.forcedColorsModalSeen = !0;
    },
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function () {
        m = { ...m, keyboardNavigationExplainerModalSeen: !0 };
    },
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function (e) {
        let { messageGroupSpacing: t } = e;
        m = { ...m, messageGroupSpacing: t };
    },
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function () {
        (m = { ...m }).submitButtonEnabled = !m.submitButtonEnabled;
    },
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function () {
        (m = { ...m }).syncProfileThemeWithUserTheme = !m.syncProfileThemeWithUserTheme;
    },
    ACCESSIBILITY_SET_CONTRAST: function (e) {
        let { contrast: t } = e;
        m = { ...m, contrast: t };
    },
    ACCESSIBILITY_SET_CONTRAST_MODE: function (e) {
        let { contrastMode: t } = e;
        m = { ...m, contrastMode: t };
    },
    ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: function (e) {
        m = { ...m, switchIconsEnabled: e.switchIconsEnabled };
    },
    ACCESSIBILITY_SET_CHAT_BAR_SETTINGS: function (e) {
        m = {
            ...m,
            ...(null != e.appsButtonEnabled && { appsButtonEnabled: e.appsButtonEnabled }),
            ...(null != e.expressionPickerFormat && { expressionPickerFormat: e.expressionPickerFormat }),
            ...(null != e.condensePickerWhenNarrow && { condensePickerWhenNarrow: e.condensePickerWhenNarrow }),
            ...(null != e.emojiButtonEnabled && { emojiButtonEnabled: e.emojiButtonEnabled }),
            ...(null != e.gifButtonEnabled && { gifButtonEnabled: e.gifButtonEnabled }),
            ...(null != e.stickerButtonEnabled && { stickerButtonEnabled: e.stickerButtonEnabled }),
        };
    },
});
