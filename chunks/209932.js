"use strict";
n.d(t, { A: () => y }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(253932),
    l = n(617617),
    d = n(287809),
    _ = n(954571),
    u = n(824744),
    c = n(935208);
n(980504);
var E = n(652215),
    h = n(355097);
let m = new Map(),
    f = new Map(),
    g = new Set(),
    p = 0,
    A = 0,
    I = new Set(),
    T = new Map(),
    S = !1;
function N(e) {
    let { sound: t } = e,
        n = m.get(t.guildId),
        i = n?.findIndex((e) => e.soundId === t.soundId);
    null != n && null != i && -1 !== i
        ? ((n[i] = t), m.set(t.guildId, [...n]))
        : null != n && (n?.push(t), m.set(t.guildId, [...n]));
}
let C = r().debounce((e, t) => {
    _.default.track(E.HAw.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, u.M)(e)), location_stack: t }),
        o.dG.updateSetting({ volume: e });
}, 1e3);
function R(e) {
    let t = e?.audioContextSettings?.user ?? {};
    for (let [e, n] of Object.entries(t)) n.soundboardMuted ? g.add(e) : g.delete(e);
    for (let e of g.keys()) null == t[e] && g.delete(e);
}
class O extends s.Ay.Store {
    static displayName = "SoundboardStore";
    initialize() {
        this.waitFor(l.A, d.default), R(l.A.settings);
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(m),
            favoritedSoundIds: Array.from(I),
            localSoundboardMutes: Array.from(g),
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
        return 1 === A;
    }
    isFetchingDefaultSounds() {
        return 1 === p;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === p;
    }
    hasFetchedDefaultSounds() {
        return 2 === p;
    }
    isUserPlayingSounds(e) {
        let t = T.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != f.get(e);
    }
    isFavoriteSound(e) {
        return I.has(e);
    }
    getFavorites() {
        return I;
    }
    isLocalSoundboardMuted(e) {
        return g.has(e);
    }
    hasHadOtherUserPlaySoundInSession() {
        return S;
    }
    hasFetchedAllSounds() {
        return 2 === A && 2 === p;
    }
    isFetchingAnySounds() {
        return 1 === A || 1 === p;
    }
}
let y = new O(a.h, {
    LOGOUT: function () {
        m.clear(), f.clear(), T.clear(), (S = !1), (A = 0), (p = 0);
    },
    GUILD_SOUNDBOARD_FETCH: function () {
        A = 1;
    },
    GUILD_SOUNDBOARD_SOUND_CREATE: N,
    GUILD_SOUNDBOARD_SOUND_UPDATE: N,
    GUILD_SOUNDBOARD_SOUND_DELETE: function (e) {
        let { soundId: t, guildId: n } = e,
            i = m.get(n),
            r = i?.findIndex((e) => e.soundId === t);
        null == i || null == r || r < 0 || (i.splice(r, 1), m.set(n, [...i]));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_START: function (e) {
        let { soundId: t, userId: n } = e,
            i = (f.get(t) ?? 0) + 1,
            r = (T.get(n) ?? 0) + 1;
        f.set(t, i), T.set(n, r), n !== d.default.getCurrentUser()?.id && (S = !0);
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_END: function (e) {
        let { soundId: t, userId: n } = e,
            i = (f.get(t) ?? 0) - 1,
            r = (T.get(n) ?? 0) - 1;
        i <= 0 ? f.delete(t) : f.set(t, i), r <= 0 ? T.delete(n) : T.set(n, r);
    },
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: function (e) {
        let { guildId: t, soundboardSounds: n } = e;
        m.set(t, n);
    },
    USER_SOUNDBOARD_SET_VOLUME: function (e) {
        let { volume: t, location: n } = e;
        C(t, n);
    },
    VOICE_CHANNEL_SELECT: function () {
        f.clear(), T.clear();
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t } = e,
            { type: n, proto: i } = t;
        n === h.oD.FRECENCY_AND_FAVORITES_SETTINGS
            ? (I = new Set(i?.favoriteSoundboardSounds?.soundIds ?? []))
            : n === h.oD.PRELOADED_USER_SETTINGS && R(i);
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function () {
        p = 1;
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function (e) {
        let { soundboardSounds: t } = e;
        m.set("0", t), (p = 2);
    },
    SOUNDBOARD_SOUNDS_RECEIVED: function (e) {
        let { updates: t } = e;
        t.forEach((e) => {
            let { guildId: t, sounds: n } = e;
            m.set(t, n);
        }),
            (A = 2);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        m.delete(t.id);
    },
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function (e) {
        let { userId: t } = e;
        g.has(t) ? g.delete(t) : g.add(t);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { soundboardStoreState: t } = e;
        (m = new Map(c.default.entries(t.soundboardSounds))),
            (I = new Set(t.favoritedSoundIds)),
            (g = new Set(t.localSoundboardMutes));
    },
});
