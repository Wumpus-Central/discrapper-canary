n.d(t, {
    V: () => u,
    a: () => d
}),
    n(47120);
var r = n(442837),
    i = n(710845),
    o = n(853872),
    a = n(509545),
    s = n(78839),
    l = n(474936);
new i.Z('useSubscriptionPlansLoaded');
let c = (e) => {};
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.YQ];
    return (0, r.e7)([o.Z, a.Z, s.ZP], () => d(e, [o.Z, a.Z, s.ZP]), [e]);
}
function d() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.YQ],
        [n, r, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, a.Z, s.ZP],
        u = n.paymentSourceIds,
        d = n.defaultPaymentSourceId,
        f = r.isLoadedForSKUs(t),
        _ = null == (e = i.getPremiumTypeSubscription()) ? void 0 : e.paymentSourceId;
    if (null != _ && !r.hasPaymentSourceForSKUIds(_, t)) return c('subscription payment source '.concat(_, ' not loaded for ').concat(t)), !1;
    if (null != d && !r.hasPaymentSourceForSKUIds(d, t)) return c('default payment source '.concat(d, ' not loaded for ').concat(t)), !1;
    for (let e of u) if (!r.hasPaymentSourceForSKUIds(e, t)) return c('payment source '.concat(e, ' not loaded for ').concat(t)), !1;
    return f;
}
