"use strict";
n.d(t, { A: () => j }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(73153),
    o = n(253932),
    l = n(617617),
    u = n(287809),
    c = n(954571),
    d = n(824744),
    _ = n(661191);
n(980504);
var f = n(652215),
    p = n(355097);
let h = new Map(),
    m = new Map(),
    g = new Set(),
    E = 0,
    A = 0,
    I = new Set(),
    T = new Map(),
    y = !1;
function S() {
    h.clear(), m.clear(), T.clear(), (y = !1), (A = 0), (E = 0);
}
function v() {
    m.clear(), T.clear();
}
function C() {
    A = 1;
}
function b(e) {
    let { updates: t } = e;
    t.forEach((e) => {
        let { guildId: t, sounds: n } = e;
        h.set(t, n);
    }),
        (A = 2);
}
function N(e) {
    let { guild: t } = e;
    h.delete(t.id);
}
function R(e) {
    let { sound: t } = e,
        n = h.get(t.guildId),
        r = n?.findIndex((e) => e.soundId === t.soundId);
    null != n && null != r && -1 !== r
        ? ((n[r] = t), h.set(t.guildId, [...n]))
        : null != n && (n?.push(t), h.set(t.guildId, [...n]));
}
function O(e) {
    let { guildId: t, soundboardSounds: n } = e;
    h.set(t, n);
}
function D(e) {
    let { soundId: t, guildId: n } = e,
        r = h.get(n),
        i = r?.findIndex((e) => e.soundId === t);
    null == r || null == i || i < 0 || (r.splice(i, 1), h.set(n, [...r]));
}
function L() {
    E = 1;
}
function w(e) {
    let { soundboardSounds: t } = e;
    h.set("0", t), (E = 2);
}
function x(e) {
    let { soundId: t, userId: n } = e,
        r = (m.get(t) ?? 0) + 1,
        i = (T.get(n) ?? 0) + 1;
    m.set(t, r), T.set(n, i), n !== u.default.getCurrentUser()?.id && (y = !0);
}
function P(e) {
    let { soundId: t, userId: n } = e,
        r = (m.get(t) ?? 0) - 1,
        i = (T.get(n) ?? 0) - 1;
    r <= 0 ? m.delete(t) : m.set(t, r), i <= 0 ? T.delete(n) : T.set(n, i);
}
let M = i().debounce((e, t) => {
    c.default.track(f.HAw.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, d.M)(e)), location_stack: t }),
        o.dG.updateSetting({ volume: e });
}, 1e3);
function k(e) {
    let { volume: t, location: n } = e;
    M(t, n);
}
function U(e) {
    let t = e?.audioContextSettings?.user ?? {};
    for (let [e, n] of Object.entries(t)) n.soundboardMuted ? g.add(e) : g.delete(e);
    for (let e of g.keys()) null == t[e] && g.delete(e);
}
function G(e) {
    let { settings: t } = e,
        { type: n, proto: r } = t;
    n === p.oD.FRECENCY_AND_FAVORITES_SETTINGS
        ? (I = new Set(r?.favoriteSoundboardSounds?.soundIds ?? []))
        : n === p.oD.PRELOADED_USER_SETTINGS && U(r);
}
function V(e) {
    let { userId: t } = e;
    g.has(t) ? g.delete(t) : g.add(t);
}
function F(e) {
    let { soundboardStoreState: t } = e;
    (h = new Map(_.default.entries(t.soundboardSounds))),
        (I = new Set(t.favoritedSoundIds)),
        (g = new Set(t.localSoundboardMutes));
}
class B extends a.Ay.Store {
    static displayName = "SoundboardStore";
    initialize() {
        this.waitFor(l.A, u.default), U(l.A.settings);
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(h),
            favoritedSoundIds: Array.from(I),
            localSoundboardMutes: Array.from(g),
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
        return 1 === E;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === E;
    }
    hasFetchedDefaultSounds() {
        return 2 === E;
    }
    isUserPlayingSounds(e) {
        let t = T.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != m.get(e);
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
        return y;
    }
    hasFetchedAllSounds() {
        return 2 === A && 2 === E;
    }
    isFetchingAnySounds() {
        return 1 === A || 1 === E;
    }
}
let j = new B(s.h, {
    LOGOUT: S,
    GUILD_SOUNDBOARD_FETCH: C,
    GUILD_SOUNDBOARD_SOUND_CREATE: R,
    GUILD_SOUNDBOARD_SOUND_UPDATE: R,
    GUILD_SOUNDBOARD_SOUND_DELETE: D,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: x,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: P,
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: O,
    USER_SOUNDBOARD_SET_VOLUME: k,
    VOICE_CHANNEL_SELECT: v,
    USER_SETTINGS_PROTO_UPDATE: G,
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: L,
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: w,
    SOUNDBOARD_SOUNDS_RECEIVED: b,
    GUILD_DELETE: N,
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: V,
    OVERLAY_INITIALIZE: F,
});
