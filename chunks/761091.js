n.d(t, { Z: () => v }), n(539854);
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
    b = n(699955),
    _ = n(330791),
    y = n(443063),
    O = n(981631);
function v(e) {
    let t = (0, p.Z)(e.id),
        n = (0, l.W)(e.id),
        v = (0, d.j0)(e.id),
        j = (0, i.u)(e),
        x = (0, m.wK)(e),
        C = (0, b.c)({ location: "guild-action-rows" }),
        E = (0, c.g)(e.id),
        S = (0, r.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
        I = (0, u.Z)(e.id),
        P = (0, s.PE)(e.id),
        N = (0, o.n2)(e.id),
        Z = [],
        w = e.features.has(O.GuildFeatures.HUB),
        T = e.features.has(O.GuildFeatures.COMMUNITY),
        A = (0, _.l)(!(0, h.r1)(e.id)),
        R = e.features.has(O.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        D = (0, g.Z)(e.id),
        L = (0, f.BU)(e.id, "useGuildActionRows"),
        M = e.features.has(O.GuildFeatures.GAME_SERVERS);
    return (
        w && Z.push(y.z.GUILD_HUB_HEADER_OPTIONS),
        !P && E && I && null != S && S.length > 0
            ? Z.push(y.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled && Z.push(y.z.GUILD_PREMIUM_PROGRESS_BAR),
        !w && E && Z.push(y.z.GUILD_HOME),
        t && Z.push(y.z.GUILD_SCHEDULED_EVENTS),
        !w && T && A && Z.push(y.z.CHANNELS_AND_ROLES),
        v && Z.push(y.z.GUILD_ROLE_SUBSCRIPTIONS),
        j && Z.push(y.z.GUILD_SHOP),
        x && C && Z.push(y.z.GUILD_GAME_SHOP),
        ((N && (T || R)) || (n && e.features.has(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            Z.push(y.z.GUILD_MOD_DASH_MEMBER_SAFETY),
        D && Z.push(y.z.GUILD_BOOSTS),
        L && M && Z.push(y.z.GAME_SERVERS),
        Z
    );
}
