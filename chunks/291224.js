"use strict";
n.d(t, { A: () => g });
var r = n(873298),
    i = n(97469),
    s = n(544028),
    a = n(253932),
    o = n(617617),
    l = n(954571),
    u = n(775602),
    c = n(53298);
let d = c.O.NONE,
    _ = window.matchMedia("(prefers-color-scheme: dark)"),
    f = window.matchMedia("(prefers-color-scheme: light)"),
    p = window.matchMedia("(inverted-colors: inverted)"),
    h = window.matchMedia("(prefers-contrast: more)"),
    E = window.matchMedia("(forced-colors: active)");
function m(e, t) {
    t ? (d |= e) : (d &= ~e);
}
let g = {
    init() {
        u.A.addChangeListener(this.handleAccessibilityStoreChanged),
            s.A.addChangeListener(this.handleAccessibilityStoreChanged),
            o.A.addChangeListener(this.handleUiDensityChanged),
            _.addListener(this.handlePrefersColorSchemeDarkChanged),
            this.handlePrefersColorSchemeDarkChanged(_),
            f.addListener(this.handlePrefersColorSchemeLightChanged),
            this.handlePrefersColorSchemeLightChanged(f),
            h.addListener(this.handlePrefersMoreContrastChanged),
            this.handlePrefersMoreContrastChanged(h),
            E.addListener(this.handlePrefersForcedColorsChanged),
            this.handlePrefersForcedColorsChanged(E),
            p.addListener(this.handleInvertColorsChanged),
            this.handleInvertColorsChanged(p),
            l.default.setSystemAccessibilityFeatures(this.getActiveFeatures);
    },
    getActiveFeatures: () => d,
    handlePrefersColorSchemeDarkChanged(e) {
        m(c.O.PREFERS_COLOR_SCHEME_DARK, e.matches);
    },
    handlePrefersColorSchemeLightChanged(e) {
        m(c.O.PREFERS_COLOR_SCHEME_LIGHT, e.matches);
    },
    handlePrefersMoreContrastChanged(e) {
        m(c.O.HIGH_CONTRAST, e.matches);
    },
    handlePrefersForcedColorsChanged(e) {
        m(c.O.FORCED_COLORS, e.matches);
    },
    handleInvertColorsChanged(e) {
        m(c.O.INVERT_COLORS, e.matches);
    },
    handleUiDensityChanged() {
        let e = a.Xi.getSetting();
        m(c.O.UI_DENSITY_COMPACT, e === r.NS.COMPACT), m(c.O.UI_DENSITY_SPACIOUS, e === r.NS.COZY);
    },
    handleAccessibilityStoreChanged() {
        m(c.O.REDUCED_MOTION, u.A.useReducedMotion),
            m(c.O.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== u.A.rawPrefersReducedMotion),
            m(c.O.FORCED_COLORS_FROM_USER_SETTINGS, u.A.syncForcedColors),
            m(c.O.CHAT_FONT_SCALE_DECREASED, u.A.isFontScaledDown),
            m(c.O.CHAT_FONT_SCALE_INCREASED, u.A.isFontScaledUp),
            m(c.O.ZOOM_LEVEL_DECREASED, u.A.isZoomedOut),
            m(c.O.ZOOM_LEVEL_INCREASED, u.A.isZoomedIn),
            m(c.O.MESSAGE_GROUP_SPACING_DECREASED, u.A.isMessageGroupSpacingDecreased),
            m(c.O.MESSAGE_GROUP_SPACING_INCREASED, u.A.isMessageGroupSpacingIncreased),
            m(c.O.DARK_SIDEBAR, (0, i.$i)()),
            m(c.O.SATURATION_LEVEL_DECREASED, u.A.saturation < 1),
            m(c.O.ROLE_STYLE_ADJUSTED, "username" !== u.A.roleStyle),
            m(c.O.SYNC_PROFILE_THEME_WITH_USER_THEME, u.A.syncProfileThemeWithUserTheme),
            m(c.O.CONTRAST_LEVEL_INCREASED, u.A.isHighContrastModeEnabled);
    },
};
