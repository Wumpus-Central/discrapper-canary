n.d(t, { A: () => en });
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
    I = n(99161),
    p = n(183555),
    j = n(402860),
    A = n(384377),
    E = n(287809),
    v = n(661492),
    S = n(111085),
    C = n(212387),
    b = n(590180),
    k = n(139146),
    T = n(113265),
    y = n(152472),
    N = n(471505),
    R = n(280450),
    w = n(652215),
    _ = n(375708),
    L = n(376932);
function O(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function P(e) {
    let { spec: t, sku: n, location: l, onError: s, ...r } = e,
        a = (0, c.bG)([R.default], () => R.default.getId()),
        {
            isWishlisted: o,
            isBusy: d,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, N.G)({ userId: a, sku: n, location: l, onError: s }),
        m = W();
    return (0, i.jsx)("div", {
        className: L.U,
        style: O(t),
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
function D(e) {
    let { spec: t, sku: n, location: l, onError: s, ...r } = e,
        a = (0, c.bG)([R.default], () => R.default.getId()),
        {
            isWishlisted: o,
            isBusy: d,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, y.c)({ userId: a, skuId: n.id, location: l, onError: s }),
        m = W();
    return (0, i.jsx)("div", {
        className: L.U,
        style: O(t),
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
        m = W();
    return (0, i.jsx)("div", {
        className: L.U,
        style: O(t),
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
    let { spec: t, product: n, location: l, onError: s, ...r } = e,
        a = (0, c.bG)([R.default], () => R.default.getId()),
        {
            isWishlisted: o,
            isBusy: d,
            isFirstTimeWishlister: u,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: x,
        } = (0, T.z)({ userId: a, product: n, location: l, onError: s }),
        f = (0, v.q)(m),
        h = x && !o,
        I = !f || h,
        p = W(f && h ? _.intl.string(_.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: L.U,
        style: O(t),
        children: (0, i.jsx)(k._, {
            skuId: m.skuId,
            productName: m.name,
            size: t.wishlistButtonSize,
            disabled: I,
            isWishlisted: o,
            isBusy: d,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: p,
            ...r,
        }),
    });
}
function U(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        s = (0, c.bG)([b.A], () => b.A.getProduct(t.id));
    switch (t.productLine) {
        case w.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(P, { sku: t, isVisuallyHidden: !n, ...l });
        case w.EZt.COLLECTIBLES:
            if (null == s) return (0, i.jsx)(D, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(G, { product: s, isVisuallyHidden: !n, ...l });
        case w.EZt.PREMIUM:
            return (0, i.jsx)(M, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function F(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(U, { location: t, ...n });
}
function W(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: _.intl.string(_.t["5B3F2W"]),
            add: _.intl.string(_.t.Hcgz2S),
            remove: _.intl.string(_.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var H = n(460442),
    V = n(662349),
    B = n(479026),
    z = n(636374),
    Y = n(699976),
    K = n(202541),
    X = n(518477),
    q = n(181554),
    Z = n(880465);
let J = Y.Z.SIZE_133;
function Q(e) {
    let {
            item: t,
            wishlistOwner: n,
            guildId: s,
            currentUser: a,
            style: c,
            isDragging: d,
            dragHandle: u,
            skuPreviewStyle: g,
            skuPreviewHoverStyle: m,
            skuAssetHoverClassName: x,
            isHoveringOrFocusing: f,
            setIsHoveringOrFocusing: h,
            onDetailsClick: I,
            onPurchaseClick: j,
            wishlistId: E,
            isItemOwned: S,
            cardBackdrop: b,
        } = e,
        k = l.useRef(null),
        T = l.useRef(h);
    l.useEffect(() => {
        T.current = h;
    }, [h]),
        l.useEffect(() => {
            let e = k.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", t),
                    () => {
                        e.removeEventListener("focusin", t);
                    }
                );
            function t() {
                T.current(!1);
            }
        }, []);
    let { trackUserProfileWishlistAction: y } = (0, p.NJ)(),
        N = l.useCallback(() => {
            null != E &&
                (y({
                    wishlistId: E,
                    action: X.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                I());
        }, [I, t.sku, E, y]),
        R = l.useCallback(() => {
            null != E &&
                (y({
                    wishlistId: E,
                    action: X.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                j());
        }, [j, t.sku, E, y]),
        w = l.useCallback(() => {
            (0, A.XA)(X.jM.SOMETHING_WENT_WRONG), o.O.announce(_.intl.string(_.t.F8FvUy));
        }, []),
        L = null != u ? (0, i.jsx)("div", { ref: k, className: q.BU, children: u }) : null,
        {
            onBodyClick: O,
            onOverlayClick: P,
            showOverlayButton: D,
            routesToGift: M,
            label: G,
            icon: U,
        } = (0, z.P)({ wishlistOwner: n, isOwned: S, onDetailsClick: N, onPurchaseClick: R }),
        W = f && D;
    return (0, i.jsxs)("div", {
        className: q.kL,
        children: [
            (0, i.jsxs)(C.A, {
                sku: t.sku,
                user: n,
                guildId: s,
                spec: J,
                cardStyle: r()(q.Nr, c),
                skuPreviewStyle: r()(q.ev, { [q.go]: S && !f }, g, W ? m : void 0),
                skuAssetClassName: W ? x : void 0,
                disableHoverOrFocus: d,
                onHoverOrFocusChange: h,
                onClick: O,
                "aria-label": M
                    ? (0, v.T)(t.sku)
                    : _.intl.formatToPlainString(_.t.ZBB4Ty, { productName: (0, v.T)(t.sku) }),
                children: [
                    b,
                    D && (0, i.jsx)(V.A, { spec: J, onClick: P, isHoveringOrFocusing: f, label: G, icon: U }),
                    S && (0, i.jsx)(H.gS, { isHoveringOrFocusing: f }),
                    n.id === a.id &&
                        null != E &&
                        (0, i.jsx)(F, {
                            sku: t.sku,
                            isCardHovered: f,
                            spec: J,
                            onError: w,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            L,
        ],
    });
}
function $(e) {
    let { item: t, isItemOwned: n, wishlistOwner: s, currentUser: r, analyticsLocations: a, ...o } = e,
        c = l.useCallback(() => {
            (0, h.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: s,
                giftingOrigin: K.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, s, a]),
        u = l.useCallback(() => {
            let e = s.id === r.id;
            (0, I.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: K.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, s, r.id, a]);
    return (0, i.jsx)(Q, {
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
function ee(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: s,
            analyticsLocations: o,
            currentUser: c,
            isHoveringOrFocusing: d,
            ...u
        } = e,
        m = (0, B.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: K.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        x = l.useMemo(
            () => () => {
                let e = n.id === c.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: K.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, c.id, o],
        ),
        f = t.sku.tenantMetadata?.collectibles?.type,
        h = f === a.R.AVATAR_DECORATION || f === a.R.PROFILE_FRAME;
    return (0, i.jsx)(Q, {
        item: t,
        wishlistOwner: n,
        isItemOwned: s,
        currentUser: c,
        onDetailsClick: m,
        onPurchaseClick: x,
        isHoveringOrFocusing: d,
        skuPreviewHoverStyle: r()({ [q.mn]: h }),
        analyticsLocations: o,
        ...u,
    });
}
function et(e) {
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
                giftingOrigin: K.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
                ...(0, f.Dv)(i, !e, "user_profile_wishlist_item_card"),
            });
        }, [n, t.skuId, s, r.id, a]);
    return (0, i.jsx)(Q, {
        item: t,
        wishlistOwner: s,
        isItemOwned: n,
        currentUser: r,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: Z.MO,
        skuAssetHoverClassName: Z.iR,
        analyticsLocations: a,
        ...c,
    });
}
function en(e) {
    let { item: t, wishlistOwner: n, wishlistId: s, analyticsLocations: r, ...a } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(r ?? []),
            t.sku?.productLine === w.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
        [m, x] = l.useState(!1),
        f = (0, c.bG)([S.A], () => S.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        h = l.useMemo(
            () => t.skuProductLine !== w.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case w.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)($, {
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
        case w.EZt.COLLECTIBLES:
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
        case w.EZt.PREMIUM:
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
        default:
            return null;
    }
}
