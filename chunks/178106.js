n.d(t, { Z: () => P }), n(653041), n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(31775),
    o = n.n(s),
    l = n(442837),
    u = n(570140),
    c = n(704907),
    d = n(581883),
    f = n(594174),
    _ = n(164878),
    p = n(763296),
    h = n(697426),
    m = n(710111),
    g = n(526761);
function E(e, t, n) {
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
let v = [],
    y = new (o())({ max: m.zb }),
    I = new c.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        lookupKey: (e) => p.Z.getSoundById(e),
        afterCompute: () => {},
        numFrequentlyItems: m.O6
    });
function b(e) {
    let { sound: t, trigger: n } = e;
    if (!x()) return;
    let i = t.soundId.toString();
    n === h.YQ.SOUNDBOARD && A(i);
}
function T(e) {
    var t;
    let { soundId: n, userId: i } = e;
    if (!D()) return;
    let r = n.toString();
    i !== (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && N(r) && S(r);
}
function S(e) {
    y.set(e, e);
}
function A(e) {
    I.track(e),
        v.push({
            key: e,
            timestamp: Date.now()
        }),
        I.compute();
}
function N(e) {
    for (let t of p.Z.getSounds().values()) if (null != t.find((t) => t.soundId.toString() === e)) return !0;
    return !1;
}
function C(e) {
    return a().mapValues(e, (e) => ({
        ...e,
        recentUses: e.recentUses.map(Number).filter((e) => e > 0)
    }));
}
function R() {
    var e;
    if (!x()) return;
    let t = null === (e = d.Z.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
    I.overwriteHistory(C(null != t ? t : {}), v);
}
function O(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    x() && t === g.yP.FRECENCY_AND_FAVORITES_SETTINGS && n && (v = []);
}
function D() {
    return (0, _.v)({
        location: 'soundboard_event_store',
        autoTrackExposure: !1
    }).canSeeRecentlyHeard;
}
function x() {
    return (0, _.v)({
        location: 'soundboard_event_store',
        autoTrackExposure: !1
    }).canSeeFrequentlyPlayed;
}
class L extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(f.default, p.Z), (null == e ? void 0 : e.recentlyHeardCache) != null && y.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (v = e.playedEventsPendingFlush), this.syncWith([d.Z], R);
    }
    getState() {
        return {
            recentlyHeardCache: y.dump(),
            playedEventsPendingFlush: v
        };
    }
    hasPendingUsage() {
        return v.length > 0;
    }
    get playedSoundHistory() {
        return I.usageHistory;
    }
    get recentlyHeardSoundIds() {
        return y.values();
    }
    get frecentlyPlayedSounds() {
        return I.frequently;
    }
}
E(L, 'displayName', 'SoundboardEventStore'), E(L, 'persistKey', 'SoundboardEventStore');
let P = new L(u.Z, {
    GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: b,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: T,
    USER_SETTINGS_PROTO_UPDATE: O
});
