n.d(t, {
    ZP: () => s,
    aQ: () => l
}),
    n(47120);
var i = n(742280),
    r = n(818083),
    a = n(474936);
let s = (0, r.B)({
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
    o = new Set([i.S.US, i.S.CA]);
function l(e) {
    return null == e || o.has(e.country);
}
