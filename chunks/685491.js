n.d(t, { G: () => eh });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    i = n.n(a),
    r = n(696292),
    o = n(855986),
    c = n(939249),
    u = n(926268),
    d = n(34188),
    m = n(646514),
    g = n(770178),
    E = n(742589),
    h = n(321538),
    f = n(702476),
    x = n(318346),
    C = n(863705),
    p = n(287809),
    S = n(365491),
    _ = n(435558),
    A = n(115560),
    I = n(834730),
    b = n(7689),
    v = n(683438),
    L = n(265872),
    j = n(444927),
    N = n(775602),
    O = n(129230),
    T = n(857512),
    y = n(945810),
    R = n(758836);
let M = (0, y.mj)({
    name: "2026-10-collectibles-upgraded-search",
    kind: "user",
    defaultConfig: { enabled: !1, searchBarWidthPx: R.hE.DEFAULT },
    variations: { 0: { enabled: !1, searchBarWidthPx: R.hE.DEFAULT }, 1: { enabled: !0, searchBarWidthPx: R.hE.WIDE } },
});
var k = n(662829),
    P = n(652215),
    G = n(143461),
    D = n(792996),
    B = n(848913);
let F = [
        G.default.bKvkzB,
        G.default["U+7iha"],
        G.default.fwKulM,
        G.default.KqfZhk,
        G.default.amuakh,
        G.default["5txfu7"],
        G.default.SxlobC,
        G.default.bnJVgJ,
        G.default.Z4b7dI,
        G.default.M6igKM,
        G.default.qozQ5X,
        G.default.tu6vgS,
        G.default["w/OnRT"],
        G.default["+EMTB/"],
        G.default.Ib3xUj,
        G.default["7DZ2Fj"],
        G.default.cChmCO,
        G.default["H0zY/q"],
        G.default["+Bo7fD"],
        G.default["o/+isu"],
        G.default.MzFZoP,
        G.default["NKZY+Z"],
        G.default["SM4C+M"],
        G.default.rsvVIs,
        G.default["kmA+p3"],
        G.default["S+ZC67"],
    ],
    H = "collectibles-search-suggestions",
    w = `${H}-header`;
function U() {
    return (0, _.sampleSize)(F, 7).map((e) => D.intl.string(e));
}
function z(e) {
    e.preventDefault();
}
function V(e) {
    let { suggestions: t, selectedIndex: n, onSelect: s, onHover: a } = e;
    return (0, l.jsxs)("div", {
        className: B.Gn,
        onMouseDown: z,
        children: [
            (0, l.jsx)("div", {
                id: w,
                className: B.Xe,
                children: (0, l.jsx)(I.E, {
                    variant: "body-xs/semibold",
                    color: "text-subtle",
                    children: D.intl.string(D.t.eYMbUC),
                }),
            }),
            (0, l.jsx)("div", {
                role: "listbox",
                id: H,
                tabIndex: -1,
                "aria-labelledby": w,
                className: B.sq,
                children: t.map((e, t) =>
                    (0, l.jsx)(
                        c.D,
                        {
                            id: `${H}-${t}`,
                            role: "option",
                            tabIndex: -1,
                            "aria-selected": t === n,
                            className: B.h,
                            onClick: () => s(t),
                            onMouseEnter: () => a(t),
                            children: (0, l.jsx)(I.E, { variant: "body-sm/medium", color: "text-strong", children: e }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
let K = (e) => {
    let { option: t, optionKey: n, isFocused: s, isResumed: a } = e;
    return (0, l.jsx)("div", {
        "aria-hidden": !0,
        className: i()(B.pQ, { [B.Eo]: s }),
        children: (0, l.jsx)(I.E, {
            tag: "span",
            variant: "body-sm/normal",
            color: "none",
            children: D.intl.format(G.default.bRwRwX, {
                option: (0, l.jsx)(
                    "span",
                    {
                        className: i()(B.I5, { [B.vZ]: a }),
                        children: (0, l.jsx)("span", { className: B.e_, children: t }),
                    },
                    n,
                ),
            }),
        }),
    });
};
function Y(e) {
    let { handleTransition: t, selectedTab: n, isNarrow: a, hasText: r } = e,
        u = (0, j.A)(U),
        { searchQuery: d, onSetSearchQuery: m } = (0, S.vs)(),
        [g, E] = s.useState(""),
        h = s.useRef(!1),
        f = (0, T.uM)(),
        { enabled: x, searchBarWidthPx: C } = M.useConfig({ location: "collectibles_search_bar" }),
        p = s.useRef(null),
        [_, I] = s.useState(!1),
        y = s.useRef(null),
        [G, F] = s.useState(!1),
        [w, z] = s.useState(!1),
        [Y, W] = s.useState(-1),
        [$, q] = s.useState(0),
        [Z, Q] = s.useState(!1),
        X = (0, k.Ay)(),
        J = x && G && !w && "" === g,
        ee = (0, o.bG)([N.Ay], () => N.Ay.useReducedMotion),
        et = x && !ee,
        en = D.intl.string(D.t.arz34K),
        el = u[$],
        es = "" === g ? (et ? el : en) : null;
    (s.useEffect(() => {
        E(d);
    }, [d]),
        s.useEffect(() => {
            h.current = !1;
        }, [n]),
        s.useEffect(() => {
            if (!et || "" !== g || G) return;
            let e = setInterval(() => {
                (q((e) => (e + 1) % u.length), Q(!1));
            }, 7e3);
            return () => clearInterval(e);
        }, [et, g, G, u]),
        s.useEffect(() => {
            I(a && r);
        }, [a, r]));
    let ea = s.useCallback(
            (e, t) => {
                O.default.track(P.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: f?.sessionId,
                    page_section: f?.pageSection,
                    page_category: f?.pageCategory,
                    page_index: f?.pageIndex,
                    page_size: f?.pageSize,
                    cta_name: e,
                    page_type: n,
                    tile_type: t,
                });
            },
            [n, f],
        ),
        ei = s.useCallback(
            (e, l, s) => {
                let a = e.trim(),
                    i = n === R.G2.CATALOG,
                    r = !i && h.current;
                (r || X(a, l, (0, A.A)(), i, s), E(a), i)
                    ? m(a)
                    : r || ((h.current = !0), t(R.G2.CATALOG, !1, { searchQuery: a }));
            },
            [n, m, t, X],
        ),
        er = s.useCallback(
            (e) => {
                let t = u[e];
                (E(t), ei(t, R.Vf.SUGGESTION, { text: t, position: e }), W(-1));
            },
            [ei, u],
        ),
        eo = s.useCallback(
            (e) => {
                if (J && ("ArrowDown" === e.key || "ArrowUp" === e.key)) {
                    e.preventDefault();
                    let t = "ArrowDown" === e.key ? 1 : -1;
                    W((e) => {
                        let n = e + t;
                        return n < 0 ? u.length - 1 : n >= u.length ? 0 : n;
                    });
                    return;
                }
                if (J && "Escape" === e.key) {
                    (e.preventDefault(), z(!0), W(-1));
                    return;
                }
                if ("Enter" === e.key) {
                    if (J && Y >= 0) return void er(Y);
                    ei(g, R.Vf.ENTER);
                }
            },
            [g, ei, J, Y, er, u],
        ),
        ec = s.useCallback((e) => {
            (E(e), z(!1), W(-1));
        }, []),
        eu = s.useCallback(() => {
            (F(!0),
                Q(!0),
                z(!1),
                W(-1),
                O.default.track(P.HAw.COLLECTIBLES_SHOP_SEARCH_STARTED, {
                    collectibles_shop_session_id: f?.sessionId,
                    placeholder_text: es,
                }));
        }, [f?.sessionId, es]),
        ed = s.useCallback(() => {
            (ea(R.uY.SEARCH_ICON, R.Xi.SEARCH), I(!0), setTimeout(() => p.current?.focus()));
        }, [ea]),
        em = s.useCallback(() => {
            ea(R.uY.SEARCH_BAR, R.Xi.SEARCH);
        }, [ea]),
        eg = s.useCallback(() => {
            (E(""), m(""), ea(R.uY.SEARCH_BAR_CLEAR, R.Xi.SEARCH), a && I(!1));
        }, [m, ea, a]),
        eE = s.useCallback(() => {
            (F(!1), a && "" === g && I(!1));
        }, [a, g]),
        eh = a && !_,
        ef = (0, l.jsx)(c.D, {
            className: B.qc,
            onClick: ed,
            "aria-label": en,
            children: (0, l.jsx)(b.MagnifyingGlassIcon, { size: "xs", color: "currentColor" }),
        }),
        ex = (0, l.jsxs)("div", {
            className: B.up,
            children: [
                (0, l.jsx)(v.I, {
                    size: "sm",
                    ref: p,
                    onKeyDown: eo,
                    query: g,
                    onChange: ec,
                    onClear: eg,
                    onFocus: eu,
                    onBlur: eE,
                    inputProps: {
                        maxLength: 256,
                        ...(x
                            ? {
                                  role: "combobox",
                                  "aria-expanded": J,
                                  "aria-controls": J ? H : void 0,
                                  "aria-autocomplete": "list",
                                  "aria-activedescendant": J && Y >= 0 ? `${H}-${Y}` : void 0,
                              }
                            : void 0),
                        onClick: em,
                    },
                    placeholder: et ? "" : en,
                    "aria-label": en,
                }),
                et && "" === g ? (0, l.jsx)(K, { option: el, optionKey: $, isFocused: G, isResumed: Z }) : null,
            ],
        }),
        eC = { "--custom-search-bar-width": `${C}px` };
    return eh
        ? (0, l.jsx)("div", { style: eC, children: ef })
        : (0, l.jsx)(L.Y, {
              targetElementRef: y,
              renderPopout: () =>
                  (0, l.jsx)("div", {
                      style: eC,
                      children: (0, l.jsx)(V, { suggestions: u, selectedIndex: Y, onSelect: er, onHover: W }),
                  }),
              position: "bottom",
              align: "right",
              animation: L.Y.Animation.NONE,
              shouldShow: J,
              autoInvert: !1,
              children: () =>
                  (0, l.jsx)("div", {
                      className: i()(B.ON, { [B.Nz]: _ }),
                      style: eC,
                      children: (0, l.jsx)("div", { ref: y, children: ex }),
                  }),
          });
}
var W = n(971458);
n(321073);
var $ = n(278416),
    q = n(196736),
    Z = n(976860),
    Q = n(288106),
    X = n(223311),
    J = n(65238),
    ee = n(758461),
    et = n(812729),
    en = n.n(et),
    el = n(627363),
    es = n(587895),
    ea = n(733391),
    ei = n(832163),
    er = n(44724),
    eo = n(486020),
    ec = n(22007),
    eu = n(105518);
let ed = [
    { tab: R.G2.OFFER_ELIGIBLE, labelKey: D.t.hY8Ft1 },
    { tab: R.G2.AVATAR_DECORATIONS, labelKey: D.t.dRZYNE },
    { tab: R.G2.NAMEPLATES, labelKey: D.t.V68Fqz },
    { tab: R.G2.PROFILE_EFFECTS, labelKey: D.t["1cNjtx"] },
    { tab: R.G2.PROFILE_FRAMES, labelKey: D.t.ecTJkR },
    { tab: R.G2.BUNDLES, labelKey: D.t.FYFpps },
    { tab: R.G2.COLLABS, labelKey: D.t["+W8gb+"] },
    { tab: R.G2.CATALOG, labelKey: D.t.xFcotU },
];
var em = n(460348);
n(801416);
var eg = n(518477),
    eE = n(835018);
function eh(e) {
    let { selectedTab: t, selectedCollectionId: n, handleTransition: a } = e,
        _ = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        A = (0, em.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: I } = (0, S.vs)(),
        b = s.useRef(null),
        [v, L] = s.useState(!1);
    (0, g.g)(
        b,
        s.useCallback((e) => {
            L(e.contentRect.width < 800);
        }, []),
    );
    let j = t === R.G2.ORBS ? P.liQ.SHOP_ORBS_TAB : P.liQ.COLLECTIBLES_SHOP,
        N = s.useCallback(() => {
            ((0, x.Y)({ pageType: j, sectionType: P.JJy.ORBS_BALANCE_MENU, ctaObject: P.ZSU.CTA_TO_QUEST_HOME }),
                (0, h.mA)({ fromContent: r.u.ORBS_BALANCE_MENU }));
        }, [j]),
        y = s.useCallback(() => {
            _?.id != null && (0, f.openUserProfileModal)({ userId: _.id, tabSection: eg.RP.WISHLIST });
        }, [_?.id]),
        M = (function (e) {
            let t,
                n,
                l,
                a,
                i,
                r,
                c,
                u,
                d,
                m,
                g,
                E,
                h,
                f,
                x,
                C,
                p,
                S = (0, q.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
                { gameShops: _, hasGameShops: A } =
                    ((t = (0, T.uM)()),
                    (n = (0, o.yK)(
                        [ei.A],
                        () => (ei.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
                        [],
                    )),
                    s.useEffect(() => {
                        (0, ea.Xw)();
                    }, []),
                    s.useEffect(() => {
                        n.length > 0 &&
                            el.Ay.fetchApplications(
                                n.map((e) => e.applicationId),
                                !1,
                            );
                    }, [n]),
                    (l = s.useCallback(
                        (e) => {
                            (O.default.track(P.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: t?.sessionId,
                                page_type: R.G2.GAME_SHOPS,
                                page_category: t?.pageCategory,
                                page_section: t?.pageSection,
                                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                                cta_name: "go_to_game_shop",
                            }),
                                (0, er.default)({ applicationId: e }).catch(() => {}));
                        },
                        [t],
                    )),
                    (a = (0, o.bG)(
                        [es.A],
                        () =>
                            n.flatMap((e) => {
                                let t = es.A.getApplication(e.applicationId),
                                    n = t?.name;
                                return null == n
                                    ? []
                                    : [
                                          {
                                              id: e.applicationId,
                                              label: n,
                                              iconSrc:
                                                  t?.icon != null
                                                      ? eo.Ay.getApplicationIconURL({
                                                            id: t.id,
                                                            icon: t.icon,
                                                            size: 32,
                                                        })
                                                      : void 0,
                                          },
                                      ];
                            }),
                        [n],
                        en(),
                    )),
                    {
                        gameShops: s.useMemo(
                            () =>
                                a.map((e) => ({
                                    type: "page",
                                    key: e.id,
                                    text: e.label,
                                    iconSrc: e.iconSrc,
                                    onClick: () => l(e.id),
                                })),
                            [a, l],
                        ),
                        hasGameShops: n.length > 0,
                    }),
                I = null != (0, ee.HH)(),
                b =
                    ((i = (0, X.A)(P.FYj)),
                    (r = (0, J.XF)(i)),
                    (c = r?.shared.navigation?.tab),
                    (u = c?.title),
                    (d = r?.collectionId),
                    (f =
                        (null == u || null == d || i?.rewardStatus === Q.GM.CONSUMED
                            ? null
                            : { title: u, icon: c?.icon, collectionId: d }) ??
                        ((m = (0, J.NN)(i)),
                        (g = m?.navigation?.tab),
                        (E = g?.title),
                        (h = m?.collectionId),
                        null == E || null == h ? null : { title: E, icon: g?.icon, collectionId: h })),
                    (x = f?.title),
                    (C = f?.icon),
                    (p = f?.collectionId),
                    s.useMemo(
                        () => (null == x || null == p ? null : { title: x, icon: C, collectionId: p }),
                        [x, C, p],
                    ));
            return s.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return ed.filter((e) => {
                            let { tab: n } = e;
                            return n !== R.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: I }).map((t) => {
                        let { tab: n, labelKey: l } = t,
                            s = n === R.G2.OFFER_ELIGIBLE ? $.TagIcon : void 0;
                        return {
                            type: "page",
                            key: n,
                            text: D.intl.string(l),
                            onClick: () => e(n),
                            trailingIndicator: null != s ? { type: "icon", icon: s } : void 0,
                        };
                    }),
                    n = [
                        {
                            type: "page",
                            key: R.G2.HOME,
                            text: D.intl.string(D.t["xNiB/O"]),
                            route: P.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.HOME),
                            onClick: () => e(R.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: R.G2.CATALOG,
                            text: D.intl.string(D.t.FshAeN),
                            route: P.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.CATALOG),
                            onClick: () => e(R.G2.CATALOG),
                            expandLabel: D.intl.string(D.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: R.G2.ORBS,
                            text: D.intl.string(D.t.fG3RIg),
                            route: P.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.ORBS),
                            onClick: () => e(R.G2.ORBS),
                        },
                    ];
                if (
                    (A &&
                        n.push({
                            type: "menu",
                            key: R.G2.GAME_SHOPS,
                            text: D.intl.string(D.t.FkjcWY),
                            expandLabel: D.intl.string(D.t.bf9uMH),
                            options: _,
                        }),
                    S &&
                        n.push({
                            type: "page",
                            key: R.G2.GAME_SERVERS,
                            text: D.intl.string(eu.default.vCzwM7),
                            route: P.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.GAME_SERVERS),
                            onClick: () => e(R.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != b)
                ) {
                    let e = P.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(b.collectionId),
                        t = (0, ec.s)(b.icon);
                    n.push({
                        type: "page",
                        key: R.G2.PROMOTION,
                        text: b.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, Z.pX)(e),
                    });
                }
                return n;
            }, [e, I, b, S, A, _]);
        })(
            s.useCallback(
                (e) => {
                    a(e);
                },
                [a],
            ),
        ),
        k = s.useMemo(() => {
            if (null == n) return !1;
            let e = M.find((e) => e.key === R.G2.PROMOTION);
            if (null == e) return !1;
            let t = P.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n);
            return e.route === t;
        }, [M, n])
            ? R.G2.PROMOTION
            : t;
    return (0, l.jsx)("div", {
        ref: b,
        children: (0, l.jsxs)(E.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: i()(eE.jr, { [em.jP]: A }),
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(Y, { handleTransition: a, selectedTab: t, isNarrow: v, hasText: "" !== I }),
                    (0, l.jsx)(c.D, {
                        className: eE.ij,
                        onClick: y,
                        "aria-label": D.intl.string(D.t["7lZ31J"]),
                        children: (0, l.jsx)(u.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, l.jsx)(C.SS, {
                        analyticsPage: j,
                        cardAlignment: C.SS.CardAlignment.END,
                        ctaText: D.intl.string(D.t.VC4Mq0),
                        ctaOnClick: N,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, l.jsx)(c.D, {
                    className: eE.sU,
                    onClick: () => a(R.G2.HOME),
                    "aria-label": D.intl.string(D.t["5upuqx"]),
                    children: (0, l.jsx)(d.ShopIcon, { size: "md", color: m.A.colors.TEXT_DEFAULT }),
                }),
                (0, l.jsx)(W.A, {
                    "aria-label": D.intl.string(D.t["5upuqx"]),
                    className: eE.IV,
                    options: M,
                    selectedKey: k,
                    overflowLabel: D.intl.string(D.t["UKOtz+"]),
                    overflowExpandLabel: D.intl.string(D.t.PEtHiE),
                }),
            ],
        }),
    });
}
