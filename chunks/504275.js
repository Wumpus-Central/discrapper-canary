"use strict";
n.d(t, { p: () => o, r: () => s });
var i = n(652215),
    r = n(788868);
let s = {
        skuIds: [],
        currencySkuIds: [],
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
    },
    a = (e, t) => null != e && (e.length !== t.length || e.some((e, n) => e !== t[n])),
    o = (e, t, n) => ({
        ...n,
        setCheckoutInitParameters: (n) => {
            let { skuIds: i, currencySkuIds: r, ...s } = n,
                o = a(i, t().skuIds),
                l = a(r, t().currencySkuIds);
            e({ ...s, ...(o ? { skuIds: i } : {}), ...(l ? { currencySkuIds: r } : {}) });
        },
    });
