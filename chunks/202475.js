var l = n(582128),
    r = n(855986),
    i = n(669815),
    a = n(295405),
    s = n(67480),
    u = n(316363);
n.d(
    t,
    {},
    {
        Y: function () {
            let { selectedSkuId: e } = (0, u.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
                t = (0, r.bG)([s.A], () => (null != e ? s.A.get(e) : null), [e]);
            return { paymentGatewayRestrictions: null != t ? t.eligiblePaymentGateways : null };
        },
        j: function (e) {
            let t = null != e && e.shouldAllowFetchPaymentSources,
                {
                    defaultPaymentSourceId: n,
                    paymentSources: s,
                    hasFetchedPaymentSources: u,
                } = (0, r.cf)([a.A], () => ({
                    defaultPaymentSourceId: a.A.defaultPaymentSourceId,
                    paymentSources: a.A.paymentSources,
                    hasFetchedPaymentSources: a.A.hasFetchedPaymentSources,
                })),
                { hasPaymentSources: c, defaultPaymentSource: o } = l.useMemo(
                    () => ({
                        hasPaymentSources: Object.keys(s).length > 0,
                        defaultPaymentSource: null != n ? s[n] : null,
                    }),
                    [s, n],
                );
            return (
                l.useEffect(() => {
                    t && !u && (0, i.$o)();
                }, [t, u]),
                {
                    defaultPaymentSourceId: n,
                    paymentSources: s,
                    hasFetchedPaymentSources: u,
                    hasPaymentSources: c,
                    defaultPaymentSource: o,
                }
            );
        },
    },
);
