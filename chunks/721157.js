i.d(t, { ON: () => o, P3: () => u, ij: () => d, zE: () => c });
var s,
    r,
    n = i(428262),
    a = i(202541);
let l = new Set([a.k4, a.Dw, a.pX, a.Hp, a.fY, a.bi, a.J7, a.a7, a.Tt]);
var o =
    (((s = {}).NO_SUBSCRIPTION = "no_subscription"),
    (s.NOT_TIER_2_SUBSCRIPTION = "not_tier_2_subscription"),
    (s.SUBSCRIPTION_STATUS_NOT_ALLOWED = "subscription_status_not_allowed"),
    (s.TRIAL_USER_NOT_ELIGIBLE = "trial_user_not_eligible"),
    s);
function d(e, t) {
    if (null == e) return { isEligible: !1, reason: "no_subscription" };
    let i = (0, n.EL)(e);
    return null == i || a.hd[i.planId]?.premiumType !== a.PremiumTypes.TIER_2
        ? { isEligible: !1, reason: "not_tier_2_subscription" }
        : e.statusAllowsPerks || t === a.xc.FP_SUB_PAUSED
          ? null != e.trialId && e.hasActiveTrial && !l.has(e.trialId)
              ? { isEligible: !1, reason: "trial_user_not_eligible" }
              : { isEligible: !0, reason: null }
          : { isEligible: !1, reason: "subscription_status_not_allowed" };
}
var c = (((r = {}).CAN_CLAIM = "CAN_CLAIM"), (r.BLOCK_CLAIM = "BLOCKED"), (r.UPSELL = "UPSELL"), r);
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
