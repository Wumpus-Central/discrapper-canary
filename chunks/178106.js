n.d(t, { Z: () => k }), n(653041), n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(31775),
    s = n.n(a),
    l = n(442837),
    c = n(570140),
    u = n(704907),
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = [],
    I = new (s())({ max: m.zb }),
    S = new u.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        lookupKey: (e) => p.Z.getSoundById(e),
        afterCompute: () => {},
        numFrequentlyItems: m.O6
    });
function T(e) {
    let { sound: t, trigger: n } = e;
    if (!x()) return;
    let r = t.soundId.toString();
    n === h.YQ.SOUNDBOARD && C(r);
}
function N(e) {
    var t;
    let { soundId: n, userId: r } = e;
    if (!L()) return;
    let i = n.toString();
    r !== (null == (t = f.default.getCurrentUser()) ? void 0 : t.id) && R(i) && A(i);
}
function A(e) {
    I.set(e, e);
}
function C(e) {
    S.track(e),
        O.push({
            key: e,
            timestamp: Date.now()
        }),
        S.compute();
}
function R(e) {
    for (let t of p.Z.getSounds().values()) if (null != t.find((t) => t.soundId.toString() === e)) return !0;
    return !1;
}
function P(e) {
    return o().mapValues(e, (e) => v(b({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) }));
}
function w() {
    var e;
    if (!x()) return;
    let t = null == (e = d.Z.frecencyWithoutFetchingLatest.playedSoundFrecency) ? void 0 : e.playedSounds;
    S.overwriteHistory(P(null != t ? t : {}), O);
}
function D(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    x() && t === g.yP.FRECENCY_AND_FAVORITES_SETTINGS && n && (O = []);
}
function L() {
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
class M extends (r = l.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(f.default, p.Z), (null == e ? void 0 : e.recentlyHeardCache) != null && I.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (O = e.playedEventsPendingFlush), this.syncWith([d.Z], w);
    }
    getState() {
        return {
            recentlyHeardCache: I.dump(),
            playedEventsPendingFlush: O
        };
    }
    hasPendingUsage() {
        return O.length > 0;
    }
    get playedSoundHistory() {
        return S.usageHistory;
    }
    get recentlyHeardSoundIds() {
        return I.values();
    }
    get frecentlyPlayedSounds() {
        return S.frequently;
    }
}
E(M, 'displayName', 'SoundboardEventStore'), E(M, 'persistKey', 'SoundboardEventStore');
let k = new M(c.Z, {
    GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: T,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: N,
    USER_SETTINGS_PROTO_UPDATE: D
});
