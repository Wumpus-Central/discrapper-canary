l.d(t, { G: () => $ });
var a = l(477900),
    i = l(582128),
    n = l(503698),
    s = l.n(n),
    o = l(696292),
    c = l(17928),
    r = l(939249),
    E = l(926268),
    u = l(34188),
    C = l(661531),
    A = l(770178),
    L = l(742589),
    O = l(617986),
    S = l(402860),
    _ = l(318346),
    p = l(70926),
    G = l(287809),
    T = l(365491),
    d = l(7689),
    I = l(683438),
    g = l(773669),
    b = l(174459),
    f = l(440938),
    R = l(758836),
    B = l(652215),
    y = l(105292),
    h = l(848913);
function k(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: n, hasText: o } = e,
        { searchQuery: E, onSetSearchQuery: u } = (0, T.v)(),
        [A, L] = i.useState(""),
        O = (0, f.uM)(),
        S = (0, c.bG)([g.default], () => g.default.locale),
        _ = i.useRef(null),
        [p, G] = i.useState(!1);
    (i.useEffect(() => {
        let e = setTimeout(() => {
            u(A);
        }, 250);
        return () => clearTimeout(e);
    }, [A, u]),
        i.useEffect(() => {
            L(E);
        }, [E]),
        i.useEffect(() => {
            G(n && o);
        }, [n, o]));
    let k = i.useCallback(
            (e) => {
                "Enter" === e.key && u(A);
            },
            [A, u],
        ),
        F = i.useCallback(
            (e) => {
                b.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: O?.sessionId,
                    page_section: O?.pageSection,
                    page_category: O?.pageCategory,
                    page_index: O?.pageIndex,
                    page_size: O?.pageSize,
                    cta_name: e,
                    page_type: l,
                });
            },
            [l, O],
        ),
        N = i.useCallback(() => {
            (l !== R.G2.CATALOG && t(R.G2.CATALOG), F(R.uY.SEARCH_ICON), G(!0), setTimeout(() => _.current?.focus()));
        }, [l, t, F]),
        M = i.useCallback(() => {
            (l !== R.G2.CATALOG && t(R.G2.CATALOG), F(R.uY.SEARCH_BAR));
        }, [l, t, F]),
        H = i.useCallback(() => {
            (L(""), u(""), F(R.uY.SEARCH_BAR_CLEAR), n && G(!1));
        }, [u, F, n]),
        x = i.useCallback(() => {
            n && "" === A && G(!1);
        }, [n, A]),
        P = n && !p,
        m = (0, a.jsx)(r.D, {
            className: h.qc,
            onClick: N,
            children: (0, a.jsx)(d.MagnifyingGlassIcon, { size: "sm", color: C.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        v = (0, a.jsx)(I.I, {
            size: "sm",
            ref: _,
            onKeyDown: k,
            query: A,
            onChange: L,
            onClear: H,
            onBlur: x,
            placeholder: "en-US" === S ? y.intl.string(y.t.arz34K) : y.intl.string(y.t["hIt/Nm"]),
        }),
        j = { "--custom-search-bar-width": `${R.rr}px`, "--custom-search-bar-icon-width": `${R.Dy}px` };
    return P
        ? (0, a.jsx)("div", { style: j, children: m })
        : (0, a.jsx)("div", {
              className: s()(h.ON, { [h.Nz]: p }),
              style: j,
              children: (0, a.jsx)(r.D, { ignoreKeyPress: !0, onClick: M, children: v }),
          });
}
var F = l(173127);
l(321073);
var N = l(278416),
    M = l(196736),
    H = l(976860),
    x = l(288106),
    P = l(223311),
    m = l(65238),
    v = l(758461),
    j = l(151115),
    D = l(812729),
    V = l.n(D),
    w = l(627363),
    U = l(587895),
    K = l(733391),
    z = l(832163),
    q = l(44724),
    Y = l(486020),
    W = l(344045);
let J = [
    { tab: R.G2.OFFER_ELIGIBLE, labelKey: y.t.hY8Ft1 },
    { tab: R.G2.AVATAR_DECORATIONS, labelKey: y.t.dRZYNE },
    { tab: R.G2.NAMEPLATES, labelKey: y.t.V68Fqz },
    { tab: R.G2.PROFILE_EFFECTS, labelKey: y.t["1cNjtx"] },
    { tab: R.G2.PROFILE_FRAMES, labelKey: y.t.ecTJkR },
    { tab: R.G2.BUNDLES, labelKey: y.t.FYFpps },
    { tab: R.G2.COLLABS, labelKey: y.t["+W8gb+"] },
    { tab: R.G2.CATALOG, labelKey: y.t.xFcotU },
];
var X = l(783857);
l(801416);
var Q = l(518477),
    Z = l(835018);
function $(e) {
    let { selectedTab: t, selectedCollectionId: l, handleTransition: n } = e,
        d = (0, c.bG)([G.default], () => G.default.getCurrentUser()),
        I = (0, X.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: g } = (0, T.v)(),
        h = i.useRef(null),
        [D, $] = i.useState(!1);
    (0, A.g)(
        h,
        i.useCallback((e) => {
            $(e.contentRect.width < 800);
        }, []),
    );
    let ee = t === R.G2.ORBS ? B.liQ.SHOP_ORBS_TAB : B.liQ.COLLECTIBLES_SHOP,
        et = i.useCallback(() => {
            ((0, _.Y)({ pageType: ee, sectionType: B.JJy.ORBS_BALANCE_MENU, ctaObject: B.ZSU.CTA_TO_QUEST_HOME }),
                (0, O.mA)({ fromContent: o.u.ORBS_BALANCE_MENU }));
        }, [ee]),
        el = i.useCallback(() => {
            d?.id != null && (0, S.openUserProfileModal)({ userId: d.id, tabSection: Q.RP.WISHLIST });
        }, [d?.id]),
        ea = (function (e) {
            let t,
                l,
                a,
                n,
                s,
                o,
                r,
                E,
                u,
                C,
                A,
                L = (0, M.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
                { gameShops: O, hasGameShops: S } =
                    ((t = (0, f.uM)()),
                    (l = (0, c.yK)(
                        [z.A],
                        () => (z.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
                        [],
                    )),
                    i.useEffect(() => {
                        (0, K.Xw)();
                    }, []),
                    i.useEffect(() => {
                        l.length > 0 &&
                            w.Ay.fetchApplications(
                                l.map((e) => e.applicationId),
                                !1,
                            );
                    }, [l]),
                    (a = i.useCallback(
                        (e) => {
                            (b.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: t?.sessionId,
                                page_type: R.G2.GAME_SHOPS,
                                page_category: t?.pageCategory,
                                page_section: t?.pageSection,
                                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                                cta_name: "go_to_game_shop",
                            }),
                                (0, q.default)({ applicationId: e }).catch(() => {}));
                        },
                        [t],
                    )),
                    (n = (0, c.bG)(
                        [U.A],
                        () =>
                            l.flatMap((e) => {
                                let t = U.A.getApplication(e.applicationId),
                                    l = t?.name;
                                return null == l
                                    ? []
                                    : [
                                          {
                                              id: e.applicationId,
                                              label: l,
                                              iconSrc:
                                                  t?.icon != null
                                                      ? Y.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: 32 })
                                                      : void 0,
                                          },
                                      ];
                            }),
                        [l],
                        V(),
                    )),
                    {
                        gameShops: i.useMemo(
                            () =>
                                n.map((e) => ({
                                    type: "page",
                                    key: e.id,
                                    text: e.label,
                                    iconSrc: e.iconSrc,
                                    onClick: () => a(e.id),
                                })),
                            [n, a],
                        ),
                        hasGameShops: l.length > 0,
                    }),
                _ = null != (0, v.HH)(),
                p =
                    ((s = (0, P.A)(B.FYj)),
                    (o = (0, m.XF)(s)),
                    (r = o?.shared.navigation?.tab),
                    (E = r?.title),
                    (u = r?.icon),
                    (C = o?.collectionId),
                    (A = s?.rewardStatus),
                    i.useMemo(
                        () =>
                            null == E || null == C || A === x.GM.CONSUMED
                                ? null
                                : { title: E, icon: u, collectionId: C },
                        [E, u, C, A],
                    ));
            return i.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return J.filter((e) => {
                            let { tab: l } = e;
                            return l !== R.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: _ }).map((t) => {
                        let { tab: l, labelKey: a } = t,
                            i = l === R.G2.OFFER_ELIGIBLE ? N.TagIcon : void 0;
                        return {
                            type: "page",
                            key: l,
                            text: y.intl.string(a),
                            onClick: () => e(l),
                            trailingIndicator: null != i ? { type: "icon", icon: i } : void 0,
                        };
                    }),
                    l = [
                        {
                            type: "page",
                            key: R.G2.HOME,
                            text: y.intl.string(y.t["xNiB/O"]),
                            route: B.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.HOME),
                            onClick: () => e(R.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: R.G2.CATALOG,
                            text: y.intl.string(y.t.FshAeN),
                            route: B.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.CATALOG),
                            onClick: () => e(R.G2.CATALOG),
                            expandLabel: y.intl.string(y.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: R.G2.ORBS,
                            text: y.intl.string(y.t.fG3RIg),
                            route: B.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.ORBS),
                            onClick: () => e(R.G2.ORBS),
                        },
                    ];
                if (
                    (S &&
                        l.push({
                            type: "menu",
                            key: R.G2.GAME_SHOPS,
                            text: y.intl.string(y.t.FkjcWY),
                            expandLabel: y.intl.string(y.t.bf9uMH),
                            options: O,
                        }),
                    L &&
                        l.push({
                            type: "page",
                            key: R.G2.GAME_SERVERS,
                            text: y.intl.string(W.default.vCzwM7),
                            route: B.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.GAME_SERVERS),
                            onClick: () => e(R.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != p)
                ) {
                    let e = B.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(p.collectionId),
                        t = (0, j.s)(p.icon);
                    l.push({
                        type: "page",
                        key: R.G2.PROMOTION,
                        text: p.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, H.pX)(e),
                    });
                }
                return l;
            }, [e, _, p, L, S, O]);
        })(
            i.useCallback(
                (e) => {
                    n(e);
                },
                [n],
            ),
        ),
        ei = i.useMemo(() => {
            if (null == l) return !1;
            let e = ea.find((e) => e.key === R.G2.PROMOTION);
            if (null == e) return !1;
            let t = B.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l);
            return e.route === t;
        }, [ea, l])
            ? R.G2.PROMOTION
            : t;
    return (0, a.jsx)("div", {
        ref: h,
        children: (0, a.jsxs)(L.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: s()(Z.jr, { [X.jP]: I }),
            toolbar: (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(k, { handleTransition: n, selectedTab: t, isNarrow: D, hasText: "" !== g }),
                    (0, a.jsx)(r.D, {
                        className: Z.ij,
                        onClick: el,
                        "aria-label": y.intl.string(y.t["7lZ31J"]),
                        children: (0, a.jsx)(E.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)(p.SS, {
                        analyticsPage: ee,
                        cardAlignment: p.SS.CardAlignment.END,
                        ctaText: y.intl.string(y.t.VC4Mq0),
                        ctaOnClick: et,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, a.jsx)(r.D, {
                    className: Z.sU,
                    onClick: () => n(R.G2.HOME),
                    "aria-label": y.intl.string(y.t["5upuqx"]),
                    children: (0, a.jsx)(u.U, { size: "md", color: C.A.colors.TEXT_DEFAULT }),
                }),
                (0, a.jsx)(F.A, {
                    "aria-label": y.intl.string(y.t["5upuqx"]),
                    className: Z.IV,
                    options: ea,
                    selectedKey: ei,
                    overflowLabel: y.intl.string(y.t["UKOtz+"]),
                    overflowExpandLabel: y.intl.string(y.t.PEtHiE),
                }),
            ],
        }),
    });
}
