e.d(t, { A: () => Z, O: () => G });
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
    k = e(31969),
    h = e(317560),
    S = e(99161),
    g = e(174459),
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
    j = e(636374),
    v = e(699976),
    y = e(202541),
    b = e(375708),
    H = e(463697),
    P = e(134222);
let N = y.vQ.DM_CHANNEL_WISHLIST,
    D = v.Z.SIZE_133;
function G(i) {
    let { spec: t = D } = i;
    return (0, s.jsx)(E.$, { spec: t });
}
function W(i) {
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
            wishlistId: k,
            source: h,
            hasMultipleSources: S,
            skuPreviewStyle: A,
            skuPreviewHoverStyle: M,
            skuAssetHoverClassName: v,
            spec: y = D,
            guildId: P,
            channelId: N,
            numMoreItems: G,
            promotion: W,
        } = i,
        [F, B] = n.useState(!1),
        U = (0, L.Ar)(),
        Z = (0, d.A)(() => (0, c.A)()),
        z = null != G && G > 0,
        { handleVisibilityChange: K } = (0, C.G)(Z),
        Y = (0, a.K)(K, 0.5, !z);
    (t = F && !z),
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
                g.default.track(T.HAw.WISHLIST_ITEM_HOVERED, {
                    sku_id: i?.skuId,
                    wishlist_id: i?.wishlistId,
                    wishlist_owner_id: i?.wishlistOwnerId,
                    surface: i?.surface,
                    position_in_section: i?.positionInSection,
                    item_source: i?.itemSource,
                    product_line: i?.productLine,
                    card_id: Z,
                    impression_session_id: i?.impressionSessionId,
                    location_stack: i?.analyticsLocations,
                }),
                    (l.current = !0);
            }, 250);
            return () => clearTimeout(i);
        }, [t, Z]);
    let V = n.useCallback(() => {
            if (z) return void I();
            let i = h === w.uS.WISHLIST ? "wishlist" : "shop";
            g.default.track(T.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: u.id,
                item_source: i,
                wishlist_id: h === w.uS.WISHLIST ? k : null,
                product_line: u.productLine,
            }),
                g.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: u.id,
                    wishlist_id: k,
                    wishlist_owner_id: U?.wishlistOwnerId,
                    surface: U?.surface,
                    position_in_section: U?.positionInSection,
                    item_source: U?.itemSource,
                    click_type: "details",
                    product_line: u.productLine,
                    card_id: Z,
                    impression_session_id: U?.impressionSessionId,
                    location_stack: U?.analyticsLocations,
                }),
                p?.();
        }, [p, k, h, u.id, u.productLine, I, z, U, Z]),
        $ = n.useCallback(() => {
            let i = h === w.uS.WISHLIST ? "wishlist" : "shop";
            g.default.track(T.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: u.id,
                item_source: i,
                wishlist_id: h === w.uS.WISHLIST ? k : null,
                product_line: u.productLine,
            }),
                g.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: u.id,
                    wishlist_id: k,
                    wishlist_owner_id: U?.wishlistOwnerId,
                    surface: U?.surface,
                    position_in_section: U?.positionInSection,
                    item_source: U?.itemSource,
                    click_type: "gift",
                    product_line: u.productLine,
                    card_id: Z,
                    impression_session_id: U?.impressionSessionId,
                    location_stack: U?.analyticsLocations,
                }),
                _?.();
        }, [_, u.id, u.productLine, h, k, U, Z]),
        {
            onBodyClick: q,
            onOverlayClick: J,
            showOverlayButton: Q,
            routesToGift: X,
            label: ii,
            icon: it,
        } = (0, j.P)({ wishlistOwner: f, isOwned: !1, onDetailsClick: V, onPurchaseClick: $ }),
        ie = F && Q;
    return (0, s.jsx)("div", {
        ref: Y,
        children: (0, s.jsxs)(E.A, {
            sku: u,
            user: f,
            spec: y,
            skuPreviewStyle: r()(H.e, A, ie ? M : void 0),
            skuAssetClassName: ie ? v : void 0,
            onClick: z ? V : q,
            "aria-label": z
                ? b.intl.formatToPlainString(b.t["8uYD+I"], { username: f.username })
                : X
                  ? (0, m.T)(u)
                  : b.intl.formatToPlainString(b.t.ZBB4Ty, { productName: (0, m.T)(u) }),
            onHoverOrFocusChange: B,
            children: [
                S && h === w.uS.WISHLIST
                    ? (0, s.jsx)(R.X, { spec: y, users: [f], guildId: P ?? void 0, channelId: N ?? void 0 })
                    : null,
                !z && Q && (0, s.jsx)(O.A, { spec: y, onClick: J, label: ii, icon: it, isHoveringOrFocusing: F }),
                z && (0, s.jsx)(x.Yb, { count: G }),
                !ie && !z && W,
            ],
        }),
    });
}
function F(i) {
    let {
            sku: t,
            wishlistOwner: e,
            analyticsLocations: l,
            onClick: r,
            hasMultipleSources: c,
            source: a,
            spec: o = D,
            ...d
        } = i,
        I = (0, u.bG)([_.A], () => _.A.getApplication(t.applicationId)),
        f = (0, k.F)("sku_gift_badge", { applicationId: t.applicationId, skuId: t.id }),
        g = n.useCallback(() => {
            r?.(),
                null != I &&
                    null != I.guildId &&
                    (0, h.R)({
                        skuId: t.id,
                        applicationId: t.applicationId,
                        isStorefront: !1,
                        giftRecipient: e,
                        giftingOrigin: N,
                        analyticsLocations: l ?? [],
                    });
        }, [l, I, r, t.applicationId, t.id, e]),
        m = n.useCallback(() => {
            r?.(),
                (0, S.a)(
                    t,
                    { isGift: !0, giftRecipient: e, giftingOrigin: N },
                    { analyticsLocations: [...(l ?? []), p.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [t, e, l, r]);
    return (0, s.jsx)(W, {
        sku: t,
        wishlistOwner: e,
        analyticsLocations: l,
        onDetailsClick: g,
        onPurchaseClick: m,
        hasMultipleSources: c,
        source: a,
        spec: o,
        promotion: null != f ? (0, s.jsx)(A.s, { spec: o, icon: f.Icon, tooltipText: f.tooltip }) : null,
        ...d,
    });
}
function B(i) {
    let { sku: t, wishlistOwner: e, analyticsLocations: l, onClick: c, hasMultipleSources: a, source: u, ...d } = i,
        p = (0, M.e)({ sku: t, giftRecipient: e, giftingOrigin: N, analyticsLocations: l }),
        _ = n.useCallback(() => {
            c?.(),
                (0, I.A)({ skuId: t.id, isGift: !0, giftingOrigin: N, analyticsLocations: l ?? [], giftRecipient: e });
        }, [c, t.id, l, e]),
        f = n.useCallback(() => {
            c?.(), p();
        }, [c, p]);
    return (0, s.jsx)(W, {
        sku: t,
        wishlistOwner: e,
        analyticsLocations: l,
        onDetailsClick: f,
        onPurchaseClick: _,
        hasMultipleSources: a,
        source: u,
        skuPreviewHoverStyle: r()({
            [H.m]:
                t.tenantMetadata?.collectibles?.type === o.R.AVATAR_DECORATION ||
                t.tenantMetadata?.collectibles?.type === o.R.PROFILE_FRAME,
        }),
        ...d,
    });
}
function U(i) {
    let { sku: t, wishlistOwner: e, analyticsLocations: l, onClick: r, hasMultipleSources: c, source: a, ...o } = i,
        u = n.useCallback(() => {
            r?.(),
                (0, f.A)({
                    isGift: !0,
                    giftRecipient: e,
                    giftingOrigin: N,
                    subscriptionTier: t.id,
                    analyticsLocations: l ?? [],
                });
        }, [r, t.id, e, l]);
    return (0, s.jsx)(W, {
        sku: t,
        wishlistOwner: e,
        analyticsLocations: l,
        onDetailsClick: u,
        onPurchaseClick: u,
        hasMultipleSources: c,
        source: a,
        skuPreviewStyle: P.MO,
        skuAssetHoverClassName: P.iR,
        ...o,
    });
}
function Z(i) {
    let { sku: t, ...e } = i;
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, s.jsx)(F, { sku: t, ...e });
        case T.EZt.COLLECTIBLES:
            return (0, s.jsx)(B, { sku: t, ...e });
        case T.EZt.PREMIUM:
            return (0, s.jsx)(U, { sku: t, ...e });
        default:
            return null;
    }
}
