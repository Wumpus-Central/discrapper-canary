n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(653041);
var i = n(399606),
    l = n(897345),
    r = n(63568),
    a = n(697379),
    o = n(241559),
    s = n(563534),
    c = n(655359),
    u = n(931261),
    d = n(460347),
    h = n(994592),
    p = n(265418),
    f = n(398758),
    m = n(330791),
    g = n(443063),
    v = n(981631);
function C(e) {
    let t = (0, p.Z)(e.id),
        n = (0, a.W)(e.id),
        C = (0, h.j0)(e.id),
        x = (0, l.u)(e),
        I = (0, u.g)(e.id),
        _ = (0, i.e7)([s.Z], () => s.Z.getNewMemberActions(e.id), [e.id]),
        Z = (0, d.Z)(e.id),
        b = (0, c.PE)(e.id),
        S = (0, o.n2)(e.id),
        N = [],
        E = e.hasFeature(v.oNc.HUB),
        y = e.hasFeature(v.oNc.COMMUNITY),
        j = (0, m.lN)(!(0, f.r1)(e.id)),
        T = e.hasFeature(v.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        P = (0, r.jS)(e.id, 'Guild Sidebar');
    return E && N.push(g.z.GUILD_HUB_HEADER_OPTIONS), !b && I && Z && null != _ && _.length > 0 ? N.push(g.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR) : e.premiumProgressBarEnabled && N.push(g.z.GUILD_PREMIUM_PROGRESS_BAR), !E && I && N.push(g.z.GUILD_HOME), t && N.push(g.z.GUILD_SCHEDULED_EVENTS), !E && y && j && N.push(g.z.CHANNELS_AND_ROLES), C && N.push(g.z.GUILD_ROLE_SUBSCRIPTIONS), x && N.push(g.z.GUILD_SHOP), !P && n && N.push(g.z.GUILD_MEMBER_APPLICATIONS), S && (y || T || (P && e.hasFeature(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL))) && N.push(g.z.GUILD_MOD_DASH_MEMBER_SAFETY), N;
}
