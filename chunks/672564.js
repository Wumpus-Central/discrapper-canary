s.d(e, { D: () => M, J: () => w });
var n = s(627968),
    t = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(575593),
    c = s(635358),
    o = s(311907),
    u = s(435371),
    d = s(397927),
    g = s(793574),
    A = s(688810),
    E = s(587895),
    I = s(576030),
    O = s(44120),
    L = s(533406),
    v = s(183555),
    S = s(808247),
    _ = s(594832),
    T = s(146423),
    f = s(460442),
    m = s(662349),
    R = s(652215),
    x = s(788868),
    k = s(518477),
    C = s(985018),
    j = s(614094);
function F(i) {
    let {
            sku: e,
            wishlistOwner: s,
            style: a,
            skuPreviewStyle: r,
            setIsHoveringOrFocusing: c,
            onClick: o,
            wishlistId: u,
            children: d,
        } = i,
        { trackUserProfileWishlistAction: g } = (0, v.NJ)(),
        A = t.useCallback(() => {
            g({
                wishlistId: u,
                action: k.Mq.WISHLIST_ITEM_CLICKED,
                skuId: e.id,
                productLines: new Set([e.productLine]),
            }),
                o();
        }, [o, e.id, e.productLine, g, u]);
    return (0, n.jsx)(T.A, {
        sku: e,
        user: s,
        cardStyle: l()(j.Nr, a),
        skuPreviewStyle: l()(j.ev, r),
        onHoverOrFocusChange: c,
        onClick: A,
        children: d,
    });
}
function p(i) {
    let {
            sku: e,
            analyticsLocations: s,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: r,
            tooltipIcon: c,
            skuPreviewStyle: o,
            wishlistOwner: g,
            ...A
        } = i,
        [E, I] = t.useState(!1),
        O = t.useCallback(async () => {
            if (!E) {
                I(!0);
                try {
                    await S.A.addSkuToWishlist(e.id, s), r?.({ tabSection: k.RP.WISHLIST });
                } catch (i) {
                    (0, d.showToast)((0, d.createToast)(C.intl.string(C.t.F8FvUy), d.ToastType.FAILURE)),
                        d.ORC.announce(C.intl.string(C.t.F8FvUy));
                } finally {
                    I(!1);
                }
            }
        }, [e, s, E, r]),
        L = t.useMemo(() => l()({ [j.zW]: a || E }, o), [a, E, o]);
    return (0, n.jsx)(u.un, {
        title: C.intl.string(C.t["8DkMEQ"]),
        body: e.name,
        asset: c,
        assetSize: _.Q8,
        children: (0, n.jsx)(d.sqX, {
            "aria-label": e.name,
            onClick: O,
            children: (0, n.jsx)(F, {
                sku: e,
                wishlistOwner: g,
                skuPreviewStyle: L,
                onClick: O,
                isHoveringOrFocusing: a,
                ...A,
                children: (0, n.jsx)(f.oU, { isHoveringOrFocusing: a, loading: E }),
            }),
        }),
    });
}
function h(i) {
    let { sku: e, analyticsLocations: s, ...a } = i,
        l = (0, o.bG)([E.A], () => E.A.getApplication(e.applicationId)),
        { analyticsLocations: r } = (0, A.Ay)(...(s ?? []), g.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        c = t.useMemo(() => (0, n.jsx)(I.mW, { application: l }), [l]);
    return (0, n.jsx)(p, { sku: e, analyticsLocations: r, tooltipIcon: c, ...a });
}
function N(i) {
    return (0, n.jsx)(p, { ...i });
}
function w(i) {
    let { sku: e, ...s } = i,
        [a, l] = t.useState(!1);
    switch (e.productLine) {
        case R.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(h, { sku: e, isHoveringOrFocusing: a, setIsHoveringOrFocusing: l, ...s });
        case R.EZt.COLLECTIBLES:
            return (0, n.jsx)(N, { sku: e, isHoveringOrFocusing: a, setIsHoveringOrFocusing: l, ...s });
        default:
            return null;
    }
}
function y(i) {
    let { sku: e, wishlistOwner: s, isHoveringOrFocusing: t, onClick: a, skuPreviewStyle: l, ...r } = i;
    return (0, n.jsx)(F, {
        sku: e,
        wishlistOwner: s,
        skuPreviewStyle: l,
        onClick: a,
        isHoveringOrFocusing: t,
        ...r,
        children: (0, n.jsx)(m.A, { onClick: a, isHoveringOrFocusing: t, wishlistOwner: s, isOwned: !1, hideIcon: !0 }),
    });
}
function H(i) {
    let { sku: e, wishlistOwner: s, giftingOrigin: a, analyticsLocations: l, ...r } = i,
        { analyticsLocations: c } = (0, A.Ay)(
            ...(l ?? []),
            g.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            g.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = t.useCallback(() => {
            (0, L.a)(e, { isGift: !0, giftRecipient: s, giftingOrigin: a }, { analyticsLocations: c });
        }, [e, s, a, c]);
    return (0, n.jsx)(y, { sku: e, wishlistOwner: s, giftingOrigin: a, analyticsLocations: c, onClick: o, ...r });
}
function P(i) {
    let { sku: e, wishlistOwner: s, giftingOrigin: a, analyticsLocations: l, isHoveringOrFocusing: o, ...u } = i,
        d = t.useCallback(() => {
            (0, O.A)({
                skuId: e.id,
                isGift: !0,
                giftingOrigin: a,
                analyticsLocations: l ?? [],
                giftRecipient: s,
                variantsReturnStyle: c.g.VARIANTS_GROUP,
            });
        }, [e, s, a, l]),
        g = t.useMemo(() => {
            if (o && e.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT) return j.mn;
        }, [e.tenantMetadata?.collectibles?.type, o]);
    return (0, n.jsx)(y, {
        sku: e,
        isHoveringOrFocusing: o,
        wishlistOwner: s,
        giftingOrigin: a,
        analyticsLocations: l,
        onClick: d,
        skuPreviewStyle: g,
        ...u,
    });
}
function M(i) {
    let { sku: e, giftingOrigin: s = x.vQ.USER_PROFILE_WISHLIST, ...a } = i,
        [l, r] = t.useState(!1);
    switch (e.productLine) {
        case R.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(H, {
                sku: e,
                giftingOrigin: s,
                isHoveringOrFocusing: l,
                setIsHoveringOrFocusing: r,
                ...a,
            });
        case R.EZt.COLLECTIBLES:
            return (0, n.jsx)(P, {
                sku: e,
                giftingOrigin: s,
                isHoveringOrFocusing: l,
                setIsHoveringOrFocusing: r,
                ...a,
            });
        default:
            return null;
    }
}
