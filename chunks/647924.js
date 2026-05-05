n.d(t, { A: () => X });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(575593),
    c = n(765178),
    o = n(17928),
    u = n(793574),
    d = n(688810),
    g = n(44120),
    m = n(532794),
    f = n(87719),
    x = n(317560),
    I = n(533406),
    p = n(183555),
    A = n(975732),
    h = n(606758),
    E = n(287809),
    j = n(474090),
    N = n(661492),
    v = n(228366);
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
        let n = S(e, t),
            i = T.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = S(e, t),
            i = T.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(T.sentGifts)) new Date(n.expiresAt) < e && delete T.sentGifts[t];
    }
}
let O = new _(v.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = S(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        T.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var C = n(212387),
    k = n(121700),
    R = n(460442),
    L = n(662349),
    b = n(479026),
    w = n(699976),
    P = n(652215),
    D = n(788868),
    y = n(518477),
    G = n(375708),
    M = n(575581),
    F = n(997990);
let U = w.Z.SIZE_133;
function W(e) {
    let {
            item: t,
            wishlistOwner: n,
            currentUser: s,
            style: r,
            isDragging: o,
            dragHandle: u,
            skuPreviewStyle: d,
            skuAssetClassName: g,
            isHoveringOrFocusing: m,
            setIsHoveringOrFocusing: f,
            onDetailsClick: x,
            onPurchaseClick: I,
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
    let { trackUserProfileWishlistAction: S } = (0, p.NJ)(),
        _ = l.useCallback(() => {
            null != A &&
                (S({
                    wishlistId: A,
                    action: y.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, A, S]),
        O = l.useCallback(() => {
            null != A &&
                (S({
                    wishlistId: A,
                    action: y.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                I());
        }, [I, t.sku, A, S]),
        b = l.useCallback(() => {
            (0, h.XA)(y.jM.SOMETHING_WENT_WRONG), c.O.announce(G.intl.string(G.t.F8FvUy));
        }, []),
        w = null != u ? (0, i.jsx)("div", { ref: v, className: M.BU, children: u }) : null,
        { label: P, icon: D, isPromptingPurchase: F } = (0, L.h)({ wishlistOwner: n, isOwned: E });
    return (0, i.jsxs)("div", {
        className: M.kL,
        children: [
            (0, i.jsxs)(C.A, {
                sku: t.sku,
                user: n,
                spec: U,
                cardStyle: a()(M.Nr, r),
                skuPreviewStyle: a()(M.ev, { [M.go]: E && !m }, d),
                skuAssetClassName: g,
                disableHoverOrFocus: o,
                onHoverOrFocusChange: f,
                onClick: _,
                "aria-label": G.intl.formatToPlainString(G.t.ZBB4Ty, { productName: (0, N.TC)(t.sku) }),
                children: [
                    j,
                    (0, i.jsx)(L.A, { spec: U, onClick: F ? O : _, isHoveringOrFocusing: m, label: P, icon: D }),
                    E && (0, i.jsx)(R.gS, { isHoveringOrFocusing: m }),
                    n.id === s.id &&
                        null != A &&
                        (0, i.jsx)(k.A, {
                            sku: t.sku,
                            isCardHovered: m,
                            spec: U,
                            onError: b,
                            location: "UserProfileWishlistItemCardBase",
                            skipExperiment: !0,
                        }),
                ],
            }),
            w,
        ],
    });
}
function H(e) {
    let { item: t, isItemOwned: n, wishlistOwner: s, currentUser: a, analyticsLocations: r, ...c } = e,
        o = l.useCallback(() => {
            (0, x.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: s,
                giftingOrigin: D.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, s, r]),
        d = l.useCallback(() => {
            let e = s.id === a.id;
            (0, I.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: D.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...r, u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, s, a.id, r]);
    return (0, i.jsx)(W, {
        item: t,
        wishlistOwner: s,
        isItemOwned: n,
        onDetailsClick: o,
        onPurchaseClick: d,
        analyticsLocations: r,
        currentUser: a,
        ...c,
    });
}
function B(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: s,
            analyticsLocations: c,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        m = (0, b.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: D.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: c,
        }),
        f = l.useMemo(
            () => () => {
                let e = n.id === o.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: D.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: c ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, o.id, c],
        ),
        x =
            u &&
            t.sku.productLine === P.EZt.COLLECTIBLES &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.PROFILE_EFFECT &&
            t.sku.tenantMetadata?.collectibles?.type !== r.R.NAMEPLATE;
    return (0, i.jsx)(W, {
        item: t,
        wishlistOwner: n,
        isItemOwned: s,
        currentUser: o,
        onDetailsClick: m,
        onPurchaseClick: f,
        isHoveringOrFocusing: u,
        skuPreviewStyle: a()({ [M.mn]: x }),
        analyticsLocations: c,
        ...d,
    });
}
function V(e) {
    let {
            item: t,
            isItemOwned: n,
            wishlistOwner: s,
            currentUser: a,
            analyticsLocations: r,
            isHoveringOrFocusing: c,
            ...o
        } = e,
        u = l.useCallback(() => {
            n
                ? (0, f.x)(A.closeUserProfileModal)
                : (0, m.A)({
                      isGift: !0,
                      giftRecipient: s,
                      giftingOrigin: D.vQ.USER_PROFILE_WISHLIST,
                      subscriptionTier: t.skuId,
                      analyticsLocations: r,
                  });
        }, [n, t.skuId, s, r]);
    return (0, i.jsx)(W, {
        item: t,
        wishlistOwner: s,
        isItemOwned: n,
        currentUser: a,
        onDetailsClick: u,
        onPurchaseClick: u,
        isHoveringOrFocusing: c,
        skuPreviewStyle: F.MO,
        skuAssetClassName: c ? F.iR : void 0,
        analyticsLocations: r,
        ...o,
    });
}
function X(e) {
    let { item: t, wishlistOwner: n, wishlistId: s, analyticsLocations: a, ...r } = e,
        { analyticsLocations: c } = (0, d.Ay)(
            ...(a ?? []),
            t.sku?.productLine === P.EZt.SOCIAL_LAYER_GAME_ITEM ? u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        [m, f] = l.useState(!1),
        x = (0, o.bG)([O], () => O.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        I = l.useMemo(
            () =>
                t.skuProductLine === P.EZt.PREMIUM
                    ? null != g && n.id === g.id && (0, j.ki)(g, D.WN[t.skuId])
                    : !0 === t.isOwned || x,
            [t.isOwned, t.skuId, t.skuProductLine, x, g, n.id],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(H, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: I,
                wishlistOwner: n,
                wishlistId: s,
                ...r,
            });
        case P.EZt.COLLECTIBLES:
            return (0, i.jsx)(B, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: I,
                wishlistOwner: n,
                wishlistId: s,
                ...r,
            });
        case P.EZt.PREMIUM:
            return (0, i.jsx)(V, {
                item: t,
                analyticsLocations: c,
                isHoveringOrFocusing: m,
                setIsHoveringOrFocusing: f,
                currentUser: g,
                isItemOwned: I,
                wishlistOwner: n,
                wishlistId: s,
                ...r,
            });
        default:
            return null;
    }
}
