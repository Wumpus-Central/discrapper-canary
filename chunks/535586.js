"use strict";
n.d(t, { A: () => g, n: () => l });
var r = n(311907),
    i = n(73153),
    s = n(696451),
    a = n(543465),
    o = n(287809);
function l(e, t) {
    let n = o.default.getCurrentUser()?.id,
        r = a.Ay.isSuppressEveryoneEnabled(t),
        l = a.Ay.isSuppressRolesEnabled(t),
        u = null != e.mentions && e.mentions.some((e) => e.id === n),
        d = null == t || null == n ? null : s.Ay.getMember(t, n),
        c = null != e.mention_roles && null != d && null != d.roles && e.mention_roles.some((e) => d.roles.includes(e));
    i.h.dispatch({
        type: "MESSAGE_NOTIFICATION_SHOWN",
        guildId: t,
        mentioned: u,
        roleMentioned: c && !l,
        everyoneMentioned: !0 === e.mention_everyone && !r,
    });
}
let u = null,
    d = null,
    c = null,
    _ = null,
    f = {},
    E = {},
    h = {},
    p = {};
class m extends r.Ay.Store {
    initialize() {
        this.waitFor(s.Ay, a.Ay, o.default);
    }
    getGlobalStats() {
        let e = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1e3));
        return {
            approx_seconds_since_last_notification: e(u),
            approx_seconds_since_last_mention: e(d),
            approx_seconds_since_last_role_mention: e(c),
            approx_seconds_since_last_everyone_mention: e(_),
        };
    }
    getStats(e) {
        let t = (e) => (null == e ? null : Math.floor((Date.now() - e) / 1e3));
        return {
            approx_seconds_since_last_notification: t(u),
            approx_seconds_since_last_mention: t(d),
            approx_seconds_since_last_role_mention: t(c),
            approx_seconds_since_last_everyone_mention: t(_),
            approx_seconds_since_last_guild_notification: null == e ? null : t(f[e]),
            approx_seconds_since_last_guild_mention: null == e ? null : t(E[e]),
            approx_seconds_since_last_guild_role_mention: null == e ? null : t(p[e]),
            approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(h[e]),
        };
    }
}
let g = new m(i.h, {
    CONNECTION_OPEN: function () {
        let e = (e) => null != e && Date.now() - e < 6e4;
        for (let t in (e(u) || (u = null), e(d) || (d = null), e(c) || (c = null), e(_) || (_ = null), f))
            e(f[t]) || delete f[t];
        for (let t in E) e(E[t]) || delete E[t];
        for (let t in p) e(p[t]) || delete p[t];
        for (let t in h) e(h[t]) || delete h[t];
    },
    MESSAGE_NOTIFICATION_SHOWN: function (e) {
        let { guildId: t, mentioned: n, roleMentioned: r, everyoneMentioned: i } = e,
            s = Date.now();
        (u = s),
            null != t && (f[t] = s),
            n && ((d = s), null != t && (E[t] = s)),
            r && ((c = s), null != t && (p[t] = s)),
            i && ((_ = s), null != t && (h[t] = s));
    },
});
