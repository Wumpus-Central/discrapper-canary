r.d(t, { G: () => eh }), r(321073);
var l = r(627968),
    s = r(64700),
    n = r(696292),
    a = r(17928),
    o = r(509434),
    i = r(939249),
    c = r(926268),
    u = r(34188),
    d = r(661531),
    b = r(770178),
    S = r(742589),
    p = r(617986);
let m = (0, r(945810).mj)({
    name: "2026-03-slayer-storefront-shop-tab",
    kind: "user",
    defaultConfig: { enabled: !1, useGameShopsDropdown: !1 },
    variations: {
        0: { enabled: !1, useGameShopsDropdown: !1 },
        1: { enabled: !0, useGameShopsDropdown: !1 },
        2: { enabled: !0, useGameShopsDropdown: !0 },
    },
});
var E = r(44724),
    h = r(975732),
    f = r(318346),
    C = r(371446),
    g = r(70926),
    A = r(287809),
    T = r(174459),
    y = r(440938),
    O = r(13875),
    _ = r(23161),
    I = r(503698),
    L = r.n(I),
    x = r(477782),
    R = r(980707),
    j = r(146919),
    v = r(375708);
function F(e) {
    let { shops: t, onClose: r } = e,
        s = (0, j.yB)("CollectiblesGameShopsContextMenu");
    return (0, l.jsx)("div", {
        className: L()({ [j.jP]: s }),
        children: (0, l.jsx)(R.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: L()({ [j.jP]: s }),
            onClose: r,
            "aria-label": v.intl.string(v.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, l.jsx)(
                    x.Dr,
                    { id: e.id, label: e.label, trailingIndicator: { type: "icon", icon: o.I }, action: e.onSelect },
                    e.id,
                ),
            ),
        }),
    });
}
var G = r(641150),
    P = r(478016),
    k = r(758836);
let N = [
        { tab: k.G2.AVATAR_DECORATIONS, labelKey: v.t.dRZYNE },
        { tab: k.G2.PROFILE_EFFECTS, labelKey: v.t["1cNjtx"] },
        { tab: k.G2.NAMEPLATES, labelKey: v.t.V68Fqz },
        { tab: k.G2.PROFILE_FRAMES, labelKey: v.t.ecTJkR },
        { tab: k.G2.BUNDLES, labelKey: v.t.FYFpps },
        { tab: k.G2.CATALOG, labelKey: v.t.xFcotU },
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
    let r = t.values().next().value;
    return null == r ? e : (M[r] ?? e);
}
function w(e) {
    let { handleTransition: t, onClose: r, selectedTab: s, itemTypeFilters: n } = e,
        a = (0, j.yB)("CollectiblesIndexPageContextMenu"),
        o = (0, O.sk)("CollectiblesIndexPageContextMenu"),
        i = $(s, n),
        c = N.filter((e) => {
            let { tab: t } = e;
            return o || t !== k.G2.PROFILE_FRAMES;
        });
    return (0, l.jsx)("div", {
        className: L()({ [j.jP]: a }),
        children: (0, l.jsx)(R.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: L()({ [j.jP]: a }),
            onClose: r,
            "aria-label": v.intl.string(v.t.xFcotU),
            onSelect: () => {},
            children: c.map((e) => {
                let { tab: r, labelKey: s } = e,
                    n = r === i;
                return (0, l.jsx)(
                    x.Dr,
                    {
                        id: r,
                        label: v.intl.string(s),
                        badge: r === k.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: n ? { type: "icon", icon: P.U } : void 0,
                        action: () => {
                            t(r);
                        },
                    },
                    r,
                );
            }),
        }),
    });
}
var D = r(7689),
    B = r(892547),
    H = r(773669),
    q = r(652215),
    U = r(113960);
function z(e) {
    let { handleTransition: t, selectedTab: r, isNarrow: n, hasText: o } = e,
        { searchQuery: c, onSetSearchQuery: u } = (0, _.v)(),
        [b, S] = s.useState(""),
        p = (0, y.uM)(),
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
                T.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: p?.sessionId,
                    page_section: p?.pageSection,
                    page_category: p?.pageCategory,
                    page_index: p?.pageIndex,
                    page_size: p?.pageSize,
                    cta_name: e,
                    page_type: r,
                });
            },
            [r, p],
        ),
        A = s.useCallback(() => {
            r !== k.G2.CATALOG && t(k.G2.CATALOG), g(k.uY.SEARCH_ICON), f(!0), setTimeout(() => E.current?.focus());
        }, [r, t, g]),
        O = s.useCallback(() => {
            r !== k.G2.CATALOG && t(k.G2.CATALOG), g(k.uY.SEARCH_BAR);
        }, [r, t, g]),
        I = s.useCallback(() => {
            S(""), u(""), g(k.uY.SEARCH_BAR_CLEAR), n && f(!1);
        }, [u, g, n]),
        x = s.useCallback(() => {
            n && "" === b && f(!1);
        }, [n, b]),
        R = n && !h,
        j = (0, l.jsx)(i.D, {
            className: U.qc,
            onClick: A,
            children: (0, l.jsx)(D.$, { size: "sm", color: d.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        F = (0, l.jsx)(B.I, {
            size: "sm",
            ref: E,
            onKeyDown: C,
            query: b,
            onChange: S,
            onClear: I,
            onBlur: x,
            placeholder: "en-US" === m ? v.intl.string(v.t.arz34K) : v.intl.string(v.t["hIt/Nm"]),
        }),
        G = { "--custom-search-bar-width": `${k.rr}px`, "--custom-search-bar-icon-width": `${k.Dy}px` };
    return R
        ? (0, l.jsx)("div", { style: G, children: j })
        : (0, l.jsx)("div", {
              className: L()(U.ON, { [U.Nz]: h }),
              style: G,
              children: (0, l.jsx)(i.D, { ignoreKeyPress: !0, onClick: O, children: F }),
          });
}
var V = r(3666),
    K = r(834730),
    Y = r(777666),
    W = r(761508),
    Q = r(922016),
    J = r(900797),
    X = r(847374),
    Z = r(955572),
    ee = r(775602),
    et = r(421773);
function er(e) {
    let { tabs: t, selectedTab: r, onTabSelect: s, onClose: n, showOrbRentalNewBadge: a } = e;
    return (0, l.jsx)(R.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": v.intl.string(v.t["UKOtz+"]),
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, l.jsx)(
            x.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i } = e;
                    if (null != i)
                        return (0, l.jsx)(x.Dr, { id: t, label: o, hasSubmenu: !0, children: i({ onClose: n }) }, t);
                    let c = t === k.G2.ORBS && a;
                    return (0, l.jsx)(
                        x.Dr,
                        {
                            id: t,
                            label: o,
                            trailingIndicator: t === r ? { type: "icon", icon: P.U } : void 0,
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
var el = r(584512);
function es(e) {
    let { label: t, icon: r, showNewBadge: s } = e;
    return (0, l.jsxs)(K.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != r
                ? (0, l.jsxs)("span", {
                      className: el.nt,
                      children: [t, (0, l.jsx)(r, { size: "xs", color: "currentColor" })],
                  })
                : t,
            s && (0, l.jsx)(Y.Lp, { text: v.intl.string(v.t.y2b7CA), className: el.Ad }),
        ],
    });
}
function en(e) {
    let {
        tab: t,
        label: r,
        selected: s,
        handleTransition: n,
        renderSubmenu: a,
        submenuOnly: o,
        showNewBadge: i,
        icon: c,
    } = e;
    return null != a
        ? (0, l.jsx)(ea, { tab: t, label: r, selected: s, handleTransition: n, renderSubmenu: a, submenuOnly: o })
        : (0, l.jsx)(W.V.Item, {
              id: t,
              look: "brand",
              disableItemStyles: !0,
              selectedItem: s ? t : void 0,
              onClick: () => n(t),
              className: el.Mf,
              "aria-label": r,
              children: (0, l.jsx)(es, { label: r, icon: c, showNewBadge: i }),
          });
}
function ea(e) {
    let { tab: t, label: r, selected: n, handleTransition: a, renderSubmenu: o, submenuOnly: i } = e,
        c = s.useRef(null),
        u = s.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: S, onMouseLeave: p, cancelTimers: m } = (0, et.A)(100, 100),
        E = s.useCallback(() => {
            (u.current = ee.A.keyboardModeEnabled), S();
        }, [S]),
        h = s.useCallback(() => {
            m(), b(!0), (u.current = ee.A.keyboardModeEnabled), i || a(t);
        }, [m, b, i, a, t]);
    return (0, l.jsx)(Q.Y, {
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
            return (0, l.jsx)("div", { onMouseEnter: S, onMouseLeave: p, children: o({ onClose: t }) });
        },
        children: (e, s) => {
            let { isShown: a } = s,
                o = a ? J.t : X.a;
            return (0, l.jsx)(W.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: n ? t : void 0,
                onClick: h,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: el.Mf,
                "aria-label": r,
                children: (0, l.jsx)("div", {
                    "aria-hidden": "true",
                    className: el.Lj,
                    onMouseEnter: E,
                    onMouseLeave: p,
                    children: (0, l.jsx)(K.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, l.jsxs)("span", {
                            className: el.hP,
                            children: [r, (0, l.jsx)(o, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function eo(e) {
    let { onTabSelect: t, tabs: r, selectedTab: n, selected: a } = e,
        o = s.useRef(null),
        i = s.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: S } = (0, et.A)(100, 100),
        p = s.useCallback(() => {
            (i.current = ee.A.keyboardModeEnabled), d();
        }, [d]),
        m = s.useCallback(() => {
            S(), u(!0), (i.current = ee.A.keyboardModeEnabled);
        }, [S, u]);
    return (0, l.jsx)(Q.Y, {
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
            return (0, l.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, l.jsx)(er, { selectedTab: n, onClose: s, tabs: r, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: r } = t,
                s = r ? J.t : X.a;
            return (0, l.jsx)(W.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: a ? "more" : void 0,
                onClick: m,
                clickableRef: (e) => {
                    null != e && null != e.ref && (o.current = e.ref);
                },
                className: L()(el.Mf, el.OS),
                "aria-label": v.intl.string(v.t["UKOtz+"]),
                children: (0, l.jsx)("div", {
                    "aria-hidden": "true",
                    className: el.Lj,
                    onMouseEnter: p,
                    onMouseLeave: b,
                    children: (0, l.jsx)(K.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, l.jsxs)("span", {
                            className: el.hP,
                            children: [v.intl.string(v.t["UKOtz+"]), (0, l.jsx)(s, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ei(e, t, r) {
    return e === r || (null != t.renderSubmenu && (0, k.dF)(r) && e === k.G2.CATALOG);
}
function ec(e) {
    let { className: t, selectedTab: r, tabs: n, onTabSelect: a } = e,
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
        C = m.some((e) => ei(e.tab, e, r));
    return (0, l.jsxs)("div", {
        className: L()(el.kL, t),
        ref: E,
        children: [
            (0, l.jsxs)("div", {
                className: el.Kk,
                "aria-hidden": "true",
                children: [
                    n.map((e, t) =>
                        (0, l.jsx)(
                            V.Ae,
                            {
                                index: t,
                                onItemLayout: d,
                                children: (0, l.jsx)(en, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ei(e.tab, e, r),
                                    handleTransition: a,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, l.jsx)("div", {
                        ref: S,
                        children: (0, l.jsx)(eo, { tabs: m, onTabSelect: a, selectedTab: r, selected: C }),
                    }),
                ],
            }),
            f &&
                (0, l.jsxs)(W.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: r,
                    onItemSelect: a,
                    className: el.vR,
                    children: [
                        p.map((e) =>
                            (0, l.jsx)(
                                en,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ei(e.tab, e, r),
                                    handleTransition: a,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== m.length
                            ? (0, l.jsx)(eo, { tabs: m, onTabSelect: a, selectedTab: r, selected: C })
                            : null,
                    ],
                }),
        ],
    });
}
var eu = r(627363),
    ed = r(587895),
    eb = r(733391),
    eS = r(832163);
r(801416);
var ep = r(188275),
    em = r(518477),
    eE = r(773743);
function eh(e) {
    let { selectedTab: t, handleTransition: r } = e,
        I = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
        { enabled: L } = (0, C.Z)({ location: "collectibles_shop_header_bar" }),
        R = (function (e) {
            let { location: t } = e,
                { enabled: r, useGameShopsDropdown: l } = m.useConfig({ location: t });
            return r && !l;
        })({ location: "collectibles_shop_header_bar" }),
        j = (function (e) {
            let { location: t } = e,
                { enabled: r, useGameShopsDropdown: l } = m.useConfig({ location: t });
            return r && l;
        })({ location: "collectibles_shop_header_bar" }),
        G = (0, O.sk)("CollectiblesShopHeaderBar"),
        M = (0, y.uM)(),
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
            T.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                r = (0, y.uM)(),
                l = (0, a.yK)(
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
                    l.length > 0 &&
                        eu.Ay.fetchApplications(
                            l.map((e) => e.applicationId),
                            !1,
                        );
                }, [l]);
            let n = s.useCallback(
                (e) => {
                    T.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: r?.sessionId,
                        page_type: k.G2.GAME_SHOPS,
                        page_category: r?.pageCategory,
                        page_section: r?.pageSection,
                        tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                        cta_name: "go_to_game_shop",
                    }),
                        (0, E.default)({ guildId: e }).catch(() => {});
                },
                [r],
            );
            return (0, a.bG)(
                [ed.A],
                () =>
                    l.flatMap((e) => {
                        let t = ed.A.getApplication(e.applicationId)?.name;
                        return null == t ? [] : [{ id: e.guildId, label: t, onSelect: () => n(e.guildId) }];
                    }),
                [l, n],
            );
        })({ enabled: j }),
        W = Y.length > 0,
        Q = s.useMemo(() => {
            let e = [
                { tab: k.G2.HOME, label: v.intl.string(v.t["xNiB/O"]) },
                {
                    tab: k.G2.CATALOG,
                    label: v.intl.string(v.t.Ah5sJo),
                    renderSubmenu: (e) => {
                        let { onClose: s } = e;
                        return (0, l.jsx)(w, { handleTransition: r, onClose: s, selectedTab: t, itemTypeFilters: B });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: s } = e;
                        return (function (e) {
                            let {
                                    selectedTab: t,
                                    itemTypeFilters: r,
                                    canViewProfileFrames: s,
                                    onTabSelect: n,
                                    onClose: a,
                                } = e,
                                o = $(t, r);
                            return N.filter((e) => {
                                let { tab: t } = e;
                                return s || t !== k.G2.PROFILE_FRAMES;
                            }).map((e) => {
                                let { tab: t, labelKey: r } = e,
                                    s = t === o;
                                return (0, l.jsx)(
                                    x.Dr,
                                    {
                                        id: t,
                                        label: v.intl.string(r),
                                        badge: t === k.G2.PROFILE_FRAMES ? "new" : void 0,
                                        trailingIndicator: s ? { type: "icon", icon: P.U } : void 0,
                                        action: () => {
                                            n(t), a();
                                        },
                                    },
                                    t,
                                );
                            });
                        })({ selectedTab: t, itemTypeFilters: B, canViewProfileFrames: G, onTabSelect: r, onClose: s });
                    },
                },
            ];
            return (
                L && e.push({ tab: k.G2.ORBS, label: v.intl.string(v.t.EBYkzk) }),
                R
                    ? e.push({ tab: k.G2.RIVALS, label: v.intl.string(v.t["kq/75v"]), icon: o.I })
                    : W &&
                      e.push({
                          tab: k.G2.GAME_SHOPS,
                          label: v.intl.string(v.t.FkjcWY),
                          submenuOnly: !0,
                          renderSubmenu: (e) => {
                              let { onClose: t } = e;
                              return (0, l.jsx)(F, { shops: Y, onClose: t });
                          },
                          renderOverflowContent: (e) => {
                              let { onClose: t } = e;
                              return (function (e) {
                                  let { shops: t, onClose: r } = e;
                                  return t.map((e) =>
                                      (0, l.jsx)(
                                          x.Dr,
                                          {
                                              id: e.id,
                                              label: e.label,
                                              trailingIndicator: { type: "icon", icon: o.I },
                                              action: () => {
                                                  e.onSelect(), r();
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
        }, [L, R, W, r, Y, t, B, G]),
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
                e === k.G2.RIVALS ? K() : r(e);
            },
            [r, K],
        );
    return (0, l.jsx)("div", {
        ref: H,
        children: (0, l.jsxs)(S.A, {
            disableDoubleClick: !0,
            className: eE.jr,
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(z, { handleTransition: r, selectedTab: t, isNarrow: U, hasText: "" !== D }),
                    (0, l.jsx)(i.D, {
                        className: eE.ij,
                        onClick: Z,
                        "aria-label": v.intl.string(v.t["7lZ31J"]),
                        children: (0, l.jsx)(c.C, { size: "xs", color: "currentColor" }),
                    }),
                    L &&
                        (0, l.jsx)(g.SS, {
                            analyticsPage: J,
                            cardAlignment: g.SS.CardAlignment.END,
                            ctaText: v.intl.string(v.t.VC4Mq0),
                            ctaOnClick: X,
                        }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, l.jsx)(i.D, {
                    className: eE.sU,
                    onClick: () => r(k.G2.HOME),
                    "aria-label": v.intl.string(v.t["5upuqx"]),
                    children: (0, l.jsx)(u.U, { size: "md", color: d.A.colors.TEXT_DEFAULT }),
                }),
                (0, l.jsx)(ec, { tabs: Q, selectedTab: t, onTabSelect: ee }),
            ],
        }),
    });
}
