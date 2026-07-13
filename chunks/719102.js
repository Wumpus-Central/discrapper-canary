e.d(t, { A: () => U, O: () => G });
var s = e(627968),
    n = e(64700),
    l = e(503698),
    r = e.n(l),
    c = e(132500),
    a = e(172218),
    o = e(575593),
    u = e(17928),
    d = e(444927),
    p = e(793574),
    _ = e(587895),
    I = e(44120),
    f = e(532794),
    h = e(31969),
    S = e(317560),
    g = e(99161),
    k = e(174459),
    m = e(661492),
    L = e(299679),
    T = e(652215),
    C = e(95817),
    w = e(561794),
    E = e(212387),
    A = e(74135),
    x = e(460442),
    O = e(662349),
    R = e(532423),
    M = e(479026),
    j = e(699976),
    v = e(202541),
    y = e(375708),
    b = e(224601),
    H = e(997990);
let P = v.vQ.DM_CHANNEL_WISHLIST,
    N = j.Z.SIZE_133;
function G(i) {
    let { spec: t = N } = i;
    return (0, s.jsx)(E.$, { spec: t });
}
function D(i) {
    var t;
    let e,
        l,
        o,
        {
            sku: u,
            onDetailsClick: p,
            onPurchaseClick: _,
            onOpenWishlist: I,
            wishlistOwner: f,
            wishlistId: h,
            source: S,
            hasMultipleSources: g,
            skuPreviewStyle: A,
            skuPreviewHoverStyle: M,
            skuAssetHoverClassName: j,
            spec: v = N,
            guildId: H,
            channelId: P,
            numMoreItems: G,
            promotion: D,
        } = i,
        [W, F] = n.useState(!1),
        B = (0, L.Ar)(),
        U = (0, d.A)(() => (0, c.A)()),
        Z = null != G && G > 0,
        { handleVisibilityChange: z } = (0, C.G)(U),
        K = (0, a.K)(z, 0.5, !Z);
    (t = W && !Z),
        (e = (0, L.Ar)()),
        (l = n.useRef(!1)),
        (o = n.useRef(e)),
        n.useEffect(() => {
            o.current = e;
        }, [e]),
        n.useEffect(() => {
            if (!t) {
                l.current = !1;
                return;
            }
            if (l.current) return;
            let i = setTimeout(() => {
                let i = o.current;
                k.default.track(T.HAw.WISHLIST_ITEM_HOVERED, {
                    sku_id: i?.skuId,
                    wishlist_id: i?.wishlistId,
                    wishlist_owner_id: i?.wishlistOwnerId,
                    surface: i?.surface,
                    position_in_section: i?.positionInSection,
                    item_source: i?.itemSource,
                    product_line: i?.productLine,
                    card_id: U,
                    impression_session_id: i?.impressionSessionId,
                    location_stack: i?.analyticsLocations,
                }),
                    (l.current = !0);
            }, 250);
            return () => clearTimeout(i);
        }, [t, U]);
    let Y = n.useCallback(() => {
            if (Z) return void I();
            let i = S === w.uS.WISHLIST ? "wishlist" : "shop";
            k.default.track(T.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: u.id,
                item_source: i,
                wishlist_id: S === w.uS.WISHLIST ? h : null,
                product_line: u.productLine,
            }),
                k.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: u.id,
                    wishlist_id: h,
                    wishlist_owner_id: B?.wishlistOwnerId,
                    surface: B?.surface,
                    position_in_section: B?.positionInSection,
                    item_source: B?.itemSource,
                    click_type: "details",
                    product_line: u.productLine,
                    card_id: U,
                    impression_session_id: B?.impressionSessionId,
                    location_stack: B?.analyticsLocations,
                }),
                p?.();
        }, [p, h, S, u.id, u.productLine, I, Z, B, U]),
        V = n.useCallback(() => {
            let i = S === w.uS.WISHLIST ? "wishlist" : "shop";
            k.default.track(T.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: u.id,
                item_source: i,
                wishlist_id: S === w.uS.WISHLIST ? h : null,
                product_line: u.productLine,
            }),
                k.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: u.id,
                    wishlist_id: h,
                    wishlist_owner_id: B?.wishlistOwnerId,
                    surface: B?.surface,
                    position_in_section: B?.positionInSection,
                    item_source: B?.itemSource,
                    click_type: "gift",
                    product_line: u.productLine,
                    card_id: U,
                    impression_session_id: B?.impressionSessionId,
                    location_stack: B?.analyticsLocations,
                }),
                _?.();
        }, [_, u.id, u.productLine, S, h, B, U]),
        { label: $, icon: q, isPromptingPurchase: J } = (0, O.h)({ wishlistOwner: f, isOwned: !1 });
    return (0, s.jsx)("div", {
        ref: K,
        children: (0, s.jsxs)(E.A, {
            sku: u,
            user: f,
            spec: v,
            skuPreviewStyle: r()(b.e, A, W ? M : void 0),
            skuAssetClassName: W ? j : void 0,
            onClick: Y,
            "aria-label": Z
                ? y.intl.formatToPlainString(y.t["8uYD+I"], { username: f.username })
                : y.intl.formatToPlainString(y.t.ZBB4Ty, { productName: (0, m.TC)(u) }),
            onHoverOrFocusChange: F,
            children: [
                g && S === w.uS.WISHLIST
                    ? (0, s.jsx)(R.X, { spec: v, users: [f], guildId: H ?? void 0, channelId: P ?? void 0 })
                    : null,
                !Z && (0, s.jsx)(O.A, { spec: v, onClick: J ? V : Y, label: $, icon: q, isHoveringOrFocusing: W }),
                Z && (0, s.jsx)(x.Yb, { count: G }),
                !W && !Z && D,
            ],
        }),
    });
}
function W(i) {
    let {
            sku: t,
            wishlistOwner: e,
            analyticsLocations: l,
            onClick: r,
            hasMultipleSources: c,
            source: a,
            spec: o = N,
            ...d
        } = i,
        I = (0, u.bG)([_.A], () => _.A.getApplication(t.applicationId)),
        f = (0, h.F)("sku_gift_badge", { applicationId: t.applicationId, skuId: t.id }),
        k = n.useCallback(() => {
            r?.(),
                null != I &&
                    null != I.guildId &&
                    (0, S.R)({
                        skuId: t.id,
                        applicationId: t.applicationId,
                        isStorefront: !1,
                        giftRecipient: e,
                        giftingOrigin: P,
                        analyticsLocations: l ?? [],
                    });
        }, [l, I, r, t.applicationId, t.id, e]),
        m = n.useCallback(() => {
            r?.(),
                (0, g.a)(
                    t,
                    { isGift: !0, giftRecipient: e, giftingOrigin: P },
                    { analyticsLocations: [...(l ?? []), p.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [t, e, l, r]);
    return (0, s.jsx)(D, {
        sku: t,
        wishlistOwner: e,
        analyticsLocations: l,
        onDetailsClick: k,
        onPurchaseClick: m,
        hasMultipleSources: c,
        source: a,
        spec: o,
        promotion: null != f ? (0, s.jsx)(A.s, { spec: o, icon: f.Icon, tooltipText: f.tooltip }) : null,
        ...d,
    });
}
function F(i) {
    let { sku: t, wishlistOwner: e, analyticsLocations: l, onClick: c, hasMultipleSources: a, source: u, ...d } = i,
        p = (0, M.e)({ sku: t, giftRecipient: e, giftingOrigin: P, analyticsLocations: l }),
        _ = n.useCallback(() => {
            c?.(),
                (0, I.A)({ skuId: t.id, isGift: !0, giftingOrigin: P, analyticsLocations: l ?? [], giftRecipient: e });
        }, [c, t.id, l, e]),
        f = n.useCallback(() => {
            c?.(), p();
        }, [c, p]);
    return (0, s.jsx)(D, {
        sku: t,
        wishlistOwner: e,
        analyticsLocations: l,
        onDetailsClick: f,
        onPurchaseClick: _,
        hasMultipleSources: a,
        source: u,
        skuPreviewHoverStyle: r()({
            [b.m]:
                t.tenantMetadata?.collectibles?.type === o.R.AVATAR_DECORATION ||
                t.tenantMetadata?.collectibles?.type === o.R.PROFILE_FRAME,
        }),
        ...d,
    });
}
function B(i) {
    let { sku: t, wishlistOwner: e, analyticsLocations: l, onClick: r, hasMultipleSources: c, source: a, ...o } = i,
        u = n.useCallback(() => {
            r?.(),
                (0, f.A)({
                    isGift: !0,
                    giftRecipient: e,
                    giftingOrigin: P,
                    subscriptionTier: t.id,
                    analyticsLocations: l ?? [],
                });
        }, [r, t.id, e, l]);
    return (0, s.jsx)(D, {
        sku: t,
        wishlistOwner: e,
        analyticsLocations: l,
        onDetailsClick: u,
        onPurchaseClick: u,
        hasMultipleSources: c,
        source: a,
        skuPreviewStyle: H.MO,
        skuAssetHoverClassName: H.iR,
        ...o,
    });
}
function U(i) {
    let { sku: t, ...e } = i;
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, s.jsx)(W, { sku: t, ...e });
        case T.EZt.COLLECTIBLES:
            return (0, s.jsx)(F, { sku: t, ...e });
        case T.EZt.PREMIUM:
            return (0, s.jsx)(B, { sku: t, ...e });
        default:
            return null;
    }
}
