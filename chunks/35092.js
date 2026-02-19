n.d(t, { A: () => w });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(575593),
    o = n(635358),
    d = n(417597),
    c = n(554146),
    u = n(192308),
    h = n(342494),
    A = n(435371),
    p = n(793574),
    m = n(688810),
    g = n(587895),
    _ = n(576030),
    f = n(379848),
    x = n(44120),
    C = n(916023),
    E = n(533406),
    I = n(183555),
    b = n(186111),
    N = n(594832),
    S = n(146423),
    T = n(652215),
    v = n(49999),
    y = n(788868),
    j = n(188275),
    R = n(518477),
    O = n(985018),
    L = n(556786),
    M = n(585048);
let D = l.forwardRef(function (e, t) {
    let {
            sku: n,
            wishlistOwner: s,
            wishlistId: r,
            style: o,
            tooltipTypeTitle: d,
            showTypeTooltip: c,
            tooltipIcon: u,
            skuPreviewStyle: h,
            onClick: p,
        } = e,
        { trackUserProfileWishlistAction: m } = (0, I.NJ)(),
        g = l.useCallback(() => {
            m({
                action: R.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: n.id,
                wishlistId: r,
                productLines: new Set([n.productLine]),
            }),
                p();
        }, [n, r, p, m]),
        _ = l.useMemo(() => (c ? d : O.intl.string(O.t.pLPjsb)), [c, d]),
        f = l.useMemo(() => (c ? O.intl.string(O.t.ilhtIa) : ""), [c]);
    return (0, i.jsx)("div", {
        className: L.kL,
        ref: t,
        children: (0, i.jsx)(A.un, {
            asContainer: !0,
            asset: u,
            assetSize: N.Q8,
            title: _,
            body: f,
            children: (0, i.jsx)("div", {
                className: L.Ui,
                children: (0, i.jsx)(S.Ay, {
                    disableHoverOrFocus: !0,
                    sku: n,
                    user: s,
                    size: S.yU.SMALL,
                    cardStyle: a()(L.Nr, L.Q1, o),
                    skuPreviewStyle: a()(L.ho, h),
                    onClick: g,
                }),
            }),
        }),
    });
});
function G(e) {
    let { targetElementRef: t, onRequestClose: n, onActionClick: l } = e;
    return (0, i.jsx)(h.AM, {
        size: "lg",
        shouldShow: !0,
        position: "left",
        caretConfig: { align: "center" },
        gradientColor: "blue",
        align: "center",
        onRequestClose: n,
        actions: [{ text: O.intl.string(O.t.uB4Gax), variant: "primary", onClick: l }],
        targetElementRef: t,
        title: O.intl.string(O.t.qh9t5c),
        body: O.intl.string(O.t.iM6fxV),
        graphic: { type: "image", src: M.A },
    });
}
function U(e) {
    let { sku: t, wishlistOwner: n, index: s, onViewWishlist: a, analyticsLocations: r, ...o } = e,
        h = (0, d.bG)([g.A], () => g.A.getApplication(t.applicationId)),
        { analyticsLocations: A } = (0, m.Ay)(
            ...(r ?? []),
            p.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        x = (0, C.Jw)({ location: "dm-side-panel-social-layer-storefront-wishlist-item-card" }),
        I = (0, u.useHasAnyModalOpen)(),
        N = (0, d.bG)([b.A], () => b.A.hasLayers()),
        [S, T] = (0, f.kn)(
            !x || 0 !== s || t.applicationId !== j.XR || I || N ? [] : [c.M.GAME_SHOP_WISHLIST_POPOVER],
            v.m.SIDEBAR,
            !0,
        ),
        R = l.useRef(null),
        L = l.useCallback(() => {
            T(v.i.USER_DISMISS),
                (0, E.a)(
                    t,
                    { isGift: !0, giftRecipient: n, giftingOrigin: y.vQ.USER_PROFILE_WISHLIST },
                    { analyticsLocations: A },
                );
        }, [T, t, n, A]),
        M = l.useCallback(() => {
            T(v.i.USER_DISMISS);
        }, [T]),
        U = l.useCallback(() => {
            T(v.i.USER_DISMISS), a();
        }, [a, T]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(D, {
                ref: R,
                sku: t,
                index: s,
                onViewWishlist: a,
                analyticsLocations: A,
                wishlistOwner: n,
                onClick: L,
                tooltipTypeTitle: O.intl.string(O.t["4yiU7x"]),
                tooltipIcon: (0, i.jsx)(_.mW, { application: h }),
                ...o,
            }),
            S === c.M.GAME_SHOP_WISHLIST_POPOVER &&
                (0, i.jsx)(G, { targetElementRef: R, onRequestClose: M, onActionClick: U }),
        ],
    });
}
function P(e) {
    let { sku: t, wishlistOwner: n, analyticsLocations: s, showTypeTooltip: d, ...c } = e,
        u = l.useCallback(() => {
            (0, x.A)({
                skuId: t.id,
                isGift: !0,
                giftingOrigin: y.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: s ?? [],
                giftRecipient: n,
                variantsReturnStyle: o.g.VARIANTS_GROUP,
            });
        }, [t.id, n, s]),
        h = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case r.R.PROFILE_EFFECT:
                    return;
                case r.R.AVATAR_DECORATION:
                    return a()(L.ML, L._P);
                default:
                    return a()(L.ML, L.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(D, {
        sku: t,
        wishlistOwner: n,
        analyticsLocations: s,
        onClick: u,
        showTypeTooltip: d,
        skuPreviewStyle: h,
        tooltipTypeTitle: O.intl.string(O.t.HFhcqh),
        tooltipIcon: d ? (0, i.jsx)(_.mW, {}) : void 0,
        ...c,
    });
}
function w(e) {
    let { sku: t, ...n } = e;
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(U, { sku: t, ...n });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(P, { sku: t, ...n });
        default:
            return null;
    }
}
