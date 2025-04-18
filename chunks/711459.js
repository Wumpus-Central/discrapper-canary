n.d(t, {
    ZP: () => o,
    aQ: () => l
}),
    n(388685);
var r = n(742280),
    i = n(818083),
    a = n(474936);
let o = (0, i.B)({
        kind: 'user',
        id: '2022-02_multi_month_plans',
        label: 'Multi Month Plans',
        defaultConfig: { newPlans: [] },
        treatments: [
            {
                id: 1,
                label: '3 and 6 Month Plans',
                config: {
                    newPlans: [a.Xh.PREMIUM_6_MONTH_TIER_2, a.Xh.PREMIUM_3_MONTH_TIER_2]
                }
            },
            {
                id: 2,
                label: '3 Month Plan Only',
                config: { newPlans: [a.Xh.PREMIUM_3_MONTH_TIER_2] }
            }
        ]
    }),
    s = new Set([r.S.US, r.S.CA]);
function l(e) {
    return null == e || s.has(e.country);
}
