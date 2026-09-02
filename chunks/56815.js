i.d(t, { Dv: () => a });
var s = i(945810),
    n = i(202541);
let r = (0, s.mj)({
    name: "2026-07-smag-nitro-gifting-lightning-checkout",
    kind: "user",
    defaultConfig: { enabled: !1, premiumSkuToPlan: n.zE },
    variations: { 1: { enabled: !0, premiumSkuToPlan: n.zE }, 2: { enabled: !0, premiumSkuToPlan: n.En } },
});
function a(e, t, i) {
    if (!t) return {};
    let s = r.getConfig({ location: i });
    if (s.enabled) {
        let t = s.premiumSkuToPlan[e];
        if (null != t) return { shouldDisallowPlanSelection: !0, initialPlanId: t };
    }
    return {};
}
