n.d(t, {
    V: () => c,
    a: () => d
}),
    n(47120);
var i = n(442837),
    r = n(710845),
    a = n(853872),
    s = n(509545),
    o = n(78839),
    l = n(474936);
new r.Z('useSubscriptionPlansLoaded');
let u = (e) => {};
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.YQ];
    return (0, i.e7)([a.Z, s.Z, o.ZP], () => d(e, [a.Z, s.Z, o.ZP]), [e]);
}
function d() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.YQ],
        [n, i, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, s.Z, o.ZP],
        c = n.paymentSourceIds,
        d = n.defaultPaymentSourceId,
        f = i.isLoadedForSKUs(t),
        _ = null === (e = r.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
    if (null != _ && !i.hasPaymentSourceForSKUIds(_, t)) return u('subscription payment source '.concat(_, ' not loaded for ').concat(t)), !1;
    if (null != d && !i.hasPaymentSourceForSKUIds(d, t)) return u('default payment source '.concat(d, ' not loaded for ').concat(t)), !1;
    for (let e of c) if (!i.hasPaymentSourceForSKUIds(e, t)) return u('payment source '.concat(e, ' not loaded for ').concat(t)), !1;
    return f;
}
