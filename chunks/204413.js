n.d(t, { $: () => r });
var l = n(145310),
    i = n(938973),
    s = n(202541);
function r(e) {
    let {
            subscriptionTier: t = null,
            hasActivePromotion: n = !1,
            useShorterCTA: r = !1,
            isPersistentCTA: a = !1,
            buttonTextOverride: u,
            ...d
        } = e,
        { buttonText: o, marketingSubscriptionTierSkuId: c } = (0, l.s)({
            subscriptionTier: t,
            hasActivePromotion: n,
            useShorterCTA: r,
            isPersistentCTA: a,
        }),
        { subscribeButtonProps: f } = (0, i.B)({ ...d, subscriptionTier: c, buttonTextOverride: u ?? o });
    return { subscribeButtonProps: f, subscriptionTier: c === s.pe.NONE ? null : c };
}
