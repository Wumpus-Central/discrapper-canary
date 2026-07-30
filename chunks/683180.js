"use strict";
n.d(t, { B9: () => h, Bp: () => N, QI: () => T, SH: () => f, X0: () => I, gh: () => m, kg: () => S, pi: () => p });
var i = n(17928),
    r = n(587895),
    a = n(808728),
    s = n(71393),
    l = n(576705),
    o = n(948230),
    d = n(906786),
    c = n(972786),
    u = n(148555),
    _ = n(652215);
let E = "vibegrations_application_id=",
    A = /^\d{17,20}$/;
function h(e) {
    if (null == e || !e.startsWith(E)) return null;
    let t = e.slice(E.length);
    return A.test(t) ? t : null;
}
function I(e, t) {
    return (
        null != e &&
        (e.guild_id === t || e.preview_guild_id === t || (null == e.guild_id && null == e.preview_guild_id))
    );
}
function f(e, t) {
    for (let { channel: n } of a.Ay.getChannels(e)[a.I6].filter((e) => {
        let { channel: t } = e;
        return t.type === _.rbe.GUILD_TEXT;
    }))
        if (h(n.topic) === t) return n.id;
    return null;
}
function p(e, t) {
    return (
        (0, d.i)({ guildId: e.id, location: t }) &&
        l.A.can(_.xBc.MANAGE_CHANNELS, e) &&
        l.A.can(_.xBc.MANAGE_GUILD, e) &&
        !e.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function T(e, t) {
    let n = (0, i.bG)([l.A], () => l.A.can(_.xBc.MANAGE_CHANNELS, e) && l.A.can(_.xBc.MANAGE_GUILD, e), [e]),
        r = (0, d.f)({ guildId: e.id, location: t }),
        a = e.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return r && n && !a;
}
async function m(e) {
    let { countAsDeploy: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = c.A.getProject(e),
        i = n?.preview_guild_id,
        a = await (0, o.ti)(e, { countAsDeploy: t });
    if (!a.ok) return;
    let { application: s, bot_permissions_changed: l, integration_installed: d, project: _ } = a.body,
        E = _.preview_application_id;
    if (null == i || null == E || (d && !l)) return;
    let A = r.A.getApplication(E);
    null != A && (await u.A.openVibegrationsAppInstallModal({ applicationId: s.id, application: A, guildId: i }));
}
function g(e, t) {
    return (
        null != e &&
        e.type === _.rbe.GUILD_TEXT &&
        null != h(e.topic) &&
        !t?.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function S(e, t) {
    return g(e, s.A.getGuild(e?.guild_id)) && (0, d.i)({ guildId: e?.guild_id, location: t });
}
function N(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getGuild(e?.guild_id)),
        r = (0, d.f)({ guildId: e?.guild_id, location: t });
    return g(e, n) && r;
}
