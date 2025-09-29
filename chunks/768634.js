t.d(s, { C: () => o });
var r = t(427164),
    n = t(111361),
    a = t(474936);
let i = (0, r.le)({
    name: "2025-09-nitro-badge-churn-modal",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function o(e, s) {
    let { enabled: t } = i.useConfig({ location: s });
    return !!(0, n.M5)(e, a.p9.TIER_2) && t;
}
