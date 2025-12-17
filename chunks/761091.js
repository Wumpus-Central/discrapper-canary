n.d(t, { Z: () => C }), n(539854);
var r = n(399606),
    i = n(897345),
    l = n(697379),
    a = n(241559),
    o = n(563534),
    s = n(655359),
    c = n(931261),
    u = n(460347),
    d = n(994592),
    f = n(265418),
    h = n(398758),
    p = n(755458),
    g = n(13439),
    b = n(639777),
    m = n(164670),
    y = n(699955),
    O = n(330791),
    v = n(443063),
    j = n(981631);
function C(e) {
    let t = (0, f.Z)(e.id),
        n = (0, l.W)(e.id),
        C = (0, d.j0)(e.id),
        x = (0, i.u)(e),
        E = (0, m.wK)(e),
        S = (0, y.cZ)({ location: "guild-action-rows" }),
        I = (0, c.g)(e.id),
        _ = (0, r.e7)([o.Z], () => o.Z.getNewMemberActions(e.id), [e.id]),
        P = (0, u.Z)(e.id),
        N = (0, s.PE)(e.id),
        Z = (0, a.n2)(e.id),
        w = [],
        T = e.features.has(j.GuildFeatures.HUB),
        A = e.features.has(j.GuildFeatures.COMMUNITY),
        R = (0, O.l)(!(0, h.r1)(e.id)),
        D = e.features.has(j.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        M = (0, b.Z)(e.id);
    (0, g.e)(e.id, "useGuildActionRows", !0);
    let L = (0, p.BU)(e.id, "useGuildActionRows"),
        k = e.features.has(j.GuildFeatures.GAME_SERVERS);
    return (
        T && w.push(v.z.GUILD_HUB_HEADER_OPTIONS),
        !N && I && P && null != _ && _.length > 0
            ? w.push(v.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled && w.push(v.z.GUILD_PREMIUM_PROGRESS_BAR),
        !T && I && w.push(v.z.GUILD_HOME),
        t && w.push(v.z.GUILD_SCHEDULED_EVENTS),
        !T && A && R && w.push(v.z.CHANNELS_AND_ROLES),
        C && w.push(v.z.GUILD_ROLE_SUBSCRIPTIONS),
        x && w.push(v.z.GUILD_SHOP),
        E && S && w.push(v.z.GUILD_GAME_SHOP),
        ((Z && (A || D)) || (n && e.features.has(j.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            w.push(v.z.GUILD_MOD_DASH_MEMBER_SAFETY),
        M && w.push(v.z.GUILD_BOOSTS),
        L && k && w.push(v.z.GAME_SERVERS),
        w
    );
}
