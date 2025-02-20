n.d(t, { Z: () => W }), n(47120), n(653041), n(977457), n(86693), n(536091);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(695346),
    c = n(581883),
    u = n(594174),
    d = n(626135),
    f = n(36703),
    p = n(709054),
    _ = n(710111),
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
    b = new Set(),
    y = 0,
    O = 0,
    S = new Set(),
    I = new Map(),
    T = !1;
function N() {
    E.clear(), v.clear(), I.clear(), (T = !1), (O = 0), (y = 0);
}
function A() {
    v.clear(), I.clear();
}
function C() {
    O = 1;
}
function R(e) {
    let { updates: t } = e;
    t.forEach((e) => {
        let { guildId: t, sounds: n } = e;
        E.set(t, n);
    }),
        (O = 2);
}
function P(e) {
    let { guild: t } = e;
    E.delete(t.id);
}
function w(e) {
    let { sound: t } = e,
        n = E.get(t.guildId),
        r = null == n ? void 0 : n.findIndex((e) => e.soundId === t.soundId);
    null != n && null != r && -1 !== r ? ((n[r] = t), E.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), E.set(t.guildId, [...n]));
}
function D(e) {
    let { guildId: t, soundboardSounds: n } = e;
    E.set(t, n);
}
function x(e) {
    let { soundId: t, guildId: n } = e,
        r = E.get(n),
        i = null == r ? void 0 : r.findIndex((e) => e.soundId === t);
    null == r || null == i || i < 0 || (r.splice(i, 1), E.set(n, [...r]));
}
function L() {
    y = 1;
}
function M(e) {
    let { soundboardSounds: t } = e;
    E.set(_.X8, t), (y = 2);
}
function k(e) {
    var t, n, r;
    let { soundId: i, userId: o } = e,
        a = (null !== (n = v.get(i)) && void 0 !== n ? n : 0) + 1,
        s = (null !== (r = I.get(o)) && void 0 !== r ? r : 0) + 1;
    v.set(i, a), I.set(o, s), o !== (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (T = !0);
}
function j(e) {
    var t, n;
    let { soundId: r, userId: i } = e,
        o = (null !== (t = v.get(r)) && void 0 !== t ? t : 0) - 1,
        a = (null !== (n = I.get(i)) && void 0 !== n ? n : 0) - 1;
    o <= 0 ? v.delete(r) : v.set(r, o), a <= 0 ? I.delete(i) : I.set(i, a);
}
let U = o().debounce((e) => {
    d.default.track(h.rMx.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, f.P)(e)) }), l.kU.updateSetting({ volume: e });
}, 1000);
function G(e) {
    let { volume: t } = e;
    U(t);
}
function B(e) {
    var t, n;
    let r = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
    for (let [e, t] of Object.entries(r)) t.soundboardMuted ? b.add(e) : b.delete(e);
    for (let e of b.keys()) null == r[e] && b.delete(e);
}
function Z(e) {
    let { settings: t } = e,
        { type: n, proto: r } = t;
    if (n === m.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
        var i, o;
        S = new Set(null !== (o = null == r ? void 0 : null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== o ? o : []);
    } else n === m.yP.PRELOADED_USER_SETTINGS && B(r);
}
function F(e) {
    let { userId: t } = e;
    b.has(t) ? b.delete(t) : b.add(t);
}
function V(e) {
    let { soundboardStoreState: t } = e;
    (E = new Map(p.default.entries(t.soundboardSounds))), (S = new Set(t.favoritedSoundIds)), (b = new Set(t.localSoundboardMutes));
}
class H extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z), B(c.Z.settings);
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(E),
            favoritedSoundIds: Array.from(S),
            localSoundboardMutes: Array.from(b)
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
        return 1 === O;
    }
    isFetchingDefaultSounds() {
        return 1 === y;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === y;
    }
    hasFetchedDefaultSounds() {
        return 2 === y;
    }
    isUserPlayingSounds(e) {
        let t = I.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != v.get(e);
    }
    isFavoriteSound(e) {
        return S.has(e);
    }
    getFavorites() {
        return S;
    }
    isLocalSoundboardMuted(e) {
        return b.has(e);
    }
    hasHadOtherUserPlaySoundInSession() {
        return T;
    }
    hasFetchedAllSounds() {
        return 2 === O && 2 === y;
    }
}
g(H, 'displayName', 'SoundboardStore');
let W = new H(s.Z, {
    LOGOUT: N,
    GUILD_SOUNDBOARD_FETCH: C,
    GUILD_SOUNDBOARD_SOUND_CREATE: w,
    GUILD_SOUNDBOARD_SOUND_UPDATE: w,
    GUILD_SOUNDBOARD_SOUND_DELETE: x,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: k,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: j,
    USER_SOUNDBOARD_SET_VOLUME: G,
    VOICE_CHANNEL_SELECT: A,
    USER_SETTINGS_PROTO_UPDATE: Z,
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: L,
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: M,
    SOUNDBOARD_SOUNDS_RECEIVED: R,
    GUILD_DELETE: P,
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: F,
    OVERLAY_INITIALIZE: V,
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: D
});
