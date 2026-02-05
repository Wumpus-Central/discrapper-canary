"use strict";
n.d(t, { A: () => I, n: () => l });
var r = n(311907),
    i = n(73153),
    a = n(696451),
    s = n(543465),
    o = n(287809);
function l(e, t) {
    let n = o.default.getCurrentUser()?.id,
        r = s.Ay.isSuppressEveryoneEnabled(t),
        l = s.Ay.isSuppressRolesEnabled(t),
        u = null != e.mentions && e.mentions.some((e) => e.id === n),
        c = null == t || null == n ? null : a.Ay.getMember(t, n),
        d = null != e.mention_roles && null != c && null != c.roles && e.mention_roles.some((e) => c.roles.includes(e));
    i.h.dispatch({
        type: "MESSAGE_NOTIFICATION_SHOWN",
        guildId: t,
        mentioned: u,
        roleMentioned: d && !l,
        everyoneMentioned: !0 === e.mention_everyone && !r,
    });
}
let u = null,
    c = null,
    d = null,
    _ = null,
    f = {},
    p = {},
    h = {},
    m = {};
function g() {
    let e = (e) => null != e && Date.now() - e < 6e4;
    for (let t in (e(u) || (u = null), e(c) || (c = null), e(d) || (d = null), e(_) || (_ = null), f))
        e(f[t]) || delete f[t];
    for (let t in p) e(p[t]) || delete p[t];
    for (let t in m) e(m[t]) || delete m[t];
    for (let t in h) e(h[t]) || delete h[t];
}
function E(e) {
    let { guildId: t, mentioned: n, roleMentioned: r, everyoneMentioned: i } = e,
        a = Date.now();
    (u = a),
        null != t && (f[t] = a),
        n && ((c = a), null != t && (p[t] = a)),
        r && ((d = a), null != t && (m[t] = a)),
        i && ((_ = a), null != t && (h[t] = a));
}
class A extends r.Ay.Store {
    initialize() {
        this.waitFor(a.Ay, s.Ay, o.default);
    }
    getGlobalStats() {
        let e = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1e3));
        return {
            approx_seconds_since_last_notification: e(u),
            approx_seconds_since_last_mention: e(c),
            approx_seconds_since_last_role_mention: e(d),
            approx_seconds_since_last_everyone_mention: e(_),
        };
    }
    getStats(e) {
        let t = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1e3));
        return {
            approx_seconds_since_last_notification: t(u),
            approx_seconds_since_last_mention: t(c),
            approx_seconds_since_last_role_mention: t(d),
            approx_seconds_since_last_everyone_mention: t(_),
            approx_seconds_since_last_guild_notification: null == e ? null : t(f[e]),
            approx_seconds_since_last_guild_mention: null == e ? null : t(p[e]),
            approx_seconds_since_last_guild_role_mention: null == e ? null : t(m[e]),
            approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(h[e]),
        };
    }
}
let I = new A(i.h, { CONNECTION_OPEN: g, MESSAGE_NOTIFICATION_SHOWN: E });
