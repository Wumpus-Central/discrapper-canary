n.d(t, { Z: () => p }), n(388685), n(290780);
var i,
    r = n(442837),
    l = n(570140),
    s = n(592125),
    a = n(271383),
    o = n(430824);
function c(e, t, n) {
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
let u = [],
    f = new Set();
class d extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(a.ZP, o.Z, s.Z), (f = new Set([...(u = null != (t = null == e ? void 0 : e.channelHistory) ? t : [])]));
    }
    getState() {
        return { channelHistory: u };
    }
    getChannelHistory() {
        return u;
    }
}
c(d, 'displayName', 'RecentVoiceChannelStore'), c(d, 'persistKey', 'RecentVoiceChannelStore');
let p = new d(l.Z, {
    POST_CONNECTION_OPEN: function () {
        f = new Set([...u]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: i } = e;
        return null != i && !!(null != (n = null == (t = s.Z.getChannel(i)) ? void 0 : t.isVocal()) && n) && (f.has(i) ? ((u = u.filter((e) => e !== i)).unshift(i), (f = new Set([...u]))) : (u.unshift(i), f.add(i)), u.length > 10 && ((u.length = 10), (f = new Set([...u]))), !0);
    }
});
