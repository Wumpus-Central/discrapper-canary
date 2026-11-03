n.d(t, { G: () => eg });
var l = n(477900),
    a = n(582128),
    s = n(503698),
    i = n.n(s),
    r = n(696292),
    o = n(17928),
    c = n(939249),
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
    b = n(683438),
    I = n(265872),
    j = n(444927),
    L = n(775602),
    N = n(174459),
    O = n(440938),
    T = n(945810),
    R = n(758836);
let y = (0, T.mj)({
    name: "2026-10-collectibles-upgraded-search",
    kind: "user",
    defaultConfig: { enabled: !1, searchBarWidthPx: R.hE.DEFAULT },
    variations: { 0: { enabled: !1, searchBarWidthPx: R.hE.DEFAULT }, 1: { enabled: !0, searchBarWidthPx: R.hE.WIDE } },
});
var M = n(652215),
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
                    variant: "body-xs/semibold",
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
                        c.D,
                        {
                            id: `${B}-${t}`,
                            role: "option",
                            tabIndex: -1,
                            "aria-selected": t === n,
                            className: P.h,
                            onClick: () => a(t),
                            onMouseEnter: () => s(t),
                            children: (0, l.jsx)(_.E, { variant: "body-sm/medium", color: "text-strong", children: e }),
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
        className: i()(P.pQ, { [P.Eo]: a }),
        children: (0, l.jsx)(_.E, {
            tag: "span",
            variant: "body-sm/normal",
            color: "none",
            children: G.intl.format(k.default.bRwRwX, {
                option: (0, l.jsx)(
                    "span",
                    {
                        className: i()(P.I5, { [P.vZ]: s }),
                        children: (0, l.jsx)("span", { className: P.e_, children: t }),
                    },
                    n,
                ),
            }),
        }),
    });
};
function K(e) {
    let { handleTransition: t, selectedTab: n, isNarrow: s, hasText: r } = e,
        d = (0, j.A)(H),
        { searchQuery: u, onSetSearchQuery: m } = (0, S.v)(),
        [g, E] = a.useState(""),
        h = (0, O.uM)(),
        { enabled: f, searchBarWidthPx: x } = y.useConfig({ location: "collectibles_search_bar" }),
        C = a.useRef(null),
        [p, A] = a.useState(!1),
        _ = a.useRef(null),
        [T, k] = a.useState(!1),
        [D, F] = a.useState(!1),
        [w, K] = a.useState(-1),
        [V, Y] = a.useState(0),
        [W, $] = a.useState(!1),
        Z = f && T && !D && "" === g,
        q = (0, o.bG)([L.Ay], () => L.Ay.useReducedMotion),
        X = f && !q;
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
            if (!X || "" !== g || T) return;
            let e = setInterval(() => {
                (Y((e) => (e + 1) % d.length), $(!1));
            }, 7e3);
            return () => clearInterval(e);
        }, [X, g, T, d]),
        a.useEffect(() => {
            A(s && r);
        }, [s, r]));
    let J = a.useCallback(
            (e, t, l) => {
                N.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        Q = a.useCallback(
            (e) => {
                let t = d[e];
                (E(t), m(t), K(-1), J(t, R.Xi.SEARCH_SUGGESTION, e));
            },
            [m, J, d],
        ),
        ee = a.useCallback(
            (e) => {
                if (Z && ("ArrowDown" === e.key || "ArrowUp" === e.key)) {
                    e.preventDefault();
                    let t = "ArrowDown" === e.key ? 1 : -1;
                    K((e) => {
                        let n = e + t;
                        return n < 0 ? d.length - 1 : n >= d.length ? 0 : n;
                    });
                    return;
                }
                if (Z && "Escape" === e.key) {
                    (e.preventDefault(), F(!0), K(-1));
                    return;
                }
                if ("Enter" === e.key) {
                    if (Z && w >= 0) return void Q(w);
                    m(g);
                }
            },
            [g, m, Z, w, Q, d],
        ),
        et = a.useCallback((e) => {
            (E(e), F(!1), K(-1));
        }, []),
        en = a.useCallback(() => {
            (k(!0), $(!0), F(!1), K(-1));
        }, []),
        el = a.useCallback(() => {
            (n !== R.G2.CATALOG && t(R.G2.CATALOG),
                J(R.uY.SEARCH_ICON, R.Xi.SEARCH),
                A(!0),
                setTimeout(() => C.current?.focus()));
        }, [n, t, J]),
        ea = a.useCallback(() => {
            (n !== R.G2.CATALOG && t(R.G2.CATALOG), J(R.uY.SEARCH_BAR, R.Xi.SEARCH));
        }, [n, t, J]),
        es = a.useCallback(() => {
            (E(""), m(""), J(R.uY.SEARCH_BAR_CLEAR, R.Xi.SEARCH), s && A(!1));
        }, [m, J, s]),
        ei = a.useCallback(() => {
            (k(!1), s && "" === g && A(!1));
        }, [s, g]),
        er = s && !p,
        eo = G.intl.string(G.t.arz34K),
        ec = (0, l.jsx)(c.D, {
            className: P.qc,
            onClick: el,
            "aria-label": eo,
            children: (0, l.jsx)(v.MagnifyingGlassIcon, { size: "xs", color: "currentColor" }),
        }),
        ed = d[V],
        eu = (0, l.jsxs)("div", {
            className: P.up,
            children: [
                (0, l.jsx)(b.I, {
                    size: "sm",
                    ref: C,
                    onKeyDown: ee,
                    query: g,
                    onChange: et,
                    onClear: es,
                    onFocus: en,
                    onBlur: ei,
                    inputProps: f
                        ? {
                              role: "combobox",
                              "aria-expanded": Z,
                              "aria-controls": Z ? B : void 0,
                              "aria-autocomplete": "list",
                              "aria-activedescendant": Z && w >= 0 ? `${B}-${w}` : void 0,
                          }
                        : void 0,
                    placeholder: X ? "" : eo,
                    "aria-label": eo,
                }),
                X && "" === g ? (0, l.jsx)(z, { option: ed, optionKey: V, isFocused: T, isResumed: W }) : null,
            ],
        }),
        em = { "--custom-search-bar-width": `${x}px` };
    return er
        ? (0, l.jsx)("div", { style: em, children: ec })
        : (0, l.jsx)(I.Y, {
              targetElementRef: _,
              renderPopout: () =>
                  (0, l.jsx)("div", {
                      style: em,
                      children: (0, l.jsx)(U, { suggestions: d, selectedIndex: w, onSelect: Q, onHover: K }),
                  }),
              position: "bottom",
              align: "right",
              animation: I.Y.Animation.NONE,
              shouldShow: Z,
              autoInvert: !1,
              children: () =>
                  (0, l.jsx)("div", {
                      className: i()(P.ON, { [P.Nz]: p }),
                      style: em,
                      children: (0, l.jsx)(c.D, { innerRef: _, ignoreKeyPress: !0, onClick: ea, children: eu }),
                  }),
          });
}
var V = n(173127);
n(321073);
var Y = n(278416),
    W = n(196736),
    $ = n(976860),
    Z = n(288106),
    q = n(223311),
    X = n(65238),
    J = n(758461),
    Q = n(812729),
    ee = n.n(Q),
    et = n(627363),
    en = n(587895),
    el = n(733391),
    ea = n(832163),
    es = n(44724),
    ei = n(486020),
    er = n(22007),
    eo = n(135570);
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
var ed = n(783857);
n(801416);
var eu = n(518477),
    em = n(835018);
function eg(e) {
    let { selectedTab: t, selectedCollectionId: n, handleTransition: s } = e,
        A = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        _ = (0, ed.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: v } = (0, S.v)(),
        b = a.useRef(null),
        [I, j] = a.useState(!1);
    (0, g.g)(
        b,
        a.useCallback((e) => {
            j(e.contentRect.width < 800);
        }, []),
    );
    let L = t === R.G2.ORBS ? M.liQ.SHOP_ORBS_TAB : M.liQ.COLLECTIBLES_SHOP,
        T = a.useCallback(() => {
            ((0, x.Y)({ pageType: L, sectionType: M.JJy.ORBS_BALANCE_MENU, ctaObject: M.ZSU.CTA_TO_QUEST_HOME }),
                (0, h.mA)({ fromContent: r.u.ORBS_BALANCE_MENU }));
        }, [L]),
        y = a.useCallback(() => {
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
                { gameShops: A, hasGameShops: _ } =
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
                                page_type: R.G2.GAME_SHOPS,
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
                v = null != (0, J.HH)(),
                b =
                    ((i = (0, q.A)(M.FYj)),
                    (r = (0, X.XF)(i)),
                    (c = r?.shared.navigation?.tab),
                    (d = c?.title),
                    (u = r?.collectionId),
                    (f =
                        (null == d || null == u || i?.rewardStatus === Z.GM.CONSUMED
                            ? null
                            : { title: d, icon: c?.icon, collectionId: u }) ??
                        ((m = (0, X.NN)(i)),
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
                            a = n === R.G2.OFFER_ELIGIBLE ? Y.TagIcon : void 0;
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
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.HOME),
                            onClick: () => e(R.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: R.G2.CATALOG,
                            text: G.intl.string(G.t.FshAeN),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.CATALOG),
                            onClick: () => e(R.G2.CATALOG),
                            expandLabel: G.intl.string(G.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: R.G2.ORBS,
                            text: G.intl.string(G.t.fG3RIg),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.ORBS),
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
                            text: G.intl.string(eo.default.vCzwM7),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.GAME_SERVERS),
                            onClick: () => e(R.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != b)
                ) {
                    let e = M.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(b.collectionId),
                        t = (0, er.s)(b.icon);
                    n.push({
                        type: "page",
                        key: R.G2.PROMOTION,
                        text: b.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, $.pX)(e),
                    });
                }
                return n;
            }, [e, v, b, S, _, A]);
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
            let t = M.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n);
            return e.route === t;
        }, [k, n])
            ? R.G2.PROMOTION
            : t;
    return (0, l.jsx)("div", {
        ref: b,
        children: (0, l.jsxs)(E.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: i()(em.jr, { [ed.jP]: _ }),
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(K, { handleTransition: s, selectedTab: t, isNarrow: I, hasText: "" !== v }),
                    (0, l.jsx)(c.D, {
                        className: em.ij,
                        onClick: y,
                        "aria-label": G.intl.string(G.t["7lZ31J"]),
                        children: (0, l.jsx)(d.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, l.jsx)(C.SS, {
                        analyticsPage: L,
                        cardAlignment: C.SS.CardAlignment.END,
                        ctaText: G.intl.string(G.t.VC4Mq0),
                        ctaOnClick: T,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, l.jsx)(c.D, {
                    className: em.sU,
                    onClick: () => s(R.G2.HOME),
                    "aria-label": G.intl.string(G.t["5upuqx"]),
                    children: (0, l.jsx)(u.U, { size: "md", color: m.A.colors.TEXT_DEFAULT }),
                }),
                (0, l.jsx)(V.A, {
                    "aria-label": G.intl.string(G.t["5upuqx"]),
                    className: em.IV,
                    options: k,
                    selectedKey: P,
                    overflowLabel: G.intl.string(G.t["UKOtz+"]),
                    overflowExpandLabel: G.intl.string(G.t.PEtHiE),
                }),
            ],
        }),
    });
}
