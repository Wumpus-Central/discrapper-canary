n.d(t, { Z: () => O }), n(539854);
var r = n(399606),
    i = n(897345),
    l = n(697379),
    o = n(241559),
    a = n(563534),
    s = n(655359),
    c = n(931261),
    u = n(460347),
    d = n(994592),
    p = n(265418),
    h = n(398758),
    f = n(755458),
    g = n(639777),
    m = n(164670),
    b = n(330791),
    _ = n(443063),
    y = n(981631);
function O(e) {
    let t = (0, p.Z)(e.id),
        n = (0, l.W)(e.id),
        O = (0, d.j0)(e.id),
        v = (0, i.u)(e),
        j = (0, m.wK)(e),
        C = (0, c.g)(e.id),
        x = (0, r.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
        E = (0, u.Z)(e.id),
        S = (0, s.PE)(e.id),
        I = (0, o.n2)(e.id),
        P = [],
        N = e.features.has(y.GuildFeatures.HUB),
        Z = e.features.has(y.GuildFeatures.COMMUNITY),
        w = (0, b.l)(!(0, h.r1)(e.id)),
        T = e.features.has(y.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        A = (0, g.Z)(e.id),
        R = (0, f.BU)(e.id, "useGuildActionRows"),
        D = e.features.has(y.GuildFeatures.GAME_SERVERS);
    return (
        N && P.push(_.z.GUILD_HUB_HEADER_OPTIONS),
        !S && C && E && null != x && x.length > 0
            ? P.push(_.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled && P.push(_.z.GUILD_PREMIUM_PROGRESS_BAR),
        !N && C && P.push(_.z.GUILD_HOME),
        t && P.push(_.z.GUILD_SCHEDULED_EVENTS),
        !N && Z && w && P.push(_.z.CHANNELS_AND_ROLES),
        O && P.push(_.z.GUILD_ROLE_SUBSCRIPTIONS),
        v && P.push(_.z.GUILD_SHOP),
        j && P.push(_.z.GUILD_GAME_SHOP),
        ((I && (Z || T)) || (n && e.features.has(y.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            P.push(_.z.GUILD_MOD_DASH_MEMBER_SAFETY),
        A && P.push(_.z.GUILD_BOOSTS),
        R && D && P.push(_.z.GAME_SERVERS),
        P
    );
}
