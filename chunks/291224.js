n.d(t, {
    A: () => E,
});
var r = n(873298),
    i = n(97469),
    a = n(544028),
    s = n(253932),
    o = n(617617),
    l = n(954571),
    c = n(775602),
    u = n(53298);
let d = u.O.NONE,
    f = window.matchMedia("(prefers-color-scheme: dark)"),
    p = window.matchMedia("(prefers-color-scheme: light)"),
    _ = window.matchMedia("(inverted-colors: inverted)"),
    h = window.matchMedia("(prefers-contrast: more)"),
    m = window.matchMedia("(forced-colors: active)");

function g(e, t) {
    t ? (d |= e) : (d &= ~e);
}
let E = {
    init() {
        c.A.addChangeListener(this.handleAccessibilityStoreChanged),
            a.A.addChangeListener(this.handleAccessibilityStoreChanged),
            o.A.addChangeListener(this.handleUiDensityChanged),
            f.addListener(this.handlePrefersColorSchemeDarkChanged),
            this.handlePrefersColorSchemeDarkChanged(f),
            p.addListener(this.handlePrefersColorSchemeLightChanged),
            this.handlePrefersColorSchemeLightChanged(p),
            h.addListener(this.handlePrefersMoreContrastChanged),
            this.handlePrefersMoreContrastChanged(h),
            m.addListener(this.handlePrefersForcedColorsChanged),
            this.handlePrefersForcedColorsChanged(m),
            _.addListener(this.handleInvertColorsChanged),
            this.handleInvertColorsChanged(_),
            l.default.setSystemAccessibilityFeatures(this.getActiveFeatures);
    },
    getActiveFeatures: () => d,
    handlePrefersColorSchemeDarkChanged(e) {
        g(u.O.PREFERS_COLOR_SCHEME_DARK, e.matches);
    },
    handlePrefersColorSchemeLightChanged(e) {
        g(u.O.PREFERS_COLOR_SCHEME_LIGHT, e.matches);
    },
    handlePrefersMoreContrastChanged(e) {
        g(u.O.HIGH_CONTRAST, e.matches);
    },
    handlePrefersForcedColorsChanged(e) {
        g(u.O.FORCED_COLORS, e.matches);
    },
    handleInvertColorsChanged(e) {
        g(u.O.INVERT_COLORS, e.matches);
    },
    handleUiDensityChanged() {
        let e = s.Xi.getSetting();
        g(u.O.UI_DENSITY_COMPACT, e === r.NS.COMPACT), g(u.O.UI_DENSITY_SPACIOUS, e === r.NS.COZY);
    },
    handleAccessibilityStoreChanged() {
        g(u.O.REDUCED_MOTION, c.A.useReducedMotion),
            g(u.O.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== c.A.rawPrefersReducedMotion),
            g(u.O.FORCED_COLORS_FROM_USER_SETTINGS, c.A.syncForcedColors),
            g(u.O.CHAT_FONT_SCALE_DECREASED, c.A.isFontScaledDown),
            g(u.O.CHAT_FONT_SCALE_INCREASED, c.A.isFontScaledUp),
            g(u.O.ZOOM_LEVEL_DECREASED, c.A.isZoomedOut),
            g(u.O.ZOOM_LEVEL_INCREASED, c.A.isZoomedIn),
            g(u.O.MESSAGE_GROUP_SPACING_DECREASED, c.A.isMessageGroupSpacingDecreased),
            g(u.O.MESSAGE_GROUP_SPACING_INCREASED, c.A.isMessageGroupSpacingIncreased),
            g(u.O.DARK_SIDEBAR, (0, i.$i)()),
            g(u.O.SATURATION_LEVEL_DECREASED, c.A.saturation < 1),
            g(u.O.ROLE_STYLE_ADJUSTED, "username" !== c.A.roleStyle),
            g(u.O.SYNC_PROFILE_THEME_WITH_USER_THEME, c.A.syncProfileThemeWithUserTheme),
            g(u.O.CONTRAST_LEVEL_INCREASED, c.A.isHighContrastModeEnabled);
    },
};
