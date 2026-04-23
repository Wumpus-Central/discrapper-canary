n.d(t, { A: () => b }), n(321073);
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
    g = n(969117),
    p = n(28853),
    f = n(363487),
    E = n(267771),
    x = n(871123),
    I = n(281405),
    C = n(652215);
function b(e) {
    let t = (0, _.A)(e.id),
        n = (0, r.W)(e.id),
        b = (0, A.vz)(e.id),
        N = (0, s.r)(e),
        S = (0, x.jz)(e),
        v = (0, u.d)(e.id),
        T = (0, i.bG)([d.h], () => d.h.getNewMemberActions(e.id), [e.id]),
        y = (0, h.A)(e.id),
        j = (0, c.jY)(e.id),
        R = (0, o.fw)(e.id),
        L = [],
        O = e.features.has(C.GuildFeatures.HUB),
        G = e.features.has(C.GuildFeatures.COMMUNITY),
        M = e.features.has(C.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        D = (0, f.A)(e.id);
    (0, p.yc)("useGuildActionRows");
    let U = (0, E.A)(e),
        P = (0, m.C$)(e.id, "useGuildActionRows"),
        w = e.features.has(C.GuildFeatures.GAME_SERVERS),
        k = (0, g.N)("useGuildActionRows"),
        [V] = (0, a.kn)(P && k && !w ? [l.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0);
    return (
        O && L.push(I.n.GUILD_HUB_HEADER_OPTIONS),
        !j && v && y && null != T && T.length > 0
            ? L.push(I.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled && U > 0 && L.push(I.n.GUILD_PREMIUM_PROGRESS_BAR),
        !O && v && L.push(I.n.GUILD_HOME),
        t && L.push(I.n.GUILD_SCHEDULED_EVENTS),
        !O && G && L.push(I.n.CHANNELS_AND_ROLES),
        b && L.push(I.n.GUILD_ROLE_SUBSCRIPTIONS),
        N && L.push(I.n.GUILD_SHOP),
        S && L.push(I.n.GUILD_GAME_SHOP),
        ((R && (G || M)) || (n && e.features.has(C.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            L.push(I.n.GUILD_MOD_DASH_MEMBER_SAFETY),
        D && L.push(I.n.GUILD_BOOSTS),
        P && (w ? L.push(I.n.GAME_SERVERS) : null != V && L.push(I.n.GAME_SERVERS_EMPTY)),
        L
    );
}
