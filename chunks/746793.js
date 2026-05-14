t.d(i, { default: () => el });
var n = t(627968),
    s = t(64700),
    l = t(935462),
    r = t(331322),
    a = t(534514),
    c = t(937008),
    o = t(834252),
    d = t(532794),
    u = t(413074),
    h = t(672525),
    m = t(503698),
    g = t.n(m),
    p = t(791282),
    I = t.n(p),
    j = t(835245),
    f = t(172218),
    x = t(17928),
    S = t(834730),
    N = t(123292),
    A = t(140735),
    _ = t(192308),
    L = t(43990),
    T = t(444927),
    C = t(793574),
    O = t(688810),
    v = t(871123),
    w = t(84511),
    b = t(999291),
    y = t(101928),
    k = t(920601),
    M = t(975732),
    R = t(299679),
    E = t(33190),
    W = t(332772),
    P = t(561794),
    H = t(862772),
    D = t(310209),
    G = t(944841),
    U = t(734057),
    B = t(309010),
    F = t(174459),
    Q = t(427262),
    V = t(375708);
V.intl.string(V.t["7lZ31J"]), V.intl.string(V.t.pWG4ze), V.intl.string(V.t.SK5rmi), V.intl.string(V.t.BCi1gT);
var z = t(652215),
    X = t(518477),
    Y = t(308549);
function $(e) {
    let { title: i, subtitle: t, showViewAll: s, themeClass: l, onOpenWishlist: r } = e;
    return (0, n.jsxs)("div", {
        className: g()(Y.$R, l),
        children: [
            (0, n.jsxs)("div", {
                className: Y.hy,
                children: [
                    (0, n.jsx)(a.D, { variant: "heading-lg/bold", children: i }),
                    null != t && (0, n.jsx)(S.E, { variant: "text-sm/medium", children: t }),
                ],
            }),
            s &&
                (0, n.jsx)("div", {
                    className: Y.Rb,
                    children: (0, n.jsx)(N.Q, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: V.intl.string(V.t.y6PSA3),
                        onClick: r,
                    }),
                }),
        ],
    });
}
function J(e) {
    let { wishlistInDmLength: i } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(A.A, { children: V.intl.string(V.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: g()(Y.Md, Y.e6),
                children: Array.from({ length: i }, (e, i) => (0, n.jsx)(G.O, {}, `placeholder-${i}`)),
            }),
        ],
    });
}
function K(e) {
    let {
            items: i,
            giftRecipient: t,
            defaultWishlistId: l,
            onOpenWishlist: r,
            onWishlistItemClick: a,
            analyticsLocations: c,
            includedSources: o,
        } = e,
        d = (0, x.bG)([B.A, U.A], () => U.A.getChannel(B.A.getChannelId())),
        u = s.useCallback(() => {
            a?.(), (0, _.closeAllModals)();
        }, [a]);
    return (
        (0, W.T)({ location: "wishlist_banner" }),
        (0, n.jsx)("ul", {
            className: g()(Y.Md, Y.e6),
            children: i.map((e, i) => {
                let { sku: s, source: a } = e;
                return null == s
                    ? null
                    : (0, n.jsx)(
                          "li",
                          {
                              className: Y.XI,
                              children: (0, n.jsx)(R.dB, {
                                  newValue: {
                                      positionInSection: i,
                                      skuId: s.id,
                                      itemSource: a === P.uS.WISHLIST ? "organic" : "recommendation",
                                      productLine: s.productLine,
                                  },
                                  children: (0, n.jsx)(G.A, {
                                      sku: s,
                                      wishlistId: l,
                                      source: a,
                                      wishlistOwner: t,
                                      hasMultipleSources: o.size > 1,
                                      onOpenWishlist: r,
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
        })
    );
}
function Z(e) {
    let {
            giftRecipient: i,
            onWishlistItemClick: t,
            displayProfile: l,
            totalUnownedWishlistItemCount: r,
            displayItems: a,
            fetchState: c,
            defaultWishlistId: o,
            footerNotice: d,
        } = e,
        { analyticsLocations: u } = (0, O.Ay)(C.A.WISHLIST_BANNER),
        h = (0, T.A)(() => (0, j.A)()),
        m = (0, E.H)("wishlist_banner"),
        { theme: p, primaryColor: I, secondaryColor: x } = (0, y.A)({ user: i, displayProfile: l, forceUserTheme: m }),
        { profileThemeStyle: S, profileThemeClassName: N } = (0, k.A)({
            theme: p,
            themeType: null,
            primaryColor: I,
            secondaryColor: x,
            forceUserTheme: m,
        }),
        A = s.useCallback(() => {
            (0, M.openUserProfileModal)({ userId: i.id, tabSection: X.RP.WISHLIST });
        }, [i.id]),
        _ = s.useMemo(() => "loading" === c, [c]),
        w = Q.Ay.getName(i),
        b = (function (e) {
            let { totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n, recipientName: l } = e,
                r = (0, s.useMemo)(
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
                                          return t === P.uS.POPULAR && (0, v.bF)(i);
                                      })
                                    ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                    : "SHOP_ONLY";
                        })({ totalUnownedWishlistItemCount: i, wishlistInDmLength: t, displayItems: n }),
                    [i, t, n],
                );
            return (0, s.useMemo)(() => {
                switch (r) {
                    case "FULL_WISHLIST":
                        return { title: V.intl.formatToPlainString(V.t["YcL/Vr"], { username: l }), showIcons: !1 };
                    case "MIXED":
                        return { title: V.intl.formatToPlainString(V.t.dIDKgi, { username: l }), showIcons: !0 };
                    default:
                        return { title: V.intl.string(V.t.BCi1gT), showIcons: !1 };
                }
            }, [r, l]);
        })({ totalUnownedWishlistItemCount: r, wishlistInDmLength: P.pl, displayItems: a, recipientName: w }),
        W = l?.getBannerURL({ canAnimate: !1, size: 713 }),
        H = r > P.pl,
        D = s.useMemo(() => (H ? a.slice(0, P.pl) : a), [a, H]),
        [G, U] = s.useState(!1),
        B = s.useCallback(
            (e) => {
                if (e && !_ && a.length > 0) {
                    let e = a.map((e) => {
                        let { sku: i } = e;
                        return i.id;
                    });
                    F.default.track(z.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
                        gift_recipient_id: i.id,
                        sku_ids: e,
                        location_stack: u,
                        product_lines: Array.from(
                            new Set(
                                a.map((e) => {
                                    let { sku: i } = e;
                                    return i.productLine;
                                }),
                            ),
                        ),
                    }),
                        U(!0);
                }
            },
            [_, a, i.id, u],
        ),
        Z = (0, f.K)(B, void 0, !_ && !G),
        q = s.useMemo(
            () =>
                new Set(
                    a.map((e) => {
                        let { source: i } = e;
                        return i;
                    }),
                ),
            [a],
        );
    return "error" === c
        ? null
        : (0, n.jsx)("div", {
              className: Y.v8,
              children: (0, n.jsxs)("div", {
                  ref: Z,
                  className: g()(Y.A1, N),
                  style: S,
                  children: [
                      null != W && (0, n.jsx)("div", { className: Y.iL, style: { backgroundImage: `url(${W})` } }),
                      (0, n.jsx)(L.N, {
                          disableAdaptiveTheme: !0,
                          children: (e) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)($, {
                                          title: b.title,
                                          subtitle: b.subtitle,
                                          showViewAll: r > P.pl,
                                          themeClass: e,
                                          onOpenWishlist: A,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: e,
                                          children:
                                              _ || 0 === a.length
                                                  ? (0, n.jsx)(J, { wishlistInDmLength: P.pl })
                                                  : (0, n.jsx)(R.dB, {
                                                        newValue: {
                                                            impressionSessionId: h,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: i.id,
                                                            wishlistId: o,
                                                            analyticsLocations: u,
                                                        },
                                                        children: (0, n.jsx)(K, {
                                                            items: D,
                                                            giftRecipient: i,
                                                            defaultWishlistId: o,
                                                            onOpenWishlist: A,
                                                            onWishlistItemClick: t,
                                                            analyticsLocations: u,
                                                            includedSources: q,
                                                        }),
                                                    }),
                                      }),
                                      null != d && !_ && a.length > 0
                                          ? (0, n.jsx)("div", { className: e, children: d })
                                          : null,
                                  ],
                              }),
                      }),
                  ],
              }),
          });
}
function q(e) {
    let { giftRecipient: i, onWishlistItemClick: t } = e,
        l = (0, b.Ay)(i?.id),
        {
            wishlistAndRecommendations: r,
            totalUnownedWishlistItemCount: a,
            skusToUserAndReason: c,
            status: o,
            defaultWishlistId: d,
        } = (0, H.rg)({ userId: i.id, numItems: P.pl, source: P.B5.USER_PROFILE }),
        u = s.useMemo(
            () =>
                I()(
                    r.map((e) => {
                        let t = null != c[e.id] && c[e.id][i.id] === D.j.WISHLIST ? P.uS.WISHLIST : P.uS.POPULAR;
                        return null != e ? { sku: e, source: t } : null;
                    }),
                ),
            [r, i.id, c],
        ),
        h = s.useMemo(
            () =>
                u.some((e) => {
                    let { sku: i } = e;
                    return (0, v.bF)(i);
                }),
            [u],
        );
    return (0, n.jsx)(Z, {
        giftRecipient: i,
        onWishlistItemClick: t,
        displayProfile: l,
        totalUnownedWishlistItemCount: a,
        fetchState: o,
        displayItems: u,
        defaultWishlistId: d,
        footerNotice: h
            ? (0, n.jsx)(w.A, { location: "dm_gift_modal_wishlist_new_recommendations", className: Y.jG })
            : null,
    });
}
var ee = t(788868),
    ei = t(595151);
let et = function (e) {
    let { onSelectSku: i, priceOptions: t, giftRecipient: s, onWishlistItemClick: l } = e,
        { claimableRewards: r } = (0, c.Pv)(),
        a = null != r && r.length > 0;
    return (0, n.jsxs)("div", {
        className: ei.H,
        children: [
            (0, n.jsxs)("div", {
                className: ei.u,
                children: [
                    (0, n.jsx)(h.D3, {
                        onClick: () => i(ee.pe.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: a,
                    }),
                    (0, n.jsx)(h.Ls, {
                        onClick: () => i(ee.pe.TIER_0),
                        isGift: !0,
                        priceOptions: t,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, n.jsx)(u.A, {}),
            (0, n.jsx)(q, { giftRecipient: s, onWishlistItemClick: l }),
        ],
    });
};
var en = t(116550);
function es(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: c,
            analyticsLocations: u,
            analyticsLocation: h,
            analyticsObject: m,
            giftMessage: g,
        } = e,
        { priceOptions: p } = (0, o.P5)(),
        I = s.useCallback(
            (e) => {
                (0, d.A)({
                    isGift: !0,
                    giftRecipient: i,
                    subscriptionTier: e,
                    giftingOrigin: ee.vQ.DM_CHANNEL,
                    analyticsLocations: u ?? [],
                    analyticsLocation: h,
                    analyticsObject: m ?? {
                        page: z.liQ.DM_CHANNEL,
                        section: z.JJy.CHANNEL_TEXT_AREA,
                        object: z.ZSU.BUTTON_ICON,
                        objectType: z.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: g,
                }),
                    t();
            },
            [i, u, h, m, g, t],
        );
    return (0, n.jsxs)(l.EO, {
        transitionState: c,
        size: l.rI.DYNAMIC,
        className: en.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.rQ, {
                className: en.Hc,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(r.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(a.D, { variant: "heading-md/semibold", children: V.intl.string(V.t["wg/30i"]) }),
                        (0, n.jsx)(l.s_, { onClick: t, "data-migration-pending": !0 }),
                    ],
                }),
            }),
            (0, n.jsx)(l.$m, {
                className: en.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(et, { onSelectSku: I, giftRecipient: i, priceOptions: p, onWishlistItemClick: t }),
            }),
        ],
    });
}
function el(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: r,
        analyticsObject: a,
        giftMessage: d,
    } = e;
    return (0, n.jsx)(o.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: ee.T7,
        isGift: !0,
        children: (0, n.jsx)(c.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: ee.vQ.DM_CHANNEL,
            children: (0, n.jsx)(es, {
                giftRecipient: i,
                onClose: t,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: r,
                analyticsObject: a,
                giftMessage: d,
            }),
        }),
    });
}
