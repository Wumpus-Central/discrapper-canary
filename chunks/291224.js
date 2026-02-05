"use strict";
n.d(t, { A: () => E });
var r = n(873298),
    i = n(97469),
    a = n(544028),
    s = n(253932),
    o = n(617617),
    l = n(954571),
    u = n(775602),
    c = n(53298);
let d = c.O.NONE,
    _ = window.matchMedia("(prefers-color-scheme: dark)"),
    f = window.matchMedia("(prefers-color-scheme: light)"),
    p = window.matchMedia("(inverted-colors: inverted)"),
    h = window.matchMedia("(prefers-contrast: more)"),
    m = window.matchMedia("(forced-colors: active)");
function g(e, t) {
    t ? (d |= e) : (d &= ~e);
}
let E = {
    init() {
        u.A.addChangeListener(this.handleAccessibilityStoreChanged),
            a.A.addChangeListener(this.handleAccessibilityStoreChanged),
            o.A.addChangeListener(this.handleUiDensityChanged),
            _.addListener(this.handlePrefersColorSchemeDarkChanged),
            this.handlePrefersColorSchemeDarkChanged(_),
            f.addListener(this.handlePrefersColorSchemeLightChanged),
            this.handlePrefersColorSchemeLightChanged(f),
            h.addListener(this.handlePrefersMoreContrastChanged),
            this.handlePrefersMoreContrastChanged(h),
            m.addListener(this.handlePrefersForcedColorsChanged),
            this.handlePrefersForcedColorsChanged(m),
            p.addListener(this.handleInvertColorsChanged),
            this.handleInvertColorsChanged(p),
            l.default.setSystemAccessibilityFeatures(this.getActiveFeatures);
    },
    getActiveFeatures: () => d,
    handlePrefersColorSchemeDarkChanged(e) {
        g(c.O.PREFERS_COLOR_SCHEME_DARK, e.matches);
    },
    handlePrefersColorSchemeLightChanged(e) {
        g(c.O.PREFERS_COLOR_SCHEME_LIGHT, e.matches);
    },
    handlePrefersMoreContrastChanged(e) {
        g(c.O.HIGH_CONTRAST, e.matches);
    },
    handlePrefersForcedColorsChanged(e) {
        g(c.O.FORCED_COLORS, e.matches);
    },
    handleInvertColorsChanged(e) {
        g(c.O.INVERT_COLORS, e.matches);
    },
    handleUiDensityChanged() {
        let e = s.Xi.getSetting();
        g(c.O.UI_DENSITY_COMPACT, e === r.NS.COMPACT), g(c.O.UI_DENSITY_SPACIOUS, e === r.NS.COZY);
    },
    handleAccessibilityStoreChanged() {
        g(c.O.REDUCED_MOTION, u.A.useReducedMotion),
            g(c.O.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== u.A.rawPrefersReducedMotion),
            g(c.O.FORCED_COLORS_FROM_USER_SETTINGS, u.A.syncForcedColors),
            g(c.O.CHAT_FONT_SCALE_DECREASED, u.A.isFontScaledDown),
            g(c.O.CHAT_FONT_SCALE_INCREASED, u.A.isFontScaledUp),
            g(c.O.ZOOM_LEVEL_DECREASED, u.A.isZoomedOut),
            g(c.O.ZOOM_LEVEL_INCREASED, u.A.isZoomedIn),
            g(c.O.MESSAGE_GROUP_SPACING_DECREASED, u.A.isMessageGroupSpacingDecreased),
            g(c.O.MESSAGE_GROUP_SPACING_INCREASED, u.A.isMessageGroupSpacingIncreased),
            g(c.O.DARK_SIDEBAR, (0, i.$i)()),
            g(c.O.SATURATION_LEVEL_DECREASED, u.A.saturation < 1),
            g(c.O.ROLE_STYLE_ADJUSTED, "username" !== u.A.roleStyle),
            g(c.O.SYNC_PROFILE_THEME_WITH_USER_THEME, u.A.syncProfileThemeWithUserTheme),
            g(c.O.CONTRAST_LEVEL_INCREASED, u.A.isHighContrastModeEnabled);
    },
};
