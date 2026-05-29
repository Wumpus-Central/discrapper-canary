"use strict";
n.d(t, { p: () => r, r: () => i });
let i = {
        skuIds: [],
        isGift: !1,
        referralTrialOfferId: null,
        activeSubscription: null,
        excludeSubscriptionPlansBySKU: !1,
        purchaseType: n(652215).VVm.SUBSCRIPTION,
    },
    r = (e, t, n) => ({
        ...n,
        setCheckoutInitParameters: (n) => {
            var i;
            let { skuIds: r, ...s } = n,
                a = ((i = t().skuIds), null != r && (r.length !== i.length || r.some((e, t) => e !== i[t])));
            e({ ...s, ...(a ? { skuIds: r } : {}) });
        },
    });
