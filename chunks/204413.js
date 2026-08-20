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
        { buttonText: p, marketingSubscriptionTierSkuId: c } = (0, r.s)({
            subscriptionTier: i,
            hasActivePromotion: n,
            useShorterCTA: l,
            isPersistentCTA: s,
        }),
        { subscribeButtonProps: T } = (0, e.B)({ ...a, subscriptionTier: c, buttonTextOverride: o ?? p });
    return { subscribeButtonProps: T, subscriptionTier: c === u.pe.NONE ? null : c };
}
