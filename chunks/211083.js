n.d(t, { o: () => o });
var l = n(582128),
    i = n(17928),
    r = n(251913),
    a = n(825755),
    s = n(721836);
function o() {
    let e = (0, i.bG)([a.A], () => a.A.error),
        {
            paymentAuthError: t,
            isAwaitingPaymentAuthentication: n,
            paymentAuthWasCancelled: o,
        } = (0, s.t4)((e) => ({
            paymentAuthError: e.paymentAuthError,
            isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
            paymentAuthWasCancelled: e.paymentAuthWasCancelled,
        })),
        u = l.useMemo(() => (n ? r.oc.PENDING : o ? r.oc.CANCELLED : null != t ? r.oc.ERROR : r.oc.NONE), [n, o, t]);
    return { paymentError: null != t ? t : e, paymentAuthenticationState: u };
}
