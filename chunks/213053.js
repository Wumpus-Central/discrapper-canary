n.d(t, { Z: () => m }), n(47120);
var i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(866442),
    o = n(442837),
    l = n(780384),
    u = n(481060),
    c = n(607070),
    d = n(629935),
    f = n(168551),
    _ = n(168631);
let p = 'custom-profile-theme',
    h = Object.freeze({
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
function m(e) {
    let { theme: t, primaryColor: n, secondaryColor: r } = e,
        [m, g] = (0, o.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.syncProfileThemeWithUserTheme]),
        E = (0, _.fq)(t),
        v = (0, _.wu)(t, n, g),
        y = (0, _.lM)(t, n),
        I = (0, _.e4)(t, r),
        b = g ? (null == E ? void 0 : E.overlaySyncedWithUserTheme) : null == E ? void 0 : E.overlay;
    return {
        profileThemeStyle: (0, i.useMemo)(() => {
            if (null == n || null == r || null == E || null == v || null == y || null == I || null == b) return h;
            let e = (e, t) => (0, s.ho)(e, m, null, t);
            return {
                '--profile-gradient-primary-color': e(n),
                '--profile-gradient-secondary-color': e(r),
                '--profile-gradient-overlay-color': b,
                '--profile-gradient-button-color': e((0, _.ZB)(n)),
                '--profile-avatar-border-color': e(v),
                '--profile-body-background-color': E.sectionBox,
                '--profile-body-background-hover': E.profileBodyBackgroundHover,
                '--profile-body-divider-color': e(y, E.dividerOpacity),
                '--profile-body-border-color': e(y, 0.12),
                '--profile-message-input-border-color': e(I),
                '--profile-note-background-color': E.noteBackgroundColor,
                '--profile-role-pill-background-color': E.rolePillBackgroundColor,
                '--profile-role-pill-border-color': E.rolePillBorderColor,
                ...(0, d.W4)({
                    enabled: !0,
                    primaryColor: n,
                    secondaryColor: r,
                    isDarkTheme: (0, l.wj)(t),
                    textMixAmount: 25
                })
            };
        }, [n, r, E, v, y, I, b, t, m]),
        profileThemeClassName: a()((0, u.QeD)(t), {
            [f.e3]: null != n,
            [p]: null != n
        })
    };
}
