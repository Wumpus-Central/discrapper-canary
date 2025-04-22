n.d(t, { Z: () => b }), n(388685);
var r = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(866442),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(629935),
    d = n(168551),
    f = n(168631),
    _ = n(228168);
function p(e, t, n) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
let m = {
        [_.lY.POPOUT]: 'user-profile-popout',
        [_.lY.MODAL]: 'user-profile-modal',
        [_.lY.SIDEBAR]: 'user-profile-sidebar'
    },
    g = 'custom-user-profile-theme',
    E = Object.freeze({
        '--profile-gradient-primary-color': 'var(--background-surface-high)',
        '--profile-gradient-secondary-color': 'var(--background-surface-high)',
        '--profile-gradient-overlay-color': 'rgba(0, 0, 0, 0)',
        '--profile-gradient-button-color': 'var(--background-mod-subtle)'
    });
function b(e) {
    let { theme: t, themeType: n, primaryColor: i, secondaryColor: _ } = e,
        [p, b] = (0, s.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.syncProfileThemeWithUserTheme]),
        y = (0, f.fq)(t),
        v = b ? (null == y ? void 0 : y.overlaySyncedWithUserTheme) : null == y ? void 0 : y.overlay;
    return {
        profileThemeStyle: (0, r.useMemo)(() => {
            if (null == i || null == _ || null == y || null == v) return E;
            let e = (e, t) => (0, o.ho)(e, p, null, t);
            return h(
                {
                    '--profile-gradient-primary-color': e(i),
                    '--profile-gradient-secondary-color': e(_),
                    '--profile-gradient-overlay-color': v,
                    '--profile-gradient-button-color': e((0, f.ZB)(i))
                },
                (0, u.W4)({
                    enabled: !0,
                    primaryColor: i,
                    secondaryColor: _,
                    isDarkTheme: (0, l.wjy)(t),
                    textMixAmount: 25
                })
            );
        }, [i, _, y, v, t, p]),
        profileThemeClassName: a()((0, l.QeD)(t), null != n ? { [m[n]]: !0 } : void 0, {
            [d.e3]: null != i,
            [g]: null != i
        })
    };
}
