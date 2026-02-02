n.d(t, {
    A: () => _,
}),
    n(321073);
var r = n(417597),
    l = n(41200),
    i = n(903223),
    s = n(496767),
    a = n(134413),
    o = n(701785),
    c = n(101611),
    u = n(473529),
    d = n(978165),
    p = n(960253),
    h = n(18905),
    g = n(395504),
    f = n(488803),
    m = n(385160),
    b = n(363487),
    A = n(871123),
    y = n(916023),
    O = n(590877),
    j = n(281405),
    x = n(652215);

function _(e) {
    let t = (0, h.A)(e.id),
        n = (0, s.W)(e.id),
        _ = (0, p.vz)(e.id),
        v = (0, l.r)(e),
        E = (0, A.jz)(e),
        C = (0, y.kt)({
            location: "guild-action-rows",
        }),
        S = (0, u.d)(e.id),
        I = (0, r.bG)([o.h], () => o.h.getNewMemberActions(e.id), [e.id]),
        N = (0, d.A)(e.id),
        T = (0, c.jY)(e.id),
        P = (0, a.fw)(e.id),
        w = [],
        R = e.features.has(x.GuildFeatures.HUB),
        D = e.features.has(x.GuildFeatures.COMMUNITY),
        L = (0, O.w)(!(0, g.WW)(e.id)),
        M = e.features.has(x.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        G = (0, b.A)(e.id);
    (0, m.Ao)("useGuildActionRows");
    let k = (0, f.C$)(e.id, "useGuildActionRows"),
        U = e.features.has(x.GuildFeatures.GAME_SERVERS),
        V = (0, i.ws)(e, {
            location: "guild-action-rows",
        });
    return (
        R && w.push(j.n.GUILD_HUB_HEADER_OPTIONS),
        !T && S && N && null != I && I.length > 0
            ? w.push(j.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : V && w.push(j.n.GUILD_PREMIUM_PROGRESS_BAR),
        !R && S && w.push(j.n.GUILD_HOME),
        t && w.push(j.n.GUILD_SCHEDULED_EVENTS),
        !R && D && L && w.push(j.n.CHANNELS_AND_ROLES),
        _ && w.push(j.n.GUILD_ROLE_SUBSCRIPTIONS),
        v && w.push(j.n.GUILD_SHOP),
        E && C && w.push(j.n.GUILD_GAME_SHOP),
        ((P && (D || M)) || (n && e.features.has(x.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            w.push(j.n.GUILD_MOD_DASH_MEMBER_SAFETY),
        G && w.push(j.n.GUILD_BOOSTS),
        k && U && w.push(j.n.GAME_SERVERS),
        w
    );
}
