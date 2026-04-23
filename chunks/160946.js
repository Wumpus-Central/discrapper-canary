"use strict";
n.d(t, { B: () => u, Y: () => _ });
var i = n(17928),
    r = n(626584),
    s = n(295405),
    a = n(97352),
    o = n(166403),
    l = n(788868);
new r.A("useSubscriptionPlansLoaded");
let d = (e) => {};
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.oz];
    return (0, i.bG)([s.A, a.A, o.A], () => u(e, [s.A, a.A, o.A]), [e]);
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.oz],
        [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, a.A, o.A],
        r = t.paymentSourceIds,
        _ = t.defaultPaymentSourceId,
        u = n.isLoadedForSKUs(e),
        c = i.getPremiumTypeSubscription()?.paymentSourceId;
    if (null != c && !n.hasPaymentSourceForSKUIds(c, e))
        return d(`subscription payment source ${c} not loaded for ${e}`), !1;
    if (null != _ && !n.hasPaymentSourceForSKUIds(_, e))
        return d(`default payment source ${_} not loaded for ${e}`), !1;
    for (let t of r) if (!n.hasPaymentSourceForSKUIds(t, e)) return d(`payment source ${t} not loaded for ${e}`), !1;
    return u;
}
