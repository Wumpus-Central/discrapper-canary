n.d(t, {
    M: () => z,
    Z: () => Y
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(873546),
    o = n(286379),
    c = n(399606),
    d = n(704215),
    u = n(481060),
    m = n(150063),
    g = n(493773),
    _ = n(758119),
    p = n(100527),
    f = n(906732),
    h = n(252618),
    x = n(313201),
    E = n(605236),
    C = n(984370),
    b = n(797614),
    v = n(108427),
    T = n(210887),
    N = n(695346),
    I = n(594174),
    R = n(626135),
    j = n(260722),
    S = n(914788),
    A = n(841409),
    P = n(652262),
    Z = n(880257),
    w = n(631885),
    M = n(830746),
    B = n(731934),
    y = n(521450),
    k = n(292352),
    O = n(981631),
    L = n(723359),
    D = n(921944),
    U = n(388032),
    G = n(404089);
let V = {
        [k.dG.REQUESTS]: () => (0, i.jsx)(B.Z, {}),
        [k.dG.ACTIVITY]: () => (0, i.jsx)(M.Z, {}),
        [k.dG.SETTINGS]: () => (0, i.jsx)(y.Z, {})
    },
    H = {
        [k.dG.REQUESTS]: () => (0, i.jsx)(B.Z, {}),
        [k.dG.ACTIVITY]: () => (0, i.jsx)(M.Z, {})
    };
function F(e) {
    let { section: t, handleItemSelect: n } = e,
        r = (0, w.gU)(),
        a = (0, Z.Z)();
    return (0, i.jsxs)(u.njP, {
        className: G.settingsTabBar,
        'aria-label': U.intl.string(U.t.RZqaJi),
        selectedItem: t,
        type: 'top',
        look: 'brand',
        onItemSelect: n,
        children: [
            (0, i.jsx)(u.njP.Item, {
                className: G.settingsTabBarItem,
                id: k.dG.ACTIVITY,
                children: U.intl.string(U.t.bdBmq6)
            }),
            (0, i.jsxs)(u.njP.Item, {
                className: G.settingsTabBarItem,
                id: k.dG.REQUESTS,
                'aria-label': U.intl.string(U.t['gVWG+/']),
                children: [
                    U.intl.string(U.t['gVWG+/']),
                    r > 0
                        ? (0, i.jsx)(u.mAB, {
                              className: G.badge,
                              count: r
                          })
                        : null
                ]
            }),
            a
                ? (0, i.jsx)(u.njP.Item, {
                      className: G.settingsTabBarItem,
                      id: k.dG.SETTINGS,
                      children: U.intl.string(U.t['3D5yo6'])
                  })
                : null
        ]
    });
}
function W(e) {
    let { theme: t, section: n, handleItemSelect: r } = e,
        a = (0, x.Dt)(),
        o = (0, w.gU)();
    return (0, i.jsx)(u.f6W, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(C.Z, {
                className: s()(e, G.sidebarTabBar),
                scrollable: l.tq,
                role: 'navigation',
                'aria-labelledby': a,
                toolbar: !0,
                children: [
                    (0, i.jsx)(C.Z.Icon, {
                        icon: u.BFJ,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(C.Z.Title, {
                        id: a,
                        children: U.intl.string(U.t.RZqaJi)
                    }),
                    (0, i.jsx)(C.Z.Divider, {}),
                    (0, i.jsxs)(u.njP, {
                        'aria-label': U.intl.string(U.t.RZqaJi),
                        selectedItem: n,
                        type: 'top-pill',
                        onItemSelect: r,
                        className: G.__invalid_tabBar,
                        children: [
                            (0, i.jsx)(u.njP.Item, {
                                id: k.dG.ACTIVITY,
                                className: G.item,
                                children: U.intl.string(U.t.bdBmq6)
                            }),
                            (0, i.jsxs)(u.njP.Item, {
                                id: k.dG.REQUESTS,
                                className: G.item,
                                'aria-label': U.intl.string(U.t['gVWG+/']),
                                children: [
                                    U.intl.string(U.t['gVWG+/']),
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
function z() {
    let e = (0, Z.Z)(),
        t = (0, w.M8)(),
        n = (0, E.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        a = (0, c.e7)([S.Z], () => S.Z.getIsInitialized()),
        l = (0, P.M)(),
        { selectedTab: m, handleTabChange: p } = (0, A.Z)(),
        f = (0, x.Dt)(),
        C = I.default.getCurrentUser(),
        T = null != e,
        N = a && null != C && !T;
    (0, g.ZP)(() => {
        (0, v.e)('family-center'),
            j.ZP.initialPageLoad(),
            n ||
                (0, E.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: D.L.AUTO,
                    forceTrack: !0
                });
    });
    let M = {
            isConsideredAdult: e,
            numOfAcceptedRequests: t,
            selectedTab: m,
            selectedTeenId: l
        },
        B = r.useRef(M);
    return (r.useEffect(() => {
        B.current = M;
    }),
    r.useEffect(() => {
        if (a && T) {
            let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: i } = B.current;
            R.default.track(O.rMx.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: t,
                selected_teen_id: i,
                initial_page: k.QH[n],
                source: k._6[k.Mu.SIDENAV]
            }),
                b.Z.increment({ name: o.V.FAMILY_CENTER_VIEW });
        }
    }, [a, T]),
    r.useEffect(() => {
        N && (0, _.mN)(L.L0.FAMILY_CENTER);
    }, [N]),
    N)
        ? null
        : (0, i.jsxs)('main', {
              className: s()(G.container),
              'aria-label': U.intl.string(U.t.RZqaJi),
              children: [
                  (0, i.jsx)(h.yY, { location: U.intl.string(U.t.RZqaJi) }),
                  (0, i.jsx)(F, {
                      section: m,
                      handleItemSelect: (e) => {
                          p(e);
                      }
                  }),
                  (0, i.jsx)(u.njP.Panel, {
                      id: m,
                      'aria-labelledby': f,
                      className: G.contentPanel,
                      children: (0, i.jsx)('div', { children: V[m]() })
                  })
              ]
          });
}
function Y() {
    let { analyticsLocations: e } = (0, f.ZP)(p.Z.FAMILY_CENTER),
        t = (0, Z.Z)(),
        n = (0, w.M8)(),
        a = (0, E.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        l = (0, c.e7)([S.Z], () => S.Z.getIsInitialized()),
        C = (0, P.M)(),
        M = (0, c.e7)([T.Z], () => T.Z.theme),
        { selectedTab: B, handleTabChange: y } = (0, A.Z)(),
        V = (0, x.Dt)(),
        F = I.default.getCurrentUser(),
        z = null != t,
        Y = l && null != F && !z;
    (0, g.ZP)(() => {
        m.Y(O.Z5c.FAMILY_CENTER),
            (0, v.e)('family-center'),
            !S.Z.isLoading() && S.Z.canRefetch() && j.ZP.initialPageLoad(),
            a ||
                (0, E.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: D.L.AUTO,
                    forceTrack: !0
                });
    });
    let q = {
            isConsideredAdult: t,
            numOfAcceptedRequests: n,
            selectedTab: B,
            selectedTeenId: C
        },
        Q = r.useRef(q);
    if (
        (r.useEffect(() => {
            Q.current = q;
        }),
        r.useEffect(() => {
            if (l && z) {
                let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: i } = Q.current;
                R.default.track(O.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: t,
                    selected_teen_id: i,
                    initial_page: k.QH[n],
                    source: k._6[k.Mu.SIDENAV]
                }),
                    b.Z.increment({ name: o.V.FAMILY_CENTER_VIEW });
            }
        }, [l, z]),
        r.useEffect(() => {
            let e = N.Ex.getSetting();
            l && t && void 0 === e && N.Ex.updateSetting(!0);
        }, [l, t]),
        r.useEffect(() => {
            Y && (0, _.mN)(L.L0.FAMILY_CENTER);
        }, [Y]),
        Y)
    )
        return null;
    let K = B !== k.dG.SETTINGS ? B : k.dG.ACTIVITY,
        X = H[K];
    return (0, i.jsx)(f.Gt, {
        value: e,
        children: (0, i.jsxs)('main', {
            className: s()(G.container, G.containerSidenav),
            'aria-label': U.intl.string(U.t.RZqaJi),
            children: [
                (0, i.jsx)(h.yY, { location: U.intl.string(U.t.RZqaJi) }),
                (0, i.jsx)(W, {
                    theme: M,
                    section: K,
                    handleItemSelect: (e) => {
                        y(e);
                    }
                }),
                (0, i.jsx)(u.njP.Panel, {
                    id: K,
                    'aria-labelledby': V,
                    className: G.contentPanel,
                    children: (0, i.jsx)(u.Ttm, {
                        children: (0, i.jsx)('div', {
                            className: G.sideNavContent,
                            children: X()
                        })
                    })
                })
            ]
        })
    });
}
