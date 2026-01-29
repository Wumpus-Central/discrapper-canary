n.d(t, {
    A: () => Z,
}),
    n(321073),
    n(896048),
    n(938796),
    n(65821);
var r = n(735438),
    i = n.n(r);
n(237751);
var a = n(311907),
    o = n(73153),
    s = n(686956),
    l = n(73825),
    c = n(803306),
    u = n(507698),
    d = n(626584),
    f = n(945096),
    p = n(692744),
    _ = n(814890),
    h = n(505527),
    m = n(756377),
    g = n(736130),
    E = n(614792),
    y = n(761821),
    b = n(95701),
    O = n(545934),
    v = n(427157),
    A = n(734057),
    I = n(696451),
    S = n(186111),
    T = n(287809),
    C = n(977997),
    N = n(97352),
    w = n(166403),
    R = n(107351),
    P = n(121254),
    D = n(877166),
    L = n(531013);

function x(e, t, n) {
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

function M(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}

function j(e, t) {
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

function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = G(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let F = new d.A("ConnectionStore");

function V(e) {
    return e.map((e) => {
        var t;
        let n = null == (t = e.timestamps) ? void 0 : t.end,
            r = e.created_at;
        return null != n && null != r
            ? k(M({}, e), {
                  timestamps: k(M({}, e.timestamps), {
                      isCountDown: n > r,
                  }),
              })
            : e;
    });
}
let B = new D.A(
        L.sZ,
        (e, t) => {
            var n;
            e =
                null != e
                    ? e
                    : {
                          type: "CHANNEL_UPDATES",
                          channels: [],
                      };
            let r = (0, b.UE)(t),
                i = A.A.getChannel(t.id),
                a =
                    null == i
                        ? void 0
                        : i.merge(
                              k(M({}, r), {
                                  recipients: i.recipients,
                                  bitrate: null != (n = r.bitrate) ? n : i.bitrate,
                              }),
                          );
            return e.channels.push(null != a ? a : r), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    H = new D.A(
        L.sZ,
        (e, t) => (
            (e =
                null == e
                    ? {
                          type: "SOUNDBOARD_SOUNDS_RECEIVED",
                          updates: [],
                      }
                    : e).updates.push({
                guildId: t.guild_id,
                sounds: t.soundboard_sounds.map((e) => ({
                    name: e.name,
                    soundId: e.sound_id,
                    emojiName: e.emoji_name,
                    emojiId: e.emoji_id,
                    userId: e.user_id,
                    volume: e.volume,
                    available: e.available,
                    guildId: t.guild_id,
                })),
            }),
            e
        ),
        (e) => "SOUNDBOARD_SOUNDS" !== e,
    ),
    Y = new D.A(
        L.sZ,
        (e, t) => (
            (e =
                null != e
                    ? e
                    : {
                          type: "GUILD_MEMBERS_CHUNK_BATCH",
                          chunks: [],
                      }).chunks.push(t),
            e
        ),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    W = new D.A(
        L.sZ,
        (e, t) => (
            (e =
                null == e
                    ? {
                          type: "PRESENCE_UPDATES",
                          updates: [],
                      }
                    : e).updates.push(t),
            e
        ),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    K = {};

function z(e, t) {
    for (let n of e)
        K[n] = {
            preload: () => null,
            dispatch: t,
        };
}

function q(e, t, n) {
    for (let r of e)
        K[r] = {
            preload: t,
            dispatch: n,
        };
}

function Z(e) {
    return K[e];
}

function Q(e) {
    let t = [];
    for (let i of e) {
        var n, r;
        null != i.member && J(i.guild_id, i.member.user, i.member),
            t.push({
                userId: i.user_id,
                guildId: i.guild_id,
                sessionId: i.session_id,
                channelId: i.channel_id,
                mute: i.mute,
                deaf: i.deaf,
                selfMute: i.self_mute,
                selfDeaf: i.self_deaf,
                selfVideo: i.self_video || !1,
                suppress: i.suppress,
                selfStream: i.self_stream || !1,
                requestToSpeakTimestamp: null != (n = i.request_to_speak_timestamp) ? n : null,
                discoverable: null == (r = i.discoverable) || r,
                oldChannelId: C.A.getUserVoiceChannelId(i.guild_id, i.user_id),
            });
    }
    X({
        type: "VOICE_STATE_UPDATES",
        voiceStates: t,
    });
}

function X(e) {
    o.h.dispatch(e).catch((t) =>
        L.sZ.resetSocketOnDispatchError({
            error: t,
            action: e.type,
        }),
    );
}

function J(e, t, n) {
    var r, a, o, s;
    let {
            roles: l,
            nick: c,
            avatar: d,
            avatar_decoration_data: p,
            flags: _,
            premium_since: h,
            pending: m,
            joined_at: g,
            communication_disabled_until: E,
            unusual_dm_activity_until: y,
            collectibles: b,
            display_name_styles: O,
        } = n,
        v = I.Ay.getMember(e, t.id),
        A = (0, f.mT)(O);
    (null != v &&
        v.nick === c &&
        v.avatar === d &&
        i().isEqual(v.roles, l) &&
        (0, u.kn)(null != (r = v.avatarDecoration) ? r : null, null != p ? p : null) &&
        v.premiumSince === h &&
        v.isPending === m &&
        v.joinedAt === g &&
        v.communicationDisabledUntil === E &&
        v.flags === _ &&
        (null != (a = v.unusualDMActivityUntil) ? a : null) === (null != y ? y : null) &&
        i().isEqual(null != (o = v.collectibles) ? o : null, null != b ? b : null) &&
        i().isEqual(null != (s = v.displayNameStyles) ? s : null, null != A ? A : null)) ||
        X({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: l,
            nick: c,
            avatar: d,
            avatarDecoration: p,
            premiumSince: h,
            isPending: m,
            joinedAt: g,
            communicationDisabledUntil: E,
            unusualDMActivityUntil: y,
            flags: _,
            collectibles: b,
            displayNameStyles: A,
        });
}

function $(e) {
    let { member: t, mentions: n, author: r, guild_id: i } = e;
    null != t && null != i && J(i, r, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != i) {
                    let { member: t } = e;
                    delete e.member, J(i, e, t);
                }
            });
}

function ee(e) {
    return e.map((e) => {
        var t, n;
        return {
            sessionId: e.session_id,
            lastModified: e.last_modified,
            status: e.status,
            activities: V(null != (t = e.activities) ? t : []),
            hiddenActivities: null != (n = e.hidden_activities) ? n : [],
            active: !!e.active,
            clientInfo: e.client_info,
        };
    });
}

function et(e) {
    let {
        guildId: t,
        user: n,
        status: r,
        activities: i,
        hiddenActivities: a,
        clientStatus: o,
        processedAtTimestamp: s,
    } = e;
    W.add({
        guildId: t,
        user: n,
        status: r,
        clientStatus: o,
        activities: V(null != i ? i : []),
        hiddenActivities: a,
        processedAtTimestamp: s,
    });
}
q(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : A.D.loadGuildIds([e.id])),
    (e) => {
        E.A.initialGuild.measure(() => {
            a.Ay.Emitter.batched(() => {
                let t = P.fq(e, L.sZ.identifyStartTime);
                null != T.default.getCurrentUser() &&
                    (X({
                        type: "GUILD_CREATE",
                        guild: t,
                    }),
                    X({
                        type: "VOICE_STATE_UPDATES",
                        voiceStates: t.voice_states.map((e) => {
                            var n, r;
                            return {
                                userId: e.user_id,
                                guildId: t.id,
                                sessionId: e.session_id,
                                channelId: e.channel_id,
                                mute: e.mute,
                                deaf: e.deaf,
                                selfMute: e.self_mute,
                                selfDeaf: e.self_deaf,
                                selfVideo: e.self_video || !1,
                                suppress: e.suppress,
                                selfStream: e.self_stream || !1,
                                requestToSpeakTimestamp: null != (n = e.request_to_speak_timestamp) ? n : null,
                                discoverable: null == (r = e.discoverable) || r,
                            };
                        }),
                    }),
                    F.log("Dispatched INITIAL_GUILD ".concat(e.id)));
            });
        });
    },
),
    z(["READY_SUPPLEMENTAL"], (e) => {
        E.A.readySupplemental.measure(() => {
            a.Ay.Emitter.batched(() => {
                var t;
                e = E.A.hydrateReadySupplemental.measure(() => P.H3(e, L.sZ.identifyStartTime));
                let n = (e) =>
                        e.map((e) => ({
                            user: e.user,
                            status: e.status,
                            clientStatus: e.client_status,
                            activities: e.activities,
                            hiddenActivities: e.hidden_activities,
                            processedAtTimestamp: e.processed_at_timestamp,
                        })),
                    r = e.guilds.filter((e) => !0 !== e.unavailable);
                r.forEach((e) => {
                    e.presences = n(e.presences || []);
                });
                let i = e.presences ? n(e.presences) : [],
                    a = (null != (t = e.lazy_private_channels) ? t : []).map((e) => (0, b.UE)(e));
                E.A.dispatchReadySupplemental.measure(() => {
                    var t;
                    X({
                        type: "CONNECTION_OPEN_SUPPLEMENTAL",
                        guilds: r,
                        presences: i,
                        lazyPrivateChannels: a,
                        userActivities: null != (t = e.user_activities) ? t : void 0,
                    });
                });
                let o = [];
                r.forEach((e) => {
                    e.voice_states.forEach((t) => {
                        var n, r;
                        o.push({
                            userId: t.user_id,
                            guildId: e.id,
                            sessionId: t.session_id,
                            channelId: t.channel_id,
                            mute: t.mute,
                            deaf: t.deaf,
                            selfMute: t.self_mute,
                            selfDeaf: t.self_deaf,
                            selfVideo: t.self_video || !1,
                            suppress: t.suppress,
                            selfStream: t.self_stream || !1,
                            requestToSpeakTimestamp: null != (n = t.request_to_speak_timestamp) ? n : null,
                            discoverable: null == (r = t.discoverable) || r,
                        });
                    });
                }),
                    X({
                        type: "VOICE_STATE_UPDATES",
                        voiceStates: o,
                        initial: !0,
                    }),
                    L.Xo.update();
            });
        }),
            setTimeout(
                () =>
                    X({
                        type: "POST_CONNECTION_OPEN",
                    }),
                2e3,
            );
    }),
    q(
        ["READY"],
        (e) => {
            var t;
            let n = P.XD(),
                r = e.guilds
                    .filter((e) => {
                        var t, n;
                        return (
                            !e.unavailable &&
                            "partial" === e.data_mode &&
                            ((null != (t = e.partial_updates.channels) ? t : []).length > 0 ||
                                (null != (n = e.partial_updates.deleted_channel_ids) ? n : []).length > 0 ||
                                void 0)
                        );
                    })
                    .map((e) => e.id);
            return Promise.all([n, null != (t = A.D.loadGuildIds(r)) ? t : Promise.resolve()]).then((e) => {
                let [t] = e;
                return t;
            });
        },
        (e, t, n) => {
            e.user.bot
                ? X({
                      type: "LOGOUT",
                  })
                : E.A.ready.measure(() => {
                      a.Ay.Emitter.batched(() => {
                          let t = (e = E.A.hydrateReady.measure(() =>
                                  P.un(e, L.sZ.identifyStartTime, n),
                              )).private_channels.map((e) => (0, b.UE)(e)),
                              r = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              i = e.guilds.filter((e) => !0 !== e.unavailable),
                              a = e.guilds.filter((e) => !0 === e.geo_restricted);
                          i.forEach((e) => {
                              e.presences = [];
                          });
                          let o = null == e.user_settings_proto ? void 0 : (0, y.Gd)(e.user_settings_proto);
                          E.A.dispatchReady.measure(() => {
                              var n, s, l, c;
                              X({
                                  type: "CONNECTION_OPEN",
                                  sessionId: e.session_id,
                                  authSessionIdHash: e.auth_session_id_hash,
                                  staticAuthSessionId: e.static_client_session_id,
                                  user: e.user,
                                  users: e.users,
                                  guilds: i,
                                  initialPrivateChannels: t,
                                  unavailableGuilds: r,
                                  readState: e.read_state,
                                  userGuildSettings: e.user_guild_settings,
                                  tutorial: e.tutorial,
                                  relationships: e.relationships,
                                  gameRelationships: e.game_relationships,
                                  friendSuggestionCount: e.friend_suggestion_count,
                                  presences: e.presences,
                                  analyticsToken: e.analytics_token,
                                  experiments: e.experiments,
                                  connectedAccounts: e.connected_accounts,
                                  guildExperiments: e.guild_experiments,
                                  apexExperiments: null != (n = e.apex_experiments) ? n : void 0,
                                  requiredAction: e.required_action,
                                  consents: e.consents,
                                  sessions: ee(e.sessions || []),
                                  pendingPayments: e.pending_payments,
                                  countryCode: null != (s = e.country_code) ? s : void 0,
                                  guildJoinRequests: e.guild_join_requests || [],
                                  userSettingsProto: o,
                                  apiCodeVersion: e.api_code_version,
                                  auth: e.auth,
                                  notificationSettings: {
                                      flags: e.notification_settings.flags,
                                  },
                                  geoRestrictedGuilds: a,
                                  explicitContentScanVersion: e.explicit_content_scan_version,
                                  failedStates: e.failed_states,
                                  linkedUsers: null != (l = e.linked_users) ? l : void 0,
                                  regionalFeatureConfig: null != (c = e.regional_feature_config) ? c : void 0,
                              });
                          }),
                              null != e.auth_token &&
                                  X({
                                      type: "UPDATE_TOKEN",
                                      token: e.auth_token,
                                      userId: e.user.id,
                                  }),
                              null != e.ad_personalization_toggles_disabled &&
                                  X({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              L.OV.update(),
                              L.Xo.update();
                      });
                  });
        },
    ),
    z(["STATE_UPDATE"], (e) => {
        var t, n;
        X({
            type: "CONNECTION_OPEN_STATE_UPDATE",
            apexExperiments: null != (t = e.apex_experiments) ? t : void 0,
            userActivities: null != (n = e.user_activities) ? n : void 0,
        });
    }),
    z(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        o.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    z(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        o.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE",
            experimentName: e.experiment_name,
        });
    }),
    z(["RESUMED"], () => {
        L.OV.forceUpdate(),
            L.Xo.forceUpdate(),
            X({
                type: "CONNECTION_RESUMED",
            });
    }),
    z(["TYPING_START"], (e) => {
        null != e.member && J(e.guild_id, e.member.user, e.member),
            X({
                type: "TYPING_START",
                channelId: e.channel_id,
                userId: e.user_id,
            });
    }),
    z(["GUILD_RING_START"], (e) => {
        X({
            type: "GUILD_RING_START",
            ringing: e.ringing,
            channelId: e.channel_id,
            guildId: e.guild_id,
        });
    }),
    z(["GUILD_RING_STOP"], (e) => {
        X({
            type: "GUILD_RING_STOP",
            ringing: e.ringing,
            channelId: e.channel_id,
            guildId: e.guild_id,
        });
    }),
    z(["ACTIVITY_START"], (e) => {
        X({
            type: "ACTIVITY_START",
            userId: e.user_id,
            activity: e.activity,
        });
    }),
    z(["ACTIVITY_USER_ACTION"], (e) => {
        X({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    q(
        ["MESSAGE_CREATE"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e) => {
            $(e),
                null != e.author &&
                    X({
                        type: "MESSAGE_CREATE",
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1,
                    });
        },
    ),
    q(
        ["MESSAGE_UPDATE"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e) => {
            $(e),
                X({
                    type: "MESSAGE_UPDATE",
                    guildId: e.guild_id,
                    message: e,
                });
        },
    ),
    q(
        ["MESSAGE_DELETE"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e) => {
            X({
                type: "MESSAGE_DELETE",
                guildId: e.guild_id,
                id: e.id,
                channelId: e.channel_id,
            });
        },
    ),
    q(
        ["MESSAGE_DELETE_BULK"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e) => {
            X({
                type: "MESSAGE_DELETE_BULK",
                guildId: e.guild_id,
                ids: e.ids,
                channelId: e.channel_id,
            });
        },
    ),
    q(
        ["MESSAGE_ACK"],
        (e) => A.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            X({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    z(["GUILD_FEATURE_ACK"], (e) => {
        X({
            type: "GUILD_FEATURE_ACK",
            id: e.resource_id,
            ackType: e.ack_type,
            ackedId: e.entity_id,
        });
    }),
    z(["USER_NON_CHANNEL_ACK"], (e) => {
        X({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e.ack_type,
            ackedId: e.entity_id,
        });
    }),
    q(
        ["CHANNEL_PINS_ACK"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e) => {
            X({
                type: "CHANNEL_PINS_ACK",
                channelId: e.channel_id,
                timestamp: e.timestamp,
                version: e.version,
            });
        },
    ),
    q(
        ["CHANNEL_PINS_UPDATE"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e) => {
            X({
                type: "CHANNEL_PINS_UPDATE",
                channelId: e.channel_id,
                lastPinTimestamp: e.last_pin_timestamp,
            });
        },
    ),
    q(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            X({
                type: t,
                channel: (0, b.UE)(e),
            });
        },
    ),
    z(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        X({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            status: e.status,
        });
    }),
    z(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        var n;
        X({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            voiceStartTime: null != (n = e.voice_start_time) ? n : void 0,
        });
    }),
    z(["CHANNEL_STATUSES"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
            channels: e.channels,
        });
    }),
    z(["CHANNEL_INFO"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({
                id: e.id,
                status: e.status,
                voiceStartTime: e.voice_start_time,
            })),
        });
    }),
    z(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
            channelId: e.channel_id,
            online: e.presence_count,
            total: e.member_count,
        });
    }),
    q(
        ["CHANNEL_UPDATE"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e) => {
            B.add(e);
        },
    ),
    q(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n } = e,
                r = U(e, ["newly_created"]);
            X({
                type: t,
                isNewlyCreated: n,
                channel: (0, b.UE)(r),
            });
        },
    ),
    q(
        ["THREAD_LIST_SYNC"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e) => {
            X({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = A.A.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, b.UE)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? i().map(e.members, g.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    z(["THREAD_MEMBER_UPDATE"], (e) => {
        X({
            type: "THREAD_MEMBER_UPDATE",
            id: e.id,
            guildId: e.guild_id,
            userId: e.user_id,
            flags: e.flags,
            muted: e.muted,
            muteConfig: e.mute_config,
            joinTimestamp: e.join_timestamp,
        });
    }),
    z(["THREAD_MEMBERS_UPDATE"], (e) => {
        var t;
        X({
            type: "THREAD_MEMBERS_UPDATE",
            id: e.id,
            guildId: e.guild_id,
            memberCount: e.member_count,
            addedMembers:
                null == (t = e.added_members)
                    ? void 0
                    : t.map((t) => ({
                          id: t.id,
                          guildId: e.guild_id,
                          userId: t.user_id,
                          flags: t.flags,
                          joinTimestamp: t.join_timestamp,
                      })),
            removedMemberIds: e.removed_member_ids,
            memberIdsPreview: e.member_ids_preview,
        });
    }),
    z(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            X({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({
                    threadId: e.thread_id,
                    missing: e.missing,
                    count: e.count,
                })),
            });
    }),
    z(["SOUNDBOARD_SOUNDS"], (e) => {
        H.add(e);
    }),
    z(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = A.A.getBasicChannel(e.channel_id);
        X({
            type: t,
            channelId: e.channel_id,
            user: e.user,
            nick: e.nick,
            isMember: null != n,
        });
    }),
    q(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : A.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable)
                X({
                    type: "GUILD_UNAVAILABLE",
                    guildId: e.id,
                });
            else {
                let t = P.TI(e);
                s.A.createGuild(t),
                    X({
                        type: "VOICE_STATE_UPDATES",
                        voiceStates: t.voice_states.map((e) => {
                            var n, r;
                            return {
                                userId: e.user_id,
                                guildId: t.id,
                                sessionId: e.session_id,
                                channelId: e.channel_id,
                                mute: e.mute,
                                deaf: e.deaf,
                                selfMute: e.self_mute,
                                selfDeaf: e.self_deaf,
                                selfVideo: e.self_video || !1,
                                suppress: e.suppress,
                                selfStream: e.self_stream || !1,
                                requestToSpeakTimestamp: null != (n = e.request_to_speak_timestamp) ? n : null,
                                discoverable: null == (r = e.discoverable) || r,
                            };
                        }),
                    });
            }
        },
    ),
    z(["GUILD_UPDATE"], (e) => {
        X({
            type: "GUILD_UPDATE",
            guild: e,
        }),
            e.unavailable &&
                X({
                    type: "GUILD_UNAVAILABLE",
                    guildId: e.id,
                });
    }),
    z(["GUILD_DELETE"], (e) => {
        X({
            type: "GUILD_DELETE",
            guild: e,
        }),
            e.geo_restricted
                ? X({
                      type: "GUILD_GEO_RESTRICTED",
                      guildId: e.id,
                      icon: e.icon,
                      name: e.name,
                  })
                : e.unavailable &&
                  X({
                      type: "GUILD_UNAVAILABLE",
                      guildId: e.id,
                  });
    }),
    z(["GUILD_MEMBERS_CHUNK"], (e) => {
        a.Ay.Emitter.batched(() => {
            Y.add({
                guildId: e.guild_id,
                members: e.members,
                notFound: e.not_found,
            }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let {
                            user: n,
                            status: r,
                            client_status: i,
                            activities: a,
                            hidden_activities: o,
                            processed_at_timestamp: s,
                        } = t;
                        return et({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: a,
                            hiddenActivities: o,
                            clientStatus: i,
                            processedAtTimestamp: s,
                        });
                    }),
                D.A.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    z(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            X({
                type: "THREAD_MEMBER_LIST_UPDATE",
                guildId: e.guild_id,
                threadId: e.thread_id,
                members: e.members,
            }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let {
                            user: n,
                            status: r,
                            client_status: i,
                            activities: a,
                            hidden_activities: o,
                            processed_at_timestamp: s,
                        } = t;
                        return et({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: a,
                            hiddenActivities: o,
                            clientStatus: i,
                            processedAtTimestamp: s,
                        });
                    }),
                D.A.flush();
        });
    }),
    z(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            X({
                type: t,
                guildId: e.guild_id,
                user: e.user,
                avatar: e.avatar,
                avatarDecoration: e.avatar_decoration_data,
                roles: e.roles,
                nick: e.nick,
                premiumSince: e.premium_since,
                isPending: e.pending,
                joinedAt: e.joined_at,
                communicationDisabledUntil: e.communication_disabled_until,
                unusualDMActivityUntil: e.unusual_dm_activity_until,
                flags: e.flags,
                collectibles: e.collectibles,
                displayNameStyles: (0, f.mT)(e.display_name_styles),
            });
        },
    ),
    q(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            X({
                type: t,
                guildId: e.guild_id,
                role: e.role,
            });
        },
    ),
    q(
        ["GUILD_ROLE_DELETE"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e) => {
            X({
                type: "GUILD_ROLE_DELETE",
                guildId: e.guild_id,
                roleId: e.role_id,
                version: e.version,
            });
        },
    ),
    z(["GUILD_EMOJIS_UPDATE"], (e) => {
        X({
            type: "GUILD_EMOJIS_UPDATE",
            guildId: e.guild_id,
            emojis: e.emojis,
        });
    }),
    z(["GUILD_STICKERS_UPDATE"], (e) => {
        X({
            type: "GUILD_STICKERS_UPDATE",
            guildId: e.guild_id,
            stickers: e.stickers,
        });
    }),
    z(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        X({
            type: "GUILD_INTEGRATIONS_UPDATE",
            guildId: e.guild_id,
        });
    }),
    z(["INTEGRATION_CREATE"], (e) => {
        X({
            type: "INTEGRATION_CREATE",
            application: e.application,
            guildId: e.guild_id,
        });
    }),
    z(["INTEGRATION_DELETE"], (e) => {
        X({
            type: "INTEGRATION_DELETE",
            applicationId: e.application_id,
            guildId: e.guild_id,
        });
    }),
    z(["USER_UPDATE"], (e) => {
        X({
            type: "CURRENT_USER_UPDATE",
            user: e,
        });
    }),
    z(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, y.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    (console.error("Invalid proto: |".concat(t, "| |").concat(e.settings.proto, "|")),
                    console.error({
                        parsed: t,
                        wire: e.settings.proto,
                        type: e.settings.type,
                    }),
                    Error("UserSettingsProto must not be a string"))
                );
            X({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: {
                    proto: t,
                    type: e.settings.type,
                },
                partial: e.partial,
            });
        }
    }),
    z(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        X({
            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
            userGuildSettings: [e],
        });
    }),
    z(["USER_CONNECTIONS_UPDATE"], () => {
        X({
            type: "USER_CONNECTIONS_UPDATE",
        });
    }),
    z(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        X({
            type: "USER_REQUIRED_ACTION_UPDATE",
            requiredAction: e.required_action,
        });
    }),
    z(["USER_NOTE_UPDATE"], (e) => {
        X(
            M(
                {
                    type: "USER_NOTE_UPDATE",
                },
                e,
            ),
        );
    }),
    z(["RELATIONSHIP_ADD"], (e) => {
        X({
            type: "RELATIONSHIP_ADD",
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                since: e.since,
                nickname: e.nickname,
                isSpamRequest: e.is_spam_request || !1,
                isStrangerRequest: e.is_stranger_request || !1,
                userIgnored: e.user_ignored || !1,
                originApplicationId: e.origin_application_id,
            },
            shouldNotify: !0 === e.should_notify,
        });
    }),
    z(["RELATIONSHIP_REMOVE"], (e) => {
        X({
            type: "RELATIONSHIP_REMOVE",
            relationship: e,
        });
    }),
    z(["RELATIONSHIP_UPDATE"], (e) => {
        X({
            type: "RELATIONSHIP_UPDATE",
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                nickname: e.nickname,
                since: e.since,
                isSpamRequest: e.is_spam_request || !1,
                isStrangerRequest: e.is_stranger_request || !1,
                userIgnored: e.user_ignored || !1,
                originApplicationId: e.origin_application_id,
            },
        });
    }),
    z(["GAME_RELATIONSHIP_ADD"], (e) => {
        X({
            type: "GAME_RELATIONSHIP_ADD",
            gameRelationship: {
                id: e.id,
                applicationId: e.application_id,
                type: e.type,
                since: e.since,
                dmAccessType: e.dm_access_type,
                user: e.user,
            },
        });
    }),
    z(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        X({
            type: "GAME_RELATIONSHIP_REMOVE",
            userId: e.id,
            applicationId: e.application_id,
        });
    }),
    z(["PRESENCE_UPDATE"], (e) => {
        et({
            guildId: e.guild_id,
            user: e.user,
            status: e.status,
            activities: e.activities,
            hiddenActivities: e.hidden_activities,
            clientStatus: e.client_status,
            processedAtTimestamp: e.processed_at_timestamp,
        });
    }),
    z(["PRESENCES_REPLACE"], (e) => {
        X({
            type: "PRESENCES_REPLACE",
            presences: e,
        });
    }),
    z(["SESSIONS_REPLACE"], (e) => {
        X({
            type: "SESSIONS_REPLACE",
            sessions: ee(e),
        });
    }),
    z(["VOICE_STATE_UPDATE"], (e) => {
        Q([e]);
    }),
    z(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        Q(e.voice_states);
    }),
    z(["VOICE_SERVER_UPDATE"], (e) => {
        X({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    z(["CALL_CREATE"], (e) => {
        X({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing,
        });
        let t = e.voice_states;
        null != t &&
            X({
                type: "VOICE_STATE_UPDATES",
                voiceStates: t.map((e) => {
                    var t, n;
                    return {
                        userId: e.user_id,
                        guildId: null,
                        sessionId: e.session_id,
                        channelId: e.channel_id,
                        mute: e.mute,
                        deaf: e.deaf,
                        selfMute: e.self_mute,
                        selfDeaf: e.self_deaf,
                        selfVideo: e.self_video || !1,
                        suppress: e.suppress,
                        selfStream: e.self_stream || !1,
                        requestToSpeakTimestamp: null != (t = e.request_to_speak_timestamp) ? t : null,
                        discoverable: null == (n = e.discoverable) || n,
                    };
                }),
            });
    }),
    z(["CALL_UPDATE"], (e) => {
        X({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing,
        });
    }),
    z(["CALL_DELETE"], (e) => {
        X({
            type: "CALL_DELETE",
            channelId: e.channel_id,
            unavailable: e.unavailable,
        });
    }),
    z(["OAUTH2_TOKEN_CREATE"], (e) => {
        X({
            type: "OAUTH2_TOKEN_CREATE",
            id: e.id,
            scopes: e.scopes,
            application: e.application,
        });
    }),
    z(["OAUTH2_TOKEN_DELETE"], (e) => {
        X({
            type: "OAUTH2_TOKEN_DELETE",
            id: e.id,
            applicationId: e.application_id,
        });
    }),
    z(["OAUTH2_TOKEN_REVOKE"], (e) => {
        X({
            type: "OAUTH2_TOKEN_REVOKE",
            accessToken: e.access_token,
        });
    }),
    z(["RECENT_MENTION_DELETE"], (e) => {
        X({
            type: "RECENT_MENTION_DELETE",
            id: e.message_id,
        });
    }),
    z(["SAVED_MESSAGE_CREATE"], (e) => {
        X({
            type: "SAVED_MESSAGE_CREATE",
            savedMessage: (0, m.iz)(e),
        });
    }),
    z(["SAVED_MESSAGE_DELETE"], (e) => {
        X({
            type: "SAVED_MESSAGE_DELETE",
            savedMessageData: (0, m.x6)(e),
        });
    }),
    z(["FRIEND_SUGGESTION_CREATE"], (e) => {
        X({
            type: "FRIEND_SUGGESTION_CREATE",
            suggestion: e,
        });
    }),
    z(["FRIEND_SUGGESTION_DELETE"], (e) => {
        X({
            type: "FRIEND_SUGGESTION_DELETE",
            suggestedUserId: e.suggested_user_id,
        });
    }),
    z(["WEBHOOKS_UPDATE"], (e) => {
        X({
            type: "WEBHOOKS_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
        });
    }),
    z(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        X({
            type: t,
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: e.emoji,
            colors: e.burst_colors,
            reactionType: e.type,
            messageAuthorId: e.message_author_id,
        });
    }),
    z(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        X({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: {
                id: e.answer_id,
                name: "",
            },
            reactionType: h.v.VOTE,
        });
    }),
    z(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        X({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) =>
                k(M({}, e), {
                    emoji: {
                        id: e.answer_id,
                        name: "",
                    },
                    reactionType: h.v.VOTE,
                }),
            ),
        });
    }),
    z(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        X({
            type: "MESSAGE_REACTION_REMOVE_ALL",
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    z(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        X({
            type: "MESSAGE_REACTION_REMOVE_EMOJI",
            channelId: e.channel_id,
            messageId: e.message_id,
            emoji: e.emoji,
        });
    }),
    z(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        X({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    z(["PAYMENT_UPDATE"], (e) => {
        X({
            type: "PAYMENT_UPDATE",
            payment: e,
        });
    }),
    z(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        X({
            type: t,
            entitlement: e,
        });
    }),
    z(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        S.A.hasLayers() && (n(384904).$o(), l.jv(N.A.getFetchedSKUIDs()));
    }),
    z(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        c.rQ(), S.A.hasLayers() && n(384904).hP();
    }),
    z(["WISHLIST_ITEM_PURCHASED"], (e) => {
        X({
            type: "WISHLIST_ITEM_PURCHASED",
            recipientId: e.recipient_id,
            skuId: e.sku_id,
        });
    }),
    z(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        X({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: O.A.createFromServer(e, w.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    z(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        X({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: O.A.createFromServer(e, w.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    z(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        X({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    z(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        X({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    z(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, R.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t &&
                X({
                    type: "USER_PAYMENT_CLIENT_ADD",
                    purchaseTokenHash: n,
                    expiresAt: e.expires_at,
                });
        });
    }),
    z(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((J(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: r } = n;
                et({
                    guildId: e.guild_id,
                    user: r.user,
                    status: r.status,
                    activities: r.activities,
                    hiddenActivities: r.hidden_activities,
                    clientStatus: r.client_status,
                    processedAtTimestamp: r.processed_at_timestamp,
                });
            };
            e.ops.forEach((e) => {
                let { op: n, items: r, item: i } = e;
                switch (n) {
                    case "SYNC":
                        r.forEach(t);
                        break;
                    case "UPDATE":
                    case "INSERT":
                        t(i);
                }
            }),
                D.A.flush(),
                X({
                    type: "GUILD_MEMBER_LIST_UPDATE",
                    guildId: e.guild_id,
                    id: e.id,
                    ops: e.ops,
                    groups: e.groups,
                    memberCount: e.member_count,
                    onlineCount: e.online_count,
                });
        });
    }),
    z(["GIFT_CODE_UPDATE"], (e) => {
        X({
            type: "GIFT_CODE_UPDATE",
            uses: e.uses,
            code: e.code,
        });
    }),
    z(["GIFT_CODE_CREATE"], (e) => {
        X({
            type: "GIFT_CODE_CREATE",
            giftCode: e,
        });
    }),
    z(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        X({
            type: "LIBRARY_APPLICATION_UPDATE",
            libraryApplication: e,
        });
    }),
    z(["STREAM_CREATE"], (e) => {
        X({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    z(["STREAM_SERVER_UPDATE"], (e) => {
        X({
            type: "STREAM_SERVER_UPDATE",
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    z(["STREAM_UPDATE"], (e) => {
        X({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    z(["STREAM_DELETE"], (e) => {
        X({
            type: "STREAM_DELETE",
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason,
        });
    }),
    z(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        X({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    z(["REACTION_NOTIFICATION_SENT"], (e) => {
        X({
            type: "REACTION_NOTIFICATION_SENT",
            route: e.route,
            message: e.message,
            emoji: e.emoji,
            reactorUserId: e.reactor_user_id,
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
        });
    }),
    z(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        X({
            type: "NOTIFICATION_CENTER_ITEM_CREATE",
            item: e,
        });
    }),
    z(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        X({
            type: "NOTIFICATION_CENTER_ITEM_DELETE",
            id: e.id,
        });
    }),
    z(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        X({
            type: "NOTIFICATION_CENTER_ITEMS_ACK",
            ids: [e.id],
            optimistic: !1,
        });
    }),
    z(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        X({
            type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
            item_enum: e.item_enum,
        });
    }),
    z(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        X({
            type: "QUESTS_USER_STATUS_UPDATE",
            user_status: e.user_status,
        });
    }),
    z(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        X({
            type: "QUESTS_USER_COMPLETION_UPDATE",
            quest_enrollment_blocked_until: e.quest_enrollment_blocked_until,
        });
    }),
    z(["QUEST_PREVIEW_UPDATE"], (e) => {
        X({
            type: "QUEST_PREVIEW_UPDATE",
            quest_id: e.quest_id,
        });
    }),
    z(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
        });
    }),
    z(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        X({
            type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
            guildId: e.guild_id,
            version: e.version,
        });
    }),
    z(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        X({
            type: "GUILD_JOIN_REQUEST_CREATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id,
        });
    }),
    z(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        X({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id,
        });
    }),
    z(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        X({
            type: "GUILD_JOIN_REQUEST_DELETE",
            id: e.id,
            userId: e.user_id,
            guildId: e.guild_id,
        });
    }),
    z(["INTERACTION_CREATE"], (e) => {
        X({
            type: "INTERACTION_CREATE",
            interactionId: e.id,
            nonce: e.nonce,
        });
    }),
    z(["INTERACTION_SUCCESS"], (e) => {
        X({
            type: "INTERACTION_SUCCESS",
            interactionId: e.id,
            nonce: e.nonce,
        });
    }),
    z(["INTERACTION_FAILURE"], (e) => {
        X({
            type: "INTERACTION_FAILURE",
            interactionId: e.id,
            nonce: e.nonce,
            reasonCode: e.reason_code,
        });
    }),
    z(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        X({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
            choices: e.choices,
            nonce: e.nonce,
        });
    }),
    z(["INTERACTION_MODAL_CREATE"], (e) => {
        X({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, _.ZV)(e.components),
            nonce: e.nonce,
            resolved: e.resolved,
        });
    }),
    z(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        X({
            type: "INTERACTION_IFRAME_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            iframePath: e.iframe_path,
            modalSize: e.modal_size,
            nonce: e.nonce,
        });
    }),
    z(["STAGE_INSTANCE_CREATE"], (e) => {
        X({
            type: "STAGE_INSTANCE_CREATE",
            instance: e,
        });
    }),
    z(["STAGE_INSTANCE_UPDATE"], (e) => {
        X({
            type: "STAGE_INSTANCE_UPDATE",
            instance: e,
        });
    }),
    z(["STAGE_INSTANCE_DELETE"], (e) => {
        X({
            type: "STAGE_INSTANCE_DELETE",
            instance: e,
        });
    }),
    z(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_CREATE",
            guildScheduledEvent: e,
        });
    }),
    z(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_UPDATE",
            guildScheduledEvent: e,
        });
    }),
    z(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_DELETE",
            guildScheduledEvent: e,
        });
    }),
    z(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
            eventException: e,
        });
    }),
    z(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
            eventException: e,
        });
    }),
    z(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
            eventException: e,
        });
    }),
    z(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
            eventId: e.event_id,
        });
    }),
    z(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    z(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    z(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        X({
            type: "GUILD_DIRECTORY_ENTRY_CREATE",
            channelId: e.directory_channel_id,
            entry: e,
        });
    }),
    z(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        X({
            type: "GUILD_DIRECTORY_ENTRY_UPDATE",
            channelId: e.directory_channel_id,
            entry: e,
        });
    }),
    z(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        X({
            type: "GUILD_DIRECTORY_ENTRY_DELETE",
            channelId: e.directory_channel_id,
            guildId: e.entity_id,
        });
    }),
    z(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        X({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    z(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        X({
            type: "VOICE_CHANNEL_EFFECT_SEND",
            emoji: e.emoji,
            channelId: e.channel_id,
            userId: e.user_id,
            animationType: e.animation_type,
            animationId: e.animation_id,
            soundId: e.sound_id,
            soundVolume: e.sound_volume,
            points: e.points,
            streamerId: e.streamer_id,
            lineId: e.line_id,
            emojiHose: e.emoji_hose,
        });
    }),
    z(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        X({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new v.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    z(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        X({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new v.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    z(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        X({
            type: "GUILD_SOUNDBOARD_SOUND_DELETE",
            guildId: e.guild_id,
            soundId: e.sound_id,
        });
    }),
    z(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        X({
            type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
            guildId: e.guild_id,
            soundboardSounds: e.soundboard_sounds.map((t) => ({
                name: t.name,
                soundId: t.sound_id,
                emojiName: t.emoji_name,
                emojiId: t.emoji_id,
                userId: t.user_id,
                volume: t.volume,
                available: t.available,
                guildId: e.guild_id,
            })),
        });
    }),
    q(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e) => {
            X({
                type: "EMBEDDED_ACTIVITY_UPDATE_V2",
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants,
            });
        },
    ),
    z(["AUTH_SESSION_CHANGE"], (e) => {
        X({
            type: "AUTH_SESSION_CHANGE",
            authSessionIdHash: e.auth_session_id_hash,
        });
    }),
    z(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        X({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    z(["USER_CONNECTIONS_CALLBACK"], (e) => {
        X({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    z(["DELETED_ENTITY_IDS"], (e) => {
        X(
            M(
                {
                    type: "DELETED_ENTITY_IDS",
                },
                e,
            ),
        );
    }),
    q(
        ["CHANNEL_SYNC"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e) => {
            e.channels.forEach((e) => {
                B.add(e);
            }),
                X({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    z(["CONSOLE_COMMAND_UPDATE"], (e) => {
        X({
            type: "CONSOLE_COMMAND_UPDATE",
            id: e.id,
            result: e.result,
            error: e.error,
        });
    }),
    q(
        ["PASSIVE_UPDATE_V2"],
        (e) => A.D.loadGuildIds([e.guild_id]),
        (e) => {
            X({
                type: "PASSIVE_UPDATE_V2",
                guildId: e.guild_id,
                members: e.updated_members,
                channels: e.updated_channels.map((e) => ({
                    id: e.id,
                    lastMessageId: e.last_message_id,
                    lastPinTimestamp: e.last_pin_timestamp,
                })),
                voiceStates: e.updated_voice_states.map((e) => {
                    var t, n;
                    return {
                        channelId: e.channel_id,
                        deaf: e.deaf || !1,
                        mute: e.mute || !1,
                        requestToSpeakTimestamp: null != (t = e.request_to_speak_timestamp) ? t : null,
                        selfDeaf: e.self_deaf || !1,
                        selfMute: e.self_mute || !1,
                        selfStream: e.self_stream || !1,
                        selfVideo: e.self_video || !1,
                        sessionId: e.session_id,
                        suppress: e.suppress,
                        userId: e.user_id,
                        discoverable: null == (n = e.discoverable) || n,
                    };
                }),
                removedVoiceStateUsers: e.removed_voice_states,
            });
        },
    ),
    z(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        X({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    z(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        X({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    z(["LAST_MESSAGES"], (e) => {
        X({
            type: "MESSAGE_PREVIEWS_LOADED",
            guildId: e.guild_id,
            messages: e.messages,
        });
    }),
    z(["AUTHENTICATOR_UPDATE"], (e) => {
        X({
            type: "AUTHENTICATOR_UPDATE",
            credential: e,
        });
    }),
    z(["AUTHENTICATOR_CREATE"], (e) => {
        X({
            type: "AUTHENTICATOR_CREATE",
            credential: e,
        });
    }),
    z(["AUTHENTICATOR_DELETE"], (e) => {
        X({
            type: "AUTHENTICATOR_DELETE",
            credential: e,
        });
    }),
    z(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        X({
            type: "NOTIFICATION_SETTINGS_UPDATE",
            settings: {
                flags: e.flags,
            },
        });
    }),
    z(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        X(
            M(
                {
                    type: "CONVERSATION_SUMMARY_UPDATE",
                },
                e,
            ),
        );
    }),
    z(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        X({
            type: "PREMIUM_MARKETING_PREVIEW",
            data: e,
        });
    }),
    z(["USER_APPLICATION_UPDATE"], (e) => {
        X({
            type: "USER_APPLICATION_UPDATE",
            applicationId: e.application_id,
        });
    }),
    z(["USER_APPLICATION_REMOVE"], (e) => {
        X({
            type: "USER_APPLICATION_REMOVE",
            applicationId: e.application_id,
        });
    }),
    z(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        X({
            type: "DM_SETTINGS_UPSELL_SHOW",
            guildId: e.guild_id,
        });
    }),
    z(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        X({
            type: "CONTENT_INVENTORY_INBOX_STALE",
            refreshAfterMs: e.refresh_after_ms,
        });
    }),
    z(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        X({
            type: "VIRTUAL_CURRENCY_BALANCE_UPDATE",
            balance: e.balance,
        });
    }),
    z(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
            entitlements: e.entitlements,
        });
    }),
    z(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
            gameServer: e.game_server,
        });
    }),
    z(["GAME_SERVER_DELETE"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
            gameServerId: e.game_server_id,
        });
    }),
    z(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
        });
    }),
    z(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        X({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    z(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        X({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
        });
    }),
    z(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        X({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: e.interaction_id,
            applicationId: e.application_id,
            skuId: e.sku_id,
            recipientId: e.recipient_id,
            eligible: e.eligible,
        });
    }),
    z(["HAVEN_CONNECT"], (e, t) => {
        X({
            type: t,
            room: (0, p.xf)(e),
        });
    }),
    z(["HAVEN_DISCONNECT"], (e, t) => {
        X({
            type: t,
            userId: e.user_id,
            roomId: e.room_id,
        });
    }),
    z(["HAVEN_UPDATE"], (e, t) => {
        X({
            type: t,
            room: (0, p.xf)(e),
        });
    });
