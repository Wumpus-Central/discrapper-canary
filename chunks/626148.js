l.d(t, { G: () => el });
var a = l(477900),
    n = l(582128),
    i = l(503698),
    s = l.n(i),
    o = l(696292),
    r = l(17928),
    c = l(939249),
    E = l(926268),
    u = l(34188),
    C = l(661531),
    L = l(770178),
    O = l(742589),
    A = l(617986),
    S = l(402860),
    _ = l(318346),
    p = l(70926),
    d = l(287809),
    G = l(365491),
    T = l(7689),
    I = l(683438),
    g = l(773669),
    b = l(174459),
    f = l(440938),
    R = l(758836),
    B = l(652215),
    y = l(375708),
    h = l(848913);
function k(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: i, hasText: o } = e,
        { searchQuery: E, onSetSearchQuery: u } = (0, G.v)(),
        [L, O] = n.useState(""),
        A = (0, f.uM)(),
        S = (0, r.bG)([g.default], () => g.default.locale),
        _ = n.useRef(null),
        [p, d] = n.useState(!1);
    (n.useEffect(() => {
        let e = setTimeout(() => {
            u(L);
        }, 250);
        return () => clearTimeout(e);
    }, [L, u]),
        n.useEffect(() => {
            O(E);
        }, [E]),
        n.useEffect(() => {
            d(i && o);
        }, [i, o]));
    let k = n.useCallback(
            (e) => {
                "Enter" === e.key && u(L);
            },
            [L, u],
        ),
        F = n.useCallback(
            (e) => {
                b.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: A?.sessionId,
                    page_section: A?.pageSection,
                    page_category: A?.pageCategory,
                    page_index: A?.pageIndex,
                    page_size: A?.pageSize,
                    cta_name: e,
                    page_type: l,
                });
            },
            [l, A],
        ),
        N = n.useCallback(() => {
            (l !== R.G2.CATALOG && t(R.G2.CATALOG), F(R.uY.SEARCH_ICON), d(!0), setTimeout(() => _.current?.focus()));
        }, [l, t, F]),
        M = n.useCallback(() => {
            (l !== R.G2.CATALOG && t(R.G2.CATALOG), F(R.uY.SEARCH_BAR));
        }, [l, t, F]),
        m = n.useCallback(() => {
            (O(""), u(""), F(R.uY.SEARCH_BAR_CLEAR), i && d(!1));
        }, [u, F, i]),
        H = n.useCallback(() => {
            i && "" === L && d(!1);
        }, [i, L]),
        P = i && !p,
        x = (0, a.jsx)(c.D, {
            className: h.qc,
            onClick: N,
            children: (0, a.jsx)(T.MagnifyingGlassIcon, { size: "sm", color: C.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        v = (0, a.jsx)(I.I, {
            size: "sm",
            ref: _,
            onKeyDown: k,
            query: L,
            onChange: O,
            onClear: m,
            onBlur: H,
            placeholder: "en-US" === S ? y.intl.string(y.t.arz34K) : y.intl.string(y.t["hIt/Nm"]),
        }),
        j = { "--custom-search-bar-width": `${R.rr}px`, "--custom-search-bar-icon-width": `${R.Dy}px` };
    return P
        ? (0, a.jsx)("div", { style: j, children: x })
        : (0, a.jsx)("div", {
              className: s()(h.ON, { [h.Nz]: p }),
              style: j,
              children: (0, a.jsx)(c.D, { ignoreKeyPress: !0, onClick: M, children: v }),
          });
}
var F = l(173127);
l(321073);
var N = l(278416),
    M = l(196736),
    m = l(976860);
let H = (0, l(945810).mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var P = l(50920),
    x = l(288106),
    v = l(223311),
    j = l(65238),
    w = l(758461),
    D = l(151115),
    V = l(812729),
    U = l.n(V),
    K = l(627363),
    z = l(587895),
    q = l(733391),
    Y = l(832163),
    W = l(44724),
    J = l(486020),
    X = l(394107);
let Q = "useCollectiblesShopNavigationMenuOptions",
    Z = [
        { tab: R.G2.OFFER_ELIGIBLE, labelKey: y.t.hY8Ft1 },
        { tab: R.G2.AVATAR_DECORATIONS, labelKey: y.t.dRZYNE },
        { tab: R.G2.NAMEPLATES, labelKey: y.t.V68Fqz },
        { tab: R.G2.PROFILE_EFFECTS, labelKey: y.t["1cNjtx"] },
        { tab: R.G2.PROFILE_FRAMES, labelKey: y.t.ecTJkR },
        { tab: R.G2.BUNDLES, labelKey: y.t.FYFpps },
        { tab: R.G2.COLLABS, labelKey: y.t["+W8gb+"] },
        { tab: R.G2.CATALOG, labelKey: y.t.xFcotU },
    ];
var $ = l(783857);
l(801416);
var ee = l(518477),
    et = l(835018);
function el(e) {
    let { selectedTab: t, selectedCollectionId: l, handleTransition: i } = e,
        T = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        I = (0, $.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: g } = (0, G.v)(),
        h = n.useRef(null),
        [V, el] = n.useState(!1);
    (0, L.g)(
        h,
        n.useCallback((e) => {
            el(e.contentRect.width < 800);
        }, []),
    );
    let ea = t === R.G2.ORBS ? B.liQ.SHOP_ORBS_TAB : B.liQ.COLLECTIBLES_SHOP,
        en = n.useCallback(() => {
            ((0, _.Y)({ pageType: ea, sectionType: B.JJy.ORBS_BALANCE_MENU, ctaObject: B.ZSU.CTA_TO_QUEST_HOME }),
                (0, A.mA)({ fromContent: o.u.ORBS_BALANCE_MENU }));
        }, [ea]),
        ei = n.useCallback(() => {
            T?.id != null && (0, S.openUserProfileModal)({ userId: T.id, tabSection: ee.RP.WISHLIST });
        }, [T?.id]),
        es = (function (e) {
            let t,
                l,
                a,
                i,
                s,
                o,
                c,
                E = (0, M.H)({ location: Q }),
                u = (function (e) {
                    let { location: t } = e;
                    return H.useConfig({ location: t }).enabled;
                })({ location: Q }),
                { gameShops: C, hasGameShops: L } = (function (e) {
                    let { enabled: t } = e,
                        l = (0, f.uM)(),
                        a = (0, r.yK)(
                            [Y.A],
                            () =>
                                t
                                    ? (Y.A.getConfig()?.storefronts ?? []).filter(
                                          (e) => e.collectiblesShopNavigationEnabled,
                                      )
                                    : [],
                            [t],
                        );
                    (n.useEffect(() => {
                        t && (0, q.Xw)();
                    }, [t]),
                        n.useEffect(() => {
                            a.length > 0 &&
                                K.Ay.fetchApplications(
                                    a.map((e) => e.applicationId),
                                    !1,
                                );
                        }, [a]));
                    let i = n.useCallback(
                            (e) => {
                                (b.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: l?.sessionId,
                                    page_type: R.G2.GAME_SHOPS,
                                    page_category: l?.pageCategory,
                                    page_section: l?.pageSection,
                                    tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                                    cta_name: "go_to_game_shop",
                                }),
                                    (0, W.default)({ applicationId: e }).catch(() => {}));
                            },
                            [l],
                        ),
                        s = (0, r.bG)(
                            [z.A],
                            () =>
                                a.flatMap((e) => {
                                    let t = z.A.getApplication(e.applicationId),
                                        l = t?.name;
                                    return null == l
                                        ? []
                                        : [
                                              {
                                                  id: e.applicationId,
                                                  label: l,
                                                  iconSrc:
                                                      t?.icon != null
                                                          ? J.Ay.getApplicationIconURL({
                                                                id: t.id,
                                                                icon: t.icon,
                                                                size: 32,
                                                            })
                                                          : void 0,
                                              },
                                          ];
                                }),
                            [a],
                            U(),
                        );
                    return {
                        gameShops: n.useMemo(
                            () =>
                                s.map((e) => ({
                                    type: "page",
                                    key: e.id,
                                    text: e.label,
                                    iconSrc: e.iconSrc,
                                    onClick: () => i(e.id),
                                })),
                            [s, i],
                        ),
                        hasGameShops: a.length > 0,
                    };
                })({ enabled: u }),
                O = null != (0, w.HH)(),
                A = (0, P.a)(Q),
                S =
                    ((t = (0, v.A)(B.FYj)),
                    (l = (0, j.XF)(t)),
                    (a = l?.shared.navigation?.tab),
                    (i = a?.title),
                    (s = a?.icon),
                    (o = l?.collectionId),
                    (c = t?.rewardStatus),
                    n.useMemo(
                        () =>
                            null == i || null == o || c === x.GM.CONSUMED
                                ? null
                                : { title: i, icon: s, collectionId: o },
                        [i, s, o, c],
                    ));
            return n.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return Z.filter((e) => {
                            let { tab: l } = e;
                            return l !== R.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: O }).map((t) => {
                        let { tab: l, labelKey: a } = t,
                            n = l === R.G2.OFFER_ELIGIBLE ? N.TagIcon : void 0;
                        return {
                            type: "page",
                            key: l,
                            text: y.intl.string(a),
                            onClick: () => e(l),
                            badge: l === R.G2.PROFILE_FRAMES ? "new" : void 0,
                            trailingIndicator: null != n ? { type: "icon", icon: n } : void 0,
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
                            text: y.intl.string(y.t.EBYkzk),
                            route: B.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.ORBS),
                            onClick: () => e(R.G2.ORBS),
                        },
                    ];
                if (
                    (u &&
                        L &&
                        l.push({
                            type: "menu",
                            key: R.G2.GAME_SHOPS,
                            text: y.intl.string(y.t.FkjcWY),
                            expandLabel: y.intl.string(y.t.bf9uMH),
                            options: C,
                        }),
                    E &&
                        l.push({
                            type: "page",
                            key: R.G2.GAME_SERVERS,
                            text: y.intl.string(X.default.vCzwM7),
                            route: B.BVt.COLLECTIBLES_SHOP_WITH_TAB(R.G2.GAME_SERVERS),
                            onClick: () => e(R.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != S && A)
                ) {
                    let e = B.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(S.collectionId),
                        t = (0, D.s)(S.icon);
                    l.push({
                        type: "page",
                        key: R.G2.PROMOTION,
                        text: S.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, m.pX)(e),
                    });
                }
                return l;
            }, [e, O, A, S, E, u, L, C]);
        })(
            n.useCallback(
                (e) => {
                    i(e);
                },
                [i],
            ),
        ),
        eo = n.useMemo(() => {
            if (null == l) return !1;
            let e = es.find((e) => e.key === R.G2.PROMOTION);
            if (null == e) return !1;
            let t = B.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l);
            return e.route === t;
        }, [es, l])
            ? R.G2.PROMOTION
            : t;
    return (0, a.jsx)("div", {
        ref: h,
        children: (0, a.jsxs)(O.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            className: s()(et.jr, { [$.jP]: I }),
            toolbar: (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(k, { handleTransition: i, selectedTab: t, isNarrow: V, hasText: "" !== g }),
                    (0, a.jsx)(c.D, {
                        className: et.ij,
                        onClick: ei,
                        "aria-label": y.intl.string(y.t["7lZ31J"]),
                        children: (0, a.jsx)(E.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)(p.SS, {
                        analyticsPage: ea,
                        cardAlignment: p.SS.CardAlignment.END,
                        ctaText: y.intl.string(y.t.VC4Mq0),
                        ctaOnClick: en,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, a.jsx)(c.D, {
                    className: et.sU,
                    onClick: () => i(R.G2.HOME),
                    "aria-label": y.intl.string(y.t["5upuqx"]),
                    children: (0, a.jsx)(u.U, { size: "md", color: C.A.colors.TEXT_DEFAULT }),
                }),
                (0, a.jsx)(F.A, {
                    "aria-label": y.intl.string(y.t["5upuqx"]),
                    className: et.IV,
                    options: es,
                    selectedKey: eo,
                    overflowLabel: y.intl.string(y.t["UKOtz+"]),
                    overflowExpandLabel: y.intl.string(y.t.PEtHiE),
                }),
            ],
        }),
    });
}
