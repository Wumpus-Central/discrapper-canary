e.d(t, { Jp: () => n, qo: () => l });
var o,
    i = e(149790),
    s = e(652215),
    l = (((o = {}).PUBLIC = "PUBLIC"), (o.INVITE_ONLY = "INVITE_ONLY"), (o.APPLY_TO_JOIN = "APPLY_TO_JOIN"), o);
function n(r) {
    var t;
    let e = new Set(r.features),
        o = "INVITE_ONLY";
    e.has(s.GuildFeatures.COMMUNITY) && e.has(s.GuildFeatures.DISCOVERABLE)
        ? (o = "PUBLIC")
        : e.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
          e.has(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
          (o = "APPLY_TO_JOIN");
    let l =
            null != (t = r) &&
            ((0, i.fh)(t)
                ? t.premiumSubscriberCount > 0 || t.premiumTier > s.TVA.NONE
                : null != t.premiumSubscriptionCount && t.premiumSubscriptionCount > 0),
        n = 0;
    l && (n = ((0, i.fh)(r) ? r.premiumSubscriberCount : r.premiumSubscriptionCount) ?? 0);
    let a = (0, i.fh)(r) ? r.premiumTier : s.TVA.NONE;
    return {
        verified: e.has(s.GuildFeatures.VERIFIED),
        partnered: e.has(s.GuildFeatures.PARTNERED),
        community: e.has(s.GuildFeatures.COMMUNITY),
        staff: e.has(s.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        visibility: o,
        premium: l,
        premiumSubscriberCount: n,
        premiumTier: a,
    };
}
