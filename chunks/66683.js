n.d(t, {
    S: () => s,
    k: () => a,
});
var i = n(818083),
    r = n(987338);
let s = (0, i.B)({
        id: "2025-08_churn_discount_header",
        kind: "user",
        label: "Churn Discount Subscription Header Experiment",
        defaultConfig: { enabled: !1 },
        commonTriggerPoint: r.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: "Enables a churn discount header in subscription details",
                config: { enabled: !0 },
            },
        ],
    }),
    a = (e) => {
        let { location: t } = e;
        return s.useExperiment({ location: t });
    };
