n(896048);
var r,
    i = n(311907),
    l = n(73153),
    a = n(142120),
    s = n(734057),
    o = n(661191);

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
class h extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(a.A, s.A), (p = null != e ? e : d);
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
            a.A.getSocket().requestChannelMemberCount(e, t);
    }
}
c(h, "displayName", "ChannelMemberCountStore"),
    c(h, "persistKey", "channelMemberCounts"),
    new h(l.h, {
        CONNECTION_OPEN: function () {
            null != f && a.A.getSocket().requestChannelMemberCount(f.guildId, f.channelId),
                o.default.keys(p).forEach((e) => {
                    null == s.A.getChannel(e) && delete p[e];
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
