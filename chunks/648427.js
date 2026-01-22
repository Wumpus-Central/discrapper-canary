n.d(t, { A: () => g }), n(896048), n(667532);
var r,
    i = n(311907),
    l = n(73153),
    s = n(734057),
    o = n(696451),
    a = n(71393);
function u(e, t, n) {
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
let c = [],
    d = new Set();
class p extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(o.Ay, a.A, s.A),
            (d = new Set([...(c = null != (t = null == e ? void 0 : e.channelHistory) ? t : [])]));
    }
    getState() {
        return { channelHistory: c };
    }
    getChannelHistory() {
        return c;
    }
}
u(p, "displayName", "RecentVoiceChannelStore"), u(p, "persistKey", "RecentVoiceChannelStore");
let g = new p(l.h, {
    POST_CONNECTION_OPEN: function () {
        d = new Set([...c]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: r } = e;
        return (
            null != r &&
            !!(null != (t = null == (n = s.A.getChannel(r)) ? void 0 : n.isVocal()) && t) &&
            (d.has(r) ? ((c = c.filter((e) => e !== r)).unshift(r), (d = new Set([...c]))) : (c.unshift(r), d.add(r)),
            c.length > 10 && ((c.length = 10), (d = new Set([...c]))),
            !0)
        );
    },
});
