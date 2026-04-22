n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var a = n(462887),
    i = n(862482),
    s = n(736653),
    l = n(234419),
    c = n(725807),
    o = n(145310),
    d = n(943386);
let u = (e) => {
    let {
            textOptions: t,
            subscriptionTier: n,
            hasActivePromotion: u = !1,
            isPersistentCTA: _ = !1,
            useShorterCTA: m = !1,
            showGradient: p,
            confirmationFooter: f,
            color: A,
            ...g
        } = e,
        h = (0, s.Ay)(),
        { buttonText: b, marketingSubscriptionTierSkuId: x } = (0, o.s)({
            hasActivePromotion: u,
            subscriptionTier: n,
            useShorterCTA: m,
            isPersistentCTA: _,
        }),
        C = (0, l.V)(),
        v = C?.subscription_trial,
        R = null != v && x === v.sku_id,
        N = A ?? ((0, a.M)(h) ? i.XD.BRAND_INVERTED : i.XD.BRAND);
    return (0, r.jsx)(c.A, {
        color: N,
        textOptions: { textOverride: b, textClassName: R ? d.A : void 0, ...t },
        onlyShineOnHover: !0,
        subscriptionTier: x,
        showGradient: p,
        confirmationFooter: f,
        ...g,
    });
};
