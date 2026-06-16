i.d(t, { A: () => es });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(575593),
    c = i(765178),
    u = i(17928),
    o = i(793574),
    d = i(688810),
    g = i(44120),
    m = i(532794),
    f = i(87719),
    x = i(317560),
    p = i(533406),
    I = i(183555),
    A = i(975732),
    E = i(606758),
    h = i(287809),
    j = i(474090),
    N = i(661492),
    T = i(228366);
let v = { sentGifts: {} };
function _(e, t) {
    return `${e}:${t}`;
}
class S extends u.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((v = e), this.cleanupExpiredGifts());
    }
    getState() {
        return v;
    }
    hasSentGift(e, t) {
        let i = _(e, t),
            n = v.sentGifts[i];
        return !(null == n || new Date(n.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let i = _(e, t),
            n = v.sentGifts[i];
        return null == n || new Date(n.expiresAt) < new Date() ? null : n;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, i] of Object.entries(v.sentGifts)) new Date(i.expiresAt) < e && delete v.sentGifts[t];
    }
}
let O = new S(T.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = _(e.skuId, e.recipientId),
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
var C = i(212387),
    R = i(590180),
    b = i(139146),
    k = i(113265),
    D = i(152472),
    G = i(274681),
    L = i(471505),
    P = i(495544),
    w = i(652215),
    y = i(375708),
    M = i(948277);
function F(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function U(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, u.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: c,
            isBusy: o,
            isFirstTimeWishlister: d,
            handleToggle: g,
        } = (0, L.G)({ userId: r, sku: i, location: l, onError: s }),
        m = X();
    return (0, n.jsx)("div", {
        className: M.U,
        style: F(t),
        children: (0, n.jsx)(b._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: c,
            isBusy: o,
            isFirstTimeWishlister: d,
            onClick: g,
            tooltipConfig: m,
            ...a,
        }),
    });
}
function W(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, u.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: c,
            isBusy: o,
            isFirstTimeWishlister: d,
            handleToggle: g,
        } = (0, D.c)({ userId: r, skuId: i.id, location: l, onError: s, onAddSuccess: G.w }),
        m = X();
    return (0, n.jsx)("div", {
        className: M.U,
        style: F(t),
        children: (0, n.jsx)(b._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: c,
            isBusy: o,
            isFirstTimeWishlister: d,
            onClick: g,
            tooltipConfig: m,
            ...a,
        }),
    });
}
function H(e) {
    let { spec: t, product: i, location: l, onError: s, ...a } = e,
        r = (0, u.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: c,
            isBusy: o,
            isFirstTimeWishlister: d,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: f,
        } = (0, k.z)({ userId: r, product: i, location: l, onError: s }),
        x = (0, N.qq)(m),
        p = f && !c,
        I = !x || p,
        A = X(x && p ? y.intl.string(y.t.nKA6v8) : void 0);
    return (0, n.jsx)("div", {
        className: M.U,
        style: F(t),
        children: (0, n.jsx)(b._, {
            skuId: m.skuId,
            productName: m.name,
            size: t.wishlistButtonSize,
            disabled: I,
            isWishlisted: c,
            isBusy: o,
            isFirstTimeWishlister: d,
            onClick: g,
            tooltipConfig: A,
            ...a,
        }),
    });
}
function B(e) {
    let { sku: t, isCardHovered: i, ...l } = e,
        s = (0, u.bG)([R.A], () => R.A.getProduct(t.id));
    switch (t.productLine) {
        case w.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(U, { sku: t, isVisuallyHidden: !i, ...l });
        case w.EZt.COLLECTIBLES:
            if (null == s) return null;
            return (0, n.jsx)(H, { product: s, isVisuallyHidden: !i, ...l });
        case w.EZt.PREMIUM:
            return (0, n.jsx)(W, { sku: t, isVisuallyHidden: !i, ...l });
        default:
            return null;
    }
}
function V(e) {
    let { location: t, ...i } = e;
    return (0, n.jsx)(B, { location: t, ...i });
}
function X(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: y.intl.string(y.t["5B3F2W"]),
            add: y.intl.string(y.t.Hcgz2S),
            remove: y.intl.string(y.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var z = i(460442),
    K = i(662349),
    Y = i(479026),
    q = i(699976),
    Q = i(788868),
    J = i(518477),
    Z = i(575581),
    $ = i(997990);
let ee = q.Z.SIZE_133;
function et(e) {
    let {
            item: t,
            wishlistOwner: i,
            currentUser: s,
            style: r,
            isDragging: u,
            dragHandle: o,
            skuPreviewStyle: d,
            skuAssetClassName: g,
            isHoveringOrFocusing: m,
            setIsHoveringOrFocusing: f,
            onDetailsClick: x,
            onPurchaseClick: p,
            wishlistId: A,
            isItemOwned: h,
            cardBackdrop: j,
        } = e,
        T = l.useRef(null),
        v = l.useRef(f);
    l.useEffect(() => {
        v.current = f;
    }, [f]),
        l.useEffect(() => {
            let e = T.current;
            if (null == e) return;
            let t = () => {
                v.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: _ } = (0, I.NJ)(),
        S = l.useCallback(() => {
            null != A &&
                (_({
                    wishlistId: A,
                    action: J.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, A, _]),
        O = l.useCallback(() => {
            null != A &&
                (_({
                    wishlistId: A,
                    action: J.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                p());
        }, [p, t.sku, A, _]),
        R = l.useCallback(() => {
            (0, E.XA)(J.jM.SOMETHING_WENT_WRONG), c.O.announce(y.intl.string(y.t.F8FvUy));
        }, []),
        b = null != o ? (0, n.jsx)("div", { ref: T, className: Z.BU, children: o }) : null,
        { label: k, icon: D, isPromptingPurchase: G } = (0, K.h)({ wishlistOwner: i, isOwned: h });
    return (0, n.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, n.jsxs)(C.A, {
                sku: t.sku,
                user: i,
                spec: ee,
                cardStyle: a()(Z.Nr, r),
                skuPreviewStyle: a()(Z.ev, { [Z.go]: h && !m }, d),
                skuAssetClassName: g,
                disableHoverOrFocus: u,
                onHoverOrFocusChange: f,
                onClick: S,
                "aria-label": y.intl.formatToPlainString(y.t.ZBB4Ty, { productName: (0, N.TC)(t.sku) }),
                children: [
                    j,
                    (0, n.jsx)(K.A, { spec: ee, onClick: G ? O : S, isHoveringOrFocusing: m, label: k, icon: D }),
                    h && (0, n.jsx)(z.gS, { isHoveringOrFocusing: m }),
                    i.id === s.id &&
                        null != A &&
                        (0, n.jsx)(V, {
                            sku: t.sku,
                            isCardHovered: m,
                            spec: ee,
                            onError: R,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            b,
        ],
    });
}
function ei(e) {
    let { item: t, isItemOwned: i, wishlistOwner: s, currentUser: a, analyticsLocations: r, ...c } = e,
        u = l.useCallback(() => {
            (0, x.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: s,
                giftingOrigin: Q.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, s, r]),
        d = l.useCallback(() => {
            let e = s.id === a.id;
            (0, p.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: Q.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, o.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, s, a.id, r]);
    return (0, n.jsx)(et, {
        item: t,
        wishlistOwner: s,
        isItemOwned: i,
        onDetailsClick: u,
        onPurchaseClick: d,
        analyticsLocations: r,
        currentUser: a,
        ...c,
    });
}
function en(e) {
    let {
            item: t,
            wishlistOwner: i,
            isItemOwned: s,
            analyticsLocations: c,
            currentUser: u,
            isHoveringOrFocusing: o,
            ...d
        } = e,
        m = (0, Y.e)({
            sku: t.sku,
            giftRecipient: i,
            giftingOrigin: Q.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: c,
        }),
        f = l.useMemo(
            () => () => {
                let e = i.id === u.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: Q.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: c ?? [],
                    giftRecipient: i,
                });
            },
            [t.sku, i, u.id, c],
        ),
        x = t.sku.tenantMetadata?.collectibles?.type,
        p = o && (x === r.R.AVATAR_DECORATION || x === r.R.PROFILE_FRAME);
    return (0, n.jsx)(et, {
        item: t,
        wishlistOwner: i,
        isItemOwned: s,
        currentUser: u,
        onDetailsClick: m,
        onPurchaseClick: f,
        isHoveringOrFocusing: o,
        skuPreviewStyle: a()({ [Z.mn]: p }),
        analyticsLocations: c,
        ...d,
    });
}
function el(e) {
    let {
            item: t,
            isItemOwned: i,
            wishlistOwner: s,
            currentUser: a,
            analyticsLocations: r,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        o = l.useCallback(() => {
            if (i) return void (0, f.x)(A.closeUserProfileModal);
            let e = s.id === a.id;
            (0, m.A)({
                isGift: !e,
                giftRecipient: s,
                giftingOrigin: Q.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: t.skuId,
                analyticsLocations: r,
            });
        }, [i, t.skuId, s, a.id, r]);
    return (0, n.jsx)(et, {
        item: t,
        wishlistOwner: s,
        isItemOwned: i,
        currentUser: a,
        onDetailsClick: o,
        onPurchaseClick: o,
        isHoveringOrFocusing: c,
        skuPreviewStyle: $.MO,
        skuAssetClassName: c ? $.iR : void 0,
        analyticsLocations: r,
        ...u,
    });
}
function es(e) {
    let { item: t, wishlistOwner: i, wishlistId: s, analyticsLocations: a, ...r } = e,
        { analyticsLocations: c } = (0, d.Ay)(
            ...(a ?? []),
            t.sku?.productLine === w.EZt.SOCIAL_LAYER_GAME_ITEM ? o.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, u.bG)([h.default], () => h.default.getCurrentUser()),
        [m, f] = l.useState(!1),
        x = (0, u.bG)([O], () => O.hasSentGift(t.skuId, i.id), [i, t.skuId]),
        p = l.useMemo(
            () =>
                t.skuProductLine === w.EZt.PREMIUM
                    ? null != g && i.id === g.id && (0, j.ki)(g, Q.WN[t.skuId])
                    : !0 === t.isOwned || x,
            [t.isOwned, t.skuId, t.skuProductLine, x, g, i.id],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case w.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(ei, {
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
        case w.EZt.COLLECTIBLES:
            return (0, n.jsx)(en, {
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
        case w.EZt.PREMIUM:
            return (0, n.jsx)(el, {
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
