n.d(t, { A: () => p, D: () => A }), n(321073);
var i = n(735438),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    _ = n(283047),
    l = n(617617),
    o = n(734057),
    E = n(71393),
    d = n(309010),
    c = n(967198),
    u = n(652215),
    I = n(355097);
let A = 100,
    T = new _.A({
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
        lookupKey: (e) => E.A.getGuild(e) ?? o.A.getChannel(e) ?? o.A.getChannel(o.A.getDMFromUserId(e)),
        afterCompute: () => {},
        numFrequentlyItems: A,
        maxSamples: 10,
    }),
    S = null,
    N = null;
function O(e) {
    let { guildId: t, channelId: n } = e,
        i = !1;
    return (
        n !== S &&
            ((S = n ?? null),
            null != n &&
                u.Ut1.test(n) &&
                ((i = !0), T.track(n), f.pendingUsages.push({ key: n, timestamp: Date.now() }))),
        t !== N &&
            ((N = t ?? null),
            null != t &&
                u.Ut1.test(t) &&
                ((i = !0), T.track(t), f.pendingUsages.push({ key: t, timestamp: Date.now() }))),
        i
    );
}
function R() {
    let e = l.A.frecencyWithoutFetchingLatest.guildAndChannelFrecency?.guildAndChannels;
    if (null == e) return !1;
    T.overwriteHistory(
        r().mapValues(e, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        f.pendingUsages,
    );
}
let f = { pendingUsages: [] };
class C extends a.Ay.PersistedStore {
    static displayName = "FrecencyStore";
    static persistKey = "FrecencyStore";
    initialize(e) {
        this.waitFor(o.A, E.A, d.A, c.A, l.A),
            null != e && ((e.pendingUsages = e.pendingUsages.filter((e) => null != e && u.Ut1.test(e.key))), (f = e)),
            this.syncWith([l.A], R);
    }
    getState() {
        return f;
    }
    hasPendingUsage() {
        return f.pendingUsages.length > 0;
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
        let t = o.A.getDMFromUserId(e);
        return null != t ? this.getScoreWithoutFetchingLatest(t) : 0;
    }
    getMaxScore() {
        return 10 * A;
    }
    getBonusScore() {
        return 100;
    }
    getVersion() {
        return T.version;
    }
}
let p = new C(s.h, {
    CHANNEL_SELECT: O,
    VOICE_CHANNEL_SELECT: O,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        return t === I.oD.FRECENCY_AND_FAVORITES_SETTINGS && !!n && ((f.pendingUsages = []), !0);
    },
});
