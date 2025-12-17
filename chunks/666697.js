n.d(t, { Z: () => O }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(283836),
    s = n(374939),
    o = n(233374),
    c = n(283293),
    d = n(471518),
    u = n(370210),
    p = n(255333),
    m = n(881294),
    h = n(523311),
    f = n(292191),
    g = n(258971),
    b = n(133743),
    x = n(680474),
    v = n(571737),
    C = n(796150),
    j = n(946542),
    _ = n(213746),
    y = n(979007),
    I = n(981631),
    S = n(388032),
    P = n(595053);
let O = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: O, initialTab: E, onButtonsVisibilityChange: N } = e,
        T = r.useRef(null),
        A = (0, i.e7)([u.Z], () => u.Z.getApplication(t)),
        L = (0, i.e7)([u.Z], () => u.Z.getApplicationFetchState(t));
    r.useEffect(() => {
        if (null != t && null == A) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            d.i6(t, { noCache: e });
        }
    }, [t, A]),
        r.useEffect(() => {
            d.T4({ applicationId: t });
        }, [t]),
        r.useEffect(() => () => N(!0), [N]);
    let R = null == A ? void 0 : A.storefront_available,
        [Z, w] = r.useState(null != E ? E : y.GlobalDiscoveryAppsSections.ABOUT),
        D = r.useCallback(
            (e) => {
                var t;
                null == (t = T.current) || t.scrollTo({ to: 0 }), w(y.GlobalDiscoveryAppsSections.ABOUT), n(e);
            },
            [n],
        );
    r.useEffect(() => {
        (null == A ? void 0 : A.storefront_available) && null != t && (0, l.Z)(t);
    }, [null == A ? void 0 : A.storefront_available, t]);
    let k = (0, g.Uc)(),
        M = (0, i.e7)([p.Z], () => p.Z.getFetchState({ applicationId: null == A ? void 0 : A.id })),
        G = (0, i.e7)([p.Z], () => p.Z.getSimilarApplications({ applicationId: null == A ? void 0 : A.id })),
        B = r.useMemo(() => (null == G ? void 0 : G.applications.slice(0, 3)), [G]),
        U = {
            displayedSimilarApplications: B,
            previousView: k,
        },
        F = r.useRef(U);
    r.useEffect(() => {
        F.current = U;
    }),
        r.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = F.current;
            (null == A ? void 0 : A.id) != null &&
                M !== p.M.FETCHING &&
                (0, m.zZ)(I.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: g.m_.APPLICATION,
                    previous_page: null == t ? void 0 : t.type,
                    application_id: A.id,
                    referrer: document.referrer,
                    suggested_application_ids: null == e ? void 0 : e.map((e) => e.id),
                });
        }, [null == A ? void 0 : A.id, M]);
    let z = r.useMemo(
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
        H = r.useMemo(() => {
            if (null == A) return null;
            switch (Z) {
                case y.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, a.jsx)(x.Z, { application: A });
                case y.GlobalDiscoveryAppsSections.STORE:
                    return (0, a.jsx)(_.Z, { application: A });
            }
        }, [Z, A]),
        V = r.useCallback(
            (e) => {
                (0, m.zZ)(I.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: t,
                    tab_name: e,
                }),
                    w(e),
                    e === y.GlobalDiscoveryAppsSections.ABOUT
                        ? (0, b.Gp)(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t))
                        : (0, b.Gp)(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t],
        ),
        Y = Z === y.GlobalDiscoveryAppsSections.ABOUT;
    return (0, a.jsx)(c.Z, {
        onScroll: O,
        ref: T,
        children: (0, a.jsx)(s.Z, {
            children:
                null == A
                    ? null == L || L === u.M.FETCHING
                        ? (0, a.jsx)("div", {
                              className: P.centerContainer,
                              children: (0, a.jsx)(h.Z, { loading: !0 }),
                          })
                        : (0, a.jsx)("div", {
                              className: P.centerContainer,
                              children: (0, a.jsx)(f.Z, { className: P.error }),
                          })
                    : (0, a.jsxs)("div", {
                          className: P.detailContainer,
                          children: [
                              (0, a.jsx)(v.Z, {
                                  application: A,
                                  onButtonsVisibilityChange: N,
                              }),
                              (0, a.jsxs)("div", {
                                  className: P.contentContainer,
                                  children: [
                                      (0, a.jsxs)("div", {
                                          className: P.contentTabsContainer,
                                          children: [
                                              R &&
                                                  (0, a.jsx)("div", {
                                                      className: P.contentTabs,
                                                      children: (0, a.jsx)(o.Z, {
                                                          tabs: z,
                                                          onTabSelect: V,
                                                          selectedTab: Z,
                                                      }),
                                                  }),
                                              H,
                                              (0, a.jsx)(j.Z, {
                                                  applicationId: t,
                                                  fetchState: M,
                                                  similarApplications: B,
                                                  onSelectApplication: D,
                                                  similarLoadId: null == G ? void 0 : G.loadId,
                                              }),
                                          ],
                                      }),
                                      Y &&
                                          (0, a.jsx)(C.Z, {
                                              className: P.sidebar,
                                              application: A,
                                              view: "side",
                                          }),
                                  ],
                              }),
                          ],
                      }),
        }),
    });
};
