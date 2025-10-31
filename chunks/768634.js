n.d(t, { C: () => s });
var r = n(427164),
    i = n(111361),
    a = n(474936);
let o = (0, r.le)({
    name: "2025-09-nitro-badge-churn-modal",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function s(e, t) {
    let { enabled: n } = o.useConfig({ location: t });
    return !!(0, i.M5)(e, a.PremiumTypes.TIER_2) && n;
}
