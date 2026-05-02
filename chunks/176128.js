t.d(o, { Jp: () => n, qo: () => l });
var e,
    s = t(860689),
    i = t(652215),
    l = (((e = {}).PUBLIC = "PUBLIC"), (e.INVITE_ONLY = "INVITE_ONLY"), (e.APPLY_TO_JOIN = "APPLY_TO_JOIN"), e);
function n(r) {
    var o;
    let t = new Set(r.features),
        e = "INVITE_ONLY";
    t.has(i.GuildFeatures.COMMUNITY) && t.has(i.GuildFeatures.DISCOVERABLE)
        ? (e = "PUBLIC")
        : t.has(i.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
          t.has(i.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
          (e = "APPLY_TO_JOIN");
    let l =
            null != (o = r) &&
            ((0, s.fh)(o)
                ? o.premiumSubscriberCount > 0 || o.premiumTier > i.TVA.NONE
                : null != o.premiumSubscriptionCount && o.premiumSubscriptionCount > 0),
        n = 0;
    l && (n = ((0, s.fh)(r) ? r.premiumSubscriberCount : r.premiumSubscriptionCount) ?? 0);
    let a = (0, s.fh)(r) ? r.premiumTier : i.TVA.NONE;
    return {
        verified: t.has(i.GuildFeatures.VERIFIED),
        partnered: t.has(i.GuildFeatures.PARTNERED),
        community: t.has(i.GuildFeatures.COMMUNITY),
        staff: t.has(i.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        visibility: e,
        premium: l,
        premiumSubscriberCount: n,
        premiumTier: a,
    };
}
