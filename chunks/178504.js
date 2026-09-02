t.d(l, { G: () => ep }), t(321073);
var n = t(477900),
    a = t(582128),
    s = t(696292),
    r = t(17928),
    i = t(939249),
    o = t(926268),
    c = t(34188),
    u = t(661531),
    d = t(770178),
    b = t(196736),
    E = t(742589),
    m = t(617986);
let S = (0, t(945810).mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var A = t(402860),
    C = t(318346),
    h = t(70926),
    f = t(287809),
    p = t(13875),
    g = t(80151),
    x = t(365491),
    L = t(503698),
    O = t.n(L),
    _ = t(477782),
    j = t(980707),
    G = t(146919),
    I = t(375708);
function R(e) {
    let { shops: l, onClose: t } = e,
        a = (0, G.yB)("CollectiblesGameShopsContextMenu");
    return (0, n.jsx)("div", {
        className: O()({ [G.jP]: a }),
        children: (0, n.jsx)(j.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: O()({ [G.jP]: a }),
            onClose: t,
            "aria-label": I.intl.string(I.t.FkjcWY),
            onSelect: () => {},
            children: l.map((e) =>
                (0, n.jsx)(
                    _.Dr,
                    {
                        id: e.id,
                        label: e.label,
                        leadingAccessory: null != e.iconSrc ? { type: "image", src: e.iconSrc } : void 0,
                        action: e.onSelect,
                    },
                    e.id,
                ),
            ),
        }),
    });
}
var T = t(278416),
    y = t(758836);
let v = [
    { tab: y.G2.OFFER_ELIGIBLE, labelKey: I.t.hY8Ft1 },
    { tab: y.G2.AVATAR_DECORATIONS, labelKey: I.t.dRZYNE },
    { tab: y.G2.NAMEPLATES, labelKey: I.t.V68Fqz },
    { tab: y.G2.PROFILE_EFFECTS, labelKey: I.t["1cNjtx"] },
    { tab: y.G2.PROFILE_FRAMES, labelKey: I.t.ecTJkR },
    { tab: y.G2.BUNDLES, labelKey: I.t.FYFpps },
    { tab: y.G2.COLLABS, labelKey: I.t["+W8gb+"] },
    { tab: y.G2.CATALOG, labelKey: I.t.xFcotU },
];
function k(e) {
    return e === y.G2.OFFER_ELIGIBLE ? T.TagIcon : void 0;
}
function M(e) {
    let { canViewProfileFrames: l, hasActivePromotion: t } = e;
    return v.filter((e) => {
        let { tab: n } = e;
        return (n !== y.G2.PROFILE_FRAMES || !!l) && (n !== y.G2.OFFER_ELIGIBLE || !!t);
    });
}
function N(e) {
    let { handleTransition: l, onClose: t } = e,
        a = (0, G.yB)("CollectiblesIndexPageContextMenu"),
        s = M({
            canViewProfileFrames: (0, p.sk)("CollectiblesIndexPageContextMenu"),
            hasActivePromotion: null != (0, g.A)(),
        });
    return (0, n.jsx)("div", {
        className: O()({ [G.jP]: a }),
        children: (0, n.jsx)(j.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: O()({ [G.jP]: a }),
            onClose: t,
            "aria-label": I.intl.string(I.t.xFcotU),
            onSelect: () => {},
            children: s.map((e) => {
                let { tab: t, labelKey: a } = e,
                    s = k(t);
                return (0, n.jsx)(
                    _.Dr,
                    {
                        id: t,
                        label: I.intl.string(a),
                        badge: t === y.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: null != s ? { type: "icon", icon: s } : void 0,
                        action: () => {
                            l(t);
                        },
                    },
                    t,
                );
            }),
        }),
    });
}
var F = t(7689),
    B = t(683438),
    P = t(773669),
    w = t(174459),
    D = t(440938),
    H = t(652215),
    U = t(848913);
function z(e) {
    let { handleTransition: l, selectedTab: t, isNarrow: s, hasText: o } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, x.v)(),
        [b, E] = a.useState(""),
        m = (0, D.uM)(),
        S = (0, r.bG)([P.default], () => P.default.locale),
        A = a.useRef(null),
        [C, h] = a.useState(!1);
    a.useEffect(() => {
        let e = setTimeout(() => {
            d(b);
        }, 250);
        return () => clearTimeout(e);
    }, [b, d]),
        a.useEffect(() => {
            E(c);
        }, [c]),
        a.useEffect(() => {
            h(s && o);
        }, [s, o]);
    let f = a.useCallback(
            (e) => {
                "Enter" === e.key && d(b);
            },
            [b, d],
        ),
        p = a.useCallback(
            (e) => {
                w.default.track(H.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: m?.sessionId,
                    page_section: m?.pageSection,
                    page_category: m?.pageCategory,
                    page_index: m?.pageIndex,
                    page_size: m?.pageSize,
                    cta_name: e,
                    page_type: t,
                });
            },
            [t, m],
        ),
        g = a.useCallback(() => {
            t !== y.G2.CATALOG && l(y.G2.CATALOG), p(y.uY.SEARCH_ICON), h(!0), setTimeout(() => A.current?.focus());
        }, [t, l, p]),
        L = a.useCallback(() => {
            t !== y.G2.CATALOG && l(y.G2.CATALOG), p(y.uY.SEARCH_BAR);
        }, [t, l, p]),
        _ = a.useCallback(() => {
            E(""), d(""), p(y.uY.SEARCH_BAR_CLEAR), s && h(!1);
        }, [d, p, s]),
        j = a.useCallback(() => {
            s && "" === b && h(!1);
        }, [s, b]),
        G = s && !C,
        R = (0, n.jsx)(i.D, {
            className: U.qc,
            onClick: g,
            children: (0, n.jsx)(F.MagnifyingGlassIcon, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        T = (0, n.jsx)(B.I, {
            size: "sm",
            ref: A,
            onKeyDown: f,
            query: b,
            onChange: E,
            onClear: _,
            onBlur: j,
            placeholder: "en-US" === S ? I.intl.string(I.t.arz34K) : I.intl.string(I.t["hIt/Nm"]),
        }),
        v = { "--custom-search-bar-width": `${y.rr}px`, "--custom-search-bar-icon-width": `${y.Dy}px` };
    return G
        ? (0, n.jsx)("div", { style: v, children: R })
        : (0, n.jsx)("div", {
              className: O()(U.ON, { [U.Nz]: C }),
              style: v,
              children: (0, n.jsx)(i.D, { ignoreKeyPress: !0, onClick: L, children: T }),
          });
}
var K = t(3666),
    q = t(834730),
    V = t(812993),
    Y = t(761508),
    W = t(922016),
    J = t(900797),
    Q = t(847374),
    X = t(955572),
    Z = t(775602),
    $ = t(421773),
    ee = t(478016);
function el(e) {
    let { tabs: l, selectedTab: t, onTabSelect: a, onClose: s, showOrbRentalNewBadge: r } = e;
    return (0, n.jsx)(j.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": I.intl.string(I.t["UKOtz+"]),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, n.jsx)(
            _.rX,
            {
                children: l.map((e) => {
                    let { tab: l, label: i, renderOverflowContent: o, trailingBadge: c } = e;
                    if (null != o)
                        return (0, n.jsx)(_.Dr, { id: l, label: i, hasSubmenu: !0, children: o({ onClose: s }) }, l);
                    let u = null != c ? { type: "beta", variant: "brand" } : l === y.G2.ORBS && r ? "new" : void 0;
                    return (0, n.jsx)(
                        _.Dr,
                        {
                            id: l,
                            label: i,
                            trailingIndicator: l === t ? { type: "icon", icon: ee.U } : void 0,
                            badge: u,
                            action: () => a(l),
                        },
                        l,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
var et = t(997807);
function en(e) {
    let { label: l, icon: t, showNewBadge: a } = e;
    return (0, n.jsxs)(q.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != t
                ? (0, n.jsxs)("span", {
                      className: et.nt,
                      children: [l, (0, n.jsx)(t, { size: "xs", color: "currentColor" })],
                  })
                : l,
            a && (0, n.jsx)(V.Lp, { text: I.intl.string(I.t.y2b7CA), className: et.Ad }),
        ],
    });
}
function ea(e) {
    let {
        tab: l,
        label: t,
        selected: a,
        handleTransition: s,
        renderSubmenu: r,
        submenuOnly: i,
        showNewBadge: o,
        icon: c,
        trailingBadge: u,
    } = e;
    if (null != r)
        return (0, n.jsx)(es, { tab: l, label: t, selected: a, handleTransition: s, renderSubmenu: r, submenuOnly: i });
    let d = (0, n.jsx)(Y.V.Item, {
        id: l,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: a ? l : void 0,
        onClick: () => s(l),
        className: et.Mf,
        "aria-label": t,
        children: (0, n.jsx)(en, { label: t, icon: c, showNewBadge: o }),
    });
    return null != u
        ? (0, n.jsxs)("div", {
              className: et.ju,
              children: [d, (0, n.jsx)(V.Lp, { disableColor: !0, text: u, className: et.qe })],
          })
        : d;
}
function es(e) {
    let { tab: l, label: t, selected: s, handleTransition: r, renderSubmenu: i, submenuOnly: o } = e,
        c = a.useRef(null),
        u = a.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: E, onMouseLeave: m, cancelTimers: S } = (0, $.A)(100, 100),
        A = a.useCallback(() => {
            (u.current = Z.Ay.keyboardModeEnabled), E();
        }, [E]),
        C = a.useCallback(() => {
            S(), b(!0), (u.current = Z.Ay.keyboardModeEnabled), o || r(l);
        }, [S, b, o, r, l]);
    return (0, n.jsx)(W.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            S(), b(!0), (u.current = Z.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !Z.Ay.keyboardModeEnabled && (0, X.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)("div", { onMouseEnter: E, onMouseLeave: m, children: i({ onClose: l }) });
        },
        children: (e, a) => {
            let { isShown: r } = a,
                i = r ? J.t : Q.a;
            return (0, n.jsx)(Y.V.Item, {
                ...e,
                id: l,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: s ? l : void 0,
                onClick: C,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: et.Mf,
                "aria-label": t,
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: et.Lj,
                    onMouseEnter: A,
                    onMouseLeave: m,
                    children: (0, n.jsx)(q.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: et.hP,
                            children: [t, (0, n.jsx)(i, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function er(e) {
    let { onTabSelect: l, tabs: t, selectedTab: s, selected: r } = e,
        i = a.useRef(null),
        o = a.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: E } = (0, $.A)(100, 100),
        m = a.useCallback(() => {
            (o.current = Z.Ay.keyboardModeEnabled), d();
        }, [d]),
        S = a.useCallback(() => {
            E(), u(!0), (o.current = Z.Ay.keyboardModeEnabled);
        }, [E, u]);
    return (0, n.jsx)(W.Y, {
        targetElementRef: i,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            E(), u(!0), (o.current = Z.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            o.current && !Z.Ay.keyboardModeEnabled && (0, X.uS)(),
                u(!1),
                requestAnimationFrame(() => i.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, n.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, n.jsx)(el, { selectedTab: s, onClose: a, tabs: t, onTabSelect: l }),
            });
        },
        children: (e, l) => {
            let { isShown: t } = l,
                a = t ? J.t : Q.a;
            return (0, n.jsx)(Y.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: r ? "more" : void 0,
                onClick: S,
                clickableRef: (e) => {
                    null != e && null != e.ref && (i.current = e.ref);
                },
                className: O()(et.Mf, et.OS),
                "aria-label": I.intl.string(I.t["UKOtz+"]),
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: et.Lj,
                    onMouseEnter: m,
                    onMouseLeave: b,
                    children: (0, n.jsx)(q.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: et.hP,
                            children: [I.intl.string(I.t["UKOtz+"]), (0, n.jsx)(a, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ei(e, l, t) {
    return e === t || (null != l.renderSubmenu && (0, y.dF)(t) && e === y.G2.CATALOG);
}
function eo(e) {
    let { className: l, selectedTab: t, tabs: s, onTabSelect: r } = e,
        [i, o] = a.useState(0),
        c = a.useRef(i),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: E,
        } = (0, K.Wv)({ items: s, itemGapPx: 32, maxLines: 1, containerWidth: i }),
        m = a.useMemo(() => s.slice(0, u + 1), [u, s]),
        S = a.useMemo(() => s.slice(u + 1), [u, s]),
        A = a.useRef(null),
        C = a.useCallback((e) => {
            let l = e.contentRect.width;
            null != l && c.current !== l && (o(l), (c.current = l));
        }, []);
    (0, d.g)(A, C);
    let h = 0 !== i,
        f = S.some((e) => ei(e.tab, e, t));
    return (0, n.jsxs)("div", {
        className: O()(et.kL, l),
        ref: A,
        children: [
            (0, n.jsxs)("div", {
                className: et.Kk,
                "aria-hidden": "true",
                children: [
                    s.map((e, l) =>
                        (0, n.jsx)(
                            K.Ae,
                            {
                                index: l,
                                onItemLayout: b,
                                children: (0, n.jsx)(ea, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ei(e.tab, e, t),
                                    handleTransition: r,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                    trailingBadge: e.trailingBadge,
                                }),
                            },
                            e.tab,
                        ),
                    ),
                    (0, n.jsx)("div", {
                        ref: E,
                        children: (0, n.jsx)(er, { tabs: S, onTabSelect: r, selectedTab: t, selected: f }),
                    }),
                ],
            }),
            h &&
                (0, n.jsxs)(Y.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: t,
                    onItemSelect: r,
                    className: et.vR,
                    children: [
                        m.map((e) =>
                            (0, n.jsx)(
                                ea,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ei(e.tab, e, t),
                                    handleTransition: r,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                    trailingBadge: e.trailingBadge,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== S.length
                            ? (0, n.jsx)(er, { tabs: S, onTabSelect: r, selectedTab: t, selected: f })
                            : null,
                    ],
                }),
        ],
    });
}
var ec = t(812729),
    eu = t.n(ec),
    ed = t(627363),
    eb = t(587895),
    eE = t(733391),
    em = t(832163),
    eS = t(44724),
    eA = t(486020);
t(801416);
var eC = t(518477),
    eh = t(632847),
    ef = t(835018);
function ep(e) {
    let { selectedTab: l, handleTransition: t } = e,
        L = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        O = (function (e) {
            let { location: l } = e;
            return S.useConfig({ location: l }).enabled;
        })({ location: "collectibles_shop_header_bar" }),
        j = (0, p.sk)("CollectiblesShopHeaderBar"),
        G = null != (0, g.A)(),
        { searchQuery: T } = (0, x.v)(),
        v = a.useRef(null),
        [F, B] = a.useState(!1);
    (0, d.g)(
        v,
        a.useCallback((e) => {
            B(e.contentRect.width < 800);
        }, []),
    );
    let { gameShops: P, hasGameShops: U } = (function (e) {
            let { enabled: l } = e,
                t = (0, D.uM)(),
                n = (0, r.yK)(
                    [em.A],
                    () =>
                        l
                            ? (em.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled)
                            : [],
                    [l],
                );
            a.useEffect(() => {
                l && (0, eE.Xw)();
            }, [l]),
                a.useEffect(() => {
                    n.length > 0 &&
                        ed.Ay.fetchApplications(
                            n.map((e) => e.applicationId),
                            !1,
                        );
                }, [n]);
            let s = a.useCallback(
                    (e) => {
                        w.default.track(H.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: t?.sessionId,
                            page_type: y.G2.GAME_SHOPS,
                            page_category: t?.pageCategory,
                            page_section: t?.pageSection,
                            tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                            cta_name: "go_to_game_shop",
                        }),
                            (0, eS.default)({ applicationId: e }).catch(() => {});
                    },
                    [t],
                ),
                i = (0, r.bG)(
                    [eb.A],
                    () =>
                        n.flatMap((e) => {
                            let l = eb.A.getApplication(e.applicationId),
                                t = l?.name;
                            return null == t
                                ? []
                                : [
                                      {
                                          id: e.applicationId,
                                          label: t,
                                          iconSrc:
                                              l?.icon != null
                                                  ? eA.Ay.getApplicationIconURL({ id: l.id, icon: l.icon, size: 32 })
                                                  : void 0,
                                      },
                                  ];
                        }),
                    [n],
                    eu(),
                );
            return {
                gameShops: a.useMemo(() => i.map((e) => ({ ...e, onSelect: () => s(e.id) })), [i, s]),
                hasGameShops: n.length > 0,
            };
        })({ enabled: O }),
        K = (0, b.H)({ location: "collectibles_shop_header_bar" }),
        q = a.useMemo(() => {
            let e = [
                { tab: y.G2.HOME, label: I.intl.string(I.t["xNiB/O"]) },
                {
                    tab: y.G2.CATALOG,
                    label: I.intl.string(I.t.FshAeN),
                    renderSubmenu: (e) => {
                        let { onClose: l } = e;
                        return (0, n.jsx)(N, { handleTransition: t, onClose: l });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: l } = e;
                        return (function (e) {
                            let { canViewProfileFrames: l, hasActivePromotion: t, onTabSelect: a, onClose: s } = e;
                            return M({ canViewProfileFrames: l, hasActivePromotion: t }).map((e) => {
                                let { tab: l, labelKey: t } = e,
                                    r = k(l);
                                return (0, n.jsx)(
                                    _.Dr,
                                    {
                                        id: l,
                                        label: I.intl.string(t),
                                        badge: l === y.G2.PROFILE_FRAMES ? "new" : void 0,
                                        trailingIndicator: null != r ? { type: "icon", icon: r } : void 0,
                                        action: () => {
                                            a(l), s();
                                        },
                                    },
                                    l,
                                );
                            });
                        })({ canViewProfileFrames: j, hasActivePromotion: G, onTabSelect: t, onClose: l });
                    },
                },
            ];
            return (
                e.push({ tab: y.G2.ORBS, label: I.intl.string(I.t.EBYkzk) }),
                O &&
                    U &&
                    e.push({
                        tab: y.G2.GAME_SHOPS,
                        label: I.intl.string(I.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: l } = e;
                            return (0, n.jsx)(R, { shops: P, onClose: l });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: l } = e;
                            return (function (e) {
                                let { shops: l, onClose: t } = e;
                                return l.map((e) =>
                                    (0, n.jsx)(
                                        _.Dr,
                                        {
                                            id: e.id,
                                            label: e.label,
                                            leadingAccessory:
                                                null != e.iconSrc ? { type: "image", src: e.iconSrc } : void 0,
                                            action: () => {
                                                e.onSelect(), t();
                                            },
                                        },
                                        e.id,
                                    ),
                                );
                            })({ shops: P, onClose: l });
                        },
                    }),
                K &&
                    e.push({
                        tab: y.G2.GAME_SERVERS,
                        label: I.intl.string(eh.default.vCzwM7),
                        trailingBadge: I.intl.string(I.t.oW0eUd),
                    }),
                e
            );
        }, [t, P, j, G, O, U, K]),
        V = l === y.G2.ORBS ? H.liQ.SHOP_ORBS_TAB : H.liQ.COLLECTIBLES_SHOP,
        Y = a.useCallback(() => {
            (0, C.Y)({ pageType: V, sectionType: H.JJy.ORBS_BALANCE_MENU, ctaObject: H.ZSU.CTA_TO_QUEST_HOME }),
                (0, m.mA)({ fromContent: s.u.ORBS_BALANCE_MENU });
        }, [V]),
        W = a.useCallback(() => {
            L?.id != null && (0, A.openUserProfileModal)({ userId: L.id, tabSection: eC.RP.WISHLIST });
        }, [L?.id]),
        J = a.useCallback(
            (e) => {
                t(e);
            },
            [t],
        );
    return (0, n.jsx)("div", {
        ref: v,
        children: (0, n.jsxs)(E.A, {
            disableDoubleClick: !0,
            className: ef.jr,
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(z, { handleTransition: t, selectedTab: l, isNarrow: F, hasText: "" !== T }),
                    (0, n.jsx)(i.D, {
                        className: ef.ij,
                        onClick: W,
                        "aria-label": I.intl.string(I.t["7lZ31J"]),
                        children: (0, n.jsx)(o.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(h.SS, {
                        analyticsPage: V,
                        cardAlignment: h.SS.CardAlignment.END,
                        ctaText: I.intl.string(I.t.VC4Mq0),
                        ctaOnClick: Y,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(i.D, {
                    className: ef.sU,
                    onClick: () => t(y.G2.HOME),
                    "aria-label": I.intl.string(I.t["5upuqx"]),
                    children: (0, n.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(eo, { tabs: q, selectedTab: l, onTabSelect: J }),
            ],
        }),
    });
}
