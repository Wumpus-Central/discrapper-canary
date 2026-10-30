n.d(t, { A: () => o });
var i = n(724651),
    s = n(732280),
    l = n(511484),
    r = n(202541),
    a = n(105292);
let o = function (e) {
    let t = (0, s.V)(),
        n = (0, i.O)();
    if (null != t && (null == e || t.subscriptionTrial?.skuId === e))
        return t.isReferralTrial ? a.intl.string(a.t.gtNqJQ) : a.intl.string(a.t.IBYG5U);
    if (null != n && (null == e || (0, l.U9)(n, e))) {
        let e = r.U4.includes(n.discountId);
        return a.intl.formatToPlainString(e ? a.t.mYNXed : a.t.iiLbvu, { percent: n.discount.amount });
    }
    return null;
};
