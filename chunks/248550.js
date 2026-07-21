i.d(t, { A: () => eo });
var n = i(627968),
    s = i(64700),
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
    T = i(228366);
let v = { sentGifts: {} };
function N(e, t) {
    return `${e}:${t}`;
}
class b extends d.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((v = e), this.cleanupExpiredGifts());
    }
    getState() {
        return v;
    }
    hasSentGift(e, t) {
        let i = N(e, t),
            n = v.sentGifts[i];
        return !(null == n || new Date(n.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let i = N(e, t),
            n = v.sentGifts[i];
        return null == n || new Date(n.expiresAt) < new Date() ? null : n;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, i] of Object.entries(v.sentGifts)) new Date(i.expiresAt) < e && delete v.sentGifts[t];
    }
}
let C = new b(T.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = N(e.skuId, e.recipientId),
            i = new Date(),
            n = new Date(i.getTime() + 1728e5);
        v.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: i.toISOString(),
            expiresAt: n.toISOString(),
        };
    },
});
var w = i(212387),
    R = i(590180),
    k = i(139146),
    O = i(113265),
    y = i(152472),
    _ = i(274681),
    G = i(471505),
    L = i(280450),
    D = i(652215),
    P = i(375708),
    M = i(929389);
function U(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function F(e) {
    let { spec: t, sku: i, location: s, onError: l, ...r } = e,
        a = (0, d.bG)([L.default], () => L.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, G.G)({ userId: a, sku: i, location: s, onError: l }),
        m = z();
    return (0, n.jsx)("div", {
        className: M.U,
        style: U(t),
        children: (0, n.jsx)(k._, {
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
function W(e) {
    let { spec: t, sku: i, location: s, onError: l, ...r } = e,
        a = (0, d.bG)([L.default], () => L.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, y.c)({ userId: a, skuId: i.id, location: s, onError: l }),
        m = z();
    return (0, n.jsx)("div", {
        className: M.U,
        style: U(t),
        children: (0, n.jsx)(k._, {
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
function H(e) {
    let { spec: t, sku: i, location: s, onError: l, ...r } = e,
        a = (0, d.bG)([L.default], () => L.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, y.c)({ userId: a, skuId: i.id, location: s, onError: l, onAddSuccess: _.w }),
        m = z();
    return (0, n.jsx)("div", {
        className: M.U,
        style: U(t),
        children: (0, n.jsx)(k._, {
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
function B(e) {
    let { spec: t, product: i, location: s, onError: l, ...r } = e,
        a = (0, d.bG)([L.default], () => L.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: f,
        } = (0, O.z)({ userId: a, product: i, location: s, onError: l }),
        x = (0, S.q)(m),
        h = f && !o,
        I = !x || h,
        p = z(x && h ? P.intl.string(P.t.nKA6v8) : void 0);
    return (0, n.jsx)("div", {
        className: M.U,
        style: U(t),
        children: (0, n.jsx)(k._, {
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
function V(e) {
    let { sku: t, isCardHovered: i, ...s } = e,
        l = (0, d.bG)([R.A], () => R.A.getProduct(t.id));
    switch (t.productLine) {
        case D.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(F, { sku: t, isVisuallyHidden: !i, ...s });
        case D.EZt.COLLECTIBLES:
            if (null == l) return (0, n.jsx)(W, { sku: t, isVisuallyHidden: !i, ...s });
            return (0, n.jsx)(B, { product: l, isVisuallyHidden: !i, ...s });
        case D.EZt.PREMIUM:
            return (0, n.jsx)(H, { sku: t, isVisuallyHidden: !i, ...s });
        default:
            return null;
    }
}
function X(e) {
    let { location: t, ...i } = e;
    return (0, n.jsx)(V, { location: t, ...i });
}
function z(e) {
    return s.useMemo(
        () => ({
            firstTimeBody: P.intl.string(P.t["5B3F2W"]),
            add: P.intl.string(P.t.Hcgz2S),
            remove: P.intl.string(P.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var Y = i(74135),
    K = i(460442),
    q = i(662349),
    Q = i(479026),
    J = i(636374),
    Z = i(699976),
    $ = i(202541),
    ee = i(518477),
    et = i(785797),
    ei = i(134222);
let en = Z.Z.SIZE_133;
function es(e) {
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
            cardBackdrop: v,
            promotion: N,
        } = e,
        b = s.useRef(null),
        C = s.useRef(h);
    s.useEffect(() => {
        C.current = h;
    }, [h]),
        s.useEffect(() => {
            let e = b.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", t),
                    () => {
                        e.removeEventListener("focusin", t);
                    }
                );
            function t() {
                C.current(!1);
            }
        }, []);
    let { trackUserProfileWishlistAction: R } = (0, p.NJ)(),
        k = s.useCallback(() => {
            null != E &&
                (R({
                    wishlistId: E,
                    action: ee.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                I());
        }, [I, t.sku, E, R]),
        O = s.useCallback(() => {
            null != E &&
                (R({
                    wishlistId: E,
                    action: ee.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                A());
        }, [A, t.sku, E, R]),
        y = s.useCallback(() => {
            (0, j.XA)(ee.jM.SOMETHING_WENT_WRONG), o.O.announce(P.intl.string(P.t.F8FvUy));
        }, []),
        _ = null != u ? (0, n.jsx)("div", { ref: b, className: et.BU, children: u }) : null,
        {
            onBodyClick: G,
            onOverlayClick: L,
            showOverlayButton: D,
            routesToGift: M,
            label: U,
            icon: F,
        } = (0, J.P)({ wishlistOwner: i, isOwned: T, onDetailsClick: k, onPurchaseClick: O });
    return (0, n.jsxs)("div", {
        className: et.kL,
        children: [
            (0, n.jsxs)(w.A, {
                sku: t.sku,
                user: i,
                guildId: l,
                spec: en,
                cardStyle: r()(et.Nr, d),
                skuPreviewStyle: r()(et.ev, { [et.go]: T && !x }, g, x && D ? m : void 0),
                skuAssetClassName: x && D ? f : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: h,
                onClick: G,
                "aria-label": M
                    ? (0, S.T)(t.sku)
                    : P.intl.formatToPlainString(P.t.ZBB4Ty, { productName: (0, S.T)(t.sku) }),
                children: [
                    v,
                    D && (0, n.jsx)(q.A, { spec: en, onClick: L, isHoveringOrFocusing: x, label: U, icon: F }),
                    !x && !T && N,
                    T && (0, n.jsx)(K.gS, { isHoveringOrFocusing: x }),
                    i.id === a.id &&
                        null != E &&
                        (0, n.jsx)(X, {
                            sku: t.sku,
                            isCardHovered: x,
                            spec: en,
                            onError: y,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            _,
        ],
    });
}
function el(e) {
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
                giftingOrigin: $.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, l, a]),
        g = s.useCallback(() => {
            let e = l.id === r.id;
            (0, I.a)(
                t.sku,
                { isGift: !e, giftRecipient: l, giftingOrigin: $.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, l, r.id, a]);
    return (0, n.jsx)(es, {
        item: t,
        wishlistOwner: l,
        isItemOwned: i,
        onDetailsClick: u,
        onPurchaseClick: g,
        analyticsLocations: a,
        currentUser: r,
        promotion: null != d && (0, n.jsx)(Y.s, { spec: en, icon: d.Icon, tooltipText: d.tooltip }),
        ...o,
    });
}
function er(e) {
    let {
            item: t,
            wishlistOwner: i,
            isItemOwned: l,
            analyticsLocations: o,
            currentUser: d,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        m = (0, Q.e)({
            sku: t.sku,
            giftRecipient: i,
            giftingOrigin: $.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        f = s.useMemo(
            () => () => {
                let e = i.id === d.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: $.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: i,
                });
            },
            [t.sku, i, d.id, o],
        ),
        x = t.sku.tenantMetadata?.collectibles?.type,
        h = x === a.R.AVATAR_DECORATION || x === a.R.PROFILE_FRAME;
    return (0, n.jsx)(es, {
        item: t,
        wishlistOwner: i,
        isItemOwned: l,
        currentUser: d,
        onDetailsClick: m,
        onPurchaseClick: f,
        isHoveringOrFocusing: c,
        skuPreviewHoverStyle: r()({ [et.mn]: h }),
        analyticsLocations: o,
        ...u,
    });
}
function ea(e) {
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
                giftingOrigin: $.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: t.skuId,
                analyticsLocations: a,
            });
        }, [i, t.skuId, l, r.id, a]);
    return (0, n.jsx)(es, {
        item: t,
        wishlistOwner: l,
        isItemOwned: i,
        currentUser: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        isHoveringOrFocusing: o,
        skuPreviewStyle: ei.MO,
        skuAssetHoverClassName: ei.iR,
        analyticsLocations: a,
        ...d,
    });
}
function eo(e) {
    let { item: t, wishlistOwner: i, wishlistId: l, analyticsLocations: r, ...a } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(r ?? []),
            t.sku?.productLine === D.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
        [m, f] = s.useState(!1),
        x = (0, d.bG)([C], () => C.hasSentGift(t.skuId, i.id), [i, t.skuId]),
        h = s.useMemo(
            () => t.skuProductLine !== D.EZt.PREMIUM && (!0 === t.isOwned || x),
            [t.isOwned, t.skuProductLine, x],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case D.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(el, {
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
        case D.EZt.COLLECTIBLES:
            return (0, n.jsx)(er, {
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
        case D.EZt.PREMIUM:
            return (0, n.jsx)(ea, {
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
