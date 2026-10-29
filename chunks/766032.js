l.d(t, { G: () => es });
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
    _ = l(402860),
    g = l(318346),
    S = l(70926),
    O = l(287809),
    f = l(365491),
    L = l(834730),
    b = l(7689),
    h = l(683438),
    G = l(265872),
    I = l(775602),
    T = l(174459),
    m = l(440938);
let R = (0, l(945810).mj)({
    name: "2026-10-collectibles-upgraded-search",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var y = l(758836),
    x = l(652215),
    N = l(105292),
    v = l(848913);
let B = [N.t.ZHHx6R, N.t.L1TjUO, N.t.jcB6Kg, N.t.L8hb2E, N.t["3eYXNh"], N.t["8tJXmQ"], N.t.Bkkno0],
    k = "collectibles-search-suggestions",
    M = `${k}-header`;
function P(e) {
    e.preventDefault();
}
function F(e) {
    let { selectedIndex: t, onSelect: l, onHover: i } = e;
    return (0, n.jsxs)("div", {
        className: v.Gn,
        onMouseDown: P,
        children: [
            (0, n.jsx)("div", {
                id: M,
                className: v.Xe,
                children: (0, n.jsx)(L.E, {
                    variant: "text-xs/semibold",
                    color: "text-subtle",
                    children: N.intl.string(N.t.eYMbUC),
                }),
            }),
            (0, n.jsx)("div", {
                role: "listbox",
                id: k,
                tabIndex: -1,
                "aria-labelledby": M,
                className: v.sq,
                children: B.map((e, a) => {
                    let r = N.intl.string(e);
                    return (0, n.jsx)(
                        c.D,
                        {
                            id: `${k}-${a}`,
                            role: "option",
                            tabIndex: -1,
                            "aria-selected": a === t,
                            className: v.h,
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
        { searchQuery: u, onSetSearchQuery: d } = (0, f.v)(),
        [p, A] = i.useState(""),
        C = (0, m.uM)(),
        _ = (0, o.bG)([I.Ay], () => I.Ay.useReducedMotion),
        g = R.useConfig({ location: "collectibles_search_bar" }).enabled,
        S = i.useRef(null),
        [O, L] = i.useState(!1),
        M = i.useRef(null),
        [P, j] = i.useState(!1),
        [H, w] = i.useState(!1),
        [D, U] = i.useState(-1),
        [V, K] = i.useState(0),
        Y = g && P && !H && "" === p;
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
            if (!g || "" !== p || P || _) return;
            let e = setInterval(() => {
                K((e) => (e + 1) % B.length);
            }, 5e3);
            return () => clearInterval(e);
        }, [g, p, P, _]),
        i.useEffect(() => {
            L(a && s);
        }, [a, s]));
    let z = i.useCallback(
            (e) => {
                let t = N.intl.string(B[e]);
                (A(t), d(t), U(-1));
            },
            [d],
        ),
        q = i.useCallback(
            (e) => {
                if (Y && ("ArrowDown" === e.key || "ArrowUp" === e.key)) {
                    e.preventDefault();
                    let t = "ArrowDown" === e.key ? 1 : -1;
                    U((e) => {
                        let l = e + t;
                        return l < 0 ? B.length - 1 : l >= B.length ? 0 : l;
                    });
                    return;
                }
                if (Y && "Escape" === e.key) {
                    (e.preventDefault(), w(!0), U(-1));
                    return;
                }
                if ("Enter" === e.key) {
                    if (Y && D >= 0) return void z(D);
                    d(p);
                }
            },
            [p, d, Y, D, z],
        ),
        W = i.useCallback((e) => {
            (A(e), w(!1), U(-1));
        }, []),
        X = i.useCallback(() => {
            (j(!0), w(!1), U(-1));
        }, []),
        $ = i.useCallback(
            (e) => {
                T.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: C?.sessionId,
                    page_section: C?.pageSection,
                    page_category: C?.pageCategory,
                    page_index: C?.pageIndex,
                    page_size: C?.pageSize,
                    cta_name: e,
                    page_type: l,
                });
            },
            [l, C],
        ),
        J = i.useCallback(() => {
            (l !== y.G2.CATALOG && t(y.G2.CATALOG), $(y.uY.SEARCH_ICON), L(!0), setTimeout(() => S.current?.focus()));
        }, [l, t, $]),
        Z = i.useCallback(() => {
            (l !== y.G2.CATALOG && t(y.G2.CATALOG), $(y.uY.SEARCH_BAR));
        }, [l, t, $]),
        Q = i.useCallback(() => {
            (A(""), d(""), $(y.uY.SEARCH_BAR_CLEAR), a && L(!1));
        }, [d, $, a]),
        ee = i.useCallback(() => {
            (j(!1), a && "" === p && L(!1));
        }, [a, p]),
        et = a && !O,
        el = (0, n.jsx)(c.D, {
            className: v.qc,
            onClick: J,
            children: (0, n.jsx)(b.MagnifyingGlassIcon, { size: "sm", color: E.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        en = N.intl.string(N.t.arz34K),
        ei = (0, n.jsx)(h.I, {
            size: "sm",
            ref: S,
            onKeyDown: q,
            query: p,
            onChange: W,
            onClear: Q,
            onFocus: X,
            onBlur: ee,
            inputProps: g
                ? {
                      role: "combobox",
                      "aria-expanded": Y,
                      "aria-controls": Y ? k : void 0,
                      "aria-autocomplete": "list",
                      "aria-activedescendant": Y && D >= 0 ? `${k}-${D}` : void 0,
                  }
                : void 0,
            placeholder: !g || _ ? en : N.intl.formatToPlainString(N.t.bRwRwX, { option: N.intl.string(B[V]) }),
            "aria-label": en,
        }),
        ea = { "--custom-search-bar-width": `${y.rr}px`, "--custom-search-bar-icon-width": `${y.Dy}px` };
    return et
        ? (0, n.jsx)("div", { style: ea, children: el })
        : (0, n.jsx)(G.Y, {
              targetElementRef: M,
              renderPopout: () => (0, n.jsx)(F, { selectedIndex: D, onSelect: z, onHover: U }),
              position: "bottom",
              align: "right",
              animation: G.Y.Animation.NONE,
              shouldShow: Y,
              autoInvert: !1,
              children: () =>
                  (0, n.jsx)("div", {
                      className: r()(v.ON, { [v.Nz]: O }),
                      style: ea,
                      children: (0, n.jsx)(c.D, { innerRef: M, ignoreKeyPress: !0, onClick: Z, children: ei }),
                  }),
          });
}
var H = l(173127);
l(321073);
var w = l(278416),
    D = l(196736),
    U = l(976860),
    V = l(288106),
    K = l(223311),
    Y = l(65238),
    z = l(758461),
    q = l(151115),
    W = l(812729),
    X = l.n(W),
    $ = l(627363),
    J = l(587895),
    Z = l(733391),
    Q = l(832163),
    ee = l(44724),
    et = l(486020),
    el = l(351585);
let en = [
    { tab: y.G2.OFFER_ELIGIBLE, labelKey: N.t.hY8Ft1 },
    { tab: y.G2.AVATAR_DECORATIONS, labelKey: N.t.dRZYNE },
    { tab: y.G2.NAMEPLATES, labelKey: N.t.V68Fqz },
    { tab: y.G2.PROFILE_EFFECTS, labelKey: N.t["1cNjtx"] },
    { tab: y.G2.PROFILE_FRAMES, labelKey: N.t.ecTJkR },
    { tab: y.G2.BUNDLES, labelKey: N.t.FYFpps },
    { tab: y.G2.COLLABS, labelKey: N.t["+W8gb+"] },
    { tab: y.G2.CATALOG, labelKey: N.t.xFcotU },
];
var ei = l(783857);
l(801416);
var ea = l(518477),
    er = l(835018);
function es(e) {
    let { selectedTab: t, selectedCollectionId: l, handleTransition: a } = e,
        L = (0, o.bG)([O.default], () => O.default.getCurrentUser()),
        b = (0, ei.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: h } = (0, f.v)(),
        G = i.useRef(null),
        [I, R] = i.useState(!1);
    (0, p.g)(
        G,
        i.useCallback((e) => {
            R(e.contentRect.width < 800);
        }, []),
    );
    let v = t === y.G2.ORBS ? x.liQ.SHOP_ORBS_TAB : x.liQ.COLLECTIBLES_SHOP,
        B = i.useCallback(() => {
            ((0, g.Y)({ pageType: v, sectionType: x.JJy.ORBS_BALANCE_MENU, ctaObject: x.ZSU.CTA_TO_QUEST_HOME }),
                (0, C.mA)({ fromContent: s.u.ORBS_BALANCE_MENU }));
        }, [v]),
        k = i.useCallback(() => {
            L?.id != null && (0, _.openUserProfileModal)({ userId: L.id, tabSection: ea.RP.WISHLIST });
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
                A = (0, D.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
                { gameShops: C, hasGameShops: _ } =
                    ((t = (0, m.uM)()),
                    (l = (0, o.yK)(
                        [Q.A],
                        () => (Q.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
                        [],
                    )),
                    i.useEffect(() => {
                        (0, Z.Xw)();
                    }, []),
                    i.useEffect(() => {
                        l.length > 0 &&
                            $.Ay.fetchApplications(
                                l.map((e) => e.applicationId),
                                !1,
                            );
                    }, [l]),
                    (n = i.useCallback(
                        (e) => {
                            (T.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: t?.sessionId,
                                page_type: y.G2.GAME_SHOPS,
                                page_category: t?.pageCategory,
                                page_section: t?.pageSection,
                                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                                cta_name: "go_to_game_shop",
                            }),
                                (0, ee.default)({ applicationId: e }).catch(() => {}));
                        },
                        [t],
                    )),
                    (a = (0, o.bG)(
                        [J.A],
                        () =>
                            l.flatMap((e) => {
                                let t = J.A.getApplication(e.applicationId),
                                    l = t?.name;
                                return null == l
                                    ? []
                                    : [
                                          {
                                              id: e.applicationId,
                                              label: l,
                                              iconSrc:
                                                  t?.icon != null
                                                      ? et.Ay.getApplicationIconURL({
                                                            id: t.id,
                                                            icon: t.icon,
                                                            size: 32,
                                                        })
                                                      : void 0,
                                          },
                                      ];
                            }),
                        [l],
                        X(),
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
                g = null != (0, z.HH)(),
                S =
                    ((r = (0, K.A)(x.FYj)),
                    (s = (0, Y.XF)(r)),
                    (c = s?.shared.navigation?.tab),
                    (u = c?.title),
                    (d = c?.icon),
                    (E = s?.collectionId),
                    (p = r?.rewardStatus),
                    i.useMemo(
                        () =>
                            null == u || null == E || p === V.GM.CONSUMED
                                ? null
                                : { title: u, icon: d, collectionId: E },
                        [u, d, E, p],
                    ));
            return i.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return en.filter((e) => {
                            let { tab: l } = e;
                            return l !== y.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: g }).map((t) => {
                        let { tab: l, labelKey: n } = t,
                            i = l === y.G2.OFFER_ELIGIBLE ? w.TagIcon : void 0;
                        return {
                            type: "page",
                            key: l,
                            text: N.intl.string(n),
                            onClick: () => e(l),
                            trailingIndicator: null != i ? { type: "icon", icon: i } : void 0,
                        };
                    }),
                    l = [
                        {
                            type: "page",
                            key: y.G2.HOME,
                            text: N.intl.string(N.t["xNiB/O"]),
                            route: x.BVt.COLLECTIBLES_SHOP_WITH_TAB(y.G2.HOME),
                            onClick: () => e(y.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: y.G2.CATALOG,
                            text: N.intl.string(N.t.FshAeN),
                            route: x.BVt.COLLECTIBLES_SHOP_WITH_TAB(y.G2.CATALOG),
                            onClick: () => e(y.G2.CATALOG),
                            expandLabel: N.intl.string(N.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: y.G2.ORBS,
                            text: N.intl.string(N.t.fG3RIg),
                            route: x.BVt.COLLECTIBLES_SHOP_WITH_TAB(y.G2.ORBS),
                            onClick: () => e(y.G2.ORBS),
                        },
                    ];
                if (
                    (_ &&
                        l.push({
                            type: "menu",
                            key: y.G2.GAME_SHOPS,
                            text: N.intl.string(N.t.FkjcWY),
                            expandLabel: N.intl.string(N.t.bf9uMH),
                            options: C,
                        }),
                    A &&
                        l.push({
                            type: "page",
                            key: y.G2.GAME_SERVERS,
                            text: N.intl.string(el.default.vCzwM7),
                            route: x.BVt.COLLECTIBLES_SHOP_WITH_TAB(y.G2.GAME_SERVERS),
                            onClick: () => e(y.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != S)
                ) {
                    let e = x.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(S.collectionId),
                        t = (0, q.s)(S.icon);
                    l.push({
                        type: "page",
                        key: y.G2.PROMOTION,
                        text: S.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, U.pX)(e),
                    });
                }
                return l;
            }, [e, g, S, A, _, C]);
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
            let e = M.find((e) => e.key === y.G2.PROMOTION);
            if (null == e) return !1;
            let t = x.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l);
            return e.route === t;
        }, [M, l])
            ? y.G2.PROMOTION
            : t;
    return (0, n.jsx)("div", {
        ref: G,
        children: (0, n.jsxs)(A.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: r()(er.jr, { [ei.jP]: b }),
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(j, { handleTransition: a, selectedTab: t, isNarrow: I, hasText: "" !== h }),
                    (0, n.jsx)(c.D, {
                        className: er.ij,
                        onClick: k,
                        "aria-label": N.intl.string(N.t["7lZ31J"]),
                        children: (0, n.jsx)(u.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(S.SS, {
                        analyticsPage: v,
                        cardAlignment: S.SS.CardAlignment.END,
                        ctaText: N.intl.string(N.t.VC4Mq0),
                        ctaOnClick: B,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(c.D, {
                    className: er.sU,
                    onClick: () => a(y.G2.HOME),
                    "aria-label": N.intl.string(N.t["5upuqx"]),
                    children: (0, n.jsx)(d.U, { size: "md", color: E.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(H.A, {
                    "aria-label": N.intl.string(N.t["5upuqx"]),
                    className: er.IV,
                    options: M,
                    selectedKey: P,
                    overflowLabel: N.intl.string(N.t["UKOtz+"]),
                    overflowExpandLabel: N.intl.string(N.t.PEtHiE),
                }),
            ],
        }),
    });
}
