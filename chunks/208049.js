(n.d(t, {
    $d: () => T,
    AA: () => S,
    Db: () => L,
    Dx: () => I,
    R: () => w,
    TB: () => A,
    XE: () => R,
    hs: () => N,
    w: () => v,
    xR: () => P,
    xU: () => C,
    xz: () => D
}),
    n(388685),
    n(539854));
var r = n(392711),
    i = n.n(r),
    a = n(544891),
    o = n(570140),
    s = n(668781),
    l = n(479531),
    c = n(675478),
    u = n(900849),
    d = n(763296),
    _ = n(697426),
    f = n(174470),
    p = n(710111),
    h = n(981631),
    m = n(526761),
    g = n(388032);
let E = async () => {
        try {
            let e = (
                await a.tn.get({
                    url: h.ANM.SOUNDBOARD_DEFAULT_SOUNDS,
                    rejectWithError: !1
                })
            ).body.map((e) => (0, _.o3)(e, p.X8));
            o.Z.dispatch({
                type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS',
                soundboardSounds: e
            });
        } catch (e) {
            throw (o.Z.dispatch({ type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE' }), new l.Z(e));
        }
    },
    b = (e) =>
        new Promise((t) => {
            let n = () => {
                (o.Z.unsubscribe(e, n), setTimeout(t, 0));
            };
            o.Z.subscribe(e, n);
        }),
    y = () => {
        if (!d.Z.shouldFetchDefaultSounds()) return Promise.resolve();
        o.Z.dispatch({ type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS' });
        let e = b('SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS');
        return (E(), e);
    },
    O = () => {
        let e = (0, f.D)();
        if (0 === e.length) return Promise.resolve();
        let t = b('SOUNDBOARD_SOUNDS_RECEIVED');
        return (
            o.Z.dispatch({ type: 'GUILD_SOUNDBOARD_FETCH' }),
            o.Z.dispatch({
                type: 'REQUEST_SOUNDBOARD_SOUNDS',
                guildIds: e
            }),
            t
        );
    },
    v = () => (__OVERLAY__ ? (o.Z.dispatch({ type: 'OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST' }), Promise.all([])) : Promise.all([y(), O()]));
async function I(e) {
    let { guildId: t, name: n, sound: r, volume: i, emojiId: o, emojiName: s } = e,
        l = await a.tn.post({
            url: h.ANM.GUILD_SOUNDBOARD_SOUNDS(t),
            body: {
                name: n,
                sound: r,
                volume: i,
                emoji_id: o,
                emoji_name: s
            },
            rejectWithError: !1
        });
    return (0, _.o3)(l.body, t);
}
async function T(e) {
    let { guildId: t, soundId: n, name: r, volume: i, emojiId: o, emojiName: s } = e,
        l = await a.tn.patch({
            url: h.ANM.GUILD_SOUNDBOARD_SOUND(t, n),
            body: {
                name: r,
                volume: i,
                emoji_id: o,
                emoji_name: s
            },
            rejectWithError: !1
        });
    return (0, _.o3)(l.body, t);
}
async function S(e, t) {
    await a.tn.del({
        url: h.ANM.GUILD_SOUNDBOARD_SOUND(e, t),
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function A(e) {
    c.DZ.updateAsync(
        'favoriteSoundboardSounds',
        (t) =>
            i().size(t.soundIds) >= m.oX
                ? (s.Z.show({
                      title: g.intl.string(g.t['+XYXtb']),
                      body: g.intl.formatToPlainString(g.t.JaIyFh, { count: m.oX })
                  }),
                  !1)
                : !t.soundIds.includes(e) && void t.soundIds.push(e),
        m.fy.INFREQUENT_USER_ACTION
    );
}
function N(e) {
    c.DZ.updateAsync(
        'favoriteSoundboardSounds',
        (t) => {
            t.soundIds = t.soundIds.filter((t) => t !== e);
        },
        m.fy.INFREQUENT_USER_ACTION
    );
}
async function C(e, t) {
    try {
        let n = await a.tn.get({
            url: h.ANM.SOUNDBOARD_SOUND_GUILD_DATA(e, t),
            rejectWithError: !1
        });
        return null != n.body ? (0, u.PP)(n.body) : null;
    } catch (e) {
        throw new l.Z(e);
    }
}
function R(e, t, n) {
    o.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY',
        sound: t,
        channelId: e,
        trigger: n
    });
}
function P(e, t) {
    o.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_START',
        soundId: e,
        userId: t
    });
}
function w(e, t) {
    o.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_END',
        soundId: e,
        userId: t
    });
}
function D(e, t) {
    o.Z.dispatch({
        type: 'USER_SOUNDBOARD_SET_VOLUME',
        volume: e,
        location: t
    });
}
function L(e) {
    o.Z.dispatch({
        type: 'SOUNDBOARD_MUTE_JOIN_SOUND',
        channelId: e
    });
}
