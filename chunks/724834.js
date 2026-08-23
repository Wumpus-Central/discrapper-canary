i.d(t, { A: () => ei });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(575593),
    o = i(765178),
    d = i(17928),
    c = i(793574),
    u = i(688810),
    g = i(44120),
    m = i(532794),
    x = i(87719),
    f = i(317560),
    h = i(99161),
    p = i(183555),
    I = i(975732),
    j = i(384377),
    A = i(287809),
    v = i(661492),
    E = i(111085),
    S = i(212387),
    C = i(590180),
    b = i(139146),
    T = i(113265),
    N = i(152472),
    y = i(274681),
    k = i(471505),
    w = i(280450),
    R = i(652215),
    O = i(375708),
    L = i(376932);
function _(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function P(e) {
    let { spec: t, sku: i, location: l, onError: s, ...r } = e,
        a = (0, d.bG)([w.default], () => w.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, k.G)({ userId: a, sku: i, location: l, onError: s }),
        m = W();
    return (0, n.jsx)("div", {
        className: L.U,
        style: _(t),
        children: (0, n.jsx)(b._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: m,
            ...r,
        }),
    });
}
function D(e) {
    let { spec: t, sku: i, location: l, onError: s, ...r } = e,
        a = (0, d.bG)([w.default], () => w.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, N.c)({ userId: a, skuId: i.id, location: l, onError: s }),
        m = W();
    return (0, n.jsx)("div", {
        className: L.U,
        style: _(t),
        children: (0, n.jsx)(b._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: m,
            ...r,
        }),
    });
}
function G(e) {
    let { spec: t, sku: i, location: l, onError: s, ...r } = e,
        a = (0, d.bG)([w.default], () => w.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, N.c)({ userId: a, skuId: i.id, location: l, onError: s, onAddSuccess: y.w }),
        m = W();
    return (0, n.jsx)("div", {
        className: L.U,
        style: _(t),
        children: (0, n.jsx)(b._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: m,
            ...r,
        }),
    });
}
function M(e) {
    let { spec: t, product: i, location: l, onError: s, ...r } = e,
        a = (0, d.bG)([w.default], () => w.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: x,
        } = (0, T.z)({ userId: a, product: i, location: l, onError: s }),
        f = (0, v.q)(m),
        h = x && !o,
        p = !f || h,
        I = W(f && h ? O.intl.string(O.t.nKA6v8) : void 0);
    return (0, n.jsx)("div", {
        className: L.U,
        style: _(t),
        children: (0, n.jsx)(b._, {
            skuId: m.skuId,
            productName: m.name,
            size: t.wishlistButtonSize,
            disabled: p,
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: I,
            ...r,
        }),
    });
}
function U(e) {
    let { sku: t, isCardHovered: i, ...l } = e,
        s = (0, d.bG)([C.A], () => C.A.getProduct(t.id));
    switch (t.productLine) {
        case R.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(P, { sku: t, isVisuallyHidden: !i, ...l });
        case R.EZt.COLLECTIBLES:
            if (null == s) return (0, n.jsx)(D, { sku: t, isVisuallyHidden: !i, ...l });
            return (0, n.jsx)(M, { product: s, isVisuallyHidden: !i, ...l });
        case R.EZt.PREMIUM:
            return (0, n.jsx)(G, { sku: t, isVisuallyHidden: !i, ...l });
        default:
            return null;
    }
}
function F(e) {
    let { location: t, ...i } = e;
    return (0, n.jsx)(U, { location: t, ...i });
}
function W(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: O.intl.string(O.t["5B3F2W"]),
            add: O.intl.string(O.t.Hcgz2S),
            remove: O.intl.string(O.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var H = i(460442),
    V = i(662349),
    B = i(479026),
    z = i(636374),
    X = i(699976),
    K = i(202541),
    Y = i(518477),
    q = i(181554),
    J = i(880465);
let Q = X.Z.SIZE_133;
function Z(e) {
    let {
            item: t,
            wishlistOwner: i,
            guildId: s,
            currentUser: a,
            style: d,
            isDragging: c,
            dragHandle: u,
            skuPreviewStyle: g,
            skuPreviewHoverStyle: m,
            skuAssetHoverClassName: x,
            isHoveringOrFocusing: f,
            setIsHoveringOrFocusing: h,
            onDetailsClick: I,
            onPurchaseClick: A,
            wishlistId: E,
            isItemOwned: C,
            cardBackdrop: b,
        } = e,
        T = l.useRef(null),
        N = l.useRef(h);
    l.useEffect(() => {
        N.current = h;
    }, [h]),
        l.useEffect(() => {
            let e = T.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", t),
                    () => {
                        e.removeEventListener("focusin", t);
                    }
                );
            function t() {
                N.current(!1);
            }
        }, []);
    let { trackUserProfileWishlistAction: y } = (0, p.NJ)(),
        k = l.useCallback(() => {
            null != E &&
                (y({
                    wishlistId: E,
                    action: Y.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                I());
        }, [I, t.sku, E, y]),
        w = l.useCallback(() => {
            null != E &&
                (y({
                    wishlistId: E,
                    action: Y.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                A());
        }, [A, t.sku, E, y]),
        R = l.useCallback(() => {
            (0, j.XA)(Y.jM.SOMETHING_WENT_WRONG), o.O.announce(O.intl.string(O.t.F8FvUy));
        }, []),
        L = null != u ? (0, n.jsx)("div", { ref: T, className: q.BU, children: u }) : null,
        {
            onBodyClick: _,
            onOverlayClick: P,
            showOverlayButton: D,
            routesToGift: G,
            label: M,
            icon: U,
        } = (0, z.P)({ wishlistOwner: i, isOwned: C, onDetailsClick: k, onPurchaseClick: w }),
        W = f && D;
    return (0, n.jsxs)("div", {
        className: q.kL,
        children: [
            (0, n.jsxs)(S.A, {
                sku: t.sku,
                user: i,
                guildId: s,
                spec: Q,
                cardStyle: r()(q.Nr, d),
                skuPreviewStyle: r()(q.ev, { [q.go]: C && !f }, g, W ? m : void 0),
                skuAssetClassName: W ? x : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: h,
                onClick: _,
                "aria-label": G
                    ? (0, v.T)(t.sku)
                    : O.intl.formatToPlainString(O.t.ZBB4Ty, { productName: (0, v.T)(t.sku) }),
                children: [
                    b,
                    D && (0, n.jsx)(V.A, { spec: Q, onClick: P, isHoveringOrFocusing: f, label: M, icon: U }),
                    C && (0, n.jsx)(H.gS, { isHoveringOrFocusing: f }),
                    i.id === a.id &&
                        null != E &&
                        (0, n.jsx)(F, {
                            sku: t.sku,
                            isCardHovered: f,
                            spec: Q,
                            onError: R,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            L,
        ],
    });
}
function $(e) {
    let { item: t, isItemOwned: i, wishlistOwner: s, currentUser: r, analyticsLocations: a, ...o } = e,
        d = l.useCallback(() => {
            (0, f.R)({
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
            (0, h.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: K.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, s, r.id, a]);
    return (0, n.jsx)(Z, {
        item: t,
        wishlistOwner: s,
        isItemOwned: i,
        onDetailsClick: d,
        onPurchaseClick: u,
        analyticsLocations: a,
        currentUser: r,
        ...o,
    });
}
function ee(e) {
    let {
            item: t,
            wishlistOwner: i,
            isItemOwned: s,
            analyticsLocations: o,
            currentUser: d,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        m = (0, B.e)({
            sku: t.sku,
            giftRecipient: i,
            giftingOrigin: K.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        x = l.useMemo(
            () => () => {
                let e = i.id === d.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: K.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: i,
                });
            },
            [t.sku, i, d.id, o],
        ),
        f = t.sku.tenantMetadata?.collectibles?.type,
        h = f === a.R.AVATAR_DECORATION || f === a.R.PROFILE_FRAME;
    return (0, n.jsx)(Z, {
        item: t,
        wishlistOwner: i,
        isItemOwned: s,
        currentUser: d,
        onDetailsClick: m,
        onPurchaseClick: x,
        isHoveringOrFocusing: c,
        skuPreviewHoverStyle: r()({ [q.mn]: h }),
        analyticsLocations: o,
        ...u,
    });
}
function et(e) {
    let {
            item: t,
            isItemOwned: i,
            wishlistOwner: s,
            currentUser: r,
            analyticsLocations: a,
            isHoveringOrFocusing: o,
            ...d
        } = e,
        c = l.useCallback(() => {
            if (i) return void (0, x.x)(I.closeUserProfileModal);
            let e = s.id === r.id;
            (0, m.A)({
                isGift: !e,
                giftRecipient: s,
                giftingOrigin: K.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: t.skuId,
                analyticsLocations: a,
            });
        }, [i, t.skuId, s, r.id, a]);
    return (0, n.jsx)(Z, {
        item: t,
        wishlistOwner: s,
        isItemOwned: i,
        currentUser: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        isHoveringOrFocusing: o,
        skuPreviewStyle: J.MO,
        skuAssetHoverClassName: J.iR,
        analyticsLocations: a,
        ...d,
    });
}
function ei(e) {
    let { item: t, wishlistOwner: i, wishlistId: s, analyticsLocations: r, ...a } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(r ?? []),
            t.sku?.productLine === R.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, d.bG)([A.default], () => A.default.getCurrentUser()),
        [m, x] = l.useState(!1),
        f = (0, d.bG)([E.A], () => E.A.hasSentGift(t.skuId, i.id), [i, t.skuId]),
        h = l.useMemo(
            () => t.skuProductLine !== R.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case R.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)($, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: i,
                wishlistId: s,
                ...a,
            });
        case R.EZt.COLLECTIBLES:
            return (0, n.jsx)(ee, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: i,
                wishlistId: s,
                ...a,
            });
        case R.EZt.PREMIUM:
            return (0, n.jsx)(et, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: i,
                wishlistId: s,
                ...a,
            });
        default:
            return null;
    }
}
