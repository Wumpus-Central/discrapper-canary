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
    E = n(313201),
    _ = n(605236),
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
    D = n(631885),
    y = n(830746),
    B = n(731934),
    Z = n(521450),
    L = n(292352),
    M = n(981631),
    k = n(723359),
    w = n(921944),
    F = n(388032),
    U = n(228351);
let V = {
        [L.dG.REQUESTS]: () => (0, i.jsx)(B.Z, {}),
        [L.dG.ACTIVITY]: () => (0, i.jsx)(y.Z, {}),
        [L.dG.SETTINGS]: () => (0, i.jsx)(Z.Z, {})
    },
    G = {
        [L.dG.REQUESTS]: () => (0, i.jsx)(B.Z, {}),
        [L.dG.ACTIVITY]: () => (0, i.jsx)(y.Z, {})
    };
function H(e) {
    let { section: t, handleItemSelect: n } = e,
        r = (0, D.gU)(),
        s = (0, P.Z)();
    return (0, i.jsxs)(u.TabBar, {
        className: U.settingsTabBar,
        'aria-label': F.intl.string(F.t.RZqaJi),
        selectedItem: t,
        type: 'top',
        look: 'brand',
        onItemSelect: n,
        children: [
            (0, i.jsx)(u.TabBar.Item, {
                className: U.settingsTabBarItem,
                id: L.dG.ACTIVITY,
                children: F.intl.string(F.t.bdBmq6)
            }),
            (0, i.jsxs)(u.TabBar.Item, {
                className: U.settingsTabBarItem,
                id: L.dG.REQUESTS,
                'aria-label': F.intl.string(F.t['gVWG+/']),
                children: [
                    F.intl.string(F.t['gVWG+/']),
                    r > 0
                        ? (0, i.jsx)(u.NumberBadge, {
                              className: U.badge,
                              count: r
                          })
                        : null
                ]
            }),
            s
                ? (0, i.jsx)(u.TabBar.Item, {
                      className: U.settingsTabBarItem,
                      id: L.dG.SETTINGS,
                      children: F.intl.string(F.t['3D5yo6'])
                  })
                : null
        ]
    });
}
function Y(e) {
    let { theme: t, section: n, handleItemSelect: r } = e,
        s = (0, E.Dt)(),
        o = (0, D.gU)();
    return (0, i.jsx)(u.ThemeProvider, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(C.Z, {
                className: a()(e, U.sidebarTabBar),
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
                        children: F.intl.string(F.t.RZqaJi)
                    }),
                    (0, i.jsx)(C.Z.Divider, {}),
                    (0, i.jsxs)(u.TabBar, {
                        'aria-label': F.intl.string(F.t.RZqaJi),
                        selectedItem: n,
                        type: 'top-pill',
                        onItemSelect: r,
                        className: U.__invalid_tabBar,
                        children: [
                            (0, i.jsx)(u.TabBar.Item, {
                                id: L.dG.ACTIVITY,
                                className: U.item,
                                children: F.intl.string(F.t.bdBmq6)
                            }),
                            (0, i.jsxs)(u.TabBar.Item, {
                                id: L.dG.REQUESTS,
                                className: U.item,
                                'aria-label': F.intl.string(F.t['gVWG+/']),
                                children: [
                                    F.intl.string(F.t['gVWG+/']),
                                    o > 0
                                        ? (0, i.jsx)(u.NumberBadge, {
                                              className: U.badge,
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
        t = (0, D.M8)(),
        n = (0, _.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        s = (0, c.e7)([j.Z], () => j.Z.getIsInitialized()),
        l = (0, R.M)(),
        { selectedTab: m, handleTabChange: p } = (0, O.Z)(),
        x = (0, E.Dt)(),
        C = N.default.getCurrentUser(),
        b = null != e,
        I = s && null != C && !b;
    (0, g.Z)(() => {
        (0, S.e)('family-center'),
            A.ZP.initialPageLoad(),
            !n &&
                (0, _.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: w.L.AUTO,
                    forceTrack: !0
                });
    });
    let y = {
            isConsideredAdult: e,
            numOfAcceptedRequests: t,
            selectedTab: m,
            selectedTeenId: l
        },
        B = r.useRef(y);
    return (r.useEffect(() => {
        B.current = y;
    }),
    r.useEffect(() => {
        if (s && b) {
            let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: i } = B.current;
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
              className: a()(U.container),
              'aria-label': F.intl.string(F.t.RZqaJi),
              children: [
                  (0, i.jsx)(f.yY, { location: F.intl.string(F.t.RZqaJi) }),
                  (0, i.jsx)(H, {
                      section: m,
                      handleItemSelect: (e) => {
                          p(e);
                      }
                  }),
                  (0, i.jsx)(u.TabBar.Panel, {
                      id: m,
                      'aria-labelledby': x,
                      className: U.contentPanel,
                      children: (0, i.jsx)('div', { children: V[m]() })
                  })
              ]
          });
}
function z() {
    let { analyticsLocations: e } = (0, x.ZP)(p.Z.FAMILY_CENTER),
        t = (0, P.Z)(),
        n = (0, D.M8)(),
        s = (0, _.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        l = (0, c.e7)([j.Z], () => j.Z.getIsInitialized()),
        C = (0, R.M)(),
        y = (0, c.e7)([b.Z], () => b.Z.theme),
        { selectedTab: B, handleTabChange: Z } = (0, O.Z)(),
        V = (0, E.Dt)(),
        H = N.default.getCurrentUser(),
        W = null != t,
        z = l && null != H && !W;
    (0, g.Z)(() => {
        m.Y(M.Z5c.FAMILY_CENTER),
            (0, S.e)('family-center'),
            !j.Z.isLoading() && j.Z.canRefetch() && A.ZP.initialPageLoad(),
            !s &&
                (0, _.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: w.L.AUTO,
                    forceTrack: !0
                });
    });
    let K = {
            isConsideredAdult: t,
            numOfAcceptedRequests: n,
            selectedTab: B,
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
    let Q = B !== L.dG.SETTINGS ? B : L.dG.ACTIVITY,
        X = G[Q];
    return (0, i.jsx)(x.Gt, {
        value: e,
        children: (0, i.jsxs)('main', {
            className: a()(U.container, U.containerSidenav),
            'aria-label': F.intl.string(F.t.RZqaJi),
            children: [
                (0, i.jsx)(f.yY, { location: F.intl.string(F.t.RZqaJi) }),
                (0, i.jsx)(Y, {
                    theme: y,
                    section: Q,
                    handleItemSelect: (e) => {
                        Z(e);
                    }
                }),
                (0, i.jsx)(u.TabBar.Panel, {
                    id: Q,
                    'aria-labelledby': V,
                    className: U.contentPanel,
                    children: (0, i.jsx)(u.Scroller, {
                        children: (0, i.jsx)('div', {
                            className: U.sideNavContent,
                            children: X()
                        })
                    })
                })
            ]
        })
    });
}
