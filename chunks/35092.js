n.d(t, { A: () => U });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(575593),
    o = n(158954),
    d = n(417597),
    c = n(793574),
    u = n(688810),
    h = n(587895),
    A = n(44120),
    _ = n(532794),
    m = n(317560),
    p = n(533406),
    g = n(183555),
    f = n(661492),
    E = n(146423),
    x = n(662349),
    I = n(216020),
    C = n(479026),
    N = n(699976),
    T = n(652215),
    S = n(788868),
    b = n(518477),
    y = n(985018),
    v = n(80223),
    R = n(997990);
let j = N.Z.SIZE_90;
function O(e) {
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
        { trackUserProfileWishlistAction: p } = (0, g.NJ)(),
        C = l.useCallback(() => {
            p({
                action: b.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: s,
                productLines: new Set([t.productLine]),
            }),
                A();
        }, [t, s, A, p]),
        N = l.useCallback(() => {
            p({
                action: b.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: s,
                productLines: new Set([t.productLine]),
            }),
                _();
        }, [_, t.id, s, t.productLine, p]),
        {
            label: T,
            icon: S,
            isPromptingPurchase: R,
        } = (0, x.h)({
            sku: t,
            wishlistOwner: n,
            isOwned: !1,
            shortText: !0,
            location: "DM Side Panel Wishlist Item Card",
        }),
        [O, L] = l.useState(!1);
    return (0, i.jsxs)(o.BJc, {
        direction: "horizontal",
        gap: 8,
        align: "center",
        fullWidth: !1,
        children: [
            (0, i.jsx)("div", {
                className: v.kL,
                children: (0, i.jsx)(E.A, {
                    disableHoverOrFocus: !0,
                    disableRiveHover: h,
                    sku: t,
                    user: n,
                    spec: j,
                    cardStyle: a()(v.Nr, v.Q1, d),
                    skuPreviewStyle: a()(v.ho, c),
                    skuAssetClassName: O ? u : void 0,
                    onClick: C,
                    "aria-label": y.intl.formatToPlainString(y.t.ZBB4Ty, { productName: (0, f.TC)(t) }),
                    onHoverOrFocusChange: L,
                    children: (0, i.jsx)(x.A, {
                        spec: j,
                        onClick: R ? N : C,
                        isHoveringOrFocusing: O,
                        label: T,
                        icon: S,
                    }),
                }),
            }),
            r && (0, i.jsx)(I.A, { title: m.title, description: m.description, onClick: C }),
        ],
    });
}
function L(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: s, ...a } = e,
        r = (0, d.bG)([h.A], () => h.A.getApplication(t.applicationId)),
        { analyticsLocations: o } = (0, u.Ay)(
            ...(s ?? []),
            c.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        A = l.useCallback(() => {
            (0, p.a)(
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
        g = l.useMemo(
            () => ({ title: t.name, description: y.intl.format(y.t["CqpEC+"], { applicationName: r?.name }) }),
            [t.name, r?.name],
        );
    return (0, i.jsx)(O, {
        sku: t,
        analyticsLocations: o,
        wishlistOwner: n,
        onDetailsClick: _,
        onPurchaseClick: A,
        singleCardInfo: g,
        ...a,
    });
}
function M(e) {
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
                    return a()(v.ML, v._P);
                default:
                    return a()(v.ML, v.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]),
        h = l.useMemo(
            () => ({
                title: t.name,
                description: (function (e) {
                    if (e.tenantMetadata?.collectibles == null) return "";
                    if (null != e.bundledSkus && e.bundledSkus.length > 0) return y.intl.string(y.t.Zr5tjn);
                    switch (e.tenantMetadata.collectibles.type) {
                        case r.R.AVATAR_DECORATION:
                            return y.intl.string(y.t["7v0T9P"]);
                        case r.R.PROFILE_EFFECT:
                            return y.intl.string(y.t.wR5wOo);
                        case r.R.NAMEPLATE:
                            return y.intl.string(y.t.x5CoXR);
                        default:
                            return "";
                    }
                })(t),
            }),
            [t],
        );
    return (0, i.jsx)(O, {
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
        o = l.useMemo(() => ({ title: t.name, description: y.intl.string(y.t.Ipxkog) }), [t.name]);
    return (0, i.jsx)(O, {
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
function U(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(L, { sku: t, ...n });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(M, { sku: t, ...n });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(D, { sku: t, ...n });
        default:
            return null;
    }
}
