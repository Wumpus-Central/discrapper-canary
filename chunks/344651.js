n.d(t, { Z: () => z }), n(539854), n(388685), n(997841), n(415506);
var r = n(392711),
    i = n.n(r);
n(724522);
var a = n(442837),
    o = n(570140),
    s = n(749210),
    l = n(821849),
    c = n(232567),
    u = n(864106),
    d = n(710845),
    f = n(131016),
    p = n(535834),
    _ = n(292419),
    m = n(566006),
    h = n(686478),
    g = n(952537),
    E = n(218543),
    b = n(48481),
    y = n(131704),
    O = n(209747),
    v = n(598077),
    S = n(592125),
    I = n(271383),
    T = n(819640),
    C = n(594174),
    A = n(979651),
    N = n(509545),
    P = n(78839),
    R = n(936101),
    w = n(868158),
    D = n(483012),
    x = n(955132);
function L(e, t, n) {
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
function j(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = G(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let Z = new d.Z("ConnectionStore"),
    F = new D.Z(
        x.Wb,
        (e, t) => {
            var n;
            e =
                null != e
                    ? e
                    : {
                          type: "CHANNEL_UPDATES",
                          channels: [],
                      };
            let r = (0, y.q_)(t),
                i = S.Z.getChannel(t.id),
                a =
                    null == i
                        ? void 0
                        : i.merge(
                              k(j({}, r), {
                                  recipients: i.recipients,
                                  bitrate: null != (n = r.bitrate) ? n : i.bitrate,
                              }),
                          );
            return e.channels.push(null != a ? a : r), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    B = new D.Z(
        x.Wb,
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
    V = new D.Z(
        x.Wb,
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
    H = new D.Z(
        x.Wb,
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
    Y = {};
function W(e, t) {
    for (let n of e)
        Y[n] = {
            preload: () => null,
            dispatch: t,
        };
}
function K(e, t, n) {
    for (let r of e)
        Y[r] = {
            preload: t,
            dispatch: n,
        };
}
function z(e) {
    return Y[e];
}
function q(e) {
    let t = [];
    for (let i of e) {
        var n, r;
        null != i.member && X(i.guild_id, i.member.user, i.member),
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
                oldChannelId: A.Z.getUserVoiceChannelId(i.guild_id, i.user_id),
            });
    }
    Q({
        type: "VOICE_STATE_UPDATES",
        voiceStates: t,
    });
}
function Q(e) {
    o.Z.dispatch(e).catch((t) =>
        x.Wb.resetSocketOnDispatchError({
            error: t,
            action: e.type,
        }),
    );
}
function X(e, t, n) {
    var r, a, o, s;
    let {
            roles: l,
            nick: c,
            avatar: d,
            avatar_decoration_data: p,
            flags: _,
            premium_since: m,
            pending: h,
            joined_at: g,
            communication_disabled_until: E,
            unusual_dm_activity_until: b,
            collectibles: y,
            display_name_styles: O,
        } = n,
        v = I.ZP.getMember(e, t.id),
        S = (0, f.bN)(O);
    (null != v &&
        v.nick === c &&
        v.avatar === d &&
        i().isEqual(v.roles, l) &&
        (0, u.sr)(null != (r = v.avatarDecoration) ? r : null, null != p ? p : null) &&
        v.premiumSince === m &&
        v.isPending === h &&
        v.joinedAt === g &&
        v.communicationDisabledUntil === E &&
        v.flags === _ &&
        (null != (a = v.unusualDMActivityUntil) ? a : null) === (null != b ? b : null) &&
        i().isEqual(null != (o = v.collectibles) ? o : null, null != y ? y : null) &&
        i().isEqual(null != (s = v.displayNameStyles) ? s : null, null != S ? S : null)) ||
        Q({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: l,
            nick: c,
            avatar: d,
            avatarDecoration: p,
            premiumSince: m,
            isPending: h,
            joinedAt: g,
            communicationDisabledUntil: E,
            unusualDMActivityUntil: b,
            flags: _,
            collectibles: y,
            displayNameStyles: S,
        });
}
function J(e) {
    let { member: t, mentions: n, author: r, guild_id: i } = e;
    null != t && null != i && X(i, r, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != i) {
                    let { member: t } = e;
                    delete e.member, X(i, e, t);
                }
            });
}
function $(e) {
    return e.map((e) => {
        var t;
        return {
            sessionId: e.session_id,
            lastModified: e.last_modified,
            status: e.status,
            activities: e.activities,
            hiddenActivities: null != (t = e.hidden_activities) ? t : [],
            active: !!e.active,
            clientInfo: e.client_info,
        };
    });
}
function ee(e) {
    let {
        guildId: t,
        user: n,
        status: r,
        activities: i,
        hiddenActivities: a,
        clientStatus: o,
        processedAtTimestamp: s,
    } = e;
    H.add({
        guildId: t,
        user: n,
        status: r,
        clientStatus: o,
        activities: i,
        hiddenActivities: a,
        processedAtTimestamp: s,
    });
}
K(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : S.o.loadGuildIds([e.id])),
    (e) => {
        E.Z.initialGuild.measure(() => {
            a.ZP.Emitter.batched(() => {
                let t = w.Fx(e, x.Wb.identifyStartTime);
                null != C.default.getCurrentUser() &&
                    (Q({
                        type: "GUILD_CREATE",
                        guild: t,
                    }),
                    Q({
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
                    Z.log("Dispatched INITIAL_GUILD ".concat(e.id)));
            });
        });
    },
),
    W(["READY_SUPPLEMENTAL"], (e) => {
        E.Z.readySupplemental.measure(() => {
            a.ZP.Emitter.batched(() => {
                var t;
                e = E.Z.hydrateReadySupplemental.measure(() => w.r$(e, x.Wb.identifyStartTime));
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
                    a = (null != (t = e.lazy_private_channels) ? t : []).map((e) => (0, y.q_)(e));
                E.Z.dispatchReadySupplemental.measure(() => {
                    var t;
                    Q({
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
                    Q({
                        type: "VOICE_STATE_UPDATES",
                        voiceStates: o,
                        initial: !0,
                    }),
                    x.GC.update();
            });
        }),
            setTimeout(() => Q({ type: "POST_CONNECTION_OPEN" }), 2000);
    }),
    K(
        ["READY"],
        (e) => {
            var t;
            let n = w.Eb(),
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
            return Promise.all([n, null != (t = S.o.loadGuildIds(r)) ? t : Promise.resolve()]).then((e) => {
                let [t] = e;
                return t;
            });
        },
        (e, t, n) => {
            if (e.user.bot) return void Q({ type: "LOGOUT" });
            E.Z.ready.measure(() => {
                a.ZP.Emitter.batched(() => {
                    let t = (e = E.Z.hydrateReady.measure(() =>
                            w.IM(e, x.Wb.identifyStartTime, n),
                        )).private_channels.map((e) => (0, y.q_)(e)),
                        r = e.guilds.filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted).map((e) => e.id),
                        i = e.guilds.filter((e) => !0 !== e.unavailable),
                        a = e.guilds.filter((e) => !0 === e.geo_restricted);
                    i.forEach((e) => {
                        e.presences = [];
                    });
                    let o = null == e.user_settings_proto ? void 0 : (0, b.ac)(e.user_settings_proto);
                    E.Z.dispatchReady.measure(() => {
                        var n, s, l;
                        Q({
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
                            sessions: $(e.sessions || []),
                            pendingPayments: e.pending_payments,
                            countryCode: null != (s = e.country_code) ? s : void 0,
                            guildJoinRequests: e.guild_join_requests || [],
                            userSettingsProto: o,
                            apiCodeVersion: e.api_code_version,
                            auth: e.auth,
                            notificationSettings: { flags: e.notification_settings.flags },
                            geoRestrictedGuilds: a,
                            explicitContentScanVersion: e.explicit_content_scan_version,
                            failedStates: e.failed_states,
                            linkedUsers: null != (l = e.linked_users) ? l : void 0,
                        });
                    }),
                        null != e.auth_token &&
                            Q({
                                type: "UPDATE_TOKEN",
                                token: e.auth_token,
                                userId: e.user.id,
                            }),
                        x.RR.update(),
                        x.GC.update();
                });
            });
        },
    ),
    W(["STATE_UPDATE"], (e) => {
        var t, n;
        Q({
            type: "CONNECTION_OPEN_STATE_UPDATE",
            apexExperiments: null != (t = e.apex_experiments) ? t : void 0,
            userActivities: null != (n = e.user_activities) ? n : void 0,
        });
    }),
    W(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        o.Z.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    W(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        o.Z.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE",
            experimentName: e.experiment_name,
        });
    }),
    W(["RESUMED"], () => {
        x.RR.forceUpdate(), x.GC.forceUpdate(), Q({ type: "CONNECTION_RESUMED" });
    }),
    W(["TYPING_START"], (e) => {
        null != e.member && X(e.guild_id, e.member.user, e.member),
            Q({
                type: "TYPING_START",
                channelId: e.channel_id,
                userId: e.user_id,
            });
    }),
    W(["GUILD_RING_START"], (e) => {
        Q({
            type: "GUILD_RING_START",
            ringing: e.ringing,
            channelId: e.channel_id,
            guildId: e.guild_id,
        });
    }),
    W(["GUILD_RING_STOP"], (e) => {
        Q({
            type: "GUILD_RING_STOP",
            ringing: e.ringing,
            channelId: e.channel_id,
            guildId: e.guild_id,
        });
    }),
    W(["ACTIVITY_START"], (e) => {
        Q({
            type: "ACTIVITY_START",
            userId: e.user_id,
            activity: e.activity,
        });
    }),
    W(["ACTIVITY_USER_ACTION"], (e) => {
        Q({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    K(
        ["MESSAGE_CREATE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            J(e),
                null != e.author &&
                    Q({
                        type: "MESSAGE_CREATE",
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1,
                    });
        },
    ),
    K(
        ["MESSAGE_UPDATE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            J(e),
                Q({
                    type: "MESSAGE_UPDATE",
                    guildId: e.guild_id,
                    message: e,
                });
        },
    ),
    K(
        ["MESSAGE_DELETE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            Q({
                type: "MESSAGE_DELETE",
                guildId: e.guild_id,
                id: e.id,
                channelId: e.channel_id,
            });
        },
    ),
    K(
        ["MESSAGE_DELETE_BULK"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            Q({
                type: "MESSAGE_DELETE_BULK",
                guildId: e.guild_id,
                ids: e.ids,
                channelId: e.channel_id,
            });
        },
    ),
    K(
        ["MESSAGE_ACK"],
        (e) => S.o.loadGuildFromChannelId(e.channel_id),
        (e) => {
            Q({
                type: "MESSAGE_ACK",
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version,
            });
        },
    ),
    W(["GUILD_FEATURE_ACK"], (e) => {
        Q({
            type: "GUILD_FEATURE_ACK",
            id: e.resource_id,
            ackType: e.ack_type,
            ackedId: e.entity_id,
        });
    }),
    W(["USER_NON_CHANNEL_ACK"], (e) => {
        Q({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e.ack_type,
            ackedId: e.entity_id,
        });
    }),
    K(
        ["CHANNEL_PINS_ACK"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            Q({
                type: "CHANNEL_PINS_ACK",
                channelId: e.channel_id,
                timestamp: e.timestamp,
                version: e.version,
            });
        },
    ),
    K(
        ["CHANNEL_PINS_UPDATE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            Q({
                type: "CHANNEL_PINS_UPDATE",
                channelId: e.channel_id,
                lastPinTimestamp: e.last_pin_timestamp,
            });
        },
    ),
    K(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            Q({
                type: t,
                channel: (0, y.q_)(e),
            });
        },
    ),
    W(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        Q({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            status: e.status,
        });
    }),
    W(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        var n;
        Q({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            voiceStartTime: null != (n = e.voice_start_time) ? n : void 0,
        });
    }),
    W(["CHANNEL_STATUSES"], (e, t) => {
        Q({
            type: t,
            guildId: e.guild_id,
            channels: e.channels,
        });
    }),
    W(["CHANNEL_INFO"], (e, t) => {
        Q({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({
                id: e.id,
                status: e.status,
                voiceStartTime: e.voice_start_time,
            })),
        });
    }),
    W(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        Q({
            type: t,
            guildId: e.guild_id,
            channelId: e.channel_id,
            online: e.presence_count,
            total: e.member_count,
        });
    }),
    K(
        ["CHANNEL_UPDATE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            F.add(e);
        },
    ),
    K(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n } = e,
                r = U(e, ["newly_created"]);
            Q({
                type: t,
                isNewlyCreated: n,
                channel: (0, y.q_)(r),
            });
        },
    ),
    K(
        ["THREAD_LIST_SYNC"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            Q({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = S.Z.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, y.q_)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? i().map(e.members, g.Z) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    W(["THREAD_MEMBER_UPDATE"], (e) => {
        Q({
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
    W(["THREAD_MEMBERS_UPDATE"], (e) => {
        var t;
        Q({
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
    W(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            Q({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({
                    threadId: e.thread_id,
                    missing: e.missing,
                    count: e.count,
                })),
            });
    }),
    W(["SOUNDBOARD_SOUNDS"], (e) => {
        B.add(e);
    }),
    W(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = S.Z.getBasicChannel(e.channel_id);
        Q({
            type: t,
            channelId: e.channel_id,
            user: e.user,
            nick: e.nick,
            isMember: null != n,
        });
    }),
    K(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : S.o.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable)
                Q({
                    type: "GUILD_UNAVAILABLE",
                    guildId: e.id,
                });
            else {
                let t = w.J2(e);
                s.Z.createGuild(t),
                    Q({
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
    W(["GUILD_UPDATE"], (e) => {
        Q({
            type: "GUILD_UPDATE",
            guild: e,
        }),
            e.unavailable &&
                Q({
                    type: "GUILD_UNAVAILABLE",
                    guildId: e.id,
                });
    }),
    W(["GUILD_DELETE"], (e) => {
        Q({
            type: "GUILD_DELETE",
            guild: e,
        }),
            e.geo_restricted
                ? Q({
                      type: "GUILD_GEO_RESTRICTED",
                      guildId: e.id,
                      icon: e.icon,
                      name: e.name,
                  })
                : e.unavailable &&
                  Q({
                      type: "GUILD_UNAVAILABLE",
                      guildId: e.id,
                  });
    }),
    W(["GUILD_MEMBERS_CHUNK"], (e) => {
        a.ZP.Emitter.batched(() => {
            V.add({
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
                        return ee({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: a,
                            hiddenActivities: o,
                            clientStatus: i,
                            processedAtTimestamp: s,
                        });
                    }),
                D.Z.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    W(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        a.ZP.Emitter.batched(() => {
            Q({
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
                        return ee({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: a,
                            hiddenActivities: o,
                            clientStatus: i,
                            processedAtTimestamp: s,
                        });
                    }),
                D.Z.flush();
        });
    }),
    W(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            Q({
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
                displayNameStyles: (0, f.bN)(e.display_name_styles),
            });
        },
    ),
    K(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            Q({
                type: t,
                guildId: e.guild_id,
                role: e.role,
            });
        },
    ),
    K(
        ["GUILD_ROLE_DELETE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            Q({
                type: "GUILD_ROLE_DELETE",
                guildId: e.guild_id,
                roleId: e.role_id,
                version: e.version,
            });
        },
    ),
    W(["GUILD_EMOJIS_UPDATE"], (e) => {
        Q({
            type: "GUILD_EMOJIS_UPDATE",
            guildId: e.guild_id,
            emojis: e.emojis,
        });
    }),
    W(["GUILD_STICKERS_UPDATE"], (e) => {
        Q({
            type: "GUILD_STICKERS_UPDATE",
            guildId: e.guild_id,
            stickers: e.stickers,
        });
    }),
    W(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        Q({
            type: "GUILD_INTEGRATIONS_UPDATE",
            guildId: e.guild_id,
        });
    }),
    W(["INTEGRATION_CREATE"], (e) => {
        Q({
            type: "INTEGRATION_CREATE",
            application: e.application,
            guildId: e.guild_id,
        });
    }),
    W(["INTEGRATION_DELETE"], (e) => {
        Q({
            type: "INTEGRATION_DELETE",
            applicationId: e.application_id,
            guildId: e.guild_id,
        });
    }),
    W(["USER_UPDATE"], (e) => {
        Q({
            type: "CURRENT_USER_UPDATE",
            user: e,
        });
    }),
    W(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, b.kI)(e.settings.type, e.settings.proto);
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
            Q({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: {
                    proto: t,
                    type: e.settings.type,
                },
                partial: e.partial,
            });
        }
    }),
    W(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        Q({
            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
            userGuildSettings: [e],
        });
    }),
    W(["USER_CONNECTIONS_UPDATE"], () => {
        Q({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    W(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        Q({
            type: "USER_REQUIRED_ACTION_UPDATE",
            requiredAction: e.required_action,
        });
    }),
    W(["USER_NOTE_UPDATE"], (e) => {
        Q(j({ type: "USER_NOTE_UPDATE" }, e));
    }),
    W(["RELATIONSHIP_ADD"], (e) => {
        Q({
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
    W(["RELATIONSHIP_REMOVE"], (e) => {
        Q({
            type: "RELATIONSHIP_REMOVE",
            relationship: e,
        });
    }),
    W(["RELATIONSHIP_UPDATE"], (e) => {
        Q({
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
    W(["GAME_RELATIONSHIP_ADD"], (e) => {
        Q({
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
    W(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        Q({
            type: "GAME_RELATIONSHIP_REMOVE",
            userId: e.id,
            applicationId: e.application_id,
        });
    }),
    W(["PRESENCE_UPDATE"], (e) => {
        ee({
            guildId: e.guild_id,
            user: e.user,
            status: e.status,
            activities: e.activities,
            hiddenActivities: e.hidden_activities,
            clientStatus: e.client_status,
            processedAtTimestamp: e.processed_at_timestamp,
        });
    }),
    W(["PRESENCES_REPLACE"], (e) => {
        Q({
            type: "PRESENCES_REPLACE",
            presences: e,
        });
    }),
    W(["SESSIONS_REPLACE"], (e) => {
        Q({
            type: "SESSIONS_REPLACE",
            sessions: $(e),
        });
    }),
    W(["VOICE_STATE_UPDATE"], (e) => {
        q([e]);
    }),
    W(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        q(e.voice_states);
    }),
    W(["VOICE_SERVER_UPDATE"], (e) => {
        Q({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    W(["CALL_CREATE"], (e) => {
        Q({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing,
        });
        let t = e.voice_states;
        null != t &&
            Q({
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
    W(["CALL_UPDATE"], (e) => {
        Q({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing,
        });
    }),
    W(["CALL_DELETE"], (e) => {
        Q({
            type: "CALL_DELETE",
            channelId: e.channel_id,
            unavailable: e.unavailable,
        });
    }),
    W(["OAUTH2_TOKEN_CREATE"], (e) => {
        Q({
            type: "OAUTH2_TOKEN_CREATE",
            id: e.id,
            scopes: e.scopes,
            application: e.application,
        });
    }),
    W(["OAUTH2_TOKEN_DELETE"], (e) => {
        Q({
            type: "OAUTH2_TOKEN_DELETE",
            id: e.id,
            applicationId: e.application_id,
        });
    }),
    W(["OAUTH2_TOKEN_REVOKE"], (e) => {
        Q({
            type: "OAUTH2_TOKEN_REVOKE",
            accessToken: e.access_token,
        });
    }),
    W(["RECENT_MENTION_DELETE"], (e) => {
        Q({
            type: "RECENT_MENTION_DELETE",
            id: e.message_id,
        });
    }),
    W(["SAVED_MESSAGE_CREATE"], (e) => {
        Q({
            type: "SAVED_MESSAGE_CREATE",
            savedMessage: (0, h.jk)(e),
        });
    }),
    W(["SAVED_MESSAGE_DELETE"], (e) => {
        Q({
            type: "SAVED_MESSAGE_DELETE",
            savedMessageData: (0, h.$_)(e),
        });
    }),
    W(["FRIEND_SUGGESTION_CREATE"], (e) => {
        Q({
            type: "FRIEND_SUGGESTION_CREATE",
            suggestion: e,
        });
    }),
    W(["FRIEND_SUGGESTION_DELETE"], (e) => {
        Q({
            type: "FRIEND_SUGGESTION_DELETE",
            suggestedUserId: e.suggested_user_id,
        });
    }),
    W(["WEBHOOKS_UPDATE"], (e) => {
        Q({
            type: "WEBHOOKS_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
        });
    }),
    W(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        Q({
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
    W(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        Q({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: {
                id: e.answer_id,
                name: "",
            },
            reactionType: m.O.VOTE,
        });
    }),
    W(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        Q({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) =>
                k(j({}, e), {
                    emoji: {
                        id: e.answer_id,
                        name: "",
                    },
                    reactionType: m.O.VOTE,
                }),
            ),
        });
    }),
    W(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        Q({
            type: "MESSAGE_REACTION_REMOVE_ALL",
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    W(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        Q({
            type: "MESSAGE_REACTION_REMOVE_EMOJI",
            channelId: e.channel_id,
            messageId: e.message_id,
            emoji: e.emoji,
        });
    }),
    W(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        Q({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    W(["PAYMENT_UPDATE"], (e) => {
        Q({
            type: "PAYMENT_UPDATE",
            payment: e,
        });
    }),
    W(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        Q({
            type: t,
            entitlement: e,
        });
    }),
    W(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        T.Z.hasLayers() && (n(355467).tZ(), l.Gn(N.Z.getFetchedSKUIDs()));
    }),
    W(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        c.k(), T.Z.hasLayers() && n(355467).jg();
    }),
    W(["WISHLIST_ITEM_PURCHASED"], (e) => {
        Q({
            type: "WISHLIST_ITEM_PURCHASED",
            recipientId: e.recipient_id,
            skuId: e.sku_id,
        });
    }),
    W(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        Q({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: O.Z.createFromServer(e, P.Z.getSubscriptionById(e.subscription_id)),
        });
    }),
    W(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        Q({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: O.Z.createFromServer(e, P.Z.getSubscriptionById(e.subscription_id)),
        });
    }),
    W(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        Q({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    W(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        Q({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    W(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, R.L)().then((t) => {
            let n = e.purchase_token_hash;
            n === t &&
                Q({
                    type: "USER_PAYMENT_CLIENT_ADD",
                    purchaseTokenHash: n,
                    expiresAt: e.expires_at,
                });
        });
    }),
    W(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        a.ZP.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((X(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: r } = n;
                ee({
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
                D.Z.flush(),
                Q({
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
    W(["GIFT_CODE_UPDATE"], (e) => {
        Q({
            type: "GIFT_CODE_UPDATE",
            uses: e.uses,
            code: e.code,
        });
    }),
    W(["GIFT_CODE_CREATE"], (e) => {
        Q({
            type: "GIFT_CODE_CREATE",
            giftCode: e,
        });
    }),
    W(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        Q({
            type: "LIBRARY_APPLICATION_UPDATE",
            libraryApplication: e,
        });
    }),
    W(["STREAM_CREATE"], (e) => {
        Q({
            type: "STREAM_CREATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            rtcChannelId: e.rtc_channel_id,
            paused: e.paused,
        });
    }),
    W(["STREAM_SERVER_UPDATE"], (e) => {
        Q({
            type: "STREAM_SERVER_UPDATE",
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    W(["STREAM_UPDATE"], (e) => {
        Q({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    W(["STREAM_DELETE"], (e) => {
        Q({
            type: "STREAM_DELETE",
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason,
        });
    }),
    W(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        Q({
            type: "GENERIC_PUSH_NOTIFICATION_SENT",
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag,
        });
    }),
    W(["REACTION_NOTIFICATION_SENT"], (e) => {
        Q({
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
    W(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        Q({
            type: "NOTIFICATION_CENTER_ITEM_CREATE",
            item: e,
        });
    }),
    W(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        Q({
            type: "NOTIFICATION_CENTER_ITEM_DELETE",
            id: e.id,
        });
    }),
    W(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        Q({
            type: "NOTIFICATION_CENTER_ITEMS_ACK",
            ids: [e.id],
            optimistic: !1,
        });
    }),
    W(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        Q({
            type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
            item_enum: e.item_enum,
        });
    }),
    W(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        Q({
            type: "QUESTS_USER_STATUS_UPDATE",
            user_status: e.user_status,
        });
    }),
    W(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        Q({
            type: "QUESTS_USER_COMPLETION_UPDATE",
            quest_enrollment_blocked_until: e.quest_enrollment_blocked_until,
        });
    }),
    W(["QUEST_PREVIEW_UPDATE"], (e) => {
        Q({
            type: "QUEST_PREVIEW_UPDATE",
            quest_id: e.quest_id,
        });
    }),
    W(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        Q({
            type: t,
            guildId: e.guild_id,
        });
    }),
    W(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        Q({
            type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
            guildId: e.guild_id,
            version: e.version,
        });
    }),
    W(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        Q({
            type: "GUILD_JOIN_REQUEST_CREATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id,
        });
    }),
    W(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        Q({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id,
        });
    }),
    W(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        Q({
            type: "GUILD_JOIN_REQUEST_DELETE",
            id: e.id,
            userId: e.user_id,
            guildId: e.guild_id,
        });
    }),
    W(["INTERACTION_CREATE"], (e) => {
        Q({
            type: "INTERACTION_CREATE",
            interactionId: e.id,
            nonce: e.nonce,
        });
    }),
    W(["INTERACTION_SUCCESS"], (e) => {
        Q({
            type: "INTERACTION_SUCCESS",
            interactionId: e.id,
            nonce: e.nonce,
        });
    }),
    W(["INTERACTION_FAILURE"], (e) => {
        Q({
            type: "INTERACTION_FAILURE",
            nonce: e.nonce,
            reasonCode: e.reason_code,
        });
    }),
    W(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        Q({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
            choices: e.choices,
            nonce: e.nonce,
        });
    }),
    W(["INTERACTION_MODAL_CREATE"], (e) => {
        Q({
            type: "INTERACTION_MODAL_CREATE",
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, _.uZ)(e.components),
            nonce: e.nonce,
            resolved: e.resolved,
        });
    }),
    W(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        Q({
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
    W(["STAGE_INSTANCE_CREATE"], (e) => {
        Q({
            type: "STAGE_INSTANCE_CREATE",
            instance: e,
        });
    }),
    W(["STAGE_INSTANCE_UPDATE"], (e) => {
        Q({
            type: "STAGE_INSTANCE_UPDATE",
            instance: e,
        });
    }),
    W(["STAGE_INSTANCE_DELETE"], (e) => {
        Q({
            type: "STAGE_INSTANCE_DELETE",
            instance: e,
        });
    }),
    W(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        Q({
            type: "GUILD_SCHEDULED_EVENT_CREATE",
            guildScheduledEvent: e,
        });
    }),
    W(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        Q({
            type: "GUILD_SCHEDULED_EVENT_UPDATE",
            guildScheduledEvent: e,
        });
    }),
    W(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        Q({
            type: "GUILD_SCHEDULED_EVENT_DELETE",
            guildScheduledEvent: e,
        });
    }),
    W(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        Q({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
            eventException: e,
        });
    }),
    W(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        Q({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
            eventException: e,
        });
    }),
    W(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        Q({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
            eventException: e,
        });
    }),
    W(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        Q({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
            eventId: e.event_id,
        });
    }),
    W(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        Q({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    W(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        Q({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    W(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        Q({
            type: "GUILD_DIRECTORY_ENTRY_CREATE",
            channelId: e.directory_channel_id,
            entry: e,
        });
    }),
    W(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        Q({
            type: "GUILD_DIRECTORY_ENTRY_UPDATE",
            channelId: e.directory_channel_id,
            entry: e,
        });
    }),
    W(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        Q({
            type: "GUILD_DIRECTORY_ENTRY_DELETE",
            channelId: e.directory_channel_id,
            guildId: e.entity_id,
        });
    }),
    W(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        Q({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    W(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        Q({
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
    W(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        Q({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new v.Z(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    W(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        Q({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new v.Z(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    W(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        Q({
            type: "GUILD_SOUNDBOARD_SOUND_DELETE",
            guildId: e.guild_id,
            soundId: e.sound_id,
        });
    }),
    W(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        Q({
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
    K(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            Q({
                type: "EMBEDDED_ACTIVITY_UPDATE_V2",
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants,
            });
        },
    ),
    W(["AUTH_SESSION_CHANGE"], (e) => {
        Q({
            type: "AUTH_SESSION_CHANGE",
            authSessionIdHash: e.auth_session_id_hash,
        });
    }),
    W(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        Q({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    W(["USER_CONNECTIONS_CALLBACK"], (e) => {
        Q({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    W(["DELETED_ENTITY_IDS"], (e) => {
        Q(j({ type: "DELETED_ENTITY_IDS" }, e));
    }),
    K(
        ["CHANNEL_SYNC"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            e.channels.forEach((e) => {
                F.add(e);
            }),
                Q({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    W(["CONSOLE_COMMAND_UPDATE"], (e) => {
        Q({
            type: "CONSOLE_COMMAND_UPDATE",
            id: e.id,
            result: e.result,
            error: e.error,
        });
    }),
    K(
        ["PASSIVE_UPDATE_V2"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            Q({
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
    W(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        Q({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    W(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        Q({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    W(["LAST_MESSAGES"], (e) => {
        Q({
            type: "MESSAGE_PREVIEWS_LOADED",
            guildId: e.guild_id,
            messages: e.messages,
        });
    }),
    W(["AUTHENTICATOR_UPDATE"], (e) => {
        Q({
            type: "AUTHENTICATOR_UPDATE",
            credential: e,
        });
    }),
    W(["AUTHENTICATOR_CREATE"], (e) => {
        Q({
            type: "AUTHENTICATOR_CREATE",
            credential: e,
        });
    }),
    W(["AUTHENTICATOR_DELETE"], (e) => {
        Q({
            type: "AUTHENTICATOR_DELETE",
            credential: e,
        });
    }),
    W(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        Q({
            type: "NOTIFICATION_SETTINGS_UPDATE",
            settings: { flags: e.flags },
        });
    }),
    W(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        Q(j({ type: "CONVERSATION_SUMMARY_UPDATE" }, e));
    }),
    W(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        Q({
            type: "PREMIUM_MARKETING_PREVIEW",
            data: e,
        });
    }),
    W(["USER_APPLICATION_UPDATE"], (e) => {
        Q({
            type: "USER_APPLICATION_UPDATE",
            applicationId: e.application_id,
        });
    }),
    W(["USER_APPLICATION_REMOVE"], (e) => {
        Q({
            type: "USER_APPLICATION_REMOVE",
            applicationId: e.application_id,
        });
    }),
    W(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        Q({
            type: "DM_SETTINGS_UPSELL_SHOW",
            guildId: e.guild_id,
        });
    }),
    W(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        Q({
            type: "CONTENT_INVENTORY_INBOX_STALE",
            refreshAfterMs: e.refresh_after_ms,
        });
    }),
    W(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        Q({
            type: "VIRTUAL_CURRENCY_BALANCE_UPDATE",
            balance: e.balance,
        });
    }),
    W(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        Q({
            type: t,
            guildId: e.guild_id,
            entitlements: e.entitlements,
        });
    }),
    W(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        Q({
            type: t,
            guildId: e.guild_id,
            gameServer: e.game_server,
        });
    }),
    W(["GAME_SERVER_DELETE"], (e, t) => {
        Q({
            type: t,
            guildId: e.guild_id,
            gameServerId: e.game_server_id,
        });
    }),
    W(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        Q({
            type: t,
            guildId: e.guild_id,
        });
    }),
    W(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        Q({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    W(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        Q({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
        });
    }),
    W(["HAVEN_CONNECT"], (e, t) => {
        Q({
            type: t,
            room: (0, p.CK)(e),
        });
    }),
    W(["HAVEN_DISCONNECT"], (e, t) => {
        Q({
            type: t,
            userId: e.user_id,
            roomId: e.room_id,
        });
    }),
    W(["HAVEN_UPDATE"], (e, t) => {
        Q({
            type: t,
            room: (0, p.CK)(e),
        });
    });
