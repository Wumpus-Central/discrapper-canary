t.d(s, { J: () => b });
var i = t(627968),
    n = t(64700),
    a = t(503698),
    r = t.n(a),
    l = t(575593),
    u = t(691540),
    o = t(857250),
    c = t(97483),
    d = t(765178),
    m = t(793574),
    g = t(688810),
    h = t(183555),
    f = t(661492),
    I = t(808247),
    A = t(146423),
    v = t(460442),
    x = t(699976),
    E = t(652215),
    y = t(518477),
    p = t(985018),
    S = t(316587),
    M = t(997990);
let _ = x.Z.SIZE_90;
function j(e) {
    let {
            sku: s,
            wishlistOwner: t,
            style: a,
            skuPreviewStyle: l,
            setIsHoveringOrFocusing: u,
            onClick: o,
            "aria-label": c,
            wishlistId: d,
            children: m,
        } = e,
        { trackUserProfileWishlistAction: g } = (0, h.NJ)(),
        f = n.useCallback(() => {
            g({
                wishlistId: d,
                action: y.Mq.WISHLIST_ITEM_CLICKED,
                skuId: s.id,
                productLines: new Set([s.productLine]),
            }),
                o();
        }, [o, s.id, s.productLine, g, d]);
    return (0, i.jsx)(A.A, {
        sku: s,
        user: t,
        spec: _,
        cardStyle: r()(S.Nr, a),
        skuPreviewStyle: r()(S.ev, l),
        onHoverOrFocusChange: u,
        onClick: f,
        "aria-label": c,
        children: m,
    });
}
function k(e) {
    let {
            sku: s,
            analyticsLocations: t,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: l,
            skuPreviewStyle: m,
            wishlistOwner: g,
            ...h
        } = e,
        [A, x] = n.useState(!1),
        E = n.useCallback(async () => {
            if (!A) {
                x(!0);
                try {
                    await I.A.addSkuToWishlist(s.id, t), l?.({ tabSection: y.RP.WISHLIST });
                } catch (e) {
                    (0, u.P0)((0, o.o)(p.intl.string(p.t.F8FvUy), c.Ck.FAILURE)),
                        d.O.announce(p.intl.string(p.t.F8FvUy));
                } finally {
                    x(!1);
                }
            }
        }, [s, t, A, l]),
        M = n.useMemo(() => r()({ [S.zW]: a || A }, m), [a, A, m]);
    return (0, i.jsx)(j, {
        "aria-label": p.intl.formatToPlainString(p.t.xRjJBe, { productName: (0, f.TC)(s) }),
        sku: s,
        wishlistOwner: g,
        skuPreviewStyle: M,
        onClick: E,
        isHoveringOrFocusing: a,
        ...h,
        children: (0, i.jsx)(v.oU, { isHoveringOrFocusing: a, loading: A }),
    });
}
function L(e) {
    let { sku: s, analyticsLocations: t, ...n } = e,
        { analyticsLocations: a } = (0, g.Ay)(...(t ?? []), m.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD);
    return (0, i.jsx)(k, { sku: s, analyticsLocations: a, ...n });
}
function C(e) {
    let { sku: s, ...t } = e,
        a = n.useMemo(() => {
            switch (s?.tenantMetadata?.collectibles?.type) {
                case l.R.PROFILE_EFFECT:
                case l.R.NAMEPLATE:
                    return;
                case l.R.AVATAR_DECORATION:
                    return S.ML;
                default:
                    return r()(S.ML, S.ZY);
            }
        }, [s?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(k, { sku: s, skuPreviewStyle: a, ...t });
}
function R(e) {
    let { sku: s, ...t } = e;
    return (0, i.jsx)(k, { sku: s, skuPreviewStyle: M.MO, ...t });
}
function b(e) {
    let { sku: s, ...t } = e,
        [a, r] = n.useState(!1);
    switch (s.productLine) {
        case E.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(L, { sku: s, isHoveringOrFocusing: a, setIsHoveringOrFocusing: r, ...t });
        case E.EZt.COLLECTIBLES:
            return (0, i.jsx)(C, { sku: s, isHoveringOrFocusing: a, setIsHoveringOrFocusing: r, ...t });
        case E.EZt.PREMIUM:
            return (0, i.jsx)(R, { sku: s, isHoveringOrFocusing: a, setIsHoveringOrFocusing: r, ...t });
        default:
            return null;
    }
}
