n.d(t, {
    M: () => Y,
    Z: () => K
});
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(873546),
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
    x = n(313201),
    _ = n(266454),
    j = n(984370),
    O = n(797614),
    E = n(108427),
    C = n(210887),
    v = n(695346),
    S = n(594174),
    T = n(626135),
    N = n(260722),
    I = n(914788),
    y = n(841409),
    A = n(652262),
    P = n(880257),
    R = n(631885),
    D = n(830746),
    Z = n(731934),
    w = n(521450),
    k = n(292352),
    L = n(981631),
    B = n(723359),
    M = n(921944),
    U = n(916723),
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
        s = (0, x.Dt)(),
        o = (0, R.gU)();
    return (0, i.jsx)(u.f6W, {
        theme: t,
        children: (e) =>
            (0, i.jsxs)(j.Z, {
                className: a()(e, G.sidebarTabBar),
                scrollable: l.tq,
                role: 'navigation',
                'aria-labelledby': s,
                toolbar: !0,
                children: [
                    (0, i.jsx)(j.Z.Icon, {
                        icon: u.BFJ,
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(j.Z.Title, {
                        id: s,
                        children: V.intl.string(U.default.RZqaJi)
                    }),
                    (0, i.jsx)(j.Z.Divider, {}),
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
        n = (0, _.Nj)(d.z.FAMILY_CENTER_NEW_BADGE),
        s = (0, c.e7)([I.Z], () => I.Z.getIsInitialized()),
        a = (0, A.M)(),
        { selectedTab: l, handleTabChange: m } = (0, y.Z)(),
        h = (0, x.Dt)(),
        f = S.default.getCurrentUser(),
        j = null != e,
        C = s && null != f && !j;
    (0, p.ZP)(() => {
        ((0, E.e)('family-center'),
            N.ZP.initialPageLoad(),
            n ||
                (0, _.Q3)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: M.L.AUTO,
                    forceTrack: !0
                }));
    });
    let v = {
            isConsideredAdult: e,
            numOfAcceptedRequests: t,
            selectedTab: l,
            selectedTeenId: a
        },
        D = r.useRef(v);
    return (r.useEffect(() => {
        D.current = v;
    }),
    r.useEffect(() => {
        if (s && j) {
            let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: i } = D.current;
            (T.default.track(L.rMx.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: t,
                selected_teen_id: i,
                initial_page: k.QH[n],
                source: k._6[k.Mu.SIDENAV]
            }),
                O.Z.increment({ name: o.V.FAMILY_CENTER_VIEW }));
        }
    }, [s, j]),
    r.useEffect(() => {
        C && (0, g.mN)(B.L0.FAMILY_CENTER);
    }, [C]),
    C)
        ? null
        : (0, i.jsxs)('main', {
              className: G.container,
              'aria-label': V.intl.string(U.default.RZqaJi),
              children: [
                  (0, i.jsx)(b.yY, { location: V.intl.string(U.default.RZqaJi) }),
                  (0, i.jsx)(z, {
                      section: l,
                      handleItemSelect: (e) => {
                          m(e);
                      }
                  }),
                  (0, i.jsx)(u.njP.Panel, {
                      id: l,
                      'aria-labelledby': h,
                      className: G.contentPanel,
                      children: (0, i.jsx)('div', { children: F[l]() })
                  })
              ]
          });
}
function K() {
    let { analyticsLocations: e } = (0, f.ZP)(h.Z.FAMILY_CENTER),
        t = (0, P.Z)(),
        n = (0, R.M8)(),
        s = (0, _.Nj)(d.z.FAMILY_CENTER_NEW_BADGE),
        l = (0, c.e7)([I.Z], () => I.Z.getIsInitialized()),
        j = (0, A.M)(),
        D = (0, c.e7)([C.Z], () => C.Z.theme),
        { selectedTab: Z, handleTabChange: w } = (0, y.Z)(),
        F = (0, x.Dt)(),
        z = S.default.getCurrentUser(),
        Y = null != t,
        K = l && null != z && !Y;
    (0, p.ZP)(() => {
        (m.Y(L.Z5c.FAMILY_CENTER),
            (0, E.e)('family-center'),
            !I.Z.isLoading() && I.Z.canRefetch() && N.ZP.initialPageLoad(),
            s ||
                (0, _.Q3)(d.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: M.L.AUTO,
                    forceTrack: !0
                }));
    });
    let q = {
            isConsideredAdult: t,
            numOfAcceptedRequests: n,
            selectedTab: Z,
            selectedTeenId: j
        },
        X = r.useRef(q);
    if (
        (r.useEffect(() => {
            X.current = q;
        }),
        r.useEffect(() => {
            if (l && Y) {
                let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: i } = X.current;
                (T.default.track(L.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: t,
                    selected_teen_id: i,
                    initial_page: k.QH[n],
                    source: k._6[k.Mu.SIDENAV]
                }),
                    O.Z.increment({ name: o.V.FAMILY_CENTER_VIEW }));
            }
        }, [l, Y]),
        r.useEffect(() => {
            let e = v.Ex.getSetting();
            l && t && void 0 === e && v.Ex.updateSetting(!0);
        }, [l, t]),
        r.useEffect(() => {
            K && (0, g.mN)(B.L0.FAMILY_CENTER);
        }, [K]),
        K)
    )
        return null;
    let J = Z !== k.dG.SETTINGS ? Z : k.dG.ACTIVITY,
        Q = H[J];
    return (0, i.jsx)(f.Gt, {
        value: e,
        children: (0, i.jsxs)('main', {
            className: a()(G.container, G.containerSidenav),
            'aria-label': V.intl.string(U.default.RZqaJi),
            children: [
                (0, i.jsx)(b.yY, { location: V.intl.string(U.default.RZqaJi) }),
                (0, i.jsx)(W, {
                    theme: D,
                    section: J,
                    handleItemSelect: (e) => {
                        w(e);
                    }
                }),
                (0, i.jsx)(u.njP.Panel, {
                    id: J,
                    'aria-labelledby': F,
                    className: G.contentPanel,
                    children: (0, i.jsx)(u.Ttm, {
                        children: (0, i.jsx)('div', {
                            className: G.sideNavContent,
                            children: Q()
                        })
                    })
                })
            ]
        })
    });
}
