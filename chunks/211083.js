n.d(t, { o: () => u });
var l = n(582128),
    o = n(17928),
    r = n(251913),
    i = n(825755),
    a = n(123816);
function u() {
    let e = (0, o.bG)([i.A], () => i.A.error),
        {
            paymentAuthError: t,
            isAwaitingPaymentAuthentication: n,
            paymentAuthWasCancelled: u,
        } = (0, a.t4)((e) => ({
            paymentAuthError: e.paymentAuthError,
            isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
            paymentAuthWasCancelled: e.paymentAuthWasCancelled,
        })),
        s = l.useMemo(() => (n ? r.oc.PENDING : u ? r.oc.CANCELLED : null != t ? r.oc.ERROR : r.oc.NONE), [n, u, t]);
    return { paymentError: null != t ? t : e, paymentAuthenticationState: s };
}
