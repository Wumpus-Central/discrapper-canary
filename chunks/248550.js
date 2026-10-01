n.d(t, { A: () => ea });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(575593),
    o = n(17928),
    d = n(765178),
    c = n(793574),
    u = n(688810),
    g = n(44120),
    m = n(75678),
    f = n(87719),
    x = n(317560),
    h = n(99161),
    p = n(183555),
    I = n(402860),
    E = n(827258),
    A = n(384377),
    j = n(287809),
    v = n(661492),
    C = n(228366);
let b = { sentGifts: {} };
function k(e, t) {
    return `${e}:${t}`;
}
class S extends o.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((b = e), this.cleanupExpiredGifts());
    }
    getState() {
        return b;
    }
    hasSentGift(e, t) {
        let n = k(e, t),
            i = b.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = k(e, t),
            i = b.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(b.sentGifts)) new Date(n.expiresAt) < e && delete b.sentGifts[t];
    }
}
let y = new S(C.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = k(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        b.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var R = n(146423),
    N = n(590180),
    T = n(139146),
    w = n(113265),
    L = n(152472),
    P = n(471505),
    _ = n(280450),
    O = n(652215),
    D = n(375708),
    G = n(376932);
function M(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function U(e) {
    let { spec: t, sku: n, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([_.default], () => _.default.getId()),
        {
            isWishlisted: d,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, P.G)({ userId: r, sku: n, location: l, onError: s }),
        m = K();
    return (0, i.jsx)("div", {
        className: G.U,
        style: M(t),
        children: (0, i.jsx)(T._, {
            skuId: n.id,
            productName: n.name,
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
    let { spec: t, sku: n, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([_.default], () => _.default.getId()),
        {
            isWishlisted: d,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, L.c)({ userId: r, skuId: n.id, location: l, onError: s }),
        m = K();
    return (0, i.jsx)("div", {
        className: G.U,
        style: M(t),
        children: (0, i.jsx)(T._, {
            skuId: n.id,
            productName: n.name,
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
    let { spec: t, sku: n, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([_.default], () => _.default.getId()),
        {
            isWishlisted: d,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, L.c)({ userId: r, skuId: n.id, location: l, onError: s }),
        m = K();
    return (0, i.jsx)("div", {
        className: G.U,
        style: M(t),
        children: (0, i.jsx)(T._, {
            skuId: n.id,
            productName: n.name,
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
    let { spec: t, product: n, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([_.default], () => _.default.getId()),
        {
            isWishlisted: d,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: f,
        } = (0, w.z)({ userId: r, product: n, location: l, onError: s }),
        x = (0, v.q)(m),
        h = f && !d,
        p = !x || h,
        I = K(x && h ? D.intl.string(D.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: G.U,
        style: M(t),
        children: (0, i.jsx)(T._, {
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
function B(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        s = (0, o.bG)([N.A], () => N.A.getProduct(t.id));
    switch (t.productLine) {
        case O.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(U, { sku: t, isVisuallyHidden: !n, ...l });
        case O.EZt.COLLECTIBLES:
            if (null == s) return (0, i.jsx)(F, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(H, { product: s, isVisuallyHidden: !n, ...l });
        case O.EZt.PREMIUM:
            return (0, i.jsx)(W, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function V(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(B, { location: t, ...n });
}
function K(e) {
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
var z = n(460442),
    X = n(662349),
    Y = n(479026),
    q = n(636374),
    J = n(699976),
    Z = n(202541),
    Q = n(518477),
    $ = n(181554),
    ee = n(880465);
let et = J.Z.SIZE_133;
function en(e) {
    var t;
    let n,
        {
            item: s,
            wishlistOwner: r,
            guildId: o,
            currentUser: c,
            style: u,
            isDragging: g,
            dragHandle: m,
            skuPreviewStyle: f,
            skuPreviewHoverStyle: x,
            skuAssetHoverClassName: h,
            isHoveringOrFocusing: I,
            setIsHoveringOrFocusing: j,
            onDetailsClick: C,
            onPurchaseClick: b,
            wishlistId: k,
            isItemOwned: S,
            cardBackdrop: y,
            isNew: N,
            onClick: T,
        } = e,
        w = l.useRef(null),
        L = l.useRef(j);
    (l.useEffect(() => {
        L.current = j;
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
                L.current(!1);
            }
        }, []));
    let { trackUserProfileWishlistAction: P } = (0, p.NJ)(),
        _ = l.useCallback(() => {
            (T?.(),
                null != k &&
                    (P({
                        wishlistId: k,
                        action: Q.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: s.sku.id,
                        productLines: new Set([s.sku.productLine]),
                    }),
                    C()));
        }, [C, s.sku, k, P, T]),
        O = l.useCallback(() => {
            (T?.(),
                null != k &&
                    (P({
                        wishlistId: k,
                        action: Q.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: s.sku.id,
                        productLines: new Set([s.sku.productLine]),
                    }),
                    b()));
        }, [b, s.sku, k, P, T]),
        G = l.useCallback(() => {
            ((0, A.XA)(Q.jM.SOMETHING_WENT_WRONG), d.O.announce(D.intl.string(D.t.F8FvUy)));
        }, []),
        M = null != m ? (0, i.jsx)("div", { ref: w, className: $.BU, children: m }) : null,
        {
            onBodyClick: U,
            onOverlayClick: F,
            showOverlayButton: W,
            routesToGift: H,
            label: B,
            icon: K,
        } = (0, q.P)({ wishlistOwner: r, isOwned: S, onDetailsClick: _, onPurchaseClick: O }),
        Y = I && W;
    return (0, i.jsxs)("div", {
        className: $.kL,
        children: [
            (0, i.jsxs)(R.A, {
                sku: s.sku,
                user: r,
                guildId: o,
                spec: et,
                cardStyle: a()($.Nr, u),
                skuPreviewStyle: a()($.ev, { [$.go]: S && !I }, f, Y ? x : void 0),
                skuAssetClassName: Y ? h : void 0,
                disableHoverOrFocus: g,
                onHoverOrFocusChange: j,
                onClick: U,
                "aria-label":
                    ((t = s.sku),
                    (n = H ? (0, v.T)(t) : D.intl.formatToPlainString(D.t.ZBB4Ty, { productName: (0, v.T)(t) })),
                    !0 === N ? D.intl.formatToPlainString(D.t.s9RZ1r, { label: n }) : n),
                children: [
                    !0 === N && (0, i.jsx)(E.A, { className: $.Pf }),
                    y,
                    W && (0, i.jsx)(X.A, { spec: et, onClick: F, isHoveringOrFocusing: I, label: B, icon: K }),
                    S && (0, i.jsx)(z.gS, { isHoveringOrFocusing: I }),
                    r.id === c.id &&
                        null != k &&
                        (0, i.jsx)(V, {
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
function ei(e) {
    let { item: t, isItemOwned: n, wishlistOwner: s, currentUser: a, analyticsLocations: r, ...o } = e,
        d = l.useCallback(() => {
            (0, x.R)({
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
    return (0, i.jsx)(en, {
        item: t,
        wishlistOwner: s,
        isItemOwned: n,
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
            wishlistOwner: n,
            isItemOwned: s,
            analyticsLocations: o,
            currentUser: d,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        m = (0, Y.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: Z.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        f = l.useMemo(
            () => () => {
                let e = n.id === d.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: Z.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, d.id, o],
        ),
        x = t.sku.tenantMetadata?.collectibles?.type,
        h = x === r.R.AVATAR_DECORATION || x === r.R.PROFILE_FRAME;
    return (0, i.jsx)(en, {
        item: t,
        wishlistOwner: n,
        isItemOwned: s,
        currentUser: d,
        onDetailsClick: m,
        onPurchaseClick: f,
        isHoveringOrFocusing: c,
        skuPreviewHoverStyle: a()({ [$.mn]: h }),
        analyticsLocations: o,
        ...u,
    });
}
function es(e) {
    let {
            item: t,
            isItemOwned: n,
            wishlistOwner: s,
            currentUser: a,
            analyticsLocations: r,
            isHoveringOrFocusing: o,
            ...d
        } = e,
        c = l.useCallback(() => {
            if (n) return void (0, f.x)(I.closeUserProfileModal);
            let e = s.id === a.id,
                i = t.skuId;
            (0, m.A)({
                isGift: !e,
                giftRecipient: s,
                giftingOrigin: Z.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: r,
            });
        }, [n, t.skuId, s, a.id, r]);
    return (0, i.jsx)(en, {
        item: t,
        wishlistOwner: s,
        isItemOwned: n,
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
    let { item: t, wishlistOwner: n, wishlistId: s, analyticsLocations: a, ...r } = e,
        { analyticsLocations: d } = (0, u.Ay)(
            ...(a ?? []),
            t.sku?.productLine === O.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, o.bG)([j.default], () => j.default.getCurrentUser()),
        [m, f] = l.useState(!1),
        x = (0, o.bG)([y], () => y.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        h = l.useMemo(
            () => t.skuProductLine !== O.EZt.PREMIUM && (!0 === t.isOwned || x),
            [t.isOwned, t.skuProductLine, x],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case O.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(ei, {
                item: t,
                analyticsLocations: d,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: n,
                wishlistId: s,
                ...r,
            });
        case O.EZt.COLLECTIBLES:
            return (0, i.jsx)(el, {
                item: t,
                analyticsLocations: d,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: n,
                wishlistId: s,
                ...r,
            });
        case O.EZt.PREMIUM:
            return (0, i.jsx)(es, {
                item: t,
                analyticsLocations: d,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: h,
                wishlistOwner: n,
                wishlistId: s,
                ...r,
            });
        default:
            return null;
    }
}
