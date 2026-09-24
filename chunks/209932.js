(n.d(t, { A: () => V }), n(321073));
var i = n(435558),
    r = n.n(i),
    a = n(536637),
    s = n.n(a),
    l = n(17928),
    o = n(228366),
    d = n(283047),
    c = n(885386),
    u = n(617617),
    _ = n(763827),
    E = n(287809),
    A = n(174459),
    h = n(824744),
    I = n(935208),
    f = n(699840),
    p = n(125831),
    T = n(980504),
    g = n(652215),
    m = n(355097);
let S = new Map(),
    N = new Map(),
    C = new Map(),
    O = new Set(),
    R = 0,
    L = 0,
    y = new Set(),
    D = new Set(),
    v = new Map(),
    b = Date.UTC(2026, 5, 29),
    M = new d.A({
        computeBonus: () => 100,
        computeWeight: (e) => {
            if (e > s()().diff(b, "days")) return 0;
            let t = 1;
            return (
                e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10),
                t
            );
        },
        lookupKey: (e) => e,
        afterCompute: () => {},
    }),
    P = [],
    U = !1,
    w = !1;
function G(e) {
    let { sound: t } = e,
        n = S.get(t.guildId),
        i = n?.findIndex((e) => e.soundId === t.soundId);
    null != n && null != i && -1 !== i
        ? ((n[i] = t), S.set(t.guildId, [...n]))
        : null != n && (n?.push(t), S.set(t.guildId, [...n]));
}
let x = r().debounce((e, t) => {
    (A.default.track(g.HAw.UPDATE_SOUNDBOARD_SETTINGS, {
        volume: Math.round((0, h.M)(e)),
        location_stack: t,
        voice_guild_id: _.A.getGuildId() ?? null,
    }),
        c.dG.updateSetting({ volume: e }));
}, 1e3);
function k() {
    w = c.dG.getSetting()?.volume === 0;
}
function F(e) {
    let t = e?.audioContextSettings?.user ?? {};
    for (let [e, n] of Object.entries(t)) n.soundboardMuted ? O.add(e) : O.delete(e);
    for (let e of O.keys()) null == t[e] && O.delete(e);
}
class B extends l.Ay.Store {
    static displayName = "SoundboardStore";
    initialize() {
        (this.waitFor(_.A, p.A, u.A, E.default), F(u.A.settings), k());
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(S),
            favoritedSoundIds: Array.from(y),
            orderedFavoritedSoundIds: Array.from(D),
            localSoundboardMutes: Array.from(O),
        };
    }
    getSounds() {
        return S;
    }
    getSoundsForGuild(e) {
        return S.get(e);
    }
    getSound(e, t) {
        return (S.get(e) ?? []).find((e) => e.soundId === t);
    }
    getSoundById(e) {
        return Array.from(S.values())
            .flat()
            .find((t) => t.soundId === e);
    }
    isFetchingSounds() {
        return 1 === L;
    }
    isFetchingDefaultSounds() {
        return 1 === R;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === R;
    }
    hasFetchedDefaultSounds() {
        return 2 === R;
    }
    isUserPlayingSounds(e) {
        let t = v.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != C.get(e);
    }
    isFavoriteSound(e) {
        return y.has(e) || D.has(e);
    }
    getFavorites() {
        let { allowReordering: e } = f.q.getConfig({ location: "SoundboardStore" });
        return e ? D : y;
    }
    getFrequentlyUsedSoundIds() {
        return M.frequently;
    }
    getTopSoundboardSoundsMetadata(e) {
        return N.get(e);
    }
    getTopSoundboardSoundIds(e) {
        if (null == e) return T.xL;
        let t = N.get(e),
            n = p.A.getTopSoundboardSoundIdsByGuildId(e);
        return t?.soundIds ?? n ?? T.xL;
    }
    hasPendingUsage() {
        return P.length > 0;
    }
    get playedSoundFrecencyWithoutFetchingLatest() {
        return M;
    }
    isLocalSoundboardMuted(e) {
        return O.has(e);
    }
    isSoundboardVolumeMuted() {
        return w;
    }
    hasHadOtherUserPlaySoundInSession() {
        return U;
    }
    hasFetchedAllSounds() {
        return 2 === L && 2 === R;
    }
    isFetchingAnySounds() {
        return 1 === L || 1 === R;
    }
}
let V = new B(o.h, {
    LOGOUT: function () {
        (S.clear(),
            N.clear(),
            C.clear(),
            v.clear(),
            (U = !1),
            (L = 0),
            (R = 0),
            (w = !1),
            (P = []),
            M.overwriteHistory({}));
    },
    GUILD_SOUNDBOARD_FETCH: function () {
        L = 1;
    },
    GUILD_SOUNDBOARD_SOUND_CREATE: G,
    GUILD_SOUNDBOARD_SOUND_UPDATE: G,
    GUILD_SOUNDBOARD_SOUND_DELETE: function (e) {
        let { soundId: t, guildId: n } = e,
            i = S.get(n),
            r = i?.findIndex((e) => e.soundId === t);
        null == i || null == r || r < 0 || (i.splice(r, 1), S.set(n, [...i]));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_START: function (e) {
        let { soundId: t, userId: n } = e,
            i = (C.get(t) ?? 0) + 1,
            r = (v.get(n) ?? 0) + 1;
        (C.set(t, i), v.set(n, r), n !== E.default.getCurrentUser()?.id && (U = !0));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_END: function (e) {
        let { soundId: t, userId: n } = e,
            i = (C.get(t) ?? 0) - 1,
            r = (v.get(n) ?? 0) - 1;
        (i <= 0 ? C.delete(t) : C.set(t, i), r <= 0 ? v.delete(n) : v.set(n, r));
    },
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: function (e) {
        let { guildId: t, soundboardSounds: n } = e;
        S.set(t, n);
    },
    USER_SOUNDBOARD_SET_VOLUME: function (e) {
        let { volume: t, location: n } = e,
            i = w;
        ((w = 0 === t), x(t, n), i !== w && x.flush());
    },
    SOUNDBOARD_TRACK_USAGE: function (e) {
        let { soundId: t } = e;
        (M.track(t), P.push({ key: t, timestamp: Date.now() }), M.compute());
    },
    VOICE_CHANNEL_SELECT: function () {
        (C.clear(), v.clear());
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t, wasSaved: n } = e,
            { type: i, proto: a } = t;
        switch (i) {
            case m.oD.FRECENCY_AND_FAVORITES_SETTINGS:
                ((y = new Set(a?.favoriteSoundboardSounds?.soundIds ?? [])),
                    (D = new Set(a?.favoriteSoundboardSounds?.orderedSoundIds ?? [])),
                    n && (P = []),
                    a?.playedSoundFrecency != null &&
                        M.overwriteHistory(
                            r().mapValues(a.playedSoundFrecency.playedSounds ?? {}, (e) => ({
                                ...e,
                                recentUses: e.recentUses.map(Number).filter((e) => e > 0),
                            })),
                            P,
                        ));
                break;
            case m.oD.PRELOADED_USER_SETTINGS:
                (F(a), k());
        }
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function () {
        R = 1;
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function (e) {
        let { soundboardSounds: t } = e;
        (S.set("0", t), (R = 2));
    },
    SOUNDBOARD_SOUNDS_RECEIVED: function (e) {
        let { updates: t } = e;
        (t.forEach((e) => {
            let { guildId: t, sounds: n } = e;
            S.set(t, n);
        }),
            (L = 2));
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        (S.delete(t.id), N.delete(t.id));
    },
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function (e) {
        let { userId: t } = e;
        O.has(t) ? O.delete(t) : O.add(t);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { soundboardStoreState: t } = e;
        ((S = new Map(I.default.entries(t.soundboardSounds))),
            (y = new Set(t.favoritedSoundIds)),
            (D = new Set(t.orderedFavoritedSoundIds)),
            (O = new Set(t.localSoundboardMutes)));
    },
    TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topSoundsMetadata: n } = e;
        N.set(t, { soundIds: n.map((e) => e.soundId), topSoundsTTL: s()().add(1, "days").valueOf() });
    },
});
