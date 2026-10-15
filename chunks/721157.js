n.d(t, { ON: () => c, P3: () => f, Sw: () => g, ij: () => u, zE: () => m });
var i,
    a,
    r = n(158045),
    l = n(202541),
    s = n(652215),
    o = n(105292);
let d = new Set([l.k4, l.Dw, l.pX, l.Hp, l.fY, l.bi, l.J7, l.a7, l.Tt]);
var c =
    (((i = {}).NO_SUBSCRIPTION = "no_subscription"),
    (i.NOT_TIER_2_SUBSCRIPTION = "not_tier_2_subscription"),
    (i.SUBSCRIPTION_STATUS_NOT_ALLOWED = "subscription_status_not_allowed"),
    (i.TRIAL_USER_NOT_ELIGIBLE = "trial_user_not_eligible"),
    i);
function u(e, t) {
    if (null == t)
        return e?.isPremiumGroupMember() === !0
            ? { isEligible: !0, reason: null }
            : { isEligible: !1, reason: "no_subscription" };
    let n = (0, r.EL)(t);
    if (null == n || l.hd[n.planId]?.premiumType !== l.PremiumTypes.TIER_2)
        return { isEligible: !1, reason: "not_tier_2_subscription" };
    let i = t.status === s.Dmq.PAUSED && e?.isFractionalPremium() === !0;
    return t.statusAllowsPerks || i
        ? null != t.trialId && t.hasActiveTrial && !d.has(t.trialId)
            ? { isEligible: !1, reason: "trial_user_not_eligible" }
            : { isEligible: !0, reason: null }
        : { isEligible: !1, reason: "subscription_status_not_allowed" };
}
var m = (((a = {}).CAN_CLAIM = "CAN_CLAIM"), (a.BLOCK_CLAIM = "BLOCKED"), (a.UPSELL = "UPSELL"), a);
function f(e) {
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
function g(e) {
    if (null != e)
        return new Intl.DateTimeFormat(o.intl.currentLocale, {
            day: "numeric",
            month: "short",
            timeZone: "UTC",
        }).format(e);
}
