i.d(t, { A: () => el });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(575593),
    c = i(765178),
    o = i(17928),
    u = i(793574),
    d = i(688810),
    g = i(44120),
    m = i(532794),
    f = i(87719),
    x = i(317560),
    I = i(533406),
    p = i(183555),
    h = i(975732),
    A = i(606758),
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
let O = new _(v.h, {
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
var C = i(212387),
    k = i(590180),
    R = i(139146),
    L = i(113265),
    b = i(152472),
    w = i(274681),
    P = i(471505),
    y = i(495544),
    D = i(652215),
    G = i(375708),
    M = i(948277);
function F(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function U(e) {
    let { spec: t, sku: i, location: s, onError: l, ...a } = e,
        r = (0, o.bG)([y.default], () => y.default.getId()),
        {
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            handleToggle: g,
        } = (0, P.G)({ userId: r, sku: i, location: s, onError: l }),
        m = X();
    return (0, n.jsx)("div", {
        className: M.U,
        style: F(t),
        children: (0, n.jsx)(R._, {
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
function W(e) {
    let { spec: t, sku: i, location: s, onError: l, ...a } = e,
        r = (0, o.bG)([y.default], () => y.default.getId()),
        {
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            handleToggle: g,
        } = (0, b.c)({ userId: r, skuId: i.id, location: s, onError: l, onAddSuccess: w.w }),
        m = X();
    return (0, n.jsx)("div", {
        className: M.U,
        style: F(t),
        children: (0, n.jsx)(R._, {
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
    let { spec: t, product: i, location: s, onError: l, ...a } = e,
        r = (0, o.bG)([y.default], () => y.default.getId()),
        {
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: f,
        } = (0, L.z)({ userId: r, product: i, location: s, onError: l }),
        x = (0, N.qq)(m),
        I = f && !c,
        p = !x || I,
        h = X(x && I ? G.intl.string(G.t.nKA6v8) : void 0);
    return (0, n.jsx)("div", {
        className: M.U,
        style: F(t),
        children: (0, n.jsx)(R._, {
            skuId: m.skuId,
            productName: m.name,
            size: t.wishlistButtonSize,
            disabled: p,
            isWishlisted: c,
            isBusy: u,
            isFirstTimeWishlister: d,
            onClick: g,
            tooltipConfig: h,
            ...a,
        }),
    });
}
function B(e) {
    let { sku: t, isCardHovered: i, ...s } = e,
        l = (0, o.bG)([k.A], () => k.A.getProduct(t.id));
    switch (t.productLine) {
        case D.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(U, { sku: t, isVisuallyHidden: !i, ...s });
        case D.EZt.COLLECTIBLES:
            if (null == l) return null;
            return (0, n.jsx)(H, { product: l, isVisuallyHidden: !i, ...s });
        case D.EZt.PREMIUM:
            return (0, n.jsx)(W, { sku: t, isVisuallyHidden: !i, ...s });
        default:
            return null;
    }
}
function V(e) {
    let { location: t, ...i } = e;
    return (0, n.jsx)(B, { location: t, ...i });
}
function X(e) {
    return s.useMemo(
        () => ({
            firstTimeBody: G.intl.string(G.t["5B3F2W"]),
            add: G.intl.string(G.t.Hcgz2S),
            remove: G.intl.string(G.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var z = i(460442),
    K = i(662349),
    Y = i(479026),
    Z = i(699976),
    q = i(788868),
    J = i(518477),
    Q = i(575581),
    $ = i(997990);
let ee = Z.Z.SIZE_133;
function et(e) {
    let {
            item: t,
            wishlistOwner: i,
            currentUser: l,
            style: r,
            isDragging: o,
            dragHandle: u,
            skuPreviewStyle: d,
            skuAssetClassName: g,
            isHoveringOrFocusing: m,
            setIsHoveringOrFocusing: f,
            onDetailsClick: x,
            onPurchaseClick: I,
            wishlistId: h,
            isItemOwned: E,
            cardBackdrop: j,
        } = e,
        v = s.useRef(null),
        T = s.useRef(f);
    s.useEffect(() => {
        T.current = f;
    }, [f]),
        s.useEffect(() => {
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
    let { trackUserProfileWishlistAction: S } = (0, p.NJ)(),
        _ = s.useCallback(() => {
            null != h &&
                (S({
                    wishlistId: h,
                    action: J.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, h, S]),
        O = s.useCallback(() => {
            null != h &&
                (S({
                    wishlistId: h,
                    action: J.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                I());
        }, [I, t.sku, h, S]),
        k = s.useCallback(() => {
            (0, A.XA)(J.jM.SOMETHING_WENT_WRONG), c.O.announce(G.intl.string(G.t.F8FvUy));
        }, []),
        R = null != u ? (0, n.jsx)("div", { ref: v, className: Q.BU, children: u }) : null,
        { label: L, icon: b, isPromptingPurchase: w } = (0, K.h)({ wishlistOwner: i, isOwned: E });
    return (0, n.jsxs)("div", {
        className: Q.kL,
        children: [
            (0, n.jsxs)(C.A, {
                sku: t.sku,
                user: i,
                spec: ee,
                cardStyle: a()(Q.Nr, r),
                skuPreviewStyle: a()(Q.ev, { [Q.go]: E && !m }, d),
                skuAssetClassName: g,
                disableHoverOrFocus: o,
                onHoverOrFocusChange: f,
                onClick: _,
                "aria-label": G.intl.formatToPlainString(G.t.ZBB4Ty, { productName: (0, N.TC)(t.sku) }),
                children: [
                    j,
                    (0, n.jsx)(K.A, { spec: ee, onClick: w ? O : _, isHoveringOrFocusing: m, label: L, icon: b }),
                    E && (0, n.jsx)(z.gS, { isHoveringOrFocusing: m }),
                    i.id === l.id &&
                        null != h &&
                        (0, n.jsx)(V, {
                            sku: t.sku,
                            isCardHovered: m,
                            spec: ee,
                            onError: k,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            R,
        ],
    });
}
function ei(e) {
    let { item: t, isItemOwned: i, wishlistOwner: l, currentUser: a, analyticsLocations: r, ...c } = e,
        o = s.useCallback(() => {
            (0, x.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: l,
                giftingOrigin: q.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, l, r]),
        d = s.useCallback(() => {
            let e = l.id === a.id;
            (0, I.a)(
                t.sku,
                { isGift: !e, giftRecipient: l, giftingOrigin: q.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, l, a.id, r]);
    return (0, n.jsx)(et, {
        item: t,
        wishlistOwner: l,
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
            isItemOwned: l,
            analyticsLocations: c,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        m = (0, Y.e)({
            sku: t.sku,
            giftRecipient: i,
            giftingOrigin: q.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: c,
        }),
        f = s.useMemo(
            () => () => {
                let e = i.id === o.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: q.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: c ?? [],
                    giftRecipient: i,
                });
            },
            [t.sku, i, o.id, c],
        ),
        x =
            u &&
            t.sku.productLine === D.EZt.COLLECTIBLES &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, n.jsx)(et, {
        item: t,
        wishlistOwner: i,
        isItemOwned: l,
        currentUser: o,
        onDetailsClick: m,
        onPurchaseClick: f,
        isHoveringOrFocusing: u,
        skuPreviewStyle: a()({ [Q.mn]: x }),
        analyticsLocations: c,
        ...d,
    });
}
function es(e) {
    let {
            item: t,
            isItemOwned: i,
            wishlistOwner: l,
            currentUser: a,
            analyticsLocations: r,
            isHoveringOrFocusing: c,
            ...o
        } = e,
        u = s.useCallback(() => {
            i
                ? (0, f.x)(h.closeUserProfileModal)
                : (0, m.A)({
                      isGift: !0,
                      giftRecipient: l,
                      giftingOrigin: q.vQ.USER_PROFILE_WISHLIST,
                      subscriptionTier: t.skuId,
                      analyticsLocations: r,
                  });
        }, [i, t.skuId, l, r]);
    return (0, n.jsx)(et, {
        item: t,
        wishlistOwner: l,
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
function el(e) {
    let { item: t, wishlistOwner: i, wishlistId: l, analyticsLocations: a, ...r } = e,
        { analyticsLocations: c } = (0, d.Ay)(
            ...(a ?? []),
            t.sku?.productLine === D.EZt.SOCIAL_LAYER_GAME_ITEM ? u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        [m, f] = s.useState(!1),
        x = (0, o.bG)([O], () => O.hasSentGift(t.skuId, i.id), [i, t.skuId]),
        I = s.useMemo(
            () =>
                t.skuProductLine === D.EZt.PREMIUM
                    ? null != g && i.id === g.id && (0, j.ki)(g, q.WN[t.skuId])
                    : !0 === t.isOwned || x,
            [t.isOwned, t.skuId, t.skuProductLine, x, g, i.id],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case D.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(ei, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: I,
                wishlistOwner: i,
                wishlistId: l,
                ...r,
            });
        case D.EZt.COLLECTIBLES:
            return (0, n.jsx)(en, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: I,
                wishlistOwner: i,
                wishlistId: l,
                ...r,
            });
        case D.EZt.PREMIUM:
            return (0, n.jsx)(es, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: I,
                wishlistOwner: i,
                wishlistId: l,
                ...r,
            });
        default:
            return null;
    }
}
