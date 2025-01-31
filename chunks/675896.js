n.d(t, { Z: () => p });
var i = n(210887),
    r = n(626135),
    a = n(607070),
    s = n(94752);
let o = s.E.NONE,
    l = window.matchMedia('(prefers-color-scheme: dark)'),
    u = window.matchMedia('(prefers-color-scheme: light)'),
    c = window.matchMedia('(inverted-colors: inverted)'),
    d = window.matchMedia('(prefers-contrast: more)'),
    f = window.matchMedia('(forced-colors: active)');
function _(e, t) {
    t ? (o |= e) : (o &= ~e);
}
let p = {
    init() {
        a.Z.addChangeListener(this.handleAccessibilityStoreChanged), i.Z.addChangeListener(this.handleAccessibilityStoreChanged), l.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(l), u.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(u), d.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(d), f.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(f), c.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(c), r.default.setSystemAccessibilityFeatures(this.getActiveFeatures);
    },
    getActiveFeatures: () => o,
    handlePrefersColorSchemeDarkChanged(e) {
        _(s.E.PREFERS_COLOR_SCHEME_DARK, e.matches);
    },
    handlePrefersColorSchemeLightChanged(e) {
        _(s.E.PREFERS_COLOR_SCHEME_LIGHT, e.matches);
    },
    handlePrefersMoreContrastChanged(e) {
        _(s.E.HIGH_CONTRAST, e.matches);
    },
    handlePrefersForcedColorsChanged(e) {
        _(s.E.FORCED_COLORS, e.matches);
    },
    handleInvertColorsChanged(e) {
        _(s.E.INVERT_COLORS, e.matches);
    },
    handleAccessibilityStoreChanged() {
        _(s.E.REDUCED_MOTION, a.Z.useReducedMotion), _(s.E.REDUCED_MOTION_FROM_USER_SETTINGS, 'auto' !== a.Z.rawPrefersReducedMotion), _(s.E.FORCED_COLORS_FROM_USER_SETTINGS, a.Z.syncForcedColors), _(s.E.CHAT_FONT_SCALE_DECREASED, a.Z.isFontScaledDown), _(s.E.CHAT_FONT_SCALE_INCREASED, a.Z.isFontScaledUp), _(s.E.ZOOM_LEVEL_DECREASED, a.Z.isZoomedOut), _(s.E.ZOOM_LEVEL_INCREASED, a.Z.isZoomedIn), _(s.E.MESSAGE_GROUP_SPACING_DECREASED, a.Z.isMessageGroupSpacingDecreased), _(s.E.MESSAGE_GROUP_SPACING_INCREASED, a.Z.isMessageGroupSpacingIncreased), _(s.E.DARK_SIDEBAR, i.Z.darkSidebar), _(s.E.SATURATION_LEVEL_DECREASED, a.Z.saturation < 1), _(s.E.ROLE_STYLE_ADJUSTED, 'username' !== a.Z.roleStyle), _(s.E.SYNC_PROFILE_THEME_WITH_USER_THEME, a.Z.syncProfileThemeWithUserTheme);
    }
};
