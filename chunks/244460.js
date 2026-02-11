a.d(t, { A: () => N }), a(323874), a(14289), a(35956);
var n = a(627968),
    i = a(64700),
    s = a(311907),
    l = a(123791),
    r = a(979590),
    o = a(45758),
    c = a(783531),
    d = a(354138),
    u = a(212534),
    h = a(82293),
    m = a(412461),
    p = a(867333),
    _ = a(111737),
    g = a(310419),
    x = a(656106),
    A = a(241837),
    C = a(116219),
    b = a(475356),
    v = a(489253),
    f = a(247165),
    j = a(435220),
    I = a(652215),
    E = a(985018),
    S = a(50840);
let N = function (e) {
    let { applicationId: t, onSelectApplication: a, onScroll: N, initialTab: y, onButtonsVisibilityChange: T } = e,
        R = i.useRef(null),
        L = (0, s.bG)([u.A], () => u.A.getApplication(t)),
        P = (0, s.bG)([u.A], () => u.A.getApplicationFetchState(t));
    i.useEffect(() => {
        if (null != t && null == L) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            d.Di(t, { noCache: e });
        }
    }, [t, L]),
        i.useEffect(() => {
            d.xZ({ applicationId: t });
        }, [t]),
        i.useEffect(() => () => T(!0), [T]);
    let D = L?.storefront_available,
        [O, k] = i.useState(y ?? j.GlobalDiscoveryAppsSections.ABOUT),
        M = i.useCallback(
            (e) => {
                R.current?.scrollTo({ to: 0 }), k(j.GlobalDiscoveryAppsSections.ABOUT), a(e);
            },
            [a],
        );
    i.useEffect(() => {
        L?.storefront_available && null != t && (0, l.F)(t);
    }, [L?.storefront_available, t]);
    let G = (0, g.Bn)(),
        U = (0, s.bG)([h.A], () => h.A.getFetchState({ applicationId: L?.id })),
        w = (0, s.bG)([h.A], () => h.A.getSimilarApplications({ applicationId: L?.id })),
        V = i.useMemo(() => w?.applications.slice(0, 3), [w]),
        H = { displayedSimilarApplications: V, previousView: G },
        B = i.useRef(H);
    i.useEffect(() => {
        B.current = H;
    }),
        i.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = B.current;
            L?.id != null &&
                U !== h.e.FETCHING &&
                (0, m.TR)(I.HAw.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: g.ev.APPLICATION,
                    previous_page: t?.type,
                    application_id: L.id,
                    referrer: document.referrer,
                    suggested_application_ids: e?.map((e) => e.id),
                });
        }, [L?.id, U]);
    let F = i.useMemo(
            () => [
                { id: j.GlobalDiscoveryAppsSections.ABOUT, label: E.intl.string(E.t.DkyHMK) },
                { id: j.GlobalDiscoveryAppsSections.STORE, label: E.intl.string(E.t.jgEXGB) },
            ],
            [],
        ),
        Y = i.useMemo(() => {
            if (null == L) return null;
            switch (O) {
                case j.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, n.jsx)(A.A, { application: L });
                case j.GlobalDiscoveryAppsSections.STORE:
                    return (0, n.jsx)(f.A, { application: L });
            }
        }, [O, L]),
        z = i.useCallback(
            (e) => {
                (0, m.TR)(I.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, { application_id: t, tab_name: e }),
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
                null == L
                    ? null == P || P === u.e.FETCHING
                        ? (0, n.jsx)("div", { className: S.Dg, children: (0, n.jsx)(p.A, { loading: !0 }) })
                        : (0, n.jsx)("div", { className: S.Dg, children: (0, n.jsx)(_.A, { className: S.z3 }) })
                    : (0, n.jsxs)("div", {
                          className: S.nM,
                          children: [
                              (0, n.jsx)(C.A, { application: L, onButtonsVisibilityChange: T }),
                              (0, n.jsxs)("div", {
                                  className: S.hQ,
                                  children: [
                                      (0, n.jsxs)("div", {
                                          className: S.Ne,
                                          children: [
                                              D &&
                                                  (0, n.jsx)("div", {
                                                      className: S.OF,
                                                      children: (0, n.jsx)(o.A, {
                                                          tabs: F,
                                                          onTabSelect: z,
                                                          selectedTab: O,
                                                      }),
                                                  }),
                                              Y,
                                              (0, n.jsx)(v.A, {
                                                  applicationId: t,
                                                  fetchState: U,
                                                  similarApplications: V,
                                                  onSelectApplication: M,
                                                  similarLoadId: w?.loadId,
                                              }),
                                          ],
                                      }),
                                      X && (0, n.jsx)(b.A, { className: S.pz, application: L, view: "side" }),
                                  ],
                              }),
                          ],
                      }),
        }),
    });
};
