"use strict";
n.d(t, { A: () => N }), n(321073);
var i = n(417597),
    s = n(554146),
    l = n(41200),
    r = n(932001),
    a = n(903223),
    o = n(496767),
    c = n(134413),
    d = n(701785),
    u = n(101611),
    h = n(473529),
    A = n(978165),
    m = n(960253),
    p = n(18905),
    g = n(488803),
    _ = n(969117),
    f = n(385160),
    x = n(363487),
    C = n(871123),
    E = n(281405),
    I = n(652215);
function N(e) {
    let t = (0, p.A)(e.id),
        n = (0, o.W)(e.id),
        N = (0, m.vz)(e.id),
        b = (0, l.r)(e),
        S = (0, C.jz)(e),
        T = (0, h.d)(e.id),
        v = (0, i.bG)([d.h], () => d.h.getNewMemberActions(e.id), [e.id]),
        y = (0, A.A)(e.id),
        j = (0, u.jY)(e.id),
        R = (0, c.fw)(e.id),
        O = [],
        L = e.features.has(I.GuildFeatures.HUB),
        M = e.features.has(I.GuildFeatures.COMMUNITY),
        D = e.features.has(I.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        G = (0, x.A)(e.id);
    (0, f.Ao)("useGuildActionRows");
    let U = (0, g.C$)(e.id, "useGuildActionRows"),
        P = e.features.has(I.GuildFeatures.GAME_SERVERS),
        w = (0, _.N)("useGuildActionRows"),
        [k] = (0, r.kn)(U && w && !P ? [s.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0),
        V = (0, a.ws)(e, { location: "guild-action-rows" });
    return (
        L && O.push(E.n.GUILD_HUB_HEADER_OPTIONS),
        !j && T && y && null != v && v.length > 0
            ? O.push(E.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : V && O.push(E.n.GUILD_PREMIUM_PROGRESS_BAR),
        !L && T && O.push(E.n.GUILD_HOME),
        t && O.push(E.n.GUILD_SCHEDULED_EVENTS),
        !L && M && O.push(E.n.CHANNELS_AND_ROLES),
        N && O.push(E.n.GUILD_ROLE_SUBSCRIPTIONS),
        b && O.push(E.n.GUILD_SHOP),
        S && O.push(E.n.GUILD_GAME_SHOP),
        ((R && (M || D)) || (n && e.features.has(I.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            O.push(E.n.GUILD_MOD_DASH_MEMBER_SAFETY),
        G && O.push(E.n.GUILD_BOOSTS),
        U && (P ? O.push(E.n.GAME_SERVERS) : null != k && O.push(E.n.GAME_SERVERS_EMPTY)),
        O
    );
}
