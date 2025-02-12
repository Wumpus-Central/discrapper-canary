t.d(n, { Z: () => h }), t(47120), t(733860);
var i,
    r = t(442837),
    a = t(570140),
    l = t(592125),
    o = t(271383),
    u = t(430824);
function d(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
let c = [],
    s = new Set();
class _ extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        var n;
        this.waitFor(o.ZP, u.Z, l.Z), (s = new Set([...(c = null !== (n = null == e ? void 0 : e.channelHistory) && void 0 !== n ? n : [])]));
    }
    getState() {
        return { channelHistory: c };
    }
    getChannelHistory() {
        return c;
    }
}
d(_, 'displayName', 'RecentVoiceChannelStore'), d(_, 'persistKey', 'RecentVoiceChannelStore');
let h = new _(a.Z, {
    POST_CONNECTION_OPEN: function () {
        s = new Set([...c]);
    },
    VOICE_CHANNEL_SELECT: function (e) {
        var n, t;
        let { channelId: i } = e;
        return !(null == i || !(null !== (t = null === (n = l.Z.getChannel(i)) || void 0 === n ? void 0 : n.isVocal()) && void 0 !== t && t) || s.has(i)) && (c.unshift(i), s.add(i), c.length > 10 && ((c.length = 10), (s = new Set([...c]))), !0);
    }
});
