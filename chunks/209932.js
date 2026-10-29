(n.d(t, { A: () => B }), n(321073));
var i = n(435558),
    r = n.n(i),
    a = n(536637),
    s = n.n(a),
    l = n(17928),
    o = n(73153),
    d = n(283047),
    c = n(253932),
    u = n(617617),
    _ = n(763827),
    E = n(287809),
    A = n(174459),
    h = n(824744),
    f = n(935208),
    I = n(125831),
    p = n(980504),
    T = n(652215),
    m = n(355097);
let g = new Map(),
    S = new Map(),
    N = new Map(),
    C = new Set(),
    O = 0,
    R = 0,
    L = new Set(),
    y = new Map(),
    D = Date.UTC(2026, 5, 29),
    v = new d.A({
        computeBonus: () => 100,
        computeWeight: (e) => {
            if (e > s()().diff(D, "days")) return 0;
            let t = 1;
            return (
                e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10),
                t
            );
        },
        lookupKey: (e) => e,
        afterCompute: () => {},
    }),
    b = [],
    M = !1,
    P = !1;
function U(e) {
    let { sound: t } = e,
        n = g.get(t.guildId),
        i = n?.findIndex((e) => e.soundId === t.soundId);
    null != n && null != i && -1 !== i
        ? ((n[i] = t), g.set(t.guildId, [...n]))
        : null != n && (n?.push(t), g.set(t.guildId, [...n]));
}
let w = r().debounce((e) => {
        c.dG.updateSetting({ volume: e });
    }, 1e3),
    G = r().debounce((e, t) => {
        A.default.track(T.HAw.UPDATE_SOUNDBOARD_SETTINGS, {
            volume: Math.round((0, h.M)(e)),
            location_stack: t,
            voice_guild_id: _.A.getGuildId() ?? null,
        });
    }, 1e3);
function x() {
    P = c.dG.getSetting()?.volume === 0;
}
function k(e) {
    let t = e?.audioContextSettings?.user ?? {};
    for (let [e, n] of Object.entries(t)) n.soundboardMuted ? C.add(e) : C.delete(e);
    for (let e of C.keys()) null == t[e] && C.delete(e);
}
class F extends l.Ay.Store {
    static displayName = "SoundboardStore";
    initialize() {
        (this.waitFor(_.A, I.A, u.A, E.default), k(u.A.settings), x());
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(g),
            favoritedSoundIds: Array.from(L),
            localSoundboardMutes: Array.from(C),
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
        let t = y.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != N.get(e);
    }
    isFavoriteSound(e) {
        return L.has(e);
    }
    getFavorites() {
        return L;
    }
    getFrequentlyUsedSoundIds() {
        return v.frequently;
    }
    getTopSoundboardSoundsMetadata(e) {
        return S.get(e);
    }
    getTopSoundboardSoundIds(e) {
        if (null == e) return p.xL;
        let t = S.get(e),
            n = I.A.getTopSoundboardSoundIdsByGuildId(e);
        return t?.soundIds ?? n ?? p.xL;
    }
    hasPendingUsage() {
        return b.length > 0;
    }
    get playedSoundFrecencyWithoutFetchingLatest() {
        return v;
    }
    isLocalSoundboardMuted(e) {
        return C.has(e);
    }
    isSoundboardVolumeMuted() {
        return P;
    }
    hasHadOtherUserPlaySoundInSession() {
        return M;
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
        (g.clear(),
            S.clear(),
            N.clear(),
            y.clear(),
            (M = !1),
            (R = 0),
            (O = 0),
            (P = !1),
            (b = []),
            v.overwriteHistory({}));
    },
    GUILD_SOUNDBOARD_FETCH: function () {
        R = 1;
    },
    GUILD_SOUNDBOARD_SOUND_CREATE: U,
    GUILD_SOUNDBOARD_SOUND_UPDATE: U,
    GUILD_SOUNDBOARD_SOUND_DELETE: function (e) {
        let { soundId: t, guildId: n } = e,
            i = g.get(n),
            r = i?.findIndex((e) => e.soundId === t);
        null == i || null == r || r < 0 || (i.splice(r, 1), g.set(n, [...i]));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_START: function (e) {
        let { soundId: t, userId: n } = e,
            i = (N.get(t) ?? 0) + 1,
            r = (y.get(n) ?? 0) + 1;
        (N.set(t, i), y.set(n, r), n !== E.default.getCurrentUser()?.id && (M = !0));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_END: function (e) {
        let { soundId: t, userId: n } = e,
            i = (N.get(t) ?? 0) - 1,
            r = (y.get(n) ?? 0) - 1;
        (i <= 0 ? N.delete(t) : N.set(t, i), r <= 0 ? y.delete(n) : y.set(n, r));
    },
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: function (e) {
        let { guildId: t, soundboardSounds: n } = e;
        g.set(t, n);
    },
    USER_SOUNDBOARD_SET_VOLUME: function (e) {
        let { volume: t, location: n } = e,
            i = P;
        ((P = 0 === t), w(t), G(t, n), i !== P && w.flush());
    },
    SOUNDBOARD_TRACK_USAGE: function (e) {
        let { soundId: t } = e;
        (v.track(t), b.push({ key: t, timestamp: Date.now() }), v.compute());
    },
    VOICE_CHANNEL_SELECT: function () {
        (N.clear(), y.clear());
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t, wasSaved: n } = e,
            { type: i, proto: a } = t;
        switch (i) {
            case m.oD.FRECENCY_AND_FAVORITES_SETTINGS:
                ((L = new Set(a?.favoriteSoundboardSounds?.soundIds ?? [])),
                    n && (b = []),
                    a?.playedSoundFrecency != null &&
                        v.overwriteHistory(
                            r().mapValues(a.playedSoundFrecency.playedSounds ?? {}, (e) => ({
                                ...e,
                                recentUses: e.recentUses.map(Number).filter((e) => e > 0),
                            })),
                            b,
                        ));
                break;
            case m.oD.PRELOADED_USER_SETTINGS:
                (k(a), x());
        }
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function () {
        O = 1;
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function (e) {
        let { soundboardSounds: t } = e;
        (g.set("0", t), (O = 2));
    },
    SOUNDBOARD_SOUNDS_RECEIVED: function (e) {
        let { updates: t } = e;
        (t.forEach((e) => {
            let { guildId: t, sounds: n } = e;
            g.set(t, n);
        }),
            (R = 2));
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        (g.delete(t.id), S.delete(t.id));
    },
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function (e) {
        let { userId: t } = e;
        C.has(t) ? C.delete(t) : C.add(t);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { soundboardStoreState: t } = e;
        ((g = new Map(f.default.entries(t.soundboardSounds))),
            (L = new Set(t.favoritedSoundIds)),
            (C = new Set(t.localSoundboardMutes)));
    },
    TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topSoundsMetadata: n } = e;
        S.set(t, { soundIds: n.map((e) => e.soundId), topSoundsTTL: s()().add(1, "days").valueOf() });
    },
});
