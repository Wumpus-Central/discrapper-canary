"use strict";
n.d(t, { A: () => L });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(575593),
    o = n(158954),
    c = n(417597),
    d = n(793574),
    u = n(688810),
    h = n(587895),
    A = n(44120),
    m = n(317560),
    _ = n(533406),
    p = n(183555),
    g = n(661492),
    f = n(146423),
    x = n(662349),
    E = n(216020),
    C = n(479026),
    I = n(699976),
    N = n(652215),
    b = n(788868),
    S = n(518477),
    T = n(985018),
    v = n(444239);
let y = I.Z.SIZE_90;
function j(e) {
    let {
            sku: t,
            wishlistOwner: n,
            wishlistId: l,
            isSingleCard: a,
            style: c,
            skuPreviewStyle: d,
            onDetailsClick: u,
            onPurchaseClick: h,
            singleCardInfo: A,
        } = e,
        { trackUserProfileWishlistAction: m } = (0, p.NJ)(),
        _ = s.useCallback(() => {
            m({
                action: S.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: l,
                productLines: new Set([t.productLine]),
            }),
                u();
        }, [t, l, u, m]),
        C = s.useCallback(() => {
            m({
                action: S.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: l,
                productLines: new Set([t.productLine]),
            }),
                h();
        }, [h, t.id, l, t.productLine, m]),
        {
            label: I,
            icon: N,
            isPromptingPurchase: b,
        } = (0, x.h)({
            sku: t,
            wishlistOwner: n,
            isOwned: !1,
            shortText: !0,
            location: "DM Side Panel Wishlist Item Card",
        }),
        [j, R] = s.useState(!1);
    return (0, i.jsxs)(o.BJc, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, i.jsx)("div", {
                className: v.kL,
                children: (0, i.jsx)(f.A, {
                    disableHoverOrFocus: !0,
                    sku: t,
                    user: n,
                    spec: y,
                    cardStyle: r()(v.Nr, v.Q1, c),
                    skuPreviewStyle: r()(v.ho, d),
                    onClick: _,
                    "aria-label": T.intl.formatToPlainString(T.t.ZBB4Ty, { productName: (0, g.TC)(t) }),
                    onHoverOrFocusChange: R,
                    children: (0, i.jsx)(x.A, {
                        spec: y,
                        onClick: b ? C : _,
                        isHoveringOrFocusing: j,
                        label: I,
                        icon: N,
                    }),
                }),
            }),
            a && (0, i.jsx)(E.A, { title: A.title, description: A.description, onClick: _ }),
        ],
    });
}
function R(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, ...r } = e,
        a = (0, c.bG)([h.A], () => h.A.getApplication(t.applicationId)),
        { analyticsLocations: o } = (0, u.Ay)(
            ...(l ?? []),
            d.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        A = s.useCallback(() => {
            (0, _.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: b.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: o },
            );
        }, [t, n, o]),
        p = s.useCallback(() => {
            (0, m.R)({
                skuId: t.id,
                applicationId: t.applicationId,
                isStorefront: !1,
                giftRecipient: n,
                giftingOrigin: b.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: o,
            });
        }, [t.id, t.applicationId, n, o]),
        g = s.useMemo(
            () => ({ title: t.name, description: T.intl.format(T.t["CqpEC+"], { applicationName: a?.name }) }),
            [t.name, a?.name],
        );
    return (0, i.jsx)(j, {
        sku: t,
        analyticsLocations: o,
        wishlistOwner: n,
        onDetailsClick: p,
        onPurchaseClick: A,
        singleCardInfo: g,
        ...r,
    });
}
function O(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, ...o } = e,
        c = s.useCallback(() => {
            (0, A.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: b.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: l ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, l]),
        d = (0, C.e)({ sku: t, giftRecipient: n, giftingOrigin: b.vQ.USER_PROFILE_WISHLIST, analyticsLocations: l }),
        u = s.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case a.R.PROFILE_EFFECT:
                case a.R.NAMEPLATE:
                    return;
                case a.R.AVATAR_DECORATION:
                    return r()(v.ML, v._P);
                default:
                    return r()(v.ML, v.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]),
        h = s.useMemo(
            () => ({
                title: t.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return T.intl.string(T.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case a.R.AVATAR_DECORATION:
                            return T.intl.string(T.t["7v0T9P"]);
                        case a.R.PROFILE_EFFECT:
                            return T.intl.string(T.t.wR5wOo);
                        case a.R.NAMEPLATE:
                            return T.intl.string(T.t.x5CoXR);
                        default:
                            return "";
                    }
                })(t),
            }),
            [t],
        );
    return (0, i.jsx)(j, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: l,
        onDetailsClick: d,
        onPurchaseClick: c,
        skuPreviewStyle: u,
        singleCardInfo: h,
        ...o,
    });
}
function L(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case N.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(R, { sku: t, ...n });
        case N.EZt.COLLECTIBLES:
            return (0, i.jsx)(O, { sku: t, ...n });
        default:
            return null;
    }
}
