t.d(i, { default: () => en });
var n = t(627968),
    s = t(64700),
    l = t(935462),
    a = t(331322),
    r = t(534514),
    c = t(937008),
    o = t(834252),
    d = t(532794),
    u = t(413074),
    m = t(672525),
    h = t(503698),
    g = t.n(h),
    p = t(791282),
    I = t.n(p),
    j = t(835245),
    x = t(172218),
    f = t(17928),
    S = t(834730),
    N = t(123292),
    A = t(140735),
    _ = t(192308),
    L = t(43990),
    C = t(444927),
    O = t(793574),
    T = t(688810),
    v = t(871123),
    w = t(84511),
    y = t(999291),
    b = t(101928),
    k = t(920601),
    M = t(975732),
    R = t(299679),
    E = t(561794),
    W = t(862772),
    P = t(310209),
    H = t(944841),
    D = t(734057),
    G = t(309010),
    B = t(174459),
    F = t(427262),
    U = t(375708);
U.intl.string(U.t["7lZ31J"]), U.intl.string(U.t.pWG4ze), U.intl.string(U.t.SK5rmi), U.intl.string(U.t.BCi1gT);
var Q = t(652215),
    V = t(518477),
    z = t(308549);
function X(e) {
    let { title: i, subtitle: t, showViewAll: s, themeClass: l, onOpenWishlist: a } = e;
    return (0, n.jsxs)("div", {
        className: g()(z.$R, l),
        children: [
            (0, n.jsxs)("div", {
                className: z.hy,
                children: [
                    (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: i }),
                    null != t && (0, n.jsx)(S.E, { variant: "text-sm/medium", children: t }),
                ],
            }),
            s &&
                (0, n.jsx)("div", {
                    className: z.Rb,
                    children: (0, n.jsx)(N.Q, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: U.intl.string(U.t.y6PSA3),
                        onClick: a,
                    }),
                }),
        ],
    });
}
function Y(e) {
    let { wishlistInDmLength: i } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(A.A, { children: U.intl.string(U.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: g()(z.Md, z.e6),
                children: Array.from({ length: i }, (e, i) => (0, n.jsx)(H.O, {}, `placeholder-${i}`)),
            }),
        ],
    });
}
function $(e) {
    let {
            items: i,
            giftRecipient: t,
            defaultWishlistId: l,
            onOpenWishlist: a,
            onWishlistItemClick: r,
            analyticsLocations: c,
            includedSources: o,
        } = e,
        d = (0, f.bG)([G.A, D.A], () => D.A.getChannel(G.A.getChannelId())),
        u = s.useCallback(() => {
            r?.(), (0, _.closeAllModals)();
        }, [r]);
    return (0, n.jsx)("ul", {
        className: g()(z.Md, z.e6),
        children: i.map((e, i) => {
            let { sku: s, source: r } = e;
            return null == s
                ? null
                : (0, n.jsx)(
                      "li",
                      {
                          className: z.XI,
                          children: (0, n.jsx)(R.dB, {
                              newValue: {
                                  positionInSection: i,
                                  skuId: s.id,
                                  itemSource: r === E.uS.WISHLIST ? "organic" : "recommendation",
                                  productLine: s.productLine,
                              },
                              children: (0, n.jsx)(H.A, {
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
function J(e) {
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
        { analyticsLocations: u } = (0, T.Ay)(O.A.WISHLIST_BANNER),
        m = (0, C.A)(() => (0, j.A)()),
        { theme: h, primaryColor: p, secondaryColor: I } = (0, b.A)({ user: i, displayProfile: l }),
        { profileThemeStyle: f, profileThemeClassName: S } = (0, k.A)({
            theme: h,
            themeType: null,
            primaryColor: p,
            secondaryColor: I,
        }),
        N = s.useCallback(() => {
            (0, M.openUserProfileModal)({ userId: i.id, tabSection: V.RP.WISHLIST });
        }, [i.id]),
        A = s.useMemo(() => "loading" === c, [c]),
        _ = F.Ay.getName(i),
        w = (function (e) {
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
                                          return t === E.uS.POPULAR && (0, v.bF)(i);
                                      })
                                    ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                    : "SHOP_ONLY";
                        })({ totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n }),
                    [i, t, n],
                );
            return (0, s.useMemo)(() => {
                switch (a) {
                    case "FULL_WISHLIST":
                        return { title: U.intl.formatToPlainString(U.t["YcL/Vr"], { username: l }), showIcons: !1 };
                    case "MIXED":
                        return { title: U.intl.formatToPlainString(U.t.dIDKgi, { username: l }), showIcons: !0 };
                    default:
                        return { title: U.intl.string(U.t.BCi1gT), showIcons: !1 };
                }
            }, [a, l]);
        })({ totalUnownedWishlistItemCount: a, wishlistInDmLength: E.pl, displayItems: r, recipientName: _ }),
        y = l?.getBannerURL({ canAnimate: !1, size: 713 }),
        W = a > E.pl,
        P = s.useMemo(() => (W ? r.slice(0, E.pl) : r), [r, W]),
        [H, D] = s.useState(!1),
        G = s.useCallback(
            (e) => {
                if (e && !A && r.length > 0) {
                    let e = r.map((e) => {
                        let { sku: i } = e;
                        return i.id;
                    });
                    B.default.track(Q.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
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
        J = (0, x.K)(G, void 0, !A && !H),
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
              className: z.v8,
              children: (0, n.jsxs)("div", {
                  ref: J,
                  className: g()(z.A1, S),
                  style: f,
                  children: [
                      null != y && (0, n.jsx)("div", { className: z.iL, style: { backgroundImage: `url(${y})` } }),
                      (0, n.jsx)(L.N, {
                          disableAdaptiveTheme: !0,
                          children: (e) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(X, {
                                          title: w.title,
                                          subtitle: w.subtitle,
                                          showViewAll: a > E.pl,
                                          themeClass: e,
                                          onOpenWishlist: N,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: e,
                                          children:
                                              A || 0 === r.length
                                                  ? (0, n.jsx)(Y, { wishlistInDmLength: E.pl })
                                                  : (0, n.jsx)(R.dB, {
                                                        newValue: {
                                                            impressionSessionId: m,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: i.id,
                                                            wishlistId: o,
                                                            analyticsLocations: u,
                                                        },
                                                        children: (0, n.jsx)($, {
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
function K(e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        l = (0, y.Ay)(i?.id),
        {
            wishlistAndRecommendations: a,
            totalUnownedWishlistItemCount: r,
            skusToUserAndReason: c,
            status: o,
            defaultWishlistId: d,
        } = (0, W.rg)({ userId: i.id, numItems: E.pl, source: E.B5.USER_PROFILE }),
        u = s.useMemo(
            () =>
                I()(
                    a.map((e) => {
                        let t = null != c[e.id] && c[e.id][i.id] === P.j.WISHLIST ? E.uS.WISHLIST : E.uS.POPULAR;
                        return null != e ? { sku: e, source: t } : null;
                    }),
                ),
            [a, i.id, c],
        ),
        m = s.useMemo(
            () =>
                u.some((e) => {
                    let { sku: i } = e;
                    return (0, v.bF)(i);
                }),
            [u],
        );
    return (0, n.jsx)(J, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: l,
        totalUnownedWishlistItemCount: r,
        fetchState: o,
        displayItems: u,
        defaultWishlistId: d,
        footerNotice: m
            ? (0, n.jsx)(w.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: z.jG })
            : null,
    });
}
var Z = t(788868),
    q = t(595151);
let ee = function (e) {
    let { onSelectSku: i, priceOptions: t, giftRecipient: s, onWishlistItemClick: l } = e,
        { claimableRewards: a } = (0, c.Pv)(),
        r = null != a && a.length > 0;
    return (0, n.jsxs)("div", {
        className: q.H,
        children: [
            (0, n.jsxs)("div", {
                className: q.u,
                children: [
                    (0, n.jsx)(m.D3, {
                        onClick: () => i(Z.pe.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: r,
                    }),
                    (0, n.jsx)(m.Ls, {
                        onClick: () => i(Z.pe.TIER_0),
                        isGift: !0,
                        priceOptions: t,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, n.jsx)(u.A, {}),
            (0, n.jsx)(K, { giftRecipient: s, onWishlistItemClick: l }),
        ],
    });
};
var ei = t(116550);
function et(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: c,
            analyticsLocations: u,
            analyticsLocation: m,
            analyticsObject: h,
            giftMessage: g,
        } = e,
        { priceOptions: p } = (0, o.P5)(),
        I = s.useCallback(
            (e) => {
                (0, d.A)({
                    isGift: !0,
                    giftRecipient: i,
                    subscriptionTier: e,
                    giftingOrigin: Z.vQ.DM_CHANNEL,
                    analyticsLocations: u ?? [],
                    analyticsLocation: m,
                    analyticsObject: h ?? {
                        page: Q.liQ.DM_CHANNEL,
                        section: Q.JJy.CHANNEL_TEXT_AREA,
                        object: Q.ZSU.BUTTON_ICON,
                        objectType: Q.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: g,
                }),
                    t();
            },
            [i, u, m, h, g, t],
        );
    return (0, n.jsxs)(l.EO, {
        transitionState: c,
        size: l.rI.DYNAMIC,
        className: ei.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.rQ, {
                className: ei.Hc,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(a.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(r.D, { variant: "heading-md/semibold", children: U.intl.string(U.t["wg/30i"]) }),
                        (0, n.jsx)(l.s_, { onClick: t, "data-migration-pending": !0 }),
                    ],
                }),
            }),
            (0, n.jsx)(l.$m, {
                className: ei.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(ee, { onSelectSku: I, giftRecipient: i, priceOptions: p, onWishlistItemClick: t }),
            }),
        ],
    });
}
function en(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: r,
        giftMessage: d,
    } = e;
    return (0, n.jsx)(o.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: Z.T7,
        isGift: !0,
        children: (0, n.jsx)(c.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: Z.vQ.DM_CHANNEL,
            children: (0, n.jsx)(et, {
                giftRecipient: i,
                onClose: t,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: a,
                analyticsObject: r,
                giftMessage: d,
            }),
        }),
    });
}
