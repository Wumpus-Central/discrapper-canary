a.d(t, { A: () => N }), a(323874), a(14289), a(35956);
var n = a(627968),
    i = a(64700),
    l = a(311907),
    s = a(123791),
    r = a(979590),
    o = a(45758),
    c = a(783531),
    d = a(354138),
    u = a(212534),
    m = a(82293),
    h = a(412461),
    p = a(867333),
    _ = a(111737),
    g = a(310419),
    x = a(656106),
    A = a(241837),
    f = a(116219),
    b = a(475356),
    C = a(489253),
    v = a(247165),
    j = a(435220),
    I = a(652215),
    S = a(985018),
    E = a(167553);
let N = function (e) {
    let { applicationId: t, onSelectApplication: a, onScroll: N, initialTab: y, onButtonsVisibilityChange: T } = e,
        R = i.useRef(null),
        P = (0, l.bG)([u.A], () => u.A.getApplication(t)),
        L = (0, l.bG)([u.A], () => u.A.getApplicationFetchState(t));
    i.useEffect(() => {
        if (null != t && null == P) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            d.Di(t, { noCache: e });
        }
    }, [t, P]),
        i.useEffect(() => {
            d.xZ({ applicationId: t });
        }, [t]),
        i.useEffect(() => () => T(!0), [T]);
    let D = P?.storefront_available,
        [O, k] = i.useState(y ?? j.GlobalDiscoveryAppsSections.ABOUT),
        G = i.useCallback(
            (e) => {
                R.current?.scrollTo({ to: 0 }), k(j.GlobalDiscoveryAppsSections.ABOUT), a(e);
            },
            [a],
        );
    i.useEffect(() => {
        P?.storefront_available && null != t && (0, s.F)(t);
    }, [P?.storefront_available, t]);
    let M = (0, g.Bn)(),
        U = (0, l.bG)([m.A], () => m.A.getFetchState({ applicationId: P?.id })),
        w = (0, l.bG)([m.A], () => m.A.getSimilarApplications({ applicationId: P?.id })),
        H = i.useMemo(() => w?.applications.slice(0, 3), [w]),
        V = { displayedSimilarApplications: H, previousView: M },
        B = i.useRef(V);
    i.useEffect(() => {
        B.current = V;
    }),
        i.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = B.current;
            P?.id != null &&
                U !== m.e.FETCHING &&
                (0, h.TR)(I.HAw.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: g.ev.APPLICATION,
                    previous_page: t?.type,
                    application_id: P.id,
                    referrer: document.referrer,
                    suggested_application_ids: e?.map((e) => e.id),
                });
        }, [P?.id, U]);
    let F = i.useMemo(
            () => [
                { id: j.GlobalDiscoveryAppsSections.ABOUT, label: S.intl.string(S.t.DkyHMK) },
                { id: j.GlobalDiscoveryAppsSections.STORE, label: S.intl.string(S.t.jgEXGB) },
            ],
            [],
        ),
        Y = i.useMemo(() => {
            if (null == P) return null;
            switch (O) {
                case j.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, n.jsx)(A.A, { application: P });
                case j.GlobalDiscoveryAppsSections.STORE:
                    return (0, n.jsx)(v.A, { application: P });
            }
        }, [O, P]),
        z = i.useCallback(
            (e) => {
                (0, h.TR)(I.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, { application_id: t, tab_name: e }),
                    k(e),
                    e === j.GlobalDiscoveryAppsSections.ABOUT
                        ? (0, x.Fr)(I.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t))
                        : (0, x.Fr)(I.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t],
        ),
        X = O === j.GlobalDiscoveryAppsSections.ABOUT;
    return (0, n.jsx)(c.A, {
        onScroll: N,
        ref: R,
        children: (0, n.jsx)(r.A, {
            children:
                null == P
                    ? null == L || L === u.e.FETCHING
                        ? (0, n.jsx)("div", { className: E.Dg, children: (0, n.jsx)(p.A, { loading: !0 }) })
                        : (0, n.jsx)("div", { className: E.Dg, children: (0, n.jsx)(_.A, { className: E.z3 }) })
                    : (0, n.jsxs)("div", {
                          className: E.nM,
                          children: [
                              (0, n.jsx)(f.A, { application: P, onButtonsVisibilityChange: T }),
                              (0, n.jsxs)("div", {
                                  className: E.hQ,
                                  children: [
                                      (0, n.jsxs)("div", {
                                          className: E.Ne,
                                          children: [
                                              D &&
                                                  (0, n.jsx)("div", {
                                                      className: E.OF,
                                                      children: (0, n.jsx)(o.A, {
                                                          tabs: F,
                                                          onTabSelect: z,
                                                          selectedTab: O,
                                                      }),
                                                  }),
                                              Y,
                                              (0, n.jsx)(C.A, {
                                                  applicationId: t,
                                                  fetchState: U,
                                                  similarApplications: H,
                                                  onSelectApplication: G,
                                                  similarLoadId: w?.loadId,
                                              }),
                                          ],
                                      }),
                                      X && (0, n.jsx)(b.A, { className: E.pz, application: P, view: "side" }),
                                  ],
                              }),
                          ],
                      }),
        }),
    });
};
