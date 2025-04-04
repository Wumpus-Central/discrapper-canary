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
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
let l = {},
    c = {};
function u(e) {
    let { guilds: t } = e;
    (l = {}),
        t.forEach((e) => {
            l[e.id] = e.member_count;
        });
}
function d(e) {
    l = s({}, e.guildMemberCounts);
}
function f(e) {
    let { guild: t } = e;
    l[t.id] = t.member_count;
}
function _(e) {
    let { guild: t } = e;
    if (null == l[t.id] && null == c[t.id]) return !1;
    delete l[t.id], delete c[t.id];
}
function p(e) {
    let { guildId: t, memberCount: n, onlineCount: r } = e,
        i = !1;
    return l[t] !== n && ((l[t] = n), (i = !0)), c[t] !== r && ((c[t] = r), (i = !0)), i;
}
function h(e) {
    let { invite: t } = e,
        { guild: n, approximate_presence_count: r } = t;
    if ((null == n ? void 0 : n.id) == null || null == r) return !1;
    c[n.id] = r;
}
function m(e) {
    let { guildId: t, count: n } = e;
    if (null == t || null == n) return !1;
    c[t] = n;
}
class g extends (r = i.ZP.Store) {
    getMemberCounts() {
        return l;
    }
    getMemberCount(e) {
        return null != e ? l[e] : null;
    }
    getOnlineCount(e) {
        return null != e ? c[e] : null;
    }
}
a(g, 'displayName', 'GuildMemberCountStore');
let E = new g(o.Z, {
    CONNECTION_OPEN: u,
    OVERLAY_INITIALIZE: d,
    GUILD_CREATE: f,
    GUILD_DELETE: _,
    GUILD_MEMBER_LIST_UPDATE: p,
    INVITE_ACCEPT_SUCCESS: h,
    INVITE_RESOLVE_SUCCESS: h,
    ONLINE_GUILD_MEMBER_COUNT_UPDATE: m
});
