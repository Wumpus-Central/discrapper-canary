n.d(t, { G: () => T }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(704215),
    s = n(433517),
    l = n(481060),
    c = n(570140),
    u = n(153867),
    d = n(514361),
    f = n(266454),
    _ = n(243778),
    p = n(210887),
    h = n(314897),
    m = n(70956),
    g = n(709054),
    E = n(596401),
    b = n(921944),
    y = n(231338);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
let I = 1000;
function T() {
    let [e, t] = i.useState(!1),
        O = (0, l.VXO)(E.Xd),
        T = i.useMemo(() => [o.z.DESKTOP_REFRESH_ONBOARDING_MODAL], []),
        [S, A] = (0, _.US)(T),
        C = S === o.z.DESKTOP_REFRESH_ONBOARDING_MODAL,
        N = (0, a.e7)([h.default], () => h.default.getId());
    i.useLayoutEffect(() => {
        null != N && g.default.age(N) < m.Z.Millis.DAY && (0, f.Q3)(o.z.DESKTOP_REFRESH_ONBOARDING_MODAL);
        let e = "desktop_refresh_theme_migration_key",
            t = "true" === s.K.get(e);
        !C ||
            t ||
            p.Z.theme !== y.BR.DARK ||
            null != d.Z.gradientPreset ||
            t ||
            (s.K.set(e, "true"), (0, u.ZI)({ theme: y.BR.DARKER }));
    }, [C, N]),
        i.useLayoutEffect(() => {
            function e() {
                t(!0);
            }
            return (
                c.Z.subscribe("CHANGE_LOG_RESOLVED", e),
                () => {
                    c.Z.unsubscribe("CHANGE_LOG_RESOLVED", e);
                }
            );
        }, []);
    let R = i.useCallback(() => {
        (0, l.ZDy)(
            async () => {
                let { DesktopRefreshOnboardingModal: e } = await n.e("49910").then(n.bind(n, 239191));
                return (t) => (0, r.jsx)(e, v({}, t));
            },
            {
                backdropStyle: l.fCB.TOP_RADIAL,
                onCloseCallback: () => {
                    A(b.L.USER_DISMISS);
                },
            },
        );
    }, [A]);
    i.useEffect(() => {
        if (C && !O && e) {
            let e = setTimeout(() => {
                R();
            }, I);
            return () => clearTimeout(e);
        }
    }, [e, O, C, R]);
}
