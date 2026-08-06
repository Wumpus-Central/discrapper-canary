"use strict";
n.d(t, { p: () => l, r: () => s });
var i = n(65258),
    r = n(652215),
    a = n(202541);
let s = {
    skuIds: [],
    isGift: !1,
    referralTrialOfferId: null,
    activeSubscription: null,
    initialPaymentSourceId: null,
    excludeSubscriptionPlansBySKU: !1,
    purchaseType: r.VVm.SUBSCRIPTION,
    applicationId: a.tv,
    referralCode: null,
    paymentGateway: void 0,
    defaultPlanId: void 0,
    customCheckoutFlow: void 0,
    unifiedCheckoutFlow: void 0,
    tenantParamsMap: {},
};
function l(e, t, n) {
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
        getShouldUseStripeExpressCheckout: () => {
            let e = t().getSharedTenantParams();
            return !!(0, i.l)() && null != e && !!e.shouldUseStripeExpressCheckout;
        },
        setCheckoutInitParameters: (n) => {
            var i;
            let { skuIds: r, ...a } = n,
                s = ((i = t().skuIds), null != r && (r.length !== i.length || r.some((e, t) => e !== i[t])));
            e({ ...a, ...(s ? { skuIds: r } : {}) });
        },
    };
}
