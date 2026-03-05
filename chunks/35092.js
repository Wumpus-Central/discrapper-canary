"use strict";
n.d(t, { A: () => w });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(575593),
    o = n(635358),
    c = n(417597),
    d = n(554146),
    u = n(192308),
    h = n(342494),
    A = n(793574),
    m = n(688810),
    p = n(587895),
    g = n(932001),
    _ = n(44120),
    f = n(317560),
    x = n(533406),
    C = n(183555),
    E = n(186111),
    I = n(146423),
    N = n(662349),
    b = n(479026),
    S = n(699976),
    T = n(652215),
    v = n(49999),
    y = n(788868),
    j = (n(188275), n(518477)),
    R = n(985018),
    O = n(247584),
    L = n(585048);
let M = S.Z.SIZE_90,
    D = s.forwardRef(function (e, t) {
        let {
                sku: n,
                wishlistOwner: l,
                wishlistId: a,
                style: o,
                skuPreviewStyle: c,
                onDetailsClick: d,
                onPurchaseClick: u,
            } = e,
            { trackUserProfileWishlistAction: h } = (0, C.NJ)(),
            A = s.useCallback(() => {
                h({
                    action: j.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                    skuId: n.id,
                    wishlistId: a,
                    productLines: new Set([n.productLine]),
                }),
                    d();
            }, [n, a, d, h]),
            m = s.useCallback(() => {
                h({
                    action: j.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                    skuId: n.id,
                    wishlistId: a,
                    productLines: new Set([n.productLine]),
                }),
                    u();
            }, [u, n.id, a, n.productLine, h]),
            {
                label: p,
                icon: g,
                isPromptingPurchase: _,
            } = (0, N.hB)({ sku: n, wishlistOwner: l, isOwned: !1, location: "DM Side Panel Wishlist Item Card" }),
            [f, x] = s.useState(!1);
        return (0, i.jsx)("div", {
            className: O.kL,
            ref: t,
            children: (0, i.jsx)(I.A, {
                disableHoverOrFocus: !0,
                sku: n,
                user: l,
                spec: M,
                cardStyle: r()(O.Nr, O.Q1, o),
                skuPreviewStyle: r()(O.ho, c),
                onClick: A,
                onHoverOrFocusChange: x,
                children: (0, i.jsx)(N.AJ, { spec: M, onClick: _ ? m : A, isHoveringOrFocusing: f, label: p, icon: g }),
            }),
        });
    });
function G(e) {
    let { targetElementRef: t, onRequestClose: n, onActionClick: s } = e;
    return (0, i.jsx)(h.AM, {
        size: "lg",
        shouldShow: !0,
        position: "left",
        caretConfig: { align: "center" },
        gradientColor: "blue",
        align: "center",
        onRequestClose: n,
        actions: [{ text: R.intl.string(R.t.uB4Gax), variant: "primary", onClick: s }],
        targetElementRef: t,
        title: R.intl.string(R.t.qh9t5c),
        body: R.intl.string(R.t.iM6fxV),
        graphic: { type: "image", src: L.A },
    });
}
function U(e) {
    let { sku: t, wishlistOwner: n, index: l, onViewWishlist: r, analyticsLocations: a, ...o } = e,
        h = (0, c.bG)([p.A], () => p.A.getApplication(t.applicationId)),
        { analyticsLocations: _ } = (0, m.Ay)(
            ...(a ?? []),
            A.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        [C, I] = ((0, u.useHasAnyModalOpen)(), (0, c.bG)([E.A], () => E.A.hasLayers()), (0, g.kn)([], v.m.SIDEBAR, !0)),
        N = s.useRef(null),
        b = s.useCallback(() => {
            I(v.i.USER_DISMISS),
                (0, x.a)(
                    t,
                    { isGift: !0, giftRecipient: n, giftingOrigin: y.vQ.USER_PROFILE_WISHLIST },
                    { analyticsLocations: _ },
                );
        }, [I, t, n, _]),
        S = s.useCallback(() => {
            h?.guildId != null &&
                (I(v.i.USER_DISMISS),
                (0, f.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    guildId: h.guildId,
                    isStorefront: !1,
                    analyticsLocations: _,
                }));
        }, [h?.guildId, I, t.id, t.applicationId, _]),
        T = s.useCallback(() => {
            I(v.i.USER_DISMISS);
        }, [I]),
        j = s.useCallback(() => {
            I(v.i.USER_DISMISS), r();
        }, [r, I]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(D, {
                ref: N,
                sku: t,
                index: l,
                onViewWishlist: r,
                analyticsLocations: _,
                wishlistOwner: n,
                onDetailsClick: S,
                onPurchaseClick: b,
                ...o,
            }),
            C === d.M.GAME_SHOP_WISHLIST_POPOVER &&
                (0, i.jsx)(G, { targetElementRef: N, onRequestClose: T, onActionClick: j }),
        ],
    });
}
function P(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, ...c } = e,
        d = s.useCallback(() => {
            (0, _.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: y.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: l ?? [],
                giftRecipient: n,
                variantsReturnStyle: o.g.VARIANTS_GROUP,
            });
        }, [t.id, n, l]),
        u = (0, b.e)({ sku: t, analyticsLocations: l }),
        h = s.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case a.R.PROFILE_EFFECT:
                    return;
                case a.R.AVATAR_DECORATION:
                    return r()(O.ML, O._P);
                default:
                    return r()(O.ML, O.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(D, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: l,
        onDetailsClick: u,
        onPurchaseClick: d,
        skuPreviewStyle: h,
        ...c,
    });
}
function w(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(U, { sku: t, ...n });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(P, { sku: t, ...n });
        default:
            return null;
    }
}
