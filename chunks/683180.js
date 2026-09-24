n.d(t, {
    $X: () => g,
    B9: () => I,
    Bp: () => L,
    G2: () => S,
    RZ: () => m,
    SH: () => p,
    X0: () => f,
    by: () => C,
    kT: () => T,
    kg: () => R,
    oA: () => h,
    pG: () => N,
    qx: () => A,
    t7: () => E,
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
function E(e, t) {
    return null == e || "user" === e.install_scope ? null : ((t ? e.preview_guild_id : null) ?? e.guild_id ?? null);
}
function A(e, t) {
    return [...("voice" === t ? [] : e[r.I6]), ...("text" === t ? [] : e[r.vM])].map((e) => {
        let { channel: t } = e;
        return t;
    });
}
function h(e) {
    return { isPublic: (e & o.A2.PUBLIC) != 0, isShared: (e & o.A2.SHAREABLE) != 0 };
}
function I(e) {
    if (null == e || !e.startsWith(u)) return null;
    let t = e.slice(u.length);
    return _.test(t) ? t : null;
}
function f(e, t) {
    return (
        null != e &&
        (e.guild_id === t || e.preview_guild_id === t || (null == e.guild_id && null == e.preview_guild_id))
    );
}
function p(e, t) {
    for (let { channel: n } of r.Ay.getChannels(e)[r.I6].filter((e) => {
        let { channel: t } = e;
        return t.type === c.rbe.GUILD_TEXT;
    }))
        if (I(n.topic) === t) return n.id;
    return null;
}
function T(e, t) {
    return (0, d.ix)({ guildId: e.id, location: t }) && !e.features.has(c.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
}
function m(e, t) {
    return e.filter((e) => T(e, t)).sort((e, t) => (e.id < t.id ? -1 : +(e.id > t.id)));
}
function g(e) {
    let t = l.A.getGuildId(),
        n = null == t ? null : a.A.getGuild(t);
    return null != n && T(n, e) ? n.id : (m(a.A.getGuildsArray(), e)[0]?.id ?? null);
}
function S(e, t) {
    return T(e, t);
}
function N(e, t) {
    return (
        !e.features.has(c.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) &&
        s.A.can(c.xBc.MANAGE_CHANNELS, e) &&
        s.A.can(c.xBc.MANAGE_GUILD, e) &&
        (0, d.ix)({ guildId: e.id, location: t })
    );
}
function C(e, t) {
    let n = (0, d.f)({ guildId: e.id, location: t }),
        i = e.features.has(c.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return n && !i;
}
function O(e, t) {
    return (
        null != e &&
        e.type === c.rbe.GUILD_TEXT &&
        null != I(e.topic) &&
        !t?.features.has(c.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function R(e, t) {
    return O(e, a.A.getGuild(e?.guild_id)) && (0, d.ix)({ guildId: e?.guild_id, location: t });
}
function L(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.getGuild(e?.guild_id)),
        r = (0, d.f)({ guildId: e?.guild_id, location: t });
    return O(e, n) && r;
}
