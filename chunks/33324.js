n.d(t, { A: () => N }), n(321073);
var i = n(417597),
    l = n(554146),
    s = n(41200),
    a = n(932001),
    r = n(496767),
    o = n(134413),
    d = n(701785),
    c = n(101611),
    u = n(473529),
    h = n(978165),
    A = n(960253),
    _ = n(18905),
    m = n(488803),
    p = n(969117),
    g = n(28853),
    f = n(363487),
    E = n(267771),
    x = n(871123),
    I = n(281405),
    C = n(652215);
function N(e) {
    let t = (0, _.A)(e.id),
        n = (0, r.W)(e.id),
        N = (0, A.vz)(e.id),
        T = (0, s.r)(e),
        S = (0, x.jz)(e),
        b = (0, u.d)(e.id),
        y = (0, i.bG)([d.h], () => d.h.getNewMemberActions(e.id), [e.id]),
        v = (0, h.A)(e.id),
        R = (0, c.jY)(e.id),
        j = (0, o.fw)(e.id),
        O = [],
        L = e.features.has(C.GuildFeatures.HUB),
        M = e.features.has(C.GuildFeatures.COMMUNITY),
        D = e.features.has(C.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        U = (0, f.A)(e.id);
    (0, g.yc)("useGuildActionRows");
    let G = (0, E.A)(e),
        P = (0, m.C$)(e.id, "useGuildActionRows"),
        k = e.features.has(C.GuildFeatures.GAME_SERVERS),
        w = (0, p.N)("useGuildActionRows"),
        [B] = (0, a.kn)(P && w && !k ? [l.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
    return (
        L && O.push(I.n.GUILD_HUB_HEADER_OPTIONS),
        !R && b && v && null != y && y.length > 0
            ? O.push(I.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled && G > 0 && O.push(I.n.GUILD_PREMIUM_PROGRESS_BAR),
        !L && b && O.push(I.n.GUILD_HOME),
        t && O.push(I.n.GUILD_SCHEDULED_EVENTS),
        !L && M && O.push(I.n.CHANNELS_AND_ROLES),
        N && O.push(I.n.GUILD_ROLE_SUBSCRIPTIONS),
        T && O.push(I.n.GUILD_SHOP),
        S && O.push(I.n.GUILD_GAME_SHOP),
        ((j && (M || D)) || (n && e.features.has(C.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            O.push(I.n.GUILD_MOD_DASH_MEMBER_SAFETY),
        U && O.push(I.n.GUILD_BOOSTS),
        P && (k ? O.push(I.n.GAME_SERVERS) : null != B && O.push(I.n.GAME_SERVERS_EMPTY)),
        O
    );
}
