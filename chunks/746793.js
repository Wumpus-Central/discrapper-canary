t.d(e, { default: () => is });
var n = t(627968),
    s = t(64700),
    l = t(935462),
    a = t(331322),
    r = t(534514),
    c = t(171835),
    d = t(46332),
    o = t(937008),
    u = t(532794),
    h = t(413074),
    m = t(672525),
    g = t(503698),
    p = t.n(g),
    I = t(791282),
    j = t.n(I),
    S = t(835245),
    x = t(172218),
    f = t(17928),
    A = t(834730),
    N = t(123292),
    L = t(140735),
    C = t(192308),
    O = t(43990),
    _ = t(444927),
    T = t(793574),
    v = t(688810),
    k = t(999291),
    y = t(101928),
    b = t(920601),
    w = t(975732),
    R = t(299679),
    E = t(561794),
    M = t(862772),
    W = t(310209),
    P = t(944841),
    H = t(734057),
    D = t(309010),
    B = t(174459),
    G = t(427262),
    U = t(871123),
    F = t(375708);
F.intl.string(F.t["7lZ31J"]), F.intl.string(F.t.pWG4ze), F.intl.string(F.t.SK5rmi), F.intl.string(F.t.BCi1gT);
var Q = t(652215),
    V = t(518477),
    z = t(733957);
function X(i) {
    let { title: e, subtitle: t, showViewAll: s, themeClass: l, onOpenWishlist: a } = i;
    return (0, n.jsxs)("div", {
        className: p()(z.$R, l),
        children: [
            (0, n.jsxs)("div", {
                className: z.hy,
                children: [
                    (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: e }),
                    null != t && (0, n.jsx)(A.E, { variant: "text-sm/medium", children: t }),
                ],
            }),
            s &&
                (0, n.jsx)("div", {
                    className: z.Rb,
                    children: (0, n.jsx)(N.Q, {
                        variant: "secondary",
                        textVariant: "text-xs/normal",
                        text: F.intl.string(F.t.y6PSA3),
                        onClick: a,
                    }),
                }),
        ],
    });
}
function Y(i) {
    let { wishlistInDmLength: e } = i;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(L.A, { children: F.intl.string(F.t.pfChQr) }),
            (0, n.jsx)("div", {
                className: p()(z.Md, z.e6),
                children: Array.from({ length: e }, (i, e) => (0, n.jsx)(P.O, {}, `placeholder-${e}`)),
            }),
        ],
    });
}
function $(i) {
    let {
            items: e,
            giftRecipient: t,
            defaultWishlistId: l,
            onOpenWishlist: a,
            onWishlistItemClick: r,
            analyticsLocations: c,
            includedSources: d,
        } = i,
        o = (0, f.bG)([D.A, H.A], () => H.A.getChannel(D.A.getChannelId())),
        u = s.useCallback(() => {
            r?.(), (0, C.closeAllModals)();
        }, [r]);
    return (0, n.jsx)("ul", {
        className: p()(z.Md, z.e6),
        children: e.map((i, e) => {
            let { sku: s, source: r } = i;
            return null == s
                ? null
                : (0, n.jsx)(
                      "li",
                      {
                          className: z.XI,
                          children: (0, n.jsx)(R.dB, {
                              newValue: {
                                  positionInSection: e,
                                  skuId: s.id,
                                  itemSource: r === E.uS.WISHLIST ? "organic" : "recommendation",
                                  productLine: s.productLine,
                              },
                              children: (0, n.jsx)(P.A, {
                                  sku: s,
                                  wishlistId: l,
                                  source: r,
                                  wishlistOwner: t,
                                  hasMultipleSources: d.size > 1,
                                  onOpenWishlist: a,
                                  onClick: u,
                                  analyticsLocations: c,
                                  guildId: o?.guild_id,
                                  channelId: o?.id,
                              }),
                          }),
                      },
                      s.id,
                  );
        }),
    });
}
function J(i) {
    let {
            giftRecipient: e,
            onWishlistItemClick: t,
            displayProfile: l,
            totalUnownedWishlistItemCount: a,
            displayItems: r,
            fetchState: c,
            defaultWishlistId: d,
            footerNotice: o,
        } = i,
        { analyticsLocations: u } = (0, v.Ay)(T.A.WISHLIST_BANNER),
        h = (0, _.A)(() => (0, S.A)()),
        { theme: m, primaryColor: g, secondaryColor: I } = (0, y.A)({ user: e, displayProfile: l }),
        { profileThemeStyle: j, profileThemeClassName: f } = (0, b.A)({
            theme: m,
            themeType: null,
            primaryColor: g,
            secondaryColor: I,
        }),
        A = s.useCallback(() => {
            (0, w.openUserProfileModal)({ userId: e.id, tabSection: V.RP.WISHLIST });
        }, [e.id]),
        N = s.useMemo(() => "loading" === c, [c]),
        L = G.Ay.getName(e),
        C = (function (i) {
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
                                          return t === E.uS.POPULAR && (0, U.bF)(e);
                                      })
                                    ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY"
                                    : "SHOP_ONLY";
                        })({ totalUnownedWishlistItemCount: e, wishlistInDmLength: t, displayItems: n }),
                    [e, t, n],
                );
            return (0, s.useMemo)(() => {
                switch (a) {
                    case "FULL_WISHLIST":
                        return { title: F.intl.formatToPlainString(F.t["YcL/Vr"], { username: l }), showIcons: !1 };
                    case "MIXED":
                        return { title: F.intl.formatToPlainString(F.t.dIDKgi, { username: l }), showIcons: !0 };
                    default:
                        return { title: F.intl.string(F.t.BCi1gT), showIcons: !1 };
                }
            }, [a, l]);
        })({ totalUnownedWishlistItemCount: a, wishlistInDmLength: E.pl, displayItems: r, recipientName: L }),
        k = l?.getBannerURL({ canAnimate: !1, size: 713 }),
        M = a > E.pl,
        W = s.useMemo(() => (M ? r.slice(0, E.pl) : r), [r, M]),
        [P, H] = s.useState(!1),
        D = s.useCallback(
            (i) => {
                if (i && !N && r.length > 0) {
                    let i = r.map((i) => {
                        let { sku: e } = i;
                        return e.id;
                    });
                    B.default.track(Q.HAw.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, {
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
            [N, r, e.id, u],
        ),
        J = (0, x.K)(D, void 0, !N && !P),
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
              className: z.v8,
              children: (0, n.jsxs)("div", {
                  ref: J,
                  className: p()(z.A1, f),
                  style: j,
                  children: [
                      null != k && (0, n.jsx)("div", { className: z.iL, style: { backgroundImage: `url(${k})` } }),
                      (0, n.jsx)(O.N, {
                          disableAdaptiveTheme: !0,
                          children: (i) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(X, {
                                          title: C.title,
                                          subtitle: C.subtitle,
                                          showViewAll: a > E.pl,
                                          themeClass: i,
                                          onOpenWishlist: A,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: i,
                                          children:
                                              N || 0 === r.length
                                                  ? (0, n.jsx)(Y, { wishlistInDmLength: E.pl })
                                                  : (0, n.jsx)(R.dB, {
                                                        newValue: {
                                                            impressionSessionId: h,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: e.id,
                                                            wishlistId: d,
                                                            analyticsLocations: u,
                                                        },
                                                        children: (0, n.jsx)($, {
                                                            items: W,
                                                            giftRecipient: e,
                                                            defaultWishlistId: d,
                                                            onOpenWishlist: A,
                                                            onWishlistItemClick: t,
                                                            analyticsLocations: u,
                                                            includedSources: K,
                                                        }),
                                                    }),
                                      }),
                                      null != o && !N && r.length > 0
                                          ? (0, n.jsx)("div", { className: i, children: o })
                                          : null,
                                  ],
                              }),
                      }),
                  ],
              }),
          });
}
function K(i) {
    let { giftRecipient: e, onWishlistItemClick: t } = i,
        l = (0, k.Ay)(e?.id),
        {
            wishlistAndRecommendations: a,
            totalUnownedWishlistItemCount: r,
            skusToUserAndReason: c,
            status: d,
            defaultWishlistId: o,
        } = (0, M.rg)({ userId: e.id, numItems: E.pl, source: E.B5.USER_PROFILE }),
        u = s.useMemo(
            () =>
                j()(
                    a.map((i) => {
                        let t = null != c[i.id] && c[i.id][e.id] === W.j.WISHLIST ? E.uS.WISHLIST : E.uS.POPULAR;
                        return null != i ? { sku: i, source: t } : null;
                    }),
                ),
            [a, e.id, c],
        );
    return (0, n.jsx)(J, {
        giftRecipient: e,
        onWishlistItemClick: t,
        displayProfile: l,
        totalUnownedWishlistItemCount: r,
        fetchState: d,
        displayItems: u,
        defaultWishlistId: o,
    });
}
var Z = t(788868),
    q = t(124239);
let ii = function (i) {
    let { onSelectSku: e, priceOptions: t, giftRecipient: s, onWishlistItemClick: l } = i,
        { claimableRewards: a } = (0, o.Pv)(),
        r = null != a && a.length > 0;
    return (0, n.jsxs)("div", {
        className: q.H,
        children: [
            (0, n.jsxs)("div", {
                className: q.u,
                children: [
                    (0, n.jsx)(m.D3, {
                        onClick: () => e(Z.pe.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: r,
                    }),
                    (0, n.jsx)(m.Ls, { onClick: () => e(Z.pe.TIER_0), isGift: !0, priceOptions: t }),
                ],
            }),
            (0, n.jsx)(h.A, {}),
            (0, n.jsx)(K, { giftRecipient: s, onWishlistItemClick: l }),
        ],
    });
};
var ie = t(293318);
function it(i) {
    let {
            giftRecipient: e,
            onClose: t,
            transitionState: c,
            analyticsLocations: o,
            analyticsLocation: h,
            analyticsObject: m,
            giftMessage: g,
        } = i,
        p = (0, d.t4)((i) => i.checkoutPriceOptions),
        I = s.useCallback(
            (i) => {
                (0, u.A)({
                    isGift: !0,
                    giftRecipient: e,
                    subscriptionTier: i,
                    giftingOrigin: Z.vQ.DM_CHANNEL,
                    analyticsLocations: o ?? [],
                    analyticsLocation: h,
                    analyticsObject: m ?? {
                        page: Q.liQ.DM_CHANNEL,
                        section: Q.JJy.CHANNEL_TEXT_AREA,
                        object: Q.ZSU.BUTTON_ICON,
                        objectType: Q.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: g,
                }),
                    t();
            },
            [e, o, h, m, g, t],
        );
    return (0, n.jsxs)(l.EO, {
        transitionState: c,
        size: l.rI.DYNAMIC,
        className: ie.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.rQ, {
                className: ie.Hc,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(a.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(r.D, { variant: "heading-md/semibold", children: F.intl.string(F.t["wg/30i"]) }),
                        (0, n.jsx)(l.s_, { onClick: t, "data-migration-pending": !0 }),
                    ],
                }),
            }),
            (0, n.jsx)(l.$m, {
                className: ie.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(ii, { onSelectSku: I, giftRecipient: e, priceOptions: p, onWishlistItemClick: t }),
            }),
        ],
    });
}
function is(i) {
    let {
        giftRecipient: e,
        onClose: t,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: r,
        giftMessage: d,
    } = i;
    return (0, n.jsx)(c.M, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: Z.T7,
        isGift: !0,
        children: (0, n.jsx)(o.dX, {
            isGift: !0,
            giftRecipient: e,
            giftingOrigin: Z.vQ.DM_CHANNEL,
            children: (0, n.jsx)(it, {
                giftRecipient: e,
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
