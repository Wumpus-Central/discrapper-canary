n.d(t, { p: () => s, r: () => a });
var i = n(652215),
    r = n(202541);
let a = {
    skuIds: [],
    isGift: !1,
    referralTrialOfferId: null,
    activeSubscription: null,
    initialPaymentSourceId: null,
    excludeSubscriptionPlansBySKU: !1,
    purchaseType: i.VVm.SUBSCRIPTION,
    applicationId: r.tv,
    referralCode: null,
    paymentGateway: void 0,
    defaultPlanId: void 0,
    customCheckoutFlow: void 0,
    unifiedCheckoutFlow: void 0,
    tenantParamsMap: {},
};
function s(e, t, n) {
    return {
        ...n,
        getTenantParams: (e) => t().tenantParamsMap[e],
        getSharedTenantParams: () => {
            let { unifiedCheckoutFlow: e } = t(),
                n = null != e ? t().tenantParamsMap[e] : null;
            return null == n
                ? {}
                : "sharedTenantParams" in n && null != n.sharedTenantParams
                  ? n.sharedTenantParams
                  : {};
        },
        setCheckoutInitParameters: (n) => {
            var i;
            let { skuIds: r, ...a } = n,
                s = ((i = t().skuIds), null != r && (r.length !== i.length || r.some((e, t) => e !== i[t])));
            e({ ...a, ...(s ? { skuIds: r } : {}) });
        },
    };
}
