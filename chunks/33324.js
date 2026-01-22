n.d(t, {
    A: () => v,
}),
    n(321073);
var r = n(417597),
    l = n(41200),
    i = n(496767),
    a = n(134413),
    s = n(701785),
    o = n(101611),
    c = n(473529),
    u = n(978165),
    d = n(960253),
    f = n(18905),
    p = n(395504),
    h = n(488803),
    b = n(385160),
    g = n(363487),
    m = n(871123),
    A = n(916023),
    y = n(590877),
    O = n(281405),
    j = n(652215);

function v(e) {
    let t = (0, f.A)(e.id),
        n = (0, i.W)(e.id),
        v = (0, d.vz)(e.id),
        x = (0, l.r)(e),
        E = (0, m.jz)(e),
        _ = (0, A.kt)({
            location: "guild-action-rows",
        }),
        C = (0, c.d)(e.id),
        S = (0, r.bG)([s.h], () => s.h.getNewMemberActions(e.id), [e.id]),
        I = (0, u.A)(e.id),
        N = (0, o.jY)(e.id),
        T = (0, a.fw)(e.id),
        P = [],
        w = e.features.has(j.GuildFeatures.HUB),
        R = e.features.has(j.GuildFeatures.COMMUNITY),
        D = (0, y.w)(!(0, p.WW)(e.id)),
        M = e.features.has(j.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        L = (0, g.A)(e.id);
    (0, b.Ao)("useGuildActionRows");
    let G = (0, h.C$)(e.id, "useGuildActionRows"),
        k = e.features.has(j.GuildFeatures.GAME_SERVERS);
    return (
        w && P.push(O.n.GUILD_HUB_HEADER_OPTIONS),
        !N && C && I && null != S && S.length > 0
            ? P.push(O.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled && P.push(O.n.GUILD_PREMIUM_PROGRESS_BAR),
        !w && C && P.push(O.n.GUILD_HOME),
        t && P.push(O.n.GUILD_SCHEDULED_EVENTS),
        !w && R && D && P.push(O.n.CHANNELS_AND_ROLES),
        v && P.push(O.n.GUILD_ROLE_SUBSCRIPTIONS),
        x && P.push(O.n.GUILD_SHOP),
        E && _ && P.push(O.n.GUILD_GAME_SHOP),
        ((T && (R || M)) || (n && e.features.has(j.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            P.push(O.n.GUILD_MOD_DASH_MEMBER_SAFETY),
        L && P.push(O.n.GUILD_BOOSTS),
        G && k && P.push(O.n.GAME_SERVERS),
        P
    );
}
