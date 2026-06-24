i.d(t, { A: () => ec });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(575593),
    c = i(765178),
    o = i(17928),
    u = i(793574),
    d = i(688810),
    g = i(44120),
    m = i(532794),
    f = i(87719),
    x = i(31969),
    p = i(317560),
    I = i(533406),
    A = i(183555),
    E = i(975732),
    h = i(606758),
    j = i(287809),
    N = i(474090),
    T = i(661492),
    v = i(228366);
let _ = { sentGifts: {} };
function S(e, t) {
    return `${e}:${t}`;
}
class O extends o.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((_ = e), this.cleanupExpiredGifts());
    }
    getState() {
        return _;
    }
    hasSentGift(e, t) {
        let i = S(e, t),
            n = _.sentGifts[i];
        return !(null == n || new Date(n.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let i = S(e, t),
            n = _.sentGifts[i];
        return null == n || new Date(n.expiresAt) < new Date() ? null : n;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, i] of Object.entries(_.sentGifts)) new Date(i.expiresAt) < e && delete _.sentGifts[t];
    }
}
let C = new O(v.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = S(e.skuId, e.recipientId),
            i = new Date(),
            n = new Date(i.getTime() + 1728e5);
        _.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: i.toISOString(),
            expiresAt: n.toISOString(),
        };
    },
});
var k = i(212387),
    R = i(590180),
    b = i(139146),
    D = i(113265),
    G = i(152472),
    L = i(274681),
    w = i(471505),
    P = i(495544),
    y = i(652215),
    M = i(375708),
    F = i(948277);
function U(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function W(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            handleToggle: g,
        } = (0, w.G)({ userId: r, sku: i, location: l, onError: s }),
        m = K();
    return (0, n.jsx)("div", {
        className: F.U,
        style: U(t),
        children: (0, n.jsx)(b._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            onClick: g,
            tooltipConfig: m,
            ...a,
        }),
    });
}
function H(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            handleToggle: g,
        } = (0, G.c)({ userId: r, skuId: i.id, location: l, onError: s }),
        m = K();
    return (0, n.jsx)("div", {
        className: F.U,
        style: U(t),
        children: (0, n.jsx)(b._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            onClick: g,
            tooltipConfig: m,
            ...a,
        }),
    });
}
function B(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            handleToggle: g,
        } = (0, G.c)({ userId: r, skuId: i.id, location: l, onError: s, onAddSuccess: L.w }),
        m = K();
    return (0, n.jsx)("div", {
        className: F.U,
        style: U(t),
        children: (0, n.jsx)(b._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            onClick: g,
            tooltipConfig: m,
            ...a,
        }),
    });
}
function V(e) {
    let { spec: t, product: i, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: f,
        } = (0, D.z)({ userId: r, product: i, location: l, onError: s }),
        x = (0, T.qq)(m),
        p = f && !c,
        I = !x || p,
        A = K(x && p ? M.intl.string(M.t.nKA6v8) : void 0);
    return (0, n.jsx)("div", {
        className: F.U,
        style: U(t),
        children: (0, n.jsx)(b._, {
            skuId: m.skuId,
            productName: m.name,
            size: t.wishlistButtonSize,
            disabled: I,
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            onClick: g,
            tooltipConfig: A,
            ...a,
        }),
    });
}
function X(e) {
    let { sku: t, isCardHovered: i, ...l } = e,
        s = (0, o.bG)([R.A], () => R.A.getProduct(t.id));
    switch (t.productLine) {
        case y.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(W, { sku: t, isVisuallyHidden: !i, ...l });
        case y.EZt.COLLECTIBLES:
            if (null == s) return (0, n.jsx)(H, { sku: t, isVisuallyHidden: !i, ...l });
            return (0, n.jsx)(V, { product: s, isVisuallyHidden: !i, ...l });
        case y.EZt.PREMIUM:
            return (0, n.jsx)(B, { sku: t, isVisuallyHidden: !i, ...l });
        default:
            return null;
    }
}
function z(e) {
    let { location: t, ...i } = e;
    return (0, n.jsx)(X, { location: t, ...i });
}
function K(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: M.intl.string(M.t["5B3F2W"]),
            add: M.intl.string(M.t.Hcgz2S),
            remove: M.intl.string(M.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var Y = i(74135),
    q = i(460442),
    Q = i(662349),
    J = i(479026),
    Z = i(699976),
    $ = i(788868),
    ee = i(518477),
    et = i(575581),
    ei = i(997990);
let en = Z.Z.SIZE_133;
function el(e) {
    let {
            item: t,
            wishlistOwner: i,
            currentUser: s,
            style: r,
            isDragging: o,
            dragHandle: u,
            skuPreviewStyle: d,
            skuAssetClassName: g,
            isHoveringOrFocusing: m,
            setIsHoveringOrFocusing: f,
            onDetailsClick: x,
            onPurchaseClick: p,
            wishlistId: I,
            isItemOwned: E,
            cardBackdrop: j,
            promotion: N,
        } = e,
        v = l.useRef(null),
        _ = l.useRef(f);
    l.useEffect(() => {
        _.current = f;
    }, [f]),
        l.useEffect(() => {
            let e = v.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", t),
                    () => {
                        e.removeEventListener("focusin", t);
                    }
                );
            function t() {
                _.current(!1);
            }
        }, []);
    let { trackUserProfileWishlistAction: S } = (0, A.NJ)(),
        O = l.useCallback(() => {
            null != I &&
                (S({
                    wishlistId: I,
                    action: ee.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, I, S]),
        C = l.useCallback(() => {
            null != I &&
                (S({
                    wishlistId: I,
                    action: ee.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                p());
        }, [p, t.sku, I, S]),
        R = l.useCallback(() => {
            (0, h.XA)(ee.jM.SOMETHING_WENT_WRONG), c.O.announce(M.intl.string(M.t.F8FvUy));
        }, []),
        b = null != u ? (0, n.jsx)("div", { ref: v, className: et.BU, children: u }) : null,
        { label: D, icon: G, isPromptingPurchase: L } = (0, Q.h)({ wishlistOwner: i, isOwned: E });
    return (0, n.jsxs)("div", {
        className: et.kL,
        children: [
            (0, n.jsxs)(k.A, {
                sku: t.sku,
                user: i,
                spec: en,
                cardStyle: a()(et.Nr, r),
                skuPreviewStyle: a()(et.ev, { [et.go]: E && !m }, d),
                skuAssetClassName: g,
                disableHoverOrFocus: o,
                onHoverOrFocusChange: f,
                onClick: O,
                "aria-label": M.intl.formatToPlainString(M.t.ZBB4Ty, { productName: (0, T.TC)(t.sku) }),
                children: [
                    j,
                    (0, n.jsx)(Q.A, { spec: en, onClick: L ? C : O, isHoveringOrFocusing: m, label: D, icon: G }),
                    !m && !E && N,
                    E && (0, n.jsx)(q.gS, { isHoveringOrFocusing: m }),
                    i.id === s.id &&
                        null != I &&
                        (0, n.jsx)(z, {
                            sku: t.sku,
                            isCardHovered: m,
                            spec: en,
                            onError: R,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            b,
        ],
    });
}
function es(e) {
    let { item: t, isItemOwned: i, wishlistOwner: s, currentUser: a, analyticsLocations: r, ...c } = e,
        o = (0, x.F)(s.id === a.id ? "sku_purchase_badge" : "sku_gift_badge", {
            applicationId: t.sku.applicationId,
            skuId: t.skuId,
        }),
        d = l.useCallback(() => {
            (0, p.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: s,
                giftingOrigin: $.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, s, r]),
        g = l.useCallback(() => {
            let e = s.id === a.id;
            (0, I.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: $.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, s, a.id, r]);
    return (0, n.jsx)(el, {
        item: t,
        wishlistOwner: s,
        isItemOwned: i,
        onDetailsClick: d,
        onPurchaseClick: g,
        analyticsLocations: r,
        currentUser: a,
        promotion: null != o && (0, n.jsx)(Y.s, { spec: en, icon: o.Icon, tooltipText: o.tooltip }),
        ...c,
    });
}
function ea(e) {
    let {
            item: t,
            wishlistOwner: i,
            isItemOwned: s,
            analyticsLocations: c,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        m = (0, J.e)({
            sku: t.sku,
            giftRecipient: i,
            giftingOrigin: $.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: c,
        }),
        f = l.useMemo(
            () => () => {
                let e = i.id === o.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: $.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: c ?? [],
                    giftRecipient: i,
                });
            },
            [t.sku, i, o.id, c],
        ),
        x = t.sku.tenantMetadata?.collectibles?.type,
        p = u && (x === r.R.AVATAR_DECORATION || x === r.R.PROFILE_FRAME);
    return (0, n.jsx)(el, {
        item: t,
        wishlistOwner: i,
        isItemOwned: s,
        currentUser: o,
        onDetailsClick: m,
        onPurchaseClick: f,
        isHoveringOrFocusing: u,
        skuPreviewStyle: a()({ [et.mn]: p }),
        analyticsLocations: c,
        ...d,
    });
}
function er(e) {
    let {
            item: t,
            isItemOwned: i,
            wishlistOwner: s,
            currentUser: a,
            analyticsLocations: r,
            isHoveringOrFocusing: c,
            ...o
        } = e,
        u = l.useCallback(() => {
            if (i) return void (0, f.x)(E.closeUserProfileModal);
            let e = s.id === a.id;
            (0, m.A)({
                isGift: !e,
                giftRecipient: s,
                giftingOrigin: $.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: t.skuId,
                analyticsLocations: r,
            });
        }, [i, t.skuId, s, a.id, r]);
    return (0, n.jsx)(el, {
        item: t,
        wishlistOwner: s,
        isItemOwned: i,
        currentUser: a,
        onDetailsClick: u,
        onPurchaseClick: u,
        isHoveringOrFocusing: c,
        skuPreviewStyle: ei.MO,
        skuAssetClassName: c ? ei.iR : void 0,
        analyticsLocations: r,
        ...o,
    });
}
function ec(e) {
    let { item: t, wishlistOwner: i, wishlistId: s, analyticsLocations: a, ...r } = e,
        { analyticsLocations: c } = (0, d.Ay)(
            ...(a ?? []),
            t.sku?.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM ? u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, o.bG)([j.default], () => j.default.getCurrentUser()),
        [m, f] = l.useState(!1),
        x = (0, o.bG)([C], () => C.hasSentGift(t.skuId, i.id), [i, t.skuId]),
        p = l.useMemo(
            () =>
                t.skuProductLine === y.EZt.PREMIUM
                    ? null != g && i.id === g.id && (0, N.ki)(g, $.WN[t.skuId])
                    : !0 === t.isOwned || x,
            [t.isOwned, t.skuId, t.skuProductLine, x, g, i.id],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case y.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(es, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: p,
                wishlistOwner: i,
                wishlistId: s,
                ...r,
            });
        case y.EZt.COLLECTIBLES:
            return (0, n.jsx)(ea, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: p,
                wishlistOwner: i,
                wishlistId: s,
                ...r,
            });
        case y.EZt.PREMIUM:
            return (0, n.jsx)(er, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: p,
                wishlistOwner: i,
                wishlistId: s,
                ...r,
            });
        default:
            return null;
    }
}
