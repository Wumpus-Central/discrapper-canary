n.d(t, { A: () => V });
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
    E = n(606758),
    h = n(287809),
    j = n(474090),
    N = n(661492),
    T = n(228366);
let v = { sentGifts: {} };
function S(e, t) {
    return `${e}:${t}`;
}
class _ extends o.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((v = e), this.cleanupExpiredGifts());
    }
    getState() {
        return v;
    }
    hasSentGift(e, t) {
        let n = S(e, t),
            i = v.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = S(e, t),
            i = v.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(v.sentGifts)) new Date(n.expiresAt) < e && delete v.sentGifts[t];
    }
}
let O = new _(T.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = S(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        v.sentGifts[t] = {
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
    b = n(662349),
    L = n(479026),
    D = n(699976),
    G = n(652215),
    P = n(788868),
    w = n(518477),
    y = n(985018),
    U = n(575581),
    M = n(997990);
let F = D.Z.SIZE_133;
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
    let { trackUserProfileWishlistAction: S } = (0, p.NJ)(),
        _ = l.useCallback(() => {
            null != A &&
                (S({
                    wishlistId: A,
                    action: w.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                x());
        }, [x, t.sku, A, S]),
        O = l.useCallback(() => {
            null != A &&
                (S({
                    wishlistId: A,
                    action: w.Mq.WISHLIST_ITEM_CLICKED,
                    skuId: t.sku.id,
                    productLines: new Set([t.sku.productLine]),
                }),
                I());
        }, [I, t.sku, A, S]),
        L = l.useCallback(() => {
            (0, E.XA)(w.jM.SOMETHING_WENT_WRONG), c.O.announce(y.intl.string(y.t.F8FvUy));
        }, []),
        D = null != u ? (0, i.jsx)("div", { ref: T, className: U.BU, children: u }) : null,
        { label: G, icon: P, isPromptingPurchase: M } = (0, b.h)({ wishlistOwner: n, isOwned: h });
    return (0, i.jsxs)("div", {
        className: U.kL,
        children: [
            (0, i.jsxs)(C.A, {
                sku: t.sku,
                user: n,
                spec: F,
                cardStyle: a()(U.Nr, r),
                skuPreviewStyle: a()(U.ev, { [U.go]: h && !m }, d),
                skuAssetClassName: g,
                disableHoverOrFocus: o,
                onHoverOrFocusChange: f,
                onClick: _,
                "aria-label": y.intl.formatToPlainString(y.t.ZBB4Ty, { productName: (0, N.TC)(t.sku) }),
                children: [
                    j,
                    (0, i.jsx)(b.A, { spec: F, onClick: M ? O : _, isHoveringOrFocusing: m, label: G, icon: P }),
                    h && (0, i.jsx)(R.gS, { isHoveringOrFocusing: m }),
                    n.id === s.id &&
                        null != A &&
                        (0, i.jsx)(k.A, {
                            sku: t.sku,
                            isCardHovered: m,
                            spec: F,
                            onError: L,
                            location: "UserProfileWishlistItemCardBase",
                            skipExperiment: !0,
                        }),
                ],
            }),
            D,
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
                giftingOrigin: P.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: r,
            });
        }, [t.sku.id, t.sku.applicationId, s, r]),
        d = l.useCallback(() => {
            let e = s.id === a.id;
            (0, I.a)(
                t.sku,
                { isGift: !e, giftRecipient: s, giftingOrigin: P.vQ.USER_PROFILE_WISHLIST },
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
function X(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: s,
            analyticsLocations: c,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        m = (0, L.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: P.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: c,
        }),
        f = l.useMemo(
            () => () => {
                let e = n.id === o.id;
                (0, g.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: P.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: c ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, o.id, c],
        ),
        x =
            u &&
            t.sku.productLine === G.EZt.COLLECTIBLES &&
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
        skuPreviewStyle: a()({ [U.mn]: x }),
        analyticsLocations: c,
        ...d,
    });
}
function B(e) {
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
                      giftingOrigin: P.vQ.USER_PROFILE_WISHLIST,
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
        skuPreviewStyle: M.MO,
        skuAssetClassName: c ? M.iR : void 0,
        analyticsLocations: r,
        ...o,
    });
}
function V(e) {
    let { item: t, wishlistOwner: n, wishlistId: s, analyticsLocations: a, ...r } = e,
        { analyticsLocations: c } = (0, d.Ay)(
            ...(a ?? []),
            t.sku?.productLine === G.EZt.SOCIAL_LAYER_GAME_ITEM ? u.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        g = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
        [m, f] = l.useState(!1),
        x = (0, o.bG)([O], () => O.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        I = l.useMemo(
            () =>
                t.skuProductLine === G.EZt.PREMIUM
                    ? null != g && n.id === g.id && (0, j.ki)(g, P.WN[t.skuId])
                    : !0 === t.isOwned || x,
            [t.isOwned, t.skuId, t.skuProductLine, x, g, n.id],
        );
    if (null == t.sku || null == g) return null;
    switch (t.sku.productLine) {
        case G.EZt.SOCIAL_LAYER_GAME_ITEM:
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
        case G.EZt.COLLECTIBLES:
            return (0, i.jsx)(X, {
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
        case G.EZt.PREMIUM:
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
        default:
            return null;
    }
}
