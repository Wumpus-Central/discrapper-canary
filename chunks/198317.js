var i = n(582128),
    l = n(855986),
    s = n(160946),
    r = n(295405),
    a = n(615396);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let [n, o, u] = (0, l.yK)([r.A], () => [
                    r.A.paymentSources,
                    r.A.hasFetchedPaymentSources,
                    r.A.paymentSourceFetchError,
                ]),
                c = (0, s.Y)((0, a.MP)(e)),
                d = i.useMemo(() => {
                    let e = t?.checkoutContext;
                    if (null == e) return Object.values(n).filter((e) => !e.invalid);
                    let i = new Set(e.payment_sources.filter((e) => e.enabled).map((e) => e.id));
                    return Object.values(n).filter((e) => !e.invalid && i.has(e.id));
                }, [n, t?.checkoutContext]),
                m = (!o && !u) || !c;
            return {
                isLoading: m,
                hasFetchError: u,
                validPaymentSources: d,
                hasFetchedPaymentSources: o,
                hasFetchedSubscriptionPlans: c,
                canManagePayment: !m && !(u && 0 === d.length),
            };
        },
    },
);
