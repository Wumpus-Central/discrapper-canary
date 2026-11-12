var i,
    a,
    l = n(517352),
    r = n(462887),
    s = n(448645),
    o = n(693369),
    d = n(550099),
    c = n(682901),
    u = n(652215);
n(792996);
let f = [
        l.oW.PREMIUM_HOME_REWARDS_PERK_CARD,
        l.oW.MARKETING_PAGE_REWARDS_BENTO_BOX,
        l.oW.OUTBOUND_PROMOTION_POPOVER,
        l.oW.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD,
    ],
    m = new Set([c.k4, c.Dw, c.pX, c.Hp, c.fY, c.bi, c.J7, c.a7, c.Tt]);
var g =
        (((i = {}).NO_SUBSCRIPTION = "no_subscription"),
        (i.NOT_TIER_2_SUBSCRIPTION = "not_tier_2_subscription"),
        (i.SUBSCRIPTION_STATUS_NOT_ALLOWED = "subscription_status_not_allowed"),
        (i.TRIAL_USER_NOT_ELIGIBLE = "trial_user_not_eligible"),
        i),
    b = (((a = {}).CAN_CLAIM = "CAN_CLAIM"), (a.BLOCK_CLAIM = "BLOCKED"), (a.UPSELL = "UPSELL"), a);
function A(e) {
    if ((0, o.a9)(e, f)) return e.surface.asset;
}
n.d(
    t,
    {},
    {
        Co: A,
        ON: g,
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
        VO: function (e, t, n) {
            let i = (0, d.A)(e, t),
                a = null != i ? A(i) : void 0;
            if (null != a) return (0, r.M)(n) ? a.darkUrl : a.lightUrl;
        },
        ij: function (e, t) {
            if (null == t)
                return e?.isPremiumGroupMember() === !0
                    ? { isEligible: !0, reason: null }
                    : { isEligible: !1, reason: "no_subscription" };
            let n = (0, s.EL)(t);
            if (null == n || c.hd[n.planId]?.premiumType !== c.PremiumTypes.TIER_2)
                return { isEligible: !1, reason: "not_tier_2_subscription" };
            let i = t.status === u.Dmq.PAUSED && e?.isFractionalPremium() === !0;
            return t.statusAllowsPerks || i
                ? null != t.trialId && t.hasActiveTrial && !m.has(t.trialId)
                    ? { isEligible: !1, reason: "trial_user_not_eligible" }
                    : { isEligible: !0, reason: null }
                : { isEligible: !1, reason: "subscription_status_not_allowed" };
        },
        zE: b,
    },
);
