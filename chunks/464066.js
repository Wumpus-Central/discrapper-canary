l.d(t, { G: () => eE });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
    o = l(696292),
    r = l(17928),
    c = l(939249),
    u = l(926268),
    d = l(34188),
    E = l(661531),
    A = l(770178),
    p = l(742589),
    C = l(617986),
    f = l(402860),
    S = l(318346),
    O = l(70926),
    b = l(287809),
    g = l(365491),
    _ = l(435558),
    L = l(834730),
    h = l(7689),
    I = l(683438),
    T = l(265872),
    G = l(444927),
    m = l(775602),
    x = l(174459),
    R = l(440938),
    y = l(945810),
    v = l(758836);
let B = (0, y.mj)({
    name: "2026-10-collectibles-upgraded-search",
    kind: "user",
    defaultConfig: { enabled: !1, searchBarWidthPx: v.hE.DEFAULT },
    variations: { 0: { enabled: !1, searchBarWidthPx: v.hE.DEFAULT }, 1: { enabled: !0, searchBarWidthPx: v.hE.WIDE } },
});
var N = l(652215),
    k = l(711537),
    M = l(105292),
    F = l(848913);
let P = [
        k.default.bKvkzB,
        k.default["U+7iha"],
        k.default.fwKulM,
        k.default.KqfZhk,
        k.default.amuakh,
        k.default["5txfu7"],
        k.default.SxlobC,
        k.default.bnJVgJ,
        k.default.Z4b7dI,
        k.default.M6igKM,
        k.default.qozQ5X,
        k.default.tu6vgS,
        k.default["w/OnRT"],
        k.default["+EMTB/"],
        k.default.Ib3xUj,
        k.default["7DZ2Fj"],
        k.default.cChmCO,
        k.default["H0zY/q"],
        k.default["+Bo7fD"],
        k.default["o/+isu"],
        k.default.MzFZoP,
        k.default["NKZY+Z"],
        k.default["SM4C+M"],
        k.default.rsvVIs,
        k.default["kmA+p3"],
        k.default["S+ZC67"],
    ],
    H = "collectibles-search-suggestions",
    j = `${H}-header`;
function D() {
    return (0, _.sampleSize)(P, 7).map((e) => M.intl.string(e));
}
function w(e) {
    e.preventDefault();
}
function U(e) {
    let { suggestions: t, selectedIndex: l, onSelect: a, onHover: i } = e;
    return (0, n.jsxs)("div", {
        className: F.Gn,
        onMouseDown: w,
        children: [
            (0, n.jsx)("div", {
                id: j,
                className: F.Xe,
                children: (0, n.jsx)(L.E, {
                    variant: "text-xs/semibold",
                    color: "text-subtle",
                    children: M.intl.string(M.t.eYMbUC),
                }),
            }),
            (0, n.jsx)("div", {
                role: "listbox",
                id: H,
                tabIndex: -1,
                "aria-labelledby": j,
                className: F.sq,
                children: t.map((e, t) =>
                    (0, n.jsx)(
                        c.D,
                        {
                            id: `${H}-${t}`,
                            role: "option",
                            tabIndex: -1,
                            "aria-selected": t === l,
                            className: F.h,
                            onClick: () => a(t),
                            onMouseEnter: () => i(t),
                            children: (0, n.jsx)(L.E, { variant: "text-sm/medium", color: "text-strong", children: e }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function V(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: i, hasText: o } = e,
        u = (0, G.A)(D),
        { searchQuery: d, onSetSearchQuery: E } = (0, g.v)(),
        [A, p] = a.useState(""),
        C = (0, R.uM)(),
        f = (0, r.bG)([m.Ay], () => m.Ay.useReducedMotion),
        { enabled: S, searchBarWidthPx: O } = B.useConfig({ location: "collectibles_search_bar" }),
        b = a.useRef(null),
        [_, L] = a.useState(!1),
        y = a.useRef(null),
        [P, j] = a.useState(!1),
        [w, V] = a.useState(!1),
        [K, z] = a.useState(-1),
        [Y, q] = a.useState(0),
        W = S && P && !w && "" === A;
    (a.useEffect(() => {
        let e = setTimeout(() => {
            E(A);
        }, 250);
        return () => clearTimeout(e);
    }, [A, E]),
        a.useEffect(() => {
            p(d);
        }, [d]),
        a.useEffect(() => {
            if (!S || "" !== A || P || f) return;
            let e = setInterval(() => {
                q((e) => (e + 1) % u.length);
            }, 5e3);
            return () => clearInterval(e);
        }, [S, A, P, f, u]),
        a.useEffect(() => {
            L(i && o);
        }, [i, o]));
    let X = a.useCallback(
            (e, t, n) => {
                x.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: C?.sessionId,
                    page_section: C?.pageSection,
                    page_category: C?.pageCategory,
                    page_index: C?.pageIndex,
                    page_size: C?.pageSize,
                    cta_name: e,
                    page_type: l,
                    tile_type: t,
                    tile_position: null != n ? String(n) : void 0,
                });
            },
            [l, C],
        ),
        Z = a.useCallback(
            (e) => {
                let t = u[e];
                (p(t), E(t), z(-1), X(t, v.Xi.SEARCH_SUGGESTION, e));
            },
            [E, X, u],
        ),
        $ = a.useCallback(
            (e) => {
                if (W && ("ArrowDown" === e.key || "ArrowUp" === e.key)) {
                    e.preventDefault();
                    let t = "ArrowDown" === e.key ? 1 : -1;
                    z((e) => {
                        let l = e + t;
                        return l < 0 ? u.length - 1 : l >= u.length ? 0 : l;
                    });
                    return;
                }
                if (W && "Escape" === e.key) {
                    (e.preventDefault(), V(!0), z(-1));
                    return;
                }
                if ("Enter" === e.key) {
                    if (W && K >= 0) return void Z(K);
                    E(A);
                }
            },
            [A, E, W, K, Z, u],
        ),
        J = a.useCallback((e) => {
            (p(e), V(!1), z(-1));
        }, []),
        Q = a.useCallback(() => {
            (j(!0), V(!1), z(-1));
        }, []),
        ee = a.useCallback(() => {
            (l !== v.G2.CATALOG && t(v.G2.CATALOG),
                X(v.uY.SEARCH_ICON, v.Xi.SEARCH),
                L(!0),
                setTimeout(() => b.current?.focus()));
        }, [l, t, X]),
        et = a.useCallback(() => {
            (l !== v.G2.CATALOG && t(v.G2.CATALOG), X(v.uY.SEARCH_BAR, v.Xi.SEARCH));
        }, [l, t, X]),
        el = a.useCallback(() => {
            (p(""), E(""), X(v.uY.SEARCH_BAR_CLEAR, v.Xi.SEARCH), i && L(!1));
        }, [E, X, i]),
        en = a.useCallback(() => {
            (j(!1), i && "" === A && L(!1));
        }, [i, A]),
        ea = i && !_,
        ei = M.intl.string(M.t.arz34K),
        es = (0, n.jsx)(c.D, {
            className: F.qc,
            onClick: ee,
            "aria-label": ei,
            children: (0, n.jsx)(h.MagnifyingGlassIcon, { size: "xs", color: "currentColor" }),
        }),
        eo = (0, n.jsx)(I.I, {
            size: "sm",
            ref: b,
            onKeyDown: $,
            query: A,
            onChange: J,
            onClear: el,
            onFocus: Q,
            onBlur: en,
            inputProps: S
                ? {
                      role: "combobox",
                      "aria-expanded": W,
                      "aria-controls": W ? H : void 0,
                      "aria-autocomplete": "list",
                      "aria-activedescendant": W && K >= 0 ? `${H}-${K}` : void 0,
                  }
                : void 0,
            placeholder: !S || f ? ei : M.intl.formatToPlainString(k.default.bRwRwX, { option: u[Y] }),
            "aria-label": ei,
        }),
        er = { "--custom-search-bar-width": `${O}px` };
    return ea
        ? (0, n.jsx)("div", { style: er, children: es })
        : (0, n.jsx)(T.Y, {
              targetElementRef: y,
              renderPopout: () =>
                  (0, n.jsx)("div", {
                      style: er,
                      children: (0, n.jsx)(U, { suggestions: u, selectedIndex: K, onSelect: Z, onHover: z }),
                  }),
              position: "bottom",
              align: "right",
              animation: T.Y.Animation.NONE,
              shouldShow: W,
              autoInvert: !1,
              children: () =>
                  (0, n.jsx)("div", {
                      className: s()(F.ON, { [F.Nz]: _ }),
                      style: er,
                      children: (0, n.jsx)(c.D, { innerRef: y, ignoreKeyPress: !0, onClick: et, children: eo }),
                  }),
          });
}
var K = l(173127);
l(321073);
var z = l(278416),
    Y = l(196736),
    q = l(976860),
    W = l(288106),
    X = l(223311),
    Z = l(65238),
    $ = l(758461),
    J = l(151115),
    Q = l(812729),
    ee = l.n(Q),
    et = l(627363),
    el = l(587895),
    en = l(733391),
    ea = l(832163),
    ei = l(44724),
    es = l(486020),
    eo = l(135570);
let er = [
    { tab: v.G2.OFFER_ELIGIBLE, labelKey: M.t.hY8Ft1 },
    { tab: v.G2.AVATAR_DECORATIONS, labelKey: M.t.dRZYNE },
    { tab: v.G2.NAMEPLATES, labelKey: M.t.V68Fqz },
    { tab: v.G2.PROFILE_EFFECTS, labelKey: M.t["1cNjtx"] },
    { tab: v.G2.PROFILE_FRAMES, labelKey: M.t.ecTJkR },
    { tab: v.G2.BUNDLES, labelKey: M.t.FYFpps },
    { tab: v.G2.COLLABS, labelKey: M.t["+W8gb+"] },
    { tab: v.G2.CATALOG, labelKey: M.t.xFcotU },
];
var ec = l(783857);
l(801416);
var eu = l(518477),
    ed = l(835018);
function eE(e) {
    let { selectedTab: t, selectedCollectionId: l, handleTransition: i } = e,
        _ = (0, r.bG)([b.default], () => b.default.getCurrentUser()),
        L = (0, ec.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: h } = (0, g.v)(),
        I = a.useRef(null),
        [T, G] = a.useState(!1);
    (0, A.g)(
        I,
        a.useCallback((e) => {
            G(e.contentRect.width < 800);
        }, []),
    );
    let m = t === v.G2.ORBS ? N.liQ.SHOP_ORBS_TAB : N.liQ.COLLECTIBLES_SHOP,
        y = a.useCallback(() => {
            ((0, S.Y)({ pageType: m, sectionType: N.JJy.ORBS_BALANCE_MENU, ctaObject: N.ZSU.CTA_TO_QUEST_HOME }),
                (0, C.mA)({ fromContent: o.u.ORBS_BALANCE_MENU }));
        }, [m]),
        B = a.useCallback(() => {
            _?.id != null && (0, f.openUserProfileModal)({ userId: _.id, tabSection: eu.RP.WISHLIST });
        }, [_?.id]),
        k = (function (e) {
            let t,
                l,
                n,
                i,
                s,
                o,
                c,
                u,
                d,
                E,
                A,
                p,
                C,
                f,
                S,
                O,
                b,
                g = (0, Y.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
                { gameShops: _, hasGameShops: L } =
                    ((t = (0, R.uM)()),
                    (l = (0, r.yK)(
                        [ea.A],
                        () => (ea.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
                        [],
                    )),
                    a.useEffect(() => {
                        (0, en.Xw)();
                    }, []),
                    a.useEffect(() => {
                        l.length > 0 &&
                            et.Ay.fetchApplications(
                                l.map((e) => e.applicationId),
                                !1,
                            );
                    }, [l]),
                    (n = a.useCallback(
                        (e) => {
                            (x.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: t?.sessionId,
                                page_type: v.G2.GAME_SHOPS,
                                page_category: t?.pageCategory,
                                page_section: t?.pageSection,
                                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                                cta_name: "go_to_game_shop",
                            }),
                                (0, ei.default)({ applicationId: e }).catch(() => {}));
                        },
                        [t],
                    )),
                    (i = (0, r.bG)(
                        [el.A],
                        () =>
                            l.flatMap((e) => {
                                let t = el.A.getApplication(e.applicationId),
                                    l = t?.name;
                                return null == l
                                    ? []
                                    : [
                                          {
                                              id: e.applicationId,
                                              label: l,
                                              iconSrc:
                                                  t?.icon != null
                                                      ? es.Ay.getApplicationIconURL({
                                                            id: t.id,
                                                            icon: t.icon,
                                                            size: 32,
                                                        })
                                                      : void 0,
                                          },
                                      ];
                            }),
                        [l],
                        ee(),
                    )),
                    {
                        gameShops: a.useMemo(
                            () =>
                                i.map((e) => ({
                                    type: "page",
                                    key: e.id,
                                    text: e.label,
                                    iconSrc: e.iconSrc,
                                    onClick: () => n(e.id),
                                })),
                            [i, n],
                        ),
                        hasGameShops: l.length > 0,
                    }),
                h = null != (0, $.HH)(),
                I =
                    ((s = (0, X.A)(N.FYj)),
                    (o = (0, Z.XF)(s)),
                    (c = o?.shared.navigation?.tab),
                    (u = c?.title),
                    (d = o?.collectionId),
                    (f =
                        (null == u || null == d || s?.rewardStatus === W.GM.CONSUMED
                            ? null
                            : { title: u, icon: c?.icon, collectionId: d }) ??
                        ((E = (0, Z.NN)(s)),
                        (A = E?.navigation?.tab),
                        (p = A?.title),
                        (C = E?.collectionId),
                        null == p || null == C ? null : { title: p, icon: A?.icon, collectionId: C })),
                    (S = f?.title),
                    (O = f?.icon),
                    (b = f?.collectionId),
                    a.useMemo(
                        () => (null == S || null == b ? null : { title: S, icon: O, collectionId: b }),
                        [S, O, b],
                    ));
            return a.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return er.filter((e) => {
                            let { tab: l } = e;
                            return l !== v.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: h }).map((t) => {
                        let { tab: l, labelKey: n } = t,
                            a = l === v.G2.OFFER_ELIGIBLE ? z.TagIcon : void 0;
                        return {
                            type: "page",
                            key: l,
                            text: M.intl.string(n),
                            onClick: () => e(l),
                            trailingIndicator: null != a ? { type: "icon", icon: a } : void 0,
                        };
                    }),
                    l = [
                        {
                            type: "page",
                            key: v.G2.HOME,
                            text: M.intl.string(M.t["xNiB/O"]),
                            route: N.BVt.COLLECTIBLES_SHOP_WITH_TAB(v.G2.HOME),
                            onClick: () => e(v.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: v.G2.CATALOG,
                            text: M.intl.string(M.t.FshAeN),
                            route: N.BVt.COLLECTIBLES_SHOP_WITH_TAB(v.G2.CATALOG),
                            onClick: () => e(v.G2.CATALOG),
                            expandLabel: M.intl.string(M.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: v.G2.ORBS,
                            text: M.intl.string(M.t.fG3RIg),
                            route: N.BVt.COLLECTIBLES_SHOP_WITH_TAB(v.G2.ORBS),
                            onClick: () => e(v.G2.ORBS),
                        },
                    ];
                if (
                    (L &&
                        l.push({
                            type: "menu",
                            key: v.G2.GAME_SHOPS,
                            text: M.intl.string(M.t.FkjcWY),
                            expandLabel: M.intl.string(M.t.bf9uMH),
                            options: _,
                        }),
                    g &&
                        l.push({
                            type: "page",
                            key: v.G2.GAME_SERVERS,
                            text: M.intl.string(eo.default.vCzwM7),
                            route: N.BVt.COLLECTIBLES_SHOP_WITH_TAB(v.G2.GAME_SERVERS),
                            onClick: () => e(v.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != I)
                ) {
                    let e = N.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(I.collectionId),
                        t = (0, J.s)(I.icon);
                    l.push({
                        type: "page",
                        key: v.G2.PROMOTION,
                        text: I.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, q.pX)(e),
                    });
                }
                return l;
            }, [e, h, I, g, L, _]);
        })(
            a.useCallback(
                (e) => {
                    i(e);
                },
                [i],
            ),
        ),
        F = a.useMemo(() => {
            if (null == l) return !1;
            let e = k.find((e) => e.key === v.G2.PROMOTION);
            if (null == e) return !1;
            let t = N.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l);
            return e.route === t;
        }, [k, l])
            ? v.G2.PROMOTION
            : t;
    return (0, n.jsx)("div", {
        ref: I,
        children: (0, n.jsxs)(p.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: s()(ed.jr, { [ec.jP]: L }),
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(V, { handleTransition: i, selectedTab: t, isNarrow: T, hasText: "" !== h }),
                    (0, n.jsx)(c.D, {
                        className: ed.ij,
                        onClick: B,
                        "aria-label": M.intl.string(M.t["7lZ31J"]),
                        children: (0, n.jsx)(u.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(O.SS, {
                        analyticsPage: m,
                        cardAlignment: O.SS.CardAlignment.END,
                        ctaText: M.intl.string(M.t.VC4Mq0),
                        ctaOnClick: y,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(c.D, {
                    className: ed.sU,
                    onClick: () => i(v.G2.HOME),
                    "aria-label": M.intl.string(M.t["5upuqx"]),
                    children: (0, n.jsx)(d.U, { size: "md", color: E.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(K.A, {
                    "aria-label": M.intl.string(M.t["5upuqx"]),
                    className: ed.IV,
                    options: k,
                    selectedKey: F,
                    overflowLabel: M.intl.string(M.t["UKOtz+"]),
                    overflowExpandLabel: M.intl.string(M.t.PEtHiE),
                }),
            ],
        }),
    });
}
