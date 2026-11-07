n.d(t, { G: () => eh });
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
    _ = n(435558),
    A = n(115560),
    v = n(834730),
    I = n(7689),
    b = n(683438),
    L = n(265872),
    j = n(444927),
    N = n(775602),
    O = n(129230),
    T = n(857512),
    R = n(945810),
    y = n(758836);
let M = (0, R.mj)({
    name: "2026-10-collectibles-upgraded-search",
    kind: "user",
    defaultConfig: { enabled: !1, searchBarWidthPx: y.hE.DEFAULT },
    variations: { 0: { enabled: !1, searchBarWidthPx: y.hE.DEFAULT }, 1: { enabled: !0, searchBarWidthPx: y.hE.WIDE } },
});
var k = n(652215);
function P(e) {
    return e.trim().slice(0, 256);
}
var G = n(143461),
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
                children: (0, l.jsx)(v.E, {
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
                            children: (0, l.jsx)(v.E, { variant: "body-sm/medium", color: "text-strong", children: e }),
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
        children: (0, l.jsx)(v.E, {
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
    let t,
        { handleTransition: n, selectedTab: a, isNarrow: r, hasText: d } = e,
        u = (0, j.A)(U),
        { searchQuery: m, onSetSearchQuery: g } = (0, S.vs)(),
        [E, h] = s.useState(""),
        f = s.useRef(!1),
        x = (0, T.uM)(),
        { enabled: C, searchBarWidthPx: p } = M.useConfig({ location: "collectibles_search_bar" }),
        _ = s.useRef(null),
        [v, R] = s.useState(!1),
        G = s.useRef(null),
        [F, w] = s.useState(!1),
        [z, Y] = s.useState(!1),
        [W, $] = s.useState(-1),
        [Z, q] = s.useState(0),
        [Q, X] = s.useState(!1),
        J =
            ((t = (0, T.uM)()?.sessionId),
            s.useCallback(
                (e, n, l, s, a) => {
                    let i = P(e),
                        r = s && i === P(S.vs.getState().searchQuery);
                    "" === i ||
                        r ||
                        O.default.track(k.HAw.COLLECTIBLES_SHOP_SEARCH_QUERY_SUBMITTED, {
                            collectibles_shop_session_id: t,
                            search_query_id: l,
                            input_method: n,
                            suggestion_text: a?.text,
                            suggestion_position: a?.position,
                        });
                },
                [t],
            )),
        ee = C && F && !z && "" === E,
        et = (0, o.bG)([N.Ay], () => N.Ay.useReducedMotion),
        en = C && !et,
        el = D.intl.string(D.t.arz34K),
        es = u[Z],
        ea = "" === E ? (en ? es : el) : null;
    (s.useEffect(() => {
        h(m);
    }, [m]),
        s.useEffect(() => {
            f.current = !1;
        }, [a]),
        s.useEffect(() => {
            if (!en || "" !== E || F) return;
            let e = setInterval(() => {
                (q((e) => (e + 1) % u.length), X(!1));
            }, 7e3);
            return () => clearInterval(e);
        }, [en, E, F, u]),
        s.useEffect(() => {
            R(r && d);
        }, [r, d]));
    let ei = s.useCallback(
            (e, t) => {
                O.default.track(k.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: x?.sessionId,
                    page_section: x?.pageSection,
                    page_category: x?.pageCategory,
                    page_index: x?.pageIndex,
                    page_size: x?.pageSize,
                    cta_name: e,
                    page_type: a,
                    tile_type: t,
                });
            },
            [a, x],
        ),
        er = s.useCallback(
            (e, t, l) => {
                let s = e.trim(),
                    i = a === y.G2.CATALOG,
                    r = !i && f.current;
                (r || J(s, t, (0, A.A)(), i, l), h(s), i)
                    ? g(s)
                    : r || ((f.current = !0), n(y.G2.CATALOG, !1, { searchQuery: s }));
            },
            [a, g, n, J],
        ),
        eo = s.useCallback(
            (e) => {
                let t = u[e];
                (h(t), er(t, y.Vf.SUGGESTION, { text: t, position: e }), $(-1));
            },
            [er, u],
        ),
        ec = s.useCallback(
            (e) => {
                if (ee && ("ArrowDown" === e.key || "ArrowUp" === e.key)) {
                    e.preventDefault();
                    let t = "ArrowDown" === e.key ? 1 : -1;
                    $((e) => {
                        let n = e + t;
                        return n < 0 ? u.length - 1 : n >= u.length ? 0 : n;
                    });
                    return;
                }
                if (ee && "Escape" === e.key) {
                    (e.preventDefault(), Y(!0), $(-1));
                    return;
                }
                if ("Enter" === e.key) {
                    if (ee && W >= 0) return void eo(W);
                    er(E, y.Vf.ENTER);
                }
            },
            [E, er, ee, W, eo, u],
        ),
        ed = s.useCallback((e) => {
            (h(e), Y(!1), $(-1));
        }, []),
        eu = s.useCallback(() => {
            (w(!0),
                X(!0),
                Y(!1),
                $(-1),
                O.default.track(k.HAw.COLLECTIBLES_SHOP_SEARCH_STARTED, {
                    collectibles_shop_session_id: x?.sessionId,
                    placeholder_text: ea,
                }));
        }, [x?.sessionId, ea]),
        em = s.useCallback(() => {
            (ei(y.uY.SEARCH_ICON, y.Xi.SEARCH), R(!0), setTimeout(() => _.current?.focus()));
        }, [ei]),
        eg = s.useCallback(() => {
            ei(y.uY.SEARCH_BAR, y.Xi.SEARCH);
        }, [ei]),
        eE = s.useCallback(() => {
            (h(""), g(""), ei(y.uY.SEARCH_BAR_CLEAR, y.Xi.SEARCH), r && R(!1));
        }, [g, ei, r]),
        eh = s.useCallback(() => {
            (w(!1), r && "" === E && R(!1));
        }, [r, E]),
        ef = r && !v,
        ex = (0, l.jsx)(c.D, {
            className: B.qc,
            onClick: em,
            "aria-label": el,
            children: (0, l.jsx)(I.MagnifyingGlassIcon, { size: "xs", color: "currentColor" }),
        }),
        eC = (0, l.jsxs)("div", {
            className: B.up,
            children: [
                (0, l.jsx)(b.I, {
                    size: "sm",
                    ref: _,
                    onKeyDown: ec,
                    query: E,
                    onChange: ed,
                    onClear: eE,
                    onFocus: eu,
                    onBlur: eh,
                    inputProps: {
                        maxLength: 256,
                        ...(C
                            ? {
                                  role: "combobox",
                                  "aria-expanded": ee,
                                  "aria-controls": ee ? H : void 0,
                                  "aria-autocomplete": "list",
                                  "aria-activedescendant": ee && W >= 0 ? `${H}-${W}` : void 0,
                              }
                            : void 0),
                        onClick: eg,
                    },
                    placeholder: en ? "" : el,
                    "aria-label": el,
                }),
                en && "" === E ? (0, l.jsx)(K, { option: es, optionKey: Z, isFocused: F, isResumed: Q }) : null,
            ],
        }),
        ep = { "--custom-search-bar-width": `${p}px` };
    return ef
        ? (0, l.jsx)("div", { style: ep, children: ex })
        : (0, l.jsx)(L.Y, {
              targetElementRef: G,
              renderPopout: () =>
                  (0, l.jsx)("div", {
                      style: ep,
                      children: (0, l.jsx)(V, { suggestions: u, selectedIndex: W, onSelect: eo, onHover: $ }),
                  }),
              position: "bottom",
              align: "right",
              animation: L.Y.Animation.NONE,
              shouldShow: ee,
              autoInvert: !1,
              children: () =>
                  (0, l.jsx)("div", {
                      className: i()(B.ON, { [B.Nz]: v }),
                      style: ep,
                      children: (0, l.jsx)("div", { ref: G, children: eC }),
                  }),
          });
}
var W = n(971458);
n(321073);
var $ = n(278416),
    Z = n(196736),
    q = n(976860),
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
    ed = n(105518);
let eu = [
    { tab: y.G2.OFFER_ELIGIBLE, labelKey: D.t.hY8Ft1 },
    { tab: y.G2.AVATAR_DECORATIONS, labelKey: D.t.dRZYNE },
    { tab: y.G2.NAMEPLATES, labelKey: D.t.V68Fqz },
    { tab: y.G2.PROFILE_EFFECTS, labelKey: D.t["1cNjtx"] },
    { tab: y.G2.PROFILE_FRAMES, labelKey: D.t.ecTJkR },
    { tab: y.G2.BUNDLES, labelKey: D.t.FYFpps },
    { tab: y.G2.COLLABS, labelKey: D.t["+W8gb+"] },
    { tab: y.G2.CATALOG, labelKey: D.t.xFcotU },
];
var em = n(460348);
n(801416);
var eg = n(518477),
    eE = n(835018);
function eh(e) {
    let { selectedTab: t, selectedCollectionId: n, handleTransition: a } = e,
        _ = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        A = (0, em.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: v } = (0, S.vs)(),
        I = s.useRef(null),
        [b, L] = s.useState(!1);
    (0, g.g)(
        I,
        s.useCallback((e) => {
            L(e.contentRect.width < 800);
        }, []),
    );
    let j = t === y.G2.ORBS ? k.liQ.SHOP_ORBS_TAB : k.liQ.COLLECTIBLES_SHOP,
        N = s.useCallback(() => {
            ((0, x.Y)({ pageType: j, sectionType: k.JJy.ORBS_BALANCE_MENU, ctaObject: k.ZSU.CTA_TO_QUEST_HOME }),
                (0, h.mA)({ fromContent: r.u.ORBS_BALANCE_MENU }));
        }, [j]),
        R = s.useCallback(() => {
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
                S = (0, Z.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
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
                            (O.default.track(k.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: t?.sessionId,
                                page_type: y.G2.GAME_SHOPS,
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
                v = null != (0, ee.HH)(),
                I =
                    ((i = (0, X.A)(k.FYj)),
                    (r = (0, J.XF)(i)),
                    (c = r?.shared.navigation?.tab),
                    (d = c?.title),
                    (u = r?.collectionId),
                    (f =
                        (null == d || null == u || i?.rewardStatus === Q.GM.CONSUMED
                            ? null
                            : { title: d, icon: c?.icon, collectionId: u }) ??
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
                        return eu.filter((e) => {
                            let { tab: n } = e;
                            return n !== y.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: v }).map((t) => {
                        let { tab: n, labelKey: l } = t,
                            s = n === y.G2.OFFER_ELIGIBLE ? $.TagIcon : void 0;
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
                            key: y.G2.HOME,
                            text: D.intl.string(D.t["xNiB/O"]),
                            route: k.BVt.COLLECTIBLES_SHOP_WITH_TAB(y.G2.HOME),
                            onClick: () => e(y.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: y.G2.CATALOG,
                            text: D.intl.string(D.t.FshAeN),
                            route: k.BVt.COLLECTIBLES_SHOP_WITH_TAB(y.G2.CATALOG),
                            onClick: () => e(y.G2.CATALOG),
                            expandLabel: D.intl.string(D.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: y.G2.ORBS,
                            text: D.intl.string(D.t.fG3RIg),
                            route: k.BVt.COLLECTIBLES_SHOP_WITH_TAB(y.G2.ORBS),
                            onClick: () => e(y.G2.ORBS),
                        },
                    ];
                if (
                    (A &&
                        n.push({
                            type: "menu",
                            key: y.G2.GAME_SHOPS,
                            text: D.intl.string(D.t.FkjcWY),
                            expandLabel: D.intl.string(D.t.bf9uMH),
                            options: _,
                        }),
                    S &&
                        n.push({
                            type: "page",
                            key: y.G2.GAME_SERVERS,
                            text: D.intl.string(ed.default.vCzwM7),
                            route: k.BVt.COLLECTIBLES_SHOP_WITH_TAB(y.G2.GAME_SERVERS),
                            onClick: () => e(y.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != I)
                ) {
                    let e = k.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(I.collectionId),
                        t = (0, ec.s)(I.icon);
                    n.push({
                        type: "page",
                        key: y.G2.PROMOTION,
                        text: I.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, q.pX)(e),
                    });
                }
                return n;
            }, [e, v, I, S, A, _]);
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
            let e = M.find((e) => e.key === y.G2.PROMOTION);
            if (null == e) return !1;
            let t = k.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(n);
            return e.route === t;
        }, [M, n])
            ? y.G2.PROMOTION
            : t;
    return (0, l.jsx)("div", {
        ref: I,
        children: (0, l.jsxs)(E.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: i()(eE.jr, { [em.jP]: A }),
            toolbar: (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(Y, { handleTransition: a, selectedTab: t, isNarrow: b, hasText: "" !== v }),
                    (0, l.jsx)(c.D, {
                        className: eE.ij,
                        onClick: R,
                        "aria-label": D.intl.string(D.t["7lZ31J"]),
                        children: (0, l.jsx)(d.HeartIcon, { size: "xs", color: "currentColor" }),
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
                    onClick: () => a(y.G2.HOME),
                    "aria-label": D.intl.string(D.t["5upuqx"]),
                    children: (0, l.jsx)(u.ShopIcon, { size: "md", color: m.A.colors.TEXT_DEFAULT }),
                }),
                (0, l.jsx)(W.A, {
                    "aria-label": D.intl.string(D.t["5upuqx"]),
                    className: eE.IV,
                    options: M,
                    selectedKey: P,
                    overflowLabel: D.intl.string(D.t["UKOtz+"]),
                    overflowExpandLabel: D.intl.string(D.t.PEtHiE),
                }),
            ],
        }),
    });
}
