n.d(t, { A: () => u });
var i = n(724651),
    s = n(732280),
    l = n(511484),
    r = n(202541),
    a = n(88001),
    o = n(148155),
    c = n(375708);
let u = function (e, t) {
    let n = t?.includesPremiumGroup ?? !1,
        u = (0, s.V)(),
        d = (0, i.O)(),
        m = (0, i.p)();
    if (null != u && (null == e || u.subscriptionTrial?.skuId === e))
        return u.isReferralTrial ? c.intl.string(c.t.gtNqJQ) : c.intl.string(c.t.IBYG5U);
    if (null != d && (null == e || (0, l.U9)(d, e))) {
        let e = r.U4.includes(d.discountId);
        return c.intl.formatToPlainString(e ? c.t.mYNXed : c.t.iiLbvu, { percent: d.discount.amount });
    }
    return n && null != m && null != m.discount
        ? c.intl.formatToPlainString(o.default["7j70dP"], {
              percent: m.discount.amount,
              premiumGroupProductName: (0, a.DP)(),
          })
        : null;
};
