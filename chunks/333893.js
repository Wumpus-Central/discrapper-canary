var i = n(311907),
    r = n(73153),
    a = n(142120),
    l = n(734057),
    s = n(661191);
let o = Object.freeze({ online: null, total: null }),
    d = {},
    u = {},
    c = null;
class A extends i.Ay.PersistedStore {
    static displayName = "ChannelMemberCountStore";
    static persistKey = "channelMemberCounts";
    initialize(e) {
        this.waitFor(a.A, l.A), (u = e ?? d);
    }
    getState() {
        return u;
    }
    getMemberCount(e) {
        return u[e] ?? o;
    }
    requestCount(e, t) {
        (c = { guildId: e, channelId: t }), a.A.getSocket().requestChannelMemberCount(e, t);
    }
}
new A(r.h, {
    CONNECTION_OPEN: function () {
        null != c && a.A.getSocket().requestChannelMemberCount(c.guildId, c.channelId),
            s.default.keys(u).forEach((e) => {
                null == l.A.getChannel(e) && delete u[e];
            });
    },
    CHANNEL_MEMBER_COUNT_UPDATE: function (e) {
        let { channelId: t, online: n, total: i } = e;
        return (null != n || null != i) && (u[t] = { online: n, total: i }), !0;
    },
});
