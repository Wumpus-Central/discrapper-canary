n.d(t, { Z: () => j }), n(539854);
var r = n(399606),
    i = n(897345),
    l = n(697379),
    o = n(241559),
    a = n(563534),
    s = n(655359),
    c = n(931261),
    u = n(460347),
    d = n(994592),
    f = n(265418),
    p = n(398758),
    h = n(755458),
    g = n(13439),
    m = n(639777),
    b = n(164670),
    _ = n(699955),
    y = n(330791),
    O = n(443063),
    v = n(981631);
function j(e) {
    let t = (0, f.Z)(e.id),
        n = (0, l.W)(e.id),
        j = (0, d.j0)(e.id),
        x = (0, i.u)(e),
        C = (0, b.wK)(e),
        E = (0, _.cZ)({ location: "guild-action-rows" }),
        S = (0, c.g)(e.id),
        I = (0, r.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
        P = (0, u.Z)(e.id),
        N = (0, s.PE)(e.id),
        Z = (0, o.n2)(e.id),
        w = [],
        T = e.features.has(v.GuildFeatures.HUB),
        A = e.features.has(v.GuildFeatures.COMMUNITY),
        R = (0, y.l)(!(0, p.r1)(e.id)),
        D = e.features.has(v.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        L = (0, m.Z)(e.id);
    (0, g.e)(e.id, "useGuildActionRows", !0);
    let M = (0, h.BU)(e.id, "useGuildActionRows"),
        k = e.features.has(v.GuildFeatures.GAME_SERVERS);
    return (
        T && w.push(O.z.GUILD_HUB_HEADER_OPTIONS),
        !N && S && P && null != I && I.length > 0
            ? w.push(O.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled && w.push(O.z.GUILD_PREMIUM_PROGRESS_BAR),
        !T && S && w.push(O.z.GUILD_HOME),
        t && w.push(O.z.GUILD_SCHEDULED_EVENTS),
        !T && A && R && w.push(O.z.CHANNELS_AND_ROLES),
        j && w.push(O.z.GUILD_ROLE_SUBSCRIPTIONS),
        x && w.push(O.z.GUILD_SHOP),
        C && E && w.push(O.z.GUILD_GAME_SHOP),
        ((Z && (A || D)) || (n && e.features.has(v.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            w.push(O.z.GUILD_MOD_DASH_MEMBER_SAFETY),
        L && w.push(O.z.GUILD_BOOSTS),
        M && k && w.push(O.z.GAME_SERVERS),
        w
    );
}
