r.d(n, {
    $d: function () {
        return N;
    },
    AA: function () {
        return R;
    },
    Db: function () {
        return k;
    },
    Dx: function () {
        return C;
    },
    R: function () {
        return P;
    },
    TB: function () {
        return O;
    },
    XE: function () {
        return x;
    },
    hs: function () {
        return D;
    },
    w: function () {
        return A;
    },
    xR: function () {
        return w;
    },
    xU: function () {
        return L;
    },
    xz: function () {
        return M;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(392711),
    s = r.n(o),
    l = r(544891),
    u = r(570140),
    c = r(668781),
    d = r(479531),
    f = r(675478),
    p = r(900849),
    h = r(763296),
    _ = r(697426),
    m = r(174470),
    g = r(710111),
    E = r(981631),
    v = r(526761),
    y = r(388032);
let b = async (e) => {
        try {
            let n = (
                await l.tn.get({
                    url: E.ANM.SOUNDBOARD_DEFAULT_SOUNDS,
                    query: { guild_ids: e },
                    rejectWithError: !1
                })
            ).body.map((e) => (0, _.o3)(e, g.X8));
            u.Z.dispatch({
                type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS',
                soundboardSounds: n
            });
        } catch (e) {
            throw (u.Z.dispatch({ type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE' }), new d.Z(e));
        }
    },
    I = (e) =>
        new Promise((n) => {
            let r = () => {
                u.Z.unsubscribe(e, r), setTimeout(n, 0);
            };
            u.Z.subscribe(e, r);
        }),
    T = (e) => {
        if (!h.Z.shouldFetchDefaultSounds()) return Promise.resolve();
        u.Z.dispatch({ type: 'SOUNDBOARD_FETCH_DEFAULT_SOUNDS' });
        let n = I('SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS');
        return b(e), n;
    },
    S = () => {
        let e = (0, m.D)();
        if (0 === e.length) return Promise.resolve();
        let n = I('SOUNDBOARD_SOUNDS_RECEIVED');
        return (
            u.Z.dispatch({ type: 'GUILD_SOUNDBOARD_FETCH' }),
            u.Z.dispatch({
                type: 'REQUEST_SOUNDBOARD_SOUNDS',
                guildIds: e
            }),
            n
        );
    },
    A = () => (__OVERLAY__ ? (u.Z.dispatch({ type: 'OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST' }), Promise.all([])) : Promise.all([T(), S()]));
async function C(e) {
    let { guildId: n, name: r, sound: i, volume: a, emojiId: o, emojiName: s } = e,
        u = await l.tn.post({
            url: E.ANM.GUILD_SOUNDBOARD_SOUNDS(n),
            body: {
                name: r,
                sound: i,
                volume: a,
                emoji_id: o,
                emoji_name: s
            },
            rejectWithError: !1
        });
    return (0, _.o3)(u.body, n);
}
async function N(e) {
    let { guildId: n, soundId: r, name: i, volume: a, emojiId: o, emojiName: s } = e,
        u = await l.tn.patch({
            url: E.ANM.GUILD_SOUNDBOARD_SOUND(n, r),
            body: {
                name: i,
                volume: a,
                emoji_id: o,
                emoji_name: s
            },
            rejectWithError: !1
        });
    return (0, _.o3)(u.body, n);
}
async function R(e, n) {
    await l.tn.del({
        url: E.ANM.GUILD_SOUNDBOARD_SOUND(e, n),
        oldFormErrors: !0,
        rejectWithError: !1
    });
}
function O(e) {
    f.DZ.updateAsync(
        'favoriteSoundboardSounds',
        (n) =>
            s().size(n.soundIds) >= v.oX
                ? (c.Z.show({
                      title: y.intl.string(y.t['+XYXtb']),
                      body: y.intl.formatToPlainString(y.t.JaIyFh, { count: v.oX })
                  }),
                  !1)
                : !n.soundIds.includes(e) && void n.soundIds.push(e),
        v.fy.INFREQUENT_USER_ACTION
    );
}
function D(e) {
    f.DZ.updateAsync(
        'favoriteSoundboardSounds',
        (n) => {
            n.soundIds = n.soundIds.filter((n) => n !== e);
        },
        v.fy.INFREQUENT_USER_ACTION
    );
}
async function L(e, n) {
    try {
        let r = await l.tn.get({
            url: E.ANM.SOUNDBOARD_SOUND_GUILD_DATA(e, n),
            rejectWithError: !1
        });
        return null != r.body ? (0, p.PP)(r.body) : null;
    } catch (e) {
        throw new d.Z(e);
    }
}
function x(e, n, r) {
    u.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY',
        sound: n,
        channelId: e,
        trigger: r
    });
}
function w(e, n) {
    u.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_START',
        soundId: e,
        userId: n
    });
}
function P(e, n) {
    u.Z.dispatch({
        type: 'GUILD_SOUNDBOARD_SOUND_PLAY_END',
        soundId: e,
        userId: n
    });
}
function M(e) {
    u.Z.dispatch({
        type: 'USER_SOUNDBOARD_SET_VOLUME',
        volume: e
    });
}
function k(e) {
    u.Z.dispatch({
        type: 'SOUNDBOARD_MUTE_JOIN_SOUND',
        channelId: e
    });
}
