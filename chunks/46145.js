n(47120), n(733860);
var i,
    r = n(442837),
    l = n(570140),
    a = n(592125),
    s = n(271383),
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
let d = [],
    u = new Set();
class h extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(s.ZP, o.Z, a.Z), (u = new Set([...(d = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : [])]));
    }
    getState() {
        return { channelHistory: d };
    }
    getChannelHistory() {
        return d;
    }
}
c(h, 'displayName', 'RecentVoiceChannelStore'), c(h, 'persistKey', 'RecentVoiceChannelStore');
let m = new h(l.Z, {
    POST_CONNECTION_OPEN: function () {
        u = new Set([...d]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: i } = e;
        return !(null == i || !(null !== (n = null === (t = a.Z.getChannel(i)) || void 0 === t ? void 0 : t.isVocal()) && void 0 !== n && n) || u.has(i)) && (d.unshift(i), u.add(i), d.length > 10 && ((d.length = 10), (u = new Set([...d]))), !0);
    }
});
t.Z = m;
