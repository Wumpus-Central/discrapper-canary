n.d(t, { J: () => S });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(435371),
    c = n(397927),
    d = n(793574),
    u = n(688810),
    m = n(587895),
    g = n(576030),
    x = n(183555),
    f = n(808247),
    p = n(594832),
    h = n(146423),
    _ = n(460442),
    A = n(699976),
    I = n(652215),
    j = n(518477),
    v = n(985018),
    E = n(366096);
let T = A.Z.SIZE_90;
function b(e) {
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
        { trackUserProfileWishlistAction: m } = (0, x.NJ)(),
        g = l.useCallback(() => {
            m({
                wishlistId: d,
                action: j.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                c();
        }, [c, t.id, t.productLine, m, d]);
    return (0, i.jsx)(h.A, {
        sku: t,
        user: n,
        spec: T,
        cardStyle: s()(E.Nr, a),
        skuPreviewStyle: s()(E.ev, r),
        onHoverOrFocusChange: o,
        onClick: g,
        children: u,
    });
}
function y(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: a,
            handleOpenUserProfileModal: r,
            tooltipIcon: d,
            skuPreviewStyle: u,
            wishlistOwner: m,
            ...g
        } = e,
        [x, h] = l.useState(!1),
        A = l.useCallback(async () => {
            if (!x) {
                h(!0);
                try {
                    await f.A.addSkuToWishlist(t.id, n), r?.({ tabSection: j.RP.WISHLIST });
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(v.intl.string(v.t.F8FvUy), c.ToastType.FAILURE)),
                        c.ORC.announce(v.intl.string(v.t.F8FvUy));
                } finally {
                    h(!1);
                }
            }
        }, [t, n, x, r]),
        I = l.useMemo(() => s()({ [E.zW]: a || x }, u), [a, x, u]);
    return (0, i.jsx)(o.un, {
        title: v.intl.string(v.t["8DkMEQ"]),
        body: t.name,
        asset: d,
        assetSize: p.Q8,
        children: (0, i.jsx)(c.sqX, {
            "aria-label": t.name,
            onClick: A,
            children: (0, i.jsx)(b, {
                sku: t,
                wishlistOwner: m,
                skuPreviewStyle: I,
                onClick: A,
                isHoveringOrFocusing: a,
                ...g,
                children: (0, i.jsx)(_.oU, { isHoveringOrFocusing: a, loading: x }),
            }),
        }),
    });
}
function N(e) {
    let { sku: t, analyticsLocations: n, ...a } = e,
        s = (0, r.bG)([m.A], () => m.A.getApplication(t.applicationId)),
        { analyticsLocations: o } = (0, u.Ay)(...(n ?? []), d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        c = l.useMemo(() => (0, i.jsx)(g.mW, { application: s }), [s]);
    return (0, i.jsx)(y, { sku: t, analyticsLocations: o, tooltipIcon: c, ...a });
}
function C(e) {
    return (0, i.jsx)(y, { ...e });
}
function S(e) {
    let { sku: t, ...n } = e,
        [a, s] = l.useState(!1);
    switch (t.productLine) {
        case I.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(N, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        case I.EZt.COLLECTIBLES:
            return (0, i.jsx)(C, { sku: t, isHoveringOrFocusing: a, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
