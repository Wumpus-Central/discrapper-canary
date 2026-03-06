"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(575593),
    o = n(635358),
    c = n(417597),
    d = n(793574),
    u = n(688810),
    h = n(587895),
    A = n(44120),
    m = n(317560),
    p = n(533406),
    g = n(183555),
    _ = n(146423),
    f = n(662349),
    x = n(479026),
    C = n(699976),
    E = n(652215),
    I = n(788868),
    N = n(518477),
    b = n(247584);
let S = C.Z.SIZE_90;
function T(e) {
    let {
            sku: t,
            wishlistOwner: n,
            wishlistId: l,
            style: a,
            skuPreviewStyle: o,
            onDetailsClick: c,
            onPurchaseClick: d,
        } = e,
        { trackUserProfileWishlistAction: u } = (0, g.NJ)(),
        h = s.useCallback(() => {
            u({
                action: N.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: l,
                productLines: new Set([t.productLine]),
            }),
                c();
        }, [t, l, c, u]),
        A = s.useCallback(() => {
            u({
                action: N.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: l,
                productLines: new Set([t.productLine]),
            }),
                d();
        }, [d, t.id, l, t.productLine, u]),
        {
            label: m,
            icon: p,
            isPromptingPurchase: x,
        } = (0, f.hB)({ sku: t, wishlistOwner: n, isOwned: !1, location: "DM Side Panel Wishlist Item Card" }),
        [C, E] = s.useState(!1);
    return (0, i.jsx)("div", {
        className: b.kL,
        children: (0, i.jsx)(_.A, {
            disableHoverOrFocus: !0,
            sku: t,
            user: n,
            spec: S,
            cardStyle: r()(b.Nr, b.Q1, a),
            skuPreviewStyle: r()(b.ho, o),
            onClick: h,
            onHoverOrFocusChange: E,
            children: (0, i.jsx)(f.AJ, { spec: S, onClick: x ? A : h, isHoveringOrFocusing: C, label: m, icon: p }),
        }),
    });
}
function v(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, ...r } = e,
        a = (0, c.bG)([h.A], () => h.A.getApplication(t.applicationId)),
        { analyticsLocations: o } = (0, u.Ay)(
            ...(l ?? []),
            d.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        A = s.useCallback(() => {
            (0, p.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: I.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: o },
            );
        }, [t, n, o]),
        g = s.useCallback(() => {
            a?.guildId != null &&
                (0, m.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    guildId: a.guildId,
                    isStorefront: !1,
                    analyticsLocations: o,
                });
        }, [a?.guildId, t.id, t.applicationId, o]);
    return (0, i.jsx)(T, {
        sku: t,
        analyticsLocations: o,
        wishlistOwner: n,
        onDetailsClick: g,
        onPurchaseClick: A,
        ...r,
    });
}
function y(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, ...c } = e,
        d = s.useCallback(() => {
            (0, A.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: I.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: l ?? [],
                giftRecipient: n,
                variantsReturnStyle: o.g.VARIANTS_GROUP,
            });
        }, [t.id, n, l]),
        u = (0, x.e)({ sku: t, analyticsLocations: l }),
        h = s.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case a.R.PROFILE_EFFECT:
                    return;
                case a.R.AVATAR_DECORATION:
                    return r()(b.ML, b._P);
                default:
                    return r()(b.ML, b.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(T, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: l,
        onDetailsClick: u,
        onPurchaseClick: d,
        skuPreviewStyle: h,
        ...c,
    });
}
function j(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case E.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(v, { sku: t, ...n });
        case E.EZt.COLLECTIBLES:
            return (0, i.jsx)(y, { sku: t, ...n });
        default:
            return null;
    }
}
