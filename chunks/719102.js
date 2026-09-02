t.d(s, { A: () => Y, O: () => W });
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
    S = t(56815),
    f = t(31969),
    L = t(317560),
    w = t(99161),
    h = t(174459),
    C = t(661492),
    T = t(299679),
    g = t(652215),
    A = t(95817),
    E = t(594832),
    m = t(212387),
    O = t(74135),
    R = t(460442),
    H = t(662349),
    y = t(532423),
    M = t(479026),
    b = t(636374),
    v = t(699976),
    x = t(202541),
    D = t(375708),
    j = t(675444),
    P = t(880465);
let G = x.vQ.DM_CHANNEL_WISHLIST,
    N = v.Z.SIZE_133;
function W(i) {
    let { spec: s = N } = i;
    return (0, e.jsx)(m.$, { spec: s });
}
function F(i) {
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
            skuPreviewStyle: w,
            skuPreviewHoverStyle: O,
            skuAssetHoverClassName: M,
            spec: v = N,
            guildId: x,
            channelId: P,
            numMoreItems: G,
            promotion: W,
        } = i,
        [F, Z] = n.useState(!1),
        K = (0, T.Ar)(),
        B = (0, d.A)(() => (0, l.A)()),
        Y = null != G && G > 0,
        { handleVisibilityChange: U } = (0, A.G)(B),
        V = (0, r.K)(U, 0.5, !Y);
    (s = F && !Y),
        (t = (0, T.Ar)()),
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
                h.default.track(g.HAw.WISHLIST_ITEM_HOVERED, {
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
            let i = f === E.uS.WISHLIST ? "wishlist" : "shop";
            h.default.track(g.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: a.id,
                item_source: i,
                wishlist_id: f === E.uS.WISHLIST ? S : null,
                product_line: a.productLine,
            }),
                h.default.track(g.HAw.WISHLIST_ITEM_CLICKED, {
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
            let i = f === E.uS.WISHLIST ? "wishlist" : "shop";
            h.default.track(g.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: a.id,
                item_source: i,
                wishlist_id: f === E.uS.WISHLIST ? S : null,
                product_line: a.productLine,
            }),
                h.default.track(g.HAw.WISHLIST_ITEM_CLICKED, {
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
        } = (0, b.P)({ wishlistOwner: k, isOwned: !1, onDetailsClick: Q, onPurchaseClick: X }),
        it = F && z;
    return (0, e.jsx)("div", {
        ref: V,
        children: (0, e.jsxs)(m.A, {
            sku: a,
            user: k,
            spec: v,
            skuPreviewStyle: o()(j.e, w, it ? O : void 0),
            skuAssetClassName: it ? M : void 0,
            onClick: Y ? Q : $,
            "aria-label": Y
                ? D.intl.formatToPlainString(D.t["8uYD+I"], { username: k.username })
                : J
                  ? (0, C.T)(a)
                  : D.intl.formatToPlainString(D.t.ZBB4Ty, { productName: (0, C.T)(a) }),
            onHoverOrFocusChange: Z,
            children: [
                L && f === E.uS.WISHLIST
                    ? (0, e.jsx)(y.X, { spec: v, users: [k], guildId: x ?? void 0, channelId: P ?? void 0 })
                    : null,
                !Y && z && (0, e.jsx)(H.A, { spec: v, onClick: q, label: ii, icon: is, isHoveringOrFocusing: F }),
                Y && (0, e.jsx)(R.Yb, { count: G }),
                !it && !Y && W,
            ],
        }),
    });
}
function Z(i) {
    let {
            sku: s,
            wishlistOwner: t,
            analyticsLocations: c,
            onClick: o,
            hasMultipleSources: l,
            source: r,
            spec: u = N,
            ...d
        } = i,
        I = (0, a.bG)([p.A], () => p.A.getApplication(s.applicationId)),
        k = (0, f.F)("sku_gift_badge", { applicationId: s.applicationId, skuId: s.id }),
        S = n.useCallback(() => {
            o?.(),
                null != I &&
                    null != I.guildId &&
                    (0, L.R)({
                        skuId: s.id,
                        applicationId: s.applicationId,
                        isStorefront: !1,
                        giftRecipient: t,
                        giftingOrigin: G,
                        analyticsLocations: c ?? [],
                    });
        }, [c, I, o, s.applicationId, s.id, t]),
        h = n.useCallback(() => {
            o?.(),
                (0, w.a)(
                    s,
                    { isGift: !0, giftRecipient: t, giftingOrigin: G },
                    { analyticsLocations: [...(c ?? []), _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
                );
        }, [s, t, c, o]);
    return (0, e.jsx)(F, {
        sku: s,
        wishlistOwner: t,
        analyticsLocations: c,
        onDetailsClick: S,
        onPurchaseClick: h,
        hasMultipleSources: l,
        source: r,
        spec: u,
        promotion: null != k ? (0, e.jsx)(O.s, { spec: u, icon: k.Icon, tooltipText: k.tooltip }) : null,
        ...d,
    });
}
function K(i) {
    let { sku: s, wishlistOwner: t, analyticsLocations: c, onClick: l, hasMultipleSources: r, source: a, ...d } = i,
        _ = (0, M.e)({ sku: s, giftRecipient: t, giftingOrigin: G, analyticsLocations: c }),
        p = n.useCallback(() => {
            l?.(),
                (0, I.A)({ skuId: s.id, isGift: !0, giftingOrigin: G, analyticsLocations: c ?? [], giftRecipient: t });
        }, [l, s.id, c, t]),
        k = n.useCallback(() => {
            l?.(), _();
        }, [l, _]);
    return (0, e.jsx)(F, {
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
function B(i) {
    let { sku: s, wishlistOwner: t, analyticsLocations: c, onClick: o, hasMultipleSources: l, source: r, ...u } = i,
        a = n.useCallback(() => {
            o?.();
            let i = s.id;
            (0, k.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: G,
                subscriptionTier: i,
                analyticsLocations: c ?? [],
                ...(0, S.Dv)(i, !0, "dm_gifting_modal_wishlist_item_card"),
            });
        }, [o, s.id, t, c]);
    return (0, e.jsx)(F, {
        sku: s,
        wishlistOwner: t,
        analyticsLocations: c,
        onDetailsClick: a,
        onPurchaseClick: a,
        hasMultipleSources: l,
        source: r,
        skuPreviewStyle: P.MO,
        skuAssetHoverClassName: P.iR,
        ...u,
    });
}
function Y(i) {
    let { sku: s, ...t } = i;
    switch (s.productLine) {
        case g.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, e.jsx)(Z, { sku: s, ...t });
        case g.EZt.COLLECTIBLES:
            return (0, e.jsx)(K, { sku: s, ...t });
        case g.EZt.PREMIUM:
            return (0, e.jsx)(B, { sku: s, ...t });
        default:
            return null;
    }
}
