n.d(t, { G: () => em });
var l = n(477900),
    a = n(582128),
    s = n(503698),
    i = n.n(s),
    r = n(696292),
    c = n(17928),
    o = n(939249),
    d = n(926268),
    u = n(34188),
    m = n(661531),
    g = n(770178),
    E = n(742589),
    h = n(617986),
    f = n(402860),
    x = n(318346),
    C = n(70926),
    p = n(287809),
    S = n(365491),
    A = n(435558),
    _ = n(834730),
    v = n(7689),
    I = n(683438),
    b = n(265872),
    L = n(444927),
    j = n(775602),
    N = n(174459),
    O = n(440938),
    T = n(945810),
    R = n(758836);
let M = (0, T.mj)({
    name: "2026-10-collectibles-upgraded-search",
    kind: "user",
    defaultConfig: { enabled: !1, searchBarWidthPx: R.hE.DEFAULT },
    variations: { 0: { enabled: !1, searchBarWidthPx: R.hE.DEFAULT }, 1: { enabled: !0, searchBarWidthPx: R.hE.WIDE } },
});
var y = n(652215),
    k = n(711537),
    G = n(105292),
    P = n(848913);
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
    return (0, A.sampleSize)(D, 7).map((e) => G.intl.string(e));
}
function w(e) {
    e.preventDefault();
}
function U(e) {
    let { suggestions: t, selectedIndex: n, onSelect: a, onHover: s } = e;
    return (0, l.jsxs)("div", {
        className: P.Gn,
        onMouseDown: w,
        children: [
            (0, l.jsx)("div", {
                id: F,
                className: P.Xe,
                children: (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-subtle",
                    children: G.intl.string(G.t.eYMbUC),
                }),
            }),
            (0, l.jsx)("div", {
                role: "listbox",
                id: B,
                tabIndex: -1,
                "aria-labelledby": F,
                className: P.sq,
                children: t.map((e, t) =>
                    (0, l.jsx)(
                        o.D,
                        {
                            id: `${B}-${t}`,
                            role: "option",
                            tabIndex: -1,
                            "aria-selected": t === n,
                            className: P.h,
                            onClick: () => a(t),
                            onMouseEnter: () => s(t),
                            children: (0, l.jsx)(_.E, { variant: "text-sm/medium", color: "text-strong", children: e }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function z(e) {
    let { handleTransition: t, selectedTab: n, isNarrow: s, hasText: r } = e,
        d = (0, L.A)(H),
        { searchQuery: u, onSetSearchQuery: m } = (0, S.v)(),
        [g, E] = a.useState(""),
        h = (0, O.uM)(),
        f = (0, c.bG)([j.Ay], () => j.Ay.useReducedMotion),
        { enabled: x, searchBarWidthPx: C } = M.useConfig({ location: "collectibles_search_bar" }),
        p = a.useRef(null),
        [A, _] = a.useState(!1),
        T = a.useRef(null),
        [D, F] = a.useState(!1),
        [w, z] = a.useState(!1),
        [K, V] = a.useState(-1),
        [Y, W] = a.useState(0),
        $ = x && D && !w && "" === g;
    (a.useEffect(() => {
        let e = setTimeout(() => {
            m(g);
        }, 250);
        return () => clearTimeout(e);
    }, [g, m]),
        a.useEffect(() => {
            E(u);
        }, [u]),
        a.useEffect(() => {
            if (!x || "" !== g || D || f) return;
            let e = setInterval(() => {
                W((e) => (e + 1) % d.length);
            }, 5e3);
            return () => clearInterval(e);
        }, [x, g, D, f, d]),
        a.useEffect(() => {
            _(s && r);
        }, [s, r]));
    let Z = a.useCallback(
            (e, t, l) => {
                N.default.track(y.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: h?.sessionId,
                    page_section: h?.pageSection,
                    page_category: h?.pageCategory,
                    page_index: h?.pageIndex,
                    page_size: h?.pageSize,
                    cta_name: e,
                    page_type: n,
                    tile_type: t,
                    tile_position: null != l ? String(l) : void 0,
                });
            },
            [n, h],
        ),
        q = a.useCallback(
            (e) => {
                let t = d[e];
                (E(t), m(t), V(-1), Z(t, R.Xi.SEARCH_SUGGESTION, e));
            },
            [m, Z, d],
        ),
        X = a.useCallback(
            (e) => {
                if ($ && ("ArrowDown" === e.key || "ArrowUp" === e.key)) {
                    e.preventDefault();
                    let t = "ArrowDown" === e.key ? 1 : -1;
                    V((e) => {
                        let n = e + t;
                        return n < 0 ? d.length - 1 : n >= d.length ? 0 : n;
                    });
                    return;
                }
                if ($ && "Escape" === e.key) {
                    (e.preventDefault(), z(!0), V(-1));
                    return;
                }
                if ("Enter" === e.key) {
                    if ($ && K >= 0) return void q(K);
                    m(g);
                }
            },
            [g, m, $, K, q, d],
        ),
        J = a.useCallback((e) => {
            (E(e), z(!1), V(-1));
        }, []),
        Q = a.useCallback(() => {
            (F(!0), z(!1), V(-1));
        }, []),
        ee = a.useCallback(() => {
            (n !== R.G2.CATALOG && t(R.G2.CATALOG),
                Z(R.uY.SEARCH_ICON, R.Xi.SEARCH),
                _(!0),
                setTimeout(() => p.current?.focus()));
        }, [n, t, Z]),
        et = a.useCallback(() => {
            (n !== R.G2.CATALOG && t(R.G2.CATALOG), Z(R.uY.SEARCH_BAR, R.Xi.SEARCH));
        }, [n, t, Z]),
        en = a.useCallback(() => {
            (E(""), m(""), Z(R.uY.SEARCH_BAR_CLEAR, R.Xi.SEARCH), s && _(!1));
        }, [m, Z, s]),
        el = a.useCallback(() => {
            (F(!1), s && "" === g && _(!1));
        }, [s, g]),
        ea = s && !A,
        es = G.intl.string(G.t.arz34K),
        ei = (0, l.jsx)(o.D, {
            className: P.qc,
            onClick: ee,
            "aria-label": es,
            children: (0, l.jsx)(v.MagnifyingGlassIcon, { size: "xs", color: "currentColor" }),
        }),
        er = (0, l.jsx)(I.I, {
            size: "sm",
            ref: p,
            onKeyDown: X,
            query: g,
            onChange: J,
            onClear: en,
            onFocus: Q,
            onBlur: el,
            inputProps: x
                ? {
                      role: "combobox",
                      "aria-expanded": $,
                      "aria-controls": $ ? B : void 0,
                      "aria-autocomplete": "list",
                      "aria-activedescendant": $ && K >= 0 ? `${B}-${K}` : void 0,
                  }
                : void 0,
            placeholder: !x || f ? es : G.intl.formatToPlainString(k.default.bRwRwX, { option: d[Y] }),
            "aria-label": es,
        }),
        ec = { "--custom-search-bar-width": `${C}px` };
    return ea
        ? (0, l.jsx)("div", { style: ec, children: ei })
        : (0, l.jsx)(b.Y, {
              targetElementRef: T,
              renderPopout: () =>
                  (0, l.jsx)("div", {
                      style: ec,
                      children: (0, l.jsx)(U, { suggestions: d, selectedIndex: K, onSelect: q, onHover: V }),
                  }),
              position: "bottom",
              align: "right",
              animation: b.Y.Animation.NONE,
              shouldShow: $,
              autoInvert: !1,
              children: () =>
                  (0, l.jsx)("div", {
                      className: i()(P.ON, { [P.Nz]: A }),
                      style: ec,
                      children: (0, l.jsx)(o.D, { innerRef: T, ignoreKeyPress: !0, onClick: et, children: er }),
                  }),
          });
}
var K = n(173127);
n(321073);
var V = n(278416),
    Y = n(196736),
    W = n(976860),
    $ = n(288106),
    Z = n(223311),
    q = n(65238),
    X = n(758461),
    J = n(812729),
    Q = n.n(J),
    ee = n(627363),
    et = n(587895),
    en = n(733391),
    el = n(832163),
    ea = n(44724),
    es = n(486020),
    ei = n(22007),
    er = n(135570);
let ec = [
    { tab: R.G2.OFFER_ELIGIBLE, labelKey: G.t.hY8Ft1 },
    { tab: R.G2.AVATAR_DECORATIONS, labelKey: G.t.dRZYNE },
    { tab: R.G2.NAMEPLATES, labelKey: G.t.V68Fqz },
    { tab: R.G2.PROFILE_EFFECTS, labelKey: G.t["1cNjtx"] },
    { tab: R.G2.PROFILE_FRAMES, labelKey: G.t.ecTJkR },
    { tab: R.G2.BUNDLES, labelKey: G.t.FYFpps },
    { tab: R.G2.COLLABS, labelKey: G.t["+W8gb+"] },
    { tab: R.G2.CATALOG, labelKey: G.t.xFcotU },
];
var eo = n(783857);
n(801416);
var ed = n(518477),
    eu = n(835018);
function em(e) {
    let { selectedTab: t, selectedCollectionId: n, handleTransition: s } = e,
        A = (0, c.bG)([p.default], () => p.default.getCurrentUser()),
        _ = (0, eo.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: v } = (0, S.v)(),
        I = a.useRef(null),
        [b, L] = a.useState(!1);
    (0, g.g)(
        I,
        a.useCallback((e) => {
            L(e.contentRect.width < 800);
        }, []),
    );
    let j = t === R.G2.ORBS ? y.liQ.SHOP_ORBS_TAB : y.liQ.COLLECTIBLES_SHOP,
        T = a.useCallback(() => {
            ((0, x.Y)({ pageType: j, sectionType: y.JJy.ORBS_BALANCE_MENU, ctaObject: y.ZSU.CTA_TO_QUEST_HOME }),
                (0, h.mA)({ fromContent: r.u.ORBS_BALANCE_MENU }));
        }, [j]),
        M = a.useCallback(() => {
            A?.id != null && (0, f.openUserProfileModal)({ userId: A.id, tabSection: ed.RP.WISHLIST });
        }, [A?.id]),
        k = (function (e) {
            let t,
                n,
                l,
                s,
                i,
                r,
                o,
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
                S = (0, Y.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
                { gameShops: A, hasGameShops: _ } =
                    ((t = (0, O.uM)()),
                    (n = (0, c.yK)(
                        [el.A],
                        () => (el.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
                        [],
                    )),
                    a.useEffect(() => {
                        (0, en.Xw)();
                    }, []),
                    a.useEffect(() => {
                        n.length > 0 &&
                            ee.Ay.fetchApplications(
                                n.map((e) => e.applicationId),
                                !1,
                            );
                    }, [n]),
                    (l = a.useCallback(
                        (e) => {
                            (N.default.track(y.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: t?.sessionId,
                                page_type: R.G2.GAME_SHOPS,
                                page_category: t?.pageCategory,
                                page_section: t?.pageSection,
                                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                                cta_name: "go_to_game_shop",
                            }),
                                (0, ea.default)({ applicationId: e }).catch(() => {}));
                        },
                        [t],
                    )),
                    (s = (0, c.bG)(
                        [et.A],
                        () =>
                            n.flatMap((e) => {
                                let t = et.A.getApplication(e.applicationId),
                                    n = t?.name;
                                return null == n
                                    ? []
                                    : [
                                          {
                                              id: e.applicationId,
                                              label: n,
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
                        [n],
                        Q(),
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
                v = null != (0, X.HH)(),
                I =
                    ((i = (0, Z.A)(y.FYj)),
                    (r = (0, q.XF)(i)),
                    (o = r?.shared.navigation?.tab),
                    (d = o?.title),
                    (u = r?.collectionId),
                    (f =
                        (null == d || null == u || i?.rewardStatus === $.GM.CONSUMED
                            ? null
                            : { title: d, icon: o?.icon, collectionId: u }) ??
                        ((m = (0, q.NN)(i)),
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
                            return n !== R.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: v }).map((t) => {
                        let { tab: n, labelKey: l } = t,
                            a = n === R.G2.OFFER_ELIGIBLE ? V.TagIcon : void 0;
                        return {
                            type: "page",
                            key: n,
                            text: G.intl.string(l),
                            onClick: () => e(n),
                            trailingIndicator: null != a ? { type: "icon", icon: a } : void 0,
                        };
                    }),
                    n = [
                        {
                            type: "page",
                            key: R.G2.HOME,
                            text: G.intl.string(G.t["xNiB/O"]),
                            route: y.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.HOME),
                            onClick: () => e(R.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: R.G2.CATALOG,
                            text: G.intl.string(G.t.FshAeN),
                            route: y.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.CATALOG),
                            onClick: () => e(R.G2.CATALOG),
                            expandLabel: G.intl.string(G.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: R.G2.ORBS,
                            text: G.intl.string(G.t.fG3RIg),
                            route: y.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.ORBS),
                            onClick: () => e(R.G2.ORBS),
                        },
                    ];
                if (
                    (_ &&
                        n.push({
                            type: "menu",
                            key: R.G2.GAME_SHOPS,
                            text: G.intl.string(G.t.FkjcWY),
                            expandLabel: G.intl.string(G.t.bf9uMH),
                            options: A,
                        }),
                    S &&
                        n.push({
                            type: "page",
                            key: R.G2.GAME_SERVERS,
                            text: G.intl.string(er.default.vCzwM7),
                            route: y.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.GAME_SERVERS),
                            onClick: () => e(R.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != I)
                ) {
                    let e = y.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(I.collectionId),
                        t = (0, ei.s)(I.icon);
                    n.push({
                        type: "page",
                        key: R.G2.PROMOTION,
                        text: I.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, W.pX)(e),
                    });
                }
                return n;
            }, [e, v, I, S, _, A]);
        })(
            a.useCallback(
                (e) => {
                    s(e);
                },
                [s],
            ),
        ),
        P = a.useMemo(() => {
            if (null == n) return !1;
            let e = k.find((e) => e.key === R.G2.PROMOTION);
            if (null == e) return !1;
            let t = y.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n);
            return e.route === t;
        }, [k, n])
            ? R.G2.PROMOTION
            : t;
    return (0, l.jsx)("div", {
        ref: I,
        children: (0, l.jsxs)(E.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: i()(eu.jr, { [eo.jP]: _ }),
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(z, { handleTransition: s, selectedTab: t, isNarrow: b, hasText: "" !== v }),
                    (0, l.jsx)(o.D, {
                        className: eu.ij,
                        onClick: M,
                        "aria-label": G.intl.string(G.t["7lZ31J"]),
                        children: (0, l.jsx)(d.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, l.jsx)(C.SS, {
                        analyticsPage: j,
                        cardAlignment: C.SS.CardAlignment.END,
                        ctaText: G.intl.string(G.t.VC4Mq0),
                        ctaOnClick: T,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, l.jsx)(o.D, {
                    className: eu.sU,
                    onClick: () => s(R.G2.HOME),
                    "aria-label": G.intl.string(G.t["5upuqx"]),
                    children: (0, l.jsx)(u.U, { size: "md", color: m.A.colors.TEXT_DEFAULT }),
                }),
                (0, l.jsx)(K.A, {
                    "aria-label": G.intl.string(G.t["5upuqx"]),
                    className: eu.IV,
                    options: k,
                    selectedKey: P,
                    overflowLabel: G.intl.string(G.t["UKOtz+"]),
                    overflowExpandLabel: G.intl.string(G.t.PEtHiE),
                }),
            ],
        }),
    });
}
