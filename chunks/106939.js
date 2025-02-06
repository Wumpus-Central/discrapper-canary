n.d(t, {
    M: () => Y,
    Z: () => W
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(873546),
    o = n(286379),
    c = n(399606),
    d = n(704215),
    u = n(481060),
    m = n(150063),
    h = n(493773),
    g = n(758119),
    _ = n(100527),
    x = n(906732),
    p = n(252618),
    E = n(313201),
    C = n(605236),
    f = n(984370),
    T = n(797614),
    N = n(108427),
    I = n(210887),
    S = n(695346),
    b = n(594174),
    v = n(626135),
    j = n(260722),
    A = n(914788),
    O = n(841409),
    R = n(652262),
    P = n(880257),
    D = n(631885),
    Z = n(830746),
    y = n(731934),
    k = n(521450),
    L = n(292352),
    B = n(981631),
    M = n(723359),
    w = n(921944),
    V = n(388032),
    U = n(228351);
let G = {
        [L.dG.REQUESTS]: () => (0, i.jsx)(y.Z, {}),
        [L.dG.ACTIVITY]: () => (0, i.jsx)(Z.Z, {}),
        [L.dG.SETTINGS]: () => (0, i.jsx)(k.Z, {})
    },
    F = {
        [L.dG.REQUESTS]: () => (0, i.jsx)(y.Z, {}),
        [L.dG.ACTIVITY]: () => (0, i.jsx)(Z.Z, {})
    };
function H(e) {
    let { section: t, handleItemSelect: n } = e,
        s = (0, D.gU)(),
        r = (0, P.Z)();
    return (0, i.jsxs)(u.njP, {
        className: U.settingsTabBar,
        'aria-label': V.intl.string(V.t.RZqaJi),
        selectedItem: t,
        type: 'top',
        look: 'brand',
        onItemSelect: n,
        children: [
            (0, i.jsx)(u.njP.Item, {
                className: U.settingsTabBarItem,
                id: L.dG.ACTIVITY,
                children: V.intl.string(V.t.bdBmq6)
            }),
            (0, i.jsxs)(u.njP.Item, {
                className: U.settingsTabBarItem,
                id: L.dG.REQUESTS,
                'aria-label': V.intl.string(V.t['gVWG+/']),
                children: [
                    V.intl.string(V.t['gVWG+/']),
                    s > 0
                        ? (0, i.jsx)(u.mAB, {
                              className: U.badge,
                              count: s
                          })
                        : null
                ]
            }),
            r
                ? (0, i.jsx)(u.njP.Item, {
                      className: U.settingsTabBarItem,
                      id: L.dG.SETTINGS,
                      children: V.intl.string(V.t['3D5yo6'])
                  })
                : null
        ]
    });
}
function z(e) {
    let { theme: t, section: n, handleItemSelect: s } = e,
        r = (0, E.Dt)(),
        o = (0, D.gU)();
    return (0, i.jsx)(u.f6W, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(f.Z, {
                className: l()(e, U.sidebarTabBar),
                scrollable: a.tq,
                role: 'navigation',
                'aria-labelledby': r,
                toolbar: !0,
                children: [
                    (0, i.jsx)(f.Z.Icon, {
                        icon: u.BFJ,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(f.Z.Title, {
                        id: r,
                        children: V.intl.string(V.t.RZqaJi)
                    }),
                    (0, i.jsx)(f.Z.Divider, {}),
                    (0, i.jsxs)(u.njP, {
                        'aria-label': V.intl.string(V.t.RZqaJi),
                        selectedItem: n,
                        type: 'top-pill',
                        onItemSelect: s,
                        className: U.__invalid_tabBar,
                        children: [
                            (0, i.jsx)(u.njP.Item, {
                                id: L.dG.ACTIVITY,
                                className: U.item,
                                children: V.intl.string(V.t.bdBmq6)
                            }),
                            (0, i.jsxs)(u.njP.Item, {
                                id: L.dG.REQUESTS,
                                className: U.item,
                                'aria-label': V.intl.string(V.t['gVWG+/']),
                                children: [
                                    V.intl.string(V.t['gVWG+/']),
                                    o > 0
                                        ? (0, i.jsx)(u.mAB, {
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
function Y() {
    let e = (0, P.Z)(),
        t = (0, D.M8)(),
        n = (0, C.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        r = (0, c.e7)([A.Z], () => A.Z.getIsInitialized()),
        a = (0, R.M)(),
        { selectedTab: m, handleTabChange: _ } = (0, O.Z)(),
        x = (0, E.Dt)(),
        f = b.default.getCurrentUser(),
        I = null != e,
        S = r && null != f && !I;
    (0, h.ZP)(() => {
        (0, N.e)('family-center'),
            j.ZP.initialPageLoad(),
            n ||
                (0, C.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: w.L.AUTO,
                    forceTrack: !0
                });
    });
    let Z = {
            isConsideredAdult: e,
            numOfAcceptedRequests: t,
            selectedTab: m,
            selectedTeenId: a
        },
        y = s.useRef(Z);
    return (s.useEffect(() => {
        y.current = Z;
    }),
    s.useEffect(() => {
        if (r && I) {
            let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: i } = y.current;
            v.default.track(B.rMx.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: t,
                selected_teen_id: i,
                initial_page: L.QH[n],
                source: L._6[L.Mu.SIDENAV]
            }),
                T.Z.increment({ name: o.V.FAMILY_CENTER_VIEW });
        }
    }, [r, I]),
    s.useEffect(() => {
        S && (0, g.mN)(M.L0.FAMILY_CENTER);
    }, [S]),
    S)
        ? null
        : (0, i.jsxs)('main', {
              className: l()(U.container),
              'aria-label': V.intl.string(V.t.RZqaJi),
              children: [
                  (0, i.jsx)(p.yY, { location: V.intl.string(V.t.RZqaJi) }),
                  (0, i.jsx)(H, {
                      section: m,
                      handleItemSelect: (e) => {
                          _(e);
                      }
                  }),
                  (0, i.jsx)(u.njP.Panel, {
                      id: m,
                      'aria-labelledby': x,
                      className: U.contentPanel,
                      children: (0, i.jsx)('div', { children: G[m]() })
                  })
              ]
          });
}
function W() {
    let { analyticsLocations: e } = (0, x.ZP)(_.Z.FAMILY_CENTER),
        t = (0, P.Z)(),
        n = (0, D.M8)(),
        r = (0, C.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        a = (0, c.e7)([A.Z], () => A.Z.getIsInitialized()),
        f = (0, R.M)(),
        Z = (0, c.e7)([I.Z], () => I.Z.theme),
        { selectedTab: y, handleTabChange: k } = (0, O.Z)(),
        G = (0, E.Dt)(),
        H = b.default.getCurrentUser(),
        Y = null != t,
        W = a && null != H && !Y;
    (0, h.ZP)(() => {
        m.Y(B.Z5c.FAMILY_CENTER),
            (0, N.e)('family-center'),
            !A.Z.isLoading() && A.Z.canRefetch() && j.ZP.initialPageLoad(),
            r ||
                (0, C.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: w.L.AUTO,
                    forceTrack: !0
                });
    });
    let K = {
            isConsideredAdult: t,
            numOfAcceptedRequests: n,
            selectedTab: y,
            selectedTeenId: f
        },
        X = s.useRef(K);
    if (
        (s.useEffect(() => {
            X.current = K;
        }),
        s.useEffect(() => {
            if (a && Y) {
                let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: i } = X.current;
                v.default.track(B.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: t,
                    selected_teen_id: i,
                    initial_page: L.QH[n],
                    source: L._6[L.Mu.SIDENAV]
                }),
                    T.Z.increment({ name: o.V.FAMILY_CENTER_VIEW });
            }
        }, [a, Y]),
        s.useEffect(() => {
            let e = S.Ex.getSetting();
            a && t && void 0 === e && S.Ex.updateSetting(!0);
        }, [a, t]),
        s.useEffect(() => {
            W && (0, g.mN)(M.L0.FAMILY_CENTER);
        }, [W]),
        W)
    )
        return null;
    let q = y !== L.dG.SETTINGS ? y : L.dG.ACTIVITY,
        J = F[q];
    return (0, i.jsx)(x.Gt, {
        value: e,
        children: (0, i.jsxs)('main', {
            className: l()(U.container, U.containerSidenav),
            'aria-label': V.intl.string(V.t.RZqaJi),
            children: [
                (0, i.jsx)(p.yY, { location: V.intl.string(V.t.RZqaJi) }),
                (0, i.jsx)(z, {
                    theme: Z,
                    section: q,
                    handleItemSelect: (e) => {
                        k(e);
                    }
                }),
                (0, i.jsx)(u.njP.Panel, {
                    id: q,
                    'aria-labelledby': G,
                    className: U.contentPanel,
                    children: (0, i.jsx)(u.Ttm, {
                        children: (0, i.jsx)('div', {
                            className: U.sideNavContent,
                            children: J()
                        })
                    })
                })
            ]
        })
    });
}
