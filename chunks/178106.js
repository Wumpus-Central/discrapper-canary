var i,
    a = r(653041);
var o = r(47120);
var s = r(392711),
    l = r.n(s),
    u = r(31775),
    c = r.n(u),
    d = r(442837),
    f = r(570140),
    p = r(704907),
    h = r(581883),
    _ = r(594174),
    m = r(164878),
    g = r(763296),
    E = r(697426),
    v = r(710111),
    y = r(526761);
function b(e, n, r) {
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
let I = [],
    T = new (c())({ max: v.zb }),
    S = new p.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let n = 1;
            return e <= 3 ? (n = 100) : e <= 15 ? (n = 70) : e <= 30 ? (n = 50) : e <= 45 ? (n = 30) : e <= 80 && (n = 10), n;
        },
        lookupKey: (e) => g.Z.getSoundById(e),
        afterCompute: () => {},
        numFrequentlyItems: v.O6
    });
function A(e) {
    let { sound: n, trigger: r } = e;
    if (!P()) return;
    let i = n.soundId.toString();
    r === E.YQ.SOUNDBOARD && R(i);
}
function C(e) {
    var n;
    let { soundId: r, userId: i } = e;
    if (!w()) return;
    let a = r.toString();
    i !== (null === (n = _.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && O(a) && N(a);
}
function N(e) {
    T.set(e, e);
}
function R(e) {
    S.track(e),
        I.push({
            key: e,
            timestamp: Date.now()
        }),
        S.compute();
}
function O(e) {
    for (let n of g.Z.getSounds().values()) if (null != n.find((n) => n.soundId.toString() === e)) return !0;
    return !1;
}
function D(e) {
    return l().mapValues(e, (e) => ({
        ...e,
        recentUses: e.recentUses.map(Number).filter((e) => e > 0)
    }));
}
function L() {
    var e;
    if (!P()) return;
    let n = null === (e = h.Z.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
    S.overwriteHistory(D(null != n ? n : {}), I);
}
function x(e) {
    let {
        settings: { type: n },
        wasSaved: r
    } = e;
    P() && n === y.yP.FRECENCY_AND_FAVORITES_SETTINGS && r && (I = []);
}
function w() {
    return (0, m.v)({
        location: 'soundboard_event_store',
        autoTrackExposure: !1
    }).canSeeRecentlyHeard;
}
function P() {
    return (0, m.v)({
        location: 'soundboard_event_store',
        autoTrackExposure: !1
    }).canSeeFrequentlyPlayed;
}
class M extends (i = d.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(_.default, g.Z), (null == e ? void 0 : e.recentlyHeardCache) != null && T.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (I = e.playedEventsPendingFlush), this.syncWith([h.Z], L);
    }
    getState() {
        return {
            recentlyHeardCache: T.dump(),
            playedEventsPendingFlush: I
        };
    }
    hasPendingUsage() {
        return I.length > 0;
    }
    get playedSoundHistory() {
        return S.usageHistory;
    }
    get recentlyHeardSoundIds() {
        return T.values();
    }
    get frecentlyPlayedSounds() {
        return S.frequently;
    }
}
b(M, 'displayName', 'SoundboardEventStore'),
    b(M, 'persistKey', 'SoundboardEventStore'),
    (n.Z = new M(f.Z, {
        GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: A,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: C,
        USER_SETTINGS_PROTO_UPDATE: x
    }));
