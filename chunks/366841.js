n.d(t, { G: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(704215),
    s = n(433517),
    l = n(481060),
    c = n(570140),
    u = n(153867),
    d = n(605236),
    f = n(243778),
    _ = n(210887),
    p = n(314897),
    h = n(70956),
    m = n(709054),
    g = n(540059),
    E = n(596401),
    b = n(921944),
    v = n(231338);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function I() {
    let [e, t] = i.useState(!1),
        y = (0, l.VXO)(E.Xd),
        I = (0, g.Q3)('useDesktopRefreshOnboarding'),
        S = i.useMemo(() => (I ? [a.z.DESKTOP_REFRESH_ONBOARDING_MODAL] : []), [I]),
        [T, N] = (0, f.US)(S),
        A = T === a.z.DESKTOP_REFRESH_ONBOARDING_MODAL,
        C = (0, o.e7)([p.default], () => p.default.getId());
    i.useLayoutEffect(() => {
        I && null != C && m.default.age(C) < h.Z.Millis.DAY && (0, d.EW)(a.z.DESKTOP_REFRESH_ONBOARDING_MODAL);
        let e = 'desktop_refresh_theme_migration_key',
            t = 'true' === s.K.get(e);
        A && I && !t && _.Z.theme === v.BR.DARK && !t && (s.K.set(e, 'true'), (0, u.ZI)({ theme: v.BR.DARKER }));
    }, [A, I, C]),
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
    let R = i.useCallback(() => {
        I &&
            (0, l.ZDy)(
                async () => {
                    let { DesktopRefreshOnboardingModal: e } = await n.e('49910').then(n.bind(n, 239191));
                    return (t) => (0, r.jsx)(e, O({}, t));
                },
                {
                    backdropStyle: l.fCB.TOP_RADIAL,
                    onCloseCallback: () => {
                        N(b.L.USER_DISMISS);
                    }
                }
            );
    }, [I, N]);
    i.useEffect(() => {
        I && A && !y && e && R();
    }, [e, y, A, I, R]);
}
