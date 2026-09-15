(l.d(t, { G: () => eG }), l(321073));
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
let A = (0, m.mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function C(e) {
    let { location: t } = e;
    return A.useConfig({ location: t }).enabled;
}
var p = l(402860),
    g = l(318346),
    f = l(70926),
    h = l(287809);
let O = (0, m.mj)({
    name: "2026-09-collectibles-navigation-menu",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function L(e) {
    return O.useConfig({ location: e }).enabled;
}
var x = l(80151),
    _ = l(365491),
    G = l(503698),
    T = l.n(G),
    y = l(477782),
    I = l(980707),
    R = l(146919),
    j = l(375708);
function k(e) {
    let { shops: t, onClose: l } = e,
        a = (0, R.yB)("CollectiblesGameShopsContextMenu");
    return (0, n.jsx)("div", {
        className: T()({ [R.jP]: a }),
        children: (0, n.jsx)(I.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: T()({ [R.jP]: a }),
            onClose: l,
            "aria-label": j.intl.string(j.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, n.jsx)(
                    y.Dr,
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
        i = F({ hasActivePromotion: null != (0, x.A)() });
    return (0, n.jsx)("div", {
        className: T()({ [R.jP]: a }),
        children: (0, n.jsx)(I.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: T()({ [R.jP]: a }),
            onClose: l,
            "aria-label": j.intl.string(j.t.xFcotU),
            onSelect: () => {},
            children: i.map((e) => {
                let { tab: l, labelKey: a } = e,
                    i = N(l);
                return (0, n.jsx)(
                    y.Dr,
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
    U = l(174459),
    V = l(440938),
    z = l(652215),
    K = l(848913);
function q(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: i, hasText: o } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, _.v)(),
        [b, E] = a.useState(""),
        S = (0, V.uM)(),
        m = (0, s.bG)([D.default], () => D.default.locale),
        A = a.useRef(null),
        [C, p] = a.useState(!1);
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
    let g = a.useCallback(
            (e) => {
                "Enter" === e.key && d(b);
            },
            [b, d],
        ),
        f = a.useCallback(
            (e) => {
                U.default.track(z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        h = a.useCallback(() => {
            (l !== M.G2.CATALOG && t(M.G2.CATALOG), f(M.uY.SEARCH_ICON), p(!0), setTimeout(() => A.current?.focus()));
        }, [l, t, f]),
        O = a.useCallback(() => {
            (l !== M.G2.CATALOG && t(M.G2.CATALOG), f(M.uY.SEARCH_BAR));
        }, [l, t, f]),
        L = a.useCallback(() => {
            (E(""), d(""), f(M.uY.SEARCH_BAR_CLEAR), i && p(!1));
        }, [d, f, i]),
        x = a.useCallback(() => {
            i && "" === b && p(!1);
        }, [i, b]),
        G = i && !C,
        y = (0, n.jsx)(r.D, {
            className: K.qc,
            onClick: h,
            children: (0, n.jsx)(H.MagnifyingGlassIcon, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        I = (0, n.jsx)(w.I, {
            size: "sm",
            ref: A,
            onKeyDown: g,
            query: b,
            onChange: E,
            onClear: L,
            onBlur: x,
            placeholder: "en-US" === m ? j.intl.string(j.t.arz34K) : j.intl.string(j.t["hIt/Nm"]),
        }),
        R = { "--custom-search-bar-width": `${M.rr}px`, "--custom-search-bar-icon-width": `${M.Dy}px` };
    return G
        ? (0, n.jsx)("div", { style: R, children: y })
        : (0, n.jsx)("div", {
              className: T()(K.ON, { [K.Nz]: C }),
              style: R,
              children: (0, n.jsx)(r.D, { ignoreKeyPress: !0, onClick: O, children: I }),
          });
}
var W = l(3666),
    Y = l(834730),
    J = l(812993),
    Q = l(761508),
    X = l(922016),
    Z = l(900797),
    $ = l(847374),
    ee = l(955572),
    et = l(775602),
    el = l(421773),
    en = l(478016);
function ea(e) {
    let { tabs: t, selectedTab: l, onTabSelect: a, onClose: i, showOrbRentalNewBadge: s } = e;
    return (0, n.jsx)(I.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": j.intl.string(j.t["UKOtz+"]),
        hideScroller: !0,
        onClose: i,
        onSelect: i,
        children: (0, n.jsx)(
            y.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: r, renderOverflowContent: o, trailingBadge: c } = e;
                    if (null != o)
                        return (0, n.jsx)(y.Dr, { id: t, label: r, hasSubmenu: !0, children: o({ onClose: i }) }, t);
                    let u = null != c ? "beta" : t === M.G2.ORBS && s ? "new" : void 0;
                    return (0, n.jsx)(
                        y.Dr,
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
            a && (0, n.jsx)(J.Lp, { text: j.intl.string(j.t.y2b7CA), className: ei.Ad }),
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
    let d = (0, n.jsx)(Q.V.Item, {
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
              children: [d, (0, n.jsx)(J.Lp, { disableColor: !0, text: u, className: ei.qe })],
          })
        : d;
}
function eo(e) {
    let { tab: t, label: l, selected: i, handleTransition: s, renderSubmenu: r, submenuOnly: o } = e,
        c = a.useRef(null),
        u = a.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: E, onMouseLeave: S, cancelTimers: m } = (0, el.A)(100, 100),
        A = a.useCallback(() => {
            ((u.current = et.Ay.keyboardModeEnabled), E());
        }, [E]),
        C = a.useCallback(() => {
            (m(), b(!0), (u.current = et.Ay.keyboardModeEnabled), o || s(t));
        }, [m, b, o, s, t]);
    return (0, n.jsx)(X.Y, {
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
            return (0, n.jsx)(Q.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: i ? t : void 0,
                onClick: C,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: ei.Mf,
                "aria-label": l,
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: ei.Lj,
                    onMouseEnter: A,
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
    return (0, n.jsx)(X.Y, {
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
            return (0, n.jsx)(Q.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: s ? "more" : void 0,
                onClick: m,
                clickableRef: (e) => {
                    null != e && null != e.ref && (r.current = e.ref);
                },
                className: T()(ei.Mf, ei.OS),
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
        A = a.useRef(null),
        C = a.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (o(t), (c.current = t));
        }, []);
    (0, d.g)(A, C);
    let p = 0 !== r,
        g = m.some((e) => eu(e.tab, e, l));
    return (0, n.jsxs)("div", {
        className: T()(ei.kL, t),
        ref: A,
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
                        children: (0, n.jsx)(ec, { tabs: m, onTabSelect: s, selectedTab: l, selected: g }),
                    }),
                ],
            }),
            p &&
                (0, n.jsxs)(Q.V, {
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
                            ? (0, n.jsx)(ec, { tabs: m, onTabSelect: s, selectedTab: l, selected: g })
                            : null,
                    ],
                }),
        ],
    });
}
var eb = l(173127),
    eE = l(812729),
    eS = l.n(eE),
    em = l(627363),
    eA = l(587895),
    eC = l(733391),
    ep = l(832163),
    eg = l(44724),
    ef = l(486020);
function eh(e) {
    let { enabled: t } = e,
        l = (0, V.uM)(),
        n = (0, s.yK)(
            [ep.A],
            () => (t ? (ep.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled) : []),
            [t],
        );
    (a.useEffect(() => {
        t && (0, eC.Xw)();
    }, [t]),
        a.useEffect(() => {
            n.length > 0 &&
                em.Ay.fetchApplications(
                    n.map((e) => e.applicationId),
                    !1,
                );
        }, [n]));
    let i = a.useCallback(
            (e) => {
                (U.default.track(z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_type: M.G2.GAME_SHOPS,
                    page_category: l?.pageCategory,
                    page_section: l?.pageSection,
                    tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                    cta_name: "go_to_game_shop",
                }),
                    (0, eg.default)({ applicationId: e }).catch(() => {}));
            },
            [l],
        ),
        r = (0, s.bG)(
            [eA.A],
            () =>
                n.flatMap((e) => {
                    let t = eA.A.getApplication(e.applicationId),
                        l = t?.name;
                    return null == l
                        ? []
                        : [
                              {
                                  id: e.applicationId,
                                  label: l,
                                  iconSrc:
                                      t?.icon != null
                                          ? ef.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                          : void 0,
                              },
                          ];
                }),
            [n],
            eS(),
        );
    return {
        gameShops: a.useMemo(() => r.map((e) => ({ ...e, onSelect: () => i(e.id) })), [r, i]),
        hasGameShops: n.length > 0,
    };
}
var eO = l(344045);
let eL = "useCollectiblesShopNavigationMenuOptions";
l(801416);
var ex = l(518477),
    e_ = l(835018);
function eG(e) {
    let { selectedTab: t, handleTransition: l } = e,
        m = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
        A = C({ location: "collectibles_shop_header_bar" }),
        O = null != (0, x.A)(),
        { searchQuery: G } = (0, _.v)(),
        T = a.useRef(null),
        [I, R] = a.useState(!1);
    (0, d.g)(
        T,
        a.useCallback((e) => {
            R(e.contentRect.width < 800);
        }, []),
    );
    let { gameShops: v, hasGameShops: B } = eh({ enabled: A }),
        H = (0, b.H)({ location: "collectibles_shop_header_bar" }),
        w = L("collectibles_shop_header_bar"),
        D = a.useMemo(() => {
            if (w) return [];
            let e = [
                { tab: M.G2.HOME, label: j.intl.string(j.t["xNiB/O"]) },
                {
                    tab: M.G2.CATALOG,
                    label: j.intl.string(j.t.FshAeN),
                    renderSubmenu: (e) => {
                        let { onClose: t } = e;
                        return (0, n.jsx)(P, { handleTransition: l, onClose: t });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: t } = e;
                        return (function (e) {
                            let { hasActivePromotion: t, onTabSelect: l, onClose: a } = e;
                            return F({ hasActivePromotion: t }).map((e) => {
                                let { tab: t, labelKey: i } = e,
                                    s = N(t);
                                return (0, n.jsx)(
                                    y.Dr,
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
                        })({ hasActivePromotion: O, onTabSelect: l, onClose: t });
                    },
                },
            ];
            return (
                e.push({ tab: M.G2.ORBS, label: j.intl.string(j.t.EBYkzk) }),
                A &&
                    B &&
                    e.push({
                        tab: M.G2.GAME_SHOPS,
                        label: j.intl.string(j.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, n.jsx)(k, { shops: v, onClose: t });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: t } = e;
                            return (function (e) {
                                let { shops: t, onClose: l } = e;
                                return t.map((e) =>
                                    (0, n.jsx)(
                                        y.Dr,
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
                            })({ shops: v, onClose: t });
                        },
                    }),
                H &&
                    e.push({
                        tab: M.G2.GAME_SERVERS,
                        label: j.intl.string(eO.default.vCzwM7),
                        trailingBadge: j.intl.string(j.t.oW0eUd),
                    }),
                e
            );
        }, [w, l, v, O, A, B, H]),
        U = t === M.G2.ORBS ? z.liQ.SHOP_ORBS_TAB : z.liQ.COLLECTIBLES_SHOP,
        V = a.useCallback(() => {
            ((0, g.Y)({ pageType: U, sectionType: z.JJy.ORBS_BALANCE_MENU, ctaObject: z.ZSU.CTA_TO_QUEST_HOME }),
                (0, S.mA)({ fromContent: i.u.ORBS_BALANCE_MENU }));
        }, [U]),
        K = a.useCallback(() => {
            m?.id != null && (0, p.openUserProfileModal)({ userId: m.id, tabSection: ex.RP.WISHLIST });
        }, [m?.id]),
        W = a.useCallback(
            (e) => {
                l(e);
            },
            [l],
        ),
        Y = (function (e) {
            let t = L(eL),
                l = (0, b.H)({ location: eL }),
                n = C({ location: eL }),
                { gameShops: i, hasGameShops: s } = eh({ enabled: n }),
                r = null != (0, x.A)();
            return a.useMemo(() => {
                if (!t) return [];
                let a = F({ hasActivePromotion: r }).map((t) => {
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
                    o = [
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
                            options: a,
                        },
                        {
                            type: "page",
                            key: M.G2.ORBS,
                            text: j.intl.string(j.t.EBYkzk),
                            route: z.BVt.COLLECTIBLES_SHOP_WITH_TAB(M.G2.ORBS),
                            onClick: () => e(M.G2.ORBS),
                        },
                    ];
                return (
                    n &&
                        s &&
                        o.push({
                            type: "menu",
                            key: M.G2.GAME_SHOPS,
                            text: j.intl.string(j.t.FkjcWY),
                            expandLabel: j.intl.string(j.t.bf9uMH),
                            options: i.map((e) => ({
                                type: "page",
                                key: e.id,
                                text: e.label,
                                iconSrc: e.iconSrc,
                                onClick: e.onSelect,
                            })),
                        }),
                    l &&
                        o.push({
                            type: "page",
                            key: M.G2.GAME_SERVERS,
                            text: j.intl.string(eO.default.vCzwM7),
                            route: z.BVt.COLLECTIBLES_SHOP_WITH_TAB(M.G2.GAME_SERVERS),
                            onClick: () => e(M.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    o
                );
            }, [t, e, r, l, n, s, i]);
        })(W);
    return (0, n.jsx)("div", {
        ref: T,
        children: (0, n.jsxs)(E.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            className: e_.jr,
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(q, { handleTransition: l, selectedTab: t, isNarrow: I, hasText: "" !== G }),
                    (0, n.jsx)(r.D, {
                        className: e_.ij,
                        onClick: K,
                        "aria-label": j.intl.string(j.t["7lZ31J"]),
                        children: (0, n.jsx)(o.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(f.SS, {
                        analyticsPage: U,
                        cardAlignment: f.SS.CardAlignment.END,
                        ctaText: j.intl.string(j.t.VC4Mq0),
                        ctaOnClick: V,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(r.D, {
                    className: e_.sU,
                    onClick: () => l(M.G2.HOME),
                    "aria-label": j.intl.string(j.t["5upuqx"]),
                    children: (0, n.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                w
                    ? (0, n.jsx)(eb.A, {
                          "aria-label": j.intl.string(j.t["5upuqx"]),
                          className: e_.IV,
                          options: Y,
                          selectedKey: t,
                          overflowLabel: j.intl.string(j.t["UKOtz+"]),
                          overflowExpandLabel: j.intl.string(j.t.PEtHiE),
                      })
                    : (0, n.jsx)(ed, { tabs: D, selectedTab: t, onTabSelect: W }),
            ],
        }),
    });
}
