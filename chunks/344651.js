n.d(t, { Z: () => K }), n(539854), n(388685), n(997841), n(415506);
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
    _ = n(292419),
    p = n(566006),
    h = n(686478),
    m = n(952537),
    g = n(218543),
    E = n(48481),
    b = n(131704),
    y = n(209747),
    O = n(598077),
    v = n(592125),
    I = n(271383),
    T = n(819640),
    S = n(594174),
    A = n(979651),
    C = n(509545),
    N = n(78839),
    R = n(936101),
    P = n(868158),
    D = n(483012),
    w = n(955132);
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
function L(e) {
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
function j(e, t) {
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
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = U(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let G = new d.Z("ConnectionStore"),
    B = new D.Z(
        w.Wb,
        (e, t) => {
            var n;
            e =
                null != e
                    ? e
                    : {
                          type: "CHANNEL_UPDATES",
                          channels: [],
                      };
            let r = (0, b.q_)(t),
                i = v.Z.getChannel(t.id),
                a =
                    null == i
                        ? void 0
                        : i.merge(
                              j(L({}, r), {
                                  recipients: i.recipients,
                                  bitrate: null != (n = r.bitrate) ? n : i.bitrate,
                              }),
                          );
            return e.channels.push(null != a ? a : r), e;
        },
        (e) => "CHANNEL_UPDATE" !== e,
    ),
    Z = new D.Z(
        w.Wb,
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
    F = new D.Z(
        w.Wb,
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
    V = new D.Z(
        w.Wb,
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
    H = {};
function Y(e, t) {
    for (let n of e)
        H[n] = {
            preload: () => null,
            dispatch: t,
        };
}
function W(e, t, n) {
    for (let r of e)
        H[r] = {
            preload: t,
            dispatch: n,
        };
}
function K(e) {
    return H[e];
}
function z(e) {
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
    q({
        type: "VOICE_STATE_UPDATES",
        voiceStates: t,
    });
}
function q(e) {
    o.Z.dispatch(e).catch((t) =>
        w.Wb.resetSocketOnDispatchError({
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
            avatar_decoration_data: _,
            flags: p,
            premium_since: h,
            pending: m,
            joined_at: g,
            communication_disabled_until: E,
            unusual_dm_activity_until: b,
            collectibles: y,
            display_name_styles: O,
        } = n,
        v = I.ZP.getMember(e, t.id),
        T = (0, f.bN)(O);
    (null != v &&
        v.nick === c &&
        v.avatar === d &&
        i().isEqual(v.roles, l) &&
        (0, u.sr)(null != (r = v.avatarDecoration) ? r : null, null != _ ? _ : null) &&
        v.premiumSince === h &&
        v.isPending === m &&
        v.joinedAt === g &&
        v.communicationDisabledUntil === E &&
        v.flags === p &&
        (null != (a = v.unusualDMActivityUntil) ? a : null) === (null != b ? b : null) &&
        i().isEqual(null != (o = v.collectibles) ? o : null, null != y ? y : null) &&
        i().isEqual(null != (s = v.displayNameStyles) ? s : null, null != T ? T : null)) ||
        q({
            type: "GUILD_MEMBER_ADD",
            guildId: e,
            user: t,
            roles: l,
            nick: c,
            avatar: d,
            avatarDecoration: _,
            premiumSince: h,
            isPending: m,
            joinedAt: g,
            communicationDisabledUntil: E,
            unusualDMActivityUntil: b,
            flags: p,
            collectibles: y,
            displayNameStyles: T,
        });
}
function Q(e) {
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
function J(e) {
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
function $(e) {
    let {
        guildId: t,
        user: n,
        status: r,
        activities: i,
        hiddenActivities: a,
        clientStatus: o,
        processedAtTimestamp: s,
    } = e;
    V.add({
        guildId: t,
        user: n,
        status: r,
        clientStatus: o,
        activities: i,
        hiddenActivities: a,
        processedAtTimestamp: s,
    });
}
W(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : v.o.loadGuildIds([e.id])),
    (e) => {
        g.Z.initialGuild.measure(() => {
            a.ZP.Emitter.batched(() => {
                let t = P.Fx(e, w.Wb.identifyStartTime);
                null != S.default.getCurrentUser() &&
                    (q({
                        type: "GUILD_CREATE",
                        guild: t,
                    }),
                    q({
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
                    G.log("Dispatched INITIAL_GUILD ".concat(e.id)));
            });
        });
    },
),
    Y(["READY_SUPPLEMENTAL"], (e) => {
        g.Z.readySupplemental.measure(() => {
            a.ZP.Emitter.batched(() => {
                var t, n;
                e = g.Z.hydrateReadySupplemental.measure(() => P.r$(e, w.Wb.identifyStartTime));
                let r = (e) =>
                        e.map((e) => ({
                            user: e.user,
                            status: e.status,
                            clientStatus: e.client_status,
                            activities: e.activities,
                            hiddenActivities: e.hidden_activities,
                            processedAtTimestamp: e.processed_at_timestamp,
                        })),
                    i = e.guilds.filter((e) => !0 !== e.unavailable);
                i.forEach((e) => {
                    e.presences = r(e.presences || []);
                });
                let a = e.presences ? r(e.presences) : [],
                    o = (null != (t = e.lazy_private_channels) ? t : []).map((e) => (0, b.q_)(e)),
                    s = null != (n = e.game_invites) ? n : [];
                g.Z.dispatchReadySupplemental.measure(() => {
                    var t;
                    q({
                        type: "CONNECTION_OPEN_SUPPLEMENTAL",
                        guilds: i,
                        presences: a,
                        lazyPrivateChannels: o,
                        gameInvites: s,
                        userActivities: null != (t = e.user_activities) ? t : void 0,
                    });
                });
                let l = [];
                i.forEach((e) => {
                    e.voice_states.forEach((t) => {
                        var n, r;
                        l.push({
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
                    q({
                        type: "VOICE_STATE_UPDATES",
                        voiceStates: l,
                        initial: !0,
                    }),
                    w.GC.update();
            });
        }),
            setTimeout(() => q({ type: "POST_CONNECTION_OPEN" }), 2000);
    }),
    W(
        ["READY"],
        (e) => {
            var t;
            let n = P.Eb(),
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
            return Promise.all([n, null != (t = v.o.loadGuildIds(r)) ? t : Promise.resolve()]).then((e) => {
                let [t] = e;
                return t;
            });
        },
        (e, t, n) => {
            if (e.user.bot) return void q({ type: "LOGOUT" });
            g.Z.ready.measure(() => {
                a.ZP.Emitter.batched(() => {
                    let t = (e = g.Z.hydrateReady.measure(() =>
                            P.IM(e, w.Wb.identifyStartTime, n),
                        )).private_channels.map((e) => (0, b.q_)(e)),
                        r = e.guilds.filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted).map((e) => e.id),
                        i = e.guilds.filter((e) => !0 !== e.unavailable),
                        a = e.guilds.filter((e) => !0 === e.geo_restricted);
                    i.forEach((e) => {
                        e.presences = [];
                    });
                    let o = null == e.user_settings_proto ? void 0 : (0, E.ac)(e.user_settings_proto);
                    g.Z.dispatchReady.measure(() => {
                        var n, s, l;
                        q({
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
                            sessions: J(e.sessions || []),
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
                            q({
                                type: "UPDATE_TOKEN",
                                token: e.auth_token,
                                userId: e.user.id,
                            }),
                        w.RR.update(),
                        w.GC.update();
                });
            });
        },
    ),
    Y(["STATE_UPDATE"], (e) => {
        var t, n;
        q({
            type: "CONNECTION_OPEN_STATE_UPDATE",
            apexExperiments: null != (t = e.apex_experiments) ? t : void 0,
            userActivities: null != (n = e.user_activities) ? n : void 0,
        });
    }),
    Y(["RESUMED"], () => {
        w.RR.forceUpdate(), w.GC.forceUpdate(), q({ type: "CONNECTION_RESUMED" });
    }),
    Y(["TYPING_START"], (e) => {
        null != e.member && X(e.guild_id, e.member.user, e.member),
            q({
                type: "TYPING_START",
                channelId: e.channel_id,
                userId: e.user_id,
            });
    }),
    Y(["GUILD_RING_START"], (e) => {
        q({
            type: "GUILD_RING_START",
            ringing: e.ringing,
            channelId: e.channel_id,
            guildId: e.guild_id,
        });
    }),
    Y(["GUILD_RING_STOP"], (e) => {
        q({
            type: "GUILD_RING_STOP",
            ringing: e.ringing,
            channelId: e.channel_id,
            guildId: e.guild_id,
        });
    }),
    Y(["ACTIVITY_START"], (e) => {
        q({
            type: "ACTIVITY_START",
            userId: e.user_id,
            activity: e.activity,
        });
    }),
    Y(["ACTIVITY_USER_ACTION"], (e) => {
        q({
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
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            Q(e),
                null != e.author &&
                    q({
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
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            Q(e),
                q({
                    type: "MESSAGE_UPDATE",
                    guildId: e.guild_id,
                    message: e,
                });
        },
    ),
    W(
        ["MESSAGE_DELETE"],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            q({
                type: "MESSAGE_DELETE",
                guildId: e.guild_id,
                id: e.id,
                channelId: e.channel_id,
            });
        },
    ),
    W(
        ["MESSAGE_DELETE_BULK"],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            q({
                type: "MESSAGE_DELETE_BULK",
                guildId: e.guild_id,
                ids: e.ids,
                channelId: e.channel_id,
            });
        },
    ),
    W(
        ["MESSAGE_ACK"],
        (e) => v.o.loadGuildFromChannelId(e.channel_id),
        (e) => {
            q({
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
        q({
            type: "GUILD_FEATURE_ACK",
            id: e.resource_id,
            ackType: e.ack_type,
            ackedId: e.entity_id,
        });
    }),
    Y(["USER_NON_CHANNEL_ACK"], (e) => {
        q({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e.ack_type,
            ackedId: e.entity_id,
        });
    }),
    W(
        ["CHANNEL_PINS_ACK"],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            q({
                type: "CHANNEL_PINS_ACK",
                channelId: e.channel_id,
                timestamp: e.timestamp,
                version: e.version,
            });
        },
    ),
    W(
        ["CHANNEL_PINS_UPDATE"],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            q({
                type: "CHANNEL_PINS_UPDATE",
                channelId: e.channel_id,
                lastPinTimestamp: e.last_pin_timestamp,
            });
        },
    ),
    W(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            q({
                type: t,
                channel: (0, b.q_)(e),
            });
        },
    ),
    Y(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        q({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            status: e.status,
        });
    }),
    Y(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        var n;
        q({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            voiceStartTime: null != (n = e.voice_start_time) ? n : void 0,
        });
    }),
    Y(["CHANNEL_STATUSES"], (e, t) => {
        q({
            type: t,
            guildId: e.guild_id,
            channels: e.channels,
        });
    }),
    Y(["CHANNEL_INFO"], (e, t) => {
        q({
            type: t,
            guildId: e.guild_id,
            channels: e.channels.map((e) => ({
                id: e.id,
                status: e.status,
                voiceStartTime: e.voice_start_time,
            })),
        });
    }),
    Y(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        q({
            type: t,
            guildId: e.guild_id,
            channelId: e.channel_id,
            online: e.presence_count,
            total: e.member_count,
        });
    }),
    W(
        ["CHANNEL_UPDATE"],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            B.add(e);
        },
    ),
    W(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n } = e,
                r = k(e, ["newly_created"]);
            q({
                type: t,
                isNewlyCreated: n,
                channel: (0, b.q_)(r),
            });
        },
    ),
    W(
        ["THREAD_LIST_SYNC"],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            q({
                type: "THREAD_LIST_SYNC",
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = v.Z.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, b.q_)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? i().map(e.members, m.Z) : void 0,
                channelIds: e.channel_ids,
            });
        },
    ),
    Y(["THREAD_MEMBER_UPDATE"], (e) => {
        q({
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
        var t;
        q({
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
    Y(["FORUM_UNREADS"], (e) => {
        e.permission_denied ||
            q({
                type: "FORUM_UNREADS",
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({
                    threadId: e.thread_id,
                    missing: e.missing,
                    count: e.count,
                })),
            });
    }),
    Y(["SOUNDBOARD_SOUNDS"], (e) => {
        Z.add(e);
    }),
    Y(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = v.Z.getBasicChannel(e.channel_id);
        q({
            type: t,
            channelId: e.channel_id,
            user: e.user,
            nick: e.nick,
            isMember: null != n,
        });
    }),
    W(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : v.o.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable)
                q({
                    type: "GUILD_UNAVAILABLE",
                    guildId: e.id,
                });
            else {
                let t = P.J2(e);
                s.Z.createGuild(t),
                    q({
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
    Y(["GUILD_UPDATE"], (e) => {
        q({
            type: "GUILD_UPDATE",
            guild: e,
        }),
            e.unavailable &&
                q({
                    type: "GUILD_UNAVAILABLE",
                    guildId: e.id,
                });
    }),
    Y(["GUILD_DELETE"], (e) => {
        q({
            type: "GUILD_DELETE",
            guild: e,
        }),
            e.geo_restricted
                ? q({
                      type: "GUILD_GEO_RESTRICTED",
                      guildId: e.id,
                      icon: e.icon,
                      name: e.name,
                  })
                : e.unavailable &&
                  q({
                      type: "GUILD_UNAVAILABLE",
                      guildId: e.id,
                  });
    }),
    Y(["GUILD_MEMBERS_CHUNK"], (e) => {
        a.ZP.Emitter.batched(() => {
            F.add({
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
                        return $({
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
    Y(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        a.ZP.Emitter.batched(() => {
            q({
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
                        return $({
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
    Y(
        ["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"],
        (e, t) => {
            q({
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
    W(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            q({
                type: t,
                guildId: e.guild_id,
                role: e.role,
            });
        },
    ),
    W(
        ["GUILD_ROLE_DELETE"],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            q({
                type: "GUILD_ROLE_DELETE",
                guildId: e.guild_id,
                roleId: e.role_id,
                version: e.version,
            });
        },
    ),
    Y(["GUILD_EMOJIS_UPDATE"], (e) => {
        q({
            type: "GUILD_EMOJIS_UPDATE",
            guildId: e.guild_id,
            emojis: e.emojis,
        });
    }),
    Y(["GUILD_STICKERS_UPDATE"], (e) => {
        q({
            type: "GUILD_STICKERS_UPDATE",
            guildId: e.guild_id,
            stickers: e.stickers,
        });
    }),
    Y(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        q({
            type: "GUILD_INTEGRATIONS_UPDATE",
            guildId: e.guild_id,
        });
    }),
    Y(["INTEGRATION_CREATE"], (e) => {
        q({
            type: "INTEGRATION_CREATE",
            application: e.application,
            guildId: e.guild_id,
        });
    }),
    Y(["INTEGRATION_DELETE"], (e) => {
        q({
            type: "INTEGRATION_DELETE",
            applicationId: e.application_id,
            guildId: e.guild_id,
        });
    }),
    Y(["USER_UPDATE"], (e) => {
        q({
            type: "CURRENT_USER_UPDATE",
            user: e,
        });
    }),
    Y(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
        let t = (0, E.kI)(e.settings.type, e.settings.proto);
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
            q({
                type: "USER_SETTINGS_PROTO_UPDATE",
                settings: {
                    proto: t,
                    type: e.settings.type,
                },
                partial: e.partial,
            });
        }
    }),
    Y(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        q({
            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
            userGuildSettings: [e],
        });
    }),
    Y(["USER_CONNECTIONS_UPDATE"], () => {
        q({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    Y(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        q({
            type: "USER_REQUIRED_ACTION_UPDATE",
            requiredAction: e.required_action,
        });
    }),
    Y(["USER_NOTE_UPDATE"], (e) => {
        q(L({ type: "USER_NOTE_UPDATE" }, e));
    }),
    Y(["RELATIONSHIP_ADD"], (e) => {
        q({
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
        q({
            type: "RELATIONSHIP_REMOVE",
            relationship: e,
        });
    }),
    Y(["RELATIONSHIP_UPDATE"], (e) => {
        q({
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
        q({
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
        q({
            type: "GAME_RELATIONSHIP_REMOVE",
            userId: e.id,
            applicationId: e.application_id,
        });
    }),
    Y(["PRESENCE_UPDATE"], (e) => {
        $({
            guildId: e.guild_id,
            user: e.user,
            status: e.status,
            activities: e.activities,
            hiddenActivities: e.hidden_activities,
            clientStatus: e.client_status,
            processedAtTimestamp: e.processed_at_timestamp,
        });
    }),
    Y(["PRESENCES_REPLACE"], (e) => {
        q({
            type: "PRESENCES_REPLACE",
            presences: e,
        });
    }),
    Y(["SESSIONS_REPLACE"], (e) => {
        q({
            type: "SESSIONS_REPLACE",
            sessions: J(e),
        });
    }),
    Y(["VOICE_STATE_UPDATE"], (e) => {
        z([e]);
    }),
    Y(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        z(e.voice_states);
    }),
    Y(["VOICE_SERVER_UPDATE"], (e) => {
        q({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    Y(["CALL_CREATE"], (e) => {
        q({
            type: "CALL_CREATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing,
        });
        let t = e.voice_states;
        null != t &&
            q({
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
    Y(["CALL_UPDATE"], (e) => {
        q({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing,
        });
    }),
    Y(["CALL_DELETE"], (e) => {
        q({
            type: "CALL_DELETE",
            channelId: e.channel_id,
            unavailable: e.unavailable,
        });
    }),
    Y(["OAUTH2_TOKEN_CREATE"], (e) => {
        q({
            type: "OAUTH2_TOKEN_CREATE",
            id: e.id,
            scopes: e.scopes,
            application: e.application,
        });
    }),
    Y(["OAUTH2_TOKEN_DELETE"], (e) => {
        q({
            type: "OAUTH2_TOKEN_DELETE",
            id: e.id,
            applicationId: e.application_id,
        });
    }),
    Y(["OAUTH2_TOKEN_REVOKE"], (e) => {
        q({
            type: "OAUTH2_TOKEN_REVOKE",
            accessToken: e.access_token,
        });
    }),
    Y(["RECENT_MENTION_DELETE"], (e) => {
        q({
            type: "RECENT_MENTION_DELETE",
            id: e.message_id,
        });
    }),
    Y(["SAVED_MESSAGE_CREATE"], (e) => {
        q({
            type: "SAVED_MESSAGE_CREATE",
            savedMessage: (0, h.jk)(e),
        });
    }),
    Y(["SAVED_MESSAGE_DELETE"], (e) => {
        q({
            type: "SAVED_MESSAGE_DELETE",
            savedMessageData: (0, h.$_)(e),
        });
    }),
    Y(["FRIEND_SUGGESTION_CREATE"], (e) => {
        q({
            type: "FRIEND_SUGGESTION_CREATE",
            suggestion: e,
        });
    }),
    Y(["FRIEND_SUGGESTION_DELETE"], (e) => {
        q({
            type: "FRIEND_SUGGESTION_DELETE",
            suggestedUserId: e.suggested_user_id,
        });
    }),
    Y(["WEBHOOKS_UPDATE"], (e) => {
        q({
            type: "WEBHOOKS_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
        });
    }),
    Y(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
        q({
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
        q({
            type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: {
                id: e.answer_id,
                name: "",
            },
            reactionType: p.O.VOTE,
        });
    }),
    Y(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        q({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.votes.map((e) =>
                j(L({}, e), {
                    emoji: {
                        id: e.answer_id,
                        name: "",
                    },
                    reactionType: p.O.VOTE,
                }),
            ),
        });
    }),
    Y(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        q({
            type: "MESSAGE_REACTION_REMOVE_ALL",
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    Y(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        q({
            type: "MESSAGE_REACTION_REMOVE_EMOJI",
            channelId: e.channel_id,
            messageId: e.message_id,
            emoji: e.emoji,
        });
    }),
    Y(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        q({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    Y(["PAYMENT_UPDATE"], (e) => {
        q({
            type: "PAYMENT_UPDATE",
            payment: e,
        });
    }),
    Y(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        q({
            type: t,
            entitlement: e,
        });
    }),
    Y(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        T.Z.hasLayers() && (n(355467).tZ(), l.Gn(C.Z.getFetchedSKUIDs()));
    }),
    Y(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        c.k(), T.Z.hasLayers() && n(355467).jg();
    }),
    Y(["WISHLIST_ITEM_PURCHASED"], (e) => {
        q({
            type: "WISHLIST_ITEM_PURCHASED",
            recipientId: e.recipient_id,
            skuId: e.sku_id,
        });
    }),
    Y(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        q({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: y.Z.createFromServer(e, N.Z.getSubscriptionById(e.subscription_id)),
        });
    }),
    Y(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        q({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: y.Z.createFromServer(e, N.Z.getSubscriptionById(e.subscription_id)),
        });
    }),
    Y(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        q({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    Y(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        q({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    Y(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, R.L)().then((t) => {
            let n = e.purchase_token_hash;
            n === t &&
                q({
                    type: "USER_PAYMENT_CLIENT_ADD",
                    purchaseTokenHash: n,
                    expiresAt: e.expires_at,
                });
        });
    }),
    Y(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        a.ZP.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((X(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: r } = n;
                $({
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
                q({
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
        q({
            type: "GIFT_CODE_UPDATE",
            uses: e.uses,
            code: e.code,
        });
    }),
    Y(["GIFT_CODE_CREATE"], (e) => {
        q({
            type: "GIFT_CODE_CREATE",
            giftCode: e,
        });
    }),
    Y(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        q({
            type: "LIBRARY_APPLICATION_UPDATE",
            libraryApplication: e,
        });
    }),
    Y(["STREAM_CREATE"], (e) => {
        q({
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
        q({
            type: "STREAM_SERVER_UPDATE",
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    Y(["STREAM_UPDATE"], (e) => {
        q({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    Y(["STREAM_DELETE"], (e) => {
        q({
            type: "STREAM_DELETE",
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason,
        });
    }),
    Y(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
        q({
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
        q({
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
        q({
            type: "NOTIFICATION_CENTER_ITEM_CREATE",
            item: e,
        });
    }),
    Y(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        q({
            type: "NOTIFICATION_CENTER_ITEM_DELETE",
            id: e.id,
        });
    }),
    Y(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        q({
            type: "NOTIFICATION_CENTER_ITEMS_ACK",
            ids: [e.id],
            optimistic: !1,
        });
    }),
    Y(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        q({
            type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
            item_enum: e.item_enum,
        });
    }),
    Y(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        q({
            type: "QUESTS_USER_STATUS_UPDATE",
            user_status: e.user_status,
        });
    }),
    Y(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        q({
            type: "QUESTS_USER_COMPLETION_UPDATE",
            quest_enrollment_blocked_until: e.quest_enrollment_blocked_until,
        });
    }),
    Y(["QUEST_PREVIEW_UPDATE"], (e) => {
        q({
            type: "QUEST_PREVIEW_UPDATE",
            quest_id: e.quest_id,
        });
    }),
    Y(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        q({
            type: t,
            guildId: e.guild_id,
        });
    }),
    Y(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        q({
            type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
            guildId: e.guild_id,
            version: e.version,
        });
    }),
    Y(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        q({
            type: "GUILD_JOIN_REQUEST_CREATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id,
        });
    }),
    Y(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        q({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id,
        });
    }),
    Y(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        q({
            type: "GUILD_JOIN_REQUEST_DELETE",
            id: e.id,
            userId: e.user_id,
            guildId: e.guild_id,
        });
    }),
    Y(["INTERACTION_CREATE"], (e) => {
        q({
            type: "INTERACTION_CREATE",
            interactionId: e.id,
            nonce: e.nonce,
        });
    }),
    Y(["INTERACTION_SUCCESS"], (e) => {
        q({
            type: "INTERACTION_SUCCESS",
            interactionId: e.id,
            nonce: e.nonce,
        });
    }),
    Y(["INTERACTION_FAILURE"], (e) => {
        q({
            type: "INTERACTION_FAILURE",
            nonce: e.nonce,
            reasonCode: e.reason_code,
        });
    }),
    Y(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        q({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
            choices: e.choices,
            nonce: e.nonce,
        });
    }),
    Y(["INTERACTION_MODAL_CREATE"], (e) => {
        q({
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
    Y(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
        q({
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
        q({
            type: "STAGE_INSTANCE_CREATE",
            instance: e,
        });
    }),
    Y(["STAGE_INSTANCE_UPDATE"], (e) => {
        q({
            type: "STAGE_INSTANCE_UPDATE",
            instance: e,
        });
    }),
    Y(["STAGE_INSTANCE_DELETE"], (e) => {
        q({
            type: "STAGE_INSTANCE_DELETE",
            instance: e,
        });
    }),
    Y(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        q({
            type: "GUILD_SCHEDULED_EVENT_CREATE",
            guildScheduledEvent: e,
        });
    }),
    Y(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        q({
            type: "GUILD_SCHEDULED_EVENT_UPDATE",
            guildScheduledEvent: e,
        });
    }),
    Y(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        q({
            type: "GUILD_SCHEDULED_EVENT_DELETE",
            guildScheduledEvent: e,
        });
    }),
    Y(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        q({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
            eventException: e,
        });
    }),
    Y(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        q({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
            eventException: e,
        });
    }),
    Y(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        q({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
            eventException: e,
        });
    }),
    Y(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        q({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
            eventId: e.event_id,
        });
    }),
    Y(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        q({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    Y(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        q({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    Y(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        q({
            type: "GUILD_DIRECTORY_ENTRY_CREATE",
            channelId: e.directory_channel_id,
            entry: e,
        });
    }),
    Y(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        q({
            type: "GUILD_DIRECTORY_ENTRY_UPDATE",
            channelId: e.directory_channel_id,
            entry: e,
        });
    }),
    Y(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        q({
            type: "GUILD_DIRECTORY_ENTRY_DELETE",
            channelId: e.directory_channel_id,
            guildId: e.entity_id,
        });
    }),
    Y(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        q({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    Y(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
        q({
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
    Y(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        q({
            type: "GUILD_SOUNDBOARD_SOUND_CREATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new O.Z(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    Y(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        q({
            type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new O.Z(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available,
            },
        });
    }),
    Y(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        q({
            type: "GUILD_SOUNDBOARD_SOUND_DELETE",
            guildId: e.guild_id,
            soundId: e.sound_id,
        });
    }),
    Y(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
        q({
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
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            q({
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
        q({
            type: "AUTH_SESSION_CHANGE",
            authSessionIdHash: e.auth_session_id_hash,
        });
    }),
    Y(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        q({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    Y(["USER_CONNECTIONS_CALLBACK"], (e) => {
        q({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    Y(["DELETED_ENTITY_IDS"], (e) => {
        q(L({ type: "DELETED_ENTITY_IDS" }, e));
    }),
    W(
        ["CHANNEL_SYNC"],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            e.channels.forEach((e) => {
                B.add(e);
            }),
                q({
                    type: "CHANNEL_SYNC",
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check,
                });
        },
    ),
    Y(["CONSOLE_COMMAND_UPDATE"], (e) => {
        q({
            type: "CONSOLE_COMMAND_UPDATE",
            id: e.id,
            result: e.result,
            error: e.error,
        });
    }),
    W(
        ["PASSIVE_UPDATE_V2"],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            q({
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
    Y(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        q({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    Y(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        q({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    Y(["LAST_MESSAGES"], (e) => {
        q({
            type: "MESSAGE_PREVIEWS_LOADED",
            guildId: e.guild_id,
            messages: e.messages,
        });
    }),
    Y(["AUTHENTICATOR_UPDATE"], (e) => {
        q({
            type: "AUTHENTICATOR_UPDATE",
            credential: e,
        });
    }),
    Y(["AUTHENTICATOR_CREATE"], (e) => {
        q({
            type: "AUTHENTICATOR_CREATE",
            credential: e,
        });
    }),
    Y(["AUTHENTICATOR_DELETE"], (e) => {
        q({
            type: "AUTHENTICATOR_DELETE",
            credential: e,
        });
    }),
    Y(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        q({
            type: "NOTIFICATION_SETTINGS_UPDATE",
            settings: { flags: e.flags },
        });
    }),
    Y(["GAME_INVITE_CREATE"], (e) => {
        q({
            type: "GAME_INVITE_CREATE",
            gameInvite: e,
        });
    }),
    Y(["GAME_INVITE_DELETE"], (e) => {
        q({
            type: "GAME_INVITE_DELETE",
            inviteId: e.invite_id,
        });
    }),
    Y(["GAME_INVITE_DELETE_MANY"], (e) => {
        q({
            type: "GAME_INVITE_DELETE_MANY",
            inviteIds: e.invite_ids,
        });
    }),
    Y(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        q(L({ type: "CONVERSATION_SUMMARY_UPDATE" }, e));
    }),
    Y(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        q({
            type: "PREMIUM_MARKETING_PREVIEW",
            data: e,
        });
    }),
    Y(["USER_APPLICATION_UPDATE"], (e) => {
        q({
            type: "USER_APPLICATION_UPDATE",
            applicationId: e.application_id,
        });
    }),
    Y(["USER_APPLICATION_REMOVE"], (e) => {
        q({
            type: "USER_APPLICATION_REMOVE",
            applicationId: e.application_id,
        });
    }),
    Y(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        q({
            type: "DM_SETTINGS_UPSELL_SHOW",
            guildId: e.guild_id,
        });
    }),
    Y(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        q({
            type: "CONTENT_INVENTORY_INBOX_STALE",
            refreshAfterMs: e.refresh_after_ms,
        });
    }),
    Y(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        q({
            type: "VIRTUAL_CURRENCY_BALANCE_UPDATE",
            balance: e.balance,
        });
    }),
    Y(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        q({
            type: t,
            guildId: e.guild_id,
            entitlements: e.entitlements,
        });
    }),
    Y(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        q({
            type: t,
            guildId: e.guild_id,
            gameServer: e.game_server,
        });
    }),
    Y(["GAME_SERVER_DELETE"], (e, t) => {
        q({
            type: t,
            guildId: e.guild_id,
            gameServerId: e.game_server_id,
        });
    }),
    Y(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        q({
            type: t,
            guildId: e.guild_id,
        });
    }),
    Y(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        q({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    Y(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        q({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
        });
    });
