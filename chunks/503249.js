n.d(t, {
    $P: () => a,
    ZP: () => o,
});
var r = n(818083),
    i = n(987338),
    a = (function (e) {
        return (e.Control = "CONTROL"), (e.NitroLogo = "NITRO_LOGO"), (e.NitroPass = "NITRO_PASS"), e;
    })({});
let o = (0, r.B)({
    kind: "user",
    id: "2025-09_referral_program_banner_refresh",
    label: "Referral Program Banner Refresh Experiment",
    defaultConfig: { cohort: "NITRO_LOGO" },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: "Control. Note, this is not actually but has been included as XPs must have a control group defined.",
            config: { cohort: "CONTROL" },
        },
        {
            id: 1,
            label: "Treatment Group 1. Users see the rebranded referral program banner with the Nitro Logo in the progress wheel",
            config: { cohort: "NITRO_LOGO" },
        },
        {
            id: 2,
            label: "Treatment Group 2. Users see the rebranded referral program banner with the Nitro Pass in the progress wheel",
            config: { cohort: "NITRO_PASS" },
        },
    ],
});
