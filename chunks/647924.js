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
    _ = n(44120),
    g = n(532794),
    m = n(87719),
    f = n(317560),
    x = n(533406),
    p = n(183555),
    I = n(975732),
    A = n(606758),
    h = n(287809),
    E = n(474090),
    v = n(661492),
    j = n(228366);
let b = { sentGifts: {} };
function N(e, t) {
    return `${e}:${t}`;
}
class T extends c.Ay.PersistedStore {
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
let C = new T(j.h, {
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
var S = n(212387),
    k = n(121700),
    O = n(460442),
    L = n(662349),
    D = n(479026),
    R = n(699976),
    P = n(652215),
    w = n(788868),
    G = n(518477),
    y = n(985018),
    M = n(575581),
    U = n(997990);
let F = R.Z.SIZE_133;
function W(e) {
    let {
            item: t,
            wishlistOwner: n,
            currentUser: l,
            style: r,
            isDragging: c,
            dragHandle: d,
            skuPreviewStyle: u,
            skuAssetClassName: _,
            isHoveringOrFocusing: g,
            setIsHoveringOrFocusing: m,
            onDetailsClick: f,
            onPurchaseClick: x,
            wishlistId: I,
            isItemOwned: h,
            cardBackdrop: E,
        } = e,
        j = a.useRef(null),
        b = a.useRef(m);
    a.useEffect(() => {
        b.current = m;
    }, [m]),
        a.useEffect(() => {
            let e = j.current;
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
    let { trackUserProfileWishlistAction: N } = (0, p.NJ)(),
        T = a.useCallback(() => {
            null != I &&
                (N({
                    wishlistId: I,
                    action: G.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                f());
        }, [f, t.sku, I, N]),
        C = a.useCallback(() => {
            null != I &&
                (N({
                    wishlistId: I,
                    action: G.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, I, N]),
        D = a.useCallback(() => {
            (0, A.XA)(G.jM.SOMETHING_WENT_WRONG), o.O.announce(y.intl.string(y.t.F8FvUy));
        }, []),
        R = null != d ? (0, i.jsx)("div", { ref: j, className: M.BU, children: d }) : null,
        { label: P, icon: w, isPromptingPurchase: U } = (0, L.h)({ wishlistOwner: n, isOwned: h });
    return (0, i.jsxs)("div", {
        className: M.kL,
        children: [
            (0, i.jsxs)(S.A, {
                sku: t.sku,
                user: n,
                spec: F,
                cardStyle: s()(M.Nr, r),
                skuPreviewStyle: s()(M.ev, { [M.go]: h && !g }, u),
                skuAssetClassName: _,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: m,
                onClick: T,
                "aria-label": y.intl.formatToPlainString(y.t.ZBB4Ty, { productName: (0, v.TC)(t.sku) }),
                children: [
                    E,
                    (0, i.jsx)(L.A, { spec: F, onClick: U ? C : T, isHoveringOrFocusing: g, label: P, icon: w }),
                    h && (0, i.jsx)(O.gS, { isHoveringOrFocusing: g }),
                    n.id === l.id &&
                        null != I &&
                        (0, i.jsx)(k.A, {
                            sku: t.sku,
                            isCardHovered: g,
                            spec: F,
                            onError: D,
                            location: "UserProfileWishlistItemCardBase",
                            skipExperiment: !0,
                        }),
                ],
            }),
            R,
        ],
    });
}
function H(e) {
    let { item: t, isItemOwned: n, wishlistOwner: l, currentUser: s, analyticsLocations: r, ...o } = e,
        c = a.useCallback(() => {
            (0, f.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: l,
                giftingOrigin: w.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, l, r]),
        u = a.useCallback(() => {
            let e = l.id === s.id;
            (0, x.a)(
                t.sku,
                { isGift: !e, giftRecipient: l, giftingOrigin: w.vQ.USER_PROFILE_WISHLIST },
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
        g = (0, D.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: w.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: o,
        }),
        m = a.useMemo(
            () => () => {
                let e = n.id === c.id;
                (0, _.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: w.vQ.USER_PROFILE_WISHLIST,
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
        onDetailsClick: g,
        onPurchaseClick: m,
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
                ? (0, m.x)(I.closeUserProfileModal)
                : (0, g.A)({
                      isGift: !0,
                      giftRecipient: l,
                      giftingOrigin: w.vQ.USER_PROFILE_WISHLIST,
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
        _ = (0, c.bG)([h.default], () => h.default.getCurrentUser()),
        [g, m] = a.useState(!1),
        f = (0, c.bG)([C], () => C.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        x = a.useMemo(
            () =>
                t.skuProductLine === P.EZt.PREMIUM
                    ? null != _ && n.id === _.id && (0, E.ki)(_, w.WN[t.skuId])
                    : !0 === t.isOwned || f,
            [t.isOwned, t.skuId, t.skuProductLine, f, _, n.id],
        );
    if (null == t.sku || null == _) return null;
    switch (t.sku.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(H, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: m,
                currentUser: _,
                isItemOwned: x,
                wishlistOwner: n,
                wishlistId: l,
                ...r,
            });
        case P.EZt.COLLECTIBLES:
            return (0, i.jsx)(B, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: m,
                currentUser: _,
                isItemOwned: x,
                wishlistOwner: n,
                wishlistId: l,
                ...r,
            });
        case P.EZt.PREMIUM:
            return (0, i.jsx)(V, {
                item: t,
                analyticsLocations: o,
                isHoveringOrFocusing: g,
                setIsHoveringOrFocusing: m,
                currentUser: _,
                isItemOwned: x,
                wishlistOwner: n,
                wishlistId: l,
                ...r,
            });
        default:
            return null;
    }
}
