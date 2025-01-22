r.d(n, {
    T: function () {
        return o;
    },
    Z: function () {
        return s;
    }
});
var i = r(639119),
    a = r(474936);
function o(e) {
    let { userTrialOffer: n, isGift: r, skuId: i } = e;
    return !r && null != n && null != i && a.nG[n.trial_id].skus.includes(i);
}
function s(e) {
    let { isGift: n, skuId: r, referralTrialOfferId: o } = e,
        s = (0, i.N)(o);
    return !n && null != s && null != r && a.nG[s.trial_id].skus.includes(r);
}
