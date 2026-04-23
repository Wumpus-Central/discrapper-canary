t.d(s, { J: () => N });
var i = t(627968),
    n = t(64700),
    a = t(503698),
    r = t.n(a),
    l = t(575593),
    u = t(691540),
    c = t(857250),
    o = t(97483),
    d = t(765178),
    m = t(793574),
    g = t(688810),
    h = t(274681),
    f = t(183555),
    A = t(661492),
    I = t(808247),
    v = t(146423),
    x = t(460442),
    E = t(699976),
    y = t(652215),
    S = t(518477),
    p = t(985018),
    M = t(316587),
    _ = t(997990);
let j = E.Z.SIZE_90;
function k(e) {
    let {
            sku: s,
            wishlistOwner: t,
            style: a,
            skuPreviewStyle: l,
            setIsHoveringOrFocusing: u,
            onClick: c,
            "aria-label": o,
            wishlistId: d,
            children: m,
        } = e,
        { trackUserProfileWishlistAction: g } = (0, f.NJ)(),
        h = n.useCallback(() => {
            g({
                wishlistId: d,
                action: S.Mq.WISHLIST_ITEM_CLICKED,
                skuId: s.id,
                productLines: new Set([s.productLine]),
            }),
                c();
        }, [c, s.id, s.productLine, g, d]);
    return (0, i.jsx)(v.A, {
        sku: s,
        user: t,
        spec: j,
        cardStyle: r()(M.Nr, a),
        skuPreviewStyle: r()(M.ev, l),
        onHoverOrFocusChange: u,
        onClick: h,
        "aria-label": o,
        children: m,
    });
}
function L(e) {
    let {
            sku: s,
            analyticsLocations: t,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: l,
            skuPreviewStyle: m,
            wishlistOwner: g,
            onAddSuccess: h,
            ...f
        } = e,
        [v, E] = n.useState(!1),
        y = n.useCallback(async () => {
            if (!v) {
                E(!0);
                try {
                    await I.A.addSkuToWishlist(s.id, t), h?.(), l?.({ tabSection: S.RP.WISHLIST });
                } catch (e) {
                    (0, u.P0)((0, c.o)(p.intl.string(p.t.F8FvUy), o.Ck.FAILURE)),
                        d.O.announce(p.intl.string(p.t.F8FvUy));
                } finally {
                    E(!1);
                }
            }
        }, [s, t, v, l, h]),
        _ = n.useMemo(() => r()({ [M.zW]: a || v }, m), [a, v, m]);
    return (0, i.jsx)(k, {
        "aria-label": p.intl.formatToPlainString(p.t.xRjJBe, { productName: (0, A.TC)(s) }),
        sku: s,
        wishlistOwner: g,
        skuPreviewStyle: _,
        onClick: y,
        isHoveringOrFocusing: a,
        ...f,
        children: (0, i.jsx)(x.oU, { isHoveringOrFocusing: a, loading: v }),
    });
}
function C(e) {
    let { sku: s, analyticsLocations: t, ...n } = e,
        { analyticsLocations: a } = (0, g.Ay)(...(t ?? []), m.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, i.jsx)(L, { sku: s, analyticsLocations: a, ...n });
}
function R(e) {
    let { sku: s, ...t } = e,
        a = n.useMemo(() => {
            switch (s?.tenantMetadata?.collectibles?.type) {
                case l.R.PROFILE_EFFECT:
                case l.R.NAMEPLATE:
                    return;
                case l.R.AVATAR_DECORATION:
                    return M.ML;
                default:
                    return r()(M.ML, M.ZY);
            }
        }, [s?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(L, { sku: s, skuPreviewStyle: a, ...t });
}
function b(e) {
    let { sku: s, ...t } = e;
    return (0, i.jsx)(L, { sku: s, skuPreviewStyle: _.MO, onAddSuccess: h.w, ...t });
}
function N(e) {
    let { sku: s, ...t } = e,
        [a, r] = n.useState(!1);
    switch (s.productLine) {
        case y.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(C, { sku: s, isHoveringOrFocusing: a, setIsHoveringOrFocusing: r, ...t });
        case y.EZt.COLLECTIBLES:
            return (0, i.jsx)(R, { sku: s, isHoveringOrFocusing: a, setIsHoveringOrFocusing: r, ...t });
        case y.EZt.PREMIUM:
            return (0, i.jsx)(b, { sku: s, isHoveringOrFocusing: a, setIsHoveringOrFocusing: r, ...t });
        default:
            return null;
    }
}
