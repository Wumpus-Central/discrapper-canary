t.d(e, { default: () => il });
var n = t(627968),
    s = t(64700),
    l = t(935462),
    a = t(331322),
    r = t(534514),
    c = t(197510),
    o = t(211159),
    d = t(937008),
    u = t(532794),
    h = t(413074),
    m = t(672525),
    g = t(503698),
    p = t.n(g),
    I = t(791282),
    j = t.n(I),
    f = t(835245),
    x = t(172218),
    S = t(17928),
    N = t(834730),
    A = t(123292),
    _ = t(140735),
    L = t(192308),
    C = t(43990),
    O = t(444927),
    T = t(793574),
    v = t(688810),
    k = t(871123),
    w = t(84511),
    b = t(999291),
    y = t(101928),
    R = t(920601),
    E = t(975732),
    M = t(299679),
    W = t(561794),
    P = t(862772),
    H = t(310209),
    D = t(944841),
    G = t(734057),
    B = t(309010),
    F = t(174459),
    U = t(427262),
    Q = t(375708);
Q.intl.string(Q.t["7lZ31J"]), Q.intl.string(Q.t.pWG4ze), Q.intl.string(Q.t.SK5rmi), Q.intl.string(Q.t.BCi1gT);
var V = t(652215),
    z = t(518477),
    X = t(308549);
function Y(i) {
    let { title: e, subtitle: t, showViewAll: s, themeClass: l, onOpenWishlist: a } = i;
    return (0, n.jsxs)("div", {
        className: p()(X.$R, l),
        children: [
            (0, n.jsxs)("div", {
                className: X.hy,
                children: [
                    (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: e }),
                    null != t && (0, n.jsx)(N.E, { variant: "text-sm/medium", children: t }),
                ],
            }),
            s &&
                (0, n.jsx)("div", {
                    className: X.Rb,
                    children: (0, n.jsx)(A.Q, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: Q.intl.string(Q.t.y6PSA3),
                        onClick: a,
                    }),
                }),
        ],
    });
}
function $(i) {
    let { wishlistInDmLength: e } = i;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(_.A, { children: Q.intl.string(Q.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: p()(X.Md, X.e6),
                children: Array.from({ length: e }, (i, e) => (0, n.jsx)(D.O, {}, `placeholder-${e}`)),
            }),
        ],
    });
}
function J(i) {
    let {
            items: e,
            giftRecipient: t,
            defaultWishlistId: l,
            onOpenWishlist: a,
            onWishlistItemClick: r,
            analyticsLocations: c,
            includedSources: o,
        } = i,
        d = (0, S.bG)([B.A, G.A], () => G.A.getChannel(B.A.getChannelId())),
        u = s.useCallback(() => {
            r?.(), (0, L.closeAllModals)();
        }, [r]);
    return (0, n.jsx)("ul", {
        className: p()(X.Md, X.e6),
        children: e.map((i, e) => {
            let { sku: s, source: r } = i;
            return null == s
                ? null
                : (0, n.jsx)(
                      "li",
                      {
                          className: X.XI,
                          children: (0, n.jsx)(M.dB, {
                              newValue: {
                                  positionInSection: e,
                                  skuId: s.id,
                                  itemSource: r === W.uS.WISHLIST ? "organic" : "recommendation",
                                  productLine: s.productLine,
                              },
                              children: (0, n.jsx)(D.A, {
                                  sku: s,
                                  wishlistId: l,
                                  source: r,
                                  wishlistOwner: t,
                                  hasMultipleSources: o.size > 1,
                                  onOpenWishlist: a,
                                  onClick: u,
                                  analyticsLocations: c,
                                  guildId: d?.guild_id,
                                  channelId: d?.id,
                              }),
                          }),
                      },
                      s.id,
                  );
        }),
    });
}
function K(i) {
    let {
            giftRecipient: e,
            onWishlistItemClick: t,
            displayProfile: l,
            totalUnownedWishlistItemCount: a,
            displayItems: r,
            fetchState: c,
            defaultWishlistId: o,
            footerNotice: d,
        } = i,
        { analyticsLocations: u } = (0, v.Ay)(T.A.WISHLIST_BANNER),
        h = (0, O.A)(() => (0, f.A)()),
        { theme: m, primaryColor: g, secondaryColor: I } = (0, y.A)({ user: e, displayProfile: l }),
        { profileThemeStyle: j, profileThemeClassName: S } = (0, R.A)({
            theme: m,
            themeType: null,
            primaryColor: g,
            secondaryColor: I,
        }),
        N = s.useCallback(() => {
            (0, E.openUserProfileModal)({ userId: e.id, tabSection: z.RP.WISHLIST });
        }, [e.id]),
        A = s.useMemo(() => "loading" === c, [c]),
        _ = U.Ay.getName(e),
        L = (function (i) {
            let { totalUnownedWishlistItemCount: e, wishlistInDmLength: t, displayItems: n, recipientName: l } = i,
                a = (0, s.useMemo)(
                    () =>
                        (function (i) {
                            let { totalUnownedWishlistItemCount: e, wishlistInDmLength: t, displayItems: n } = i;
                            return e >= t
                                ? "FULL_WISHLIST"
                                : e > 0
                                  ? "MIXED"
                                  : n.length > 0 &&
                                      n.every((i) => {
                                          let { sku: e, source: t } = i;
                                          return t === W.uS.POPULAR && (0, k.bF)(e);
                                      })
                                    ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                    : "SHOP_ONLY";
                        })({ totalUnownedWishlistItemCount: e, wishlistInDmLength: t, displayItems: n }),
                    [e, t, n],
                );
            return (0, s.useMemo)(() => {
                switch (a) {
                    case "FULL_WISHLIST":
                        return { title: Q.intl.formatToPlainString(Q.t["YcL/Vr"], { username: l }), showIcons: !1 };
                    case "MIXED":
                        return { title: Q.intl.formatToPlainString(Q.t.dIDKgi, { username: l }), showIcons: !0 };
                    default:
                        return { title: Q.intl.string(Q.t.BCi1gT), showIcons: !1 };
                }
            }, [a, l]);
        })({ totalUnownedWishlistItemCount: a, wishlistInDmLength: W.pl, displayItems: r, recipientName: _ }),
        w = l?.getBannerURL({ canAnimate: !1, size: 713 }),
        b = a > W.pl,
        P = s.useMemo(() => (b ? r.slice(0, W.pl) : r), [r, b]),
        [H, D] = s.useState(!1),
        G = s.useCallback(
            (i) => {
                if (i && !A && r.length > 0) {
                    let i = r.map((i) => {
                        let { sku: e } = i;
                        return e.id;
                    });
                    F.default.track(V.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: e.id,
                        sku_ids: i,
                        location_stack: u,
                        product_lines: Array.from(
                            new Set(
                                r.map((i) => {
                                    let { sku: e } = i;
                                    return e.productLine;
                                }),
                            ),
                        ),
                    }),
                        D(!0);
                }
            },
            [A, r, e.id, u],
        ),
        B = (0, x.K)(G, void 0, !A && !H),
        K = s.useMemo(
            () =>
                new Set(
                    r.map((i) => {
                        let { source: e } = i;
                        return e;
                    }),
                ),
            [r],
        );
    return "error" === c
        ? null
        : (0, n.jsx)("div", {
              className: X.v8,
              children: (0, n.jsxs)("div", {
                  ref: B,
                  className: p()(X.A1, S),
                  style: j,
                  children: [
                      null != w && (0, n.jsx)("div", { className: X.iL, style: { backgroundImage: `url(${w})` } }),
                      (0, n.jsx)(C.N, {
                          disableAdaptiveTheme: !0,
                          children: (i) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(Y, {
                                          title: L.title,
                                          subtitle: L.subtitle,
                                          showViewAll: a > W.pl,
                                          themeClass: i,
                                          onOpenWishlist: N,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: i,
                                          children:
                                              A || 0 === r.length
                                                  ? (0, n.jsx)($, { wishlistInDmLength: W.pl })
                                                  : (0, n.jsx)(M.dB, {
                                                        newValue: {
                                                            impressionSessionId: h,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: e.id,
                                                            wishlistId: o,
                                                            analyticsLocations: u,
                                                        },
                                                        children: (0, n.jsx)(J, {
                                                            items: P,
                                                            giftRecipient: e,
                                                            defaultWishlistId: o,
                                                            onOpenWishlist: N,
                                                            onWishlistItemClick: t,
                                                            analyticsLocations: u,
                                                            includedSources: K,
                                                        }),
                                                    }),
                                      }),
                                      null != d && !A && r.length > 0
                                          ? (0, n.jsx)("div", { className: i, children: d })
                                          : null,
                                  ],
                              }),
                      }),
                  ],
              }),
          });
}
function Z(i) {
    let { giftRecipient: e, onWishlistItemClick: t } = i,
        l = (0, b.Ay)(e?.id),
        {
            wishlistAndRecommendations: a,
            totalUnownedWishlistItemCount: r,
            skusToUserAndReason: c,
            status: o,
            defaultWishlistId: d,
        } = (0, P.rg)({ userId: e.id, numItems: W.pl, source: W.B5.USER_PROFILE }),
        u = s.useMemo(
            () =>
                j()(
                    a.map((i) => {
                        let t = null != c[i.id] && c[i.id][e.id] === H.j.WISHLIST ? W.uS.WISHLIST : W.uS.POPULAR;
                        return null != i ? { sku: i, source: t } : null;
                    }),
                ),
            [a, e.id, c],
        ),
        h = s.useMemo(
            () =>
                u.some((i) => {
                    let { sku: e } = i;
                    return (0, k.bF)(e);
                }),
            [u],
        );
    return (0, n.jsx)(K, {
        giftRecipient: e,
        onWishlistItemClick: t,
        displayProfile: l,
        totalUnownedWishlistItemCount: r,
        fetchState: o,
        displayItems: u,
        defaultWishlistId: d,
        footerNotice: h
            ? (0, n.jsx)(w.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: X.jG })
            : null,
    });
}
var q = t(788868),
    ii = t(595151);
let ie = function (i) {
    let { onSelectSku: e, priceOptions: t, giftRecipient: s, onWishlistItemClick: l } = i,
        { claimableRewards: a } = (0, d.Pv)(),
        r = null != a && a.length > 0;
    return (0, n.jsxs)("div", {
        className: ii.H,
        children: [
            (0, n.jsxs)("div", {
                className: ii.u,
                children: [
                    (0, n.jsx)(m.D3, {
                        onClick: () => e(q.pe.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: r,
                    }),
                    (0, n.jsx)(m.Ls, { onClick: () => e(q.pe.TIER_0), isGift: !0, priceOptions: t }),
                ],
            }),
            (0, n.jsx)(h.A, {}),
            (0, n.jsx)(Z, { giftRecipient: s, onWishlistItemClick: l }),
        ],
    });
};
var it = t(116550);
function is(i) {
    let {
            giftRecipient: e,
            onClose: t,
            transitionState: c,
            analyticsLocations: d,
            analyticsLocation: h,
            analyticsObject: m,
            giftMessage: g,
        } = i,
        p = (0, o.t4)((i) => i.checkoutPriceOptions),
        I = s.useCallback(
            (i) => {
                (0, u.A)({
                    isGift: !0,
                    giftRecipient: e,
                    subscriptionTier: i,
                    giftingOrigin: q.vQ.DM_CHANNEL,
                    analyticsLocations: d ?? [],
                    analyticsLocation: h,
                    analyticsObject: m ?? {
                        page: V.liQ.DM_CHANNEL,
                        section: V.JJy.CHANNEL_TEXT_AREA,
                        object: V.ZSU.BUTTON_ICON,
                        objectType: V.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: g,
                }),
                    t();
            },
            [e, d, h, m, g, t],
        );
    return (0, n.jsxs)(l.EO, {
        transitionState: c,
        size: l.rI.DYNAMIC,
        className: it.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.rQ, {
                className: it.Hc,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(a.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(r.D, { variant: "heading-md/semibold", children: Q.intl.string(Q.t["wg/30i"]) }),
                        (0, n.jsx)(l.s_, { onClick: t, "data-migration-pending": !0 }),
                    ],
                }),
            }),
            (0, n.jsx)(l.$m, {
                className: it.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(ie, { onSelectSku: I, giftRecipient: e, priceOptions: p, onWishlistItemClick: t }),
            }),
        ],
    });
}
function il(i) {
    let {
        giftRecipient: e,
        onClose: t,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: r,
        giftMessage: o,
    } = i;
    return (0, n.jsx)(c.CheckoutRootProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: q.T7,
        isGift: !0,
        children: (0, n.jsx)(d.dX, {
            isGift: !0,
            giftRecipient: e,
            giftingOrigin: q.vQ.DM_CHANNEL,
            children: (0, n.jsx)(is, {
                giftRecipient: e,
                onClose: t,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: a,
                analyticsObject: r,
                giftMessage: o,
            }),
        }),
    });
}
