"use strict";
n.d(t, { B9: () => A, Bp: () => m, QI: () => I, gh: () => f, kg: () => T, pi: () => h });
var i = n(17928),
    r = n(587895),
    a = n(71393),
    s = n(576705),
    l = n(948230),
    o = n(906786),
    d = n(972786),
    c = n(148555),
    u = n(652215);
let _ = "vibegrations_application_id=",
    E = /^\d{17,20}$/;
function A(e) {
    if (null == e || !e.startsWith(_)) return null;
    let t = e.slice(_.length);
    return E.test(t) ? t : null;
}
function h(e, t) {
    return (
        (0, o.i)({ guildId: e.id, location: t }) &&
        s.A.can(u.xBc.MANAGE_CHANNELS, e) &&
        s.A.can(u.xBc.MANAGE_GUILD, e) &&
        !e.features.has(u.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function I(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.can(u.xBc.MANAGE_CHANNELS, e) && s.A.can(u.xBc.MANAGE_GUILD, e), [e]),
        r = (0, o.f)({ guildId: e.id, location: t }),
        a = e.features.has(u.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return r && n && !a;
}
async function f(e) {
    let t = d.A.getProject(e),
        n = t?.preview_guild_id,
        i = await (0, l.ti)(e);
    if (!i.ok) return;
    let { application: a, bot_permissions_changed: s, integration_installed: o, project: u } = i.body,
        _ = u.preview_application_id;
    if (null == n || null == _ || (o && !s)) return;
    let E = r.A.getApplication(_);
    null != E && (await c.A.openVibegrationsAppInstallModal({ applicationId: a.id, application: E, guildId: n }));
}
function p(e, t) {
    return (
        null != e &&
        e.type === u.rbe.GUILD_TEXT &&
        null != A(e.topic) &&
        !t?.features.has(u.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function T(e, t) {
    return p(e, a.A.getGuild(e?.guild_id)) && (0, o.i)({ guildId: e?.guild_id, location: t });
}
function m(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.getGuild(e?.guild_id)),
        r = (0, o.f)({ guildId: e?.guild_id, location: t });
    return p(e, n) && r;
}
