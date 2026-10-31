n.d(t, { o: () => s });
var l = n(582128),
    o = n(17928),
    i = n(251913),
    r = n(825755),
    a = n(281044);
function s() {
    let e = (0, o.bG)([r.A], () => r.A.error),
        {
            paymentAuthError: t,
            isAwaitingPaymentAuthentication: n,
            paymentAuthWasCancelled: s,
        } = (0, a.t4)((e) => ({
            paymentAuthError: e.paymentAuthError,
            isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
            paymentAuthWasCancelled: e.paymentAuthWasCancelled,
        })),
        u = l.useMemo(() => (n ? i.oc.PENDING : s ? i.oc.CANCELLED : null != t ? i.oc.ERROR : i.oc.NONE), [n, s, t]);
    return { paymentError: null != t ? t : e, paymentAuthenticationState: u };
}
