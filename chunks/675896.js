n.d(t, { Z: () => g });
var r = n(524437),
    i = n(210887),
    o = n(695346),
    a = n(581883),
    s = n(626135),
    l = n(607070),
    c = n(94752);
let u = c.E.NONE,
    d = window.matchMedia('(prefers-color-scheme: dark)'),
    f = window.matchMedia('(prefers-color-scheme: light)'),
    _ = window.matchMedia('(inverted-colors: inverted)'),
    p = window.matchMedia('(prefers-contrast: more)'),
    h = window.matchMedia('(forced-colors: active)');
function m(e, t) {
    t ? (u |= e) : (u &= ~e);
}
let g = {
    init() {
        l.Z.addChangeListener(this.handleAccessibilityStoreChanged), i.Z.addChangeListener(this.handleAccessibilityStoreChanged), a.Z.addChangeListener(this.handleUiDensityChanged), d.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(d), f.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(f), p.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(p), h.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(h), _.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(_), s.default.setSystemAccessibilityFeatures(this.getActiveFeatures);
    },
    getActiveFeatures: () => u,
    handlePrefersColorSchemeDarkChanged(e) {
        m(c.E.PREFERS_COLOR_SCHEME_DARK, e.matches);
    },
    handlePrefersColorSchemeLightChanged(e) {
        m(c.E.PREFERS_COLOR_SCHEME_LIGHT, e.matches);
    },
    handlePrefersMoreContrastChanged(e) {
        m(c.E.HIGH_CONTRAST, e.matches);
    },
    handlePrefersForcedColorsChanged(e) {
        m(c.E.FORCED_COLORS, e.matches);
    },
    handleInvertColorsChanged(e) {
        m(c.E.INVERT_COLORS, e.matches);
    },
    handleUiDensityChanged() {
        let e = o.YC.getSetting();
        m(c.E.UI_DENSITY_COMPACT, e === r.Pi.COMPACT), m(c.E.UI_DENSITY_SPACIOUS, e === r.Pi.COZY);
    },
    handleAccessibilityStoreChanged() {
        m(c.E.REDUCED_MOTION, l.Z.useReducedMotion), m(c.E.REDUCED_MOTION_FROM_USER_SETTINGS, 'auto' !== l.Z.rawPrefersReducedMotion), m(c.E.FORCED_COLORS_FROM_USER_SETTINGS, l.Z.syncForcedColors), m(c.E.CHAT_FONT_SCALE_DECREASED, l.Z.isFontScaledDown), m(c.E.CHAT_FONT_SCALE_INCREASED, l.Z.isFontScaledUp), m(c.E.ZOOM_LEVEL_DECREASED, l.Z.isZoomedOut), m(c.E.ZOOM_LEVEL_INCREASED, l.Z.isZoomedIn), m(c.E.MESSAGE_GROUP_SPACING_DECREASED, l.Z.isMessageGroupSpacingDecreased), m(c.E.MESSAGE_GROUP_SPACING_INCREASED, l.Z.isMessageGroupSpacingIncreased), m(c.E.DARK_SIDEBAR, i.Z.darkSidebar), m(c.E.SATURATION_LEVEL_DECREASED, l.Z.saturation < 1), m(c.E.ROLE_STYLE_ADJUSTED, 'username' !== l.Z.roleStyle), m(c.E.SYNC_PROFILE_THEME_WITH_USER_THEME, l.Z.syncProfileThemeWithUserTheme);
    }
};
