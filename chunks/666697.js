n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(442837),
    l = n(674588),
    o = n(264043),
    s = n(303383),
    c = n(125909),
    d = n(283836),
    u = n(374939),
    m = n(233374),
    p = n(283293),
    h = n(881294),
    g = n(292191),
    C = n(258971),
    x = n(133743),
    v = n(680474),
    _ = n(571737),
    f = n(796150),
    b = n(946542),
    I = n(213746),
    S = n(979007),
    j = n(981631),
    N = n(388032),
    E = n(890030);
t.Z = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: y, initialTab: P, onButtonsVisibilityChange: A } = e,
        L = a.useRef(null),
        T = (0, r.e7)([o.Z], () => o.Z.getApplication(t)),
        R = (0, r.e7)([o.Z], () => o.Z.getApplicationFetchState(t));
    a.useEffect(() => {
        if (null != t && null == T) {
            let e = 'true' === new URLSearchParams(location.search).get('preview') || void 0;
            l.i6(t, { noCache: e });
        }
    }, [t, T]),
        a.useEffect(() => {
            l.T4({ applicationId: t });
        }, [t]),
        a.useEffect(() => () => A(!0), [A]);
    let Z = null == T ? void 0 : T.storefront_available,
        [O, M] = a.useState(null != P ? P : S.GlobalDiscoveryAppsSections.ABOUT),
        k = a.useCallback(
            (e) => {
                var t;
                null === (t = L.current) || void 0 === t || t.scrollTo({ to: 0 }), M(S.GlobalDiscoveryAppsSections.ABOUT), n(e);
            },
            [n]
        );
    a.useEffect(() => {
        (null == T ? void 0 : T.storefront_available) && null != t && (0, d.Z)(t);
    }, [null == T ? void 0 : T.storefront_available, t]);
    let D = (0, C.Uc)(),
        w = (0, r.e7)([s.Z], () => s.Z.getFetchState({ applicationId: null == T ? void 0 : T.id })),
        B = (0, r.e7)([s.Z], () => s.Z.getSimilarApplications({ applicationId: null == T ? void 0 : T.id })),
        G = a.useMemo(() => (null == B ? void 0 : B.applications.slice(0, 3)), [B]),
        U = {
            displayedSimilarApplications: G,
            previousView: D
        },
        H = a.useRef(U);
    a.useEffect(() => {
        H.current = U;
    }),
        a.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: t } = H.current;
            (null == T ? void 0 : T.id) != null &&
                w !== s.M.FETCHING &&
                (0, h.zZ)(j.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: C.m_.APPLICATION,
                    previous_page: null == t ? void 0 : t.type,
                    application_id: T.id,
                    referrer: document.referrer,
                    suggested_application_ids: null == e ? void 0 : e.map((e) => e.id)
                });
        }, [null == T ? void 0 : T.id, w]);
    let z = a.useMemo(
            () => [
                {
                    id: S.GlobalDiscoveryAppsSections.ABOUT,
                    label: N.intl.string(N.t.DkyHMD)
                },
                {
                    id: S.GlobalDiscoveryAppsSections.STORE,
                    label: N.intl.string(N.t.jgEXGB)
                }
            ],
            []
        ),
        V = a.useMemo(() => {
            if (null == T) return null;
            switch (O) {
                case S.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, i.jsx)(v.Z, { application: T });
                case S.GlobalDiscoveryAppsSections.STORE:
                    return (0, i.jsx)(I.Z, { application: T });
            }
        }, [O, T]),
        F = a.useCallback(
            (e) => {
                (0, h.zZ)(j.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: t,
                    tab_name: e
                }),
                    M(e),
                    e === S.GlobalDiscoveryAppsSections.ABOUT ? (0, x.Gp)(j.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, x.Gp)(j.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t]
        ),
        Y = O === S.GlobalDiscoveryAppsSections.ABOUT;
    return (0, i.jsx)(p.Z, {
        onScroll: y,
        ref: L,
        children: (0, i.jsx)(u.Z, {
            children:
                null == T
                    ? null == R || R === o.M.FETCHING
                        ? (0, i.jsx)('div', {
                              className: E.centerContainer,
                              children: (0, i.jsx)(c.Z, { loading: !0 })
                          })
                        : (0, i.jsx)('div', {
                              className: E.centerContainer,
                              children: (0, i.jsx)(g.Z, { className: E.error })
                          })
                    : (0, i.jsxs)('div', {
                          className: E.detailContainer,
                          children: [
                              (0, i.jsx)(_.Z, {
                                  application: T,
                                  onButtonsVisibilityChange: A
                              }),
                              (0, i.jsxs)('div', {
                                  className: E.contentContainer,
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: E.contentTabsContainer,
                                          children: [
                                              Z &&
                                                  (0, i.jsx)('div', {
                                                      className: E.contentTabs,
                                                      children: (0, i.jsx)(m.Z, {
                                                          tabs: z,
                                                          onTabSelect: F,
                                                          selectedTab: O
                                                      })
                                                  }),
                                              V,
                                              (0, i.jsx)(b.Z, {
                                                  applicationId: t,
                                                  fetchState: w,
                                                  similarApplications: G,
                                                  onSelectApplication: k,
                                                  similarLoadId: null == B ? void 0 : B.loadId
                                              })
                                          ]
                                      }),
                                      Y &&
                                          (0, i.jsx)(f.Z, {
                                              className: E.sidebar,
                                              application: T,
                                              view: 'side'
                                          })
                                  ]
                              })
                          ]
                      })
        })
    });
};
