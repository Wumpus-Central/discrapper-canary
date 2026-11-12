n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(536637),
    s = n.n(a),
    l = n(158390),
    o = n(855986),
    d = n(73153),
    c = n(283047),
    u = n(253932),
    _ = n(617617),
    E = n(495867),
    A = n(287809),
    f = n(129230),
    h = n(927813),
    I = n(824744),
    p = n(811091),
    m = n(125831),
    T = n(980504),
    g = n(652215),
    S = n(355097);
let N = new Map(),
    C = new Map(),
    O = new Map(),
    R = new Set(),
    L = 0,
    y = 5 * h.A.Millis.SECOND,
    D = 5 * h.A.Millis.MINUTE,
    b = new l.A(y, D),
    v = null,
    P = 0,
    M = new Set(),
    U = new Map(),
    w = Date.UTC(2026, 5, 29),
    G = new c.A({
        computeBonus: () => 100,
        computeWeight: (e) => {
            if (e > s()().diff(w, "days")) return 0;
            let t = 1;
            return (
                e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10),
                t
            );
        },
        lookupKey: (e) => e,
        afterCompute: () => {},
    }),
    x = [],
    k = !1,
    F = !1;
function B(e) {
    let { sound: t } = e,
        n = N.get(t.guildId),
        i = n?.findIndex((e) => e.soundId === t.soundId);
    null != n && null != i && -1 !== i
        ? ((n[i] = t), N.set(t.guildId, [...n]))
        : null != n && (n?.push(t), N.set(t.guildId, [...n]));
}
let V = r().debounce((e) => {
        u.dG.updateSetting({ volume: e });
    }, 1e3),
    H = r().debounce((e, t) => {
        f.default.track(g.HAw.UPDATE_SOUNDBOARD_SETTINGS, {
            volume: Math.round((0, I.M)(e)),
            location_stack: t,
            voice_guild_id: E.A.getGuildId() ?? null,
        });
    }, 1e3);
function j() {
    F = u.dG.getSetting()?.volume === 0;
}
function W(e) {
    let t = e?.audioContextSettings?.user ?? {};
    for (let [e, n] of Object.entries(t)) n.soundboardMuted ? R.add(e) : R.delete(e);
    for (let e of R.keys()) null == t[e] && R.delete(e);
}
class Y extends o.Ay.Store {
    static displayName = "SoundboardStore";
    initialize() {
        (this.waitFor(E.A, m.A, _.A, A.default), W(_.A.settings), j());
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(N),
            favoritedSoundIds: Array.from(M),
            localSoundboardMutes: Array.from(R),
        };
    }
    getSounds() {
        return N;
    }
    getSoundsForGuild(e) {
        return N.get(e);
    }
    getSound(e, t) {
        return (N.get(e) ?? []).find((e) => e.soundId === t);
    }
    getSoundById(e) {
        return Array.from(N.values())
            .flat()
            .find((t) => t.soundId === e);
    }
    isFetchingSounds() {
        return 1 === P;
    }
    isFetchingDefaultSounds() {
        return 1 === L;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === L && (null == v || Date.now() >= v);
    }
    hasFetchedDefaultSounds() {
        return 2 === L;
    }
    isUserPlayingSounds(e) {
        let t = U.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != O.get(e);
    }
    isFavoriteSound(e) {
        return M.has(e);
    }
    getFavorites() {
        return M;
    }
    getFrequentlyUsedSoundIds() {
        return G.frequently;
    }
    getTopSoundboardSoundsMetadata(e) {
        return C.get(e);
    }
    getTopSoundboardSoundIds(e) {
        if (null == e) return T.xL;
        let t = C.get(e),
            n = m.A.getTopSoundboardSoundIdsByGuildId(e);
        return t?.soundIds ?? n ?? T.xL;
    }
    hasPendingUsage() {
        return x.length > 0;
    }
    get playedSoundFrecencyWithoutFetchingLatest() {
        return G;
    }
    isLocalSoundboardMuted(e) {
        return R.has(e);
    }
    isSoundboardVolumeMuted() {
        return F;
    }
    hasHadOtherUserPlaySoundInSession() {
        return k;
    }
    hasFetchedAllSounds() {
        return 2 === P && 2 === L;
    }
    isFetchingAnySounds() {
        return 1 === P || 1 === L;
    }
}
let K = new Y(d.h, {
    LOGOUT: function () {
        (N.clear(),
            C.clear(),
            O.clear(),
            U.clear(),
            (k = !1),
            (P = 0),
            (L = 0),
            b.succeed(),
            (v = null),
            (F = !1),
            (x = []),
            G.overwriteHistory({}));
    },
    GUILD_SOUNDBOARD_FETCH: function () {
        P = 1;
    },
    GUILD_SOUNDBOARD_SOUND_CREATE: B,
    GUILD_SOUNDBOARD_SOUND_UPDATE: B,
    GUILD_SOUNDBOARD_SOUND_DELETE: function (e) {
        let { soundId: t, guildId: n } = e,
            i = N.get(n),
            r = i?.findIndex((e) => e.soundId === t);
        null == i || null == r || r < 0 || (i.splice(r, 1), N.set(n, [...i]));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_START: function (e) {
        let { soundId: t, userId: n } = e,
            i = (O.get(t) ?? 0) + 1,
            r = (U.get(n) ?? 0) + 1;
        (O.set(t, i), U.set(n, r), n !== A.default.getCurrentUser()?.id && (k = !0));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_END: function (e) {
        let { soundId: t, userId: n } = e,
            i = (O.get(t) ?? 0) - 1,
            r = (U.get(n) ?? 0) - 1;
        (i <= 0 ? O.delete(t) : O.set(t, i), r <= 0 ? U.delete(n) : U.set(n, r));
    },
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: function (e) {
        let { guildId: t, soundboardSounds: n } = e;
        N.set(t, n);
    },
    USER_SOUNDBOARD_SET_VOLUME: function (e) {
        let { volume: t, location: n } = e,
            i = F;
        ((F = 0 === t), V(t), H(t, n), i !== F && V.flush());
    },
    SOUNDBOARD_TRACK_USAGE: function (e) {
        let { soundId: t } = e;
        (G.track(t), x.push({ key: t, timestamp: Date.now() }), G.compute());
    },
    VOICE_CHANNEL_SELECT: function () {
        (O.clear(), U.clear());
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t, wasSaved: n } = e,
            { type: i, proto: a } = t;
        switch (i) {
            case S.oD.FRECENCY_AND_FAVORITES_SETTINGS:
                ((M = new Set(a?.favoriteSoundboardSounds?.soundIds ?? [])),
                    n && (x = []),
                    a?.playedSoundFrecency != null &&
                        G.overwriteHistory(
                            r().mapValues(a.playedSoundFrecency.playedSounds ?? {}, (e) => ({
                                ...e,
                                recentUses: e.recentUses.map(Number).filter((e) => e > 0),
                            })),
                            x,
                        ));
                break;
            case S.oD.PRELOADED_USER_SETTINGS:
                (W(a), j());
        }
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function () {
        L = 1;
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function (e) {
        let { soundboardSounds: t } = e;
        (N.set("0", t), (L = 2), b.succeed(), (v = null));
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE: function () {
        ((L = 0), (v = Date.now() + b.fail()));
    },
    SOUNDBOARD_SOUNDS_RECEIVED: function (e) {
        let { updates: t } = e;
        (t.forEach((e) => {
            let { guildId: t, sounds: n } = e;
            N.set(t, n);
        }),
            (P = 2));
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        (N.delete(t.id), C.delete(t.id));
    },
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function (e) {
        let { userId: t } = e;
        R.has(t) ? R.delete(t) : R.add(t);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { soundboardStoreState: t } = e;
        ((N = new Map(p.default.entries(t.soundboardSounds))),
            (M = new Set(t.favoritedSoundIds)),
            (R = new Set(t.localSoundboardMutes)));
    },
    TOP_SOUNDBOARD_SOUNDS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topSoundsMetadata: n } = e;
        C.set(t, { soundIds: n.map((e) => e.soundId), topSoundsTTL: s()().add(1, "days").valueOf() });
    },
});
n.d(t, {}, { A: K });
