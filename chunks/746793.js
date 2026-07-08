t.d(e, { default: () => ic });
var n = t(627968),
    s = t(64700),
    l = t(935462),
    a = t(331322),
    r = t(534514),
    c = t(171835),
    o = t(6938),
    d = t(937008),
    u = t(532794),
    h = t(70283),
    m = t(17928),
    g = t(982240),
    p = t(998370),
    I = t(492275),
    x = t(413074),
    f = t(672525),
    j = t(503698),
    S = t.n(j),
    N = t(791282),
    A = t.n(N),
    T = t(835245),
    L = t(172218),
    _ = t(834730),
    C = t(123292),
    O = t(140735),
    y = t(192308),
    v = t(43990),
    b = t(444927),
    k = t(793574),
    w = t(688810),
    R = t(999291),
    E = t(101928),
    M = t(920601),
    W = t(975732),
    P = t(299679),
    G = t(561794),
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
    J = t(308549);
function K(i) {
    let { title: e, subtitle: t, showViewAll: s, themeClass: l, onOpenWishlist: a } = i;
    return (0, n.jsxs)("div", {
        className: S()(J.$R, l),
        children: [
            (0, n.jsxs)("div", {
                className: J.hy,
                children: [
                    (0, n.jsx)(r.D, { variant: "heading-lg/bold", children: e }),
                    null != t && (0, n.jsx)(_.E, { variant: "text-sm/medium", children: t }),
                ],
            }),
            s &&
                (0, n.jsx)("div", {
                    className: J.Rb,
                    children: (0, n.jsx)(C.Q, {
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
                className: S()(J.Md, J.e6),
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
        d = (0, m.bG)([U.A, F.A], () => F.A.getChannel(U.A.getChannelId())),
        u = s.useCallback(() => {
            r?.(), (0, y.closeAllModals)();
        }, [r]);
    return (0, n.jsx)("ul", {
        className: S()(J.Md, J.e6),
        children: e.map((i, e) => {
            let { sku: s, source: r } = i;
            return null == s
                ? null
                : (0, n.jsx)(
                      "li",
                      {
                          className: J.XI,
                          children: (0, n.jsx)(P.dB, {
                              newValue: {
                                  positionInSection: e,
                                  skuId: s.id,
                                  itemSource: r === G.uS.WISHLIST ? "organic" : "recommendation",
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
        { analyticsLocations: u } = (0, w.Ay)(k.A.WISHLIST_BANNER),
        h = (0, b.A)(() => (0, T.A)()),
        { theme: m, primaryColor: g, secondaryColor: p } = (0, E.A)({ user: e, displayProfile: l }),
        { profileThemeStyle: I, profileThemeClassName: x } = (0, M.A)({
            theme: m,
            themeType: null,
            primaryColor: g,
            secondaryColor: p,
        }),
        f = s.useCallback(() => {
            (0, W.openUserProfileModal)({ userId: e.id, tabSection: Y.RP.WISHLIST });
        }, [e.id]),
        j = s.useMemo(() => "loading" === c, [c]),
        N = V.Ay.getName(e),
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
                                          return t === G.uS.POPULAR && (0, $.bF)(e);
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
        })({ totalUnownedWishlistItemCount: a, wishlistInDmLength: G.pl, displayItems: r, recipientName: N }),
        _ = l?.getBannerURL({ canAnimate: !1, size: 713 }),
        C = a > G.pl,
        O = s.useMemo(() => (C ? r.slice(0, G.pl) : r), [r, C]),
        [y, R] = s.useState(!1),
        H = s.useCallback(
            (i) => {
                if (i && !j && r.length > 0) {
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
                        R(!0);
                }
            },
            [j, r, e.id, u],
        ),
        D = (0, L.K)(H, void 0, !j && !y),
        B = s.useMemo(
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
                  ref: D,
                  className: S()(J.A1, x),
                  style: I,
                  children: [
                      null != _ && (0, n.jsx)("div", { className: J.iL, style: { backgroundImage: `url(${_})` } }),
                      (0, n.jsx)(v.N, {
                          disableAdaptiveTheme: !0,
                          children: (i) =>
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(K, {
                                          title: A.title,
                                          subtitle: A.subtitle,
                                          showViewAll: a > G.pl,
                                          themeClass: i,
                                          onOpenWishlist: f,
                                      }),
                                      (0, n.jsx)("div", {
                                          className: i,
                                          children:
                                              j || 0 === r.length
                                                  ? (0, n.jsx)(Z, { wishlistInDmLength: G.pl })
                                                  : (0, n.jsx)(P.dB, {
                                                        newValue: {
                                                            impressionSessionId: h,
                                                            surface: "dm_gifting_banner",
                                                            wishlistOwnerId: e.id,
                                                            wishlistId: o,
                                                            analyticsLocations: u,
                                                        },
                                                        children: (0, n.jsx)(q, {
                                                            items: O,
                                                            giftRecipient: e,
                                                            defaultWishlistId: o,
                                                            onOpenWishlist: f,
                                                            onWishlistItemClick: t,
                                                            analyticsLocations: u,
                                                            includedSources: B,
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
function ie(i) {
    let { giftRecipient: e, onWishlistItemClick: t } = i,
        l = (0, R.Ay)(e?.id),
        {
            wishlistAndRecommendations: a,
            totalUnownedWishlistItemCount: r,
            skusToUserAndReason: c,
            status: o,
            defaultWishlistId: d,
        } = (0, H.rg)({ userId: e.id, numItems: G.pl, source: G.B5.USER_PROFILE }),
        u = s.useMemo(
            () =>
                A()(
                    a.map((i) => {
                        let t = null != c[i.id] && c[i.id][e.id] === D.j.WISHLIST ? G.uS.WISHLIST : G.uS.POPULAR;
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
    is = t(595151);
let il = function (i) {
    let { onSelectSku: e, priceOptions: t, giftRecipient: s, onWishlistItemClick: l, analyticsLocations: a } = i,
        { claimableRewards: r } = (0, d.Pv)(),
        c = null != r && r.length > 0,
        { enabled: o } = p.J.useConfig({ location: "SelectGiftOption" }),
        { nextTier: u, giftsToNextTier: j } = (0, m.cf)([g.Ay], () => ({
            nextTier: g.Ay.getNextTier(h.$.GIFTING),
            giftsToNextTier: g.Ay.getRemainingToNextTier(h.$.GIFTING),
        })),
        S = o && null != u;
    return (0, n.jsxs)("div", {
        className: is.H,
        children: [
            (0, n.jsxs)("div", {
                className: is.u,
                children: [
                    (0, n.jsx)(f.D3, {
                        onClick: () => e(it.pe.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: c,
                    }),
                    (0, n.jsx)(f.Ls, { onClick: () => e(it.pe.TIER_0), isGift: !0, priceOptions: t }),
                ],
            }),
            (0, n.jsx)(x.A, {}),
            (0, n.jsx)(ie, { giftRecipient: s, onWishlistItemClick: l }),
            S &&
                (0, n.jsx)(I.A, {
                    giftsToNextTier: j,
                    nextTierName: u.name ?? "",
                    nextTierIcon: u.simple_icon_url,
                    analyticsLocations: a,
                }),
        ],
    });
};
var ia = t(116550);
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
