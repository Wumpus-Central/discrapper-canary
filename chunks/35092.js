"use strict";
n.d(t, { A: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(575593),
    o = n(417597),
    c = n(793574),
    d = n(688810),
    u = n(587895),
    h = n(44120),
    A = n(317560),
    m = n(533406),
    p = n(183555),
    g = n(146423),
    _ = n(662349),
    f = n(479026),
    x = n(699976),
    C = n(652215),
    E = n(788868),
    I = n(518477),
    N = n(247584);
let b = x.Z.SIZE_90;
function S(e) {
    let {
            sku: t,
            wishlistOwner: n,
            wishlistId: l,
            style: a,
            skuPreviewStyle: o,
            onDetailsClick: c,
            onPurchaseClick: d,
        } = e,
        { trackUserProfileWishlistAction: u } = (0, p.NJ)(),
        h = s.useCallback(() => {
            u({
                action: I.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: l,
                productLines: new Set([t.productLine]),
            }),
                c();
        }, [t, l, c, u]),
        A = s.useCallback(() => {
            u({
                action: I.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: l,
                productLines: new Set([t.productLine]),
            }),
                d();
        }, [d, t.id, l, t.productLine, u]),
        {
            label: m,
            icon: f,
            isPromptingPurchase: x,
        } = (0, _.hB)({ sku: t, wishlistOwner: n, isOwned: !1, location: "DM Side Panel Wishlist Item Card" }),
        [C, E] = s.useState(!1);
    return (0, i.jsx)("div", {
        className: N.kL,
        children: (0, i.jsx)(g.A, {
            disableHoverOrFocus: !0,
            sku: t,
            user: n,
            spec: b,
            cardStyle: r()(N.Nr, N.Q1, a),
            skuPreviewStyle: r()(N.ho, o),
            onClick: h,
            onHoverOrFocusChange: E,
            children: (0, i.jsx)(_.AJ, { spec: b, onClick: x ? A : h, isHoveringOrFocusing: C, label: m, icon: f }),
        }),
    });
}
function T(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, ...r } = e,
        a = (0, o.bG)([u.A], () => u.A.getApplication(t.applicationId)),
        { analyticsLocations: h } = (0, d.Ay)(
            ...(l ?? []),
            c.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        p = s.useCallback(() => {
            (0, m.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: E.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: h },
            );
        }, [t, n, h]),
        g = s.useCallback(() => {
            a?.guildId != null &&
                (0, A.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    guildId: a.guildId,
                    isStorefront: !1,
                    analyticsLocations: h,
                });
        }, [a?.guildId, t.id, t.applicationId, h]);
    return (0, i.jsx)(S, {
        sku: t,
        analyticsLocations: h,
        wishlistOwner: n,
        onDetailsClick: g,
        onPurchaseClick: p,
        ...r,
    });
}
function v(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, ...o } = e,
        c = s.useCallback(() => {
            (0, h.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: E.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: l ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, l]),
        d = (0, f.e)({ sku: t, analyticsLocations: l }),
        u = s.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case a.R.PROFILE_EFFECT:
                    return;
                case a.R.AVATAR_DECORATION:
                    return r()(N.ML, N._P);
                default:
                    return r()(N.ML, N.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(S, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: l,
        onDetailsClick: d,
        onPurchaseClick: c,
        skuPreviewStyle: u,
        ...o,
    });
}
function y(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case C.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(T, { sku: t, ...n });
        case C.EZt.COLLECTIBLES:
            return (0, i.jsx)(v, { sku: t, ...n });
        default:
            return null;
    }
}
