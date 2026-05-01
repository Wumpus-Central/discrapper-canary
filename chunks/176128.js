i.d(t, { Jp: () => a, qo: () => s });
var n,
    l = i(860689),
    r = i(652215),
    s = (((n = {}).PUBLIC = "PUBLIC"), (n.INVITE_ONLY = "INVITE_ONLY"), (n.APPLY_TO_JOIN = "APPLY_TO_JOIN"), n);
function a(e) {
    var t;
    let i = new Set(e.features),
        n = "INVITE_ONLY";
    i.has(r.GuildFeatures.COMMUNITY) && i.has(r.GuildFeatures.DISCOVERABLE)
        ? (n = "PUBLIC")
        : i.has(r.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
          i.has(r.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
          (n = "APPLY_TO_JOIN");
    let s =
            null != (t = e) &&
            ((0, l.fh)(t)
                ? t.premiumSubscriberCount > 0 || t.premiumTier > r.TVA.NONE
                : null != t.premiumSubscriptionCount && t.premiumSubscriptionCount > 0),
        a = 0;
    s && (a = ((0, l.fh)(e) ? e.premiumSubscriberCount : e.premiumSubscriptionCount) ?? 0);
    let u = (0, l.fh)(e) ? e.premiumTier : r.TVA.NONE;
    return {
        verified: i.has(r.GuildFeatures.VERIFIED),
        partnered: i.has(r.GuildFeatures.PARTNERED),
        community: i.has(r.GuildFeatures.COMMUNITY),
        staff: i.has(r.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        visibility: n,
        premium: s,
        premiumSubscriberCount: a,
        premiumTier: u,
    };
}
