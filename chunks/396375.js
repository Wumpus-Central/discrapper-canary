r.d(e, { A: () => o });
var s = r(627968);
r(64700);
var _ = r(462887),
    c = r(862482),
    i = r(736653),
    n = r(234419),
    a = r(725807),
    E = r(145310),
    M = r(943386);
let o = function (t) {
    let {
            textOptions: e,
            subscriptionTier: r,
            hasActivePromotion: o = !1,
            isPersistentCTA: T = !1,
            useShorterCTA: N = !1,
            showGradient: R,
            confirmationFooter: U,
            color: u,
            ...l
        } = t,
        A = (0, i.Ay)(),
        { buttonText: d, marketingSubscriptionTierSkuId: O } = (0, E.s)({
            hasActivePromotion: o,
            subscriptionTier: r,
            useShorterCTA: N,
            isPersistentCTA: T,
        }),
        p = (0, n.V)(),
        P = p?.subscription_trial,
        h = null != P && O === P.sku_id,
        H = u ?? ((0, _.M)(A) ? c.XD.BRAND_INVERTED : c.XD.BRAND);
    return (0, s.jsx)(a.A, {
        color: H,
        textOptions: { textOverride: d, textClassName: h ? M.A : void 0, ...e },
        onlyShineOnHover: !0,
        subscriptionTier: O,
        showGradient: R,
        confirmationFooter: U,
        ...l,
    });
};
