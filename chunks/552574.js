n.d(t, { A: () => l });
var o = n(17928),
    r = n(251913),
    i = n(825755),
    a = n(153084);
function l() {
    let e = (0, o.bG)([i.A], () => i.A.error),
        [t, n] = (0, o.yK)([a.A], () => [a.A.error, a.A.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? r.oc.PENDING : null != t ? r.oc.ERROR : r.oc.NONE,
    };
}
