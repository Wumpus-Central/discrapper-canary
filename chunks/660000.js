n.d(t, { S: () => s });
var r = n(427164),
    i = n(111361),
    a = n(474936);
let o = (0, r.le)({
    name: "2025-10-nitro-badge-churn-reminder",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function s(e, t) {
    let { enabled: n } = o.useConfig({ location: t });
    return null != e && !!(0, i.M5)(e, a.PremiumTypes.TIER_2) && n;
}
