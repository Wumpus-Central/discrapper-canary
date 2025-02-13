n.d(t, { Z: () => h }), n(47120), n(733860);
var l,
    i = n(442837),
    r = n(570140),
    u = n(592125),
    a = n(271383),
    o = n(430824);
function d(e, t, n) {
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
let s = [],
    c = new Set();
class f extends (l = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(a.ZP, o.Z, u.Z), (c = new Set([...(s = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : [])]));
    }
    getState() {
        return { channelHistory: s };
    }
    getChannelHistory() {
        return s;
    }
}
d(f, 'displayName', 'RecentVoiceChannelStore'), d(f, 'persistKey', 'RecentVoiceChannelStore');
let h = new f(r.Z, {
    POST_CONNECTION_OPEN: function () {
        c = new Set([...s]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: l } = e;
        return !(null == l || !(null !== (n = null === (t = u.Z.getChannel(l)) || void 0 === t ? void 0 : t.isVocal()) && void 0 !== n && n) || c.has(l)) && (s.unshift(l), c.add(l), s.length > 10 && ((s.length = 10), (c = new Set([...s]))), !0);
    }
});
