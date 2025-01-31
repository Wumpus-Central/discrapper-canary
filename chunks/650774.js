n.d(t, { Z: () => g });
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = {},
    l = {};
function u(e) {
    let { guilds: t } = e;
    (o = {}),
        t.forEach((e) => {
            o[e.id] = e.member_count;
        });
}
function c(e) {
    o = { ...e.guildMemberCounts };
}
function d(e) {
    let { guild: t } = e;
    o[t.id] = t.member_count;
}
function f(e) {
    let { guild: t } = e;
    if (null == o[t.id] && null == l[t.id]) return !1;
    delete o[t.id], delete l[t.id];
}
function _(e) {
    let { guildId: t, memberCount: n, onlineCount: i } = e,
        r = !1;
    return o[t] !== n && ((o[t] = n), (r = !0)), l[t] !== i && ((l[t] = i), (r = !0)), r;
}
function p(e) {
    let { invite: t } = e,
        { guild: n, approximate_presence_count: i } = t;
    if ((null == n ? void 0 : n.id) == null || null == i) return !1;
    l[n.id] = i;
}
function h(e) {
    let { guildId: t, count: n } = e;
    if (null == t || null == n) return !1;
    l[t] = n;
}
class m extends (i = r.ZP.Store) {
    getMemberCounts() {
        return o;
    }
    getMemberCount(e) {
        return null != e ? o[e] : null;
    }
    getOnlineCount(e) {
        return null != e ? l[e] : null;
    }
}
s(m, 'displayName', 'GuildMemberCountStore');
let g = new m(a.Z, {
    CONNECTION_OPEN: u,
    OVERLAY_INITIALIZE: c,
    GUILD_CREATE: d,
    GUILD_DELETE: f,
    GUILD_MEMBER_LIST_UPDATE: _,
    INVITE_ACCEPT_SUCCESS: p,
    INVITE_RESOLVE_SUCCESS: p,
    ONLINE_GUILD_MEMBER_COUNT_UPDATE: h
});
