n(47120), n(733860);
var r,
    i = n(442837),
    l = n(570140),
    a = n(592125),
    u = n(271383),
    o = n(430824);
function s(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let c = [],
    d = new Set();
class f extends (r = i.ZP.PersistedStore) {
    initialize(t) {
        var e;
        this.waitFor(u.ZP, o.Z, a.Z), (d = new Set([...(c = null !== (e = null == t ? void 0 : t.channelHistory) && void 0 !== e ? e : [])]));
    }
    getState() {
        return { channelHistory: c };
    }
    getChannelHistory() {
        return c;
    }
}
s(f, 'displayName', 'RecentVoiceChannelStore'), s(f, 'persistKey', 'RecentVoiceChannelStore');
let h = new f(l.Z, {
    POST_CONNECTION_OPEN: function () {
        d = new Set([...c]);
    },
    VOICE_CHANNEL_SELECT: function (t) {
        var e, n;
        let { channelId: r } = t;
        return !(null == r || !(null !== (n = null === (e = a.Z.getChannel(r)) || void 0 === e ? void 0 : e.isVocal()) && void 0 !== n && n) || d.has(r)) && (c.unshift(r), d.add(r), c.length > 10 && ((c.length = 10), (d = new Set([...c]))), !0);
    }
});
e.Z = h;
