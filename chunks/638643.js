e(938796);
var i = e(477900),
    l = e(192308),
    r = e(342098),
    s = e(216678),
    a = e(97352),
    o = e(166403),
    u = e(67480),
    d = e(915043),
    c = e(163437);
e.d(
    n,
    {},
    {
        k: function (t) {
            let { appId: n, skuId: e, analyticsLocations: i, checkoutFlow: l } = t;
            (0, s.q)({ applicationId: n, skuId: e, analyticsLocations: i, checkoutFlow: l });
        },
        w: async function (t) {
            let {
                    subscriptionPlanId: n,
                    sku: s,
                    subscriptionGroupPlanIds: A,
                    initialSubscribeForGuild: p,
                    analyticsLocations: I,
                    analyticsLocation: m,
                    disableGuildSelector: f = !1,
                } = t,
                { promise: S, resolve: g } = Promise.withResolvers();
            if ((0, c.PJ)(s.flags) && !1 === f) {
                let { promise: t, resolve: n } = Promise.withResolvers();
                ((0, l.mM)(
                    async () => {
                        let { GuildSubscriptionSelectionModal: t } = await Promise.all([
                            e.e(775417),
                            e.e(970062),
                            e.e(308555),
                            e.e(220287),
                            e.e(930476),
                        ]).then(e.bind(e, 399143));
                        return (e) =>
                            (0, i.jsx)(t, {
                                transitionState: e.transitionState,
                                onClose: e.onClose,
                                sku: s,
                                onSelect: n,
                                currentGuildId: p,
                            });
                    },
                    { stackingBehavior: "stack" },
                ),
                    (p = await t));
            }
            let h = u.A.getParentSKU(s.id),
                v = null;
            return (
                null != h &&
                    ([v] = (0, d.wm)({
                        groupSku: h,
                        SubscriptionStore: o.A,
                        SubscriptionPlanStore: a.A,
                        mapSubscriptionItems: d.W_,
                        guildId: p,
                    })),
                (0, r.A)({
                    initialPlanId: n,
                    skuId: s.id,
                    activeSubscription: v,
                    applicationId: s.applicationId,
                    planGroup: A,
                    guildId: p,
                    analyticsLocations: I,
                    analyticsLocation: m,
                    onComplete: g,
                    showBenefitsFirst: !1,
                    forcesTransitionToGuild: !1,
                }),
                S
            );
        },
    },
);
