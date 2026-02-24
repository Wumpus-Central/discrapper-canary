"use strict";
n.d(t, { A: () => k });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(575593),
    o = n(635358),
    c = n(417597),
    d = n(554146),
    u = n(192308),
    h = n(342494),
    A = n(435371),
    p = n(793574),
    g = n(688810),
    m = n(587895),
    _ = n(576030),
    f = n(379848),
    x = n(44120),
    C = n(916023),
    E = n(533406),
    I = n(183555),
    b = n(186111),
    N = n(594832),
    S = n(146423),
    T = n(699976),
    y = n(652215),
    v = n(49999),
    j = n(788868),
    R = n(188275),
    O = n(518477),
    L = n(985018),
    M = n(556786),
    D = n(585048);
let G = s.forwardRef(function (e, t) {
    let {
            sku: n,
            wishlistOwner: l,
            wishlistId: a,
            style: o,
            tooltipTypeTitle: c,
            showTypeTooltip: d,
            tooltipIcon: u,
            skuPreviewStyle: h,
            onClick: p,
        } = e,
        { trackUserProfileWishlistAction: g } = (0, I.NJ)(),
        m = s.useCallback(() => {
            g({
                action: O.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: a,
                productLines: new Set([n.productLine]),
            }),
                p();
        }, [n, a, p, g]),
        _ = s.useMemo(() => (d ? c : L.intl.string(L.t.pLPjsb)), [d, c]),
        f = s.useMemo(() => (d ? L.intl.string(L.t.ilhtIa) : ""), [d]);
    return (0, i.jsx)("div", {
        className: M.kL,
        ref: t,
        children: (0, i.jsx)(A.un, {
            asContainer: !0,
            asset: u,
            assetSize: N.Q8,
            title: _,
            body: f,
            children: (0, i.jsx)("div", {
                className: M.Ui,
                children: (0, i.jsx)(S.A, {
                    disableHoverOrFocus: !0,
                    sku: n,
                    user: l,
                    spec: T.Z.SIZE_90,
                    cardStyle: r()(M.Nr, M.Q1, o),
                    skuPreviewStyle: r()(M.ho, h),
                    onClick: m,
                }),
            }),
        }),
    });
});
function U(e) {
    let { targetElementRef: t, onRequestClose: n, onActionClick: s } = e;
    return (0, i.jsx)(h.AM, {
        size: "lg",
        shouldShow: !0,
        position: "left",
        caretConfig: { align: "center" },
        gradientColor: "blue",
        align: "center",
        onRequestClose: n,
        actions: [{ text: L.intl.string(L.t.uB4Gax), variant: "primary", onClick: s }],
        targetElementRef: t,
        title: L.intl.string(L.t.qh9t5c),
        body: L.intl.string(L.t.iM6fxV),
        graphic: { type: "image", src: D.A },
    });
}
function P(e) {
    let { sku: t, wishlistOwner: n, index: l, onViewWishlist: r, analyticsLocations: a, ...o } = e,
        h = (0, c.bG)([m.A], () => m.A.getApplication(t.applicationId)),
        { analyticsLocations: A } = (0, g.Ay)(
            ...(a ?? []),
            p.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        x = (0, C.Jw)({ location: "dm-side-panel-social-layer-storefront-wishlist-item-card" }),
        I = (0, u.useHasAnyModalOpen)(),
        N = (0, c.bG)([b.A], () => b.A.hasLayers()),
        [S, T] = (0, f.kn)(
            !x || 0 !== l || t.applicationId !== R.XR || I || N ? [] : [d.M.GAME_SHOP_WISHLIST_POPOVER],
            v.m.SIDEBAR,
            !0,
        ),
        y = s.useRef(null),
        O = s.useCallback(() => {
            T(v.i.USER_DISMISS),
                (0, E.a)(
                    t,
                    { isGift: !0, giftRecipient: n, giftingOrigin: j.vQ.USER_PROFILE_WISHLIST },
                    { analyticsLocations: A },
                );
        }, [T, t, n, A]),
        M = s.useCallback(() => {
            T(v.i.USER_DISMISS);
        }, [T]),
        D = s.useCallback(() => {
            T(v.i.USER_DISMISS), r();
        }, [r, T]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(G, {
                ref: y,
                sku: t,
                index: l,
                onViewWishlist: r,
                analyticsLocations: A,
                wishlistOwner: n,
                onClick: O,
                tooltipTypeTitle: L.intl.string(L.t["4yiU7x"]),
                tooltipIcon: (0, i.jsx)(_.mW, { application: h }),
                ...o,
            }),
            S === d.M.GAME_SHOP_WISHLIST_POPOVER &&
                (0, i.jsx)(U, { targetElementRef: y, onRequestClose: M, onActionClick: D }),
        ],
    });
}
function w(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: l, showTypeTooltip: c, ...d } = e,
        u = s.useCallback(() => {
            (0, x.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: j.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: l ?? [],
                giftRecipient: n,
                variantsReturnStyle: o.g.VARIANTS_GROUP,
            });
        }, [t.id, n, l]),
        h = s.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case a.R.PROFILE_EFFECT:
                    return;
                case a.R.AVATAR_DECORATION:
                    return r()(M.ML, M._P);
                default:
                    return r()(M.ML, M.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(G, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: l,
        onClick: u,
        showTypeTooltip: c,
        skuPreviewStyle: h,
        tooltipTypeTitle: L.intl.string(L.t.HFhcqh),
        tooltipIcon: c ? (0, i.jsx)(_.mW, {}) : void 0,
        ...d,
    });
}
function k(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case y.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(P, { sku: t, ...n });
        case y.EZt.COLLECTIBLES:
            return (0, i.jsx)(w, { sku: t, ...n });
        default:
            return null;
    }
}
