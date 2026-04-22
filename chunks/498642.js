"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153);
let s = {},
    a = {};
function o(e) {
    let { invite: t } = e,
        { guild: n, approximate_presence_count: r } = t;
    if (n?.id == null || null == r) return !1;
    a[n.id] = r;
}
class l extends r.Ay.Store {
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
let u = new l(i.h, {
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
        let { guildId: t, memberCount: n, onlineCount: r } = e,
            i = !1;
        return s[t] !== n && ((s[t] = n), (i = !0)), a[t] !== r && ((a[t] = r), (i = !0)), i;
    },
    INVITE_ACCEPT_SUCCESS: o,
    INVITE_RESOLVE_SUCCESS: o,
    ONLINE_GUILD_MEMBER_COUNT_UPDATE: function (e) {
        let { guildId: t, count: n } = e;
        if (null == t || null == n) return !1;
        a[t] = n;
    },
});
