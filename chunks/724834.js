i.d(t, { A: () => en });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(575593),
    o = i(765178),
    d = i(17928),
    c = i(793574),
    u = i(688810),
    g = i(44120),
    m = i(75678),
    x = i(87719),
    f = i(56815),
    h = i(317560),
    I = i(99161),
    p = i(183555),
    A = i(402860),
    j = i(827258),
    E = i(384377),
    v = i(287809),
    C = i(661492),
    S = i(111085),
    b = i(146423),
    k = i(590180),
    T = i(139146),
    y = i(113265),
    N = i(152472),
    R = i(471505),
    w = i(280450),
    L = i(652215),
    _ = i(375708),
    P = i(376932);
function O(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function D(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, d.bG)([w.default], () => w.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, R.G)({ userId: r, sku: i, location: l, onError: s }),
        m = H();
    return (0, n.jsx)("div", {
        className: P.U,
        style: O(t),
        children: (0, n.jsx)(T._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: m,
            ...a,
        }),
    });
}
function G(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, d.bG)([w.default], () => w.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, N.c)({ userId: r, skuId: i.id, location: l, onError: s }),
        m = H();
    return (0, n.jsx)("div", {
        className: P.U,
        style: O(t),
        children: (0, n.jsx)(T._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: m,
            ...a,
        }),
    });
}
function M(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, d.bG)([w.default], () => w.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, N.c)({ userId: r, skuId: i.id, location: l, onError: s }),
        m = H();
    return (0, n.jsx)("div", {
        className: P.U,
        style: O(t),
        children: (0, n.jsx)(T._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: m,
            ...a,
        }),
    });
}
function U(e) {
    let { spec: t, product: i, location: l, onError: s, ...a } = e,
        r = (0, d.bG)([w.default], () => w.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: x,
        } = (0, y.z)({ userId: r, product: i, location: l, onError: s }),
        f = (0, C.q)(m),
        h = x && !o,
        I = !f || h,
        p = H(f && h ? _.intl.string(_.t.nKA6v8) : void 0);
    return (0, n.jsx)("div", {
        className: P.U,
        style: O(t),
        children: (0, n.jsx)(T._, {
            skuId: m.skuId,
            productName: m.name,
            size: t.wishlistButtonSize,
            disabled: I,
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: p,
            ...a,
        }),
    });
}
function F(e) {
    let { sku: t, isCardHovered: i, ...l } = e,
        s = (0, d.bG)([k.A], () => k.A.getProduct(t.id));
    switch (t.productLine) {
        case L.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(D, { sku: t, isVisuallyHidden: !i, ...l });
        case L.EZt.COLLECTIBLES:
            if (null == s) return (0, n.jsx)(G, { sku: t, isVisuallyHidden: !i, ...l });
            return (0, n.jsx)(U, { product: s, isVisuallyHidden: !i, ...l });
        case L.EZt.PREMIUM:
            return (0, n.jsx)(M, { sku: t, isVisuallyHidden: !i, ...l });
        default:
            return null;
    }
}
function W(e) {
    let { location: t, ...i } = e;
    return (0, n.jsx)(F, { location: t, ...i });
}
function H(e) {
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
var V = i(460442),
    B = i(662349),
    Y = i(479026),
    z = i(636374),
    X = i(699976),
    K = i(202541),
    q = i(518477),
    Z = i(181554),
    J = i(880465);
let Q = X.Z.SIZE_133;
function $(e) {
    var t;
    let i,
        {
            item: s,
            wishlistOwner: r,
            guildId: d,
            currentUser: c,
            style: u,
            isDragging: g,
            dragHandle: m,
            skuPreviewStyle: x,
            skuPreviewHoverStyle: f,
            skuAssetHoverClassName: h,
            isHoveringOrFocusing: I,
            setIsHoveringOrFocusing: A,
            onDetailsClick: v,
            onPurchaseClick: S,
            wishlistId: k,
            isItemOwned: T,
            cardBackdrop: y,
            isNew: N,
            onClick: R,
        } = e,
        w = l.useRef(null),
        L = l.useRef(A);
    (l.useEffect(() => {
        L.current = A;
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
                L.current(!1);
            }
        }, []));
    let { trackUserProfileWishlistAction: P } = (0, p.NJ)(),
        O = l.useCallback(() => {
            (R?.(),
                null != k &&
                    (P({
                        wishlistId: k,
                        action: q.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: s.sku.id,
                        productLines: new Set([s.sku.productLine]),
                    }),
                    v()));
        }, [v, s.sku, k, P, R]),
        D = l.useCallback(() => {
            (R?.(),
                null != k &&
                    (P({
                        wishlistId: k,
                        action: q.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: s.sku.id,
                        productLines: new Set([s.sku.productLine]),
                    }),
                    S()));
        }, [S, s.sku, k, P, R]),
        G = l.useCallback(() => {
            ((0, E.XA)(q.jM.SOMETHING_WENT_WRONG), o.O.announce(_.intl.string(_.t.F8FvUy)));
        }, []),
        M = null != m ? (0, n.jsx)("div", { ref: w, className: Z.BU, children: m }) : null,
        {
            onBodyClick: U,
            onOverlayClick: F,
            showOverlayButton: H,
            routesToGift: Y,
            label: X,
            icon: K,
        } = (0, z.P)({ wishlistOwner: r, isOwned: T, onDetailsClick: O, onPurchaseClick: D }),
        J = I && H;
    return (0, n.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, n.jsxs)(b.A, {
                sku: s.sku,
                user: r,
                guildId: d,
                spec: Q,
                cardStyle: a()(Z.Nr, u),
                skuPreviewStyle: a()(Z.ev, { [Z.go]: T && !I }, x, J ? f : void 0),
                skuAssetClassName: J ? h : void 0,
                disableHoverOrFocus: g,
                onHoverOrFocusChange: A,
                onClick: U,
                "aria-label":
                    ((t = s.sku),
                    (i = Y ? (0, C.T)(t) : _.intl.formatToPlainString(_.t.ZBB4Ty, { productName: (0, C.T)(t) })),
                    !0 === N ? _.intl.formatToPlainString(_.t.s9RZ1r, { label: i }) : i),
                children: [
                    !0 === N && (0, n.jsx)(j.A, { className: Z.Pf }),
                    y,
                    H && (0, n.jsx)(B.A, { spec: Q, onClick: F, isHoveringOrFocusing: I, label: X, icon: K }),
                    T && (0, n.jsx)(V.gS, { isHoveringOrFocusing: I }),
                    r.id === c.id &&
                        null != k &&
                        (0, n.jsx)(W, {
                            sku: s.sku,
                            isCardHovered: I,
                            spec: Q,
                            onError: G,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            M,
        ],
    });
}
function ee(e) {
    let { item: t, isItemOwned: i, wishlistOwner: s, currentUser: a, analyticsLocations: r, ...o } = e,
        d = l.useCallback(() => {
            (0, h.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: s,
                giftingOrigin: K.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, s, r]),
        u = l.useCallback(() => {
            let e = s.id === a.id;
            (0, I.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: K.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, s, a.id, r]);
    return (0, n.jsx)($, {
        item: t,
        wishlistOwner: s,
        isItemOwned: i,
        onDetailsClick: d,
        onPurchaseClick: u,
        analyticsLocations: r,
        currentUser: a,
        ...o,
    });
}
function et(e) {
    let {
            item: t,
            wishlistOwner: i,
            isItemOwned: s,
            analyticsLocations: o,
            currentUser: d,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        m = (0, Y.e)({
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
        h = f === r.R.AVATAR_DECORATION || f === r.R.PROFILE_FRAME;
    return (0, n.jsx)($, {
        item: t,
        wishlistOwner: i,
        isItemOwned: s,
        currentUser: d,
        onDetailsClick: m,
        onPurchaseClick: x,
        isHoveringOrFocusing: c,
        skuPreviewHoverStyle: a()({ [Z.mn]: h }),
        analyticsLocations: o,
        ...u,
    });
}
function ei(e) {
    let {
            item: t,
            isItemOwned: i,
            wishlistOwner: s,
            currentUser: a,
            analyticsLocations: r,
            isHoveringOrFocusing: o,
            ...d
        } = e,
        c = l.useCallback(() => {
            if (i) return void (0, x.x)(A.closeUserProfileModal);
            let e = s.id === a.id,
                n = t.skuId;
            (0, m.A)({
                isGift: !e,
                giftRecipient: s,
                giftingOrigin: K.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: n,
                analyticsLocations: r,
                ...(0, f.Dv)(n, !e, "user_profile_wishlist_item_card"),
            });
        }, [i, t.skuId, s, a.id, r]);
    return (0, n.jsx)($, {
        item: t,
        wishlistOwner: s,
        isItemOwned: i,
        currentUser: a,
        onDetailsClick: c,
        onPurchaseClick: c,
        isHoveringOrFocusing: o,
        skuPreviewStyle: J.MO,
        skuAssetHoverClassName: J.iR,
        analyticsLocations: r,
        ...d,
    });
}
function en(e) {
    let { item: t, wishlistOwner: i, wishlistId: s, analyticsLocations: a, ...r } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(a ?? []),
            t.sku?.productLine === L.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, d.bG)([v.default], () => v.default.getCurrentUser()),
        [m, x] = l.useState(!1),
        f = (0, d.bG)([S.A], () => S.A.hasSentGift(t.skuId, i.id), [i, t.skuId]),
        h = l.useMemo(
            () => t.skuProductLine !== L.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case L.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(ee, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: i,
                wishlistId: s,
                ...r,
            });
        case L.EZt.COLLECTIBLES:
            return (0, n.jsx)(et, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: i,
                wishlistId: s,
                ...r,
            });
        case L.EZt.PREMIUM:
            return (0, n.jsx)(ei, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: i,
                wishlistId: s,
                ...r,
            });
        default:
            return null;
    }
}
