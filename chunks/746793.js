t.d(i, { default: () => es });
var n = t(627968),
    s = t(64700),
    l = t(935462),
    a = t(331322),
    r = t(534514),
    c = t(671744),
    o = t(937008),
    d = t(834252),
    u = t(532794),
    m = t(413074),
    h = t(672525),
    g = t(503698),
    p = t.n(g),
    I = t(791282),
    j = t.n(I),
    x = t(835245),
    f = t(172218),
    S = t(17928),
    N = t(834730),
    A = t(123292),
    _ = t(140735),
    L = t(192308),
    C = t(43990),
    O = t(444927),
    T = t(793574),
    v = t(688810),
    w = t(871123),
    y = t(84511),
    b = t(999291),
    k = t(101928),
    M = t(920601),
    R = t(975732),
    E = t(299679),
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
function Y(e) {
    let { title: i, subtitle: t, showViewAll: s, themeClass: l, onOpenWishlist: a } = e;
    return (0, n.jsxs)("div", {
        className: p()(X.$R, l),
        children: [
            (0, n.jsxs)("div", {
                className: X.hy,
                children: [
                    (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: i }),
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
function $(e) {
    let { wishlistInDmLength: i } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(_.A, { children: Q.intl.string(Q.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: p()(X.Md, X.e6),
                children: Array.from({ length: i }, (e, i) => (0, n.jsx)(D.O, {}, `placeholder-${i}`)),
            }),
        ],
    });
}
function J(e) {
    let {
            items: i,
            giftRecipient: t,
            defaultWishlistId: l,
            onOpenWishlist: a,
            onWishlistItemClick: r,
            analyticsLocations: c,
            includedSources: o,
        } = e,
        d = (0, S.bG)([B.A, G.A], () => G.A.getChannel(B.A.getChannelId())),
        u = s.useCallback(() => {
            r?.(), (0, L.closeAllModals)();
        }, [r]);
    return (0, n.jsx)("ul", {
        className: p()(X.Md, X.e6),
        children: i.map((e, i) => {
            let { sku: s, source: r } = e;
            return null == s
                ? null
                : (0, n.jsx)(
                      "li",
                      {
                          className: X.XI,
                          children: (0, n.jsx)(E.dB, {
                              newValue: {
                                  positionInSection: i,
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
function K(e) {
    let {
            giftRecipient: i,
            onWishlistItemClick: t,
            displayProfile: l,
            totalUnownedWishlistItemCount: a,
            displayItems: r,
            fetchState: c,
            defaultWishlistId: o,
            footerNotice: d,
        } = e,
        { analyticsLocations: u } = (0, v.Ay)(T.A.WISHLIST_BANNER),
        m = (0, O.A)(() => (0, x.A)()),
        { theme: h, primaryColor: g, secondaryColor: I } = (0, k.A)({ user: i, displayProfile: l }),
        { profileThemeStyle: j, profileThemeClassName: S } = (0, M.A)({
            theme: h,
            themeType: null,
            primaryColor: g,
            secondaryColor: I,
        }),
        N = s.useCallback(() => {
            (0, R.openUserProfileModal)({ userId: i.id, tabSection: z.RP.WISHLIST });
        }, [i.id]),
        A = s.useMemo(() => "loading" === c, [c]),
        _ = U.Ay.getName(i),
        L = (function (e) {
            let { totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n, recipientName: l } = e,
                a = (0, s.useMemo)(
                    () =>
                        (function (e) {
                            let { totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n } = e;
                            return i >= t
                                ? "FULL_WISHLIST"
                                : i > 0
                                  ? "MIXED"
                                  : n.length > 0 &&
                                      n.every((e) => {
                                          let { sku: i, source: t } = e;
                                          return t === W.uS.POPULAR && (0, w.bF)(i);
                                      })
                                    ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                    : "SHOP_ONLY";
                        })({ totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n }),
                    [i, t, n],
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
        y = l?.getBannerURL({ canAnimate: !1, size: 713 }),
        b = a > W.pl,
        P = s.useMemo(() => (b ? r.slice(0, W.pl) : r), [r, b]),
        [H, D] = s.useState(!1),
        G = s.useCallback(
            (e) => {
                if (e && !A && r.length > 0) {
                    let e = r.map((e) => {
                        let { sku: i } = e;
                        return i.id;
                    });
                    F.default.track(V.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: u,
                        product_lines: Array.from(
                            new Set(
                                r.map((e) => {
                                    let { sku: i } = e;
                                    return i.productLine;
                                }),
                            ),
                        ),
                    }),
                        D(!0);
                }
            },
            [A, r, i.id, u],
        ),
        B = (0, f.K)(G, void 0, !A && !H),
        K = s.useMemo(
            () =>
                new Set(
                    r.map((e) => {
                        let { source: i } = e;
                        return i;
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
                      null != y && (0, n.jsx)("div", { className: X.iL, style: { backgroundImage: `url(${y})` } }),
                      (0, n.jsx)(C.N, {
                          disableAdaptiveTheme: !0,
                          children: (e) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(Y, {
                                          title: L.title,
                                          subtitle: L.subtitle,
                                          showViewAll: a > W.pl,
                                          themeClass: e,
                                          onOpenWishlist: N,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: e,
                                          children:
                                              A || 0 === r.length
                                                  ? (0, n.jsx)($, { wishlistInDmLength: W.pl })
                                                  : (0, n.jsx)(E.dB, {
                                                        newValue: {
                                                            impressionSessionId: m,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: i.id,
                                                            wishlistId: o,
                                                            analyticsLocations: u,
                                                        },
                                                        children: (0, n.jsx)(J, {
                                                            items: P,
                                                            giftRecipient: i,
                                                            defaultWishlistId: o,
                                                            onOpenWishlist: N,
                                                            onWishlistItemClick: t,
                                                            analyticsLocations: u,
                                                            includedSources: K,
                                                        }),
                                                    }),
                                      }),
                                      null != d && !A && r.length > 0
                                          ? (0, n.jsx)("div", { className: e, children: d })
                                          : null,
                                  ],
                              }),
                      }),
                  ],
              }),
          });
}
function Z(e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        l = (0, b.Ay)(i?.id),
        {
            wishlistAndRecommendations: a,
            totalUnownedWishlistItemCount: r,
            skusToUserAndReason: c,
            status: o,
            defaultWishlistId: d,
        } = (0, P.rg)({ userId: i.id, numItems: W.pl, source: W.B5.USER_PROFILE }),
        u = s.useMemo(
            () =>
                j()(
                    a.map((e) => {
                        let t = null != c[e.id] && c[e.id][i.id] === H.j.WISHLIST ? W.uS.WISHLIST : W.uS.POPULAR;
                        return null != e ? { sku: e, source: t } : null;
                    }),
                ),
            [a, i.id, c],
        ),
        m = s.useMemo(
            () =>
                u.some((e) => {
                    let { sku: i } = e;
                    return (0, w.bF)(i);
                }),
            [u],
        );
    return (0, n.jsx)(K, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: l,
        totalUnownedWishlistItemCount: r,
        fetchState: o,
        displayItems: u,
        defaultWishlistId: d,
        footerNotice: m
            ? (0, n.jsx)(y.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: X.jG })
            : null,
    });
}
var q = t(788868),
    ee = t(595151);
let ei = function (e) {
    let { onSelectSku: i, priceOptions: t, giftRecipient: s, onWishlistItemClick: l } = e,
        { claimableRewards: a } = (0, o.Pv)(),
        r = null != a && a.length > 0;
    return (0, n.jsxs)("div", {
        className: ee.H,
        children: [
            (0, n.jsxs)("div", {
                className: ee.u,
                children: [
                    (0, n.jsx)(h.D3, {
                        onClick: () => i(q.pe.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: r,
                    }),
                    (0, n.jsx)(h.Ls, {
                        onClick: () => i(q.pe.TIER_0),
                        isGift: !0,
                        priceOptions: t,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, n.jsx)(m.A, {}),
            (0, n.jsx)(Z, { giftRecipient: s, onWishlistItemClick: l }),
        ],
    });
};
var et = t(116550);
function en(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: o,
            analyticsLocations: d,
            analyticsLocation: m,
            analyticsObject: h,
            giftMessage: g,
        } = e,
        p = (0, c.t4)((e) => e.checkoutPriceOptions),
        I = s.useCallback(
            (e) => {
                (0, u.A)({
                    isGift: !0,
                    giftRecipient: i,
                    subscriptionTier: e,
                    giftingOrigin: q.vQ.DM_CHANNEL,
                    analyticsLocations: d ?? [],
                    analyticsLocation: m,
                    analyticsObject: h ?? {
                        page: V.liQ.DM_CHANNEL,
                        section: V.JJy.CHANNEL_TEXT_AREA,
                        object: V.ZSU.BUTTON_ICON,
                        objectType: V.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: g,
                }),
                    t();
            },
            [i, d, m, h, g, t],
        );
    return (0, n.jsxs)(l.EO, {
        transitionState: o,
        size: l.rI.DYNAMIC,
        className: et.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.rQ, {
                className: et.Hc,
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
                className: et.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(ei, { onSelectSku: I, giftRecipient: i, priceOptions: p, onWishlistItemClick: t }),
            }),
        ],
    });
}
function es(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: r,
        giftMessage: c,
    } = e;
    return (0, n.jsx)(d.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: q.T7,
        isGift: !0,
        children: (0, n.jsx)(o.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: q.vQ.DM_CHANNEL,
            children: (0, n.jsx)(en, {
                giftRecipient: i,
                onClose: t,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: a,
                analyticsObject: r,
                giftMessage: c,
            }),
        }),
    });
}
