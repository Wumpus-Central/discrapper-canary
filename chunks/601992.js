r.d(n, {
    R: function () {
        return u;
    }
});
var i = r(442837),
    a = r(570140),
    o = r(271383),
    s = r(9156),
    l = r(594174);
function u(e, n) {
    var r;
    let i = null === (r = l.default.getCurrentUser()) || void 0 === r ? void 0 : r.id,
        u = s.ZP.isSuppressEveryoneEnabled(n),
        c = s.ZP.isSuppressRolesEnabled(n),
        d = null != e.mentions && e.mentions.some((e) => e.id === i),
        f = null == n || null == i ? null : o.ZP.getMember(n, i),
        p = null != e.mention_roles && null != f && null != f.roles && e.mention_roles.some((e) => f.roles.includes(e));
    a.Z.dispatch({
        type: 'MESSAGE_NOTIFICATION_SHOWN',
        guildId: n,
        mentioned: d,
        roleMentioned: p && !c,
        everyoneMentioned: !0 === e.mention_everyone && !u
    });
}
let c = null,
    d = null,
    f = null,
    p = null,
    h = {},
    _ = {},
    m = {},
    g = {};
function E() {
    let e = (e) => null != e && Date.now() - e < 60000;
    for (let n in (!e(c) && (c = null), !e(d) && (d = null), !e(f) && (f = null), !e(p) && (p = null), h)) !e(h[n]) && delete h[n];
    for (let n in _) !e(_[n]) && delete _[n];
    for (let n in g) !e(g[n]) && delete g[n];
    for (let n in m) !e(m[n]) && delete m[n];
}
function v(e) {
    let { guildId: n, mentioned: r, roleMentioned: i, everyoneMentioned: a } = e,
        o = Date.now();
    (c = o), null != n && (h[n] = o), r && ((d = o), null != n && (_[n] = o)), i && ((f = o), null != n && (g[n] = o)), a && ((p = o), null != n && (m[n] = o));
}
class y extends i.ZP.Store {
    getGlobalStats() {
        let e = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1000));
        return {
            approx_seconds_since_last_notification: e(c),
            approx_seconds_since_last_mention: e(d),
            approx_seconds_since_last_role_mention: e(f),
            approx_seconds_since_last_everyone_mention: e(p)
        };
    }
    getStats(e) {
        let n = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1000));
        return {
            approx_seconds_since_last_notification: n(c),
            approx_seconds_since_last_mention: n(d),
            approx_seconds_since_last_role_mention: n(f),
            approx_seconds_since_last_everyone_mention: n(p),
            approx_seconds_since_last_guild_notification: null == e ? null : n(h[e]),
            approx_seconds_since_last_guild_mention: null == e ? null : n(_[e]),
            approx_seconds_since_last_guild_role_mention: null == e ? null : n(g[e]),
            approx_seconds_since_last_guild_everyone_mention: null == e ? null : n(m[e])
        };
    }
}
n.Z = new y(a.Z, {
    CONNECTION_OPEN: E,
    MESSAGE_NOTIFICATION_SHOWN: v
});
