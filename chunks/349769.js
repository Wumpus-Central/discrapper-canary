l.d(t, { G: () => ey }), l(321073);
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
var x = l(13875),
    _ = l(80151),
    G = l(365491),
    y = l(503698),
    I = l.n(y),
    T = l(477782),
    R = l(980707),
    j = l(146919),
    k = l(375708);
function v(e) {
    let { shops: t, onClose: l } = e,
        a = (0, j.yB)("CollectiblesGameShopsContextMenu");
    return (0, n.jsx)("div", {
        className: I()({ [j.jP]: a }),
        children: (0, n.jsx)(R.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: I()({ [j.jP]: a }),
            onClose: l,
            "aria-label": k.intl.string(k.t.FkjcWY),
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
var M = l(278416),
    B = l(758836);
let N = [
    { tab: B.G2.OFFER_ELIGIBLE, labelKey: k.t.hY8Ft1 },
    { tab: B.G2.AVATAR_DECORATIONS, labelKey: k.t.dRZYNE },
    { tab: B.G2.NAMEPLATES, labelKey: k.t.V68Fqz },
    { tab: B.G2.PROFILE_EFFECTS, labelKey: k.t["1cNjtx"] },
    { tab: B.G2.PROFILE_FRAMES, labelKey: k.t.ecTJkR },
    { tab: B.G2.BUNDLES, labelKey: k.t.FYFpps },
    { tab: B.G2.COLLABS, labelKey: k.t["+W8gb+"] },
    { tab: B.G2.CATALOG, labelKey: k.t.xFcotU },
];
function F(e) {
    return e === B.G2.OFFER_ELIGIBLE ? M.TagIcon : void 0;
}
function P(e) {
    let { canViewProfileFrames: t, hasActivePromotion: l } = e;
    return N.filter((e) => {
        let { tab: n } = e;
        return (n !== B.G2.PROFILE_FRAMES || !!t) && (n !== B.G2.OFFER_ELIGIBLE || !!l);
    });
}
function H(e) {
    let { handleTransition: t, onClose: l } = e,
        a = (0, j.yB)("CollectiblesIndexPageContextMenu"),
        i = P({
            canViewProfileFrames: (0, x.sk)("CollectiblesIndexPageContextMenu"),
            hasActivePromotion: null != (0, _.A)(),
        });
    return (0, n.jsx)("div", {
        className: I()({ [j.jP]: a }),
        children: (0, n.jsx)(R.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: I()({ [j.jP]: a }),
            onClose: l,
            "aria-label": k.intl.string(k.t.xFcotU),
            onSelect: () => {},
            children: i.map((e) => {
                let { tab: l, labelKey: a } = e,
                    i = F(l);
                return (0, n.jsx)(
                    T.Dr,
                    {
                        id: l,
                        label: k.intl.string(a),
                        badge: l === B.G2.PROFILE_FRAMES ? "new" : void 0,
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
var w = l(7689),
    V = l(683438),
    D = l(773669),
    U = l(174459),
    z = l(440938),
    K = l(652215),
    q = l(848913);
function W(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: i, hasText: o } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, G.v)(),
        [b, E] = a.useState(""),
        S = (0, z.uM)(),
        m = (0, s.bG)([D.default], () => D.default.locale),
        A = a.useRef(null),
        [C, p] = a.useState(!1);
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
            p(i && o);
        }, [i, o]);
    let g = a.useCallback(
            (e) => {
                "Enter" === e.key && d(b);
            },
            [b, d],
        ),
        f = a.useCallback(
            (e) => {
                U.default.track(K.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            l !== B.G2.CATALOG && t(B.G2.CATALOG), f(B.uY.SEARCH_ICON), p(!0), setTimeout(() => A.current?.focus());
        }, [l, t, f]),
        O = a.useCallback(() => {
            l !== B.G2.CATALOG && t(B.G2.CATALOG), f(B.uY.SEARCH_BAR);
        }, [l, t, f]),
        L = a.useCallback(() => {
            E(""), d(""), f(B.uY.SEARCH_BAR_CLEAR), i && p(!1);
        }, [d, f, i]),
        x = a.useCallback(() => {
            i && "" === b && p(!1);
        }, [i, b]),
        _ = i && !C,
        y = (0, n.jsx)(r.D, {
            className: q.qc,
            onClick: h,
            children: (0, n.jsx)(w.MagnifyingGlassIcon, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        T = (0, n.jsx)(V.I, {
            size: "sm",
            ref: A,
            onKeyDown: g,
            query: b,
            onChange: E,
            onClear: L,
            onBlur: x,
            placeholder: "en-US" === m ? k.intl.string(k.t.arz34K) : k.intl.string(k.t["hIt/Nm"]),
        }),
        R = { "--custom-search-bar-width": `${B.rr}px`, "--custom-search-bar-icon-width": `${B.Dy}px` };
    return _
        ? (0, n.jsx)("div", { style: R, children: y })
        : (0, n.jsx)("div", {
              className: I()(q.ON, { [q.Nz]: C }),
              style: R,
              children: (0, n.jsx)(r.D, { ignoreKeyPress: !0, onClick: O, children: T }),
          });
}
var Y = l(3666),
    J = l(834730),
    Q = l(812993),
    X = l(761508),
    Z = l(922016),
    $ = l(900797),
    ee = l(847374),
    et = l(955572),
    el = l(775602),
    en = l(421773),
    ea = l(478016);
function ei(e) {
    let { tabs: t, selectedTab: l, onTabSelect: a, onClose: i, showOrbRentalNewBadge: s } = e;
    return (0, n.jsx)(R.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": k.intl.string(k.t["UKOtz+"]),
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
                    let u = null != c ? { type: "beta", variant: "brand" } : t === B.G2.ORBS && s ? "new" : void 0;
                    return (0, n.jsx)(
                        T.Dr,
                        {
                            id: t,
                            label: r,
                            trailingIndicator: t === l ? { type: "icon", icon: ea.U } : void 0,
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
var es = l(997807);
function er(e) {
    let { label: t, icon: l, showNewBadge: a } = e;
    return (0, n.jsxs)(J.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != l
                ? (0, n.jsxs)("span", {
                      className: es.nt,
                      children: [t, (0, n.jsx)(l, { size: "xs", color: "currentColor" })],
                  })
                : t,
            a && (0, n.jsx)(Q.Lp, { text: k.intl.string(k.t.y2b7CA), className: es.Ad }),
        ],
    });
}
function eo(e) {
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
        return (0, n.jsx)(ec, { tab: t, label: l, selected: a, handleTransition: i, renderSubmenu: s, submenuOnly: r });
    let d = (0, n.jsx)(X.V.Item, {
        id: t,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: a ? t : void 0,
        onClick: () => i(t),
        className: es.Mf,
        "aria-label": l,
        children: (0, n.jsx)(er, { label: l, icon: c, showNewBadge: o }),
    });
    return null != u
        ? (0, n.jsxs)("div", {
              className: es.ju,
              children: [d, (0, n.jsx)(Q.Lp, { disableColor: !0, text: u, className: es.qe })],
          })
        : d;
}
function ec(e) {
    let { tab: t, label: l, selected: i, handleTransition: s, renderSubmenu: r, submenuOnly: o } = e,
        c = a.useRef(null),
        u = a.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: E, onMouseLeave: S, cancelTimers: m } = (0, en.A)(100, 100),
        A = a.useCallback(() => {
            (u.current = el.Ay.keyboardModeEnabled), E();
        }, [E]),
        C = a.useCallback(() => {
            m(), b(!0), (u.current = el.Ay.keyboardModeEnabled), o || s(t);
        }, [m, b, o, s, t]);
    return (0, n.jsx)(Z.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            m(), b(!0), (u.current = el.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !el.Ay.keyboardModeEnabled && (0, et.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)("div", { onMouseEnter: E, onMouseLeave: S, children: r({ onClose: t }) });
        },
        children: (e, a) => {
            let { isShown: s } = a,
                r = s ? $.t : ee.a;
            return (0, n.jsx)(X.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: i ? t : void 0,
                onClick: C,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: es.Mf,
                "aria-label": l,
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: es.Lj,
                    onMouseEnter: A,
                    onMouseLeave: S,
                    children: (0, n.jsx)(J.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: es.hP,
                            children: [l, (0, n.jsx)(r, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function eu(e) {
    let { onTabSelect: t, tabs: l, selectedTab: i, selected: s } = e,
        r = a.useRef(null),
        o = a.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: E } = (0, en.A)(100, 100),
        S = a.useCallback(() => {
            (o.current = el.Ay.keyboardModeEnabled), d();
        }, [d]),
        m = a.useCallback(() => {
            E(), u(!0), (o.current = el.Ay.keyboardModeEnabled);
        }, [E, u]);
    return (0, n.jsx)(Z.Y, {
        targetElementRef: r,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            E(), u(!0), (o.current = el.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            o.current && !el.Ay.keyboardModeEnabled && (0, et.uS)(),
                u(!1),
                requestAnimationFrame(() => r.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, n.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, n.jsx)(ei, { selectedTab: i, onClose: a, tabs: l, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: l } = t,
                a = l ? $.t : ee.a;
            return (0, n.jsx)(X.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: s ? "more" : void 0,
                onClick: m,
                clickableRef: (e) => {
                    null != e && null != e.ref && (r.current = e.ref);
                },
                className: I()(es.Mf, es.OS),
                "aria-label": k.intl.string(k.t["UKOtz+"]),
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: es.Lj,
                    onMouseEnter: S,
                    onMouseLeave: b,
                    children: (0, n.jsx)(J.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: es.hP,
                            children: [k.intl.string(k.t["UKOtz+"]), (0, n.jsx)(a, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ed(e, t, l) {
    return e === l || (null != t.renderSubmenu && (0, B.dF)(l) && e === B.G2.CATALOG);
}
function eb(e) {
    let { className: t, selectedTab: l, tabs: i, onTabSelect: s } = e,
        [r, o] = a.useState(0),
        c = a.useRef(r),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: E,
        } = (0, Y.Wv)({ items: i, itemGapPx: 32, maxLines: 1, containerWidth: r }),
        S = a.useMemo(() => i.slice(0, u + 1), [u, i]),
        m = a.useMemo(() => i.slice(u + 1), [u, i]),
        A = a.useRef(null),
        C = a.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (o(t), (c.current = t));
        }, []);
    (0, d.g)(A, C);
    let p = 0 !== r,
        g = m.some((e) => ed(e.tab, e, l));
    return (0, n.jsxs)("div", {
        className: I()(es.kL, t),
        ref: A,
        children: [
            (0, n.jsxs)("div", {
                className: es.Kk,
                "aria-hidden": "true",
                children: [
                    i.map((e, t) =>
                        (0, n.jsx)(
                            Y.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, n.jsx)(eo, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ed(e.tab, e, l),
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
                        children: (0, n.jsx)(eu, { tabs: m, onTabSelect: s, selectedTab: l, selected: g }),
                    }),
                ],
            }),
            p &&
                (0, n.jsxs)(X.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: s,
                    className: es.vR,
                    children: [
                        S.map((e) =>
                            (0, n.jsx)(
                                eo,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ed(e.tab, e, l),
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
                            ? (0, n.jsx)(eu, { tabs: m, onTabSelect: s, selectedTab: l, selected: g })
                            : null,
                    ],
                }),
        ],
    });
}
var eE = l(173127),
    eS = l(812729),
    em = l.n(eS),
    eA = l(627363),
    eC = l(587895),
    ep = l(733391),
    eg = l(832163),
    ef = l(44724),
    eh = l(486020);
function eO(e) {
    let { enabled: t } = e,
        l = (0, z.uM)(),
        n = (0, s.yK)(
            [eg.A],
            () => (t ? (eg.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled) : []),
            [t],
        );
    a.useEffect(() => {
        t && (0, ep.Xw)();
    }, [t]),
        a.useEffect(() => {
            n.length > 0 &&
                eA.Ay.fetchApplications(
                    n.map((e) => e.applicationId),
                    !1,
                );
        }, [n]);
    let i = a.useCallback(
            (e) => {
                U.default.track(K.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: l?.sessionId,
                    page_type: B.G2.GAME_SHOPS,
                    page_category: l?.pageCategory,
                    page_section: l?.pageSection,
                    tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                    cta_name: "go_to_game_shop",
                }),
                    (0, ef.default)({ applicationId: e }).catch(() => {});
            },
            [l],
        ),
        r = (0, s.bG)(
            [eC.A],
            () =>
                n.flatMap((e) => {
                    let t = eC.A.getApplication(e.applicationId),
                        l = t?.name;
                    return null == l
                        ? []
                        : [
                              {
                                  id: e.applicationId,
                                  label: l,
                                  iconSrc:
                                      t?.icon != null
                                          ? eh.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                          : void 0,
                              },
                          ];
                }),
            [n],
            em(),
        );
    return {
        gameShops: a.useMemo(() => r.map((e) => ({ ...e, onSelect: () => i(e.id) })), [r, i]),
        hasGameShops: n.length > 0,
    };
}
var eL = l(344045);
let ex = "useCollectiblesShopNavigationMenuOptions";
l(801416);
var e_ = l(518477),
    eG = l(835018);
function ey(e) {
    let { selectedTab: t, handleTransition: l } = e,
        m = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
        A = C({ location: "collectibles_shop_header_bar" }),
        O = (0, x.sk)("CollectiblesShopHeaderBar"),
        y = null != (0, _.A)(),
        { searchQuery: I } = (0, G.v)(),
        R = a.useRef(null),
        [j, M] = a.useState(!1);
    (0, d.g)(
        R,
        a.useCallback((e) => {
            M(e.contentRect.width < 800);
        }, []),
    );
    let { gameShops: N, hasGameShops: w } = eO({ enabled: A }),
        V = (0, b.H)({ location: "collectibles_shop_header_bar" }),
        D = L("collectibles_shop_header_bar"),
        U = a.useMemo(() => {
            if (D) return [];
            let e = [
                { tab: B.G2.HOME, label: k.intl.string(k.t["xNiB/O"]) },
                {
                    tab: B.G2.CATALOG,
                    label: k.intl.string(k.t.FshAeN),
                    renderSubmenu: (e) => {
                        let { onClose: t } = e;
                        return (0, n.jsx)(H, { handleTransition: l, onClose: t });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: t } = e;
                        return (function (e) {
                            let { canViewProfileFrames: t, hasActivePromotion: l, onTabSelect: a, onClose: i } = e;
                            return P({ canViewProfileFrames: t, hasActivePromotion: l }).map((e) => {
                                let { tab: t, labelKey: l } = e,
                                    s = F(t);
                                return (0, n.jsx)(
                                    T.Dr,
                                    {
                                        id: t,
                                        label: k.intl.string(l),
                                        badge: t === B.G2.PROFILE_FRAMES ? "new" : void 0,
                                        trailingIndicator: null != s ? { type: "icon", icon: s } : void 0,
                                        action: () => {
                                            a(t), i();
                                        },
                                    },
                                    t,
                                );
                            });
                        })({ canViewProfileFrames: O, hasActivePromotion: y, onTabSelect: l, onClose: t });
                    },
                },
            ];
            return (
                e.push({ tab: B.G2.ORBS, label: k.intl.string(k.t.EBYkzk) }),
                A &&
                    w &&
                    e.push({
                        tab: B.G2.GAME_SHOPS,
                        label: k.intl.string(k.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, n.jsx)(v, { shops: N, onClose: t });
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
                                                e.onSelect(), l();
                                            },
                                        },
                                        e.id,
                                    ),
                                );
                            })({ shops: N, onClose: t });
                        },
                    }),
                V &&
                    e.push({
                        tab: B.G2.GAME_SERVERS,
                        label: k.intl.string(eL.default.vCzwM7),
                        trailingBadge: k.intl.string(k.t.oW0eUd),
                    }),
                e
            );
        }, [D, l, N, O, y, A, w, V]),
        z = t === B.G2.ORBS ? K.liQ.SHOP_ORBS_TAB : K.liQ.COLLECTIBLES_SHOP,
        q = a.useCallback(() => {
            (0, g.Y)({ pageType: z, sectionType: K.JJy.ORBS_BALANCE_MENU, ctaObject: K.ZSU.CTA_TO_QUEST_HOME }),
                (0, S.mA)({ fromContent: i.u.ORBS_BALANCE_MENU });
        }, [z]),
        Y = a.useCallback(() => {
            m?.id != null && (0, p.openUserProfileModal)({ userId: m.id, tabSection: e_.RP.WISHLIST });
        }, [m?.id]),
        J = a.useCallback(
            (e) => {
                l(e);
            },
            [l],
        ),
        Q = (function (e) {
            let t = L(ex),
                l = (0, x.sk)(ex),
                n = (0, b.H)({ location: ex }),
                i = C({ location: ex }),
                { gameShops: s, hasGameShops: r } = eO({ enabled: i }),
                o = null != (0, _.A)();
            return a.useMemo(() => {
                if (!t) return [];
                let a = P({ canViewProfileFrames: l, hasActivePromotion: o }).map((t) => {
                        let { tab: l, labelKey: n } = t,
                            a = F(l);
                        return {
                            type: "page",
                            key: l,
                            text: k.intl.string(n),
                            onClick: () => e(l),
                            badge: l === B.G2.PROFILE_FRAMES ? "new" : void 0,
                            trailingIndicator: null != a ? { type: "icon", icon: a } : void 0,
                        };
                    }),
                    c = [
                        {
                            type: "page",
                            key: B.G2.HOME,
                            text: k.intl.string(k.t["xNiB/O"]),
                            route: K.BVt.COLLECTIBLES_SHOP_WITH_TAB(B.G2.HOME),
                            onClick: () => e(B.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: B.G2.CATALOG,
                            text: k.intl.string(k.t.FshAeN),
                            route: K.BVt.COLLECTIBLES_SHOP_WITH_TAB(B.G2.CATALOG),
                            onClick: () => e(B.G2.CATALOG),
                            expandLabel: k.intl.string(k.t["+w36yH"]),
                            options: a,
                        },
                        {
                            type: "page",
                            key: B.G2.ORBS,
                            text: k.intl.string(k.t.EBYkzk),
                            route: K.BVt.COLLECTIBLES_SHOP_WITH_TAB(B.G2.ORBS),
                            onClick: () => e(B.G2.ORBS),
                        },
                    ];
                return (
                    i &&
                        r &&
                        c.push({
                            type: "menu",
                            key: B.G2.GAME_SHOPS,
                            text: k.intl.string(k.t.FkjcWY),
                            expandLabel: k.intl.string(k.t.bf9uMH),
                            options: s.map((e) => ({
                                type: "page",
                                key: e.id,
                                text: e.label,
                                iconSrc: e.iconSrc,
                                onClick: e.onSelect,
                            })),
                        }),
                    n &&
                        c.push({
                            type: "page",
                            key: B.G2.GAME_SERVERS,
                            text: k.intl.string(eL.default.vCzwM7),
                            route: K.BVt.COLLECTIBLES_SHOP_WITH_TAB(B.G2.GAME_SERVERS),
                            onClick: () => e(B.G2.GAME_SERVERS),
                            badge: { type: "beta", variant: "brand" },
                        }),
                    c
                );
            }, [t, e, l, o, n, i, r, s]);
        })(J);
    return (0, n.jsx)("div", {
        ref: R,
        children: (0, n.jsxs)(E.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            className: eG.jr,
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(W, { handleTransition: l, selectedTab: t, isNarrow: j, hasText: "" !== I }),
                    (0, n.jsx)(r.D, {
                        className: eG.ij,
                        onClick: Y,
                        "aria-label": k.intl.string(k.t["7lZ31J"]),
                        children: (0, n.jsx)(o.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(f.SS, {
                        analyticsPage: z,
                        cardAlignment: f.SS.CardAlignment.END,
                        ctaText: k.intl.string(k.t.VC4Mq0),
                        ctaOnClick: q,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(r.D, {
                    className: eG.sU,
                    onClick: () => l(B.G2.HOME),
                    "aria-label": k.intl.string(k.t["5upuqx"]),
                    children: (0, n.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                D
                    ? (0, n.jsx)(eE.A, {
                          "aria-label": k.intl.string(k.t["5upuqx"]),
                          className: eG.IV,
                          options: Q,
                          selectedKey: t,
                          overflowLabel: k.intl.string(k.t["UKOtz+"]),
                          overflowExpandLabel: k.intl.string(k.t.PEtHiE),
                      })
                    : (0, n.jsx)(eb, { tabs: U, selectedTab: t, onTabSelect: J }),
            ],
        }),
    });
}
