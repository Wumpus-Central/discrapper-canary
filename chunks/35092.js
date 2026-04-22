n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(575593),
    o = n(331322),
    d = n(417597),
    c = n(793574),
    u = n(688810),
    h = n(587895),
    A = n(44120),
    _ = n(532794),
    m = n(317560),
    g = n(533406),
    p = n(183555),
    f = n(661492),
    E = n(146423),
    x = n(662349),
    I = n(216020),
    C = n(479026),
    b = n(699976),
    N = n(652215),
    S = n(788868),
    v = n(518477),
    T = n(985018),
    y = n(505631),
    R = n(657190);
let j = b.Z.SIZE_90;
function L(e) {
    let {
            sku: t,
            wishlistOwner: n,
            wishlistId: s,
            isSingleCard: r,
            style: d,
            skuPreviewStyle: c,
            skuAssetHoverClassName: u,
            disableRiveHover: h,
            onDetailsClick: A,
            onPurchaseClick: _,
            singleCardInfo: m,
        } = e,
        { trackUserProfileWishlistAction: g } = (0, p.NJ)(),
        C = l.useCallback(() => {
            g({
                action: v.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: s,
                productLines: new Set([t.productLine]),
            }),
                A();
        }, [t, s, A, g]),
        b = l.useCallback(() => {
            g({
                action: v.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: s,
                productLines: new Set([t.productLine]),
            }),
                _();
        }, [_, t.id, s, t.productLine, g]),
        { label: N, icon: S, isPromptingPurchase: R } = (0, x.h)({ wishlistOwner: n, isOwned: !1, shortText: !0 }),
        [L, O] = l.useState(!1);
    return (0, i.jsxs)(o.B, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, i.jsx)("div", {
                className: y.kL,
                children: (0, i.jsx)(E.A, {
                    disableHoverOrFocus: !0,
                    disableRiveHover: h,
                    sku: t,
                    user: n,
                    spec: j,
                    cardStyle: a()(y.Nr, d),
                    skuPreviewStyle: a()(y.ho, c),
                    skuAssetClassName: L ? u : void 0,
                    onClick: C,
                    "aria-label": T.intl.formatToPlainString(T.t.ZBB4Ty, { productName: (0, f.TC)(t) }),
                    onHoverOrFocusChange: O,
                    children: (0, i.jsx)(x.A, {
                        spec: j,
                        onClick: R ? b : C,
                        isHoveringOrFocusing: L,
                        label: N,
                        icon: S,
                    }),
                }),
            }),
            r && (0, i.jsx)(I.A, { title: m.title, description: m.description, onClick: C }),
        ],
    });
}
function O(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: s, ...a } = e,
        r = (0, d.bG)([h.A], () => h.A.getApplication(t.applicationId)),
        { analyticsLocations: o } = (0, u.Ay)(
            ...(s ?? []),
            c.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        A = l.useCallback(() => {
            (0, g.a)(
                t,
                { isGift: !0, giftRecipient: n, giftingOrigin: S.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: o },
            );
        }, [t, n, o]),
        _ = l.useCallback(() => {
            (0, m.R)({
                skuId: t.id,
                applicationId: t.applicationId,
                isStorefront: !1,
                giftRecipient: n,
                giftingOrigin: S.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: o,
            });
        }, [t.id, t.applicationId, n, o]),
        p = l.useMemo(
            () => ({ title: t.name, description: T.intl.format(T.t["CqpEC+"], { applicationName: r?.name }) }),
            [t.name, r?.name],
        );
    return (0, i.jsx)(L, {
        sku: t,
        analyticsLocations: o,
        wishlistOwner: n,
        onDetailsClick: _,
        onPurchaseClick: A,
        singleCardInfo: p,
        ...a,
    });
}
function G(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: s, ...o } = e,
        d = l.useCallback(() => {
            (0, A.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: S.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: s ?? [],
                giftRecipient: n,
            });
        }, [t.id, n, s]),
        c = (0, C.e)({ sku: t, giftRecipient: n, giftingOrigin: S.vQ.USER_PROFILE_WISHLIST, analyticsLocations: s }),
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
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return T.intl.string(T.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case r.R.AVATAR_DECORATION:
                            return T.intl.string(T.t["7v0T9P"]);
                        case r.R.PROFILE_EFFECT:
                            return T.intl.string(T.t.wR5wOo);
                        case r.R.NAMEPLATE:
                            return T.intl.string(T.t.x5CoXR);
                        default:
                            return "";
                    }
                })(t),
            }),
            [t],
        );
    return (0, i.jsx)(L, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: s,
        onDetailsClick: c,
        onPurchaseClick: d,
        skuPreviewStyle: u,
        singleCardInfo: h,
        ...o,
    });
}
function D(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: s, ...a } = e,
        r = l.useCallback(() => {
            (0, _.A)({
                isGift: !0,
                giftRecipient: n,
                giftingOrigin: S.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: t.id,
                analyticsLocations: s ?? [],
            });
        }, [t.id, n, s]),
        o = l.useMemo(() => ({ title: t.name, description: T.intl.string(T.t.Ipxkog) }), [t.name]);
    return (0, i.jsx)(L, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: s,
        onDetailsClick: r,
        onPurchaseClick: r,
        skuPreviewStyle: R.MO,
        disableRiveHover: !0,
        singleCardInfo: o,
        ...a,
    });
}
function M(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case N.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(O, { sku: t, ...n });
        case N.EZt.COLLECTIBLES:
            return (0, i.jsx)(G, { sku: t, ...n });
        case N.EZt.PREMIUM:
            return (0, i.jsx)(D, { sku: t, ...n });
        default:
            return null;
    }
}
