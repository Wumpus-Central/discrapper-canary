n.d(t, { ON: () => d, P3: () => b, Sw: () => p, ij: () => u, zE: () => m });
var a,
    s,
    i = n(158045),
    r = n(202541),
    l = n(652215),
    c = n(660183);
let o = new Set([r.k4, r.Dw, r.pX, r.Hp, r.fY, r.bi, r.J7, r.a7, r.Tt]);
var d =
    (((a = {}).NO_SUBSCRIPTION = "no_subscription"),
    (a.NOT_TIER_2_SUBSCRIPTION = "not_tier_2_subscription"),
    (a.SUBSCRIPTION_STATUS_NOT_ALLOWED = "subscription_status_not_allowed"),
    (a.TRIAL_USER_NOT_ELIGIBLE = "trial_user_not_eligible"),
    a);
function u(e, t) {
    if (null == t)
        return e?.isPremiumGroupMember() === !0
            ? { isEligible: !0, reason: null }
            : { isEligible: !1, reason: "no_subscription" };
    let n = (0, i.EL)(t);
    if (null == n || r.hd[n.planId]?.premiumType !== r.PremiumTypes.TIER_2)
        return { isEligible: !1, reason: "not_tier_2_subscription" };
    let a = t.status === l.Dmq.PAUSED && e?.isFractionalPremium() === !0;
    return t.statusAllowsPerks || a
        ? null != t.trialId && t.hasActiveTrial && !o.has(t.trialId)
            ? { isEligible: !1, reason: "trial_user_not_eligible" }
            : { isEligible: !0, reason: null }
        : { isEligible: !1, reason: "subscription_status_not_allowed" };
}
var m = (((s = {}).CAN_CLAIM = "CAN_CLAIM"), (s.BLOCK_CLAIM = "BLOCKED"), (s.UPSELL = "UPSELL"), s);
function b(e) {
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
        return new Intl.DateTimeFormat(c.intl.currentLocale, {
            day: "numeric",
            month: "short",
            timeZone: "UTC",
        }).format(e);
}
