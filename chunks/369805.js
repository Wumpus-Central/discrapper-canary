"use strict";
n.d(t, { A: () => c });
var l = n(724651),
    i = n(732280),
    s = n(511484),
    r = n(202541),
    a = n(88001),
    o = n(109447),
    u = n(375708);
let c = function (e, t) {
    let n = t?.includesPremiumGroup ?? !1,
        c = (0, i.V)(),
        d = (0, l.O)(),
        h = (0, l.p)();
    if (null != c && (null == e || c.subscriptionTrial?.skuId === e))
        return null != c.referrerId ? u.intl.string(u.t.gtNqJQ) : u.intl.string(u.t.IBYG5U);
    if (null != d && (null == e || (0, s.U9)(d, e))) {
        let e = r.U4.includes(d.discountId);
        return u.intl.formatToPlainString(e ? u.t.mYNXed : u.t.iiLbvu, { percent: d.discount.amount });
    }
    return n && null != h && null != h.discount
        ? u.intl.formatToPlainString(o.default["7j70dP"], {
              percent: h.discount.amount,
              premiumGroupProductName: (0, a.DP)(),
          })
        : null;
};
