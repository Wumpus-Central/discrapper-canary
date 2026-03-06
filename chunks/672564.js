n.d(t, { J: () => T });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(397927),
    o = n(793574),
    d = n(688810),
    c = n(183555),
    u = n(808247),
    m = n(146423),
    g = n(460442),
    x = n(699976),
    f = n(652215),
    p = n(518477),
    h = n(985018),
    _ = n(366096);
let A = x.Z.SIZE_90;
function I(e) {
    let {
            sku: t,
            wishlistOwner: n,
            style: a,
            skuPreviewStyle: r,
            setIsHoveringOrFocusing: o,
            onClick: d,
            wishlistId: u,
            children: g,
        } = e,
        { trackUserProfileWishlistAction: x } = (0, c.NJ)(),
        f = l.useCallback(() => {
            x({
                wishlistId: u,
                action: p.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                d();
        }, [d, t.id, t.productLine, x, u]);
    return (0, i.jsx)(m.A, {
        sku: t,
        user: n,
        spec: A,
        cardStyle: s()(_.Nr, a),
        skuPreviewStyle: s()(_.ev, r),
        onHoverOrFocusChange: o,
        onClick: f,
        children: g,
    });
}
function j(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: o,
            skuPreviewStyle: d,
            wishlistOwner: c,
            ...m
        } = e,
        [x, f] = l.useState(!1),
        A = l.useCallback(async () => {
            if (!x) {
                f(!0);
                try {
                    await u.A.addSkuToWishlist(t.id, n), o?.({ tabSection: p.RP.WISHLIST });
                } catch (e) {
                    (0, r.showToast)((0, r.createToast)(h.intl.string(h.t.F8FvUy), r.ToastType.FAILURE)),
                        r.ORC.announce(h.intl.string(h.t.F8FvUy));
                } finally {
                    f(!1);
                }
            }
        }, [t, n, x, o]),
        j = l.useMemo(() => s()({ [_.zW]: a || x }, d), [a, x, d]);
    return (0, i.jsx)(r.sqX, {
        "aria-label": t.name,
        onClick: A,
        children: (0, i.jsx)(I, {
            sku: t,
            wishlistOwner: c,
            skuPreviewStyle: j,
            onClick: A,
            isHoveringOrFocusing: a,
            ...m,
            children: (0, i.jsx)(g.oU, { isHoveringOrFocusing: a, loading: x }),
        }),
    });
}
function v(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: a } = (0, d.Ay)(...(n ?? []), o.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, i.jsx)(j, { sku: t, analyticsLocations: a, ...l });
}
function E(e) {
    return (0, i.jsx)(j, { ...e });
}
function T(e) {
    let { sku: t, ...n } = e,
        [a, s] = l.useState(!1);
    switch (t.productLine) {
        case f.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(v, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        case f.EZt.COLLECTIBLES:
            return (0, i.jsx)(E, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
