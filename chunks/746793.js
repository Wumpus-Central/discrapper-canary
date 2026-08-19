t.d(e, { default: () => ic });
var n = t(477900),
    s = t(582128),
    l = t(935462),
    a = t(331322),
    r = t(297264),
    c = t(626797),
    o = t(87725),
    d = t(951305),
    u = t(532794),
    h = t(70283),
    m = t(17928),
    g = t(982240),
    p = t(611881),
    I = t(492275),
    x = t(672525),
    f = t(503698),
    j = t.n(f),
    S = t(588234),
    N = t.n(S),
    A = t(132500),
    T = t(172218),
    L = t(834730),
    _ = t(123292),
    O = t(140735),
    y = t(192308),
    C = t(43990),
    v = t(444927),
    k = t(793574),
    b = t(688810),
    w = t(999291),
    R = t(101928),
    E = t(920601),
    M = t(975732),
    W = t(299679),
    G = t(666810),
    P = t(561794),
    H = t(862772),
    D = t(310209),
    B = t(719102),
    F = t(734057),
    U = t(309010),
    Q = t(174459),
    V = t(427262),
    $ = t(871123),
    z = t(375708);
z.intl.string(z.t["7lZ31J"]), z.intl.string(z.t.pWG4ze), z.intl.string(z.t.SK5rmi), z.intl.string(z.t.BCi1gT);
var X = t(652215),
    Y = t(518477),
    J = t(288365);
function K(i) {
    let { title: e, subtitle: t, showViewAll: s, themeClass: l, onOpenWishlist: a } = i;
    return (0, n.jsxs)("div", {
        className: j()(J.$R, l),
        children: [
            (0, n.jsxs)("div", {
                className: J.hy,
                children: [
                    (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: e }),
                    null != t && (0, n.jsx)(L.E, { variant: "text-sm/medium", children: t }),
                ],
            }),
            s &&
                (0, n.jsx)("div", {
                    className: J.Rb,
                    children: (0, n.jsx)(_.Q, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: z.intl.string(z.t.y6PSA3),
                        onClick: a,
                    }),
                }),
        ],
    });
}
function Z(i) {
    let { wishlistInDmLength: e } = i;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(O.A, { children: z.intl.string(z.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: j()(J.Md, J.e6),
                children: Array.from({ length: e }, (i, e) => (0, n.jsx)(B.O, {}, `placeholder-${e}`)),
            }),
        ],
    });
}
function q(i) {
    let {
            items: e,
            giftRecipient: t,
            defaultWishlistId: l,
            onOpenWishlist: a,
            onWishlistItemClick: r,
            analyticsLocations: c,
            includedSources: o,
        } = i,
        d = (0, m.bG)([U.Ay, F.A], () => F.A.getChannel(U.Ay.getChannelId())),
        u = s.useCallback(() => {
            r?.(), (0, y.closeAllModals)();
        }, [r]);
    return (0, n.jsx)("ul", {
        className: j()(J.Md, J.e6),
        children: e.map((i, e) => {
            let { sku: s, source: r } = i;
            return null == s
                ? null
                : (0, n.jsx)(
                      "li",
                      {
                          className: J.XI,
                          children: (0, n.jsx)(W.dB, {
                              newValue: {
                                  positionInSection: e,
                                  skuId: s.id,
                                  itemSource: r === P.uS.WISHLIST ? "organic" : "recommendation",
                                  productLine: s.productLine,
                              },
                              children: (0, n.jsx)(B.A, {
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
function ii(i) {
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
        { analyticsLocations: u } = (0, b.Ay)(k.A.WISHLIST_BANNER),
        h = (0, v.A)(() => (0, A.A)()),
        { theme: m, primaryColor: g, secondaryColor: p } = (0, R.A)({ user: e, displayProfile: l }),
        { profileThemeStyle: I, profileThemeClassName: x } = (0, E.A)({
            theme: m,
            themeType: null,
            primaryColor: g,
            secondaryColor: p,
        }),
        f = s.useCallback(() => {
            (0, M.openUserProfileModal)({ userId: e.id, tabSection: Y.RP.WISHLIST });
        }, [e.id]),
        S = s.useMemo(() => "loading" === c, [c]),
        N = V.Ay.getName(e),
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
                                          return t === P.uS.POPULAR && (0, $.bF)(e);
                                      })
                                    ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                    : "SHOP_ONLY";
                        })({ totalUnownedWishlistItemCount: e, wishlistInDmLength: t, displayItems: n }),
                    [e, t, n],
                );
            return (0, s.useMemo)(() => {
                switch (a) {
                    case "FULL_WISHLIST":
                        return { title: z.intl.formatToPlainString(z.t["YcL/Vr"], { username: l }), showIcons: !1 };
                    case "MIXED":
                        return { title: z.intl.formatToPlainString(z.t.dIDKgi, { username: l }), showIcons: !0 };
                    default:
                        return { title: z.intl.string(z.t.BCi1gT), showIcons: !1 };
                }
            }, [a, l]);
        })({ totalUnownedWishlistItemCount: a, wishlistInDmLength: P.pl, displayItems: r, recipientName: N }),
        _ = l?.getBannerURL({ canAnimate: !1, size: 713 }),
        O = a > P.pl,
        y = s.useMemo(() => (O ? r.slice(0, P.pl) : r), [r, O]),
        [w, H] = s.useState(!1),
        D = s.useCallback(
            (i) => {
                if (i && !S && r.length > 0) {
                    let i = r.map((i) => {
                        let { sku: e } = i;
                        return e.id;
                    });
                    Q.default.track(X.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
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
                        H(!0);
                }
            },
            [S, r, e.id, u],
        ),
        B = (0, T.K)(D, void 0, !S && !w),
        F = s.useMemo(
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
              className: J.v8,
              children: (0, n.jsxs)("div", {
                  ref: B,
                  className: j()(J.A1, x),
                  style: I,
                  children: [
                      null != _ && (0, n.jsx)("div", { className: J.iL, style: { backgroundImage: `url(${_})` } }),
                      (0, n.jsx)(C.N, {
                          disableAdaptiveTheme: !0,
                          children: (i) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(K, {
                                          title: L.title,
                                          subtitle: L.subtitle,
                                          showViewAll: a > P.pl,
                                          themeClass: i,
                                          onOpenWishlist: f,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: i,
                                          children:
                                              S || 0 === r.length
                                                  ? (0, n.jsx)(Z, { wishlistInDmLength: P.pl })
                                                  : (0, n.jsx)(W.dB, {
                                                        newValue: {
                                                            impressionSessionId: h,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: e.id,
                                                            wishlistId: o,
                                                            analyticsLocations: u,
                                                        },
                                                        children: (0, n.jsx)(G.h, {
                                                            isGifting: !0,
                                                            location: "WishlistBanner",
                                                            children: (0, n.jsx)(q, {
                                                                items: y,
                                                                giftRecipient: e,
                                                                defaultWishlistId: o,
                                                                onOpenWishlist: f,
                                                                onWishlistItemClick: t,
                                                                analyticsLocations: u,
                                                                includedSources: F,
                                                            }),
                                                        }),
                                                    }),
                                      }),
                                      null != d && !S && r.length > 0
                                          ? (0, n.jsx)("div", { className: i, children: d })
                                          : null,
                                  ],
                              }),
                      }),
                  ],
              }),
          });
}
function ie(i) {
    let { giftRecipient: e, onWishlistItemClick: t } = i,
        l = (0, w.Ay)(e?.id),
        {
            wishlistAndRecommendations: a,
            totalUnownedWishlistItemCount: r,
            skusToUserAndReason: c,
            status: o,
            defaultWishlistId: d,
        } = (0, H.rg)({ userId: e.id, numItems: P.pl, source: P.B5.USER_PROFILE }),
        u = s.useMemo(
            () =>
                N()(
                    a.map((i) => {
                        let t = null != c[i.id] && c[i.id][e.id] === D.j.WISHLIST ? P.uS.WISHLIST : P.uS.POPULAR;
                        return null != i ? { sku: i, source: t } : null;
                    }),
                ),
            [a, e.id, c],
        );
    return (0, n.jsx)(ii, {
        giftRecipient: e,
        onWishlistItemClick: t,
        displayProfile: l,
        totalUnownedWishlistItemCount: r,
        fetchState: o,
        displayItems: u,
        defaultWishlistId: d,
    });
}
var it = t(202541),
    is = t(217655);
let il = function (i) {
    let { onSelectSku: e, priceOptions: t, giftRecipient: s, onWishlistItemClick: l, analyticsLocations: a } = i,
        { claimableRewards: r } = (0, d.Pv)(),
        c = null != r && r.length > 0,
        o = (0, p.F5)("SelectGiftOption"),
        { nextTier: u, giftsToNextTier: f } = (0, m.cf)([g.Ay], () => ({
            nextTier: g.Ay.getNextTier(h.$.GIFTING),
            giftsToNextTier: g.Ay.getRemainingToNextTier(h.$.GIFTING),
        })),
        j = o && null != u;
    return (0, n.jsxs)("div", {
        className: is.H,
        children: [
            (0, n.jsxs)("div", {
                className: is.u,
                children: [
                    (0, n.jsx)(x.D3, {
                        onClick: () => e(it.pe.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: c,
                    }),
                    (0, n.jsx)(x.Ls, { onClick: () => e(it.pe.TIER_0), isGift: !0, priceOptions: t }),
                ],
            }),
            (0, n.jsx)(ie, { giftRecipient: s, onWishlistItemClick: l }),
            j &&
                (0, n.jsx)(I.A, {
                    giftsToNextTier: f,
                    nextTierName: u.name ?? "",
                    nextTierIcon: u.simple_icon_url,
                    analyticsLocations: a,
                }),
        ],
    });
};
var ia = t(555246);
function ir(i) {
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
                    giftingOrigin: it.vQ.DM_CHANNEL,
                    analyticsLocations: d ?? [],
                    analyticsLocation: h,
                    analyticsObject: m ?? {
                        page: X.liQ.DM_CHANNEL,
                        section: X.JJy.CHANNEL_TEXT_AREA,
                        object: X.ZSU.BUTTON_ICON,
                        objectType: X.AnalyticsObjectTypes.GIFT,
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
        className: ia.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.rQ, {
                className: ia.Hc,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(a.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(r.D, { variant: "heading-md/semibold", children: z.intl.string(z.t["wg/30i"]) }),
                        (0, n.jsx)(l.s_, { onClick: t, "data-migration-pending": !0 }),
                    ],
                }),
            }),
            (0, n.jsx)(l.$m, {
                className: ia.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(il, {
                    onSelectSku: I,
                    giftRecipient: e,
                    priceOptions: p,
                    onWishlistItemClick: t,
                    analyticsLocations: d,
                }),
            }),
        ],
    });
}
function ic(i) {
    let {
        giftRecipient: e,
        onClose: t,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: r,
        giftMessage: o,
    } = i;
    return (0, n.jsx)(c.M, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: it.T7,
        isGift: !0,
        children: (0, n.jsx)(d.dX, {
            isGift: !0,
            giftRecipient: e,
            giftingOrigin: it.vQ.DM_CHANNEL,
            children: (0, n.jsx)(ir, {
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
