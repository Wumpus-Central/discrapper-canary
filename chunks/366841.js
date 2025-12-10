n.d(t, { G: () => I }), n(388685);
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
    p = n(243778),
    _ = n(210887),
    m = n(314897),
    h = n(70956),
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
let S = 1000;
function I() {
    let [e, t] = i.useState(!1),
        O = (0, l.VXO)(E.Xd),
        I = i.useMemo(() => [o.z.DESKTOP_REFRESH_ONBOARDING_MODAL], []),
        [T, C] = (0, p.US)(I),
        A = T === o.z.DESKTOP_REFRESH_ONBOARDING_MODAL,
        N = (0, a.e7)([m.default], () => m.default.getId());
    i.useLayoutEffect(() => {
        null != N && g.default.age(N) < h.Z.Millis.DAY && (0, f.Q3)(o.z.DESKTOP_REFRESH_ONBOARDING_MODAL);
        let e = "desktop_refresh_theme_migration_key",
            t = "true" === s.K.get(e);
        !A ||
            t ||
            _.Z.theme !== y.BR.DARK ||
            null != d.Z.gradientPreset ||
            t ||
            (s.K.set(e, "true"), (0, u.ZI)({ theme: y.BR.DARKER }));
    }, [A, N]),
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
    let P = i.useCallback(() => {
        (0, l.ZDy)(
            async () => {
                let { DesktopRefreshOnboardingModal: e } = await n.e("49910").then(n.bind(n, 239191));
                return (t) => (0, r.jsx)(e, v({}, t));
            },
            {
                backdropStyle: l.fCB.TOP_RADIAL,
                onCloseCallback: () => {
                    C(b.L.USER_DISMISS);
                },
            },
        );
    }, [C]);
    i.useEffect(() => {
        if (A && !O && e) {
            let e = setTimeout(() => {
                P();
            }, S);
            return () => clearTimeout(e);
        }
    }, [e, O, A, P]);
}
