"use strict";
n.d(t, { A: () => b, D: () => g }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(283047),
    l = n(617617),
    u = n(734057),
    c = n(71393),
    d = n(309010),
    _ = n(967198),
    f = n(652215),
    p = n(355097);
let h = 10,
    m = 100,
    g = 100,
    E = new o.A({
        computeBonus: () => m,
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
        numFrequentlyItems: g,
        maxSamples: h,
    }),
    A = null,
    I = null;
function T(e) {
    let { guildId: t, channelId: n } = e,
        r = !1;
    return (
        n !== A &&
            ((A = n ?? null),
            null != n &&
                f.Ut1.test(n) &&
                ((r = !0), E.track(n), v.pendingUsages.push({ key: n, timestamp: Date.now() }))),
        t !== I &&
            ((I = t ?? null),
            null != t &&
                f.Ut1.test(t) &&
                ((r = !0), E.track(t), v.pendingUsages.push({ key: t, timestamp: Date.now() }))),
        r
    );
}
function y(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    return t === p.oD.FRECENCY_AND_FAVORITES_SETTINGS && !!n && ((v.pendingUsages = []), !0);
}
function S() {
    let e = l.A.frecencyWithoutFetchingLatest.guildAndChannelFrecency?.guildAndChannels;
    if (null == e) return !1;
    E.overwriteHistory(
        i().mapValues(e, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        v.pendingUsages,
    );
}
let v = { pendingUsages: [] };
class C extends a.Ay.PersistedStore {
    static displayName = "FrecencyStore";
    static persistKey = "FrecencyStore";
    initialize(e) {
        this.waitFor(u.A, c.A, d.A, _.A, l.A),
            null != e && ((e.pendingUsages = e.pendingUsages.filter((e) => null != e && f.Ut1.test(e.key))), (v = e)),
            this.syncWith([l.A], S);
    }
    getState() {
        return v;
    }
    hasPendingUsage() {
        return v.pendingUsages.length > 0;
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
        return g * h;
    }
    getBonusScore() {
        return m;
    }
}
let b = new C(s.h, { CHANNEL_SELECT: T, VOICE_CHANNEL_SELECT: T, USER_SETTINGS_PROTO_UPDATE: y });
