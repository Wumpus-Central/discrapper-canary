n.d(t, {
    ZP: () => a,
    aQ: () => l
}),
    n(47120);
var r = n(742280),
    i = n(818083),
    o = n(474936);
let a = (0, i.B)({
        kind: 'user',
        id: '2022-02_multi_month_plans',
        label: 'Multi Month Plans',
        defaultConfig: { newPlans: [] },
        treatments: [
            {
                id: 1,
                label: '3 and 6 Month Plans',
                config: {
                    newPlans: [o.Xh.PREMIUM_6_MONTH_TIER_2, o.Xh.PREMIUM_3_MONTH_TIER_2]
                }
            },
            {
                id: 2,
                label: '3 Month Plan Only',
                config: { newPlans: [o.Xh.PREMIUM_3_MONTH_TIER_2] }
            }
        ]
    }),
    s = new Set([r.S.US, r.S.CA]);
function l(e) {
    return null == e || s.has(e.country);
}
