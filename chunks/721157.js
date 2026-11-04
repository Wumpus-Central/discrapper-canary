var i,
    a,
    r = n(462887),
    l = n(879610),
    o = n(550099),
    s = n(682901),
    d = n(652215),
    c = n(792996);
let u = new Set([s.k4, s.Dw, s.pX, s.Hp, s.fY, s.bi, s.J7, s.a7, s.Tt]);
var m =
        (((i = {}).NO_SUBSCRIPTION = "no_subscription"),
        (i.NOT_TIER_2_SUBSCRIPTION = "not_tier_2_subscription"),
        (i.SUBSCRIPTION_STATUS_NOT_ALLOWED = "subscription_status_not_allowed"),
        (i.TRIAL_USER_NOT_ELIGIBLE = "trial_user_not_eligible"),
        i),
    f = (((a = {}).CAN_CLAIM = "CAN_CLAIM"), (a.BLOCK_CLAIM = "BLOCKED"), (a.UPSELL = "UPSELL"), a);
function g(e) {
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
n.d(
    t,
    {},
    {
        Co: g,
        ON: m,
        P3: function (e) {
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
        },
        Sw: function (e) {
            if (null != e)
                return new Intl.DateTimeFormat(c.intl.currentLocale, {
                    day: "numeric",
                    month: "short",
                    timeZone: "UTC",
                }).format(e);
        },
        VO: function (e, t, n) {
            let i = (0, o.A)(e, t),
                a = null != i ? g(i) : void 0;
            if (null != a) return (0, r.M)(n) ? a.darkUrl : a.lightUrl;
        },
        ij: function (e, t) {
            if (null == t)
                return e?.isPremiumGroupMember() === !0
                    ? { isEligible: !0, reason: null }
                    : { isEligible: !1, reason: "no_subscription" };
            let n = (0, l.EL)(t);
            if (null == n || s.hd[n.planId]?.premiumType !== s.PremiumTypes.TIER_2)
                return { isEligible: !1, reason: "not_tier_2_subscription" };
            let i = t.status === d.Dmq.PAUSED && e?.isFractionalPremium() === !0;
            return t.statusAllowsPerks || i
                ? null != t.trialId && t.hasActiveTrial && !u.has(t.trialId)
                    ? { isEligible: !1, reason: "trial_user_not_eligible" }
                    : { isEligible: !0, reason: null }
                : { isEligible: !1, reason: "subscription_status_not_allowed" };
        },
        zE: f,
    },
);
