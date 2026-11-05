n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(855986),
    s = n(73153),
    l = n(283047),
    o = n(617617),
    d = n(734057),
    c = n(71393),
    u = n(309010),
    _ = n(967198),
    E = n(652215),
    A = n(355097);
let h = new l.A({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return (
                0 === e
                    ? (t = 100)
                    : e >= 1 && e < 2
                      ? (t = 70)
                      : e >= 2 && e < 4
                        ? (t = 50)
                        : e >= 4 && e < 7
                          ? (t = 30)
                          : e >= 7 && (t = 10),
                t
            );
        },
        lookupKey: (e) => c.A.getGuild(e) ?? d.A.getChannel(e) ?? d.A.getChannel(d.A.getDMFromUserId(e)),
        afterCompute: () => {},
        numFrequentlyItems: 100,
        maxSamples: 10,
    }),
    f = null,
    I = null;
function p(e) {
    let { guildId: t, channelId: n } = e,
        i = !1;
    return (
        n !== f &&
            ((f = n ?? null),
            null != n &&
                E.Ut1.test(n) &&
                ((i = !0), h.track(n), g.pendingUsages.push({ key: n, timestamp: Date.now() }))),
        t !== I &&
            ((I = t ?? null),
            null != t &&
                E.Ut1.test(t) &&
                ((i = !0), h.track(t), g.pendingUsages.push({ key: t, timestamp: Date.now() }))),
        i
    );
}
function m() {
    let e = o.A.frecencyWithoutFetchingLatest.guildAndChannelFrecency?.guildAndChannels;
    if (null == e) return !1;
    h.overwriteHistory(
        r().mapValues(e, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        g.pendingUsages,
    );
}
let g = { pendingUsages: [] };
class T extends a.Ay.PersistedStore {
    static displayName = "FrecencyStore";
    static persistKey = "FrecencyStore";
    initialize(e) {
        (this.waitFor(d.A, c.A, u.Ay, _.A, o.A),
            null != e && ((e.pendingUsages = e.pendingUsages.filter((e) => null != e && E.Ut1.test(e.key))), (g = e)),
            this.syncWith([o.A], m));
    }
    getState() {
        return g;
    }
    hasPendingUsage() {
        return g.pendingUsages.length > 0;
    }
    get frecencyWithoutFetchingLatest() {
        return h;
    }
    getFrequentlyWithoutFetchingLatest() {
        return h.frequently;
    }
    getScoreWithoutFetchingLatest(e) {
        return h.getFrecency(e) ?? 0;
    }
    getScoreForDMWithoutFetchingLatest(e) {
        let t = d.A.getDMFromUserId(e);
        return null != t ? this.getScoreWithoutFetchingLatest(t) : 0;
    }
    getMaxScore() {
        return 1e3;
    }
    getBonusScore() {
        return 100;
    }
    getVersion() {
        return h.version;
    }
}
let S = new T(s.h, {
    CHANNEL_SELECT: p,
    VOICE_CHANNEL_SELECT: p,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        return t === A.oD.FRECENCY_AND_FAVORITES_SETTINGS && !!n && ((g.pendingUsages = []), !0);
    },
});
n.d(t, {}, { A: S });
