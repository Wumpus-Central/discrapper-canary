"use strict";
n.d(t, { A: () => c });
var i = n(422936),
    r = n(234419),
    s = n(410516),
    a = n(788868),
    o = n(88001),
    l = n(466919),
    u = n(375708);
let c = (e, t) => {
    let n = t?.includesPremiumGroup ?? !1,
        c = (0, r.V)(),
        d = (0, i.O)(),
        _ = (0, i.p)();
    if (null != c && (null == e || c.subscription_trial?.sku_id === e))
        return null != c.referrer_id ? u.intl.string(u.t.gtNqJQ) : u.intl.string(u.t.IBYG5U);
    if (null != d && (null == e || (0, s.U9)(d, e))) {
        let e = a.U4.includes(d.discountId);
        return u.intl.formatToPlainString(e ? u.t.mYNXed : u.t.iiLbvu, { percent: d.discount.amount });
    }
    return n && null != _ && null != _.discount
        ? u.intl.formatToPlainString(l.default["7j70dP"], {
              percent: _.discount.amount,
              premiumGroupProductName: (0, o.DP)(),
          })
        : null;
};
