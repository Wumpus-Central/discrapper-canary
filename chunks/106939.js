n.d(t, {
    M: () => q,
    Z: () => X,
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
    x = n(615160),
    L = n(273879),
    j = n(830746),
    M = n(731934),
    k = n(521450),
    U = n(292352),
    G = n(981631),
    B = n(723359),
    Z = n(921944),
    V = n(345909),
    F = n(388032),
    H = n(166387);
let Y = {
        [U.dG.REQUESTS]: () => (0, r.jsx)(M.Z, {}),
        [U.dG.ACTIVITY]: () => (0, r.jsx)(j.Z, {}),
        [U.dG.SETTINGS]: () => (0, r.jsx)(k.Z, {}),
        [U.dG.CONTENT_AND_SOCIAL]: () => (0, r.jsx)(x.Z, {}),
        [U.dG.DATA_AND_PRIVACY]: () => (0, r.jsx)(L.Z, {}),
    },
    W = {
        [U.dG.REQUESTS]: () => (0, r.jsx)(M.Z, {}),
        [U.dG.ACTIVITY]: () => (0, r.jsx)(j.Z, {}),
        [U.dG.CONTENT_AND_SOCIAL]: () => (0, r.jsx)(x.Z, {}),
        [U.dG.DATA_AND_PRIVACY]: () => (0, r.jsx)(L.Z, {}),
    };
function K(e) {
    let { section: t, handleItemSelect: n } = e,
        i = (0, D.gU)(),
        a = (0, w.Z)();
    return t === U.dG.CONTENT_AND_SOCIAL || t === U.dG.DATA_AND_PRIVACY
        ? null
        : (0, r.jsxs)(d.njP, {
              className: H.settingsTabBar,
              "aria-label": F.intl.string(V.default.RZqaJi),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, r.jsx)(d.njP.Item, {
                      className: H.settingsTabBarItem,
                      id: U.dG.ACTIVITY,
                      children: F.intl.string(V.default.bdBmq6),
                  }),
                  (0, r.jsxs)(d.njP.Item, {
                      className: H.settingsTabBarItem,
                      id: U.dG.REQUESTS,
                      "aria-label": F.intl.string(V.default["gVWG+/"]),
                      children: [
                          F.intl.string(V.default["gVWG+/"]),
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
                            children: F.intl.string(F.t["3D5yo6"]),
                        })
                      : null,
              ],
          });
}
function z(e) {
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
                        children: F.intl.string(V.default.RZqaJi),
                    }),
                    (0, r.jsx)(y.Z.Divider, {}),
                    (0, r.jsxs)(d.njP, {
                        "aria-label": F.intl.string(V.default.RZqaJi),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: i,
                        className: H.__invalid_tabBar,
                        children: [
                            (0, r.jsx)(d.njP.Item, {
                                id: U.dG.ACTIVITY,
                                className: H.item,
                                children: F.intl.string(V.default.bdBmq6),
                            }),
                            (0, r.jsxs)(d.njP.Item, {
                                id: U.dG.REQUESTS,
                                className: H.item,
                                "aria-label": F.intl.string(V.default["gVWG+/"]),
                                children: [
                                    F.intl.string(V.default["gVWG+/"]),
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
function q() {
    let e = (0, w.Z)(),
        t = (0, D.M8)(),
        n = (0, b.Nj)(u.z.FAMILY_CENTER_NEW_BADGE),
        a = (0, c.e7)([N.Z], () => N.Z.getIsInitialized()),
        o = (0, P.M)(),
        { selectedTab: s, handleTabChange: f } = (0, R.Z)(),
        h = (0, E.Dt)(),
        m = S.default.getCurrentUser(),
        y = null != e,
        I = a && null != m && !y;
    (0, _.ZP)(() => {
        (0, v.e)("family-center"),
            C.ZP.initialPageLoad(),
            n ||
                (0, b.Q3)(u.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: Z.L.AUTO,
                    forceTrack: !0,
                });
    });
    let T = {
            isConsideredAdult: e,
            numOfAcceptedRequests: t,
            selectedTab: s,
            selectedTeenId: o,
        },
        x = i.useRef(T);
    i.useEffect(() => {
        x.current = T;
    }),
        i.useEffect(() => {
            if (a && y) {
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
        }, [a, y]),
        i.useEffect(() => {
            I && (0, p.mN)(B.L0.FAMILY_CENTER);
        }, [I]);
    let L = (e) => {
        f(e);
    };
    return I
        ? null
        : (0, r.jsxs)("main", {
              className: H.container,
              "aria-label": F.intl.string(V.default.RZqaJi),
              children: [
                  (0, r.jsx)(g.yY, { location: F.intl.string(V.default.RZqaJi) }),
                  (0, r.jsx)(K, {
                      section: s,
                      handleItemSelect: L,
                  }),
                  (0, r.jsx)(d.njP.Panel, {
                      id: s,
                      "aria-labelledby": h,
                      className: H.contentPanel,
                      children: (0, r.jsx)("div", { children: Y[s]() }),
                  }),
              ],
          });
}
function X() {
    let { analyticsLocations: e } = (0, m.ZP)(h.Z.FAMILY_CENTER),
        t = (0, w.Z)(),
        n = (0, D.M8)(),
        a = (0, b.Nj)(u.z.FAMILY_CENTER_NEW_BADGE),
        s = (0, c.e7)([N.Z], () => N.Z.getIsInitialized()),
        y = (0, P.M)(),
        x = (0, c.e7)([I.Z], () => I.Z.theme),
        { selectedTab: L, handleTabChange: j } = (0, R.Z)(),
        M = (0, E.Dt)(),
        k = S.default.getCurrentUser(),
        Y = null != t,
        K = s && null != k && !Y;
    (0, _.ZP)(() => {
        f.Y(G.Z5c.FAMILY_CENTER),
            (0, v.e)("family-center"),
            !N.Z.isLoading() && N.Z.canRefetch() && C.ZP.initialPageLoad(),
            a ||
                (0, b.Q3)(u.z.FAMILY_CENTER_NEW_BADGE, {
                    dismissAction: Z.L.AUTO,
                    forceTrack: !0,
                });
    });
    let q = {
            isConsideredAdult: t,
            numOfAcceptedRequests: n,
            selectedTab: L,
            selectedTeenId: y,
        },
        X = i.useRef(q);
    i.useEffect(() => {
        X.current = q;
    }),
        i.useEffect(() => {
            if (s && Y) {
                let { isConsideredAdult: e, numOfAcceptedRequests: t, selectedTab: n, selectedTeenId: r } = X.current;
                A.default.track(G.rMx.FAMILY_CENTER_VIEWED, {
                    is_considered_adult: e,
                    num_of_accepted_links: t,
                    selected_teen_id: r,
                    initial_page: U.QH[n],
                    source: U._6[U.Mu.SIDENAV],
                }),
                    O.Z.increment({ name: l.V.FAMILY_CENTER_VIEW });
            }
        }, [s, Y]),
        i.useEffect(() => {
            let e = T.Ex.getSetting();
            s && t && void 0 === e && T.Ex.updateSetting(!0);
        }, [s, t]),
        i.useEffect(() => {
            K && (0, p.mN)(B.L0.FAMILY_CENTER);
        }, [K]);
    let Q = (e) => {
        j(e);
    };
    if (K) return null;
    let J = L !== U.dG.SETTINGS ? L : U.dG.ACTIVITY,
        $ = W[J];
    return (0, r.jsx)(m.Gt, {
        value: e,
        children: (0, r.jsxs)("main", {
            className: o()(H.container, H.containerSidenav),
            "aria-label": F.intl.string(V.default.RZqaJi),
            children: [
                (0, r.jsx)(g.yY, { location: F.intl.string(V.default.RZqaJi) }),
                (0, r.jsx)(z, {
                    theme: x,
                    section: J,
                    handleItemSelect: Q,
                }),
                (0, r.jsx)(d.njP.Panel, {
                    id: J,
                    "aria-labelledby": M,
                    className: H.contentPanel,
                    children: (0, r.jsx)(d.Ttm, {
                        children: (0, r.jsx)("div", {
                            className: H.sideNavContent,
                            children: $(),
                        }),
                    }),
                }),
            ],
        }),
    });
}
