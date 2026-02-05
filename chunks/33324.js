n.d(t, { A: () => S }), n(321073);
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
    g = n(395504),
    m = n(488803),
    p = n(385160),
    _ = n(363487),
    x = n(871123),
    f = n(916023),
    E = n(590877),
    C = n(281405),
    I = n(652215);
function S(e) {
    let t = (0, A.A)(e.id),
        n = (0, a.W)(e.id),
        S = (0, h.vz)(e.id),
        b = (0, l.r)(e),
        N = (0, x.jz)(e),
        T = (0, f.kt)({ location: "guild-action-rows" }),
        j = (0, c.d)(e.id),
        v = (0, i.bG)([o.h], () => o.h.getNewMemberActions(e.id), [e.id]),
        y = (0, u.A)(e.id),
        R = (0, d.jY)(e.id),
        O = (0, r.fw)(e.id),
        L = [],
        D = e.features.has(I.GuildFeatures.HUB),
        M = e.features.has(I.GuildFeatures.COMMUNITY),
        G = (0, E.w)(!(0, g.WW)(e.id)),
        U = e.features.has(I.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        P = (0, _.A)(e.id);
    (0, p.Ao)("useGuildActionRows");
    let k = (0, m.C$)(e.id, "useGuildActionRows"),
        w = e.features.has(I.GuildFeatures.GAME_SERVERS),
        V = (0, s.ws)(e, { location: "guild-action-rows" });
    return (
        D && L.push(C.n.GUILD_HUB_HEADER_OPTIONS),
        !R && j && y && null != v && v.length > 0
            ? L.push(C.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : V && L.push(C.n.GUILD_PREMIUM_PROGRESS_BAR),
        !D && j && L.push(C.n.GUILD_HOME),
        t && L.push(C.n.GUILD_SCHEDULED_EVENTS),
        !D && M && G && L.push(C.n.CHANNELS_AND_ROLES),
        S && L.push(C.n.GUILD_ROLE_SUBSCRIPTIONS),
        b && L.push(C.n.GUILD_SHOP),
        N && T && L.push(C.n.GUILD_GAME_SHOP),
        ((O && (M || U)) || (n && e.features.has(I.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            L.push(C.n.GUILD_MOD_DASH_MEMBER_SAFETY),
        P && L.push(C.n.GUILD_BOOSTS),
        k && w && L.push(C.n.GAME_SERVERS),
        L
    );
}
