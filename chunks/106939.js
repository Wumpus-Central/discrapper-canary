n.d(t, {
    M: () => Y,
    Z: () => K
});
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(873546),
    o = n(286379),
    c = n(399606),
    d = n(704215),
    u = n(481060),
    m = n(150063),
    g = n(493773),
    p = n(758119),
    h = n(100527),
    f = n(906732),
    b = n(252618),
    N = n(313201),
    x = n(605236),
    _ = n(984370),
    E = n(797614),
    j = n(108427),
    O = n(210887),
    C = n(695346),
    S = n(594174),
    v = n(626135),
    T = n(260722),
    I = n(914788),
    y = n(841409),
    A = n(652262),
    P = n(880257),
    R = n(631885),
    D = n(830746),
    Z = n(731934),
    w = n(521450),
    k = n(292352),
    W = n(981631),
    L = n(723359),
    B = n(921944),
    M = n(332495),
    U = n(388032),
    V = n(347362);
let G = {
        [k.dG.REQUESTS]: () => (0, r.jsx)(Z.Z, {}),
        [k.dG.ACTIVITY]: () => (0, r.jsx)(D.Z, {}),
        [k.dG.SETTINGS]: () => (0, r.jsx)(w.Z, {})
    },
    F = {
        [k.dG.REQUESTS]: () => (0, r.jsx)(Z.Z, {}),
        [k.dG.ACTIVITY]: () => (0, r.jsx)(D.Z, {})
    };
function H(e) {
    let { section: t, handleItemSelect: n } = e,
        i = (0, R.gU)(),
        s = (0, P.Z)();
    return (0, r.jsxs)(u.njP, {
        className: V.settingsTabBar,
        'aria-label': U.NW.string(M.Z.RZqaJi),
        selectedItem: t,
        type: 'top',
        look: 'brand',
        onItemSelect: n,
        children: [
            (0, r.jsx)(u.njP.Item, {
                className: V.settingsTabBarItem,
                id: k.dG.ACTIVITY,
                children: U.NW.string(M.Z.bdBmq6)
            }),
            (0, r.jsxs)(u.njP.Item, {
                className: V.settingsTabBarItem,
                id: k.dG.REQUESTS,
                'aria-label': U.NW.string(M.Z['gVWG+/']),
                children: [
                    U.NW.string(M.Z['gVWG+/']),
                    i > 0
                        ? (0, r.jsx)(u.mAB, {
                              className: V.badge,
                              count: i
                          })
                        : null
                ]
            }),
            s
                ? (0, r.jsx)(u.njP.Item, {
                      className: V.settingsTabBarItem,
                      id: k.dG.SETTINGS,
                      children: U.NW.string(U.t['3D5yo6'])
                  })
                : null
        ]
    });
}
function z(e) {
    let { theme: t, section: n, handleItemSelect: i } = e,
        s = (0, N.Dt)(),
        o = (0, R.gU)();
    return (0, r.jsx)(u.f6W, {
        theme: t,
        children: (e) =>
            (0, r.jsxs)(_.Z, {
                className: a()(e, V.sidebarTabBar),
                scrollable: l.tq,
                role: 'navigation',
                'aria-labelledby': s,
                toolbar: !0,
                children: [
                    (0, r.jsx)(_.Z.Icon, {
                        icon: u.BFJ,
                        'aria-hidden': !0
                    }),
                    (0, r.jsx)(_.Z.Title, {
                        id: s,
                        children: U.NW.string(M.Z.RZqaJi)
                    }),
                    (0, r.jsx)(_.Z.Divider, {}),
                    (0, r.jsxs)(u.njP, {
                        'aria-label': U.NW.string(M.Z.RZqaJi),
                        selectedItem: n,
                        type: 'top-pill',
                        onItemSelect: i,
                        className: V.__invalid_tabBar,
                        children: [
                            (0, r.jsx)(u.njP.Item, {
                                id: k.dG.ACTIVITY,
                                className: V.item,
                                children: U.NW.string(M.Z.bdBmq6)
                            }),
                            (0, r.jsxs)(u.njP.Item, {
                                id: k.dG.REQUESTS,
                                className: V.item,
                                'aria-label': U.NW.string(M.Z['gVWG+/']),
                                children: [
                                    U.NW.string(M.Z['gVWG+/']),
                                    o > 0
                                        ? (0, r.jsx)(u.mAB, {
                                              className: V.badge,
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
        s = (0, c.e7)([I.Z], () => I.Z.getIsInitialized()),
        a = (0, A.M)(),
        { selectedTab: l, handleTabChange: m } = (0, y.Z)(),
        h = (0, N.Dt)(),
        f = S.default.getCurrentUser(),
        _ = null != e,
        O = s && null != f && !_;
    (0, g.ZP)(() => {
        (0, j.e)('family-center'),
            T.ZP.initialPageLoad(),
            n ||
                (0, x.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: B.L.AUTO,
                    forceTrack: !0
                });
    });
    let C = {
            isConsideredAdult: e,
            numOfAcceptedRequests: t,
            selectedTab: l,
            selectedTeenId: a
        },
        D = i.useRef(C);
    return (i.useEffect(() => {
        D.current = C;
    }),
    i.useEffect(() => {
        if (s && _) {
            let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: r } = D.current;
            v.default.track(W.rMx.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: t,
                selected_teen_id: r,
                initial_page: k.QH[n],
                source: k._6[k.Mu.SIDENAV]
            }),
                E.Z.increment({ name: o.V.FAMILY_CENTER_VIEW });
        }
    }, [s, _]),
    i.useEffect(() => {
        O && (0, p.mN)(L.L0.FAMILY_CENTER);
    }, [O]),
    O)
        ? null
        : (0, r.jsxs)('main', {
              className: V.container,
              'aria-label': U.NW.string(M.Z.RZqaJi),
              children: [
                  (0, r.jsx)(b.yY, { location: U.NW.string(M.Z.RZqaJi) }),
                  (0, r.jsx)(H, {
                      section: l,
                      handleItemSelect: (e) => {
                          m(e);
                      }
                  }),
                  (0, r.jsx)(u.njP.Panel, {
                      id: l,
                      'aria-labelledby': h,
                      className: V.contentPanel,
                      children: (0, r.jsx)('div', { children: G[l]() })
                  })
              ]
          });
}
function K() {
    let { analyticsLocations: e } = (0, f.ZP)(h.Z.FAMILY_CENTER),
        t = (0, P.Z)(),
        n = (0, R.M8)(),
        s = (0, x.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
        l = (0, c.e7)([I.Z], () => I.Z.getIsInitialized()),
        _ = (0, A.M)(),
        D = (0, c.e7)([O.Z], () => O.Z.theme),
        { selectedTab: Z, handleTabChange: w } = (0, y.Z)(),
        G = (0, N.Dt)(),
        H = S.default.getCurrentUser(),
        Y = null != t,
        K = l && null != H && !Y;
    (0, g.ZP)(() => {
        m.Y(W.Z5c.FAMILY_CENTER),
            (0, j.e)('family-center'),
            !I.Z.isLoading() && I.Z.canRefetch() && T.ZP.initialPageLoad(),
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
            selectedTeenId: _
        },
        X = i.useRef(q);
    if (
        (i.useEffect(() => {
            X.current = q;
        }),
        i.useEffect(() => {
            if (l && Y) {
                let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: r } = X.current;
                v.default.track(W.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: t,
                    selected_teen_id: r,
                    initial_page: k.QH[n],
                    source: k._6[k.Mu.SIDENAV]
                }),
                    E.Z.increment({ name: o.V.FAMILY_CENTER_VIEW });
            }
        }, [l, Y]),
        i.useEffect(() => {
            let e = C.Ex.getSetting();
            l && t && void 0 === e && C.Ex.updateSetting(!0);
        }, [l, t]),
        i.useEffect(() => {
            K && (0, p.mN)(L.L0.FAMILY_CENTER);
        }, [K]),
        K)
    )
        return null;
    let J = Z !== k.dG.SETTINGS ? Z : k.dG.ACTIVITY,
        Q = F[J];
    return (0, r.jsx)(f.Gt, {
        value: e,
        children: (0, r.jsxs)('main', {
            className: a()(V.container, V.containerSidenav),
            'aria-label': U.NW.string(M.Z.RZqaJi),
            children: [
                (0, r.jsx)(b.yY, { location: U.NW.string(M.Z.RZqaJi) }),
                (0, r.jsx)(z, {
                    theme: D,
                    section: J,
                    handleItemSelect: (e) => {
                        w(e);
                    }
                }),
                (0, r.jsx)(u.njP.Panel, {
                    id: J,
                    'aria-labelledby': G,
                    className: V.contentPanel,
                    children: (0, r.jsx)(u.Ttm, {
                        children: (0, r.jsx)('div', {
                            className: V.sideNavContent,
                            children: Q()
                        })
                    })
                })
            ]
        })
    });
}
