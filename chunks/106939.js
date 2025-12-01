n.d(t, {
    M: () => U,
    Z: () => G,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(399606),
    c = n(481060),
    u = n(150063),
    d = n(100527),
    f = n(906732),
    p = n(252618),
    _ = n(313201),
    m = n(984370),
    h = n(210887),
    g = n(695346),
    E = n(260722),
    b = n(914788),
    y = n(880257),
    O = n(631885),
    v = n(615160),
    S = n(273879),
    I = n(830746),
    T = n(731934),
    A = n(521450),
    C = n(539086),
    N = n(292352),
    P = n(981631),
    R = n(744038),
    w = n(388032),
    D = n(166387);
let x = {
        [N.dG.REQUESTS]: T.Z,
        [N.dG.ACTIVITY]: I.Z,
        [N.dG.SETTINGS]: A.Z,
        [N.dG.CONTENT_AND_SOCIAL]: v.Z,
        [N.dG.DATA_AND_PRIVACY]: S.Z,
    },
    L = {
        [N.dG.REQUESTS]: T.Z,
        [N.dG.ACTIVITY]: I.Z,
        [N.dG.CONTENT_AND_SOCIAL]: v.Z,
        [N.dG.DATA_AND_PRIVACY]: S.Z,
    };
function j() {
    return (0, r.jsx)(c.Kqy, {
        justify: "center",
        align: "center",
        className: D.loadingContainer,
        children: (0, r.jsx)(c.$jN, {}),
    });
}
function M(e) {
    let { section: t, handleItemSelect: n } = e,
        i = (0, O.gU)(),
        a = (0, y.Z)();
    return t === N.dG.CONTENT_AND_SOCIAL || t === N.dG.DATA_AND_PRIVACY
        ? null
        : (0, r.jsxs)(c.njP, {
              className: D.settingsTabBar,
              "aria-label": w.intl.string(R.default.RZqaJn),
              selectedItem: t,
              type: "top",
              look: "brand",
              onItemSelect: n,
              children: [
                  (0, r.jsx)(c.njP.Item, {
                      className: D.settingsTabBarItem,
                      id: N.dG.ACTIVITY,
                      children: w.intl.string(R.default.bdBmqy),
                  }),
                  (0, r.jsxs)(c.njP.Item, {
                      className: D.settingsTabBarItem,
                      id: N.dG.REQUESTS,
                      "aria-label": w.intl.string(R.default["gVWG+6"]),
                      children: [
                          w.intl.string(R.default["gVWG+6"]),
                          i > 0
                              ? (0, r.jsx)(c.mAB, {
                                    className: D.badge,
                                    count: i,
                                })
                              : null,
                      ],
                  }),
                  a
                      ? (0, r.jsx)(c.njP.Item, {
                            className: D.settingsTabBarItem,
                            id: N.dG.SETTINGS,
                            children: w.intl.string(w.t["3D5yo/"]),
                        })
                      : null,
              ],
          });
}
function k(e) {
    let { theme: t, section: n, handleItemSelect: i } = e,
        a = (0, _.Dt)(),
        l = (0, O.gU)();
    return (0, r.jsx)(c.f6W, {
        theme: t,
        children: (e) =>
            (0, r.jsxs)(m.Z, {
                className: o()(e, D.sidebarTabBar),
                scrollable: s.tq,
                role: "navigation",
                "aria-labelledby": a,
                toolbar: !0,
                children: [
                    (0, r.jsx)(m.Z.Icon, {
                        icon: c.BFJ,
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(m.Z.Title, {
                        id: a,
                        children: w.intl.string(R.default.RZqaJn),
                    }),
                    (0, r.jsx)(m.Z.Divider, {}),
                    (0, r.jsxs)(c.njP, {
                        "aria-label": w.intl.string(R.default.RZqaJn),
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: i,
                        children: [
                            (0, r.jsx)(c.njP.Item, {
                                id: N.dG.ACTIVITY,
                                className: D.item,
                                children: w.intl.string(R.default.bdBmqy),
                            }),
                            (0, r.jsxs)(c.njP.Item, {
                                id: N.dG.REQUESTS,
                                className: D.item,
                                "aria-label": w.intl.string(R.default["gVWG+6"]),
                                children: [
                                    w.intl.string(R.default["gVWG+6"]),
                                    l > 0
                                        ? (0, r.jsx)(c.mAB, {
                                              className: D.badge,
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
    let e = (0, _.Dt)(),
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
        className: D.container,
        "aria-label": w.intl.string(R.default.RZqaJn),
        children: [
            (0, r.jsx)(p.yY, { location: w.intl.string(R.default.RZqaJn) }),
            (0, r.jsx)(M, {
                section: n,
                handleItemSelect: o,
            }),
            (0, r.jsx)(c.njP.Panel, {
                id: n,
                "aria-labelledby": e,
                className: D.contentPanel,
                children: (0, r.jsx)("div", { children: t ? (0, r.jsx)(j, {}) : (0, r.jsx)(s, {}) }),
            }),
        ],
    });
}
function G() {
    let { analyticsLocations: e } = (0, f.ZP)(d.Z.FAMILY_CENTER),
        t = (0, y.Z)(),
        n = (0, l.e7)([b.Z], () => b.Z.getIsInitialized()),
        a = (0, l.e7)([h.Z], () => h.Z.theme),
        s = (0, _.Dt)(),
        {
            isLoading: m,
            selectedTab: O,
            handleTabChange: v,
            showAgeGateModal: S,
        } = (0, C.M)({
            location: N.Mu.SIDENAV,
            onMountEffect: () => {
                u.Y(P.Z5c.FAMILY_CENTER), !b.Z.isLoading() && b.Z.canRefetch() && E.ZP.initialPageLoad();
            },
        });
    i.useEffect(() => {
        let e = g.Ex.getSetting();
        n && t && void 0 === e && g.Ex.updateSetting(!0);
    }, [n, t]);
    let I = (e) => {
        v(e);
    };
    if (S) return null;
    let T = O !== N.dG.SETTINGS ? O : N.dG.ACTIVITY,
        A = L[T];
    return (0, r.jsx)(f.Gt, {
        value: e,
        children: (0, r.jsxs)("main", {
            className: o()(D.container, D.containerSidenav),
            "aria-label": w.intl.string(R.default.RZqaJn),
            children: [
                (0, r.jsx)(p.yY, { location: w.intl.string(R.default.RZqaJn) }),
                (0, r.jsx)(k, {
                    theme: a,
                    section: T,
                    handleItemSelect: I,
                }),
                (0, r.jsx)(c.njP.Panel, {
                    id: T,
                    "aria-labelledby": s,
                    className: D.contentPanel,
                    children: (0, r.jsx)(c.Ttm, {
                        children: (0, r.jsx)("div", {
                            className: D.sideNavContent,
                            children: m ? (0, r.jsx)(j, {}) : (0, r.jsx)(A, {}),
                        }),
                    }),
                }),
            ],
        }),
    });
}
