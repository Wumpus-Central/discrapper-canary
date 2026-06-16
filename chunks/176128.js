o.d(t, { Jp: () => n, qo: () => l });
var e,
    i = o(860689),
    s = o(652215),
    l = (((e = {}).PUBLIC = "PUBLIC"), (e.INVITE_ONLY = "INVITE_ONLY"), (e.APPLY_TO_JOIN = "APPLY_TO_JOIN"), e);
function n(r) {
    var t;
    let o = new Set(r.features),
        e = "INVITE_ONLY";
    o.has(s.GuildFeatures.COMMUNITY) && o.has(s.GuildFeatures.DISCOVERABLE)
        ? (e = "PUBLIC")
        : o.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
          o.has(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
          (e = "APPLY_TO_JOIN");
    let l =
            null != (t = r) &&
            ((0, i.fh)(t)
                ? t.premiumSubscriberCount > 0 || t.premiumTier > s.TVA.NONE
                : null != t.premiumSubscriptionCount && t.premiumSubscriptionCount > 0),
        n = 0;
    l && (n = ((0, i.fh)(r) ? r.premiumSubscriberCount : r.premiumSubscriptionCount) ?? 0);
    let a = (0, i.fh)(r) ? r.premiumTier : s.TVA.NONE;
    return {
        verified: o.has(s.GuildFeatures.VERIFIED),
        partnered: o.has(s.GuildFeatures.PARTNERED),
        community: o.has(s.GuildFeatures.COMMUNITY),
        staff: o.has(s.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        visibility: e,
        premium: l,
        premiumSubscriberCount: n,
        premiumTier: a,
    };
}
