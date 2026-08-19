t.d(s, { A: () => B, O: () => N });
var e = t(477900),
    n = t(582128),
    c = t(503698),
    o = t.n(c),
    l = t(132500),
    r = t(172218),
    u = t(575593),
    a = t(17928),
    d = t(444927),
    _ = t(793574),
    p = t(587895),
    I = t(44120),
    k = t(532794),
    S = t(31969),
    f = t(317560),
    L = t(99161),
    w = t(174459),
    h = t(661492),
    C = t(299679),
    T = t(652215),
    g = t(95817),
    A = t(561794),
    E = t(212387),
    m = t(74135),
    O = t(460442),
    R = t(662349),
    H = t(532423),
    y = t(479026),
    M = t(636374),
    b = t(699976),
    v = t(202541),
    x = t(375708),
    j = t(463697),
    D = t(134222);
let P = v.vQ.DM_CHANNEL_WISHLIST,
    G = b.Z.SIZE_133;
function N(i) {
    let { spec: s = G } = i;
    return (0, e.jsx)(E.$, { spec: s });
}
function W(i) {
    var s;
    let t,
        c,
        u,
        {
            sku: a,
            onDetailsClick: _,
            onPurchaseClick: p,
            onOpenWishlist: I,
            wishlistOwner: k,
            wishlistId: S,
            source: f,
            hasMultipleSources: L,
            skuPreviewStyle: m,
            skuPreviewHoverStyle: y,
            skuAssetHoverClassName: b,
            spec: v = G,
            guildId: D,
            channelId: P,
            numMoreItems: N,
            promotion: W,
        } = i,
        [F, Z] = n.useState(!1),
        K = (0, C.Ar)(),
        B = (0, d.A)(() => (0, l.A)()),
        Y = null != N && N > 0,
        { handleVisibilityChange: U } = (0, g.G)(B),
        V = (0, r.K)(U, 0.5, !Y);
    (s = F && !Y),
        (t = (0, C.Ar)()),
        (c = n.useRef(!1)),
        (u = n.useRef(t)),
        n.useEffect(() => {
            u.current = t;
        }, [t]),
        n.useEffect(() => {
            if (!s) {
                c.current = !1;
                return;
            }
            if (c.current) return;
            let i = setTimeout(() => {
                let i = u.current;
                w.default.track(T.HAw.WISHLIST_ITEM_HOVERED, {
                    sku_id: i?.skuId,
                    wishlist_id: i?.wishlistId,
                    wishlist_owner_id: i?.wishlistOwnerId,
                    surface: i?.surface,
                    position_in_section: i?.positionInSection,
                    item_source: i?.itemSource,
                    product_line: i?.productLine,
                    card_id: B,
                    impression_session_id: i?.impressionSessionId,
                    location_stack: i?.analyticsLocations,
                }),
                    (c.current = !0);
            }, 250);
            return () => clearTimeout(i);
        }, [s, B]);
    let Q = n.useCallback(() => {
            if (Y) return void I();
            let i = f === A.uS.WISHLIST ? "wishlist" : "shop";
            w.default.track(T.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: a.id,
                item_source: i,
                wishlist_id: f === A.uS.WISHLIST ? S : null,
                product_line: a.productLine,
            }),
                w.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: a.id,
                    wishlist_id: S,
                    wishlist_owner_id: K?.wishlistOwnerId,
                    surface: K?.surface,
                    position_in_section: K?.positionInSection,
                    item_source: K?.itemSource,
                    click_type: "details",
                    product_line: a.productLine,
                    card_id: B,
                    impression_session_id: K?.impressionSessionId,
                    location_stack: K?.analyticsLocations,
                }),
                _?.();
        }, [_, S, f, a.id, a.productLine, I, Y, K, B]),
        X = n.useCallback(() => {
            let i = f === A.uS.WISHLIST ? "wishlist" : "shop";
            w.default.track(T.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: a.id,
                item_source: i,
                wishlist_id: f === A.uS.WISHLIST ? S : null,
                product_line: a.productLine,
            }),
                w.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
                    sku_id: a.id,
                    wishlist_id: S,
                    wishlist_owner_id: K?.wishlistOwnerId,
                    surface: K?.surface,
                    position_in_section: K?.positionInSection,
                    item_source: K?.itemSource,
                    click_type: "gift",
                    product_line: a.productLine,
                    card_id: B,
                    impression_session_id: K?.impressionSessionId,
                    location_stack: K?.analyticsLocations,
                }),
                p?.();
        }, [p, a.id, a.productLine, f, S, K, B]),
        {
            onBodyClick: $,
            onOverlayClick: q,
            showOverlayButton: z,
            routesToGift: J,
            label: ii,
            icon: is,
        } = (0, M.P)({ wishlistOwner: k, isOwned: !1, onDetailsClick: Q, onPurchaseClick: X }),
        it = F && z;
    return (0, e.jsx)("div", {
        ref: V,
        children: (0, e.jsxs)(E.A, {
            sku: a,
            user: k,
            spec: v,
            skuPreviewStyle: o()(j.e, m, it ? y : void 0),
            skuAssetClassName: it ? b : void 0,
            onClick: Y ? Q : $,
            "aria-label": Y
                ? x.intl.formatToPlainString(x.t["8uYD+I"], { username: k.username })
                : J
                  ? (0, h.T)(a)
                  : x.intl.formatToPlainString(x.t.ZBB4Ty, { productName: (0, h.T)(a) }),
            onHoverOrFocusChange: Z,
            children: [
                L && f === A.uS.WISHLIST
                    ? (0, e.jsx)(H.X, { spec: v, users: [k], guildId: D ?? void 0, channelId: P ?? void 0 })
                    : null,
                !Y && z && (0, e.jsx)(R.A, { spec: v, onClick: q, label: ii, icon: is, isHoveringOrFocusing: F }),
                Y && (0, e.jsx)(O.Yb, { count: N }),
                !it && !Y && W,
            ],
        }),
    });
}
function F(i) {
    let {
            sku: s,
            wishlistOwner: t,
            analyticsLocations: c,
            onClick: o,
            hasMultipleSources: l,
            source: r,
            spec: u = G,
            ...d
        } = i,
        I = (0, a.bG)([p.A], () => p.A.getApplication(s.applicationId)),
        k = (0, S.F)("sku_gift_badge", { applicationId: s.applicationId, skuId: s.id }),
        w = n.useCallback(() => {
            o?.(),
                null != I &&
                    null != I.guildId &&
                    (0, f.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: t,
                        giftingOrigin: P,
                        analyticsLocations: c ?? [],
                    });
        }, [c, I, o, s.applicationId, s.id, t]),
        h = n.useCallback(() => {
            o?.(),
                (0, L.a)(
                    s,
                    { isGift: !0, giftRecipient: t, giftingOrigin: P },
                    { analyticsLocations: [...(c ?? []), _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [s, t, c, o]);
    return (0, e.jsx)(W, {
        sku: s,
        wishlistOwner: t,
        analyticsLocations: c,
        onDetailsClick: w,
        onPurchaseClick: h,
        hasMultipleSources: l,
        source: r,
        spec: u,
        promotion: null != k ? (0, e.jsx)(m.s, { spec: u, icon: k.Icon, tooltipText: k.tooltip }) : null,
        ...d,
    });
}
function Z(i) {
    let { sku: s, wishlistOwner: t, analyticsLocations: c, onClick: l, hasMultipleSources: r, source: a, ...d } = i,
        _ = (0, y.e)({ sku: s, giftRecipient: t, giftingOrigin: P, analyticsLocations: c }),
        p = n.useCallback(() => {
            l?.(),
                (0, I.A)({ skuId: s.id, isGift: !0, giftingOrigin: P, analyticsLocations: c ?? [], giftRecipient: t });
        }, [l, s.id, c, t]),
        k = n.useCallback(() => {
            l?.(), _();
        }, [l, _]);
    return (0, e.jsx)(W, {
        sku: s,
        wishlistOwner: t,
        analyticsLocations: c,
        onDetailsClick: k,
        onPurchaseClick: p,
        hasMultipleSources: r,
        source: a,
        skuPreviewHoverStyle: o()({
            [j.m]:
                s.tenantMetadata?.collectibles?.type === u.R.AVATAR_DECORATION ||
                s.tenantMetadata?.collectibles?.type === u.R.PROFILE_FRAME,
        }),
        ...d,
    });
}
function K(i) {
    let { sku: s, wishlistOwner: t, analyticsLocations: c, onClick: o, hasMultipleSources: l, source: r, ...u } = i,
        a = n.useCallback(() => {
            o?.(),
                (0, k.A)({
                    isGift: !0,
                    giftRecipient: t,
                    giftingOrigin: P,
                    subscriptionTier: s.id,
                    analyticsLocations: c ?? [],
                });
        }, [o, s.id, t, c]);
    return (0, e.jsx)(W, {
        sku: s,
        wishlistOwner: t,
        analyticsLocations: c,
        onDetailsClick: a,
        onPurchaseClick: a,
        hasMultipleSources: l,
        source: r,
        skuPreviewStyle: D.MO,
        skuAssetHoverClassName: D.iR,
        ...u,
    });
}
function B(i) {
    let { sku: s, ...t } = i;
    switch (s.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, e.jsx)(F, { sku: s, ...t });
        case T.EZt.COLLECTIBLES:
            return (0, e.jsx)(Z, { sku: s, ...t });
        case T.EZt.PREMIUM:
            return (0, e.jsx)(K, { sku: s, ...t });
        default:
            return null;
    }
}
