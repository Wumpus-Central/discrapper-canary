n.d(t, { Z: () => g }), n(47120), n(733860);
var i,
    r = n(442837),
    l = n(570140),
    o = n(592125),
    s = n(271383),
    a = n(430824);
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
    d = new Set();
class p extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(s.ZP, a.Z, o.Z), (d = new Set([...(u = null != (t = null == e ? void 0 : e.channelHistory) ? t : [])]));
    }
    getState() {
        return { channelHistory: u };
    }
    getChannelHistory() {
        return u;
    }
}
c(p, 'displayName', 'RecentVoiceChannelStore'), c(p, 'persistKey', 'RecentVoiceChannelStore');
let g = new p(l.Z, {
    POST_CONNECTION_OPEN: function () {
        d = new Set([...u]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: i } = e;
        return null != i && !!(null != (n = null == (t = o.Z.getChannel(i)) ? void 0 : t.isVocal()) && n) && (d.has(i) ? ((u = u.filter((e) => e !== i)).unshift(i), (d = new Set([...u]))) : (u.unshift(i), d.add(i)), u.length > 10 && ((u.length = 10), (d = new Set([...u]))), !0);
    }
});
