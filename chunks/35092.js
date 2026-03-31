n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(575593),
    o = n(158954),
    c = n(417597),
    d = n(793574),
    u = n(688810),
    h = n(587895),
    A = n(44120),
    _ = n(317560),
    m = n(533406),
    g = n(183555),
    p = n(661492),
    f = n(146423),
    x = n(662349),
    E = n(216020),
    I = n(479026),
    C = n(699976),
    N = n(652215),
    T = n(788868),
    S = n(518477),
    b = n(985018),
    y = n(444239);
let v = C.Z.SIZE_90;
function j(e) {
    let {
            sku: t,
            wishlistOwner: n,
            wishlistId: s,
            isSingleCard: r,
            style: c,
            skuPreviewStyle: d,
            onDetailsClick: u,
            onPurchaseClick: h,
            singleCardInfo: A,
        } = e,
        { trackUserProfileWishlistAction: _ } = (0, g.NJ)(),
        m = l.useCallback(() => {
            _({
                action: S.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: s,
                productLines: new Set([t.productLine]),
            }),
                u();
        }, [t, s, u, _]),
        I = l.useCallback(() => {
            _({
                action: S.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: s,
                productLines: new Set([t.productLine]),
            }),
                h();
        }, [h, t.id, s, t.productLine, _]),
        {
            label: C,
            icon: N,
            isPromptingPurchase: T,
        } = (0, x.h)({
            sku: t,
            wishlistOwner: n,
            isOwned: !1,
            shortText: !0,
            location: "DM Side Panel Wishlist Item Card",
        }),
        [j, R] = l.useState(!1);
    return (0, i.jsxs)(o.BJc, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, i.jsx)("div", {
                className: y.kL,
                children: (0, i.jsx)(f.A, {
                    disableHoverOrFocus: !0,
                    sku: t,
                    user: n,
                    spec: v,
                    cardStyle: a()(y.Nr, y.Q1, c),
                    skuPreviewStyle: a()(y.ho, d),
                    onClick: m,
                    "aria-label": b.intl.formatToPlainString(b.t.ZBB4Ty, { productName: (0, p.TC)(t) }),
                    onHoverOrFocusChange: R,
                    children: (0, i.jsx)(x.A, {
                        spec: v,
                        onClick: T ? I : m,
                        isHoveringOrFocusing: j,
                        label: C,
                        icon: N,
                    }),
                }),
            }),
            r && (0, i.jsx)(E.A, { title: A.title, description: A.description, onClick: m }),
        ],
    });
}
function R(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: s, ...a } = e,
        r = (0, c.bG)([h.A], () => h.A.getApplication(t.applicationId)),
        { analyticsLocations: o } = (0, u.Ay)(
            ...(s ?? []),
            d.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        A = l.useCallback(() => {
            (0, m.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: T.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: o },
            );
        }, [t, n, o]),
        g = l.useCallback(() => {
            (0, _.R)({
                skuId: t.id,
                applicationId: t.applicationId,
                isStorefront: !1,
                giftRecipient: n,
                giftingOrigin: T.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: o,
            });
        }, [t.id, t.applicationId, n, o]),
        p = l.useMemo(
            () => ({ title: t.name, description: b.intl.format(b.t["CqpEC+"], { applicationName: r?.name }) }),
            [t.name, r?.name],
        );
    return (0, i.jsx)(j, {
        sku: t,
        analyticsLocations: o,
        wishlistOwner: n,
        onDetailsClick: g,
        onPurchaseClick: A,
        singleCardInfo: p,
        ...a,
    });
}
function O(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: s, ...o } = e,
        c = l.useCallback(() => {
            (0, A.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: T.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: s ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, s]),
        d = (0, I.e)({ sku: t, giftRecipient: n, giftingOrigin: T.vQ.USER_PROFILE_WISHLIST, analyticsLocations: s }),
        u = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case r.R.PROFILE_EFFECT:
                case r.R.NAMEPLATE:
                    return;
                case r.R.AVATAR_DECORATION:
                    return a()(y.ML, y._P);
                default:
                    return a()(y.ML, y.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]),
        h = l.useMemo(
            () => ({
                title: t.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return b.intl.string(b.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case r.R.AVATAR_DECORATION:
                            return b.intl.string(b.t["7v0T9P"]);
                        case r.R.PROFILE_EFFECT:
                            return b.intl.string(b.t.wR5wOo);
                        case r.R.NAMEPLATE:
                            return b.intl.string(b.t.x5CoXR);
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
        analyticsLocations: s,
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
