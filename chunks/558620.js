n.d(t, { A: () => o, D: () => u });
var l = n(17928),
    i = n(160946),
    r = n(97352),
    a = n(71804),
    s = n(87725);
function o() {
    let e = (0, s.t4)((e) => e.selectedPlanId);
    return (0, l.bG)([r.A], () => (null != e ? r.A.get(e) : null), [e]);
}
function u() {
    let {
            selectedPlanId: e,
            skuIds: t,
            selectedSkuId: n,
            unifiedCheckoutFlow: o,
        } = (0, s.t4)((e) => ({
            selectedPlanId: e.selectedPlanId,
            skuIds: e.skuIds,
            selectedSkuId: e.selectedSkuId,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
        })),
        u = (0, i.Y)(t),
        c = (0, l.bG)([r.A], () => (null != e ? r.A.get(e) : null), [e]);
    if (null == c || null == e)
        throw new a.v({
            message:
                "useCheckoutRequiredSelectedPlan: expected plan to be selected, but selected plan from Flux Store is null",
            extraSentryInformation: {
                unifiedCheckoutFlow: o,
                selectedPlanId: e,
                selectedPlanFromFluxStore: c,
                selectedSkuId: n,
                hasFetchedSubscriptionPlans: u,
                checkoutSkuIds: t,
            },
        });
    return { selectedPlanId: e, selectedPlanFromFluxStore: c };
}
