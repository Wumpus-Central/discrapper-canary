"use strict";
n.d(t, { A: () => y, D: () => h }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(283047),
    l = n(617617),
    u = n(734057),
    c = n(71393),
    d = n(309010),
    _ = n(967198),
    f = n(652215),
    p = n(355097);
let h = 100,
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
        numFrequentlyItems: h,
        maxSamples: 10,
    }),
    m = null,
    g = null;
function A(e) {
    let { guildId: t, channelId: n } = e,
        r = !1;
    return (
        n !== m &&
            ((m = n ?? null),
            null != n &&
                f.Ut1.test(n) &&
                ((r = !0), E.track(n), T.pendingUsages.push({ key: n, timestamp: Date.now() }))),
        t !== g &&
            ((g = t ?? null),
            null != t &&
                f.Ut1.test(t) &&
                ((r = !0), E.track(t), T.pendingUsages.push({ key: t, timestamp: Date.now() }))),
        r
    );
}
function I() {
    let e = l.A.frecencyWithoutFetchingLatest.guildAndChannelFrecency?.guildAndChannels;
    if (null == e) return !1;
    E.overwriteHistory(
        i().mapValues(e, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
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
        return 10 * h;
    }
    getBonusScore() {
        return 100;
    }
    getVersion() {
        return E.version;
    }
}
let y = new S(a.h, {
    CHANNEL_SELECT: A,
    VOICE_CHANNEL_SELECT: A,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        return t === p.oD.FRECENCY_AND_FAVORITES_SETTINGS && !!n && ((T.pendingUsages = []), !0);
    },
});
