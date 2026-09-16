l.d(t, { G: () => et });
var a = l(477900),
    n = l(582128),
    i = l(696292),
    s = l(17928),
    o = l(939249),
    c = l(926268),
    r = l(34188),
    E = l(661531),
    u = l(770178),
    C = l(742589),
    A = l(617986),
    L = l(402860),
    O = l(318346),
    S = l(70926),
    _ = l(287809),
    p = l(365491),
    d = l(503698),
    G = l.n(d),
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
    let { handleTransition: t, selectedTab: l, isNarrow: i, hasText: c } = e,
        { searchQuery: r, onSetSearchQuery: u } = (0, p.v)(),
        [C, A] = n.useState(""),
        L = (0, f.uM)(),
        O = (0, s.bG)([g.default], () => g.default.locale),
        S = n.useRef(null),
        [_, d] = n.useState(!1);
    (n.useEffect(() => {
        let e = setTimeout(() => {
            u(C);
        }, 250);
        return () => clearTimeout(e);
    }, [C, u]),
        n.useEffect(() => {
            A(r);
        }, [r]),
        n.useEffect(() => {
            d(i && c);
        }, [i, c]));
    let k = n.useCallback(
            (e) => {
                "Enter" === e.key && u(C);
            },
            [C, u],
        ),
        F = n.useCallback(
            (e) => {
                b.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: L?.sessionId,
                    page_section: L?.pageSection,
                    page_category: L?.pageCategory,
                    page_index: L?.pageIndex,
                    page_size: L?.pageSize,
                    cta_name: e,
                    page_type: l,
                });
            },
            [l, L],
        ),
        N = n.useCallback(() => {
            (l !== R.G2.CATALOG && t(R.G2.CATALOG), F(R.uY.SEARCH_ICON), d(!0), setTimeout(() => S.current?.focus()));
        }, [l, t, F]),
        M = n.useCallback(() => {
            (l !== R.G2.CATALOG && t(R.G2.CATALOG), F(R.uY.SEARCH_BAR));
        }, [l, t, F]),
        m = n.useCallback(() => {
            (A(""), u(""), F(R.uY.SEARCH_BAR_CLEAR), i && d(!1));
        }, [u, F, i]),
        x = n.useCallback(() => {
            i && "" === C && d(!1);
        }, [i, C]),
        P = i && !_,
        H = (0, a.jsx)(o.D, {
            className: h.qc,
            onClick: N,
            children: (0, a.jsx)(T.MagnifyingGlassIcon, { size: "sm", color: E.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        v = (0, a.jsx)(I.I, {
            size: "sm",
            ref: S,
            onKeyDown: k,
            query: C,
            onChange: A,
            onClear: m,
            onBlur: x,
            placeholder: "en-US" === O ? y.intl.string(y.t.arz34K) : y.intl.string(y.t["hIt/Nm"]),
        }),
        j = { "--custom-search-bar-width": `${R.rr}px`, "--custom-search-bar-icon-width": `${R.Dy}px` };
    return P
        ? (0, a.jsx)("div", { style: j, children: H })
        : (0, a.jsx)("div", {
              className: G()(h.ON, { [h.Nz]: _ }),
              style: j,
              children: (0, a.jsx)(o.D, { ignoreKeyPress: !0, onClick: M, children: v }),
          });
}
var F = l(173127);
l(321073);
var N = l(278416),
    M = l(196736),
    m = l(976860);
let x = (0, l(945810).mj)({
    name: "2026-05-social-layer-storefront-game-shops-dropdown",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var P = l(50920),
    H = l(288106),
    v = l(223311),
    j = l(65238),
    w = l(80151),
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
l(801416);
var $ = l(518477),
    ee = l(835018);
function et(e) {
    let { selectedTab: t, selectedCollectionId: l, handleTransition: d } = e,
        G = (0, s.bG)([_.default], () => _.default.getCurrentUser()),
        { searchQuery: T } = (0, p.v)(),
        I = n.useRef(null),
        [g, h] = n.useState(!1);
    (0, u.g)(
        I,
        n.useCallback((e) => {
            h(e.contentRect.width < 800);
        }, []),
    );
    let V = t === R.G2.ORBS ? B.liQ.SHOP_ORBS_TAB : B.liQ.COLLECTIBLES_SHOP,
        et = n.useCallback(() => {
            ((0, O.Y)({ pageType: V, sectionType: B.JJy.ORBS_BALANCE_MENU, ctaObject: B.ZSU.CTA_TO_QUEST_HOME }),
                (0, A.mA)({ fromContent: i.u.ORBS_BALANCE_MENU }));
        }, [V]),
        el = n.useCallback(() => {
            G?.id != null && (0, L.openUserProfileModal)({ userId: G.id, tabSection: $.RP.WISHLIST });
        }, [G?.id]),
        ea = (function (e) {
            let t,
                l,
                a,
                i,
                o,
                c,
                r,
                E = (0, M.H)({ location: Q }),
                u = (function (e) {
                    let { location: t } = e;
                    return x.useConfig({ location: t }).enabled;
                })({ location: Q }),
                { gameShops: C, hasGameShops: A } = (function (e) {
                    let { enabled: t } = e,
                        l = (0, f.uM)(),
                        a = (0, s.yK)(
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
                        o = (0, s.bG)(
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
                                o.map((e) => ({
                                    type: "page",
                                    key: e.id,
                                    text: e.label,
                                    iconSrc: e.iconSrc,
                                    onClick: () => i(e.id),
                                })),
                            [o, i],
                        ),
                        hasGameShops: a.length > 0,
                    };
                })({ enabled: u }),
                L = null != (0, w.A)(),
                O = (0, P.a)(Q),
                S =
                    ((t = (0, v.A)(B.FYj)),
                    (l = (0, j.XF)(t)),
                    (a = l?.shared.navigation?.tab),
                    (i = a?.title),
                    (o = a?.icon),
                    (c = l?.collectionId),
                    (r = t?.rewardStatus),
                    n.useMemo(
                        () =>
                            null == i || null == c || r === H.GM.CONSUMED
                                ? null
                                : { title: i, icon: o, collectionId: c },
                        [i, o, c, r],
                    ));
            return n.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return Z.filter((e) => {
                            let { tab: l } = e;
                            return l !== R.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: L }).map((t) => {
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
                        A &&
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
                    null != S && O)
                ) {
                    let e = B.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(S.collectionId),
                        t = (0, D.sj)(S.icon);
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
            }, [e, L, O, S, E, u, A, C]);
        })(
            n.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
        ),
        en = n.useMemo(() => {
            if (null == l) return !1;
            let e = ea.find((e) => e.key === R.G2.PROMOTION);
            if (null == e) return !1;
            let t = B.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l);
            return e.route === t;
        }, [ea, l])
            ? R.G2.PROMOTION
            : t;
    return (0, a.jsx)("div", {
        ref: I,
        children: (0, a.jsxs)(C.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            className: ee.jr,
            toolbar: (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)(k, { handleTransition: d, selectedTab: t, isNarrow: g, hasText: "" !== T }),
                    (0, a.jsx)(o.D, {
                        className: ee.ij,
                        onClick: el,
                        "aria-label": y.intl.string(y.t["7lZ31J"]),
                        children: (0, a.jsx)(c.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)(S.SS, {
                        analyticsPage: V,
                        cardAlignment: S.SS.CardAlignment.END,
                        ctaText: y.intl.string(y.t.VC4Mq0),
                        ctaOnClick: et,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, a.jsx)(o.D, {
                    className: ee.sU,
                    onClick: () => d(R.G2.HOME),
                    "aria-label": y.intl.string(y.t["5upuqx"]),
                    children: (0, a.jsx)(r.U, { size: "md", color: E.A.colors.TEXT_DEFAULT }),
                }),
                (0, a.jsx)(F.A, {
                    "aria-label": y.intl.string(y.t["5upuqx"]),
                    className: ee.IV,
                    options: ea,
                    selectedKey: en,
                    overflowLabel: y.intl.string(y.t["UKOtz+"]),
                    overflowExpandLabel: y.intl.string(y.t.PEtHiE),
                }),
            ],
        }),
    });
}
