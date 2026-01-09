n.d(t, { Z: () => x }), n(539854);
var r = n(399606),
    i = n(897345),
    l = n(697379),
    a = n(241559),
    o = n(563534),
    s = n(655359),
    c = n(931261),
    u = n(460347),
    d = n(994592),
    p = n(265418),
    f = n(398758),
    h = n(755458),
    g = n(13439),
    m = n(639777),
    b = n(164670),
    y = n(699955),
    v = n(330791),
    O = n(443063),
    j = n(981631);
function x(e) {
    let t = (0, p.Z)(e.id),
        n = (0, l.W)(e.id),
        x = (0, d.j0)(e.id),
        C = (0, i.u)(e),
        E = (0, b.wK)(e),
        S = (0, y.cZ)({ location: "guild-action-rows" }),
        _ = (0, c.g)(e.id),
        I = (0, r.e7)([o.Z], () => o.Z.getNewMemberActions(e.id), [e.id]),
        P = (0, u.Z)(e.id),
        Z = (0, s.PE)(e.id),
        N = (0, a.n2)(e.id),
        T = [],
        A = e.features.has(j.GuildFeatures.HUB),
        w = e.features.has(j.GuildFeatures.COMMUNITY),
        R = (0, v.l)(!(0, f.r1)(e.id)),
        D = e.features.has(j.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        M = (0, m.Z)(e.id);
    (0, g.eg)(e.id, "useGuildActionRows", !0);
    let k = (0, h.BU)(e.id, "useGuildActionRows"),
        L = e.features.has(j.GuildFeatures.GAME_SERVERS);
    return (
        A && T.push(O.z.GUILD_HUB_HEADER_OPTIONS),
        !Z && _ && P && null != I && I.length > 0
            ? T.push(O.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled && T.push(O.z.GUILD_PREMIUM_PROGRESS_BAR),
        !A && _ && T.push(O.z.GUILD_HOME),
        t && T.push(O.z.GUILD_SCHEDULED_EVENTS),
        !A && w && R && T.push(O.z.CHANNELS_AND_ROLES),
        x && T.push(O.z.GUILD_ROLE_SUBSCRIPTIONS),
        C && T.push(O.z.GUILD_SHOP),
        E && S && T.push(O.z.GUILD_GAME_SHOP),
        ((N && (w || D)) || (n && e.features.has(j.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            T.push(O.z.GUILD_MOD_DASH_MEMBER_SAFETY),
        M && T.push(O.z.GUILD_BOOSTS),
        k && L && T.push(O.z.GAME_SERVERS),
        T
    );
}
