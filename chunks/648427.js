n(667532);
var i = n(855986),
    r = n(73153),
    l = n(95701),
    s = n(734057),
    a = n(696451),
    o = n(71393);
let u = [],
    d = new Set(),
    c = [],
    h = new Set();
function f(e) {
    let { channelId: t, history: n, historySet: i } = e;
    if (i.has(t)) {
        let e = n.filter((e) => e !== t);
        return (e.unshift(t), { didChange: !0, history: e, historySet: new Set([...e]) });
    }
    let r = [t, ...n],
        l = new Set(i);
    return (l.add(t), r.length > 10)
        ? ((r.length = 10), { didChange: !0, history: r, historySet: new Set([...r]) })
        : { didChange: !0, history: r, historySet: l };
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
        (this.waitFor(a.Ay, o.A, s.A),
            (u = e?.voiceChannelHistory ?? []),
            (c = e?.textChannelHistory ?? []),
            (d = new Set([...u])),
            (h = new Set([...c])));
    }
    getState() {
        return { voiceChannelHistory: u, textChannelHistory: c };
    }
    getVoiceChannelHistory() {
        return u;
    }
    getTextChannelHistory() {
        return c;
    }
}
let A = new g(r.h, {
    POST_CONNECTION_OPEN: function () {
        ((d = new Set([...u])), (h = new Set([...c])));
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t || !s.A.getChannel(t)?.isVocal()) return !1;
        let n = f({ channelId: t, history: u, historySet: d });
        return ((u = n.history), (d = n.historySet), n.didChange);
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t) return !1;
        let n = s.A.getChannel(t);
        if (null == n || n.isVocal() || n.isPrivate() || !(0, l.ke)(n.type)) return !1;
        let i = f({ channelId: t, history: c, historySet: h });
        return ((c = i.history), (h = i.historySet), i.didChange);
    },
});
n.d(t, {}, { A: A });
