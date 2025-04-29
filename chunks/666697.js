n.d(t, { Z: () => S }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var r = n(255367),
    i = n(73800),
    a = n(442837),
    l = n(283836),
    s = n(374939),
    o = n(233374),
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
    O = n(388032),
    P = n(714002);
let S = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: S, initialTab: E, onButtonsVisibilityChange: N } = e,
        T = i.useRef(null),
        A = (0, a.e7)([u.Z], () => u.Z.getApplication(t)),
        L = (0, a.e7)([u.Z], () => u.Z.getApplicationFetchState(t));
    i.useEffect(() => {
        if (null != t && null == A) {
            let e = 'true' === new URLSearchParams(location.search).get('preview') || void 0;
            d.i6(t, { noCache: e });
        }
    }, [t, A]),
        i.useEffect(() => {
            d.T4({ applicationId: t });
        }, [t]),
        i.useEffect(() => () => N(!0), [N]);
    let R = null == A ? void 0 : A.storefront_available,
        [Z, k] = i.useState(null != E ? E : y.GlobalDiscoveryAppsSections.ABOUT),
        w = i.useCallback(
            (e) => {
                var t;
                null == (t = T.current) || t.scrollTo({ to: 0 }), k(y.GlobalDiscoveryAppsSections.ABOUT), n(e);
            },
            [n]
        );
    i.useEffect(() => {
        (null == A ? void 0 : A.storefront_available) && null != t && (0, l.Z)(t);
    }, [null == A ? void 0 : A.storefront_available, t]);
    let D = (0, _.Uc)(),
        M = (0, a.e7)([p.Z], () => p.Z.getFetchState({ applicationId: null == A ? void 0 : A.id })),
        G = (0, a.e7)([p.Z], () => p.Z.getSimilarApplications({ applicationId: null == A ? void 0 : A.id })),
        z = i.useMemo(() => (null == G ? void 0 : G.applications.slice(0, 3)), [G]),
        B = {
            displayedSimilarApplications: z,
            previousView: D
        },
        U = i.useRef(B);
    i.useEffect(() => {
        U.current = B;
    }),
        i.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = U.current;
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
    let F = i.useMemo(
            () => [
                {
                    id: y.GlobalDiscoveryAppsSections.ABOUT,
                    label: O.intl.string(O.t.DkyHMD)
                },
                {
                    id: y.GlobalDiscoveryAppsSections.STORE,
                    label: O.intl.string(O.t.jgEXGB)
                }
            ],
            []
        ),
        V = i.useMemo(() => {
            if (null == A) return null;
            switch (Z) {
                case y.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, r.jsx)(b.Z, { application: A });
                case y.GlobalDiscoveryAppsSections.STORE:
                    return (0, r.jsx)(j.Z, { application: A });
            }
        }, [Z, A]),
        H = i.useCallback(
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
        Y = Z === y.GlobalDiscoveryAppsSections.ABOUT;
    return (0, r.jsx)(c.Z, {
        onScroll: S,
        ref: T,
        children: (0, r.jsx)(s.Z, {
            children:
                null == A
                    ? null == L || L === u.M.FETCHING
                        ? (0, r.jsx)('div', {
                              className: P.centerContainer,
                              children: (0, r.jsx)(h.Z, { loading: !0 })
                          })
                        : (0, r.jsx)('div', {
                              className: P.centerContainer,
                              children: (0, r.jsx)(g.Z, { className: P.error })
                          })
                    : (0, r.jsxs)('div', {
                          className: P.detailContainer,
                          children: [
                              (0, r.jsx)(x.Z, {
                                  application: A,
                                  onButtonsVisibilityChange: N
                              }),
                              (0, r.jsxs)('div', {
                                  className: P.contentContainer,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: P.contentTabsContainer,
                                          children: [
                                              R &&
                                                  (0, r.jsx)('div', {
                                                      className: P.contentTabs,
                                                      children: (0, r.jsx)(o.Z, {
                                                          tabs: F,
                                                          onTabSelect: H,
                                                          selectedTab: Z
                                                      })
                                                  }),
                                              V,
                                              (0, r.jsx)(C.Z, {
                                                  applicationId: t,
                                                  fetchState: M,
                                                  similarApplications: z,
                                                  onSelectApplication: w,
                                                  similarLoadId: null == G ? void 0 : G.loadId
                                              })
                                          ]
                                      }),
                                      Y &&
                                          (0, r.jsx)(v.Z, {
                                              className: P.sidebar,
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
