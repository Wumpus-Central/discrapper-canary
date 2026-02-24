n.d(t, { D: () => U, J: () => w });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(575593),
    o = n(635358),
    c = n(311907),
    d = n(435371),
    u = n(397927),
    g = n(793574),
    m = n(688810),
    x = n(587895),
    f = n(576030),
    p = n(44120),
    h = n(533406),
    _ = n(183555),
    A = n(808247),
    I = n(594832),
    j = n(146423),
    v = n(460442),
    E = n(662349),
    T = n(699976),
    b = n(652215),
    y = n(788868),
    N = n(518477),
    S = n(985018),
    C = n(614094);
function k(e) {
    let {
            sku: t,
            wishlistOwner: n,
            style: a,
            skuPreviewStyle: r,
            setIsHoveringOrFocusing: o,
            onClick: c,
            wishlistId: d,
            children: u,
        } = e,
        { trackUserProfileWishlistAction: g } = (0, _.NJ)(),
        m = l.useCallback(() => {
            g({
                wishlistId: d,
                action: N.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                c();
        }, [c, t.id, t.productLine, g, d]);
    return (0, i.jsx)(j.A, {
        sku: t,
        user: n,
        spec: T.Z.SIZE_90,
        cardStyle: s()(C.Nr, a),
        skuPreviewStyle: s()(C.ev, r),
        onHoverOrFocusChange: o,
        onClick: m,
        children: u,
    });
}
function R(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: r,
            tooltipIcon: o,
            skuPreviewStyle: c,
            wishlistOwner: g,
            ...m
        } = e,
        [x, f] = l.useState(!1),
        p = l.useCallback(async () => {
            if (!x) {
                f(!0);
                try {
                    await A.A.addSkuToWishlist(t.id, n), r?.({ tabSection: N.RP.WISHLIST });
                } catch (e) {
                    (0, u.showToast)((0, u.createToast)(S.intl.string(S.t.F8FvUy), u.ToastType.FAILURE)),
                        u.ORC.announce(S.intl.string(S.t.F8FvUy));
                } finally {
                    f(!1);
                }
            }
        }, [t, n, x, r]),
        h = l.useMemo(() => s()({ [C.zW]: a || x }, c), [a, x, c]);
    return (0, i.jsx)(d.un, {
        title: S.intl.string(S.t["8DkMEQ"]),
        body: t.name,
        asset: o,
        assetSize: I.Q8,
        children: (0, i.jsx)(u.sqX, {
            "aria-label": t.name,
            onClick: p,
            children: (0, i.jsx)(k, {
                sku: t,
                wishlistOwner: g,
                skuPreviewStyle: h,
                onClick: p,
                isHoveringOrFocusing: a,
                ...m,
                children: (0, i.jsx)(v.oU, { isHoveringOrFocusing: a, loading: x }),
            }),
        }),
    });
}
function O(e) {
    let { sku: t, analyticsLocations: n, ...a } = e,
        s = (0, c.bG)([x.A], () => x.A.getApplication(t.applicationId)),
        { analyticsLocations: r } = (0, m.Ay)(...(n ?? []), g.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        o = l.useMemo(() => (0, i.jsx)(f.mW, { application: s }), [s]);
    return (0, i.jsx)(R, { sku: t, analyticsLocations: r, tooltipIcon: o, ...a });
}
function L(e) {
    return (0, i.jsx)(R, { ...e });
}
function w(e) {
    let { sku: t, ...n } = e,
        [a, s] = l.useState(!1);
    switch (t.productLine) {
        case b.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(O, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        case b.EZt.COLLECTIBLES:
            return (0, i.jsx)(L, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
function P(e) {
    let { sku: t, wishlistOwner: n, isHoveringOrFocusing: l, onClick: a, skuPreviewStyle: s, ...r } = e,
        { label: o, icon: c } = (0, E.hB)({
            sku: t,
            wishlistOwner: n,
            isOwned: !1,
            hideIcon: !0,
            location: "Other User Profile Wishlist Item Card",
        });
    return (0, i.jsx)(k, {
        sku: t,
        wishlistOwner: n,
        skuPreviewStyle: s,
        onClick: a,
        isHoveringOrFocusing: l,
        ...r,
        children: (0, i.jsx)(E.AJ, { onClick: a, isHoveringOrFocusing: l, label: o, icon: c }),
    });
}
function D(e) {
    let { sku: t, wishlistOwner: n, giftingOrigin: a, analyticsLocations: s, ...r } = e,
        { analyticsLocations: o } = (0, m.Ay)(
            ...(s ?? []),
            g.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD,
            g.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        c = l.useCallback(() => {
            (0, h.a)(t, { isGift: !0, giftRecipient: n, giftingOrigin: a }, { analyticsLocations: o });
        }, [t, n, a, o]);
    return (0, i.jsx)(P, { sku: t, wishlistOwner: n, giftingOrigin: a, analyticsLocations: o, onClick: c, ...r });
}
function G(e) {
    let { sku: t, wishlistOwner: n, giftingOrigin: a, analyticsLocations: s, isHoveringOrFocusing: c, ...d } = e,
        u = l.useCallback(() => {
            (0, p.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: a,
                analyticsLocations: s ?? [],
                giftRecipient: n,
                variantsReturnStyle: o.g.VARIANTS_GROUP,
            });
        }, [t, n, a, s]),
        g = l.useMemo(() => {
            if (c && t.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT) return C.mn;
        }, [t.tenantMetadata?.collectibles?.type, c]);
    return (0, i.jsx)(P, {
        sku: t,
        isHoveringOrFocusing: c,
        wishlistOwner: n,
        giftingOrigin: a,
        analyticsLocations: s,
        onClick: u,
        skuPreviewStyle: g,
        ...d,
    });
}
function U(e) {
    let { sku: t, giftingOrigin: n = y.vQ.USER_PROFILE_WISHLIST, ...a } = e,
        [s, r] = l.useState(!1);
    switch (t.productLine) {
        case b.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(D, {
                sku: t,
                giftingOrigin: n,
                isHoveringOrFocusing: s,
                setIsHoveringOrFocusing: r,
                ...a,
            });
        case b.EZt.COLLECTIBLES:
            return (0, i.jsx)(G, {
                sku: t,
                giftingOrigin: n,
                isHoveringOrFocusing: s,
                setIsHoveringOrFocusing: r,
                ...a,
            });
        default:
            return null;
    }
}
