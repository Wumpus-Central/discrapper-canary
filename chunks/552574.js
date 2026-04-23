n.d(t, { A: () => l });
var r = n(17928),
    a = n(251913),
    i = n(825755),
    o = n(153084);
function l() {
    let e = (0, r.bG)([i.A], () => i.A.error),
        [t, n] = (0, r.yK)([o.A], () => [o.A.error, o.A.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? a.oc.PENDING : null != t ? a.oc.ERROR : a.oc.NONE,
    };
}
