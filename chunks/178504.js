l.d(t, { G: () => eA }), l(321073);
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
    S = l(70926),
    f = l(287809),
    A = l(13875),
    g = l(80151),
    x = l(23161),
    L = l(503698),
    O = l.n(L),
    I = l(477782),
    y = l(980707),
    _ = l(146919),
    j = l(375708);
function G(e) {
    let { shops: t, onClose: l } = e,
        a = (0, _.yB)("CollectiblesGameShopsContextMenu");
    return (0, n.jsx)("div", {
        className: O()({ [_.jP]: a }),
        children: (0, n.jsx)(y.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: O()({ [_.jP]: a }),
            onClose: l,
            "aria-label": j.intl.string(j.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, n.jsx)(
                    I.Dr,
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
    T = l(758836);
let v = [
    { tab: T.G2.OFFER_ELIGIBLE, labelKey: j.t.hY8Ft1 },
    { tab: T.G2.AVATAR_DECORATIONS, labelKey: j.t.dRZYNE },
    { tab: T.G2.NAMEPLATES, labelKey: j.t.V68Fqz },
    { tab: T.G2.PROFILE_EFFECTS, labelKey: j.t["1cNjtx"] },
    { tab: T.G2.PROFILE_FRAMES, labelKey: j.t.ecTJkR },
    { tab: T.G2.BUNDLES, labelKey: j.t.FYFpps },
    { tab: T.G2.COLLABS, labelKey: j.t["+W8gb+"] },
    { tab: T.G2.CATALOG, labelKey: j.t.xFcotU },
];
function k(e) {
    return e === T.G2.OFFER_ELIGIBLE ? R.TagIcon : void 0;
}
function M(e) {
    let { canViewProfileFrames: t, hasActivePromotion: l } = e;
    return v.filter((e) => {
        let { tab: n } = e;
        return (n !== T.G2.PROFILE_FRAMES || !!t) && (n !== T.G2.OFFER_ELIGIBLE || !!l);
    });
}
function F(e) {
    let { handleTransition: t, onClose: l } = e,
        a = (0, _.yB)("CollectiblesIndexPageContextMenu"),
        s = M({
            canViewProfileFrames: (0, A.sk)("CollectiblesIndexPageContextMenu"),
            hasActivePromotion: null != (0, g.A)(),
        });
    return (0, n.jsx)("div", {
        className: O()({ [_.jP]: a }),
        children: (0, n.jsx)(y.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: O()({ [_.jP]: a }),
            onClose: l,
            "aria-label": j.intl.string(j.t.xFcotU),
            onSelect: () => {},
            children: s.map((e) => {
                let { tab: l, labelKey: a } = e,
                    s = k(l);
                return (0, n.jsx)(
                    I.Dr,
                    {
                        id: l,
                        label: j.intl.string(a),
                        badge: l === T.G2.PROFILE_FRAMES ? "new" : void 0,
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
var N = l(7689),
    B = l(683438),
    $ = l(773669),
    P = l(174459),
    w = l(440938),
    H = l(652215),
    D = l(848913);
function U(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: s, hasText: i } = e,
        { searchQuery: c, onSetSearchQuery: d } = (0, x.v)(),
        [b, m] = a.useState(""),
        p = (0, w.uM)(),
        E = (0, r.bG)([$.default], () => $.default.locale),
        C = a.useRef(null),
        [h, S] = a.useState(!1);
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
            S(s && i);
        }, [s, i]);
    let f = a.useCallback(
            (e) => {
                "Enter" === e.key && d(b);
            },
            [b, d],
        ),
        A = a.useCallback(
            (e) => {
                P.default.track(H.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
            l !== T.G2.CATALOG && t(T.G2.CATALOG), A(T.uY.SEARCH_ICON), S(!0), setTimeout(() => C.current?.focus());
        }, [l, t, A]),
        L = a.useCallback(() => {
            l !== T.G2.CATALOG && t(T.G2.CATALOG), A(T.uY.SEARCH_BAR);
        }, [l, t, A]),
        I = a.useCallback(() => {
            m(""), d(""), A(T.uY.SEARCH_BAR_CLEAR), s && S(!1);
        }, [d, A, s]),
        y = a.useCallback(() => {
            s && "" === b && S(!1);
        }, [s, b]),
        _ = s && !h,
        G = (0, n.jsx)(o.D, {
            className: D.qc,
            onClick: g,
            children: (0, n.jsx)(N.MagnifyingGlassIcon, { size: "sm", color: u.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        R = (0, n.jsx)(B.I, {
            size: "sm",
            ref: C,
            onKeyDown: f,
            query: b,
            onChange: m,
            onClear: I,
            onBlur: y,
            placeholder: "en-US" === E ? j.intl.string(j.t.arz34K) : j.intl.string(j.t["hIt/Nm"]),
        }),
        v = { "--custom-search-bar-width": `${T.rr}px`, "--custom-search-bar-icon-width": `${T.Dy}px` };
    return _
        ? (0, n.jsx)("div", { style: v, children: G })
        : (0, n.jsx)("div", {
              className: O()(D.ON, { [D.Nz]: h }),
              style: v,
              children: (0, n.jsx)(o.D, { ignoreKeyPress: !0, onClick: L, children: R }),
          });
}
var z = l(3666),
    K = l(834730),
    q = l(812993),
    V = l(761508),
    W = l(922016),
    Y = l(900797),
    J = l(847374),
    Q = l(955572),
    X = l(775602),
    Z = l(421773),
    ee = l(478016);
function et(e) {
    let { tabs: t, selectedTab: l, onTabSelect: a, onClose: s, showOrbRentalNewBadge: r } = e;
    return (0, n.jsx)(y.W, {
        "data-menu-migrated-auto": !0,
        navId: "collectibles-shop-tabs-overflow-menu",
        "aria-label": j.intl.string(j.t["UKOtz+"]),
        hideScroller: !0,
        onClose: s,
        onSelect: s,
        children: (0, n.jsx)(
            I.rX,
            {
                children: t.map((e) => {
                    let { tab: t, label: o, renderOverflowContent: i, trailingBadge: c } = e;
                    if (null != i)
                        return (0, n.jsx)(I.Dr, { id: t, label: o, hasSubmenu: !0, children: i({ onClose: s }) }, t);
                    let u = null != c ? { type: "beta", variant: "brand" } : t === T.G2.ORBS && r ? "new" : void 0;
                    return (0, n.jsx)(
                        I.Dr,
                        {
                            id: t,
                            label: o,
                            trailingIndicator: t === l ? { type: "icon", icon: ee.U } : void 0,
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
var el = l(997807);
function en(e) {
    let { label: t, icon: l, showNewBadge: a } = e;
    return (0, n.jsxs)(K.E, {
        variant: "text-md/medium",
        color: "none",
        children: [
            null != l
                ? (0, n.jsxs)("span", {
                      className: el.nt,
                      children: [t, (0, n.jsx)(l, { size: "xs", color: "currentColor" })],
                  })
                : t,
            a && (0, n.jsx)(q.Lp, { text: j.intl.string(j.t.y2b7CA), className: el.Ad }),
        ],
    });
}
function ea(e) {
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
        return (0, n.jsx)(es, { tab: t, label: l, selected: a, handleTransition: s, renderSubmenu: r, submenuOnly: o });
    let d = (0, n.jsx)(V.V.Item, {
        id: t,
        look: "brand",
        disableItemStyles: !0,
        selectedItem: a ? t : void 0,
        onClick: () => s(t),
        className: el.Mf,
        "aria-label": l,
        children: (0, n.jsx)(en, { label: l, icon: c, showNewBadge: i }),
    });
    return null != u
        ? (0, n.jsxs)("div", {
              className: el.ju,
              children: [d, (0, n.jsx)(q.Lp, { disableColor: !0, text: u, className: el.qe })],
          })
        : d;
}
function es(e) {
    let { tab: t, label: l, selected: s, handleTransition: r, renderSubmenu: o, submenuOnly: i } = e,
        c = a.useRef(null),
        u = a.useRef(!1),
        { isHovered: d, setIsHovered: b, onMouseEnter: m, onMouseLeave: p, cancelTimers: E } = (0, Z.A)(100, 100),
        C = a.useCallback(() => {
            (u.current = X.Ay.keyboardModeEnabled), m();
        }, [m]),
        h = a.useCallback(() => {
            E(), b(!0), (u.current = X.Ay.keyboardModeEnabled), i || r(t);
        }, [E, b, i, r, t]);
    return (0, n.jsx)(W.Y, {
        targetElementRef: c,
        shouldShow: d,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            E(), b(!0), (u.current = X.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            u.current && !X.Ay.keyboardModeEnabled && (0, Q.uS)(),
                b(!1),
                requestAnimationFrame(() => c.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)("div", { onMouseEnter: m, onMouseLeave: p, children: o({ onClose: t }) });
        },
        children: (e, a) => {
            let { isShown: r } = a,
                o = r ? Y.t : J.a;
            return (0, n.jsx)(V.V.Item, {
                ...e,
                id: t,
                look: "brand",
                disableItemStyles: !0,
                selectedItem: s ? t : void 0,
                onClick: h,
                clickableRef: (e) => {
                    null != e && null != e.ref && (c.current = e.ref);
                },
                className: el.Mf,
                "aria-label": l,
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: el.Lj,
                    onMouseEnter: C,
                    onMouseLeave: p,
                    children: (0, n.jsx)(K.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: el.hP,
                            children: [l, (0, n.jsx)(o, { size: "sm", color: "currentColor" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function er(e) {
    let { onTabSelect: t, tabs: l, selectedTab: s, selected: r } = e,
        o = a.useRef(null),
        i = a.useRef(!1),
        { isHovered: c, setIsHovered: u, onMouseEnter: d, onMouseLeave: b, cancelTimers: m } = (0, Z.A)(100, 100),
        p = a.useCallback(() => {
            (i.current = X.Ay.keyboardModeEnabled), d();
        }, [d]),
        E = a.useCallback(() => {
            m(), u(!0), (i.current = X.Ay.keyboardModeEnabled);
        }, [m, u]);
    return (0, n.jsx)(W.Y, {
        targetElementRef: o,
        shouldShow: c,
        position: "bottom",
        align: "left",
        onRequestOpen: () => {
            m(), u(!0), (i.current = X.Ay.keyboardModeEnabled);
        },
        onRequestClose: () => {
            i.current && !X.Ay.keyboardModeEnabled && (0, Q.uS)(),
                u(!1),
                requestAnimationFrame(() => o.current?.focus());
        },
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, n.jsx)("div", {
                onMouseEnter: d,
                onMouseLeave: b,
                children: (0, n.jsx)(et, { selectedTab: s, onClose: a, tabs: l, onTabSelect: t }),
            });
        },
        children: (e, t) => {
            let { isShown: l } = t,
                a = l ? Y.t : J.a;
            return (0, n.jsx)(V.V.Item, {
                ...e,
                id: "more",
                look: "brand",
                disableItemStyles: !0,
                selectedItem: r ? "more" : void 0,
                onClick: E,
                clickableRef: (e) => {
                    null != e && null != e.ref && (o.current = e.ref);
                },
                className: O()(el.Mf, el.OS),
                "aria-label": j.intl.string(j.t["UKOtz+"]),
                children: (0, n.jsx)("div", {
                    "aria-hidden": "true",
                    className: el.Lj,
                    onMouseEnter: p,
                    onMouseLeave: b,
                    children: (0, n.jsx)(K.E, {
                        variant: "text-md/medium",
                        color: "none",
                        children: (0, n.jsxs)("span", {
                            className: el.hP,
                            children: [j.intl.string(j.t["UKOtz+"]), (0, n.jsx)(a, { size: "xs" })],
                        }),
                    }),
                }),
            });
        },
    });
}
function eo(e, t, l) {
    return e === l || (null != t.renderSubmenu && (0, T.dF)(l) && e === T.G2.CATALOG);
}
function ei(e) {
    let { className: t, selectedTab: l, tabs: s, onTabSelect: r } = e,
        [o, i] = a.useState(0),
        c = a.useRef(o),
        {
            lastVisibleIndex: u,
            onItemLayout: b,
            overflowItemsRef: m,
        } = (0, z.Wv)({ items: s, itemGapPx: 32, maxLines: 1, containerWidth: o }),
        p = a.useMemo(() => s.slice(0, u + 1), [u, s]),
        E = a.useMemo(() => s.slice(u + 1), [u, s]),
        C = a.useRef(null),
        h = a.useCallback((e) => {
            let t = e.contentRect.width;
            null != t && c.current !== t && (i(t), (c.current = t));
        }, []);
    (0, d.g)(C, h);
    let S = 0 !== o,
        f = E.some((e) => eo(e.tab, e, l));
    return (0, n.jsxs)("div", {
        className: O()(el.kL, t),
        ref: C,
        children: [
            (0, n.jsxs)("div", {
                className: el.Kk,
                "aria-hidden": "true",
                children: [
                    s.map((e, t) =>
                        (0, n.jsx)(
                            z.Ae,
                            {
                                index: t,
                                onItemLayout: b,
                                children: (0, n.jsx)(ea, {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: eo(e.tab, e, l),
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
                        children: (0, n.jsx)(er, { tabs: E, onTabSelect: r, selectedTab: l, selected: f }),
                    }),
                ],
            }),
            S &&
                (0, n.jsxs)(V.V, {
                    type: "top",
                    look: "brand",
                    selectedItem: l,
                    onItemSelect: r,
                    className: el.vR,
                    children: [
                        p.map((e) =>
                            (0, n.jsx)(
                                ea,
                                {
                                    tab: e.tab,
                                    label: e.label,
                                    selected: eo(e.tab, e, l),
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
                            ? (0, n.jsx)(er, { tabs: E, onTabSelect: r, selectedTab: l, selected: f })
                            : null,
                    ],
                }),
        ],
    });
}
var ec = l(812729),
    eu = l.n(ec),
    ed = l(627363),
    eb = l(587895),
    em = l(733391),
    ep = l(832163),
    eE = l(44724),
    eC = l(486020);
l(801416);
var eh = l(518477),
    eS = l(632847),
    ef = l(835018);
function eA(e) {
    let { selectedTab: t, handleTransition: l } = e,
        L = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        O = (function (e) {
            let { location: t } = e;
            return E.useConfig({ location: t }).enabled;
        })({ location: "collectibles_shop_header_bar" }),
        y = (0, A.sk)("CollectiblesShopHeaderBar"),
        _ = null != (0, g.A)(),
        { searchQuery: R } = (0, x.v)(),
        v = a.useRef(null),
        [N, B] = a.useState(!1);
    (0, d.g)(
        v,
        a.useCallback((e) => {
            B(e.contentRect.width < 800);
        }, []),
    );
    let { gameShops: $, hasGameShops: D } = (function (e) {
            let { enabled: t } = e,
                l = (0, w.uM)(),
                n = (0, r.yK)(
                    [ep.A],
                    () =>
                        t
                            ? (ep.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled)
                            : [],
                    [t],
                );
            a.useEffect(() => {
                t && (0, em.Xw)();
            }, [t]),
                a.useEffect(() => {
                    n.length > 0 &&
                        ed.Ay.fetchApplications(
                            n.map((e) => e.applicationId),
                            !1,
                        );
                }, [n]);
            let s = a.useCallback(
                    (e) => {
                        P.default.track(H.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: l?.sessionId,
                            page_type: T.G2.GAME_SHOPS,
                            page_category: l?.pageCategory,
                            page_section: l?.pageSection,
                            tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                            cta_name: "go_to_game_shop",
                        }),
                            (0, eE.default)({ applicationId: e }).catch(() => {});
                    },
                    [l],
                ),
                o = (0, r.bG)(
                    [eb.A],
                    () =>
                        n.flatMap((e) => {
                            let t = eb.A.getApplication(e.applicationId),
                                l = t?.name;
                            return null == l
                                ? []
                                : [
                                      {
                                          id: e.applicationId,
                                          label: l,
                                          iconSrc:
                                              t?.icon != null
                                                  ? eC.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                                  : void 0,
                                      },
                                  ];
                        }),
                    [n],
                    eu(),
                );
            return {
                gameShops: a.useMemo(() => o.map((e) => ({ ...e, onSelect: () => s(e.id) })), [o, s]),
                hasGameShops: n.length > 0,
            };
        })({ enabled: O }),
        z = (0, b.H)({ location: "collectibles_shop_header_bar" }),
        K = a.useMemo(() => {
            let e = [
                { tab: T.G2.HOME, label: j.intl.string(j.t["xNiB/O"]) },
                {
                    tab: T.G2.CATALOG,
                    label: j.intl.string(j.t.FshAeN),
                    renderSubmenu: (e) => {
                        let { onClose: t } = e;
                        return (0, n.jsx)(F, { handleTransition: l, onClose: t });
                    },
                    renderOverflowContent: (e) => {
                        let { onClose: t } = e;
                        return (function (e) {
                            let { canViewProfileFrames: t, hasActivePromotion: l, onTabSelect: a, onClose: s } = e;
                            return M({ canViewProfileFrames: t, hasActivePromotion: l }).map((e) => {
                                let { tab: t, labelKey: l } = e,
                                    r = k(t);
                                return (0, n.jsx)(
                                    I.Dr,
                                    {
                                        id: t,
                                        label: j.intl.string(l),
                                        badge: t === T.G2.PROFILE_FRAMES ? "new" : void 0,
                                        trailingIndicator: null != r ? { type: "icon", icon: r } : void 0,
                                        action: () => {
                                            a(t), s();
                                        },
                                    },
                                    t,
                                );
                            });
                        })({ canViewProfileFrames: y, hasActivePromotion: _, onTabSelect: l, onClose: t });
                    },
                },
            ];
            return (
                e.push({ tab: T.G2.ORBS, label: j.intl.string(j.t.EBYkzk) }),
                O &&
                    D &&
                    e.push({
                        tab: T.G2.GAME_SHOPS,
                        label: j.intl.string(j.t.FkjcWY),
                        submenuOnly: !0,
                        renderSubmenu: (e) => {
                            let { onClose: t } = e;
                            return (0, n.jsx)(G, { shops: $, onClose: t });
                        },
                        renderOverflowContent: (e) => {
                            let { onClose: t } = e;
                            return (function (e) {
                                let { shops: t, onClose: l } = e;
                                return t.map((e) =>
                                    (0, n.jsx)(
                                        I.Dr,
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
                            })({ shops: $, onClose: t });
                        },
                    }),
                z &&
                    e.push({
                        tab: T.G2.GAME_SERVERS,
                        label: j.intl.string(eS.default.vCzwM7),
                        trailingBadge: j.intl.string(j.t.oW0eUd),
                    }),
                e
            );
        }, [l, $, y, _, O, D, z]),
        q = t === T.G2.ORBS ? H.liQ.SHOP_ORBS_TAB : H.liQ.COLLECTIBLES_SHOP,
        V = a.useCallback(() => {
            (0, h.Y)({ pageType: q, sectionType: H.JJy.ORBS_BALANCE_MENU, ctaObject: H.ZSU.CTA_TO_QUEST_HOME }),
                (0, p.mA)({ fromContent: s.u.ORBS_BALANCE_MENU });
        }, [q]),
        W = a.useCallback(() => {
            L?.id != null && (0, C.openUserProfileModal)({ userId: L.id, tabSection: eh.RP.WISHLIST });
        }, [L?.id]),
        Y = a.useCallback(
            (e) => {
                l(e);
            },
            [l],
        );
    return (0, n.jsx)("div", {
        ref: v,
        children: (0, n.jsxs)(m.A, {
            disableDoubleClick: !0,
            className: ef.jr,
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(U, { handleTransition: l, selectedTab: t, isNarrow: N, hasText: "" !== R }),
                    (0, n.jsx)(o.D, {
                        className: ef.ij,
                        onClick: W,
                        "aria-label": j.intl.string(j.t["7lZ31J"]),
                        children: (0, n.jsx)(i.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(S.SS, {
                        analyticsPage: q,
                        cardAlignment: S.SS.CardAlignment.END,
                        ctaText: j.intl.string(j.t.VC4Mq0),
                        ctaOnClick: V,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(o.D, {
                    className: ef.sU,
                    onClick: () => l(T.G2.HOME),
                    "aria-label": j.intl.string(j.t["5upuqx"]),
                    children: (0, n.jsx)(c.U, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(ei, { tabs: K, selectedTab: t, onTabSelect: Y }),
            ],
        }),
    });
}
