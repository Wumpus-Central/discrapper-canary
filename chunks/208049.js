n.d(t, {
    $d: () => N,
    AA: () => R,
    Db: () => k,
    Dx: () => C,
    R: () => M,
    TB: () => P,
    XE: () => L,
    hs: () => w,
    w: () => A,
    xR: () => x,
    xU: () => D,
    xz: () => j,
}),
    n(388685),
    n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(544891),
    o = n(570140),
    s = n(668781),
    l = n(479531),
    c = n(675478),
    u = n(626135),
    d = n(900849),
    f = n(763296),
    _ = n(697426),
    p = n(174470),
    h = n(710111),
    m = n(981631),
    g = n(526761),
    E = n(388032);
let b = !1,
    y = async () => {
        try {
            let e = (
                await a.tn.get({
                    url: m.ANM.SOUNDBOARD_DEFAULT_SOUNDS,
                    rejectWithError: !1,
                })
            ).body.map((e) => (0, _.o3)(e, h.X8));
            o.Z.dispatch({
                type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
                soundboardSounds: e,
            });
        } catch (e) {
            throw (o.Z.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE" }), new l.Z(e));
        }
    },
    O = async () => {
        let e = new Map();
        try {
            let t = (
                await a.tn.get({
                    url: m.ANM.TOP_SOUNDS_FOR_GUILDS,
                    rejectWithError: !1,
                    timeout: 500,
                })
            ).body;
            Object.entries(t.top_sounds_by_guild).forEach((t) => {
                let [n, r] = t;
                e.set(n, r.map(_.Kv));
            });
        } catch (e) {}
        o.Z.dispatch({
            type: "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS",
            topSoundsForGuilds: e,
        });
    },
    v = (e) =>
        new Promise((t) => {
            let n = () => {
                o.Z.unsubscribe(e, n), setTimeout(t, 0);
            };
            o.Z.subscribe(e, n);
        }),
    I = () => {
        if (!f.Z.shouldFetchDefaultSounds()) return Promise.resolve();
        o.Z.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
        let e = v("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
        return y(), e;
    },
    T = () => {
        let e = (0, p.D)();
        if (0 === e.length) return Promise.resolve();
        let t = v("SOUNDBOARD_SOUNDS_RECEIVED");
        return (
            o.Z.dispatch({ type: "GUILD_SOUNDBOARD_FETCH" }),
            o.Z.dispatch({
                type: "REQUEST_SOUNDBOARD_SOUNDS",
                guildIds: e,
            }),
            t
        );
    },
    S = () => {
        if (!f.Z.shouldFetchTopSoundsForGuilds()) return Promise.resolve();
        o.Z.dispatch({ type: "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FETCH" });
        let e = v("SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS");
        return O(), e;
    },
    A = async () => {
        if (__OVERLAY__) return o.Z.dispatch({ type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST" }), Promise.all([]);
        let e = performance.now(),
            t = !b;
        b = !0;
        let n = await Promise.all([I(), T(), S()]);
        if (t) {
            let t = performance.now() - e;
            u.default.track(m.rMx.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, { elapsed_ms: t });
        }
        return n;
    };
async function C(e) {
    let { guildId: t, name: n, sound: r, volume: i, emojiId: o, emojiName: s } = e,
        l = await a.tn.post({
            url: m.ANM.GUILD_SOUNDBOARD_SOUNDS(t),
            body: {
                name: n,
                sound: r,
                volume: i,
                emoji_id: o,
                emoji_name: s,
            },
            rejectWithError: !1,
        });
    return (0, _.o3)(l.body, t);
}
async function N(e) {
    let { guildId: t, soundId: n, name: r, volume: i, emojiId: o, emojiName: s } = e,
        l = await a.tn.patch({
            url: m.ANM.GUILD_SOUNDBOARD_SOUND(t, n),
            body: {
                name: r,
                volume: i,
                emoji_id: o,
                emoji_name: s,
            },
            rejectWithError: !1,
        });
    return (0, _.o3)(l.body, t);
}
async function R(e, t) {
    await a.tn.del({
        url: m.ANM.GUILD_SOUNDBOARD_SOUND(e, t),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
function P(e) {
    c.DZ.updateAsync(
        "favoriteSoundboardSounds",
        (t) =>
            i().size(t.soundIds) >= g.oX
                ? (s.Z.show({
                      title: E.intl.string(E.t["+XYXtb"]),
                      body: E.intl.formatToPlainString(E.t.JaIyFh, { count: g.oX }),
                  }),
                  !1)
                : !t.soundIds.includes(e) && void t.soundIds.push(e),
        g.fy.INFREQUENT_USER_ACTION,
    );
}
function w(e) {
    c.DZ.updateAsync(
        "favoriteSoundboardSounds",
        (t) => {
            t.soundIds = t.soundIds.filter((t) => t !== e);
        },
        g.fy.INFREQUENT_USER_ACTION,
    );
}
async function D(e, t) {
    try {
        let n = await a.tn.get({
            url: m.ANM.SOUNDBOARD_SOUND_GUILD_DATA(e, t),
            rejectWithError: !1,
        });
        return null != n.body ? (0, d.PP)(n.body) : null;
    } catch (e) {
        throw new l.Z(e);
    }
}
function L(e, t, n) {
    o.Z.dispatch({
        type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
        sound: t,
        channelId: e,
        trigger: n,
    });
}
function x(e, t) {
    o.Z.dispatch({
        type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
        soundId: e,
        userId: t,
    });
}
function M(e, t) {
    o.Z.dispatch({
        type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
        soundId: e,
        userId: t,
    });
}
function j(e, t) {
    o.Z.dispatch({
        type: "USER_SOUNDBOARD_SET_VOLUME",
        volume: e,
        location: t,
    });
}
function k(e) {
    o.Z.dispatch({
        type: "SOUNDBOARD_MUTE_JOIN_SOUND",
        channelId: e,
    });
}
