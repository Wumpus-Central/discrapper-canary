var i,
    a,
    o = r(47120);
var s = r(653041);
var l = r(536091);
var u = r(392711),
    c = r.n(u),
    d = r(442837),
    f = r(570140),
    p = r(695346),
    h = r(581883),
    _ = r(594174),
    m = r(626135),
    g = r(36703),
    E = r(709054),
    v = r(710111),
    y = r(981631),
    b = r(526761);
function I(e, n, r) {
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
let T = new Map(),
    S = new Map(),
    A = new Set(),
    C = 0,
    N = 0,
    R = new Set(),
    O = new Map(),
    D = !1;
function x() {
    T.clear(), S.clear(), O.clear(), (D = !1), (N = 0), (C = 0);
}
function L() {
    S.clear(), O.clear();
}
function w() {
    N = 1;
}
function P(e) {
    let { updates: n } = e;
    n.forEach((e) => {
        let { guildId: n, sounds: r } = e;
        T.set(n, r);
    }),
        (N = 2);
}
function M(e) {
    let { guild: n } = e;
    T.delete(n.id);
}
function k(e) {
    let { sound: n } = e,
        r = T.get(n.guildId),
        i = null == r ? void 0 : r.findIndex((e) => e.soundId === n.soundId);
    null != r && null != i && -1 !== i ? ((r[i] = n), T.set(n.guildId, [...r])) : null != r && (null == r || r.push(n), T.set(n.guildId, [...r]));
}
function U(e) {
    let { guildId: n, soundboardSounds: r } = e;
    T.set(n, r);
}
function B(e) {
    let { soundId: n, guildId: r } = e,
        i = T.get(r),
        a = null == i ? void 0 : i.findIndex((e) => e.soundId === n);
    null != i && null != a && !(a < 0) && (i.splice(a, 1), T.set(r, [...i]));
}
function G() {
    C = 1;
}
function Z(e) {
    let { soundboardSounds: n } = e;
    T.set(v.X8, n), (C = 2);
}
function F(e) {
    var n, r, i;
    let { soundId: a, userId: o } = e,
        s = (null !== (r = S.get(a)) && void 0 !== r ? r : 0) + 1,
        l = (null !== (i = O.get(o)) && void 0 !== i ? i : 0) + 1;
    S.set(a, s), O.set(o, l), o !== (null === (n = _.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && (D = !0);
}
function V(e) {
    var n, r;
    let { soundId: i, userId: a } = e,
        o = (null !== (n = S.get(i)) && void 0 !== n ? n : 0) - 1,
        s = (null !== (r = O.get(a)) && void 0 !== r ? r : 0) - 1;
    o <= 0 ? S.delete(i) : S.set(i, o), s <= 0 ? O.delete(a) : O.set(a, s);
}
let j = c().debounce((e) => {
    m.default.track(y.rMx.UPDATE_SOUNDBOARD_SETTINGS, { volume: Math.round((0, g.P)(e)) }), p.kU.updateSetting({ volume: e });
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
    if (r === b.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
        var a, o;
        R = new Set(null !== (o = null == i ? void 0 : null === (a = i.favoriteSoundboardSounds) || void 0 === a ? void 0 : a.soundIds) && void 0 !== o ? o : []);
    } else r === b.yP.PRELOADED_USER_SETTINGS && Y(i);
}
function K(e) {
    let { userId: n } = e;
    A.has(n) ? A.delete(n) : A.add(n);
}
function z(e) {
    let { soundboardStoreState: n } = e;
    (T = new Map(E.default.entries(n.soundboardSounds))), (R = new Set(n.favoritedSoundIds)), (A = new Set(n.localSoundboardMutes));
}
class q extends (a = d.ZP.Store) {
    initialize() {
        this.waitFor(h.Z), Y(h.Z.settings);
    }
    getOverlaySerializedState() {
        return {
            soundboardSounds: Object.fromEntries(T),
            favoritedSoundIds: Array.from(R),
            localSoundboardMutes: Array.from(A)
        };
    }
    getSounds() {
        return T;
    }
    getSoundsForGuild(e) {
        return T.get(e);
    }
    getSound(e, n) {
        var r;
        return (null !== (r = T.get(e)) && void 0 !== r ? r : []).find((e) => e.soundId === n);
    }
    getSoundById(e) {
        return Array.from(T.values())
            .flat()
            .find((n) => n.soundId === e);
    }
    isFetchingSounds() {
        return 1 === N;
    }
    isFetchingDefaultSounds() {
        return 1 === C;
    }
    isFetching() {
        return this.isFetchingSounds() || this.isFetchingDefaultSounds();
    }
    shouldFetchDefaultSounds() {
        return 0 === C;
    }
    hasFetchedDefaultSounds() {
        return 2 === C;
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
        return 2 === N && 2 === C;
    }
}
I(q, 'displayName', 'SoundboardStore'),
    (n.Z = new q(f.Z, {
        LOGOUT: x,
        GUILD_SOUNDBOARD_FETCH: w,
        GUILD_SOUNDBOARD_SOUND_CREATE: k,
        GUILD_SOUNDBOARD_SOUND_UPDATE: k,
        GUILD_SOUNDBOARD_SOUND_DELETE: B,
        GUILD_SOUNDBOARD_SOUND_PLAY_START: F,
        GUILD_SOUNDBOARD_SOUND_PLAY_END: V,
        USER_SOUNDBOARD_SET_VOLUME: H,
        VOICE_CHANNEL_SELECT: L,
        USER_SETTINGS_PROTO_UPDATE: W,
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS: G,
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: Z,
        SOUNDBOARD_SOUNDS_RECEIVED: P,
        GUILD_DELETE: M,
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: K,
        OVERLAY_INITIALIZE: z,
        GUILD_SOUNDBOARD_SOUNDS_UPDATE: U
    }));
