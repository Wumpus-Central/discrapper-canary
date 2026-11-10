var l = n(582128),
    o = n(855986),
    i = n(825755),
    r = n(316363),
    u = n(624413);
n.d(
    t,
    {},
    {
        o: function () {
            let e = (0, o.bG)([i.A], () => i.A.error),
                {
                    paymentAuthError: t,
                    isAwaitingPaymentAuthentication: n,
                    paymentAuthWasCancelled: a,
                } = (0, r.t4)((e) => ({
                    paymentAuthError: e.paymentAuthError,
                    isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
                    paymentAuthWasCancelled: e.paymentAuthWasCancelled,
                })),
                s = l.useMemo(
                    () => (n ? u.oc.PENDING : a ? u.oc.CANCELLED : null != t ? u.oc.ERROR : u.oc.NONE),
                    [n, a, t],
                );
            return { paymentError: null != t ? t : e, paymentAuthenticationState: s };
        },
    },
);
