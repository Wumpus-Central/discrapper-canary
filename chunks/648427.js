n.d(t, { A: () => f }), n(667532);
var i = n(311907),
    r = n(73153),
    s = n(95701),
    l = n(734057),
    a = n(696451),
    u = n(71393);
let o = [],
    d = new Set(),
    c = [],
    h = new Set();
function I(e) {
    let { channelId: t, history: n, historySet: i } = e;
    if (i.has(t)) {
        let e = n.filter((e) => e !== t);
        return e.unshift(t), { didChange: !0, history: e, historySet: new Set([...e]) };
    }
    let r = [t, ...n],
        s = new Set(i);
    return (s.add(t), r.length > 10)
        ? ((r.length = 10), { didChange: !0, history: r, historySet: new Set([...r]) })
        : { didChange: !0, history: r, historySet: s };
}
class g extends i.Ay.PersistedStore {
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
        this.waitFor(a.Ay, u.A, l.A),
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
let f = new g(r.h, {
    POST_CONNECTION_OPEN: function () {
        (d = new Set([...o])), (h = new Set([...c]));
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t || !l.A.getChannel(t)?.isVocal()) return !1;
        let n = I({ channelId: t, history: o, historySet: d });
        return (o = n.history), (d = n.historySet), n.didChange;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t) return !1;
        let n = l.A.getChannel(t);
        if (null == n || n.isVocal() || n.isPrivate() || !(0, s.ke)(n.type)) return !1;
        let i = I({ channelId: t, history: c, historySet: h });
        return (c = i.history), (h = i.historySet), i.didChange;
    },
});
