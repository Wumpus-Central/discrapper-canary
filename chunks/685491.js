n.d(t, { G: () => eg });
var l = n(477900),
    s = n(582128),
    a = n(503698),
    i = n.n(a),
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
    _ = n(834730),
    v = n(7689),
    I = n(683438),
    b = n(265872),
    j = n(444927),
    L = n(775602),
    N = n(129230),
    O = n(857512),
    T = n(945810),
    R = n(758836);
let y = (0, T.mj)({
    name: "2026-10-collectibles-upgraded-search",
    kind: "user",
    defaultConfig: { enabled: !1, searchBarWidthPx: R.hE.DEFAULT },
    variations: { 0: { enabled: !1, searchBarWidthPx: R.hE.DEFAULT }, 1: { enabled: !0, searchBarWidthPx: R.hE.WIDE } },
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
    let { suggestions: t, selectedIndex: n, onSelect: s, onHover: a } = e;
    return (0, l.jsxs)("div", {
        className: G.Gn,
        onMouseDown: w,
        children: [
            (0, l.jsx)("div", {
                id: F,
                className: G.Xe,
                children: (0, l.jsx)(_.E, {
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
                            onClick: () => s(t),
                            onMouseEnter: () => a(t),
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
    let { option: t, optionKey: n, isFocused: s, isResumed: a } = e;
    return (0, l.jsx)("div", {
        "aria-hidden": !0,
        className: i()(G.pQ, { [G.Eo]: s }),
        children: (0, l.jsx)(_.E, {
            tag: "span",
            variant: "body-sm/normal",
            color: "none",
            children: P.intl.format(k.default.bRwRwX, {
                option: (0, l.jsx)(
                    "span",
                    {
                        className: i()(G.I5, { [G.vZ]: a }),
                        children: (0, l.jsx)("span", { className: G.e_, children: t }),
                    },
                    n,
                ),
            }),
        }),
    });
};
function V(e) {
    let { handleTransition: t, selectedTab: n, isNarrow: a, hasText: r } = e,
        d = (0, j.A)(H),
        { searchQuery: u, onSetSearchQuery: m } = (0, S.vs)(),
        [g, E] = s.useState(""),
        h = s.useRef(!1),
        f = (0, O.uM)(),
        { enabled: x, searchBarWidthPx: C } = y.useConfig({ location: "collectibles_search_bar" }),
        p = s.useRef(null),
        [A, _] = s.useState(!1),
        T = s.useRef(null),
        [k, D] = s.useState(!1),
        [F, w] = s.useState(!1),
        [V, K] = s.useState(-1),
        [Y, W] = s.useState(0),
        [$, Z] = s.useState(!1),
        q = x && k && !F && "" === g,
        Q = (0, o.bG)([L.Ay], () => L.Ay.useReducedMotion),
        X = x && !Q,
        J = P.intl.string(P.t.arz34K),
        ee = d[Y],
        et = "" === g ? (X ? ee : J) : null;
    (s.useEffect(() => {
        E(u);
    }, [u]),
        s.useEffect(() => {
            h.current = !1;
        }, [n]),
        s.useEffect(() => {
            if (!X || "" !== g || k) return;
            let e = setInterval(() => {
                (W((e) => (e + 1) % d.length), Z(!1));
            }, 7e3);
            return () => clearInterval(e);
        }, [X, g, k, d]),
        s.useEffect(() => {
            _(a && r);
        }, [a, r]));
    let en = s.useCallback(
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
        el = s.useCallback(
            (e) => {
                let l = e.trim();
                (E(l), n === R.G2.CATALOG)
                    ? m(l)
                    : h.current || ((h.current = !0), t(R.G2.CATALOG, !1, { searchQuery: l }));
            },
            [n, m, t],
        ),
        es = s.useCallback(
            (e) => {
                let t = d[e];
                (E(t), el(t), K(-1), en(t, R.Xi.SEARCH_SUGGESTION, e));
            },
            [el, en, d],
        ),
        ea = s.useCallback(
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
                    if (q && V >= 0) return void es(V);
                    el(g);
                }
            },
            [g, el, q, V, es, d],
        ),
        ei = s.useCallback((e) => {
            (E(e), w(!1), K(-1));
        }, []),
        er = s.useCallback(() => {
            (D(!0),
                Z(!0),
                w(!1),
                K(-1),
                N.default.track(M.HAw.COLLECTIBLES_SHOP_SEARCH_STARTED, {
                    collectibles_shop_session_id: f?.sessionId,
                    placeholder_text: et,
                }));
        }, [f?.sessionId, et]),
        eo = s.useCallback(() => {
            (en(R.uY.SEARCH_ICON, R.Xi.SEARCH), _(!0), setTimeout(() => p.current?.focus()));
        }, [en]),
        ec = s.useCallback(() => {
            en(R.uY.SEARCH_BAR, R.Xi.SEARCH);
        }, [en]),
        ed = s.useCallback(() => {
            (E(""), m(""), en(R.uY.SEARCH_BAR_CLEAR, R.Xi.SEARCH), a && _(!1));
        }, [m, en, a]),
        eu = s.useCallback(() => {
            (D(!1), a && "" === g && _(!1));
        }, [a, g]),
        em = a && !A,
        eg = (0, l.jsx)(c.D, {
            className: G.qc,
            onClick: eo,
            "aria-label": J,
            children: (0, l.jsx)(v.MagnifyingGlassIcon, { size: "xs", color: "currentColor" }),
        }),
        eE = (0, l.jsxs)("div", {
            className: G.up,
            children: [
                (0, l.jsx)(I.I, {
                    size: "sm",
                    ref: p,
                    onKeyDown: ea,
                    query: g,
                    onChange: ei,
                    onClear: ed,
                    onFocus: er,
                    onBlur: eu,
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
                        onClick: ec,
                    },
                    placeholder: X ? "" : J,
                    "aria-label": J,
                }),
                X && "" === g ? (0, l.jsx)(z, { option: ee, optionKey: Y, isFocused: k, isResumed: $ }) : null,
            ],
        }),
        eh = { "--custom-search-bar-width": `${C}px` };
    return em
        ? (0, l.jsx)("div", { style: eh, children: eg })
        : (0, l.jsx)(b.Y, {
              targetElementRef: T,
              renderPopout: () =>
                  (0, l.jsx)("div", {
                      style: eh,
                      children: (0, l.jsx)(U, { suggestions: d, selectedIndex: V, onSelect: es, onHover: K }),
                  }),
              position: "bottom",
              align: "right",
              animation: b.Y.Animation.NONE,
              shouldShow: q,
              autoInvert: !1,
              children: () =>
                  (0, l.jsx)("div", {
                      className: i()(G.ON, { [G.Nz]: A }),
                      style: eh,
                      children: (0, l.jsx)("div", { ref: T, children: eE }),
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
    es = n(832163),
    ea = n(44724),
    ei = n(486020),
    er = n(22007),
    eo = n(105518);
let ec = [
    { tab: R.G2.OFFER_ELIGIBLE, labelKey: P.t.hY8Ft1 },
    { tab: R.G2.AVATAR_DECORATIONS, labelKey: P.t.dRZYNE },
    { tab: R.G2.NAMEPLATES, labelKey: P.t.V68Fqz },
    { tab: R.G2.PROFILE_EFFECTS, labelKey: P.t["1cNjtx"] },
    { tab: R.G2.PROFILE_FRAMES, labelKey: P.t.ecTJkR },
    { tab: R.G2.BUNDLES, labelKey: P.t.FYFpps },
    { tab: R.G2.COLLABS, labelKey: P.t["+W8gb+"] },
    { tab: R.G2.CATALOG, labelKey: P.t.xFcotU },
];
var ed = n(460348);
n(801416);
var eu = n(518477),
    em = n(835018);
function eg(e) {
    let { selectedTab: t, selectedCollectionId: n, handleTransition: a } = e,
        A = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        _ = (0, ed.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: v } = (0, S.vs)(),
        I = s.useRef(null),
        [b, j] = s.useState(!1);
    (0, g.g)(
        I,
        s.useCallback((e) => {
            j(e.contentRect.width < 800);
        }, []),
    );
    let L = t === R.G2.ORBS ? M.liQ.SHOP_ORBS_TAB : M.liQ.COLLECTIBLES_SHOP,
        T = s.useCallback(() => {
            ((0, x.Y)({ pageType: L, sectionType: M.JJy.ORBS_BALANCE_MENU, ctaObject: M.ZSU.CTA_TO_QUEST_HOME }),
                (0, h.mA)({ fromContent: r.u.ORBS_BALANCE_MENU }));
        }, [L]),
        y = s.useCallback(() => {
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
                        [es.A],
                        () => (es.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
                        [],
                    )),
                    s.useEffect(() => {
                        (0, el.Xw)();
                    }, []),
                    s.useEffect(() => {
                        n.length > 0 &&
                            et.Ay.fetchApplications(
                                n.map((e) => e.applicationId),
                                !1,
                            );
                    }, [n]),
                    (l = s.useCallback(
                        (e) => {
                            (N.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    (a = (0, o.bG)(
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
                v = null != (0, X.HH)(),
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
                    s.useMemo(
                        () => (null == x || null == p ? null : { title: x, icon: C, collectionId: p }),
                        [x, C, p],
                    ));
            return s.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return ec.filter((e) => {
                            let { tab: n } = e;
                            return n !== R.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: v }).map((t) => {
                        let { tab: n, labelKey: l } = t,
                            s = n === R.G2.OFFER_ELIGIBLE ? Y.TagIcon : void 0;
                        return {
                            type: "page",
                            key: n,
                            text: P.intl.string(l),
                            onClick: () => e(n),
                            trailingIndicator: null != s ? { type: "icon", icon: s } : void 0,
                        };
                    }),
                    n = [
                        {
                            type: "page",
                            key: R.G2.HOME,
                            text: P.intl.string(P.t["xNiB/O"]),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.HOME),
                            onClick: () => e(R.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: R.G2.CATALOG,
                            text: P.intl.string(P.t.FshAeN),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.CATALOG),
                            onClick: () => e(R.G2.CATALOG),
                            expandLabel: P.intl.string(P.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: R.G2.ORBS,
                            text: P.intl.string(P.t.fG3RIg),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.ORBS),
                            onClick: () => e(R.G2.ORBS),
                        },
                    ];
                if (
                    (_ &&
                        n.push({
                            type: "menu",
                            key: R.G2.GAME_SHOPS,
                            text: P.intl.string(P.t.FkjcWY),
                            expandLabel: P.intl.string(P.t.bf9uMH),
                            options: A,
                        }),
                    S &&
                        n.push({
                            type: "page",
                            key: R.G2.GAME_SERVERS,
                            text: P.intl.string(eo.default.vCzwM7),
                            route: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.GAME_SERVERS),
                            onClick: () => e(R.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != I)
                ) {
                    let e = M.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(I.collectionId),
                        t = (0, er.s)(I.icon);
                    n.push({
                        type: "page",
                        key: R.G2.PROMOTION,
                        text: I.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, $.pX)(e),
                    });
                }
                return n;
            }, [e, v, I, S, _, A]);
        })(
            s.useCallback(
                (e) => {
                    a(e);
                },
                [a],
            ),
        ),
        G = s.useMemo(() => {
            if (null == n) return !1;
            let e = k.find((e) => e.key === R.G2.PROMOTION);
            if (null == e) return !1;
            let t = M.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n);
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
            className: i()(em.jr, { [ed.jP]: _ }),
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(V, { handleTransition: a, selectedTab: t, isNarrow: b, hasText: "" !== v }),
                    (0, l.jsx)(c.D, {
                        className: em.ij,
                        onClick: y,
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
                    onClick: () => a(R.G2.HOME),
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
