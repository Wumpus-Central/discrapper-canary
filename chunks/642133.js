n.d(t, { A: () => i });
var l = n(17928),
    E = n(228366);
let u = {},
    _ = {};
class r extends l.Ay.Store {
    static displayName = "GuildRoleMemberCountStore";
    getRoleMemberCount(e) {
        return null != e ? u[e] : null;
    }
    shouldFetch(e) {
        if (null == e) return !1;
        let t = _[e];
        return null == t || Date.now() - t > 12e4;
    }
}
let i = new r(E.h, {
    GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function (e) {
        let { guildId: t, roleMemberCount: n } = e;
        (u[t] = n), (_[t] = Date.now());
    },
    GUILD_ROLE_MEMBER_COUNT_UPDATE: function (e) {
        let { guildId: t, roleId: n, count: l } = e,
            E = u[t];
        if (null == E) return !1;
        E[n] = l;
    },
    GUILD_ROLE_MEMBER_BULK_ADD: function (e) {
        let { guildId: t, roleId: n, added: l } = e,
            E = u[t];
        if (null == E || null == E[n]) return !1;
        let _ = Object.keys(l).length;
        E[n] += _;
    },
    GUILD_ROLE_MEMBER_ADD: function (e) {
        let { guildId: t, roleId: n } = e,
            l = u[t];
        if (null == l || null == l[n]) return !1;
        l[n] = l[n] + 1;
    },
    GUILD_ROLE_MEMBER_REMOVE: function (e) {
        let { guildId: t, roleId: n } = e,
            l = u[t];
        if (null == l || null == l[n]) return !1;
        l[n] = Math.max(l[n] - 1, 0);
    },
    GUILD_ROLE_CREATE: function (e) {
        let { guildId: t, role: n } = e;
        null == u[t] && (u[t] = {}), (u[t][n.id] = 0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete u[t.id], delete _[t.id];
    },
});
