r.d(e, { A: () => T });
var s = r(627968);
r(64700);
var _ = r(462887),
    a = r(862482),
    c = r(736653),
    i = r(234419),
    E = r(725807),
    M = r(145310),
    n = r(943386);
let T = (t) => {
    let {
            textOptions: e,
            subscriptionTier: r,
            hasActivePromotion: T = !1,
            isPersistentCTA: o = !1,
            useShorterCTA: N = !1,
            showGradient: R,
            confirmationFooter: U,
            color: l,
            ...A
        } = t,
        u = (0, c.Ay)(),
        { buttonText: d, marketingSubscriptionTierSkuId: O } = (0, M.s)({
            hasActivePromotion: T,
            subscriptionTier: r,
            useShorterCTA: N,
            isPersistentCTA: o,
        }),
        p = (0, i.V)(),
        P = p?.subscription_trial,
        h = null != P && O === P.sku_id,
        H = l ?? ((0, _.M)(u) ? a.XD.BRAND_INVERTED : a.XD.BRAND);
    return (0, s.jsx)(E.A, {
        color: H,
        textOptions: { textOverride: d, textClassName: h ? n.A : void 0, ...e },
        onlyShineOnHover: !0,
        subscriptionTier: O,
        showGradient: R,
        confirmationFooter: U,
        ...A,
    });
};
