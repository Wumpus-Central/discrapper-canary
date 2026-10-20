n.d(t, {
    Lp: () => A,
    N: () => S,
    Ot: () => I,
    Q9: () => C,
    Qv: () => m,
    Ux: () => _,
    Xs: () => R,
    dd: () => T,
    i8: () => p,
    n5: () => h,
    oX: () => g,
    sM: () => N,
    us: () => f,
    w$: () => L,
});
var i = n(615606),
    r = n(587895),
    a = n(808728),
    s = n(71393),
    l = n(576705),
    o = n(967198),
    d = n(793480),
    c = n(951178),
    u = n(652215);
function _(e, t) {
    return null == e || "user" === e.install_scope ? null : ((t ? e.preview_guild_id : null) ?? e.guild_id ?? null);
}
let E = new Set([u.rbe.GUILD_DIRECTORY, u.rbe.GUILD_STORE]);
function A(e, t) {
    return [...("voice" === t ? [] : e[a.I6]), ...("text" === t ? [] : e[a.vM])]
        .map((e) => {
            let { channel: t } = e;
            return t;
        })
        .filter((e) => !E.has(e.type));
}
function h(e) {
    return { isPublic: (e & c.Zh.PUBLIC) != 0, isGuildCollaboration: (e & c.Zh.GUILD_COLLABORATION) != 0 };
}
function f(e) {
    return e?.type === u.rbe.GUILD_APP ? (e.application_id ?? null) : null;
}
function I(e, t) {
    return (
        null != e &&
        (e.guild_id === t || e.preview_guild_id === t || (null == e.guild_id && null == e.preview_guild_id))
    );
}
function p(e, t) {
    for (let { channel: n } of a.Ay.getChannels(e)[a.I6]) if (f(n) === t) return n.id;
    return null;
}
function T(e, t) {
    return (0, d.L0)({ guildId: e.id, location: t });
}
function m(e, t) {
    return e.filter((e) => T(e, t)).sort((e, t) => (e.id < t.id ? -1 : +(e.id > t.id)));
}
function g(e) {
    let t = o.A.getGuildId(),
        n = null == t ? null : s.A.getGuild(t);
    return null != n && T(n, e) ? n.id : (m(s.A.getGuildsArray(), e)[0]?.id ?? null);
}
function S(e, t) {
    return T(e, t);
}
function N(e, t) {
    return (
        l.A.can(u.xBc.MANAGE_CHANNELS, e) && l.A.can(u.xBc.MANAGE_GUILD, e) && (0, d.L0)({ guildId: e.id, location: t })
    );
}
function C(e, t) {
    return (0, d.m0)({ guildId: e.id, location: t });
}
function O(e, t) {
    return e?.type === u.rbe.GUILD_APP && t?.conjureProjectId != null;
}
function R(e, t) {
    let n = f(e);
    return (
        O(e, null != n && r.A.isHydrated(n) ? r.A.getApplication(n) : null) &&
        (0, d.L0)({ guildId: e?.guild_id, location: t })
    );
}
function L(e, t) {
    let n = (0, i.q)(e),
        r = (0, d.m0)({ guildId: e?.guild_id, location: t });
    return O(e, n) && r;
}
