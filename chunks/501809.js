n(388685);
var r,
    i = n(442837),
    l = n(570140),
    a = n(38618),
    s = n(592125),
    o = n(709054);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = Object.freeze({
        online: null,
        total: null,
    }),
    d = {},
    p = {},
    f = null;
class g extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.Z, s.Z), (p = null != e ? e : d);
    }
    getState() {
        return p;
    }
    getMemberCount(e) {
        var t;
        return null != (t = p[e]) ? t : u;
    }
    requestCount(e, t) {
        (f = {
            guildId: e,
            channelId: t,
        }),
            a.Z.getSocket().requestChannelMemberCount(e, t);
    }
}
c(g, "displayName", "ChannelMemberCountStore"),
    c(g, "persistKey", "channelMemberCounts"),
    new g(l.Z, {
        CONNECTION_OPEN: function () {
            null != f && a.Z.getSocket().requestChannelMemberCount(f.guildId, f.channelId),
                o.default.keys(p).forEach((e) => {
                    null == s.Z.getChannel(e) && delete p[e];
                });
        },
        CHANNEL_MEMBER_COUNT_UPDATE: function (e) {
            let { channelId: t, online: n, total: r } = e;
            return (
                (null != n || null != r) &&
                    (p[t] = {
                        online: n,
                        total: r,
                    }),
                !0
            );
        },
    });
