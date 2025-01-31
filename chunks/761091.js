n.d(t, { Z: () => v }), n(653041);
var i = n(399606),
    l = n(897345),
    r = n(63568),
    a = n(697379),
    o = n(241559),
    s = n(563534),
    c = n(655359),
    d = n(931261),
    u = n(460347),
    h = n(994592),
    p = n(265418),
    m = n(398758),
    g = n(330791),
    f = n(443063),
    _ = n(981631);
function v(e) {
    let t = (0, p.Z)(e.id),
        n = (0, a.W)(e.id),
        v = (0, h.j0)(e.id),
        x = (0, l.u)(e),
        C = (0, d.g)(e.id),
        Z = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
        I = (0, u.Z)(e.id),
        b = (0, c.PE)(e.id),
        S = (0, o.n2)(e.id),
        N = [],
        E = e.hasFeature(_.oNc.HUB),
        j = e.hasFeature(_.oNc.COMMUNITY),
        y = (0, g.lN)(!(0, m.r1)(e.id)),
        P = e.hasFeature(_.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        A = (0, r.jS)(e.id, 'Guild Sidebar');
    return E && N.push(f.z.GUILD_HUB_HEADER_OPTIONS), !b && C && I && null != Z && Z.length > 0 ? N.push(f.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && N.push(f.z.GUILD_PREMIUM_PROGRESS_BAR), !E && C && N.push(f.z.GUILD_HOME), t && N.push(f.z.GUILD_SCHEDULED_EVENTS), !E && j && y && N.push(f.z.CHANNELS_AND_ROLES), v && N.push(f.z.GUILD_ROLE_SUBSCRIPTIONS), x && N.push(f.z.GUILD_SHOP), !A && n && N.push(f.z.GUILD_MEMBER_APPLICATIONS), S && (j || P || (A && e.hasFeature(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL))) && N.push(f.z.GUILD_MOD_DASH_MEMBER_SAFETY), N;
}
