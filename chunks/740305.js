t.d(e, { default: () => io });
var n = t(477900),
    s = t(582128),
    l = t(935462),
    a = t(331322),
    r = t(297264),
    c = t(952423),
    o = t(263532),
    d = t(951305),
    u = t(75678),
    h = t(70283),
    m = t(17928),
    g = t(982240),
    p = t(859492),
    I = t(492275),
    x = t(110862),
    f = t(503698),
    S = t.n(f),
    j = t(588234),
    N = t.n(j),
    A = t(132500),
    T = t(172218),
    L = t(834730),
    O = t(123292),
    y = t(140735),
    C = t(192308),
    _ = t(43990),
    v = t(444927),
    b = t(793574),
    k = t(688810),
    w = t(999291),
    R = t(101928),
    E = t(920601),
    M = t(402860),
    W = t(299679),
    G = t(820847),
    D = t(666810),
    P = t(594832),
    H = t(862772),
    B = t(310209),
    F = t(719102),
    U = t(734057),
    $ = t(309010),
    Q = t(174459),
    V = t(427262),
    z = t(871123),
    X = t(375708);
(X.intl.string(X.t["7lZ31J"]), X.intl.string(X.t.pWG4ze), X.intl.string(X.t.SK5rmi), X.intl.string(X.t.BCi1gT));
var Y = t(652215),
    J = t(518477),
    K = t(755915);
function Z(i) {
    let { title: e, subtitle: t, showViewAll: s, themeClass: l, onOpenWishlist: a } = i;
    return (0, n.jsxs)("div", {
        className: S()(K.$R, l),
        children: [
            (0, n.jsxs)("div", {
                className: K.hy,
                children: [
                    (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: e }),
                    null != t && (0, n.jsx)(L.E, { variant: "text-sm/medium", children: t }),
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
        d = (0, m.bG)([$.Ay, U.A], () => U.A.getChannel($.Ay.getChannelId())),
        u = s.useCallback(() => {
            (r?.(), (0, C.closeAllModals)());
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
                          children: (0, n.jsx)(W.dB, {
                              newValue: {
                                  positionInSection: e,
                                  skuId: s.id,
                                  itemSource: r === P.uS.WISHLIST ? "organic" : "recommendation",
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
        { analyticsLocations: u } = (0, k.Ay)(b.A.WISHLIST_BANNER),
        h = (0, v.A)(() => (0, A.A)()),
        { theme: m, primaryColor: g, secondaryColor: p } = (0, R.A)({ user: e, displayProfile: l }),
        { profileThemeStyle: I, profileThemeClassName: x } = (0, E.A)({
            theme: m,
            themeType: null,
            primaryColor: g,
            secondaryColor: p,
        }),
        f = s.useCallback(() => {
            (0, M.openUserProfileModal)({ userId: e.id, tabSection: J.RP.WISHLIST });
        }, [e.id]),
        j = s.useMemo(() => "loading" === c, [c]),
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
                                          return t === P.uS.POPULAR && (0, z.bF)(e);
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
        })({ totalUnownedWishlistItemCount: a, wishlistInDmLength: P.pl, displayItems: r, recipientName: N }),
        O = l?.getBannerURL({ canAnimate: !1, size: 713 }),
        y = a > P.pl,
        C = s.useMemo(() => (y ? r.slice(0, P.pl) : r), [r, y]),
        [w, G] = s.useState(!1),
        H = s.useCallback(
            (i) => {
                if (i && !j && r.length > 0) {
                    let i = r.map((i) => {
                        let { sku: e } = i;
                        return e.id;
                    });
                    (Q.default.track(Y.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
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
                        G(!0));
                }
            },
            [j, r, e.id, u],
        ),
        B = (0, T.K)(H, void 0, !j && !w),
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
    return "error" === c || ("success" === c && 0 === r.length)
        ? null
        : (0, n.jsx)("div", {
              className: K.v8,
              children: (0, n.jsxs)("div", {
                  ref: B,
                  className: S()(K.A1, x),
                  style: I,
                  children: [
                      null != O && (0, n.jsx)("div", { className: K.iL, style: { backgroundImage: `url(${O})` } }),
                      (0, n.jsx)(_.N, {
                          disableAdaptiveTheme: !0,
                          children: (i) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(Z, {
                                          title: L.title,
                                          subtitle: L.subtitle,
                                          showViewAll: a > P.pl,
                                          themeClass: i,
                                          onOpenWishlist: f,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: i,
                                          children: j
                                              ? (0, n.jsx)(q, { wishlistInDmLength: P.pl })
                                              : (0, n.jsx)(W.dB, {
                                                    newValue: {
                                                        impressionSessionId: h,
                                                        surface: "dm_gifting_banner",
                                                        wishlistOwnerId: e.id,
                                                        wishlistId: o,
                                                        analyticsLocations: u,
                                                    },
                                                    children: (0, n.jsx)(D.h, {
                                                        isGifting: !0,
                                                        location: "WishlistBanner",
                                                        children: (0, n.jsx)(ii, {
                                                            items: C,
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
                                      null != d && !j && r.length > 0
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
        l = (0, w.Ay)(e?.id),
        {
            wishlistAndRecommendations: a,
            totalUnownedWishlistItemCount: r,
            skusToUserAndReason: c,
            status: o,
            defaultWishlistId: d,
        } = (0, H.rg)({ userId: e.id, numItems: P.pl, source: G.B.USER_PROFILE }),
        u = s.useMemo(
            () =>
                N()(
                    a.map((i) => {
                        let t = null != c[i.id] && c[i.id][e.id] === B.j.WISHLIST ? P.uS.WISHLIST : P.uS.POPULAR;
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
    il = t(221581);
let ia = function (i) {
    let { onSelectSku: e, priceOptions: t, giftRecipient: s, onWishlistItemClick: l, analyticsLocations: a } = i,
        { claimableRewards: r } = (0, d.Pv)(),
        c = null != r && r.length > 0,
        o = (0, p.F5)("SelectGiftOption"),
        { nextTier: u, giftsToNextTier: f } = (0, m.cf)([g.Ay], () => ({
            nextTier: g.Ay.getNextTier(h.$.GIFTING),
            giftsToNextTier: g.Ay.getRemainingToNextTier(h.$.GIFTING),
        })),
        S = o && null != u,
        j = (0, p.b9)(`SelectGiftOption${S ? "" : "-DISABLED"}`);
    return (0, n.jsxs)("div", {
        className: il.H,
        children: [
            (0, n.jsxs)("div", {
                className: il.u,
                children: [
                    (0, n.jsx)(x.D3, {
                        onClick: () => e(is.pe.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: c,
                    }),
                    (0, n.jsx)(x.Ls, { onClick: () => e(is.pe.TIER_0), isGift: !0, priceOptions: t }),
                ],
            }),
            (0, n.jsx)(it, { giftRecipient: s, onWishlistItemClick: l }),
            S &&
                (0, n.jsx)(I.A, {
                    giftsToNextTier: f,
                    nextTierName: u.name ?? "",
                    nextTierIcon: (0, p.Se)(u, j),
                    analyticsLocations: a,
                }),
        ],
    });
};
var ir = t(581084);
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
                ((0, u.A)({
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
                    t());
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
