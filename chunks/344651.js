n.d(t, { Z: () => q }), n(539854), n(388685), n(997841), n(415506);
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
let Z = new d.Z("ConnectionStore");
function F(e) {
    return e.map((e) => {
        var t;
        let n = null == (t = e.timestamps) ? void 0 : t.end,
            r = e.created_at;
        return null != n && null != r ? k(j({}, e), { timestamps: k(j({}, e.timestamps), { isCountDown: n > r }) }) : e;
    });
}
let B = new D.Z(
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
    V = new D.Z(
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
    H = new D.Z(
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
    Y = new D.Z(
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
    W = {};
function K(e, t) {
    for (let n of e)
        W[n] = {
            preload: () => null,
            dispatch: t,
        };
}
function z(e, t, n) {
    for (let r of e)
        W[r] = {
            preload: t,
            dispatch: n,
        };
}
function q(e) {
    return W[e];
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
                oldChannelId: A.Z.getUserVoiceChannelId(i.guild_id, i.user_id),
            });
    }
    X({
        type: "VOICE_STATE_UPDATES",
        voiceStates: t,
    });
}
function X(e) {
    o.Z.dispatch(e).catch((t) =>
        x.Wb.resetSocketOnDispatchError({
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
        X({
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
            activities: F(null != (t = e.activities) ? t : []),
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
    Y.add({
        guildId: t,
        user: n,
        status: r,
        clientStatus: o,
        activities: F(null != i ? i : []),
        hiddenActivities: a,
        processedAtTimestamp: s,
    });
}
z(
    ["INITIAL_GUILD"],
    (e) => ("full" === e.data_mode ? null : S.o.loadGuildIds([e.id])),
    (e) => {
        E.Z.initialGuild.measure(() => {
            a.ZP.Emitter.batched(() => {
                let t = w.Fx(e, x.Wb.identifyStartTime);
                null != C.default.getCurrentUser() &&
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
                    Z.log("Dispatched INITIAL_GUILD ".concat(e.id)));
            });
        });
    },
),
    K(["READY_SUPPLEMENTAL"], (e) => {
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
                    x.GC.update();
            });
        }),
            setTimeout(() => X({ type: "POST_CONNECTION_OPEN" }), 2000);
    }),
    z(
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
            if (e.user.bot) return void X({ type: "LOGOUT" });
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
                            notificationSettings: { flags: e.notification_settings.flags },
                            geoRestrictedGuilds: a,
                            explicitContentScanVersion: e.explicit_content_scan_version,
                            failedStates: e.failed_states,
                            linkedUsers: null != (l = e.linked_users) ? l : void 0,
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
                        x.RR.update(),
                        x.GC.update();
                });
            });
        },
    ),
    K(["STATE_UPDATE"], (e) => {
        var t, n;
        X({
            type: "CONNECTION_OPEN_STATE_UPDATE",
            apexExperiments: null != (t = e.apex_experiments) ? t : void 0,
            userActivities: null != (n = e.user_activities) ? n : void 0,
        });
    }),
    K(["EXPERIMENT_SESSION_OVERRIDE_CREATE"], (e) => {
        o.Z.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE",
            experimentName: e.experiment_name,
            variantId: e.variant_id,
        });
    }),
    K(["EXPERIMENT_SESSION_OVERRIDE_DELETE"], (e) => {
        o.Z.dispatch({
            type: "APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE",
            experimentName: e.experiment_name,
        });
    }),
    K(["RESUMED"], () => {
        x.RR.forceUpdate(), x.GC.forceUpdate(), X({ type: "CONNECTION_RESUMED" });
    }),
    K(["TYPING_START"], (e) => {
        null != e.member && J(e.guild_id, e.member.user, e.member),
            X({
                type: "TYPING_START",
                channelId: e.channel_id,
                userId: e.user_id,
            });
    }),
    K(["GUILD_RING_START"], (e) => {
        X({
            type: "GUILD_RING_START",
            ringing: e.ringing,
            channelId: e.channel_id,
            guildId: e.guild_id,
        });
    }),
    K(["GUILD_RING_STOP"], (e) => {
        X({
            type: "GUILD_RING_STOP",
            ringing: e.ringing,
            channelId: e.channel_id,
            guildId: e.guild_id,
        });
    }),
    K(["ACTIVITY_START"], (e) => {
        X({
            type: "ACTIVITY_START",
            userId: e.user_id,
            activity: e.activity,
        });
    }),
    K(["ACTIVITY_USER_ACTION"], (e) => {
        X({
            type: "ACTIVITY_USER_ACTION",
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    z(
        ["MESSAGE_CREATE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
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
    z(
        ["MESSAGE_UPDATE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            $(e),
                X({
                    type: "MESSAGE_UPDATE",
                    guildId: e.guild_id,
                    message: e,
                });
        },
    ),
    z(
        ["MESSAGE_DELETE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            X({
                type: "MESSAGE_DELETE",
                guildId: e.guild_id,
                id: e.id,
                channelId: e.channel_id,
            });
        },
    ),
    z(
        ["MESSAGE_DELETE_BULK"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            X({
                type: "MESSAGE_DELETE_BULK",
                guildId: e.guild_id,
                ids: e.ids,
                channelId: e.channel_id,
            });
        },
    ),
    z(
        ["MESSAGE_ACK"],
        (e) => S.o.loadGuildFromChannelId(e.channel_id),
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
    K(["GUILD_FEATURE_ACK"], (e) => {
        X({
            type: "GUILD_FEATURE_ACK",
            id: e.resource_id,
            ackType: e.ack_type,
            ackedId: e.entity_id,
        });
    }),
    K(["USER_NON_CHANNEL_ACK"], (e) => {
        X({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e.ack_type,
            ackedId: e.entity_id,
        });
    }),
    z(
        ["CHANNEL_PINS_ACK"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            X({
                type: "CHANNEL_PINS_ACK",
                channelId: e.channel_id,
                timestamp: e.timestamp,
                version: e.version,
            });
        },
    ),
    z(
        ["CHANNEL_PINS_UPDATE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            X({
                type: "CHANNEL_PINS_UPDATE",
                channelId: e.channel_id,
                lastPinTimestamp: e.last_pin_timestamp,
            });
        },
    ),
    z(
        ["CHANNEL_CREATE", "CHANNEL_DELETE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            X({
                type: t,
                channel: (0, y.q_)(e),
            });
        },
    ),
    K(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
        X({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            status: e.status,
        });
    }),
    K(["VOICE_CHANNEL_START_TIME_UPDATE"], (e, t) => {
        var n;
        X({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            voiceStartTime: null != (n = e.voice_start_time) ? n : void 0,
        });
    }),
    K(["CHANNEL_STATUSES"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
            channels: e.channels,
        });
    }),
    K(["CHANNEL_INFO"], (e, t) => {
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
    K(["CHANNEL_MEMBER_COUNT_UPDATE"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
            channelId: e.channel_id,
            online: e.presence_count,
            total: e.member_count,
        });
    }),
    z(
        ["CHANNEL_UPDATE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            B.add(e);
        },
    ),
    z(
        ["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n } = e,
                r = U(e, ["newly_created"]);
            X({
                type: t,
                isNewlyCreated: n,
                channel: (0, y.q_)(r),
            });
        },
    ),
    z(
        ["THREAD_LIST_SYNC"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            X({
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
    K(["THREAD_MEMBER_UPDATE"], (e) => {
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
    K(["THREAD_MEMBERS_UPDATE"], (e) => {
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
    K(["FORUM_UNREADS"], (e) => {
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
    K(["SOUNDBOARD_SOUNDS"], (e) => {
        V.add(e);
    }),
    K(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
        let n = S.Z.getBasicChannel(e.channel_id);
        X({
            type: t,
            channelId: e.channel_id,
            user: e.user,
            nick: e.nick,
            isMember: null != n,
        });
    }),
    z(
        ["GUILD_CREATE"],
        (e) => ("full" === e.data_mode ? null : S.o.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable)
                X({
                    type: "GUILD_UNAVAILABLE",
                    guildId: e.id,
                });
            else {
                let t = w.J2(e);
                s.Z.createGuild(t),
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
    K(["GUILD_UPDATE"], (e) => {
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
    K(["GUILD_DELETE"], (e) => {
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
    K(["GUILD_MEMBERS_CHUNK"], (e) => {
        a.ZP.Emitter.batched(() => {
            H.add({
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
                D.Z.flush("GUILD_MEMBERS_CHUNK");
        });
    }),
    K(["THREAD_MEMBER_LIST_UPDATE"], (e) => {
        a.ZP.Emitter.batched(() => {
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
                D.Z.flush();
        });
    }),
    K(
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
                displayNameStyles: (0, f.bN)(e.display_name_styles),
            });
        },
    ),
    z(
        ["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            X({
                type: t,
                guildId: e.guild_id,
                role: e.role,
            });
        },
    ),
    z(
        ["GUILD_ROLE_DELETE"],
        (e) => S.o.loadGuildIds([e.guild_id]),
        (e) => {
            X({
                type: "GUILD_ROLE_DELETE",
                guildId: e.guild_id,
                roleId: e.role_id,
                version: e.version,
            });
        },
    ),
    K(["GUILD_EMOJIS_UPDATE"], (e) => {
        X({
            type: "GUILD_EMOJIS_UPDATE",
            guildId: e.guild_id,
            emojis: e.emojis,
        });
    }),
    K(["GUILD_STICKERS_UPDATE"], (e) => {
        X({
            type: "GUILD_STICKERS_UPDATE",
            guildId: e.guild_id,
            stickers: e.stickers,
        });
    }),
    K(["GUILD_INTEGRATIONS_UPDATE"], (e) => {
        X({
            type: "GUILD_INTEGRATIONS_UPDATE",
            guildId: e.guild_id,
        });
    }),
    K(["INTEGRATION_CREATE"], (e) => {
        X({
            type: "INTEGRATION_CREATE",
            application: e.application,
            guildId: e.guild_id,
        });
    }),
    K(["INTEGRATION_DELETE"], (e) => {
        X({
            type: "INTEGRATION_DELETE",
            applicationId: e.application_id,
            guildId: e.guild_id,
        });
    }),
    K(["USER_UPDATE"], (e) => {
        X({
            type: "CURRENT_USER_UPDATE",
            user: e,
        });
    }),
    K(["USER_SETTINGS_PROTO_UPDATE"], (e) => {
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
    K(["USER_GUILD_SETTINGS_UPDATE"], (e) => {
        X({
            type: "USER_GUILD_SETTINGS_FULL_UPDATE",
            userGuildSettings: [e],
        });
    }),
    K(["USER_CONNECTIONS_UPDATE"], () => {
        X({ type: "USER_CONNECTIONS_UPDATE" });
    }),
    K(["USER_REQUIRED_ACTION_UPDATE"], (e) => {
        X({
            type: "USER_REQUIRED_ACTION_UPDATE",
            requiredAction: e.required_action,
        });
    }),
    K(["USER_NOTE_UPDATE"], (e) => {
        X(j({ type: "USER_NOTE_UPDATE" }, e));
    }),
    K(["RELATIONSHIP_ADD"], (e) => {
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
    K(["RELATIONSHIP_REMOVE"], (e) => {
        X({
            type: "RELATIONSHIP_REMOVE",
            relationship: e,
        });
    }),
    K(["RELATIONSHIP_UPDATE"], (e) => {
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
    K(["GAME_RELATIONSHIP_ADD"], (e) => {
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
    K(["GAME_RELATIONSHIP_REMOVE"], (e) => {
        X({
            type: "GAME_RELATIONSHIP_REMOVE",
            userId: e.id,
            applicationId: e.application_id,
        });
    }),
    K(["PRESENCE_UPDATE"], (e) => {
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
    K(["PRESENCES_REPLACE"], (e) => {
        X({
            type: "PRESENCES_REPLACE",
            presences: e,
        });
    }),
    K(["SESSIONS_REPLACE"], (e) => {
        X({
            type: "SESSIONS_REPLACE",
            sessions: ee(e),
        });
    }),
    K(["VOICE_STATE_UPDATE"], (e) => {
        Q([e]);
    }),
    K(["VOICE_STATE_UPDATE_BATCH"], (e) => {
        Q(e.voice_states);
    }),
    K(["VOICE_SERVER_UPDATE"], (e) => {
        X({
            type: "VOICE_SERVER_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    K(["CALL_CREATE"], (e) => {
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
    K(["CALL_UPDATE"], (e) => {
        X({
            type: "CALL_UPDATE",
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing,
        });
    }),
    K(["CALL_DELETE"], (e) => {
        X({
            type: "CALL_DELETE",
            channelId: e.channel_id,
            unavailable: e.unavailable,
        });
    }),
    K(["OAUTH2_TOKEN_CREATE"], (e) => {
        X({
            type: "OAUTH2_TOKEN_CREATE",
            id: e.id,
            scopes: e.scopes,
            application: e.application,
        });
    }),
    K(["OAUTH2_TOKEN_DELETE"], (e) => {
        X({
            type: "OAUTH2_TOKEN_DELETE",
            id: e.id,
            applicationId: e.application_id,
        });
    }),
    K(["OAUTH2_TOKEN_REVOKE"], (e) => {
        X({
            type: "OAUTH2_TOKEN_REVOKE",
            accessToken: e.access_token,
        });
    }),
    K(["RECENT_MENTION_DELETE"], (e) => {
        X({
            type: "RECENT_MENTION_DELETE",
            id: e.message_id,
        });
    }),
    K(["SAVED_MESSAGE_CREATE"], (e) => {
        X({
            type: "SAVED_MESSAGE_CREATE",
            savedMessage: (0, h.jk)(e),
        });
    }),
    K(["SAVED_MESSAGE_DELETE"], (e) => {
        X({
            type: "SAVED_MESSAGE_DELETE",
            savedMessageData: (0, h.$_)(e),
        });
    }),
    K(["FRIEND_SUGGESTION_CREATE"], (e) => {
        X({
            type: "FRIEND_SUGGESTION_CREATE",
            suggestion: e,
        });
    }),
    K(["FRIEND_SUGGESTION_DELETE"], (e) => {
        X({
            type: "FRIEND_SUGGESTION_DELETE",
            suggestedUserId: e.suggested_user_id,
        });
    }),
    K(["WEBHOOKS_UPDATE"], (e) => {
        X({
            type: "WEBHOOKS_UPDATE",
            guildId: e.guild_id,
            channelId: e.channel_id,
        });
    }),
    K(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
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
    K(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
        X({
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
    K(["MESSAGE_POLL_VOTE_ADD_MANY"], (e) => {
        X({
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
    K(["MESSAGE_REACTION_REMOVE_ALL"], (e) => {
        X({
            type: "MESSAGE_REACTION_REMOVE_ALL",
            channelId: e.channel_id,
            messageId: e.message_id,
        });
    }),
    K(["MESSAGE_REACTION_REMOVE_EMOJI"], (e) => {
        X({
            type: "MESSAGE_REACTION_REMOVE_EMOJI",
            channelId: e.channel_id,
            messageId: e.message_id,
            emoji: e.emoji,
        });
    }),
    K(["MESSAGE_REACTION_ADD_MANY"], (e) => {
        X({
            type: "MESSAGE_REACTION_ADD_MANY",
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions,
        });
    }),
    K(["PAYMENT_UPDATE"], (e) => {
        X({
            type: "PAYMENT_UPDATE",
            payment: e,
        });
    }),
    K(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
        X({
            type: t,
            entitlement: e,
        });
    }),
    K(["USER_PAYMENT_SOURCES_UPDATE"], () => {
        T.Z.hasLayers() && (n(355467).tZ(), l.Gn(N.Z.getFetchedSKUIDs()));
    }),
    K(["USER_SUBSCRIPTIONS_UPDATE"], () => {
        c.k(), T.Z.hasLayers() && n(355467).jg();
    }),
    K(["WISHLIST_ITEM_PURCHASED"], (e) => {
        X({
            type: "WISHLIST_ITEM_PURCHASED",
            recipientId: e.recipient_id,
            skuId: e.sku_id,
        });
    }),
    K(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], (e) => {
        X({
            type: "GUILD_BOOST_SLOT_CREATE",
            guildBoostSlot: O.Z.createFromServer(e, P.Z.getSubscriptionById(e.subscription_id)),
        });
    }),
    K(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], (e) => {
        X({
            type: "GUILD_BOOST_SLOT_UPDATE",
            guildBoostSlot: O.Z.createFromServer(e, P.Z.getSubscriptionById(e.subscription_id)),
        });
    }),
    K(["BILLING_POPUP_BRIDGE_CALLBACK"], (e) => {
        X({
            type: "BILLING_POPUP_BRIDGE_CALLBACK",
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query,
        });
    }),
    K(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], (e) => {
        X({
            type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id,
        });
    }),
    K(["USER_PAYMENT_CLIENT_ADD"], (e) => {
        (0, R.L)().then((t) => {
            let n = e.purchase_token_hash;
            n === t &&
                X({
                    type: "USER_PAYMENT_CLIENT_ADD",
                    purchaseTokenHash: n,
                    expiresAt: e.expires_at,
                });
        });
    }),
    K(["GUILD_MEMBER_LIST_UPDATE"], (e) => {
        a.ZP.Emitter.batched(() => {
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
                D.Z.flush(),
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
    K(["GIFT_CODE_UPDATE"], (e) => {
        X({
            type: "GIFT_CODE_UPDATE",
            uses: e.uses,
            code: e.code,
        });
    }),
    K(["GIFT_CODE_CREATE"], (e) => {
        X({
            type: "GIFT_CODE_CREATE",
            giftCode: e,
        });
    }),
    K(["LIBRARY_APPLICATION_UPDATE"], (e) => {
        X({
            type: "LIBRARY_APPLICATION_UPDATE",
            libraryApplication: e,
        });
    }),
    K(["STREAM_CREATE"], (e) => {
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
    K(["STREAM_SERVER_UPDATE"], (e) => {
        X({
            type: "STREAM_SERVER_UPDATE",
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token,
        });
    }),
    K(["STREAM_UPDATE"], (e) => {
        X({
            type: "STREAM_UPDATE",
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused,
        });
    }),
    K(["STREAM_DELETE"], (e) => {
        X({
            type: "STREAM_DELETE",
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason,
        });
    }),
    K(["GENERIC_PUSH_NOTIFICATION_SENT"], (e) => {
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
    K(["REACTION_NOTIFICATION_SENT"], (e) => {
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
    K(["NOTIFICATION_CENTER_ITEM_CREATE"], (e) => {
        X({
            type: "NOTIFICATION_CENTER_ITEM_CREATE",
            item: e,
        });
    }),
    K(["NOTIFICATION_CENTER_ITEM_DELETE"], (e) => {
        X({
            type: "NOTIFICATION_CENTER_ITEM_DELETE",
            id: e.id,
        });
    }),
    K(["NOTIFICATION_CENTER_ITEMS_ACK"], (e) => {
        X({
            type: "NOTIFICATION_CENTER_ITEMS_ACK",
            ids: [e.id],
            optimistic: !1,
        });
    }),
    K(["NOTIFICATION_CENTER_ITEM_COMPLETED"], (e) => {
        X({
            type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
            item_enum: e.item_enum,
        });
    }),
    K(["QUESTS_USER_STATUS_UPDATE"], (e) => {
        X({
            type: "QUESTS_USER_STATUS_UPDATE",
            user_status: e.user_status,
        });
    }),
    K(["QUESTS_USER_COMPLETION_UPDATE"], (e) => {
        X({
            type: "QUESTS_USER_COMPLETION_UPDATE",
            quest_enrollment_blocked_until: e.quest_enrollment_blocked_until,
        });
    }),
    K(["QUEST_PREVIEW_UPDATE"], (e) => {
        X({
            type: "QUEST_PREVIEW_UPDATE",
            quest_id: e.quest_id,
        });
    }),
    K(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
        });
    }),
    K(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], (e) => {
        X({
            type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
            guildId: e.guild_id,
            version: e.version,
        });
    }),
    K(["GUILD_JOIN_REQUEST_CREATE"], (e) => {
        X({
            type: "GUILD_JOIN_REQUEST_CREATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id,
        });
    }),
    K(["GUILD_JOIN_REQUEST_UPDATE"], (e) => {
        X({
            type: "GUILD_JOIN_REQUEST_UPDATE",
            request: e.request,
            status: e.status,
            guildId: e.guild_id,
        });
    }),
    K(["GUILD_JOIN_REQUEST_DELETE"], (e) => {
        X({
            type: "GUILD_JOIN_REQUEST_DELETE",
            id: e.id,
            userId: e.user_id,
            guildId: e.guild_id,
        });
    }),
    K(["INTERACTION_CREATE"], (e) => {
        X({
            type: "INTERACTION_CREATE",
            interactionId: e.id,
            nonce: e.nonce,
        });
    }),
    K(["INTERACTION_SUCCESS"], (e) => {
        X({
            type: "INTERACTION_SUCCESS",
            interactionId: e.id,
            nonce: e.nonce,
        });
    }),
    K(["INTERACTION_FAILURE"], (e) => {
        X({
            type: "INTERACTION_FAILURE",
            nonce: e.nonce,
            reasonCode: e.reason_code,
        });
    }),
    K(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], (e) => {
        X({
            type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
            choices: e.choices,
            nonce: e.nonce,
        });
    }),
    K(["INTERACTION_MODAL_CREATE"], (e) => {
        X({
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
    K(["INTERACTION_IFRAME_MODAL_CREATE"], (e) => {
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
    K(["STAGE_INSTANCE_CREATE"], (e) => {
        X({
            type: "STAGE_INSTANCE_CREATE",
            instance: e,
        });
    }),
    K(["STAGE_INSTANCE_UPDATE"], (e) => {
        X({
            type: "STAGE_INSTANCE_UPDATE",
            instance: e,
        });
    }),
    K(["STAGE_INSTANCE_DELETE"], (e) => {
        X({
            type: "STAGE_INSTANCE_DELETE",
            instance: e,
        });
    }),
    K(["GUILD_SCHEDULED_EVENT_CREATE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_CREATE",
            guildScheduledEvent: e,
        });
    }),
    K(["GUILD_SCHEDULED_EVENT_UPDATE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_UPDATE",
            guildScheduledEvent: e,
        });
    }),
    K(["GUILD_SCHEDULED_EVENT_DELETE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_DELETE",
            guildScheduledEvent: e,
        });
    }),
    K(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
            eventException: e,
        });
    }),
    K(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
            eventException: e,
        });
    }),
    K(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
            eventException: e,
        });
    }),
    K(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
            eventId: e.event_id,
        });
    }),
    K(["GUILD_SCHEDULED_EVENT_USER_ADD"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_USER_ADD",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    K(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], (e) => {
        X({
            type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response,
        });
    }),
    K(["GUILD_DIRECTORY_ENTRY_CREATE"], (e) => {
        X({
            type: "GUILD_DIRECTORY_ENTRY_CREATE",
            channelId: e.directory_channel_id,
            entry: e,
        });
    }),
    K(["GUILD_DIRECTORY_ENTRY_UPDATE"], (e) => {
        X({
            type: "GUILD_DIRECTORY_ENTRY_UPDATE",
            channelId: e.directory_channel_id,
            entry: e,
        });
    }),
    K(["GUILD_DIRECTORY_ENTRY_DELETE"], (e) => {
        X({
            type: "GUILD_DIRECTORY_ENTRY_DELETE",
            channelId: e.directory_channel_id,
            guildId: e.entity_id,
        });
    }),
    K(["AUTO_MODERATION_MENTION_RAID_DETECTION"], (e) => {
        X({
            type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until,
        });
    }),
    K(["VOICE_CHANNEL_EFFECT_SEND"], (e) => {
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
    K(["GUILD_SOUNDBOARD_SOUND_CREATE"], (e) => {
        X({
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
    K(["GUILD_SOUNDBOARD_SOUND_UPDATE"], (e) => {
        X({
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
    K(["GUILD_SOUNDBOARD_SOUND_DELETE"], (e) => {
        X({
            type: "GUILD_SOUNDBOARD_SOUND_DELETE",
            guildId: e.guild_id,
            soundId: e.sound_id,
        });
    }),
    K(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], (e) => {
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
    z(
        ["EMBEDDED_ACTIVITY_UPDATE_V2"],
        (e) => S.o.loadGuildIds([e.guild_id]),
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
    K(["AUTH_SESSION_CHANGE"], (e) => {
        X({
            type: "AUTH_SESSION_CHANGE",
            authSessionIdHash: e.auth_session_id_hash,
        });
    }),
    K(["USER_CONNECTIONS_LINK_CALLBACK"], (e) => {
        X({
            type: "USER_CONNECTIONS_LINK_CALLBACK",
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state,
        });
    }),
    K(["USER_CONNECTIONS_CALLBACK"], (e) => {
        X({
            type: "USER_CONNECTIONS_CALLBACK",
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params,
        });
    }),
    K(["DELETED_ENTITY_IDS"], (e) => {
        X(j({ type: "DELETED_ENTITY_IDS" }, e));
    }),
    z(
        ["CHANNEL_SYNC"],
        (e) => S.o.loadGuildIds([e.guild_id]),
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
    K(["CONSOLE_COMMAND_UPDATE"], (e) => {
        X({
            type: "CONSOLE_COMMAND_UPDATE",
            id: e.id,
            result: e.result,
            error: e.error,
        });
    }),
    z(
        ["PASSIVE_UPDATE_V2"],
        (e) => S.o.loadGuildIds([e.guild_id]),
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
    K(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], (e) => {
        X({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
            guildId: e.guild_id,
            restrictions: e.restrictions,
        });
    }),
    K(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], (e) => {
        X({
            type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id,
        });
    }),
    K(["LAST_MESSAGES"], (e) => {
        X({
            type: "MESSAGE_PREVIEWS_LOADED",
            guildId: e.guild_id,
            messages: e.messages,
        });
    }),
    K(["AUTHENTICATOR_UPDATE"], (e) => {
        X({
            type: "AUTHENTICATOR_UPDATE",
            credential: e,
        });
    }),
    K(["AUTHENTICATOR_CREATE"], (e) => {
        X({
            type: "AUTHENTICATOR_CREATE",
            credential: e,
        });
    }),
    K(["AUTHENTICATOR_DELETE"], (e) => {
        X({
            type: "AUTHENTICATOR_DELETE",
            credential: e,
        });
    }),
    K(["NOTIFICATION_SETTINGS_UPDATE"], (e) => {
        X({
            type: "NOTIFICATION_SETTINGS_UPDATE",
            settings: { flags: e.flags },
        });
    }),
    K(["CONVERSATION_SUMMARY_UPDATE"], (e) => {
        X(j({ type: "CONVERSATION_SUMMARY_UPDATE" }, e));
    }),
    K(["PREMIUM_MARKETING_PREVIEW"], (e) => {
        X({
            type: "PREMIUM_MARKETING_PREVIEW",
            data: e,
        });
    }),
    K(["USER_APPLICATION_UPDATE"], (e) => {
        X({
            type: "USER_APPLICATION_UPDATE",
            applicationId: e.application_id,
        });
    }),
    K(["USER_APPLICATION_REMOVE"], (e) => {
        X({
            type: "USER_APPLICATION_REMOVE",
            applicationId: e.application_id,
        });
    }),
    K(["DM_SETTINGS_UPSELL_SHOW"], (e) => {
        X({
            type: "DM_SETTINGS_UPSELL_SHOW",
            guildId: e.guild_id,
        });
    }),
    K(["CONTENT_INVENTORY_INBOX_STALE"], (e) => {
        X({
            type: "CONTENT_INVENTORY_INBOX_STALE",
            refreshAfterMs: e.refresh_after_ms,
        });
    }),
    K(["VIRTUAL_CURRENCY_BALANCE_UPDATE"], (e) => {
        X({
            type: "VIRTUAL_CURRENCY_BALANCE_UPDATE",
            balance: e.balance,
        });
    }),
    K(["GUILD_POWERUP_ENTITLEMENTS_CREATE", "GUILD_POWERUP_ENTITLEMENTS_DELETE"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
            entitlements: e.entitlements,
        });
    }),
    K(["GAME_SERVER_CREATE", "GAME_SERVER_UPDATE"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
            gameServer: e.game_server,
        });
    }),
    K(["GAME_SERVER_DELETE"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
            gameServerId: e.game_server_id,
        });
    }),
    K(["GUILD_APPLIED_BOOSTS_UPDATE"], (e, t) => {
        X({
            type: t,
            guildId: e.guild_id,
        });
    }),
    K(["USER_APPLICATION_IDENTITY_UPDATE"], (e, t) => {
        X({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
            username: e.username,
            avatar_hash: e.avatar_hash,
            metadata: e.metadata,
        });
    }),
    K(["USER_APPLICATION_IDENTITY_REMOVE"], (e, t) => {
        X({
            type: t,
            user_id: e.user_id,
            application_id: e.application_id,
        });
    }),
    K(["HAVEN_CONNECT"], (e, t) => {
        X({
            type: t,
            room: (0, p.CK)(e),
        });
    }),
    K(["HAVEN_DISCONNECT"], (e, t) => {
        X({
            type: t,
            userId: e.user_id,
            roomId: e.room_id,
        });
    }),
    K(["HAVEN_UPDATE"], (e, t) => {
        X({
            type: t,
            room: (0, p.CK)(e),
        });
    });
