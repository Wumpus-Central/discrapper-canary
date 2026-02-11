"use strict";
n.d(t, { A: () => W }), n(321073), n(938796);
var r = n(735438),
    i = n.n(r);
n(237751);
var a = n(311907),
    s = n(73153),
    o = n(686956),
    l = n(73825),
    u = n(803306),
    c = n(507698),
    d = n(626584),
    _ = n(945096),
    f = n(692744),
    h = n(814890),
    p = n(505527),
    g = n(756377),
    E = n(736130),
    A = n(614792),
    I = n(761821),
    T = n(95701),
    y = n(545934),
    S = n(427157),
    v = n(734057),
    C = n(696451),
    b = n(186111),
    N = n(287809),
    R = n(977997),
    O = n(97352),
    D = n(166403),
    L = n(107351),
    w = n(121254),
    x = n(877166),
    P = n(531013),
    M = n(652215);
let k = new d.A("ConnectionStore");
function U(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== M.$pd.LISTENING } }
            : e;
    });
}
let G = new x.A(
        P.sZ,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, T.UE)(t),
                r = v.A.getChannel(t.id),
                i = r?.merge({ ...n, recipients: r.recipients, bitrate: n.bitrate ?? r.bitrate });
            return e.channels.push(i ?? n), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    F = new x.A(
        P.sZ,
        (e, t) => (
            (e = null == e ? { type: "SOUNDBOARD_SOUNDS_RECEIVED", updates: [] } : e).updates.push({
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
    V = new x.A(
        P.sZ,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    B = new x.A(
        P.sZ,
        (e, t) => ((e = null == e ? { type: "PRESENCE_UPDATES", updates: [] } : e).updates.push(t), e),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    j = {};
function H(e, t) {
    for (let n of e) j[n] = { preload: () => null, dispatch: t };
}
function Y(e, t, n) {
    for (let r of e) j[r] = { preload: t, dispatch: n };
}
function W(e) {
    return j[e];
}
function K(e) {
    let t = [];
    for (let n of e)
        null != n.member && z(n.guild_id, n.member.user, n.member),
            t.push({
                userId: n.user_id,
                guildId: n.guild_id,
                sessionId: n.session_id,
                channelId: n.channel_id,
                mute: n.mute,
                deaf: n.deaf,
                selfMute: n.self_mute,
                selfDeaf: n.self_deaf,
                selfVideo: n.self_video || !1,
                suppress: n.suppress,
                selfStream: n.self_stream || !1,
                requestToSpeakTimestamp: n.request_to_speak_timestamp ?? null,
                discoverable: n.discoverable ?? !0,
                oldChannelId: R.A.getUserVoiceChannelId(n.guild_id, n.user_id),
            });
    $({ type: "VOICE_STATE_UPDATES", voiceStates: t });
}
function $(e) {
    s.h.dispatch(e).catch((t) => P.sZ.resetSocketOnDispatchError({ error: t, action: e.type }));
}
function z(e, t, n) {
    let {
            roles: r,
            nick: a,
            avatar: s,
            avatar_decoration_data: o,
            flags: l,
            premium_since: u,
            pending: d,
            joined_at: f,
            communication_disabled_until: h,
            unusual_dm_activity_until: p,
            collectibles: g,
            display_name_styles: E,
        } = n,
        A = C.Ay.getMember(e, t.id),
        I = (0, _.mT)(E);
    (null != A &&
        A.nick === a &&
        A.avatar === s &&
        i().isEqual(A.roles, r) &&
        (0, c.kn)(A.avatarDecoration ?? null, o ?? null) &&
        A.premiumSince === u &&
        A.isPending === d &&
        A.joinedAt === f &&
        A.communicationDisabledUntil === h &&
        A.flags === l &&
        (A.unusualDMActivityUntil ?? null) === (p ?? null) &&
        i().isEqual(A.collectibles ?? null, g ?? null) &&
        i().isEqual(A.displayNameStyles ?? null, I ?? null)) ||
        $({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: r,
            nick: a,
            avatar: s,
            avatarDecoration: o,
            premiumSince: u,
            isPending: d,
            joinedAt: f,
            communicationDisabledUntil: h,
            unusualDMActivityUntil: p,
            flags: l,
            collectibles: g,
            displayNameStyles: I,
        });
}
function q(e) {
    let { member: t, mentions: n, author: r, guild_id: i } = e;
    null != t && null != i && z(i, r, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != i) {
                    let { member: t } = e;
                    delete e.member, z(i, e, t);
                }
            });
}
function X(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: U(e.activities ?? []),
        hiddenActivities: e.hidden_activities ?? [],
        active: !!e.active,
        clientInfo: e.client_info,
    }));
}
function Z(e) {
    let {
        guildId: t,
        user: n,
        status: r,
        activities: i,
        hiddenActivities: a,
        clientStatus: s,
        processedAtTimestamp: o,
    } = e;
    B.add({
        guildId: t,
        user: n,
        status: r,
        clientStatus: s,
        activities: U(i ?? []),
        hiddenActivities: a,
        processedAtTimestamp: o,
    });
}
Y(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : v.D.loadGuildIds([e.id])),
    (e) => {
        A.A.initialGuild.measure(() => {
            a.Ay.Emitter.batched(() => {
                let t = w.fq(e, P.sZ.identifyStartTime);
                null != N.default.getCurrentUser() &&
                    ($({ type: "GUILD_CREATE", guild: t }),
                    $({
                        type: "VOICE_STATE_UPDATES",
                        voiceStates: t.voice_states.map((e) => ({
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
                            requestToSpeakTimestamp: e.request_to_speak_timestamp ?? null,
                            discoverable: e.discoverable ?? !0,
                        })),
                    }),
                    k.log(`Dispatched INITIAL_GUILD ${e.id}`));
            });
        });
    },
),
    H(["READY_SUPPLEMENTAL"], (e) => {
        A.A.readySupplemental.measure(() => {
            a.Ay.Emitter.batched(() => {
                e = A.A.hydrateReadySupplemental.measure(() => w.H3(e, P.sZ.identifyStartTime));
                let t = (e) =>
                        e.map((e) => ({
                            user: e.user,
                            status: e.status,
                            clientStatus: e.client_status,
                            activities: e.activities,
                            hiddenActivities: e.hidden_activities,
                            processedAtTimestamp: e.processed_at_timestamp,
                        })),
                    n = e.guilds.filter((e) => !0 !== e.unavailable);
                n.forEach((e) => {
                    e.presences = t(e.presences || []);
                });
                let r = e.presences ? t(e.presences) : [],
                    i = (e.lazy_private_channels ?? []).map((e) => (0, T.UE)(e));
                A.A.dispatchReadySupplemental.measure(() => {
                    $({
                        type: "CONNECTION_OPEN_SUPPLEMENTAL",
                        guilds: n,
                        presences: r,
                        lazyPrivateChannels: i,
                        userActivities: e.user_activities ?? void 0,
                    });
                });
                let a = [];
                n.forEach((e) => {
                    e.voice_states.forEach((t) => {
                        a.push({
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
                            requestToSpeakTimestamp: t.request_to_speak_timestamp ?? null,
                            discoverable: t.discoverable ?? !0,
                        });
                    });
                }),
                    $({ type: "VOICE_STATE_UPDATES", voiceStates: a, initial: !0 }),
                    P.Xo.update();
            });
        }),
            setTimeout(() => $({ type: "POST_CONNECTION_OPEN" }), 2e3);
    }),
    Y(
        ["READY"],
        (e) => {
            let t = w.XD(),
                n = e.guilds
                    .filter(
                        (e) =>
                            !e.unavailable &&
                            "partial" === e.data_mode &&
                            ((e.partial_updates.channels ?? []).length > 0 ||
                                (e.partial_updates.deleted_channel_ids ?? []).length > 0 ||
                                void 0),
                    )
                    .map((e) => e.id);
            return Promise.all([t, v.D.loadGuildIds(n) ?? Promise.resolve()]).then((e) => {
                let [t] = e;
                return t;
            });
        },
        (e, t, n) => {
            e.user.bot
                ? $({ type: "LOGOUT" })
                : A.A.ready.measure(() => {
                      a.Ay.Emitter.batched(() => {
                          let t = (e = A.A.hydrateReady.measure(() =>
                                  w.un(e, P.sZ.identifyStartTime, n),
                              )).private_channels.map((e) => (0, T.UE)(e)),
                              r = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              i = e.guilds.filter((e) => !0 !== e.unavailable),
                              a = e.guilds.filter((e) => !0 === e.geo_restricted);
                          i.forEach((e) => {
                              e.presences = [];
                          });
                          let s = null == e.user_settings_proto ? void 0 : (0, I.Gd)(e.user_settings_proto);
                          A.A.dispatchReady.measure(() => {
                              $({
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
                                  apexExperiments: e.apex_experiments ?? void 0,
                                  requiredAction: e.required_action,
                                  consents: e.consents,
                                  sessions: X(e.sessions || []),
                                  pendingPayments: e.pending_payments,
                                  countryCode: e.country_code ?? void 0,
                                  guildJoinRequests: e.guild_join_requests || [],
                                  userSettingsProto: s,
                                  apiCodeVersion: e.api_code_version,
                                  auth: e.auth,
                                  notificationSettings: { flags: e.notification_settings.flags },
                                  geoRestrictedGuilds: a,
                                  explicitContentScanVersion: e.explicit_content_scan_version,
                                  failedStates: e.failed_states,
                                  linkedUsers: e.linked_users ?? void 0,
                                  regionalFeatureConfig: e.regional_feature_config ?? void 0,
                              });
                          }),
                              null != e.auth_token &&
                                  $({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  $({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              P.OV.update(),
                              P.Xo.update();
                      });
                  });
        },
    ),
    H(["STATE_UPDATE"], (e) => {
        $({
            type: "CONNECTION_OPEN_STATE_UPDATE",
            apexExperiments: e.apex_experiments ?? void 0,
            userActivities: e.user_activities ?? void 0,
        });
    }),
    H(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        s.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    H(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        s.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    H(["RESUMED"], () => {
        P.OV.forceUpdate(), P.Xo.forceUpdate(), $({ type: "CONNECTION_RESUMED" });
    }),
    H(["TYPING_START"], (e) => {
        null != e.member && z(e.guild_id, e.member.user, e.member),
            $({ type: "TYPING_START", channelId: e.channel_id, userId: e.user_id });
    }),
    H(["GUILD_RING_START"], (e) => {
        $({ type: "GUILD_RING_START", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    H(["GUILD_RING_STOP"], (e) => {
        $({ type: "GUILD_RING_STOP", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    H(["ACTIVITY_START"], (e) => {
        $({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    H(["ACTIVITY_USER_ACTION"], (e) => {
        $({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    Y(
        ["MESSAGE_CREATE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            q(e),
                null != e.author &&
                    $({
                        type: "MESSAGE_CREATE",
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1,
                    });
        },
    ),
    Y(
        ["MESSAGE_UPDATE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            q(e), $({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e });
        },
    ),
    Y(
        ["MESSAGE_DELETE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            $({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    Y(
        ["MESSAGE_DELETE_BULK"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            $({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    Y(
        ["MESSAGE_ACK"],
        (e) => v.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            $({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    H(["GUILD_FEATURE_ACK"], (e) => {
        $({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    H(["USER_NON_CHANNEL_ACK"], (e) => {
        $({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    Y(
        ["CHANNEL_PINS_ACK"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            $({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    Y(
        ["CHANNEL_PINS_UPDATE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            $({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    Y(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            $({ type: t, channel: (0, T.UE)(e) });
        },
    ),
    H(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        $({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    H(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        $({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    H(["CHANNEL_STATUSES"], (e, t) => {
        $({ type: t, guildId: e.guild_id, channels: e.channels });
    }),
    H(["CHANNEL_INFO"], (e, t) => {
        $({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    H(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        $({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    Y(
        ["CHANNEL_UPDATE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            G.add(e);
        },
    ),
    Y(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...r } = e;
            $({ type: t, isNewlyCreated: n, channel: (0, T.UE)(r) });
        },
    ),
    Y(
        ["THREAD_LIST_SYNC"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            $({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = v.A.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, T.UE)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? i().map(e.members, E.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    H(["THREAD_MEMBER_UPDATE"], (e) => {
        $({
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
    H(["THREAD_MEMBERS_UPDATE"], (e) => {
        $({
            type: "THREAD_MEMBERS_UPDATE",
            id: e.id,
            guildId: e.guild_id,
            memberCount: e.member_count,
            addedMembers: e.added_members?.map((t) => ({
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
    H(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            $({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    H(["SOUNDBOARD_SOUNDS"], (e) => {
        F.add(e);
    }),
    H(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = v.A.getBasicChannel(e.channel_id);
        $({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    Y(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : v.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable) $({ type: "GUILD_UNAVAILABLE", guildId: e.id });
            else {
                let t = w.TI(e);
                o.A.createGuild(t),
                    $({
                        type: "VOICE_STATE_UPDATES",
                        voiceStates: t.voice_states.map((e) => ({
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
                            requestToSpeakTimestamp: e.request_to_speak_timestamp ?? null,
                            discoverable: e.discoverable ?? !0,
                        })),
                    });
            }
        },
    ),
    H(["GUILD_UPDATE"], (e) => {
        $({ type: "GUILD_UPDATE", guild: e }), e.unavailable && $({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    H(["GUILD_PRUNE_UPDATE"], (e) => {
        $({
            type: "GUILD_PRUNE_UPDATE",
            guildId: e.guild_id,
            prune: {
                isPreview: e.prune.is_preview,
                days: e.prune.days,
                pruneCount: e.prune.prune_count,
                includeRoles: e.prune.include_roles,
            },
        });
    }),
    H(["GUILD_DELETE"], (e) => {
        $({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? $({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && $({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    H(["GUILD_MEMBERS_CHUNK"], (e) => {
        a.Ay.Emitter.batched(() => {
            V.add({ guildId: e.guild_id, members: e.members, notFound: e.not_found }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let {
                            user: n,
                            status: r,
                            client_status: i,
                            activities: a,
                            hidden_activities: s,
                            processed_at_timestamp: o,
                        } = t;
                        return Z({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: a,
                            hiddenActivities: s,
                            clientStatus: i,
                            processedAtTimestamp: o,
                        });
                    }),
                x.A.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    H(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            $({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let {
                            user: n,
                            status: r,
                            client_status: i,
                            activities: a,
                            hidden_activities: s,
                            processed_at_timestamp: o,
                        } = t;
                        return Z({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: a,
                            hiddenActivities: s,
                            clientStatus: i,
                            processedAtTimestamp: o,
                        });
                    }),
                x.A.flush();
        });
    }),
    H(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            $({
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
                displayNameStyles: (0, _.mT)(e.display_name_styles),
            });
        },
    ),
    Y(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            $({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    Y(
        ["GUILD_ROLE_DELETE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            $({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    H(["GUILD_EMOJIS_UPDATE"], (e) => {
        $({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    H(["GUILD_STICKERS_UPDATE"], (e) => {
        $({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    H(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        $({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    H(["INTEGRATION_CREATE"], (e) => {
        $({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    H(["INTEGRATION_DELETE"], (e) => {
        $({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    H(["USER_UPDATE"], (e) => {
        $({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    H(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, I.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    (console.error(`Invalid proto: |${t}| |${e.settings.proto}|`),
                    console.error({ parsed: t, wire: e.settings.proto, type: e.settings.type }),
                    Error("UserSettingsProto must not be a string"))
                );
            $({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: t, type: e.settings.type },
                partial: e.partial,
            });
        }
    }),
    H(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        $({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    H(["USER_CONNECTIONS_UPDATE"], () => {
        $({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    H(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        $({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    H(["USER_NOTE_UPDATE"], (e) => {
        $({ type: "USER_NOTE_UPDATE", ...e });
    }),
    H(["RELATIONSHIP_ADD"], (e) => {
        $({
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
    H(["RELATIONSHIP_REMOVE"], (e) => {
        $({ type: "RELATIONSHIP_REMOVE", relationship: e });
    }),
    H(["RELATIONSHIP_UPDATE"], (e) => {
        $({
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
    H(["GAME_RELATIONSHIP_ADD"], (e) => {
        $({
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
    H(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        $({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    H(["PRESENCE_UPDATE"], (e) => {
        Z({
            guildId: e.guild_id,
            user: e.user,
            status: e.status,
            activities: e.activities,
            hiddenActivities: e.hidden_activities,
            clientStatus: e.client_status,
            processedAtTimestamp: e.processed_at_timestamp,
        });
    }),
    H(["PRESENCES_REPLACE"], (e) => {
        $({ type: "PRESENCES_REPLACE", presences: e });
    }),
    H(["SESSIONS_REPLACE"], (e) => {
        $({ type: "SESSIONS_REPLACE", sessions: X(e) });
    }),
    H(["VOICE_STATE_UPDATE"], (e) => {
        K([e]);
    }),
    H(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        K(e.voice_states);
    }),
    H(["VOICE_SERVER_UPDATE"], (e) => {
        $({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    H(["CALL_CREATE"], (e) => {
        $({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing,
        });
        let t = e.voice_states;
        null != t &&
            $({
                type: "VOICE_STATE_UPDATES",
                voiceStates: t.map((e) => ({
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
                    requestToSpeakTimestamp: e.request_to_speak_timestamp ?? null,
                    discoverable: e.discoverable ?? !0,
                })),
            });
    }),
    H(["CALL_UPDATE"], (e) => {
        $({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing,
        });
    }),
    H(["CALL_DELETE"], (e) => {
        $({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    H(["OAUTH2_TOKEN_CREATE"], (e) => {
        $({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    H(["OAUTH2_TOKEN_DELETE"], (e) => {
        $({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    H(["OAUTH2_TOKEN_REVOKE"], (e) => {
        $({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    H(["RECENT_MENTION_DELETE"], (e) => {
        $({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    H(["SAVED_MESSAGE_CREATE"], (e) => {
        $({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, g.iz)(e) });
    }),
    H(["SAVED_MESSAGE_DELETE"], (e) => {
        $({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, g.x6)(e) });
    }),
    H(["FRIEND_SUGGESTION_CREATE"], (e) => {
        $({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    H(["FRIEND_SUGGESTION_DELETE"], (e) => {
        $({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    H(["WEBHOOKS_UPDATE"], (e) => {
        $({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    H(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        $({
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
    H(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        $({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: p.v.VOTE,
        });
    }),
    H(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        $({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: p.v.VOTE })),
        });
    }),
    H(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        $({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    H(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        $({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    H(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        $({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    H(["PAYMENT_UPDATE"], (e) => {
        $({ type: "PAYMENT_UPDATE", payment: e });
    }),
    H(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        $({ type: t, entitlement: e });
    }),
    H(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        b.A.hasLayers() && (n(384904).$o(), l.jv(O.A.getFetchedSKUIDs()));
    }),
    H(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        u.rQ(), b.A.hasLayers() && n(384904).hP();
    }),
    H(["WISHLIST_ITEM_PURCHASED"], (e) => {
        $({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    H(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        $({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: y.A.createFromServer(e, D.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    H(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        $({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: y.A.createFromServer(e, D.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    H(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        $({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    H(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        $({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    H(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, L.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && $({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    H(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((z(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: r } = n;
                Z({
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
                x.A.flush(),
                $({
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
    H(["GIFT_CODE_UPDATE"], (e) => {
        $({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    H(["GIFT_CODE_CREATE"], (e) => {
        $({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    H(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        $({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    H(["STREAM_CREATE"], (e) => {
        $({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    H(["STREAM_SERVER_UPDATE"], (e) => {
        $({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    H(["STREAM_UPDATE"], (e) => {
        $({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    H(["STREAM_DELETE"], (e) => {
        $({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    H(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        $({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    H(["REACTION_NOTIFICATION_SENT"], (e) => {
        $({
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
    H(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        $({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    H(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        $({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    H(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        $({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    H(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        $({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    H(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        $({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    H(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        $({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    H(["QUEST_PREVIEW_UPDATE"], (e) => {
        $({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    H(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        $({ type: t, guildId: e.guild_id });
    }),
    H(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        $({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    H(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        $({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    H(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        $({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    H(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        $({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    H(["INTERACTION_CREATE"], (e) => {
        $({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    H(["INTERACTION_SUCCESS"], (e) => {
        $({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    H(["INTERACTION_FAILURE"], (e) => {
        $({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    H(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        $({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    H(["INTERACTION_MODAL_CREATE"], (e) => {
        $({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, h.ZV)(e.components),
            nonce: e.nonce,
            resolved: e.resolved,
        });
    }),
    H(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        $({
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
    H(["STAGE_INSTANCE_CREATE"], (e) => {
        $({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    H(["STAGE_INSTANCE_UPDATE"], (e) => {
        $({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    H(["STAGE_INSTANCE_DELETE"], (e) => {
        $({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    H(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        $({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    H(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        $({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    H(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        $({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    H(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        $({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    H(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        $({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    H(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        $({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    H(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        $({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: e.event_id });
    }),
    H(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        $({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    H(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        $({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    H(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        $({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    H(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        $({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    H(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        $({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    H(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        $({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    H(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        $({
            type: "VOICE_CHANNEL_EFFECT_SEND",
            emoji: e.emoji,
            channelId: e.channel_id,
            userId: e.user_id,
            animationType: e.animation_type,
            animationId: e.animation_id,
            soundId: e.sound_id,
            soundVolume: e.sound_volume,
        });
    }),
    H(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        $({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new S.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    H(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        $({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new S.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    H(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        $({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    H(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        $({
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
    Y(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            $({
                type: "EMBEDDED_ACTIVITY_UPDATE_V2",
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants,
            });
        },
    ),
    H(["AUTH_SESSION_CHANGE"], (e) => {
        $({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    H(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        $({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    H(["USER_CONNECTIONS_CALLBACK"], (e) => {
        $({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    H(["DELETED_ENTITY_IDS"], (e) => {
        $({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    Y(
        ["CHANNEL_SYNC"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            e.channels.forEach((e) => {
                G.add(e);
            }),
                $({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    H(["CONSOLE_COMMAND_UPDATE"], (e) => {
        $({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    Y(
        ["PASSIVE_UPDATE_V2"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            $({
                type: "PASSIVE_UPDATE_V2",
                guildId: e.guild_id,
                members: e.updated_members,
                channels: e.updated_channels.map((e) => ({
                    id: e.id,
                    lastMessageId: e.last_message_id,
                    lastPinTimestamp: e.last_pin_timestamp,
                })),
                voiceStates: e.updated_voice_states.map((e) => ({
                    channelId: e.channel_id,
                    deaf: e.deaf || !1,
                    mute: e.mute || !1,
                    requestToSpeakTimestamp: e.request_to_speak_timestamp ?? null,
                    selfDeaf: e.self_deaf || !1,
                    selfMute: e.self_mute || !1,
                    selfStream: e.self_stream || !1,
                    selfVideo: e.self_video || !1,
                    sessionId: e.session_id,
                    suppress: e.suppress,
                    userId: e.user_id,
                    discoverable: e.discoverable ?? !0,
                })),
                removedVoiceStateUsers: e.removed_voice_states,
            });
        },
    ),
    H(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        $({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    H(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        $({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    H(["LAST_MESSAGES"], (e) => {
        $({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    H(["AUTHENTICATOR_UPDATE"], (e) => {
        $({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    H(["AUTHENTICATOR_CREATE"], (e) => {
        $({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    H(["AUTHENTICATOR_DELETE"], (e) => {
        $({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    H(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        $({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags } });
    }),
    H(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        $({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    H(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        $({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    H(["USER_APPLICATION_UPDATE"], (e) => {
        $({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    H(["USER_APPLICATION_REMOVE"], (e) => {
        $({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    H(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        $({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    H(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        $({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    H(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        $({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance });
    }),
    H(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        $({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    H(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        $({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    H(["GAME_SERVER_DELETE"], (e, t) => {
        $({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    H(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        $({ type: t, guildId: e.guild_id });
    }),
    H(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        $({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    H(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        $({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    H(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        $({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: e.interaction_id,
            applicationId: e.application_id,
            skuId: e.sku_id,
            recipientId: e.recipient_id,
            eligible: e.eligible,
        });
    }),
    H(["HAVEN_CONNECT"], (e, t) => {
        $({ type: t, room: (0, f.xf)(e) });
    }),
    H(["HAVEN_DISCONNECT"], (e, t) => {
        $({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    H(["HAVEN_UPDATE"], (e, t) => {
        $({ type: t, room: (0, f.xf)(e) });
    });
