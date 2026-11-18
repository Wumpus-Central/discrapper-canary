var l = n(855986),
    i = n(160946),
    o = n(97352),
    r = n(71804),
    a = n(3900);
n.d(
    t,
    {},
    {
        A: function () {
            let e = (0, a.t4)((e) => e.selectedPlanId);
            return (0, l.bG)([o.A], () => (null != e ? o.A.get(e) : null), [e]);
        },
        D: function () {
            let {
                    selectedPlanId: e,
                    skuIds: t,
                    selectedSkuId: n,
                    unifiedCheckoutFlow: u,
                } = (0, a.t4)((e) => ({
                    selectedPlanId: e.selectedPlanId,
                    skuIds: e.skuIds,
                    selectedSkuId: e.selectedSkuId,
                    unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                })),
                s = (0, i.Y)(t),
                c = (0, l.bG)([o.A], () => (null != e ? o.A.get(e) : null), [e]);
            if (null == c || null == e)
                throw new r.v({
                    message:
                        "useCheckoutRequiredSelectedPlan: expected plan to be selected, but selected plan from Flux Store is null",
                    extraSentryInformation: {
                        unifiedCheckoutFlow: u,
                        selectedPlanId: e,
                        selectedPlanFromFluxStore: c,
                        selectedSkuId: n,
                        hasFetchedSubscriptionPlans: s,
                        checkoutSkuIds: t,
                    },
                });
            return { selectedPlanId: e, selectedPlanFromFluxStore: c };
        },
    },
);
