n.d(t, { A: () => z });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(575593),
    o = n(765178),
    c = n(17928),
    d = n(793574),
    u = n(688810),
    g = n(44120),
    _ = n(532794),
    m = n(87719),
    f = n(317560),
    p = n(99161),
    x = n(183555),
    h = n(975732),
    I = n(606758),
    A = n(287809),
    E = n(474090),
    C = n(661492),
    v = n(228366);
let b = { sentGifts: {} };
function N(e, t) {
    return `${e}:${t}`;
}
class S extends c.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((b = e), this.cleanupExpiredGifts());
    }
    getState() {
        return b;
    }
    hasSentGift(e, t) {
        let n = N(e, t),
            i = b.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = N(e, t),
            i = b.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(b.sentGifts)) new Date(n.expiresAt) < e && delete b.sentGifts[t];
    }
}
let T = new S(v.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = N(e.skuId, e.recipientId),
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
var j = n(212387),
    O = n(121700),
    k = n(460442),
    L = n(662349),
    P = n(479026),
    D = n(699976),
    y = n(652215),
    R = n(788868),
    w = n(518477),
    G = n(985018),
    M = n(575581),
    U = n(997990);
let F = D.Z.SIZE_133;
function H(e) {
    let {
            item: t,
            wishlistOwner: n,
            currentUser: l,
            style: s,
            isDragging: c,
            dragHandle: d,
            skuPreviewStyle: u,
            skuAssetClassName: g,
            isHoveringOrFocusing: _,
            setIsHoveringOrFocusing: m,
            onDetailsClick: f,
            onPurchaseClick: p,
            wishlistId: h,
            isItemOwned: A,
            cardBackdrop: E,
        } = e,
        v = a.useRef(null),
        b = a.useRef(m);
    a.useEffect(() => {
        b.current = m;
    }, [m]),
        a.useEffect(() => {
            let e = v.current;
            if (null == e) return;
            let t = () => {
                b.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: N } = (0, x.NJ)(),
        S = a.useCallback(() => {
            null != h &&
                (N({
                    wishlistId: h,
                    action: w.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                f());
        }, [f, t.sku, h, N]),
        T = a.useCallback(() => {
            null != h &&
                (N({
                    wishlistId: h,
                    action: w.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                p());
        }, [p, t.sku, h, N]),
        P = a.useCallback(() => {
            (0, I.XA)(w.jM.SOMETHING_WENT_WRONG), o.O.announce(G.intl.string(G.t.F8FvUy));
        }, []),
        D = null != d ? (0, i.jsx)("div", { ref: v, className: M.BU, children: d }) : null,
        { label: y, icon: R, isPromptingPurchase: U } = (0, L.h)({ wishlistOwner: n, isOwned: A });
    return (0, i.jsxs)("div", {
        className: M.kL,
        children: [
            (0, i.jsxs)(j.A, {
                sku: t.sku,
                user: n,
                spec: F,
                cardStyle: r()(M.Nr, s),
                skuPreviewStyle: r()(M.ev, { [M.go]: A && !_ }, u),
                skuAssetClassName: g,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: m,
                onClick: S,
                "aria-label": G.intl.formatToPlainString(G.t.ZBB4Ty, { productName: (0, C.TC)(t.sku) }),
                children: [
                    E,
                    (0, i.jsx)(L.A, { spec: F, onClick: U ? T : S, isHoveringOrFocusing: _, label: y, icon: R }),
                    A && (0, i.jsx)(k.gS, { isHoveringOrFocusing: _ }),
                    n.id === l.id &&
                        null != h &&
                        (0, i.jsx)(O.A, {
                            sku: t.sku,
                            isCardHovered: _,
                            spec: F,
                            onError: P,
                            location: "UserProfileWishlistItemCardBase",
                            skipExperiment: !0,
                        }),
                ],
            }),
            D,
        ],
    });
}
function W(e) {
    let { item: t, isItemOwned: n, wishlistOwner: l, currentUser: r, analyticsLocations: s, ...o } = e,
        c = a.useCallback(() => {
            (0, f.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: l,
                giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: s,
            });
        }, [t.sku.id, t.sku.applicationId, l, s]),
        u = a.useCallback(() => {
            let e = l.id === r.id;
            (0, p.a)(
                t.sku,
                { isGift: !e, giftRecipient: l, giftingOrigin: R.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...s, d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, l, r.id, s]);
    return (0, i.jsx)(H, {
        item: t,
        wishlistOwner: l,
        isItemOwned: n,
        onDetailsClick: c,
        onPurchaseClick: u,
        analyticsLocations: s,
        currentUser: r,
        ...o,
    });
}
function B(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: l,
            analyticsLocations: o,
            currentUser: c,
            isHoveringOrFocusing: d,
            ...u
        } = e,
        _ = (0, P.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        m = a.useMemo(
            () => () => {
                let e = n.id === c.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, c.id, o],
        ),
        f =
            d &&
            t.sku.productLine === y.EZt.COLLECTIBLES &&
            t.sku.tenantMetadata?.collectibles?.type !== s.R.PROFILE_EFFECT &&
            t.sku.tenantMetadata?.collectibles?.type !== s.R.NAMEPLATE;
    return (0, i.jsx)(H, {
        item: t,
        wishlistOwner: n,
        isItemOwned: l,
        currentUser: c,
        onDetailsClick: _,
        onPurchaseClick: m,
        isHoveringOrFocusing: d,
        skuPreviewStyle: r()({ [M.mn]: f }),
        analyticsLocations: o,
        ...u,
    });
}
function V(e) {
    let {
            item: t,
            isItemOwned: n,
            wishlistOwner: l,
            currentUser: r,
            analyticsLocations: s,
            isHoveringOrFocusing: o,
            ...c
        } = e,
        d = a.useCallback(() => {
            n
                ? (0, m.x)(h.closeUserProfileModal)
                : (0, _.A)({
                      isGift: !0,
                      giftRecipient: l,
                      giftingOrigin: R.vQ.USER_PROFILE_WISHLIST,
                      subscriptionTier: t.skuId,
                      analyticsLocations: s,
                  });
        }, [n, t.skuId, l, s]);
    return (0, i.jsx)(H, {
        item: t,
        wishlistOwner: l,
        isItemOwned: n,
        currentUser: r,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: U.MO,
        skuAssetClassName: o ? U.iR : void 0,
        analyticsLocations: s,
        ...c,
    });
}
function z(e) {
    let { item: t, wishlistOwner: n, wishlistId: l, analyticsLocations: r, ...s } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(r ?? []),
            t.sku?.productLine === y.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
        [_, m] = a.useState(!1),
        f = (0, c.bG)([T], () => T.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        p = a.useMemo(
            () =>
                t.skuProductLine === y.EZt.PREMIUM
                    ? null != g && n.id === g.id && (0, E.ki)(g, R.WN[t.skuId])
                    : !0 === t.isOwned || f,
            [t.isOwned, t.skuId, t.skuProductLine, f, g, n.id],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case y.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(W, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: _,
                setIsHoveringOrFocusing: m,
                currentUser: g,
                isItemOwned: p,
                wishlistOwner: n,
                wishlistId: l,
                ...s,
            });
        case y.EZt.COLLECTIBLES:
            return (0, i.jsx)(B, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: _,
                setIsHoveringOrFocusing: m,
                currentUser: g,
                isItemOwned: p,
                wishlistOwner: n,
                wishlistId: l,
                ...s,
            });
        case y.EZt.PREMIUM:
            return (0, i.jsx)(V, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: _,
                setIsHoveringOrFocusing: m,
                currentUser: g,
                isItemOwned: p,
                wishlistOwner: n,
                wishlistId: l,
                ...s,
            });
        default:
            return null;
    }
}
