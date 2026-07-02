"use strict";
n.d(t, { A: () => x }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(989349),
    a = n.n(s),
    o = n(17928),
    l = n(228366),
    u = n(283047),
    d = n(885386),
    c = n(617617),
    _ = n(287809),
    h = n(174459),
    f = n(824744),
    E = n(935208);
n(980504);
var p = n(652215),
    m = n(355097);
let g = new Map(),
    A = new Map(),
    I = new Set(),
    T = 0,
    S = 0,
    N = new Set(),
    C = new Map(),
    y = Date.UTC(2026, 5, 29),
    v = new u.A({
        computeBonus: () => 100,
        computeWeight: (e) => {
            if (e > a()().diff(y, "days")) return 0;
            let t = 1;
            return (
                e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10),
                t
            );
        },
        lookupKey: (e) => e,
        afterCompute: () => {},
    }),
    R = [],
    O = !1,
    b = !1;
function L(e) {
    let { sound: t } = e,
        n = g.get(t.guildId),
        i = n?.findIndex((e) => e.soundId === t.soundId);
    null != n && null != i && -1 !== i
        ? ((n[i] = t), g.set(t.guildId, [...n]))
        : null != n && (n?.push(t), g.set(t.guildId, [...n]));
}
let D = r().debounce((e, t) => {
    h.default.track(p.HAw.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, f.M)(e)), location_stack: t }),
        d.dG.updateSetting({ volume: e });
}, 1e3);
function P() {
    b = d.dG.getSetting()?.volume === 0;
}
function w(e) {
    let t = e?.audioContextSettings?.user ?? {};
    for (let [e, n] of Object.entries(t)) n.soundboardMuted ? I.add(e) : I.delete(e);
    for (let e of I.keys()) null == t[e] && I.delete(e);
}
class M extends o.Ay.Store {
    static displayName = "SoundboardStore";
    initialize() {
        this.waitFor(c.A, _.default), w(c.A.settings), P();
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(g),
            favoritedSoundIds: Array.from(N),
            localSoundboardMutes: Array.from(I),
        };
    }
    getSounds() {
        return g;
    }
    getSoundsForGuild(e) {
        return g.get(e);
    }
    getSound(e, t) {
        return (g.get(e) ?? []).find((e) => e.soundId === t);
    }
    getSoundById(e) {
        return Array.from(g.values())
            .flat()
            .find((t) => t.soundId === e);
    }
    isFetchingSounds() {
        return 1 === S;
    }
    isFetchingDefaultSounds() {
        return 1 === T;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === T;
    }
    hasFetchedDefaultSounds() {
        return 2 === T;
    }
    isUserPlayingSounds(e) {
        let t = C.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != A.get(e);
    }
    isFavoriteSound(e) {
        return N.has(e);
    }
    getFavorites() {
        return N;
    }
    getFrequentlyUsedSoundIds() {
        return v.frequently;
    }
    hasPendingUsage() {
        return R.length > 0;
    }
    get playedSoundFrecencyWithoutFetchingLatest() {
        return v;
    }
    isLocalSoundboardMuted(e) {
        return I.has(e);
    }
    isSoundboardVolumeMuted() {
        return b;
    }
    hasHadOtherUserPlaySoundInSession() {
        return O;
    }
    hasFetchedAllSounds() {
        return 2 === S && 2 === T;
    }
    isFetchingAnySounds() {
        return 1 === S || 1 === T;
    }
}
let x = new M(l.h, {
    LOGOUT: function () {
        g.clear(), A.clear(), C.clear(), (O = !1), (S = 0), (T = 0), (b = !1), (R = []), v.overwriteHistory({});
    },
    GUILD_SOUNDBOARD_FETCH: function () {
        S = 1;
    },
    GUILD_SOUNDBOARD_SOUND_CREATE: L,
    GUILD_SOUNDBOARD_SOUND_UPDATE: L,
    GUILD_SOUNDBOARD_SOUND_DELETE: function (e) {
        let { soundId: t, guildId: n } = e,
            i = g.get(n),
            r = i?.findIndex((e) => e.soundId === t);
        null == i || null == r || r < 0 || (i.splice(r, 1), g.set(n, [...i]));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_START: function (e) {
        let { soundId: t, userId: n } = e,
            i = (A.get(t) ?? 0) + 1,
            r = (C.get(n) ?? 0) + 1;
        A.set(t, i), C.set(n, r), n !== _.default.getCurrentUser()?.id && (O = !0);
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_END: function (e) {
        let { soundId: t, userId: n } = e,
            i = (A.get(t) ?? 0) - 1,
            r = (C.get(n) ?? 0) - 1;
        i <= 0 ? A.delete(t) : A.set(t, i), r <= 0 ? C.delete(n) : C.set(n, r);
    },
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: function (e) {
        let { guildId: t, soundboardSounds: n } = e;
        g.set(t, n);
    },
    USER_SOUNDBOARD_SET_VOLUME: function (e) {
        let { volume: t, location: n } = e,
            i = b;
        (b = 0 === t), D(t, n), i !== b && D.flush();
    },
    SOUNDBOARD_TRACK_USAGE: function (e) {
        let { soundId: t } = e;
        v.track(t), R.push({ key: t, timestamp: Date.now() }), v.compute();
    },
    VOICE_CHANNEL_SELECT: function () {
        A.clear(), C.clear();
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t, wasSaved: n } = e,
            { type: i, proto: s } = t;
        switch (i) {
            case m.oD.FRECENCY_AND_FAVORITES_SETTINGS:
                (N = new Set(s?.favoriteSoundboardSounds?.soundIds ?? [])),
                    n && (R = []),
                    s?.playedSoundFrecency != null &&
                        v.overwriteHistory(
                            r().mapValues(s.playedSoundFrecency.playedSounds ?? {}, (e) => ({
                                ...e,
                                recentUses: e.recentUses.map(Number).filter((e) => e > 0),
                            })),
                            R,
                        );
                break;
            case m.oD.PRELOADED_USER_SETTINGS:
                w(s), P();
        }
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function () {
        T = 1;
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function (e) {
        let { soundboardSounds: t } = e;
        g.set("0", t), (T = 2);
    },
    SOUNDBOARD_SOUNDS_RECEIVED: function (e) {
        let { updates: t } = e;
        t.forEach((e) => {
            let { guildId: t, sounds: n } = e;
            g.set(t, n);
        }),
            (S = 2);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        g.delete(t.id);
    },
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function (e) {
        let { userId: t } = e;
        I.has(t) ? I.delete(t) : I.add(t);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { soundboardStoreState: t } = e;
        (g = new Map(E.default.entries(t.soundboardSounds))),
            (N = new Set(t.favoritedSoundIds)),
            (I = new Set(t.localSoundboardMutes));
    },
});
