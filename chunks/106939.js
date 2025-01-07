n.d(t, {
    M: function () {
        return z;
    },
    Z: function () {
        return Y;
    }
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
    g = n(150063),
    m = n(493773),
    f = n(758119),
    p = n(100527),
    _ = n(906732),
    h = n(252618),
    x = n(313201),
    E = n(605236),
    b = n(984370),
    C = n(797614),
    v = n(108427),
    T = n(210887),
    N = n(695346),
    I = n(594174),
    S = n(626135),
    R = n(260722),
    j = n(914788),
    A = n(841409),
    P = n(652262),
    O = n(880257),
    Z = n(631885),
    M = n(830746),
    B = n(731934),
    y = n(521450),
    w = n(292352),
    k = n(981631),
    L = n(723359),
    U = n(921944),
    D = n(388032),
    G = n(228351);
let H = {
        [w.dG.REQUESTS]: () => (0, i.jsx)(B.Z, {}),
        [w.dG.ACTIVITY]: () => (0, i.jsx)(M.Z, {}),
        [w.dG.SETTINGS]: () => (0, i.jsx)(y.Z, {})
    },
    V = {
        [w.dG.REQUESTS]: () => (0, i.jsx)(B.Z, {}),
        [w.dG.ACTIVITY]: () => (0, i.jsx)(M.Z, {})
    };
function F(e) {
    let { section: t, handleItemSelect: n } = e,
        r = (0, Z.gU)(),
        a = (0, O.Z)();
    return (0, i.jsxs)(u.TabBar, {
        className: G.settingsTabBar,
        'aria-label': D.intl.string(D.t.RZqaJi),
        selectedItem: t,
        type: 'top',
        look: 'brand',
        onItemSelect: n,
        children: [
            (0, i.jsx)(u.TabBar.Item, {
                className: G.settingsTabBarItem,
                id: w.dG.ACTIVITY,
                children: D.intl.string(D.t.bdBmq6)
            }),
            (0, i.jsxs)(u.TabBar.Item, {
                className: G.settingsTabBarItem,
                id: w.dG.REQUESTS,
                'aria-label': D.intl.string(D.t['gVWG+/']),
                children: [
                    D.intl.string(D.t['gVWG+/']),
                    r > 0
                        ? (0, i.jsx)(u.NumberBadge, {
                              className: G.badge,
                              count: r
                          })
                        : null
                ]
            }),
            a
                ? (0, i.jsx)(u.TabBar.Item, {
                      className: G.settingsTabBarItem,
                      id: w.dG.SETTINGS,
                      children: D.intl.string(D.t['3D5yo6'])
                  })
                : null
        ]
    });
}
function W(e) {
    let { theme: t, section: n, handleItemSelect: r } = e,
        a = (0, x.Dt)(),
        o = (0, Z.gU)();
    return (0, i.jsx)(u.ThemeProvider, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(b.Z, {
                className: s()(e, G.sidebarTabBar),
                scrollable: l.tq,
                role: 'navigation',
                'aria-labelledby': a,
                toolbar: !0,
                children: [
                    (0, i.jsx)(b.Z.Icon, {
                        icon: u.GroupIcon,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(b.Z.Title, {
                        id: a,
                        children: D.intl.string(D.t.RZqaJi)
                    }),
                    (0, i.jsx)(b.Z.Divider, {}),
                    (0, i.jsxs)(u.TabBar, {
                        'aria-label': D.intl.string(D.t.RZqaJi),
                        selectedItem: n,
                        type: 'top-pill',
                        onItemSelect: r,
                        className: G.__invalid_tabBar,
                        children: [
                            (0, i.jsx)(u.TabBar.Item, {
                                id: w.dG.ACTIVITY,
                                className: G.item,
                                children: D.intl.string(D.t.bdBmq6)
                            }),
                            (0, i.jsxs)(u.TabBar.Item, {
                                id: w.dG.REQUESTS,
                                className: G.item,
                                'aria-label': D.intl.string(D.t['gVWG+/']),
                                children: [
                                    D.intl.string(D.t['gVWG+/']),
                                    o > 0
                                        ? (0, i.jsx)(u.NumberBadge, {
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
    let e = (0, O.Z)(),
        t = (0, Z.M8)(),
        n = (0, E.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        a = (0, c.e7)([j.Z], () => j.Z.getIsInitialized()),
        l = (0, P.M)(),
        { selectedTab: g, handleTabChange: p } = (0, A.Z)(),
        _ = (0, x.Dt)(),
        b = I.default.getCurrentUser(),
        T = null != e,
        N = a && null != b && !T;
    (0, m.Z)(() => {
        (0, v.e)('family-center'),
            R.ZP.initialPageLoad(),
            !n &&
                (0, E.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: U.L.AUTO,
                    forceTrack: !0
                });
    });
    let M = {
            isConsideredAdult: e,
            numOfAcceptedRequests: t,
            selectedTab: g,
            selectedTeenId: l
        },
        B = r.useRef(M);
    return (r.useEffect(() => {
        B.current = M;
    }),
    r.useEffect(() => {
        if (a && T) {
            let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: i } = B.current;
            S.default.track(k.rMx.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: t,
                selected_teen_id: i,
                initial_page: w.QH[n],
                source: w._6[w.Mu.SIDENAV]
            }),
                C.Z.increment({ name: o.V.FAMILY_CENTER_VIEW });
        }
    }, [a, T]),
    r.useEffect(() => {
        N && (0, f.mN)(L.L0.FAMILY_CENTER);
    }, [N]),
    N)
        ? null
        : (0, i.jsxs)('main', {
              className: s()(G.container),
              'aria-label': D.intl.string(D.t.RZqaJi),
              children: [
                  (0, i.jsx)(h.yY, { location: D.intl.string(D.t.RZqaJi) }),
                  (0, i.jsx)(F, {
                      section: g,
                      handleItemSelect: (e) => {
                          p(e);
                      }
                  }),
                  (0, i.jsx)(u.TabBar.Panel, {
                      id: g,
                      'aria-labelledby': _,
                      className: G.contentPanel,
                      children: (0, i.jsx)('div', { children: H[g]() })
                  })
              ]
          });
}
function Y() {
    let { analyticsLocations: e } = (0, _.ZP)(p.Z.FAMILY_CENTER),
        t = (0, O.Z)(),
        n = (0, Z.M8)(),
        a = (0, E.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        l = (0, c.e7)([j.Z], () => j.Z.getIsInitialized()),
        b = (0, P.M)(),
        M = (0, c.e7)([T.Z], () => T.Z.theme),
        { selectedTab: B, handleTabChange: y } = (0, A.Z)(),
        H = (0, x.Dt)(),
        F = I.default.getCurrentUser(),
        z = null != t,
        Y = l && null != F && !z;
    (0, m.Z)(() => {
        g.Y(k.Z5c.FAMILY_CENTER),
            (0, v.e)('family-center'),
            !j.Z.isLoading() && j.Z.canRefetch() && R.ZP.initialPageLoad(),
            !a &&
                (0, E.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: U.L.AUTO,
                    forceTrack: !0
                });
    });
    let K = {
            isConsideredAdult: t,
            numOfAcceptedRequests: n,
            selectedTab: B,
            selectedTeenId: b
        },
        Q = r.useRef(K);
    r.useEffect(() => {
        Q.current = K;
    }),
        r.useEffect(() => {
            if (l && z) {
                let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: i } = Q.current;
                S.default.track(k.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: t,
                    selected_teen_id: i,
                    initial_page: w.QH[n],
                    source: w._6[w.Mu.SIDENAV]
                }),
                    C.Z.increment({ name: o.V.FAMILY_CENTER_VIEW });
            }
        }, [l, z]),
        r.useEffect(() => {
            let e = N.Ex.getSetting();
            l && t && void 0 === e && N.Ex.updateSetting(!0);
        }, [l, t]),
        r.useEffect(() => {
            Y && (0, f.mN)(L.L0.FAMILY_CENTER);
        }, [Y]);
    if (Y) return null;
    let q = B !== w.dG.SETTINGS ? B : w.dG.ACTIVITY,
        J = V[q];
    return (0, i.jsx)(_.Gt, {
        value: e,
        children: (0, i.jsxs)('main', {
            className: s()(G.container, G.containerSidenav),
            'aria-label': D.intl.string(D.t.RZqaJi),
            children: [
                (0, i.jsx)(h.yY, { location: D.intl.string(D.t.RZqaJi) }),
                (0, i.jsx)(W, {
                    theme: M,
                    section: q,
                    handleItemSelect: (e) => {
                        y(e);
                    }
                }),
                (0, i.jsx)(u.TabBar.Panel, {
                    id: q,
                    'aria-labelledby': H,
                    className: G.contentPanel,
                    children: (0, i.jsx)(u.Scroller, {
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
