"use strict";
n.d(t, { B9: () => p, gh: () => g, pi: () => T, kg: () => N, QI: () => m, Bp: () => C });
var i = n(17928),
    r = n(587895),
    a = n(71393),
    s = n(576705),
    l = n(948230),
    o = n(906786),
    d = n(972786),
    c = n(485845),
    u = n(179771),
    _ = n(136722);
let E = [u.F.BOT, u.F.APPLICATIONS_COMMANDS],
    A = async function (e) {
        let { applicationId: t, application: i, guildId: r, onClose: a } = e,
            s = i?.integrationTypesConfig?.[c.b.GUILD_INSTALL]?.oauth2InstallParams ?? i?.installParams,
            [{ openOAuth2Modal: l }, { fetchProfile: o }] = await Promise.all([
                Promise.resolve().then(n.bind(n, 887909)),
                Promise.resolve().then(n.bind(n, 803306)),
            ]);
        l(
            {
                clientId: t,
                guildId: r,
                disableGuildSelect: !0,
                integrationType: c.b.GUILD_INSTALL,
                scopes: s?.scopes ?? E,
                permissions: s?.permissions != null ? _.iu(s.permissions) : void 0,
            },
            () => {
                a?.(), o(t, { withMutualGuilds: !0 });
            },
        );
    };
var h = n(652215);
let I = "vibegrations_application_id=",
    f = /^\d{17,20}$/;
function p(e) {
    if (null == e || !e.startsWith(I)) return null;
    let t = e.slice(I.length);
    return f.test(t) ? t : null;
}
function T(e, t) {
    return (
        (0, o.i)({ guildId: e.id, location: t }) &&
        s.A.can(h.xBc.MANAGE_CHANNELS, e) &&
        s.A.can(h.xBc.MANAGE_GUILD, e) &&
        !e.features.has(h.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function m(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.can(h.xBc.MANAGE_CHANNELS, e) && s.A.can(h.xBc.MANAGE_GUILD, e), [e]),
        r = (0, o.f)({ guildId: e.id, location: t }),
        a = e.features.has(h.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return r && n && !a;
}
async function g(e) {
    let t = d.A.getProject(e),
        n = t?.preview_guild_id,
        i = await (0, l.ti)(e);
    if (!i.ok) return;
    let { application: a, bot_permissions_changed: s, integration_installed: o, project: c } = i.body,
        u = c.preview_application_id;
    if (null == n || null == u || (o && !s)) return;
    let _ = r.A.getApplication(u);
    null != _ && (await A({ applicationId: a.id, application: _, guildId: n }));
}
function S(e, t) {
    return (
        null != e &&
        e.type === h.rbe.GUILD_TEXT &&
        null != p(e.topic) &&
        !t?.features.has(h.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function N(e, t) {
    return S(e, a.A.getGuild(e?.guild_id)) && (0, o.i)({ guildId: e?.guild_id, location: t });
}
function C(e, t) {
    let n = (0, i.bG)([a.A], () => a.A.getGuild(e?.guild_id)),
        r = (0, o.f)({ guildId: e?.guild_id, location: t });
    return S(e, n) && r;
}
