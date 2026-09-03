i.d(t, { ON: () => o, P3: () => u, ij: () => d, zE: () => c });
var s,
    n,
    r = i(158045),
    a = i(202541);
let l = new Set([a.k4, a.Dw, a.pX, a.Hp, a.fY, a.bi, a.J7, a.a7, a.Tt]);
var o =
    (((s = {}).NO_SUBSCRIPTION = "no_subscription"),
    (s.NOT_TIER_2_SUBSCRIPTION = "not_tier_2_subscription"),
    (s.SUBSCRIPTION_STATUS_NOT_ALLOWED = "subscription_status_not_allowed"),
    (s.TRIAL_USER_NOT_ELIGIBLE = "trial_user_not_eligible"),
    s);
function d(e, t, i) {
    if (null == t)
        return e?.isPremiumGroupMember() === !0
            ? { isEligible: !0, reason: null }
            : { isEligible: !1, reason: "no_subscription" };
    let s = (0, r.EL)(t);
    return null == s || a.hd[s.planId]?.premiumType !== a.PremiumTypes.TIER_2
        ? { isEligible: !1, reason: "not_tier_2_subscription" }
        : t.statusAllowsPerks || i === a.xc.FP_SUB_PAUSED
          ? null != t.trialId && t.hasActiveTrial && !l.has(t.trialId)
              ? { isEligible: !1, reason: "trial_user_not_eligible" }
              : { isEligible: !0, reason: null }
          : { isEligible: !1, reason: "subscription_status_not_allowed" };
}
var c = (((n = {}).CAN_CLAIM = "CAN_CLAIM"), (n.BLOCK_CLAIM = "BLOCKED"), (n.UPSELL = "UPSELL"), n);
function u(e) {
    switch (e) {
        case null:
            return "CAN_CLAIM";
        case "no_subscription":
        case "not_tier_2_subscription":
        case "subscription_status_not_allowed":
            return "UPSELL";
        case "trial_user_not_eligible":
            return "BLOCKED";
    }
}
