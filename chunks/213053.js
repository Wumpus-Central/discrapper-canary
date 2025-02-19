n.d(t, { Z: () => E }), n(47120);
var r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(866442),
    s = n(442837),
    l = n(780384),
    c = n(481060),
    u = n(607070),
    d = n(629935),
    f = n(168551),
    p = n(168631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
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
    let { theme: t, primaryColor: n, secondaryColor: i } = e,
        [_, E] = (0, s.Wu)([u.Z], () => [u.Z.desaturateUserColors, u.Z.syncProfileThemeWithUserTheme]),
        v = (0, p.fq)(t),
        b = (0, p.wu)(t, n, E),
        y = (0, p.lM)(t, n),
        O = (0, p.e4)(t, i),
        S = E ? (null == v ? void 0 : v.overlaySyncedWithUserTheme) : null == v ? void 0 : v.overlay;
    return {
        profileThemeStyle: (0, r.useMemo)(() => {
            if (null == n || null == i || null == v || null == b || null == y || null == O || null == S) return g;
            let e = (e, t) => (0, a.ho)(e, _, null, t);
            return h(
                {
                    '--profile-gradient-primary-color': e(n),
                    '--profile-gradient-secondary-color': e(i),
                    '--profile-gradient-overlay-color': S,
                    '--profile-gradient-button-color': e((0, p.ZB)(n)),
                    '--profile-avatar-border-color': e(b),
                    '--profile-body-background-color': v.sectionBox,
                    '--profile-body-background-hover': v.profileBodyBackgroundHover,
                    '--profile-body-divider-color': e(y, v.dividerOpacity),
                    '--profile-body-border-color': e(y, 0.12),
                    '--profile-message-input-border-color': e(O),
                    '--profile-note-background-color': v.noteBackgroundColor,
                    '--profile-role-pill-background-color': v.rolePillBackgroundColor,
                    '--profile-role-pill-border-color': v.rolePillBorderColor
                },
                (0, d.W4)({
                    enabled: !0,
                    primaryColor: n,
                    secondaryColor: i,
                    isDarkTheme: (0, l.wj)(t),
                    textMixAmount: 25
                })
            );
        }, [n, i, v, b, y, O, S, t, _]),
        profileThemeClassName: o()((0, c.QeD)(t), {
            [f.e3]: null != n,
            [m]: null != n
        })
    };
}
