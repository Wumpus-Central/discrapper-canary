n.d(t, { G: () => eg });
var l = n(477900),
    a = n(582128),
    s = n(503698),
    i = n.n(s),
    r = n(696292),
    o = n(855986),
    c = n(939249),
    d = n(926268),
    u = n(34188),
    m = n(646514),
    g = n(770178),
    E = n(742589),
    h = n(321538),
    f = n(702476),
    x = n(318346),
    C = n(863705),
    p = n(287809),
    S = n(365491),
    A = n(435558),
    v = n(834730),
    _ = n(7689),
    I = n(683438),
    b = n(265872),
    j = n(444927),
    L = n(775602),
    N = n(129230),
    O = n(440938),
    T = n(945810),
    y = n(758836);
let R = (0, T.mj)({
    name: "2026-10-collectibles-upgraded-search",
    kind: "user",
    defaultConfig: { enabled: !1, searchBarWidthPx: y.hE.DEFAULT },
    variations: { 0: { enabled: !1, searchBarWidthPx: y.hE.DEFAULT }, 1: { enabled: !0, searchBarWidthPx: y.hE.WIDE } },
});
var M = n(652215),
    k = n(143461),
    P = n(792996),
    G = n(848913);
let D = [
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
    B = "collectibles-search-suggestions",
    F = `${B}-header`;
function H() {
    return (0, A.sampleSize)(D, 7).map((e) => P.intl.string(e));
}
function w(e) {
    e.preventDefault();
}
function U(e) {
    let { suggestions: t, selectedIndex: n, onSelect: a, onHover: s } = e;
    return (0, l.jsxs)("div", {
        className: G.Gn,
        onMouseDown: w,
        children: [
            (0, l.jsx)("div", {
                id: F,
                className: G.Xe,
                children: (0, l.jsx)(v.E, {
                    variant: "body-xs/semibold",
                    color: "text-subtle",
                    children: P.intl.string(P.t.eYMbUC),
                }),
            }),
            (0, l.jsx)("div", {
                role: "listbox",
                id: B,
                tabIndex: -1,
                "aria-labelledby": F,
                className: G.sq,
                children: t.map((e, t) =>
                    (0, l.jsx)(
                        c.D,
                        {
                            id: `${B}-${t}`,
                            role: "option",
                            tabIndex: -1,
                            "aria-selected": t === n,
                            className: G.h,
                            onClick: () => a(t),
                            onMouseEnter: () => s(t),
                            children: (0, l.jsx)(v.E, { variant: "body-sm/medium", color: "text-strong", children: e }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
let z = (e) => {
    let { option: t, optionKey: n, isFocused: a, isResumed: s } = e;
    return (0, l.jsx)("div", {
        "aria-hidden": !0,
        className: i()(G.pQ, { [G.Eo]: a }),
        children: (0, l.jsx)(v.E, {
            tag: "span",
            variant: "body-sm/normal",
            color: "none",
            children: P.intl.format(k.default.bRwRwX, {
                option: (0, l.jsx)(
                    "span",
                    {
                        className: i()(G.I5, { [G.vZ]: s }),
                        children: (0, l.jsx)("span", { className: G.e_, children: t }),
                    },
                    n,
                ),
            }),
        }),
    });
};
function V(e) {
    let { handleTransition: t, selectedTab: n, isNarrow: s, hasText: r } = e,
        d = (0, j.A)(H),
        { searchQuery: u, onSetSearchQuery: m } = (0, S.vs)(),
        [g, E] = a.useState(""),
        h = a.useRef(!1),
        f = (0, O.uM)(),
        { enabled: x, searchBarWidthPx: C } = R.useConfig({ location: "collectibles_search_bar" }),
        p = a.useRef(null),
        [A, v] = a.useState(!1),
        T = a.useRef(null),
        [k, D] = a.useState(!1),
        [F, w] = a.useState(!1),
        [V, K] = a.useState(-1),
        [Y, W] = a.useState(0),
        [$, Z] = a.useState(!1),
        q = x && k && !F && "" === g,
        Q = (0, o.bG)([L.Ay], () => L.Ay.useReducedMotion),
        X = x && !Q;
    (a.useEffect(() => {
        E(u);
    }, [u]),
        a.useEffect(() => {
            h.current = !1;
        }, [n]),
        a.useEffect(() => {
            if (!X || "" !== g || k) return;
            let e = setInterval(() => {
                (W((e) => (e + 1) % d.length), Z(!1));
            }, 7e3);
            return () => clearInterval(e);
        }, [X, g, k, d]),
        a.useEffect(() => {
            v(s && r);
        }, [s, r]));
    let J = a.useCallback(
            (e, t, l) => {
                N.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: f?.sessionId,
                    page_section: f?.pageSection,
                    page_category: f?.pageCategory,
                    page_index: f?.pageIndex,
                    page_size: f?.pageSize,
                    cta_name: e,
                    page_type: n,
                    tile_type: t,
                    tile_position: null != l ? String(l) : void 0,
                });
            },
            [n, f],
        ),
        ee = a.useCallback(
            (e) => {
                let l = e.trim();
                (E(l), n === y.G2.CATALOG)
                    ? m(l)
                    : h.current || ((h.current = !0), t(y.G2.CATALOG, !1, { searchQuery: l }));
            },
            [n, m, t],
        ),
        et = a.useCallback(
            (e) => {
                let t = d[e];
                (E(t), ee(t), K(-1), J(t, y.Xi.SEARCH_SUGGESTION, e));
            },
            [ee, J, d],
        ),
        en = a.useCallback(
            (e) => {
                if (q && ("ArrowDown" === e.key || "ArrowUp" === e.key)) {
                    e.preventDefault();
                    let t = "ArrowDown" === e.key ? 1 : -1;
                    K((e) => {
                        let n = e + t;
                        return n < 0 ? d.length - 1 : n >= d.length ? 0 : n;
                    });
                    return;
                }
                if (q && "Escape" === e.key) {
                    (e.preventDefault(), w(!0), K(-1));
                    return;
                }
                if ("Enter" === e.key) {
                    if (q && V >= 0) return void et(V);
                    ee(g);
                }
            },
            [g, ee, q, V, et, d],
        ),
        el = a.useCallback((e) => {
            (E(e), w(!1), K(-1));
        }, []),
        ea = a.useCallback(() => {
            (D(!0), Z(!0), w(!1), K(-1));
        }, []),
        es = a.useCallback(() => {
            (J(y.uY.SEARCH_ICON, y.Xi.SEARCH), v(!0), setTimeout(() => p.current?.focus()));
        }, [J]),
        ei = a.useCallback(() => {
            J(y.uY.SEARCH_BAR, y.Xi.SEARCH);
        }, [J]),
        er = a.useCallback(() => {
            (E(""), m(""), J(y.uY.SEARCH_BAR_CLEAR, y.Xi.SEARCH), s && v(!1));
        }, [m, J, s]),
        eo = a.useCallback(() => {
            (D(!1), s && "" === g && v(!1));
        }, [s, g]),
        ec = s && !A,
        ed = P.intl.string(P.t.arz34K),
        eu = (0, l.jsx)(c.D, {
            className: G.qc,
            onClick: es,
            "aria-label": ed,
            children: (0, l.jsx)(_.MagnifyingGlassIcon, { size: "xs", color: "currentColor" }),
        }),
        em = d[Y],
        eg = (0, l.jsxs)("div", {
            className: G.up,
            children: [
                (0, l.jsx)(I.I, {
                    size: "sm",
                    ref: p,
                    onKeyDown: en,
                    query: g,
                    onChange: el,
                    onClear: er,
                    onFocus: ea,
                    onBlur: eo,
                    inputProps: {
                        maxLength: 256,
                        ...(x
                            ? {
                                  role: "combobox",
                                  "aria-expanded": q,
                                  "aria-controls": q ? B : void 0,
                                  "aria-autocomplete": "list",
                                  "aria-activedescendant": q && V >= 0 ? `${B}-${V}` : void 0,
                              }
                            : void 0),
                        onClick: ei,
                    },
                    placeholder: X ? "" : ed,
                    "aria-label": ed,
                }),
                X && "" === g ? (0, l.jsx)(z, { option: em, optionKey: Y, isFocused: k, isResumed: $ }) : null,
            ],
        }),
        eE = { "--custom-search-bar-width": `${C}px` };
    return ec
        ? (0, l.jsx)("div", { style: eE, children: eu })
        : (0, l.jsx)(b.Y, {
              targetElementRef: T,
              renderPopout: () =>
                  (0, l.jsx)("div", {
                      style: eE,
                      children: (0, l.jsx)(U, { suggestions: d, selectedIndex: V, onSelect: et, onHover: K }),
                  }),
              position: "bottom",
              align: "right",
              animation: b.Y.Animation.NONE,
              shouldShow: q,
              autoInvert: !1,
              children: () =>
                  (0, l.jsx)("div", {
                      className: i()(G.ON, { [G.Nz]: A }),
                      style: eE,
                      children: (0, l.jsx)("div", { ref: T, children: eg }),
                  }),
          });
}
var K = n(971458);
n(321073);
var Y = n(278416),
    W = n(196736),
    $ = n(976860),
    Z = n(288106),
    q = n(223311),
    Q = n(65238),
    X = n(758461),
    J = n(812729),
    ee = n.n(J),
    et = n(627363),
    en = n(587895),
    el = n(733391),
    ea = n(832163),
    es = n(44724),
    ei = n(486020),
    er = n(22007),
    eo = n(105518);
let ec = [
    { tab: y.G2.OFFER_ELIGIBLE, labelKey: P.t.hY8Ft1 },
    { tab: y.G2.AVATAR_DECORATIONS, labelKey: P.t.dRZYNE },
    { tab: y.G2.NAMEPLATES, labelKey: P.t.V68Fqz },
    { tab: y.G2.PROFILE_EFFECTS, labelKey: P.t["1cNjtx"] },
    { tab: y.G2.PROFILE_FRAMES, labelKey: P.t.ecTJkR },
    { tab: y.G2.BUNDLES, labelKey: P.t.FYFpps },
    { tab: y.G2.COLLABS, labelKey: P.t["+W8gb+"] },
    { tab: y.G2.CATALOG, labelKey: P.t.xFcotU },
];
var ed = n(460348);
n(801416);
var eu = n(518477),
    em = n(835018);
function eg(e) {
    let { selectedTab: t, selectedCollectionId: n, handleTransition: s } = e,
        A = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        v = (0, ed.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: _ } = (0, S.vs)(),
        I = a.useRef(null),
        [b, j] = a.useState(!1);
    (0, g.g)(
        I,
        a.useCallback((e) => {
            j(e.contentRect.width < 800);
        }, []),
    );
    let L = t === y.G2.ORBS ? M.liQ.SHOP_ORBS_TAB : M.liQ.COLLECTIBLES_SHOP,
        T = a.useCallback(() => {
            ((0, x.Y)({ pageType: L, sectionType: M.JJy.ORBS_BALANCE_MENU, ctaObject: M.ZSU.CTA_TO_QUEST_HOME }),
                (0, h.mA)({ fromContent: r.u.ORBS_BALANCE_MENU }));
        }, [L]),
        R = a.useCallback(() => {
            A?.id != null && (0, f.openUserProfileModal)({ userId: A.id, tabSection: eu.RP.WISHLIST });
        }, [A?.id]),
        k = (function (e) {
            let t,
                n,
                l,
                s,
                i,
                r,
                c,
                d,
                u,
                m,
                g,
                E,
                h,
                f,
                x,
                C,
                p,
                S = (0, W.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
                { gameShops: A, hasGameShops: v } =
                    ((t = (0, O.uM)()),
                    (n = (0, o.yK)(
                        [ea.A],
                        () => (ea.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
                        [],
                    )),
                    a.useEffect(() => {
                        (0, el.Xw)();
                    }, []),
                    a.useEffect(() => {
                        n.length > 0 &&
                            et.Ay.fetchApplications(
                                n.map((e) => e.applicationId),
                                !1,
                            );
                    }, [n]),
                    (l = a.useCallback(
                        (e) => {
                            (N.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: t?.sessionId,
                                page_type: y.G2.GAME_SHOPS,
                                page_category: t?.pageCategory,
                                page_section: t?.pageSection,
                                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                                cta_name: "go_to_game_shop",
                            }),
                                (0, es.default)({ applicationId: e }).catch(() => {}));
                        },
                        [t],
                    )),
                    (s = (0, o.bG)(
                        [en.A],
                        () =>
                            n.flatMap((e) => {
                                let t = en.A.getApplication(e.applicationId),
                                    n = t?.name;
                                return null == n
                                    ? []
                                    : [
                                          {
                                              id: e.applicationId,
                                              label: n,
                                              iconSrc:
                                                  t?.icon != null
                                                      ? ei.Ay.getApplicationIconURL({
                                                            id: t.id,
                                                            icon: t.icon,
                                                            size: 32,
                                                        })
                                                      : void 0,
                                          },
                                      ];
                            }),
                        [n],
                        ee(),
                    )),
                    {
                        gameShops: a.useMemo(
                            () =>
                                s.map((e) => ({
                                    type: "page",
                                    key: e.id,
                                    text: e.label,
                                    iconSrc: e.iconSrc,
                                    onClick: () => l(e.id),
                                })),
                            [s, l],
                        ),
                        hasGameShops: n.length > 0,
                    }),
                _ = null != (0, X.HH)(),
                I =
                    ((i = (0, q.A)(M.FYj)),
                    (r = (0, Q.XF)(i)),
                    (c = r?.shared.navigation?.tab),
                    (d = c?.title),
                    (u = r?.collectionId),
                    (f =
                        (null == d || null == u || i?.rewardStatus === Z.GM.CONSUMED
                            ? null
                            : { title: d, icon: c?.icon, collectionId: u }) ??
                        ((m = (0, Q.NN)(i)),
                        (g = m?.navigation?.tab),
                        (E = g?.title),
                        (h = m?.collectionId),
                        null == E || null == h ? null : { title: E, icon: g?.icon, collectionId: h })),
                    (x = f?.title),
                    (C = f?.icon),
                    (p = f?.collectionId),
                    a.useMemo(
                        () => (null == x || null == p ? null : { title: x, icon: C, collectionId: p }),
                        [x, C, p],
                    ));
            return a.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return ec.filter((e) => {
                            let { tab: n } = e;
                            return n !== y.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: _ }).map((t) => {
                        let { tab: n, labelKey: l } = t,
                            a = n === y.G2.OFFER_ELIGIBLE ? Y.TagIcon : void 0;
                        return {
                            type: "page",
                            key: n,
                            text: P.intl.string(l),
                            onClick: () => e(n),
                            trailingIndicator: null != a ? { type: "icon", icon: a } : void 0,
                        };
                    }),
                    n = [
                        {
                            type: "page",
                            key: y.G2.HOME,
                            text: P.intl.string(P.t["xNiB/O"]),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(y.G2.HOME),
                            onClick: () => e(y.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: y.G2.CATALOG,
                            text: P.intl.string(P.t.FshAeN),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(y.G2.CATALOG),
                            onClick: () => e(y.G2.CATALOG),
                            expandLabel: P.intl.string(P.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: y.G2.ORBS,
                            text: P.intl.string(P.t.fG3RIg),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(y.G2.ORBS),
                            onClick: () => e(y.G2.ORBS),
                        },
                    ];
                if (
                    (v &&
                        n.push({
                            type: "menu",
                            key: y.G2.GAME_SHOPS,
                            text: P.intl.string(P.t.FkjcWY),
                            expandLabel: P.intl.string(P.t.bf9uMH),
                            options: A,
                        }),
                    S &&
                        n.push({
                            type: "page",
                            key: y.G2.GAME_SERVERS,
                            text: P.intl.string(eo.default.vCzwM7),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(y.G2.GAME_SERVERS),
                            onClick: () => e(y.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != I)
                ) {
                    let e = M.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(I.collectionId),
                        t = (0, er.s)(I.icon);
                    n.push({
                        type: "page",
                        key: y.G2.PROMOTION,
                        text: I.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, $.pX)(e),
                    });
                }
                return n;
            }, [e, _, I, S, v, A]);
        })(
            a.useCallback(
                (e) => {
                    s(e);
                },
                [s],
            ),
        ),
        G = a.useMemo(() => {
            if (null == n) return !1;
            let e = k.find((e) => e.key === y.G2.PROMOTION);
            if (null == e) return !1;
            let t = M.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n);
            return e.route === t;
        }, [k, n])
            ? y.G2.PROMOTION
            : t;
    return (0, l.jsx)("div", {
        ref: I,
        children: (0, l.jsxs)(E.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: i()(em.jr, { [ed.jP]: v }),
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(V, { handleTransition: s, selectedTab: t, isNarrow: b, hasText: "" !== _ }),
                    (0, l.jsx)(c.D, {
                        className: em.ij,
                        onClick: R,
                        "aria-label": P.intl.string(P.t["7lZ31J"]),
                        children: (0, l.jsx)(d.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, l.jsx)(C.SS, {
                        analyticsPage: L,
                        cardAlignment: C.SS.CardAlignment.END,
                        ctaText: P.intl.string(P.t.VC4Mq0),
                        ctaOnClick: T,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, l.jsx)(c.D, {
                    className: em.sU,
                    onClick: () => s(y.G2.HOME),
                    "aria-label": P.intl.string(P.t["5upuqx"]),
                    children: (0, l.jsx)(u.ShopIcon, { size: "md", color: m.A.colors.TEXT_DEFAULT }),
                }),
                (0, l.jsx)(K.A, {
                    "aria-label": P.intl.string(P.t["5upuqx"]),
                    className: em.IV,
                    options: k,
                    selectedKey: G,
                    overflowLabel: P.intl.string(P.t["UKOtz+"]),
                    overflowExpandLabel: P.intl.string(P.t.PEtHiE),
                }),
            ],
        }),
    });
}
