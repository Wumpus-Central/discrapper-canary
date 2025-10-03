n.d(t, {
    M: () => X,
    Z: () => Q,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(286379),
    c = n(399606),
    u = n(704215),
    d = n(481060),
    f = n(150063),
    _ = n(493773),
    p = n(758119),
    h = n(100527),
    m = n(906732),
    g = n(252618),
    E = n(313201),
    b = n(266454),
    y = n(984370),
    O = n(797614),
    v = n(108427),
    I = n(210887),
    T = n(695346),
    S = n(594174),
    A = n(626135),
    C = n(260722),
    N = n(914788),
    R = n(841409),
    P = n(652262),
    w = n(880257),
    D = n(631885),
    L = n(615160),
    x = n(273879),
    j = n(830746),
    M = n(731934),
    k = n(521450),
    U = n(292352),
    G = n(981631),
    B = n(723359),
    Z = n(921944),
    F = n(345909),
    V = n(388032),
    H = n(166387);
let Y = {
        [U.dG.REQUESTS]: () => (0, r.jsx)(M.Z, {}),
        [U.dG.ACTIVITY]: () => (0, r.jsx)(j.Z, {}),
        [U.dG.SETTINGS]: () => (0, r.jsx)(k.Z, {}),
        [U.dG.CONTENT_AND_SOCIAL]: () => (0, r.jsx)(L.Z, {}),
        [U.dG.DATA_AND_PRIVACY]: () => (0, r.jsx)(x.Z, {}),
    },
    W = {
        [U.dG.REQUESTS]: () => (0, r.jsx)(M.Z, {}),
        [U.dG.ACTIVITY]: () => (0, r.jsx)(j.Z, {}),
        [U.dG.CONTENT_AND_SOCIAL]: () => (0, r.jsx)(L.Z, {}),
        [U.dG.DATA_AND_PRIVACY]: () => (0, r.jsx)(x.Z, {}),
    };
function K() {
    return (0, r.jsx)(d.Kqy, {
        justify: "center",
        align: "center",
        className: H.loadingContainer,
        children: (0, r.jsx)(d.$jN, {}),
    });
}
function z(e) {
    let { section: t, handleItemSelect: n } = e,
        i = (0, D.gU)(),
        a = (0, w.Z)();
    return t === U.dG.CONTENT_AND_SOCIAL || t === U.dG.DATA_AND_PRIVACY
        ? null
        : (0, r.jsxs)(d.njP, {
              className: H.settingsTabBar,
              "aria-label": V.intl.string(F.default.RZqaJi),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, r.jsx)(d.njP.Item, {
                      className: H.settingsTabBarItem,
                      id: U.dG.ACTIVITY,
                      children: V.intl.string(F.default.bdBmq6),
                  }),
                  (0, r.jsxs)(d.njP.Item, {
                      className: H.settingsTabBarItem,
                      id: U.dG.REQUESTS,
                      "aria-label": V.intl.string(F.default["gVWG+/"]),
                      children: [
                          V.intl.string(F.default["gVWG+/"]),
                          i > 0
                              ? (0, r.jsx)(d.mAB, {
                                    className: H.badge,
                                    count: i,
                                })
                              : null,
                      ],
                  }),
                  a
                      ? (0, r.jsx)(d.njP.Item, {
                            className: H.settingsTabBarItem,
                            id: U.dG.SETTINGS,
                            children: V.intl.string(V.t["3D5yo6"]),
                        })
                      : null,
              ],
          });
}
function q(e) {
    let { theme: t, section: n, handleItemSelect: i } = e,
        a = (0, E.Dt)(),
        l = (0, D.gU)();
    return (0, r.jsx)(d.f6W, {
        theme: t,
        children: (e) =>
            (0, r.jsxs)(y.Z, {
                className: o()(e, H.sidebarTabBar),
                scrollable: s.tq,
                role: "navigation",
                "aria-labelledby": a,
                toolbar: !0,
                children: [
                    (0, r.jsx)(y.Z.Icon, {
                        icon: d.BFJ,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(y.Z.Title, {
                        id: a,
                        children: V.intl.string(F.default.RZqaJi),
                    }),
                    (0, r.jsx)(y.Z.Divider, {}),
                    (0, r.jsxs)(d.njP, {
                        "aria-label": V.intl.string(F.default.RZqaJi),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: i,
                        className: H.__invalid_tabBar,
                        children: [
                            (0, r.jsx)(d.njP.Item, {
                                id: U.dG.ACTIVITY,
                                className: H.item,
                                children: V.intl.string(F.default.bdBmq6),
                            }),
                            (0, r.jsxs)(d.njP.Item, {
                                id: U.dG.REQUESTS,
                                className: H.item,
                                "aria-label": V.intl.string(F.default["gVWG+/"]),
                                children: [
                                    V.intl.string(F.default["gVWG+/"]),
                                    l > 0
                                        ? (0, r.jsx)(d.mAB, {
                                              className: H.badge,
                                              count: l,
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
function X() {
    let e = (0, w.Z)(),
        t = (0, D.M8)(),
        n = (0, b.Nj)(u.z.FAMILY_CENTER_NEW_BADGE),
        { familyCenterInitialized: a, isLoading: o } = (0, c.cj)([N.Z], () => ({
            familyCenterInitialized: N.Z.getIsInitialized(),
            isLoading: N.Z.isLoading(),
        })),
        s = (0, P.M)(),
        { selectedTab: f, handleTabChange: h } = (0, R.Z)(),
        m = (0, E.Dt)(),
        y = S.default.getCurrentUser(),
        I = null != e,
        T = a && null != y && !I;
    (0, _.ZP)(() => {
        (0, v.e)("family-center"),
            C.ZP.initialPageLoad(),
            n ||
                (0, b.Q3)(u.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: Z.L.AUTO,
                    forceTrack: !0,
                });
    });
    let L = {
            isConsideredAdult: e,
            numOfAcceptedRequests: t,
            selectedTab: f,
            selectedTeenId: s,
        },
        x = i.useRef(L);
    i.useEffect(() => {
        x.current = L;
    }),
        i.useEffect(() => {
            if (a && I) {
                let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: r } = x.current;
                A.default.track(G.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: t,
                    selected_teen_id: r,
                    initial_page: U.QH[n],
                    source: U._6[U.Mu.SIDENAV],
                }),
                    O.Z.increment({ name: l.V.FAMILY_CENTER_VIEW });
            }
        }, [a, I]),
        i.useEffect(() => {
            T && (0, p.mN)(B.L0.FAMILY_CENTER);
        }, [T]);
    let j = (e) => {
        h(e);
    };
    return T
        ? null
        : (0, r.jsxs)("main", {
              className: H.container,
              "aria-label": V.intl.string(F.default.RZqaJi),
              children: [
                  (0, r.jsx)(g.yY, { location: V.intl.string(F.default.RZqaJi) }),
                  (0, r.jsx)(z, {
                      section: f,
                      handleItemSelect: j,
                  }),
                  (0, r.jsx)(d.njP.Panel, {
                      id: f,
                      "aria-labelledby": m,
                      className: H.contentPanel,
                      children: (0, r.jsx)("div", { children: o ? (0, r.jsx)(K, {}) : Y[f]() }),
                  }),
              ],
          });
}
function Q() {
    let { analyticsLocations: e } = (0, m.ZP)(h.Z.FAMILY_CENTER),
        t = (0, w.Z)(),
        n = (0, D.M8)(),
        a = (0, b.Nj)(u.z.FAMILY_CENTER_NEW_BADGE),
        { familyCenterInitialized: s, isLoading: y } = (0, c.cj)([N.Z], () => ({
            familyCenterInitialized: N.Z.getIsInitialized(),
            isLoading: N.Z.isLoading(),
        })),
        L = (0, P.M)(),
        x = (0, c.e7)([I.Z], () => I.Z.theme),
        { selectedTab: j, handleTabChange: M } = (0, R.Z)(),
        k = (0, E.Dt)(),
        Y = S.default.getCurrentUser(),
        z = null != t,
        X = s && null != Y && !z;
    (0, _.ZP)(() => {
        f.Y(G.Z5c.FAMILY_CENTER),
            (0, v.e)("family-center"),
            !y && N.Z.canRefetch() && C.ZP.initialPageLoad(),
            a ||
                (0, b.Q3)(u.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: Z.L.AUTO,
                    forceTrack: !0,
                });
    });
    let Q = {
            isConsideredAdult: t,
            numOfAcceptedRequests: n,
            selectedTab: j,
            selectedTeenId: L,
        },
        J = i.useRef(Q);
    i.useEffect(() => {
        J.current = Q;
    }),
        i.useEffect(() => {
            if (s && z) {
                let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: r } = J.current;
                A.default.track(G.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: t,
                    selected_teen_id: r,
                    initial_page: U.QH[n],
                    source: U._6[U.Mu.SIDENAV],
                }),
                    O.Z.increment({ name: l.V.FAMILY_CENTER_VIEW });
            }
        }, [s, z]),
        i.useEffect(() => {
            let e = T.Ex.getSetting();
            s && t && void 0 === e && T.Ex.updateSetting(!0);
        }, [s, t]),
        i.useEffect(() => {
            X && (0, p.mN)(B.L0.FAMILY_CENTER);
        }, [X]);
    let $ = (e) => {
        M(e);
    };
    if (X) return null;
    let ee = j !== U.dG.SETTINGS ? j : U.dG.ACTIVITY,
        et = W[ee];
    return (0, r.jsx)(m.Gt, {
        value: e,
        children: (0, r.jsxs)("main", {
            className: o()(H.container, H.containerSidenav),
            "aria-label": V.intl.string(F.default.RZqaJi),
            children: [
                (0, r.jsx)(g.yY, { location: V.intl.string(F.default.RZqaJi) }),
                (0, r.jsx)(q, {
                    theme: x,
                    section: ee,
                    handleItemSelect: $,
                }),
                (0, r.jsx)(d.njP.Panel, {
                    id: ee,
                    "aria-labelledby": k,
                    className: H.contentPanel,
                    children: (0, r.jsx)(d.Ttm, {
                        children: (0, r.jsx)("div", {
                            className: H.sideNavContent,
                            children: y ? (0, r.jsx)(K, {}) : et(),
                        }),
                    }),
                }),
            ],
        }),
    });
}
