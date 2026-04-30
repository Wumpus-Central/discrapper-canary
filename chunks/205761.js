"use strict";
n.d(t, { A: () => N, D: () => p }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(283047),
    l = n(617617),
    u = n(734057),
    c = n(71393),
    d = n(309010),
    _ = n(967198),
    f = n(652215),
    h = n(355097);
let p = 100,
    E = new o.A({
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
        lookupKey: (e) => c.A.getGuild(e) ?? u.A.getChannel(e) ?? u.A.getChannel(u.A.getDMFromUserId(e)),
        afterCompute: () => {},
        numFrequentlyItems: p,
        maxSamples: 10,
    }),
    m = null,
    g = null;
function A(e) {
    let { guildId: t, channelId: n } = e,
        i = !1;
    return (
        n !== m &&
            ((m = n ?? null),
            null != n &&
                f.Ut1.test(n) &&
                ((i = !0), E.track(n), T.pendingUsages.push({ key: n, timestamp: Date.now() }))),
        t !== g &&
            ((g = t ?? null),
            null != t &&
                f.Ut1.test(t) &&
                ((i = !0), E.track(t), T.pendingUsages.push({ key: t, timestamp: Date.now() }))),
        i
    );
}
function I() {
    let e = l.A.frecencyWithoutFetchingLatest.guildAndChannelFrecency?.guildAndChannels;
    if (null == e) return !1;
    E.overwriteHistory(
        r().mapValues(e, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        T.pendingUsages,
    );
}
let T = { pendingUsages: [] };
class S extends s.Ay.PersistedStore {
    static displayName = "FrecencyStore";
    static persistKey = "FrecencyStore";
    initialize(e) {
        this.waitFor(u.A, c.A, d.A, _.A, l.A),
            null != e && ((e.pendingUsages = e.pendingUsages.filter((e) => null != e && f.Ut1.test(e.key))), (T = e)),
            this.syncWith([l.A], I);
    }
    getState() {
        return T;
    }
    hasPendingUsage() {
        return T.pendingUsages.length > 0;
    }
    get frecencyWithoutFetchingLatest() {
        return E;
    }
    getFrequentlyWithoutFetchingLatest() {
        return E.frequently;
    }
    getScoreWithoutFetchingLatest(e) {
        return E.getFrecency(e) ?? 0;
    }
    getScoreForDMWithoutFetchingLatest(e) {
        let t = u.A.getDMFromUserId(e);
        return null != t ? this.getScoreWithoutFetchingLatest(t) : 0;
    }
    getMaxScore() {
        return 10 * p;
    }
    getBonusScore() {
        return 100;
    }
    getVersion() {
        return E.version;
    }
}
let N = new S(a.h, {
    CHANNEL_SELECT: A,
    VOICE_CHANNEL_SELECT: A,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        return t === h.oD.FRECENCY_AND_FAVORITES_SETTINGS && !!n && ((T.pendingUsages = []), !0);
    },
});
