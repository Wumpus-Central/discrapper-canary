t(47120);
var a = t(200651),
    i = t(192379),
    r = t(442837),
    l = t(674588),
    o = t(264043),
    s = t(303383),
    c = t(125909),
    d = t(283836),
    u = t(374939),
    m = t(233374),
    p = t(283293),
    _ = t(881294),
    g = t(292191),
    v = t(258971),
    f = t(133743),
    C = t(680474),
    x = t(571737),
    h = t(796150),
    b = t(946542),
    I = t(213746),
    j = t(979007),
    S = t(981631),
    N = t(388032),
    E = t(890030);
n.Z = function (e) {
    let { applicationId: n, onSelectApplication: t, onScroll: y, initialTab: A, onButtonsVisibilityChange: T } = e,
        P = i.useRef(null),
        R = (0, r.e7)([o.Z], () => o.Z.getApplication(n)),
        Z = (0, r.e7)([o.Z], () => o.Z.getApplicationFetchState(n));
    i.useEffect(() => {
        null != n && null == R && l.i6(n);
    }, [n, R]),
        i.useEffect(() => {
            l.T4({ applicationId: n });
        }, [n]),
        i.useEffect(() => () => T(!0), [T]);
    let L = null == R ? void 0 : R.storefront_available,
        [O, D] = i.useState(null != A ? A : j.GlobalDiscoveryAppsSections.ABOUT),
        k = i.useCallback(
            (e) => {
                var n;
                null === (n = P.current) || void 0 === n || n.scrollTo({ to: 0 }), D(j.GlobalDiscoveryAppsSections.ABOUT), t(e);
            },
            [t]
        );
    i.useEffect(() => {
        (null == R ? void 0 : R.storefront_available) && null != n && (0, d.Z)(n);
    }, [null == R ? void 0 : R.storefront_available, n]);
    let M = (0, v.Uc)(),
        B = (0, r.e7)([s.Z], () => s.Z.getFetchState({ applicationId: null == R ? void 0 : R.id })),
        G = (0, r.e7)([s.Z], () => s.Z.getSimilarApplications({ applicationId: null == R ? void 0 : R.id })),
        w = i.useMemo(() => (null == G ? void 0 : G.applications.slice(0, 3)), [G]);
    i.useEffect(() => {
        (null == R ? void 0 : R.id) != null &&
            B !== s.M.FETCHING &&
            (0, _.zZ)(S.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: v.m_.APPLICATION,
                previous_page: null == M ? void 0 : M.type,
                application_id: R.id,
                referrer: document.referrer,
                suggested_application_ids: null == w ? void 0 : w.map((e) => e.id)
            });
    }, [null == R ? void 0 : R.id, B]);
    let H = i.useMemo(
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
        F = i.useMemo(() => {
            if (null == R) return null;
            switch (O) {
                case j.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, a.jsx)(C.Z, { application: R });
                case j.GlobalDiscoveryAppsSections.STORE:
                    return (0, a.jsx)(I.Z, { application: R });
            }
        }, [O, R]),
        z = i.useCallback(
            (e) => {
                (0, _.zZ)(S.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: n,
                    tab_name: e
                }),
                    D(e),
                    e === j.GlobalDiscoveryAppsSections.ABOUT ? (0, f.Gp)(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(n)) : (0, f.Gp)(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(n, e));
            },
            [n]
        ),
        U = O === j.GlobalDiscoveryAppsSections.ABOUT;
    return (0, a.jsx)(p.Z, {
        onScroll: y,
        ref: P,
        children: (0, a.jsx)(u.Z, {
            children:
                null == R
                    ? null == Z || Z === o.M.FETCHING
                        ? (0, a.jsx)('div', {
                              className: E.centerContainer,
                              children: (0, a.jsx)(c.Z, { loading: !0 })
                          })
                        : (0, a.jsx)('div', {
                              className: E.centerContainer,
                              children: (0, a.jsx)(g.Z, { className: E.error })
                          })
                    : (0, a.jsxs)('div', {
                          className: E.detailContainer,
                          children: [
                              (0, a.jsx)(x.Z, {
                                  application: R,
                                  onButtonsVisibilityChange: T
                              }),
                              (0, a.jsxs)('div', {
                                  className: E.contentContainer,
                                  children: [
                                      (0, a.jsxs)('div', {
                                          className: E.contentTabsContainer,
                                          children: [
                                              L &&
                                                  (0, a.jsx)('div', {
                                                      className: E.contentTabs,
                                                      children: (0, a.jsx)(m.Z, {
                                                          tabs: H,
                                                          onTabSelect: z,
                                                          selectedTab: O
                                                      })
                                                  }),
                                              F,
                                              (0, a.jsx)(b.Z, {
                                                  applicationId: n,
                                                  fetchState: B,
                                                  similarApplications: w,
                                                  onSelectApplication: k,
                                                  similarLoadId: null == G ? void 0 : G.loadId
                                              })
                                          ]
                                      }),
                                      U &&
                                          (0, a.jsx)(h.Z, {
                                              className: E.sidebar,
                                              application: R,
                                              view: 'side'
                                          })
                                  ]
                              })
                          ]
                      })
        })
    });
};
