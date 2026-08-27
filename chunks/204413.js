n.d(i, { $: () => l });
var r = n(145310),
    e = n(938973),
    u = n(202541);
function l(t) {
    let {
            subscriptionTier: i = null,
            hasActivePromotion: n = !1,
            useShorterCTA: l = !1,
            isPersistentCTA: s = !1,
            buttonTextOverride: o,
            ...a
        } = t,
        { buttonText: p, marketingSubscriptionTierSkuId: T } = (0, r.s)({
            subscriptionTier: i,
            hasActivePromotion: n,
            useShorterCTA: l,
            isPersistentCTA: s,
        }),
        { subscribeButtonProps: c } = (0, e.B)({ ...a, subscriptionTier: T, buttonTextOverride: o ?? p });
    return { subscribeButtonProps: c, subscriptionTier: T === u.pe.NONE ? null : T };
}
