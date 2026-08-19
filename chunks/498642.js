"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let a = {},
    s = {};
function l(e) {
    let { invite: t } = e,
        { guild: n, approximate_presence_count: i } = t;
    if (n?.id == null || null == i) return !1;
    s[n.id] = i;
}
class o extends i.Ay.Store {
    static displayName = "GuildMemberCountStore";
    getMemberCounts() {
        return a;
    }
    getMemberCount(e) {
        return null != e ? a[e] : null;
    }
    getOnlineCount(e) {
        return null != e ? s[e] : null;
    }
}
let d = new o(r.h, {
    CONNECTION_OPEN: function (e) {
        let { guilds: t } = e;
        (a = {}),
            t.forEach((e) => {
                a[e.id] = e.member_count;
            });
    },
    OVERLAY_INITIALIZE: function (e) {
        a = { ...e.guildMemberCounts };
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        a[t.id] = t.member_count;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (null == a[t.id] && null == s[t.id]) return !1;
        delete a[t.id], delete s[t.id];
    },
    GUILD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, memberCount: n, onlineCount: i } = e,
            r = !1;
        return a[t] !== n && ((a[t] = n), (r = !0)), s[t] !== i && ((s[t] = i), (r = !0)), r;
    },
    INVITE_ACCEPT_SUCCESS: l,
    INVITE_RESOLVE_SUCCESS: l,
    ONLINE_GUILD_MEMBER_COUNT_UPDATE: function (e) {
        let { guildId: t, count: n } = e;
        if (null == t || null == n) return !1;
        s[t] = n;
    },
});
