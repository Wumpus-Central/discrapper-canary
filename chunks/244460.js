a.d(t, { A: () => S }), a(323874), a(14289), a(35956);
var n = a(627968),
    l = a(64700),
    i = a(311907),
    s = a(123791),
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
    f = a(116219),
    C = a(475356),
    v = a(489253),
    b = a(247165),
    j = a(435220),
    I = a(652215),
    E = a(985018),
    N = a(714289);
let S = function (e) {
    let { applicationId: t, onSelectApplication: a, onScroll: S, initialTab: y, onButtonsVisibilityChange: P } = e,
        R = l.useRef(null),
        T = (0, i.bG)([u.A], () => u.A.getApplication(t)),
        L = (0, i.bG)([u.A], () => u.A.getApplicationFetchState(t));
    l.useEffect(() => {
        if (null != t && null == T) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            d.Di(t, { noCache: e });
        }
    }, [t, T]),
        l.useEffect(() => {
            d.xZ({ applicationId: t });
        }, [t]),
        l.useEffect(() => () => P(!0), [P]);
    let D = T?.storefront_available,
        [k, O] = l.useState(y ?? j.GlobalDiscoveryAppsSections.ABOUT),
        G = l.useCallback(
            (e) => {
                R.current?.scrollTo({ to: 0 }), O(j.GlobalDiscoveryAppsSections.ABOUT), a(e);
            },
            [a],
        );
    l.useEffect(() => {
        T?.storefront_available && null != t && (0, s.F)(t);
    }, [T?.storefront_available, t]);
    let M = (0, g.Bn)(),
        w = (0, i.bG)([h.A], () => h.A.getFetchState({ applicationId: T?.id })),
        U = (0, i.bG)([h.A], () => h.A.getSimilarApplications({ applicationId: T?.id })),
        B = l.useMemo(() => U?.applications.slice(0, 3), [U]),
        F = { displayedSimilarApplications: B, previousView: M },
        V = l.useRef(F);
    l.useEffect(() => {
        V.current = F;
    }),
        l.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = V.current;
            T?.id != null &&
                w !== h.e.FETCHING &&
                (0, m.TR)(I.HAw.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: g.ev.APPLICATION,
                    previous_page: t?.type,
                    application_id: T.id,
                    referrer: document.referrer,
                    suggested_application_ids: e?.map((e) => e.id),
                });
        }, [T?.id, w]);
    let H = l.useMemo(
            () => [
                { id: j.GlobalDiscoveryAppsSections.ABOUT, label: E.intl.string(E.t.DkyHMK) },
                { id: j.GlobalDiscoveryAppsSections.STORE, label: E.intl.string(E.t.jgEXGB) },
            ],
            [],
        ),
        Y = l.useMemo(() => {
            if (null == T) return null;
            switch (k) {
                case j.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, n.jsx)(A.A, { application: T });
                case j.GlobalDiscoveryAppsSections.STORE:
                    return (0, n.jsx)(b.A, { application: T });
            }
        }, [k, T]),
        z = l.useCallback(
            (e) => {
                (0, m.TR)(I.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, { application_id: t, tab_name: e }),
                    O(e),
                    e === j.GlobalDiscoveryAppsSections.ABOUT
                        ? (0, x.Fr)(I.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t))
                        : (0, x.Fr)(I.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t],
        ),
        X = k === j.GlobalDiscoveryAppsSections.ABOUT;
    return (0, n.jsx)(c.A, {
        onScroll: S,
        ref: R,
        children: (0, n.jsx)(r.A, {
            children:
                null == T
                    ? null == L || L === u.e.FETCHING
                        ? (0, n.jsx)("div", { className: N.Dg, children: (0, n.jsx)(p.A, { loading: !0 }) })
                        : (0, n.jsx)("div", { className: N.Dg, children: (0, n.jsx)(_.A, { className: N.z3 }) })
                    : (0, n.jsxs)("div", {
                          className: N.nM,
                          children: [
                              (0, n.jsx)(f.A, { application: T, onButtonsVisibilityChange: P }),
                              (0, n.jsxs)("div", {
                                  className: N.hQ,
                                  children: [
                                      (0, n.jsxs)("div", {
                                          className: N.Ne,
                                          children: [
                                              D &&
                                                  (0, n.jsx)("div", {
                                                      className: N.OF,
                                                      children: (0, n.jsx)(o.A, {
                                                          tabs: H,
                                                          onTabSelect: z,
                                                          selectedTab: k,
                                                      }),
                                                  }),
                                              Y,
                                              (0, n.jsx)(v.A, {
                                                  applicationId: t,
                                                  fetchState: w,
                                                  similarApplications: B,
                                                  onSelectApplication: G,
                                                  similarLoadId: U?.loadId,
                                              }),
                                          ],
                                      }),
                                      X && (0, n.jsx)(C.A, { className: N.pz, application: T, view: "side" }),
                                  ],
                              }),
                          ],
                      }),
        }),
    });
};
