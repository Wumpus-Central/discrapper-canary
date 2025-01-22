r.d(n, {
    C: function () {
        return b;
    }
});
var i,
    a = r(653041);
var o = r(392711),
    s = r.n(o),
    l = r(442837),
    u = r(570140),
    c = r(704907),
    d = r(581883),
    f = r(592125),
    p = r(430824),
    h = r(944486),
    _ = r(914010),
    m = r(981631),
    g = r(526761);
function E(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let v = 10,
    y = 100,
    b = 100,
    I = new c.ZP({
        computeBonus: () => y,
        computeWeight: (e) => {
            let n = 1;
            return 0 === e ? (n = 100) : e >= 1 && e < 2 ? (n = 70) : e >= 2 && e < 4 ? (n = 50) : e >= 4 && e < 7 ? (n = 30) : e >= 7 && (n = 10), n;
        },
        lookupKey: (e) => {
            var n, r;
            return null !== (r = null !== (n = p.Z.getGuild(e)) && void 0 !== n ? n : f.Z.getChannel(e)) && void 0 !== r ? r : f.Z.getChannel(f.Z.getDMFromUserId(e));
        },
        afterCompute: () => {},
        numFrequentlyItems: b,
        maxSamples: v
    }),
    T = null,
    S = null;
function A(e) {
    let { guildId: n, channelId: r } = e,
        i = !1;
    return (
        r !== T &&
            ((T = null != r ? r : null),
            null != r &&
                m.Xyh.test(r) &&
                ((i = !0),
                I.track(r),
                R.pendingUsages.push({
                    key: r,
                    timestamp: Date.now()
                }))),
        n !== S &&
            ((S = null != n ? n : null),
            null != n &&
                m.Xyh.test(n) &&
                ((i = !0),
                I.track(n),
                R.pendingUsages.push({
                    key: n,
                    timestamp: Date.now()
                }))),
        i
    );
}
function C(e) {
    let {
        settings: { type: n },
        wasSaved: r
    } = e;
    return n === g.yP.FRECENCY_AND_FAVORITES_SETTINGS && !!r && ((R.pendingUsages = []), !0);
}
function N() {
    var e;
    let n = null === (e = d.Z.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
    if (null == n) return !1;
    I.overwriteHistory(
        s().mapValues(n, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        R.pendingUsages
    );
}
let R = { pendingUsages: [] };
class O extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(_.Z, h.Z), null != e && ((e.pendingUsages = e.pendingUsages.filter((e) => null != e && m.Xyh.test(e.key))), (R = e)), this.syncWith([d.Z], N);
    }
    getState() {
        return R;
    }
    hasPendingUsage() {
        return R.pendingUsages.length > 0;
    }
    get frecencyWithoutFetchingLatest() {
        return I;
    }
    getFrequentlyWithoutFetchingLatest() {
        return I.frequently;
    }
    getScoreWithoutFetchingLatest(e) {
        var n;
        return null !== (n = I.getFrecency(e)) && void 0 !== n ? n : 0;
    }
    getScoreForDMWithoutFetchingLatest(e) {
        let n = f.Z.getDMFromUserId(e);
        return null != n ? this.getScoreWithoutFetchingLatest(n) : 0;
    }
    getMaxScore() {
        return b * v;
    }
    getBonusScore() {
        return y;
    }
}
E(O, 'displayName', 'FrecencyStore'),
    E(O, 'persistKey', 'FrecencyStore'),
    (n.Z = new O(u.Z, {
        CHANNEL_SELECT: A,
        VOICE_CHANNEL_SELECT: A,
        USER_SETTINGS_PROTO_UPDATE: C
    }));
