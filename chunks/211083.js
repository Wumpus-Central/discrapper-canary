n.d(t, { o: () => o });
var l = n(64700),
    i = n(17928),
    r = n(251913),
    a = n(825755),
    s = n(153084);
function o() {
    let e = (0, i.bG)([a.A], () => a.A.error),
        [t, n, o] = (0, i.yK)([s.A], () => [s.A.error, s.A.isAwaitingAuthentication, s.A.wasCancelled]),
        u = l.useMemo(() => (n ? r.oc.PENDING : o ? r.oc.CANCELLED : null != t ? r.oc.ERROR : r.oc.NONE), [n, o, t]);
    return { paymentError: null != t ? t : e, paymentAuthenticationState: u };
}
