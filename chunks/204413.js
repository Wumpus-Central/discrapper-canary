"use strict";
r.d(t, { $: () => s });
var n = r(145310),
    i = r(938973),
    a = r(788868);
let s = (e) => {
    let {
            subscriptionTier: t = null,
            hasActivePromotion: r = !1,
            useShorterCTA: s = !1,
            isPersistentCTA: l = !1,
            buttonTextOverride: o,
            ...c
        } = e,
        { buttonText: d, marketingSubscriptionTierSkuId: u } = (0, n.s)({
            subscriptionTier: t,
            hasActivePromotion: r,
            useShorterCTA: s,
            isPersistentCTA: l,
        }),
        { subscribeButtonProps: _ } = (0, i.B)({ ...c, subscriptionTier: u, buttonTextOverride: o ?? d });
    return { subscribeButtonProps: _, subscriptionTier: u === a.pe.NONE ? null : u };
};
