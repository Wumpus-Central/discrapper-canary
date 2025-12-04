n.d(t, {
    $t: () => M,
    Jm: () => D,
    _Z: () => L,
    f7: () => k,
    gq: () => x,
    jA: () => j,
    pg: () => w,
}),
    n(388685),
    n(415506),
    n(781311);
var r = n(512722),
    i = n.n(r),
    a = n(544891),
    o = n(570140),
    s = n(493683),
    l = n(904245),
    c = n(812206),
    u = n(339085),
    d = n(957730),
    f = n(987509),
    p = n(752048),
    _ = n(598077),
    m = n(592125),
    h = n(77498),
    g = n(165630),
    E = n(430824),
    b = n(594174),
    y = n(626135),
    O = n(823379),
    v = n(411198),
    S = n(709054),
    I = n(612776),
    T = n(981631);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R() {
    let e = p.Z.getUserAffinities()
            .slice(0, 4)
            .map((e) => b.default.getUser(e.otherUserId))
            .filter((e) => null != e),
        t = g.Z.affinities.slice(0, 3).map((e) => {
            let t = E.Z.getGuild(e.guildId);
            return (
                i()(null != t, "Guild must exist"),
                {
                    guild: (0, v.yS)(P(C({}, t), { features: [...t.features] })),
                    numMessagesSent: 10382504,
                    numVoiceMinutes: 409516.21576666617,
                }
            );
        }),
        n = u.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(0, 5).map((e) => ({
            id: e.id,
            name: "surrogates" in e ? e.surrogates : e.name,
            animated: e.animated,
        })),
        r = c.Z._getAllApplications()
            .slice(0, 5)
            .map((e) => ({
                game: {
                    id: e.id,
                    name: e.name,
                    icon: e.icon,
                    coverImageHash: e.coverImage,
                },
                numDaysPlayed: 289,
            }));
    return {
        cardId: 1,
        powerLevel: 10400246,
        powerLevelPercentile: 5,
        messages: {
            numMessagesSent: 10400246,
            numMessagesSentPercentile: 99.99,
            topMonth: {
                month: 8,
                numMessagesSent: 10400246,
            },
        },
        voice: {
            totalVoiceMinutes: 2741198.975133333,
            totalVoiceMinutesPercentile: 99.99,
            topMonth: {
                numMinutesInVoice: 2741198.975133333,
                month: 8,
            },
        },
        quests: {
            numCompleted: 164,
            numOrbs: 122690,
        },
        users: e.slice(1, 4),
        sidekick: {
            user: e[0],
            numMessagesSent: 10400246,
            numVoiceMinutes: 2741198.975133333,
        },
        guilds: {
            guilds: t,
            numGuildsJoined: 203,
        },
        emojis: {
            emojis: n,
            numEmojisSent: 557927580,
        },
        applications: {
            applications: r,
            totalGamesPlayed: 4278,
        },
    };
}
async function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if ((o.Z.dispatch({ type: "CHECKPOINT_FETCH_START" }), e)) {
        let {
            users: e,
            guilds: t,
            emojis: n,
            applications: r,
            cardId: i,
            powerLevel: a,
            powerLevelPercentile: s,
            messages: l,
            voice: c,
            sidekick: u,
            quests: d,
        } = R();
        o.Z.dispatch({
            type: "CHECKPOINT_FETCH_SUCCESS",
            data: {
                cardId: i,
                powerLevel: a,
                powerLevelPercentile: s,
                messages: l,
                emojis: n,
                voice: c,
                guilds: t,
                users: e,
                applications: r,
                quests: d,
                sidekick: u,
            },
        });
        return;
    }
    try {
        let { body: e } = await a.tn.get({
                url: "/checkpoint",
                rejectWithError: !0,
            }),
            {
                card_id: t,
                power_level: n,
                power_level_percentile: r,
                messages: i,
                emojis: s,
                voice: l,
                guilds: c,
                users: u,
                sidekick: d,
                applications: f,
                quests: p,
                avatar_decoration: m,
            } = e;
        o.Z.dispatch({
            type: "CHECKPOINT_FETCH_SUCCESS",
            data: {
                cardId: t,
                powerLevel: n,
                powerLevelPercentile: r,
                messages:
                    null != i
                        ? {
                              numMessagesSent: i.num_messages_sent,
                              numMessagesSentPercentile: i.num_messages_sent_percentile,
                              topMonth: {
                                  month: i.top_month.month,
                                  numMessagesSent: i.top_month.num_messages_sent,
                              },
                          }
                        : void 0,
                emojis:
                    null != s
                        ? {
                              emojis: s.emojis.map((e) =>
                                  P(C({}, e), { id: S.default.isProbablyAValidSnowflake(e.id) ? e.id : void 0 }),
                              ),
                              numEmojisSent: s.num_emojis_sent,
                          }
                        : void 0,
                voice:
                    null != l
                        ? {
                              totalVoiceMinutes: l.total_voice_minutes,
                              totalVoiceMinutesPercentile: l.total_voice_minutes_percentile,
                              topMonth: {
                                  month: l.top_month.month,
                                  numMinutesInVoice: l.top_month.num_minutes_in_voice,
                              },
                          }
                        : void 0,
                guilds:
                    null != c
                        ? {
                              guilds: c.guilds.map((e) => ({
                                  numMessagesSent: e.num_messages_sent,
                                  numVoiceMinutes: e.num_voice_minutes,
                                  guild: (0, v.wD)(e.guild, E.Z.getGuild(e.guild.id)),
                              })),
                              numGuildsJoined: c.num_guilds_joined,
                          }
                        : void 0,
                users:
                    null != u
                        ? u.map((e) => {
                              let { user: t } = e;
                              return new _.Z(t);
                          })
                        : void 0,
                applications:
                    null != f
                        ? {
                              applications: f.applications.map((e) => ({
                                  game: P(C({}, (0, h.m)(e.game)), { coverImageHash: e.game.cover_image_hash }),
                                  numDaysPlayed: e.num_sessions,
                              })),
                              totalGamesPlayed: f.total_games_played,
                          }
                        : void 0,
                quests:
                    null != p
                        ? {
                              numCompleted: p.num_completed,
                              numOrbs: p.num_orbs,
                          }
                        : void 0,
                sidekick:
                    null != d
                        ? {
                              numMessagesSent: d.num_messages_sent,
                              numVoiceMinutes: d.num_voice_minutes,
                              user: new _.Z(d.user),
                          }
                        : void 0,
                avatarDecoration:
                    null != m
                        ? {
                              type: m.type,
                              asset: m.asset,
                              label: m.label,
                              skuId: m.sku_id,
                          }
                        : void 0,
            },
        });
    } catch (e) {
        o.Z.dispatch({ type: "CHECKPOINT_FETCH_FAILED" });
    }
}
let D = async (e, t, n) => {
    let { withMessage: r } = t;
    (await Promise.all(e.map(f.qx))).filter(O.lm).forEach((e) => {
        let t = m.Z.getChannel(e);
        if (null == t) return;
        let n = d.ZP.parse(t, null != r ? r : "");
        (n.components = []),
            l.Z.sendMessage(e, n, !1, {
                location: "checkpoint",
                withCheckpoint: !0,
            });
    });
};
async function x(e, t) {
    let n = await s.Z.openPrivateChannel({
            recipientIds: t,
            location: "checkpoint-sidekick",
            navigateToChannel: !1,
        }),
        r = m.Z.getChannel(n);
    if (null == r) throw Error("Failed to open private channel");
    let i = (0, I._3)().findIndex((t) => t.trim() === e);
    y.default.track(T.rMx.CHECKPOINT_SIDEKICK_MESSAGE_SENT, {
        other_user_id: t,
        message_variant: i.toString(),
    });
    let a = d.ZP.parse(r, e);
    return l.Z.sendMessage(r.id, a, !1, { location: "checkpoint-sidekick" });
}
async function L() {
    try {
        return await a.tn.post({
            url: "/checkpoint/loot",
            rejectWithError: !0,
        });
    } catch (e) {}
}
function j(e) {
    return o.Z.dispatch({
        type: "CHECKPOINT_SET_VOLUME",
        volume: e,
    });
}
function M() {
    return o.Z.dispatch({ type: "CHECKPOINT_TOGGLE_MUTE" });
}
function k(e) {
    return o.Z.dispatch({
        type: "CHECKPOINT_SET_HIGHEST_SLIDE_SEEN",
        slide: e,
    });
}
