i.d(t, { A: () => ef });
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
    x = i(317560),
    p = i(533406),
    I = i(183555),
    A = i(975732),
    E = i(606758),
    h = i(287809),
    j = i(474090),
    N = i(661492),
    v = i(228366);
let T = { sentGifts: {} };
function _(e, t) {
    return `${e}:${t}`;
}
class S extends o.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((T = e), this.cleanupExpiredGifts());
    }
    getState() {
        return T;
    }
    hasSentGift(e, t) {
        let i = _(e, t),
            n = T.sentGifts[i];
        return !(null == n || new Date(n.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let i = _(e, t),
            n = T.sentGifts[i];
        return null == n || new Date(n.expiresAt) < new Date() ? null : n;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, i] of Object.entries(T.sentGifts)) new Date(i.expiresAt) < e && delete T.sentGifts[t];
    }
}
let O = new S(v.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = _(e.skuId, e.recipientId),
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
        r = (0, o.bG)([P.default], () => P.default.getId()),
        {
            isWishlisted: c,
            isBusy: u,
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
            isBusy: u,
            isFirstTimeWishlister: d,
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
            isWishlisted: c,
            isBusy: u,
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
            isBusy: u,
            isFirstTimeWishlister: d,
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
            isWishlisted: c,
            isBusy: u,
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
            isBusy: u,
            isFirstTimeWishlister: d,
            onClick: g,
            tooltipConfig: A,
            ...a,
        }),
    });
}
function B(e) {
    let { sku: t, isCardHovered: i, ...l } = e,
        s = (0, o.bG)([R.A], () => R.A.getProduct(t.id));
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
var K = i(508770),
    z = i(278416),
    Y = i(990078),
    q = i(240248),
    J = i(561794),
    Q = i(218606);
function Z(e) {
    let { spec: t, icon: i, tooltipText: l } = e,
        s = !(0, q.uJ)(l),
        r = (0, n.jsx)("div", {
            className: a()(Q.F, { [Q.Y]: s }),
            style: { bottom: t.iconInset, insetInlineStart: t.iconInset },
            children: i,
        });
    return s ? (0, n.jsx)(Y.m, { text: l, position: "top", delay: J.Zh, children: r }) : r;
}
function $(e) {
    let { spec: t, ...i } = e;
    return (0, n.jsx)(Z, { spec: t, icon: (0, n.jsx)(K.E, { ...i }) });
}
function ee(e) {
    let { spec: t } = e;
    return (0, n.jsx)($, { spec: t, variant: "expressive", icon: z.g, type: { text: y.intl.string(y.t.cZCqGn) } });
}
var et = i(460442),
    ei = i(662349),
    en = i(479026),
    el = i(699976),
    es = i(788868),
    ea = i(518477),
    er = i(575581),
    ec = i(997990);
let eo = el.Z.SIZE_133;
function eu(e) {
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
            wishlistId: A,
            isItemOwned: h,
            cardBackdrop: j,
            hasPromotion: v,
        } = e,
        T = l.useRef(null),
        _ = l.useRef(f);
    l.useEffect(() => {
        _.current = f;
    }, [f]),
        l.useEffect(() => {
            let e = T.current;
            if (null == e) return;
            let t = () => {
                _.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: S } = (0, I.NJ)(),
        O = l.useCallback(() => {
            null != A &&
                (S({
                    wishlistId: A,
                    action: ea.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, A, S]),
        R = l.useCallback(() => {
            null != A &&
                (S({
                    wishlistId: A,
                    action: ea.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                p());
        }, [p, t.sku, A, S]),
        b = l.useCallback(() => {
            (0, E.XA)(ea.jM.SOMETHING_WENT_WRONG), c.O.announce(y.intl.string(y.t.F8FvUy));
        }, []),
        k = null != u ? (0, n.jsx)("div", { ref: T, className: er.BU, children: u }) : null,
        { label: D, icon: G, isPromptingPurchase: L } = (0, ei.h)({ wishlistOwner: i, isOwned: h });
    return (0, n.jsxs)("div", {
        className: er.kL,
        children: [
            (0, n.jsxs)(C.A, {
                sku: t.sku,
                user: i,
                spec: eo,
                cardStyle: a()(er.Nr, r),
                skuPreviewStyle: a()(er.ev, { [er.go]: h && !m }, d),
                skuAssetClassName: g,
                disableHoverOrFocus: o,
                onHoverOrFocusChange: f,
                onClick: O,
                "aria-label": y.intl.formatToPlainString(y.t.ZBB4Ty, { productName: (0, N.TC)(t.sku) }),
                children: [
                    j,
                    (0, n.jsx)(ei.A, { spec: eo, onClick: L ? R : O, isHoveringOrFocusing: m, label: D, icon: G }),
                    !m && v && (0, n.jsx)(ee, { spec: eo }),
                    h && (0, n.jsx)(et.gS, { isHoveringOrFocusing: m }),
                    i.id === s.id &&
                        null != A &&
                        (0, n.jsx)(V, {
                            sku: t.sku,
                            isCardHovered: m,
                            spec: eo,
                            onError: b,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            k,
        ],
    });
}
function ed(e) {
    let { item: t, isItemOwned: i, wishlistOwner: s, currentUser: a, analyticsLocations: r, ...c } = e,
        o = l.useCallback(() => {
            (0, x.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: s,
                giftingOrigin: es.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, s, r]),
        d = l.useCallback(() => {
            let e = s.id === a.id;
            (0, p.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: es.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, s, a.id, r]);
    return (0, n.jsx)(eu, {
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
function eg(e) {
    let {
            item: t,
            wishlistOwner: i,
            isItemOwned: s,
            analyticsLocations: c,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        m = (0, en.e)({
            sku: t.sku,
            giftRecipient: i,
            giftingOrigin: es.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: c,
        }),
        f = l.useMemo(
            () => () => {
                let e = i.id === o.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: es.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: c ?? [],
                    giftRecipient: i,
                });
            },
            [t.sku, i, o.id, c],
        ),
        x = t.sku.tenantMetadata?.collectibles?.type,
        p = u && (x === r.R.AVATAR_DECORATION || x === r.R.PROFILE_FRAME);
    return (0, n.jsx)(eu, {
        item: t,
        wishlistOwner: i,
        isItemOwned: s,
        currentUser: o,
        onDetailsClick: m,
        onPurchaseClick: f,
        isHoveringOrFocusing: u,
        skuPreviewStyle: a()({ [er.mn]: p }),
        analyticsLocations: c,
        ...d,
    });
}
function em(e) {
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
            if (i) return void (0, f.x)(A.closeUserProfileModal);
            let e = s.id === a.id;
            (0, m.A)({
                isGift: !e,
                giftRecipient: s,
                giftingOrigin: es.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: t.skuId,
                analyticsLocations: r,
            });
        }, [i, t.skuId, s, a.id, r]);
    return (0, n.jsx)(eu, {
        item: t,
        wishlistOwner: s,
        isItemOwned: i,
        currentUser: a,
        onDetailsClick: u,
        onPurchaseClick: u,
        isHoveringOrFocusing: c,
        skuPreviewStyle: ec.MO,
        skuAssetClassName: c ? ec.iR : void 0,
        analyticsLocations: r,
        ...o,
    });
}
function ef(e) {
    let { item: t, wishlistOwner: i, wishlistId: s, analyticsLocations: a, ...r } = e,
        { analyticsLocations: c } = (0, d.Ay)(
            ...(a ?? []),
            t.sku?.productLine === w.EZt.SOCIAL_LAYER_GAME_ITEM ? u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        [m, f] = l.useState(!1),
        x = (0, o.bG)([O], () => O.hasSentGift(t.skuId, i.id), [i, t.skuId]),
        p = l.useMemo(
            () =>
                t.skuProductLine === w.EZt.PREMIUM
                    ? null != g && i.id === g.id && (0, j.ki)(g, es.WN[t.skuId])
                    : !0 === t.isOwned || x,
            [t.isOwned, t.skuId, t.skuProductLine, x, g, i.id],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case w.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(ed, {
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
            return (0, n.jsx)(eg, {
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
            return (0, n.jsx)(em, {
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
