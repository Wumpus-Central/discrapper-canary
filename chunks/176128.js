"use strict";
n.d(t, { Jp: () => o, qo: () => a });
var r,
    i = n(860689),
    s = n(652215),
    a = (((r = {}).PUBLIC = "PUBLIC"), (r.INVITE_ONLY = "INVITE_ONLY"), (r.APPLY_TO_JOIN = "APPLY_TO_JOIN"), r);
function o(e) {
    var t;
    let n = new Set(e.features),
        r = "INVITE_ONLY";
    n.has(s.GuildFeatures.COMMUNITY) && n.has(s.GuildFeatures.DISCOVERABLE)
        ? (r = "PUBLIC")
        : n.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
          n.has(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
          (r = "APPLY_TO_JOIN");
    let a =
            null != (t = e) &&
            ((0, i.fh)(t)
                ? t.premiumSubscriberCount > 0 || t.premiumTier > s.TVA.NONE
                : null != t.premiumSubscriptionCount && t.premiumSubscriptionCount > 0),
        o = 0;
    a && (o = ((0, i.fh)(e) ? e.premiumSubscriberCount : e.premiumSubscriptionCount) ?? 0);
    let l = (0, i.fh)(e) ? e.premiumTier : s.TVA.NONE;
    return {
        verified: n.has(s.GuildFeatures.VERIFIED),
        partnered: n.has(s.GuildFeatures.PARTNERED),
        community: n.has(s.GuildFeatures.COMMUNITY),
        staff: n.has(s.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        visibility: r,
        premium: a,
        premiumSubscriberCount: o,
        premiumTier: l,
    };
}
