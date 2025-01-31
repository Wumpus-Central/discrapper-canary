n.d(t, {
    R: () => l,
    Z: () => y
});
var i = n(442837),
    r = n(570140),
    a = n(271383),
    s = n(9156),
    o = n(594174);
function l(e, t) {
    var n;
    let i = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
        l = s.ZP.isSuppressEveryoneEnabled(t),
        u = s.ZP.isSuppressRolesEnabled(t),
        c = null != e.mentions && e.mentions.some((e) => e.id === i),
        d = null == t || null == i ? null : a.ZP.getMember(t, i),
        f = null != e.mention_roles && null != d && null != d.roles && e.mention_roles.some((e) => d.roles.includes(e));
    r.Z.dispatch({
        type: 'MESSAGE_NOTIFICATION_SHOWN',
        guildId: t,
        mentioned: c,
        roleMentioned: f && !u,
        everyoneMentioned: !0 === e.mention_everyone && !l
    });
}
let u = null,
    c = null,
    d = null,
    f = null,
    _ = {},
    p = {},
    h = {},
    m = {};
function g() {
    let e = (e) => null != e && Date.now() - e < 60000;
    for (let t in (e(u) || (u = null), e(c) || (c = null), e(d) || (d = null), e(f) || (f = null), _)) e(_[t]) || delete _[t];
    for (let t in p) e(p[t]) || delete p[t];
    for (let t in m) e(m[t]) || delete m[t];
    for (let t in h) e(h[t]) || delete h[t];
}
function E(e) {
    let { guildId: t, mentioned: n, roleMentioned: i, everyoneMentioned: r } = e,
        a = Date.now();
    (u = a), null != t && (_[t] = a), n && ((c = a), null != t && (p[t] = a)), i && ((d = a), null != t && (m[t] = a)), r && ((f = a), null != t && (h[t] = a));
}
class v extends i.ZP.Store {
    getGlobalStats() {
        let e = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1000));
        return {
            approx_seconds_since_last_notification: e(u),
            approx_seconds_since_last_mention: e(c),
            approx_seconds_since_last_role_mention: e(d),
            approx_seconds_since_last_everyone_mention: e(f)
        };
    }
    getStats(e) {
        let t = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1000));
        return {
            approx_seconds_since_last_notification: t(u),
            approx_seconds_since_last_mention: t(c),
            approx_seconds_since_last_role_mention: t(d),
            approx_seconds_since_last_everyone_mention: t(f),
            approx_seconds_since_last_guild_notification: null == e ? null : t(_[e]),
            approx_seconds_since_last_guild_mention: null == e ? null : t(p[e]),
            approx_seconds_since_last_guild_role_mention: null == e ? null : t(m[e]),
            approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(h[e])
        };
    }
}
let y = new v(r.Z, {
    CONNECTION_OPEN: g,
    MESSAGE_NOTIFICATION_SHOWN: E
});
