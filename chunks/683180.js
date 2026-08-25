"use strict";
n.d(t, { B9: () => u, Bp: () => T, QI: () => I, RZ: () => A, SH: () => E, X0: () => _, kg: () => p, pi: () => h });
var i = n(17928),
    r = n(808728),
    a = n(71393),
    s = n(576705);
n(967198);
var l = n(906786),
    o = n(652215);
let d = "vibegrations_application_id=",
    c = /^\d{17,20}$/;
function u(e) {
    if (null == e || !e.startsWith(d)) return null;
    let t = e.slice(d.length);
    return c.test(t) ? t : null;
}
function _(e, t) {
    return (
        null != e &&
        (e.guild_id === t || e.preview_guild_id === t || (null == e.guild_id && null == e.preview_guild_id))
    );
}
function E(e, t) {
    for (let { channel: n } of r.Ay.getChannels(e)[r.I6].filter((e) => {
        let { channel: t } = e;
        return t.type === o.rbe.GUILD_TEXT;
    }))
        if (u(n.topic) === t) return n.id;
    return null;
}
function A(e, t) {
    return e
        .filter(
            (e) => (0, l.i)({ guildId: e.id, location: t }) && !e.features.has(o.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
        )
        .sort((e, t) => (e.id < t.id ? -1 : +(e.id > t.id)));
}
function h(e, t) {
    return (
        (0, l.i)({ guildId: e.id, location: t }) &&
        s.A.can(o.xBc.MANAGE_CHANNELS, e) &&
        s.A.can(o.xBc.MANAGE_GUILD, e) &&
        !e.features.has(o.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function I(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.can(o.xBc.MANAGE_CHANNELS, e) && s.A.can(o.xBc.MANAGE_GUILD, e), [e]),
        r = (0, l.f)({ guildId: e.id, location: t }),
        a = e.features.has(o.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return r && n && !a;
}
function f(e, t) {
    return (
        null != e &&
        e.type === o.rbe.GUILD_TEXT &&
        null != u(e.topic) &&
        !t?.features.has(o.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function p(e, t) {
    return f(e, a.A.getGuild(e?.guild_id)) && (0, l.i)({ guildId: e?.guild_id, location: t });
}
function T(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.getGuild(e?.guild_id)),
        r = (0, l.f)({ guildId: e?.guild_id, location: t });
    return f(e, n) && r;
}
