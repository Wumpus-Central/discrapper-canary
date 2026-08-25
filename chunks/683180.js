"use strict";
n.d(t, {
    $X: () => f,
    B9: () => _,
    Bp: () => S,
    QI: () => T,
    RZ: () => I,
    SH: () => A,
    X0: () => E,
    kg: () => g,
    pi: () => p,
});
var i = n(17928),
    r = n(808728),
    a = n(71393),
    s = n(576705),
    l = n(967198),
    o = n(906786),
    d = n(652215);
let c = "vibegrations_application_id=",
    u = /^\d{17,20}$/;
function _(e) {
    if (null == e || !e.startsWith(c)) return null;
    let t = e.slice(c.length);
    return u.test(t) ? t : null;
}
function E(e, t) {
    return (
        null != e &&
        (e.guild_id === t || e.preview_guild_id === t || (null == e.guild_id && null == e.preview_guild_id))
    );
}
function A(e, t) {
    for (let { channel: n } of r.Ay.getChannels(e)[r.I6].filter((e) => {
        let { channel: t } = e;
        return t.type === d.rbe.GUILD_TEXT;
    }))
        if (_(n.topic) === t) return n.id;
    return null;
}
function h(e, t) {
    return (0, o.i)({ guildId: e.id, location: t }) && !e.features.has(d.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
}
function I(e, t) {
    return e.filter((e) => h(e, t)).sort((e, t) => (e.id < t.id ? -1 : +(e.id > t.id)));
}
function f(e) {
    let t = l.A.getGuildId(),
        n = null == t ? null : a.A.getGuild(t);
    return null != n && h(n, e) ? n.id : (I(a.A.getGuildsArray(), e)[0]?.id ?? null);
}
function p(e, t) {
    return (
        (0, o.i)({ guildId: e.id, location: t }) &&
        s.A.can(d.xBc.MANAGE_CHANNELS, e) &&
        s.A.can(d.xBc.MANAGE_GUILD, e) &&
        !e.features.has(d.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function T(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.can(d.xBc.MANAGE_CHANNELS, e) && s.A.can(d.xBc.MANAGE_GUILD, e), [e]),
        r = (0, o.f)({ guildId: e.id, location: t }),
        a = e.features.has(d.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return r && n && !a;
}
function m(e, t) {
    return (
        null != e &&
        e.type === d.rbe.GUILD_TEXT &&
        null != _(e.topic) &&
        !t?.features.has(d.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function g(e, t) {
    return m(e, a.A.getGuild(e?.guild_id)) && (0, o.i)({ guildId: e?.guild_id, location: t });
}
function S(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.getGuild(e?.guild_id)),
        r = (0, o.f)({ guildId: e?.guild_id, location: t });
    return m(e, n) && r;
}
