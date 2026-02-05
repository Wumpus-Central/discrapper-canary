var i = n(311907),
    r = n(73153),
    a = n(142120),
    l = n(734057),
    s = n(661191);
let o = Object.freeze({ online: null, total: null }),
    d = {},
    c = {},
    u = null;
class A extends i.Ay.PersistedStore {
    static displayName = "ChannelMemberCountStore";
    static persistKey = "channelMemberCounts";
    initialize(e) {
        this.waitFor(a.A, l.A), (c = e ?? d);
    }
    getState() {
        return c;
    }
    getMemberCount(e) {
        return c[e] ?? o;
    }
    requestCount(e, t) {
        (u = { guildId: e, channelId: t }), a.A.getSocket().requestChannelMemberCount(e, t);
    }
}
new A(r.h, {
    CONNECTION_OPEN: function () {
        null != u && a.A.getSocket().requestChannelMemberCount(u.guildId, u.channelId),
            s.default.keys(c).forEach((e) => {
                null == l.A.getChannel(e) && delete c[e];
            });
    },
    CHANNEL_MEMBER_COUNT_UPDATE: function (e) {
        let { channelId: t, online: n, total: i } = e;
        return (null != n || null != i) && (c[t] = { online: n, total: i }), !0;
    },
});
