i.d(t, { A: () => ea });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(575593),
    o = i(17928),
    d = i(765178),
    c = i(793574),
    u = i(688810),
    g = i(44120),
    m = i(75678),
    x = i(87719),
    f = i(317560),
    h = i(99161),
    p = i(183555),
    I = i(402860),
    A = i(827258),
    j = i(384377),
    E = i(287809),
    v = i(661492),
    C = i(228366);
let S = { sentGifts: {} };
function b(e, t) {
    return `${e}:${t}`;
}
class k extends o.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((S = e), this.cleanupExpiredGifts());
    }
    getState() {
        return S;
    }
    hasSentGift(e, t) {
        let i = b(e, t),
            n = S.sentGifts[i];
        return !(null == n || new Date(n.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let i = b(e, t),
            n = S.sentGifts[i];
        return null == n || new Date(n.expiresAt) < new Date() ? null : n;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, i] of Object.entries(S.sentGifts)) new Date(i.expiresAt) < e && delete S.sentGifts[t];
    }
}
let y = new k(C.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = b(e.skuId, e.recipientId),
            i = new Date(),
            n = new Date(i.getTime() + 1728e5);
        S.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: i.toISOString(),
            expiresAt: n.toISOString(),
        };
    },
});
var T = i(146423),
    N = i(590180),
    R = i(139146),
    w = i(113265),
    L = i(152472),
    _ = i(471505),
    P = i(280450),
    O = i(652215),
    D = i(375708),
    G = i(376932);
function M(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function U(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: d,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, _.G)({ userId: r, sku: i, location: l, onError: s }),
        m = Y();
    return (0, n.jsx)("div", {
        className: G.U,
        style: M(t),
        children: (0, n.jsx)(R._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: d,
            isBusy: c,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: m,
            ...a,
        }),
    });
}
function F(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: d,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, L.c)({ userId: r, skuId: i.id, location: l, onError: s }),
        m = Y();
    return (0, n.jsx)("div", {
        className: G.U,
        style: M(t),
        children: (0, n.jsx)(R._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: d,
            isBusy: c,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: m,
            ...a,
        }),
    });
}
function W(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: d,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, L.c)({ userId: r, skuId: i.id, location: l, onError: s }),
        m = Y();
    return (0, n.jsx)("div", {
        className: G.U,
        style: M(t),
        children: (0, n.jsx)(R._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: d,
            isBusy: c,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: m,
            ...a,
        }),
    });
}
function H(e) {
    let { spec: t, product: i, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: d,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: x,
        } = (0, w.z)({ userId: r, product: i, location: l, onError: s }),
        f = (0, v.q)(m),
        h = x && !d,
        p = !f || h,
        I = Y(f && h ? D.intl.string(D.t.nKA6v8) : void 0);
    return (0, n.jsx)("div", {
        className: G.U,
        style: M(t),
        children: (0, n.jsx)(R._, {
            skuId: m.skuId,
            productName: m.name,
            size: t.wishlistButtonSize,
            disabled: p,
            isWishlisted: d,
            isBusy: c,
            isFirstTimeWishlister: u,
            onClick: g,
            tooltipConfig: I,
            ...a,
        }),
    });
}
function V(e) {
    let { sku: t, isCardHovered: i, ...l } = e,
        s = (0, o.bG)([N.A], () => N.A.getProduct(t.id));
    switch (t.productLine) {
        case O.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(U, { sku: t, isVisuallyHidden: !i, ...l });
        case O.EZt.COLLECTIBLES:
            if (null == s) return (0, n.jsx)(F, { sku: t, isVisuallyHidden: !i, ...l });
            return (0, n.jsx)(H, { product: s, isVisuallyHidden: !i, ...l });
        case O.EZt.PREMIUM:
            return (0, n.jsx)(W, { sku: t, isVisuallyHidden: !i, ...l });
        default:
            return null;
    }
}
function B(e) {
    let { location: t, ...i } = e;
    return (0, n.jsx)(V, { location: t, ...i });
}
function Y(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: D.intl.string(D.t["5B3F2W"]),
            add: D.intl.string(D.t.Hcgz2S),
            remove: D.intl.string(D.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var z = i(460442),
    X = i(662349),
    K = i(479026),
    q = i(636374),
    J = i(699976),
    Z = i(202541),
    Q = i(518477),
    $ = i(181554),
    ee = i(880465);
let et = J.Z.SIZE_133;
function ei(e) {
    var t;
    let i,
        {
            item: s,
            wishlistOwner: r,
            guildId: o,
            currentUser: c,
            style: u,
            isDragging: g,
            dragHandle: m,
            skuPreviewStyle: x,
            skuPreviewHoverStyle: f,
            skuAssetHoverClassName: h,
            isHoveringOrFocusing: I,
            setIsHoveringOrFocusing: E,
            onDetailsClick: C,
            onPurchaseClick: S,
            wishlistId: b,
            isItemOwned: k,
            cardBackdrop: y,
            isNew: N,
            onClick: R,
        } = e,
        w = l.useRef(null),
        L = l.useRef(E);
    (l.useEffect(() => {
        L.current = E;
    }, [E]),
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
    let { trackUserProfileWishlistAction: _ } = (0, p.NJ)(),
        P = l.useCallback(() => {
            (R?.(),
                null != b &&
                    (_({
                        wishlistId: b,
                        action: Q.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: s.sku.id,
                        productLines: new Set([s.sku.productLine]),
                    }),
                    C()));
        }, [C, s.sku, b, _, R]),
        O = l.useCallback(() => {
            (R?.(),
                null != b &&
                    (_({
                        wishlistId: b,
                        action: Q.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: s.sku.id,
                        productLines: new Set([s.sku.productLine]),
                    }),
                    S()));
        }, [S, s.sku, b, _, R]),
        G = l.useCallback(() => {
            ((0, j.XA)(Q.jM.SOMETHING_WENT_WRONG), d.O.announce(D.intl.string(D.t.F8FvUy)));
        }, []),
        M = null != m ? (0, n.jsx)("div", { ref: w, className: $.BU, children: m }) : null,
        {
            onBodyClick: U,
            onOverlayClick: F,
            showOverlayButton: W,
            routesToGift: H,
            label: V,
            icon: Y,
        } = (0, q.P)({ wishlistOwner: r, isOwned: k, onDetailsClick: P, onPurchaseClick: O }),
        K = I && W;
    return (0, n.jsxs)("div", {
        className: $.kL,
        children: [
            (0, n.jsxs)(T.A, {
                sku: s.sku,
                user: r,
                guildId: o,
                spec: et,
                cardStyle: a()($.Nr, u),
                skuPreviewStyle: a()($.ev, { [$.go]: k && !I }, x, K ? f : void 0),
                skuAssetClassName: K ? h : void 0,
                disableHoverOrFocus: g,
                onHoverOrFocusChange: E,
                onClick: U,
                "aria-label":
                    ((t = s.sku),
                    (i = H ? (0, v.T)(t) : D.intl.formatToPlainString(D.t.ZBB4Ty, { productName: (0, v.T)(t) })),
                    !0 === N ? D.intl.formatToPlainString(D.t.s9RZ1r, { label: i }) : i),
                children: [
                    !0 === N && (0, n.jsx)(A.A, { className: $.Pf }),
                    y,
                    W && (0, n.jsx)(X.A, { spec: et, onClick: F, isHoveringOrFocusing: I, label: V, icon: Y }),
                    k && (0, n.jsx)(z.gS, { isHoveringOrFocusing: I }),
                    r.id === c.id &&
                        null != b &&
                        (0, n.jsx)(B, {
                            sku: s.sku,
                            isCardHovered: I,
                            spec: et,
                            onError: G,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            M,
        ],
    });
}
function en(e) {
    let { item: t, isItemOwned: i, wishlistOwner: s, currentUser: a, analyticsLocations: r, ...o } = e,
        d = l.useCallback(() => {
            (0, f.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: s,
                giftingOrigin: Z.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, s, r]),
        u = l.useCallback(() => {
            let e = s.id === a.id;
            (0, h.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: Z.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, s, a.id, r]);
    return (0, n.jsx)(ei, {
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
function el(e) {
    let {
            item: t,
            wishlistOwner: i,
            isItemOwned: s,
            analyticsLocations: o,
            currentUser: d,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        m = (0, K.e)({
            sku: t.sku,
            giftRecipient: i,
            giftingOrigin: Z.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        x = l.useMemo(
            () => () => {
                let e = i.id === d.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: Z.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: i,
                });
            },
            [t.sku, i, d.id, o],
        ),
        f = t.sku.tenantMetadata?.collectibles?.type,
        h = f === r.R.AVATAR_DECORATION || f === r.R.PROFILE_FRAME;
    return (0, n.jsx)(ei, {
        item: t,
        wishlistOwner: i,
        isItemOwned: s,
        currentUser: d,
        onDetailsClick: m,
        onPurchaseClick: x,
        isHoveringOrFocusing: c,
        skuPreviewHoverStyle: a()({ [$.mn]: h }),
        analyticsLocations: o,
        ...u,
    });
}
function es(e) {
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
            if (i) return void (0, x.x)(I.closeUserProfileModal);
            let e = s.id === a.id,
                n = t.skuId;
            (0, m.A)({
                isGift: !e,
                giftRecipient: s,
                giftingOrigin: Z.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: n,
                analyticsLocations: r,
            });
        }, [i, t.skuId, s, a.id, r]);
    return (0, n.jsx)(ei, {
        item: t,
        wishlistOwner: s,
        isItemOwned: i,
        currentUser: a,
        onDetailsClick: c,
        onPurchaseClick: c,
        isHoveringOrFocusing: o,
        skuPreviewStyle: ee.MO,
        skuAssetHoverClassName: ee.iR,
        analyticsLocations: r,
        ...d,
    });
}
function ea(e) {
    let { item: t, wishlistOwner: i, wishlistId: s, analyticsLocations: a, ...r } = e,
        { analyticsLocations: d } = (0, u.Ay)(
            ...(a ?? []),
            t.sku?.productLine === O.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        [m, x] = l.useState(!1),
        f = (0, o.bG)([y], () => y.hasSentGift(t.skuId, i.id), [i, t.skuId]),
        h = l.useMemo(
            () => t.skuProductLine !== O.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case O.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(en, {
                item: t,
                analyticsLocations: d,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: i,
                wishlistId: s,
                ...r,
            });
        case O.EZt.COLLECTIBLES:
            return (0, n.jsx)(el, {
                item: t,
                analyticsLocations: d,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: x,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: i,
                wishlistId: s,
                ...r,
            });
        case O.EZt.PREMIUM:
            return (0, n.jsx)(es, {
                item: t,
                analyticsLocations: d,
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
