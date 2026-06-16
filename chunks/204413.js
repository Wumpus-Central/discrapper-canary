n.d(i, { $: () => u });
var r = n(145310),
    e = n(938973),
    l = n(788868);
let u = (t) => {
    let {
            subscriptionTier: i = null,
            hasActivePromotion: n = !1,
            useShorterCTA: u = !1,
            isPersistentCTA: s = !1,
            buttonTextOverride: a,
            ...o
        } = t,
        { buttonText: p, marketingSubscriptionTierSkuId: c } = (0, r.s)({
            subscriptionTier: i,
            hasActivePromotion: n,
            useShorterCTA: u,
            isPersistentCTA: s,
        }),
        { subscribeButtonProps: T } = (0, e.B)({ ...o, subscriptionTier: c, buttonTextOverride: a ?? p });
    return { subscribeButtonProps: T, subscriptionTier: c === l.pe.NONE ? null : c };
};
