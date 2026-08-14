t.d(o, { Jp: () => n, qo: () => l });
var e,
    i = t(149790),
    s = t(652215),
    l = (((e = {}).PUBLIC = "PUBLIC"), (e.INVITE_ONLY = "INVITE_ONLY"), (e.APPLY_TO_JOIN = "APPLY_TO_JOIN"), e);
function n(r) {
    var o;
    let t = new Set(r.features),
        e = "INVITE_ONLY";
    t.has(s.GuildFeatures.COMMUNITY) && t.has(s.GuildFeatures.DISCOVERABLE)
        ? (e = "PUBLIC")
        : t.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
          t.has(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
          (e = "APPLY_TO_JOIN");
    let l =
            null != (o = r) &&
            ((0, i.fh)(o)
                ? o.premiumSubscriberCount > 0 || o.premiumTier > s.TVA.NONE
                : null != o.premiumSubscriptionCount && o.premiumSubscriptionCount > 0),
        n = 0;
    l && (n = ((0, i.fh)(r) ? r.premiumSubscriberCount : r.premiumSubscriptionCount) ?? 0);
    let a = (0, i.fh)(r) ? r.premiumTier : s.TVA.NONE;
    return {
        verified: t.has(s.GuildFeatures.VERIFIED),
        partnered: t.has(s.GuildFeatures.PARTNERED),
        community: t.has(s.GuildFeatures.COMMUNITY),
        staff: t.has(s.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        visibility: e,
        premium: l,
        premiumSubscriberCount: n,
        premiumTier: a,
    };
}
