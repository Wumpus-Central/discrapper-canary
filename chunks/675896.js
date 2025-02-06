n.d(t, { Z: () => g });
var i = n(524437),
    r = n(210887),
    a = n(695346),
    s = n(581883),
    o = n(626135),
    l = n(607070),
    u = n(94752);
let c = u.E.NONE,
    d = window.matchMedia('(prefers-color-scheme: dark)'),
    f = window.matchMedia('(prefers-color-scheme: light)'),
    _ = window.matchMedia('(inverted-colors: inverted)'),
    p = window.matchMedia('(prefers-contrast: more)'),
    h = window.matchMedia('(forced-colors: active)');
function m(e, t) {
    t ? (c |= e) : (c &= ~e);
}
let g = {
    init() {
        l.Z.addChangeListener(this.handleAccessibilityStoreChanged), r.Z.addChangeListener(this.handleAccessibilityStoreChanged), s.Z.addChangeListener(this.handleUiDensityChanged), d.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(d), f.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(f), p.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(p), h.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(h), _.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(_), o.default.setSystemAccessibilityFeatures(this.getActiveFeatures);
    },
    getActiveFeatures: () => c,
    handlePrefersColorSchemeDarkChanged(e) {
        m(u.E.PREFERS_COLOR_SCHEME_DARK, e.matches);
    },
    handlePrefersColorSchemeLightChanged(e) {
        m(u.E.PREFERS_COLOR_SCHEME_LIGHT, e.matches);
    },
    handlePrefersMoreContrastChanged(e) {
        m(u.E.HIGH_CONTRAST, e.matches);
    },
    handlePrefersForcedColorsChanged(e) {
        m(u.E.FORCED_COLORS, e.matches);
    },
    handleInvertColorsChanged(e) {
        m(u.E.INVERT_COLORS, e.matches);
    },
    handleUiDensityChanged() {
        let e = a.YC.getSetting();
        m(u.E.UI_DENSITY_COMPACT, e === i.Pi.COMPACT), m(u.E.UI_DENSITY_SPACIOUS, e === i.Pi.COZY);
    },
    handleAccessibilityStoreChanged() {
        m(u.E.REDUCED_MOTION, l.Z.useReducedMotion), m(u.E.REDUCED_MOTION_FROM_USER_SETTINGS, 'auto' !== l.Z.rawPrefersReducedMotion), m(u.E.FORCED_COLORS_FROM_USER_SETTINGS, l.Z.syncForcedColors), m(u.E.CHAT_FONT_SCALE_DECREASED, l.Z.isFontScaledDown), m(u.E.CHAT_FONT_SCALE_INCREASED, l.Z.isFontScaledUp), m(u.E.ZOOM_LEVEL_DECREASED, l.Z.isZoomedOut), m(u.E.ZOOM_LEVEL_INCREASED, l.Z.isZoomedIn), m(u.E.MESSAGE_GROUP_SPACING_DECREASED, l.Z.isMessageGroupSpacingDecreased), m(u.E.MESSAGE_GROUP_SPACING_INCREASED, l.Z.isMessageGroupSpacingIncreased), m(u.E.DARK_SIDEBAR, r.Z.darkSidebar), m(u.E.SATURATION_LEVEL_DECREASED, l.Z.saturation < 1), m(u.E.ROLE_STYLE_ADJUSTED, 'username' !== l.Z.roleStyle), m(u.E.SYNC_PROFILE_THEME_WITH_USER_THEME, l.Z.syncProfileThemeWithUserTheme);
    }
};
