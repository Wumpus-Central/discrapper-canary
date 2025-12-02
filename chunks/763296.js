n.d(t, { Z: () => J }), n(388685), n(539854), n(467055), n(472816), n(794429);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(695346),
    c = n(581883),
    u = n(594174),
    d = n(626135),
    f = n(36703),
    p = n(709054),
    _ = n(771784),
    m = n(710111),
    h = n(981631),
    g = n(526761);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let b = new Map(),
    y = new Map(),
    O = new Map(),
    v = new Set(),
    S = 0,
    I = 0,
    T = 0,
    A = 0,
    C = new Set(),
    N = new Map(),
    P = !1;
function R() {
    b.clear(), y.clear(), (A = 0), O.clear(), N.clear(), (P = !1), (I = 0), (T = 0), (S = 0);
}
function w() {
    O.clear(), N.clear();
}
function D() {
    I = 1;
}
function x(e) {
    let { updates: t } = e;
    t.forEach((e) => {
        let { guildId: t, sounds: n } = e;
        b.set(t, n);
    }),
        (I = 2);
}
function L(e) {
    let { guild: t } = e;
    b.delete(t.id);
}
function j(e) {
    let { sound: t } = e,
        n = b.get(t.guildId),
        r = null == n ? void 0 : n.findIndex((e) => e.soundId === t.soundId);
    null != n && null != r && -1 !== r
        ? ((n[r] = t), b.set(t.guildId, [...n]))
        : null != n && (null == n || n.push(t), b.set(t.guildId, [...n]));
}
function M(e) {
    let { guildId: t, soundboardSounds: n } = e;
    b.set(t, n);
}
function k(e) {
    let { soundId: t, guildId: n } = e,
        r = b.get(n),
        i = null == r ? void 0 : r.findIndex((e) => e.soundId === t);
    null == r || null == i || i < 0 || (r.splice(i, 1), b.set(n, [...r]));
}
function U() {
    S = 1;
}
function G(e) {
    let { soundboardSounds: t } = e;
    b.set(m.X8, t), (S = 2);
}
function Z() {
    T = 1;
}
function B(e) {
    let { topSoundsForGuilds: t } = e;
    (y = new Map(t)), (T = 2), (A = Date.now());
}
function F() {
    (T = 2), (A = 0);
}
function V(e) {
    var t, n, r;
    let { soundId: i, userId: a } = e,
        o = (null != (n = O.get(i)) ? n : 0) + 1,
        s = (null != (r = N.get(a)) ? r : 0) + 1;
    O.set(i, o), N.set(a, s), a !== (null == (t = u.default.getCurrentUser()) ? void 0 : t.id) && (P = !0);
}
function H(e) {
    var t, n;
    let { soundId: r, userId: i } = e,
        a = (null != (t = O.get(r)) ? t : 0) - 1,
        o = (null != (n = N.get(i)) ? n : 0) - 1;
    a <= 0 ? O.delete(r) : O.set(r, a), o <= 0 ? N.delete(i) : N.set(i, o);
}
let Y = a().debounce((e, t) => {
    d.default.track(h.rMx.UPDATE_SOUNDBOARD_SETTINGS, {
        volume: Math.round((0, f.P)(e)),
        location_stack: t,
    }),
        l.kU.updateSetting({ volume: e });
}, 1000);
function W(e) {
    let { volume: t, location: n } = e;
    Y(t, n);
}
function K(e) {
    var t, n;
    let r = null != (n = null == e || null == (t = e.audioContextSettings) ? void 0 : t.user) ? n : {};
    for (let [e, t] of Object.entries(r)) t.soundboardMuted ? v.add(e) : v.delete(e);
    for (let e of v.keys()) null == r[e] && v.delete(e);
}
function z(e) {
    let { settings: t } = e,
        { type: n, proto: r } = t;
    if (n === g.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
        var i, a;
        C = new Set(null != (a = null == r || null == (i = r.favoriteSoundboardSounds) ? void 0 : i.soundIds) ? a : []);
    } else n === g.yP.PRELOADED_USER_SETTINGS && K(r);
}
function q(e) {
    let { userId: t } = e;
    v.has(t) ? v.delete(t) : v.add(t);
}
function X(e) {
    let { soundboardStoreState: t } = e;
    (b = new Map(p.default.entries(t.soundboardSounds))),
        (C = new Set(t.favoritedSoundIds)),
        (v = new Set(t.localSoundboardMutes));
}
class Q extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, u.default), K(c.Z.settings);
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(b),
            favoritedSoundIds: Array.from(C),
            localSoundboardMutes: Array.from(v),
        };
    }
    getSounds() {
        return b;
    }
    getSoundsForGuild(e) {
        return b.get(e);
    }
    getSound(e, t) {
        var n;
        return (null != (n = b.get(e)) ? n : []).find((e) => e.soundId === t);
    }
    getSoundById(e) {
        return Array.from(b.values())
            .flat()
            .find((t) => t.soundId === e);
    }
    isFetchingSounds() {
        return 1 === I;
    }
    isFetchingDefaultSounds() {
        return 1 === S;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === S;
    }
    hasFetchedDefaultSounds() {
        return 2 === S;
    }
    isUserPlayingSounds(e) {
        let t = N.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != O.get(e);
    }
    isFavoriteSound(e) {
        return C.has(e);
    }
    getFavorites() {
        return C;
    }
    getAllTopSoundsForGuilds() {
        return y;
    }
    isLocalSoundboardMuted(e) {
        return v.has(e);
    }
    hasHadOtherUserPlaySoundInSession() {
        return P;
    }
    shouldFetchTopSoundsForGuilds() {
        return (0, _.cI)("SoundboardStore") && (0 === T || (2 === T && Date.now() - A > 86400000));
    }
    hasFetchedTopSoundsForGuilds() {
        return 2 === T;
    }
    hasFetchedAllSounds() {
        let e = [I, S];
        return (0, _.cI)("SoundboardStore") && e.push(T), e.every((e) => 2 === e);
    }
    isFetchingAnySounds() {
        return [I, S, T].some((e) => 1 === e);
    }
}
E(Q, "displayName", "SoundboardStore");
let J = new Q(s.Z, {
    LOGOUT: R,
    GUILD_SOUNDBOARD_FETCH: D,
    GUILD_SOUNDBOARD_SOUND_CREATE: j,
    GUILD_SOUNDBOARD_SOUND_UPDATE: j,
    GUILD_SOUNDBOARD_SOUND_DELETE: k,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: V,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: H,
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: M,
    USER_SOUNDBOARD_SET_VOLUME: W,
    VOICE_CHANNEL_SELECT: w,
    USER_SETTINGS_PROTO_UPDATE: z,
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: U,
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: G,
    SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FETCH: Z,
    SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS: B,
    SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FAILURE: F,
    SOUNDBOARD_SOUNDS_RECEIVED: x,
    GUILD_DELETE: L,
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: q,
    OVERLAY_INITIALIZE: X,
});
