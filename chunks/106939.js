n.d(t, {
    M: function () {
        return W;
    },
    Z: function () {
        return z;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(873546),
    o = n(286379),
    c = n(399606),
    d = n(704215),
    u = n(481060),
    m = n(150063),
    g = n(493773),
    h = n(758119),
    p = n(100527),
    x = n(906732),
    f = n(252618),
    _ = n(313201),
    E = n(605236),
    C = n(984370),
    T = n(797614),
    S = n(108427),
    b = n(210887),
    I = n(695346),
    N = n(594174),
    v = n(626135),
    A = n(260722),
    j = n(914788),
    O = n(841409),
    R = n(652262),
    P = n(880257),
    y = n(631885),
    B = n(830746),
    D = n(731934),
    Z = n(521450),
    L = n(292352),
    M = n(981631),
    k = n(723359),
    w = n(921944),
    U = n(388032),
    F = n(14099);
let V = {
        [L.dG.REQUESTS]: () => (0, i.jsx)(D.Z, {}),
        [L.dG.ACTIVITY]: () => (0, i.jsx)(B.Z, {}),
        [L.dG.SETTINGS]: () => (0, i.jsx)(Z.Z, {})
    },
    G = {
        [L.dG.REQUESTS]: () => (0, i.jsx)(D.Z, {}),
        [L.dG.ACTIVITY]: () => (0, i.jsx)(B.Z, {})
    };
function H(e) {
    let { section: t, handleItemSelect: n } = e,
        r = (0, y.gU)(),
        s = (0, P.Z)();
    return (0, i.jsxs)(u.TabBar, {
        className: F.settingsTabBar,
        'aria-label': U.intl.string(U.t.RZqaJi),
        selectedItem: t,
        type: 'top',
        look: 'brand',
        onItemSelect: n,
        children: [
            (0, i.jsx)(u.TabBar.Item, {
                className: F.settingsTabBarItem,
                id: L.dG.ACTIVITY,
                children: U.intl.string(U.t.bdBmq6)
            }),
            (0, i.jsxs)(u.TabBar.Item, {
                className: F.settingsTabBarItem,
                id: L.dG.REQUESTS,
                'aria-label': U.intl.string(U.t['gVWG+/']),
                children: [
                    U.intl.string(U.t['gVWG+/']),
                    r > 0
                        ? (0, i.jsx)(u.NumberBadge, {
                              className: F.badge,
                              count: r
                          })
                        : null
                ]
            }),
            s
                ? (0, i.jsx)(u.TabBar.Item, {
                      className: F.settingsTabBarItem,
                      id: L.dG.SETTINGS,
                      children: U.intl.string(U.t['3D5yo6'])
                  })
                : null
        ]
    });
}
function Y(e) {
    let { theme: t, section: n, handleItemSelect: r } = e,
        s = (0, _.Dt)(),
        o = (0, y.gU)();
    return (0, i.jsx)(u.ThemeProvider, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(C.Z, {
                className: a()(e, F.sidebarTabBar),
                scrollable: l.tq,
                role: 'navigation',
                'aria-labelledby': s,
                toolbar: !0,
                children: [
                    (0, i.jsx)(C.Z.Icon, {
                        icon: u.GroupIcon,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(C.Z.Title, {
                        id: s,
                        children: U.intl.string(U.t.RZqaJi)
                    }),
                    (0, i.jsx)(C.Z.Divider, {}),
                    (0, i.jsxs)(u.TabBar, {
                        'aria-label': U.intl.string(U.t.RZqaJi),
                        selectedItem: n,
                        type: 'top-pill',
                        onItemSelect: r,
                        className: F.__invalid_tabBar,
                        children: [
                            (0, i.jsx)(u.TabBar.Item, {
                                id: L.dG.ACTIVITY,
                                className: F.item,
                                children: U.intl.string(U.t.bdBmq6)
                            }),
                            (0, i.jsxs)(u.TabBar.Item, {
                                id: L.dG.REQUESTS,
                                className: F.item,
                                'aria-label': U.intl.string(U.t['gVWG+/']),
                                children: [
                                    U.intl.string(U.t['gVWG+/']),
                                    o > 0
                                        ? (0, i.jsx)(u.NumberBadge, {
                                              className: F.badge,
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
function W() {
    let e = (0, P.Z)(),
        t = (0, y.M8)(),
        n = (0, E.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        s = (0, c.e7)([j.Z], () => j.Z.getIsInitialized()),
        l = (0, R.M)(),
        { selectedTab: m, handleTabChange: p } = (0, O.Z)(),
        x = (0, _.Dt)(),
        C = N.default.getCurrentUser(),
        b = null != e,
        I = s && null != C && !b;
    (0, g.Z)(() => {
        (0, S.e)('family-center'),
            A.ZP.initialPageLoad(),
            !n &&
                (0, E.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: w.L.AUTO,
                    forceTrack: !0
                });
    });
    let B = {
            isConsideredAdult: e,
            numOfAcceptedRequests: t,
            selectedTab: m,
            selectedTeenId: l
        },
        D = r.useRef(B);
    return (r.useEffect(() => {
        D.current = B;
    }),
    r.useEffect(() => {
        if (s && b) {
            let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: i } = D.current;
            v.default.track(M.rMx.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: t,
                selected_teen_id: i,
                initial_page: L.QH[n],
                source: L._6[L.Mu.SIDENAV]
            }),
                T.Z.increment({ name: o.V.FAMILY_CENTER_VIEW });
        }
    }, [s, b]),
    r.useEffect(() => {
        I && (0, h.mN)(k.L0.FAMILY_CENTER);
    }, [I]),
    I)
        ? null
        : (0, i.jsxs)('main', {
              className: a()(F.container),
              'aria-label': U.intl.string(U.t.RZqaJi),
              children: [
                  (0, i.jsx)(f.yY, { location: U.intl.string(U.t.RZqaJi) }),
                  (0, i.jsx)(H, {
                      section: m,
                      handleItemSelect: (e) => {
                          p(e);
                      }
                  }),
                  (0, i.jsx)(u.TabBar.Panel, {
                      id: m,
                      'aria-labelledby': x,
                      className: F.contentPanel,
                      children: (0, i.jsx)('div', { children: V[m]() })
                  })
              ]
          });
}
function z() {
    let { analyticsLocations: e } = (0, x.ZP)(p.Z.FAMILY_CENTER),
        t = (0, P.Z)(),
        n = (0, y.M8)(),
        s = (0, E.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        l = (0, c.e7)([j.Z], () => j.Z.getIsInitialized()),
        C = (0, R.M)(),
        B = (0, c.e7)([b.Z], () => b.Z.theme),
        { selectedTab: D, handleTabChange: Z } = (0, O.Z)(),
        V = (0, _.Dt)(),
        H = N.default.getCurrentUser(),
        W = null != t,
        z = l && null != H && !W;
    (0, g.Z)(() => {
        m.Y(M.Z5c.FAMILY_CENTER),
            (0, S.e)('family-center'),
            !j.Z.isLoading() && j.Z.canRefetch() && A.ZP.initialPageLoad(),
            !s &&
                (0, E.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: w.L.AUTO,
                    forceTrack: !0
                });
    });
    let K = {
            isConsideredAdult: t,
            numOfAcceptedRequests: n,
            selectedTab: D,
            selectedTeenId: C
        },
        q = r.useRef(K);
    r.useEffect(() => {
        q.current = K;
    }),
        r.useEffect(() => {
            if (l && W) {
                let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: i } = q.current;
                v.default.track(M.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: t,
                    selected_teen_id: i,
                    initial_page: L.QH[n],
                    source: L._6[L.Mu.SIDENAV]
                }),
                    T.Z.increment({ name: o.V.FAMILY_CENTER_VIEW });
            }
        }, [l, W]),
        r.useEffect(() => {
            let e = I.Ex.getSetting();
            l && t && void 0 === e && I.Ex.updateSetting(!0);
        }, [l, t]),
        r.useEffect(() => {
            z && (0, h.mN)(k.L0.FAMILY_CENTER);
        }, [z]);
    if (z) return null;
    let Q = D !== L.dG.SETTINGS ? D : L.dG.ACTIVITY,
        X = G[Q];
    return (0, i.jsx)(x.Gt, {
        value: e,
        children: (0, i.jsxs)('main', {
            className: a()(F.container, F.containerSidenav),
            'aria-label': U.intl.string(U.t.RZqaJi),
            children: [
                (0, i.jsx)(f.yY, { location: U.intl.string(U.t.RZqaJi) }),
                (0, i.jsx)(Y, {
                    theme: B,
                    section: Q,
                    handleItemSelect: (e) => {
                        Z(e);
                    }
                }),
                (0, i.jsx)(u.TabBar.Panel, {
                    id: Q,
                    'aria-labelledby': V,
                    className: F.contentPanel,
                    children: (0, i.jsx)(u.Scroller, {
                        children: (0, i.jsx)('div', {
                            className: F.sideNavContent,
                            children: X()
                        })
                    })
                })
            ]
        })
    });
}
