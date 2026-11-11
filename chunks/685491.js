n.d(t, { G: () => em });
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
    S = n(287809),
    p = n(365491),
    _ = n(115560),
    A = n(834730),
    v = n(7689),
    I = n(683438),
    b = n(265872),
    L = n(775602),
    j = n(129230),
    N = n(857512),
    O = n(945810),
    T = n(758836);
let y = (0, O.mj)({
    name: "2026-10-collectibles-upgraded-search",
    kind: "user",
    defaultConfig: { enabled: !1, searchBarWidthPx: T.hE.DEFAULT },
    variations: { 0: { enabled: !1, searchBarWidthPx: T.hE.DEFAULT }, 1: { enabled: !0, searchBarWidthPx: T.hE.WIDE } },
});
var R = n(662829),
    M = n(724874),
    k = n(652215),
    P = n(143461),
    G = n(792996),
    D = n(848913);
let B = "collectibles-search-suggestions",
    F = `${B}-header`;
function H(e) {
    e.preventDefault();
}
function w(e) {
    let { suggestions: t, selectedIndex: n, onSelect: s, onHover: a } = e;
    return (0, l.jsxs)("div", {
        className: D.Gn,
        onMouseDown: H,
        children: [
            (0, l.jsx)("div", {
                id: F,
                className: D.Xe,
                children: (0, l.jsx)(A.E, {
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
                className: D.sq,
                children: t.map((e, t) =>
                    (0, l.jsx)(
                        c.D,
                        {
                            id: `${B}-${t}`,
                            role: "option",
                            tabIndex: -1,
                            "aria-selected": t === n,
                            className: D.h,
                            onClick: () => s(t),
                            onMouseEnter: () => a(t),
                            children: (0, l.jsx)(A.E, { variant: "body-sm/medium", color: "text-strong", children: e }),
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
let U = (e) => {
    let { option: t, optionKey: n, isFocused: s, isResumed: a } = e;
    return (0, l.jsx)("div", {
        "aria-hidden": !0,
        className: i()(D.pQ, { [D.Eo]: s }),
        children: (0, l.jsx)(A.E, {
            tag: "span",
            variant: "body-sm/normal",
            color: "none",
            children: G.intl.format(P.default.bRwRwX, {
                option: (0, l.jsx)(
                    "span",
                    {
                        className: i()(D.I5, { [D.vZ]: a }),
                        children: (0, l.jsx)("span", { className: D.e_, children: t }),
                    },
                    n,
                ),
            }),
        }),
    });
};
function z(e) {
    let { handleTransition: t, selectedTab: n, isNarrow: a, hasText: r } = e,
        { searchSuggestions: u, placeholderIndex: d, setPlaceholderIndex: m } = (0, M.S)(),
        { searchQuery: g, onSetSearchQuery: E } = (0, p.vs)(),
        [h, f] = s.useState(""),
        x = s.useRef(!1),
        C = (0, N.uM)(),
        { enabled: S, searchBarWidthPx: A } = y.useConfig({ location: "collectibles_search_bar" }),
        O = s.useRef(null),
        [P, F] = s.useState(!1),
        H = s.useRef(null),
        [z, V] = s.useState(!1),
        [K, Y] = s.useState(!1),
        [W, $] = s.useState(-1),
        [q, Z] = s.useState(!1),
        Q = (0, R.Ay)(),
        X = S && z && !K && "" === h,
        J = (0, o.bG)([L.Ay], () => L.Ay.useReducedMotion),
        ee = S && !J,
        et = G.intl.string(G.t.arz34K),
        en = u[d],
        el = "" === h ? (ee ? en : et) : null;
    (s.useEffect(() => {
        f(g);
    }, [g]),
        s.useEffect(() => {
            x.current = !1;
        }, [n]),
        s.useEffect(() => {
            if (!ee || "" !== h || z) return;
            let e = setInterval(() => {
                (m((e) => (e + 1) % u.length), Z(!1));
            }, 7e3);
            return () => clearInterval(e);
        }, [ee, h, z, u, m]),
        s.useEffect(() => {
            F(a && r);
        }, [a, r]));
    let es = s.useCallback(
            (e, t) => {
                j.default.track(k.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: C?.sessionId,
                    page_section: C?.pageSection,
                    page_category: C?.pageCategory,
                    page_index: C?.pageIndex,
                    page_size: C?.pageSize,
                    cta_name: e,
                    page_type: n,
                    tile_type: t,
                });
            },
            [n, C],
        ),
        ea = s.useCallback(
            (e, l, s) => {
                let a = e.trim(),
                    i = n === T.G2.CATALOG,
                    r = !i && x.current;
                (r || Q(a, l, (0, _.A)(), i, s), f(a), i)
                    ? E(a)
                    : r || ((x.current = !0), t(T.G2.CATALOG, !1, { searchQuery: a }));
            },
            [n, E, t, Q],
        ),
        ei = s.useCallback(
            (e) => {
                let t = u[e];
                (f(t), ea(t, T.Vf.SUGGESTION, { text: t, position: e }), $(-1));
            },
            [ea, u],
        ),
        er = s.useCallback(
            (e) => {
                if (X && ("ArrowDown" === e.key || "ArrowUp" === e.key)) {
                    e.preventDefault();
                    let t = "ArrowDown" === e.key ? 1 : -1;
                    $((e) => {
                        let n = e + t;
                        return n < 0 ? u.length - 1 : n >= u.length ? 0 : n;
                    });
                    return;
                }
                if (X && "Escape" === e.key) {
                    (e.preventDefault(), Y(!0), $(-1));
                    return;
                }
                if ("Enter" === e.key) {
                    if (X && W >= 0) return void ei(W);
                    ea(h, T.Vf.ENTER);
                }
            },
            [h, ea, X, W, ei, u],
        ),
        eo = s.useCallback((e) => {
            (f(e), Y(!1), $(-1));
        }, []),
        ec = s.useCallback(() => {
            (V(!0),
                Z(!0),
                Y(!1),
                $(-1),
                j.default.track(k.HAw.COLLECTIBLES_SHOP_SEARCH_STARTED, {
                    collectibles_shop_session_id: C?.sessionId,
                    placeholder_text: el,
                }));
        }, [C?.sessionId, el]),
        eu = s.useCallback(() => {
            (es(T.uY.SEARCH_ICON, T.Xi.SEARCH), F(!0), setTimeout(() => O.current?.focus()));
        }, [es]),
        ed = s.useCallback(() => {
            es(T.uY.SEARCH_BAR, T.Xi.SEARCH);
        }, [es]),
        em = s.useCallback(() => {
            (f(""), E(""), es(T.uY.SEARCH_BAR_CLEAR, T.Xi.SEARCH), a && F(!1));
        }, [E, es, a]),
        eg = s.useCallback(() => {
            (V(!1), a && "" === h && F(!1));
        }, [a, h]),
        eE = a && !P,
        eh = (0, l.jsx)(c.D, {
            className: D.qc,
            onClick: eu,
            "aria-label": et,
            children: (0, l.jsx)(v.MagnifyingGlassIcon, { size: "xs", color: "currentColor" }),
        }),
        ef = (0, l.jsxs)("div", {
            className: D.up,
            children: [
                (0, l.jsx)(I.I, {
                    size: "sm",
                    ref: O,
                    onKeyDown: er,
                    query: h,
                    onChange: eo,
                    onClear: em,
                    onFocus: ec,
                    onBlur: eg,
                    inputProps: {
                        maxLength: 256,
                        ...(S
                            ? {
                                  role: "combobox",
                                  "aria-expanded": X,
                                  "aria-controls": X ? B : void 0,
                                  "aria-autocomplete": "list",
                                  "aria-activedescendant": X && W >= 0 ? `${B}-${W}` : void 0,
                              }
                            : void 0),
                        onClick: ed,
                    },
                    placeholder: ee ? "" : et,
                    "aria-label": et,
                }),
                ee && "" === h ? (0, l.jsx)(U, { option: en, optionKey: d, isFocused: z, isResumed: q }) : null,
            ],
        }),
        ex = { "--custom-search-bar-width": `${A}px` };
    return eE
        ? (0, l.jsx)("div", { style: ex, children: eh })
        : (0, l.jsx)(b.Y, {
              targetElementRef: H,
              renderPopout: () =>
                  (0, l.jsx)("div", {
                      style: ex,
                      children: (0, l.jsx)(w, { suggestions: u, selectedIndex: W, onSelect: ei, onHover: $ }),
                  }),
              position: "bottom",
              align: "right",
              animation: b.Y.Animation.NONE,
              shouldShow: X,
              autoInvert: !1,
              children: () =>
                  (0, l.jsx)("div", {
                      className: i()(D.ON, { [D.Nz]: P }),
                      style: ex,
                      children: (0, l.jsx)("div", { ref: H, children: ef }),
                  }),
          });
}
var V = n(971458);
n(321073);
var K = n(278416),
    Y = n(196736),
    W = n(976860),
    $ = n(288106),
    q = n(223311),
    Z = n(65238),
    Q = n(758461),
    X = n(812729),
    J = n.n(X),
    ee = n(627363),
    et = n(587895),
    en = n(733391),
    el = n(832163),
    es = n(44724),
    ea = n(486020),
    ei = n(22007),
    er = n(105518);
let eo = [
    { tab: T.G2.OFFER_ELIGIBLE, labelKey: G.t.hY8Ft1 },
    { tab: T.G2.AVATAR_DECORATIONS, labelKey: G.t.dRZYNE },
    { tab: T.G2.NAMEPLATES, labelKey: G.t.V68Fqz },
    { tab: T.G2.PROFILE_EFFECTS, labelKey: G.t["1cNjtx"] },
    { tab: T.G2.PROFILE_FRAMES, labelKey: G.t.ecTJkR },
    { tab: T.G2.BUNDLES, labelKey: G.t.FYFpps },
    { tab: T.G2.COLLABS, labelKey: G.t["+W8gb+"] },
    { tab: T.G2.CATALOG, labelKey: G.t.xFcotU },
];
var ec = n(460348);
n(801416);
var eu = n(518477),
    ed = n(835018);
function em(e) {
    let { selectedTab: t, selectedCollectionId: n, handleTransition: a } = e,
        _ = (0, o.bG)([S.default], () => S.default.getCurrentUser()),
        A = (0, ec.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: v } = (0, p.vs)(),
        I = s.useRef(null),
        [b, L] = s.useState(!1);
    (0, g.g)(
        I,
        s.useCallback((e) => {
            L(e.contentRect.width < 800);
        }, []),
    );
    let O = t === T.G2.ORBS ? k.liQ.SHOP_ORBS_TAB : k.liQ.COLLECTIBLES_SHOP,
        y = s.useCallback(() => {
            ((0, x.Y)({ pageType: O, sectionType: k.JJy.ORBS_BALANCE_MENU, ctaObject: k.ZSU.CTA_TO_QUEST_HOME }),
                (0, h.mA)({ fromContent: r.u.ORBS_BALANCE_MENU }));
        }, [O]),
        R = s.useCallback(() => {
            _?.id != null && (0, f.openUserProfileModal)({ userId: _.id, tabSection: eu.RP.WISHLIST });
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
                S,
                p = (0, Y.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
                { gameShops: _, hasGameShops: A } =
                    ((t = (0, N.uM)()),
                    (n = (0, o.yK)(
                        [el.A],
                        () => (el.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
                        [],
                    )),
                    s.useEffect(() => {
                        (0, en.Xw)();
                    }, []),
                    s.useEffect(() => {
                        n.length > 0 &&
                            ee.Ay.fetchApplications(
                                n.map((e) => e.applicationId),
                                !1,
                            );
                    }, [n]),
                    (l = s.useCallback(
                        (e) => {
                            (j.default.track(k.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: t?.sessionId,
                                page_type: T.G2.GAME_SHOPS,
                                page_category: t?.pageCategory,
                                page_section: t?.pageSection,
                                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                                cta_name: "go_to_game_shop",
                            }),
                                (0, es.default)({ applicationId: e }).catch(() => {}));
                        },
                        [t],
                    )),
                    (a = (0, o.bG)(
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
                                                      ? ea.Ay.getApplicationIconURL({
                                                            id: t.id,
                                                            icon: t.icon,
                                                            size: 32,
                                                        })
                                                      : void 0,
                                          },
                                      ];
                            }),
                        [n],
                        J(),
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
                v = null != (0, Q.HH)(),
                I =
                    ((i = (0, q.A)(k.FYj)),
                    (r = (0, Z.XF)(i)),
                    (c = r?.shared.navigation?.tab),
                    (u = c?.title),
                    (d = r?.collectionId),
                    (f =
                        (null == u || null == d || i?.rewardStatus === $.GM.CONSUMED
                            ? null
                            : { title: u, icon: c?.icon, collectionId: d }) ??
                        ((m = (0, Z.NN)(i)),
                        (g = m?.navigation?.tab),
                        (E = g?.title),
                        (h = m?.collectionId),
                        null == E || null == h ? null : { title: E, icon: g?.icon, collectionId: h })),
                    (x = f?.title),
                    (C = f?.icon),
                    (S = f?.collectionId),
                    s.useMemo(
                        () => (null == x || null == S ? null : { title: x, icon: C, collectionId: S }),
                        [x, C, S],
                    ));
            return s.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return eo.filter((e) => {
                            let { tab: n } = e;
                            return n !== T.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: v }).map((t) => {
                        let { tab: n, labelKey: l } = t,
                            s = n === T.G2.OFFER_ELIGIBLE ? K.TagIcon : void 0;
                        return {
                            type: "page",
                            key: n,
                            text: G.intl.string(l),
                            onClick: () => e(n),
                            trailingIndicator: null != s ? { type: "icon", icon: s } : void 0,
                        };
                    }),
                    n = [
                        {
                            type: "page",
                            key: T.G2.HOME,
                            text: G.intl.string(G.t["xNiB/O"]),
                            route: k.BVt.COLLECTIBLES_SHOP_WITH_TAB(T.G2.HOME),
                            onClick: () => e(T.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: T.G2.CATALOG,
                            text: G.intl.string(G.t.FshAeN),
                            route: k.BVt.COLLECTIBLES_SHOP_WITH_TAB(T.G2.CATALOG),
                            onClick: () => e(T.G2.CATALOG),
                            expandLabel: G.intl.string(G.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: T.G2.ORBS,
                            text: G.intl.string(G.t.fG3RIg),
                            route: k.BVt.COLLECTIBLES_SHOP_WITH_TAB(T.G2.ORBS),
                            onClick: () => e(T.G2.ORBS),
                        },
                    ];
                if (
                    (A &&
                        n.push({
                            type: "menu",
                            key: T.G2.GAME_SHOPS,
                            text: G.intl.string(G.t.FkjcWY),
                            expandLabel: G.intl.string(G.t.bf9uMH),
                            options: _,
                        }),
                    p &&
                        n.push({
                            type: "page",
                            key: T.G2.GAME_SERVERS,
                            text: G.intl.string(er.default.vCzwM7),
                            route: k.BVt.COLLECTIBLES_SHOP_WITH_TAB(T.G2.GAME_SERVERS),
                            onClick: () => e(T.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != I)
                ) {
                    let e = k.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(I.collectionId),
                        t = (0, ei.s)(I.icon);
                    n.push({
                        type: "page",
                        key: T.G2.PROMOTION,
                        text: I.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, W.pX)(e),
                    });
                }
                return n;
            }, [e, v, I, p, A, _]);
        })(
            s.useCallback(
                (e) => {
                    a(e);
                },
                [a],
            ),
        ),
        P = s.useMemo(() => {
            if (null == n) return !1;
            let e = M.find((e) => e.key === T.G2.PROMOTION);
            if (null == e) return !1;
            let t = k.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n);
            return e.route === t;
        }, [M, n])
            ? T.G2.PROMOTION
            : t;
    return (0, l.jsx)("div", {
        ref: I,
        children: (0, l.jsxs)(E.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: i()(ed.jr, { [ec.jP]: A }),
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(z, { handleTransition: a, selectedTab: t, isNarrow: b, hasText: "" !== v }),
                    (0, l.jsx)(c.D, {
                        className: ed.ij,
                        onClick: R,
                        "aria-label": G.intl.string(G.t["7lZ31J"]),
                        children: (0, l.jsx)(u.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, l.jsx)(C.SS, {
                        analyticsPage: O,
                        cardAlignment: C.SS.CardAlignment.END,
                        ctaText: G.intl.string(G.t.VC4Mq0),
                        ctaOnClick: y,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, l.jsx)(c.D, {
                    className: ed.sU,
                    onClick: () => a(T.G2.HOME),
                    "aria-label": G.intl.string(G.t["5upuqx"]),
                    children: (0, l.jsx)(d.ShopIcon, { size: "md", color: m.A.colors.TEXT_DEFAULT }),
                }),
                (0, l.jsx)(V.A, {
                    "aria-label": G.intl.string(G.t["5upuqx"]),
                    className: ed.IV,
                    options: M,
                    selectedKey: P,
                    overflowLabel: G.intl.string(G.t["UKOtz+"]),
                    overflowExpandLabel: G.intl.string(G.t.PEtHiE),
                }),
            ],
        }),
    });
}
