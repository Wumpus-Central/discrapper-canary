n.d(t, { Ay: () => R, IG: () => I, _1: () => f });
var i,
    r,
    a = n(855986),
    s = n(506774),
    l = n(73153),
    o = n(188321),
    d = n(284016),
    c = n(413599),
    u = n(253932),
    _ = n(617617),
    E = n(353835),
    A = n(652215),
    h = n(381941),
    f = (((i = {}).DEFAULT = "default"), (i.HIGH = "high"), i),
    I = (((r = {}).FLEXIBLE = "flexible"), (r.CONDENSED = "condensed"), (r.HIDDEN = "hidden"), r);
let p = {
        fontSize: A.hH7.FONT_SIZE_DEFAULT,
        zoom: A.hH7.ZOOM_DEFAULT,
        keyboardModeEnabled: !1,
        contrastMode: "default",
        colorblindMode: !1,
        lowContrastMode: !1,
        saturation: 1,
        contrast: 1,
        minToastDurationMs: A.hH7.TOAST_DURATION_DEFAULT_MS,
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
    m = p;
function T(e) {
    return Number.isFinite(e)
        ? Math.min(Math.max(e, 1e3 * A.hH7.TOAST_DURATION_MIN_SECONDS), 1e3 * A.hH7.TOAST_DURATION_MAX_SECONDS)
        : A.hH7.TOAST_DURATION_DEFAULT_MS;
}
let g = {
    12: "font-size-12",
    14: "font-size-14",
    15: "font-size-15",
    16: "font-size-16",
    18: "font-size-18",
    20: "font-size-20",
    24: "font-size-24",
};
function S() {
    switch (m.prefersReducedMotion) {
        case "no-preference":
            return !1;
        case "reduce":
            return !0;
        default:
            return "reduce" === m.systemPrefersReducedMotion;
    }
}
function N() {
    let e;
    return (
        !m.officialMessageStyleExplicitlySet &&
        !!(
            "default" === m.officialMessageStyle &&
            c.A.theme === A.NJ8.LIGHT &&
            (null != (e = u.eh.getSetting()).backgroundGradientPresetId ||
                (e.customUserThemeSettings?.colors?.length ?? 0) > 0)
        ) &&
        ((m.officialMessageStyle = "no_text_color"), !0)
    );
}
function C() {
    function e(e) {
        return "animate-never" === e ? "animate-never" : S() ? "respect-motion-settings" : "animate-always";
    }
    m = {
        ...m,
        youBarNameplateAnimation: e(m.youBarNameplateAnimation),
        youBarAvatarDecoAnimation: e(m.youBarAvatarDecoAnimation),
    };
}
class O extends a.Ay.DeviceSettingsStore {
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
            isNaN((m = { ...p, ...(e ?? null) }).fontSize) && (m.fontSize = A.hH7.FONT_SIZE_DEFAULT),
            (m.minToastDurationMs = T(m.minToastDurationMs)),
            0 > h.qh.indexOf(null != m.messageGroupSpacing ? m.messageGroupSpacing : -1) &&
                (m.messageGroupSpacing = null),
            this.syncWith([_.A, d.A], N));
        let t = !1;
        this.syncWith([o.A], () => {
            let e = o.A.isThrottling;
            return e !== t && ((t = e), !0);
        });
    }
    get fontScale() {
        return (m.fontSize / A.hH7.FONT_SIZE_DEFAULT) * 100;
    }
    get fontSize() {
        return m.fontSize;
    }
    get isFontScaledUp() {
        return m.fontSize > A.hH7.FONT_SIZE_DEFAULT;
    }
    get isFontScaledDown() {
        return m.fontSize < A.hH7.FONT_SIZE_DEFAULT;
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
        return m.zoom > A.hH7.ZOOM_DEFAULT;
    }
    get isZoomedOut() {
        return m.zoom < A.hH7.ZOOM_DEFAULT;
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
    get minToastDurationMs() {
        return m.minToastDurationMs;
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
        return null != m.messageGroupSpacing ? m.messageGroupSpacing : 16 * !u.hH.getSetting();
    }
    get isMessageGroupSpacingIncreased() {
        let e = 16 * !u.hH.getSetting();
        return this.messageGroupSpacing > e;
    }
    get isMessageGroupSpacingDecreased() {
        let e = 16 * !u.hH.getSetting();
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
    get prefersReducedMotion() {
        return S();
    }
    get useReducedMotion() {
        return !!o.A.isThrottling || this.prefersReducedMotion;
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
    get animateYouBarNameplate() {
        switch (m.youBarNameplateAnimation) {
            case "animate-never":
                return !1;
            case "animate-always":
                return !0;
            case "respect-motion-settings":
                return !this.useReducedMotion;
        }
    }
    get animateYouBarAvatarDeco() {
        switch (m.youBarAvatarDecoAnimation) {
            case "animate-never":
                return !1;
            case "animate-always":
                return !0;
            case "respect-motion-settings":
                return !this.useReducedMotion;
        }
    }
    get youBarNameplateAnimation() {
        return m.youBarNameplateAnimation;
    }
    get youBarAvatarDecoAnimation() {
        return m.youBarAvatarDecoAnimation;
    }
    getUserAgnosticState() {
        return m;
    }
}
let R = new O(l.h, {
    ACCESSIBILITY_SET_FONT_SIZE: function (e) {
        var t;
        let n = ((t = e.fontSize), A.hH7.FONT_SIZES.indexOf(t) >= 0 ? t : A.hH7.FONT_SIZE_DEFAULT);
        if (n > A.hH7.FONT_SIZE_MAX || n < A.hH7.FONT_SIZE_MIN || m.fontSize === n) return !1;
        (m = { ...m }).fontSize = n;
    },
    ACCESSIBILITY_SET_ZOOM: function (e) {
        if (e.zoom < A.hH7.ZOOM_MIN || e.zoom > A.hH7.ZOOM_MAX || m.zoom === e.zoom) return !1;
        (((m = { ...m }).zoom = e.zoom), E.A.setZoomFactor(m.zoom));
    },
    ACCESSIBILITY_RESET_TO_DEFAULT: function () {
        let e = m.fontSize !== A.hH7.FONT_SIZE_DEFAULT,
            t = m.zoom !== A.hH7.ZOOM_DEFAULT;
        if (!e && !t) return !1;
        ((m = { ...m }).fontSize !== A.hH7.FONT_SIZE_DEFAULT && (m.fontSize = A.hH7.FONT_SIZE_DEFAULT),
            m.zoom !== A.hH7.ZOOM_DEFAULT && ((m.zoom = A.hH7.ZOOM_DEFAULT), E.A.setZoomFactor(m.zoom)));
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
        ((m = { ...m, systemPrefersReducedMotion: e.systemPrefersReducedMotion }), C());
    },
    ACCESSIBILITY_SYSTEM_PREFERS_CROSSFADES_CHANGED: function (e) {
        if (m.systemPrefersCrossfades === e.systemPrefersCrossfades) return !1;
        m = { ...m, systemPrefersCrossfades: e.systemPrefersCrossfades };
    },
    ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION: function (e) {
        if (m.prefersReducedMotion === e.prefersReducedMotion) return !1;
        ((m = { ...m, prefersReducedMotion: e.prefersReducedMotion }), C());
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
        ((m.officialMessageStyle = e.officialMessageStyle), (m.officialMessageStyleExplicitlySet = !0));
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
    ACCESSIBILITY_SET_MIN_TOAST_DURATION: function (e) {
        (m = { ...m }).minToastDurationMs = T(e.minToastDurationMs);
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
        m = {
            ...m,
            youBarNameplateAnimation: t(m.youBarNameplateAnimation, e.animateNameplate),
            youBarAvatarDecoAnimation: t(m.youBarAvatarDecoAnimation, e.animateAvatarDeco),
        };
    },
});
