n.d(t, { A: () => E }), n(321073);
var i = n(417597),
    l = n(41200),
    s = n(903223),
    a = n(496767),
    r = n(134413),
    o = n(701785),
    d = n(101611),
    c = n(473529),
    u = n(978165),
    h = n(960253),
    A = n(18905),
    m = n(488803),
    p = n(385160),
    g = n(363487),
    _ = n(871123),
    f = n(916023),
    x = n(281405),
    C = n(652215);
function E(e) {
    let t = (0, A.A)(e.id),
        n = (0, a.W)(e.id),
        E = (0, h.vz)(e.id),
        I = (0, l.r)(e),
        N = (0, _.jz)(e),
        b = (0, f.kt)({ location: "guild-action-rows" }),
        S = (0, c.d)(e.id),
        T = (0, i.bG)([o.h], () => o.h.getNewMemberActions(e.id), [e.id]),
        v = (0, u.A)(e.id),
        y = (0, d.jY)(e.id),
        j = (0, r.fw)(e.id),
        R = [],
        O = e.features.has(C.GuildFeatures.HUB),
        L = e.features.has(C.GuildFeatures.COMMUNITY),
        M = e.features.has(C.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        D = (0, g.A)(e.id);
    (0, p.Ao)("useGuildActionRows");
    let G = (0, m.C$)(e.id, "useGuildActionRows"),
        U = e.features.has(C.GuildFeatures.GAME_SERVERS),
        P = (0, s.ws)(e, { location: "guild-action-rows" });
    return (
        O && R.push(x.n.GUILD_HUB_HEADER_OPTIONS),
        !y && S && v && null != T && T.length > 0
            ? R.push(x.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : P && R.push(x.n.GUILD_PREMIUM_PROGRESS_BAR),
        !O && S && R.push(x.n.GUILD_HOME),
        t && R.push(x.n.GUILD_SCHEDULED_EVENTS),
        !O && L && R.push(x.n.CHANNELS_AND_ROLES),
        E && R.push(x.n.GUILD_ROLE_SUBSCRIPTIONS),
        I && R.push(x.n.GUILD_SHOP),
        N && b && R.push(x.n.GUILD_GAME_SHOP),
        ((j && (L || M)) || (n && e.features.has(C.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            R.push(x.n.GUILD_MOD_DASH_MEMBER_SAFETY),
        D && R.push(x.n.GUILD_BOOSTS),
        G && U && R.push(x.n.GAME_SERVERS),
        R
    );
}
