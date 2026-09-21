(n.d(t, { A: () => B }), n(321073));
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
    I = n(699840),
    f = n(125831),
    p = n(980504),
    T = n(652215),
    g = n(355097);
let m = new Map(),
    S = new Map(),
    N = new Map(),
    C = new Set(),
    O = 0,
    R = 0,
    L = new Set(),
    y = new Set(),
    D = new Map(),
    v = Date.UTC(2026, 5, 29),
    b = new d.A({
        computeBonus: () => 100,
        computeWeight: (e) => {
            if (e > s()().diff(v, "days")) return 0;
            let t = 1;
            return (
                e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10),
                t
            );
        },
        lookupKey: (e) => e,
        afterCompute: () => {},
    }),
    M = [],
    P = !1,
    U = !1;
function w(e) {
    let { sound: t } = e,
        n = m.get(t.guildId),
        i = n?.findIndex((e) => e.soundId === t.soundId);
    null != n && null != i && -1 !== i
        ? ((n[i] = t), m.set(t.guildId, [...n]))
        : null != n && (n?.push(t), m.set(t.guildId, [...n]));
}
let G = r().debounce((e, t) => {
    (E.default.track(T.HAw.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, A.M)(e)), location_stack: t }),
        c.dG.updateSetting({ volume: e }));
}, 1e3);
function x() {
    U = c.dG.getSetting()?.volume === 0;
}
function k(e) {
    let t = e?.audioContextSettings?.user ?? {};
    for (let [e, n] of Object.entries(t)) n.soundboardMuted ? C.add(e) : C.delete(e);
    for (let e of C.keys()) null == t[e] && C.delete(e);
}
class F extends l.Ay.Store {
    static displayName = "SoundboardStore";
    initialize() {
        (this.waitFor(f.A, u.A, _.default), k(u.A.settings), x());
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(m),
            favoritedSoundIds: Array.from(L),
            orderedFavoritedSoundIds: Array.from(y),
            localSoundboardMutes: Array.from(C),
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
        return 1 === R;
    }
    isFetchingDefaultSounds() {
        return 1 === O;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === O;
    }
    hasFetchedDefaultSounds() {
        return 2 === O;
    }
    isUserPlayingSounds(e) {
        let t = D.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != N.get(e);
    }
    isFavoriteSound(e) {
        return L.has(e) || y.has(e);
    }
    getFavorites() {
        let { allowReordering: e } = I.q.getConfig({ location: "SoundboardStore" });
        return e ? y : L;
    }
    getFrequentlyUsedSoundIds() {
        return b.frequently;
    }
    getTopSoundboardSoundsMetadata(e) {
        return S.get(e);
    }
    getTopSoundboardSoundIds(e) {
        if (null == e) return p.xL;
        let t = S.get(e),
            n = f.A.getTopSoundboardSoundIdsByGuildId(e);
        return t?.soundIds ?? n ?? p.xL;
    }
    hasPendingUsage() {
        return M.length > 0;
    }
    get playedSoundFrecencyWithoutFetchingLatest() {
        return b;
    }
    isLocalSoundboardMuted(e) {
        return C.has(e);
    }
    isSoundboardVolumeMuted() {
        return U;
    }
    hasHadOtherUserPlaySoundInSession() {
        return P;
    }
    hasFetchedAllSounds() {
        return 2 === R && 2 === O;
    }
    isFetchingAnySounds() {
        return 1 === R || 1 === O;
    }
}
let B = new F(o.h, {
    LOGOUT: function () {
        (m.clear(),
            S.clear(),
            N.clear(),
            D.clear(),
            (P = !1),
            (R = 0),
            (O = 0),
            (U = !1),
            (M = []),
            b.overwriteHistory({}));
    },
    GUILD_SOUNDBOARD_FETCH: function () {
        R = 1;
    },
    GUILD_SOUNDBOARD_SOUND_CREATE: w,
    GUILD_SOUNDBOARD_SOUND_UPDATE: w,
    GUILD_SOUNDBOARD_SOUND_DELETE: function (e) {
        let { soundId: t, guildId: n } = e,
            i = m.get(n),
            r = i?.findIndex((e) => e.soundId === t);
        null == i || null == r || r < 0 || (i.splice(r, 1), m.set(n, [...i]));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_START: function (e) {
        let { soundId: t, userId: n } = e,
            i = (N.get(t) ?? 0) + 1,
            r = (D.get(n) ?? 0) + 1;
        (N.set(t, i), D.set(n, r), n !== _.default.getCurrentUser()?.id && (P = !0));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_END: function (e) {
        let { soundId: t, userId: n } = e,
            i = (N.get(t) ?? 0) - 1,
            r = (D.get(n) ?? 0) - 1;
        (i <= 0 ? N.delete(t) : N.set(t, i), r <= 0 ? D.delete(n) : D.set(n, r));
    },
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: function (e) {
        let { guildId: t, soundboardSounds: n } = e;
        m.set(t, n);
    },
    USER_SOUNDBOARD_SET_VOLUME: function (e) {
        let { volume: t, location: n } = e,
            i = U;
        ((U = 0 === t), G(t, n), i !== U && G.flush());
    },
    SOUNDBOARD_TRACK_USAGE: function (e) {
        let { soundId: t } = e;
        (b.track(t), M.push({ key: t, timestamp: Date.now() }), b.compute());
    },
    VOICE_CHANNEL_SELECT: function () {
        (N.clear(), D.clear());
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t, wasSaved: n } = e,
            { type: i, proto: a } = t;
        switch (i) {
            case g.oD.FRECENCY_AND_FAVORITES_SETTINGS:
                ((L = new Set(a?.favoriteSoundboardSounds?.soundIds ?? [])),
                    (y = new Set(a?.favoriteSoundboardSounds?.orderedSoundIds ?? [])),
                    n && (M = []),
                    a?.playedSoundFrecency != null &&
                        b.overwriteHistory(
                            r().mapValues(a.playedSoundFrecency.playedSounds ?? {}, (e) => ({
                                ...e,
                                recentUses: e.recentUses.map(Number).filter((e) => e > 0),
                            })),
                            M,
                        ));
                break;
            case g.oD.PRELOADED_USER_SETTINGS:
                (k(a), x());
        }
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function () {
        O = 1;
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function (e) {
        let { soundboardSounds: t } = e;
        (m.set("0", t), (O = 2));
    },
    SOUNDBOARD_SOUNDS_RECEIVED: function (e) {
        let { updates: t } = e;
        (t.forEach((e) => {
            let { guildId: t, sounds: n } = e;
            m.set(t, n);
        }),
            (R = 2));
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        (m.delete(t.id), S.delete(t.id));
    },
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function (e) {
        let { userId: t } = e;
        C.has(t) ? C.delete(t) : C.add(t);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { soundboardStoreState: t } = e;
        ((m = new Map(h.default.entries(t.soundboardSounds))),
            (L = new Set(t.favoritedSoundIds)),
            (y = new Set(t.orderedFavoritedSoundIds)),
            (C = new Set(t.localSoundboardMutes)));
    },
    TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topSoundsMetadata: n } = e;
        S.set(t, { soundIds: n.map((e) => e.soundId), topSoundsTTL: s()().add(1, "days").valueOf() });
    },
});
