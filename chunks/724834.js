i.d(t, { A: () => es });
var n = i(477900),
    s = i(582128),
    l = i(503698),
    r = i.n(l),
    a = i(575593),
    o = i(765178),
    d = i(17928),
    c = i(793574),
    u = i(688810),
    g = i(44120),
    m = i(532794),
    f = i(87719),
    x = i(31969),
    h = i(317560),
    I = i(99161),
    p = i(183555),
    A = i(975732),
    j = i(384377),
    E = i(287809),
    S = i(661492),
    T = i(111085),
    v = i(212387),
    N = i(590180),
    b = i(139146),
    C = i(113265),
    w = i(152472),
    k = i(274681),
    R = i(471505),
    O = i(280450),
    y = i(652215),
    _ = i(375708),
    G = i(929389);
function L(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function P(e) {
    let { spec: t, sku: i, location: s, onError: l, ...r } = e,
        a = (0, d.bG)([O.default], () => O.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, R.G)({ userId: a, sku: i, location: s, onError: l }),
        m = H();
    return (0, n.jsx)("div", {
        className: G.U,
        style: L(t),
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
    let { spec: t, sku: i, location: s, onError: l, ...r } = e,
        a = (0, d.bG)([O.default], () => O.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, w.c)({ userId: a, skuId: i.id, location: s, onError: l }),
        m = H();
    return (0, n.jsx)("div", {
        className: G.U,
        style: L(t),
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
    let { spec: t, sku: i, location: s, onError: l, ...r } = e,
        a = (0, d.bG)([O.default], () => O.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, w.c)({ userId: a, skuId: i.id, location: s, onError: l, onAddSuccess: k.w }),
        m = H();
    return (0, n.jsx)("div", {
        className: G.U,
        style: L(t),
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
function U(e) {
    let { spec: t, product: i, location: s, onError: l, ...r } = e,
        a = (0, d.bG)([O.default], () => O.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: f,
        } = (0, C.z)({ userId: a, product: i, location: s, onError: l }),
        x = (0, S.q)(m),
        h = f && !o,
        I = !x || h,
        p = H(x && h ? _.intl.string(_.t.nKA6v8) : void 0);
    return (0, n.jsx)("div", {
        className: G.U,
        style: L(t),
        children: (0, n.jsx)(b._, {
            skuId: m.skuId,
            productName: m.name,
            size: t.wishlistButtonSize,
            disabled: I,
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: p,
            ...r,
        }),
    });
}
function F(e) {
    let { sku: t, isCardHovered: i, ...s } = e,
        l = (0, d.bG)([N.A], () => N.A.getProduct(t.id));
    switch (t.productLine) {
        case y.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(P, { sku: t, isVisuallyHidden: !i, ...s });
        case y.EZt.COLLECTIBLES:
            if (null == l) return (0, n.jsx)(D, { sku: t, isVisuallyHidden: !i, ...s });
            return (0, n.jsx)(U, { product: l, isVisuallyHidden: !i, ...s });
        case y.EZt.PREMIUM:
            return (0, n.jsx)(M, { sku: t, isVisuallyHidden: !i, ...s });
        default:
            return null;
    }
}
function W(e) {
    let { location: t, ...i } = e;
    return (0, n.jsx)(F, { location: t, ...i });
}
function H(e) {
    return s.useMemo(
        () => ({
            firstTimeBody: _.intl.string(_.t["5B3F2W"]),
            add: _.intl.string(_.t.Hcgz2S),
            remove: _.intl.string(_.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var B = i(74135),
    V = i(460442),
    X = i(662349),
    z = i(479026),
    Y = i(636374),
    K = i(699976),
    q = i(202541),
    Q = i(518477),
    Z = i(785797),
    J = i(134222);
let $ = K.Z.SIZE_133;
function ee(e) {
    let {
            item: t,
            wishlistOwner: i,
            guildId: l,
            currentUser: a,
            style: d,
            isDragging: c,
            dragHandle: u,
            skuPreviewStyle: g,
            skuPreviewHoverStyle: m,
            skuAssetHoverClassName: f,
            isHoveringOrFocusing: x,
            setIsHoveringOrFocusing: h,
            onDetailsClick: I,
            onPurchaseClick: A,
            wishlistId: E,
            isItemOwned: T,
            cardBackdrop: N,
            promotion: b,
        } = e,
        C = s.useRef(null),
        w = s.useRef(h);
    s.useEffect(() => {
        w.current = h;
    }, [h]),
        s.useEffect(() => {
            let e = C.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", t),
                    () => {
                        e.removeEventListener("focusin", t);
                    }
                );
            function t() {
                w.current(!1);
            }
        }, []);
    let { trackUserProfileWishlistAction: k } = (0, p.NJ)(),
        R = s.useCallback(() => {
            null != E &&
                (k({
                    wishlistId: E,
                    action: Q.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                I());
        }, [I, t.sku, E, k]),
        O = s.useCallback(() => {
            null != E &&
                (k({
                    wishlistId: E,
                    action: Q.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                A());
        }, [A, t.sku, E, k]),
        y = s.useCallback(() => {
            (0, j.XA)(Q.jM.SOMETHING_WENT_WRONG), o.O.announce(_.intl.string(_.t.F8FvUy));
        }, []),
        G = null != u ? (0, n.jsx)("div", { ref: C, className: Z.BU, children: u }) : null,
        {
            onBodyClick: L,
            onOverlayClick: P,
            showOverlayButton: D,
            routesToGift: M,
            label: U,
            icon: F,
        } = (0, Y.P)({ wishlistOwner: i, isOwned: T, onDetailsClick: R, onPurchaseClick: O }),
        H = x && D;
    return (0, n.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, n.jsxs)(v.A, {
                sku: t.sku,
                user: i,
                guildId: l,
                spec: $,
                cardStyle: r()(Z.Nr, d),
                skuPreviewStyle: r()(Z.ev, { [Z.go]: T && !x }, g, H ? m : void 0),
                skuAssetClassName: H ? f : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: h,
                onClick: L,
                "aria-label": M
                    ? (0, S.T)(t.sku)
                    : _.intl.formatToPlainString(_.t.ZBB4Ty, { productName: (0, S.T)(t.sku) }),
                children: [
                    N,
                    D && (0, n.jsx)(X.A, { spec: $, onClick: P, isHoveringOrFocusing: x, label: U, icon: F }),
                    !H && !T && b,
                    T && (0, n.jsx)(V.gS, { isHoveringOrFocusing: x }),
                    i.id === a.id &&
                        null != E &&
                        (0, n.jsx)(W, {
                            sku: t.sku,
                            isCardHovered: x,
                            spec: $,
                            onError: y,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            G,
        ],
    });
}
function et(e) {
    let { item: t, isItemOwned: i, wishlistOwner: l, currentUser: r, analyticsLocations: a, ...o } = e,
        d = (0, x.F)(l.id === r.id ? "sku_purchase_badge" : "sku_gift_badge", {
            applicationId: t.sku.applicationId,
            skuId: t.skuId,
        }),
        u = s.useCallback(() => {
            (0, h.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: l,
                giftingOrigin: q.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, l, a]),
        g = s.useCallback(() => {
            let e = l.id === r.id;
            (0, I.a)(
                t.sku,
                { isGift: !e, giftRecipient: l, giftingOrigin: q.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, l, r.id, a]);
    return (0, n.jsx)(ee, {
        item: t,
        wishlistOwner: l,
        isItemOwned: i,
        onDetailsClick: u,
        onPurchaseClick: g,
        analyticsLocations: a,
        currentUser: r,
        promotion: null != d && (0, n.jsx)(B.s, { spec: $, icon: d.Icon, tooltipText: d.tooltip }),
        ...o,
    });
}
function ei(e) {
    let {
            item: t,
            wishlistOwner: i,
            isItemOwned: l,
            analyticsLocations: o,
            currentUser: d,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        m = (0, z.e)({
            sku: t.sku,
            giftRecipient: i,
            giftingOrigin: q.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        f = s.useMemo(
            () => () => {
                let e = i.id === d.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: q.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: i,
                });
            },
            [t.sku, i, d.id, o],
        ),
        x = t.sku.tenantMetadata?.collectibles?.type,
        h = x === a.R.AVATAR_DECORATION || x === a.R.PROFILE_FRAME;
    return (0, n.jsx)(ee, {
        item: t,
        wishlistOwner: i,
        isItemOwned: l,
        currentUser: d,
        onDetailsClick: m,
        onPurchaseClick: f,
        isHoveringOrFocusing: c,
        skuPreviewHoverStyle: r()({ [Z.mn]: h }),
        analyticsLocations: o,
        ...u,
    });
}
function en(e) {
    let {
            item: t,
            isItemOwned: i,
            wishlistOwner: l,
            currentUser: r,
            analyticsLocations: a,
            isHoveringOrFocusing: o,
            ...d
        } = e,
        c = s.useCallback(() => {
            if (i) return void (0, f.x)(A.closeUserProfileModal);
            let e = l.id === r.id;
            (0, m.A)({
                isGift: !e,
                giftRecipient: l,
                giftingOrigin: q.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: t.skuId,
                analyticsLocations: a,
            });
        }, [i, t.skuId, l, r.id, a]);
    return (0, n.jsx)(ee, {
        item: t,
        wishlistOwner: l,
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
function es(e) {
    let { item: t, wishlistOwner: i, wishlistId: l, analyticsLocations: r, ...a } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(r ?? []),
            t.sku?.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
        [m, f] = s.useState(!1),
        x = (0, d.bG)([T.A], () => T.A.hasSentGift(t.skuId, i.id), [i, t.skuId]),
        h = s.useMemo(
            () => t.skuProductLine !== y.EZt.PREMIUM && (!0 === t.isOwned || x),
            [t.isOwned, t.skuProductLine, x],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case y.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(et, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: i,
                wishlistId: l,
                ...a,
            });
        case y.EZt.COLLECTIBLES:
            return (0, n.jsx)(ei, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: i,
                wishlistId: l,
                ...a,
            });
        case y.EZt.PREMIUM:
            return (0, n.jsx)(en, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: i,
                wishlistId: l,
                ...a,
            });
        default:
            return null;
    }
}
