l.d(t, { G: () => Q });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    r = l.n(i),
    s = l(696292),
    o = l(17928),
    c = l(939249),
    u = l(926268),
    E = l(34188),
    d = l(661531),
    p = l(770178),
    A = l(742589),
    _ = l(617986),
    C = l(402860),
    O = l(318346),
    S = l(70926),
    L = l(287809),
    g = l(365491),
    G = l(7689),
    T = l(683438),
    I = l(773669),
    f = l(174459),
    b = l(440938),
    h = l(758836),
    R = l(652215),
    m = l(105292),
    y = l(848913);
function N(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: i, hasText: s } = e,
        { searchQuery: u, onSetSearchQuery: E } = (0, g.v)(),
        [p, A] = a.useState(""),
        _ = (0, b.uM)(),
        C = (0, o.bG)([I.default], () => I.default.locale),
        O = a.useRef(null),
        [S, L] = a.useState(!1);
    (a.useEffect(() => {
        let e = setTimeout(() => {
            E(p);
        }, 250);
        return () => clearTimeout(e);
    }, [p, E]),
        a.useEffect(() => {
            A(u);
        }, [u]),
        a.useEffect(() => {
            L(i && s);
        }, [i, s]));
    let N = a.useCallback(
            (e) => {
                "Enter" === e.key && E(p);
            },
            [p, E],
        ),
        B = a.useCallback(
            (e) => {
                f.default.track(R.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: _?.sessionId,
                    page_section: _?.pageSection,
                    page_category: _?.pageCategory,
                    page_index: _?.pageIndex,
                    page_size: _?.pageSize,
                    cta_name: e,
                    page_type: l,
                });
            },
            [l, _],
        ),
        x = a.useCallback(() => {
            (l !== h.G2.CATALOG && t(h.G2.CATALOG), B(h.uY.SEARCH_ICON), L(!0), setTimeout(() => O.current?.focus()));
        }, [l, t, B]),
        M = a.useCallback(() => {
            (l !== h.G2.CATALOG && t(h.G2.CATALOG), B(h.uY.SEARCH_BAR));
        }, [l, t, B]),
        F = a.useCallback(() => {
            (A(""), E(""), B(h.uY.SEARCH_BAR_CLEAR), i && L(!1));
        }, [E, B, i]),
        P = a.useCallback(() => {
            i && "" === p && L(!1);
        }, [i, p]),
        k = i && !S,
        H = (0, n.jsx)(c.D, {
            className: y.qc,
            onClick: x,
            children: (0, n.jsx)(G.MagnifyingGlassIcon, { size: "sm", color: d.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        v = (0, n.jsx)(T.I, {
            size: "sm",
            ref: O,
            onKeyDown: N,
            query: p,
            onChange: A,
            onClear: F,
            onBlur: P,
            placeholder: "en-US" === C ? m.intl.string(m.t.arz34K) : m.intl.string(m.t["hIt/Nm"]),
        }),
        j = { "--custom-search-bar-width": `${h.rr}px`, "--custom-search-bar-icon-width": `${h.Dy}px` };
    return k
        ? (0, n.jsx)("div", { style: j, children: H })
        : (0, n.jsx)("div", {
              className: r()(y.ON, { [y.Nz]: S }),
              style: j,
              children: (0, n.jsx)(c.D, { ignoreKeyPress: !0, onClick: M, children: v }),
          });
}
var B = l(173127);
l(321073);
var x = l(278416),
    M = l(196736),
    F = l(976860),
    P = l(288106),
    k = l(223311),
    H = l(65238),
    v = l(758461),
    j = l(151115),
    D = l(812729),
    w = l.n(D),
    U = l(627363),
    V = l(587895),
    K = l(733391),
    z = l(832163),
    Y = l(44724),
    q = l(486020),
    W = l(394107);
let X = [
    { tab: h.G2.OFFER_ELIGIBLE, labelKey: m.t.hY8Ft1 },
    { tab: h.G2.AVATAR_DECORATIONS, labelKey: m.t.dRZYNE },
    { tab: h.G2.NAMEPLATES, labelKey: m.t.V68Fqz },
    { tab: h.G2.PROFILE_EFFECTS, labelKey: m.t["1cNjtx"] },
    { tab: h.G2.PROFILE_FRAMES, labelKey: m.t.ecTJkR },
    { tab: h.G2.BUNDLES, labelKey: m.t.FYFpps },
    { tab: h.G2.COLLABS, labelKey: m.t["+W8gb+"] },
    { tab: h.G2.CATALOG, labelKey: m.t.xFcotU },
];
var J = l(783857);
l(801416);
var $ = l(518477),
    Z = l(835018);
function Q(e) {
    let { selectedTab: t, selectedCollectionId: l, handleTransition: i } = e,
        G = (0, o.bG)([L.default], () => L.default.getCurrentUser()),
        T = (0, J.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: I } = (0, g.v)(),
        y = a.useRef(null),
        [D, Q] = a.useState(!1);
    (0, p.g)(
        y,
        a.useCallback((e) => {
            Q(e.contentRect.width < 800);
        }, []),
    );
    let ee = t === h.G2.ORBS ? R.liQ.SHOP_ORBS_TAB : R.liQ.COLLECTIBLES_SHOP,
        et = a.useCallback(() => {
            ((0, O.Y)({ pageType: ee, sectionType: R.JJy.ORBS_BALANCE_MENU, ctaObject: R.ZSU.CTA_TO_QUEST_HOME }),
                (0, _.mA)({ fromContent: s.u.ORBS_BALANCE_MENU }));
        }, [ee]),
        el = a.useCallback(() => {
            G?.id != null && (0, C.openUserProfileModal)({ userId: G.id, tabSection: $.RP.WISHLIST });
        }, [G?.id]),
        en = (function (e) {
            let t,
                l,
                n,
                i,
                r,
                s,
                c,
                u,
                E,
                d,
                p,
                A = (0, M.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
                { gameShops: _, hasGameShops: C } =
                    ((t = (0, b.uM)()),
                    (l = (0, o.yK)(
                        [z.A],
                        () => (z.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
                        [],
                    )),
                    a.useEffect(() => {
                        (0, K.Xw)();
                    }, []),
                    a.useEffect(() => {
                        l.length > 0 &&
                            U.Ay.fetchApplications(
                                l.map((e) => e.applicationId),
                                !1,
                            );
                    }, [l]),
                    (n = a.useCallback(
                        (e) => {
                            (f.default.track(R.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: t?.sessionId,
                                page_type: h.G2.GAME_SHOPS,
                                page_category: t?.pageCategory,
                                page_section: t?.pageSection,
                                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                                cta_name: "go_to_game_shop",
                            }),
                                (0, Y.default)({ applicationId: e }).catch(() => {}));
                        },
                        [t],
                    )),
                    (i = (0, o.bG)(
                        [V.A],
                        () =>
                            l.flatMap((e) => {
                                let t = V.A.getApplication(e.applicationId),
                                    l = t?.name;
                                return null == l
                                    ? []
                                    : [
                                          {
                                              id: e.applicationId,
                                              label: l,
                                              iconSrc:
                                                  t?.icon != null
                                                      ? q.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                                      : void 0,
                                          },
                                      ];
                            }),
                        [l],
                        w(),
                    )),
                    {
                        gameShops: a.useMemo(
                            () =>
                                i.map((e) => ({
                                    type: "page",
                                    key: e.id,
                                    text: e.label,
                                    iconSrc: e.iconSrc,
                                    onClick: () => n(e.id),
                                })),
                            [i, n],
                        ),
                        hasGameShops: l.length > 0,
                    }),
                O = null != (0, v.HH)(),
                S =
                    ((r = (0, k.A)(R.FYj)),
                    (s = (0, H.XF)(r)),
                    (c = s?.shared.navigation?.tab),
                    (u = c?.title),
                    (E = c?.icon),
                    (d = s?.collectionId),
                    (p = r?.rewardStatus),
                    a.useMemo(
                        () =>
                            null == u || null == d || p === P.GM.CONSUMED
                                ? null
                                : { title: u, icon: E, collectionId: d },
                        [u, E, d, p],
                    ));
            return a.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return X.filter((e) => {
                            let { tab: l } = e;
                            return l !== h.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: O }).map((t) => {
                        let { tab: l, labelKey: n } = t,
                            a = l === h.G2.OFFER_ELIGIBLE ? x.TagIcon : void 0;
                        return {
                            type: "page",
                            key: l,
                            text: m.intl.string(n),
                            onClick: () => e(l),
                            trailingIndicator: null != a ? { type: "icon", icon: a } : void 0,
                        };
                    }),
                    l = [
                        {
                            type: "page",
                            key: h.G2.HOME,
                            text: m.intl.string(m.t["xNiB/O"]),
                            route: R.BVt.COLLECTIBLES_SHOP_WITH_TAB(h.G2.HOME),
                            onClick: () => e(h.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: h.G2.CATALOG,
                            text: m.intl.string(m.t.FshAeN),
                            route: R.BVt.COLLECTIBLES_SHOP_WITH_TAB(h.G2.CATALOG),
                            onClick: () => e(h.G2.CATALOG),
                            expandLabel: m.intl.string(m.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: h.G2.ORBS,
                            text: m.intl.string(m.t.fG3RIg),
                            route: R.BVt.COLLECTIBLES_SHOP_WITH_TAB(h.G2.ORBS),
                            onClick: () => e(h.G2.ORBS),
                        },
                    ];
                if (
                    (C &&
                        l.push({
                            type: "menu",
                            key: h.G2.GAME_SHOPS,
                            text: m.intl.string(m.t.FkjcWY),
                            expandLabel: m.intl.string(m.t.bf9uMH),
                            options: _,
                        }),
                    A &&
                        l.push({
                            type: "page",
                            key: h.G2.GAME_SERVERS,
                            text: m.intl.string(W.default.vCzwM7),
                            route: R.BVt.COLLECTIBLES_SHOP_WITH_TAB(h.G2.GAME_SERVERS),
                            onClick: () => e(h.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != S)
                ) {
                    let e = R.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(S.collectionId),
                        t = (0, j.s)(S.icon);
                    l.push({
                        type: "page",
                        key: h.G2.PROMOTION,
                        text: S.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, F.pX)(e),
                    });
                }
                return l;
            }, [e, O, S, A, C, _]);
        })(
            a.useCallback(
                (e) => {
                    i(e);
                },
                [i],
            ),
        ),
        ea = a.useMemo(() => {
            if (null == l) return !1;
            let e = en.find((e) => e.key === h.G2.PROMOTION);
            if (null == e) return !1;
            let t = R.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l);
            return e.route === t;
        }, [en, l])
            ? h.G2.PROMOTION
            : t;
    return (0, n.jsx)("div", {
        ref: y,
        children: (0, n.jsxs)(A.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: r()(Z.jr, { [J.jP]: T }),
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(N, { handleTransition: i, selectedTab: t, isNarrow: D, hasText: "" !== I }),
                    (0, n.jsx)(c.D, {
                        className: Z.ij,
                        onClick: el,
                        "aria-label": m.intl.string(m.t["7lZ31J"]),
                        children: (0, n.jsx)(u.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(S.SS, {
                        analyticsPage: ee,
                        cardAlignment: S.SS.CardAlignment.END,
                        ctaText: m.intl.string(m.t.VC4Mq0),
                        ctaOnClick: et,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(c.D, {
                    className: Z.sU,
                    onClick: () => i(h.G2.HOME),
                    "aria-label": m.intl.string(m.t["5upuqx"]),
                    children: (0, n.jsx)(E.U, { size: "md", color: d.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(B.A, {
                    "aria-label": m.intl.string(m.t["5upuqx"]),
                    className: Z.IV,
                    options: en,
                    selectedKey: ea,
                    overflowLabel: m.intl.string(m.t["UKOtz+"]),
                    overflowExpandLabel: m.intl.string(m.t.PEtHiE),
                }),
            ],
        }),
    });
}
