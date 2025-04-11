n.d(t, { Z: () => g }), n(388685);
var r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(866442),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(629935),
    d = n(168551),
    f = n(168631);
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
function p(e) {
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
let h = 'custom-user-profile-theme',
    m = Object.freeze({
        '--profile-gradient-primary-color': 'var(--background-surface-high)',
        '--profile-gradient-secondary-color': 'var(--background-surface-high)',
        '--profile-gradient-overlay-color': 'rgba(0, 0, 0, 0)',
        '--profile-gradient-button-color': 'var(--background-mod-subtle)'
    });
function g(e) {
    let { theme: t, primaryColor: n, secondaryColor: i } = e,
        [_, g] = (0, s.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.syncProfileThemeWithUserTheme]),
        E = (0, f.fq)(t),
        b = g ? (null == E ? void 0 : E.overlaySyncedWithUserTheme) : null == E ? void 0 : E.overlay;
    return {
        profileThemeStyle: (0, r.useMemo)(() => {
            if (null == n || null == i || null == E || null == b) return m;
            let e = (e, t) => (0, a.ho)(e, _, null, t);
            return p(
                {
                    '--profile-gradient-primary-color': e(n),
                    '--profile-gradient-secondary-color': e(i),
                    '--profile-gradient-overlay-color': b,
                    '--profile-gradient-button-color': e((0, f.ZB)(n))
                },
                (0, u.W4)({
                    enabled: !0,
                    primaryColor: n,
                    secondaryColor: i,
                    isDarkTheme: (0, l.wjy)(t),
                    textMixAmount: 25
                })
            );
        }, [n, i, E, b, t, _]),
        profileThemeClassName: o()((0, l.QeD)(t), {
            [d.e3]: null != n,
            [h]: null != n
        })
    };
}
