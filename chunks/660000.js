n.d(t, { S: () => s });
var r = n(427164),
    i = n(111361),
    l = n(474936);
let a = (0, r.le)({
    name: "2025-10-nitro-badge-churn-reminder",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function s(e, t) {
    let { enabled: n } = a.useConfig({ location: t });
    return null != e && !!(0, i.M5)(e, l.PremiumTypes.TIER_2) && n;
}
