n.d(t, { Z: () => f }), n(47120), n(733860);
var r,
    i = n(442837),
    a = n(570140),
    o = n(592125),
    l = n(271383),
    c = n(430824);
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
let u = [],
    d = new Set();
class _ extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(l.ZP, c.Z, o.Z), (d = new Set([...(u = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : [])]));
    }
    getState() {
        return { channelHistory: u };
    }
    getChannelHistory() {
        return u;
    }
}
s(_, 'displayName', 'RecentVoiceChannelStore'), s(_, 'persistKey', 'RecentVoiceChannelStore');
let f = new _(a.Z, {
    POST_CONNECTION_OPEN: function () {
        d = new Set([...u]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: r } = e;
        return !(null == r || !(null !== (n = null === (t = o.Z.getChannel(r)) || void 0 === t ? void 0 : t.isVocal()) && void 0 !== n && n) || d.has(r)) && (u.unshift(r), d.add(r), u.length > 10 && ((u.length = 10), (d = new Set([...u]))), !0);
    }
});
