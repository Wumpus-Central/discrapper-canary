var l = t(855986),
    n = t(160946),
    r = t(97352),
    s = t(71804),
    i = t(316363);
t.d(
    a,
    {},
    {
        A: function () {
            let e = (0, i.t4)((e) => e.selectedPlanId);
            return (0, l.bG)([r.A], () => (null != e ? r.A.get(e) : null), [e]);
        },
        D: function () {
            let {
                    selectedPlanId: e,
                    skuIds: a,
                    selectedSkuId: t,
                    unifiedCheckoutFlow: u,
                } = (0, i.t4)((e) => ({
                    selectedPlanId: e.selectedPlanId,
                    skuIds: e.skuIds,
                    selectedSkuId: e.selectedSkuId,
                    unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                })),
                o = (0, n.Y)(a),
                c = (0, l.bG)([r.A], () => (null != e ? r.A.get(e) : null), [e]);
            if (null == c || null == e)
                throw new s.v({
                    message:
                        "useCheckoutRequiredSelectedPlan: expected plan to be selected, but selected plan from Flux Store is null",
                    extraSentryInformation: {
                        unifiedCheckoutFlow: u,
                        selectedPlanId: e,
                        selectedPlanFromFluxStore: c,
                        selectedSkuId: t,
                        hasFetchedSubscriptionPlans: o,
                        checkoutSkuIds: a,
                    },
                });
            return { selectedPlanId: e, selectedPlanFromFluxStore: c };
        },
    },
);
