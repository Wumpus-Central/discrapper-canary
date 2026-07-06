n.d(t, { o: () => s });
var l = n(17928),
    i = n(251913),
    r = n(825755),
    a = n(153084);
function s() {
    let e = (0, l.bG)([r.A], () => r.A.error),
        [t, n] = (0, l.yK)([a.A], () => [a.A.error, a.A.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? i.oc.PENDING : null != t ? i.oc.ERROR : i.oc.NONE,
    };
}
