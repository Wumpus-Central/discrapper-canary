n.d(t, { Z: () => Y }), n(47120), n(653041), n(536091);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(695346),
    u = n(581883),
    c = n(594174),
    d = n(626135),
    f = n(36703),
    _ = n(709054),
    p = n(710111),
    h = n(981631),
    m = n(526761);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = new Map(),
    v = new Map(),
    y = new Set(),
    I = 0,
    T = 0,
    b = new Set(),
    S = new Map(),
    A = !1;
function N() {
    E.clear(), v.clear(), S.clear(), (A = !1), (T = 0), (I = 0);
}
function C() {
    v.clear(), S.clear();
}
function R() {
    T = 1;
}
function O(e) {
    let { updates: t } = e;
    t.forEach((e) => {
        let { guildId: t, sounds: n } = e;
        E.set(t, n);
    }),
        (T = 2);
}
function D(e) {
    let { guild: t } = e;
    E.delete(t.id);
}
function L(e) {
    let { sound: t } = e,
        n = E.get(t.guildId),
        i = null == n ? void 0 : n.findIndex((e) => e.soundId === t.soundId);
    null != n && null != i && -1 !== i ? ((n[i] = t), E.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), E.set(t.guildId, [...n]));
}
function x(e) {
    let { guildId: t, soundboardSounds: n } = e;
    E.set(t, n);
}
function P(e) {
    let { soundId: t, guildId: n } = e,
        i = E.get(n),
        r = null == i ? void 0 : i.findIndex((e) => e.soundId === t);
    null == i || null == r || r < 0 || (i.splice(r, 1), E.set(n, [...i]));
}
function w() {
    I = 1;
}
function M(e) {
    let { soundboardSounds: t } = e;
    E.set(p.X8, t), (I = 2);
}
function k(e) {
    var t, n, i;
    let { soundId: r, userId: a } = e,
        s = (null !== (n = v.get(r)) && void 0 !== n ? n : 0) + 1,
        o = (null !== (i = S.get(a)) && void 0 !== i ? i : 0) + 1;
    v.set(r, s), S.set(a, o), a !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (A = !0);
}
function U(e) {
    var t, n;
    let { soundId: i, userId: r } = e,
        a = (null !== (t = v.get(i)) && void 0 !== t ? t : 0) - 1,
        s = (null !== (n = S.get(r)) && void 0 !== n ? n : 0) - 1;
    a <= 0 ? v.delete(i) : v.set(i, a), s <= 0 ? S.delete(r) : S.set(r, s);
}
let G = a().debounce((e) => {
    d.default.track(h.rMx.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, f.P)(e)) }), l.kU.updateSetting({ volume: e });
}, 1000);
function B(e) {
    let { volume: t } = e;
    G(t);
}
function Z(e) {
    var t, n;
    let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
    for (let [e, t] of Object.entries(i)) t.soundboardMuted ? y.add(e) : y.delete(e);
    for (let e of y.keys()) null == i[e] && y.delete(e);
}
function F(e) {
    let { settings: t } = e,
        { type: n, proto: i } = t;
    if (n === m.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
        var r, a;
        b = new Set(null !== (a = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== a ? a : []);
    } else n === m.yP.PRELOADED_USER_SETTINGS && Z(i);
}
function V(e) {
    let { userId: t } = e;
    y.has(t) ? y.delete(t) : y.add(t);
}
function j(e) {
    let { soundboardStoreState: t } = e;
    (E = new Map(_.default.entries(t.soundboardSounds))), (b = new Set(t.favoritedSoundIds)), (y = new Set(t.localSoundboardMutes));
}
class H extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z), Z(u.Z.settings);
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(E),
            favoritedSoundIds: Array.from(b),
            localSoundboardMutes: Array.from(y)
        };
    }
    getSounds() {
        return E;
    }
    getSoundsForGuild(e) {
        return E.get(e);
    }
    getSound(e, t) {
        var n;
        return (null !== (n = E.get(e)) && void 0 !== n ? n : []).find((e) => e.soundId === t);
    }
    getSoundById(e) {
        return Array.from(E.values())
            .flat()
            .find((t) => t.soundId === e);
    }
    isFetchingSounds() {
        return 1 === T;
    }
    isFetchingDefaultSounds() {
        return 1 === I;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === I;
    }
    hasFetchedDefaultSounds() {
        return 2 === I;
    }
    isUserPlayingSounds(e) {
        let t = S.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != v.get(e);
    }
    isFavoriteSound(e) {
        return b.has(e);
    }
    getFavorites() {
        return b;
    }
    isLocalSoundboardMuted(e) {
        return y.has(e);
    }
    hasHadOtherUserPlaySoundInSession() {
        return A;
    }
    hasFetchedAllSounds() {
        return 2 === T && 2 === I;
    }
}
g(H, 'displayName', 'SoundboardStore');
let Y = new H(o.Z, {
    LOGOUT: N,
    GUILD_SOUNDBOARD_FETCH: R,
    GUILD_SOUNDBOARD_SOUND_CREATE: L,
    GUILD_SOUNDBOARD_SOUND_UPDATE: L,
    GUILD_SOUNDBOARD_SOUND_DELETE: P,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: k,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: U,
    USER_SOUNDBOARD_SET_VOLUME: B,
    VOICE_CHANNEL_SELECT: C,
    USER_SETTINGS_PROTO_UPDATE: F,
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: w,
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: M,
    SOUNDBOARD_SOUNDS_RECEIVED: O,
    GUILD_DELETE: D,
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: V,
    OVERLAY_INITIALIZE: j,
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: x
});
