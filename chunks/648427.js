"use strict";
n.d(t, { A: () => h }), n(667532);
var i = n(17928),
    r = n(228366),
    a = n(95701),
    s = n(734057),
    l = n(696451),
    o = n(71393);
let d = [],
    c = new Set(),
    u = [],
    _ = new Set();
function E(e) {
    let { channelId: t, history: n, historySet: i } = e;
    if (i.has(t)) {
        let e = n.filter((e) => e !== t);
        return e.unshift(t), { didChange: !0, history: e, historySet: new Set([...e]) };
    }
    let r = [t, ...n],
        a = new Set(i);
    return (a.add(t), r.length > 10)
        ? ((r.length = 10), { didChange: !0, history: r, historySet: new Set([...r]) })
        : { didChange: !0, history: r, historySet: a };
}
class A extends i.Ay.PersistedStore {
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
        this.waitFor(l.Ay, o.A, s.A),
            (d = e?.voiceChannelHistory ?? []),
            (u = e?.textChannelHistory ?? []),
            (c = new Set([...d])),
            (_ = new Set([...u]));
    }
    getState() {
        return { voiceChannelHistory: d, textChannelHistory: u };
    }
    getVoiceChannelHistory() {
        return d;
    }
    getTextChannelHistory() {
        return u;
    }
}
let h = new A(r.h, {
    POST_CONNECTION_OPEN: function () {
        (c = new Set([...d])), (_ = new Set([...u]));
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t || !s.A.getChannel(t)?.isVocal()) return !1;
        let n = E({ channelId: t, history: d, historySet: c });
        return (d = n.history), (c = n.historySet), n.didChange;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null == t) return !1;
        let n = s.A.getChannel(t);
        if (null == n || n.isVocal() || n.isPrivate() || !(0, a.ke)(n.type)) return !1;
        let i = E({ channelId: t, history: u, historySet: _ });
        return (u = i.history), (_ = i.historySet), i.didChange;
    },
});
