n.d(t, { Ay: () => O, IG: () => f, _1: () => I });
var i,
    r,
    a = n(17928),
    s = n(506774),
    l = n(228366),
    o = n(188321),
    d = n(284016),
    c = n(363195),
    u = n(885386),
    _ = n(617617),
    E = n(353835),
    A = n(652215),
    h = n(381941),
    I = (((i = {}).DEFAULT = "default"), (i.HIGH = "high"), i),
    f = (((r = {}).FLEXIBLE = "flexible"), (r.CONDENSED = "condensed"), (r.HIDDEN = "hidden"), r);
let p = {
        fontSize: A.hH7.FONT_SIZE_DEFAULT,
        zoom: A.hH7.ZOOM_DEFAULT,
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
        youBarNameplateAnimation: "animate-never",
        youBarAvatarDecoAnimation: "animate-never",
    },
    T = p,
    m = {
        12: "font-size-12",
        14: "font-size-14",
        15: "font-size-15",
        16: "font-size-16",
        18: "font-size-18",
        20: "font-size-20",
        24: "font-size-24",
    };
function g() {
    switch (T.prefersReducedMotion) {
        case "no-preference":
            return !1;
        case "reduce":
            return !0;
        default:
            return "reduce" === T.systemPrefersReducedMotion;
    }
}
function S() {
    let e;
    return (
        !T.officialMessageStyleExplicitlySet &&
        !!(
            "default" === T.officialMessageStyle &&
            c.A.theme === A.NJ8.LIGHT &&
            (null != (e = u.eh.getSetting()).backgroundGradientPresetId ||
                (e.customUserThemeSettings?.colors?.length ?? 0) > 0)
        ) &&
        ((T.officialMessageStyle = "no_text_color"), !0)
    );
}
function N() {
    function e(e) {
        return "animate-never" === e ? "animate-never" : g() ? "respect-motion-settings" : "animate-always";
    }
    T = {
        ...T,
        youBarNameplateAnimation: e(T.youBarNameplateAnimation),
        youBarAvatarDecoAnimation: e(T.youBarAvatarDecoAnimation),
    };
}
class C extends a.Ay.DeviceSettingsStore {
    static displayName = "AccessibilityStore";
    static persistKey = "AccessibilityStore";
    static migrations = [
        () => {
            let e = "a11yFontScale",
                t = "a11yZoom",
                n = "a11yColorblindMode",
                i = s.w.get(e) || 100,
                r = s.w.get(t) || A.hH7.ZOOM_DEFAULT,
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
        (e) => ({ ...e, youBarNameplateAnimation: "animate-never", youBarAvatarDecoAnimation: "animate-never" }),
    ];
    initialize(e) {
        (this.waitFor(_.A),
            isNaN((T = { ...p, ...(e ?? null) }).fontSize) && (T.fontSize = A.hH7.FONT_SIZE_DEFAULT),
            0 > h.qh.indexOf(null != T.messageGroupSpacing ? T.messageGroupSpacing : -1) &&
                (T.messageGroupSpacing = null),
            this.syncWith([_.A, d.A], S));
        let t = !1;
        this.syncWith([o.A], () => {
            let e = o.A.isThrottling;
            return e !== t && ((t = e), !0);
        });
    }
    get fontScale() {
        return (T.fontSize / A.hH7.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return T.fontSize;
    }
    get isFontScaledUp() {
        return T.fontSize > A.hH7.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return T.fontSize < A.hH7.FONT_SIZE_DEFAULT;
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
        return T.zoom;
    }
    get isZoomedIn() {
        return T.zoom > A.hH7.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return T.zoom < A.hH7.ZOOM_DEFAULT;
    }
    get keyboardModeEnabled() {
        return T.keyboardModeEnabled;
    }
    get colorblindMode() {
        return T.colorblindMode;
    }
    get lowContrastMode() {
        return T.lowContrastMode;
    }
    get saturation() {
        return T.saturation;
    }
    get contrast() {
        return T.contrast;
    }
    get desaturateUserColors() {
        return T.desaturateUserColors;
    }
    get forcedColorsModalSeen() {
        return T.forcedColorsModalSeen;
    }
    get keyboardNavigationExplainerModalSeen() {
        return T.keyboardNavigationExplainerModalSeen;
    }
    get messageGroupSpacing() {
        return null != T.messageGroupSpacing ? T.messageGroupSpacing : u.hH.getSetting() ? h.y5 : h.ES;
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
        return T.submitButtonEnabled;
    }
    get syncProfileThemeWithUserTheme() {
        return T.syncProfileThemeWithUserTheme;
    }
    get systemPrefersReducedMotion() {
        return T.systemPrefersReducedMotion;
    }
    get rawPrefersReducedMotion() {
        return T.prefersReducedMotion;
    }
    get prefersReducedMotion() {
        return g();
    }
    get useReducedMotion() {
        return !!o.A.isThrottling || this.prefersReducedMotion;
    }
    get systemForcedColors() {
        return T.systemForcedColors;
    }
    get syncForcedColors() {
        return T.syncForcedColors;
    }
    get useForcedColors() {
        return !!T.syncForcedColors && "active" === T.systemForcedColors;
    }
    get systemPrefersContrast() {
        return T.systemPrefersContrast;
    }
    get systemPrefersCrossfades() {
        return T.systemPrefersCrossfades;
    }
    get alwaysShowLinkDecorations() {
        return T.alwaysShowLinkDecorations;
    }
    get enableCustomCursor() {
        return T.enableCustomCursor;
    }
    get roleStyle() {
        return T.roleStyle;
    }
    get officialMessageStyle() {
        return T.officialMessageStyle;
    }
    get displayNameStylesEnabled() {
        return T.displayNameStylesEnabled;
    }
    get isHighContrastModeEnabled() {
        return "high" === T.contrastMode;
    }
    get isSwitchIconsEnabled() {
        return T.switchIconsEnabled;
    }
    get isAppsButtonEnabled() {
        return T.appsButtonEnabled;
    }
    get expressionPickerFormat() {
        return T.expressionPickerFormat;
    }
    get condensePickerWhenNarrow() {
        return T.condensePickerWhenNarrow;
    }
    get isEmojiButtonEnabled() {
        return T.emojiButtonEnabled;
    }
    get isGifButtonEnabled() {
        return T.gifButtonEnabled;
    }
    get isStickerButtonEnabled() {
        return T.stickerButtonEnabled;
    }
    get animateYouBarNameplate() {
        switch (T.youBarNameplateAnimation) {
            case "animate-never":
                return !1;
            case "animate-always":
                return !0;
            case "respect-motion-settings":
                return !this.useReducedMotion;
        }
    }
    get animateYouBarAvatarDeco() {
        switch (T.youBarAvatarDecoAnimation) {
            case "animate-never":
                return !1;
            case "animate-always":
                return !0;
            case "respect-motion-settings":
                return !this.useReducedMotion;
        }
    }
    get youBarNameplateAnimation() {
        return T.youBarNameplateAnimation;
    }
    get youBarAvatarDecoAnimation() {
        return T.youBarAvatarDecoAnimation;
    }
    getUserAgnosticState() {
        return T;
    }
}
let O = new C(l.h, {
    ACCESSIBILITY_SET_FONT_SIZE: function (e) {
        var t;
        let n = ((t = e.fontSize), A.hH7.FONT_SIZES.indexOf(t) >= 0 ? t : A.hH7.FONT_SIZE_DEFAULT);
        if (n > A.hH7.FONT_SIZE_MAX || n < A.hH7.FONT_SIZE_MIN || T.fontSize === n) return !1;
        (T = { ...T }).fontSize = n;
    },
    ACCESSIBILITY_SET_ZOOM: function (e) {
        if (e.zoom < A.hH7.ZOOM_MIN || e.zoom > A.hH7.ZOOM_MAX || T.zoom === e.zoom) return !1;
        (((T = { ...T }).zoom = e.zoom), E.A.setZoomFactor(T.zoom));
    },
    ACCESSIBILITY_RESET_TO_DEFAULT: function () {
        let e = T.fontSize !== A.hH7.FONT_SIZE_DEFAULT,
            t = T.zoom !== A.hH7.ZOOM_DEFAULT;
        if (!e && !t) return !1;
        ((T = { ...T }).fontSize !== A.hH7.FONT_SIZE_DEFAULT && (T.fontSize = A.hH7.FONT_SIZE_DEFAULT),
            T.zoom !== A.hH7.ZOOM_DEFAULT && ((T.zoom = A.hH7.ZOOM_DEFAULT), E.A.setZoomFactor(T.zoom)));
    },
    ACCESSIBILITY_KEYBOARD_MODE_ENABLE: function () {
        if (T.keyboardModeEnabled) return !1;
        (T = { ...T }).keyboardModeEnabled = !0;
    },
    ACCESSIBILITY_KEYBOARD_MODE_DISABLE: function () {
        if (!T.keyboardModeEnabled) return !1;
        (T = { ...T }).keyboardModeEnabled = !1;
    },
    ACCESSIBILITY_COLORBLIND_TOGGLE: function () {
        (T = { ...T }).colorblindMode = !T.colorblindMode;
    },
    ACCESSIBILITY_LOW_CONTRAST_TOGGLE: function () {
        (T = { ...T }).lowContrastMode = !T.lowContrastMode;
    },
    ACCESSIBILITY_SET_SATURATION: function (e) {
        (T = { ...T }).saturation = e.saturation;
    },
    ACCESSIBILITY_DESATURATE_ROLES_TOGGLE: function () {
        (T = { ...T }).desaturateUserColors = !T.desaturateUserColors;
    },
    ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function (e) {
        T = { ...T, systemForcedColors: e.systemForcedColors ?? "none" };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED: function (e) {
        if (T.systemPrefersContrast === e.systemPrefersContrast) return !1;
        T = { ...T, systemPrefersContrast: e.systemPrefersContrast };
    },
    ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED: function (e) {
        if (T.systemPrefersReducedMotion === e.systemPrefersReducedMotion) return !1;
        ((T = { ...T, systemPrefersReducedMotion: e.systemPrefersReducedMotion }), N());
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function (e) {
        if (T.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
        T = { ...T, systemPrefersCrossfades: e.systemPrefersCrossfades };
    },
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function (e) {
        if (T.prefersReducedMotion === e.prefersReducedMotion) return !1;
        ((T = { ...T, prefersReducedMotion: e.prefersReducedMotion }), N());
    },
    ACCESSIBILITY_SET_SYNC_FORCED_COLORS: function (e) {
        T.syncForcedColors = e.syncForcedColors;
    },
    ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS: function (e) {
        T = { ...T, alwaysShowLinkDecorations: e.alwaysShowLinkDecorations };
    },
    ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR: function (e) {
        T = { ...T, enableCustomCursor: e.enableCustomCursor };
    },
    ACCESSIBILITY_SET_ROLE_STYLE: function (e) {
        T.roleStyle = e.roleStyle;
    },
    ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE: function (e) {
        ((T.officialMessageStyle = e.officialMessageStyle), (T.officialMessageStyleExplicitlySet = !0));
    },
    ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED: function (e) {
        T.displayNameStylesEnabled = e.enabled;
    },
    ACCESSIBILITY_FORCED_COLORS_MODAL_SEEN: function () {
        T.forcedColorsModalSeen = !0;
    },
    KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN: function () {
        T = { ...T, keyboardNavigationExplainerModalSeen: !0 };
    },
    ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING: function (e) {
        let { messageGroupSpacing: t } = e;
        T = { ...T, messageGroupSpacing: t };
    },
    ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE: function () {
        (T = { ...T }).submitButtonEnabled = !T.submitButtonEnabled;
    },
    ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE: function () {
        (T = { ...T }).syncProfileThemeWithUserTheme = !T.syncProfileThemeWithUserTheme;
    },
    ACCESSIBILITY_SET_CONTRAST: function (e) {
        let { contrast: t } = e;
        T = { ...T, contrast: t };
    },
    ACCESSIBILITY_SET_CONTRAST_MODE: function (e) {
        let { contrastMode: t } = e;
        T = { ...T, contrastMode: t };
    },
    ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED: function (e) {
        T = { ...T, switchIconsEnabled: e.switchIconsEnabled };
    },
    ACCESSIBILITY_SET_CHAT_BAR_SETTINGS: function (e) {
        T = {
            ...T,
            ...(null != e.appsButtonEnabled && { appsButtonEnabled: e.appsButtonEnabled }),
            ...(null != e.expressionPickerFormat && { expressionPickerFormat: e.expressionPickerFormat }),
            ...(null != e.condensePickerWhenNarrow && { condensePickerWhenNarrow: e.condensePickerWhenNarrow }),
            ...(null != e.emojiButtonEnabled && { emojiButtonEnabled: e.emojiButtonEnabled }),
            ...(null != e.gifButtonEnabled && { gifButtonEnabled: e.gifButtonEnabled }),
            ...(null != e.stickerButtonEnabled && { stickerButtonEnabled: e.stickerButtonEnabled }),
        };
    },
    ACCESSIBILITY_SET_YOU_BAR_ANIMATIONS: function (e) {
        function t(e, t) {
            switch (t) {
                case !0:
                    return "animate-always";
                case !1:
                    return "animate-never";
                case void 0:
                    return e;
            }
        }
        T = {
            ...T,
            youBarNameplateAnimation: t(T.youBarNameplateAnimation, e.animateNameplate),
            youBarAvatarDecoAnimation: t(T.youBarAvatarDecoAnimation, e.animateAvatarDeco),
        };
    },
});
