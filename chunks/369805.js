"use strict";
n.d(t, { A: () => c });
var i = n(724651),
    r = n(732280),
    a = n(511484),
    s = n(202541),
    l = n(88001),
    o = n(466919),
    d = n(375708);
let c = function (e, t) {
    let n = t?.includesPremiumGroup ?? !1,
        c = (0, r.V)(),
        u = (0, i.O)(),
        _ = (0, i.p)();
    if (null != c && (null == e || c.subscriptionTrial?.skuId === e))
        return null != c.referrerId ? d.intl.string(d.t.gtNqJQ) : d.intl.string(d.t.IBYG5U);
    if (null != u && (null == e || (0, a.U9)(u, e))) {
        let e = s.U4.includes(u.discountId);
        return d.intl.formatToPlainString(e ? d.t.mYNXed : d.t.iiLbvu, { percent: u.discount.amount });
    }
    return n && null != _ && null != _.discount
        ? d.intl.formatToPlainString(o.default["7j70dP"], {
              percent: _.discount.amount,
              premiumGroupProductName: (0, l.DP)(),
          })
        : null;
};
