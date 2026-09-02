n.d(t, { A: () => et });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(575593),
    o = n(765178),
    d = n(17928),
    c = n(793574),
    u = n(688810),
    g = n(44120),
    m = n(532794),
    x = n(87719),
    f = n(317560),
    h = n(99161),
    p = n(183555),
    I = n(402860),
    j = n(384377),
    A = n(287809),
    E = n(661492),
    v = n(111085),
    C = n(212387),
    S = n(590180),
    b = n(139146),
    T = n(113265),
    N = n(152472),
    k = n(471505),
    y = n(280450),
    R = n(652215),
    w = n(375708),
    L = n(376932);
function O(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function P(e) {
    let { spec: t, sku: n, location: l, onError: s, ...r } = e,
        a = (0, d.bG)([y.default], () => y.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, k.G)({ userId: a, sku: n, location: l, onError: s }),
        m = W();
    return (0, i.jsx)("div", {
        className: L.U,
        style: O(t),
        children: (0, i.jsx)(b._, {
            skuId: n.id,
            productName: n.name,
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
function _(e) {
    let { spec: t, sku: n, location: l, onError: s, ...r } = e,
        a = (0, d.bG)([y.default], () => y.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, N.c)({ userId: a, skuId: n.id, location: l, onError: s }),
        m = W();
    return (0, i.jsx)("div", {
        className: L.U,
        style: O(t),
        children: (0, i.jsx)(b._, {
            skuId: n.id,
            productName: n.name,
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
    let { spec: t, sku: n, location: l, onError: s, ...r } = e,
        a = (0, d.bG)([y.default], () => y.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, N.c)({ userId: a, skuId: n.id, location: l, onError: s }),
        m = W();
    return (0, i.jsx)("div", {
        className: L.U,
        style: O(t),
        children: (0, i.jsx)(b._, {
            skuId: n.id,
            productName: n.name,
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
    let { spec: t, product: n, location: l, onError: s, ...r } = e,
        a = (0, d.bG)([y.default], () => y.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: x,
        } = (0, T.z)({ userId: a, product: n, location: l, onError: s }),
        f = (0, E.q)(m),
        h = x && !o,
        p = !f || h,
        I = W(f && h ? w.intl.string(w.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: L.U,
        style: O(t),
        children: (0, i.jsx)(b._, {
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
function M(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        s = (0, d.bG)([S.A], () => S.A.getProduct(t.id));
    switch (t.productLine) {
        case R.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(P, { sku: t, isVisuallyHidden: !n, ...l });
        case R.EZt.COLLECTIBLES:
            if (null == s) return (0, i.jsx)(_, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(G, { product: s, isVisuallyHidden: !n, ...l });
        case R.EZt.PREMIUM:
            return (0, i.jsx)(D, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function U(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(M, { location: t, ...n });
}
function W(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: w.intl.string(w.t["5B3F2W"]),
            add: w.intl.string(w.t.Hcgz2S),
            remove: w.intl.string(w.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var F = n(460442),
    H = n(662349),
    V = n(479026),
    B = n(636374),
    z = n(699976),
    X = n(202541),
    K = n(518477),
    Y = n(181554),
    q = n(880465);
let Z = z.Z.SIZE_133;
function J(e) {
    let {
            item: t,
            wishlistOwner: n,
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
            wishlistId: v,
            isItemOwned: S,
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
    let { trackUserProfileWishlistAction: k } = (0, p.NJ)(),
        y = l.useCallback(() => {
            null != v &&
                (k({
                    wishlistId: v,
                    action: K.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                I());
        }, [I, t.sku, v, k]),
        R = l.useCallback(() => {
            null != v &&
                (k({
                    wishlistId: v,
                    action: K.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                A());
        }, [A, t.sku, v, k]),
        L = l.useCallback(() => {
            (0, j.XA)(K.jM.SOMETHING_WENT_WRONG), o.O.announce(w.intl.string(w.t.F8FvUy));
        }, []),
        O = null != u ? (0, i.jsx)("div", { ref: T, className: Y.BU, children: u }) : null,
        {
            onBodyClick: P,
            onOverlayClick: _,
            showOverlayButton: D,
            routesToGift: G,
            label: M,
            icon: W,
        } = (0, B.P)({ wishlistOwner: n, isOwned: S, onDetailsClick: y, onPurchaseClick: R }),
        V = f && D;
    return (0, i.jsxs)("div", {
        className: Y.kL,
        children: [
            (0, i.jsxs)(C.A, {
                sku: t.sku,
                user: n,
                guildId: s,
                spec: Z,
                cardStyle: r()(Y.Nr, d),
                skuPreviewStyle: r()(Y.ev, { [Y.go]: S && !f }, g, V ? m : void 0),
                skuAssetClassName: V ? x : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: h,
                onClick: P,
                "aria-label": G
                    ? (0, E.T)(t.sku)
                    : w.intl.formatToPlainString(w.t.ZBB4Ty, { productName: (0, E.T)(t.sku) }),
                children: [
                    b,
                    D && (0, i.jsx)(H.A, { spec: Z, onClick: _, isHoveringOrFocusing: f, label: M, icon: W }),
                    S && (0, i.jsx)(F.gS, { isHoveringOrFocusing: f }),
                    n.id === a.id &&
                        null != v &&
                        (0, i.jsx)(U, {
                            sku: t.sku,
                            isCardHovered: f,
                            spec: Z,
                            onError: L,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            O,
        ],
    });
}
function Q(e) {
    let { item: t, isItemOwned: n, wishlistOwner: s, currentUser: r, analyticsLocations: a, ...o } = e,
        d = l.useCallback(() => {
            (0, f.R)({
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
            (0, h.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: X.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, s, r.id, a]);
    return (0, i.jsx)(J, {
        item: t,
        wishlistOwner: s,
        isItemOwned: n,
        onDetailsClick: d,
        onPurchaseClick: u,
        analyticsLocations: a,
        currentUser: r,
        ...o,
    });
}
function $(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: s,
            analyticsLocations: o,
            currentUser: d,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        m = (0, V.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: X.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        x = l.useMemo(
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
        f = t.sku.tenantMetadata?.collectibles?.type,
        h = f === a.R.AVATAR_DECORATION || f === a.R.PROFILE_FRAME;
    return (0, i.jsx)(J, {
        item: t,
        wishlistOwner: n,
        isItemOwned: s,
        currentUser: d,
        onDetailsClick: m,
        onPurchaseClick: x,
        isHoveringOrFocusing: c,
        skuPreviewHoverStyle: r()({ [Y.mn]: h }),
        analyticsLocations: o,
        ...u,
    });
}
function ee(e) {
    let {
            item: t,
            isItemOwned: n,
            wishlistOwner: s,
            currentUser: r,
            analyticsLocations: a,
            isHoveringOrFocusing: o,
            ...d
        } = e,
        c = l.useCallback(() => {
            if (n) return void (0, x.x)(I.closeUserProfileModal);
            let e = s.id === r.id;
            (0, m.A)({
                isGift: !e,
                giftRecipient: s,
                giftingOrigin: X.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: t.skuId,
                analyticsLocations: a,
            });
        }, [n, t.skuId, s, r.id, a]);
    return (0, i.jsx)(J, {
        item: t,
        wishlistOwner: s,
        isItemOwned: n,
        currentUser: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        isHoveringOrFocusing: o,
        skuPreviewStyle: q.MO,
        skuAssetHoverClassName: q.iR,
        analyticsLocations: a,
        ...d,
    });
}
function et(e) {
    let { item: t, wishlistOwner: n, wishlistId: s, analyticsLocations: r, ...a } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(r ?? []),
            t.sku?.productLine === R.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, d.bG)([A.default], () => A.default.getCurrentUser()),
        [m, x] = l.useState(!1),
        f = (0, d.bG)([v.A], () => v.A.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        h = l.useMemo(
            () => t.skuProductLine !== R.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case R.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(Q, {
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
        case R.EZt.COLLECTIBLES:
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
        case R.EZt.PREMIUM:
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
        default:
            return null;
    }
}
