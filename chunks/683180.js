"use strict";
n.d(t, { B9: () => c, Bp: () => h, QI: () => _, kg: () => A, pi: () => u });
var i = n(17928),
    r = n(71393),
    a = n(576705),
    s = n(906786),
    l = n(652215);
let o = "vibegrations_application_id=",
    d = /^\d{17,20}$/;
function c(e) {
    if (null == e || !e.startsWith(o)) return null;
    let t = e.slice(o.length);
    return d.test(t) ? t : null;
}
function u(e, t) {
    return (
        (0, s.i)({ guildId: e.id, location: t }) &&
        a.A.can(l.xBc.MANAGE_CHANNELS, e) &&
        a.A.can(l.xBc.MANAGE_GUILD, e) &&
        !e.features.has(l.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function _(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.can(l.xBc.MANAGE_CHANNELS, e) && a.A.can(l.xBc.MANAGE_GUILD, e), [e]),
        r = (0, s.f)({ guildId: e.id, location: t }),
        o = e.features.has(l.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return r && n && !o;
}
function E(e, t) {
    return (
        null != e &&
        e.type === l.rbe.GUILD_TEXT &&
        null != c(e.topic) &&
        !t?.features.has(l.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function A(e, t) {
    return E(e, r.A.getGuild(e?.guild_id)) && (0, s.i)({ guildId: e?.guild_id, location: t });
}
function h(e, t) {
    let n = (0, i.bG)([r.A], () => r.A.getGuild(e?.guild_id)),
        a = (0, s.f)({ guildId: e?.guild_id, location: t });
    return E(e, n) && a;
}
