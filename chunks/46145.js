n.d(t, { Z: () => g }), n(388685), n(290780);
var r,
    i = n(442837),
    l = n(570140),
    s = n(592125),
    o = n(271383),
    a = n(430824);
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
class p extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(o.ZP, a.Z, s.Z),
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
let g = new p(l.Z, {
    POST_CONNECTION_OPEN: function () {
        d = new Set([...c]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: r } = e;
        return (
            null != r &&
            !!(null != (n = null == (t = s.Z.getChannel(r)) ? void 0 : t.isVocal()) && n) &&
            (d.has(r) ? ((c = c.filter((e) => e !== r)).unshift(r), (d = new Set([...c]))) : (c.unshift(r), d.add(r)),
            c.length > 10 && ((c.length = 10), (d = new Set([...c]))),
            !0)
        );
    },
});
