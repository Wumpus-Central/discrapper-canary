i.d(t, { Dv: () => l });
var n = i(945810),
    s = i(202541);
let r = (0, n.mj)({
    name: "2026-09-smag-nitro-gifting-lightning-checkout",
    kind: "user",
    defaultConfig: { enabled: !1, premiumSkuToPlan: s.zE },
    variations: { 1: { enabled: !0, premiumSkuToPlan: s.zE }, 2: { enabled: !0, premiumSkuToPlan: s.En } },
});
function l(e, t, i) {
    if (!t) return {};
    let n = r.getConfig({ location: i });
    if (n.enabled) {
        let t = n.premiumSkuToPlan[e];
        if (null != t) return { shouldDisallowPlanSelection: !0, initialPlanId: t };
    }
    return {};
}
