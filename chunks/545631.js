(l.d(t, { G: () => ek }), l(321073));
var n = l(477900),
    a = l(582128),
    i = l(696292),
    s = l(17928),
    r = l(939249),
    o = l(926268),
    c = l(34188),
    u = l(661531),
    d = l(770178),
    b = l(196736),
    E = l(742589),
    S = l(617986),
    m = l(945810);
let C = (0, m.mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function A(e) {
    let { location: t } = e;
    return C.useConfig({ location: t }).enabled;
}
var p = l(402860),
    O = l(318346),
    g = l(70926),
    L = l(287809);
let f = (0, m.mj)({
    name: "2026-09-collectibles-navigation-menu",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function h(e) {
    return f.useConfig({ location: e }).enabled;
}
var _ = l(80151),
    x = l(365491),
    G = l(503698),
    I = l.n(G),
    T = l(477782),
    y = l(980707),
    R = l(146919),
    j = l(375708);
function k(e) {
    let { shops: t, onClose: l } = e,
        a = (0, R.yB)("CollectiblesGameShopsContextMenu");
    return (0, n.jsx)("div", {
        className: I()({ [R.jP]: a }),
        children: (0, n.jsx)(y.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: I()({ [R.jP]: a }),
            onClose: l,
            "aria-label": j.intl.string(j.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, n.jsx)(
                    T.Dr,
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
var v = l(278416),
    M = l(758836);
let B = [
    { tab: M.G2.OFFER_ELIGIBLE, labelKey: j.t.hY8Ft1 },
    { tab: M.G2.AVATAR_DECORATIONS, labelKey: j.t.dRZYNE },
    { tab: M.G2.NAMEPLATES, labelKey: j.t.V68Fqz },
    { tab: M.G2.PROFILE_EFFECTS, labelKey: j.t["1cNjtx"] },
    { tab: M.G2.PROFILE_FRAMES, labelKey: j.t.ecTJkR },
    { tab: M.G2.BUNDLES, labelKey: j.t.FYFpps },
    { tab: M.G2.COLLABS, labelKey: j.t["+W8gb+"] },
    { tab: M.G2.CATALOG, labelKey: j.t.xFcotU },
];
function N(e) {
    return e === M.G2.OFFER_ELIGIBLE ? v.TagIcon : void 0;
}
function F(e) {
    let { hasActivePromotion: t } = e;
    return B.filter((e) => {
        let { tab: l } = e;
        return l !== M.G2.OFFER_ELIGIBLE || !!t;
    });
}
function P(e) {
    let { handleTransition: t, onClose: l } = e,
        a = (0, R.yB)("CollectiblesIndexPageContextMenu"),
        i = F({ hasActivePromotion: null != (0, _.A)() });
    return (0, n.jsx)("div", {
        className: I()({ [R.jP]: a }),
        children: (0, n.jsx)(y.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: I()({ [R.jP]: a }),
            onClose: l,
            "aria-label": j.intl.string(j.t.xFcotU),
            onSelect: () => {},
            children: i.map((e) => {
                let { tab: l, labelKey: a } = e,
                    i = N(l);
                return (0, n.jsx)(
                    T.Dr,
                    {
                        id: l,
                        label: j.intl.string(a),
                        badge: l === M.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: null != i ? { type: "icon", icon: i } : void 0,
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
var H = l(7689),
    w = l(683438),
    D = l(773669),
    V = l(174459),
    U = l(440938),
    z = l(652215),
    K = l(848913);
function q(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: i, hasText: o } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, x.v)(),
        [b, E] = a.useState(""),
        S = (0, U.uM)(),
        m = (0, s.bG)([D.default], () => D.default.locale),
        C = a.useRef(null),
        [A, p] = a.useState(!1);
    (a.useEffect(() => {
        let e = setTimeout(() => {
            d(b);
        }, 250);
        return () => clearTimeout(e);
    }, [b, d]),
        a.useEffect(() => {
            E(c);
        }, [c]),
        a.useEffect(() => {
            p(i && o);
        }, [i, o]));
    let O = a.useCallback(
            (e) => {
                "Enter" === e.key && d(b);
            },
            [b, d],
        ),
        g = a.useCallback(
            (e) => {
                V.default.track(z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: S?.sessionId,
                    page_section: S?.pageSection,
                    page_category: S?.pageCategory,
                    page_index: S?.pageIndex,
                    page_size: S?.pageSize,
                    cta_name: e,
                    page_type: l,
                });
            },
            [l, S],
        ),
        L = a.useCallback(() => {
            (l !== M.G2.CATALOG && t(M.G2.CATALOG), g(M.uY.SEARCH_ICON), p(!0), setTimeout(() => C.current?.focus()));
        }, [l, t, g]),
        f = a.useCallback(() => {
            (l !== M.G2.CATALOG && t(M.G2.CATALOG), g(M.uY.SEARCH_BAR));
        }, [l, t, g]),
        h = a.useCallback(() => {
            (E(""), d(""), g(M.uY.SEARCH_BAR_CLEAR), i && p(!1));
        }, [d, g, i]),
        _ = a.useCallback(() => {
            i && "" === b && p(!1);
        }, [i, b]),
        G = i && !A,
        T = (0, n.jsx)(r.D, {
            className: K.qc,
            onClick: L,
            children: (0, n.jsx)(H.MagnifyingGlassIcon, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        y = (0, n.jsx)(w.I, {
            size: "sm",
            ref: C,
            onKeyDown: O,
            query: b,
            onChange: E,
            onClear: h,
            onBlur: _,
            placeholder: "en-US" === m ? j.intl.string(j.t.arz34K) : j.intl.string(j.t["hIt/Nm"]),
        }),
        R = { "--custom-search-bar-width": `${M.rr}px`, "--custom-search-bar-icon-width": `${M.Dy}px` };
    return G
        ? (0, n.jsx)("div", { style: R, children: T })
        : (0, n.jsx)("div", {
              className: I()(K.ON, { [K.Nz]: A }),
              style: R,
              children: (0, n.jsx)(r.D, { ignoreKeyPress: !0, onClick: f, children: y }),
          });
}
var W = l(3666),
    Y = l(834730),
    X = l(812993),
    J = l(761508),
    Q = l(922016),
    Z = l(900797),
    $ = l(847374),
    ee = l(955572),
    et = l(775602),
    el = l(421773),
    en = l(478016);
function ea(e) {
    let { tabs: t, selectedTab: l, onTabSelect: a, onClose: i, showOrbRentalNewBadge: s } = e;
    return (0, n.jsx)(y.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": j.intl.string(j.t["UKOtz+"]),
        hideScroller: !0,
        onClose: i,
        onSelect: i,
        children: (0, n.jsx)(
            T.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: r, renderOverflowContent: o, trailingBadge: c } = e;
                    if (null != o)
                        return (0, n.jsx)(T.Dr, { id: t, label: r, hasSubmenu: !0, children: o({ onClose: i }) }, t);
                    let u = null != c ? "beta" : t === M.G2.ORBS && s ? "new" : void 0;
                    return (0, n.jsx)(
                        T.Dr,
                        {
                            id: t,
                            label: r,
                            trailingIndicator: t === l ? { type: "icon", icon: en.U } : void 0,
                            badge: u,
                            action: () => a(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
var ei = l(997807);
function es(e) {
    let { label: t, icon: l, showNewBadge: a } = e;
    return (0, n.jsxs)(Y.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != l
                ? (0, n.jsxs)("span", {
                      className: ei.nt,
                      children: [t, (0, n.jsx)(l, { size: "xs", color: "currentColor" })],
                  })
                : t,
            a && (0, n.jsx)(X.Lp, { text: j.intl.string(j.t.y2b7CA), className: ei.Ad }),
        ],
    });
}
function er(e) {
    let {
        tab: t,
        label: l,
        selected: a,
        handleTransition: i,
        renderSubmenu: s,
        submenuOnly: r,
        showNewBadge: o,
        icon: c,
        trailingBadge: u,
    } = e;
    if (null != s)
        return (0, n.jsx)(eo, { tab: t, label: l, selected: a, handleTransition: i, renderSubmenu: s, submenuOnly: r });
    let d = (0, n.jsx)(J.V.Item, {
        id: t,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: a ? t : void 0,
        onClick: () => i(t),
        className: ei.Mf,
        "aria-label": l,
        children: (0, n.jsx)(es, { label: l, icon: c, showNewBadge: o }),
    });
    return null != u
        ? (0, n.jsxs)("div", {
              className: ei.ju,
              children: [d, (0, n.jsx)(X.Lp, { disableColor: !0, text: u, className: ei.qe })],
          })
        : d;
}
function eo(e) {
    let { tab: t, label: l, selected: i, handleTransition: s, renderSubmenu: r, submenuOnly: o } = e,
        c = a.useRef(null),
        u = a.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: E, onMouseLeave: S, cancelTimers: m } = (0, el.A)(100, 100),
        C = a.useCallback(() => {
            ((u.current = et.Ay.keyboardModeEnabled), E());
        }, [E]),
        A = a.useCallback(() => {
            (m(), b(!0), (u.current = et.Ay.keyboardModeEnabled), o || s(t));
        }, [m, b, o, s, t]);
    return (0, n.jsx)(Q.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            (m(), b(!0), (u.current = et.Ay.keyboardModeEnabled));
        },
        onRequestClose: () => {
            (u.current && !et.Ay.keyboardModeEnabled && (0, ee.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus()));
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)("div", { onMouseEnter: E, onMouseLeave: S, children: r({ onClose: t }) });
        },
        children: (e, a) => {
            let { isShown: s } = a,
                r = s ? Z.t : $.a;
            return (0, n.jsx)(J.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: i ? t : void 0,
                onClick: A,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: ei.Mf,
                "aria-label": l,
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: ei.Lj,
                    onMouseEnter: C,
                    onMouseLeave: S,
                    children: (0, n.jsx)(Y.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: ei.hP,
                            children: [l, (0, n.jsx)(r, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ec(e) {
    let { onTabSelect: t, tabs: l, selectedTab: i, selected: s } = e,
        r = a.useRef(null),
        o = a.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: E } = (0, el.A)(100, 100),
        S = a.useCallback(() => {
            ((o.current = et.Ay.keyboardModeEnabled), d());
        }, [d]),
        m = a.useCallback(() => {
            (E(), u(!0), (o.current = et.Ay.keyboardModeEnabled));
        }, [E, u]);
    return (0, n.jsx)(Q.Y, {
        targetElementRef: r,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            (E(), u(!0), (o.current = et.Ay.keyboardModeEnabled));
        },
        onRequestClose: () => {
            (o.current && !et.Ay.keyboardModeEnabled && (0, ee.uS)(),
                u(!1),
                requestAnimationFrame(() => r.current?.focus()));
        },
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, n.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, n.jsx)(ea, { selectedTab: i, onClose: a, tabs: l, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: l } = t,
                a = l ? Z.t : $.a;
            return (0, n.jsx)(J.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: s ? "more" : void 0,
                onClick: m,
                clickableRef: (e) => {
                    null != e && null != e.ref && (r.current = e.ref);
                },
                className: I()(ei.Mf, ei.OS),
                "aria-label": j.intl.string(j.t["UKOtz+"]),
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: ei.Lj,
                    onMouseEnter: S,
                    onMouseLeave: b,
                    children: (0, n.jsx)(Y.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: ei.hP,
                            children: [j.intl.string(j.t["UKOtz+"]), (0, n.jsx)(a, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function eu(e, t, l) {
    return e === l || (null != t.renderSubmenu && (0, M.dF)(l) && e === M.G2.CATALOG);
}
function ed(e) {
    let { className: t, selectedTab: l, tabs: i, onTabSelect: s } = e,
        [r, o] = a.useState(0),
        c = a.useRef(r),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: E,
        } = (0, W.Wv)({ items: i, itemGapPx: 32, maxLines: 1, containerWidth: r }),
        S = a.useMemo(() => i.slice(0, u + 1), [u, i]),
        m = a.useMemo(() => i.slice(u + 1), [u, i]),
        C = a.useRef(null),
        A = a.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (o(t), (c.current = t));
        }, []);
    (0, d.g)(C, A);
    let p = 0 !== r,
        O = m.some((e) => eu(e.tab, e, l));
    return (0, n.jsxs)("div", {
        className: I()(ei.kL, t),
        ref: C,
        children: [
            (0, n.jsxs)("div", {
                className: ei.Kk,
                "aria-hidden": "true",
                children: [
                    i.map((e, t) =>
                        (0, n.jsx)(
                            W.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, n.jsx)(er, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: eu(e.tab, e, l),
                                    handleTransition: s,
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
                        children: (0, n.jsx)(ec, { tabs: m, onTabSelect: s, selectedTab: l, selected: O }),
                    }),
                ],
            }),
            p &&
                (0, n.jsxs)(J.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: s,
                    className: ei.vR,
                    children: [
                        S.map((e) =>
                            (0, n.jsx)(
                                er,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: eu(e.tab, e, l),
                                    handleTransition: s,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                    trailingBadge: e.trailingBadge,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== m.length
                            ? (0, n.jsx)(ec, { tabs: m, onTabSelect: s, selectedTab: l, selected: O })
                            : null,
                    ],
                }),
        ],
    });
}
var eb = l(173127),
    eE = l(976860),
    eS = l(50920),
    em = l(288106),
    eC = l(223311),
    eA = l(65238),
    ep = l(151115),
    eO = l(812729),
    eg = l.n(eO),
    eL = l(627363),
    ef = l(587895),
    eh = l(733391),
    e_ = l(832163),
    ex = l(44724),
    eG = l(486020);
function eI(e) {
    let { enabled: t } = e,
        l = (0, U.uM)(),
        n = (0, s.yK)(
            [e_.A],
            () => (t ? (e_.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled) : []),
            [t],
        );
    (a.useEffect(() => {
        t && (0, eh.Xw)();
    }, [t]),
        a.useEffect(() => {
            n.length > 0 &&
                eL.Ay.fetchApplications(
                    n.map((e) => e.applicationId),
                    !1,
                );
        }, [n]));
    let i = a.useCallback(
            (e) => {
                (V.default.track(z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_type: M.G2.GAME_SHOPS,
                    page_category: l?.pageCategory,
                    page_section: l?.pageSection,
                    tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                    cta_name: "go_to_game_shop",
                }),
                    (0, ex.default)({ applicationId: e }).catch(() => {}));
            },
            [l],
        ),
        r = (0, s.bG)(
            [ef.A],
            () =>
                n.flatMap((e) => {
                    let t = ef.A.getApplication(e.applicationId),
                        l = t?.name;
                    return null == l
                        ? []
                        : [
                              {
                                  id: e.applicationId,
                                  label: l,
                                  iconSrc:
                                      t?.icon != null
                                          ? eG.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                          : void 0,
                              },
                          ];
                }),
            [n],
            eg(),
        );
    return {
        gameShops: a.useMemo(() => r.map((e) => ({ ...e, onSelect: () => i(e.id) })), [r, i]),
        hasGameShops: n.length > 0,
    };
}
var eT = l(344045);
let ey = "useCollectiblesShopNavigationMenuOptions";
l(801416);
var eR = l(518477),
    ej = l(835018);
function ek(e) {
    let { selectedTab: t, selectedCollectionId: l, handleTransition: m } = e,
        C = (0, s.bG)([L.default], () => L.default.getCurrentUser()),
        f = A({ location: "collectibles_shop_header_bar" }),
        G = null != (0, _.A)(),
        { searchQuery: I } = (0, x.v)(),
        y = a.useRef(null),
        [R, v] = a.useState(!1);
    (0, d.g)(
        y,
        a.useCallback((e) => {
            v(e.contentRect.width < 800);
        }, []),
    );
    let { gameShops: B, hasGameShops: H } = eI({ enabled: f }),
        w = (0, b.H)({ location: "collectibles_shop_header_bar" }),
        D = h("collectibles_shop_header_bar"),
        V = a.useMemo(() => {
            if (D) return [];
            let e = [
                { tab: M.G2.HOME, label: j.intl.string(j.t["xNiB/O"]) },
                {
                    tab: M.G2.CATALOG,
                    label: j.intl.string(j.t.FshAeN),
                    renderSubmenu: (e) => {
                        let { onClose: t } = e;
                        return (0, n.jsx)(P, { handleTransition: m, onClose: t });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: t } = e;
                        return (function (e) {
                            let { hasActivePromotion: t, onTabSelect: l, onClose: a } = e;
                            return F({ hasActivePromotion: t }).map((e) => {
                                let { tab: t, labelKey: i } = e,
                                    s = N(t);
                                return (0, n.jsx)(
                                    T.Dr,
                                    {
                                        id: t,
                                        label: j.intl.string(i),
                                        badge: t === M.G2.PROFILE_FRAMES ? "new" : void 0,
                                        trailingIndicator: null != s ? { type: "icon", icon: s } : void 0,
                                        action: () => {
                                            (l(t), a());
                                        },
                                    },
                                    t,
                                );
                            });
                        })({ hasActivePromotion: G, onTabSelect: m, onClose: t });
                    },
                },
            ];
            return (
                e.push({ tab: M.G2.ORBS, label: j.intl.string(j.t.EBYkzk) }),
                f &&
                    H &&
                    e.push({
                        tab: M.G2.GAME_SHOPS,
                        label: j.intl.string(j.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, n.jsx)(k, { shops: B, onClose: t });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: t } = e;
                            return (function (e) {
                                let { shops: t, onClose: l } = e;
                                return t.map((e) =>
                                    (0, n.jsx)(
                                        T.Dr,
                                        {
                                            id: e.id,
                                            label: e.label,
                                            leadingAccessory:
                                                null != e.iconSrc ? { type: "image", src: e.iconSrc } : void 0,
                                            action: () => {
                                                (e.onSelect(), l());
                                            },
                                        },
                                        e.id,
                                    ),
                                );
                            })({ shops: B, onClose: t });
                        },
                    }),
                w &&
                    e.push({
                        tab: M.G2.GAME_SERVERS,
                        label: j.intl.string(eT.default.vCzwM7),
                        trailingBadge: j.intl.string(j.t.oW0eUd),
                    }),
                e
            );
        }, [D, m, B, G, f, H, w]),
        U = t === M.G2.ORBS ? z.liQ.SHOP_ORBS_TAB : z.liQ.COLLECTIBLES_SHOP,
        K = a.useCallback(() => {
            ((0, O.Y)({ pageType: U, sectionType: z.JJy.ORBS_BALANCE_MENU, ctaObject: z.ZSU.CTA_TO_QUEST_HOME }),
                (0, S.mA)({ fromContent: i.u.ORBS_BALANCE_MENU }));
        }, [U]),
        W = a.useCallback(() => {
            C?.id != null && (0, p.openUserProfileModal)({ userId: C.id, tabSection: eR.RP.WISHLIST });
        }, [C?.id]),
        Y = a.useCallback(
            (e) => {
                m(e);
            },
            [m],
        ),
        X = (function (e) {
            let t,
                l,
                n,
                i,
                s,
                r,
                o,
                c = h(ey),
                u = (0, b.H)({ location: ey }),
                d = A({ location: ey }),
                { gameShops: E, hasGameShops: S } = eI({ enabled: d }),
                m = null != (0, _.A)(),
                C = (0, eS.a)(ey),
                p =
                    ((t = (0, eC.A)(z.FYj)),
                    (l = (0, eA.XF)(t)),
                    (n = l?.shared.navigation?.tab),
                    (i = n?.title),
                    (s = n?.icon),
                    (r = l?.collectionId),
                    (o = t?.rewardStatus),
                    a.useMemo(
                        () =>
                            null == i || null == r || o === em.GM.CONSUMED
                                ? null
                                : { title: i, icon: s, collectionId: r },
                        [i, s, r, o],
                    ));
            return a.useMemo(() => {
                if (!c) return [];
                let t = F({ hasActivePromotion: m }).map((t) => {
                        let { tab: l, labelKey: n } = t,
                            a = N(l);
                        return {
                            type: "page",
                            key: l,
                            text: j.intl.string(n),
                            onClick: () => e(l),
                            badge: l === M.G2.PROFILE_FRAMES ? "new" : void 0,
                            trailingIndicator: null != a ? { type: "icon", icon: a } : void 0,
                        };
                    }),
                    l = [
                        {
                            type: "page",
                            key: M.G2.HOME,
                            text: j.intl.string(j.t["xNiB/O"]),
                            route: z.BVt.COLLECTIBLES_SHOP_WITH_TAB(M.G2.HOME),
                            onClick: () => e(M.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: M.G2.CATALOG,
                            text: j.intl.string(j.t.FshAeN),
                            route: z.BVt.COLLECTIBLES_SHOP_WITH_TAB(M.G2.CATALOG),
                            onClick: () => e(M.G2.CATALOG),
                            expandLabel: j.intl.string(j.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: M.G2.ORBS,
                            text: j.intl.string(j.t.EBYkzk),
                            route: z.BVt.COLLECTIBLES_SHOP_WITH_TAB(M.G2.ORBS),
                            onClick: () => e(M.G2.ORBS),
                        },
                    ];
                if (
                    (d &&
                        S &&
                        l.push({
                            type: "menu",
                            key: M.G2.GAME_SHOPS,
                            text: j.intl.string(j.t.FkjcWY),
                            expandLabel: j.intl.string(j.t.bf9uMH),
                            options: E.map((e) => ({
                                type: "page",
                                key: e.id,
                                text: e.label,
                                iconSrc: e.iconSrc,
                                onClick: e.onSelect,
                            })),
                        }),
                    u &&
                        l.push({
                            type: "page",
                            key: M.G2.GAME_SERVERS,
                            text: j.intl.string(eT.default.vCzwM7),
                            route: z.BVt.COLLECTIBLES_SHOP_WITH_TAB(M.G2.GAME_SERVERS),
                            onClick: () => e(M.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != p && C)
                ) {
                    let e = z.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(p.collectionId),
                        t = (0, ep.sj)(p.icon);
                    l.push({
                        type: "page",
                        key: M.G2.PROMOTION,
                        text: p.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, eE.pX)(e),
                    });
                }
                return l;
            }, [c, e, m, C, p, u, d, S, E]);
        })(Y),
        J = a.useMemo(() => {
            if (null == l) return !1;
            let e = X.find((e) => e.key === M.G2.PROMOTION);
            if (null == e) return !1;
            let t = z.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l);
            return e.route === t;
        }, [X, l])
            ? M.G2.PROMOTION
            : t;
    return (0, n.jsx)("div", {
        ref: y,
        children: (0, n.jsxs)(E.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            className: ej.jr,
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(q, { handleTransition: m, selectedTab: t, isNarrow: R, hasText: "" !== I }),
                    (0, n.jsx)(r.D, {
                        className: ej.ij,
                        onClick: W,
                        "aria-label": j.intl.string(j.t["7lZ31J"]),
                        children: (0, n.jsx)(o.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(g.SS, {
                        analyticsPage: U,
                        cardAlignment: g.SS.CardAlignment.END,
                        ctaText: j.intl.string(j.t.VC4Mq0),
                        ctaOnClick: K,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(r.D, {
                    className: ej.sU,
                    onClick: () => m(M.G2.HOME),
                    "aria-label": j.intl.string(j.t["5upuqx"]),
                    children: (0, n.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                D
                    ? (0, n.jsx)(eb.A, {
                          "aria-label": j.intl.string(j.t["5upuqx"]),
                          className: ej.IV,
                          options: X,
                          selectedKey: J,
                          overflowLabel: j.intl.string(j.t["UKOtz+"]),
                          overflowExpandLabel: j.intl.string(j.t.PEtHiE),
                      })
                    : (0, n.jsx)(ed, { tabs: V, selectedTab: t, onTabSelect: Y }),
            ],
        }),
    });
}
