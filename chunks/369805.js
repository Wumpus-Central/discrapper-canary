"use strict";
n.d(t, { A: () => l });
var i = n(422936),
    r = n(234419),
    s = n(410516),
    a = n(788868),
    o = n(375708);
let l = (e) => {
    let t = (0, r.V)(),
        n = (0, i.O)();
    if (null != t && (null == e || t.subscription_trial?.sku_id === e))
        return null != t.referrer_id ? o.intl.string(o.t.gtNqJQ) : o.intl.string(o.t.IBYG5U);
    if (null != n && (null == e || (0, s.U9)(n, e))) {
        let e = a.U4.includes(n.discountId);
        return o.intl.formatToPlainString(e ? o.t.mYNXed : o.t.iiLbvu, { percent: n.discount.amount });
    }
    return null;
};
