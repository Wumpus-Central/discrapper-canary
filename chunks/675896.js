var i = r(210887),
    a = r(626135),
    o = r(607070),
    s = r(94752);
let l = s.E.NONE,
    u = window.matchMedia('(prefers-color-scheme: dark)'),
    c = window.matchMedia('(prefers-color-scheme: light)'),
    d = window.matchMedia('(inverted-colors: inverted)'),
    f = window.matchMedia('(prefers-contrast: more)'),
    p = window.matchMedia('(forced-colors: active)');
function h(e, n) {
    n ? (l |= e) : (l &= ~e);
}
n.Z = {
    init() {
        o.Z.addChangeListener(this.handleAccessibilityStoreChanged), i.Z.addChangeListener(this.handleAccessibilityStoreChanged), u.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(u), c.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(c), f.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(f), p.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(p), d.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(d), a.default.setSystemAccessibilityFeatures(this.getActiveFeatures);
    },
    getActiveFeatures: () => l,
    handlePrefersColorSchemeDarkChanged(e) {
        h(s.E.PREFERS_COLOR_SCHEME_DARK, e.matches);
    },
    handlePrefersColorSchemeLightChanged(e) {
        h(s.E.PREFERS_COLOR_SCHEME_LIGHT, e.matches);
    },
    handlePrefersMoreContrastChanged(e) {
        h(s.E.HIGH_CONTRAST, e.matches);
    },
    handlePrefersForcedColorsChanged(e) {
        h(s.E.FORCED_COLORS, e.matches);
    },
    handleInvertColorsChanged(e) {
        h(s.E.INVERT_COLORS, e.matches);
    },
    handleAccessibilityStoreChanged() {
        h(s.E.REDUCED_MOTION, o.Z.useReducedMotion), h(s.E.REDUCED_MOTION_FROM_USER_SETTINGS, 'auto' !== o.Z.rawPrefersReducedMotion), h(s.E.FORCED_COLORS_FROM_USER_SETTINGS, o.Z.syncForcedColors), h(s.E.CHAT_FONT_SCALE_DECREASED, o.Z.isFontScaledDown), h(s.E.CHAT_FONT_SCALE_INCREASED, o.Z.isFontScaledUp), h(s.E.ZOOM_LEVEL_DECREASED, o.Z.isZoomedOut), h(s.E.ZOOM_LEVEL_INCREASED, o.Z.isZoomedIn), h(s.E.MESSAGE_GROUP_SPACING_DECREASED, o.Z.isMessageGroupSpacingDecreased), h(s.E.MESSAGE_GROUP_SPACING_INCREASED, o.Z.isMessageGroupSpacingIncreased), h(s.E.DARK_SIDEBAR, i.Z.darkSidebar), h(s.E.SATURATION_LEVEL_DECREASED, o.Z.saturation < 1), h(s.E.ROLE_STYLE_ADJUSTED, 'username' !== o.Z.roleStyle), h(s.E.SYNC_PROFILE_THEME_WITH_USER_THEME, o.Z.syncProfileThemeWithUserTheme);
    }
};
