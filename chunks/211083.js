t.d(a, { o: () => u });
var l = t(582128),
    n = t(17928),
    r = t(251913),
    i = t(825755),
    s = t(504560);
function u() {
    let e = (0, n.bG)([i.A], () => i.A.error),
        {
            paymentAuthError: a,
            isAwaitingPaymentAuthentication: t,
            paymentAuthWasCancelled: u,
        } = (0, s.t4)((e) => ({
            paymentAuthError: e.paymentAuthError,
            isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
            paymentAuthWasCancelled: e.paymentAuthWasCancelled,
        })),
        o = l.useMemo(() => (t ? r.oc.PENDING : u ? r.oc.CANCELLED : null != a ? r.oc.ERROR : r.oc.NONE), [t, u, a]);
    return { paymentError: null != a ? a : e, paymentAuthenticationState: o };
}
