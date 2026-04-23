n.d(t, { A: () => X });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(575593),
    o = n(765178),
    c = n(17928),
    d = n(793574),
    u = n(688810),
    g = n(44120),
    m = n(532794),
    _ = n(87719),
    f = n(317560),
    x = n(533406),
    p = n(183555),
    I = n(975732),
    h = n(606758),
    A = n(287809),
    E = n(474090),
    v = n(661492),
    j = n(228366);
let N = { sentGifts: {} };
function C(e, t) {
    return `${e}:${t}`;
}
class S extends c.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((N = e), this.cleanupExpiredGifts());
    }
    getState() {
        return N;
    }
    hasSentGift(e, t) {
        let n = C(e, t),
            i = N.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = C(e, t),
            i = N.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(N.sentGifts)) new Date(n.expiresAt) < e && delete N.sentGifts[t];
    }
}
let b = new S(j.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = C(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        N.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var T = n(212387),
    O = n(121700),
    k = n(460442),
    L = n(662349),
    R = n(479026),
    D = n(699976),
    P = n(652215),
    G = n(788868),
    y = n(518477),
    w = n(985018),
    M = n(575581),
    U = n(997990);
let F = D.Z.SIZE_133;
function W(e) {
    let {
            item: t,
            wishlistOwner: n,
            currentUser: l,
            style: r,
            isDragging: c,
            dragHandle: d,
            skuPreviewStyle: u,
            skuAssetClassName: g,
            isHoveringOrFocusing: m,
            setIsHoveringOrFocusing: _,
            onDetailsClick: f,
            onPurchaseClick: x,
            wishlistId: I,
            isItemOwned: A,
            cardBackdrop: E,
        } = e,
        j = a.useRef(null),
        N = a.useRef(_);
    a.useEffect(() => {
        N.current = _;
    }, [_]),
        a.useEffect(() => {
            let e = j.current;
            if (null == e) return;
            let t = () => {
                N.current(!1);
            };
            return (
                e.addEventListener("focusin", t),
                () => {
                    e.removeEventListener("focusin", t);
                }
            );
        }, []);
    let { trackUserProfileWishlistAction: C } = (0, p.NJ)(),
        S = a.useCallback(() => {
            null != I &&
                (C({
                    wishlistId: I,
                    action: y.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                f());
        }, [f, t.sku, I, C]),
        b = a.useCallback(() => {
            null != I &&
                (C({
                    wishlistId: I,
                    action: y.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, I, C]),
        R = a.useCallback(() => {
            (0, h.XA)(y.jM.SOMETHING_WENT_WRONG), o.O.announce(w.intl.string(w.t.F8FvUy));
        }, []),
        D = null != d ? (0, i.jsx)("div", { ref: j, className: M.BU, children: d }) : null,
        { label: P, icon: G, isPromptingPurchase: U } = (0, L.h)({ wishlistOwner: n, isOwned: A });
    return (0, i.jsxs)("div", {
        className: M.kL,
        children: [
            (0, i.jsxs)(T.A, {
                sku: t.sku,
                user: n,
                spec: F,
                cardStyle: s()(M.Nr, r),
                skuPreviewStyle: s()(M.ev, { [M.go]: A && !m }, u),
                skuAssetClassName: g,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: _,
                onClick: S,
                "aria-label": w.intl.formatToPlainString(w.t.ZBB4Ty, { productName: (0, v.TC)(t.sku) }),
                children: [
                    E,
                    (0, i.jsx)(L.A, { spec: F, onClick: U ? b : S, isHoveringOrFocusing: m, label: P, icon: G }),
                    A && (0, i.jsx)(k.gS, { isHoveringOrFocusing: m }),
                    n.id === l.id &&
                        null != I &&
                        (0, i.jsx)(O.A, {
                            sku: t.sku,
                            isCardHovered: m,
                            spec: F,
                            onError: R,
                            location: "UserProfileWishlistItemCardBase",
                            skipExperiment: !0,
                        }),
                ],
            }),
            D,
        ],
    });
}
function B(e) {
    let { item: t, isItemOwned: n, wishlistOwner: l, currentUser: s, analyticsLocations: r, ...o } = e,
        c = a.useCallback(() => {
            (0, f.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: l,
                giftingOrigin: G.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, l, r]),
        u = a.useCallback(() => {
            let e = l.id === s.id;
            (0, x.a)(
                t.sku,
                { isGift: !e, giftRecipient: l, giftingOrigin: G.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, l, s.id, r]);
    return (0, i.jsx)(W, {
        item: t,
        wishlistOwner: l,
        isItemOwned: n,
        onDetailsClick: c,
        onPurchaseClick: u,
        analyticsLocations: r,
        currentUser: s,
        ...o,
    });
}
function H(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: l,
            analyticsLocations: o,
            currentUser: c,
            isHoveringOrFocusing: d,
            ...u
        } = e,
        m = (0, R.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: G.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        _ = a.useMemo(
            () => () => {
                let e = n.id === c.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: G.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: o ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, c.id, o],
        ),
        f =
            d &&
            t.sku.productLine === P.EZt.COLLECTIBLES &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(W, {
        item: t,
        wishlistOwner: n,
        isItemOwned: l,
        currentUser: c,
        onDetailsClick: m,
        onPurchaseClick: _,
        isHoveringOrFocusing: d,
        skuPreviewStyle: s()({ [M.mn]: f }),
        analyticsLocations: o,
        ...u,
    });
}
function V(e) {
    let {
            item: t,
            isItemOwned: n,
            wishlistOwner: l,
            currentUser: s,
            analyticsLocations: r,
            isHoveringOrFocusing: o,
            ...c
        } = e,
        d = a.useCallback(() => {
            n
                ? (0, _.x)(I.closeUserProfileModal)
                : (0, m.A)({
                      isGift: !0,
                      giftRecipient: l,
                      giftingOrigin: G.vQ.USER_PROFILE_WISHLIST,
                      subscriptionTier: t.skuId,
                      analyticsLocations: r,
                  });
        }, [n, t.skuId, l, r]);
    return (0, i.jsx)(W, {
        item: t,
        wishlistOwner: l,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: U.MO,
        skuAssetClassName: o ? U.iR : void 0,
        analyticsLocations: r,
        ...c,
    });
}
function X(e) {
    let { item: t, wishlistOwner: n, wishlistId: l, analyticsLocations: s, ...r } = e,
        { analyticsLocations: o } = (0, u.Ay)(
            ...(s ?? []),
            t.sku?.productLine === P.EZt.SOCIAL_LAYER_GAME_ITEM ? d.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
        [m, _] = a.useState(!1),
        f = (0, c.bG)([b], () => b.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        x = a.useMemo(
            () =>
                t.skuProductLine === P.EZt.PREMIUM
                    ? null != g && n.id === g.id && (0, E.ki)(g, G.WN[t.skuId])
                    : !0 === t.isOwned || f,
            [t.isOwned, t.skuId, t.skuProductLine, f, g, n.id],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(B, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: _,
                currentUser: g,
                isItemOwned: x,
                wishlistOwner: n,
                wishlistId: l,
                ...r,
            });
        case P.EZt.COLLECTIBLES:
            return (0, i.jsx)(H, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: _,
                currentUser: g,
                isItemOwned: x,
                wishlistOwner: n,
                wishlistId: l,
                ...r,
            });
        case P.EZt.PREMIUM:
            return (0, i.jsx)(V, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: _,
                currentUser: g,
                isItemOwned: x,
                wishlistOwner: n,
                wishlistId: l,
                ...r,
            });
        default:
            return null;
    }
}
