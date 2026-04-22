"use strict";
a.d(t, { $: () => i });
var r = a(145310),
    l = a(938973),
    n = a(788868);
let i = (e) => {
    let {
            subscriptionTier: t = null,
            hasActivePromotion: a = !1,
            useShorterCTA: i = !1,
            isPersistentCTA: s = !1,
            buttonTextOverride: o,
            ...d
        } = e,
        { buttonText: c, marketingSubscriptionTierSkuId: u } = (0, r.s)({
            subscriptionTier: t,
            hasActivePromotion: a,
            useShorterCTA: i,
            isPersistentCTA: s,
        }),
        { subscribeButtonProps: h } = (0, l.B)({ ...d, subscriptionTier: u, buttonTextOverride: o ?? c });
    return { subscribeButtonProps: h, subscriptionTier: u === n.pe.NONE ? null : u };
};
