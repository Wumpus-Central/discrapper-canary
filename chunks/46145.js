n.d(t, { Z: () => h }), n(47120), n(733860);
var i,
    r = n(442837),
    a = n(570140),
    l = n(592125),
    o = n(271383),
    u = n(430824);
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
    s = new Set();
class _ extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(o.ZP, u.Z, l.Z), (s = new Set([...(d = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : [])]));
    }
    getState() {
        return { channelHistory: d };
    }
    getChannelHistory() {
        return d;
    }
}
c(_, 'displayName', 'RecentVoiceChannelStore'), c(_, 'persistKey', 'RecentVoiceChannelStore');
let h = new _(a.Z, {
    POST_CONNECTION_OPEN: function () {
        s = new Set([...d]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: i } = e;
        return !(null == i || !(null !== (n = null === (t = l.Z.getChannel(i)) || void 0 === t ? void 0 : t.isVocal()) && void 0 !== n && n) || s.has(i)) && (d.unshift(i), s.add(i), d.length > 10 && ((d.length = 10), (s = new Set([...d]))), !0);
    }
});
