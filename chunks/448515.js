"use strict";
n.d(t, { A: () => K }), n(321073), n(938796);
var r = n(735438),
    i = n.n(r);
n(237751);
var s = n(311907),
    a = n(73153),
    o = n(73825),
    l = n(803306),
    u = n(821956),
    c = n(628856),
    d = n(626584),
    _ = n(945096),
    f = n(692744),
    p = n(814890),
    h = n(505527),
    m = n(831433),
    E = n(756377),
    g = n(736130),
    A = n(614792),
    I = n(761821),
    T = n(95701),
    S = n(545934),
    y = n(427157),
    v = n(734057),
    N = n(696451),
    C = n(186111),
    R = n(628965),
    O = n(287809),
    b = n(977997),
    D = n(97352),
    L = n(166403),
    w = n(107351),
    M = n(121254),
    P = n(877166),
    x = n(531013),
    k = n(652215);
let U = new d.A("ConnectionStore");
function G(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== k.$pd.LISTENING } }
            : e;
    });
}
let F = new P.A(
        x.sZ,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, T.UE)(t),
                r = v.A.getChannel(t.id),
                i = r?.merge({ ...n, recipients: r.recipients, bitrate: n.bitrate ?? r.bitrate });
            return e.channels.push(i ?? n), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    V = new P.A(
        x.sZ,
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
    B = new P.A(
        x.sZ,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    H = new P.A(
        x.sZ,
        (e, t) => ((e = null == e ? { type: "PRESENCE_UPDATES", updates: [] } : e).updates.push(t), e),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    j = {};
function Y(e, t) {
    for (let n of e) j[n] = { preload: () => null, dispatch: t };
}
function W(e, t, n) {
    for (let r of e) j[r] = { preload: t, dispatch: n };
}
function K(e) {
    return j[e];
}
function $(e) {
    let t = [];
    for (let n of e)
        null != n.member && q(n.guild_id, n.member.user, n.member),
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
                oldChannelId: b.A.getUserVoiceChannelId(n.guild_id, n.user_id),
            });
    z({ type: "VOICE_STATE_UPDATES", voiceStates: t });
}
function z(e) {
    a.h.dispatch(e).catch((t) => {
        U.error(`dispatchOrResetSocket error during ${e.type}:`, t),
            x.sZ.resetSocketOnDispatchError({ error: t, action: e.type });
    });
}
function q(e, t, n) {
    let {
            roles: r,
            nick: s,
            avatar: a,
            avatar_decoration_data: o,
            flags: l,
            premium_since: d,
            pending: f,
            joined_at: p,
            communication_disabled_until: h,
            unusual_dm_activity_until: m,
            collectibles: E,
            display_name_styles: g,
        } = n,
        A = N.Ay.getMember(e, t.id),
        I = (0, c.t)(E),
        T = (0, _.mT)(g);
    (null != A &&
        A.nick === s &&
        A.avatar === a &&
        i().isEqual(A.roles, r) &&
        (0, u.kn)(A.avatarDecoration ?? null, o ?? null) &&
        A.premiumSince === d &&
        A.isPending === f &&
        A.joinedAt === p &&
        A.communicationDisabledUntil === h &&
        A.flags === l &&
        (A.unusualDMActivityUntil ?? null) === (m ?? null) &&
        i().isEqual(A.collectibles ?? null, I ?? null) &&
        i().isEqual(A.displayNameStyles ?? null, T ?? null)) ||
        z({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: r,
            nick: s,
            avatar: a,
            avatarDecoration: o,
            premiumSince: d,
            isPending: f,
            joinedAt: p,
            communicationDisabledUntil: h,
            unusualDMActivityUntil: m,
            flags: l,
            collectibles: I,
            displayNameStyles: T,
        });
}
function Z(e) {
    let { member: t, mentions: n, author: r, guild_id: i } = e;
    null != t && null != i && q(i, r, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != i) {
                    let { member: t } = e;
                    delete e.member, q(i, e, t);
                }
            });
}
function X(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: G(e.activities ?? []),
        hiddenActivities: e.hidden_activities ?? [],
        active: !!e.active,
        clientInfo: e.client_info,
    }));
}
function Q(e, t) {
    return e.map((e) => J(e, t));
}
function J(e, t) {
    let n = (0, m.A)(e.activities ?? [], e.hidden_activities ?? []);
    return {
        user: e.user,
        status: e.status,
        clientStatus: e.client_status,
        activities: G(n.activities),
        hiddenActivities: n.hiddenActivities,
        guildId: t,
        processedAtTimestamp: e.processed_at_timestamp,
    };
}
function ee(e) {
    H.add(e);
}
W(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : v.D.loadGuildIds([e.id])),
    (e) => {
        A.A.initialGuild.measure(() => {
            s.Ay.Emitter.batched(() => {
                let t = M.fq(e, x.sZ.identifyStartTime);
                null != O.default.getCurrentUser() &&
                    (z({ type: "GUILD_CREATE", guild: t }),
                    z({
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
                    U.log(`Dispatched INITIAL_GUILD ${e.id}`));
            });
        });
    },
),
    Y(["READY_SUPPLEMENTAL"], (e) => {
        A.A.readySupplemental.measure(() => {
            s.Ay.Emitter.batched(() => {
                let t = (e = A.A.hydrateReadySupplemental.measure(() => M.H3(e, x.sZ.identifyStartTime))).guilds.filter(
                    (e) => !0 !== e.unavailable,
                );
                t.forEach((e) => {
                    e.presences = Q(e.presences || [], e.id);
                });
                let n = Q(e.presences ?? [], void 0),
                    r = (e.lazy_private_channels ?? []).map((e) => (0, T.UE)(e));
                A.A.dispatchReadySupplemental.measure(() => {
                    z({ type: "CONNECTION_OPEN_SUPPLEMENTAL", guilds: t, presences: n, lazyPrivateChannels: r });
                });
                let i = [];
                t.forEach((e) => {
                    e.voice_states.forEach((t) => {
                        i.push({
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
                    z({ type: "VOICE_STATE_UPDATES", voiceStates: i, initial: !0 }),
                    x.Xo.update();
            });
        }),
            setTimeout(() => z({ type: "POST_CONNECTION_OPEN" }), 2e3);
    }),
    W(
        ["READY"],
        (e) => {
            let t = M.XD(),
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
                ? z({ type: "LOGOUT" })
                : A.A.ready.measure(() => {
                      s.Ay.Emitter.batched(() => {
                          let t = (e = A.A.hydrateReady.measure(() =>
                                  M.un(e, x.sZ.identifyStartTime, n),
                              )).private_channels.map((e) => (0, T.UE)(e)),
                              r = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              i = e.guilds.filter((e) => !0 !== e.unavailable),
                              s = e.guilds.filter((e) => !0 === e.geo_restricted),
                              a = null == e.user_settings_proto ? void 0 : (0, I.Gd)(e.user_settings_proto);
                          A.A.dispatchReady.measure(() => {
                              z({
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
                                  relationships: e.relationships ?? [],
                                  gameRelationships: e.game_relationships,
                                  friendSuggestionCount: e.friend_suggestion_count,
                                  analyticsToken: e.analytics_token,
                                  experiments: e.experiments,
                                  connectedAccounts: e.connected_accounts,
                                  guildExperiments: e.guild_experiments,
                                  apexExperiments: e.apex_experiments ?? void 0,
                                  requiredAction: e.required_action,
                                  consents: e.consents,
                                  sessions: X(e.sessions ?? []),
                                  pendingPayments: e.pending_payments,
                                  countryCode: e.country_code ?? void 0,
                                  guildJoinRequests: e.guild_join_requests ?? [],
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
                                  z({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  z({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              x.OV.update(),
                              x.Xo.update();
                      });
                  });
        },
    ),
    Y(["STATE_UPDATE"], (e) => {
        z({ type: "CONNECTION_OPEN_STATE_UPDATE", apexExperiments: e.apex_experiments ?? void 0 });
    }),
    Y(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        a.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    Y(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        a.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    Y(["RESUMED"], () => {
        x.OV.forceUpdate(), x.Xo.forceUpdate(), z({ type: "CONNECTION_RESUMED" });
    }),
    Y(["TYPING_START"], (e) => {
        null != e.member && q(e.guild_id, e.member.user, e.member),
            z({ type: "TYPING_START", channelId: e.channel_id, userId: e.user_id });
    }),
    Y(["GUILD_RING_START"], (e) => {
        z({ type: "GUILD_RING_START", ongoingRings: e.ongoing_rings, channelId: e.channel_id, guildId: e.guild_id });
    }),
    Y(["GUILD_RING_STOP"], (e) => {
        z({ type: "GUILD_RING_STOP", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    Y(["ACTIVITY_START"], (e) => {
        z({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    Y(["ACTIVITY_USER_ACTION"], (e) => {
        z({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    W(
        ["MESSAGE_CREATE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            Z(e),
                null != e.author &&
                    z({
                        type: "MESSAGE_CREATE",
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1,
                    });
        },
    ),
    W(
        ["MESSAGE_UPDATE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            Z(e), z({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e });
        },
    ),
    W(
        ["MESSAGE_DELETE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            z({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    W(
        ["MESSAGE_DELETE_BULK"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            z({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    W(
        ["MESSAGE_ACK"],
        (e) => v.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            z({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    Y(["GUILD_FEATURE_ACK"], (e) => {
        z({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    Y(["USER_NON_CHANNEL_ACK"], (e) => {
        z({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    W(
        ["CHANNEL_PINS_ACK"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            z({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    W(
        ["CHANNEL_PINS_UPDATE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            z({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    W(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            z({ type: t, channel: (0, T.UE)(e) });
        },
    ),
    Y(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        z({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    Y(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        z({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    Y(["CHANNEL_INFO"], (e, t) => {
        z({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    Y(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        z({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    W(
        ["CHANNEL_UPDATE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            F.add(e);
        },
    ),
    W(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...r } = e;
            z({ type: t, isNewlyCreated: n, channel: (0, T.UE)(r) });
        },
    ),
    W(
        ["THREAD_LIST_SYNC"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            z({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = v.A.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, T.UE)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? i().map(e.members, g.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    Y(["THREAD_MEMBER_UPDATE"], (e) => {
        z({
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
    Y(["THREAD_MEMBERS_UPDATE"], (e) => {
        z({
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
    Y(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            z({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    Y(["SOUNDBOARD_SOUNDS"], (e) => {
        V.add(e);
    }),
    Y(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = v.A.getBasicChannel(e.channel_id);
        z({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    W(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : v.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable) z({ type: "GUILD_UNAVAILABLE", guildId: e.id });
            else {
                let t = M.TI(e);
                z({ type: "GUILD_CREATE", guild: t }),
                    z({
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
    Y(["GUILD_UPDATE"], (e) => {
        z({ type: "GUILD_UPDATE", guild: e }), e.unavailable && z({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    Y(["GUILD_PRUNE_UPDATE"], (e) => {
        z({
            type: "GUILD_PRUNE_UPDATE",
            guildId: e.guild_id,
            prune: {
                isPreview: e.prune.is_preview,
                isFinished: e.prune.is_finished,
                days: e.prune.days,
                pruneCount: e.prune.prune_count,
                includeRoles: e.prune.include_roles,
            },
        });
    }),
    Y(["GUILD_BULK_BAN_UPDATE"], (e) => {
        z({
            type: "GUILD_BULK_BAN_UPDATE",
            guildId: e.guild_id,
            bulkBan: { bannedUsers: e.bulk_ban?.banned_users ?? [], failedUsers: e.bulk_ban?.failed_users ?? [] },
        });
    }),
    Y(["GUILD_DELETE"], (e) => {
        z({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? z({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && z({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    Y(["GUILD_MEMBERS_CHUNK"], (e) => {
        s.Ay.Emitter.batched(() => {
            B.add({ guildId: e.guild_id, members: e.members, notFound: e.not_found }),
                null != e.presences && Q(e.presences, e.guild_id).forEach(ee),
                P.A.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    Y(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        s.Ay.Emitter.batched(() => {
            z({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
                null != e.presences && Q(e.presences, e.guild_id).forEach(ee),
                P.A.flush();
        });
    }),
    Y(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            z({
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
                collectibles: (0, c.t)(e.collectibles),
                displayNameStyles: (0, _.mT)(e.display_name_styles),
            });
        },
    ),
    W(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            z({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    W(
        ["GUILD_ROLE_DELETE"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            z({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    Y(["GUILD_EMOJIS_UPDATE"], (e) => {
        z({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    Y(["GUILD_STICKERS_UPDATE"], (e) => {
        z({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    Y(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        z({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    Y(["INTEGRATION_CREATE"], (e) => {
        z({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    Y(["INTEGRATION_DELETE"], (e) => {
        z({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    Y(["USER_UPDATE"], (e) => {
        z({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    Y(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, I.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    (console.error(`Invalid proto: |${t}| |${e.settings.proto}|`),
                    console.error({ parsed: t, wire: e.settings.proto, type: e.settings.type }),
                    Error("UserSettingsProto must not be a string"))
                );
            z({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: t, type: e.settings.type },
                partial: e.partial,
            });
        }
    }),
    Y(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        z({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    Y(["USER_CONNECTIONS_UPDATE"], () => {
        z({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    Y(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        z({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    Y(["USER_NOTE_UPDATE"], (e) => {
        z({ type: "USER_NOTE_UPDATE", ...e });
    }),
    Y(["RELATIONSHIP_ADD"], (e) => {
        z({
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
    Y(["RELATIONSHIP_REMOVE"], (e) => {
        z({ type: "RELATIONSHIP_REMOVE", relationship: e });
    }),
    Y(["RELATIONSHIP_UPDATE"], (e) => {
        z({
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
    Y(["GAME_RELATIONSHIP_ADD"], (e) => {
        z({
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
    Y(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        z({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    Y(["PRESENCE_UPDATE"], (e) => {
        ee(J(e, e.guild_id));
    }),
    Y(["PRESENCES_REPLACE"], (e) => {
        z({ type: "PRESENCES_REPLACE", presences: Q(e, void 0) });
    }),
    Y(["SESSIONS_REPLACE"], (e) => {
        z({ type: "SESSIONS_REPLACE", sessions: X(e) });
    }),
    Y(["VOICE_STATE_UPDATE"], (e) => {
        $([e]);
    }),
    Y(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        $(e.voice_states);
    }),
    Y(["VOICE_SERVER_UPDATE"], (e) => {
        z({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    Y(["CALL_CREATE"], (e) => {
        z({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
        let t = e.voice_states;
        null != t &&
            z({
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
    Y(["CALL_UPDATE"], (e) => {
        z({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ongoingRings: e.ongoing_rings,
        });
    }),
    Y(["CALL_DELETE"], (e) => {
        z({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    Y(["OAUTH2_TOKEN_CREATE"], (e) => {
        z({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    Y(["OAUTH2_TOKEN_DELETE"], (e) => {
        z({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    Y(["OAUTH2_TOKEN_REVOKE"], (e) => {
        z({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    Y(["RECENT_MENTION_DELETE"], (e) => {
        z({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    Y(["SAVED_MESSAGE_CREATE"], (e) => {
        z({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, E.iz)(e) });
    }),
    Y(["SAVED_MESSAGE_DELETE"], (e) => {
        z({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, E.x6)(e) });
    }),
    Y(["FRIEND_SUGGESTION_CREATE"], (e) => {
        z({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    Y(["FRIEND_SUGGESTION_DELETE"], (e) => {
        z({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    Y(["WEBHOOKS_UPDATE"], (e) => {
        z({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    Y(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        z({
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
    Y(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        z({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: h.v.VOTE,
        });
    }),
    Y(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        z({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: h.v.VOTE })),
        });
    }),
    Y(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        z({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    Y(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        z({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    Y(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        z({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    Y(["PAYMENT_UPDATE"], (e) => {
        z({ type: "PAYMENT_UPDATE", payment: e });
    }),
    Y(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        z({ type: t, entitlement: e });
    }),
    Y(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        (C.A.hasLayers() || null != R.A.getSection()) && (n(323082).$o(), o.jv(D.A.getFetchedSKUIDs()));
    }),
    Y(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        l.rQ(), (C.A.hasLayers() || null != R.A.getSection()) && n(323082).hP();
    }),
    Y(["WISHLIST_ITEM_PURCHASED"], (e) => {
        z({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    Y(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        z({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: S.A.createFromServer(e, L.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    Y(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        z({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: S.A.createFromServer(e, L.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    Y(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        z({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    Y(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        z({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    Y(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, w.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && z({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    Y(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        s.Ay.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((q(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: r } = n;
                ee(J(r, e.guild_id));
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
                P.A.flush(),
                z({
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
    Y(["GIFT_CODE_UPDATE"], (e) => {
        z({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    Y(["GIFT_CODE_CREATE"], (e) => {
        z({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    Y(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        z({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    Y(["STREAM_CREATE"], (e) => {
        z({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    Y(["STREAM_SERVER_UPDATE"], (e) => {
        z({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    Y(["STREAM_UPDATE"], (e) => {
        z({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    Y(["STREAM_DELETE"], (e) => {
        z({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    Y(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        z({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    Y(["REACTION_NOTIFICATION_SENT"], (e) => {
        z({
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
    Y(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        z({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    Y(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        z({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    Y(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        z({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    Y(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        z({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    Y(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        z({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    Y(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        z({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    Y(["QUEST_PREVIEW_UPDATE"], (e) => {
        z({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    Y(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        z({ type: t, guildId: e.guild_id });
    }),
    Y(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        z({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    Y(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        z({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    Y(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        z({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    Y(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        z({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    Y(["INTERACTION_CREATE"], (e) => {
        z({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    Y(["INTERACTION_SUCCESS"], (e) => {
        z({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    Y(["INTERACTION_FAILURE"], (e) => {
        z({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    Y(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        z({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    Y(["INTERACTION_MODAL_CREATE"], (e) => {
        z({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, p.ZV)(e.components),
            nonce: e.nonce,
            resolved: e.resolved,
        });
    }),
    Y(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        z({
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
    Y(["STAGE_INSTANCE_CREATE"], (e) => {
        z({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    Y(["STAGE_INSTANCE_UPDATE"], (e) => {
        z({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    Y(["STAGE_INSTANCE_DELETE"], (e) => {
        z({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    Y(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        z({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    Y(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        z({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    Y(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        z({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    Y(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        z({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    Y(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        z({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    Y(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        z({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    Y(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        z({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: e.event_id });
    }),
    Y(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        z({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    Y(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        z({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    Y(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        z({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    Y(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        z({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    Y(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        z({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    Y(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        z({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    Y(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        z({
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
    Y(["CLIPS_REMOTE_TRIGGER"], (e) => {
        z({
            type: "CLIPS_REMOTE_TRIGGER",
            userId: e.user_id,
            applicationId: e.application_id,
            partyId: e.party_id ?? null,
        });
    }),
    Y(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        z({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new y.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    Y(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        z({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new y.A(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    Y(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        z({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    Y(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        z({
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
    W(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            z({
                type: "EMBEDDED_ACTIVITY_UPDATE_V2",
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants,
            });
        },
    ),
    Y(["AUTH_SESSION_CHANGE"], (e) => {
        z({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    Y(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        z({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    Y(["USER_CONNECTIONS_CALLBACK"], (e) => {
        z({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    Y(["DELETED_ENTITY_IDS"], (e) => {
        z({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    W(
        ["CHANNEL_SYNC"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            e.channels.forEach((e) => {
                F.add(e);
            }),
                z({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    Y(["CONSOLE_COMMAND_UPDATE"], (e) => {
        z({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    W(
        ["PASSIVE_UPDATE_V2"],
        (e) => v.D.loadGuildIds([e.guild_id]),
        (e) => {
            z({
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
    Y(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        z({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    Y(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        z({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    Y(["LAST_MESSAGES"], (e) => {
        z({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    Y(["AUTHENTICATOR_UPDATE"], (e) => {
        z({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    Y(["AUTHENTICATOR_CREATE"], (e) => {
        z({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    Y(["AUTHENTICATOR_DELETE"], (e) => {
        z({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    Y(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        z({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags } });
    }),
    Y(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        z({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    Y(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        z({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    Y(["USER_APPLICATION_UPDATE"], (e) => {
        z({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    Y(["USER_APPLICATION_REMOVE"], (e) => {
        z({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    Y(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        z({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    Y(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        z({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    Y(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        z({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance });
    }),
    Y(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        z({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    Y(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        z({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    Y(["GAME_SERVER_DELETE"], (e, t) => {
        z({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    Y(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        z({ type: t, guildId: e.guild_id });
    }),
    Y(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        z({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    Y(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        z({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    Y(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        z({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: e.interaction_id,
            applicationId: e.application_id,
            skuId: e.sku_id,
            recipientId: e.recipient_id,
            eligible: e.eligible,
            ineligibleReason: e.ineligible_reason,
        });
    }),
    Y(["HAVEN_CONNECT"], (e, t) => {
        z({ type: t, room: (0, f.xf)(e) });
    }),
    Y(["HAVEN_DISCONNECT"], (e, t) => {
        z({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    Y(["HAVEN_UPDATE"], (e, t) => {
        z({ type: t, room: (0, f.xf)(e) });
    }),
    Y(["GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE"], (e, t) => {
        z({ type: t, gameApplicationIds: e.game_application_ids, guildId: e.guild_id });
    });
