n.d(t, { Z: () => K }), n(47120), n(653041), n(977457), n(86693), n(536091);
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
    b = new Map(),
    y = new Set(),
    v = 0,
    O = 0,
    I = new Set(),
    S = new Map(),
    T = !1,
    N = [];
function A() {
    E.clear(), b.clear(), S.clear(), (T = !1), (O = 0), (v = 0);
}
function C() {
    b.clear(), S.clear();
}
function R() {
    O = 1;
}
function P(e) {
    let { updates: t } = e;
    t.forEach((e) => {
        let { guildId: t, sounds: n } = e;
        E.set(t, n);
    }),
        (O = 2);
}
function w(e) {
    let { guild: t } = e;
    E.delete(t.id);
}
function D(e) {
    let { sound: t } = e,
        n = E.get(t.guildId),
        r = null == n ? void 0 : n.findIndex((e) => e.soundId === t.soundId);
    null != n && null != r && -1 !== r ? ((n[r] = t), E.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), E.set(t.guildId, [...n]));
}
function L(e) {
    let { guildId: t, soundboardSounds: n } = e;
    E.set(t, n);
}
function x(e) {
    let { guildId: t } = e;
    N = N.includes(t) ? o().without(N, t) : [...N, t];
}
function M(e) {
    let { soundId: t, guildId: n } = e,
        r = E.get(n),
        i = null == r ? void 0 : r.findIndex((e) => e.soundId === t);
    null == r || null == i || i < 0 || (r.splice(i, 1), E.set(n, [...r]));
}
function k() {
    v = 1;
}
function j(e) {
    let { soundboardSounds: t } = e;
    E.set(p.X8, t), (v = 2);
}
function U(e) {
    var t, n, r;
    let { soundId: i, userId: o } = e,
        a = (null != (n = b.get(i)) ? n : 0) + 1,
        s = (null != (r = S.get(o)) ? r : 0) + 1;
    b.set(i, a), S.set(o, s), o !== (null == (t = u.default.getCurrentUser()) ? void 0 : t.id) && (T = !0);
}
function G(e) {
    var t, n;
    let { soundId: r, userId: i } = e,
        o = (null != (t = b.get(r)) ? t : 0) - 1,
        a = (null != (n = S.get(i)) ? n : 0) - 1;
    o <= 0 ? b.delete(r) : b.set(r, o), a <= 0 ? S.delete(i) : S.set(i, a);
}
let B = o().debounce((e, t) => {
    d.default.track(h.rMx.UPDATE_SOUNDBOARD_SETTINGS, {
        volume: Math.round((0, f.P)(e)),
        location_stack: t
    }),
        l.kU.updateSetting({ volume: e });
}, 1000);
function F(e) {
    let { volume: t, location: n } = e;
    B(t, n);
}
function V(e) {
    var t, n;
    let r = null != (n = null == e || null == (t = e.audioContextSettings) ? void 0 : t.user) ? n : {};
    for (let [e, t] of Object.entries(r)) t.soundboardMuted ? y.add(e) : y.delete(e);
    for (let e of y.keys()) null == r[e] && y.delete(e);
}
function Z(e) {
    let { settings: t } = e,
        { type: n, proto: r } = t;
    if (n === m.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
        var i, o;
        I = new Set(null != (o = null == r || null == (i = r.favoriteSoundboardSounds) ? void 0 : i.soundIds) ? o : []);
    } else n === m.yP.PRELOADED_USER_SETTINGS && V(r);
}
function H(e) {
    let { userId: t } = e;
    y.has(t) ? y.delete(t) : y.add(t);
}
function W(e) {
    let { soundboardStoreState: t } = e;
    (E = new Map(_.default.entries(t.soundboardSounds))), (I = new Set(t.favoritedSoundIds)), (y = new Set(t.localSoundboardMutes));
}
class Y extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z), V(c.Z.settings);
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(E),
            favoritedSoundIds: Array.from(I),
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
        return (null != (n = E.get(e)) ? n : []).find((e) => e.soundId === t);
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
        return 1 === v;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === v;
    }
    hasFetchedDefaultSounds() {
        return 2 === v;
    }
    isUserPlayingSounds(e) {
        let t = S.get(e);
        return null != t && t > 0;
    }
    isPlayingSound(e) {
        return null != b.get(e);
    }
    isFavoriteSound(e) {
        return I.has(e);
    }
    getFavorites() {
        return I;
    }
    isLocalSoundboardMuted(e) {
        return y.has(e);
    }
    hasHadOtherUserPlaySoundInSession() {
        return T;
    }
    hasFetchedAllSounds() {
        return 2 === O && 2 === v;
    }
    getShownAllGuildIds() {
        return N;
    }
}
g(Y, 'displayName', 'SoundboardStore');
let K = new Y(s.Z, {
    LOGOUT: A,
    GUILD_SOUNDBOARD_FETCH: R,
    GUILD_SOUNDBOARD_SOUND_CREATE: D,
    GUILD_SOUNDBOARD_SOUND_UPDATE: D,
    GUILD_SOUNDBOARD_SOUND_DELETE: M,
    GUILD_SOUNDBOARD_SOUND_PLAY_START: U,
    GUILD_SOUNDBOARD_SOUND_PLAY_END: G,
    GUILD_SOUNDBOARD_SOUNDS_UPDATE: L,
    GUILD_SOUNDBOARD_TOGGLE_SHOW_ALL: x,
    USER_SOUNDBOARD_SET_VOLUME: F,
    VOICE_CHANNEL_SELECT: C,
    USER_SETTINGS_PROTO_UPDATE: Z,
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS: k,
    SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: j,
    SOUNDBOARD_SOUNDS_RECEIVED: P,
    GUILD_DELETE: w,
    AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: H,
    OVERLAY_INITIALIZE: W
});
