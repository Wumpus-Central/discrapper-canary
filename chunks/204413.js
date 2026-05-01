s.d(r, { $: () => n });
var t = s(145310),
    e = s(938973),
    u = s(788868);
let n = (i) => {
    let {
            subscriptionTier: r = null,
            hasActivePromotion: s = !1,
            useShorterCTA: n = !1,
            isPersistentCTA: p = !1,
            buttonTextOverride: c,
            ...o
        } = i,
        { buttonText: b, marketingSubscriptionTierSkuId: d } = (0, t.s)({
            subscriptionTier: r,
            hasActivePromotion: s,
            useShorterCTA: n,
            isPersistentCTA: p,
        }),
        { subscribeButtonProps: l } = (0, e.B)({ ...o, subscriptionTier: d, buttonTextOverride: c ?? b });
    return { subscribeButtonProps: l, subscriptionTier: d === u.pe.NONE ? null : d };
};
