i.d(t, { A: () => es });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(575593),
    c = i(765178),
    o = i(17928),
    u = i(793574),
    d = i(688810),
    m = i(44120),
    g = i(532794),
    f = i(87719),
    x = i(317560),
    p = i(533406),
    I = i(183555),
    A = i(975732),
    h = i(606758),
    E = i(287809),
    j = i(474090),
    N = i(661492),
    v = i(228366);
let T = { sentGifts: {} };
function S(e, t) {
    return `${e}:${t}`;
}
class _ extends o.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((T = e), this.cleanupExpiredGifts());
    }
    getState() {
        return T;
    }
    hasSentGift(e, t) {
        let i = S(e, t),
            n = T.sentGifts[i];
        return !(null == n || new Date(n.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let i = S(e, t),
            n = T.sentGifts[i];
        return null == n || new Date(n.expiresAt) < new Date() ? null : n;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, i] of Object.entries(T.sentGifts)) new Date(i.expiresAt) < e && delete T.sentGifts[t];
    }
}
let C = new _(v.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = S(e.skuId, e.recipientId),
            i = new Date(),
            n = new Date(i.getTime() + 1728e5);
        T.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: i.toISOString(),
            expiresAt: n.toISOString(),
        };
    },
});
var O = i(212387),
    b = i(590180),
    R = i(139146),
    k = i(113265),
    D = i(152472),
    G = i(274681),
    L = i(471505),
    P = i(495544),
    w = i(652215),
    y = i(375708),
    M = i(948277);
function U(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function F(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            handleToggle: m,
        } = (0, L.G)({ userId: r, sku: i, location: l, onError: s }),
        g = X();
    return (0, n.jsx)("div", {
        className: M.U,
        style: U(t),
        children: (0, n.jsx)(R._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            onClick: m,
            tooltipConfig: g,
            ...a,
        }),
    });
}
function W(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            handleToggle: m,
        } = (0, D.c)({ userId: r, skuId: i.id, location: l, onError: s, onAddSuccess: G.w }),
        g = X();
    return (0, n.jsx)("div", {
        className: M.U,
        style: U(t),
        children: (0, n.jsx)(R._, {
            skuId: i.id,
            productName: i.name,
            size: t.wishlistButtonSize,
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            onClick: m,
            tooltipConfig: g,
            ...a,
        }),
    });
}
function H(e) {
    let { spec: t, product: i, location: l, onError: s, ...a } = e,
        r = (0, o.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            handleToggle: m,
            specificProductOrVariant: g,
            isPurchased: f,
        } = (0, k.z)({ userId: r, product: i, location: l, onError: s }),
        x = (0, N.qq)(g),
        p = f && !c,
        I = !x || p,
        A = X(x && p ? y.intl.string(y.t.nKA6v8) : void 0);
    return (0, n.jsx)("div", {
        className: M.U,
        style: U(t),
        children: (0, n.jsx)(R._, {
            skuId: g.skuId,
            productName: g.name,
            size: t.wishlistButtonSize,
            disabled: I,
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            onClick: m,
            tooltipConfig: A,
            ...a,
        }),
    });
}
function B(e) {
    let { sku: t, isCardHovered: i, ...l } = e,
        s = (0, o.bG)([b.A], () => b.A.getProduct(t.id));
    switch (t.productLine) {
        case w.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(F, { sku: t, isVisuallyHidden: !i, ...l });
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
    J = i(788868),
    Q = i(518477),
    Z = i(575581),
    $ = i(997990);
let ee = q.Z.SIZE_133;
function et(e) {
    let {
            item: t,
            wishlistOwner: i,
            currentUser: s,
            style: r,
            isDragging: o,
            dragHandle: u,
            skuPreviewStyle: d,
            skuAssetClassName: m,
            isHoveringOrFocusing: g,
            setIsHoveringOrFocusing: f,
            onDetailsClick: x,
            onPurchaseClick: p,
            wishlistId: A,
            isItemOwned: E,
            cardBackdrop: j,
        } = e,
        v = l.useRef(null),
        T = l.useRef(f);
    l.useEffect(() => {
        T.current = f;
    }, [f]),
        l.useEffect(() => {
            let e = v.current;
            if (null == e) return;
            let t = () => {
                T.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: S } = (0, I.NJ)(),
        _ = l.useCallback(() => {
            null != A &&
                (S({
                    wishlistId: A,
                    action: Q.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, A, S]),
        C = l.useCallback(() => {
            null != A &&
                (S({
                    wishlistId: A,
                    action: Q.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                p());
        }, [p, t.sku, A, S]),
        b = l.useCallback(() => {
            (0, h.XA)(Q.jM.SOMETHING_WENT_WRONG), c.O.announce(y.intl.string(y.t.F8FvUy));
        }, []),
        R = null != u ? (0, n.jsx)("div", { ref: v, className: Z.BU, children: u }) : null,
        { label: k, icon: D, isPromptingPurchase: G } = (0, K.h)({ wishlistOwner: i, isOwned: E });
    return (0, n.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, n.jsxs)(O.A, {
                sku: t.sku,
                user: i,
                spec: ee,
                cardStyle: a()(Z.Nr, r),
                skuPreviewStyle: a()(Z.ev, { [Z.go]: E && !g }, d),
                skuAssetClassName: m,
                disableHoverOrFocus: o,
                onHoverOrFocusChange: f,
                onClick: _,
                "aria-label": y.intl.formatToPlainString(y.t.ZBB4Ty, { productName: (0, N.TC)(t.sku) }),
                children: [
                    j,
                    (0, n.jsx)(K.A, { spec: ee, onClick: G ? C : _, isHoveringOrFocusing: g, label: k, icon: D }),
                    E && (0, n.jsx)(z.gS, { isHoveringOrFocusing: g }),
                    i.id === s.id &&
                        null != A &&
                        (0, n.jsx)(V, {
                            sku: t.sku,
                            isCardHovered: g,
                            spec: ee,
                            onError: b,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            R,
        ],
    });
}
function ei(e) {
    let { item: t, isItemOwned: i, wishlistOwner: s, currentUser: a, analyticsLocations: r, ...c } = e,
        o = l.useCallback(() => {
            (0, x.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: s,
                giftingOrigin: J.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, s, r]),
        d = l.useCallback(() => {
            let e = s.id === a.id;
            (0, p.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: J.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, s, a.id, r]);
    return (0, n.jsx)(et, {
        item: t,
        wishlistOwner: s,
        isItemOwned: i,
        onDetailsClick: o,
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
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        g = (0, Y.e)({
            sku: t.sku,
            giftRecipient: i,
            giftingOrigin: J.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: c,
        }),
        f = l.useMemo(
            () => () => {
                let e = i.id === o.id;
                (0, m.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: J.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: c ?? [],
                    giftRecipient: i,
                });
            },
            [t.sku, i, o.id, c],
        ),
        x = t.sku.tenantMetadata?.collectibles?.type,
        p = u && (x === r.R.AVATAR_DECORATION || x === r.R.PROFILE_FRAME);
    return (0, n.jsx)(et, {
        item: t,
        wishlistOwner: i,
        isItemOwned: s,
        currentUser: o,
        onDetailsClick: g,
        onPurchaseClick: f,
        isHoveringOrFocusing: u,
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
            ...o
        } = e,
        u = l.useCallback(() => {
            i
                ? (0, f.x)(A.closeUserProfileModal)
                : (0, g.A)({
                      isGift: !0,
                      giftRecipient: s,
                      giftingOrigin: J.vQ.USER_PROFILE_WISHLIST,
                      subscriptionTier: t.skuId,
                      analyticsLocations: r,
                  });
        }, [i, t.skuId, s, r]);
    return (0, n.jsx)(et, {
        item: t,
        wishlistOwner: s,
        isItemOwned: i,
        currentUser: a,
        onDetailsClick: u,
        onPurchaseClick: u,
        isHoveringOrFocusing: c,
        skuPreviewStyle: $.MO,
        skuAssetClassName: c ? $.iR : void 0,
        analyticsLocations: r,
        ...o,
    });
}
function es(e) {
    let { item: t, wishlistOwner: i, wishlistId: s, analyticsLocations: a, ...r } = e,
        { analyticsLocations: c } = (0, d.Ay)(
            ...(a ?? []),
            t.sku?.productLine === w.EZt.SOCIAL_LAYER_GAME_ITEM ? u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        m = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        [g, f] = l.useState(!1),
        x = (0, o.bG)([C], () => C.hasSentGift(t.skuId, i.id), [i, t.skuId]),
        p = l.useMemo(
            () =>
                t.skuProductLine === w.EZt.PREMIUM
                    ? null != m && i.id === m.id && (0, j.ki)(m, J.WN[t.skuId])
                    : !0 === t.isOwned || x,
            [t.isOwned, t.skuId, t.skuProductLine, x, m, i.id],
        );
    if (null == t.sku || null == m) return null;
    switch (t.sku.productLine) {
        case w.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(ei, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: f,
                currentUser: m,
                isItemOwned: p,
                wishlistOwner: i,
                wishlistId: s,
                ...r,
            });
        case w.EZt.COLLECTIBLES:
            return (0, n.jsx)(en, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: f,
                currentUser: m,
                isItemOwned: p,
                wishlistOwner: i,
                wishlistId: s,
                ...r,
            });
        case w.EZt.PREMIUM:
            return (0, n.jsx)(el, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: f,
                currentUser: m,
                isItemOwned: p,
                wishlistOwner: i,
                wishlistId: s,
                ...r,
            });
        default:
            return null;
    }
}
