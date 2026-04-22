n.d(t, { Jp: () => s, qo: () => a });
var r,
    l = n(860689),
    i = n(652215),
    a = (((r = {}).PUBLIC = "PUBLIC"), (r.INVITE_ONLY = "INVITE_ONLY"), (r.APPLY_TO_JOIN = "APPLY_TO_JOIN"), r);
function s(e) {
    var t;
    let n = new Set(e.features),
        r = "INVITE_ONLY";
    n.has(i.GuildFeatures.COMMUNITY) && n.has(i.GuildFeatures.DISCOVERABLE)
        ? (r = "PUBLIC")
        : n.has(i.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
          n.has(i.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
          (r = "APPLY_TO_JOIN");
    let a =
            null != (t = e) &&
            ((0, l.fh)(t)
                ? t.premiumSubscriberCount > 0 || t.premiumTier > i.TVA.NONE
                : null != t.premiumSubscriptionCount && t.premiumSubscriptionCount > 0),
        s = 0;
    a && (s = ((0, l.fh)(e) ? e.premiumSubscriberCount : e.premiumSubscriptionCount) ?? 0);
    let o = (0, l.fh)(e) ? e.premiumTier : i.TVA.NONE;
    return {
        verified: n.has(i.GuildFeatures.VERIFIED),
        partnered: n.has(i.GuildFeatures.PARTNERED),
        community: n.has(i.GuildFeatures.COMMUNITY),
        staff: n.has(i.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        visibility: r,
        premium: a,
        premiumSubscriberCount: s,
        premiumTier: o,
    };
}
