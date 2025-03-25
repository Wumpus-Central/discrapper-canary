n.d(t, { G: () => S }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(704215),
    s = n(433517),
    l = n(481060),
    c = n(570140),
    u = n(153867),
    d = n(514361),
    f = n(605236),
    _ = n(243778),
    p = n(210887),
    h = n(314897),
    m = n(70956),
    g = n(709054),
    E = n(540059),
    b = n(596401),
    v = n(921944),
    y = n(231338);
function O(e, t, n) {
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
function I(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S() {
    let [e, t] = i.useState(!1),
        O = (0, l.VXO)(b.Xd),
        S = (0, E.Q3)('useDesktopRefreshOnboarding'),
        T = i.useMemo(() => (S ? [a.z.DESKTOP_REFRESH_ONBOARDING_MODAL] : []), [S]),
        [N, A] = (0, _.US)(T),
        C = N === a.z.DESKTOP_REFRESH_ONBOARDING_MODAL,
        R = (0, o.e7)([h.default], () => h.default.getId());
    i.useLayoutEffect(() => {
        S && null != R && g.default.age(R) < m.Z.Millis.DAY && (0, f.EW)(a.z.DESKTOP_REFRESH_ONBOARDING_MODAL);
        let e = 'desktop_refresh_theme_migration_key',
            t = 'true' === s.K.get(e);
        C && S && !t && p.Z.theme === y.BR.DARK && null == d.Z.gradientPreset && !t && (s.K.set(e, 'true'), (0, u.ZI)({ theme: y.BR.DARKER }));
    }, [C, S, R]),
        i.useLayoutEffect(() => {
            function e() {
                setTimeout(() => t(!0), 0);
            }
            return (
                c.Z.subscribe('POST_CONNECTION_OPEN', e),
                () => {
                    c.Z.unsubscribe('POST_CONNECTION_OPEN', e);
                }
            );
        }, []);
    let P = i.useCallback(() => {
        S &&
            (0, l.ZDy)(
                async () => {
                    let { DesktopRefreshOnboardingModal: e } = await n.e('49910').then(n.bind(n, 239191));
                    return (t) => (0, r.jsx)(e, I({}, t));
                },
                {
                    backdropStyle: l.fCB.TOP_RADIAL,
                    onCloseCallback: () => {
                        A(v.L.USER_DISMISS);
                    }
                }
            );
    }, [S, A]);
    i.useEffect(() => {
        S && C && !O && e && P();
    }, [e, O, C, S, P]);
}
