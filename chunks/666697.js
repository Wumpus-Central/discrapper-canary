n.d(t, { Z: () => P }), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
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
    f = n(258971),
    _ = n(133743),
    b = n(680474),
    x = n(571737),
    v = n(796150),
    C = n(946542),
    j = n(213746),
    y = n(979007),
    O = n(981631),
    I = n(388032),
    N = n(714002);
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
        [w, Z] = a.useState(null != S ? S : y.GlobalDiscoveryAppsSections.ABOUT),
        k = a.useCallback(
            (e) => {
                var t;
                null == (t = T.current) || t.scrollTo({ to: 0 }), Z(y.GlobalDiscoveryAppsSections.ABOUT), n(e);
            },
            [n]
        );
    a.useEffect(() => {
        (null == A ? void 0 : A.storefront_available) && null != t && (0, l.Z)(t);
    }, [null == A ? void 0 : A.storefront_available, t]);
    let D = (0, f.Uc)(),
        M = (0, i.e7)([p.Z], () => p.Z.getFetchState({ applicationId: null == A ? void 0 : A.id })),
        z = (0, i.e7)([p.Z], () => p.Z.getSimilarApplications({ applicationId: null == A ? void 0 : A.id })),
        G = a.useMemo(() => (null == z ? void 0 : z.applications.slice(0, 3)), [z]),
        B = {
            displayedSimilarApplications: G,
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
                (0, m.zZ)(O.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: f.m_.APPLICATION,
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
                    label: I.NW.string(I.t.DkyHMD)
                },
                {
                    id: y.GlobalDiscoveryAppsSections.STORE,
                    label: I.NW.string(I.t.jgEXGB)
                }
            ],
            []
        ),
        F = a.useMemo(() => {
            if (null == A) return null;
            switch (w) {
                case y.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, r.jsx)(b.Z, { application: A });
                case y.GlobalDiscoveryAppsSections.STORE:
                    return (0, r.jsx)(j.Z, { application: A });
            }
        }, [w, A]),
        V = a.useCallback(
            (e) => {
                (0, m.zZ)(O.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: t,
                    tab_name: e
                }),
                    Z(e),
                    e === y.GlobalDiscoveryAppsSections.ABOUT ? (0, _.Gp)(O.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, _.Gp)(O.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t]
        ),
        H = w === y.GlobalDiscoveryAppsSections.ABOUT;
    return (0, r.jsx)(c.Z, {
        onScroll: P,
        ref: T,
        children: (0, r.jsx)(o.Z, {
            children:
                null == A
                    ? null == L || L === u.M.FETCHING
                        ? (0, r.jsx)('div', {
                              className: N.centerContainer,
                              children: (0, r.jsx)(h.Z, { loading: !0 })
                          })
                        : (0, r.jsx)('div', {
                              className: N.centerContainer,
                              children: (0, r.jsx)(g.Z, { className: N.error })
                          })
                    : (0, r.jsxs)('div', {
                          className: N.detailContainer,
                          children: [
                              (0, r.jsx)(x.Z, {
                                  application: A,
                                  onButtonsVisibilityChange: E
                              }),
                              (0, r.jsxs)('div', {
                                  className: N.contentContainer,
                                  children: [
                                      (0, r.jsxs)('div', {
                                          className: N.contentTabsContainer,
                                          children: [
                                              R &&
                                                  (0, r.jsx)('div', {
                                                      className: N.contentTabs,
                                                      children: (0, r.jsx)(s.Z, {
                                                          tabs: U,
                                                          onTabSelect: V,
                                                          selectedTab: w
                                                      })
                                                  }),
                                              F,
                                              (0, r.jsx)(C.Z, {
                                                  applicationId: t,
                                                  fetchState: M,
                                                  similarApplications: G,
                                                  onSelectApplication: k,
                                                  similarLoadId: null == z ? void 0 : z.loadId
                                              })
                                          ]
                                      }),
                                      H &&
                                          (0, r.jsx)(v.Z, {
                                              className: N.sidebar,
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
