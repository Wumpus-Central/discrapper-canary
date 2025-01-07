r.d(n, {
    Z: function () {
        return Y;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(789020);
var o = r(411104);
var l = r(392711),
    u = r.n(l);
r(724522);
var c = r(442837),
    d = r(570140),
    f = r(749210),
    _ = r(821849),
    h = r(232567),
    p = r(864106),
    m = r(710845),
    g = r(292419),
    E = r(566006),
    v = r(686478),
    I = r(952537),
    T = r(218543),
    b = r(48481),
    y = r(131704),
    S = r(209747),
    A = r(598077),
    N = r(592125),
    C = r(271383),
    R = r(819640),
    O = r(594174),
    D = r(979651),
    L = r(509545),
    x = r(78839),
    w = r(936101),
    P = r(868158),
    M = r(483012),
    k = r(955132);
let U = new m.Z('ConnectionStore'),
    B = new M.Z(
        k.Wb,
        (e, n) => {
            var r;
            e =
                null != e
                    ? e
                    : {
                          type: 'CHANNEL_UPDATES',
                          channels: []
                      };
            let i = (0, y.q_)(n),
                a = N.Z.getChannel(n.id),
                s =
                    null == a
                        ? void 0
                        : a.merge({
                              ...i,
                              recipients: a.recipients,
                              bitrate: null !== (r = i.bitrate) && void 0 !== r ? r : a.bitrate
                          });
            return e.channels.push(null != s ? s : i), e;
        },
        (e) => 'CHANNEL_UPDATE' !== e
    ),
    G = new M.Z(
        k.Wb,
        (e, n) => (
            (e =
                null == e
                    ? {
                          type: 'SOUNDBOARD_SOUNDS_RECEIVED',
                          updates: []
                      }
                    : e).updates.push({
                guildId: n.guild_id,
                sounds: n.soundboard_sounds.map((e) => ({
                    name: e.name,
                    soundId: e.sound_id,
                    emojiName: e.emoji_name,
                    emojiId: e.emoji_id,
                    userId: e.user_id,
                    volume: e.volume,
                    available: e.available,
                    guildId: n.guild_id
                }))
            }),
            e
        ),
        (e) => 'SOUNDBOARD_SOUNDS' !== e
    ),
    Z = new M.Z(
        k.Wb,
        (e, n) => (
            (e =
                null != e
                    ? e
                    : {
                          type: 'GUILD_MEMBERS_CHUNK_BATCH',
                          chunks: []
                      }).chunks.push(n),
            e
        ),
        (e) => 'GUILD_MEMBERS_CHUNK' !== e
    ),
    F = new M.Z(
        k.Wb,
        (e, n) => (
            (e =
                null == e
                    ? {
                          type: 'PRESENCE_UPDATES',
                          updates: []
                      }
                    : e).updates.push(n),
            e
        ),
        (e) => 'PRESENCE_UPDATE' !== e && 'GUILD_MEMBERS_CHUNK' !== e
    ),
    V = {};
function j(e, n) {
    for (let r of e)
        V[r] = {
            preload: () => null,
            dispatch: n
        };
}
function H(e, n, r) {
    for (let i of e)
        V[i] = {
            preload: n,
            dispatch: r
        };
}
function Y(e) {
    return V[e];
}
function W(e) {
    d.Z.dispatch(e).catch((n) =>
        k.Wb.resetSocketOnDispatchError({
            error: n,
            action: e.type
        })
    );
}
function K(e, n, r) {
    var i;
    let { roles: a, nick: s, avatar: o, avatar_decoration_data: l, flags: c, premium_since: d, pending: f, joined_at: _, communication_disabled_until: h, unusual_dm_activity_until: m } = r,
        g = C.ZP.getMember(e, n.id);
    if (!(null != g && g.nick === s && g.avatar === o && u().isEqual(g.roles, a) && (0, p.sr)(g.avatarDecoration, l)) || g.premiumSince !== d || g.isPending !== f || g.joinedAt !== _ || g.communicationDisabledUntil !== h || g.flags !== c || (null !== (i = g.unusualDMActivityUntil) && void 0 !== i ? i : null) !== (null != m ? m : null))
        W({
            type: 'GUILD_MEMBER_ADD',
            guildId: e,
            user: n,
            roles: a,
            nick: s,
            avatar: o,
            avatarDecoration: l,
            premiumSince: d,
            isPending: f,
            joinedAt: _,
            communicationDisabledUntil: h,
            unusualDMActivityUntil: m,
            flags: c
        });
}
function z(e) {
    let { member: n, mentions: r, author: i, guild_id: a } = e;
    null != n && null != a && K(a, i, n),
        null != r &&
            r.forEach((e) => {
                if (null != e.member && null != a) {
                    let { member: n } = e;
                    delete e.member, K(a, e, n);
                }
            });
}
function q(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: e.activities,
        active: !!e.active,
        clientInfo: e.client_info
    }));
}
function Q(e) {
    let { guildId: n, user: r, status: i, activities: a, clientStatus: s } = e;
    F.add({
        guildId: n,
        user: r,
        status: i,
        clientStatus: s,
        activities: a
    });
}
H(
    ['INITIAL_GUILD'],
    (e) => ('full' === e.data_mode ? null : N.o.loadGuildIds([e.id])),
    (e) => {
        T.Z.initialGuild.measure(() => {
            c.ZP.Emitter.batched(() => {
                let n = P.Fx(e, k.Wb.identifyStartTime);
                null != O.default.getCurrentUser() &&
                    (W({
                        type: 'GUILD_CREATE',
                        guild: n
                    }),
                    W({
                        type: 'VOICE_STATE_UPDATES',
                        voiceStates: n.voice_states.map((e) => {
                            var r, i;
                            return {
                                userId: e.user_id,
                                guildId: n.id,
                                sessionId: e.session_id,
                                channelId: e.channel_id,
                                mute: e.mute,
                                deaf: e.deaf,
                                selfMute: e.self_mute,
                                selfDeaf: e.self_deaf,
                                selfVideo: e.self_video || !1,
                                suppress: e.suppress,
                                selfStream: e.self_stream || !1,
                                requestToSpeakTimestamp: null !== (r = e.request_to_speak_timestamp) && void 0 !== r ? r : null,
                                discoverable: null === (i = e.discoverable) || void 0 === i || i
                            };
                        })
                    }),
                    U.log('Dispatched INITIAL_GUILD '.concat(e.id)));
            });
        });
    }
),
    j(['READY_SUPPLEMENTAL'], (e) => {
        T.Z.readySupplemental.measure(() => {
            c.ZP.Emitter.batched(() => {
                var n, r;
                e = T.Z.hydrateReadySupplemental.measure(() => P.r$(e, k.Wb.identifyStartTime));
                let i = (e) =>
                        e.map((e) => ({
                            user: e.user,
                            status: e.status,
                            clientStatus: e.client_status,
                            activities: e.activities
                        })),
                    a = e.guilds.filter((e) => !0 !== e.unavailable);
                a.forEach((e) => {
                    e.presences = i(e.presences || []);
                });
                let s = e.presences ? i(e.presences) : [],
                    o = (null !== (n = e.lazy_private_channels) && void 0 !== n ? n : []).map((e) => (0, y.q_)(e)),
                    l = null !== (r = e.game_invites) && void 0 !== r ? r : [];
                T.Z.dispatchReadySupplemental.measure(() => {
                    W({
                        type: 'CONNECTION_OPEN_SUPPLEMENTAL',
                        guilds: a,
                        presences: s,
                        lazyPrivateChannels: o,
                        gameInvites: l
                    });
                });
                let u = [];
                a.forEach((e) => {
                    e.voice_states.forEach((n) => {
                        var r, i;
                        u.push({
                            userId: n.user_id,
                            guildId: e.id,
                            sessionId: n.session_id,
                            channelId: n.channel_id,
                            mute: n.mute,
                            deaf: n.deaf,
                            selfMute: n.self_mute,
                            selfDeaf: n.self_deaf,
                            selfVideo: n.self_video || !1,
                            suppress: n.suppress,
                            selfStream: n.self_stream || !1,
                            requestToSpeakTimestamp: null !== (r = n.request_to_speak_timestamp) && void 0 !== r ? r : null,
                            discoverable: null === (i = n.discoverable) || void 0 === i || i
                        });
                    });
                }),
                    W({
                        type: 'VOICE_STATE_UPDATES',
                        voiceStates: u,
                        initial: !0
                    }),
                    k.GC.update();
            });
        }),
            setTimeout(() => W({ type: 'POST_CONNECTION_OPEN' }), 2000);
    }),
    H(
        ['READY'],
        (e) => {
            var n;
            let r = P.Eb(),
                i = e.guilds
                    .filter((e) => {
                        var n, r;
                        return !e.unavailable && 'partial' === e.data_mode && (!!((null !== (n = e.partial_updates.channels) && void 0 !== n ? n : []).length > 0) || !!((null !== (r = e.partial_updates.deleted_channel_ids) && void 0 !== r ? r : []).length > 0) || void 0);
                    })
                    .map((e) => e.id);
            return Promise.all([r, null !== (n = N.o.loadGuildIds(i)) && void 0 !== n ? n : Promise.resolve()]).then((e) => {
                let [n] = e;
                return n;
            });
        },
        (e, n, r) => {
            if (e.user.bot) {
                W({ type: 'LOGOUT' });
                return;
            }
            T.Z.ready.measure(() => {
                c.ZP.Emitter.batched(() => {
                    let n = (e = T.Z.hydrateReady.measure(() => P.IM(e, k.Wb.identifyStartTime, r))).private_channels.map((e) => (0, y.q_)(e)),
                        i = e.guilds.filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted).map((e) => e.id),
                        a = e.guilds.filter((e) => !0 !== e.unavailable),
                        s = e.guilds.filter((e) => !0 === e.geo_restricted);
                    a.forEach((e) => {
                        e.presences = [];
                    });
                    let o = null == e.user_settings_proto ? void 0 : (0, b.ac)(e.user_settings_proto);
                    T.Z.dispatchReady.measure(() => {
                        var r;
                        W({
                            type: 'CONNECTION_OPEN',
                            sessionId: e.session_id,
                            authSessionIdHash: e.auth_session_id_hash,
                            staticAuthSessionId: e.static_client_session_id,
                            user: e.user,
                            users: e.users,
                            guilds: a,
                            initialPrivateChannels: n,
                            unavailableGuilds: i,
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
                            requiredAction: e.required_action,
                            consents: e.consents,
                            sessions: q(e.sessions || []),
                            pendingPayments: e.pending_payments,
                            countryCode: null !== (r = e.country_code) && void 0 !== r ? r : void 0,
                            guildJoinRequests: e.guild_join_requests || [],
                            userSettingsProto: o,
                            apiCodeVersion: e.api_code_version,
                            auth: e.auth,
                            notificationSettings: { flags: e.notification_settings.flags },
                            geoRestrictedGuilds: s,
                            explicitContentScanVersion: e.explicit_content_scan_version
                        });
                    }),
                        null != e.auth_token &&
                            W({
                                type: 'UPDATE_TOKEN',
                                token: e.auth_token,
                                userId: e.user.id
                            }),
                        k.RR.update(),
                        k.GC.update();
                });
            });
        }
    ),
    j(['RESUMED'], () => {
        k.RR.forceUpdate(), k.GC.forceUpdate(), W({ type: 'CONNECTION_RESUMED' });
    }),
    j(['TYPING_START'], (e) => {
        null != e.member && K(e.guild_id, e.member.user, e.member),
            W({
                type: 'TYPING_START',
                channelId: e.channel_id,
                userId: e.user_id
            });
    }),
    j(['ACTIVITY_START'], (e) => {
        W({
            type: 'ACTIVITY_START',
            userId: e.user_id,
            activity: e.activity
        });
    }),
    j(['ACTIVITY_USER_ACTION'], (e) => {
        W({
            type: 'ACTIVITY_USER_ACTION',
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id
        });
    }),
    H(
        ['MESSAGE_CREATE'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e) => {
            z(e),
                null != e.author &&
                    W({
                        type: 'MESSAGE_CREATE',
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1
                    });
        }
    ),
    H(
        ['MESSAGE_UPDATE'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e) => {
            z(e),
                W({
                    type: 'MESSAGE_UPDATE',
                    guildId: e.guild_id,
                    message: e
                });
        }
    ),
    H(
        ['MESSAGE_DELETE'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e) => {
            W({
                type: 'MESSAGE_DELETE',
                guildId: e.guild_id,
                id: e.id,
                channelId: e.channel_id
            });
        }
    ),
    H(
        ['MESSAGE_DELETE_BULK'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e) => {
            W({
                type: 'MESSAGE_DELETE_BULK',
                guildId: e.guild_id,
                ids: e.ids,
                channelId: e.channel_id
            });
        }
    ),
    H(
        ['MESSAGE_ACK'],
        (e) => N.o.loadGuildFromChannelId(e.channel_id),
        (e) => {
            W({
                type: 'MESSAGE_ACK',
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version
            });
        }
    ),
    j(['GUILD_FEATURE_ACK'], (e) => {
        W({
            type: 'GUILD_FEATURE_ACK',
            id: e.resource_id,
            ackType: e.ack_type,
            ackedId: e.entity_id
        });
    }),
    j(['USER_NON_CHANNEL_ACK'], (e) => {
        W({
            type: 'USER_NON_CHANNEL_ACK',
            ackType: e.ack_type,
            ackedId: e.entity_id
        });
    }),
    H(
        ['CHANNEL_PINS_ACK'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e) => {
            W({
                type: 'CHANNEL_PINS_ACK',
                channelId: e.channel_id,
                timestamp: e.timestamp,
                version: e.version
            });
        }
    ),
    H(
        ['CHANNEL_PINS_UPDATE'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e) => {
            W({
                type: 'CHANNEL_PINS_UPDATE',
                channelId: e.channel_id,
                lastPinTimestamp: e.last_pin_timestamp
            });
        }
    ),
    H(
        ['CHANNEL_CREATE', 'CHANNEL_DELETE'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e, n) => {
            W({
                type: n,
                channel: (0, y.q_)(e)
            });
        }
    ),
    j(['VOICE_CHANNEL_STATUS_UPDATE'], (e, n) => {
        W({
            type: n,
            id: e.id,
            guildId: e.guild_id,
            status: e.status
        });
    }),
    j(['CHANNEL_STATUSES'], (e, n) => {
        W({
            type: n,
            guildId: e.guild_id,
            channels: e.channels
        });
    }),
    H(
        ['CHANNEL_UPDATE'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e) => {
            B.add(e);
        }
    ),
    H(
        ['THREAD_CREATE', 'THREAD_UPDATE', 'THREAD_DELETE'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e, n) => {
            let { newly_created: r, ...i } = e;
            W({
                type: n,
                isNewlyCreated: r,
                channel: (0, y.q_)(i)
            });
        }
    ),
    H(
        ['THREAD_LIST_SYNC'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e) => {
            W({
                type: 'THREAD_LIST_SYNC',
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let n = N.Z.getChannel(e.parent_id);
                    return null != n && ((e.nsfw = n.nsfw), (e.parentChannelThreadType = n.type)), (0, y.q_)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? u().map(e.members, I.Z) : void 0,
                channelIds: e.channel_ids
            });
        }
    ),
    j(['THREAD_MEMBER_UPDATE'], (e) => {
        W({
            type: 'THREAD_MEMBER_UPDATE',
            id: e.id,
            guildId: e.guild_id,
            userId: e.user_id,
            flags: e.flags,
            muted: e.muted,
            muteConfig: e.mute_config,
            joinTimestamp: e.join_timestamp
        });
    }),
    j(['THREAD_MEMBERS_UPDATE'], (e) => {
        var n;
        W({
            type: 'THREAD_MEMBERS_UPDATE',
            id: e.id,
            guildId: e.guild_id,
            memberCount: e.member_count,
            addedMembers:
                null === (n = e.added_members) || void 0 === n
                    ? void 0
                    : n.map((n) => ({
                          id: n.id,
                          guildId: e.guild_id,
                          userId: n.user_id,
                          flags: n.flags,
                          joinTimestamp: n.join_timestamp
                      })),
            removedMemberIds: e.removed_member_ids,
            memberIdsPreview: e.member_ids_preview
        });
    }),
    j(['FORUM_UNREADS'], (e) => {
        !e.permission_denied &&
            W({
                type: 'FORUM_UNREADS',
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({
                    threadId: e.thread_id,
                    missing: e.missing,
                    count: e.count
                }))
            });
    }),
    j(['SOUNDBOARD_SOUNDS'], (e) => {
        G.add(e);
    }),
    j(['CHANNEL_RECIPIENT_ADD', 'CHANNEL_RECIPIENT_REMOVE'], (e, n) => {
        let r = N.Z.getBasicChannel(e.channel_id);
        W({
            type: n,
            channelId: e.channel_id,
            user: e.user,
            nick: e.nick,
            isMember: null != r
        });
    }),
    H(
        ['GUILD_CREATE'],
        (e) => ('full' === e.data_mode ? null : N.o.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable)
                W({
                    type: 'GUILD_UNAVAILABLE',
                    guildId: e.id
                });
            else {
                let n = P.J2(e);
                f.Z.createGuild(n),
                    W({
                        type: 'VOICE_STATE_UPDATES',
                        voiceStates: n.voice_states.map((e) => {
                            var r, i;
                            return {
                                userId: e.user_id,
                                guildId: n.id,
                                sessionId: e.session_id,
                                channelId: e.channel_id,
                                mute: e.mute,
                                deaf: e.deaf,
                                selfMute: e.self_mute,
                                selfDeaf: e.self_deaf,
                                selfVideo: e.self_video || !1,
                                suppress: e.suppress,
                                selfStream: e.self_stream || !1,
                                requestToSpeakTimestamp: null !== (r = e.request_to_speak_timestamp) && void 0 !== r ? r : null,
                                discoverable: null === (i = e.discoverable) || void 0 === i || i
                            };
                        })
                    });
            }
        }
    ),
    j(['GUILD_UPDATE'], (e) => {
        W({
            type: 'GUILD_UPDATE',
            guild: e
        }),
            e.unavailable &&
                W({
                    type: 'GUILD_UNAVAILABLE',
                    guildId: e.id
                });
    }),
    j(['GUILD_DELETE'], (e) => {
        W({
            type: 'GUILD_DELETE',
            guild: e
        }),
            e.geo_restricted
                ? W({
                      type: 'GUILD_GEO_RESTRICTED',
                      guildId: e.id,
                      icon: e.icon,
                      name: e.name
                  })
                : e.unavailable &&
                  W({
                      type: 'GUILD_UNAVAILABLE',
                      guildId: e.id
                  });
    }),
    j(['GUILD_MEMBERS_CHUNK'], (e) => {
        c.ZP.Emitter.batched(() => {
            Z.add({
                guildId: e.guild_id,
                members: e.members,
                notFound: e.not_found
            }),
                null != e.presences &&
                    e.presences.forEach((n) => {
                        let { user: r, status: i, client_status: a, activities: s } = n;
                        return Q({
                            guildId: e.guild_id,
                            user: r,
                            status: i,
                            activities: s,
                            clientStatus: a
                        });
                    }),
                M.Z.flush('GUILD_MEMBERS_CHUNK');
        });
    }),
    j(['THREAD_MEMBER_LIST_UPDATE'], (e) => {
        c.ZP.Emitter.batched(() => {
            W({
                type: 'THREAD_MEMBER_LIST_UPDATE',
                guildId: e.guild_id,
                threadId: e.thread_id,
                members: e.members
            }),
                null != e.presences &&
                    e.presences.forEach((n) => {
                        let { user: r, status: i, client_status: a, activities: s } = n;
                        return Q({
                            guildId: e.guild_id,
                            user: r,
                            status: i,
                            activities: s,
                            clientStatus: a
                        });
                    }),
                M.Z.flush();
        });
    }),
    j(['GUILD_BAN_ADD', 'GUILD_BAN_REMOVE', 'GUILD_MEMBER_ADD', 'GUILD_MEMBER_UPDATE', 'GUILD_MEMBER_REMOVE'], (e, n) => {
        W({
            type: n,
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
            flags: e.flags
        });
    }),
    H(
        ['GUILD_ROLE_CREATE', 'GUILD_ROLE_UPDATE'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e, n) => {
            W({
                type: n,
                guildId: e.guild_id,
                role: e.role
            });
        }
    ),
    H(
        ['GUILD_ROLE_DELETE'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e) => {
            W({
                type: 'GUILD_ROLE_DELETE',
                guildId: e.guild_id,
                roleId: e.role_id,
                version: e.version
            });
        }
    ),
    j(['GUILD_EMOJIS_UPDATE'], (e) => {
        W({
            type: 'GUILD_EMOJIS_UPDATE',
            guildId: e.guild_id,
            emojis: e.emojis
        });
    }),
    j(['GUILD_STICKERS_UPDATE'], (e) => {
        W({
            type: 'GUILD_STICKERS_UPDATE',
            guildId: e.guild_id,
            stickers: e.stickers
        });
    }),
    j(['GUILD_INTEGRATIONS_UPDATE'], (e) => {
        W({
            type: 'GUILD_INTEGRATIONS_UPDATE',
            guildId: e.guild_id
        });
    }),
    j(['INTEGRATION_CREATE'], (e) => {
        W({
            type: 'INTEGRATION_CREATE',
            application: e.application,
            guildId: e.guild_id
        });
    }),
    j(['INTEGRATION_DELETE'], (e) => {
        W({
            type: 'INTEGRATION_DELETE',
            applicationId: e.application_id,
            guildId: e.guild_id
        });
    }),
    j(['USER_UPDATE'], (e) => {
        W({
            type: 'CURRENT_USER_UPDATE',
            user: e
        });
    }),
    j(['USER_SETTINGS_PROTO_UPDATE'], (e) => {
        let n = (0, b.kI)(e.settings.type, e.settings.proto);
        if (null != n) {
            if ('string' == typeof n)
                throw (
                    (console.error('Invalid proto: |'.concat(n, '| |').concat(e.settings.proto, '|')),
                    console.error({
                        parsed: n,
                        wire: e.settings.proto,
                        type: e.settings.type
                    }),
                    Error('UserSettingsProto must not be a string'))
                );
            W({
                type: 'USER_SETTINGS_PROTO_UPDATE',
                settings: {
                    proto: n,
                    type: e.settings.type
                },
                partial: e.partial
            });
        }
    }),
    j(['USER_GUILD_SETTINGS_UPDATE'], (e) => {
        W({
            type: 'USER_GUILD_SETTINGS_FULL_UPDATE',
            userGuildSettings: [e]
        });
    }),
    j(['USER_CONNECTIONS_UPDATE'], () => {
        W({ type: 'USER_CONNECTIONS_UPDATE' });
    }),
    j(['USER_REQUIRED_ACTION_UPDATE'], (e) => {
        W({
            type: 'USER_REQUIRED_ACTION_UPDATE',
            requiredAction: e.required_action
        });
    }),
    j(['USER_NOTE_UPDATE'], (e) => {
        W({
            type: 'USER_NOTE_UPDATE',
            ...e
        });
    }),
    j(['RELATIONSHIP_ADD'], (e) => {
        W({
            type: 'RELATIONSHIP_ADD',
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                since: e.since,
                nickname: e.nickname,
                isSpamRequest: e.is_spam_request || !1,
                userIgnored: e.user_ignored || !1
            },
            shouldNotify: !0 === e.should_notify
        });
    }),
    j(['RELATIONSHIP_REMOVE'], (e) => {
        W({
            type: 'RELATIONSHIP_REMOVE',
            relationship: e
        });
    }),
    j(['RELATIONSHIP_UPDATE'], (e) => {
        W({
            type: 'RELATIONSHIP_UPDATE',
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                nickname: e.nickname,
                since: e.since,
                isSpamRequest: e.is_spam_request || !1,
                userIgnored: e.user_ignored || !1
            }
        });
    }),
    j(['GAME_RELATIONSHIP_ADD'], (e) => {
        W({
            type: 'GAME_RELATIONSHIP_ADD',
            gameRelationship: {
                id: e.id,
                applicationId: e.application_id,
                type: e.type,
                since: e.since,
                dmAccessType: e.dm_access_type
            }
        });
    }),
    j(['GAME_RELATIONSHIP_REMOVE'], (e) => {
        W({
            type: 'GAME_RELATIONSHIP_REMOVE',
            userId: e.id,
            applicationId: e.application_id
        });
    }),
    j(['PRESENCE_UPDATE'], (e) => {
        Q({
            guildId: e.guild_id,
            user: e.user,
            status: e.status,
            activities: e.activities,
            clientStatus: e.client_status
        });
    }),
    j(['PRESENCES_REPLACE'], (e) => {
        W({
            type: 'PRESENCES_REPLACE',
            presences: e
        });
    }),
    j(['SESSIONS_REPLACE'], (e) => {
        W({
            type: 'SESSIONS_REPLACE',
            sessions: q(e)
        });
    }),
    j(['VOICE_STATE_UPDATE'], (e) => {
        var n, r;
        null != e.member && K(e.guild_id, e.member.user, e.member),
            W({
                type: 'VOICE_STATE_UPDATES',
                voiceStates: [
                    {
                        userId: e.user_id,
                        guildId: e.guild_id,
                        sessionId: e.session_id,
                        channelId: e.channel_id,
                        mute: e.mute,
                        deaf: e.deaf,
                        selfMute: e.self_mute,
                        selfDeaf: e.self_deaf,
                        selfVideo: e.self_video || !1,
                        suppress: e.suppress,
                        selfStream: e.self_stream || !1,
                        requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null,
                        discoverable: null === (r = e.discoverable) || void 0 === r || r,
                        oldChannelId: D.Z.getUserVoiceChannelId(e.guild_id, e.user_id)
                    }
                ]
            });
    }),
    j(['VOICE_SERVER_UPDATE'], (e) => {
        W({
            type: 'VOICE_SERVER_UPDATE',
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token
        });
    }),
    j(['CALL_CREATE'], (e) => {
        W({
            type: 'CALL_CREATE',
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        });
        let n = e.voice_states;
        null != n &&
            W({
                type: 'VOICE_STATE_UPDATES',
                voiceStates: n.map((e) => {
                    var n, r;
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
                        requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null,
                        discoverable: null === (r = e.discoverable) || void 0 === r || r
                    };
                })
            });
    }),
    j(['CALL_UPDATE'], (e) => {
        W({
            type: 'CALL_UPDATE',
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        });
    }),
    j(['CALL_DELETE'], (e) => {
        W({
            type: 'CALL_DELETE',
            channelId: e.channel_id,
            unavailable: e.unavailable
        });
    }),
    j(['OAUTH2_TOKEN_REVOKE'], (e) => {
        W({
            type: 'OAUTH2_TOKEN_REVOKE',
            accessToken: e.access_token
        });
    }),
    j(['RECENT_MENTION_DELETE'], (e) => {
        W({
            type: 'RECENT_MENTION_DELETE',
            id: e.message_id
        });
    }),
    j(['SAVED_MESSAGE_CREATE'], (e) => {
        W({
            type: 'SAVED_MESSAGE_CREATE',
            savedMessage: (0, v.jk)(e)
        });
    }),
    j(['SAVED_MESSAGE_DELETE'], (e) => {
        W({
            type: 'SAVED_MESSAGE_DELETE',
            savedMessageData: (0, v.$_)(e)
        });
    }),
    j(['FRIEND_SUGGESTION_CREATE'], (e) => {
        W({
            type: 'FRIEND_SUGGESTION_CREATE',
            suggestion: e
        });
    }),
    j(['FRIEND_SUGGESTION_DELETE'], (e) => {
        W({
            type: 'FRIEND_SUGGESTION_DELETE',
            suggestedUserId: e.suggested_user_id
        });
    }),
    j(['WEBHOOKS_UPDATE'], (e) => {
        W({
            type: 'WEBHOOKS_UPDATE',
            guildId: e.guild_id,
            channelId: e.channel_id
        });
    }),
    j(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'], (e, n) => {
        W({
            type: n,
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: e.emoji,
            colors: e.burst_colors,
            reactionType: e.type,
            messageAuthorId: e.message_author_id
        });
    }),
    j(['MESSAGE_POLL_VOTE_ADD', 'MESSAGE_POLL_VOTE_REMOVE'], (e, n) => {
        W({
            type: 'MESSAGE_POLL_VOTE_ADD' === n ? 'MESSAGE_REACTION_ADD' : 'MESSAGE_REACTION_REMOVE',
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: {
                id: e.answer_id,
                name: ''
            },
            reactionType: E.O.VOTE
        });
    }),
    j(['MESSAGE_REACTION_REMOVE_ALL'], (e) => {
        W({
            type: 'MESSAGE_REACTION_REMOVE_ALL',
            channelId: e.channel_id,
            messageId: e.message_id
        });
    }),
    j(['MESSAGE_REACTION_REMOVE_EMOJI'], (e) => {
        W({
            type: 'MESSAGE_REACTION_REMOVE_EMOJI',
            channelId: e.channel_id,
            messageId: e.message_id,
            emoji: e.emoji
        });
    }),
    j(['MESSAGE_REACTION_ADD_MANY'], (e) => {
        W({
            type: 'MESSAGE_REACTION_ADD_MANY',
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions
        });
    }),
    j(['PAYMENT_UPDATE'], (e) => {
        W({
            type: 'PAYMENT_UPDATE',
            payment: e
        });
    }),
    j(['ENTITLEMENT_CREATE', 'ENTITLEMENT_UPDATE', 'ENTITLEMENT_DELETE'], (e, n) => {
        W({
            type: n,
            entitlement: e
        });
    }),
    j(['USER_PAYMENT_SOURCES_UPDATE'], () => {
        R.Z.hasLayers() && (r(355467).tZ(), _.Gn(L.Z.getFetchedSKUIDs()));
    }),
    j(['USER_SUBSCRIPTIONS_UPDATE'], () => {
        h.k(), R.Z.hasLayers() && r(355467).jg();
    }),
    j(['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE'], (e) => {
        W({
            type: 'GUILD_BOOST_SLOT_CREATE',
            guildBoostSlot: S.Z.createFromServer(e, x.ZP.getSubscriptionById(e.subscription_id))
        });
    }),
    j(['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE'], (e) => {
        W({
            type: 'GUILD_BOOST_SLOT_UPDATE',
            guildBoostSlot: S.Z.createFromServer(e, x.ZP.getSubscriptionById(e.subscription_id))
        });
    }),
    j(['BILLING_POPUP_BRIDGE_CALLBACK'], (e) => {
        W({
            type: 'BILLING_POPUP_BRIDGE_CALLBACK',
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query
        });
    }),
    j(['USER_PAYMENT_BROWSER_CHECKOUT_DONE'], (e) => {
        W({
            type: 'USER_PAYMENT_BROWSER_CHECKOUT_DONE',
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id
        });
    }),
    j(['USER_PAYMENT_CLIENT_ADD'], (e) => {
        (0, w.L)().then((n) => {
            let r = e.purchase_token_hash;
            r === n &&
                W({
                    type: 'USER_PAYMENT_CLIENT_ADD',
                    purchaseTokenHash: r,
                    expiresAt: e.expires_at
                });
        });
    }),
    j(['GUILD_MEMBER_LIST_UPDATE'], (e) => {
        c.ZP.Emitter.batched(() => {
            let n = (n) => {
                if (null == n.member) return;
                let { member: r } = n;
                if ((K(e.guild_id, r.user, r), null == r.presence)) return;
                let { presence: i } = r;
                Q({
                    guildId: e.guild_id,
                    user: i.user,
                    status: i.status,
                    activities: i.activities,
                    clientStatus: i.client_status
                });
            };
            e.ops.forEach((e) => {
                let { op: r, items: i, item: a } = e;
                switch (r) {
                    case 'SYNC':
                        i.forEach(n);
                        break;
                    case 'UPDATE':
                    case 'INSERT':
                        n(a);
                }
            }),
                M.Z.flush(),
                W({
                    type: 'GUILD_MEMBER_LIST_UPDATE',
                    guildId: e.guild_id,
                    id: e.id,
                    ops: e.ops,
                    groups: e.groups,
                    memberCount: e.member_count,
                    onlineCount: e.online_count
                });
        });
    }),
    j(['GIFT_CODE_UPDATE'], (e) => {
        W({
            type: 'GIFT_CODE_UPDATE',
            uses: e.uses,
            code: e.code
        });
    }),
    j(['GIFT_CODE_CREATE'], (e) => {
        W({
            type: 'GIFT_CODE_CREATE',
            giftCode: e
        });
    }),
    j(['LIBRARY_APPLICATION_UPDATE'], (e) => {
        W({
            type: 'LIBRARY_APPLICATION_UPDATE',
            libraryApplication: e
        });
    }),
    j(['STREAM_CREATE'], (e) => {
        W({
            type: 'STREAM_CREATE',
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            paused: e.paused
        });
    }),
    j(['STREAM_SERVER_UPDATE'], (e) => {
        W({
            type: 'STREAM_SERVER_UPDATE',
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token
        });
    }),
    j(['STREAM_UPDATE'], (e) => {
        W({
            type: 'STREAM_UPDATE',
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused
        });
    }),
    j(['STREAM_DELETE'], (e) => {
        W({
            type: 'STREAM_DELETE',
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason
        });
    }),
    j(['GENERIC_PUSH_NOTIFICATION_SENT'], (e) => {
        W({
            type: 'GENERIC_PUSH_NOTIFICATION_SENT',
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag
        });
    }),
    j(['REACTION_NOTIFICATION_SENT'], (e) => {
        W({
            type: 'REACTION_NOTIFICATION_SENT',
            route: e.route,
            message: e.message,
            emoji: e.emoji,
            reactorUserId: e.reactor_user_id
        });
    }),
    j(['NOTIFICATION_CENTER_ITEM_CREATE'], (e) => {
        W({
            type: 'NOTIFICATION_CENTER_ITEM_CREATE',
            item: e
        });
    }),
    j(['NOTIFICATION_CENTER_ITEM_DELETE'], (e) => {
        W({
            type: 'NOTIFICATION_CENTER_ITEM_DELETE',
            id: e.id
        });
    }),
    j(['NOTIFICATION_CENTER_ITEMS_ACK'], (e) => {
        W({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK',
            ids: [e.id],
            optimistic: !1
        });
    }),
    j(['NOTIFICATION_CENTER_ITEM_COMPLETED'], (e) => {
        W({
            type: 'NOTIFICATION_CENTER_ITEM_COMPLETED',
            item_enum: e.item_enum
        });
    }),
    j(['QUESTS_USER_STATUS_UPDATE'], (e) => {
        W({
            type: 'QUESTS_USER_STATUS_UPDATE',
            user_status: e.user_status
        });
    }),
    j(['APPLICATION_COMMAND_PERMISSIONS_UPDATE'], (e, n) => {
        W({
            type: n,
            guildId: e.guild_id
        });
    }),
    j(['GUILD_APPLICATION_COMMAND_INDEX_UPDATE'], (e) => {
        W({
            type: 'GUILD_APPLICATION_COMMAND_INDEX_UPDATE',
            guildId: e.guild_id,
            version: e.version
        });
    }),
    j(['GUILD_JOIN_REQUEST_CREATE'], (e) => {
        W({
            type: 'GUILD_JOIN_REQUEST_CREATE',
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        });
    }),
    j(['GUILD_JOIN_REQUEST_UPDATE'], (e) => {
        W({
            type: 'GUILD_JOIN_REQUEST_UPDATE',
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        });
    }),
    j(['GUILD_JOIN_REQUEST_DELETE'], (e) => {
        W({
            type: 'GUILD_JOIN_REQUEST_DELETE',
            id: e.id,
            userId: e.user_id,
            guildId: e.guild_id
        });
    }),
    j(['INTERACTION_CREATE'], (e) => {
        W({
            type: 'INTERACTION_CREATE',
            interactionId: e.id,
            nonce: e.nonce
        });
    }),
    j(['INTERACTION_SUCCESS'], (e) => {
        W({
            type: 'INTERACTION_SUCCESS',
            interactionId: e.id,
            nonce: e.nonce
        });
    }),
    j(['INTERACTION_FAILURE'], (e) => {
        W({
            type: 'INTERACTION_FAILURE',
            nonce: e.nonce,
            reasonCode: e.reason_code
        });
    }),
    j(['APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE'], (e) => {
        W({
            type: 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE',
            choices: e.choices,
            nonce: e.nonce
        });
    }),
    j(['INTERACTION_MODAL_CREATE'], (e) => {
        W({
            type: 'INTERACTION_MODAL_CREATE',
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, g.uZ)(e.components),
            nonce: e.nonce
        });
    }),
    j(['INTERACTION_IFRAME_MODAL_CREATE'], (e) => {
        W({
            type: 'INTERACTION_IFRAME_MODAL_CREATE',
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            iframePath: e.iframe_path,
            modalSize: e.modal_size,
            nonce: e.nonce
        });
    }),
    j(['STAGE_INSTANCE_CREATE'], (e) => {
        W({
            type: 'STAGE_INSTANCE_CREATE',
            instance: e
        });
    }),
    j(['STAGE_INSTANCE_UPDATE'], (e) => {
        W({
            type: 'STAGE_INSTANCE_UPDATE',
            instance: e
        });
    }),
    j(['STAGE_INSTANCE_DELETE'], (e) => {
        W({
            type: 'STAGE_INSTANCE_DELETE',
            instance: e
        });
    }),
    j(['GUILD_SCHEDULED_EVENT_CREATE'], (e) => {
        W({
            type: 'GUILD_SCHEDULED_EVENT_CREATE',
            guildScheduledEvent: e
        });
    }),
    j(['GUILD_SCHEDULED_EVENT_UPDATE'], (e) => {
        W({
            type: 'GUILD_SCHEDULED_EVENT_UPDATE',
            guildScheduledEvent: e
        });
    }),
    j(['GUILD_SCHEDULED_EVENT_DELETE'], (e) => {
        W({
            type: 'GUILD_SCHEDULED_EVENT_DELETE',
            guildScheduledEvent: e
        });
    }),
    j(['GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE'], (e) => {
        W({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE',
            eventException: e
        });
    }),
    j(['GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE'], (e) => {
        W({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE',
            eventException: e
        });
    }),
    j(['GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE'], (e) => {
        W({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE',
            eventException: e
        });
    }),
    j(['GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE'], (e) => {
        W({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE',
            eventId: e.event_id
        });
    }),
    j(['GUILD_SCHEDULED_EVENT_USER_ADD'], (e) => {
        W({
            type: 'GUILD_SCHEDULED_EVENT_USER_ADD',
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        });
    }),
    j(['GUILD_SCHEDULED_EVENT_USER_REMOVE'], (e) => {
        W({
            type: 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        });
    }),
    j(['GUILD_DIRECTORY_ENTRY_CREATE'], (e) => {
        W({
            type: 'GUILD_DIRECTORY_ENTRY_CREATE',
            channelId: e.directory_channel_id,
            entry: e
        });
    }),
    j(['GUILD_DIRECTORY_ENTRY_UPDATE'], (e) => {
        W({
            type: 'GUILD_DIRECTORY_ENTRY_UPDATE',
            channelId: e.directory_channel_id,
            entry: e
        });
    }),
    j(['GUILD_DIRECTORY_ENTRY_DELETE'], (e) => {
        W({
            type: 'GUILD_DIRECTORY_ENTRY_DELETE',
            channelId: e.directory_channel_id,
            guildId: e.entity_id
        });
    }),
    j(['AUTO_MODERATION_MENTION_RAID_DETECTION'], (e) => {
        W({
            type: 'AUTO_MODERATION_MENTION_RAID_DETECTION',
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
        });
    }),
    j(['VOICE_CHANNEL_EFFECT_SEND'], (e) => {
        W({
            type: 'VOICE_CHANNEL_EFFECT_SEND',
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
            emojiHose: e.emoji_hose
        });
    }),
    j(['GUILD_SOUNDBOARD_SOUND_CREATE'], (e) => {
        W({
            type: 'GUILD_SOUNDBOARD_SOUND_CREATE',
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new A.Z(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        });
    }),
    j(['GUILD_SOUNDBOARD_SOUND_UPDATE'], (e) => {
        W({
            type: 'GUILD_SOUNDBOARD_SOUND_UPDATE',
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new A.Z(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        });
    }),
    j(['GUILD_SOUNDBOARD_SOUND_DELETE'], (e) => {
        W({
            type: 'GUILD_SOUNDBOARD_SOUND_DELETE',
            guildId: e.guild_id,
            soundId: e.sound_id
        });
    }),
    j(['GUILD_SOUNDBOARD_SOUNDS_UPDATE'], (e) => {
        W({
            type: 'GUILD_SOUNDBOARD_SOUNDS_UPDATE',
            guildId: e.guild_id,
            soundboardSounds: e.soundboard_sounds.map((n) => ({
                name: n.name,
                soundId: n.sound_id,
                emojiName: n.emoji_name,
                emojiId: n.emoji_id,
                userId: n.user_id,
                volume: n.volume,
                available: n.available,
                guildId: e.guild_id
            }))
        });
    }),
    H(
        ['EMBEDDED_ACTIVITY_UPDATE_V2'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e) => {
            W({
                type: 'EMBEDDED_ACTIVITY_UPDATE_V2',
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants
            });
        }
    ),
    j(['AUTH_SESSION_CHANGE'], (e) => {
        W({
            type: 'AUTH_SESSION_CHANGE',
            authSessionIdHash: e.auth_session_id_hash
        });
    }),
    j(['USER_CONNECTIONS_LINK_CALLBACK'], (e) => {
        W({
            type: 'USER_CONNECTIONS_LINK_CALLBACK',
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state
        });
    }),
    j(['USER_CONNECTIONS_CALLBACK'], (e) => {
        W({
            type: 'USER_CONNECTIONS_CALLBACK',
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params
        });
    }),
    j(['DELETED_ENTITY_IDS'], (e) => {
        W({
            type: 'DELETED_ENTITY_IDS',
            ...e
        });
    }),
    H(
        ['CHANNEL_SYNC'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e) => {
            e.channels.forEach((e) => {
                B.add(e);
            }),
                W({
                    type: 'CHANNEL_SYNC',
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check
                });
        }
    ),
    j(['CONSOLE_COMMAND_UPDATE'], (e) => {
        W({
            type: 'CONSOLE_COMMAND_UPDATE',
            id: e.id,
            result: e.result,
            error: e.error
        });
    }),
    H(
        ['PASSIVE_UPDATE_V2'],
        (e) => N.o.loadGuildIds([e.guild_id]),
        (e) => {
            W({
                type: 'PASSIVE_UPDATE_V2',
                guildId: e.guild_id,
                members: e.updated_members,
                channels: e.updated_channels.map((e) => ({
                    id: e.id,
                    lastMessageId: e.last_message_id,
                    lastPinTimestamp: e.last_pin_timestamp
                })),
                voiceStates: e.updated_voice_states.map((e) => {
                    var n, r;
                    return {
                        channelId: e.channel_id,
                        deaf: e.deaf || !1,
                        mute: e.mute || !1,
                        requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null,
                        selfDeaf: e.self_deaf || !1,
                        selfMute: e.self_mute || !1,
                        selfStream: e.self_stream || !1,
                        selfVideo: e.self_video || !1,
                        sessionId: e.session_id,
                        suppress: e.suppress,
                        userId: e.user_id,
                        discoverable: null === (r = e.discoverable) || void 0 === r || r
                    };
                }),
                removedVoiceStateUsers: e.removed_voice_states
            });
        }
    ),
    j(['CREATOR_MONETIZATION_RESTRICTIONS_UPDATE'], (e) => {
        W({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS',
            guildId: e.guild_id,
            restrictions: e.restrictions
        });
    }),
    j(['BILLING_REFERRAL_TRIAL_OFFER_UPDATE'], (e) => {
        W({
            type: 'BILLING_REFERRAL_TRIAL_OFFER_UPDATE',
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id
        });
    }),
    j(['LAST_MESSAGES'], (e) => {
        W({
            type: 'MESSAGE_PREVIEWS_LOADED',
            guildId: e.guild_id,
            messages: e.messages
        });
    }),
    j(['AUTHENTICATOR_UPDATE'], (e) => {
        W({
            type: 'AUTHENTICATOR_UPDATE',
            credential: e
        });
    }),
    j(['AUTHENTICATOR_CREATE'], (e) => {
        W({
            type: 'AUTHENTICATOR_CREATE',
            credential: e
        });
    }),
    j(['AUTHENTICATOR_DELETE'], (e) => {
        W({
            type: 'AUTHENTICATOR_DELETE',
            credential: e
        });
    }),
    j(['NOTIFICATION_SETTINGS_UPDATE'], (e) => {
        W({
            type: 'NOTIFICATION_SETTINGS_UPDATE',
            settings: { flags: e.flags }
        });
    }),
    j(['GAME_INVITE_CREATE'], (e) => {
        W({
            type: 'GAME_INVITE_CREATE',
            gameInvite: e
        });
    }),
    j(['GAME_INVITE_DELETE'], (e) => {
        W({
            type: 'GAME_INVITE_DELETE',
            inviteId: e.invite_id
        });
    }),
    j(['GAME_INVITE_DELETE_MANY'], (e) => {
        W({
            type: 'GAME_INVITE_DELETE_MANY',
            inviteIds: e.invite_ids
        });
    }),
    j(['CONVERSATION_SUMMARY_UPDATE'], (e) => {
        W({
            type: 'CONVERSATION_SUMMARY_UPDATE',
            ...e
        });
    }),
    j(['PREMIUM_MARKETING_PREVIEW'], (e) => {
        W({
            type: 'PREMIUM_MARKETING_PREVIEW',
            properties: e.properties
        });
    }),
    j(['USER_APPLICATION_UPDATE'], (e) => {
        W({
            type: 'USER_APPLICATION_UPDATE',
            applicationId: e.application_id
        });
    }),
    j(['USER_APPLICATION_REMOVE'], (e) => {
        W({
            type: 'USER_APPLICATION_REMOVE',
            applicationId: e.application_id
        });
    }),
    j(['DM_SETTINGS_UPSELL_SHOW'], (e) => {
        W({
            type: 'DM_SETTINGS_UPSELL_SHOW',
            guildId: e.guild_id
        });
    }),
    j(['CONTENT_INVENTORY_INBOX_STALE'], (e) => {
        W({
            type: 'CONTENT_INVENTORY_INBOX_STALE',
            refreshAfterMs: e.refresh_after_ms
        });
    });
