n.d(t, { Z: () => E });
var r = n(524437),
    i = n(984802),
    a = n(210887),
    o = n(695346),
    s = n(581883),
    l = n(626135),
    c = n(607070),
    u = n(94752);
let d = u.E.NONE,
    f = window.matchMedia('(prefers-color-scheme: dark)'),
    _ = window.matchMedia('(prefers-color-scheme: light)'),
    p = window.matchMedia('(inverted-colors: inverted)'),
    h = window.matchMedia('(prefers-contrast: more)'),
    m = window.matchMedia('(forced-colors: active)');
function g(e, t) {
    t ? (d |= e) : (d &= ~e);
}
let E = {
    init() {
        (c.Z.addChangeListener(this.handleAccessibilityStoreChanged), a.Z.addChangeListener(this.handleAccessibilityStoreChanged), s.Z.addChangeListener(this.handleUiDensityChanged), f.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(f), _.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(_), h.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(h), m.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(m), p.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(p), l.default.setSystemAccessibilityFeatures(this.getActiveFeatures));
    },
    getActiveFeatures: () => d,
    handlePrefersColorSchemeDarkChanged(e) {
        g(u.E.PREFERS_COLOR_SCHEME_DARK, e.matches);
    },
    handlePrefersColorSchemeLightChanged(e) {
        g(u.E.PREFERS_COLOR_SCHEME_LIGHT, e.matches);
    },
    handlePrefersMoreContrastChanged(e) {
        g(u.E.HIGH_CONTRAST, e.matches);
    },
    handlePrefersForcedColorsChanged(e) {
        g(u.E.FORCED_COLORS, e.matches);
    },
    handleInvertColorsChanged(e) {
        g(u.E.INVERT_COLORS, e.matches);
    },
    handleUiDensityChanged() {
        let e = o.YC.getSetting();
        (g(u.E.UI_DENSITY_COMPACT, e === r.Pi.COMPACT), g(u.E.UI_DENSITY_SPACIOUS, e === r.Pi.COZY));
    },
    handleAccessibilityStoreChanged() {
        (g(u.E.REDUCED_MOTION, c.Z.useReducedMotion), g(u.E.REDUCED_MOTION_FROM_USER_SETTINGS, 'auto' !== c.Z.rawPrefersReducedMotion), g(u.E.FORCED_COLORS_FROM_USER_SETTINGS, c.Z.syncForcedColors), g(u.E.CHAT_FONT_SCALE_DECREASED, c.Z.isFontScaledDown), g(u.E.CHAT_FONT_SCALE_INCREASED, c.Z.isFontScaledUp), g(u.E.ZOOM_LEVEL_DECREASED, c.Z.isZoomedOut), g(u.E.ZOOM_LEVEL_INCREASED, c.Z.isZoomedIn), g(u.E.MESSAGE_GROUP_SPACING_DECREASED, c.Z.isMessageGroupSpacingDecreased), g(u.E.MESSAGE_GROUP_SPACING_INCREASED, c.Z.isMessageGroupSpacingIncreased), g(u.E.DARK_SIDEBAR, (0, i.Zp)()), g(u.E.SATURATION_LEVEL_DECREASED, c.Z.saturation < 1), g(u.E.ROLE_STYLE_ADJUSTED, 'username' !== c.Z.roleStyle), g(u.E.SYNC_PROFILE_THEME_WITH_USER_THEME, c.Z.syncProfileThemeWithUserTheme));
    }
};
