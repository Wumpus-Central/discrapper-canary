"use strict";
n.d(t, { A: () => b }), n(321073);
var i = n(417597),
    s = n(554146),
    l = n(41200),
    a = n(932001),
    r = n(903223),
    o = n(496767),
    c = n(134413),
    d = n(701785),
    u = n(101611),
    h = n(473529),
    A = n(978165),
    p = n(960253),
    m = n(18905),
    g = n(488803),
    _ = n(969117),
    f = n(385160),
    x = n(363487),
    C = n(871123),
    E = n(916023),
    I = n(281405),
    N = n(652215);
function b(e) {
    let t = (0, m.A)(e.id),
        n = (0, o.W)(e.id),
        b = (0, p.vz)(e.id),
        S = (0, l.r)(e),
        T = (0, C.jz)(e),
        y = (0, E.kt)({ location: "guild-action-rows" }),
        v = (0, h.d)(e.id),
        j = (0, i.bG)([d.h], () => d.h.getNewMemberActions(e.id), [e.id]),
        R = (0, A.A)(e.id),
        O = (0, u.jY)(e.id),
        L = (0, c.fw)(e.id),
        M = [],
        D = e.features.has(N.GuildFeatures.HUB),
        G = e.features.has(N.GuildFeatures.COMMUNITY),
        U = e.features.has(N.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        P = (0, x.A)(e.id);
    (0, f.Ao)("useGuildActionRows");
    let w = (0, g.C$)(e.id, "useGuildActionRows"),
        k = e.features.has(N.GuildFeatures.GAME_SERVERS),
        V = (0, _.N)("useGuildActionRows"),
        [B] = (0, a.kn)(w && V && !k ? [s.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0),
        H = (0, r.ws)(e, { location: "guild-action-rows" });
    return (
        D && M.push(I.n.GUILD_HUB_HEADER_OPTIONS),
        !O && v && R && null != j && j.length > 0
            ? M.push(I.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : H && M.push(I.n.GUILD_PREMIUM_PROGRESS_BAR),
        !D && v && M.push(I.n.GUILD_HOME),
        t && M.push(I.n.GUILD_SCHEDULED_EVENTS),
        !D && G && M.push(I.n.CHANNELS_AND_ROLES),
        b && M.push(I.n.GUILD_ROLE_SUBSCRIPTIONS),
        S && M.push(I.n.GUILD_SHOP),
        T && y && M.push(I.n.GUILD_GAME_SHOP),
        ((L && (G || U)) || (n && e.features.has(N.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            M.push(I.n.GUILD_MOD_DASH_MEMBER_SAFETY),
        P && M.push(I.n.GUILD_BOOSTS),
        w && (k ? M.push(I.n.GAME_SERVERS) : null != B && M.push(I.n.GAME_SERVERS_EMPTY)),
        M
    );
}
