l.d(t, { G: () => eE });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    r = l.n(i),
    s = l(696292),
    o = l(17928),
    c = l(939249),
    u = l(926268),
    d = l(34188),
    E = l(661531),
    p = l(770178),
    A = l(742589),
    f = l(617986),
    C = l(402860),
    S = l(318346),
    _ = l(70926),
    g = l(287809),
    h = l(365491),
    O = l(435558),
    b = l(834730),
    L = l(7689),
    I = l(683438),
    T = l(265872),
    m = l(444927),
    G = l(775602),
    R = l(174459),
    x = l(440938),
    y = l(945810),
    v = l(758836);
let N = (0, y.mj)({
    name: "2026-10-collectibles-upgraded-search",
    kind: "user",
    defaultConfig: { enabled: !1, searchBarWidthPx: v.hE.DEFAULT },
    variations: { 0: { enabled: !1, searchBarWidthPx: v.hE.DEFAULT }, 1: { enabled: !0, searchBarWidthPx: v.hE.WIDE } },
});
var B = l(652215),
    M = l(841998),
    k = l(105292),
    P = l(848913);
let F = [
        M.default.bKvkzB,
        M.default["U+7iha"],
        M.default.fwKulM,
        M.default.KqfZhk,
        M.default.amuakh,
        M.default["5txfu7"],
        M.default.SxlobC,
        M.default.bnJVgJ,
        M.default.Z4b7dI,
        M.default.M6igKM,
        M.default.qozQ5X,
        M.default.tu6vgS,
        M.default["w/OnRT"],
        M.default["+EMTB/"],
        M.default.Ib3xUj,
        M.default["7DZ2Fj"],
        M.default.cChmCO,
        M.default["H0zY/q"],
        M.default["+Bo7fD"],
        M.default["o/+isu"],
        M.default.MzFZoP,
        M.default["NKZY+Z"],
        M.default["SM4C+M"],
        M.default.rsvVIs,
        M.default["kmA+p3"],
        M.default["S+ZC67"],
    ],
    H = "collectibles-search-suggestions",
    j = `${H}-header`;
function D() {
    return (0, O.sampleSize)(F, 7).map((e) => k.intl.string(e));
}
function w(e) {
    e.preventDefault();
}
function U(e) {
    let { suggestions: t, selectedIndex: l, onSelect: a, onHover: i } = e;
    return (0, n.jsxs)("div", {
        className: P.Gn,
        onMouseDown: w,
        children: [
            (0, n.jsx)("div", {
                id: j,
                className: P.Xe,
                children: (0, n.jsx)(b.E, {
                    variant: "text-xs/semibold",
                    color: "text-subtle",
                    children: k.intl.string(k.t.eYMbUC),
                }),
            }),
            (0, n.jsx)("div", {
                role: "listbox",
                id: H,
                tabIndex: -1,
                "aria-labelledby": j,
                className: P.sq,
                children: t.map((e, t) =>
                    (0, n.jsx)(
                        c.D,
                        {
                            id: `${H}-${t}`,
                            role: "option",
                            tabIndex: -1,
                            "aria-selected": t === l,
                            className: P.h,
                            onClick: () => a(t),
                            onMouseEnter: () => i(t),
                            children: (0, n.jsx)(b.E, { variant: "text-sm/medium", color: "text-strong", children: e }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function V(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: i, hasText: s } = e,
        u = (0, m.A)(D),
        { searchQuery: d, onSetSearchQuery: p } = (0, h.v)(),
        [A, f] = a.useState(""),
        C = (0, x.uM)(),
        S = (0, o.bG)([G.Ay], () => G.Ay.useReducedMotion),
        { enabled: _, searchBarWidthPx: g } = N.useConfig({ location: "collectibles_search_bar" }),
        O = a.useRef(null),
        [b, y] = a.useState(!1),
        F = a.useRef(null),
        [j, w] = a.useState(!1),
        [V, K] = a.useState(!1),
        [z, Y] = a.useState(-1),
        [q, W] = a.useState(0),
        X = _ && j && !V && "" === A;
    (a.useEffect(() => {
        let e = setTimeout(() => {
            p(A);
        }, 250);
        return () => clearTimeout(e);
    }, [A, p]),
        a.useEffect(() => {
            f(d);
        }, [d]),
        a.useEffect(() => {
            if (!_ || "" !== A || j || S) return;
            let e = setInterval(() => {
                W((e) => (e + 1) % u.length);
            }, 5e3);
            return () => clearInterval(e);
        }, [_, A, j, S, u]),
        a.useEffect(() => {
            y(i && s);
        }, [i, s]));
    let Z = a.useCallback(
            (e, t, n) => {
                R.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        $ = a.useCallback(
            (e) => {
                let t = u[e];
                (f(t), p(t), Y(-1), Z(t, v.Xi.SEARCH_SUGGESTION, e));
            },
            [p, Z, u],
        ),
        J = a.useCallback(
            (e) => {
                if (X && ("ArrowDown" === e.key || "ArrowUp" === e.key)) {
                    e.preventDefault();
                    let t = "ArrowDown" === e.key ? 1 : -1;
                    Y((e) => {
                        let l = e + t;
                        return l < 0 ? u.length - 1 : l >= u.length ? 0 : l;
                    });
                    return;
                }
                if (X && "Escape" === e.key) {
                    (e.preventDefault(), K(!0), Y(-1));
                    return;
                }
                if ("Enter" === e.key) {
                    if (X && z >= 0) return void $(z);
                    p(A);
                }
            },
            [A, p, X, z, $, u],
        ),
        Q = a.useCallback((e) => {
            (f(e), K(!1), Y(-1));
        }, []),
        ee = a.useCallback(() => {
            (w(!0), K(!1), Y(-1));
        }, []),
        et = a.useCallback(() => {
            (l !== v.G2.CATALOG && t(v.G2.CATALOG),
                Z(v.uY.SEARCH_ICON, v.Xi.SEARCH),
                y(!0),
                setTimeout(() => O.current?.focus()));
        }, [l, t, Z]),
        el = a.useCallback(() => {
            (l !== v.G2.CATALOG && t(v.G2.CATALOG), Z(v.uY.SEARCH_BAR, v.Xi.SEARCH));
        }, [l, t, Z]),
        en = a.useCallback(() => {
            (f(""), p(""), Z(v.uY.SEARCH_BAR_CLEAR, v.Xi.SEARCH), i && y(!1));
        }, [p, Z, i]),
        ea = a.useCallback(() => {
            (w(!1), i && "" === A && y(!1));
        }, [i, A]),
        ei = i && !b,
        er = (0, n.jsx)(c.D, {
            className: P.qc,
            onClick: et,
            children: (0, n.jsx)(L.MagnifyingGlassIcon, { size: "sm", color: E.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        es = k.intl.string(k.t.arz34K),
        eo = (0, n.jsx)(I.I, {
            size: "sm",
            ref: O,
            onKeyDown: J,
            query: A,
            onChange: Q,
            onClear: en,
            onFocus: ee,
            onBlur: ea,
            inputProps: _
                ? {
                      role: "combobox",
                      "aria-expanded": X,
                      "aria-controls": X ? H : void 0,
                      "aria-autocomplete": "list",
                      "aria-activedescendant": X && z >= 0 ? `${H}-${z}` : void 0,
                  }
                : void 0,
            placeholder: !_ || S ? es : k.intl.formatToPlainString(M.default.bRwRwX, { option: u[q] }),
            "aria-label": es,
        }),
        ec = { "--custom-search-bar-width": `${g}px`, "--custom-search-bar-icon-width": `${v.Dy}px` };
    return ei
        ? (0, n.jsx)("div", { style: ec, children: er })
        : (0, n.jsx)(T.Y, {
              targetElementRef: F,
              renderPopout: () =>
                  (0, n.jsx)("div", {
                      style: ec,
                      children: (0, n.jsx)(U, { suggestions: u, selectedIndex: z, onSelect: $, onHover: Y }),
                  }),
              position: "bottom",
              align: "right",
              animation: T.Y.Animation.NONE,
              shouldShow: X,
              autoInvert: !1,
              children: () =>
                  (0, n.jsx)("div", {
                      className: r()(P.ON, { [P.Nz]: b }),
                      style: ec,
                      children: (0, n.jsx)(c.D, { innerRef: F, ignoreKeyPress: !0, onClick: el, children: eo }),
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
    er = l(486020),
    es = l(351585);
let eo = [
    { tab: v.G2.OFFER_ELIGIBLE, labelKey: k.t.hY8Ft1 },
    { tab: v.G2.AVATAR_DECORATIONS, labelKey: k.t.dRZYNE },
    { tab: v.G2.NAMEPLATES, labelKey: k.t.V68Fqz },
    { tab: v.G2.PROFILE_EFFECTS, labelKey: k.t["1cNjtx"] },
    { tab: v.G2.PROFILE_FRAMES, labelKey: k.t.ecTJkR },
    { tab: v.G2.BUNDLES, labelKey: k.t.FYFpps },
    { tab: v.G2.COLLABS, labelKey: k.t["+W8gb+"] },
    { tab: v.G2.CATALOG, labelKey: k.t.xFcotU },
];
var ec = l(783857);
l(801416);
var eu = l(518477),
    ed = l(835018);
function eE(e) {
    let { selectedTab: t, selectedCollectionId: l, handleTransition: i } = e,
        O = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        b = (0, ec.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: L } = (0, h.v)(),
        I = a.useRef(null),
        [T, m] = a.useState(!1);
    (0, p.g)(
        I,
        a.useCallback((e) => {
            m(e.contentRect.width < 800);
        }, []),
    );
    let G = t === v.G2.ORBS ? B.liQ.SHOP_ORBS_TAB : B.liQ.COLLECTIBLES_SHOP,
        y = a.useCallback(() => {
            ((0, S.Y)({ pageType: G, sectionType: B.JJy.ORBS_BALANCE_MENU, ctaObject: B.ZSU.CTA_TO_QUEST_HOME }),
                (0, f.mA)({ fromContent: s.u.ORBS_BALANCE_MENU }));
        }, [G]),
        N = a.useCallback(() => {
            O?.id != null && (0, C.openUserProfileModal)({ userId: O.id, tabSection: eu.RP.WISHLIST });
        }, [O?.id]),
        M = (function (e) {
            let t,
                l,
                n,
                i,
                r,
                s,
                c,
                u,
                d,
                E,
                p,
                A = (0, Y.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
                { gameShops: f, hasGameShops: C } =
                    ((t = (0, x.uM)()),
                    (l = (0, o.yK)(
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
                            (R.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    (i = (0, o.bG)(
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
                                                      ? er.Ay.getApplicationIconURL({
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
                S = null != (0, $.HH)(),
                _ =
                    ((r = (0, X.A)(B.FYj)),
                    (s = (0, Z.XF)(r)),
                    (c = s?.shared.navigation?.tab),
                    (u = c?.title),
                    (d = c?.icon),
                    (E = s?.collectionId),
                    (p = r?.rewardStatus),
                    a.useMemo(
                        () =>
                            null == u || null == E || p === W.GM.CONSUMED
                                ? null
                                : { title: u, icon: d, collectionId: E },
                        [u, d, E, p],
                    ));
            return a.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return eo.filter((e) => {
                            let { tab: l } = e;
                            return l !== v.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: S }).map((t) => {
                        let { tab: l, labelKey: n } = t,
                            a = l === v.G2.OFFER_ELIGIBLE ? z.TagIcon : void 0;
                        return {
                            type: "page",
                            key: l,
                            text: k.intl.string(n),
                            onClick: () => e(l),
                            trailingIndicator: null != a ? { type: "icon", icon: a } : void 0,
                        };
                    }),
                    l = [
                        {
                            type: "page",
                            key: v.G2.HOME,
                            text: k.intl.string(k.t["xNiB/O"]),
                            route: B.BVt.COLLECTIBLES_SHOP_WITH_TAB(v.G2.HOME),
                            onClick: () => e(v.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: v.G2.CATALOG,
                            text: k.intl.string(k.t.FshAeN),
                            route: B.BVt.COLLECTIBLES_SHOP_WITH_TAB(v.G2.CATALOG),
                            onClick: () => e(v.G2.CATALOG),
                            expandLabel: k.intl.string(k.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: v.G2.ORBS,
                            text: k.intl.string(k.t.fG3RIg),
                            route: B.BVt.COLLECTIBLES_SHOP_WITH_TAB(v.G2.ORBS),
                            onClick: () => e(v.G2.ORBS),
                        },
                    ];
                if (
                    (C &&
                        l.push({
                            type: "menu",
                            key: v.G2.GAME_SHOPS,
                            text: k.intl.string(k.t.FkjcWY),
                            expandLabel: k.intl.string(k.t.bf9uMH),
                            options: f,
                        }),
                    A &&
                        l.push({
                            type: "page",
                            key: v.G2.GAME_SERVERS,
                            text: k.intl.string(es.default.vCzwM7),
                            route: B.BVt.COLLECTIBLES_SHOP_WITH_TAB(v.G2.GAME_SERVERS),
                            onClick: () => e(v.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != _)
                ) {
                    let e = B.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(_.collectionId),
                        t = (0, J.s)(_.icon);
                    l.push({
                        type: "page",
                        key: v.G2.PROMOTION,
                        text: _.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, q.pX)(e),
                    });
                }
                return l;
            }, [e, S, _, A, C, f]);
        })(
            a.useCallback(
                (e) => {
                    i(e);
                },
                [i],
            ),
        ),
        P = a.useMemo(() => {
            if (null == l) return !1;
            let e = M.find((e) => e.key === v.G2.PROMOTION);
            if (null == e) return !1;
            let t = B.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l);
            return e.route === t;
        }, [M, l])
            ? v.G2.PROMOTION
            : t;
    return (0, n.jsx)("div", {
        ref: I,
        children: (0, n.jsxs)(A.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: r()(ed.jr, { [ec.jP]: b }),
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(V, { handleTransition: i, selectedTab: t, isNarrow: T, hasText: "" !== L }),
                    (0, n.jsx)(c.D, {
                        className: ed.ij,
                        onClick: N,
                        "aria-label": k.intl.string(k.t["7lZ31J"]),
                        children: (0, n.jsx)(u.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(_.SS, {
                        analyticsPage: G,
                        cardAlignment: _.SS.CardAlignment.END,
                        ctaText: k.intl.string(k.t.VC4Mq0),
                        ctaOnClick: y,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(c.D, {
                    className: ed.sU,
                    onClick: () => i(v.G2.HOME),
                    "aria-label": k.intl.string(k.t["5upuqx"]),
                    children: (0, n.jsx)(d.U, { size: "md", color: E.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(K.A, {
                    "aria-label": k.intl.string(k.t["5upuqx"]),
                    className: ed.IV,
                    options: M,
                    selectedKey: P,
                    overflowLabel: k.intl.string(k.t["UKOtz+"]),
                    overflowExpandLabel: k.intl.string(k.t.PEtHiE),
                }),
            ],
        }),
    });
}
