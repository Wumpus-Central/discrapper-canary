n.d(t, { pg: () => g }), n(388685), n(415506), n(781311);
var i = n(512722),
    r = n.n(i),
    l = n(544891),
    s = n(570140);
n(493683), n(904245);
var a = n(812206),
    o = n(339085);
n(957730), n(987509);
var c = n(752048),
    u = n(598077);
n(592125);
var d = n(77498),
    m = n(165630),
    p = n(430824),
    x = n(594174);
n(626135), n(823379);
var h = n(411198),
    y = n(709054);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if ((s.Z.dispatch({ type: "CHECKPOINT_FETCH_START" }), e)) {
        let {
            users: e,
            guilds: t,
            emojis: n,
            applications: i,
            cardId: l,
            powerLevel: u,
            powerLevelPercentile: d,
            messages: y,
            voice: g,
            sidekick: j,
            quests: _,
        } = (function () {
            let e = c.Z.getUserAffinities()
                    .slice(0, 4)
                    .map((e) => x.default.getUser(e.otherUserId))
                    .filter((e) => null != e),
                t = m.Z.affinities.slice(0, 3).map((e) => {
                    let t = p.Z.getGuild(e.guildId);
                    return (
                        r()(null != t, "Guild must exist"),
                        {
                            guild: (0, h.yS)(v(f({}, t), { features: [...t.features] })),
                            numMessagesSent: 10382504,
                            numVoiceMinutes: 409516.21576666617,
                        }
                    );
                }),
                n = o.ZP.emojiFrecencyWithoutFetchingLatest.frequently.slice(0, 5).map((e) => ({
                    id: e.id,
                    name: "surrogates" in e ? e.surrogates : e.name,
                    animated: e.animated,
                })),
                i = a.Z._getAllApplications()
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
                    applications: i,
                    totalGamesPlayed: 4278,
                },
            };
        })();
        s.Z.dispatch({
            type: "CHECKPOINT_FETCH_SUCCESS",
            data: {
                cardId: l,
                powerLevel: u,
                powerLevelPercentile: d,
                messages: y,
                emojis: n,
                voice: g,
                guilds: t,
                users: e,
                applications: i,
                quests: _,
                sidekick: j,
            },
        });
        return;
    }
    try {
        let { body: e } = await l.tn.get({
                url: "/checkpoint",
                rejectWithError: !0,
            }),
            {
                card_id: t,
                power_level: n,
                power_level_percentile: i,
                messages: r,
                emojis: a,
                voice: o,
                guilds: c,
                users: m,
                sidekick: x,
                applications: g,
                quests: j,
                avatar_decoration: _,
            } = e;
        s.Z.dispatch({
            type: "CHECKPOINT_FETCH_SUCCESS",
            data: {
                cardId: t,
                powerLevel: n,
                powerLevelPercentile: i,
                messages:
                    null != r
                        ? {
                              numMessagesSent: r.num_messages_sent,
                              numMessagesSentPercentile: r.num_messages_sent_percentile,
                              topMonth: {
                                  month: r.top_month.month,
                                  numMessagesSent: r.top_month.num_messages_sent,
                              },
                          }
                        : void 0,
                emojis:
                    null != a
                        ? {
                              emojis: a.emojis.map((e) =>
                                  v(f({}, e), { id: y.default.isProbablyAValidSnowflake(e.id) ? e.id : void 0 }),
                              ),
                              numEmojisSent: a.num_emojis_sent,
                          }
                        : void 0,
                voice:
                    null != o
                        ? {
                              totalVoiceMinutes: o.total_voice_minutes,
                              totalVoiceMinutesPercentile: o.total_voice_minutes_percentile,
                              topMonth: {
                                  month: o.top_month.month,
                                  numMinutesInVoice: o.top_month.num_minutes_in_voice,
                              },
                          }
                        : void 0,
                guilds:
                    null != c
                        ? {
                              guilds: c.guilds.map((e) => ({
                                  numMessagesSent: e.num_messages_sent,
                                  numVoiceMinutes: e.num_voice_minutes,
                                  guild: (0, h.wD)(e.guild, p.Z.getGuild(e.guild.id)),
                              })),
                              numGuildsJoined: c.num_guilds_joined,
                          }
                        : void 0,
                users:
                    null != m
                        ? m.map((e) => {
                              let { user: t } = e;
                              return new u.Z(t);
                          })
                        : void 0,
                applications:
                    null != g
                        ? {
                              applications: g.applications.map((e) => ({
                                  game: v(f({}, (0, d.m)(e.game)), { coverImageHash: e.game.cover_image_hash }),
                                  numDaysPlayed: e.num_sessions,
                              })),
                              totalGamesPlayed: g.total_games_played,
                          }
                        : void 0,
                quests:
                    null != j
                        ? {
                              numCompleted: j.num_completed,
                              numOrbs: j.num_orbs,
                          }
                        : void 0,
                sidekick:
                    null != x
                        ? {
                              numMessagesSent: x.num_messages_sent,
                              numVoiceMinutes: x.num_voice_minutes,
                              user: new u.Z(x.user),
                          }
                        : void 0,
                avatarDecoration:
                    null != _
                        ? {
                              type: _.type,
                              asset: _.asset,
                              label: _.label,
                              skuId: _.sku_id,
                          }
                        : void 0,
            },
        });
    } catch (e) {
        s.Z.dispatch({ type: "CHECKPOINT_FETCH_FAILED" });
    }
}
n(612776), n(981631);
