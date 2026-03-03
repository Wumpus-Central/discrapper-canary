"use strict";
n.d(t, { A: () => V });
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
    m = n(587895),
    g = n(932001),
    _ = n(44120),
    f = n(916023),
    x = n(317560),
    C = n(533406),
    E = n(183555),
    I = n(186111),
    N = n(146423),
    S = n(662349),
    b = n(479026),
    T = n(699976),
    v = n(652215),
    y = n(49999),
    j = n(788868),
    R = n(188275),
    O = n(518477),
    L = n(985018),
    M = n(556786),
    D = n(585048);
let G = T.Z.SIZE_90,
    U = s.forwardRef(function (e, t) {
        let { sku: n, wishlistOwner: l, wishlistId: r, style: o, skuPreviewStyle: c, onClick: d, onButtonClick: u } = e,
            { trackUserProfileWishlistAction: h } = (0, E.NJ)(),
            A = s.useCallback(() => {
                h({
                    action: O.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                    skuId: n.id,
                    wishlistId: r,
                    productLines: new Set([n.productLine]),
                }),
                    d();
            }, [n, r, d, h]),
            p = s.useCallback(() => {
                h({
                    action: O.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                    skuId: n.id,
                    wishlistId: r,
                    productLines: new Set([n.productLine]),
                }),
                    u();
            }, [u, n.id, r, n.productLine, h]),
            { label: m, icon: g } = (0, S.hB)({
                sku: n,
                wishlistOwner: l,
                isOwned: !1,
                location: "DM Side Panel Wishlist Item Card",
            }),
            [_, f] = s.useState(!1);
        return (0, i.jsx)("div", {
            className: M.kL,
            ref: t,
            children: (0, i.jsx)(N.A, {
                disableHoverOrFocus: !0,
                sku: n,
                user: l,
                spec: G,
                cardStyle: a()(M.Nr, M.Q1, o),
                skuPreviewStyle: a()(M.ho, c),
                onClick: A,
                onHoverOrFocusChange: f,
                children: (0, i.jsx)(S.AJ, { spec: G, onClick: p, isHoveringOrFocusing: _, label: m, icon: g }),
            }),
        });
    });
function P(e) {
    let { targetElementRef: t, onRequestClose: n, onActionClick: s } = e;
    return (0, i.jsx)(h.AM, {
        size: "lg",
        shouldShow: !0,
        position: "left",
        caretConfig: { align: "center" },
        gradientColor: "blue",
        align: "center",
        onRequestClose: n,
        actions: [{ text: L.intl.string(L.t.uB4Gax), variant: "primary", onClick: s }],
        targetElementRef: t,
        title: L.intl.string(L.t.qh9t5c),
        body: L.intl.string(L.t.iM6fxV),
        graphic: { type: "image", src: D.A },
    });
}
function w(e) {
    let { sku: t, wishlistOwner: n, index: l, onViewWishlist: a, analyticsLocations: r, ...o } = e,
        h = (0, c.bG)([m.A], () => m.A.getApplication(t.applicationId)),
        { analyticsLocations: _ } = (0, p.Ay)(
            ...(r ?? []),
            A.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        E = (0, f.Jw)({ location: "dm-side-panel-social-layer-storefront-wishlist-item-card" }),
        N = (0, u.useHasAnyModalOpen)(),
        S = (0, c.bG)([I.A], () => I.A.hasLayers()),
        [b, T] = (0, g.kn)(
            !E || 0 !== l || t.applicationId !== R.XR || N || S ? [] : [d.M.GAME_SHOP_WISHLIST_POPOVER],
            y.m.SIDEBAR,
            !0,
        ),
        v = s.useRef(null),
        O = s.useCallback(() => {
            T(y.i.USER_DISMISS),
                (0, C.a)(
                    t,
                    { isGift: !0, giftRecipient: n, giftingOrigin: j.vQ.USER_PROFILE_WISHLIST },
                    { analyticsLocations: _ },
                );
        }, [T, t, n, _]),
        L = s.useCallback(() => {
            h?.guildId != null &&
                (T(y.i.USER_DISMISS),
                (0, x.R)({
                    skuId: t.id,
                    applicationId: t.applicationId,
                    guildId: h.guildId,
                    isStorefront: !1,
                    analyticsLocations: _,
                }));
        }, [h?.guildId, T, t.id, t.applicationId, _]),
        M = s.useCallback(() => {
            T(y.i.USER_DISMISS);
        }, [T]),
        D = s.useCallback(() => {
            T(y.i.USER_DISMISS), a();
        }, [a, T]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(U, {
                ref: v,
                sku: t,
                index: l,
                onViewWishlist: a,
                analyticsLocations: _,
                wishlistOwner: n,
                onClick: L,
                onButtonClick: O,
                ...o,
            }),
            b === d.M.GAME_SHOP_WISHLIST_POPOVER &&
                (0, i.jsx)(P, { targetElementRef: v, onRequestClose: M, onActionClick: D }),
        ],
    });
}
function k(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, ...c } = e,
        d = s.useCallback(() => {
            (0, _.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: j.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: l ?? [],
                giftRecipient: n,
                variantsReturnStyle: o.g.VARIANTS_GROUP,
            });
        }, [t.id, n, l]),
        u = (0, b.ez)({ sku: t, analyticsLocations: l }),
        h = s.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case r.R.PROFILE_EFFECT:
                    return;
                case r.R.AVATAR_DECORATION:
                    return a()(M.ML, M._P);
                default:
                    return a()(M.ML, M.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(U, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: l,
        onClick: u,
        onButtonClick: d,
        skuPreviewStyle: h,
        ...c,
    });
}
function V(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case v.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(w, { sku: t, ...n });
        case v.EZt.COLLECTIBLES:
            return (0, i.jsx)(k, { sku: t, ...n });
        default:
            return null;
    }
}
