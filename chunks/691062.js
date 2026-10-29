l.d(t, { G: () => Q });
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
    A = l(770178),
    p = l(742589),
    C = l(617986),
    _ = l(402860),
    S = l(318346),
    O = l(70926),
    L = l(287809),
    g = l(365491),
    G = l(7689),
    T = l(683438),
    f = l(773669),
    I = l(174459),
    h = l(440938),
    b = l(758836),
    m = l(652215),
    R = l(105292),
    y = l(848913);
function N(e) {
    let { handleTransition: t, selectedTab: l, isNarrow: a, hasText: s } = e,
        { searchQuery: u, onSetSearchQuery: d } = (0, g.v)(),
        [A, p] = i.useState(""),
        C = (0, h.uM)(),
        _ = (0, o.bG)([f.default], () => f.default.locale),
        S = i.useRef(null),
        [O, L] = i.useState(!1);
    (i.useEffect(() => {
        let e = setTimeout(() => {
            d(A);
        }, 250);
        return () => clearTimeout(e);
    }, [A, d]),
        i.useEffect(() => {
            p(u);
        }, [u]),
        i.useEffect(() => {
            L(a && s);
        }, [a, s]));
    let N = i.useCallback(
            (e) => {
                "Enter" === e.key && d(A);
            },
            [A, d],
        ),
        B = i.useCallback(
            (e) => {
                I.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
        x = i.useCallback(() => {
            (l !== b.G2.CATALOG && t(b.G2.CATALOG), B(b.uY.SEARCH_ICON), L(!0), setTimeout(() => S.current?.focus()));
        }, [l, t, B]),
        M = i.useCallback(() => {
            (l !== b.G2.CATALOG && t(b.G2.CATALOG), B(b.uY.SEARCH_BAR));
        }, [l, t, B]),
        F = i.useCallback(() => {
            (p(""), d(""), B(b.uY.SEARCH_BAR_CLEAR), a && L(!1));
        }, [d, B, a]),
        P = i.useCallback(() => {
            a && "" === A && L(!1);
        }, [a, A]),
        k = a && !O,
        v = (0, n.jsx)(c.D, {
            className: y.qc,
            onClick: x,
            children: (0, n.jsx)(G.MagnifyingGlassIcon, { size: "sm", color: E.A.colors.INTERACTIVE_ICON_DEFAULT }),
        }),
        H = (0, n.jsx)(T.I, {
            size: "sm",
            ref: S,
            onKeyDown: N,
            query: A,
            onChange: p,
            onClear: F,
            onBlur: P,
            placeholder: "en-US" === _ ? R.intl.string(R.t.arz34K) : R.intl.string(R.t["hIt/Nm"]),
        }),
        j = { "--custom-search-bar-width": `${b.rr}px`, "--custom-search-bar-icon-width": `${b.Dy}px` };
    return k
        ? (0, n.jsx)("div", { style: j, children: v })
        : (0, n.jsx)("div", {
              className: r()(y.ON, { [y.Nz]: O }),
              style: j,
              children: (0, n.jsx)(c.D, { ignoreKeyPress: !0, onClick: M, children: H }),
          });
}
var B = l(173127);
l(321073);
var x = l(278416),
    M = l(196736),
    F = l(976860),
    P = l(288106),
    k = l(223311),
    v = l(65238),
    H = l(758461),
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
    { tab: b.G2.OFFER_ELIGIBLE, labelKey: R.t.hY8Ft1 },
    { tab: b.G2.AVATAR_DECORATIONS, labelKey: R.t.dRZYNE },
    { tab: b.G2.NAMEPLATES, labelKey: R.t.V68Fqz },
    { tab: b.G2.PROFILE_EFFECTS, labelKey: R.t["1cNjtx"] },
    { tab: b.G2.PROFILE_FRAMES, labelKey: R.t.ecTJkR },
    { tab: b.G2.BUNDLES, labelKey: R.t.FYFpps },
    { tab: b.G2.COLLABS, labelKey: R.t["+W8gb+"] },
    { tab: b.G2.CATALOG, labelKey: R.t.xFcotU },
];
var J = l(783857);
l(801416);
var Z = l(518477),
    $ = l(835018);
function Q(e) {
    let { selectedTab: t, selectedCollectionId: l, handleTransition: a } = e,
        G = (0, o.bG)([L.default], () => L.default.getCurrentUser()),
        T = (0, J.yB)("CollectiblesShopHeaderBar"),
        { searchQuery: f } = (0, g.v)(),
        y = i.useRef(null),
        [D, Q] = i.useState(!1);
    (0, A.g)(
        y,
        i.useCallback((e) => {
            Q(e.contentRect.width < 800);
        }, []),
    );
    let ee = t === b.G2.ORBS ? m.liQ.SHOP_ORBS_TAB : m.liQ.COLLECTIBLES_SHOP,
        et = i.useCallback(() => {
            ((0, S.Y)({ pageType: ee, sectionType: m.JJy.ORBS_BALANCE_MENU, ctaObject: m.ZSU.CTA_TO_QUEST_HOME }),
                (0, C.mA)({ fromContent: s.u.ORBS_BALANCE_MENU }));
        }, [ee]),
        el = i.useCallback(() => {
            G?.id != null && (0, _.openUserProfileModal)({ userId: G.id, tabSection: Z.RP.WISHLIST });
        }, [G?.id]),
        en = (function (e) {
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
                A,
                p = (0, M.H)({ location: "useCollectiblesShopNavigationMenuOptions" }),
                { gameShops: C, hasGameShops: _ } =
                    ((t = (0, h.uM)()),
                    (l = (0, o.yK)(
                        [z.A],
                        () => (z.A.getConfig()?.storefronts ?? []).filter((e) => e.collectiblesShopNavigationEnabled),
                        [],
                    )),
                    i.useEffect(() => {
                        (0, K.Xw)();
                    }, []),
                    i.useEffect(() => {
                        l.length > 0 &&
                            U.Ay.fetchApplications(
                                l.map((e) => e.applicationId),
                                !1,
                            );
                    }, [l]),
                    (n = i.useCallback(
                        (e) => {
                            (I.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                collectibles_shop_session_id: t?.sessionId,
                                page_type: b.G2.GAME_SHOPS,
                                page_category: t?.pageCategory,
                                page_section: t?.pageSection,
                                tile_type: "SOCIAL_LAYER_STOREFRONT_SHOP_TAB",
                                cta_name: "go_to_game_shop",
                            }),
                                (0, Y.default)({ applicationId: e }).catch(() => {}));
                        },
                        [t],
                    )),
                    (a = (0, o.bG)(
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
                S = null != (0, H.HH)(),
                O =
                    ((r = (0, k.A)(m.FYj)),
                    (s = (0, v.XF)(r)),
                    (c = s?.shared.navigation?.tab),
                    (u = c?.title),
                    (d = c?.icon),
                    (E = s?.collectionId),
                    (A = r?.rewardStatus),
                    i.useMemo(
                        () =>
                            null == u || null == E || A === P.GM.CONSUMED
                                ? null
                                : { title: u, icon: d, collectionId: E },
                        [u, d, E, A],
                    ));
            return i.useMemo(() => {
                let t = (function (e) {
                        let { hasActivePromotion: t } = e;
                        return X.filter((e) => {
                            let { tab: l } = e;
                            return l !== b.G2.OFFER_ELIGIBLE || !!t;
                        });
                    })({ hasActivePromotion: S }).map((t) => {
                        let { tab: l, labelKey: n } = t,
                            i = l === b.G2.OFFER_ELIGIBLE ? x.TagIcon : void 0;
                        return {
                            type: "page",
                            key: l,
                            text: R.intl.string(n),
                            onClick: () => e(l),
                            trailingIndicator: null != i ? { type: "icon", icon: i } : void 0,
                        };
                    }),
                    l = [
                        {
                            type: "page",
                            key: b.G2.HOME,
                            text: R.intl.string(R.t["xNiB/O"]),
                            route: m.BVt.COLLECTIBLES_SHOP_WITH_TAB(b.G2.HOME),
                            onClick: () => e(b.G2.HOME),
                        },
                        {
                            type: "menu",
                            key: b.G2.CATALOG,
                            text: R.intl.string(R.t.FshAeN),
                            route: m.BVt.COLLECTIBLES_SHOP_WITH_TAB(b.G2.CATALOG),
                            onClick: () => e(b.G2.CATALOG),
                            expandLabel: R.intl.string(R.t["+w36yH"]),
                            options: t,
                        },
                        {
                            type: "page",
                            key: b.G2.ORBS,
                            text: R.intl.string(R.t.fG3RIg),
                            route: m.BVt.COLLECTIBLES_SHOP_WITH_TAB(b.G2.ORBS),
                            onClick: () => e(b.G2.ORBS),
                        },
                    ];
                if (
                    (_ &&
                        l.push({
                            type: "menu",
                            key: b.G2.GAME_SHOPS,
                            text: R.intl.string(R.t.FkjcWY),
                            expandLabel: R.intl.string(R.t.bf9uMH),
                            options: C,
                        }),
                    p &&
                        l.push({
                            type: "page",
                            key: b.G2.GAME_SERVERS,
                            text: R.intl.string(W.default.vCzwM7),
                            route: m.BVt.COLLECTIBLES_SHOP_WITH_TAB(b.G2.GAME_SERVERS),
                            onClick: () => e(b.G2.GAME_SERVERS),
                            badge: "beta",
                        }),
                    null != O)
                ) {
                    let e = m.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(O.collectionId),
                        t = (0, j.s)(O.icon);
                    l.push({
                        type: "page",
                        key: b.G2.PROMOTION,
                        text: O.title,
                        route: e,
                        icon: t ?? void 0,
                        onClick: () => (0, F.pX)(e),
                    });
                }
                return l;
            }, [e, S, O, p, _, C]);
        })(
            i.useCallback(
                (e) => {
                    a(e);
                },
                [a],
            ),
        ),
        ei = i.useMemo(() => {
            if (null == l) return !1;
            let e = en.find((e) => e.key === b.G2.PROMOTION);
            if (null == e) return !1;
            let t = m.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l);
            return e.route === t;
        }, [en, l])
            ? b.G2.PROMOTION
            : t;
    return (0, n.jsx)("div", {
        ref: y,
        children: (0, n.jsxs)(p.A, {
            disableDoubleClick: !0,
            disableFocusRingScope: !0,
            keepToastsBelow: !0,
            className: r()($.jr, { [J.jP]: T }),
            toolbar: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(N, { handleTransition: a, selectedTab: t, isNarrow: D, hasText: "" !== f }),
                    (0, n.jsx)(c.D, {
                        className: $.ij,
                        onClick: el,
                        "aria-label": R.intl.string(R.t["7lZ31J"]),
                        children: (0, n.jsx)(u.HeartIcon, { size: "xs", color: "currentColor" }),
                    }),
                    (0, n.jsx)(O.SS, {
                        analyticsPage: ee,
                        cardAlignment: O.SS.CardAlignment.END,
                        ctaText: R.intl.string(R.t.VC4Mq0),
                        ctaOnClick: et,
                    }),
                ],
            }),
            hideSearch: !0,
            children: [
                (0, n.jsx)(c.D, {
                    className: $.sU,
                    onClick: () => a(b.G2.HOME),
                    "aria-label": R.intl.string(R.t["5upuqx"]),
                    children: (0, n.jsx)(d.U, { size: "md", color: E.A.colors.TEXT_DEFAULT }),
                }),
                (0, n.jsx)(B.A, {
                    "aria-label": R.intl.string(R.t["5upuqx"]),
                    className: $.IV,
                    options: en,
                    selectedKey: ei,
                    overflowLabel: R.intl.string(R.t["UKOtz+"]),
                    overflowExpandLabel: R.intl.string(R.t.PEtHiE),
                }),
            ],
        }),
    });
}
