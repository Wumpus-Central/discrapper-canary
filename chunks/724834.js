n.d(t, { A: () => ei });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(575593),
    o = n(765178),
    d = n(17928),
    u = n(793574),
    c = n(688810),
    g = n(44120),
    m = n(75678),
    f = n(87719),
    x = n(56815),
    h = n(317560),
    I = n(99161),
    p = n(183555),
    A = n(402860),
    j = n(827258),
    E = n(384377),
    v = n(287809),
    S = n(661492),
    C = n(111085),
    b = n(212387),
    k = n(590180),
    T = n(139146),
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
        a = (0, d.bG)([R.default], () => R.default.getId()),
        {
            isWishlisted: o,
            isBusy: u,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, w.G)({ userId: a, sku: n, location: l, onError: s }),
        m = H();
    return (0, i.jsx)("div", {
        className: O.U,
        style: P(t),
        children: (0, i.jsx)(T._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: o,
            isBusy: u,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: m,
            ...r,
        }),
    });
}
function M(e) {
    let { spec: t, sku: n, location: l, onError: s, ...r } = e,
        a = (0, d.bG)([R.default], () => R.default.getId()),
        {
            isWishlisted: o,
            isBusy: u,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, y.c)({ userId: a, skuId: n.id, location: l, onError: s }),
        m = H();
    return (0, i.jsx)("div", {
        className: O.U,
        style: P(t),
        children: (0, i.jsx)(T._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: o,
            isBusy: u,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: m,
            ...r,
        }),
    });
}
function G(e) {
    let { spec: t, sku: n, location: l, onError: s, ...r } = e,
        a = (0, d.bG)([R.default], () => R.default.getId()),
        {
            isWishlisted: o,
            isBusy: u,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, y.c)({ userId: a, skuId: n.id, location: l, onError: s }),
        m = H();
    return (0, i.jsx)("div", {
        className: O.U,
        style: P(t),
        children: (0, i.jsx)(T._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: o,
            isBusy: u,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: m,
            ...r,
        }),
    });
}
function U(e) {
    let { spec: t, product: n, location: l, onError: s, ...r } = e,
        a = (0, d.bG)([R.default], () => R.default.getId()),
        {
            isWishlisted: o,
            isBusy: u,
            isFirstTimeWishlister: c,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: f,
        } = (0, N.z)({ userId: a, product: n, location: l, onError: s }),
        x = (0, S.q)(m),
        h = f && !o,
        I = !x || h,
        p = H(x && h ? L.intl.string(L.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: O.U,
        style: P(t),
        children: (0, i.jsx)(T._, {
            skuId: m.skuId,
            productName: m.name,
            size: t.wishlistButtonSize,
            disabled: I,
            isWishlisted: o,
            isBusy: u,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: p,
            ...r,
        }),
    });
}
function W(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        s = (0, d.bG)([k.A], () => k.A.getProduct(t.id));
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
function F(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(W, { location: t, ...n });
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
var B = n(460442),
    V = n(662349),
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
            guildId: d,
            currentUser: u,
            style: c,
            isDragging: g,
            dragHandle: m,
            skuPreviewStyle: f,
            skuPreviewHoverStyle: x,
            skuAssetHoverClassName: h,
            isHoveringOrFocusing: I,
            setIsHoveringOrFocusing: A,
            onDetailsClick: v,
            onPurchaseClick: C,
            wishlistId: k,
            isItemOwned: T,
            cardBackdrop: N,
            isNew: y,
        } = e,
        w = l.useRef(null),
        R = l.useRef(A);
    l.useEffect(() => {
        R.current = A;
    }, [A]),
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
    let { trackUserProfileWishlistAction: _ } = (0, p.NJ)(),
        O = l.useCallback(() => {
            null != k &&
                (_({
                    wishlistId: k,
                    action: q.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: s.sku.id,
                    productLines: new Set([s.sku.productLine]),
                }),
                v());
        }, [v, s.sku, k, _]),
        P = l.useCallback(() => {
            null != k &&
                (_({
                    wishlistId: k,
                    action: q.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: s.sku.id,
                    productLines: new Set([s.sku.productLine]),
                }),
                C());
        }, [C, s.sku, k, _]),
        D = l.useCallback(() => {
            (0, E.XA)(q.jM.SOMETHING_WENT_WRONG), o.O.announce(L.intl.string(L.t.F8FvUy));
        }, []),
        M = null != m ? (0, i.jsx)("div", { ref: w, className: Z.BU, children: m }) : null,
        {
            onBodyClick: G,
            onOverlayClick: U,
            showOverlayButton: W,
            routesToGift: H,
            label: z,
            icon: Y,
        } = (0, K.P)({ wishlistOwner: a, isOwned: T, onDetailsClick: O, onPurchaseClick: P }),
        X = I && W;
    return (0, i.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, i.jsxs)(b.A, {
                sku: s.sku,
                user: a,
                guildId: d,
                spec: Q,
                cardStyle: r()(Z.Nr, c),
                skuPreviewStyle: r()(Z.ev, { [Z.go]: T && !I }, f, X ? x : void 0),
                skuAssetClassName: X ? h : void 0,
                disableHoverOrFocus: g,
                onHoverOrFocusChange: A,
                onClick: G,
                "aria-label":
                    ((t = s.sku),
                    (n = H ? (0, S.T)(t) : L.intl.formatToPlainString(L.t.ZBB4Ty, { productName: (0, S.T)(t) })),
                    !0 === y ? L.intl.formatToPlainString(L.t.s9RZ1r, { label: n }) : n),
                children: [
                    !0 === y && (0, i.jsx)(j.A, { className: Z.Pf }),
                    N,
                    W && (0, i.jsx)(V.A, { spec: Q, onClick: U, isHoveringOrFocusing: I, label: z, icon: Y }),
                    T && (0, i.jsx)(B.gS, { isHoveringOrFocusing: I }),
                    a.id === u.id &&
                        null != k &&
                        (0, i.jsx)(F, {
                            sku: s.sku,
                            isCardHovered: I,
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
        d = l.useCallback(() => {
            (0, h.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: s,
                giftingOrigin: X.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, s, a]),
        c = l.useCallback(() => {
            let e = s.id === r.id;
            (0, I.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: X.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, s, r.id, a]);
    return (0, i.jsx)($, {
        item: t,
        wishlistOwner: s,
        isItemOwned: n,
        onDetailsClick: d,
        onPurchaseClick: c,
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
            currentUser: d,
            isHoveringOrFocusing: u,
            ...c
        } = e,
        m = (0, z.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: X.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        f = l.useMemo(
            () => () => {
                let e = n.id === d.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: X.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, d.id, o],
        ),
        x = t.sku.tenantMetadata?.collectibles?.type,
        h = x === a.R.AVATAR_DECORATION || x === a.R.PROFILE_FRAME;
    return (0, i.jsx)($, {
        item: t,
        wishlistOwner: n,
        isItemOwned: s,
        currentUser: d,
        onDetailsClick: m,
        onPurchaseClick: f,
        isHoveringOrFocusing: u,
        skuPreviewHoverStyle: r()({ [Z.mn]: h }),
        analyticsLocations: o,
        ...c,
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
            ...d
        } = e,
        u = l.useCallback(() => {
            if (n) return void (0, f.x)(A.closeUserProfileModal);
            let e = s.id === r.id,
                i = t.skuId;
            (0, m.A)({
                isGift: !e,
                giftRecipient: s,
                giftingOrigin: X.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
                ...(0, x.Dv)(i, !e, "user_profile_wishlist_item_card"),
            });
        }, [n, t.skuId, s, r.id, a]);
    return (0, i.jsx)($, {
        item: t,
        wishlistOwner: s,
        isItemOwned: n,
        currentUser: r,
        onDetailsClick: u,
        onPurchaseClick: u,
        isHoveringOrFocusing: o,
        skuPreviewStyle: J.MO,
        skuAssetHoverClassName: J.iR,
        analyticsLocations: a,
        ...d,
    });
}
function ei(e) {
    let { item: t, wishlistOwner: n, wishlistId: s, analyticsLocations: r, ...a } = e,
        { analyticsLocations: o } = (0, c.Ay)(
            ...(r ?? []),
            t.sku?.productLine === _.EZt.SOCIAL_LAYER_GAME_ITEM ? u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, d.bG)([v.default], () => v.default.getCurrentUser()),
        [m, f] = l.useState(!1),
        x = (0, d.bG)([C.A], () => C.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        h = l.useMemo(
            () => t.skuProductLine !== _.EZt.PREMIUM && (!0 === t.isOwned || x),
            [t.isOwned, t.skuProductLine, x],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case _.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(ee, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
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
                setIsHoveringOrFocusing: f,
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
                setIsHoveringOrFocusing: f,
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
