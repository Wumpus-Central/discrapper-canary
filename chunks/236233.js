n.d(t, { VO: () => _, P3: () => P, ON: () => g, zE: () => p, Sw: () => T, ij: () => b });
var i,
    r,
    a = n(462887),
    l = n(158045),
    o = n(287809),
    s = n(412260),
    d = n(891786),
    c = n(202541),
    u = n(652215),
    m = n(105292);
let f = new Set([c.k4, c.Dw, c.pX, c.Hp, c.fY, c.bi, c.J7, c.a7, c.Tt]);
var g =
    (((i = {}).NO_SUBSCRIPTION = "no_subscription"),
    (i.NOT_TIER_2_SUBSCRIPTION = "not_tier_2_subscription"),
    (i.SUBSCRIPTION_STATUS_NOT_ALLOWED = "subscription_status_not_allowed"),
    (i.TRIAL_USER_NOT_ELIGIBLE = "trial_user_not_eligible"),
    i);
function b(e, t) {
    if (null == t)
        return e?.isPremiumGroupMember() === !0
            ? { isEligible: !0, reason: null }
            : { isEligible: !1, reason: "no_subscription" };
    let n = (0, l.EL)(t);
    if (null == n || c.hd[n.planId]?.premiumType !== c.PremiumTypes.TIER_2)
        return { isEligible: !1, reason: "not_tier_2_subscription" };
    let i = t.status === u.Dmq.PAUSED && e?.isFractionalPremium() === !0;
    return t.statusAllowsPerks || i
        ? null != t.trialId && t.hasActiveTrial && !f.has(t.trialId)
            ? { isEligible: !1, reason: "trial_user_not_eligible" }
            : { isEligible: !0, reason: null }
        : { isEligible: !1, reason: "subscription_status_not_allowed" };
}
var p = (((r = {}).CAN_CLAIM = "CAN_CLAIM"), (r.BLOCK_CLAIM = "BLOCKED"), (r.UPSELL = "UPSELL"), r);
function P(e) {
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
function T(e) {
    if (null != e)
        return new Intl.DateTimeFormat(m.intl.currentLocale, {
            day: "numeric",
            month: "short",
            timeZone: "UTC",
        }).format(e);
}
function _(e, t, n) {
    let i = (function (e, t) {
            let [n] = s.A.getPromotionsByPartner(e).oneTime;
            if (null == n) return null;
            let i = o.default.getCurrentUser(),
                r = new Date();
            return (0, d.A)(
                n.marketingComponents.filter((e) => e.componentType === t),
                r,
                (e) => null != i && e.isIncludedInRollout(i.id, r),
            );
        })(e, t),
        r =
            null != i
                ? (function (e) {
                      let { properties: t } = e.properties;
                      switch (t.oneofKind) {
                          case "premiumHomeRewardsPerkCard":
                              return t.premiumHomeRewardsPerkCard.asset;
                          case "marketingPageRewardsBentoBox":
                              return t.marketingPageRewardsBentoBox.asset;
                          case "outboundPromotionPopover":
                              return t.outboundPromotionPopover.asset;
                          default:
                              return;
                      }
                  })(i)
                : void 0;
    if (null != r) return (0, a.M)(n) ? r.darkUrl : r.lightUrl;
}
