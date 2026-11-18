var l = n(582128),
    i = n(855986),
    o = n(825755),
    r = n(682689),
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
                    paymentAuthWasCancelled: u,
                } = (0, r.t4)((e) => ({
                    paymentAuthError: e.paymentAuthError,
                    isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
                    paymentAuthWasCancelled: e.paymentAuthWasCancelled,
                })),
                s = l.useMemo(
                    () => (n ? a.oc.PENDING : u ? a.oc.CANCELLED : null != t ? a.oc.ERROR : a.oc.NONE),
                    [n, u, t],
                );
            return { paymentError: null != t ? t : e, paymentAuthenticationState: s };
        },
    },
);
