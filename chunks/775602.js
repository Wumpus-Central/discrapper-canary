"use strict";
n.d(t, { Ay: () => S, IG: () => I, _1: () => h });
var i,
    r,
    a = n(17928),
    s = n(506774),
    l = n(228366),
    o = n(284016),
    d = n(363195),
    c = n(885386),
    u = n(617617),
    _ = n(353835),
    E = n(652215),
    A = n(381941),
    h = (((i = {}).DEFAULT = "default"), (i.HIGH = "high"), i),
    I = (((r = {}).FLEXIBLE = "flexible"), (r.CONDENSED = "condensed"), (r.HIDDEN = "hidden"), r);
let f = {
        fontSize: E.hH7.FONT_SIZE_DEFAULT,
        zoom: E.hH7.ZOOM_DEFAULT,
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
    p = f,
    T = {
        12: "font-size-12",
        14: "font-size-14",
        15: "font-size-15",
        16: "font-size-16",
        18: "font-size-18",
        20: "font-size-20",
        24: "font-size-24",
    };
function m() {
    let e;
    return (
        !p.officialMessageStyleExplicitlySet &&
        !!(
            "default" === p.officialMessageStyle &&
            d.A.theme === E.NJ8.LIGHT &&
            (null != (e = c.eh.getSetting()).backgroundGradientPresetId ||
                (e.customUserThemeSettings?.colors?.length ?? 0) > 0)
        ) &&
        ((p.officialMessageStyle = "no_text_color"), !0)
    );
}
class g extends a.Ay.DeviceSettingsStore {
    static displayName = "AccessibilityStore";
    static persistKey = "AccessibilityStore";
    static migrations = [
        () => {
            let e = "a11yFontScale",
                t = "a11yZoom",
                n = "a11yColorblindMode",
                i = s.w.get(e) || 100,
                r = s.w.get(t) || E.hH7.ZOOM_DEFAULT,
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
            isNaN((p = { ...f, ...(e ?? null) }).fontSize) && (p.fontSize = E.hH7.FONT_SIZE_DEFAULT),
            0 > A.qh.indexOf(null != p.messageGroupSpacing ? p.messageGroupSpacing : -1) &&
                (p.messageGroupSpacing = null),
            this.syncWith([u.A, o.A], m);
    }
    get fontScale() {
        return (p.fontSize / E.hH7.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return p.fontSize;
    }
    get isFontScaledUp() {
        return p.fontSize > E.hH7.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return p.fontSize < E.hH7.FONT_SIZE_DEFAULT;
    }
    get fontScaleClass() {
        let e = T[this.fontSize] ?? "";
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
        return p.zoom > E.hH7.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return p.zoom < E.hH7.ZOOM_DEFAULT;
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
        return null != p.messageGroupSpacing ? p.messageGroupSpacing : c.hH.getSetting() ? A.y5 : A.ES;
    }
    get isMessageGroupSpacingIncreased() {
        let e = c.hH.getSetting() ? A.y5 : A.ES;
        return this.messageGroupSpacing > e;
    }
    get isMessageGroupSpacingDecreased() {
        let e = c.hH.getSetting() ? A.y5 : A.ES;
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
    get officialMessageStyle() {
        return p.officialMessageStyle;
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
    get isAppsButtonEnabled() {
        return p.appsButtonEnabled;
    }
    get expressionPickerFormat() {
        return p.expressionPickerFormat;
    }
    get condensePickerWhenNarrow() {
        return p.condensePickerWhenNarrow;
    }
    get isEmojiButtonEnabled() {
        return p.emojiButtonEnabled;
    }
    get isGifButtonEnabled() {
        return p.gifButtonEnabled;
    }
    get isStickerButtonEnabled() {
        return p.stickerButtonEnabled;
    }
    getUserAgnosticState() {
        return p;
    }
}
let S = new g(l.h, {
    ACCESSIBILITY_SET_FONT_SIZE: function (e) {
        var t;
        let n = ((t = e.fontSize), E.hH7.FONT_SIZES.indexOf(t) >= 0 ? t : E.hH7.FONT_SIZE_DEFAULT);
        if (n > E.hH7.FONT_SIZE_MAX || n < E.hH7.FONT_SIZE_MIN || p.fontSize === n) return !1;
        (p = { ...p }).fontSize = n;
    },
    ACCESSIBILITY_SET_ZOOM: function (e) {
        if (e.zoom < E.hH7.ZOOM_MIN || e.zoom > E.hH7.ZOOM_MAX || p.zoom === e.zoom) return !1;
        ((p = { ...p }).zoom = e.zoom), _.A.setZoomFactor(p.zoom);
    },
    ACCESSIBILITY_RESET_TO_DEFAULT: function () {
        let e = p.fontSize !== E.hH7.FONT_SIZE_DEFAULT,
            t = p.zoom !== E.hH7.ZOOM_DEFAULT;
        if (!e && !t) return !1;
        (p = { ...p }).fontSize !== E.hH7.FONT_SIZE_DEFAULT && (p.fontSize = E.hH7.FONT_SIZE_DEFAULT),
            p.zoom !== E.hH7.ZOOM_DEFAULT && ((p.zoom = E.hH7.ZOOM_DEFAULT), _.A.setZoomFactor(p.zoom));
    },
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function () {
        if (p.keyboardModeEnabled) return !1;
        (p = { ...p }).keyboardModeEnabled = !0;
    },
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function () {
        if (!p.keyboardModeEnabled) return !1;
        (p = { ...p }).keyboardModeEnabled = !1;
    },
    ACCESSIBILITY_COLORBLIND_TOGGLE: function () {
        (p = { ...p }).colorblindMode = !p.colorblindMode;
    },
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function () {
        (p = { ...p }).lowContrastMode = !p.lowContrastMode;
    },
    ACCESSIBILITY_SET_SATURATION: function (e) {
        (p = { ...p }).saturation = e.saturation;
    },
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function () {
        (p = { ...p }).desaturateUserColors = !p.desaturateUserColors;
    },
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function (e) {
        p = { ...p, systemForcedColors: e.systemForcedColors ?? "none" };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function (e) {
        if (p.systemPrefersContrast === e.systemPrefersContrast) return !1;
        p = { ...p, systemPrefersContrast: e.systemPrefersContrast };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function (e) {
        if (p.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
        p = { ...p, systemPrefersReducedMotion: e.systemPrefersReducedMotion };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function (e) {
        if (p.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
        p = { ...p, systemPrefersCrossfades: e.systemPrefersCrossfades };
    },
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function (e) {
        if (p.prefersReducedMotion === e.prefersReducedMotion) return !1;
        p = { ...p, prefersReducedMotion: e.prefersReducedMotion };
    },
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function (e) {
        p.syncForcedColors = e.syncForcedColors;
    },
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function (e) {
        p = { ...p, alwaysShowLinkDecorations: e.alwaysShowLinkDecorations };
    },
    ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: function (e) {
        p = { ...p, enableCustomCursor: e.enableCustomCursor };
    },
    ACCESSIBILITY_SET_ROLE_STYLE: function (e) {
        p.roleStyle = e.roleStyle;
    },
    ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE: function (e) {
        (p.officialMessageStyle = e.officialMessageStyle), (p.officialMessageStyleExplicitlySet = !0);
    },
    ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: function (e) {
        p.displayNameStylesEnabled = e.enabled;
    },
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function () {
        p.forcedColorsModalSeen = !0;
    },
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function () {
        p = { ...p, keyboardNavigationExplainerModalSeen: !0 };
    },
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function (e) {
        let { messageGroupSpacing: t } = e;
        p = { ...p, messageGroupSpacing: t };
    },
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function () {
        (p = { ...p }).submitButtonEnabled = !p.submitButtonEnabled;
    },
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function () {
        (p = { ...p }).syncProfileThemeWithUserTheme = !p.syncProfileThemeWithUserTheme;
    },
    ACCESSIBILITY_SET_CONTRAST: function (e) {
        let { contrast: t } = e;
        p = { ...p, contrast: t };
    },
    ACCESSIBILITY_SET_CONTRAST_MODE: function (e) {
        let { contrastMode: t } = e;
        p = { ...p, contrastMode: t };
    },
    ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: function (e) {
        p = { ...p, switchIconsEnabled: e.switchIconsEnabled };
    },
    ACCESSIBILITY_SET_CHAT_BAR_SETTINGS: function (e) {
        p = {
            ...p,
            ...(null != e.appsButtonEnabled && { appsButtonEnabled: e.appsButtonEnabled }),
            ...(null != e.expressionPickerFormat && { expressionPickerFormat: e.expressionPickerFormat }),
            ...(null != e.condensePickerWhenNarrow && { condensePickerWhenNarrow: e.condensePickerWhenNarrow }),
            ...(null != e.emojiButtonEnabled && { emojiButtonEnabled: e.emojiButtonEnabled }),
            ...(null != e.gifButtonEnabled && { gifButtonEnabled: e.gifButtonEnabled }),
            ...(null != e.stickerButtonEnabled && { stickerButtonEnabled: e.stickerButtonEnabled }),
        };
    },
});
