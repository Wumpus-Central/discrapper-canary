"use strict";
n.d(t, { A: () => p }), n(667532);
var i = n(17928),
    r = n(228366),
    s = n(95701),
    a = n(734057),
    o = n(696451),
    l = n(71393);
let u = [],
    c = new Set(),
    d = [],
    _ = new Set();
function f(e) {
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
class h extends i.Ay.PersistedStore {
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
        this.waitFor(o.Ay, l.A, a.A),
            (u = e?.voiceChannelHistory ?? []),
            (d = e?.textChannelHistory ?? []),
            (c = new Set([...u])),
            (_ = new Set([...d]));
    }
    getState() {
        return { voiceChannelHistory: u, textChannelHistory: d };
    }
    getVoiceChannelHistory() {
        return u;
    }
    getTextChannelHistory() {
        return d;
    }
}
let p = new h(r.h, {
    POST_CONNECTION_OPEN: function () {
        (c = new Set([...u])), (_ = new Set([...d]));
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t || !a.A.getChannel(t)?.isVocal()) return !1;
        let n = f({ channelId: t, history: u, historySet: c });
        return (u = n.history), (c = n.historySet), n.didChange;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t) return !1;
        let n = a.A.getChannel(t);
        if (null == n || n.isVocal() || n.isPrivate() || !(0, s.ke)(n.type)) return !1;
        let i = f({ channelId: t, history: d, historySet: _ });
        return (d = i.history), (_ = i.historySet), i.didChange;
    },
});
