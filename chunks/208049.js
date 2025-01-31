n.d(t, {
    $d: () => S,
    AA: () => A,
    Db: () => P,
    Dx: () => T,
    R: () => x,
    TB: () => N,
    XE: () => O,
    hs: () => C,
    w: () => b,
    xR: () => D,
    xU: () => R,
    xz: () => L
}),
    n(47120),
    n(653041);
var i = n(392711),
    r = n.n(i),
    a = n(544891),
    s = n(570140),
    o = n(668781),
    l = n(479531),
    u = n(675478),
    c = n(900849),
    d = n(763296),
    f = n(697426),
    _ = n(174470),
    p = n(710111),
    h = n(981631),
    m = n(526761),
    g = n(388032);
let E = async (e) => {
        try {
            let t = (
                await a.tn.get({
                    url: h.ANM.SOUNDBOARD_DEFAULT_SOUNDS,
                    query: { guild_ids: e },
                    rejectWithError: !1
                })
            ).body.map((e) => (0, f.o3)(e, p.X8));
            s.Z.dispatch({
                type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS',
                soundboardSounds: t
            });
        } catch (e) {
            throw (s.Z.dispatch({ type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE' }), new l.Z(e));
        }
    },
    v = (e) =>
        new Promise((t) => {
            let n = () => {
                s.Z.unsubscribe(e, n), setTimeout(t, 0);
            };
            s.Z.subscribe(e, n);
        }),
    y = (e) => {
        if (!d.Z.shouldFetchDefaultSounds()) return Promise.resolve();
        s.Z.dispatch({ type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS' });
        let t = v('SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS');
        return E(e), t;
    },
    I = () => {
        let e = (0, _.D)();
        if (0 === e.length) return Promise.resolve();
        let t = v('SOUNDBOARD_SOUNDS_RECEIVED');
        return (
            s.Z.dispatch({ type: 'GUILD_SOUNDBOARD_FETCH' }),
            s.Z.dispatch({
                type: 'REQUEST_SOUNDBOARD_SOUNDS',
                guildIds: e
            }),
            t
        );
    },
    b = () => (__OVERLAY__ ? (s.Z.dispatch({ type: 'OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST' }), Promise.all([])) : Promise.all([y(), I()]));
async function T(e) {
    let { guildId: t, name: n, sound: i, volume: r, emojiId: s, emojiName: o } = e,
        l = await a.tn.post({
            url: h.ANM.GUILD_SOUNDBOARD_SOUNDS(t),
            body: {
                name: n,
                sound: i,
                volume: r,
                emoji_id: s,
                emoji_name: o
            },
            rejectWithError: !1
        });
    return (0, f.o3)(l.body, t);
}
async function S(e) {
    let { guildId: t, soundId: n, name: i, volume: r, emojiId: s, emojiName: o } = e,
        l = await a.tn.patch({
            url: h.ANM.GUILD_SOUNDBOARD_SOUND(t, n),
            body: {
                name: i,
                volume: r,
                emoji_id: s,
                emoji_name: o
            },
            rejectWithError: !1
        });
    return (0, f.o3)(l.body, t);
}
async function A(e, t) {
    await a.tn.del({
        url: h.ANM.GUILD_SOUNDBOARD_SOUND(e, t),
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function N(e) {
    u.DZ.updateAsync(
        'favoriteSoundboardSounds',
        (t) =>
            r().size(t.soundIds) >= m.oX
                ? (o.Z.show({
                      title: g.intl.string(g.t['+XYXtb']),
                      body: g.intl.formatToPlainString(g.t.JaIyFh, { count: m.oX })
                  }),
                  !1)
                : !t.soundIds.includes(e) && void t.soundIds.push(e),
        m.fy.INFREQUENT_USER_ACTION
    );
}
function C(e) {
    u.DZ.updateAsync(
        'favoriteSoundboardSounds',
        (t) => {
            t.soundIds = t.soundIds.filter((t) => t !== e);
        },
        m.fy.INFREQUENT_USER_ACTION
    );
}
async function R(e, t) {
    try {
        let n = await a.tn.get({
            url: h.ANM.SOUNDBOARD_SOUND_GUILD_DATA(e, t),
            rejectWithError: !1
        });
        return null != n.body ? (0, c.PP)(n.body) : null;
    } catch (e) {
        throw new l.Z(e);
    }
}
function O(e, t, n) {
    s.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY',
        sound: t,
        channelId: e,
        trigger: n
    });
}
function D(e, t) {
    s.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_START',
        soundId: e,
        userId: t
    });
}
function x(e, t) {
    s.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_END',
        soundId: e,
        userId: t
    });
}
function L(e) {
    s.Z.dispatch({
        type: 'USER_SOUNDBOARD_SET_VOLUME',
        volume: e
    });
}
function P(e) {
    s.Z.dispatch({
        type: 'SOUNDBOARD_MUTE_JOIN_SOUND',
        channelId: e
    });
}
