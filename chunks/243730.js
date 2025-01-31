n.d(t, { Z: () => E });
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
let o = 120000,
    l = {},
    u = {};
function c(e) {
    let { guildId: t, roleMemberCount: n } = e;
    (l[t] = n), (u[t] = Date.now());
}
function d(e) {
    let { guildId: t, roleId: n, count: i } = e,
        r = l[t];
    if (null == r) return !1;
    r[n] = i;
}
function f(e) {
    let { guildId: t, roleId: n, added: i } = e,
        r = l[t];
    if (null == r || null == r[n]) return !1;
    let a = Object.keys(i).length;
    r[n] += a;
}
function _(e) {
    let { guildId: t, roleId: n } = e,
        i = l[t];
    if (null == i || null == i[n]) return !1;
    i[n] = i[n] + 1;
}
function p(e) {
    let { guildId: t, roleId: n } = e,
        i = l[t];
    if (null == i || null == i[n]) return !1;
    i[n] = Math.max(i[n] - 1, 0);
}
function h(e) {
    let { guildId: t, role: n } = e;
    null == l[t] && (l[t] = {}), (l[t][n.id] = 0);
}
function m(e) {
    let { guild: t } = e;
    delete l[t.id], delete u[t.id];
}
class g extends (i = r.ZP.Store) {
    getRoleMemberCount(e) {
        return null != e ? l[e] : null;
    }
    shouldFetch(e) {
        if (null == e) return !1;
        let t = u[e];
        return null == t || Date.now() - t > o;
    }
}
s(g, 'displayName', 'GuildRoleMemberCountStore');
let E = new g(a.Z, {
    GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: c,
    GUILD_ROLE_MEMBER_COUNT_UPDATE: d,
    GUILD_ROLE_MEMBER_BULK_ADD: f,
    GUILD_ROLE_MEMBER_ADD: _,
    GUILD_ROLE_MEMBER_REMOVE: p,
    GUILD_ROLE_CREATE: h,
    GUILD_DELETE: m
});
