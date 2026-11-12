var l = t(582128),
    n = t(855986),
    r = t(825755),
    s = t(316363),
    i = t(624413);
t.d(
    a,
    {},
    {
        o: function () {
            let e = (0, n.bG)([r.A], () => r.A.error),
                {
                    paymentAuthError: a,
                    isAwaitingPaymentAuthentication: t,
                    paymentAuthWasCancelled: u,
                } = (0, s.t4)((e) => ({
                    paymentAuthError: e.paymentAuthError,
                    isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
                    paymentAuthWasCancelled: e.paymentAuthWasCancelled,
                })),
                o = l.useMemo(
                    () => (t ? i.oc.PENDING : u ? i.oc.CANCELLED : null != a ? i.oc.ERROR : i.oc.NONE),
                    [t, u, a],
                );
            return { paymentError: null != a ? a : e, paymentAuthenticationState: o };
        },
    },
);
