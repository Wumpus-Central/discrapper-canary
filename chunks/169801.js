"use strict";
n.d(t, { A: () => o, t: () => a });
var i = n(211159),
    r = n(234419),
    s = n(788868);
function a(e) {
    let { userTrialOffer: t, isGift: n, skuId: i } = e;
    return !n && null != t && null != i && s.TP[t.trial_id].skus.includes(i);
}
function o(e) {
    let { isGift: t, skuId: n } = e,
        a = (0, i.t4)((e) => e.referralTrialOfferId ?? void 0),
        o = (0, r.V)(a);
    return !t && null != o && null != n && s.TP[o.trial_id].skus.includes(n);
}
