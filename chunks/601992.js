n.d(t, {
    R: () => l,
    Z: () => y
});
var r = n(442837),
    i = n(570140),
    a = n(271383),
    o = n(9156),
    s = n(594174);
function l(e, t) {
    var n;
    let r = null == (n = s.default.getCurrentUser()) ? void 0 : n.id,
        l = o.ZP.isSuppressEveryoneEnabled(t),
        c = o.ZP.isSuppressRolesEnabled(t),
        u = null != e.mentions && e.mentions.some((e) => e.id === r),
        d = null == t || null == r ? null : a.ZP.getMember(t, r),
        _ = null != e.mention_roles && null != d && null != d.roles && e.mention_roles.some((e) => d.roles.includes(e));
    i.Z.dispatch({
        type: 'MESSAGE_NOTIFICATION_SHOWN',
        guildId: t,
        mentioned: u,
        roleMentioned: _ && !c,
        everyoneMentioned: !0 === e.mention_everyone && !l
    });
}
let c = null,
    u = null,
    d = null,
    _ = null,
    f = {},
    p = {},
    h = {},
    m = {};
function g() {
    let e = (e) => null != e && Date.now() - e < 60000;
    for (let t in (e(c) || (c = null), e(u) || (u = null), e(d) || (d = null), e(_) || (_ = null), f)) e(f[t]) || delete f[t];
    for (let t in p) e(p[t]) || delete p[t];
    for (let t in m) e(m[t]) || delete m[t];
    for (let t in h) e(h[t]) || delete h[t];
}
function E(e) {
    let { guildId: t, mentioned: n, roleMentioned: r, everyoneMentioned: i } = e,
        a = Date.now();
    (c = a), null != t && (f[t] = a), n && ((u = a), null != t && (p[t] = a)), r && ((d = a), null != t && (m[t] = a)), i && ((_ = a), null != t && (h[t] = a));
}
class b extends r.ZP.Store {
    getGlobalStats() {
        let e = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1000));
        return {
            approx_seconds_since_last_notification: e(c),
            approx_seconds_since_last_mention: e(u),
            approx_seconds_since_last_role_mention: e(d),
            approx_seconds_since_last_everyone_mention: e(_)
        };
    }
    getStats(e) {
        let t = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1000));
        return {
            approx_seconds_since_last_notification: t(c),
            approx_seconds_since_last_mention: t(u),
            approx_seconds_since_last_role_mention: t(d),
            approx_seconds_since_last_everyone_mention: t(_),
            approx_seconds_since_last_guild_notification: null == e ? null : t(f[e]),
            approx_seconds_since_last_guild_mention: null == e ? null : t(p[e]),
            approx_seconds_since_last_guild_role_mention: null == e ? null : t(m[e]),
            approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(h[e])
        };
    }
}
let y = new b(i.Z, {
    CONNECTION_OPEN: g,
    MESSAGE_NOTIFICATION_SHOWN: E
});
