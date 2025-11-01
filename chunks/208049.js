n.d(t, {
    $d: () => P,
    AA: () => w,
    Db: () => G,
    Dx: () => R,
    R: () => k,
    TB: () => D,
    XE: () => M,
    hs: () => x,
    w: () => N,
    xR: () => j,
    xU: () => L,
    xz: () => U,
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
    p = n(771784),
    h = n(174470),
    m = n(710111),
    g = n(981631),
    E = n(526761),
    b = n(388032);
let y = !1,
    O = async () => {
        try {
            let e = (
                await a.tn.get({
                    url: g.ANM.SOUNDBOARD_DEFAULT_SOUNDS,
                    rejectWithError: !1,
                })
            ).body.map((e) => (0, _.o3)(e, m.X8));
            o.Z.dispatch({
                type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
                soundboardSounds: e,
            });
        } catch (e) {
            throw (o.Z.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE" }), new l.Z(e));
        }
    },
    v = async () => {
        let e = new Map();
        try {
            let t = (
                await a.tn.get({
                    url: g.ANM.TOP_SOUNDS_FOR_GUILDS,
                    rejectWithError: !1,
                    timeout: 500,
                })
            ).body;
            Object.entries(t.top_sounds_by_guild).forEach((t) => {
                let [n, r] = t;
                e.set(n, r.map(_.Kv));
            }),
                o.Z.dispatch({
                    type: "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS",
                    topSoundsForGuilds: e,
                });
        } catch (e) {
            o.Z.dispatch({ type: "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FAILURE" });
        }
    },
    I = (e) =>
        new Promise((t) => {
            let n = () => {
                o.Z.unsubscribe(e, n), setTimeout(t, 0);
            };
            o.Z.subscribe(e, n);
        }),
    T = (e) =>
        new Promise((t) => {
            let n = new Map();
            e.forEach((r) => {
                let i = () => {
                    e.forEach((e) => {
                        let t = n.get(e);
                        null != t && o.Z.unsubscribe(e, t);
                    }),
                        setTimeout(t, 0);
                };
                n.set(r, i), o.Z.subscribe(r, i);
            });
        }),
    S = () => {
        if (!f.Z.shouldFetchDefaultSounds()) return Promise.resolve();
        o.Z.dispatch({ type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS" });
        let e = I("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
        return (0, p.sI)("maybeFetchDefaultSounds") && v(), O(), e;
    },
    A = () => {
        let e = (0, h.D)();
        if (0 === e.length) return Promise.resolve();
        let t = I("SOUNDBOARD_SOUNDS_RECEIVED");
        return (
            o.Z.dispatch({ type: "GUILD_SOUNDBOARD_FETCH" }),
            o.Z.dispatch({
                type: "REQUEST_SOUNDBOARD_SOUNDS",
                guildIds: e,
            }),
            t
        );
    },
    C = () => {
        if (!f.Z.shouldFetchTopSoundsForGuilds()) return Promise.resolve();
        o.Z.dispatch({ type: "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FETCH" });
        let e = T(["SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_SUCCESS", "SOUNDBOARD_TOP_SOUNDS_FOR_GUILDS_FAILURE"]);
        return v(), e;
    },
    N = async () => {
        if (__OVERLAY__) return o.Z.dispatch({ type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST" }), Promise.all([]);
        let e = performance.now(),
            t = !y;
        y = !0;
        let n = await Promise.all([S(), A(), C()]);
        if (t) {
            let t = performance.now() - e;
            u.default.track(g.rMx.EXPRESSION_PICKER_SOUNDBOARD_SOUNDS_LOADED, { elapsed_ms: t });
        }
        return n;
    };
async function R(e) {
    let { guildId: t, name: n, sound: r, volume: i, emojiId: o, emojiName: s } = e,
        l = await a.tn.post({
            url: g.ANM.GUILD_SOUNDBOARD_SOUNDS(t),
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
async function P(e) {
    let { guildId: t, soundId: n, name: r, volume: i, emojiId: o, emojiName: s } = e,
        l = await a.tn.patch({
            url: g.ANM.GUILD_SOUNDBOARD_SOUND(t, n),
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
async function w(e, t) {
    await a.tn.del({
        url: g.ANM.GUILD_SOUNDBOARD_SOUND(e, t),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
}
function D(e) {
    c.DZ.updateAsync(
        "favoriteSoundboardSounds",
        (t) =>
            i().size(t.soundIds) >= E.oX
                ? (s.Z.show({
                      title: b.intl.string(b.t["+XYXtZ"]),
                      body: b.intl.formatToPlainString(b.t.JaIyFi, { count: E.oX }),
                  }),
                  !1)
                : !t.soundIds.includes(e) && void t.soundIds.push(e),
        E.fy.INFREQUENT_USER_ACTION,
    );
}
function x(e) {
    c.DZ.updateAsync(
        "favoriteSoundboardSounds",
        (t) => {
            t.soundIds = t.soundIds.filter((t) => t !== e);
        },
        E.fy.INFREQUENT_USER_ACTION,
    );
}
async function L(e, t) {
    try {
        let n = await a.tn.get({
            url: g.ANM.SOUNDBOARD_SOUND_GUILD_DATA(e, t),
            rejectWithError: !1,
        });
        return null != n.body ? (0, d.PP)(n.body) : null;
    } catch (e) {
        throw new l.Z(e);
    }
}
function M(e, t, n) {
    o.Z.dispatch({
        type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
        sound: t,
        channelId: e,
        trigger: n,
    });
}
function j(e, t) {
    o.Z.dispatch({
        type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
        soundId: e,
        userId: t,
    });
}
function k(e, t) {
    o.Z.dispatch({
        type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
        soundId: e,
        userId: t,
    });
}
function U(e, t) {
    o.Z.dispatch({
        type: "USER_SOUNDBOARD_SET_VOLUME",
        volume: e,
        location: t,
    });
}
function G(e) {
    o.Z.dispatch({
        type: "SOUNDBOARD_MUTE_JOIN_SOUND",
        channelId: e,
    });
}
