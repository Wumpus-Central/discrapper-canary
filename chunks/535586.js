"use strict";
n.d(t, { A: () => p, n: () => o });
var i = n(17928),
    r = n(228366),
    a = n(696451),
    s = n(543465),
    l = n(287809);
function o(e, t) {
    let n = l.default.getCurrentUser()?.id,
        i = s.Ay.isSuppressEveryoneEnabled(t),
        o = s.Ay.isSuppressRolesEnabled(t),
        d = null != e.mentions && e.mentions.some((e) => e.id === n),
        c = null == t || null == n ? null : a.Ay.getMember(t, n),
        u = null != e.mention_roles && null != c && null != c.roles && e.mention_roles.some((e) => c.roles.includes(e));
    r.h.dispatch({
        type: "MESSAGE_NOTIFICATION_SHOWN",
        guildId: t,
        mentioned: d,
        roleMentioned: u && !o,
        everyoneMentioned: !0 === e.mention_everyone && !i,
    });
}
let d = null,
    c = null,
    u = null,
    _ = null,
    E = {},
    A = {},
    h = {},
    I = {};
class f extends i.Ay.Store {
    initialize() {
        this.waitFor(a.Ay, s.Ay, l.default);
    }
    getGlobalStats() {
        function e(e) {
            return null == e ? null : Math.floor((Date.now() - e) / 1e3);
        }
        return {
            approx_seconds_since_last_notification: e(d),
            approx_seconds_since_last_mention: e(c),
            approx_seconds_since_last_role_mention: e(u),
            approx_seconds_since_last_everyone_mention: e(_),
        };
    }
    getStats(e) {
        function t(e) {
            return null == e ? null : Math.floor((Date.now() - e) / 1e3);
        }
        return {
            approx_seconds_since_last_notification: t(d),
            approx_seconds_since_last_mention: t(c),
            approx_seconds_since_last_role_mention: t(u),
            approx_seconds_since_last_everyone_mention: t(_),
            approx_seconds_since_last_guild_notification: null == e ? null : t(E[e]),
            approx_seconds_since_last_guild_mention: null == e ? null : t(A[e]),
            approx_seconds_since_last_guild_role_mention: null == e ? null : t(I[e]),
            approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(h[e]),
        };
    }
}
let p = new f(r.h, {
    CONNECTION_OPEN: function () {
        function e(e) {
            return null != e && Date.now() - e < 6e4;
        }
        for (let t in (e(d) || (d = null), e(c) || (c = null), e(u) || (u = null), e(_) || (_ = null), E))
            e(E[t]) || delete E[t];
        for (let t in A) e(A[t]) || delete A[t];
        for (let t in I) e(I[t]) || delete I[t];
        for (let t in h) e(h[t]) || delete h[t];
    },
    MESSAGE_NOTIFICATION_SHOWN: function (e) {
        let { guildId: t, mentioned: n, roleMentioned: i, everyoneMentioned: r } = e,
            a = Date.now();
        (d = a),
            null != t && (E[t] = a),
            n && ((c = a), null != t && (A[t] = a)),
            i && ((u = a), null != t && (I[t] = a)),
            r && ((_ = a), null != t && (h[t] = a));
    },
});
