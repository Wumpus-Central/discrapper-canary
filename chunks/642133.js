"use strict";
n.d(t, { A: () => o });
var l = n(17928),
    i = n(228366);
let s = {},
    r = {};
class a extends l.Ay.Store {
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
let o = new a(i.h, {
    GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function (e) {
        let { guildId: t, roleMemberCount: n } = e;
        (s[t] = n), (r[t] = Date.now());
    },
    GUILD_ROLE_MEMBER_COUNT_UPDATE: function (e) {
        let { guildId: t, roleId: n, count: l } = e,
            i = s[t];
        if (null == i) return !1;
        i[n] = l;
    },
    GUILD_ROLE_MEMBER_BULK_ADD: function (e) {
        let { guildId: t, roleId: n, added: l } = e,
            i = s[t];
        if (null == i || null == i[n]) return !1;
        let r = Object.keys(l).length;
        i[n] += r;
    },
    GUILD_ROLE_MEMBER_ADD: function (e) {
        let { guildId: t, roleId: n } = e,
            l = s[t];
        if (null == l || null == l[n]) return !1;
        l[n] = l[n] + 1;
    },
    GUILD_ROLE_MEMBER_REMOVE: function (e) {
        let { guildId: t, roleId: n } = e,
            l = s[t];
        if (null == l || null == l[n]) return !1;
        l[n] = Math.max(l[n] - 1, 0);
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
