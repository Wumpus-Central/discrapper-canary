r.d(n, {
    aQ: function () {
        return u;
    }
});
var i = r(47120);
var a = r(742280),
    o = r(818083),
    s = r(474936);
n.ZP = (0, o.B)({
    kind: 'user',
    id: '2022-02_multi_month_plans',
    label: 'Multi Month Plans',
    defaultConfig: { newPlans: [] },
    treatments: [
        {
            id: 1,
            label: '3 and 6 Month Plans',
            config: {
                newPlans: [s.Xh.PREMIUM_6_MONTH_TIER_2, s.Xh.PREMIUM_3_MONTH_TIER_2]
            }
        },
        {
            id: 2,
            label: '3 Month Plan Only',
            config: { newPlans: [s.Xh.PREMIUM_3_MONTH_TIER_2] }
        }
    ]
});
let l = new Set([a.S.US, a.S.CA]);
function u(e) {
    return null == e || l.has(e.country);
}
