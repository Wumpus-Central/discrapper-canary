"use strict";
n.d(t, { A: () => j }), n(321073), n(938796);
var r = n(735438),
    i = n.n(r);
n(237751);
var s = n(311907),
    a = n(73153),
    o = n(73825),
    l = n(803306),
    u = n(507698),
    c = n(626584),
    d = n(945096),
    _ = n(692744),
    f = n(814890),
    p = n(505527),
    h = n(756377),
    m = n(736130),
    E = n(614792),
    g = n(761821),
    A = n(95701),
    I = n(545934),
    T = n(427157),
    S = n(734057),
    y = n(696451),
    v = n(186111),
    N = n(287809),
    C = n(977997),
    b = n(97352),
    R = n(166403),
    O = n(107351),
    D = n(121254),
    L = n(877166),
    w = n(531013),
    x = n(652215);
let M = new c.A("ConnectionStore");
function P(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== x.$pd.LISTENING } }
            : e;
    });
}
let k = new L.A(
        w.sZ,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, A.UE)(t),
                r = S.A.getChannel(t.id),
                i = r?.merge({ ...n, recipients: r.recipients, bitrate: n.bitrate ?? r.bitrate });
            return e.channels.push(i ?? n), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    U = new L.A(
        w.sZ,
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
    G = new L.A(
        w.sZ,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    F = new L.A(
        w.sZ,
        (e, t) => ((e = null == e ? { type: "PRESENCE_UPDATES", updates: [] } : e).updates.push(t), e),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    V = {};
function B(e, t) {
    for (let n of e) V[n] = { preload: () => null, dispatch: t };
}
function H(e, t, n) {
    for (let r of e) V[r] = { preload: t, dispatch: n };
}
function j(e) {
    return V[e];
}
function Y(e) {
    let t = [];
    for (let n of e)
        null != n.member && K(n.guild_id, n.member.user, n.member),
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
                oldChannelId: C.A.getUserVoiceChannelId(n.guild_id, n.user_id),
            });
    W({ type: "VOICE_STATE_UPDATES", voiceStates: t });
}
function W(e) {
    a.h.dispatch(e).catch((t) => w.sZ.resetSocketOnDispatchError({ error: t, action: e.type }));
}
function K(e, t, n) {
    let {
            roles: r,
            nick: s,
            avatar: a,
            avatar_decoration_data: o,
            flags: l,
            premium_since: c,
            pending: _,
            joined_at: f,
            communication_disabled_until: p,
            unusual_dm_activity_until: h,
            collectibles: m,
            display_name_styles: E,
        } = n,
        g = y.Ay.getMember(e, t.id),
        A = (0, d.mT)(E);
    (null != g &&
        g.nick === s &&
        g.avatar === a &&
        i().isEqual(g.roles, r) &&
        (0, u.kn)(g.avatarDecoration ?? null, o ?? null) &&
        g.premiumSince === c &&
        g.isPending === _ &&
        g.joinedAt === f &&
        g.communicationDisabledUntil === p &&
        g.flags === l &&
        (g.unusualDMActivityUntil ?? null) === (h ?? null) &&
        i().isEqual(g.collectibles ?? null, m ?? null) &&
        i().isEqual(g.displayNameStyles ?? null, A ?? null)) ||
        W({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: r,
            nick: s,
            avatar: a,
            avatarDecoration: o,
            premiumSince: c,
            isPending: _,
            joinedAt: f,
            communicationDisabledUntil: p,
            unusualDMActivityUntil: h,
            flags: l,
            collectibles: m,
            displayNameStyles: A,
        });
}
function z(e) {
    let { member: t, mentions: n, author: r, guild_id: i } = e;
    null != t && null != i && K(i, r, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != i) {
                    let { member: t } = e;
                    delete e.member, K(i, e, t);
                }
            });
}
function $(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: P(e.activities ?? []),
        hiddenActivities: e.hidden_activities ?? [],
        active: !!e.active,
        clientInfo: e.client_info,
    }));
}
function q(e) {
    let {
        guildId: t,
        user: n,
        status: r,
        activities: i,
        hiddenActivities: s,
        clientStatus: a,
        processedAtTimestamp: o,
    } = e;
    F.add({
        guildId: t,
        user: n,
        status: r,
        clientStatus: a,
        activities: P(i ?? []),
        hiddenActivities: s,
        processedAtTimestamp: o,
    });
}
H(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : S.D.loadGuildIds([e.id])),
    (e) => {
        E.A.initialGuild.measure(() => {
            s.Ay.Emitter.batched(() => {
                let t = D.fq(e, w.sZ.identifyStartTime);
                null != N.default.getCurrentUser() &&
                    (W({ type: "GUILD_CREATE", guild: t }),
                    W({
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
                    M.log(`Dispatched INITIAL_GUILD ${e.id}`));
            });
        });
    },
),
    B(["READY_SUPPLEMENTAL"], (e) => {
        E.A.readySupplemental.measure(() => {
            s.Ay.Emitter.batched(() => {
                e = E.A.hydrateReadySupplemental.measure(() => D.H3(e, w.sZ.identifyStartTime));
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
                    i = (e.lazy_private_channels ?? []).map((e) => (0, A.UE)(e));
                E.A.dispatchReadySupplemental.measure(() => {
                    W({
                        type: "CONNECTION_OPEN_SUPPLEMENTAL",
                        guilds: n,
                        presences: r,
                        lazyPrivateChannels: i,
                        userActivities: e.user_activities ?? void 0,
                    });
                });
                let s = [];
                n.forEach((e) => {
                    e.voice_states.forEach((t) => {
                        s.push({
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
                    W({ type: "VOICE_STATE_UPDATES", voiceStates: s, initial: !0 }),
                    w.Xo.update();
            });
        }),
            setTimeout(() => W({ type: "POST_CONNECTION_OPEN" }), 2e3);
    }),
    H(
        ["READY"],
        (e) => {
            let t = D.XD(),
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
            return Promise.all([t, S.D.loadGuildIds(n) ?? Promise.resolve()]).then((e) => {
                let [t] = e;
                return t;
            });
        },
        (e, t, n) => {
            e.user.bot
                ? W({ type: "LOGOUT" })
                : E.A.ready.measure(() => {
                      s.Ay.Emitter.batched(() => {
                          let t = (e = E.A.hydrateReady.measure(() =>
                                  D.un(e, w.sZ.identifyStartTime, n),
                              )).private_channels.map((e) => (0, A.UE)(e)),
                              r = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              i = e.guilds.filter((e) => !0 !== e.unavailable),
                              s = e.guilds.filter((e) => !0 === e.geo_restricted);
                          i.forEach((e) => {
                              e.presences = [];
                          });
                          let a = null == e.user_settings_proto ? void 0 : (0, g.Gd)(e.user_settings_proto);
                          E.A.dispatchReady.measure(() => {
                              W({
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
                                  sessions: $(e.sessions || []),
                                  pendingPayments: e.pending_payments,
                                  countryCode: e.country_code ?? void 0,
                                  guildJoinRequests: e.guild_join_requests || [],
                                  userSettingsProto: a,
                                  apiCodeVersion: e.api_code_version,
                                  auth: e.auth,
                                  notificationSettings: { flags: e.notification_settings.flags },
                                  geoRestrictedGuilds: s,
                                  explicitContentScanVersion: e.explicit_content_scan_version,
                                  failedStates: e.failed_states,
                                  linkedUsers: e.linked_users ?? void 0,
                                  regionalFeatureConfig: e.regional_feature_config ?? void 0,
                              });
                          }),
                              null != e.auth_token &&
                                  W({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  W({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              w.OV.update(),
                              w.Xo.update();
                      });
                  });
        },
    ),
    B(["STATE_UPDATE"], (e) => {
        W({
            type: "CONNECTION_OPEN_STATE_UPDATE",
            apexExperiments: e.apex_experiments ?? void 0,
            userActivities: e.user_activities ?? void 0,
        });
    }),
    B(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        a.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    B(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        a.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    B(["RESUMED"], () => {
        w.OV.forceUpdate(), w.Xo.forceUpdate(), W({ type: "CONNECTION_RESUMED" });
    }),
    B(["TYPING_START"], (e) => {
        null != e.member && K(e.guild_id, e.member.user, e.member),
            W({ type: "TYPING_START", channelId: e.channel_id, userId: e.user_id });
    }),
    B(["GUILD_RING_START"], (e) => {
        W({ type: "GUILD_RING_START", ongoingRings: e.ongoing_rings, channelId: e.channel_id, guildId: e.guild_id });
    }),
    B(["GUILD_RING_STOP"], (e) => {
        W({ type: "GUILD_RING_STOP", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    B(["ACTIVITY_START"], (e) => {
        W({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    B(["ACTIVITY_USER_ACTION"], (e) => {
        W({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    H(
        ["MESSAGE_CREATE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            z(e),
                null != e.author &&
                    W({
                        type: "MESSAGE_CREATE",
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1,
                    });
        },
    ),
    H(
        ["MESSAGE_UPDATE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            z(e), W({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e });
        },
    ),
    H(
        ["MESSAGE_DELETE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            W({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    H(
        ["MESSAGE_DELETE_BULK"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            W({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    H(
        ["MESSAGE_ACK"],
        (e) => S.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            W({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    B(["GUILD_FEATURE_ACK"], (e) => {
        W({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    B(["USER_NON_CHANNEL_ACK"], (e) => {
        W({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    H(
        ["CHANNEL_PINS_ACK"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            W({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    H(
        ["CHANNEL_PINS_UPDATE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            W({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    H(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            W({ type: t, channel: (0, A.UE)(e) });
        },
    ),
    B(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        W({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    B(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        W({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    B(["CHANNEL_STATUSES"], (e, t) => {
        W({ type: t, guildId: e.guild_id, channels: e.channels });
    }),
    B(["CHANNEL_INFO"], (e, t) => {
        W({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    B(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        W({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    H(
        ["CHANNEL_UPDATE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            k.add(e);
        },
    ),
    H(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...r } = e;
            W({ type: t, isNewlyCreated: n, channel: (0, A.UE)(r) });
        },
    ),
    H(
        ["THREAD_LIST_SYNC"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            W({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = S.A.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, A.UE)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? i().map(e.members, m.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    B(["THREAD_MEMBER_UPDATE"], (e) => {
        W({
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
    B(["THREAD_MEMBERS_UPDATE"], (e) => {
        W({
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
    B(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            W({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    B(["SOUNDBOARD_SOUNDS"], (e) => {
        U.add(e);
    }),
    B(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = S.A.getBasicChannel(e.channel_id);
        W({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    H(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : S.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable) W({ type: "GUILD_UNAVAILABLE", guildId: e.id });
            else {
                let t = D.TI(e);
                W({ type: "GUILD_CREATE", guild: t }),
                    W({
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
    B(["GUILD_UPDATE"], (e) => {
        W({ type: "GUILD_UPDATE", guild: e }), e.unavailable && W({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    B(["GUILD_PRUNE_UPDATE"], (e) => {
        W({
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
    B(["GUILD_BULK_BAN_UPDATE"], (e) => {
        W({
            type: "GUILD_BULK_BAN_UPDATE",
            guildId: e.guild_id,
            bulkBan: { bannedUsers: e.bulk_ban?.banned_users ?? [], failedUsers: e.bulk_ban?.failed_users ?? [] },
        });
    }),
    B(["GUILD_DELETE"], (e) => {
        W({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? W({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && W({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    B(["GUILD_MEMBERS_CHUNK"], (e) => {
        s.Ay.Emitter.batched(() => {
            G.add({ guildId: e.guild_id, members: e.members, notFound: e.not_found }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let {
                            user: n,
                            status: r,
                            client_status: i,
                            activities: s,
                            hidden_activities: a,
                            processed_at_timestamp: o,
                        } = t;
                        return q({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: s,
                            hiddenActivities: a,
                            clientStatus: i,
                            processedAtTimestamp: o,
                        });
                    }),
                L.A.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    B(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        s.Ay.Emitter.batched(() => {
            W({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let {
                            user: n,
                            status: r,
                            client_status: i,
                            activities: s,
                            hidden_activities: a,
                            processed_at_timestamp: o,
                        } = t;
                        return q({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: s,
                            hiddenActivities: a,
                            clientStatus: i,
                            processedAtTimestamp: o,
                        });
                    }),
                L.A.flush();
        });
    }),
    B(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            W({
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
                displayNameStyles: (0, d.mT)(e.display_name_styles),
            });
        },
    ),
    H(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            W({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    H(
        ["GUILD_ROLE_DELETE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            W({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    B(["GUILD_EMOJIS_UPDATE"], (e) => {
        W({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    B(["GUILD_STICKERS_UPDATE"], (e) => {
        W({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    B(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        W({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    B(["INTEGRATION_CREATE"], (e) => {
        W({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    B(["INTEGRATION_DELETE"], (e) => {
        W({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    B(["USER_UPDATE"], (e) => {
        W({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    B(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, g.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    (console.error(`Invalid proto: |${t}| |${e.settings.proto}|`),
                    console.error({ parsed: t, wire: e.settings.proto, type: e.settings.type }),
                    Error("UserSettingsProto must not be a string"))
                );
            W({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: t, type: e.settings.type },
                partial: e.partial,
            });
        }
    }),
    B(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        W({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    B(["USER_CONNECTIONS_UPDATE"], () => {
        W({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    B(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        W({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    B(["USER_NOTE_UPDATE"], (e) => {
        W({ type: "USER_NOTE_UPDATE", ...e });
    }),
    B(["RELATIONSHIP_ADD"], (e) => {
        W({
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
    B(["RELATIONSHIP_REMOVE"], (e) => {
        W({ type: "RELATIONSHIP_REMOVE", relationship: e });
    }),
    B(["RELATIONSHIP_UPDATE"], (e) => {
        W({
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
    B(["GAME_RELATIONSHIP_ADD"], (e) => {
        W({
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
    B(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        W({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    B(["PRESENCE_UPDATE"], (e) => {
        q({
            guildId: e.guild_id,
            user: e.user,
            status: e.status,
            activities: e.activities,
            hiddenActivities: e.hidden_activities,
            clientStatus: e.client_status,
            processedAtTimestamp: e.processed_at_timestamp,
        });
    }),
    B(["PRESENCES_REPLACE"], (e) => {
        W({ type: "PRESENCES_REPLACE", presences: e });
    }),
    B(["SESSIONS_REPLACE"], (e) => {
        W({ type: "SESSIONS_REPLACE", sessions: $(e) });
    }),
    B(["VOICE_STATE_UPDATE"], (e) => {
        Y([e]);
    }),
    B(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        Y(e.voice_states);
    }),
    B(["VOICE_SERVER_UPDATE"], (e) => {
        W({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    B(["CALL_CREATE"], (e) => {
        W({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
        let t = e.voice_states;
        null != t &&
            W({
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
    B(["CALL_UPDATE"], (e) => {
        W({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
    }),
    B(["CALL_DELETE"], (e) => {
        W({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    B(["OAUTH2_TOKEN_CREATE"], (e) => {
        W({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    B(["OAUTH2_TOKEN_DELETE"], (e) => {
        W({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    B(["OAUTH2_TOKEN_REVOKE"], (e) => {
        W({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    B(["RECENT_MENTION_DELETE"], (e) => {
        W({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    B(["SAVED_MESSAGE_CREATE"], (e) => {
        W({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, h.iz)(e) });
    }),
    B(["SAVED_MESSAGE_DELETE"], (e) => {
        W({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, h.x6)(e) });
    }),
    B(["FRIEND_SUGGESTION_CREATE"], (e) => {
        W({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    B(["FRIEND_SUGGESTION_DELETE"], (e) => {
        W({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    B(["WEBHOOKS_UPDATE"], (e) => {
        W({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    B(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        W({
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
    B(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        W({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: p.v.VOTE,
        });
    }),
    B(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        W({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: p.v.VOTE })),
        });
    }),
    B(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        W({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    B(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        W({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    B(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        W({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    B(["PAYMENT_UPDATE"], (e) => {
        W({ type: "PAYMENT_UPDATE", payment: e });
    }),
    B(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        W({ type: t, entitlement: e });
    }),
    B(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        v.A.hasLayers() && (n(384904).$o(), o.jv(b.A.getFetchedSKUIDs()));
    }),
    B(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        l.rQ(), v.A.hasLayers() && n(384904).hP();
    }),
    B(["WISHLIST_ITEM_PURCHASED"], (e) => {
        W({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    B(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        W({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: I.A.createFromServer(e, R.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    B(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        W({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: I.A.createFromServer(e, R.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    B(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        W({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    B(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        W({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    B(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, O.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && W({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    B(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        s.Ay.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((K(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: r } = n;
                q({
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
                L.A.flush(),
                W({
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
    B(["GIFT_CODE_UPDATE"], (e) => {
        W({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    B(["GIFT_CODE_CREATE"], (e) => {
        W({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    B(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        W({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    B(["STREAM_CREATE"], (e) => {
        W({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    B(["STREAM_SERVER_UPDATE"], (e) => {
        W({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    B(["STREAM_UPDATE"], (e) => {
        W({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    B(["STREAM_DELETE"], (e) => {
        W({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    B(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        W({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    B(["REACTION_NOTIFICATION_SENT"], (e) => {
        W({
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
    B(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        W({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    B(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        W({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    B(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        W({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    B(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        W({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    B(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        W({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    B(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        W({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    B(["QUEST_PREVIEW_UPDATE"], (e) => {
        W({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    B(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        W({ type: t, guildId: e.guild_id });
    }),
    B(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        W({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    B(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        W({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    B(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        W({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    B(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        W({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    B(["INTERACTION_CREATE"], (e) => {
        W({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    B(["INTERACTION_SUCCESS"], (e) => {
        W({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    B(["INTERACTION_FAILURE"], (e) => {
        W({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    B(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        W({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    B(["INTERACTION_MODAL_CREATE"], (e) => {
        W({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, f.ZV)(e.components),
            nonce: e.nonce,
            resolved: e.resolved,
        });
    }),
    B(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        W({
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
    B(["STAGE_INSTANCE_CREATE"], (e) => {
        W({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    B(["STAGE_INSTANCE_UPDATE"], (e) => {
        W({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    B(["STAGE_INSTANCE_DELETE"], (e) => {
        W({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    B(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        W({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    B(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        W({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    B(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        W({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    B(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        W({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    B(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        W({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    B(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        W({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    B(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        W({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: e.event_id });
    }),
    B(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        W({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    B(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        W({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    B(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        W({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    B(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        W({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    B(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        W({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    B(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        W({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    B(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        W({
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
    B(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        W({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new T.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    B(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        W({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new T.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    B(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        W({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    B(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        W({
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
    H(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            W({
                type: "EMBEDDED_ACTIVITY_UPDATE_V2",
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants,
            });
        },
    ),
    B(["AUTH_SESSION_CHANGE"], (e) => {
        W({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    B(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        W({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    B(["USER_CONNECTIONS_CALLBACK"], (e) => {
        W({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    B(["DELETED_ENTITY_IDS"], (e) => {
        W({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    H(
        ["CHANNEL_SYNC"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            e.channels.forEach((e) => {
                k.add(e);
            }),
                W({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    B(["CONSOLE_COMMAND_UPDATE"], (e) => {
        W({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    H(
        ["PASSIVE_UPDATE_V2"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            W({
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
    B(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        W({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    B(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        W({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    B(["LAST_MESSAGES"], (e) => {
        W({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    B(["AUTHENTICATOR_UPDATE"], (e) => {
        W({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    B(["AUTHENTICATOR_CREATE"], (e) => {
        W({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    B(["AUTHENTICATOR_DELETE"], (e) => {
        W({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    B(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        W({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags } });
    }),
    B(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        W({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    B(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        W({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    B(["USER_APPLICATION_UPDATE"], (e) => {
        W({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    B(["USER_APPLICATION_REMOVE"], (e) => {
        W({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    B(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        W({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    B(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        W({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    B(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        W({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance });
    }),
    B(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        W({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    B(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        W({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    B(["GAME_SERVER_DELETE"], (e, t) => {
        W({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    B(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        W({ type: t, guildId: e.guild_id });
    }),
    B(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        W({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    B(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        W({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    B(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        W({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: e.interaction_id,
            applicationId: e.application_id,
            skuId: e.sku_id,
            recipientId: e.recipient_id,
            eligible: e.eligible,
        });
    }),
    B(["HAVEN_CONNECT"], (e, t) => {
        W({ type: t, room: (0, _.xf)(e) });
    }),
    B(["HAVEN_DISCONNECT"], (e, t) => {
        W({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    B(["HAVEN_UPDATE"], (e, t) => {
        W({ type: t, room: (0, _.xf)(e) });
    });
