"use strict";
n.d(t, { A: () => R });
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
    f = n(216020),
    x = n(479026),
    C = n(699976),
    E = n(652215),
    I = n(788868),
    N = n(518477),
    b = n(985018),
    S = n(247584);
let T = C.Z.SIZE_90;
function v(e) {
    let {
            sku: t,
            wishlistOwner: n,
            wishlistId: l,
            isSingleCard: a,
            style: o,
            skuPreviewStyle: c,
            onDetailsClick: d,
            onPurchaseClick: u,
            singleCardInfo: h,
        } = e,
        { trackUserProfileWishlistAction: A } = (0, p.NJ)(),
        m = s.useCallback(() => {
            A({
                action: N.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: l,
                productLines: new Set([t.productLine]),
            }),
                d();
        }, [t, l, d, A]),
        x = s.useCallback(() => {
            A({
                action: N.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: l,
                productLines: new Set([t.productLine]),
            }),
                u();
        }, [u, t.id, l, t.productLine, A]),
        {
            label: C,
            icon: E,
            isPromptingPurchase: I,
        } = (0, _.hB)({ sku: t, wishlistOwner: n, isOwned: !1, location: "DM Side Panel Wishlist Item Card" }),
        [b, v] = s.useState(!1);
    return (0, i.jsxs)("div", {
        className: S.kL,
        children: [
            (0, i.jsx)(g.A, {
                disableHoverOrFocus: !0,
                sku: t,
                user: n,
                spec: T,
                cardStyle: r()(S.Nr, S.Q1, o),
                skuPreviewStyle: r()(S.ho, c),
                onClick: m,
                onHoverOrFocusChange: v,
                children: (0, i.jsx)(_.AJ, { spec: T, onClick: I ? x : m, isHoveringOrFocusing: b, label: C, icon: E }),
            }),
            a && (0, i.jsx)(f.A, { title: h.title, description: h.description, onClick: m }),
        ],
    });
}
function y(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, ...r } = e,
        a = (0, o.bG)([u.A], () => u.A.getApplication(t.applicationId)),
        { analyticsLocations: h } = (0, d.Ay)(
            ...(l ?? []),
            c.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        p = s.useCallback(() => {
            (0, m.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: I.vQ.USER_PROFILE_WISHLIST },
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
        }, [a?.guildId, t.id, t.applicationId, h]),
        _ = s.useMemo(
            () => ({ title: t.name, description: b.intl.format(b.t["CqpEC+"], { applicationName: a?.name }) }),
            [t.name, a?.name],
        );
    return (0, i.jsx)(v, {
        sku: t,
        analyticsLocations: h,
        wishlistOwner: n,
        onDetailsClick: g,
        onPurchaseClick: p,
        singleCardInfo: _,
        ...r,
    });
}
function j(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, ...o } = e,
        c = s.useCallback(() => {
            (0, h.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: I.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: l ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, l]),
        d = (0, x.e)({ sku: t, analyticsLocations: l }),
        u = s.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case a.R.PROFILE_EFFECT:
                    return;
                case a.R.AVATAR_DECORATION:
                    return r()(S.ML, S._P);
                default:
                    return r()(S.ML, S.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]),
        A = s.useMemo(
            () => ({
                title: t.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return b.intl.string(b.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case a.R.AVATAR_DECORATION:
                            return b.intl.string(b.t["7v0T9P"]);
                        case a.R.PROFILE_EFFECT:
                            return b.intl.string(b.t.wR5wOo);
                        case a.R.NAMEPLATE:
                            return b.intl.string(b.t.x5CoXR);
                        default:
                            return "";
                    }
                })(t),
            }),
            [t],
        );
    return (0, i.jsx)(v, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: l,
        onDetailsClick: d,
        onPurchaseClick: c,
        skuPreviewStyle: u,
        singleCardInfo: A,
        ...o,
    });
}
function R(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case E.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(y, { sku: t, ...n });
        case E.EZt.COLLECTIBLES:
            return (0, i.jsx)(j, { sku: t, ...n });
        default:
            return null;
    }
}
