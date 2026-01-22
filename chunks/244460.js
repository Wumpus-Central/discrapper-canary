n.d(t, {
    A: () => E,
}),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238);
var l = n(627968),
    a = n(64700),
    r = n(311907),
    i = n(123791),
    s = n(979590),
    c = n(45758),
    o = n(783531),
    d = n(354138),
    u = n(212534),
    p = n(82293),
    h = n(412461),
    m = n(867333),
    b = n(111737),
    f = n(310419),
    g = n(656106),
    x = n(241837),
    v = n(116219),
    j = n(475356),
    A = n(489253),
    _ = n(247165),
    y = n(435220),
    O = n(652215),
    S = n(985018),
    C = n(312222);
let E = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: E, initialTab: I, onButtonsVisibilityChange: P } = e,
        N = a.useRef(null),
        R = (0, r.bG)([u.A], () => u.A.getApplication(t)),
        T = (0, r.bG)([u.A], () => u.A.getApplicationFetchState(t));
    a.useEffect(() => {
        if (null != t && null == R) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            d.Di(t, {
                noCache: e,
            });
        }
    }, [t, R]),
        a.useEffect(() => {
            d.xZ({
                applicationId: t,
            });
        }, [t]),
        a.useEffect(() => () => P(!0), [P]);
    let L = null == R ? void 0 : R.storefront_available,
        [D, w] = a.useState(null != I ? I : y.GlobalDiscoveryAppsSections.ABOUT),
        k = a.useCallback(
            (e) => {
                var t;
                null == (t = N.current) ||
                    t.scrollTo({
                        to: 0,
                    }),
                    w(y.GlobalDiscoveryAppsSections.ABOUT),
                    n(e);
            },
            [n],
        );
    a.useEffect(() => {
        (null == R ? void 0 : R.storefront_available) && null != t && (0, i.F)(t);
    }, [null == R ? void 0 : R.storefront_available, t]);
    let M = (0, f.Bn)(),
        U = (0, r.bG)([p.A], () =>
            p.A.getFetchState({
                applicationId: null == R ? void 0 : R.id,
            }),
        ),
        G = (0, r.bG)([p.A], () =>
            p.A.getSimilarApplications({
                applicationId: null == R ? void 0 : R.id,
            }),
        ),
        V = a.useMemo(() => (null == G ? void 0 : G.applications.slice(0, 3)), [G]),
        H = {
            displayedSimilarApplications: V,
            previousView: M,
        },
        F = a.useRef(H);
    a.useEffect(() => {
        F.current = H;
    }),
        a.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = F.current;
            (null == R ? void 0 : R.id) != null &&
                U !== p.e.FETCHING &&
                (0, h.TR)(O.HAw.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: f.ev.APPLICATION,
                    previous_page: null == t ? void 0 : t.type,
                    application_id: R.id,
                    referrer: document.referrer,
                    suggested_application_ids: null == e ? void 0 : e.map((e) => e.id),
                });
        }, [null == R ? void 0 : R.id, U]);
    let B = a.useMemo(
            () => [
                {
                    id: y.GlobalDiscoveryAppsSections.ABOUT,
                    label: S.intl.string(S.t.DkyHMK),
                },
                {
                    id: y.GlobalDiscoveryAppsSections.STORE,
                    label: S.intl.string(S.t.jgEXGB),
                },
            ],
            [],
        ),
        Y = a.useMemo(() => {
            if (null == R) return null;
            switch (D) {
                case y.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, l.jsx)(x.A, {
                        application: R,
                    });
                case y.GlobalDiscoveryAppsSections.STORE:
                    return (0, l.jsx)(_.A, {
                        application: R,
                    });
            }
        }, [D, R]),
        z = a.useCallback(
            (e) => {
                (0, h.TR)(O.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: t,
                    tab_name: e,
                }),
                    w(e),
                    e === y.GlobalDiscoveryAppsSections.ABOUT
                        ? (0, g.Fr)(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t))
                        : (0, g.Fr)(O.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t],
        ),
        X = D === y.GlobalDiscoveryAppsSections.ABOUT;
    return (0, l.jsx)(o.A, {
        onScroll: E,
        ref: N,
        children: (0, l.jsx)(s.A, {
            children:
                null == R
                    ? null == T || T === u.e.FETCHING
                        ? (0, l.jsx)("div", {
                              className: C.Dg,
                              children: (0, l.jsx)(m.A, {
                                  loading: !0,
                              }),
                          })
                        : (0, l.jsx)("div", {
                              className: C.Dg,
                              children: (0, l.jsx)(b.A, {
                                  className: C.z3,
                              }),
                          })
                    : (0, l.jsxs)("div", {
                          className: C.nM,
                          children: [
                              (0, l.jsx)(v.A, {
                                  application: R,
                                  onButtonsVisibilityChange: P,
                              }),
                              (0, l.jsxs)("div", {
                                  className: C.hQ,
                                  children: [
                                      (0, l.jsxs)("div", {
                                          className: C.Ne,
                                          children: [
                                              L &&
                                                  (0, l.jsx)("div", {
                                                      className: C.OF,
                                                      children: (0, l.jsx)(c.A, {
                                                          tabs: B,
                                                          onTabSelect: z,
                                                          selectedTab: D,
                                                      }),
                                                  }),
                                              Y,
                                              (0, l.jsx)(A.A, {
                                                  applicationId: t,
                                                  fetchState: U,
                                                  similarApplications: V,
                                                  onSelectApplication: k,
                                                  similarLoadId: null == G ? void 0 : G.loadId,
                                              }),
                                          ],
                                      }),
                                      X &&
                                          (0, l.jsx)(j.A, {
                                              className: C.pz,
                                              application: R,
                                              view: "side",
                                          }),
                                  ],
                              }),
                          ],
                      }),
        }),
    });
};
