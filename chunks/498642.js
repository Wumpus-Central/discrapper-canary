"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153);
let a = {},
    s = {};
function o(e) {
    let { guilds: t } = e;
    (a = {}),
        t.forEach((e) => {
            a[e.id] = e.member_count;
        });
}
function l(e) {
    a = { ...e.guildMemberCounts };
}
function u(e) {
    let { guild: t } = e;
    a[t.id] = t.member_count;
}
function c(e) {
    let { guild: t } = e;
    if (null == a[t.id] && null == s[t.id]) return !1;
    delete a[t.id], delete s[t.id];
}
function d(e) {
    let { guildId: t, memberCount: n, onlineCount: r } = e,
        i = !1;
    return a[t] !== n && ((a[t] = n), (i = !0)), s[t] !== r && ((s[t] = r), (i = !0)), i;
}
function _(e) {
    let { invite: t } = e,
        { guild: n, approximate_presence_count: r } = t;
    if (n?.id == null || null == r) return !1;
    s[n.id] = r;
}
function f(e) {
    let { guildId: t, count: n } = e;
    if (null == t || null == n) return !1;
    s[t] = n;
}
class p extends r.Ay.Store {
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
let h = new p(i.h, {
    CONNECTION_OPEN: o,
    OVERLAY_INITIALIZE: l,
    GUILD_CREATE: u,
    GUILD_DELETE: c,
    GUILD_MEMBER_LIST_UPDATE: d,
    INVITE_ACCEPT_SUCCESS: _,
    INVITE_RESOLVE_SUCCESS: _,
    ONLINE_GUILD_MEMBER_COUNT_UPDATE: f,
});
