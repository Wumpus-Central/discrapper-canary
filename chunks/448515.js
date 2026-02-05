"use strict";
n.d(t, { A: () => Y }), n(321073), n(938796);
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
    p = n(814890),
    h = n(505527),
    m = n(756377),
    g = n(736130),
    E = n(614792),
    A = n(761821),
    I = n(95701),
    T = n(545934),
    y = n(427157),
    S = n(734057),
    v = n(696451),
    C = n(186111),
    b = n(287809),
    N = n(977997),
    R = n(97352),
    O = n(166403),
    D = n(107351),
    L = n(121254),
    w = n(877166),
    x = n(531013),
    P = n(652215);
let M = new d.A("ConnectionStore");
function k(e) {
    return e.map((e) => {
        let t = e.timestamps?.end,
            n = e.created_at;
        return null != t && null != n
            ? { ...e, timestamps: { ...e.timestamps, isCountDown: t > n && e.type !== P.$pd.LISTENING } }
            : e;
    });
}
let U = new w.A(
        x.sZ,
        (e, t) => {
            e = e ?? { type: "CHANNEL_UPDATES", channels: [] };
            let n = (0, I.UE)(t),
                r = S.A.getChannel(t.id),
                i = r?.merge({ ...n, recipients: r.recipients, bitrate: n.bitrate ?? r.bitrate });
            return e.channels.push(i ?? n), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    G = new w.A(
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
    V = new w.A(
        x.sZ,
        (e, t) => ((e = e ?? { type: "GUILD_MEMBERS_CHUNK_BATCH", chunks: [] }).chunks.push(t), e),
        (e) => "GUILD_MEMBERS_CHUNK" !== e,
    ),
    F = new w.A(
        x.sZ,
        (e, t) => ((e = null == e ? { type: "PRESENCE_UPDATES", updates: [] } : e).updates.push(t), e),
        (e) => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e,
    ),
    B = {};
function j(e, t) {
    for (let n of e) B[n] = { preload: () => null, dispatch: t };
}
function H(e, t, n) {
    for (let r of e) B[r] = { preload: t, dispatch: n };
}
function Y(e) {
    return B[e];
}
function W(e) {
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
                oldChannelId: N.A.getUserVoiceChannelId(n.guild_id, n.user_id),
            });
    K({ type: "VOICE_STATE_UPDATES", voiceStates: t });
}
function K(e) {
    s.h.dispatch(e).catch((t) => x.sZ.resetSocketOnDispatchError({ error: t, action: e.type }));
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
            communication_disabled_until: p,
            unusual_dm_activity_until: h,
            collectibles: m,
            display_name_styles: g,
        } = n,
        E = v.Ay.getMember(e, t.id),
        A = (0, _.mT)(g);
    (null != E &&
        E.nick === a &&
        E.avatar === s &&
        i().isEqual(E.roles, r) &&
        (0, c.kn)(E.avatarDecoration ?? null, o ?? null) &&
        E.premiumSince === u &&
        E.isPending === d &&
        E.joinedAt === f &&
        E.communicationDisabledUntil === p &&
        E.flags === l &&
        (E.unusualDMActivityUntil ?? null) === (h ?? null) &&
        i().isEqual(E.collectibles ?? null, m ?? null) &&
        i().isEqual(E.displayNameStyles ?? null, A ?? null)) ||
        K({
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
            communicationDisabledUntil: p,
            unusualDMActivityUntil: h,
            flags: l,
            collectibles: m,
            displayNameStyles: A,
        });
}
function $(e) {
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
function q(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: k(e.activities ?? []),
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
    F.add({
        guildId: t,
        user: n,
        status: r,
        clientStatus: s,
        activities: k(i ?? []),
        hiddenActivities: a,
        processedAtTimestamp: o,
    });
}
H(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : S.D.loadGuildIds([e.id])),
    (e) => {
        E.A.initialGuild.measure(() => {
            a.Ay.Emitter.batched(() => {
                let t = L.fq(e, x.sZ.identifyStartTime);
                null != b.default.getCurrentUser() &&
                    (K({ type: "GUILD_CREATE", guild: t }),
                    K({
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
    j(["READY_SUPPLEMENTAL"], (e) => {
        E.A.readySupplemental.measure(() => {
            a.Ay.Emitter.batched(() => {
                e = E.A.hydrateReadySupplemental.measure(() => L.H3(e, x.sZ.identifyStartTime));
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
                    i = (e.lazy_private_channels ?? []).map((e) => (0, I.UE)(e));
                E.A.dispatchReadySupplemental.measure(() => {
                    K({
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
                    K({ type: "VOICE_STATE_UPDATES", voiceStates: a, initial: !0 }),
                    x.Xo.update();
            });
        }),
            setTimeout(() => K({ type: "POST_CONNECTION_OPEN" }), 2e3);
    }),
    H(
        ["READY"],
        (e) => {
            let t = L.XD(),
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
                ? K({ type: "LOGOUT" })
                : E.A.ready.measure(() => {
                      a.Ay.Emitter.batched(() => {
                          let t = (e = E.A.hydrateReady.measure(() =>
                                  L.un(e, x.sZ.identifyStartTime, n),
                              )).private_channels.map((e) => (0, I.UE)(e)),
                              r = e.guilds
                                  .filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted)
                                  .map((e) => e.id),
                              i = e.guilds.filter((e) => !0 !== e.unavailable),
                              a = e.guilds.filter((e) => !0 === e.geo_restricted);
                          i.forEach((e) => {
                              e.presences = [];
                          });
                          let s = null == e.user_settings_proto ? void 0 : (0, A.Gd)(e.user_settings_proto);
                          E.A.dispatchReady.measure(() => {
                              K({
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
                                  sessions: q(e.sessions || []),
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
                                  K({ type: "UPDATE_TOKEN", token: e.auth_token, userId: e.user.id }),
                              null != e.ad_personalization_toggles_disabled &&
                                  K({
                                      type: "AD_PERSONALIZATION_TOGGLES_RESTRICTED",
                                      disabled: e.ad_personalization_toggles_disabled,
                                  }),
                              x.OV.update(),
                              x.Xo.update();
                      });
                  });
        },
    ),
    j(["STATE_UPDATE"], (e) => {
        K({
            type: "CONNECTION_OPEN_STATE_UPDATE",
            apexExperiments: e.apex_experiments ?? void 0,
            userActivities: e.user_activities ?? void 0,
        });
    }),
    j(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        s.h.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    j(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        s.h.dispatch({ type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE", experimentName: e.experiment_name });
    }),
    j(["RESUMED"], () => {
        x.OV.forceUpdate(), x.Xo.forceUpdate(), K({ type: "CONNECTION_RESUMED" });
    }),
    j(["TYPING_START"], (e) => {
        null != e.member && z(e.guild_id, e.member.user, e.member),
            K({ type: "TYPING_START", channelId: e.channel_id, userId: e.user_id });
    }),
    j(["GUILD_RING_START"], (e) => {
        K({ type: "GUILD_RING_START", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    j(["GUILD_RING_STOP"], (e) => {
        K({ type: "GUILD_RING_STOP", ringing: e.ringing, channelId: e.channel_id, guildId: e.guild_id });
    }),
    j(["ACTIVITY_START"], (e) => {
        K({ type: "ACTIVITY_START", userId: e.user_id, activity: e.activity });
    }),
    j(["ACTIVITY_USER_ACTION"], (e) => {
        K({
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
            $(e),
                null != e.author &&
                    K({
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
            $(e), K({ type: "MESSAGE_UPDATE", guildId: e.guild_id, message: e });
        },
    ),
    H(
        ["MESSAGE_DELETE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            K({ type: "MESSAGE_DELETE", guildId: e.guild_id, id: e.id, channelId: e.channel_id });
        },
    ),
    H(
        ["MESSAGE_DELETE_BULK"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            K({ type: "MESSAGE_DELETE_BULK", guildId: e.guild_id, ids: e.ids, channelId: e.channel_id });
        },
    ),
    H(
        ["MESSAGE_ACK"],
        (e) => S.D.loadGuildFromChannelId(e.channel_id),
        (e) => {
            K({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    j(["GUILD_FEATURE_ACK"], (e) => {
        K({ type: "GUILD_FEATURE_ACK", id: e.resource_id, ackType: e.ack_type, ackedId: e.entity_id });
    }),
    j(["USER_NON_CHANNEL_ACK"], (e) => {
        K({ type: "USER_NON_CHANNEL_ACK", ackType: e.ack_type, ackedId: e.entity_id });
    }),
    H(
        ["CHANNEL_PINS_ACK"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            K({ type: "CHANNEL_PINS_ACK", channelId: e.channel_id, timestamp: e.timestamp, version: e.version });
        },
    ),
    H(
        ["CHANNEL_PINS_UPDATE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            K({ type: "CHANNEL_PINS_UPDATE", channelId: e.channel_id, lastPinTimestamp: e.last_pin_timestamp });
        },
    ),
    H(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            K({ type: t, channel: (0, I.UE)(e) });
        },
    ),
    j(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        K({ type: t, id: e.id, guildId: e.guild_id, status: e.status });
    }),
    j(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        K({ type: t, id: e.id, guildId: e.guild_id, voiceStartTime: e.voice_start_time ?? void 0 });
    }),
    j(["CHANNEL_STATUSES"], (e, t) => {
        K({ type: t, guildId: e.guild_id, channels: e.channels });
    }),
    j(["CHANNEL_INFO"], (e, t) => {
        K({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({ id: e.id, status: e.status, voiceStartTime: e.voice_start_time })),
        });
    }),
    j(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        K({ type: t, guildId: e.guild_id, channelId: e.channel_id, online: e.presence_count, total: e.member_count });
    }),
    H(
        ["CHANNEL_UPDATE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            U.add(e);
        },
    ),
    H(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...r } = e;
            K({ type: t, isNewlyCreated: n, channel: (0, I.UE)(r) });
        },
    ),
    H(
        ["THREAD_LIST_SYNC"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            K({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = S.A.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, I.UE)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? i().map(e.members, g.A) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    j(["THREAD_MEMBER_UPDATE"], (e) => {
        K({
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
    j(["THREAD_MEMBERS_UPDATE"], (e) => {
        K({
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
    j(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            K({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({ threadId: e.thread_id, missing: e.missing, count: e.count })),
            });
    }),
    j(["SOUNDBOARD_SOUNDS"], (e) => {
        G.add(e);
    }),
    j(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = S.A.getBasicChannel(e.channel_id);
        K({ type: t, channelId: e.channel_id, user: e.user, nick: e.nick, isMember: null != n });
    }),
    H(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : S.D.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable) K({ type: "GUILD_UNAVAILABLE", guildId: e.id });
            else {
                let t = L.TI(e);
                o.A.createGuild(t),
                    K({
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
    j(["GUILD_UPDATE"], (e) => {
        K({ type: "GUILD_UPDATE", guild: e }), e.unavailable && K({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    j(["GUILD_PRUNE_UPDATE"], (e) => {
        K({
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
    j(["GUILD_DELETE"], (e) => {
        K({ type: "GUILD_DELETE", guild: e }),
            e.geo_restricted
                ? K({ type: "GUILD_GEO_RESTRICTED", guildId: e.id, icon: e.icon, name: e.name })
                : e.unavailable && K({ type: "GUILD_UNAVAILABLE", guildId: e.id });
    }),
    j(["GUILD_MEMBERS_CHUNK"], (e) => {
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
                w.A.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    j(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        a.Ay.Emitter.batched(() => {
            K({ type: "THREAD_MEMBER_LIST_UPDATE", guildId: e.guild_id, threadId: e.thread_id, members: e.members }),
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
                w.A.flush();
        });
    }),
    j(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            K({
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
    H(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e, t) => {
            K({ type: t, guildId: e.guild_id, role: e.role });
        },
    ),
    H(
        ["GUILD_ROLE_DELETE"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            K({ type: "GUILD_ROLE_DELETE", guildId: e.guild_id, roleId: e.role_id, version: e.version });
        },
    ),
    j(["GUILD_EMOJIS_UPDATE"], (e) => {
        K({ type: "GUILD_EMOJIS_UPDATE", guildId: e.guild_id, emojis: e.emojis });
    }),
    j(["GUILD_STICKERS_UPDATE"], (e) => {
        K({ type: "GUILD_STICKERS_UPDATE", guildId: e.guild_id, stickers: e.stickers });
    }),
    j(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        K({ type: "GUILD_INTEGRATIONS_UPDATE", guildId: e.guild_id });
    }),
    j(["INTEGRATION_CREATE"], (e) => {
        K({ type: "INTEGRATION_CREATE", application: e.application, guildId: e.guild_id });
    }),
    j(["INTEGRATION_DELETE"], (e) => {
        K({ type: "INTEGRATION_DELETE", applicationId: e.application_id, guildId: e.guild_id });
    }),
    j(["USER_UPDATE"], (e) => {
        K({ type: "CURRENT_USER_UPDATE", user: e });
    }),
    j(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, A.Y5)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ("string" == typeof t)
                throw (
                    (console.error(`Invalid proto: |${t}| |${e.settings.proto}|`),
                    console.error({ parsed: t, wire: e.settings.proto, type: e.settings.type }),
                    Error("UserSettingsProto must not be a string"))
                );
            K({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: { proto: t, type: e.settings.type },
                partial: e.partial,
            });
        }
    }),
    j(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        K({ type: "USER_GUILD_SETTINGS_FULL_UPDATE", userGuildSettings: [e] });
    }),
    j(["USER_CONNECTIONS_UPDATE"], () => {
        K({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    j(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        K({ type: "USER_REQUIRED_ACTION_UPDATE", requiredAction: e.required_action });
    }),
    j(["USER_NOTE_UPDATE"], (e) => {
        K({ type: "USER_NOTE_UPDATE", ...e });
    }),
    j(["RELATIONSHIP_ADD"], (e) => {
        K({
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
    j(["RELATIONSHIP_REMOVE"], (e) => {
        K({ type: "RELATIONSHIP_REMOVE", relationship: e });
    }),
    j(["RELATIONSHIP_UPDATE"], (e) => {
        K({
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
    j(["GAME_RELATIONSHIP_ADD"], (e) => {
        K({
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
    j(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        K({ type: "GAME_RELATIONSHIP_REMOVE", userId: e.id, applicationId: e.application_id });
    }),
    j(["PRESENCE_UPDATE"], (e) => {
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
    j(["PRESENCES_REPLACE"], (e) => {
        K({ type: "PRESENCES_REPLACE", presences: e });
    }),
    j(["SESSIONS_REPLACE"], (e) => {
        K({ type: "SESSIONS_REPLACE", sessions: q(e) });
    }),
    j(["VOICE_STATE_UPDATE"], (e) => {
        W([e]);
    }),
    j(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        W(e.voice_states);
    }),
    j(["VOICE_SERVER_UPDATE"], (e) => {
        K({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    j(["CALL_CREATE"], (e) => {
        K({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing,
        });
        let t = e.voice_states;
        null != t &&
            K({
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
    j(["CALL_UPDATE"], (e) => {
        K({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing,
        });
    }),
    j(["CALL_DELETE"], (e) => {
        K({ type: "CALL_DELETE", channelId: e.channel_id, unavailable: e.unavailable });
    }),
    j(["OAUTH2_TOKEN_CREATE"], (e) => {
        K({ type: "OAUTH2_TOKEN_CREATE", id: e.id, scopes: e.scopes, application: e.application });
    }),
    j(["OAUTH2_TOKEN_DELETE"], (e) => {
        K({ type: "OAUTH2_TOKEN_DELETE", id: e.id, applicationId: e.application_id });
    }),
    j(["OAUTH2_TOKEN_REVOKE"], (e) => {
        K({ type: "OAUTH2_TOKEN_REVOKE", accessToken: e.access_token });
    }),
    j(["RECENT_MENTION_DELETE"], (e) => {
        K({ type: "RECENT_MENTION_DELETE", id: e.message_id });
    }),
    j(["SAVED_MESSAGE_CREATE"], (e) => {
        K({ type: "SAVED_MESSAGE_CREATE", savedMessage: (0, m.iz)(e) });
    }),
    j(["SAVED_MESSAGE_DELETE"], (e) => {
        K({ type: "SAVED_MESSAGE_DELETE", savedMessageData: (0, m.x6)(e) });
    }),
    j(["FRIEND_SUGGESTION_CREATE"], (e) => {
        K({ type: "FRIEND_SUGGESTION_CREATE", suggestion: e });
    }),
    j(["FRIEND_SUGGESTION_DELETE"], (e) => {
        K({ type: "FRIEND_SUGGESTION_DELETE", suggestedUserId: e.suggested_user_id });
    }),
    j(["WEBHOOKS_UPDATE"], (e) => {
        K({ type: "WEBHOOKS_UPDATE", guildId: e.guild_id, channelId: e.channel_id });
    }),
    j(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        K({
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
    j(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        K({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: { id: e.answer_id, name: "" },
            reactionType: h.v.VOTE,
        });
    }),
    j(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        K({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) => ({ ...e, emoji: { id: e.answer_id, name: "" }, reactionType: h.v.VOTE })),
        });
    }),
    j(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        K({ type: "MESSAGE_REACTION_REMOVE_ALL", channelId: e.channel_id, messageId: e.message_id });
    }),
    j(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        K({ type: "MESSAGE_REACTION_REMOVE_EMOJI", channelId: e.channel_id, messageId: e.message_id, emoji: e.emoji });
    }),
    j(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        K({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    j(["PAYMENT_UPDATE"], (e) => {
        K({ type: "PAYMENT_UPDATE", payment: e });
    }),
    j(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        K({ type: t, entitlement: e });
    }),
    j(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        C.A.hasLayers() && (n(384904).$o(), l.jv(R.A.getFetchedSKUIDs()));
    }),
    j(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        u.rQ(), C.A.hasLayers() && n(384904).hP();
    }),
    j(["WISHLIST_ITEM_PURCHASED"], (e) => {
        K({ type: "WISHLIST_ITEM_PURCHASED", recipientId: e.recipient_id, skuId: e.sku_id });
    }),
    j(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        K({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: T.A.createFromServer(e, O.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    j(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        K({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: T.A.createFromServer(e, O.A.getSubscriptionById(e.subscription_id)),
        });
    }),
    j(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        K({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    j(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        K({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    j(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, D.D)().then((t) => {
            let n = e.purchase_token_hash;
            n === t && K({ type: "USER_PAYMENT_CLIENT_ADD", purchaseTokenHash: n, expiresAt: e.expires_at });
        });
    }),
    j(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
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
                w.A.flush(),
                K({
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
    j(["GIFT_CODE_UPDATE"], (e) => {
        K({ type: "GIFT_CODE_UPDATE", uses: e.uses, code: e.code });
    }),
    j(["GIFT_CODE_CREATE"], (e) => {
        K({ type: "GIFT_CODE_CREATE", giftCode: e });
    }),
    j(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        K({ type: "LIBRARY_APPLICATION_UPDATE", libraryApplication: e });
    }),
    j(["STREAM_CREATE"], (e) => {
        K({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    j(["STREAM_SERVER_UPDATE"], (e) => {
        K({ type: "STREAM_SERVER_UPDATE", streamKey: e.stream_key, endpoint: e.endpoint, token: e.token });
    }),
    j(["STREAM_UPDATE"], (e) => {
        K({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    j(["STREAM_DELETE"], (e) => {
        K({ type: "STREAM_DELETE", streamKey: e.stream_key, unavailable: e.unavailable, reason: e.reason });
    }),
    j(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        K({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    j(["REACTION_NOTIFICATION_SENT"], (e) => {
        K({
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
    j(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        K({ type: "NOTIFICATION_CENTER_ITEM_CREATE", item: e });
    }),
    j(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        K({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id });
    }),
    j(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        K({ type: "NOTIFICATION_CENTER_ITEMS_ACK", ids: [e.id], optimistic: !1 });
    }),
    j(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        K({ type: "NOTIFICATION_CENTER_ITEM_COMPLETED", item_enum: e.item_enum });
    }),
    j(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        K({ type: "QUESTS_USER_STATUS_UPDATE", user_status: e.user_status });
    }),
    j(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        K({ type: "QUESTS_USER_COMPLETION_UPDATE", quest_enrollment_blocked_until: e.quest_enrollment_blocked_until });
    }),
    j(["QUEST_PREVIEW_UPDATE"], (e) => {
        K({ type: "QUEST_PREVIEW_UPDATE", quest_id: e.quest_id });
    }),
    j(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        K({ type: t, guildId: e.guild_id });
    }),
    j(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        K({ type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE", guildId: e.guild_id, version: e.version });
    }),
    j(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        K({ type: "GUILD_JOIN_REQUEST_CREATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    j(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        K({ type: "GUILD_JOIN_REQUEST_UPDATE", request: e.request, status: e.status, guildId: e.guild_id });
    }),
    j(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        K({ type: "GUILD_JOIN_REQUEST_DELETE", id: e.id, userId: e.user_id, guildId: e.guild_id });
    }),
    j(["INTERACTION_CREATE"], (e) => {
        K({ type: "INTERACTION_CREATE", interactionId: e.id, nonce: e.nonce });
    }),
    j(["INTERACTION_SUCCESS"], (e) => {
        K({ type: "INTERACTION_SUCCESS", interactionId: e.id, nonce: e.nonce });
    }),
    j(["INTERACTION_FAILURE"], (e) => {
        K({ type: "INTERACTION_FAILURE", interactionId: e.id, nonce: e.nonce, reasonCode: e.reason_code });
    }),
    j(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        K({ type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", choices: e.choices, nonce: e.nonce });
    }),
    j(["INTERACTION_MODAL_CREATE"], (e) => {
        K({
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
    j(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        K({
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
    j(["STAGE_INSTANCE_CREATE"], (e) => {
        K({ type: "STAGE_INSTANCE_CREATE", instance: e });
    }),
    j(["STAGE_INSTANCE_UPDATE"], (e) => {
        K({ type: "STAGE_INSTANCE_UPDATE", instance: e });
    }),
    j(["STAGE_INSTANCE_DELETE"], (e) => {
        K({ type: "STAGE_INSTANCE_DELETE", instance: e });
    }),
    j(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        K({ type: "GUILD_SCHEDULED_EVENT_CREATE", guildScheduledEvent: e });
    }),
    j(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        K({ type: "GUILD_SCHEDULED_EVENT_UPDATE", guildScheduledEvent: e });
    }),
    j(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        K({ type: "GUILD_SCHEDULED_EVENT_DELETE", guildScheduledEvent: e });
    }),
    j(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        K({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE", eventException: e });
    }),
    j(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        K({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE", eventException: e });
    }),
    j(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        K({ type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE", eventException: e });
    }),
    j(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        K({ type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE", eventId: e.event_id });
    }),
    j(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        K({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    j(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        K({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    j(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        K({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e.directory_channel_id, entry: e });
    }),
    j(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        K({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e.directory_channel_id, entry: e });
    }),
    j(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        K({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e.directory_channel_id, guildId: e.entity_id });
    }),
    j(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        K({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    j(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        K({
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
    j(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        K({
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
    j(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        K({
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
    j(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        K({ type: "GUILD_SOUNDBOARD_SOUND_DELETE", guildId: e.guild_id, soundId: e.sound_id });
    }),
    j(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        K({
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
            K({
                type: "EMBEDDED_ACTIVITY_UPDATE_V2",
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants,
            });
        },
    ),
    j(["AUTH_SESSION_CHANGE"], (e) => {
        K({ type: "AUTH_SESSION_CHANGE", authSessionIdHash: e.auth_session_id_hash });
    }),
    j(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        K({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    j(["USER_CONNECTIONS_CALLBACK"], (e) => {
        K({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    j(["DELETED_ENTITY_IDS"], (e) => {
        K({ type: "DELETED_ENTITY_IDS", ...e });
    }),
    H(
        ["CHANNEL_SYNC"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            e.channels.forEach((e) => {
                U.add(e);
            }),
                K({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    j(["CONSOLE_COMMAND_UPDATE"], (e) => {
        K({ type: "CONSOLE_COMMAND_UPDATE", id: e.id, result: e.result, error: e.error });
    }),
    H(
        ["PASSIVE_UPDATE_V2"],
        (e) => S.D.loadGuildIds([e.guild_id]),
        (e) => {
            K({
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
    j(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        K({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    j(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        K({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    j(["LAST_MESSAGES"], (e) => {
        K({ type: "MESSAGE_PREVIEWS_LOADED", guildId: e.guild_id, messages: e.messages });
    }),
    j(["AUTHENTICATOR_UPDATE"], (e) => {
        K({ type: "AUTHENTICATOR_UPDATE", credential: e });
    }),
    j(["AUTHENTICATOR_CREATE"], (e) => {
        K({ type: "AUTHENTICATOR_CREATE", credential: e });
    }),
    j(["AUTHENTICATOR_DELETE"], (e) => {
        K({ type: "AUTHENTICATOR_DELETE", credential: e });
    }),
    j(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        K({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: e.flags } });
    }),
    j(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        K({ type: "CONVERSATION_SUMMARY_UPDATE", ...e });
    }),
    j(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        K({ type: "PREMIUM_MARKETING_PREVIEW", data: e });
    }),
    j(["USER_APPLICATION_UPDATE"], (e) => {
        K({ type: "USER_APPLICATION_UPDATE", applicationId: e.application_id });
    }),
    j(["USER_APPLICATION_REMOVE"], (e) => {
        K({ type: "USER_APPLICATION_REMOVE", applicationId: e.application_id });
    }),
    j(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        K({ type: "DM_SETTINGS_UPSELL_SHOW", guildId: e.guild_id });
    }),
    j(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        K({ type: "CONTENT_INVENTORY_INBOX_STALE", refreshAfterMs: e.refresh_after_ms });
    }),
    j(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        K({ type: "VIRTUAL_CURRENCY_BALANCE_UPDATE", balance: e.balance });
    }),
    j(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        K({ type: t, guildId: e.guild_id, entitlements: e.entitlements });
    }),
    j(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        K({ type: t, guildId: e.guild_id, gameServer: e.game_server });
    }),
    j(["GAME_SERVER_DELETE"], (e, t) => {
        K({ type: t, guildId: e.guild_id, gameServerId: e.game_server_id });
    }),
    j(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        K({ type: t, guildId: e.guild_id });
    }),
    j(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        K({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    j(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        K({ type: t, user_id: e.user_id, application_id: e.application_id });
    }),
    j(["SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE"], (e) => {
        K({
            type: "SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE",
            interactionId: e.interaction_id,
            applicationId: e.application_id,
            skuId: e.sku_id,
            recipientId: e.recipient_id,
            eligible: e.eligible,
        });
    }),
    j(["HAVEN_CONNECT"], (e, t) => {
        K({ type: t, room: (0, f.xf)(e) });
    }),
    j(["HAVEN_DISCONNECT"], (e, t) => {
        K({ type: t, userId: e.user_id, roomId: e.room_id });
    }),
    j(["HAVEN_UPDATE"], (e, t) => {
        K({ type: t, room: (0, f.xf)(e) });
    });
