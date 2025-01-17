var i,
    a,
    s = r(47120);
var o = r(653041);
var l = r(536091);
var u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(570140),
    _ = r(695346),
    h = r(581883),
    p = r(594174),
    m = r(626135),
    g = r(36703),
    E = r(709054),
    v = r(710111),
    I = r(981631),
    T = r(526761);
function b(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED');
})(i || (i = {}));
let y = new Map(),
    S = new Map(),
    A = new Set(),
    N = 0,
    C = 0,
    R = new Set(),
    O = new Map(),
    D = !1;
function L() {
    y.clear(), S.clear(), O.clear(), (D = !1), (C = 0), (N = 0);
}
function x() {
    S.clear(), O.clear();
}
function w() {
    C = 1;
}
function P(e) {
    let { updates: n } = e;
    n.forEach((e) => {
        let { guildId: n, sounds: r } = e;
        y.set(n, r);
    }),
        (C = 2);
}
function M(e) {
    let { guild: n } = e;
    y.delete(n.id);
}
function k(e) {
    let { sound: n } = e,
        r = y.get(n.guildId),
        i = null == r ? void 0 : r.findIndex((e) => e.soundId === n.soundId);
    null != r && null != i && -1 !== i ? ((r[i] = n), y.set(n.guildId, [...r])) : null != r && (null == r || r.push(n), y.set(n.guildId, [...r]));
}
function U(e) {
    let { guildId: n, soundboardSounds: r } = e;
    y.set(n, r);
}
function B(e) {
    let { soundId: n, guildId: r } = e,
        i = y.get(r),
        a = null == i ? void 0 : i.findIndex((e) => e.soundId === n);
    null != i && null != a && !(a < 0) && (i.splice(a, 1), y.set(r, [...i]));
}
function G() {
    N = 1;
}
function Z(e) {
    let { soundboardSounds: n } = e;
    y.set(v.X8, n), (N = 2);
}
function F(e) {
    var n, r, i;
    let { soundId: a, userId: s } = e,
        o = (null !== (r = S.get(a)) && void 0 !== r ? r : 0) + 1,
        l = (null !== (i = O.get(s)) && void 0 !== i ? i : 0) + 1;
    S.set(a, o), O.set(s, l), s !== (null === (n = p.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && (D = !0);
}
function V(e) {
    var n, r;
    let { soundId: i, userId: a } = e,
        s = (null !== (n = S.get(i)) && void 0 !== n ? n : 0) - 1,
        o = (null !== (r = O.get(a)) && void 0 !== r ? r : 0) - 1;
    s <= 0 ? S.delete(i) : S.set(i, s), o <= 0 ? O.delete(a) : O.set(a, o);
}
let j = c().debounce((e) => {
    m.default.track(I.rMx.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, g.P)(e)) }), _.kU.updateSetting({ volume: e });
}, 1000);
function H(e) {
    let { volume: n } = e;
    j(n);
}
function Y(e) {
    var n, r;
    let i = null !== (r = null == e ? void 0 : null === (n = e.audioContextSettings) || void 0 === n ? void 0 : n.user) && void 0 !== r ? r : {};
    for (let [e, n] of Object.entries(i)) n.soundboardMuted ? A.add(e) : A.delete(e);
    for (let e of A.keys()) null == i[e] && A.delete(e);
}
function W(e) {
    let { settings: n } = e,
        { type: r, proto: i } = n;
    if (r === T.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
        var a, s;
        R = new Set(null !== (s = null == i ? void 0 : null === (a = i.favoriteSoundboardSounds) || void 0 === a ? void 0 : a.soundIds) && void 0 !== s ? s : []);
    } else r === T.yP.PRELOADED_USER_SETTINGS && Y(i);
}
function K(e) {
    let { userId: n } = e;
    A.has(n) ? A.delete(n) : A.add(n);
}
function z(e) {
    let { soundboardStoreState: n } = e;
    (y = new Map(E.default.entries(n.soundboardSounds))), (R = new Set(n.favoritedSoundIds)), (A = new Set(n.localSoundboardMutes));
}
class q extends (a = d.ZP.Store) {
    initialize() {
        this.waitFor(h.Z), Y(h.Z.settings);
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(y),
            favoritedSoundIds: Array.from(R),
            localSoundboardMutes: Array.from(A)
        };
    }
    getSounds() {
        return y;
    }
    getSoundsForGuild(e) {
        return y.get(e);
    }
    getSound(e, n) {
        var r;
        return (null !== (r = y.get(e)) && void 0 !== r ? r : []).find((e) => e.soundId === n);
    }
    getSoundById(e) {
        return Array.from(y.values())
            .flat()
            .find((n) => n.soundId === e);
    }
    isFetchingSounds() {
        return 1 === C;
    }
    isFetchingDefaultSounds() {
        return 1 === N;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === N;
    }
    hasFetchedDefaultSounds() {
        return 2 === N;
    }
    isUserPlayingSounds(e) {
        let n = O.get(e);
        return null != n && n > 0;
    }
    isPlayingSound(e) {
        return null != S.get(e);
    }
    isFavoriteSound(e) {
        return R.has(e);
    }
    getFavorites() {
        return R;
    }
    isLocalSoundboardMuted(e) {
        return A.has(e);
    }
    hasHadOtherUserPlaySoundInSession() {
        return D;
    }
    hasFetchedAllSounds() {
        return 2 === C && 2 === N;
    }
}
b(q, 'displayName', 'SoundboardStore'),
    (n.Z = new q(f.Z, {
        LOGOUT: L,
        GUILD_SOUNDBOARD_FETCH: w,
        GUILD_SOUNDBOARD_SOUND_CREATE: k,
        GUILD_SOUNDBOARD_SOUND_UPDATE: k,
        GUILD_SOUNDBOARD_SOUND_DELETE: B,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: F,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: V,
        USER_SOUNDBOARD_SET_VOLUME: H,
        VOICE_CHANNEL_SELECT: x,
        USER_SETTINGS_PROTO_UPDATE: W,
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS: G,
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: Z,
        SOUNDBOARD_SOUNDS_RECEIVED: P,
        GUILD_DELETE: M,
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: K,
        OVERLAY_INITIALIZE: z,
        GUILD_SOUNDBOARD_SOUNDS_UPDATE: U
    }));
