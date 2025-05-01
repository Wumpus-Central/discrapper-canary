n.d(t, {
    M: () => Y,
    Z: () => K
});
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(873546),
    o = n(286379),
    c = n(399606),
    d = n(704215),
    u = n(481060),
    m = n(150063),
    p = n(493773),
    g = n(758119),
    h = n(100527),
    f = n(906732),
    b = n(252618),
    _ = n(313201),
    x = n(605236),
    E = n(984370),
    j = n(797614),
    C = n(108427),
    O = n(210887),
    S = n(695346),
    v = n(594174),
    T = n(626135),
    I = n(260722),
    N = n(914788),
    y = n(841409),
    A = n(652262),
    P = n(880257),
    R = n(631885),
    D = n(830746),
    Z = n(731934),
    w = n(521450),
    k = n(292352),
    L = n(981631),
    M = n(723359),
    B = n(921944),
    U = n(332495),
    V = n(388032),
    G = n(347362);
let F = {
        [k.dG.REQUESTS]: () => (0, i.jsx)(Z.Z, {}),
        [k.dG.ACTIVITY]: () => (0, i.jsx)(D.Z, {}),
        [k.dG.SETTINGS]: () => (0, i.jsx)(w.Z, {})
    },
    H = {
        [k.dG.REQUESTS]: () => (0, i.jsx)(Z.Z, {}),
        [k.dG.ACTIVITY]: () => (0, i.jsx)(D.Z, {})
    };
function z(e) {
    let { section: t, handleItemSelect: n } = e,
        r = (0, R.gU)(),
        s = (0, P.Z)();
    return (0, i.jsxs)(u.njP, {
        className: G.settingsTabBar,
        'aria-label': V.intl.string(U.default.RZqaJi),
        selectedItem: t,
        type: 'top',
        look: 'brand',
        onItemSelect: n,
        children: [
            (0, i.jsx)(u.njP.Item, {
                className: G.settingsTabBarItem,
                id: k.dG.ACTIVITY,
                children: V.intl.string(U.default.bdBmq6)
            }),
            (0, i.jsxs)(u.njP.Item, {
                className: G.settingsTabBarItem,
                id: k.dG.REQUESTS,
                'aria-label': V.intl.string(U.default['gVWG+/']),
                children: [
                    V.intl.string(U.default['gVWG+/']),
                    r > 0
                        ? (0, i.jsx)(u.mAB, {
                              className: G.badge,
                              count: r
                          })
                        : null
                ]
            }),
            s
                ? (0, i.jsx)(u.njP.Item, {
                      className: G.settingsTabBarItem,
                      id: k.dG.SETTINGS,
                      children: V.intl.string(V.t['3D5yo6'])
                  })
                : null
        ]
    });
}
function W(e) {
    let { theme: t, section: n, handleItemSelect: r } = e,
        s = (0, _.Dt)(),
        o = (0, R.gU)();
    return (0, i.jsx)(u.f6W, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(E.Z, {
                className: l()(e, G.sidebarTabBar),
                scrollable: a.tq,
                role: 'navigation',
                'aria-labelledby': s,
                toolbar: !0,
                children: [
                    (0, i.jsx)(E.Z.Icon, {
                        icon: u.BFJ,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(E.Z.Title, {
                        id: s,
                        children: V.intl.string(U.default.RZqaJi)
                    }),
                    (0, i.jsx)(E.Z.Divider, {}),
                    (0, i.jsxs)(u.njP, {
                        'aria-label': V.intl.string(U.default.RZqaJi),
                        selectedItem: n,
                        type: 'top-pill',
                        onItemSelect: r,
                        className: G.__invalid_tabBar,
                        children: [
                            (0, i.jsx)(u.njP.Item, {
                                id: k.dG.ACTIVITY,
                                className: G.item,
                                children: V.intl.string(U.default.bdBmq6)
                            }),
                            (0, i.jsxs)(u.njP.Item, {
                                id: k.dG.REQUESTS,
                                className: G.item,
                                'aria-label': V.intl.string(U.default['gVWG+/']),
                                children: [
                                    V.intl.string(U.default['gVWG+/']),
                                    o > 0
                                        ? (0, i.jsx)(u.mAB, {
                                              className: G.badge,
                                              count: o
                                          })
                                        : null
                                ]
                            })
                        ]
                    })
                ]
            })
    });
}
function Y() {
    let e = (0, P.Z)(),
        t = (0, R.M8)(),
        n = (0, x.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        s = (0, c.e7)([N.Z], () => N.Z.getIsInitialized()),
        l = (0, A.M)(),
        { selectedTab: a, handleTabChange: m } = (0, y.Z)(),
        h = (0, _.Dt)(),
        f = v.default.getCurrentUser(),
        E = null != e,
        O = s && null != f && !E;
    (0, p.ZP)(() => {
        (0, C.e)('family-center'),
            I.ZP.initialPageLoad(),
            n ||
                (0, x.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: B.L.AUTO,
                    forceTrack: !0
                });
    });
    let S = {
            isConsideredAdult: e,
            numOfAcceptedRequests: t,
            selectedTab: a,
            selectedTeenId: l
        },
        D = r.useRef(S);
    return (r.useEffect(() => {
        D.current = S;
    }),
    r.useEffect(() => {
        if (s && E) {
            let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: i } = D.current;
            T.default.track(L.rMx.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: t,
                selected_teen_id: i,
                initial_page: k.QH[n],
                source: k._6[k.Mu.SIDENAV]
            }),
                j.Z.increment({ name: o.V.FAMILY_CENTER_VIEW });
        }
    }, [s, E]),
    r.useEffect(() => {
        O && (0, g.mN)(M.L0.FAMILY_CENTER);
    }, [O]),
    O)
        ? null
        : (0, i.jsxs)('main', {
              className: G.container,
              'aria-label': V.intl.string(U.default.RZqaJi),
              children: [
                  (0, i.jsx)(b.yY, { location: V.intl.string(U.default.RZqaJi) }),
                  (0, i.jsx)(z, {
                      section: a,
                      handleItemSelect: (e) => {
                          m(e);
                      }
                  }),
                  (0, i.jsx)(u.njP.Panel, {
                      id: a,
                      'aria-labelledby': h,
                      className: G.contentPanel,
                      children: (0, i.jsx)('div', { children: F[a]() })
                  })
              ]
          });
}
function K() {
    let { analyticsLocations: e } = (0, f.ZP)(h.Z.FAMILY_CENTER),
        t = (0, P.Z)(),
        n = (0, R.M8)(),
        s = (0, x.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        a = (0, c.e7)([N.Z], () => N.Z.getIsInitialized()),
        E = (0, A.M)(),
        D = (0, c.e7)([O.Z], () => O.Z.theme),
        { selectedTab: Z, handleTabChange: w } = (0, y.Z)(),
        F = (0, _.Dt)(),
        z = v.default.getCurrentUser(),
        Y = null != t,
        K = a && null != z && !Y;
    (0, p.ZP)(() => {
        m.Y(L.Z5c.FAMILY_CENTER),
            (0, C.e)('family-center'),
            !N.Z.isLoading() && N.Z.canRefetch() && I.ZP.initialPageLoad(),
            s ||
                (0, x.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: B.L.AUTO,
                    forceTrack: !0
                });
    });
    let q = {
            isConsideredAdult: t,
            numOfAcceptedRequests: n,
            selectedTab: Z,
            selectedTeenId: E
        },
        X = r.useRef(q);
    if (
        (r.useEffect(() => {
            X.current = q;
        }),
        r.useEffect(() => {
            if (a && Y) {
                let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: i } = X.current;
                T.default.track(L.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: t,
                    selected_teen_id: i,
                    initial_page: k.QH[n],
                    source: k._6[k.Mu.SIDENAV]
                }),
                    j.Z.increment({ name: o.V.FAMILY_CENTER_VIEW });
            }
        }, [a, Y]),
        r.useEffect(() => {
            let e = S.Ex.getSetting();
            a && t && void 0 === e && S.Ex.updateSetting(!0);
        }, [a, t]),
        r.useEffect(() => {
            K && (0, g.mN)(M.L0.FAMILY_CENTER);
        }, [K]),
        K)
    )
        return null;
    let Q = Z !== k.dG.SETTINGS ? Z : k.dG.ACTIVITY,
        J = H[Q];
    return (0, i.jsx)(f.Gt, {
        value: e,
        children: (0, i.jsxs)('main', {
            className: l()(G.container, G.containerSidenav),
            'aria-label': V.intl.string(U.default.RZqaJi),
            children: [
                (0, i.jsx)(b.yY, { location: V.intl.string(U.default.RZqaJi) }),
                (0, i.jsx)(W, {
                    theme: D,
                    section: Q,
                    handleItemSelect: (e) => {
                        w(e);
                    }
                }),
                (0, i.jsx)(u.njP.Panel, {
                    id: Q,
                    'aria-labelledby': F,
                    className: G.contentPanel,
                    children: (0, i.jsx)(u.Ttm, {
                        children: (0, i.jsx)('div', {
                            className: G.sideNavContent,
                            children: J()
                        })
                    })
                })
            ]
        })
    });
}
