l.d(t, { G: () => eh }), l(321073);
var r = l(627968),
    s = l(64700),
    n = l(696292),
    a = l(17928),
    o = l(509434),
    i = l(939249),
    c = l(926268),
    u = l(34188),
    d = l(661531),
    b = l(770178),
    S = l(742589),
    p = l(545986);
let m = (0, l(945810).mj)({
    name: "2026-03-slayer-storefront-shop-tab",
    kind: "user",
    defaultConfig: { enabled: !1, useGameShopsDropdown: !1 },
    variations: {
        0: { enabled: !1, useGameShopsDropdown: !1 },
        1: { enabled: !0, useGameShopsDropdown: !1 },
        2: { enabled: !0, useGameShopsDropdown: !0 },
    },
});
var E = l(44724),
    h = l(975732),
    f = l(318346),
    C = l(270051),
    g = l(70926),
    A = l(287809),
    y = l(954571),
    T = l(440938),
    O = l(13875),
    _ = l(23161),
    I = l(503698),
    L = l.n(I),
    x = l(477782),
    R = l(550079),
    v = l(146919),
    j = l(985018);
function F(e) {
    let { shops: t, onClose: l } = e,
        s = (0, v.yB)("CollectiblesGameShopsContextMenu");
    return (0, r.jsx)("div", {
        className: L()({ [v.jP]: s }),
        children: (0, r.jsx)(R.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: L()({ [v.jP]: s }),
            onClose: l,
            "aria-label": j.intl.string(j.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, r.jsx)(
                    x.Dr,
                    { id: e.id, label: e.label, trailingIndicator: { type: "icon", icon: o.I }, action: e.onSelect },
                    e.id,
                ),
            ),
        }),
    });
}
var G = l(641150),
    P = l(628284),
    k = l(758836);
let N = [
        { tab: k.G2.AVATAR_DECORATIONS, labelKey: j.t.dRZYNE },
        { tab: k.G2.PROFILE_EFFECTS, labelKey: j.t["1cNjtx"] },
        { tab: k.G2.NAMEPLATES, labelKey: j.t.V68Fqz },
        { tab: k.G2.PROFILE_FRAMES, labelKey: j.t.ecTJkR },
        { tab: k.G2.BUNDLES, labelKey: j.t.FYFpps },
        { tab: k.G2.CATALOG, labelKey: j.t.xFcotU },
    ],
    M = {
        [G.q.ALL]: k.G2.CATALOG,
        [G.q.AVATAR_DECORATION]: k.G2.AVATAR_DECORATIONS,
        [G.q.PROFILE_EFFECT]: k.G2.PROFILE_EFFECTS,
        [G.q.NAMEPLATE]: k.G2.NAMEPLATES,
        [G.q.PROFILE_FRAME]: k.G2.PROFILE_FRAMES,
        [G.q.BUNDLE]: k.G2.BUNDLES,
    };
function $(e, t) {
    if (e !== k.G2.CATALOG || 0 === t.size) return e;
    let l = t.values().next().value;
    return null == l ? e : (M[l] ?? e);
}
function w(e) {
    let { handleTransition: t, onClose: l, selectedTab: s, itemTypeFilters: n } = e,
        a = (0, v.yB)("CollectiblesIndexPageContextMenu"),
        o = (0, O.sk)("CollectiblesIndexPageContextMenu"),
        i = $(s, n),
        c = N.filter((e) => {
            let { tab: t } = e;
            return o || t !== k.G2.PROFILE_FRAMES;
        });
    return (0, r.jsx)("div", {
        className: L()({ [v.jP]: a }),
        children: (0, r.jsx)(R.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: L()({ [v.jP]: a }),
            onClose: l,
            "aria-label": j.intl.string(j.t.xFcotU),
            onSelect: () => {},
            children: c.map((e) => {
                let { tab: l, labelKey: s } = e,
                    n = l === i;
                return (0, r.jsx)(
                    x.Dr,
                    {
                        id: l,
                        label: j.intl.string(s),
                        icon: n ? P.y : void 0,
                        leadingAccessory: n ? { type: "icon", icon: P.y } : void 0,
                        badge: l === k.G2.PROFILE_FRAMES ? "new" : void 0,
                        action: () => {
                            t(l);
                        },
                    },
                    l,
                );
            }),
        }),
    });
}
var D = l(7689),
    B = l(892547),
    H = l(773669),
    q = l(652215),
    U = l(113960);
function z(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: n, hasText: o } = e,
        { searchQuery: c, onSetSearchQuery: u } = (0, _.v)(),
        [b, S] = s.useState(""),
        p = (0, T.uM)(),
        m = (0, a.bG)([H.default], () => H.default.locale),
        E = s.useRef(null),
        [h, f] = s.useState(!1);
    s.useEffect(() => {
        let e = setTimeout(() => {
            u(b);
        }, 250);
        return () => clearTimeout(e);
    }, [b, u]),
        s.useEffect(() => {
            S(c);
        }, [c]),
        s.useEffect(() => {
            f(n && o);
        }, [n, o]);
    let C = s.useCallback(
            (e) => {
                "Enter" === e.key && u(b);
            },
            [b, u],
        ),
        g = s.useCallback(
            (e) => {
                y.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: p?.sessionId,
                    page_section: p?.pageSection,
                    page_category: p?.pageCategory,
                    page_index: p?.pageIndex,
                    page_size: p?.pageSize,
                    cta_name: e,
                    page_type: l,
                });
            },
            [l, p],
        ),
        A = s.useCallback(() => {
            l !== k.G2.CATALOG && t(k.G2.CATALOG), g(k.uY.SEARCH_ICON), f(!0), setTimeout(() => E.current?.focus());
        }, [l, t, g]),
        O = s.useCallback(() => {
            l !== k.G2.CATALOG && t(k.G2.CATALOG), g(k.uY.SEARCH_BAR);
        }, [l, t, g]),
        I = s.useCallback(() => {
            S(""), u(""), g(k.uY.SEARCH_BAR_CLEAR), n && f(!1);
        }, [u, g, n]),
        x = s.useCallback(() => {
            n && "" === b && f(!1);
        }, [n, b]),
        R = n && !h,
        v = (0, r.jsx)(i.D, {
            className: U.qc,
            onClick: A,
            children: (0, r.jsx)(D.$, { size: "sm", color: d.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        F = (0, r.jsx)(B.I, {
            size: "sm",
            ref: E,
            onKeyDown: C,
            query: b,
            onChange: S,
            onClear: I,
            onBlur: x,
            placeholder: "en-US" === m ? j.intl.string(j.t.arz34K) : j.intl.string(j.t["hIt/Nm"]),
        }),
        G = { "--custom-search-bar-width": `${k.rr}px`, "--custom-search-bar-icon-width": `${k.Dy}px` };
    return R
        ? (0, r.jsx)("div", { style: G, children: v })
        : (0, r.jsx)("div", {
              className: L()(U.ON, { [U.Nz]: h }),
              style: G,
              children: (0, r.jsx)(i.D, { ignoreKeyPress: !0, onClick: O, children: F }),
          });
}
var V = l(3666),
    K = l(834730),
    Y = l(777666),
    W = l(761508),
    Q = l(922016),
    J = l(900797),
    X = l(847374),
    Z = l(955572),
    ee = l(775602),
    et = l(421773);
function el(e) {
    let { tabs: t, selectedTab: l, onTabSelect: s, onClose: n, showOrbRentalNewBadge: a } = e;
    return (0, r.jsx)(R.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": j.intl.string(j.t["UKOtz+"]),
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, r.jsx)(
            x.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i } = e;
                    if (null != i) {
                        let e = t === l;
                        return (0, r.jsx)(
                            x.Dr,
                            {
                                id: t,
                                label: o,
                                icon: e ? P.y : void 0,
                                leadingAccessory: e ? { type: "icon", icon: P.y } : void 0,
                                hasSubmenu: !0,
                                children: i({ onClose: n }),
                            },
                            t,
                        );
                    }
                    let c = t === k.G2.ORBS && a;
                    return (0, r.jsx)(
                        x.Dr,
                        {
                            id: t,
                            label: o,
                            icon: t === l ? P.y : void 0,
                            leadingAccessory: t === l ? { type: "icon", icon: P.y } : void 0,
                            badge: c ? "new" : void 0,
                            action: () => s(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
var er = l(584512);
function es(e) {
    let { label: t, icon: l, showNewBadge: s } = e;
    return (0, r.jsxs)(K.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != l
                ? (0, r.jsxs)("span", {
                      className: er.nt,
                      children: [t, (0, r.jsx)(l, { size: "xs", color: "currentColor" })],
                  })
                : t,
            s && (0, r.jsx)(Y.Lp, { text: j.intl.string(j.t.y2b7CA), className: er.Ad }),
        ],
    });
}
function en(e) {
    let {
        tab: t,
        label: l,
        selected: s,
        handleTransition: n,
        renderSubmenu: a,
        submenuOnly: o,
        showNewBadge: i,
        icon: c,
    } = e;
    return null != a
        ? (0, r.jsx)(ea, { tab: t, label: l, selected: s, handleTransition: n, renderSubmenu: a, submenuOnly: o })
        : (0, r.jsx)(W.V.Item, {
              id: t,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: s ? t : void 0,
              onClick: () => n(t),
              className: er.Mf,
              "aria-label": l,
              children: (0, r.jsx)(es, { label: l, icon: c, showNewBadge: i }),
          });
}
function ea(e) {
    let { tab: t, label: l, selected: n, handleTransition: a, renderSubmenu: o, submenuOnly: i } = e,
        c = s.useRef(null),
        u = s.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: S, onMouseLeave: p, cancelTimers: m } = (0, et.A)(100, 100),
        E = s.useCallback(() => {
            (u.current = ee.A.keyboardModeEnabled), S();
        }, [S]),
        h = s.useCallback(() => {
            m(), b(!0), (u.current = ee.A.keyboardModeEnabled), i || a(t);
        }, [m, b, i, a, t]);
    return (0, r.jsx)(Q.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            m(), b(!0), (u.current = ee.A.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !ee.A.keyboardModeEnabled && (0, Z.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)("div", { onMouseEnter: S, onMouseLeave: p, children: o({ onClose: t }) });
        },
        children: (e, s) => {
            let { isShown: a } = s,
                o = a ? J.t : X.a;
            return (0, r.jsx)(W.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: n ? t : void 0,
                onClick: h,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: er.Mf,
                "aria-label": l,
                children: (0, r.jsx)("div", {
                    "aria-hidden": "true",
                    className: er.Lj,
                    onMouseEnter: E,
                    onMouseLeave: p,
                    children: (0, r.jsx)(K.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, r.jsxs)("span", {
                            className: er.hP,
                            children: [l, (0, r.jsx)(o, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function eo(e) {
    let { onTabSelect: t, tabs: l, selectedTab: n, selected: a } = e,
        o = s.useRef(null),
        i = s.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: S } = (0, et.A)(100, 100),
        p = s.useCallback(() => {
            (i.current = ee.A.keyboardModeEnabled), d();
        }, [d]),
        m = s.useCallback(() => {
            S(), u(!0), (i.current = ee.A.keyboardModeEnabled);
        }, [S, u]);
    return (0, r.jsx)(Q.Y, {
        targetElementRef: o,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            S(), u(!0), (i.current = ee.A.keyboardModeEnabled);
        },
        onRequestClose: () => {
            i.current && !ee.A.keyboardModeEnabled && (0, Z.uS)(),
                u(!1),
                requestAnimationFrame(() => o.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, r.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, r.jsx)(el, { selectedTab: n, onClose: s, tabs: l, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: l } = t,
                s = l ? J.t : X.a;
            return (0, r.jsx)(W.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a ? "more" : void 0,
                onClick: m,
                clickableRef: (e) => {
                    null != e && null != e.ref && (o.current = e.ref);
                },
                className: L()(er.Mf, er.OS),
                "aria-label": j.intl.string(j.t["UKOtz+"]),
                children: (0, r.jsx)("div", {
                    "aria-hidden": "true",
                    className: er.Lj,
                    onMouseEnter: p,
                    onMouseLeave: b,
                    children: (0, r.jsx)(K.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, r.jsxs)("span", {
                            className: er.hP,
                            children: [j.intl.string(j.t["UKOtz+"]), (0, r.jsx)(s, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ei(e, t, l) {
    return e === l || (null != t.renderSubmenu && (0, k.dF)(l) && e === k.G2.CATALOG);
}
function ec(e) {
    let { className: t, selectedTab: l, tabs: n, onTabSelect: a } = e,
        [o, i] = s.useState(0),
        c = s.useRef(o),
        {
            lastVisibleIndex: u,
            onItemLayout: d,
            overflowItemsRef: S,
        } = (0, V.Wv)({ items: n, itemGapPx: 32, maxLines: 1, containerWidth: o }),
        p = s.useMemo(() => n.slice(0, u + 1), [u, n]),
        m = s.useMemo(() => n.slice(u + 1), [u, n]),
        E = s.useRef(null),
        h = s.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, b.g)(E, h);
    let f = 0 !== o,
        C = m.some((e) => ei(e.tab, e, l));
    return (0, r.jsxs)("div", {
        className: L()(er.kL, t),
        ref: E,
        children: [
            (0, r.jsxs)("div", {
                className: er.Kk,
                "aria-hidden": "true",
                children: [
                    n.map((e, t) =>
                        (0, r.jsx)(
                            V.Ae,
                            {
                                index: t,
                                onItemLayout: d,
                                children: (0, r.jsx)(en, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ei(e.tab, e, l),
                                    handleTransition: a,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, r.jsx)("div", {
                        ref: S,
                        children: (0, r.jsx)(eo, { tabs: m, onTabSelect: a, selectedTab: l, selected: C }),
                    }),
                ],
            }),
            f &&
                (0, r.jsxs)(W.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: a,
                    className: er.vR,
                    children: [
                        p.map((e) =>
                            (0, r.jsx)(
                                en,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ei(e.tab, e, l),
                                    handleTransition: a,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== m.length
                            ? (0, r.jsx)(eo, { tabs: m, onTabSelect: a, selectedTab: l, selected: C })
                            : null,
                    ],
                }),
        ],
    });
}
var eu = l(627363),
    ed = l(587895),
    eb = l(733391),
    eS = l(832163);
l(801416);
var ep = l(188275),
    em = l(518477),
    eE = l(773743);
function eh(e) {
    let { selectedTab: t, handleTransition: l } = e,
        I = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
        { enabled: L } = (0, C.Z)({ location: "collectibles_shop_header_bar" }),
        R = (function (e) {
            let { location: t } = e,
                { enabled: l, useGameShopsDropdown: r } = m.useConfig({ location: t });
            return l && !r;
        })({ location: "collectibles_shop_header_bar" }),
        v = (function (e) {
            let { location: t } = e,
                { enabled: l, useGameShopsDropdown: r } = m.useConfig({ location: t });
            return l && r;
        })({ location: "collectibles_shop_header_bar" }),
        G = (0, O.sk)("CollectiblesShopHeaderBar"),
        M = (0, T.uM)(),
        { searchQuery: D, itemTypeFilters: B } = (0, _.v)(),
        H = s.useRef(null),
        [U, V] = s.useState(!1);
    (0, b.g)(
        H,
        s.useCallback((e) => {
            V(e.contentRect.width < 800);
        }, []),
    );
    let K = s.useCallback(() => {
            y.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: M?.sessionId,
                page_type: k.G2.RIVALS,
                page_category: M?.pageCategory,
                page_section: M?.pageSection,
                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                cta_name: "go_to_game_shop",
            }),
                (0, E.default)({ guildId: ep.Kf }).catch(() => {});
        }, [M]),
        Y = (function (e) {
            let { enabled: t } = e,
                l = (0, T.uM)(),
                r = (0, a.yK)(
                    [eS.A],
                    () =>
                        t
                            ? (eS.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled)
                            : [],
                    [t],
                );
            s.useEffect(() => {
                t && (0, eb.Xw)();
            }, [t]),
                s.useEffect(() => {
                    r.length > 0 &&
                        eu.Ay.fetchApplications(
                            r.map((e) => e.applicationId),
                            !1,
                        );
                }, [r]);
            let n = s.useCallback(
                (e) => {
                    y.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: l?.sessionId,
                        page_type: k.G2.GAME_SHOPS,
                        page_category: l?.pageCategory,
                        page_section: l?.pageSection,
                        tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                        cta_name: "go_to_game_shop",
                    }),
                        (0, E.default)({ guildId: e }).catch(() => {});
                },
                [l],
            );
            return (0, a.bG)(
                [ed.A],
                () =>
                    r.flatMap((e) => {
                        let t = ed.A.getApplication(e.applicationId)?.name;
                        return null == t ? [] : [{ id: e.guildId, label: t, onSelect: () => n(e.guildId) }];
                    }),
                [r, n],
            );
        })({ enabled: v }),
        W = Y.length > 0,
        Q = s.useMemo(() => {
            let e = [
                { tab: k.G2.HOME, label: j.intl.string(j.t["xNiB/O"]) },
                {
                    tab: k.G2.CATALOG,
                    label: j.intl.string(j.t.Ah5sJo),
                    renderSubmenu: (e) => {
                        let { onClose: s } = e;
                        return (0, r.jsx)(w, { handleTransition: l, onClose: s, selectedTab: t, itemTypeFilters: B });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: s } = e;
                        return (function (e) {
                            let {
                                    selectedTab: t,
                                    itemTypeFilters: l,
                                    canViewProfileFrames: s,
                                    onTabSelect: n,
                                    onClose: a,
                                } = e,
                                o = $(t, l);
                            return N.filter((e) => {
                                let { tab: t } = e;
                                return s || t !== k.G2.PROFILE_FRAMES;
                            }).map((e) => {
                                let { tab: t, labelKey: l } = e,
                                    s = t === o;
                                return (0, r.jsx)(
                                    x.Dr,
                                    {
                                        id: t,
                                        label: j.intl.string(l),
                                        icon: s ? P.y : void 0,
                                        leadingAccessory: s ? { type: "icon", icon: P.y } : void 0,
                                        badge: t === k.G2.PROFILE_FRAMES ? "new" : void 0,
                                        action: () => {
                                            n(t), a();
                                        },
                                    },
                                    t,
                                );
                            });
                        })({ selectedTab: t, itemTypeFilters: B, canViewProfileFrames: G, onTabSelect: l, onClose: s });
                    },
                },
            ];
            return (
                L && e.push({ tab: k.G2.ORBS, label: j.intl.string(j.t.EBYkzk) }),
                R
                    ? e.push({ tab: k.G2.RIVALS, label: j.intl.string(j.t["kq/75v"]), icon: o.I })
                    : W &&
                      e.push({
                          tab: k.G2.GAME_SHOPS,
                          label: j.intl.string(j.t.FkjcWY),
                          submenuOnly: !0,
                          renderSubmenu: (e) => {
                              let { onClose: t } = e;
                              return (0, r.jsx)(F, { shops: Y, onClose: t });
                          },
                          renderOverflowContent: (e) => {
                              let { onClose: t } = e;
                              return (function (e) {
                                  let { shops: t, onClose: l } = e;
                                  return t.map((e) =>
                                      (0, r.jsx)(
                                          x.Dr,
                                          {
                                              id: e.id,
                                              label: e.label,
                                              trailingIndicator: { type: "icon", icon: o.I },
                                              action: () => {
                                                  e.onSelect(), l();
                                              },
                                          },
                                          e.id,
                                      ),
                                  );
                              })({ shops: Y, onClose: t });
                          },
                      }),
                e
            );
        }, [L, R, W, l, Y, t, B, G]),
        J = t === k.G2.ORBS ? q.liQ.SHOP_ORBS_TAB : q.liQ.COLLECTIBLES_SHOP,
        X = s.useCallback(() => {
            (0, f.Y)({ pageType: J, sectionType: q.JJy.ORBS_BALANCE_MENU, ctaObject: q.ZSU.CTA_TO_QUEST_HOME }),
                (0, p.navigateToQuestHome)({ fromContent: n.u.ORBS_BALANCE_MENU });
        }, [J]),
        Z = s.useCallback(() => {
            I?.id != null && (0, h.openUserProfileModal)({ userId: I.id, tabSection: em.RP.WISHLIST });
        }, [I?.id]),
        ee = s.useCallback(
            (e) => {
                e === k.G2.RIVALS ? K() : l(e);
            },
            [l, K],
        );
    return (0, r.jsx)("div", {
        ref: H,
        children: (0, r.jsxs)(S.A, {
            disableDoubleClick: !0,
            className: eE.jr,
            toolbar: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(z, { handleTransition: l, selectedTab: t, isNarrow: U, hasText: "" !== D }),
                    (0, r.jsx)(i.D, {
                        className: eE.ij,
                        onClick: Z,
                        "aria-label": j.intl.string(j.t["7lZ31J"]),
                        children: (0, r.jsx)(c.C, { size: "xs", color: "currentColor" }),
                    }),
                    L &&
                        (0, r.jsx)(g.SS, {
                            analyticsPage: J,
                            cardAlignment: g.SS.CardAlignment.END,
                            ctaText: j.intl.string(j.t.VC4Mq0),
                            ctaOnClick: X,
                        }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, r.jsx)(i.D, {
                    className: eE.sU,
                    onClick: () => l(k.G2.HOME),
                    "aria-label": j.intl.string(j.t["5upuqx"]),
                    children: (0, r.jsx)(u.U, { size: "md", color: d.A.colors.TEXT_DEFAULT }),
                }),
                (0, r.jsx)(ec, { tabs: Q, selectedTab: t, onTabSelect: ee }),
            ],
        }),
    });
}
