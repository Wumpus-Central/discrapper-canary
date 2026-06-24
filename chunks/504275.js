"use strict";
n.d(t, { p: () => a, r: () => s });
var i = n(652215),
    r = n(788868);
let s = {
    skuIds: [],
    isGift: !1,
    referralTrialOfferId: null,
    activeSubscription: null,
    excludeSubscriptionPlansBySKU: !1,
    purchaseType: i.VVm.SUBSCRIPTION,
    applicationId: r.tv,
    referralCode: null,
    paymentGateway: void 0,
    defaultPlanId: void 0,
    customCheckoutFlow: void 0,
    unifiedCheckoutFlow: void 0,
};
function a(e, t, n) {
    return {
        ...n,
        setCheckoutInitParameters: (n) => {
            var i;
            let { skuIds: r, ...s } = n,
                a = ((i = t().skuIds), null != r && (r.length !== i.length || r.some((e, t) => e !== i[t])));
            e({ ...s, ...(a ? { skuIds: r } : {}) });
        },
    };
}
