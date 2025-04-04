n.d(t, { G: () => T }), n(47120);
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
    y = n(921944),
    v = n(231338);
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
let S = 1000;
function T() {
    let [e, t] = i.useState(!1),
        O = (0, l.VXO)(b.Xd),
        T = (0, E.Q3)('useDesktopRefreshOnboarding'),
        N = i.useMemo(() => (T ? [a.z.DESKTOP_REFRESH_ONBOARDING_MODAL] : []), [T]),
        [A, C] = (0, _.US)(N),
        R = A === a.z.DESKTOP_REFRESH_ONBOARDING_MODAL,
        P = (0, o.e7)([h.default], () => h.default.getId());
    i.useLayoutEffect(() => {
        T && null != P && g.default.age(P) < m.Z.Millis.DAY && (0, f.EW)(a.z.DESKTOP_REFRESH_ONBOARDING_MODAL);
        let e = 'desktop_refresh_theme_migration_key',
            t = 'true' === s.K.get(e);
        R && T && !t && p.Z.theme === v.BR.DARK && null == d.Z.gradientPreset && !t && (s.K.set(e, 'true'), (0, u.ZI)({ theme: v.BR.DARKER }));
    }, [R, T, P]),
        i.useLayoutEffect(() => {
            function e() {
                t(!0);
            }
            return (
                c.Z.subscribe('CHANGE_LOG_RESOLVED', e),
                () => {
                    c.Z.unsubscribe('CHANGE_LOG_RESOLVED', e);
                }
            );
        }, []);
    let w = i.useCallback(() => {
        T &&
            (0, l.ZDy)(
                async () => {
                    let { DesktopRefreshOnboardingModal: e } = await n.e('49910').then(n.bind(n, 239191));
                    return (t) => (0, r.jsx)(e, I({}, t));
                },
                {
                    backdropStyle: l.fCB.TOP_RADIAL,
                    onCloseCallback: () => {
                        C(y.L.USER_DISMISS);
                    }
                }
            );
    }, [T, C]);
    i.useEffect(() => {
        if (T && R && !O && e) {
            let e = setTimeout(() => {
                w();
            }, S);
            return () => clearTimeout(e);
        }
    }, [e, O, R, T, w]);
}
