n.d(t, { A: () => O, D: () => I }), n(321073);
var i = n(735438),
    a = n.n(i),
    r = n(17928),
    s = n(228366),
    l = n(283047),
    o = n(617617),
    d = n(734057),
    c = n(71393),
    _ = n(309010),
    E = n(967198),
    u = n(652215),
    A = n(355097);
let I = 100,
    T = new l.A({
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
        numFrequentlyItems: I,
        maxSamples: 10,
    }),
    h = null,
    S = null;
function N(e) {
    let { guildId: t, channelId: n } = e,
        i = !1;
    return (
        n !== h &&
            ((h = n ?? null),
            null != n &&
                u.Ut1.test(n) &&
                ((i = !0), T.track(n), p.pendingUsages.push({ key: n, timestamp: Date.now() }))),
        t !== S &&
            ((S = t ?? null),
            null != t &&
                u.Ut1.test(t) &&
                ((i = !0), T.track(t), p.pendingUsages.push({ key: t, timestamp: Date.now() }))),
        i
    );
}
function f() {
    let e = o.A.frecencyWithoutFetchingLatest.guildAndChannelFrecency?.guildAndChannels;
    if (null == e) return !1;
    T.overwriteHistory(
        a().mapValues(e, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        p.pendingUsages,
    );
}
let p = { pendingUsages: [] };
class m extends r.Ay.PersistedStore {
    static displayName = "FrecencyStore";
    static persistKey = "FrecencyStore";
    initialize(e) {
        this.waitFor(d.A, c.A, _.A, E.A, o.A),
            null != e && ((e.pendingUsages = e.pendingUsages.filter((e) => null != e && u.Ut1.test(e.key))), (p = e)),
            this.syncWith([o.A], f);
    }
    getState() {
        return p;
    }
    hasPendingUsage() {
        return p.pendingUsages.length > 0;
    }
    get frecencyWithoutFetchingLatest() {
        return T;
    }
    getFrequentlyWithoutFetchingLatest() {
        return T.frequently;
    }
    getScoreWithoutFetchingLatest(e) {
        return T.getFrecency(e) ?? 0;
    }
    getScoreForDMWithoutFetchingLatest(e) {
        let t = d.A.getDMFromUserId(e);
        return null != t ? this.getScoreWithoutFetchingLatest(t) : 0;
    }
    getMaxScore() {
        return 10 * I;
    }
    getBonusScore() {
        return 100;
    }
    getVersion() {
        return T.version;
    }
}
let O = new m(s.h, {
    CHANNEL_SELECT: N,
    VOICE_CHANNEL_SELECT: N,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        return t === A.oD.FRECENCY_AND_FAVORITES_SETTINGS && !!n && ((p.pendingUsages = []), !0);
    },
});
