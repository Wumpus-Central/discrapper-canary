var i = n(615606),
    r = n(587895),
    a = n(808728),
    s = n(71393),
    l = n(576705),
    o = n(967198),
    d = n(499466),
    c = n(951178),
    u = n(652215);
let _ = new Set([u.rbe.GUILD_DIRECTORY, u.rbe.GUILD_STORE]);
function E(e) {
    return e?.type === u.rbe.GUILD_APP ? (e.application_id ?? null) : null;
}
function A(e, t) {
    return (0, d.L0)({ guildId: e.id, location: t });
}
function h(e, t) {
    return e?.type === u.rbe.GUILD_APP && t?.conjureProjectId != null;
}
n.d(
    t,
    {},
    {
        Lp: function (e, t) {
            let n = "voice" === t ? [] : e[a.I],
                i = "text" === t ? [] : e.VOCAL;
            return [...n, ...i]
                .map((e) => {
                    let { channel: t } = e;
                    return t;
                })
                .filter((e) => !_.has(e.type));
        },
        N: function (e, t) {
            return A(e, t);
        },
        Ot: function (e, t) {
            return (
                null != e &&
                (e.guild_id === t || e.preview_guild_id === t || (null == e.guild_id && null == e.preview_guild_id))
            );
        },
        Q9: function (e, t) {
            return (0, d.m0)({ guildId: e.id, location: t });
        },
        Ux: function (e, t) {
            return null == e || "guild" !== e.install_scope
                ? null
                : ((t ? e.preview_guild_id : null) ?? e.guild_id ?? null);
        },
        XF: function (e, t) {
            return e.some((e) => A(e, t));
        },
        Xs: function (e, t) {
            let n = E(e);
            return (
                h(e, null != n && r.A.isHydrated(n) ? r.A.getApplication(n) : null) &&
                (0, d.L0)({ guildId: e?.guild_id, location: t })
            );
        },
        dd: A,
        i8: function (e, t) {
            for (let { channel: n } of a.A.getChannels(e)[a.I]) if (E(n) === t) return n.id;
            return null;
        },
        n5: function (e) {
            return { isPublic: (e & c.Zh.PUBLIC) != 0, isGuildCollaboration: (e & c.Zh.GUILD_COLLABORATION) != 0 };
        },
        oX: function (e) {
            var t;
            let n = o.A.getGuildId(),
                i = null == n ? null : s.A.getGuild(n);
            return null != i && A(i, e)
                ? i.id
                : (((t = s.A.getGuildsArray()),
                  t.filter((t) => A(t, e)).sort((e, t) => (e.id < t.id ? -1 : +(e.id > t.id))))[0]?.id ?? null);
        },
        sM: function (e, t) {
            return (
                l.A.can(u.xBc.MANAGE_CHANNELS, e) &&
                l.A.can(u.xBc.MANAGE_GUILD, e) &&
                (0, d.L0)({ guildId: e.id, location: t })
            );
        },
        us: E,
        w$: function (e, t) {
            let n = (0, i.q)(e),
                r = (0, d.m0)({ guildId: e?.guild_id, location: t });
            return h(e, n) && r;
        },
    },
);
