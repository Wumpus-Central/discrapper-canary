n.d(t, { A: () => C }), n(321073);
var i = n(417597),
    l = n(554146),
    s = n(41200),
    a = n(932001),
    r = n(903223),
    o = n(496767),
    c = n(134413),
    d = n(701785),
    u = n(101611),
    h = n(473529),
    A = n(978165),
    _ = n(960253),
    m = n(18905),
    g = n(488803),
    p = n(969117),
    f = n(363487),
    x = n(871123),
    E = n(281405),
    I = n(652215);
function C(e) {
    let t = (0, m.A)(e.id),
        n = (0, o.W)(e.id),
        C = (0, _.vz)(e.id),
        N = (0, s.r)(e),
        T = (0, x.jz)(e),
        S = (0, h.d)(e.id),
        b = (0, i.bG)([d.h], () => d.h.getNewMemberActions(e.id), [e.id]),
        y = (0, A.A)(e.id),
        v = (0, u.jY)(e.id),
        j = (0, c.fw)(e.id),
        R = [],
        O = e.features.has(I.GuildFeatures.HUB),
        L = e.features.has(I.GuildFeatures.COMMUNITY),
        M = e.features.has(I.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        D = (0, f.A)(e.id),
        U = (0, g.C$)(e.id, "useGuildActionRows"),
        G = e.features.has(I.GuildFeatures.GAME_SERVERS),
        P = (0, p.N)("useGuildActionRows"),
        [k] = (0, a.kn)(U && P && !G ? [l.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0),
        w = (0, r.ws)(e, { location: "guild-action-rows" });
    return (
        O && R.push(E.n.GUILD_HUB_HEADER_OPTIONS),
        !v && S && y && null != b && b.length > 0
            ? R.push(E.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : w && R.push(E.n.GUILD_PREMIUM_PROGRESS_BAR),
        !O && S && R.push(E.n.GUILD_HOME),
        t && R.push(E.n.GUILD_SCHEDULED_EVENTS),
        !O && L && R.push(E.n.CHANNELS_AND_ROLES),
        C && R.push(E.n.GUILD_ROLE_SUBSCRIPTIONS),
        N && R.push(E.n.GUILD_SHOP),
        T && R.push(E.n.GUILD_GAME_SHOP),
        ((j && (L || M)) || (n && e.features.has(I.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            R.push(E.n.GUILD_MOD_DASH_MEMBER_SAFETY),
        D && R.push(E.n.GUILD_BOOSTS),
        U && (G ? R.push(E.n.GAME_SERVERS) : null != k && R.push(E.n.GAME_SERVERS_EMPTY)),
        R
    );
}
