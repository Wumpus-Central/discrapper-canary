n.d(t, { Jp: () => s, qo: () => a });
var i,
    l = n(860689),
    r = n(652215),
    a = (((i = {}).PUBLIC = "PUBLIC"), (i.INVITE_ONLY = "INVITE_ONLY"), (i.APPLY_TO_JOIN = "APPLY_TO_JOIN"), i);
function s(e) {
    var t;
    let n = new Set(e.features),
        i = "INVITE_ONLY";
    n.has(r.GuildFeatures.COMMUNITY) && n.has(r.GuildFeatures.DISCOVERABLE)
        ? (i = "PUBLIC")
        : n.has(r.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
          n.has(r.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
          (i = "APPLY_TO_JOIN");
    let a =
            null != (t = e) &&
            ((0, l.fh)(t)
                ? t.premiumSubscriberCount > 0 || t.premiumTier > r.TVA.NONE
                : null != t.premiumSubscriptionCount && t.premiumSubscriptionCount > 0),
        s = 0;
    a && (s = ((0, l.fh)(e) ? e.premiumSubscriberCount : e.premiumSubscriptionCount) ?? 0);
    let u = (0, l.fh)(e) ? e.premiumTier : r.TVA.NONE;
    return {
        verified: n.has(r.GuildFeatures.VERIFIED),
        partnered: n.has(r.GuildFeatures.PARTNERED),
        community: n.has(r.GuildFeatures.COMMUNITY),
        staff: n.has(r.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        visibility: i,
        premium: a,
        premiumSubscriberCount: s,
        premiumTier: u,
    };
}
