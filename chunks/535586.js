"use strict";
n.d(t, { A: () => g, n: () => l });
var i = n(17928),
    r = n(228366),
    s = n(696451),
    a = n(543465),
    o = n(287809);
function l(e, t) {
    let n = o.default.getCurrentUser()?.id,
        i = a.Ay.isSuppressEveryoneEnabled(t),
        l = a.Ay.isSuppressRolesEnabled(t),
        u = null != e.mentions && e.mentions.some((e) => e.id === n),
        c = null == t || null == n ? null : s.Ay.getMember(t, n),
        d = null != e.mention_roles && null != c && null != c.roles && e.mention_roles.some((e) => c.roles.includes(e));
    r.h.dispatch({
        type: "MESSAGE_NOTIFICATION_SHOWN",
        guildId: t,
        mentioned: u,
        roleMentioned: d && !l,
        everyoneMentioned: !0 === e.mention_everyone && !i,
    });
}
let u = null,
    c = null,
    d = null,
    _ = null,
    h = {},
    f = {},
    p = {},
    E = {};
class m extends i.Ay.Store {
    initialize() {
        this.waitFor(s.Ay, a.Ay, o.default);
    }
    getGlobalStats() {
        function e(e) {
            return null == e ? null : Math.floor((Date.now() - e) / 1e3);
        }
        return {
            approx_seconds_since_last_notification: e(u),
            approx_seconds_since_last_mention: e(c),
            approx_seconds_since_last_role_mention: e(d),
            approx_seconds_since_last_everyone_mention: e(_),
        };
    }
    getStats(e) {
        function t(e) {
            return null == e ? null : Math.floor((Date.now() - e) / 1e3);
        }
        return {
            approx_seconds_since_last_notification: t(u),
            approx_seconds_since_last_mention: t(c),
            approx_seconds_since_last_role_mention: t(d),
            approx_seconds_since_last_everyone_mention: t(_),
            approx_seconds_since_last_guild_notification: null == e ? null : t(h[e]),
            approx_seconds_since_last_guild_mention: null == e ? null : t(f[e]),
            approx_seconds_since_last_guild_role_mention: null == e ? null : t(E[e]),
            approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(p[e]),
        };
    }
}
let g = new m(r.h, {
    CONNECTION_OPEN: function () {
        function e(e) {
            return null != e && Date.now() - e < 6e4;
        }
        for (let t in (e(u) || (u = null), e(c) || (c = null), e(d) || (d = null), e(_) || (_ = null), h))
            e(h[t]) || delete h[t];
        for (let t in f) e(f[t]) || delete f[t];
        for (let t in E) e(E[t]) || delete E[t];
        for (let t in p) e(p[t]) || delete p[t];
    },
    MESSAGE_NOTIFICATION_SHOWN: function (e) {
        let { guildId: t, mentioned: n, roleMentioned: i, everyoneMentioned: r } = e,
            s = Date.now();
        (u = s),
            null != t && (h[t] = s),
            n && ((c = s), null != t && (f[t] = s)),
            i && ((d = s), null != t && (E[t] = s)),
            r && ((_ = s), null != t && (p[t] = s));
    },
});
