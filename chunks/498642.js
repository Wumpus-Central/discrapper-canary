"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let s = {},
    a = {};
function o(e) {
    let { invite: t } = e,
        { guild: n, approximate_presence_count: i } = t;
    if (n?.id == null || null == i) return !1;
    a[n.id] = i;
}
class l extends i.Ay.Store {
    static displayName = "GuildMemberCountStore";
    getMemberCounts() {
        return s;
    }
    getMemberCount(e) {
        return null != e ? s[e] : null;
    }
    getOnlineCount(e) {
        return null != e ? a[e] : null;
    }
}
let d = new l(r.h, {
    CONNECTION_OPEN: function (e) {
        let { guilds: t } = e;
        (s = {}),
            t.forEach((e) => {
                s[e.id] = e.member_count;
            });
    },
    OVERLAY_INITIALIZE: function (e) {
        s = { ...e.guildMemberCounts };
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        s[t.id] = t.member_count;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (null == s[t.id] && null == a[t.id]) return !1;
        delete s[t.id], delete a[t.id];
    },
    GUILD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, memberCount: n, onlineCount: i } = e,
            r = !1;
        return s[t] !== n && ((s[t] = n), (r = !0)), a[t] !== i && ((a[t] = i), (r = !0)), r;
    },
    INVITE_ACCEPT_SUCCESS: o,
    INVITE_RESOLVE_SUCCESS: o,
    ONLINE_GUILD_MEMBER_COUNT_UPDATE: function (e) {
        let { guildId: t, count: n } = e;
        if (null == t || null == n) return !1;
        a[t] = n;
    },
});
