n.d(t, { o: () => s });
var l = n(17928),
    r = n(251913),
    i = n(825755),
    a = n(153084);
function s() {
    let e = (0, l.bG)([i.A], () => i.A.error),
        [t, n] = (0, l.yK)([a.A], () => [a.A.error, a.A.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? r.oc.PENDING : null != t ? r.oc.ERROR : r.oc.NONE,
    };
}
