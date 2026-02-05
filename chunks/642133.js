"use strict";
n.d(t, { A: () => m });
var r = n(311907),
    i = n(73153);
let a = 12e4,
    s = {},
    o = {};
function l(e) {
    let { guildId: t, roleMemberCount: n } = e;
    (s[t] = n), (o[t] = Date.now());
}
function u(e) {
    let { guildId: t, roleId: n, count: r } = e,
        i = s[t];
    if (null == i) return !1;
    i[n] = r;
}
function c(e) {
    let { guildId: t, roleId: n, added: r } = e,
        i = s[t];
    if (null == i || null == i[n]) return !1;
    let a = Object.keys(r).length;
    i[n] += a;
}
function d(e) {
    let { guildId: t, roleId: n } = e,
        r = s[t];
    if (null == r || null == r[n]) return !1;
    r[n] = r[n] + 1;
}
function _(e) {
    let { guildId: t, roleId: n } = e,
        r = s[t];
    if (null == r || null == r[n]) return !1;
    r[n] = Math.max(r[n] - 1, 0);
}
function f(e) {
    let { guildId: t, role: n } = e;
    null == s[t] && (s[t] = {}), (s[t][n.id] = 0);
}
function p(e) {
    let { guild: t } = e;
    delete s[t.id], delete o[t.id];
}
class h extends r.Ay.Store {
    static displayName = "GuildRoleMemberCountStore";
    getRoleMemberCount(e) {
        return null != e ? s[e] : null;
    }
    shouldFetch(e) {
        if (null == e) return !1;
        let t = o[e];
        return null == t || Date.now() - t > a;
    }
}
let m = new h(i.h, {
    GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: l,
    GUILD_ROLE_MEMBER_COUNT_UPDATE: u,
    GUILD_ROLE_MEMBER_BULK_ADD: c,
    GUILD_ROLE_MEMBER_ADD: d,
    GUILD_ROLE_MEMBER_REMOVE: _,
    GUILD_ROLE_CREATE: f,
    GUILD_DELETE: p,
});
