"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = {},
    a = {};
class o extends i.Ay.Store {
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
let l = new o(r.h, {
    GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function (e) {
        let { guildId: t, roleMemberCount: n } = e;
        (s[t] = n), (a[t] = Date.now());
    },
    GUILD_ROLE_MEMBER_COUNT_UPDATE: function (e) {
        let { guildId: t, roleId: n, count: i } = e,
            r = s[t];
        if (null == r) return !1;
        r[n] = i;
    },
    GUILD_ROLE_MEMBER_BULK_ADD: function (e) {
        let { guildId: t, roleId: n, added: i } = e,
            r = s[t];
        if (null == r || null == r[n]) return !1;
        let a = Object.keys(i).length;
        r[n] += a;
    },
    GUILD_ROLE_MEMBER_ADD: function (e) {
        let { guildId: t, roleId: n } = e,
            i = s[t];
        if (null == i || null == i[n]) return !1;
        i[n] = i[n] + 1;
    },
    GUILD_ROLE_MEMBER_REMOVE: function (e) {
        let { guildId: t, roleId: n } = e,
            i = s[t];
        if (null == i || null == i[n]) return !1;
        i[n] = Math.max(i[n] - 1, 0);
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
