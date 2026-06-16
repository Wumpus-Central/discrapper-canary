"use strict";
n.d(t, { A: () => b }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(885386),
    l = n(617617),
    u = n(287809),
    c = n(174459),
    d = n(824744),
    _ = n(935208);
n(980504);
var h = n(652215),
    f = n(355097);
let p = new Map(),
    E = new Map(),
    m = new Set(),
    g = 0,
    A = 0,
    I = new Set(),
    T = new Map(),
    S = !1,
    y = !1;
function C(e) {
    let { sound: t } = e,
        n = p.get(t.guildId),
        i = n?.findIndex((e) => e.soundId === t.soundId);
    null != n && null != i && -1 !== i
        ? ((n[i] = t), p.set(t.guildId, [...n]))
        : null != n && (n?.push(t), p.set(t.guildId, [...n]));
}
let N = r().debounce((e, t) => {
    c.default.track(h.HAw.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, d.M)(e)), location_stack: t }),
        o.dG.updateSetting({ volume: e });
}, 1e3);
function v() {
    y = o.dG.getSetting()?.volume === 0;
}
function R(e) {
    let t = e?.audioContextSettings?.user ?? {};
    for (let [e, n] of Object.entries(t)) n.soundboardMuted ? m.add(e) : m.delete(e);
    for (let e of m.keys()) null == t[e] && m.delete(e);
}
class O extends s.Ay.Store {
    static displayName = "SoundboardStore";
    initialize() {
        this.waitFor(l.A, u.default), R(l.A.settings), v();
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(p),
            favoritedSoundIds: Array.from(I),
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
        return 1 === A;
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
        let t = T.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != E.get(e);
    }
    isFavoriteSound(e) {
        return I.has(e);
    }
    getFavorites() {
        return I;
    }
    isLocalSoundboardMuted(e) {
        return m.has(e);
    }
    isSoundboardVolumeMuted() {
        return y;
    }
    hasHadOtherUserPlaySoundInSession() {
        return S;
    }
    hasFetchedAllSounds() {
        return 2 === A && 2 === g;
    }
    isFetchingAnySounds() {
        return 1 === A || 1 === g;
    }
}
let b = new O(a.h, {
    LOGOUT: function () {
        p.clear(), E.clear(), T.clear(), (S = !1), (A = 0), (g = 0), (y = !1);
    },
    GUILD_SOUNDBOARD_FETCH: function () {
        A = 1;
    },
    GUILD_SOUNDBOARD_SOUND_CREATE: C,
    GUILD_SOUNDBOARD_SOUND_UPDATE: C,
    GUILD_SOUNDBOARD_SOUND_DELETE: function (e) {
        let { soundId: t, guildId: n } = e,
            i = p.get(n),
            r = i?.findIndex((e) => e.soundId === t);
        null == i || null == r || r < 0 || (i.splice(r, 1), p.set(n, [...i]));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_START: function (e) {
        let { soundId: t, userId: n } = e,
            i = (E.get(t) ?? 0) + 1,
            r = (T.get(n) ?? 0) + 1;
        E.set(t, i), T.set(n, r), n !== u.default.getCurrentUser()?.id && (S = !0);
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_END: function (e) {
        let { soundId: t, userId: n } = e,
            i = (E.get(t) ?? 0) - 1,
            r = (T.get(n) ?? 0) - 1;
        i <= 0 ? E.delete(t) : E.set(t, i), r <= 0 ? T.delete(n) : T.set(n, r);
    },
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: function (e) {
        let { guildId: t, soundboardSounds: n } = e;
        p.set(t, n);
    },
    USER_SOUNDBOARD_SET_VOLUME: function (e) {
        let { volume: t, location: n } = e,
            i = y;
        (y = 0 === t), N(t, n), i !== y && N.flush();
    },
    VOICE_CHANNEL_SELECT: function () {
        E.clear(), T.clear();
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t } = e,
            { type: n, proto: i } = t;
        switch (n) {
            case f.oD.FRECENCY_AND_FAVORITES_SETTINGS:
                I = new Set(i?.favoriteSoundboardSounds?.soundIds ?? []);
                break;
            case f.oD.PRELOADED_USER_SETTINGS:
                R(i), v();
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
            (A = 2);
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
        (p = new Map(_.default.entries(t.soundboardSounds))),
            (I = new Set(t.favoritedSoundIds)),
            (m = new Set(t.localSoundboardMutes));
    },
});
