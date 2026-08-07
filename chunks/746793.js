t.d(e, { default: () => io });
var n = t(477900),
    s = t(582128),
    l = t(935462),
    a = t(331322),
    r = t(297264),
    c = t(171835),
    o = t(87725),
    d = t(951305),
    u = t(532794),
    h = t(70283),
    m = t(17928),
    g = t(982240),
    p = t(611881),
    I = t(492275),
    x = t(413074),
    j = t(672525),
    f = t(503698),
    S = t.n(f),
    N = t(588234),
    A = t.n(N),
    T = t(132500),
    L = t(172218),
    _ = t(834730),
    O = t(123292),
    y = t(140735),
    C = t(192308),
    v = t(43990),
    k = t(444927),
    b = t(793574),
    w = t(688810),
    R = t(999291),
    E = t(101928),
    M = t(920601),
    W = t(975732),
    G = t(299679),
    P = t(666810),
    H = t(561794),
    D = t(862772),
    B = t(310209),
    F = t(719102),
    U = t(734057),
    Q = t(309010),
    V = t(174459),
    $ = t(427262),
    z = t(871123),
    X = t(375708);
X.intl.string(X.t["7lZ31J"]), X.intl.string(X.t.pWG4ze), X.intl.string(X.t.SK5rmi), X.intl.string(X.t.BCi1gT);
var Y = t(652215),
    J = t(518477),
    K = t(288365);
function Z(i) {
    let { title: e, subtitle: t, showViewAll: s, themeClass: l, onOpenWishlist: a } = i;
    return (0, n.jsxs)("div", {
        className: S()(K.$R, l),
        children: [
            (0, n.jsxs)("div", {
                className: K.hy,
                children: [
                    (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: e }),
                    null != t && (0, n.jsx)(_.E, { variant: "text-sm/medium", children: t }),
                ],
            }),
            s &&
                (0, n.jsx)("div", {
                    className: K.Rb,
                    children: (0, n.jsx)(O.Q, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: X.intl.string(X.t.y6PSA3),
                        onClick: a,
                    }),
                }),
        ],
    });
}
function q(i) {
    let { wishlistInDmLength: e } = i;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(y.A, { children: X.intl.string(X.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: S()(K.Md, K.e6),
                children: Array.from({ length: e }, (i, e) => (0, n.jsx)(F.O, {}, `placeholder-${e}`)),
            }),
        ],
    });
}
function ii(i) {
    let {
            items: e,
            giftRecipient: t,
            defaultWishlistId: l,
            onOpenWishlist: a,
            onWishlistItemClick: r,
            analyticsLocations: c,
            includedSources: o,
        } = i,
        d = (0, m.bG)([Q.Ay, U.A], () => U.A.getChannel(Q.Ay.getChannelId())),
        u = s.useCallback(() => {
            r?.(), (0, C.closeAllModals)();
        }, [r]);
    return (0, n.jsx)("ul", {
        className: S()(K.Md, K.e6),
        children: e.map((i, e) => {
            let { sku: s, source: r } = i;
            return null == s
                ? null
                : (0, n.jsx)(
                      "li",
                      {
                          className: K.XI,
                          children: (0, n.jsx)(G.dB, {
                              newValue: {
                                  positionInSection: e,
                                  skuId: s.id,
                                  itemSource: r === H.uS.WISHLIST ? "organic" : "recommendation",
                                  productLine: s.productLine,
                              },
                              children: (0, n.jsx)(F.A, {
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
function ie(i) {
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
        { analyticsLocations: u } = (0, w.Ay)(b.A.WISHLIST_BANNER),
        h = (0, k.A)(() => (0, T.A)()),
        { theme: m, primaryColor: g, secondaryColor: p } = (0, E.A)({ user: e, displayProfile: l }),
        { profileThemeStyle: I, profileThemeClassName: x } = (0, M.A)({
            theme: m,
            themeType: null,
            primaryColor: g,
            secondaryColor: p,
        }),
        j = s.useCallback(() => {
            (0, W.openUserProfileModal)({ userId: e.id, tabSection: J.RP.WISHLIST });
        }, [e.id]),
        f = s.useMemo(() => "loading" === c, [c]),
        N = $.Ay.getName(e),
        A = (function (i) {
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
                                          return t === H.uS.POPULAR && (0, z.bF)(e);
                                      })
                                    ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                    : "SHOP_ONLY";
                        })({ totalUnownedWishlistItemCount: e, wishlistInDmLength: t, displayItems: n }),
                    [e, t, n],
                );
            return (0, s.useMemo)(() => {
                switch (a) {
                    case "FULL_WISHLIST":
                        return { title: X.intl.formatToPlainString(X.t["YcL/Vr"], { username: l }), showIcons: !1 };
                    case "MIXED":
                        return { title: X.intl.formatToPlainString(X.t.dIDKgi, { username: l }), showIcons: !0 };
                    default:
                        return { title: X.intl.string(X.t.BCi1gT), showIcons: !1 };
                }
            }, [a, l]);
        })({ totalUnownedWishlistItemCount: a, wishlistInDmLength: H.pl, displayItems: r, recipientName: N }),
        _ = l?.getBannerURL({ canAnimate: !1, size: 713 }),
        O = a > H.pl,
        y = s.useMemo(() => (O ? r.slice(0, H.pl) : r), [r, O]),
        [C, R] = s.useState(!1),
        D = s.useCallback(
            (i) => {
                if (i && !f && r.length > 0) {
                    let i = r.map((i) => {
                        let { sku: e } = i;
                        return e.id;
                    });
                    V.default.track(Y.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
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
                        R(!0);
                }
            },
            [f, r, e.id, u],
        ),
        B = (0, L.K)(D, void 0, !f && !C),
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
              className: K.v8,
              children: (0, n.jsxs)("div", {
                  ref: B,
                  className: S()(K.A1, x),
                  style: I,
                  children: [
                      null != _ && (0, n.jsx)("div", { className: K.iL, style: { backgroundImage: `url(${_})` } }),
                      (0, n.jsx)(v.N, {
                          disableAdaptiveTheme: !0,
                          children: (i) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(Z, {
                                          title: A.title,
                                          subtitle: A.subtitle,
                                          showViewAll: a > H.pl,
                                          themeClass: i,
                                          onOpenWishlist: j,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: i,
                                          children:
                                              f || 0 === r.length
                                                  ? (0, n.jsx)(q, { wishlistInDmLength: H.pl })
                                                  : (0, n.jsx)(G.dB, {
                                                        newValue: {
                                                            impressionSessionId: h,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: e.id,
                                                            wishlistId: o,
                                                            analyticsLocations: u,
                                                        },
                                                        children: (0, n.jsx)(P.h, {
                                                            isGifting: !0,
                                                            location: "WishlistBanner",
                                                            children: (0, n.jsx)(ii, {
                                                                items: y,
                                                                giftRecipient: e,
                                                                defaultWishlistId: o,
                                                                onOpenWishlist: j,
                                                                onWishlistItemClick: t,
                                                                analyticsLocations: u,
                                                                includedSources: F,
                                                            }),
                                                        }),
                                                    }),
                                      }),
                                      null != d && !f && r.length > 0
                                          ? (0, n.jsx)("div", { className: i, children: d })
                                          : null,
                                  ],
                              }),
                      }),
                  ],
              }),
          });
}
function it(i) {
    let { giftRecipient: e, onWishlistItemClick: t } = i,
        l = (0, R.Ay)(e?.id),
        {
            wishlistAndRecommendations: a,
            totalUnownedWishlistItemCount: r,
            skusToUserAndReason: c,
            status: o,
            defaultWishlistId: d,
        } = (0, D.rg)({ userId: e.id, numItems: H.pl, source: H.B5.USER_PROFILE }),
        u = s.useMemo(
            () =>
                A()(
                    a.map((i) => {
                        let t = null != c[i.id] && c[i.id][e.id] === B.j.WISHLIST ? H.uS.WISHLIST : H.uS.POPULAR;
                        return null != i ? { sku: i, source: t } : null;
                    }),
                ),
            [a, e.id, c],
        );
    return (0, n.jsx)(ie, {
        giftRecipient: e,
        onWishlistItemClick: t,
        displayProfile: l,
        totalUnownedWishlistItemCount: r,
        fetchState: o,
        displayItems: u,
        defaultWishlistId: d,
    });
}
var is = t(202541),
    il = t(217655);
let ia = function (i) {
    let { onSelectSku: e, priceOptions: t, giftRecipient: s, onWishlistItemClick: l, analyticsLocations: a } = i,
        { claimableRewards: r } = (0, d.Pv)(),
        c = null != r && r.length > 0,
        o = (0, p.F5)("SelectGiftOption"),
        { nextTier: u, giftsToNextTier: f } = (0, m.cf)([g.Ay], () => ({
            nextTier: g.Ay.getNextTier(h.$.GIFTING),
            giftsToNextTier: g.Ay.getRemainingToNextTier(h.$.GIFTING),
        })),
        S = o && null != u;
    return (0, n.jsxs)("div", {
        className: il.H,
        children: [
            (0, n.jsxs)("div", {
                className: il.u,
                children: [
                    (0, n.jsx)(j.D3, {
                        onClick: () => e(is.pe.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: c,
                    }),
                    (0, n.jsx)(j.Ls, { onClick: () => e(is.pe.TIER_0), isGift: !0, priceOptions: t }),
                ],
            }),
            (0, n.jsx)(x.A, {}),
            (0, n.jsx)(it, { giftRecipient: s, onWishlistItemClick: l }),
            S &&
                (0, n.jsx)(I.A, {
                    giftsToNextTier: f,
                    nextTierName: u.name ?? "",
                    nextTierIcon: u.simple_icon_url,
                    analyticsLocations: a,
                }),
        ],
    });
};
var ir = t(555246);
function ic(i) {
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
                    giftingOrigin: is.vQ.DM_CHANNEL,
                    analyticsLocations: d ?? [],
                    analyticsLocation: h,
                    analyticsObject: m ?? {
                        page: Y.liQ.DM_CHANNEL,
                        section: Y.JJy.CHANNEL_TEXT_AREA,
                        object: Y.ZSU.BUTTON_ICON,
                        objectType: Y.AnalyticsObjectTypes.GIFT,
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
        className: ir.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.rQ, {
                className: ir.Hc,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(a.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(r.D, { variant: "heading-md/semibold", children: X.intl.string(X.t["wg/30i"]) }),
                        (0, n.jsx)(l.s_, { onClick: t, "data-migration-pending": !0 }),
                    ],
                }),
            }),
            (0, n.jsx)(l.$m, {
                className: ir.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(ia, {
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
function io(i) {
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
        skuIDs: is.T7,
        isGift: !0,
        children: (0, n.jsx)(d.dX, {
            isGift: !0,
            giftRecipient: e,
            giftingOrigin: is.vQ.DM_CHANNEL,
            children: (0, n.jsx)(ic, {
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
