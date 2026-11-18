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
    h = n(742589),
    E = n(321538),
    f = n(702476),
    x = n(318346),
    C = n(435775),
    p = n(287809),
    S = n(365491),
    A = n(115560),
    I = n(834730),
    _ = n(7689),
    b = n(683438),
    v = n(265872),
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
    k = n(724874),
    M = n(652215),
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
                children: (0, l.jsx)(I.E, {
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
                            children: (0, l.jsx)(I.E, { variant: "body-sm/medium", color: "text-strong", children: e }),
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
        children: (0, l.jsx)(I.E, {
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
        { searchSuggestions: u, placeholderIndex: d, setPlaceholderIndex: m } = (0, k.S)(),
        { searchQuery: g, onSetSearchQuery: h } = (0, S.vs)(),
        [E, f] = s.useState(""),
        x = s.useRef(!1),
        C = (0, N.uM)(),
        { enabled: p, searchBarWidthPx: I } = y.useConfig({ location: "collectibles_search_bar" }),
        O = s.useRef(null),
        [P, F] = s.useState(!1),
        H = s.useRef(null),
        [z, V] = s.useState(!1),
        [K, Y] = s.useState(!1),
        [W, $] = s.useState(-1),
        [q, Z] = s.useState(!1),
        X = (0, R.Ay)(),
        Q = p && z && !K && "" === E,
        J = (0, o.bG)([L.Ay], () => L.Ay.useReducedMotion),
        ee = p && !J,
        et = G.intl.string(G.t.arz34K),
        en = u[d],
        el = "" === E ? (ee ? en : et) : null;
    (s.useEffect(() => {
        f(g);
    }, [g]),
        s.useEffect(() => {
            x.current = !1;
        }, [n]),
        s.useEffect(() => {
            if (!ee || "" !== E || z) return;
            let e = setInterval(() => {
                (m((e) => (e + 1) % u.length), Z(!1));
            }, 7e3);
            return () => clearInterval(e);
        }, [ee, E, z, u, m]),
        s.useEffect(() => {
            F(a && r);
        }, [a, r]));
    let es = s.useCallback(
            (e, t) => {
                j.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                (r || X(a, l, (0, A.A)(), i, s), f(a), i)
                    ? h(a)
                    : r || ((x.current = !0), t(T.G2.CATALOG, !1, { searchQuery: a }));
            },
            [n, h, t, X],
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
                if (Q && ("ArrowDown" === e.key || "ArrowUp" === e.key)) {
                    e.preventDefault();
                    let t = "ArrowDown" === e.key ? 1 : -1;
                    $((e) => {
                        let n = e + t;
                        return n < 0 ? u.length - 1 : n >= u.length ? 0 : n;
                    });
                    return;
                }
                if (Q && "Escape" === e.key) {
                    (e.preventDefault(), Y(!0), $(-1));
                    return;
                }
                if ("Enter" === e.key) {
                    if (Q && W >= 0) return void ei(W);
                    ea(E, T.Vf.ENTER);
                }
            },
            [E, ea, Q, W, ei, u],
        ),
        eo = s.useCallback((e) => {
            (f(e), Y(!1), $(-1));
        }, []),
        ec = s.useCallback(() => {
            (V(!0),
                Z(!0),
                Y(!1),
                $(-1),
                j.default.track(M.HAw.COLLECTIBLES_SHOP_SEARCH_STARTED, {
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
            (f(""), h(""), es(T.uY.SEARCH_BAR_CLEAR, T.Xi.SEARCH), a && F(!1));
        }, [h, es, a]),
        eg = s.useCallback(() => {
            (V(!1), a && "" === E && F(!1));
        }, [a, E]),
        eh = a && !P,
        eE = (0, l.jsx)(c.D, {
            className: D.qc,
            onClick: eu,
            "aria-label": et,
            children: (0, l.jsx)(_.MagnifyingGlassIcon, { size: "xs", color: "currentColor" }),
        }),
        ef = (0, l.jsxs)("div", {
            className: D.up,
            children: [
                (0, l.jsx)(b.I, {
                    size: "sm",
                    ref: O,
                    onKeyDown: er,
                    query: E,
                    onChange: eo,
                    onClear: em,
                    onFocus: ec,
                    onBlur: eg,
                    inputProps: {
                        maxLength: 256,
                        ...(p
                            ? {
                                  role: "combobox",
                                  "aria-expanded": Q,
                                  "aria-controls": Q ? B : void 0,
                                  "aria-autocomplete": "list",
                                  "aria-activedescendant": Q && W >= 0 ? `${B}-${W}` : void 0,
                              }
                            : void 0),
                        onClick: ed,
                    },
                    placeholder: ee ? "" : et,
                    "aria-label": et,
                }),
                ee && "" === E ? (0, l.jsx)(U, { option: en, optionKey: d, isFocused: z, isResumed: q }) : null,
            ],
        }),
        ex = { "--custom-search-bar-width": `${I}px` };
    return eh
        ? (0, l.jsx)("div", { style: ex, children: eE })
        : (0, l.jsx)(v.Y, {
              targetElementRef: H,
              renderPopout: () =>
                  (0, l.jsx)("div", {
                      style: ex,
                      children: (0, l.jsx)(w, { suggestions: u, selectedIndex: W, onSelect: ei, onHover: $ }),
                  }),
              position: "bottom",
              align: "right",
              animation: v.Y.Animation.NONE,
              shouldShow: Q,
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
    X = n(758461),
    Q = n(812729),
    J = n.n(Q),
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
        A = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        I = (0, ec.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: _ } = (0, S.vs)(),
        b = s.useRef(null),
        [v, L] = s.useState(!1);
    (0, g.g)(
        b,
        s.useCallback((e) => {
            L(e.contentRect.width < 800);
        }, []),
    );
    let O = t === T.G2.ORBS ? M.liQ.SHOP_ORBS_TAB : M.liQ.COLLECTIBLES_SHOP,
        y = s.useCallback(() => {
            ((0, x.Y)({ pageType: O, sectionType: M.JJy.ORBS_BALANCE_MENU, ctaObject: M.ZSU.CTA_TO_QUEST_HOME }),
                (0, E.mA)({ fromContent: r.u.ORBS_BALANCE_MENU }));
        }, [O]),
        R = s.useCallback(() => {
            A?.id != null && (0, f.openUserProfileModal)({ userId: A.id, tabSection: eu.RP.WISHLIST });
        }, [A?.id]),
        k = (function (e) {
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
                h,
                E,
                f,
                x,
                C,
                p,
                S,
                A,
                I,
                _,
                b = (0, Y.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
                { gameShops: v, hasGameShops: L } =
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
                            (j.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                O = null != (0, X.HH)(),
                y =
                    ((i = (0, q.A)(M.FYj)),
                    (r = (0, Z.XF)(i)),
                    (c = r?.shared.navigation?.tab),
                    (u = c?.title),
                    (d = r?.collectionId),
                    (S =
                        (null == u || null == d || i?.rewardStatus === $.GM.CONSUMED
                            ? null
                            : { title: u, icon: c?.icon, collectionId: d }) ??
                        ((m = (0, Z.NN)(i)),
                        (g = m?.navigation?.tab),
                        (h = g?.title),
                        (E = m?.collectionId),
                        null == h || null == E ? null : { title: h, icon: g?.icon, collectionId: E }) ??
                        ((f = (0, Z.d3)(i)),
                        (x = f?.navigation?.tab),
                        (C = x?.title),
                        (p = f?.collectionId),
                        null == C || null == p ? null : { title: C, icon: x?.icon, collectionId: p })),
                    (A = S?.title),
                    (I = S?.icon),
                    (_ = S?.collectionId),
                    s.useMemo(
                        () => (null == A || null == _ ? null : { title: A, icon: I, collectionId: _ }),
                        [A, I, _],
                    ));
            return s.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return eo.filter((e) => {
                            let { tab: n } = e;
                            return n !== T.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: O }).map((t) => {
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
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(T.G2.HOME),
                            onClick: () => e(T.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: T.G2.CATALOG,
                            text: G.intl.string(G.t.FshAeN),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(T.G2.CATALOG),
                            onClick: () => e(T.G2.CATALOG),
                            expandLabel: G.intl.string(G.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: T.G2.ORBS,
                            text: G.intl.string(G.t.fG3RIg),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(T.G2.ORBS),
                            onClick: () => e(T.G2.ORBS),
                        },
                    ];
                if (
                    (L &&
                        n.push({
                            type: "menu",
                            key: T.G2.GAME_SHOPS,
                            text: G.intl.string(G.t.FkjcWY),
                            expandLabel: G.intl.string(G.t.bf9uMH),
                            options: v,
                        }),
                    b &&
                        n.push({
                            type: "page",
                            key: T.G2.GAME_SERVERS,
                            text: G.intl.string(er.default.vCzwM7),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(T.G2.GAME_SERVERS),
                            onClick: () => e(T.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != y)
                ) {
                    let e = M.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(y.collectionId),
                        t = (0, ei.s)(y.icon);
                    n.push({
                        type: "page",
                        key: T.G2.PROMOTION,
                        text: y.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, W.pX)(e),
                    });
                }
                return n;
            }, [e, O, y, b, L, v]);
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
            let e = k.find((e) => e.key === T.G2.PROMOTION);
            if (null == e) return !1;
            let t = M.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n);
            return e.route === t;
        }, [k, n])
            ? T.G2.PROMOTION
            : t;
    return (0, l.jsx)("div", {
        ref: b,
        children: (0, l.jsxs)(h.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: i()(ed.jr, { [ec.jP]: I }),
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(z, { handleTransition: a, selectedTab: t, isNarrow: v, hasText: "" !== _ }),
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
                    options: k,
                    selectedKey: P,
                    overflowLabel: G.intl.string(G.t["UKOtz+"]),
                    overflowExpandLabel: G.intl.string(G.t.PEtHiE),
                }),
            ],
        }),
    });
}
