n.d(t, { Z: () => _ }), n(47120), n(733860);
var r,
    i = n(442837),
    l = n(570140),
    a = n(592125),
    o = n(271383),
    u = n(430824);
function s(e, t, n) {
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
class f extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(o.ZP, u.Z, a.Z), (d = new Set([...(c = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : [])]));
    }
    getState() {
        return { channelHistory: c };
    }
    getChannelHistory() {
        return c;
    }
}
s(f, 'displayName', 'RecentVoiceChannelStore'), s(f, 'persistKey', 'RecentVoiceChannelStore');
let _ = new f(l.Z, {
    POST_CONNECTION_OPEN: function () {
        d = new Set([...c]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: r } = e;
        return !(null == r || !(null !== (n = null === (t = a.Z.getChannel(r)) || void 0 === t ? void 0 : t.isVocal()) && void 0 !== n && n) || d.has(r)) && (c.unshift(r), d.add(r), c.length > 10 && ((c.length = 10), (d = new Set([...c]))), !0);
    }
});
