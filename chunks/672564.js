n.d(t, { J: () => N });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(575593),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(183555),
    g = n(661492),
    m = n(808247),
    x = n(146423),
    p = n(460442),
    f = n(699976),
    h = n(652215),
    _ = n(518477),
    A = n(985018),
    I = n(353787),
    j = n(913110);
let v = f.Z.SIZE_90;
function E(e) {
    let {
            sku: t,
            wishlistOwner: n,
            style: a,
            skuPreviewStyle: r,
            setIsHoveringOrFocusing: o,
            onClick: c,
            "aria-label": d,
            wishlistId: g,
            children: m,
        } = e,
        { trackUserProfileWishlistAction: p } = (0, u.NJ)(),
        f = l.useCallback(() => {
            p({
                wishlistId: g,
                action: _.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                c();
        }, [c, t.id, t.productLine, p, g]);
    return (0, i.jsx)(x.A, {
        sku: t,
        user: n,
        spec: v,
        cardStyle: s()(I.Nr, a),
        skuPreviewStyle: s()(I.ev, r),
        onHoverOrFocusChange: o,
        onClick: f,
        "aria-label": d,
        children: m,
    });
}
function T(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: r,
            skuPreviewStyle: c,
            wishlistOwner: d,
            ...u
        } = e,
        [x, f] = l.useState(!1),
        h = l.useCallback(async () => {
            if (!x) {
                f(!0);
                try {
                    await m.A.addSkuToWishlist(t.id, n), r?.({ tabSection: _.RP.WISHLIST });
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(A.intl.string(A.t.F8FvUy), o.ToastType.FAILURE)),
                        o.ORC.announce(A.intl.string(A.t.F8FvUy));
                } finally {
                    f(!1);
                }
            }
        }, [t, n, x, r]),
        j = l.useMemo(() => s()({ [I.zW]: a || x }, c), [a, x, c]);
    return (0, i.jsx)(E, {
        "aria-label": A.intl.formatToPlainString(A.t.xRjJBe, { productName: (0, g.TC)(t) }),
        sku: t,
        wishlistOwner: d,
        skuPreviewStyle: j,
        onClick: h,
        isHoveringOrFocusing: a,
        ...u,
        children: (0, i.jsx)(p.oU, { isHoveringOrFocusing: a, loading: x }),
    });
}
function b(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: a } = (0, d.Ay)(...(n ?? []), c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, i.jsx)(T, { sku: t, analyticsLocations: a, ...l });
}
function C(e) {
    let { sku: t, ...n } = e,
        a = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case r.R.PROFILE_EFFECT:
                case r.R.NAMEPLATE:
                    return;
                case r.R.AVATAR_DECORATION:
                    return I.ML;
                default:
                    return s()(I.ML, I.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(T, { sku: t, skuPreviewStyle: a, ...n });
}
function S(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(T, { sku: t, skuPreviewStyle: j.MO, ...n });
}
function N(e) {
    let { sku: t, ...n } = e,
        [a, s] = l.useState(!1);
    switch (t.productLine) {
        case h.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(b, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        case h.EZt.COLLECTIBLES:
            return (0, i.jsx)(C, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        case h.EZt.PREMIUM:
            return (0, i.jsx)(S, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
