var i = t(145310),
    a = t(938973),
    s = t(682901);
t.d(
    n,
    {},
    {
        $: function (e) {
            let {
                    subscriptionTier: n = null,
                    hasActivePromotion: t = !1,
                    useShorterCTA: l = !1,
                    isPersistentCTA: r = !1,
                    buttonTextOverride: d,
                    ...o
                } = e,
                { buttonText: u, marketingSubscriptionTierSkuId: c } = (0, i.s)({
                    subscriptionTier: n,
                    hasActivePromotion: t,
                    useShorterCTA: l,
                    isPersistentCTA: r,
                }),
                { subscribeButtonProps: b } = (0, a.B)({ ...o, subscriptionTier: c, buttonTextOverride: d ?? u });
            return { subscribeButtonProps: b, subscriptionTier: c === s.pe.NONE ? null : c };
        },
    },
);
