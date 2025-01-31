n.d(t, {
    C: () => v,
    Z: () => R
}),
    n(653041);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(704907),
    u = n(581883),
    c = n(592125),
    d = n(430824),
    f = n(944486),
    _ = n(914010),
    p = n(981631),
    h = n(526761);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = 10,
    E = 100,
    v = 100,
    y = new l.ZP({
        computeBonus: () => E,
        computeWeight: (e) => {
            let t = 1;
            return 0 === e ? (t = 100) : e >= 1 && e < 2 ? (t = 70) : e >= 2 && e < 4 ? (t = 50) : e >= 4 && e < 7 ? (t = 30) : e >= 7 && (t = 10), t;
        },
        lookupKey: (e) => {
            var t, n;
            return null !== (n = null !== (t = d.Z.getGuild(e)) && void 0 !== t ? t : c.Z.getChannel(e)) && void 0 !== n ? n : c.Z.getChannel(c.Z.getDMFromUserId(e));
        },
        afterCompute: () => {},
        numFrequentlyItems: v,
        maxSamples: g
    }),
    I = null,
    b = null;
function T(e) {
    let { guildId: t, channelId: n } = e,
        i = !1;
    return (
        n !== I &&
            ((I = null != n ? n : null),
            null != n &&
                p.Xyh.test(n) &&
                ((i = !0),
                y.track(n),
                N.pendingUsages.push({
                    key: n,
                    timestamp: Date.now()
                }))),
        t !== b &&
            ((b = null != t ? t : null),
            null != t &&
                p.Xyh.test(t) &&
                ((i = !0),
                y.track(t),
                N.pendingUsages.push({
                    key: t,
                    timestamp: Date.now()
                }))),
        i
    );
}
function S(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    return t === h.yP.FRECENCY_AND_FAVORITES_SETTINGS && !!n && ((N.pendingUsages = []), !0);
}
function A() {
    var e;
    let t = null === (e = u.Z.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
    if (null == t) return !1;
    y.overwriteHistory(
        a().mapValues(t, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        N.pendingUsages
    );
}
let N = { pendingUsages: [] };
class C extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(_.Z, f.Z), null != e && ((e.pendingUsages = e.pendingUsages.filter((e) => null != e && p.Xyh.test(e.key))), (N = e)), this.syncWith([u.Z], A);
    }
    getState() {
        return N;
    }
    hasPendingUsage() {
        return N.pendingUsages.length > 0;
    }
    get frecencyWithoutFetchingLatest() {
        return y;
    }
    getFrequentlyWithoutFetchingLatest() {
        return y.frequently;
    }
    getScoreWithoutFetchingLatest(e) {
        var t;
        return null !== (t = y.getFrecency(e)) && void 0 !== t ? t : 0;
    }
    getScoreForDMWithoutFetchingLatest(e) {
        let t = c.Z.getDMFromUserId(e);
        return null != t ? this.getScoreWithoutFetchingLatest(t) : 0;
    }
    getMaxScore() {
        return v * g;
    }
    getBonusScore() {
        return E;
    }
}
m(C, 'displayName', 'FrecencyStore'), m(C, 'persistKey', 'FrecencyStore');
let R = new C(o.Z, {
    CHANNEL_SELECT: T,
    VOICE_CHANNEL_SELECT: T,
    USER_SETTINGS_PROTO_UPDATE: S
});
