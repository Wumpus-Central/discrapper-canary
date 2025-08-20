n.d(t, {
    S$: () => a,
    ZP: () => o,
});
var r = n(818083),
    i = n(987338),
    a = (function (e) {
        return (e.Control = "CONTROL"), (e.Expressive = "EXPRESSIVE"), (e.Primary = "PRIMARY"), e;
    })({});
let o = (0, r.B)({
    kind: "user",
    id: "2025-08_referral_program_banner",
    label: "Referral Program Banner Experiment",
    defaultConfig: { cohort: "CONTROL" },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: "Control group. Users see existing referral program banner.",
            config: { cohort: "CONTROL" },
        },
        {
            id: 1,
            label: "Treatment Group 1. Users see the rebranded referral program banner with an expressive gifting button",
            config: { cohort: "EXPRESSIVE" },
        },
        {
            id: 2,
            label: "Treatment Group 2. Users see the rebranded referral program banner with a primary gifting button",
            config: { cohort: "PRIMARY" },
        },
    ],
});
