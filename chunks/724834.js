n.d(t, { A: () => ei });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(575593),
    o = n(765178),
    c = n(17928),
    d = n(793574),
    u = n(688810),
    g = n(44120),
    m = n(75678),
    x = n(87719),
    f = n(56815),
    h = n(317560),
    p = n(99161),
    I = n(183555),
    j = n(402860),
    A = n(827258),
    E = n(384377),
    v = n(287809),
    S = n(661492),
    C = n(111085),
    b = n(212387),
    T = n(590180),
    k = n(139146),
    N = n(113265),
    y = n(152472),
    w = n(471505),
    R = n(280450),
    _ = n(652215),
    L = n(375708),
    O = n(376932);
function P(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function D(e) {
    let { spec: t, sku: n, location: l, onError: s, ...r } = e,
        a = (0, c.bG)([R.default], () => R.default.getId()),
        {
            isWishlisted: o,
            isBusy: d,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, w.G)({ userId: a, sku: n, location: l, onError: s }),
        m = H();
    return (0, i.jsx)("div", {
        className: O.U,
        style: P(t),
        children: (0, i.jsx)(k._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: o,
            isBusy: d,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: m,
            ...r,
        }),
    });
}
function M(e) {
    let { spec: t, sku: n, location: l, onError: s, ...r } = e,
        a = (0, c.bG)([R.default], () => R.default.getId()),
        {
            isWishlisted: o,
            isBusy: d,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, y.c)({ userId: a, skuId: n.id, location: l, onError: s }),
        m = H();
    return (0, i.jsx)("div", {
        className: O.U,
        style: P(t),
        children: (0, i.jsx)(k._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: o,
            isBusy: d,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: m,
            ...r,
        }),
    });
}
function G(e) {
    let { spec: t, sku: n, location: l, onError: s, ...r } = e,
        a = (0, c.bG)([R.default], () => R.default.getId()),
        {
            isWishlisted: o,
            isBusy: d,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, y.c)({ userId: a, skuId: n.id, location: l, onError: s }),
        m = H();
    return (0, i.jsx)("div", {
        className: O.U,
        style: P(t),
        children: (0, i.jsx)(k._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: o,
            isBusy: d,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: m,
            ...r,
        }),
    });
}
function U(e) {
    let { spec: t, product: n, location: l, onError: s, ...r } = e,
        a = (0, c.bG)([R.default], () => R.default.getId()),
        {
            isWishlisted: o,
            isBusy: d,
            isFirstTimeWishlister: u,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: x,
        } = (0, N.z)({ userId: a, product: n, location: l, onError: s }),
        f = (0, S.q)(m),
        h = x && !o,
        p = !f || h,
        I = H(f && h ? L.intl.string(L.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: O.U,
        style: P(t),
        children: (0, i.jsx)(k._, {
            skuId: m.skuId,
            productName: m.name,
            size: t.wishlistButtonSize,
            disabled: p,
            isWishlisted: o,
            isBusy: d,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: I,
            ...r,
        }),
    });
}
function F(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        s = (0, c.bG)([T.A], () => T.A.getProduct(t.id));
    switch (t.productLine) {
        case _.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(D, { sku: t, isVisuallyHidden: !n, ...l });
        case _.EZt.COLLECTIBLES:
            if (null == s) return (0, i.jsx)(M, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(U, { product: s, isVisuallyHidden: !n, ...l });
        case _.EZt.PREMIUM:
            return (0, i.jsx)(G, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function W(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(F, { location: t, ...n });
}
function H(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: L.intl.string(L.t["5B3F2W"]),
            add: L.intl.string(L.t.Hcgz2S),
            remove: L.intl.string(L.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var V = n(460442),
    B = n(662349),
    z = n(479026),
    K = n(636374),
    Y = n(699976),
    X = n(202541),
    q = n(518477),
    Z = n(181554),
    J = n(880465);
let Q = Y.Z.SIZE_133;
function $(e) {
    var t;
    let n,
        {
            item: s,
            wishlistOwner: a,
            guildId: c,
            currentUser: d,
            style: u,
            isDragging: g,
            dragHandle: m,
            skuPreviewStyle: x,
            skuPreviewHoverStyle: f,
            skuAssetHoverClassName: h,
            isHoveringOrFocusing: p,
            setIsHoveringOrFocusing: j,
            onDetailsClick: v,
            onPurchaseClick: C,
            wishlistId: T,
            isItemOwned: k,
            cardBackdrop: N,
            isNew: y,
        } = e,
        w = l.useRef(null),
        R = l.useRef(j);
    l.useEffect(() => {
        R.current = j;
    }, [j]),
        l.useEffect(() => {
            let e = w.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", t),
                    () => {
                        e.removeEventListener("focusin", t);
                    }
                );
            function t() {
                R.current(!1);
            }
        }, []);
    let { trackUserProfileWishlistAction: _ } = (0, I.NJ)(),
        O = l.useCallback(() => {
            null != T &&
                (_({
                    wishlistId: T,
                    action: q.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: s.sku.id,
                    productLines: new Set([s.sku.productLine]),
                }),
                v());
        }, [v, s.sku, T, _]),
        P = l.useCallback(() => {
            null != T &&
                (_({
                    wishlistId: T,
                    action: q.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: s.sku.id,
                    productLines: new Set([s.sku.productLine]),
                }),
                C());
        }, [C, s.sku, T, _]),
        D = l.useCallback(() => {
            (0, E.XA)(q.jM.SOMETHING_WENT_WRONG), o.O.announce(L.intl.string(L.t.F8FvUy));
        }, []),
        M = null != m ? (0, i.jsx)("div", { ref: w, className: Z.BU, children: m }) : null,
        {
            onBodyClick: G,
            onOverlayClick: U,
            showOverlayButton: F,
            routesToGift: H,
            label: z,
            icon: Y,
        } = (0, K.P)({ wishlistOwner: a, isOwned: k, onDetailsClick: O, onPurchaseClick: P }),
        X = p && F;
    return (0, i.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, i.jsxs)(b.A, {
                sku: s.sku,
                user: a,
                guildId: c,
                spec: Q,
                cardStyle: r()(Z.Nr, u),
                skuPreviewStyle: r()(Z.ev, { [Z.go]: k && !p }, x, X ? f : void 0),
                skuAssetClassName: X ? h : void 0,
                disableHoverOrFocus: g,
                onHoverOrFocusChange: j,
                onClick: G,
                "aria-label":
                    ((t = s.sku),
                    (n = H ? (0, S.T)(t) : L.intl.formatToPlainString(L.t.ZBB4Ty, { productName: (0, S.T)(t) })),
                    !0 === y ? L.intl.formatToPlainString(L.t.s9RZ1r, { label: n }) : n),
                children: [
                    !0 === y && (0, i.jsx)(A.A, { className: Z.Pf }),
                    N,
                    F && (0, i.jsx)(B.A, { spec: Q, onClick: U, isHoveringOrFocusing: p, label: z, icon: Y }),
                    k && (0, i.jsx)(V.gS, { isHoveringOrFocusing: p }),
                    a.id === d.id &&
                        null != T &&
                        (0, i.jsx)(W, {
                            sku: s.sku,
                            isCardHovered: p,
                            spec: Q,
                            onError: D,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            M,
        ],
    });
}
function ee(e) {
    let { item: t, isItemOwned: n, wishlistOwner: s, currentUser: r, analyticsLocations: a, ...o } = e,
        c = l.useCallback(() => {
            (0, h.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: s,
                giftingOrigin: X.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, s, a]),
        u = l.useCallback(() => {
            let e = s.id === r.id;
            (0, p.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: X.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, s, r.id, a]);
    return (0, i.jsx)($, {
        item: t,
        wishlistOwner: s,
        isItemOwned: n,
        onDetailsClick: c,
        onPurchaseClick: u,
        analyticsLocations: a,
        currentUser: r,
        ...o,
    });
}
function et(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: s,
            analyticsLocations: o,
            currentUser: c,
            isHoveringOrFocusing: d,
            ...u
        } = e,
        m = (0, z.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: X.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        x = l.useMemo(
            () => () => {
                let e = n.id === c.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: X.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, c.id, o],
        ),
        f = t.sku.tenantMetadata?.collectibles?.type,
        h = f === a.R.AVATAR_DECORATION || f === a.R.PROFILE_FRAME;
    return (0, i.jsx)($, {
        item: t,
        wishlistOwner: n,
        isItemOwned: s,
        currentUser: c,
        onDetailsClick: m,
        onPurchaseClick: x,
        isHoveringOrFocusing: d,
        skuPreviewHoverStyle: r()({ [Z.mn]: h }),
        analyticsLocations: o,
        ...u,
    });
}
function en(e) {
    let {
            item: t,
            isItemOwned: n,
            wishlistOwner: s,
            currentUser: r,
            analyticsLocations: a,
            isHoveringOrFocusing: o,
            ...c
        } = e,
        d = l.useCallback(() => {
            if (n) return void (0, x.x)(j.closeUserProfileModal);
            let e = s.id === r.id,
                i = t.skuId;
            (0, m.A)({
                isGift: !e,
                giftRecipient: s,
                giftingOrigin: X.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
                ...(0, f.Dv)(i, !e, "user_profile_wishlist_item_card"),
            });
        }, [n, t.skuId, s, r.id, a]);
    return (0, i.jsx)($, {
        item: t,
        wishlistOwner: s,
        isItemOwned: n,
        currentUser: r,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: J.MO,
        skuAssetHoverClassName: J.iR,
        analyticsLocations: a,
        ...c,
    });
}
function ei(e) {
    let { item: t, wishlistOwner: n, wishlistId: s, analyticsLocations: r, ...a } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(r ?? []),
            t.sku?.productLine === _.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, c.bG)([v.default], () => v.default.getCurrentUser()),
        [m, x] = l.useState(!1),
        f = (0, c.bG)([C.A], () => C.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        h = l.useMemo(
            () => t.skuProductLine !== _.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case _.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(ee, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: n,
                wishlistId: s,
                ...a,
            });
        case _.EZt.COLLECTIBLES:
            return (0, i.jsx)(et, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: n,
                wishlistId: s,
                ...a,
            });
        case _.EZt.PREMIUM:
            return (0, i.jsx)(en, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: n,
                wishlistId: s,
                ...a,
            });
        default:
            return null;
    }
}
