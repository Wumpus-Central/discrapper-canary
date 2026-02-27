n.d(t, { J: () => b });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(435371),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(183555),
    m = n(808247),
    g = n(146423),
    x = n(460442),
    f = n(699976),
    p = n(652215),
    h = n(518477),
    _ = n(985018),
    A = n(614094);
let I = f.Z.SIZE_90;
function j(e) {
    let {
            sku: t,
            wishlistOwner: n,
            style: a,
            skuPreviewStyle: r,
            setIsHoveringOrFocusing: o,
            onClick: c,
            wishlistId: d,
            children: m,
        } = e,
        { trackUserProfileWishlistAction: x } = (0, u.NJ)(),
        f = l.useCallback(() => {
            x({
                wishlistId: d,
                action: h.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                c();
        }, [c, t.id, t.productLine, x, d]);
    return (0, i.jsx)(g.A, {
        sku: t,
        user: n,
        spec: I,
        cardStyle: s()(A.Nr, a),
        skuPreviewStyle: s()(A.ev, r),
        onHoverOrFocusChange: o,
        onClick: f,
        children: m,
    });
}
function v(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: c,
            skuPreviewStyle: d,
            wishlistOwner: u,
            ...g
        } = e,
        [f, p] = l.useState(!1),
        I = l.useCallback(async () => {
            if (!f) {
                p(!0);
                try {
                    await m.A.addSkuToWishlist(t.id, n), c?.({ tabSection: h.RP.WISHLIST });
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(_.intl.string(_.t.F8FvUy), o.ToastType.FAILURE)),
                        o.ORC.announce(_.intl.string(_.t.F8FvUy));
                } finally {
                    p(!1);
                }
            }
        }, [t, n, f, c]),
        v = l.useMemo(() => s()({ [A.zW]: a || f }, d), [a, f, d]);
    return (0, i.jsx)(r.m_, {
        text: _.intl.string(_.t["8DkMEQ"]),
        children: (0, i.jsx)(o.sqX, {
            "aria-label": t.name,
            onClick: I,
            children: (0, i.jsx)(j, {
                sku: t,
                wishlistOwner: u,
                skuPreviewStyle: v,
                onClick: I,
                isHoveringOrFocusing: a,
                ...g,
                children: (0, i.jsx)(x.oU, { isHoveringOrFocusing: a, loading: f }),
            }),
        }),
    });
}
function E(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: a } = (0, d.Ay)(...(n ?? []), c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, i.jsx)(v, { sku: t, analyticsLocations: a, ...l });
}
function T(e) {
    return (0, i.jsx)(v, { ...e });
}
function b(e) {
    let { sku: t, ...n } = e,
        [a, s] = l.useState(!1);
    switch (t.productLine) {
        case p.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(E, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        case p.EZt.COLLECTIBLES:
            return (0, i.jsx)(T, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
