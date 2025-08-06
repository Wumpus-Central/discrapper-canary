n.d(t, {
    P: () => a,
    R: () => l,
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
        id: "2025-08_nitro_rebrand_churn_modal_preview_invoice_step",
        kind: "user",
        label: "Nitro Rebrand Churn Modal Preview Invoice Step",
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: "Enables preview invoice step in rebranded churn modal",
                config: { enabled: !0 },
            },
        ],
    }),
    a = (e) => {
        let { location: t } = e;
        return l.useExperiment({ location: t });
    };
