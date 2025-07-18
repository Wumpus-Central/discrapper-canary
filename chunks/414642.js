n.d(t, {
    K: () => l,
    S: () => a
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
        id: '2025-07_nitro_rebrand_churn_modal',
        kind: 'user',
        label: 'Nitro Rebrand Churn Modal',
        defaultConfig: {
            enabled: !1,
            expressive: !1
        },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Enables rebranded churn modal w/ utilitarian modals',
                config: {
                    enabled: !0,
                    expressive: !1
                }
            },
            {
                id: 2,
                label: 'Enables rebranded churn modal w/ expressive modals',
                config: {
                    enabled: !0,
                    expressive: !0
                }
            }
        ]
    }),
    a = (e) => {
        let { location: t } = e;
        return l.useExperiment({ location: t });
    };
