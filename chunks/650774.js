var i,
    a = r(442837),
    o = r(570140);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = {},
    u = {};
function c(e) {
    let { guilds: n } = e;
    (l = {}),
        n.forEach((e) => {
            l[e.id] = e.member_count;
        });
}
function d(e) {
    l = { ...e.guildMemberCounts };
}
function f(e) {
    let { guild: n } = e;
    l[n.id] = n.member_count;
}
function p(e) {
    let { guild: n } = e;
    if (null == l[n.id] && null == u[n.id]) return !1;
    delete l[n.id], delete u[n.id];
}
function h(e) {
    let { guildId: n, memberCount: r, onlineCount: i } = e,
        a = !1;
    return l[n] !== r && ((l[n] = r), (a = !0)), u[n] !== i && ((u[n] = i), (a = !0)), a;
}
function _(e) {
    let { invite: n } = e,
        { guild: r, approximate_presence_count: i } = n;
    if ((null == r ? void 0 : r.id) == null || null == i) return !1;
    u[r.id] = i;
}
function m(e) {
    let { guildId: n, count: r } = e;
    if (null == n || null == r) return !1;
    u[n] = r;
}
class g extends (i = a.ZP.Store) {
    getMemberCounts() {
        return l;
    }
    getMemberCount(e) {
        return null != e ? l[e] : null;
    }
    getOnlineCount(e) {
        return null != e ? u[e] : null;
    }
}
s(g, 'displayName', 'GuildMemberCountStore'),
    (n.Z = new g(o.Z, {
        CONNECTION_OPEN: c,
        OVERLAY_INITIALIZE: d,
        GUILD_CREATE: f,
        GUILD_DELETE: p,
        GUILD_MEMBER_LIST_UPDATE: h,
        INVITE_ACCEPT_SUCCESS: _,
        INVITE_RESOLVE_SUCCESS: _,
        ONLINE_GUILD_MEMBER_COUNT_UPDATE: m
    }));
