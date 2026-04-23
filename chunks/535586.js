"use strict";
n.d(t, { A: () => p, n: () => l });
var i = n(17928),
    r = n(228366),
    s = n(696451),
    a = n(543465),
    o = n(287809);
function l(e, t) {
    let n = o.default.getCurrentUser()?.id,
        i = a.Ay.isSuppressEveryoneEnabled(t),
        l = a.Ay.isSuppressRolesEnabled(t),
        d = null != e.mentions && e.mentions.some((e) => e.id === n),
        _ = null == t || null == n ? null : s.Ay.getMember(t, n),
        u = null != e.mention_roles && null != _ && null != _.roles && e.mention_roles.some((e) => _.roles.includes(e));
    r.h.dispatch({
        type: "MESSAGE_NOTIFICATION_SHOWN",
        guildId: t,
        mentioned: d,
        roleMentioned: u && !l,
        everyoneMentioned: !0 === e.mention_everyone && !i,
    });
}
let d = null,
    _ = null,
    u = null,
    c = null,
    E = {},
    h = {},
    m = {},
    f = {};
class g extends i.Ay.Store {
    initialize() {
        this.waitFor(s.Ay, a.Ay, o.default);
    }
    getGlobalStats() {
        let e = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1e3));
        return {
            approx_seconds_since_last_notification: e(d),
            approx_seconds_since_last_mention: e(_),
            approx_seconds_since_last_role_mention: e(u),
            approx_seconds_since_last_everyone_mention: e(c),
        };
    }
    getStats(e) {
        let t = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1e3));
        return {
            approx_seconds_since_last_notification: t(d),
            approx_seconds_since_last_mention: t(_),
            approx_seconds_since_last_role_mention: t(u),
            approx_seconds_since_last_everyone_mention: t(c),
            approx_seconds_since_last_guild_notification: null == e ? null : t(E[e]),
            approx_seconds_since_last_guild_mention: null == e ? null : t(h[e]),
            approx_seconds_since_last_guild_role_mention: null == e ? null : t(f[e]),
            approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(m[e]),
        };
    }
}
let p = new g(r.h, {
    CONNECTION_OPEN: function () {
        let e = (e) => null != e && Date.now() - e < 6e4;
        for (let t in (e(d) || (d = null), e(_) || (_ = null), e(u) || (u = null), e(c) || (c = null), E))
            e(E[t]) || delete E[t];
        for (let t in h) e(h[t]) || delete h[t];
        for (let t in f) e(f[t]) || delete f[t];
        for (let t in m) e(m[t]) || delete m[t];
    },
    MESSAGE_NOTIFICATION_SHOWN: function (e) {
        let { guildId: t, mentioned: n, roleMentioned: i, everyoneMentioned: r } = e,
            s = Date.now();
        (d = s),
            null != t && (E[t] = s),
            n && ((_ = s), null != t && (h[t] = s)),
            i && ((u = s), null != t && (f[t] = s)),
            r && ((c = s), null != t && (m[t] = s));
    },
});
