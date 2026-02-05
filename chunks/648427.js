n.d(t, { A: () => E }), n(667532);
var l = n(311907),
    i = n(73153),
    s = n(95701),
    r = n(734057),
    a = n(696451),
    u = n(71393);
let o = [],
    d = new Set(),
    c = [],
    h = new Set();
function g(e) {
    let { channelId: t, history: n, historySet: l } = e;
    if (l.has(t)) {
        let e = n.filter((e) => e !== t);
        return e.unshift(t), { didChange: !0, history: e, historySet: new Set([...e]) };
    }
    let i = [t, ...n],
        s = new Set(l);
    return (s.add(t), i.length > 10)
        ? ((i.length = 10), { didChange: !0, history: i, historySet: new Set([...i]) })
        : { didChange: !0, history: i, historySet: s };
}
class I extends l.Ay.PersistedStore {
    static displayName = "RecentVoiceChannelStore";
    static persistKey = "RecentVoiceChannelStore";
    static migrations = [
        (e) =>
            null == e || "object" != typeof e
                ? { voiceChannelHistory: [], textChannelHistory: [] }
                : {
                      voiceChannelHistory: e.voiceChannelHistory ?? e.channelHistory ?? [],
                      textChannelHistory: e.textChannelHistory ?? [],
                  },
    ];
    initialize(e) {
        this.waitFor(a.Ay, u.A, r.A),
            (o = e?.voiceChannelHistory ?? []),
            (c = e?.textChannelHistory ?? []),
            (d = new Set([...o])),
            (h = new Set([...c]));
    }
    getState() {
        return { voiceChannelHistory: o, textChannelHistory: c };
    }
    getVoiceChannelHistory() {
        return o;
    }
    getTextChannelHistory() {
        return c;
    }
}
let E = new I(i.h, {
    POST_CONNECTION_OPEN: function () {
        (d = new Set([...o])), (h = new Set([...c]));
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t || !r.A.getChannel(t)?.isVocal()) return !1;
        let n = g({ channelId: t, history: o, historySet: d });
        return (o = n.history), (d = n.historySet), n.didChange;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t) return !1;
        let n = r.A.getChannel(t);
        if (null == n || n.isVocal() || n.isPrivate() || !(0, s.ke)(n.type)) return !1;
        let l = g({ channelId: t, history: c, historySet: h });
        return (c = l.history), (h = l.historySet), l.didChange;
    },
});
