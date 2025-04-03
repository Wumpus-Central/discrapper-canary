var r = n(442837),
    i = n(570140),
    l = n(38618);
let a = Object.freeze({
        online: null,
        total: null
    }),
    o = {},
    s = null;
class c extends r.ZP.Store {
    getMemberCount(e) {
        var t;
        return null != (t = o[e]) ? t : a;
    }
    requestCount(e, t) {
        (s = {
            guildId: e,
            channelId: t
        }),
            l.Z.getSocket().requestChannelMemberCount(e, t);
    }
}
new c(i.Z, {
    CONNECTION_OPEN: function () {
        (o = {}), null != s && l.Z.getSocket().requestChannelMemberCount(s.guildId, s.channelId);
    },
    CHANNEL_MEMBER_COUNT_UPDATE: function (e) {
        let { channelId: t, online: n, total: r } = e;
        return (
            (null != n || null != r) &&
                (o[t] = {
                    online: n,
                    total: r
                }),
            !0
        );
    }
});
