(n.d(t, { Z: () => O }), n(539854));
var r = n(399606),
    i = n(897345),
    l = n(265153),
    o = n(697379),
    a = n(241559),
    s = n(563534),
    c = n(655359),
    u = n(931261),
    d = n(460347),
    h = n(994592),
    p = n(265418),
    f = n(398758),
    g = n(639777),
    m = n(330791),
    b = n(443063),
    _ = n(981631);
function O(e) {
    let t = (0, p.Z)(e.id),
        n = (0, o.W)(e.id),
        O = (0, h.j0)(e.id),
        y = (0, i.u)(e),
        C = (0, u.g)(e.id),
        v = (0, r.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
        j = (0, d.Z)(e.id),
        E = (0, c.PE)(e.id),
        S = (0, a.n2)(e.id),
        x = [],
        I = e.features.has(_.oNc.HUB),
        P = e.features.has(_.oNc.COMMUNITY),
        N = (0, m.lN)(!(0, f.r1)(e.id)),
        w = e.features.has(_.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        T = (0, g.Z)(e.id);
    if ((I && x.push(b.z.GUILD_HUB_HEADER_OPTIONS), !E && C && j && null != v && v.length > 0 ? x.push(b.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && x.push(b.z.GUILD_PREMIUM_PROGRESS_BAR), !I && C && x.push(b.z.GUILD_HOME), t && x.push(b.z.GUILD_SCHEDULED_EVENTS), !I && P && N && x.push(b.z.CHANNELS_AND_ROLES), O && x.push(b.z.GUILD_ROLE_SUBSCRIPTIONS), y && x.push(b.z.GUILD_SHOP), (S && (P || w)) || (n && e.features.has(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)))) {
        let { enabled: t } = l.Z.getCurrentConfig({
            guildId: e.id,
            location: 'useGuildActionRows'
        });
        x.push(b.z.GUILD_MOD_DASH_MEMBER_SAFETY);
    }
    return (T && x.push(b.z.GUILD_BOOSTS), x);
}
