n.d(t, {
    M: () => U,
    Z: () => G,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(399606),
    c = n(481060),
    u = n(150063),
    d = n(100527),
    f = n(906732),
    _ = n(252618),
    p = n(313201),
    h = n(984370),
    m = n(210887),
    g = n(695346),
    E = n(260722),
    b = n(914788),
    y = n(880257),
    O = n(631885),
    v = n(615160),
    I = n(273879),
    T = n(830746),
    S = n(731934),
    A = n(521450),
    C = n(539086),
    N = n(292352),
    R = n(981631),
    P = n(597754),
    D = n(388032),
    w = n(166387);
let x = {
        [N.dG.REQUESTS]: S.Z,
        [N.dG.ACTIVITY]: T.Z,
        [N.dG.SETTINGS]: A.Z,
        [N.dG.CONTENT_AND_SOCIAL]: v.Z,
        [N.dG.DATA_AND_PRIVACY]: I.Z,
    },
    L = {
        [N.dG.REQUESTS]: S.Z,
        [N.dG.ACTIVITY]: T.Z,
        [N.dG.CONTENT_AND_SOCIAL]: v.Z,
        [N.dG.DATA_AND_PRIVACY]: I.Z,
    };
function M() {
    return (0, r.jsx)(c.Kqy, {
        justify: "center",
        align: "center",
        className: w.loadingContainer,
        children: (0, r.jsx)(c.$jN, {}),
    });
}
function j(e) {
    let { section: t, handleItemSelect: n } = e,
        i = (0, O.gU)(),
        a = (0, y.Z)();
    return t === N.dG.CONTENT_AND_SOCIAL || t === N.dG.DATA_AND_PRIVACY
        ? null
        : (0, r.jsxs)(c.njP, {
              className: w.settingsTabBar,
              "aria-label": D.intl.string(P.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, r.jsx)(c.njP.Item, {
                      className: w.settingsTabBarItem,
                      id: N.dG.ACTIVITY,
                      children: D.intl.string(P.default.bdBmqy),
                  }),
                  (0, r.jsxs)(c.njP.Item, {
                      className: w.settingsTabBarItem,
                      id: N.dG.REQUESTS,
                      "aria-label": D.intl.string(P.default["gVWG+6"]),
                      children: [
                          D.intl.string(P.default["gVWG+6"]),
                          i > 0
                              ? (0, r.jsx)(c.mAB, {
                                    className: w.badge,
                                    count: i,
                                })
                              : null,
                      ],
                  }),
                  a
                      ? (0, r.jsx)(c.njP.Item, {
                            className: w.settingsTabBarItem,
                            id: N.dG.SETTINGS,
                            children: D.intl.string(D.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function k(e) {
    let { theme: t, section: n, handleItemSelect: i } = e,
        a = (0, p.Dt)(),
        l = (0, O.gU)();
    return (0, r.jsx)(c.f6W, {
        theme: t,
        children: (e) =>
            (0, r.jsxs)(h.Z, {
                className: o()(e, w.sidebarTabBar),
                scrollable: s.tq,
                role: "navigation",
                "aria-labelledby": a,
                toolbar: !0,
                children: [
                    (0, r.jsx)(h.Z.Icon, {
                        icon: c.BFJ,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(h.Z.Title, {
                        id: a,
                        children: D.intl.string(P.default.RZqaJn),
                    }),
                    (0, r.jsx)(h.Z.Divider, {}),
                    (0, r.jsxs)(c.njP, {
                        "aria-label": D.intl.string(P.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, r.jsx)(c.njP.Item, {
                                id: N.dG.ACTIVITY,
                                className: w.item,
                                children: D.intl.string(P.default.bdBmqy),
                            }),
                            (0, r.jsxs)(c.njP.Item, {
                                id: N.dG.REQUESTS,
                                className: w.item,
                                "aria-label": D.intl.string(P.default["gVWG+6"]),
                                children: [
                                    D.intl.string(P.default["gVWG+6"]),
                                    l > 0
                                        ? (0, r.jsx)(c.mAB, {
                                              className: w.badge,
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
function U() {
    let e = (0, p.Dt)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: i,
            showAgeGateModal: a,
        } = (0, C.M)({
            location: N.Mu.SETTINGS,
            onMountEffect: () => {
                E.ZP.initialPageLoad();
            },
        }),
        o = (e) => {
            i(e);
        };
    if (a) return null;
    let s = x[n];
    return (0, r.jsxs)("main", {
        className: w.container,
        "aria-label": D.intl.string(P.default.RZqaJn),
        children: [
            (0, r.jsx)(_.yY, { location: D.intl.string(P.default.RZqaJn) }),
            (0, r.jsx)(j, {
                section: n,
                handleItemSelect: o,
            }),
            (0, r.jsx)(c.njP.Panel, {
                id: n,
                "aria-labelledby": e,
                className: w.contentPanel,
                children: (0, r.jsx)("div", { children: t ? (0, r.jsx)(M, {}) : (0, r.jsx)(s, {}) }),
            }),
        ],
    });
}
function G() {
    let { analyticsLocations: e } = (0, f.ZP)(d.Z.FAMILY_CENTER),
        t = (0, y.Z)(),
        n = (0, l.e7)([b.Z], () => b.Z.getIsInitialized()),
        a = (0, l.e7)([m.Z], () => m.Z.theme),
        s = (0, p.Dt)(),
        {
            isLoading: h,
            selectedTab: O,
            handleTabChange: v,
            showAgeGateModal: I,
        } = (0, C.M)({
            location: N.Mu.SIDENAV,
            onMountEffect: () => {
                u.Y(R.Z5c.FAMILY_CENTER), !b.Z.isLoading() && b.Z.canRefetch() && E.ZP.initialPageLoad();
            },
        });
    i.useEffect(() => {
        let e = g.Ex.getSetting();
        n && t && void 0 === e && g.Ex.updateSetting(!0);
    }, [n, t]);
    let T = (e) => {
        v(e);
    };
    if (I) return null;
    let S = O !== N.dG.SETTINGS ? O : N.dG.ACTIVITY,
        A = L[S];
    return (0, r.jsx)(f.Gt, {
        value: e,
        children: (0, r.jsxs)("main", {
            className: o()(w.container, w.containerSidenav),
            "aria-label": D.intl.string(P.default.RZqaJn),
            children: [
                (0, r.jsx)(_.yY, { location: D.intl.string(P.default.RZqaJn) }),
                (0, r.jsx)(k, {
                    theme: a,
                    section: S,
                    handleItemSelect: T,
                }),
                (0, r.jsx)(c.njP.Panel, {
                    id: S,
                    "aria-labelledby": s,
                    className: w.contentPanel,
                    children: (0, r.jsx)(c.Ttm, {
                        children: (0, r.jsx)("div", {
                            className: w.sideNavContent,
                            children: h ? (0, r.jsx)(M, {}) : (0, r.jsx)(A, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
