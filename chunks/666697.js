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
    f = t(258971),
    v = t(133743),
    C = t(680474),
    x = t(571737),
    h = t(796150),
    b = t(946542),
    I = t(213746),
    j = t(979007),
    S = t(981631),
    E = t(388032),
    N = t(890030);
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
        [D, O] = i.useState(null != A ? A : j.GlobalDiscoveryAppsSections.ABOUT),
        k = i.useCallback(
            (e) => {
                var n;
                null === (n = P.current) || void 0 === n || n.scrollTo({ to: 0 }), O(j.GlobalDiscoveryAppsSections.ABOUT), t(e);
            },
            [t]
        );
    i.useEffect(() => {
        (null == R ? void 0 : R.storefront_available) && null != n && (0, d.Z)(n);
    }, [null == R ? void 0 : R.storefront_available, n]);
    let M = (0, f.Uc)(),
        B = (0, r.e7)([s.Z], () => s.Z.getFetchState({ applicationId: null == R ? void 0 : R.id })),
        G = (0, r.e7)([s.Z], () => s.Z.getSimilarApplications({ applicationId: null == R ? void 0 : R.id })),
        w = i.useMemo(() => (null == G ? void 0 : G.applications.slice(0, 3)), [G]),
        H = {
            displayedSimilarApplications: w,
            previousView: M
        },
        F = i.useRef(H);
    i.useEffect(() => {
        F.current = H;
    }),
        i.useEffect(() => {
            let { displayedSimilarApplications: e, previousView: n } = F.current;
            (null == R ? void 0 : R.id) != null &&
                B !== s.M.FETCHING &&
                (0, _.zZ)(S.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                    current_page: f.m_.APPLICATION,
                    previous_page: null == n ? void 0 : n.type,
                    application_id: R.id,
                    referrer: document.referrer,
                    suggested_application_ids: null == e ? void 0 : e.map((e) => e.id)
                });
        }, [null == R ? void 0 : R.id, B]);
    let z = i.useMemo(
            () => [
                {
                    id: j.GlobalDiscoveryAppsSections.ABOUT,
                    label: E.intl.string(E.t.DkyHMD)
                },
                {
                    id: j.GlobalDiscoveryAppsSections.STORE,
                    label: E.intl.string(E.t.jgEXGB)
                }
            ],
            []
        ),
        U = i.useMemo(() => {
            if (null == R) return null;
            switch (D) {
                case j.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, a.jsx)(C.Z, { application: R });
                case j.GlobalDiscoveryAppsSections.STORE:
                    return (0, a.jsx)(I.Z, { application: R });
            }
        }, [D, R]),
        Y = i.useCallback(
            (e) => {
                (0, _.zZ)(S.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: n,
                    tab_name: e
                }),
                    O(e),
                    e === j.GlobalDiscoveryAppsSections.ABOUT ? (0, v.Gp)(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(n)) : (0, v.Gp)(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(n, e));
            },
            [n]
        ),
        V = D === j.GlobalDiscoveryAppsSections.ABOUT;
    return (0, a.jsx)(p.Z, {
        onScroll: y,
        ref: P,
        children: (0, a.jsx)(u.Z, {
            children:
                null == R
                    ? null == Z || Z === o.M.FETCHING
                        ? (0, a.jsx)('div', {
                              className: N.centerContainer,
                              children: (0, a.jsx)(c.Z, { loading: !0 })
                          })
                        : (0, a.jsx)('div', {
                              className: N.centerContainer,
                              children: (0, a.jsx)(g.Z, { className: N.error })
                          })
                    : (0, a.jsxs)('div', {
                          className: N.detailContainer,
                          children: [
                              (0, a.jsx)(x.Z, {
                                  application: R,
                                  onButtonsVisibilityChange: T
                              }),
                              (0, a.jsxs)('div', {
                                  className: N.contentContainer,
                                  children: [
                                      (0, a.jsxs)('div', {
                                          className: N.contentTabsContainer,
                                          children: [
                                              L &&
                                                  (0, a.jsx)('div', {
                                                      className: N.contentTabs,
                                                      children: (0, a.jsx)(m.Z, {
                                                          tabs: z,
                                                          onTabSelect: Y,
                                                          selectedTab: D
                                                      })
                                                  }),
                                              U,
                                              (0, a.jsx)(b.Z, {
                                                  applicationId: n,
                                                  fetchState: B,
                                                  similarApplications: w,
                                                  onSelectApplication: k,
                                                  similarLoadId: null == G ? void 0 : G.loadId
                                              })
                                          ]
                                      }),
                                      V &&
                                          (0, a.jsx)(h.Z, {
                                              className: N.sidebar,
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
