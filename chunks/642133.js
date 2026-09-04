n.d(t, { A: () => i });
var l = n(17928),
    u = n(228366);
let E = {},
    r = {};
class _ extends l.Ay.Store {
    static displayName = "GuildRoleMemberCountStore";
    getRoleMemberCount(e) {
        return null != e ? E[e] : null;
    }
    shouldFetch(e) {
        if (null == e) return !1;
        let t = r[e];
        return null == t || Date.now() - t > 12e4;
    }
}
let i = new _(u.h, {
    GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function (e) {
        let { guildId: t, roleMemberCount: n } = e;
        (E[t] = n), (r[t] = Date.now());
    },
    GUILD_ROLE_MEMBER_COUNT_UPDATE: function (e) {
        let { guildId: t, roleId: n, count: l } = e,
            u = E[t];
        if (null == u) return !1;
        u[n] = l;
    },
    GUILD_ROLE_MEMBER_BULK_ADD: function (e) {
        let { guildId: t, roleId: n, added: l } = e,
            u = E[t];
        if (null == u || null == u[n]) return !1;
        let r = Object.keys(l).length;
        u[n] += r;
    },
    GUILD_ROLE_MEMBER_ADD: function (e) {
        let { guildId: t, roleId: n } = e,
            l = E[t];
        if (null == l || null == l[n]) return !1;
        l[n] = l[n] + 1;
    },
    GUILD_ROLE_MEMBER_REMOVE: function (e) {
        let { guildId: t, roleId: n } = e,
            l = E[t];
        if (null == l || null == l[n]) return !1;
        l[n] = Math.max(l[n] - 1, 0);
    },
    GUILD_ROLE_CREATE: function (e) {
        let { guildId: t, role: n } = e;
        null == E[t] && (E[t] = {}), (E[t][n.id] = 0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete E[t.id], delete r[t.id];
    },
});
