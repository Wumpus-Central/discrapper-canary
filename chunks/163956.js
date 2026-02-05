"use strict";
n.d(t, { A: () => D }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(635377),
    s = n.n(a),
    o = n(311907),
    l = n(73153),
    u = n(283047),
    c = n(617617),
    d = n(287809),
    _ = n(477851),
    f = n(209932),
    p = n(807348);
n(980504);
var h = n(355097);
let m = [],
    g = new (s())({ max: 6 }),
    E = new u.A({
        computeBonus: () => 100,
        lookupKey: (e) => f.A.getSoundById(e),
        afterCompute: () => {},
        numFrequentlyItems: 100,
    });
function A(e) {
    let { sound: t, trigger: n } = e;
    if (!R()) return;
    let r = t.soundId.toString();
    n === p.Zm.SOUNDBOARD && y(r);
}
function I(e) {
    let { soundId: t, userId: n } = e;
    if (!N()) return;
    let r = t.toString();
    n !== d.default.getCurrentUser()?.id && S(r) && T(r);
}
function T(e) {
    g.set(e, e);
}
function y(e) {
    E.track(e), m.push({ key: e, timestamp: Date.now() }), E.compute();
}
function S(e) {
    for (let t of f.A.getSounds().values()) if (null != t.find((t) => t.soundId.toString() === e)) return !0;
    return !1;
}
function v(e) {
    return i().mapValues(e, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) }));
}
function C() {
    if (!R()) return;
    let e = c.A.frecencyWithoutFetchingLatest.playedSoundFrecency?.playedSounds;
    E.overwriteHistory(v(e ?? {}), m);
}
function b(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    R() && t === h.oD.FRECENCY_AND_FAVORITES_SETTINGS && n && (m = []);
}
function N() {
    return (0, _._)({ location: "soundboard_event_store", autoTrackExposure: !1 }).canSeeRecentlyHeard;
}
function R() {
    return (0, _._)({ location: "soundboard_event_store", autoTrackExposure: !1 }).canSeeFrequentlyPlayed;
}
class O extends o.Ay.PersistedStore {
    static displayName = "SoundboardEventStore";
    static persistKey = "SoundboardEventStore";
    initialize(e) {
        this.waitFor(f.A, c.A, d.default),
            e?.recentlyHeardCache != null && g.load(e.recentlyHeardCache),
            e?.playedEventsPendingFlush != null && (m = e.playedEventsPendingFlush),
            this.syncWith([c.A], C);
    }
    getState() {
        return { recentlyHeardCache: g.dump(), playedEventsPendingFlush: m };
    }
    hasPendingUsage() {
        return m.length > 0;
    }
    get playedSoundHistory() {
        return E.usageHistory;
    }
    get recentlyHeardSoundIds() {
        return g.values();
    }
    get frecentlyPlayedSounds() {
        return E.frequently;
    }
}
let D = new O(l.h, {
    GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: A,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: I,
    USER_SETTINGS_PROTO_UPDATE: b,
});
