n.d(t, { ON: () => c, P3: () => m, Sw: () => p, ij: () => d, zE: () => u });
var a,
    s,
    i = n(158045),
    r = n(202541),
    l = n(375708);
let o = new Set([r.k4, r.Dw, r.pX, r.Hp, r.fY, r.bi, r.J7, r.a7, r.Tt]);
var c =
    (((a = {}).NO_SUBSCRIPTION = "no_subscription"),
    (a.NOT_TIER_2_SUBSCRIPTION = "not_tier_2_subscription"),
    (a.SUBSCRIPTION_STATUS_NOT_ALLOWED = "subscription_status_not_allowed"),
    (a.TRIAL_USER_NOT_ELIGIBLE = "trial_user_not_eligible"),
    a);
function d(e, t, n) {
    if (null == t)
        return e?.isPremiumGroupMember() === !0
            ? { isEligible: !0, reason: null }
            : { isEligible: !1, reason: "no_subscription" };
    let a = (0, i.EL)(t);
    return null == a || r.hd[a.planId]?.premiumType !== r.PremiumTypes.TIER_2
        ? { isEligible: !1, reason: "not_tier_2_subscription" }
        : t.statusAllowsPerks || n === r.xc.FP_SUB_PAUSED
          ? null != t.trialId && t.hasActiveTrial && !o.has(t.trialId)
              ? { isEligible: !1, reason: "trial_user_not_eligible" }
              : { isEligible: !0, reason: null }
          : { isEligible: !1, reason: "subscription_status_not_allowed" };
}
var u = (((s = {}).CAN_CLAIM = "CAN_CLAIM"), (s.BLOCK_CLAIM = "BLOCKED"), (s.UPSELL = "UPSELL"), s);
function m(e) {
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
function p(e) {
    if (null != e)
        return new Intl.DateTimeFormat(l.intl.currentLocale, {
            day: "numeric",
            month: "short",
            timeZone: "UTC",
        }).format(e);
}
