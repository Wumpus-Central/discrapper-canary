n.d(t, { Z: () => E });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
let s = 120000,
    l = {},
    c = {};
function u(e) {
    let { guildId: t, roleMemberCount: n } = e;
    (l[t] = n), (c[t] = Date.now());
}
function d(e) {
    let { guildId: t, roleId: n, count: r } = e,
        i = l[t];
    if (null == i) return !1;
    i[n] = r;
}
function f(e) {
    let { guildId: t, roleId: n, added: r } = e,
        i = l[t];
    if (null == i || null == i[n]) return !1;
    let o = Object.keys(r).length;
    i[n] += o;
}
function _(e) {
    let { guildId: t, roleId: n } = e,
        r = l[t];
    if (null == r || null == r[n]) return !1;
    r[n] = r[n] + 1;
}
function p(e) {
    let { guildId: t, roleId: n } = e,
        r = l[t];
    if (null == r || null == r[n]) return !1;
    r[n] = Math.max(r[n] - 1, 0);
}
function h(e) {
    let { guildId: t, role: n } = e;
    null == l[t] && (l[t] = {}), (l[t][n.id] = 0);
}
function m(e) {
    let { guild: t } = e;
    delete l[t.id], delete c[t.id];
}
class g extends (r = i.ZP.Store) {
    getRoleMemberCount(e) {
        return null != e ? l[e] : null;
    }
    shouldFetch(e) {
        if (null == e) return !1;
        let t = c[e];
        return null == t || Date.now() - t > s;
    }
}
a(g, 'displayName', 'GuildRoleMemberCountStore');
let E = new g(o.Z, {
    GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: u,
    GUILD_ROLE_MEMBER_COUNT_UPDATE: d,
    GUILD_ROLE_MEMBER_BULK_ADD: f,
    GUILD_ROLE_MEMBER_ADD: _,
    GUILD_ROLE_MEMBER_REMOVE: p,
    GUILD_ROLE_CREATE: h,
    GUILD_DELETE: m
});
