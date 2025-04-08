n.d(t, { Z: () => P }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var r = n(200651),
    a = n(192379),
    i = n(442837),
    l = n(283836),
    o = n(374939),
    s = n(233374),
    c = n(283293),
    d = n(471518),
    u = n(370210),
    p = n(255333),
    m = n(881294),
    h = n(523311),
    g = n(292191),
    _ = n(258971),
    f = n(133743),
    b = n(680474),
    x = n(571737),
    v = n(796150),
    C = n(946542),
    j = n(213746),
    y = n(979007),
    I = n(981631),
    N = n(388032),
    O = n(714002);
let P = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: P, initialTab: S, onButtonsVisibilityChange: E } = e,
        T = a.useRef(null),
        A = (0, i.e7)([u.Z], () => u.Z.getApplication(t)),
        L = (0, i.e7)([u.Z], () => u.Z.getApplicationFetchState(t));
    a.useEffect(() => {
        if (null != t && null == A) {
            let e = 'true' === new URLSearchParams(location.search).get('preview') || void 0;
            d.i6(t, { noCache: e });
        }
    }, [t, A]),
        a.useEffect(() => {
            d.T4({ applicationId: t });
        }, [t]),
        a.useEffect(() => () => E(!0), [E]);
    let R = null == A ? void 0 : A.storefront_available,
        [Z, k] = a.useState(null != S ? S : y.GlobalDiscoveryAppsSections.ABOUT),
        w = a.useCallback(
            (e) => {
                var t;
                null == (t = T.current) || t.scrollTo({ to: 0 }), k(y.GlobalDiscoveryAppsSections.ABOUT), n(e);
            },
            [n]
        );
    a.useEffect(() => {
        (null == A ? void 0 : A.storefront_available) && null != t && (0, l.Z)(t);
    }, [null == A ? void 0 : A.storefront_available, t]);
    let D = (0, _.Uc)(),
        M = (0, i.e7)([p.Z], () => p.Z.getFetchState({ applicationId: null == A ? void 0 : A.id })),
        G = (0, i.e7)([p.Z], () => p.Z.getSimilarApplications({ applicationId: null == A ? void 0 : A.id })),
        z = a.useMemo(() => (null == G ? void 0 : G.applications.slice(0, 3)), [G]),
        B = {
            displayedSimilarApplications: z,
            previousView: D
        },
        W = a.useRef(B);
    a.useEffect(() => {
        W.current = B;
    }),
        a.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = W.current;
            (null == A ? void 0 : A.id) != null &&
                M !== p.M.FETCHING &&
                (0, m.zZ)(I.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: _.m_.APPLICATION,
                    previous_page: null == t ? void 0 : t.type,
                    application_id: A.id,
                    referrer: document.referrer,
                    suggested_application_ids: null == e ? void 0 : e.map((e) => e.id)
                });
        }, [null == A ? void 0 : A.id, M]);
    let U = a.useMemo(
            () => [
                {
                    id: y.GlobalDiscoveryAppsSections.ABOUT,
                    label: N.NW.string(N.t.DkyHMD)
                },
                {
                    id: y.GlobalDiscoveryAppsSections.STORE,
                    label: N.NW.string(N.t.jgEXGB)
                }
            ],
            []
        ),
        F = a.useMemo(() => {
            if (null == A) return null;
            switch (Z) {
                case y.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, r.jsx)(b.Z, { application: A });
                case y.GlobalDiscoveryAppsSections.STORE:
                    return (0, r.jsx)(j.Z, { application: A });
            }
        }, [Z, A]),
        V = a.useCallback(
            (e) => {
                (0, m.zZ)(I.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: t,
                    tab_name: e
                }),
                    k(e),
                    e === y.GlobalDiscoveryAppsSections.ABOUT ? (0, f.Gp)(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, f.Gp)(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t]
        ),
        H = Z === y.GlobalDiscoveryAppsSections.ABOUT;
    return (0, r.jsx)(c.Z, {
        onScroll: P,
        ref: T,
        children: (0, r.jsx)(o.Z, {
            children:
                null == A
                    ? null == L || L === u.M.FETCHING
                        ? (0, r.jsx)('div', {
                              className: O.centerContainer,
                              children: (0, r.jsx)(h.Z, { loading: !0 })
                          })
                        : (0, r.jsx)('div', {
                              className: O.centerContainer,
                              children: (0, r.jsx)(g.Z, { className: O.error })
                          })
                    : (0, r.jsxs)('div', {
                          className: O.detailContainer,
                          children: [
                              (0, r.jsx)(x.Z, {
                                  application: A,
                                  onButtonsVisibilityChange: E
                              }),
                              (0, r.jsxs)('div', {
                                  className: O.contentContainer,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: O.contentTabsContainer,
                                          children: [
                                              R &&
                                                  (0, r.jsx)('div', {
                                                      className: O.contentTabs,
                                                      children: (0, r.jsx)(s.Z, {
                                                          tabs: U,
                                                          onTabSelect: V,
                                                          selectedTab: Z
                                                      })
                                                  }),
                                              F,
                                              (0, r.jsx)(C.Z, {
                                                  applicationId: t,
                                                  fetchState: M,
                                                  similarApplications: z,
                                                  onSelectApplication: w,
                                                  similarLoadId: null == G ? void 0 : G.loadId
                                              })
                                          ]
                                      }),
                                      H &&
                                          (0, r.jsx)(v.Z, {
                                              className: O.sidebar,
                                              application: A,
                                              view: 'side'
                                          })
                                  ]
                              })
                          ]
                      })
        })
    });
};
