n.d(t, { Z: () => g }), n(388685), n(290780);
var i,
    l = n(442837),
    r = n(570140),
    o = n(592125),
    s = n(271383),
    a = n(430824);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = [],
    d = new Set();
class f extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(s.ZP, a.Z, o.Z), (d = new Set([...(c = null != (t = null == e ? void 0 : e.channelHistory) ? t : [])]));
    }
    getState() {
        return { channelHistory: c };
    }
    getChannelHistory() {
        return c;
    }
}
u(f, 'displayName', 'RecentVoiceChannelStore'), u(f, 'persistKey', 'RecentVoiceChannelStore');
let g = new f(r.Z, {
    POST_CONNECTION_OPEN: function () {
        d = new Set([...c]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: i } = e;
        return null != i && !!(null != (n = null == (t = o.Z.getChannel(i)) ? void 0 : t.isVocal()) && n) && (d.has(i) ? ((c = c.filter((e) => e !== i)).unshift(i), (d = new Set([...c]))) : (c.unshift(i), d.add(i)), c.length > 10 && ((c.length = 10), (d = new Set([...c]))), !0);
    }
});
