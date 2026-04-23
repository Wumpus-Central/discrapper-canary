"use strict";
n.d(t, { B: () => d, Y: () => c });
var r = n(311907),
    i = n(626584),
    s = n(295405),
    a = n(97352),
    o = n(166403),
    l = n(788868);
new i.A("useSubscriptionPlansLoaded");
let u = (e) => {};
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.oz];
    return (0, r.bG)([s.A, a.A, o.A], () => d(e, [s.A, a.A, o.A]), [e]);
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.oz],
        [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, a.A, o.A],
        i = t.paymentSourceIds,
        c = t.defaultPaymentSourceId,
        d = n.isLoadedForSKUs(e),
        _ = r.getPremiumTypeSubscription()?.paymentSourceId;
    if (null != _ && !n.hasPaymentSourceForSKUIds(_, e))
        return u(`subscription payment source ${_} not loaded for ${e}`), !1;
    if (null != c && !n.hasPaymentSourceForSKUIds(c, e))
        return u(`default payment source ${c} not loaded for ${e}`), !1;
    for (let t of i) if (!n.hasPaymentSourceForSKUIds(t, e)) return u(`payment source ${t} not loaded for ${e}`), !1;
    return d;
}
