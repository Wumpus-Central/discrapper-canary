"use strict";
n.d(t, { B9: () => g, gh: () => R, pi: () => S, kg: () => y, QI: () => N, Bp: () => D });
var i = n(485845),
    r = n(136722),
    a = n(17928),
    s = n(803306),
    l = n(627363),
    o = n(587895),
    d = n(321191),
    c = n(71393),
    u = n(576705),
    _ = n(948230),
    E = n(906786),
    A = n(972786),
    h = n(179771);
let I = [h.F.BOT, h.F.APPLICATIONS_COMMANDS],
    f = async function (e) {
        let { applicationId: t, application: a, guildId: s, onClose: l } = e,
            o = a?.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? a?.installParams,
            [{ openOAuth2Modal: d }, { fetchProfile: c }] = await Promise.all([
                Promise.resolve().then(n.bind(n, 887909)),
                Promise.resolve().then(n.bind(n, 803306)),
            ]);
        d(
            {
                clientId: t,
                guildId: s,
                disableGuildSelect: !0,
                integrationType: i.b.GUILD_INSTALL,
                scopes: o?.scopes ?? I,
                permissions: o?.permissions != null ? r.iu(o.permissions) : void 0,
            },
            () => {
                l?.(), c(t, { withMutualGuilds: !0 });
            },
        );
    };
var p = n(652215);
let T = "vibegrations_application_id=",
    m = /^\d{17,20}$/;
function g(e) {
    if (null == e || !e.startsWith(T)) return null;
    let t = e.slice(T.length);
    return m.test(t) ? t : null;
}
function S(e, t) {
    return (
        (0, E.i)({ guildId: e.id, location: t }) &&
        u.A.can(p.xBc.MANAGE_CHANNELS, e) &&
        u.A.can(p.xBc.MANAGE_GUILD, e) &&
        !e.features.has(p.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function N(e, t) {
    let n = (0, a.bG)([u.A], () => u.A.can(p.xBc.MANAGE_CHANNELS, e) && u.A.can(p.xBc.MANAGE_GUILD, e), [e]),
        i = (0, E.f)({ guildId: e.id, location: t }),
        r = e.features.has(p.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return i && n && !r;
}
function C(e) {
    let t = e.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? e.installParams;
    return t?.permissions != null ? r.iu(t.permissions) : r.BY;
}
async function O(e, t) {
    try {
        await (0, s.fetchProfile)(e, { withMutualGuilds: !0 });
    } catch {
        return !1;
    }
    return (
        d.A.getMutualGuilds(e)?.some((e) => {
            let { guild: n } = e;
            return n.id === t;
        }) ?? !1
    );
}
async function R(e) {
    let t = A.A.getProject(e),
        n = t?.preview_guild_id,
        i = t?.preview_application_id ?? null,
        a = null;
    if (null != i) {
        if (null == o.A.getApplication(i) || !o.A.isHydrated(i))
            try {
                await l.Ay.fetchApplication(i);
            } catch {}
        let e = o.A.getApplication(i);
        null != e && (a = C(e));
    }
    let s = await (0, _.ti)(e);
    if (!s.ok) return;
    let d = s.body.preview_application_id;
    if (null == n || null == d) return;
    let c = o.A.getApplication(d);
    if (null == c) return;
    let u = r.aI(a ?? r.BY, C(c));
    ((await O(d, n)) && u) || (await f({ applicationId: d, application: c, guildId: n }));
}
function L(e, t) {
    return (
        null != e &&
        e.type === p.rbe.GUILD_TEXT &&
        null != g(e.topic) &&
        !t?.features.has(p.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)
    );
}
function y(e, t) {
    return L(e, c.A.getGuild(e?.guild_id)) && (0, E.i)({ guildId: e?.guild_id, location: t });
}
function D(e, t) {
    let n = (0, a.bG)([c.A], () => c.A.getGuild(e?.guild_id)),
        i = (0, E.f)({ guildId: e?.guild_id, location: t });
    return L(e, n) && i;
}
