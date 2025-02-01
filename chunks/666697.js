n.d(t, { Z: () => y }), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(442837),
    l = n(674588),
    s = n(264043),
    o = n(303383),
    c = n(125909),
    d = n(283836),
    u = n(374939),
    m = n(233374),
    h = n(283293),
    p = n(881294),
    g = n(292191),
    _ = n(258971),
    x = n(133743),
    C = n(680474),
    v = n(571737),
    f = n(796150),
    I = n(946542),
    b = n(213746),
    j = n(979007),
    S = n(981631),
    N = n(388032),
    E = n(890030);
let y = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: y, initialTab: P, onButtonsVisibilityChange: A } = e,
        T = a.useRef(null),
        L = (0, r.e7)([s.Z], () => s.Z.getApplication(t)),
        R = (0, r.e7)([s.Z], () => s.Z.getApplicationFetchState(t));
    a.useEffect(() => {
        if (null != t && null == L) {
            let e = 'true' === new URLSearchParams(location.search).get('preview') || void 0;
            l.i6(t, { noCache: e });
        }
    }, [t, L]),
        a.useEffect(() => {
            l.T4({ applicationId: t });
        }, [t]),
        a.useEffect(() => () => A(!0), [A]);
    let Z = null == L ? void 0 : L.storefront_available,
        [O, k] = a.useState(null != P ? P : j.GlobalDiscoveryAppsSections.ABOUT),
        M = a.useCallback(
            (e) => {
                var t;
                null === (t = T.current) || void 0 === t || t.scrollTo({ to: 0 }), k(j.GlobalDiscoveryAppsSections.ABOUT), n(e);
            },
            [n]
        );
    a.useEffect(() => {
        (null == L ? void 0 : L.storefront_available) && null != t && (0, d.Z)(t);
    }, [null == L ? void 0 : L.storefront_available, t]);
    let D = (0, _.Uc)(),
        w = (0, r.e7)([o.Z], () => o.Z.getFetchState({ applicationId: null == L ? void 0 : L.id })),
        G = (0, r.e7)([o.Z], () => o.Z.getSimilarApplications({ applicationId: null == L ? void 0 : L.id })),
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
            (null == L ? void 0 : L.id) != null &&
                w !== o.M.FETCHING &&
                (0, p.zZ)(S.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: _.m_.APPLICATION,
                    previous_page: null == t ? void 0 : t.type,
                    application_id: L.id,
                    referrer: document.referrer,
                    suggested_application_ids: null == e ? void 0 : e.map((e) => e.id)
                });
        }, [null == L ? void 0 : L.id, w]);
    let V = a.useMemo(
            () => [
                {
                    id: j.GlobalDiscoveryAppsSections.ABOUT,
                    label: N.intl.string(N.t.DkyHMD)
                },
                {
                    id: j.GlobalDiscoveryAppsSections.STORE,
                    label: N.intl.string(N.t.jgEXGB)
                }
            ],
            []
        ),
        F = a.useMemo(() => {
            if (null == L) return null;
            switch (O) {
                case j.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, i.jsx)(C.Z, { application: L });
                case j.GlobalDiscoveryAppsSections.STORE:
                    return (0, i.jsx)(b.Z, { application: L });
            }
        }, [O, L]),
        H = a.useCallback(
            (e) => {
                (0, p.zZ)(S.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: t,
                    tab_name: e
                }),
                    k(e),
                    e === j.GlobalDiscoveryAppsSections.ABOUT ? (0, x.Gp)(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, x.Gp)(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t]
        ),
        Y = O === j.GlobalDiscoveryAppsSections.ABOUT;
    return (0, i.jsx)(h.Z, {
        onScroll: y,
        ref: T,
        children: (0, i.jsx)(u.Z, {
            children:
                null == L
                    ? null == R || R === s.M.FETCHING
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
                              (0, i.jsx)(v.Z, {
                                  application: L,
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
                                                          tabs: V,
                                                          onTabSelect: H,
                                                          selectedTab: O
                                                      })
                                                  }),
                                              F,
                                              (0, i.jsx)(I.Z, {
                                                  applicationId: t,
                                                  fetchState: w,
                                                  similarApplications: z,
                                                  onSelectApplication: M,
                                                  similarLoadId: null == G ? void 0 : G.loadId
                                              })
                                          ]
                                      }),
                                      Y &&
                                          (0, i.jsx)(f.Z, {
                                              className: E.sidebar,
                                              application: L,
                                              view: 'side'
                                          })
                                  ]
                              })
                          ]
                      })
        })
    });
};
