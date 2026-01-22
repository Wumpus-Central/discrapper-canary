n.d(t, {
    Ay: () => s,
    j2: () => l,
}),
    n(896048);
var r = n(997101),
    i = n(600975),
    a = n(788868);
let s = (0, i.C)({
        kind: "user",
        id: "2022-02_multi_month_plans",
        label: "Multi Month Plans",
        defaultConfig: { newPlans: [] },
        treatments: [
            {
                id: 1,
                label: "3 and 6 Month Plans",
                config: {
                    newPlans: [a.gD.PREMIUM_6_MONTH_TIER_2, a.gD.PREMIUM_3_MONTH_TIER_2],
                },
            },
            {
                id: 2,
                label: "3 Month Plan Only",
                config: { newPlans: [a.gD.PREMIUM_3_MONTH_TIER_2] },
            },
        ],
    }),
    o = new Set([r.d.US, r.d.CA]);
function l(e) {
    return null == e || o.has(e.country);
}
