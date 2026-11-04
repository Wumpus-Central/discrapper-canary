var i = n(855986),
    r = n(73153),
    a = n(696451),
    s = n(543465),
    l = n(287809);
let o = null,
    d = null,
    c = null,
    u = null,
    _ = {},
    E = {},
    A = {},
    h = {};
class f extends i.Ay.Store {
    initialize() {
        this.waitFor(a.Ay, s.Ay, l.default);
    }
    getGlobalStats() {
        function e(e) {
            return null == e ? null : Math.floor((Date.now() - e) / 1e3);
        }
        return {
            approx_seconds_since_last_notification: e(o),
            approx_seconds_since_last_mention: e(d),
            approx_seconds_since_last_role_mention: e(c),
            approx_seconds_since_last_everyone_mention: e(u),
        };
    }
    getStats(e) {
        function t(e) {
            return null == e ? null : Math.floor((Date.now() - e) / 1e3);
        }
        return {
            approx_seconds_since_last_notification: t(o),
            approx_seconds_since_last_mention: t(d),
            approx_seconds_since_last_role_mention: t(c),
            approx_seconds_since_last_everyone_mention: t(u),
            approx_seconds_since_last_guild_notification: null == e ? null : t(_[e]),
            approx_seconds_since_last_guild_mention: null == e ? null : t(E[e]),
            approx_seconds_since_last_guild_role_mention: null == e ? null : t(h[e]),
            approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(A[e]),
        };
    }
}
let I = new f(r.h, {
    CONNECTION_OPEN: function () {
        function e(e) {
            return null != e && Date.now() - e < 6e4;
        }
        for (let t in (e(o) || (o = null), e(d) || (d = null), e(c) || (c = null), e(u) || (u = null), _))
            e(_[t]) || delete _[t];
        for (let t in E) e(E[t]) || delete E[t];
        for (let t in h) e(h[t]) || delete h[t];
        for (let t in A) e(A[t]) || delete A[t];
    },
    MESSAGE_NOTIFICATION_SHOWN: function (e) {
        let { guildId: t, mentioned: n, roleMentioned: i, everyoneMentioned: r } = e,
            a = Date.now();
        ((o = a),
            null != t && (_[t] = a),
            n && ((d = a), null != t && (E[t] = a)),
            i && ((c = a), null != t && (h[t] = a)),
            r && ((u = a), null != t && (A[t] = a)));
    },
});
n.d(
    t,
    {},
    {
        A: I,
        n: function (e, t) {
            let n = l.default.getCurrentUser()?.id,
                i = s.Ay.isSuppressEveryoneEnabled(t),
                o = s.Ay.isSuppressRolesEnabled(t),
                d = null != e.mentions && e.mentions.some((e) => e.id === n),
                c = null == t || null == n ? null : a.Ay.getMember(t, n),
                u =
                    null != e.mention_roles &&
                    null != c &&
                    null != c.roles &&
                    e.mention_roles.some((e) => c.roles.includes(e));
            r.h.dispatch({
                type: "MESSAGE_NOTIFICATION_SHOWN",
                guildId: t,
                mentioned: d,
                roleMentioned: u && !o,
                everyoneMentioned: !0 === e.mention_everyone && !i,
            });
        },
    },
);
