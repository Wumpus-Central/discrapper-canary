t.d(n, { o: () => u });
var l = t(582128),
    r = t(17928),
    i = t(251913),
    a = t(825755),
    s = t(642639);
function u() {
    let e = (0, r.bG)([a.A], () => a.A.error),
        {
            paymentAuthError: n,
            isAwaitingPaymentAuthentication: t,
            paymentAuthWasCancelled: u,
        } = (0, s.t4)((e) => ({
            paymentAuthError: e.paymentAuthError,
            isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
            paymentAuthWasCancelled: e.paymentAuthWasCancelled,
        })),
        c = l.useMemo(() => (t ? i.oc.PENDING : u ? i.oc.CANCELLED : null != n ? i.oc.ERROR : i.oc.NONE), [t, u, n]);
    return { paymentError: null != n ? n : e, paymentAuthenticationState: c };
}
