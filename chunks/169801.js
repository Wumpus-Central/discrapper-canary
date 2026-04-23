"use strict";
n.d(t, { A: () => a, t: () => s });
var r = n(234419),
    i = n(788868);
function s(e) {
    let { userTrialOffer: t, isGift: n, skuId: r } = e;
    return !n && null != t && null != r && i.TP[t.trial_id].skus.includes(r);
}
function a(e) {
    let { isGift: t, skuId: n, referralTrialOfferId: s } = e,
        a = (0, r.V)(s);
    return !t && null != a && null != n && i.TP[a.trial_id].skus.includes(n);
}
