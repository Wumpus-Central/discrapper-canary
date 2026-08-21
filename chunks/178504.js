l.d(t, { G: () => eg }), l(321073);
var n = l(477900),
    a = l(582128),
    s = l(696292),
    r = l(17928),
    o = l(939249),
    i = l(926268),
    c = l(34188),
    u = l(661531),
    d = l(770178),
    b = l(196736),
    m = l(742589),
    p = l(617986);
let E = (0, l(945810).mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var C = l(975732),
    h = l(318346),
    f = l(70926),
    S = l(287809),
    A = l(623655),
    g = l(13875),
    x = l(80151),
    L = l(23161),
    O = l(503698),
    I = l.n(O),
    y = l(477782),
    _ = l(980707),
    j = l(146919),
    G = l(375708);
function T(e) {
    let { shops: t, onClose: l } = e,
        a = (0, j.yB)("CollectiblesGameShopsContextMenu");
    return (0, n.jsx)("div", {
        className: I()({ [j.jP]: a }),
        children: (0, n.jsx)(_.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: I()({ [j.jP]: a }),
            onClose: l,
            "aria-label": G.intl.string(G.t.FkjcWY),
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
var R = l(278416),
    v = l(758836);
let k = [
    { tab: v.G2.OFFER_ELIGIBLE, labelKey: G.t.hY8Ft1 },
    { tab: v.G2.AVATAR_DECORATIONS, labelKey: G.t.dRZYNE },
    { tab: v.G2.NAMEPLATES, labelKey: G.t.V68Fqz },
    { tab: v.G2.PROFILE_EFFECTS, labelKey: G.t["1cNjtx"] },
    { tab: v.G2.PROFILE_FRAMES, labelKey: G.t.ecTJkR },
    { tab: v.G2.BUNDLES, labelKey: G.t.FYFpps },
    { tab: v.G2.COLLABS, labelKey: G.t["+W8gb+"] },
    { tab: v.G2.CATALOG, labelKey: G.t.xFcotU },
];
function F(e) {
    return e === v.G2.OFFER_ELIGIBLE ? R.TagIcon : void 0;
}
function M(e) {
    let { canViewProfileFrames: t, collabsFilterEnabled: l, hasActivePromotion: n } = e;
    return k.filter((e) => {
        let { tab: a } = e;
        return (a !== v.G2.PROFILE_FRAMES || !!t) && (a !== v.G2.COLLABS || !!l) && (a !== v.G2.OFFER_ELIGIBLE || !!n);
    });
}
function N(e) {
    let { handleTransition: t, onClose: l } = e,
        a = (0, j.yB)("CollectiblesIndexPageContextMenu"),
        s = (0, g.sk)("CollectiblesIndexPageContextMenu"),
        r = M({
            canViewProfileFrames: s,
            collabsFilterEnabled: (0, A.z)("CollectiblesIndexPageContextMenu"),
            hasActivePromotion: null != (0, x.A)(),
        });
    return (0, n.jsx)("div", {
        className: I()({ [j.jP]: a }),
        children: (0, n.jsx)(_.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: I()({ [j.jP]: a }),
            onClose: l,
            "aria-label": G.intl.string(G.t.xFcotU),
            onSelect: () => {},
            children: r.map((e) => {
                let { tab: l, labelKey: a } = e,
                    s = F(l);
                return (0, n.jsx)(
                    y.Dr,
                    {
                        id: l,
                        label: G.intl.string(a),
                        badge: l === v.G2.PROFILE_FRAMES ? "new" : void 0,
                        trailingIndicator: null != s ? { type: "icon", icon: s } : void 0,
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
var B = l(7689),
    $ = l(892547),
    P = l(773669),
    w = l(174459),
    H = l(440938),
    D = l(652215),
    U = l(848913);
function z(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: s, hasText: i } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, L.v)(),
        [b, m] = a.useState(""),
        p = (0, H.uM)(),
        E = (0, r.bG)([P.default], () => P.default.locale),
        C = a.useRef(null),
        [h, f] = a.useState(!1);
    a.useEffect(() => {
        let e = setTimeout(() => {
            d(b);
        }, 250);
        return () => clearTimeout(e);
    }, [b, d]),
        a.useEffect(() => {
            m(c);
        }, [c]),
        a.useEffect(() => {
            f(s && i);
        }, [s, i]);
    let S = a.useCallback(
            (e) => {
                "Enter" === e.key && d(b);
            },
            [b, d],
        ),
        A = a.useCallback(
            (e) => {
                w.default.track(D.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        g = a.useCallback(() => {
            l !== v.G2.CATALOG && t(v.G2.CATALOG), A(v.uY.SEARCH_ICON), f(!0), setTimeout(() => C.current?.focus());
        }, [l, t, A]),
        x = a.useCallback(() => {
            l !== v.G2.CATALOG && t(v.G2.CATALOG), A(v.uY.SEARCH_BAR);
        }, [l, t, A]),
        O = a.useCallback(() => {
            m(""), d(""), A(v.uY.SEARCH_BAR_CLEAR), s && f(!1);
        }, [d, A, s]),
        y = a.useCallback(() => {
            s && "" === b && f(!1);
        }, [s, b]),
        _ = s && !h,
        j = (0, n.jsx)(o.D, {
            className: U.qc,
            onClick: g,
            children: (0, n.jsx)(B.MagnifyingGlassIcon, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        T = (0, n.jsx)($.I, {
            size: "sm",
            ref: C,
            onKeyDown: S,
            query: b,
            onChange: m,
            onClear: O,
            onBlur: y,
            placeholder: "en-US" === E ? G.intl.string(G.t.arz34K) : G.intl.string(G.t["hIt/Nm"]),
        }),
        R = { "--custom-search-bar-width": `${v.rr}px`, "--custom-search-bar-icon-width": `${v.Dy}px` };
    return _
        ? (0, n.jsx)("div", { style: R, children: j })
        : (0, n.jsx)("div", {
              className: I()(U.ON, { [U.Nz]: h }),
              style: R,
              children: (0, n.jsx)(o.D, { ignoreKeyPress: !0, onClick: x, children: T }),
          });
}
var K = l(3666),
    q = l(834730),
    V = l(812993),
    W = l(761508),
    Y = l(922016),
    J = l(900797),
    Q = l(847374),
    X = l(955572),
    Z = l(775602),
    ee = l(421773),
    et = l(478016);
function el(e) {
    let { tabs: t, selectedTab: l, onTabSelect: a, onClose: s, showOrbRentalNewBadge: r } = e;
    return (0, n.jsx)(_.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": G.intl.string(G.t["UKOtz+"]),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, n.jsx)(
            y.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i, trailingBadge: c } = e;
                    if (null != i)
                        return (0, n.jsx)(y.Dr, { id: t, label: o, hasSubmenu: !0, children: i({ onClose: s }) }, t);
                    let u = null != c ? { type: "beta", variant: "brand" } : t === v.G2.ORBS && r ? "new" : void 0;
                    return (0, n.jsx)(
                        y.Dr,
                        {
                            id: t,
                            label: o,
                            trailingIndicator: t === l ? { type: "icon", icon: et.U } : void 0,
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
var en = l(997807);
function ea(e) {
    let { label: t, icon: l, showNewBadge: a } = e;
    return (0, n.jsxs)(q.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != l
                ? (0, n.jsxs)("span", {
                      className: en.nt,
                      children: [t, (0, n.jsx)(l, { size: "xs", color: "currentColor" })],
                  })
                : t,
            a && (0, n.jsx)(V.Lp, { text: G.intl.string(G.t.y2b7CA), className: en.Ad }),
        ],
    });
}
function es(e) {
    let {
        tab: t,
        label: l,
        selected: a,
        handleTransition: s,
        renderSubmenu: r,
        submenuOnly: o,
        showNewBadge: i,
        icon: c,
        trailingBadge: u,
    } = e;
    if (null != r)
        return (0, n.jsx)(er, { tab: t, label: l, selected: a, handleTransition: s, renderSubmenu: r, submenuOnly: o });
    let d = (0, n.jsx)(W.V.Item, {
        id: t,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: a ? t : void 0,
        onClick: () => s(t),
        className: en.Mf,
        "aria-label": l,
        children: (0, n.jsx)(ea, { label: l, icon: c, showNewBadge: i }),
    });
    return null != u
        ? (0, n.jsxs)("div", {
              className: en.ju,
              children: [d, (0, n.jsx)(V.Lp, { disableColor: !0, text: u, className: en.qe })],
          })
        : d;
}
function er(e) {
    let { tab: t, label: l, selected: s, handleTransition: r, renderSubmenu: o, submenuOnly: i } = e,
        c = a.useRef(null),
        u = a.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: m, onMouseLeave: p, cancelTimers: E } = (0, ee.A)(100, 100),
        C = a.useCallback(() => {
            (u.current = Z.Ay.keyboardModeEnabled), m();
        }, [m]),
        h = a.useCallback(() => {
            E(), b(!0), (u.current = Z.Ay.keyboardModeEnabled), i || r(t);
        }, [E, b, i, r, t]);
    return (0, n.jsx)(Y.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            E(), b(!0), (u.current = Z.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !Z.Ay.keyboardModeEnabled && (0, X.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)("div", { onMouseEnter: m, onMouseLeave: p, children: o({ onClose: t }) });
        },
        children: (e, a) => {
            let { isShown: r } = a,
                o = r ? J.t : Q.a;
            return (0, n.jsx)(W.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: s ? t : void 0,
                onClick: h,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: en.Mf,
                "aria-label": l,
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: en.Lj,
                    onMouseEnter: C,
                    onMouseLeave: p,
                    children: (0, n.jsx)(q.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: en.hP,
                            children: [l, (0, n.jsx)(o, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function eo(e) {
    let { onTabSelect: t, tabs: l, selectedTab: s, selected: r } = e,
        o = a.useRef(null),
        i = a.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: m } = (0, ee.A)(100, 100),
        p = a.useCallback(() => {
            (i.current = Z.Ay.keyboardModeEnabled), d();
        }, [d]),
        E = a.useCallback(() => {
            m(), u(!0), (i.current = Z.Ay.keyboardModeEnabled);
        }, [m, u]);
    return (0, n.jsx)(Y.Y, {
        targetElementRef: o,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            m(), u(!0), (i.current = Z.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            i.current && !Z.Ay.keyboardModeEnabled && (0, X.uS)(),
                u(!1),
                requestAnimationFrame(() => o.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, n.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, n.jsx)(el, { selectedTab: s, onClose: a, tabs: l, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: l } = t,
                a = l ? J.t : Q.a;
            return (0, n.jsx)(W.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: r ? "more" : void 0,
                onClick: E,
                clickableRef: (e) => {
                    null != e && null != e.ref && (o.current = e.ref);
                },
                className: I()(en.Mf, en.OS),
                "aria-label": G.intl.string(G.t["UKOtz+"]),
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: en.Lj,
                    onMouseEnter: p,
                    onMouseLeave: b,
                    children: (0, n.jsx)(q.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: en.hP,
                            children: [G.intl.string(G.t["UKOtz+"]), (0, n.jsx)(a, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function ei(e, t, l) {
    return e === l || (null != t.renderSubmenu && (0, v.dF)(l) && e === v.G2.CATALOG);
}
function ec(e) {
    let { className: t, selectedTab: l, tabs: s, onTabSelect: r } = e,
        [o, i] = a.useState(0),
        c = a.useRef(o),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: m,
        } = (0, K.Wv)({ items: s, itemGapPx: 32, maxLines: 1, containerWidth: o }),
        p = a.useMemo(() => s.slice(0, u + 1), [u, s]),
        E = a.useMemo(() => s.slice(u + 1), [u, s]),
        C = a.useRef(null),
        h = a.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, d.g)(C, h);
    let f = 0 !== o,
        S = E.some((e) => ei(e.tab, e, l));
    return (0, n.jsxs)("div", {
        className: I()(en.kL, t),
        ref: C,
        children: [
            (0, n.jsxs)("div", {
                className: en.Kk,
                "aria-hidden": "true",
                children: [
                    s.map((e, t) =>
                        (0, n.jsx)(
                            K.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, n.jsx)(es, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ei(e.tab, e, l),
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
                        ref: m,
                        children: (0, n.jsx)(eo, { tabs: E, onTabSelect: r, selectedTab: l, selected: S }),
                    }),
                ],
            }),
            f &&
                (0, n.jsxs)(W.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: r,
                    className: en.vR,
                    children: [
                        p.map((e) =>
                            (0, n.jsx)(
                                es,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: ei(e.tab, e, l),
                                    handleTransition: r,
                                    renderSubmenu: e.renderSubmenu,
                                    submenuOnly: e.submenuOnly,
                                    icon: e.icon,
                                    trailingBadge: e.trailingBadge,
                                },
                                e.tab,
                            ),
                        ),
                        0 !== E.length
                            ? (0, n.jsx)(eo, { tabs: E, onTabSelect: r, selectedTab: l, selected: S })
                            : null,
                    ],
                }),
        ],
    });
}
var eu = l(812729),
    ed = l.n(eu),
    eb = l(627363),
    em = l(587895),
    ep = l(733391),
    eE = l(832163),
    eC = l(44724),
    eh = l(486020);
l(801416);
var ef = l(518477),
    eS = l(667378),
    eA = l(835018);
function eg(e) {
    let { selectedTab: t, handleTransition: l } = e,
        O = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        I = (function (e) {
            let { location: t } = e;
            return E.useConfig({ location: t }).enabled;
        })({ location: "collectibles_shop_header_bar" }),
        _ = (0, g.sk)("CollectiblesShopHeaderBar"),
        j = (0, A.z)("CollectiblesShopHeaderBar"),
        R = null != (0, x.A)(),
        { searchQuery: k } = (0, L.v)(),
        B = a.useRef(null),
        [$, P] = a.useState(!1);
    (0, d.g)(
        B,
        a.useCallback((e) => {
            P(e.contentRect.width < 800);
        }, []),
    );
    let { gameShops: U, hasGameShops: K } = (function (e) {
            let { enabled: t } = e,
                l = (0, H.uM)(),
                n = (0, r.yK)(
                    [eE.A],
                    () =>
                        t
                            ? (eE.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled)
                            : [],
                    [t],
                );
            a.useEffect(() => {
                t && (0, ep.Xw)();
            }, [t]),
                a.useEffect(() => {
                    n.length > 0 &&
                        eb.Ay.fetchApplications(
                            n.map((e) => e.applicationId),
                            !1,
                        );
                }, [n]);
            let s = a.useCallback(
                    (e) => {
                        w.default.track(D.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: l?.sessionId,
                            page_type: v.G2.GAME_SHOPS,
                            page_category: l?.pageCategory,
                            page_section: l?.pageSection,
                            tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                            cta_name: "go_to_game_shop",
                        }),
                            (0, eC.default)({ applicationId: e }).catch(() => {});
                    },
                    [l],
                ),
                o = (0, r.bG)(
                    [em.A],
                    () =>
                        n.flatMap((e) => {
                            let t = em.A.getApplication(e.applicationId),
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
                    ed(),
                );
            return {
                gameShops: a.useMemo(() => o.map((e) => ({ ...e, onSelect: () => s(e.id) })), [o, s]),
                hasGameShops: n.length > 0,
            };
        })({ enabled: I }),
        q = (0, b.H)({ location: "collectibles_shop_header_bar" }),
        V = a.useMemo(() => {
            let e = [
                { tab: v.G2.HOME, label: G.intl.string(G.t["xNiB/O"]) },
                {
                    tab: v.G2.CATALOG,
                    label: G.intl.string(G.t.FshAeN),
                    renderSubmenu: (e) => {
                        let { onClose: t } = e;
                        return (0, n.jsx)(N, { handleTransition: l, onClose: t });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: t } = e;
                        return (function (e) {
                            let {
                                canViewProfileFrames: t,
                                collabsFilterEnabled: l,
                                hasActivePromotion: a,
                                onTabSelect: s,
                                onClose: r,
                            } = e;
                            return M({ canViewProfileFrames: t, collabsFilterEnabled: l, hasActivePromotion: a }).map(
                                (e) => {
                                    let { tab: t, labelKey: l } = e,
                                        a = F(t);
                                    return (0, n.jsx)(
                                        y.Dr,
                                        {
                                            id: t,
                                            label: G.intl.string(l),
                                            badge: t === v.G2.PROFILE_FRAMES ? "new" : void 0,
                                            trailingIndicator: null != a ? { type: "icon", icon: a } : void 0,
                                            action: () => {
                                                s(t), r();
                                            },
                                        },
                                        t,
                                    );
                                },
                            );
                        })({
                            canViewProfileFrames: _,
                            collabsFilterEnabled: j,
                            hasActivePromotion: R,
                            onTabSelect: l,
                            onClose: t,
                        });
                    },
                },
            ];
            return (
                e.push({ tab: v.G2.ORBS, label: G.intl.string(G.t.EBYkzk) }),
                I &&
                    K &&
                    e.push({
                        tab: v.G2.GAME_SHOPS,
                        label: G.intl.string(G.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, n.jsx)(T, { shops: U, onClose: t });
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
                                                e.onSelect(), l();
                                            },
                                        },
                                        e.id,
                                    ),
                                );
                            })({ shops: U, onClose: t });
                        },
                    }),
                q &&
                    e.push({
                        tab: v.G2.GAME_SERVERS,
                        label: G.intl.string(eS.default.vCzwM7),
                        trailingBadge: G.intl.string(G.t.oW0eUd),
                    }),
                e
            );
        }, [l, U, _, j, R, I, K, q]),
        W = t === v.G2.ORBS ? D.liQ.SHOP_ORBS_TAB : D.liQ.COLLECTIBLES_SHOP,
        Y = a.useCallback(() => {
            (0, h.Y)({ pageType: W, sectionType: D.JJy.ORBS_BALANCE_MENU, ctaObject: D.ZSU.CTA_TO_QUEST_HOME }),
                (0, p.mA)({ fromContent: s.u.ORBS_BALANCE_MENU });
        }, [W]),
        J = a.useCallback(() => {
            O?.id != null && (0, C.openUserProfileModal)({ userId: O.id, tabSection: ef.RP.WISHLIST });
        }, [O?.id]),
        Q = a.useCallback(
            (e) => {
                l(e);
            },
            [l],
        );
    return (0, n.jsx)("div", {
        ref: B,
        children: (0, n.jsxs)(m.A, {
            disableDoubleClick: !0,
            className: eA.jr,
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(z, { handleTransition: l, selectedTab: t, isNarrow: $, hasText: "" !== k }),
                    (0, n.jsx)(o.D, {
                        className: eA.ij,
                        onClick: J,
                        "aria-label": G.intl.string(G.t["7lZ31J"]),
                        children: (0, n.jsx)(i.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(f.SS, {
                        analyticsPage: W,
                        cardAlignment: f.SS.CardAlignment.END,
                        ctaText: G.intl.string(G.t.VC4Mq0),
                        ctaOnClick: Y,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(o.D, {
                    className: eA.sU,
                    onClick: () => l(v.G2.HOME),
                    "aria-label": G.intl.string(G.t["5upuqx"]),
                    children: (0, n.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(ec, { tabs: V, selectedTab: t, onTabSelect: Q }),
            ],
        }),
    });
}
