n.d(t, {
    A: () => k,
}),
    n(321073),
    n(896048);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(635377),
    o = n.n(s),
    l = n(311907),
    c = n(73153),
    u = n(283047),
    d = n(617617),
    f = n(287809),
    p = n(477851),
    _ = n(209932),
    h = n(807348),
    m = n(766864),
    g = n(980504),
    E = n(355097);

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

function A(e, t) {
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
let v = [],
    S = new (o())({
        max: g.E7,
    }),
    I = new u.A({
        computeBonus: () => 100,
        lookupKey: (e) => _.A.getSoundById(e),
        afterCompute: () => {},
        numFrequentlyItems: g.SC,
    });

function T(e) {
    let { sound: t, trigger: n } = e;
    if (!j()) return;
    let r = t.soundId.toString();
    n === h.Zm.SOUNDBOARD && R(r);
}

function C(e) {
    var t;
    let { soundId: n, userId: r } = e;
    if (!L()) return;
    let i = n.toString();
    r !== (null == (t = f.default.getCurrentUser()) ? void 0 : t.id) && w(i) && N(i);
}

function N(e) {
    S.set(e, e);
}

function R(e) {
    I.track(e),
        v.push({
            key: e,
            timestamp: Date.now(),
        }),
        I.compute();
}

function w(e) {
    for (let t of _.A.getSounds().values()) if (null != t.find((t) => t.soundId.toString() === e)) return !0;
    return !1;
}

function P(e) {
    return a().mapValues(e, (e) =>
        A(y({}, e), {
            recentUses: e.recentUses.map(Number).filter((e) => e > 0),
        }),
    );
}

function D() {
    var e;
    if (!j()) return;
    let t = null == (e = d.A.frecencyWithoutFetchingLatest.playedSoundFrecency) ? void 0 : e.playedSounds;
    I.overwriteHistory(P(null != t ? t : {}), v);
}

function x(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    j() && t === E.oD.FRECENCY_AND_FAVORITES_SETTINGS && n && (v = []);
}

function L() {
    return (0, p._)({
        location: "soundboard_event_store",
        autoTrackExposure: !1,
    }).canSeeRecentlyHeard;
}

function j() {
    return (0, m.YK)("soundboard_event_store");
}
class M extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(_.A, d.A, f.default),
            (null == e ? void 0 : e.recentlyHeardCache) != null && S.load(e.recentlyHeardCache),
            (null == e ? void 0 : e.playedEventsPendingFlush) != null && (v = e.playedEventsPendingFlush),
            this.syncWith([d.A], D);
    }
    getState() {
        return {
            recentlyHeardCache: S.dump(),
            playedEventsPendingFlush: v,
        };
    }
    hasPendingUsage() {
        return v.length > 0;
    }
    get playedSoundHistory() {
        return I.usageHistory;
    }
    get recentlyHeardSoundIds() {
        return S.values();
    }
    get frecentlyPlayedSounds() {
        return I.frequently;
    }
}
b(M, "displayName", "SoundboardEventStore"), b(M, "persistKey", "SoundboardEventStore");
let k = new M(c.h, {
    GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: T,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: C,
    USER_SETTINGS_PROTO_UPDATE: x,
});
