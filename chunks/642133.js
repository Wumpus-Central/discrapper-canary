"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let s = {},
    a = {};
class o extends r.Ay.Store {
    static displayName = "GuildRoleMemberCountStore";
    getRoleMemberCount(e) {
        return null != e ? s[e] : null;
    }
    shouldFetch(e) {
        if (null == e) return !1;
        let t = a[e];
        return null == t || Date.now() - t > 12e4;
    }
}
let l = new o(i.h, {
    GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function (e) {
        let { guildId: t, roleMemberCount: n } = e;
        (s[t] = n), (a[t] = Date.now());
    },
    GUILD_ROLE_MEMBER_COUNT_UPDATE: function (e) {
        let { guildId: t, roleId: n, count: r } = e,
            i = s[t];
        if (null == i) return !1;
        i[n] = r;
    },
    GUILD_ROLE_MEMBER_BULK_ADD: function (e) {
        let { guildId: t, roleId: n, added: r } = e,
            i = s[t];
        if (null == i || null == i[n]) return !1;
        let a = Object.keys(r).length;
        i[n] += a;
    },
    GUILD_ROLE_MEMBER_ADD: function (e) {
        let { guildId: t, roleId: n } = e,
            r = s[t];
        if (null == r || null == r[n]) return !1;
        r[n] = r[n] + 1;
    },
    GUILD_ROLE_MEMBER_REMOVE: function (e) {
        let { guildId: t, roleId: n } = e,
            r = s[t];
        if (null == r || null == r[n]) return !1;
        r[n] = Math.max(r[n] - 1, 0);
    },
    GUILD_ROLE_CREATE: function (e) {
        let { guildId: t, role: n } = e;
        null == s[t] && (s[t] = {}), (s[t][n.id] = 0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        delete s[t.id], delete a[t.id];
    },
});
