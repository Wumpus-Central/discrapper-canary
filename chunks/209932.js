"use strict";
n.d(t, { A: () => w }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(536637),
    s = n.n(a),
    l = n(17928),
    o = n(228366),
    d = n(283047),
    c = n(885386),
    u = n(617617),
    _ = n(287809),
    E = n(174459),
    A = n(824744),
    h = n(935208);
n(980504);
var I = n(652215),
    f = n(355097);
let p = new Map(),
    T = new Map(),
    m = new Set(),
    g = 0,
    S = 0,
    N = new Set(),
    C = new Map(),
    R = Date.UTC(2026, 5, 29),
    O = new d.A({
        computeBonus: () => 100,
        computeWeight: (e) => {
            if (e > s()().diff(R, "days")) return 0;
            let t = 1;
            return (
                e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10),
                t
            );
        },
        lookupKey: (e) => e,
        afterCompute: () => {},
    }),
    L = [],
    y = !1,
    D = !1;
function v(e) {
    let { sound: t } = e,
        n = p.get(t.guildId),
        i = n?.findIndex((e) => e.soundId === t.soundId);
    null != n && null != i && -1 !== i
        ? ((n[i] = t), p.set(t.guildId, [...n]))
        : null != n && (n?.push(t), p.set(t.guildId, [...n]));
}
let b = r().debounce((e, t) => {
    E.default.track(I.HAw.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, A.M)(e)), location_stack: t }),
        c.dG.updateSetting({ volume: e });
}, 1e3);
function M() {
    D = c.dG.getSetting()?.volume === 0;
}
function P(e) {
    let t = e?.audioContextSettings?.user ?? {};
    for (let [e, n] of Object.entries(t)) n.soundboardMuted ? m.add(e) : m.delete(e);
    for (let e of m.keys()) null == t[e] && m.delete(e);
}
class U extends l.Ay.Store {
    static displayName = "SoundboardStore";
    initialize() {
        this.waitFor(u.A, _.default), P(u.A.settings), M();
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(p),
            favoritedSoundIds: Array.from(N),
            localSoundboardMutes: Array.from(m),
        };
    }
    getSounds() {
        return p;
    }
    getSoundsForGuild(e) {
        return p.get(e);
    }
    getSound(e, t) {
        return (p.get(e) ?? []).find((e) => e.soundId === t);
    }
    getSoundById(e) {
        return Array.from(p.values())
            .flat()
            .find((t) => t.soundId === e);
    }
    isFetchingSounds() {
        return 1 === S;
    }
    isFetchingDefaultSounds() {
        return 1 === g;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === g;
    }
    hasFetchedDefaultSounds() {
        return 2 === g;
    }
    isUserPlayingSounds(e) {
        let t = C.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != T.get(e);
    }
    isFavoriteSound(e) {
        return N.has(e);
    }
    getFavorites() {
        return N;
    }
    getFrequentlyUsedSoundIds() {
        return O.frequently;
    }
    hasPendingUsage() {
        return L.length > 0;
    }
    get playedSoundFrecencyWithoutFetchingLatest() {
        return O;
    }
    isLocalSoundboardMuted(e) {
        return m.has(e);
    }
    isSoundboardVolumeMuted() {
        return D;
    }
    hasHadOtherUserPlaySoundInSession() {
        return y;
    }
    hasFetchedAllSounds() {
        return 2 === S && 2 === g;
    }
    isFetchingAnySounds() {
        return 1 === S || 1 === g;
    }
}
let w = new U(o.h, {
    LOGOUT: function () {
        p.clear(), T.clear(), C.clear(), (y = !1), (S = 0), (g = 0), (D = !1), (L = []), O.overwriteHistory({});
    },
    GUILD_SOUNDBOARD_FETCH: function () {
        S = 1;
    },
    GUILD_SOUNDBOARD_SOUND_CREATE: v,
    GUILD_SOUNDBOARD_SOUND_UPDATE: v,
    GUILD_SOUNDBOARD_SOUND_DELETE: function (e) {
        let { soundId: t, guildId: n } = e,
            i = p.get(n),
            r = i?.findIndex((e) => e.soundId === t);
        null == i || null == r || r < 0 || (i.splice(r, 1), p.set(n, [...i]));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_START: function (e) {
        let { soundId: t, userId: n } = e,
            i = (T.get(t) ?? 0) + 1,
            r = (C.get(n) ?? 0) + 1;
        T.set(t, i), C.set(n, r), n !== _.default.getCurrentUser()?.id && (y = !0);
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_END: function (e) {
        let { soundId: t, userId: n } = e,
            i = (T.get(t) ?? 0) - 1,
            r = (C.get(n) ?? 0) - 1;
        i <= 0 ? T.delete(t) : T.set(t, i), r <= 0 ? C.delete(n) : C.set(n, r);
    },
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: function (e) {
        let { guildId: t, soundboardSounds: n } = e;
        p.set(t, n);
    },
    USER_SOUNDBOARD_SET_VOLUME: function (e) {
        let { volume: t, location: n } = e,
            i = D;
        (D = 0 === t), b(t, n), i !== D && b.flush();
    },
    SOUNDBOARD_TRACK_USAGE: function (e) {
        let { soundId: t } = e;
        O.track(t), L.push({ key: t, timestamp: Date.now() }), O.compute();
    },
    VOICE_CHANNEL_SELECT: function () {
        T.clear(), C.clear();
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t, wasSaved: n } = e,
            { type: i, proto: a } = t;
        switch (i) {
            case f.oD.FRECENCY_AND_FAVORITES_SETTINGS:
                (N = new Set(a?.favoriteSoundboardSounds?.soundIds ?? [])),
                    n && (L = []),
                    a?.playedSoundFrecency != null &&
                        O.overwriteHistory(
                            r().mapValues(a.playedSoundFrecency.playedSounds ?? {}, (e) => ({
                                ...e,
                                recentUses: e.recentUses.map(Number).filter((e) => e > 0),
                            })),
                            L,
                        );
                break;
            case f.oD.PRELOADED_USER_SETTINGS:
                P(a), M();
        }
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function () {
        g = 1;
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function (e) {
        let { soundboardSounds: t } = e;
        p.set("0", t), (g = 2);
    },
    SOUNDBOARD_SOUNDS_RECEIVED: function (e) {
        let { updates: t } = e;
        t.forEach((e) => {
            let { guildId: t, sounds: n } = e;
            p.set(t, n);
        }),
            (S = 2);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        p.delete(t.id);
    },
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function (e) {
        let { userId: t } = e;
        m.has(t) ? m.delete(t) : m.add(t);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { soundboardStoreState: t } = e;
        (p = new Map(h.default.entries(t.soundboardSounds))),
            (N = new Set(t.favoritedSoundIds)),
            (m = new Set(t.localSoundboardMutes));
    },
});
