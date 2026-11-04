var l = n(582128),
    i = n(855986),
    o = n(251913),
    r = n(825755),
    a = n(516106);
n.d(
    t,
    {},
    {
        o: function () {
            let e = (0, i.bG)([r.A], () => r.A.error),
                {
                    paymentAuthError: t,
                    isAwaitingPaymentAuthentication: n,
                    paymentAuthWasCancelled: s,
                } = (0, a.t4)((e) => ({
                    paymentAuthError: e.paymentAuthError,
                    isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
                    paymentAuthWasCancelled: e.paymentAuthWasCancelled,
                })),
                u = l.useMemo(
                    () => (n ? o.oc.PENDING : s ? o.oc.CANCELLED : null != t ? o.oc.ERROR : o.oc.NONE),
                    [n, s, t],
                );
            return { paymentError: null != t ? t : e, paymentAuthenticationState: u };
        },
    },
);
