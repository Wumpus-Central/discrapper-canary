n.d(t, {
    Lp: () => h,
    N: () => N,
    Ot: () => p,
    Q9: () => O,
    Qv: () => g,
    Ux: () => E,
    Xs: () => L,
    dd: () => m,
    i8: () => T,
    n5: () => f,
    oX: () => S,
    sM: () => C,
    us: () => I,
    w$: () => y,
});
var i = n(17928),
    r = n(615606),
    a = n(587895),
    s = n(808728),
    l = n(71393),
    o = n(576705),
    d = n(967198),
    c = n(793480),
    u = n(951178),
    _ = n(652215);
function E(e, t) {
    return null == e || "user" === e.install_scope ? null : ((t ? e.preview_guild_id : null) ?? e.guild_id ?? null);
}
let A = new Set([_.rbe.GUILD_DIRECTORY, _.rbe.GUILD_STORE]);
function h(e, t) {
    return [...("voice" === t ? [] : e[s.I6]), ...("text" === t ? [] : e[s.vM])]
        .map((e) => {
            let { channel: t } = e;
            return t;
        })
        .filter((e) => !A.has(e.type));
}
function f(e) {
    return { isPublic: (e & u.Zh.PUBLIC) != 0, isShared: (e & u.Zh.SHAREABLE) != 0 };
}
function I(e) {
    return e?.type === _.rbe.GUILD_APP ? (e.application_id ?? null) : null;
}
function p(e, t) {
    return (
        null != e &&
        (e.guild_id === t || e.preview_guild_id === t || (null == e.guild_id && null == e.preview_guild_id))
    );
}
function T(e, t) {
    for (let { channel: n } of s.Ay.getChannels(e)[s.I6]) if (I(n) === t) return n.id;
    return null;
}
function m(e, t) {
    return (0, c.L0)({ guildId: e.id, location: t }) && !e.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
}
function g(e, t) {
    return e.filter((e) => m(e, t)).sort((e, t) => (e.id < t.id ? -1 : +(e.id > t.id)));
}
function S(e) {
    let t = d.A.getGuildId(),
        n = null == t ? null : l.A.getGuild(t);
    return null != n && m(n, e) ? n.id : (g(l.A.getGuildsArray(), e)[0]?.id ?? null);
}
function N(e, t) {
    return m(e, t);
}
function C(e, t) {
    return (
        !e.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) &&
        o.A.can(_.xBc.MANAGE_CHANNELS, e) &&
        o.A.can(_.xBc.MANAGE_GUILD, e) &&
        (0, c.L0)({ guildId: e.id, location: t })
    );
}
function O(e, t) {
    let n = (0, c.m0)({ guildId: e.id, location: t }),
        i = e.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
    return n && !i;
}
function R(e, t, n) {
    return (
        e?.type === _.rbe.GUILD_APP &&
        n?.vibegrationsProjectId != null &&
        t?.features.has(_.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) !== !0
    );
}
function L(e, t) {
    let n = I(e),
        i = null != n && a.A.isHydrated(n) ? a.A.getApplication(n) : null;
    return R(e, l.A.getGuild(e?.guild_id), i) && (0, c.L0)({ guildId: e?.guild_id, location: t });
}
function y(e, t) {
    let n = (0, i.bG)([l.A], () => l.A.getGuild(e?.guild_id)),
        a = (0, r.q)(e),
        s = (0, c.m0)({ guildId: e?.guild_id, location: t });
    return R(e, n, a) && s;
}
