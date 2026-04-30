n.d(t, { A: () => l });
var o = n(17928),
    r = n(251913),
    a = n(825755),
    i = n(153084);
function l() {
    let e = (0, o.bG)([a.A], () => a.A.error),
        [t, n] = (0, o.yK)([i.A], () => [i.A.error, i.A.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? r.oc.PENDING : null != t ? r.oc.ERROR : r.oc.NONE,
    };
}
