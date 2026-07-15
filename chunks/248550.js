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
    S = i(474090),
    T = i(661492),
    v = i(228366);
let N = { sentGifts: {} };
function b(e, t) {
    return `${e}:${t}`;
}
class C extends d.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((N = e), this.cleanupExpiredGifts());
    }
    getState() {
        return N;
    }
    hasSentGift(e, t) {
        let i = b(e, t),
            n = N.sentGifts[i];
        return !(null == n || new Date(n.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let i = b(e, t),
            n = N.sentGifts[i];
        return null == n || new Date(n.expiresAt) < new Date() ? null : n;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, i] of Object.entries(N.sentGifts)) new Date(i.expiresAt) < e && delete N.sentGifts[t];
    }
}
let w = new C(v.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = b(e.skuId, e.recipientId),
            i = new Date(),
            n = new Date(i.getTime() + 1728e5);
        N.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: i.toISOString(),
            expiresAt: n.toISOString(),
        };
    },
});
var R = i(212387),
    k = i(590180),
    O = i(139146),
    y = i(113265),
    _ = i(152472),
    L = i(274681),
    G = i(471505),
    D = i(280450),
    P = i(652215),
    M = i(375708),
    U = i(948277);
function F(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function W(e) {
    let { spec: t, sku: i, location: s, onError: l, ...r } = e,
        a = (0, d.bG)([D.default], () => D.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, G.G)({ userId: a, sku: i, location: s, onError: l }),
        m = Y();
    return (0, n.jsx)("div", {
        className: U.U,
        style: F(t),
        children: (0, n.jsx)(O._, {
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
        a = (0, d.bG)([D.default], () => D.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, _.c)({ userId: a, skuId: i.id, location: s, onError: l }),
        m = Y();
    return (0, n.jsx)("div", {
        className: U.U,
        style: F(t),
        children: (0, n.jsx)(O._, {
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
    let { spec: t, sku: i, location: s, onError: l, ...r } = e,
        a = (0, d.bG)([D.default], () => D.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, _.c)({ userId: a, skuId: i.id, location: s, onError: l, onAddSuccess: L.w }),
        m = Y();
    return (0, n.jsx)("div", {
        className: U.U,
        style: F(t),
        children: (0, n.jsx)(O._, {
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
function V(e) {
    let { spec: t, product: i, location: s, onError: l, ...r } = e,
        a = (0, d.bG)([D.default], () => D.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: f,
        } = (0, y.z)({ userId: a, product: i, location: s, onError: l }),
        x = (0, T.qq)(m),
        h = f && !o,
        I = !x || h,
        p = Y(x && h ? M.intl.string(M.t.nKA6v8) : void 0);
    return (0, n.jsx)("div", {
        className: U.U,
        style: F(t),
        children: (0, n.jsx)(O._, {
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
function X(e) {
    let { sku: t, isCardHovered: i, ...s } = e,
        l = (0, d.bG)([k.A], () => k.A.getProduct(t.id));
    switch (t.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(W, { sku: t, isVisuallyHidden: !i, ...s });
        case P.EZt.COLLECTIBLES:
            if (null == l) return (0, n.jsx)(H, { sku: t, isVisuallyHidden: !i, ...s });
            return (0, n.jsx)(V, { product: l, isVisuallyHidden: !i, ...s });
        case P.EZt.PREMIUM:
            return (0, n.jsx)(B, { sku: t, isVisuallyHidden: !i, ...s });
        default:
            return null;
    }
}
function z(e) {
    let { location: t, ...i } = e;
    return (0, n.jsx)(X, { location: t, ...i });
}
function Y(e) {
    return s.useMemo(
        () => ({
            firstTimeBody: M.intl.string(M.t["5B3F2W"]),
            add: M.intl.string(M.t.Hcgz2S),
            remove: M.intl.string(M.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var K = i(74135),
    q = i(460442),
    Q = i(662349),
    J = i(479026),
    Z = i(699976),
    $ = i(202541),
    ee = i(518477),
    et = i(575581),
    ei = i(997990);
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
            skuAssetClassName: m,
            isHoveringOrFocusing: f,
            setIsHoveringOrFocusing: x,
            onDetailsClick: h,
            onPurchaseClick: I,
            wishlistId: A,
            isItemOwned: E,
            cardBackdrop: S,
            promotion: v,
        } = e,
        N = s.useRef(null),
        b = s.useRef(x);
    s.useEffect(() => {
        b.current = x;
    }, [x]),
        s.useEffect(() => {
            let e = N.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", t),
                    () => {
                        e.removeEventListener("focusin", t);
                    }
                );
            function t() {
                b.current(!1);
            }
        }, []);
    let { trackUserProfileWishlistAction: C } = (0, p.NJ)(),
        w = s.useCallback(() => {
            null != A &&
                (C({
                    wishlistId: A,
                    action: ee.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                h());
        }, [h, t.sku, A, C]),
        k = s.useCallback(() => {
            null != A &&
                (C({
                    wishlistId: A,
                    action: ee.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                I());
        }, [I, t.sku, A, C]),
        O = s.useCallback(() => {
            (0, j.XA)(ee.jM.SOMETHING_WENT_WRONG), o.O.announce(M.intl.string(M.t.F8FvUy));
        }, []),
        y = null != u ? (0, n.jsx)("div", { ref: N, className: et.BU, children: u }) : null,
        { label: _, icon: L, isPromptingPurchase: G } = (0, Q.h)({ wishlistOwner: i, isOwned: E });
    return (0, n.jsxs)("div", {
        className: et.kL,
        children: [
            (0, n.jsxs)(R.A, {
                sku: t.sku,
                user: i,
                guildId: l,
                spec: en,
                cardStyle: r()(et.Nr, d),
                skuPreviewStyle: r()(et.ev, { [et.go]: E && !f }, g),
                skuAssetClassName: m,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: x,
                onClick: w,
                "aria-label": M.intl.formatToPlainString(M.t.ZBB4Ty, { productName: (0, T.TC)(t.sku) }),
                children: [
                    S,
                    (0, n.jsx)(Q.A, { spec: en, onClick: G ? k : w, isHoveringOrFocusing: f, label: _, icon: L }),
                    !f && !E && v,
                    E && (0, n.jsx)(q.gS, { isHoveringOrFocusing: f }),
                    i.id === a.id &&
                        null != A &&
                        (0, n.jsx)(z, {
                            sku: t.sku,
                            isCardHovered: f,
                            spec: en,
                            onError: O,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            y,
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
        promotion: null != d && (0, n.jsx)(K.s, { spec: en, icon: d.Icon, tooltipText: d.tooltip }),
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
        m = (0, J.e)({
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
        h = c && (x === a.R.AVATAR_DECORATION || x === a.R.PROFILE_FRAME);
    return (0, n.jsx)(es, {
        item: t,
        wishlistOwner: i,
        isItemOwned: l,
        currentUser: d,
        onDetailsClick: m,
        onPurchaseClick: f,
        isHoveringOrFocusing: c,
        skuPreviewStyle: r()({ [et.mn]: h }),
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
        skuAssetClassName: o ? ei.iR : void 0,
        analyticsLocations: a,
        ...d,
    });
}
function eo(e) {
    let { item: t, wishlistOwner: i, wishlistId: l, analyticsLocations: r, ...a } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(r ?? []),
            t.sku?.productLine === P.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
        [m, f] = s.useState(!1),
        x = (0, d.bG)([w], () => w.hasSentGift(t.skuId, i.id), [i, t.skuId]),
        h = s.useMemo(
            () =>
                t.skuProductLine === P.EZt.PREMIUM
                    ? null != g && i.id === g.id && (0, S.ki)(g, $.WN[t.skuId])
                    : !0 === t.isOwned || x,
            [t.isOwned, t.skuId, t.skuProductLine, x, g, i.id],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
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
        case P.EZt.COLLECTIBLES:
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
        case P.EZt.PREMIUM:
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
