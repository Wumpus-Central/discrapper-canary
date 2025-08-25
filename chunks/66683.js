n.d(t, {
    S: () => a,
    k: () => o,
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
        id: "2025-08_churn_discount_header",
        kind: "user",
        label: "Churn Discount Subscription Header Experiment",
        defaultConfig: {
            enabled: !1,
            showDiscountBadge: !1,
        },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: "Enables a churn discount header in subscription details with a discount badge",
                config: {
                    enabled: !0,
                    showDiscountBadge: !0,
                },
            },
            {
                id: 2,
                label: "Enables a churn discount header in subscription details with discount button copy",
                config: {
                    enabled: !0,
                    showDiscountBadge: !1,
                },
            },
        ],
    }),
    o = (e) => {
        let { location: t } = e;
        return a.useExperiment({ location: t });
    };
