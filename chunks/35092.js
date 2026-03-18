"use strict";
n.d(t, { A: () => O });
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
    p = n(533406),
    g = n(183555),
    _ = n(146423),
    f = n(662349),
    x = n(216020),
    C = n(479026),
    E = n(699976),
    I = n(652215),
    N = n(788868),
    b = n(518477),
    S = n(985018),
    T = n(556786);
let v = E.Z.SIZE_90;
function y(e) {
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
        { trackUserProfileWishlistAction: m } = (0, g.NJ)(),
        p = s.useCallback(() => {
            m({
                action: b.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: l,
                productLines: new Set([t.productLine]),
            }),
                u();
        }, [t, l, u, m]),
        C = s.useCallback(() => {
            m({
                action: b.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: l,
                productLines: new Set([t.productLine]),
            }),
                h();
        }, [h, t.id, l, t.productLine, m]),
        {
            label: E,
            icon: I,
            isPromptingPurchase: N,
        } = (0, f.hB)({
            sku: t,
            wishlistOwner: n,
            isOwned: !1,
            shortText: !0,
            location: "DM Side Panel Wishlist Item Card",
        }),
        [S, y] = s.useState(!1);
    return (0, i.jsxs)(o.BJc, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, i.jsx)("div", {
                className: T.kL,
                children: (0, i.jsx)(_.A, {
                    disableHoverOrFocus: !0,
                    sku: t,
                    user: n,
                    spec: v,
                    cardStyle: r()(T.Nr, T.Q1, c),
                    skuPreviewStyle: r()(T.ho, d),
                    onClick: p,
                    onHoverOrFocusChange: y,
                    children: (0, i.jsx)(f.AJ, {
                        spec: v,
                        onClick: N ? C : p,
                        isHoveringOrFocusing: S,
                        label: E,
                        icon: I,
                    }),
                }),
            }),
            a && (0, i.jsx)(x.A, { title: A.title, description: A.description, onClick: p }),
        ],
    });
}
function j(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, ...r } = e,
        a = (0, c.bG)([h.A], () => h.A.getApplication(t.applicationId)),
        { analyticsLocations: o } = (0, u.Ay)(
            ...(l ?? []),
            d.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        A = s.useCallback(() => {
            (0, p.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: N.vQ.USER_PROFILE_WISHLIST },
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
        }, [a?.guildId, t.id, t.applicationId, o]),
        _ = s.useMemo(
            () => ({ title: t.name, description: S.intl.format(S.t["CqpEC+"], { applicationName: a?.name }) }),
            [t.name, a?.name],
        );
    return (0, i.jsx)(y, {
        sku: t,
        analyticsLocations: o,
        wishlistOwner: n,
        onDetailsClick: g,
        onPurchaseClick: A,
        singleCardInfo: _,
        ...r,
    });
}
function R(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, ...o } = e,
        c = s.useCallback(() => {
            (0, A.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: N.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: l ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, l]),
        d = (0, C.e)({ sku: t, analyticsLocations: l }),
        u = s.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case a.R.PROFILE_EFFECT:
                case a.R.NAMEPLATE:
                    return;
                case a.R.AVATAR_DECORATION:
                    return r()(T.ML, T._P);
                default:
                    return r()(T.ML, T.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]),
        h = s.useMemo(
            () => ({
                title: t.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return S.intl.string(S.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case a.R.AVATAR_DECORATION:
                            return S.intl.string(S.t["7v0T9P"]);
                        case a.R.PROFILE_EFFECT:
                            return S.intl.string(S.t.wR5wOo);
                        case a.R.NAMEPLATE:
                            return S.intl.string(S.t.x5CoXR);
                        default:
                            return "";
                    }
                })(t),
            }),
            [t],
        );
    return (0, i.jsx)(y, {
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
function O(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case I.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(j, { sku: t, ...n });
        case I.EZt.COLLECTIBLES:
            return (0, i.jsx)(R, { sku: t, ...n });
        default:
            return null;
    }
}
