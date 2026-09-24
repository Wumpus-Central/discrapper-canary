i.d(t, { A: () => er });
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
    S = i(228366);
let b = { sentGifts: {} };
function k(e, t) {
    return `${e}:${t}`;
}
class y extends d.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((b = e), this.cleanupExpiredGifts());
    }
    getState() {
        return b;
    }
    hasSentGift(e, t) {
        let i = k(e, t),
            n = b.sentGifts[i];
        return !(null == n || new Date(n.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let i = k(e, t),
            n = b.sentGifts[i];
        return null == n || new Date(n.expiresAt) < new Date() ? null : n;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, i] of Object.entries(b.sentGifts)) new Date(i.expiresAt) < e && delete b.sentGifts[t];
    }
}
let T = new y(S.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = k(e.skuId, e.recipientId),
            i = new Date(),
            n = new Date(i.getTime() + 1728e5);
        b.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: i.toISOString(),
            expiresAt: n.toISOString(),
        };
    },
});
var N = i(146423),
    R = i(590180),
    w = i(139146),
    L = i(113265),
    _ = i(152472),
    P = i(471505),
    O = i(280450),
    D = i(652215),
    G = i(375708),
    M = i(376932);
function U(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function F(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, d.bG)([O.default], () => O.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, P.G)({ userId: r, sku: i, location: l, onError: s }),
        m = z();
    return (0, n.jsx)("div", {
        className: M.U,
        style: U(t),
        children: (0, n.jsx)(w._, {
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
function W(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, d.bG)([O.default], () => O.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, _.c)({ userId: r, skuId: i.id, location: l, onError: s }),
        m = z();
    return (0, n.jsx)("div", {
        className: M.U,
        style: U(t),
        children: (0, n.jsx)(w._, {
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
function H(e) {
    let { spec: t, sku: i, location: l, onError: s, ...a } = e,
        r = (0, d.bG)([O.default], () => O.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
        } = (0, _.c)({ userId: r, skuId: i.id, location: l, onError: s }),
        m = z();
    return (0, n.jsx)("div", {
        className: M.U,
        style: U(t),
        children: (0, n.jsx)(w._, {
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
function V(e) {
    let { spec: t, product: i, location: l, onError: s, ...a } = e,
        r = (0, d.bG)([O.default], () => O.default.getId()),
        {
            isWishlisted: o,
            isBusy: c,
            isFirstTimeWishlister: u,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: x,
        } = (0, L.z)({ userId: r, product: i, location: l, onError: s }),
        f = (0, C.q)(m),
        h = x && !o,
        I = !f || h,
        p = z(f && h ? G.intl.string(G.t.nKA6v8) : void 0);
    return (0, n.jsx)("div", {
        className: M.U,
        style: U(t),
        children: (0, n.jsx)(w._, {
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
function B(e) {
    let { sku: t, isCardHovered: i, ...l } = e,
        s = (0, d.bG)([R.A], () => R.A.getProduct(t.id));
    switch (t.productLine) {
        case D.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(F, { sku: t, isVisuallyHidden: !i, ...l });
        case D.EZt.COLLECTIBLES:
            if (null == s) return (0, n.jsx)(W, { sku: t, isVisuallyHidden: !i, ...l });
            return (0, n.jsx)(V, { product: s, isVisuallyHidden: !i, ...l });
        case D.EZt.PREMIUM:
            return (0, n.jsx)(H, { sku: t, isVisuallyHidden: !i, ...l });
        default:
            return null;
    }
}
function Y(e) {
    let { location: t, ...i } = e;
    return (0, n.jsx)(B, { location: t, ...i });
}
function z(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: G.intl.string(G.t["5B3F2W"]),
            add: G.intl.string(G.t.Hcgz2S),
            remove: G.intl.string(G.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var X = i(460442),
    K = i(662349),
    q = i(479026),
    J = i(636374),
    Z = i(699976),
    Q = i(202541),
    $ = i(518477),
    ee = i(181554),
    et = i(880465);
let ei = Z.Z.SIZE_133;
function en(e) {
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
            wishlistId: b,
            isItemOwned: k,
            cardBackdrop: y,
            isNew: T,
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
    let { trackUserProfileWishlistAction: _ } = (0, p.NJ)(),
        P = l.useCallback(() => {
            (R?.(),
                null != b &&
                    (_({
                        wishlistId: b,
                        action: $.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: s.sku.id,
                        productLines: new Set([s.sku.productLine]),
                    }),
                    v()));
        }, [v, s.sku, b, _, R]),
        O = l.useCallback(() => {
            (R?.(),
                null != b &&
                    (_({
                        wishlistId: b,
                        action: $.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: s.sku.id,
                        productLines: new Set([s.sku.productLine]),
                    }),
                    S()));
        }, [S, s.sku, b, _, R]),
        D = l.useCallback(() => {
            ((0, E.XA)($.jM.SOMETHING_WENT_WRONG), o.O.announce(G.intl.string(G.t.F8FvUy)));
        }, []),
        M = null != m ? (0, n.jsx)("div", { ref: w, className: ee.BU, children: m }) : null,
        {
            onBodyClick: U,
            onOverlayClick: F,
            showOverlayButton: W,
            routesToGift: H,
            label: V,
            icon: B,
        } = (0, J.P)({ wishlistOwner: r, isOwned: k, onDetailsClick: P, onPurchaseClick: O }),
        z = I && W;
    return (0, n.jsxs)("div", {
        className: ee.kL,
        children: [
            (0, n.jsxs)(N.A, {
                sku: s.sku,
                user: r,
                guildId: d,
                spec: ei,
                cardStyle: a()(ee.Nr, u),
                skuPreviewStyle: a()(ee.ev, { [ee.go]: k && !I }, x, z ? f : void 0),
                skuAssetClassName: z ? h : void 0,
                disableHoverOrFocus: g,
                onHoverOrFocusChange: A,
                onClick: U,
                "aria-label":
                    ((t = s.sku),
                    (i = H ? (0, C.T)(t) : G.intl.formatToPlainString(G.t.ZBB4Ty, { productName: (0, C.T)(t) })),
                    !0 === T ? G.intl.formatToPlainString(G.t.s9RZ1r, { label: i }) : i),
                children: [
                    !0 === T && (0, n.jsx)(j.A, { className: ee.Pf }),
                    y,
                    W && (0, n.jsx)(K.A, { spec: ei, onClick: F, isHoveringOrFocusing: I, label: V, icon: B }),
                    k && (0, n.jsx)(X.gS, { isHoveringOrFocusing: I }),
                    r.id === c.id &&
                        null != b &&
                        (0, n.jsx)(Y, {
                            sku: s.sku,
                            isCardHovered: I,
                            spec: ei,
                            onError: D,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            M,
        ],
    });
}
function el(e) {
    let { item: t, isItemOwned: i, wishlistOwner: s, currentUser: a, analyticsLocations: r, ...o } = e,
        d = l.useCallback(() => {
            (0, h.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: s,
                giftingOrigin: Q.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, s, r]),
        u = l.useCallback(() => {
            let e = s.id === a.id;
            (0, I.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: Q.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, s, a.id, r]);
    return (0, n.jsx)(en, {
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
function es(e) {
    let {
            item: t,
            wishlistOwner: i,
            isItemOwned: s,
            analyticsLocations: o,
            currentUser: d,
            isHoveringOrFocusing: c,
            ...u
        } = e,
        m = (0, q.e)({
            sku: t.sku,
            giftRecipient: i,
            giftingOrigin: Q.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        x = l.useMemo(
            () => () => {
                let e = i.id === d.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: Q.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: i,
                });
            },
            [t.sku, i, d.id, o],
        ),
        f = t.sku.tenantMetadata?.collectibles?.type,
        h = f === r.R.AVATAR_DECORATION || f === r.R.PROFILE_FRAME;
    return (0, n.jsx)(en, {
        item: t,
        wishlistOwner: i,
        isItemOwned: s,
        currentUser: d,
        onDetailsClick: m,
        onPurchaseClick: x,
        isHoveringOrFocusing: c,
        skuPreviewHoverStyle: a()({ [ee.mn]: h }),
        analyticsLocations: o,
        ...u,
    });
}
function ea(e) {
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
                giftingOrigin: Q.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: n,
                analyticsLocations: r,
                ...(0, f.Dv)(n, !e, "user_profile_wishlist_item_card"),
            });
        }, [i, t.skuId, s, a.id, r]);
    return (0, n.jsx)(en, {
        item: t,
        wishlistOwner: s,
        isItemOwned: i,
        currentUser: a,
        onDetailsClick: c,
        onPurchaseClick: c,
        isHoveringOrFocusing: o,
        skuPreviewStyle: et.MO,
        skuAssetHoverClassName: et.iR,
        analyticsLocations: r,
        ...d,
    });
}
function er(e) {
    let { item: t, wishlistOwner: i, wishlistId: s, analyticsLocations: a, ...r } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(a ?? []),
            t.sku?.productLine === D.EZt.SOCIAL_LAYER_GAME_ITEM ? c.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, d.bG)([v.default], () => v.default.getCurrentUser()),
        [m, x] = l.useState(!1),
        f = (0, d.bG)([T], () => T.hasSentGift(t.skuId, i.id), [i, t.skuId]),
        h = l.useMemo(
            () => t.skuProductLine !== D.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case D.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(el, {
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
        case D.EZt.COLLECTIBLES:
            return (0, n.jsx)(es, {
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
        case D.EZt.PREMIUM:
            return (0, n.jsx)(ea, {
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
