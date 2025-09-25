t.d(s, { C: () => i });
var r = t(427164),
    n = t(474936);
let a = (0, r.le)({
    name: "2025-09-nitro-badge-churn-modal",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function i(e, s) {
    let { enabled: t } = a.useConfig({ location: s });
    return e === n.p9.TIER_2 && t;
}
