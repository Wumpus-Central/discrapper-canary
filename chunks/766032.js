l.d(t, { G: () => eo });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    s = l(696292),
    o = l(17928),
    c = l(939249),
    u = l(926268),
    d = l(34188),
    E = l(661531),
    p = l(770178),
    A = l(742589),
    C = l(617986),
    S = l(402860),
    _ = l(318346),
    g = l(70926),
    O = l(287809),
    h = l(365491),
    L = l(834730),
    f = l(7689),
    b = l(683438),
    G = l(265872),
    T = l(775602),
    I = l(174459),
    m = l(440938),
    R = l(945810),
    x = l(758836);
let y = (0, R.mj)({
    name: "2026-10-collectibles-upgraded-search",
    kind: "user",
    defaultConfig: { enabled: !1, searchBarWidthPx: x.hE.DEFAULT },
    variations: { 0: { enabled: !1, searchBarWidthPx: x.hE.DEFAULT }, 1: { enabled: !0, searchBarWidthPx: x.hE.WIDE } },
});
var N = l(652215),
    v = l(105292),
    B = l(848913);
let k = [v.t.ZHHx6R, v.t.L1TjUO, v.t.jcB6Kg, v.t.L8hb2E, v.t["3eYXNh"], v.t["8tJXmQ"], v.t.Bkkno0],
    M = "collectibles-search-suggestions",
    P = `${M}-header`;
function F(e) {
    e.preventDefault();
}
function H(e) {
    let { selectedIndex: t, onSelect: l, onHover: i } = e;
    return (0, n.jsxs)("div", {
        className: B.Gn,
        onMouseDown: F,
        children: [
            (0, n.jsx)("div", {
                id: P,
                className: B.Xe,
                children: (0, n.jsx)(L.E, {
                    variant: "text-xs/semibold",
                    color: "text-subtle",
                    children: v.intl.string(v.t.eYMbUC),
                }),
            }),
            (0, n.jsx)("div", {
                role: "listbox",
                id: M,
                tabIndex: -1,
                "aria-labelledby": P,
                className: B.sq,
                children: k.map((e, a) => {
                    let r = v.intl.string(e);
                    return (0, n.jsx)(
                        c.D,
                        {
                            id: `${M}-${a}`,
                            role: "option",
                            tabIndex: -1,
                            "aria-selected": a === t,
                            className: B.h,
                            onClick: () => l(a),
                            onMouseEnter: () => i(a),
                            children: (0, n.jsx)(L.E, { variant: "text-sm/medium", color: "text-strong", children: r }),
                        },
                        r,
                    );
                }),
            }),
        ],
    });
}
function j(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: a, hasText: s } = e,
        { searchQuery: u, onSetSearchQuery: d } = (0, h.v)(),
        [p, A] = i.useState(""),
        C = (0, m.uM)(),
        S = (0, o.bG)([T.Ay], () => T.Ay.useReducedMotion),
        { enabled: _, searchBarWidthPx: g } = y.useConfig({ location: "collectibles_search_bar" }),
        O = i.useRef(null),
        [L, R] = i.useState(!1),
        P = i.useRef(null),
        [F, j] = i.useState(!1),
        [D, w] = i.useState(!1),
        [U, V] = i.useState(-1),
        [K, Y] = i.useState(0),
        z = _ && F && !D && "" === p;
    (i.useEffect(() => {
        let e = setTimeout(() => {
            d(p);
        }, 250);
        return () => clearTimeout(e);
    }, [p, d]),
        i.useEffect(() => {
            A(u);
        }, [u]),
        i.useEffect(() => {
            if (!_ || "" !== p || F || S) return;
            let e = setInterval(() => {
                Y((e) => (e + 1) % k.length);
            }, 5e3);
            return () => clearInterval(e);
        }, [_, p, F, S]),
        i.useEffect(() => {
            R(a && s);
        }, [a, s]));
    let W = i.useCallback(
            (e, t, n) => {
                I.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        X = i.useCallback(
            (e) => {
                let t = v.intl.string(k[e]);
                (A(t), d(t), V(-1), W(t, x.Xi.SEARCH_SUGGESTION, e));
            },
            [d, W],
        ),
        q = i.useCallback(
            (e) => {
                if (z && ("ArrowDown" === e.key || "ArrowUp" === e.key)) {
                    e.preventDefault();
                    let t = "ArrowDown" === e.key ? 1 : -1;
                    V((e) => {
                        let l = e + t;
                        return l < 0 ? k.length - 1 : l >= k.length ? 0 : l;
                    });
                    return;
                }
                if (z && "Escape" === e.key) {
                    (e.preventDefault(), w(!0), V(-1));
                    return;
                }
                if ("Enter" === e.key) {
                    if (z && U >= 0) return void X(U);
                    d(p);
                }
            },
            [p, d, z, U, X],
        ),
        $ = i.useCallback((e) => {
            (A(e), w(!1), V(-1));
        }, []),
        J = i.useCallback(() => {
            (j(!0), w(!1), V(-1));
        }, []),
        Z = i.useCallback(() => {
            (l !== x.G2.CATALOG && t(x.G2.CATALOG),
                W(x.uY.SEARCH_ICON, x.Xi.SEARCH),
                R(!0),
                setTimeout(() => O.current?.focus()));
        }, [l, t, W]),
        Q = i.useCallback(() => {
            (l !== x.G2.CATALOG && t(x.G2.CATALOG), W(x.uY.SEARCH_BAR, x.Xi.SEARCH));
        }, [l, t, W]),
        ee = i.useCallback(() => {
            (A(""), d(""), W(x.uY.SEARCH_BAR_CLEAR, x.Xi.SEARCH), a && R(!1));
        }, [d, W, a]),
        et = i.useCallback(() => {
            (j(!1), a && "" === p && R(!1));
        }, [a, p]),
        el = a && !L,
        en = (0, n.jsx)(c.D, {
            className: B.qc,
            onClick: Z,
            children: (0, n.jsx)(f.MagnifyingGlassIcon, { size: "sm", color: E.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        ei = v.intl.string(v.t.arz34K),
        ea = (0, n.jsx)(b.I, {
            size: "sm",
            ref: O,
            onKeyDown: q,
            query: p,
            onChange: $,
            onClear: ee,
            onFocus: J,
            onBlur: et,
            inputProps: _
                ? {
                      role: "combobox",
                      "aria-expanded": z,
                      "aria-controls": z ? M : void 0,
                      "aria-autocomplete": "list",
                      "aria-activedescendant": z && U >= 0 ? `${M}-${U}` : void 0,
                  }
                : void 0,
            placeholder: !_ || S ? ei : v.intl.formatToPlainString(v.t.bRwRwX, { option: v.intl.string(k[K]) }),
            "aria-label": ei,
        }),
        er = { "--custom-search-bar-width": `${g}px`, "--custom-search-bar-icon-width": `${x.Dy}px` };
    return el
        ? (0, n.jsx)("div", { style: er, children: en })
        : (0, n.jsx)(G.Y, {
              targetElementRef: P,
              renderPopout: () =>
                  (0, n.jsx)("div", {
                      style: er,
                      children: (0, n.jsx)(H, { selectedIndex: U, onSelect: X, onHover: V }),
                  }),
              position: "bottom",
              align: "right",
              animation: G.Y.Animation.NONE,
              shouldShow: z,
              autoInvert: !1,
              children: () =>
                  (0, n.jsx)("div", {
                      className: r()(B.ON, { [B.Nz]: L }),
                      style: er,
                      children: (0, n.jsx)(c.D, { innerRef: P, ignoreKeyPress: !0, onClick: Q, children: ea }),
                  }),
          });
}
var D = l(173127);
l(321073);
var w = l(278416),
    U = l(196736),
    V = l(976860),
    K = l(288106),
    Y = l(223311),
    z = l(65238),
    W = l(758461),
    X = l(151115),
    q = l(812729),
    $ = l.n(q),
    J = l(627363),
    Z = l(587895),
    Q = l(733391),
    ee = l(832163),
    et = l(44724),
    el = l(486020),
    en = l(351585);
let ei = [
    { tab: x.G2.OFFER_ELIGIBLE, labelKey: v.t.hY8Ft1 },
    { tab: x.G2.AVATAR_DECORATIONS, labelKey: v.t.dRZYNE },
    { tab: x.G2.NAMEPLATES, labelKey: v.t.V68Fqz },
    { tab: x.G2.PROFILE_EFFECTS, labelKey: v.t["1cNjtx"] },
    { tab: x.G2.PROFILE_FRAMES, labelKey: v.t.ecTJkR },
    { tab: x.G2.BUNDLES, labelKey: v.t.FYFpps },
    { tab: x.G2.COLLABS, labelKey: v.t["+W8gb+"] },
    { tab: x.G2.CATALOG, labelKey: v.t.xFcotU },
];
var ea = l(783857);
l(801416);
var er = l(518477),
    es = l(835018);
function eo(e) {
    let { selectedTab: t, selectedCollectionId: l, handleTransition: a } = e,
        L = (0, o.bG)([O.default], () => O.default.getCurrentUser()),
        f = (0, ea.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: b } = (0, h.v)(),
        G = i.useRef(null),
        [T, R] = i.useState(!1);
    (0, p.g)(
        G,
        i.useCallback((e) => {
            R(e.contentRect.width < 800);
        }, []),
    );
    let y = t === x.G2.ORBS ? N.liQ.SHOP_ORBS_TAB : N.liQ.COLLECTIBLES_SHOP,
        B = i.useCallback(() => {
            ((0, _.Y)({ pageType: y, sectionType: N.JJy.ORBS_BALANCE_MENU, ctaObject: N.ZSU.CTA_TO_QUEST_HOME }),
                (0, C.mA)({ fromContent: s.u.ORBS_BALANCE_MENU }));
        }, [y]),
        k = i.useCallback(() => {
            L?.id != null && (0, S.openUserProfileModal)({ userId: L.id, tabSection: er.RP.WISHLIST });
        }, [L?.id]),
        M = (function (e) {
            let t,
                l,
                n,
                a,
                r,
                s,
                c,
                u,
                d,
                E,
                p,
                A = (0, U.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
                { gameShops: C, hasGameShops: S } =
                    ((t = (0, m.uM)()),
                    (l = (0, o.yK)(
                        [ee.A],
                        () => (ee.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
                        [],
                    )),
                    i.useEffect(() => {
                        (0, Q.Xw)();
                    }, []),
                    i.useEffect(() => {
                        l.length > 0 &&
                            J.Ay.fetchApplications(
                                l.map((e) => e.applicationId),
                                !1,
                            );
                    }, [l]),
                    (n = i.useCallback(
                        (e) => {
                            (I.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: t?.sessionId,
                                page_type: x.G2.GAME_SHOPS,
                                page_category: t?.pageCategory,
                                page_section: t?.pageSection,
                                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                                cta_name: "go_to_game_shop",
                            }),
                                (0, et.default)({ applicationId: e }).catch(() => {}));
                        },
                        [t],
                    )),
                    (a = (0, o.bG)(
                        [Z.A],
                        () =>
                            l.flatMap((e) => {
                                let t = Z.A.getApplication(e.applicationId),
                                    l = t?.name;
                                return null == l
                                    ? []
                                    : [
                                          {
                                              id: e.applicationId,
                                              label: l,
                                              iconSrc:
                                                  t?.icon != null
                                                      ? el.Ay.getApplicationIconURL({
                                                            id: t.id,
                                                            icon: t.icon,
                                                            size: 32,
                                                        })
                                                      : void 0,
                                          },
                                      ];
                            }),
                        [l],
                        $(),
                    )),
                    {
                        gameShops: i.useMemo(
                            () =>
                                a.map((e) => ({
                                    type: "page",
                                    key: e.id,
                                    text: e.label,
                                    iconSrc: e.iconSrc,
                                    onClick: () => n(e.id),
                                })),
                            [a, n],
                        ),
                        hasGameShops: l.length > 0,
                    }),
                _ = null != (0, W.HH)(),
                g =
                    ((r = (0, Y.A)(N.FYj)),
                    (s = (0, z.XF)(r)),
                    (c = s?.shared.navigation?.tab),
                    (u = c?.title),
                    (d = c?.icon),
                    (E = s?.collectionId),
                    (p = r?.rewardStatus),
                    i.useMemo(
                        () =>
                            null == u || null == E || p === K.GM.CONSUMED
                                ? null
                                : { title: u, icon: d, collectionId: E },
                        [u, d, E, p],
                    ));
            return i.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return ei.filter((e) => {
                            let { tab: l } = e;
                            return l !== x.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: _ }).map((t) => {
                        let { tab: l, labelKey: n } = t,
                            i = l === x.G2.OFFER_ELIGIBLE ? w.TagIcon : void 0;
                        return {
                            type: "page",
                            key: l,
                            text: v.intl.string(n),
                            onClick: () => e(l),
                            trailingIndicator: null != i ? { type: "icon", icon: i } : void 0,
                        };
                    }),
                    l = [
                        {
                            type: "page",
                            key: x.G2.HOME,
                            text: v.intl.string(v.t["xNiB/O"]),
                            route: N.BVt.COLLECTIBLES_SHOP_WITH_TAB(x.G2.HOME),
                            onClick: () => e(x.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: x.G2.CATALOG,
                            text: v.intl.string(v.t.FshAeN),
                            route: N.BVt.COLLECTIBLES_SHOP_WITH_TAB(x.G2.CATALOG),
                            onClick: () => e(x.G2.CATALOG),
                            expandLabel: v.intl.string(v.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: x.G2.ORBS,
                            text: v.intl.string(v.t.fG3RIg),
                            route: N.BVt.COLLECTIBLES_SHOP_WITH_TAB(x.G2.ORBS),
                            onClick: () => e(x.G2.ORBS),
                        },
                    ];
                if (
                    (S &&
                        l.push({
                            type: "menu",
                            key: x.G2.GAME_SHOPS,
                            text: v.intl.string(v.t.FkjcWY),
                            expandLabel: v.intl.string(v.t.bf9uMH),
                            options: C,
                        }),
                    A &&
                        l.push({
                            type: "page",
                            key: x.G2.GAME_SERVERS,
                            text: v.intl.string(en.default.vCzwM7),
                            route: N.BVt.COLLECTIBLES_SHOP_WITH_TAB(x.G2.GAME_SERVERS),
                            onClick: () => e(x.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != g)
                ) {
                    let e = N.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(g.collectionId),
                        t = (0, X.s)(g.icon);
                    l.push({
                        type: "page",
                        key: x.G2.PROMOTION,
                        text: g.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, V.pX)(e),
                    });
                }
                return l;
            }, [e, _, g, A, S, C]);
        })(
            i.useCallback(
                (e) => {
                    a(e);
                },
                [a],
            ),
        ),
        P = i.useMemo(() => {
            if (null == l) return !1;
            let e = M.find((e) => e.key === x.G2.PROMOTION);
            if (null == e) return !1;
            let t = N.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l);
            return e.route === t;
        }, [M, l])
            ? x.G2.PROMOTION
            : t;
    return (0, n.jsx)("div", {
        ref: G,
        children: (0, n.jsxs)(A.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: r()(es.jr, { [ea.jP]: f }),
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(j, { handleTransition: a, selectedTab: t, isNarrow: T, hasText: "" !== b }),
                    (0, n.jsx)(c.D, {
                        className: es.ij,
                        onClick: k,
                        "aria-label": v.intl.string(v.t["7lZ31J"]),
                        children: (0, n.jsx)(u.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(g.SS, {
                        analyticsPage: y,
                        cardAlignment: g.SS.CardAlignment.END,
                        ctaText: v.intl.string(v.t.VC4Mq0),
                        ctaOnClick: B,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(c.D, {
                    className: es.sU,
                    onClick: () => a(x.G2.HOME),
                    "aria-label": v.intl.string(v.t["5upuqx"]),
                    children: (0, n.jsx)(d.U, { size: "md", color: E.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(D.A, {
                    "aria-label": v.intl.string(v.t["5upuqx"]),
                    className: es.IV,
                    options: M,
                    selectedKey: P,
                    overflowLabel: v.intl.string(v.t["UKOtz+"]),
                    overflowExpandLabel: v.intl.string(v.t.PEtHiE),
                }),
            ],
        }),
    });
}
