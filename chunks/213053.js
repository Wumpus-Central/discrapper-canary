(n.d(t, { Z: () => y }), n(388685));
var r = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(866442),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(629935),
    d = n(168551),
    f = n(168631),
    _ = n(579132),
    p = n(228168);
function h(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            }));
    }
    return e;
}
let g = {
        [p.lY.POPOUT]: 'user-profile-popout',
        [p.lY.MODAL]: 'user-profile-modal',
        [p.lY.MODAL_V2]: 'user-profile-modal-v2',
        [p.lY.SIDEBAR]: 'user-profile-sidebar'
    },
    E = 'custom-user-profile-theme',
    b = Object.freeze({
        '--profile-gradient-primary-color': 'var(--background-surface-high)',
        '--profile-gradient-secondary-color': 'var(--background-surface-high)',
        '--profile-gradient-overlay-color': 'rgba(0, 0, 0, 0)',
        '--profile-gradient-button-color': 'var(--background-mod-subtle)',
        '--profile-gradient-modal-background-color': 'var(--background-base-lower)'
    });
function y(e) {
    let { theme: t, themeType: n, primaryColor: i, secondaryColor: p } = e,
        [h, y] = (0, s.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.syncProfileThemeWithUserTheme]),
        O = (0, _.f)(t),
        v = y ? (null == O ? void 0 : O.overlaySyncedWithUserTheme) : null == O ? void 0 : O.overlay;
    return {
        profileThemeStyle: (0, r.useMemo)(() => {
            if (null == i || null == p || null == O || null == v) return b;
            let e = (e, t) => (0, o.ho)(e, h, null, t);
            return m(
                {
                    '--profile-gradient-primary-color': e(i),
                    '--profile-gradient-secondary-color': e(p),
                    '--profile-gradient-overlay-color': v,
                    '--profile-gradient-button-color': e((0, f.ZB)(i)),
                    '--profile-gradient-modal-background-color': e((0, f.oU)(i, p, y ? t : void 0))
                },
                (0, u.W4)({
                    enabled: !0,
                    primaryColor: i,
                    secondaryColor: p,
                    isDarkTheme: (0, l.wjy)(t),
                    textMixAmount: 25
                })
            );
        }, [i, p, O, v, y, t, h]),
        profileThemeClassName: a()((0, l.QeD)(t), null != n ? { [g[n]]: !0 } : void 0, {
            [d.e3]: null != i,
            [E]: null != i
        })
    };
}
