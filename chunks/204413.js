r.d(i, { $: () => s });
var n = r(145310),
    e = r(938973),
    l = r(788868);
let s = (t) => {
    let {
            subscriptionTier: i = null,
            hasActivePromotion: r = !1,
            useShorterCTA: s = !1,
            isPersistentCTA: u = !1,
            buttonTextOverride: a,
            ...o
        } = t,
        { buttonText: p, marketingSubscriptionTierSkuId: T } = (0, n.s)({
            subscriptionTier: i,
            hasActivePromotion: r,
            useShorterCTA: s,
            isPersistentCTA: u,
        }),
        { subscribeButtonProps: c } = (0, e.B)({ ...o, subscriptionTier: T, buttonTextOverride: a ?? p });
    return { subscribeButtonProps: c, subscriptionTier: T === l.pe.NONE ? null : T };
};
