"use strict";
n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(575593),
    o = n(635358),
    c = n(417597),
    d = n(554146),
    u = n(192308),
    h = n(342494),
    A = n(793574),
    p = n(688810),
    m = n(932001),
    g = n(44120),
    _ = n(916023),
    f = n(533406),
    x = n(183555),
    C = n(186111),
    E = n(146423),
    I = n(699976),
    N = n(652215),
    b = n(49999),
    S = n(788868),
    T = n(188275),
    y = n(518477),
    v = n(985018),
    j = n(556786),
    R = n(585048);
let O = s.forwardRef(function (e, t) {
    let { sku: n, wishlistOwner: l, wishlistId: r, style: o, skuPreviewStyle: c, onClick: d } = e,
        { trackUserProfileWishlistAction: u } = (0, x.NJ)(),
        h = s.useCallback(() => {
            u({
                action: y.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: r,
                productLines: new Set([n.productLine]),
            }),
                d();
        }, [n, r, d, u]);
    return (0, i.jsx)("div", {
        className: j.kL,
        ref: t,
        children: (0, i.jsx)(E.A, {
            disableHoverOrFocus: !0,
            sku: n,
            user: l,
            spec: I.Z.SIZE_90,
            cardStyle: a()(j.Nr, j.Q1, o),
            skuPreviewStyle: a()(j.ho, c),
            onClick: h,
        }),
    });
});
function L(e) {
    let { targetElementRef: t, onRequestClose: n, onActionClick: s } = e;
    return (0, i.jsx)(h.AM, {
        size: "lg",
        shouldShow: !0,
        position: "left",
        caretConfig: { align: "center" },
        gradientColor: "blue",
        align: "center",
        onRequestClose: n,
        actions: [{ text: v.intl.string(v.t.uB4Gax), variant: "primary", onClick: s }],
        targetElementRef: t,
        title: v.intl.string(v.t.qh9t5c),
        body: v.intl.string(v.t.iM6fxV),
        graphic: { type: "image", src: R.A },
    });
}
function M(e) {
    let { sku: t, wishlistOwner: n, index: l, onViewWishlist: a, analyticsLocations: r, ...o } = e,
        { analyticsLocations: h } = (0, p.Ay)(
            ...(r ?? []),
            A.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        g = (0, _.Jw)({ location: "dm-side-panel-social-layer-storefront-wishlist-item-card" }),
        x = (0, u.useHasAnyModalOpen)(),
        E = (0, c.bG)([C.A], () => C.A.hasLayers()),
        [I, N] = (0, m.kn)(
            !g || 0 !== l || t.applicationId !== T.XR || x || E ? [] : [d.M.GAME_SHOP_WISHLIST_POPOVER],
            b.m.SIDEBAR,
            !0,
        ),
        y = s.useRef(null),
        v = s.useCallback(() => {
            N(b.i.USER_DISMISS),
                (0, f.a)(
                    t,
                    { isGift: !0, giftRecipient: n, giftingOrigin: S.vQ.USER_PROFILE_WISHLIST },
                    { analyticsLocations: h },
                );
        }, [N, t, n, h]),
        j = s.useCallback(() => {
            N(b.i.USER_DISMISS);
        }, [N]),
        R = s.useCallback(() => {
            N(b.i.USER_DISMISS), a();
        }, [a, N]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(O, {
                ref: y,
                sku: t,
                index: l,
                onViewWishlist: a,
                analyticsLocations: h,
                wishlistOwner: n,
                onClick: v,
                ...o,
            }),
            I === d.M.GAME_SHOP_WISHLIST_POPOVER &&
                (0, i.jsx)(L, { targetElementRef: y, onRequestClose: j, onActionClick: R }),
        ],
    });
}
function D(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, ...c } = e,
        d = s.useCallback(() => {
            (0, g.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: S.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: l ?? [],
                giftRecipient: n,
                variantsReturnStyle: o.g.VARIANTS_GROUP,
            });
        }, [t.id, n, l]),
        u = s.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case r.R.PROFILE_EFFECT:
                    return;
                case r.R.AVATAR_DECORATION:
                    return a()(j.ML, j._P);
                default:
                    return a()(j.ML, j.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(O, { sku: t, wishlistOwner: n, analyticsLocations: l, onClick: d, skuPreviewStyle: u, ...c });
}
function G(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case N.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(M, { sku: t, ...n });
        case N.EZt.COLLECTIBLES:
            return (0, i.jsx)(D, { sku: t, ...n });
        default:
            return null;
    }
}
