n.d(t, { Z: () => k }), n(539854), n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(31775),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(704907),
    d = n(581883),
    f = n(594174),
    _ = n(164878),
    p = n(763296),
    h = n(697426),
    m = n(771784),
    g = n(710111),
    E = n(526761);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = [],
    T = new (s())({ max: g.zb }),
    S = new u.Z({
        computeBonus: () => 100,
        lookupKey: (e) => p.Z.getSoundById(e),
        afterCompute: () => {},
        numFrequentlyItems: g.O6,
    });
function A(e) {
    let { sound: t, trigger: n } = e;
    if (!M()) return;
    let r = t.soundId.toString();
    n === h.YQ.SOUNDBOARD && R(r);
}
function C(e) {
    var t;
    let { soundId: n, userId: r } = e;
    if (!L()) return;
    let i = n.toString();
    r !== (null == (t = f.default.getCurrentUser()) ? void 0 : t.id) && P(i) && N(i);
}
function N(e) {
    T.set(e, e);
}
function R(e) {
    S.track(e),
        I.push({
            key: e,
            timestamp: Date.now(),
        }),
        S.compute();
}
function P(e) {
    for (let t of p.Z.getSounds().values()) if (null != t.find((t) => t.soundId.toString() === e)) return !0;
    return !1;
}
function D(e) {
    return a().mapValues(e, (e) => v(y({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) }));
}
function w() {
    var e;
    if (!M()) return;
    let t = null == (e = d.Z.frecencyWithoutFetchingLatest.playedSoundFrecency) ? void 0 : e.playedSounds;
    S.overwriteHistory(D(null != t ? t : {}), I);
}
function x(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    M() && t === E.yP.FRECENCY_AND_FAVORITES_SETTINGS && n && (I = []);
}
function L() {
    return (0, _.v)({
        location: "soundboard_event_store",
        autoTrackExposure: !1,
    }).canSeeRecentlyHeard;
}
function M() {
    return (0, m.Lq)("soundboard_event_store");
}
class j extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(p.Z, d.Z, f.default),
            (null == e ? void 0 : e.recentlyHeardCache) != null && T.load(e.recentlyHeardCache),
            (null == e ? void 0 : e.playedEventsPendingFlush) != null && (I = e.playedEventsPendingFlush),
            this.syncWith([d.Z], w);
    }
    getState() {
        return {
            recentlyHeardCache: T.dump(),
            playedEventsPendingFlush: I,
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
b(j, "displayName", "SoundboardEventStore"), b(j, "persistKey", "SoundboardEventStore");
let k = new j(c.Z, {
    GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: A,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: C,
    USER_SETTINGS_PROTO_UPDATE: x,
});
