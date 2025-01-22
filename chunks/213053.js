r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(866442),
    u = r(442837),
    c = r(780384),
    d = r(481060),
    f = r(607070),
    p = r(629935),
    h = r(168551),
    _ = r(168631);
let m = 'custom-profile-theme',
    g = Object.freeze({
        '--profile-gradient-primary-color': 'var(--background-secondary-alt)',
        '--profile-gradient-secondary-color': 'var(--background-secondary-alt)',
        '--profile-gradient-overlay-color': 'rgba(0, 0, 0, 0)',
        '--profile-gradient-button-color': 'var(--button-secondary-background)',
        '--profile-avatar-border-color': 'var(--background-secondary-alt)',
        '--profile-body-background-color': 'var(--background-floating)',
        '--profile-body-background-hover': 'var(--background-modifier-hover)',
        '--profile-body-divider-color': 'var(--background-modifier-accent)',
        '--profile-body-border-color': 'var(--border-faint)',
        '--profile-message-input-border-color': 'var(--background-modifier-accent)',
        '--profile-note-background-color': 'var(--background-tertiary)',
        '--profile-role-pill-background-color': 'var(--background-secondary-alt)',
        '--profile-role-pill-border-color': 'var(--interactive-normal)'
    });
function E(e) {
    let { theme: n, primaryColor: r, secondaryColor: i } = e,
        [o, E] = (0, u.Wu)([f.Z], () => [f.Z.desaturateUserColors, f.Z.syncProfileThemeWithUserTheme]),
        v = (0, _.fq)(n),
        y = (0, _.wu)(n, r, E),
        b = (0, _.lM)(n, r),
        I = (0, _.e4)(n, i),
        T = E ? (null == v ? void 0 : v.overlaySyncedWithUserTheme) : null == v ? void 0 : v.overlay;
    return {
        profileThemeStyle: (0, a.useMemo)(() => {
            if (null == r || null == i || null == v || null == y || null == b || null == I || null == T) return g;
            let e = (e, n) => (0, l.ho)(e, o, null, n);
            return {
                '--profile-gradient-primary-color': e(r),
                '--profile-gradient-secondary-color': e(i),
                '--profile-gradient-overlay-color': T,
                '--profile-gradient-button-color': e((0, _.ZB)(r)),
                '--profile-avatar-border-color': e(y),
                '--profile-body-background-color': v.sectionBox,
                '--profile-body-background-hover': v.profileBodyBackgroundHover,
                '--profile-body-divider-color': e(b, v.dividerOpacity),
                '--profile-body-border-color': e(b, 0.12),
                '--profile-message-input-border-color': e(I),
                '--profile-note-background-color': v.noteBackgroundColor,
                '--profile-role-pill-background-color': v.rolePillBackgroundColor,
                '--profile-role-pill-border-color': v.rolePillBorderColor,
                ...(0, p.W4)({
                    enabled: !0,
                    primaryColor: r,
                    secondaryColor: i,
                    isDarkTheme: (0, c.wj)(n),
                    textMixAmount: 25
                })
            };
        }, [r, i, v, y, b, I, T, n, o]),
        profileThemeClassName: s()((0, d.getThemeClass)(n), {
            [h.e3]: null != r,
            [m]: null != r
        })
    };
}
