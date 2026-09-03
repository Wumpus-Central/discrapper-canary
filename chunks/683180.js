n.d(t, {
    $X: () => T,
    B9: () => A,
    Bp: () => O,
    G2: () => m,
    RZ: () => p,
    SH: () => I,
    X0: () => h,
    by: () => S,
    kT: () => f,
    kg: () => C,
    oA: () => E,
    pG: () => g,
});
var i = n(17928),
    r = n(808728),
    a = n(71393),
    s = n(576705),
    l = n(967198),
    o = n(673724),
    d = n(906786),
    c = n(652215);
let u = "vibegrations_application_id=",
    _ = /^\d{17,20}$/;
function E(e) {
    return { isPublic: (e & o.A2.PUBLIC) != 0, isShared: (e & o.A2.SHAREABLE) != 0 };
}
function A(e) {
    if (null == e || !e.startsWith(u)) return null;
    let t = e.slice(u.length);
    return _.test(t) ? t : null;
}
function h(e, t) {
    return (
        null != e &&
        (e.guild_id === t || e.preview_guild_id === t || (null == e.guild_id && null == e.preview_guild_id))
    );
}
function I(e, t) {
    for (let { channel: n } of r.Ay.getChannels(e)[r.I6].filter((e) => {
        let { channel: t } = e;
        return t.type === c.rbe.GUILD_TEXT;
    }))
        if (A(n.topic) === t) return n.id;
    return null;
}
function f(e, t) {
    return (0, d.ix)({ guildId: e.id, location: t }) && !e.features.has(c.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
}
function p(e, t) {
    return e.filter((e) => f(e, t)).sort((e, t) => (e.id < t.id ? -1 : +(e.id > t.id)));
}
function T(e) {
    let t = l.A.getGuildId(),
        n = null == t ? null : a.A.getGuild(t);
    return null != n && f(n, e) ? n.id : (p(a.A.getGuildsArray(), e)[0]?.id ?? null);
}
function m(e, t) {
    return f(e, t);
}
function g(e, t) {
    return (
        !e.features.has(c.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) &&
        s.A.can(c.xBc.MANAGE_CHANNELS, e) &&
        s.A.can(c.xBc.MANAGE_GUILD, e) &&
        (0, d.ix)({ guildId: e.id, location: t })
    );
}
function S(e, t) {
    let n = (0, d.f)({ guildId: e.id, location: t }),
        i = e.features.has(c.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return n && !i;
}
function N(e, t) {
    return (
        null != e &&
        e.type === c.rbe.GUILD_TEXT &&
        null != A(e.topic) &&
        !t?.features.has(c.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function C(e, t) {
    return N(e, a.A.getGuild(e?.guild_id)) && (0, d.ix)({ guildId: e?.guild_id, location: t });
}
function O(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.getGuild(e?.guild_id)),
        r = (0, d.f)({ guildId: e?.guild_id, location: t });
    return N(e, n) && r;
}
