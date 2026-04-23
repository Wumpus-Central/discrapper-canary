n.d(t, { J: () => M });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(575593),
    o = n(691540),
    u = n(857250),
    c = n(97483),
    d = n(765178),
    _ = n(793574),
    E = n(688810),
    S = n(274681),
    p = n(183555),
    h = n(661492),
    A = n(808247),
    I = n(146423),
    m = n(460442),
    f = n(699976),
    T = n(652215),
    R = n(518477),
    g = n(985018),
    y = n(316587),
    v = n(997990);
let L = f.Z.SIZE_90;
function N(e) {
    let {
            sku: t,
            wishlistOwner: n,
            style: a,
            skuPreviewStyle: l,
            setIsHoveringOrFocusing: o,
            onClick: u,
            "aria-label": c,
            wishlistId: d,
            children: _,
        } = e,
        { trackUserProfileWishlistAction: E } = (0, p.NJ)(),
        S = s.useCallback(() => {
            E({
                wishlistId: d,
                action: R.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                u();
        }, [u, t.id, t.productLine, E, d]);
    return (0, i.jsx)(I.A, {
        sku: t,
        user: n,
        spec: L,
        cardStyle: r()(y.Nr, a),
        skuPreviewStyle: r()(y.ev, l),
        onHoverOrFocusChange: o,
        onClick: S,
        "aria-label": c,
        children: _,
    });
}
function C(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: l,
            skuPreviewStyle: _,
            wishlistOwner: E,
            onAddSuccess: S,
            ...p
        } = e,
        [I, f] = s.useState(!1),
        T = s.useCallback(async () => {
            if (!I) {
                f(!0);
                try {
                    await A.A.addSkuToWishlist(t.id, n), S?.(), l?.({ tabSection: R.RP.WISHLIST });
                } catch (e) {
                    (0, o.P0)((0, u.o)(g.intl.string(g.t.F8FvUy), c.Ck.FAILURE)),
                        d.O.announce(g.intl.string(g.t.F8FvUy));
                } finally {
                    f(!1);
                }
            }
        }, [t, n, I, l, S]),
        v = s.useMemo(() => r()({ [y.zW]: a || I }, _), [a, I, _]);
    return (0, i.jsx)(N, {
        "aria-label": g.intl.formatToPlainString(g.t.xRjJBe, { productName: (0, h.TC)(t) }),
        sku: t,
        wishlistOwner: E,
        skuPreviewStyle: v,
        onClick: T,
        isHoveringOrFocusing: a,
        ...p,
        children: (0, i.jsx)(m.oU, { isHoveringOrFocusing: a, loading: I }),
    });
}
function U(e) {
    let { sku: t, analyticsLocations: n, ...s } = e,
        { analyticsLocations: a } = (0, E.Ay)(...(n ?? []), _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, i.jsx)(C, { sku: t, analyticsLocations: a, ...s });
}
function O(e) {
    let { sku: t, ...n } = e,
        a = s.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case l.R.PROFILE_EFFECT:
                case l.R.NAMEPLATE:
                    return;
                case l.R.AVATAR_DECORATION:
                    return y.ML;
                default:
                    return r()(y.ML, y.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(C, { sku: t, skuPreviewStyle: a, ...n });
}
function x(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(C, { sku: t, skuPreviewStyle: v.MO, onAddSuccess: S.w, ...n });
}
function M(e) {
    let { sku: t, ...n } = e,
        [a, r] = s.useState(!1);
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(U, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: r, ...n });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(O, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: r, ...n });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(x, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: r, ...n });
        default:
            return null;
    }
}
