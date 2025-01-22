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
let l = 120000,
    u = {},
    c = {};
function d(e) {
    let { guildId: n, roleMemberCount: r } = e;
    (u[n] = r), (c[n] = Date.now());
}
function f(e) {
    let { guildId: n, roleId: r, count: i } = e,
        a = u[n];
    if (null == a) return !1;
    a[r] = i;
}
function p(e) {
    let { guildId: n, roleId: r, added: i } = e,
        a = u[n];
    if (null == a || null == a[r]) return !1;
    let o = Object.keys(i).length;
    a[r] += o;
}
function h(e) {
    let { guildId: n, roleId: r } = e,
        i = u[n];
    if (null == i || null == i[r]) return !1;
    i[r] = i[r] + 1;
}
function _(e) {
    let { guildId: n, roleId: r } = e,
        i = u[n];
    if (null == i || null == i[r]) return !1;
    i[r] = Math.max(i[r] - 1, 0);
}
function m(e) {
    let { guildId: n, role: r } = e;
    null == u[n] && (u[n] = {}), (u[n][r.id] = 0);
}
function g(e) {
    let { guild: n } = e;
    delete u[n.id], delete c[n.id];
}
class E extends (i = a.ZP.Store) {
    getRoleMemberCount(e) {
        return null != e ? u[e] : null;
    }
    shouldFetch(e) {
        if (null == e) return !1;
        let n = c[e];
        return null == n || Date.now() - n > l;
    }
}
s(E, 'displayName', 'GuildRoleMemberCountStore'),
    (n.Z = new E(o.Z, {
        GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: d,
        GUILD_ROLE_MEMBER_COUNT_UPDATE: f,
        GUILD_ROLE_MEMBER_BULK_ADD: p,
        GUILD_ROLE_MEMBER_ADD: h,
        GUILD_ROLE_MEMBER_REMOVE: _,
        GUILD_ROLE_CREATE: m,
        GUILD_DELETE: g
    }));
