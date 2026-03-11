"use strict";
n.d(t, { A: () => I }), n(321073);
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
    f = n(363487),
    x = n(871123),
    C = n(281405),
    E = n(652215);
function I(e) {
    let t = (0, p.A)(e.id),
        n = (0, o.W)(e.id),
        I = (0, m.vz)(e.id),
        N = (0, l.r)(e),
        b = (0, x.jz)(e),
        S = (0, h.d)(e.id),
        T = (0, i.bG)([d.h], () => d.h.getNewMemberActions(e.id), [e.id]),
        v = (0, A.A)(e.id),
        y = (0, u.jY)(e.id),
        j = (0, c.fw)(e.id),
        R = [],
        O = e.features.has(E.GuildFeatures.HUB),
        L = e.features.has(E.GuildFeatures.COMMUNITY),
        M = e.features.has(E.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        D = (0, f.A)(e.id),
        G = (0, g.C$)(e.id, "useGuildActionRows"),
        U = e.features.has(E.GuildFeatures.GAME_SERVERS),
        P = (0, _.N)("useGuildActionRows"),
        [w] = (0, r.kn)(G && P && !U ? [s.M.EMPTY_GAME_SERVER_TAB] : [], void 0, !0),
        k = (0, a.ws)(e, { location: "guild-action-rows" });
    return (
        O && R.push(C.n.GUILD_HUB_HEADER_OPTIONS),
        !y && S && v && null != T && T.length > 0
            ? R.push(C.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : k && R.push(C.n.GUILD_PREMIUM_PROGRESS_BAR),
        !O && S && R.push(C.n.GUILD_HOME),
        t && R.push(C.n.GUILD_SCHEDULED_EVENTS),
        !O && L && R.push(C.n.CHANNELS_AND_ROLES),
        I && R.push(C.n.GUILD_ROLE_SUBSCRIPTIONS),
        N && R.push(C.n.GUILD_SHOP),
        b && R.push(C.n.GUILD_GAME_SHOP),
        ((j && (L || M)) || (n && e.features.has(E.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            R.push(C.n.GUILD_MOD_DASH_MEMBER_SAFETY),
        D && R.push(C.n.GUILD_BOOSTS),
        G && (U ? R.push(C.n.GAME_SERVERS) : null != w && R.push(C.n.GAME_SERVERS_EMPTY)),
        R
    );
}
