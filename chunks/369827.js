var i = n(582128),
    r = n(855986),
    a = n(669815),
    s = n(295405);
n.d(
    t,
    {},
    {
        L: function () {
            let { defaultPaymentSourceId: e, hasFetchedPaymentSources: t } = (0, r.cf)([s.A], () => ({
                defaultPaymentSourceId: s.A.defaultPaymentSourceId,
                hasFetchedPaymentSources: s.A.hasFetchedPaymentSources,
            }));
            return (
                i.useEffect(() => {
                    t || (0, a.$o)();
                }, [t]),
                e
            );
        },
    },
);
