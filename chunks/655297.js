n.r(t),
    n.d(t, {
        default: () => j,
    });
var i = n(627968),
    a = n(64700),
    s = n(311907),
    o = n(398590),
    l = n(252452),
    c = n(820284),
    r = n(83257),
    u = n(475743),
    A = n(793574),
    d = n(688810),
    f = n(247901),
    g = n(772786),
    b = n(890687),
    h = n(97469),
    S = n(628965),
    p = n(115063),
    y = n(544028),
    E = n(360619),
    L = n(987281),
    _ = n(652215),
    m = n(985018);
let k = a.forwardRef(function () {
        f.A.trackExposure({
            location: "cd25e4_1",
        });
        let e = (0, s.bG)([y.A], () => y.A.theme),
            t = (0, h.NC)(),
            {
                section: n,
                subsection: k,
                analyticsLocation: j,
                analyticsLocations: x,
            } = (0, s.cf)([S.A], () => {
                let e = S.A.getSection(),
                    t = S.A.getSubsection();
                return {
                    section: e,
                    subsection: t,
                    analyticsLocation: S.A.getAnalyticsLocation(),
                    analyticsLocations: S.A.getAnalyticsLocations(),
                };
            }),
            C = (0, u.A)(n),
            T = (0, u.A)(k),
            { analyticsLocations: w } = (0, d.Ay)(A.A.USER_SETTINGS);
        a.useEffect(() => {
            null != n &&
                (n !== C || k !== T) &&
                (0, p.iY)({
                    destinationPane: n,
                    originPane: null != C ? C : null,
                    source: j,
                    subsection: k,
                    locationStack: x,
                });
        }, [n, C, k, T, j, x]);
        let { hasSearchResults: v, searchResults: G } = (0, L.V)(),
            N = (0, E.Lu)(),
            R = (0, E.g2)(G),
            U = a.useMemo(() => (v ? R : N), [v, R, N]),
            I = (0, g.g)(),
            P = (0, b.cu)(),
            B = a.useCallback((e) => {
                l.A.setSection(e);
            }, []);
        return (0, i.jsx)(d.f5, {
            value: w,
            children: (0, i.jsx)(c.A, {
                root: !0,
                page: _.liQ.USER_SETTINGS,
                children: (0, i.jsx)(r.Ay, {
                    theme: e,
                    title: m.intl.string(m.t.cduTBL),
                    sidebarTheme: t,
                    section: n,
                    onSetSection: B,
                    onClose: o.jH,
                    sections: U,
                    isEligibleForPomelo: I,
                    questsForBadge: P,
                    showUserSettingsSearch: !0,
                }),
            }),
        });
    }),
    j = a.forwardRef(function () {
        let e = (0, s.bG)([S.A], () => S.A.getAnalyticsLocations()),
            { analyticsLocations: t } = (0, d.Ay)(e);
        return (0, i.jsx)(d.f5, {
            value: t,
            children: (0, i.jsx)(k, {}),
        });
    });
