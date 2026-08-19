"use strict";
n.d(t, { B: () => u, Y: () => c });
var i = n(17928),
    r = n(626584),
    a = n(295405),
    s = n(97352),
    l = n(166403),
    o = n(202541);
new r.A("useSubscriptionPlansLoaded");
let d = (e) => {};
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.oz];
    return (0, i.bG)([a.A, s.A, l.A], () => u(e, [a.A, s.A, l.A]), [e]);
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...o.oz],
        [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, s.A, l.A],
        r = t.paymentSourceIds,
        c = t.defaultPaymentSourceId,
        u = n.isLoadedForSKUs(e),
        _ = i.getPremiumTypeSubscription()?.paymentSourceId;
    if (null != _ && !n.hasPaymentSourceForSKUIds(_, e))
        return d(`subscription payment source ${_} not loaded for ${e}`), !1;
    if (null != c && !n.hasPaymentSourceForSKUIds(c, e))
        return d(`default payment source ${c} not loaded for ${e}`), !1;
    for (let t of r) if (!n.hasPaymentSourceForSKUIds(t, e)) return d(`payment source ${t} not loaded for ${e}`), !1;
    return u;
}
