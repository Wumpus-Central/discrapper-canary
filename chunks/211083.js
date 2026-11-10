var l = n(582128),
    i = n(855986),
    o = n(825755),
    r = n(316363),
    a = n(624413);
n.d(
    t,
    {},
    {
        o: function () {
            let e = (0, i.bG)([o.A], () => o.A.error),
                {
                    paymentAuthError: t,
                    isAwaitingPaymentAuthentication: n,
                    paymentAuthWasCancelled: s,
                } = (0, r.t4)((e) => ({
                    paymentAuthError: e.paymentAuthError,
                    isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
                    paymentAuthWasCancelled: e.paymentAuthWasCancelled,
                })),
                u = l.useMemo(
                    () => (n ? a.oc.PENDING : s ? a.oc.CANCELLED : null != t ? a.oc.ERROR : a.oc.NONE),
                    [n, s, t],
                );
            return { paymentError: null != t ? t : e, paymentAuthenticationState: u };
        },
    },
);
