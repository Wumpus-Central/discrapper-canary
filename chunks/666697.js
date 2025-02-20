n.d(t, { Z: () => P }), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(200651),
    a = n(192379),
    i = n(442837),
    l = n(674588),
    o = n(264043),
    s = n(303383),
    c = n(125909),
    d = n(283836),
    u = n(374939),
    p = n(233374),
    m = n(283293),
    h = n(881294),
    g = n(292191),
    _ = n(258971),
    f = n(133743),
    v = n(680474),
    b = n(571737),
    x = n(796150),
    C = n(946542),
    j = n(213746),
    y = n(979007),
    O = n(981631),
    I = n(388032),
    N = n(557563);
let P = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: P, initialTab: S, onButtonsVisibilityChange: E } = e,
        T = a.useRef(null),
        A = (0, i.e7)([o.Z], () => o.Z.getApplication(t)),
        L = (0, i.e7)([o.Z], () => o.Z.getApplicationFetchState(t));
    a.useEffect(() => {
        if (null != t && null == A) {
            let e = 'true' === new URLSearchParams(location.search).get('preview') || void 0;
            l.i6(t, { noCache: e });
        }
    }, [t, A]),
        a.useEffect(() => {
            l.T4({ applicationId: t });
        }, [t]),
        a.useEffect(() => () => E(!0), [E]);
    let R = null == A ? void 0 : A.storefront_available,
        [Z, w] = a.useState(null != S ? S : y.GlobalDiscoveryAppsSections.ABOUT),
        k = a.useCallback(
            (e) => {
                var t;
                null === (t = T.current) || void 0 === t || t.scrollTo({ to: 0 }), w(y.GlobalDiscoveryAppsSections.ABOUT), n(e);
            },
            [n]
        );
    a.useEffect(() => {
        (null == A ? void 0 : A.storefront_available) && null != t && (0, d.Z)(t);
    }, [null == A ? void 0 : A.storefront_available, t]);
    let D = (0, _.Uc)(),
        M = (0, i.e7)([s.Z], () => s.Z.getFetchState({ applicationId: null == A ? void 0 : A.id })),
        G = (0, i.e7)([s.Z], () => s.Z.getSimilarApplications({ applicationId: null == A ? void 0 : A.id })),
        z = a.useMemo(() => (null == G ? void 0 : G.applications.slice(0, 3)), [G]),
        B = {
            displayedSimilarApplications: z,
            previousView: D
        },
        U = a.useRef(B);
    a.useEffect(() => {
        U.current = B;
    }),
        a.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = U.current;
            (null == A ? void 0 : A.id) != null &&
                M !== s.M.FETCHING &&
                (0, h.zZ)(O.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: _.m_.APPLICATION,
                    previous_page: null == t ? void 0 : t.type,
                    application_id: A.id,
                    referrer: document.referrer,
                    suggested_application_ids: null == e ? void 0 : e.map((e) => e.id)
                });
        }, [null == A ? void 0 : A.id, M]);
    let W = a.useMemo(
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
            switch (Z) {
                case y.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, r.jsx)(v.Z, { application: A });
                case y.GlobalDiscoveryAppsSections.STORE:
                    return (0, r.jsx)(j.Z, { application: A });
            }
        }, [Z, A]),
        V = a.useCallback(
            (e) => {
                (0, h.zZ)(O.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: t,
                    tab_name: e
                }),
                    w(e),
                    e === y.GlobalDiscoveryAppsSections.ABOUT ? (0, f.Gp)(O.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, f.Gp)(O.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t]
        ),
        H = Z === y.GlobalDiscoveryAppsSections.ABOUT;
    return (0, r.jsx)(m.Z, {
        onScroll: P,
        ref: T,
        children: (0, r.jsx)(u.Z, {
            children:
                null == A
                    ? null == L || L === o.M.FETCHING
                        ? (0, r.jsx)('div', {
                              className: N.centerContainer,
                              children: (0, r.jsx)(c.Z, { loading: !0 })
                          })
                        : (0, r.jsx)('div', {
                              className: N.centerContainer,
                              children: (0, r.jsx)(g.Z, { className: N.error })
                          })
                    : (0, r.jsxs)('div', {
                          className: N.detailContainer,
                          children: [
                              (0, r.jsx)(b.Z, {
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
                                                      children: (0, r.jsx)(p.Z, {
                                                          tabs: W,
                                                          onTabSelect: V,
                                                          selectedTab: Z
                                                      })
                                                  }),
                                              F,
                                              (0, r.jsx)(C.Z, {
                                                  applicationId: t,
                                                  fetchState: M,
                                                  similarApplications: z,
                                                  onSelectApplication: k,
                                                  similarLoadId: null == G ? void 0 : G.loadId
                                              })
                                          ]
                                      }),
                                      H &&
                                          (0, r.jsx)(x.Z, {
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
