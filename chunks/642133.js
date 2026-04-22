"use strict";
n.d(t, { A: () => o });
var i = n(311907),
    l = n(73153);
let s = {},
    r = {};
class a extends i.Ay.Store {
    static displayName = "GuildRoleMemberCountStore";
    getRoleMemberCount(e) {
        return null != e ? s[e] : null;
    }
    shouldFetch(e) {
        if (null == e) return !1;
        let t = r[e];
        return null == t || Date.now() - t > 12e4;
    }
}
let o = new a(l.h, {
    GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function (e) {
        let { guildId: t, roleMemberCount: n } = e;
        (s[t] = n), (r[t] = Date.now());
    },
    GUILD_ROLE_MEMBER_COUNT_UPDATE: function (e) {
        let { guildId: t, roleId: n, count: i } = e,
            l = s[t];
        if (null == l) return !1;
        l[n] = i;
    },
    GUILD_ROLE_MEMBER_BULK_ADD: function (e) {
        let { guildId: t, roleId: n, added: i } = e,
            l = s[t];
        if (null == l || null == l[n]) return !1;
        let r = Object.keys(i).length;
        l[n] += r;
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
        delete s[t.id], delete r[t.id];
    },
});
