n.d(t, { Z: () => f }), n(47120), n(733860);
var i,
    a = n(442837),
    r = n(570140),
    o = n(592125),
    l = n(271383),
    c = n(430824);
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
let _ = [],
    u = new Set();
class s extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        var t;
        this.waitFor(l.ZP, c.Z, o.Z), (u = new Set([...(_ = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : [])]));
    }
    getState() {
        return { channelHistory: _ };
    }
    getChannelHistory() {
        return _;
    }
}
d(s, 'displayName', 'RecentVoiceChannelStore'), d(s, 'persistKey', 'RecentVoiceChannelStore');
let f = new s(r.Z, {
    POST_CONNECTION_OPEN: function () {
        u = new Set([..._]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var t, n;
        let { channelId: i } = e;
        return !(null == i || !(null !== (n = null === (t = o.Z.getChannel(i)) || void 0 === t ? void 0 : t.isVocal()) && void 0 !== n && n) || u.has(i)) && (_.unshift(i), u.add(i), _.length > 10 && ((_.length = 10), (u = new Set([..._]))), !0);
    }
});
