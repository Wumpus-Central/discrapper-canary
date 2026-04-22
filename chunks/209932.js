"use strict";
n.d(t, { A: () => v }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(253932),
    l = n(617617),
    u = n(287809),
    d = n(954571),
    c = n(824744),
    _ = n(661191);
n(980504);
var f = n(652215),
    E = n(355097);
let h = new Map(),
    p = new Map(),
    m = new Set(),
    g = 0,
    A = 0,
    I = new Set(),
    T = new Map(),
    S = !1;
function y(e) {
    let { sound: t } = e,
        n = h.get(t.guildId),
        r = n?.findIndex((e) => e.soundId === t.soundId);
    null != n && null != r && -1 !== r
        ? ((n[r] = t), h.set(t.guildId, [...n]))
        : null != n && (n?.push(t), h.set(t.guildId, [...n]));
}
let N = i().debounce((e, t) => {
    d.default.track(f.HAw.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, c.M)(e)), location_stack: t }),
        o.dG.updateSetting({ volume: e });
}, 1e3);
function O(e) {
    let t = e?.audioContextSettings?.user ?? {};
    for (let [e, n] of Object.entries(t)) n.soundboardMuted ? m.add(e) : m.delete(e);
    for (let e of m.keys()) null == t[e] && m.delete(e);
}
class R extends s.Ay.Store {
    static displayName = "SoundboardStore";
    initialize() {
        this.waitFor(l.A, u.default), O(l.A.settings);
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(h),
            favoritedSoundIds: Array.from(I),
            localSoundboardMutes: Array.from(m),
        };
    }
    getSounds() {
        return h;
    }
    getSoundsForGuild(e) {
        return h.get(e);
    }
    getSound(e, t) {
        return (h.get(e) ?? []).find((e) => e.soundId === t);
    }
    getSoundById(e) {
        return Array.from(h.values())
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
        return null != p.get(e);
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
let v = new R(a.h, {
    LOGOUT: function () {
        h.clear(), p.clear(), T.clear(), (S = !1), (A = 0), (g = 0);
    },
    GUILD_SOUNDBOARD_FETCH: function () {
        A = 1;
    },
    GUILD_SOUNDBOARD_SOUND_CREATE: y,
    GUILD_SOUNDBOARD_SOUND_UPDATE: y,
    GUILD_SOUNDBOARD_SOUND_DELETE: function (e) {
        let { soundId: t, guildId: n } = e,
            r = h.get(n),
            i = r?.findIndex((e) => e.soundId === t);
        null == r || null == i || i < 0 || (r.splice(i, 1), h.set(n, [...r]));
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_START: function (e) {
        let { soundId: t, userId: n } = e,
            r = (p.get(t) ?? 0) + 1,
            i = (T.get(n) ?? 0) + 1;
        p.set(t, r), T.set(n, i), n !== u.default.getCurrentUser()?.id && (S = !0);
    },
    GUILD_SOUNDBOARD_SOUND_PLAY_END: function (e) {
        let { soundId: t, userId: n } = e,
            r = (p.get(t) ?? 0) - 1,
            i = (T.get(n) ?? 0) - 1;
        r <= 0 ? p.delete(t) : p.set(t, r), i <= 0 ? T.delete(n) : T.set(n, i);
    },
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: function (e) {
        let { guildId: t, soundboardSounds: n } = e;
        h.set(t, n);
    },
    USER_SOUNDBOARD_SET_VOLUME: function (e) {
        let { volume: t, location: n } = e;
        N(t, n);
    },
    VOICE_CHANNEL_SELECT: function () {
        p.clear(), T.clear();
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t } = e,
            { type: n, proto: r } = t;
        n === E.oD.FRECENCY_AND_FAVORITES_SETTINGS
            ? (I = new Set(r?.favoriteSoundboardSounds?.soundIds ?? []))
            : n === E.oD.PRELOADED_USER_SETTINGS && O(r);
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function () {
        g = 1;
    },
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function (e) {
        let { soundboardSounds: t } = e;
        h.set("0", t), (g = 2);
    },
    SOUNDBOARD_SOUNDS_RECEIVED: function (e) {
        let { updates: t } = e;
        t.forEach((e) => {
            let { guildId: t, sounds: n } = e;
            h.set(t, n);
        }),
            (A = 2);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        h.delete(t.id);
    },
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function (e) {
        let { userId: t } = e;
        m.has(t) ? m.delete(t) : m.add(t);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { soundboardStoreState: t } = e;
        (h = new Map(_.default.entries(t.soundboardSounds))),
            (I = new Set(t.favoritedSoundIds)),
            (m = new Set(t.localSoundboardMutes));
    },
});
