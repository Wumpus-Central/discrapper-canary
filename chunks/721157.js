n.d(t, { Co: () => A, ON: () => m, P3: () => b, Sw: () => p, VO: () => P, ij: () => f, zE: () => g });
var i,
    a,
    r = n(462887),
    l = n(927578),
    s = n(550099),
    o = n(202541),
    d = n(652215),
    c = n(105292);
let u = new Set([o.k4, o.Dw, o.pX, o.Hp, o.fY, o.bi, o.J7, o.a7, o.Tt]);
var m =
    (((i = {}).NO_SUBSCRIPTION = "no_subscription"),
    (i.NOT_TIER_2_SUBSCRIPTION = "not_tier_2_subscription"),
    (i.SUBSCRIPTION_STATUS_NOT_ALLOWED = "subscription_status_not_allowed"),
    (i.TRIAL_USER_NOT_ELIGIBLE = "trial_user_not_eligible"),
    i);
function f(e, t) {
    if (null == t)
        return e?.isPremiumGroupMember() === !0
            ? { isEligible: !0, reason: null }
            : { isEligible: !1, reason: "no_subscription" };
    let n = (0, l.EL)(t);
    if (null == n || o.hd[n.planId]?.premiumType !== o.PremiumTypes.TIER_2)
        return { isEligible: !1, reason: "not_tier_2_subscription" };
    let i = t.status === d.Dmq.PAUSED && e?.isFractionalPremium() === !0;
    return t.statusAllowsPerks || i
        ? null != t.trialId && t.hasActiveTrial && !u.has(t.trialId)
            ? { isEligible: !1, reason: "trial_user_not_eligible" }
            : { isEligible: !0, reason: null }
        : { isEligible: !1, reason: "subscription_status_not_allowed" };
}
var g = (((a = {}).CAN_CLAIM = "CAN_CLAIM"), (a.BLOCK_CLAIM = "BLOCKED"), (a.UPSELL = "UPSELL"), a);
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
function A(e) {
    let { properties: t } = e.properties;
    switch (t.oneofKind) {
        case "premiumHomeRewardsPerkCard":
            return t.premiumHomeRewardsPerkCard.asset;
        case "marketingPageRewardsBentoBox":
            return t.marketingPageRewardsBentoBox.asset;
        case "outboundPromotionPopover":
            return t.outboundPromotionPopover.asset;
        case "outboundPromotionClaimModalCard":
            return t.outboundPromotionClaimModalCard.asset;
        default:
            return;
    }
}
function P(e, t, n) {
    let i = (0, s.A)(e, t),
        a = null != i ? A(i) : void 0;
    if (null != a) return (0, r.M)(n) ? a.darkUrl : a.lightUrl;
}
