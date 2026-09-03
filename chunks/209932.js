n.d(t, { A: () => k }), n(321073);
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
    h = n(935208),
    I = n(125831),
    f = n(980504),
    p = n(652215),
    T = n(355097);
let m = new Map(),
    g = new Map(),
    S = new Map(),
    N = new Set(),
    C = 0,
    O = 0,
    R = new Set(),
    L = new Map(),
    y = Date.UTC(2026, 5, 29),
    D = new d.A({
        computeBonus: () => 100,
        computeWeight: (e) => {
            if (e > s()().diff(y, "days")) return 0;
            let t = 1;
            return (
                e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10),
                t
            );
        },
        lookupKey: (e) => e,
        afterCompute: () => {},
    }),
    v = [],
    b = !1,
    M = !1;
function P(e) {
    let { sound: t } = e,
        n = m.get(t.guildId),
        i = n?.findIndex((e) => e.soundId === t.soundId);
    null != n && null != i && -1 !== i
        ? ((n[i] = t), m.set(t.guildId, [...n]))
        : null != n && (n?.push(t), m.set(t.guildId, [...n]));
}
let U = r().debounce((e, t) => {
    E.default.track(p.HAw.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, A.M)(e)), location_stack: t }),
        c.dG.updateSetting({ volume: e });
}, 1e3);
function w() {
    M = c.dG.getSetting()?.volume === 0;
}
function G(e) {
    let t = e?.audioContextSettings?.user ?? {};
    for (let [e, n] of Object.entries(t)) n.soundboardMuted ? N.add(e) : N.delete(e);
    for (let e of N.keys()) null == t[e] && N.delete(e);
}
class x extends l.Ay.Store {
    static displayName = "SoundboardStore";
    initialize() {
        this.waitFor(I.A, u.A, _.default), G(u.A.settings), w();
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(m),
            favoritedSoundIds: Array.from(R),
            localSoundboardMutes: Array.from(N),
        };
    }
    getSounds() {
        return m;
    }
    getSoundsForGuild(e) {
        return m.get(e);
    }
    getSound(e, t) {
        return (m.get(e) ?? []).find((e) => e.soundId === t);
    }
    getSoundById(e) {
        return Array.from(m.values())
            .flat()
            .find((t) => t.soundId === e);
    }
    isFetchingSounds() {
        return 1 === O;
    }
    isFetchingDefaultSounds() {
        return 1 === C;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === C;
    }
    hasFetchedDefaultSounds() {
        return 2 === C;
    }
    isUserPlayingSounds(e) {
        let t = L.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != S.get(e);
    }
    isFavoriteSound(e) {
        return R.has(e);
    }
    getFavorites() {
        return R;
    }
    getFrequentlyUsedSoundIds() {
        return D.frequently;
    }
    getTopSoundboardSoundsMetadata(e) {
        return g.get(e);
    }
    getTopSoundboardSoundIds(e) {
        if (null == e) return f.xL;
        let t = g.get(e),
            n = I.A.getTopSoundboardSoundIdsByGuildId(e);
        return t?.soundIds ?? n ?? f.xL;
    }
    hasPendingUsage() {
        return v.length > 0;
    }
    get playedSoundFrecencyWithoutFetchingLatest() {
        return D;
    }
    isLocalSoundboardMuted(e) {
        return N.has(e);
    }
    isSoundboardVolumeMuted() {
        return M;
    }
    hasHadOtherUserPlaySoundInSession() {
        return b;
    }
    hasFetchedAllSounds() {
        return 2 === O && 2 === C;
    }
    isFetchingAnySounds() {
        return 1 === O || 1 === C;
    }
}
let k = new x(o.h, {
    LOGOUT: function () {
        m.clear(),
            g.clear(),
            S.clear(),
            L.clear(),
            (b = !1),
            (O = 0),
            (C = 0),
            (M = !1),
            (v = []),
            D.overwriteHistory({});
    },
    GUILD_SOUNDBOARD_FETCH: function () {
        O = 1;
    },
    GUILD_SOUNDBOARD_SOUND_CREATE: P,
    GUILD_SOUNDBOARD_SOUND_UPDATE: P,
    GUILD_SOUNDBOARD_SOUND_DELETE: function (e) {
        let { soundId: t, guildId: n } = e,
            i = m.get(n),
            r = i?.findIndex((e) => e.soundId === t);
        null == i || null == r || r < 0 || (i.splice(r, 1), m.set(n, [...i]));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_START: function (e) {
        let { soundId: t, userId: n } = e,
            i = (S.get(t) ?? 0) + 1,
            r = (L.get(n) ?? 0) + 1;
        S.set(t, i), L.set(n, r), n !== _.default.getCurrentUser()?.id && (b = !0);
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_END: function (e) {
        let { soundId: t, userId: n } = e,
            i = (S.get(t) ?? 0) - 1,
            r = (L.get(n) ?? 0) - 1;
        i <= 0 ? S.delete(t) : S.set(t, i), r <= 0 ? L.delete(n) : L.set(n, r);
    },
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: function (e) {
        let { guildId: t, soundboardSounds: n } = e;
        m.set(t, n);
    },
    USER_SOUNDBOARD_SET_VOLUME: function (e) {
        let { volume: t, location: n } = e,
            i = M;
        (M = 0 === t), U(t, n), i !== M && U.flush();
    },
    SOUNDBOARD_TRACK_USAGE: function (e) {
        let { soundId: t } = e;
        D.track(t), v.push({ key: t, timestamp: Date.now() }), D.compute();
    },
    VOICE_CHANNEL_SELECT: function () {
        S.clear(), L.clear();
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t, wasSaved: n } = e,
            { type: i, proto: a } = t;
        switch (i) {
            case T.oD.FRECENCY_AND_FAVORITES_SETTINGS:
                (R = new Set(a?.favoriteSoundboardSounds?.soundIds ?? [])),
                    n && (v = []),
                    a?.playedSoundFrecency != null &&
                        D.overwriteHistory(
                            r().mapValues(a.playedSoundFrecency.playedSounds ?? {}, (e) => ({
                                ...e,
                                recentUses: e.recentUses.map(Number).filter((e) => e > 0),
                            })),
                            v,
                        );
                break;
            case T.oD.PRELOADED_USER_SETTINGS:
                G(a), w();
        }
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function () {
        C = 1;
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function (e) {
        let { soundboardSounds: t } = e;
        m.set("0", t), (C = 2);
    },
    SOUNDBOARD_SOUNDS_RECEIVED: function (e) {
        let { updates: t } = e;
        t.forEach((e) => {
            let { guildId: t, sounds: n } = e;
            m.set(t, n);
        }),
            (O = 2);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        m.delete(t.id), g.delete(t.id);
    },
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function (e) {
        let { userId: t } = e;
        N.has(t) ? N.delete(t) : N.add(t);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { soundboardStoreState: t } = e;
        (m = new Map(h.default.entries(t.soundboardSounds))),
            (R = new Set(t.favoritedSoundIds)),
            (N = new Set(t.localSoundboardMutes));
    },
    TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topSoundsMetadata: n } = e;
        g.set(t, { soundIds: n.map((e) => e.soundId), topSoundsTTL: s()().add(1, "days").valueOf() });
    },
});
