"use strict";
n.d(t, { B9: () => h, Bp: () => S, QI: () => p, SH: () => I, gh: () => T, kg: () => g, pi: () => f });
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
    for (let { channel: n } of a.Ay.getChannels(e)[a.I6].filter((e) => {
        let { channel: t } = e;
        return t.type === _.rbe.GUILD_TEXT;
    }))
        if (h(n.topic) === t) return n.id;
    return null;
}
function f(e, t) {
    return (
        (0, d.i)({ guildId: e.id, location: t }) &&
        l.A.can(_.xBc.MANAGE_CHANNELS, e) &&
        l.A.can(_.xBc.MANAGE_GUILD, e) &&
        !e.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function p(e, t) {
    let n = (0, i.bG)([l.A], () => l.A.can(_.xBc.MANAGE_CHANNELS, e) && l.A.can(_.xBc.MANAGE_GUILD, e), [e]),
        r = (0, d.f)({ guildId: e.id, location: t }),
        a = e.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return r && n && !a;
}
async function T(e) {
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
function m(e, t) {
    return (
        null != e &&
        e.type === _.rbe.GUILD_TEXT &&
        null != h(e.topic) &&
        !t?.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function g(e, t) {
    return m(e, s.A.getGuild(e?.guild_id)) && (0, d.i)({ guildId: e?.guild_id, location: t });
}
function S(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getGuild(e?.guild_id)),
        r = (0, d.f)({ guildId: e?.guild_id, location: t });
    return m(e, n) && r;
}
