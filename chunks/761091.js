(n.d(t, { Z: () => _ }), n(539854));
var r = n(399606),
    i = n(897345),
    l = n(697379),
    o = n(241559),
    s = n(563534),
    a = n(655359),
    c = n(931261),
    u = n(460347),
    d = n(994592),
    h = n(265418),
    p = n(398758),
    f = n(639777),
    g = n(330791),
    m = n(443063),
    b = n(981631);
function _(e) {
    let t = (0, h.Z)(e.id),
        n = (0, l.W)(e.id),
        _ = (0, d.j0)(e.id),
        O = (0, i.u)(e),
        y = (0, c.g)(e.id),
        v = (0, r.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
        C = (0, u.Z)(e.id),
        j = (0, a.PE)(e.id),
        E = (0, o.n2)(e.id),
        x = [],
        S = e.features.has(b.oNc.HUB),
        I = e.features.has(b.oNc.COMMUNITY),
        P = (0, g.lN)(!(0, p.r1)(e.id)),
        N = e.features.has(b.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        w = (0, f.Z)(e.id);
    return (S && x.push(m.z.GUILD_HUB_HEADER_OPTIONS), !j && y && C && null != v && v.length > 0 ? x.push(m.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && x.push(m.z.GUILD_PREMIUM_PROGRESS_BAR), !S && y && x.push(m.z.GUILD_HOME), t && x.push(m.z.GUILD_SCHEDULED_EVENTS), !S && I && P && x.push(m.z.CHANNELS_AND_ROLES), _ && x.push(m.z.GUILD_ROLE_SUBSCRIPTIONS), O && x.push(m.z.GUILD_SHOP), ((E && (I || N)) || (n && e.features.has(b.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL))) && x.push(m.z.GUILD_MOD_DASH_MEMBER_SAFETY), w && x.push(m.z.GUILD_BOOSTS), x);
}
