n.d(t, { Z: () => Z }), n(653041), n(47120), n(789020), n(411104);
var i = n(392711),
    r = n.n(i);
n(724522);
var a = n(442837),
    s = n(570140),
    o = n(749210),
    l = n(821849),
    u = n(232567),
    c = n(864106),
    d = n(710845),
    f = n(292419),
    _ = n(566006),
    p = n(686478),
    h = n(952537),
    m = n(218543),
    g = n(48481),
    E = n(131704),
    v = n(209747),
    y = n(598077),
    I = n(592125),
    T = n(271383),
    b = n(819640),
    S = n(594174),
    A = n(979651),
    N = n(509545),
    C = n(78839),
    R = n(936101),
    O = n(868158),
    D = n(483012),
    L = n(955132);
let x = new d.Z('ConnectionStore'),
    P = new D.Z(
        L.Wb,
        (e, t) => {
            var n;
            e =
                null != e
                    ? e
                    : {
                          type: 'CHANNEL_UPDATES',
                          channels: []
                      };
            let i = (0, E.q_)(t),
                r = I.Z.getChannel(t.id),
                a =
                    null == r
                        ? void 0
                        : r.merge({
                              ...i,
                              recipients: r.recipients,
                              bitrate: null !== (n = i.bitrate) && void 0 !== n ? n : r.bitrate
                          });
            return e.channels.push(null != a ? a : i), e;
        },
        (e) => 'CHANNEL_UPDATE' !== e
    ),
    w = new D.Z(
        L.Wb,
        (e, t) => (
            (e =
                null == e
                    ? {
                          type: 'SOUNDBOARD_SOUNDS_RECEIVED',
                          updates: []
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
                    guildId: t.guild_id
                }))
            }),
            e
        ),
        (e) => 'SOUNDBOARD_SOUNDS' !== e
    ),
    M = new D.Z(
        L.Wb,
        (e, t) => (
            (e =
                null != e
                    ? e
                    : {
                          type: 'GUILD_MEMBERS_CHUNK_BATCH',
                          chunks: []
                      }).chunks.push(t),
            e
        ),
        (e) => 'GUILD_MEMBERS_CHUNK' !== e
    ),
    k = new D.Z(
        L.Wb,
        (e, t) => (
            (e =
                null == e
                    ? {
                          type: 'PRESENCE_UPDATES',
                          updates: []
                      }
                    : e).updates.push(t),
            e
        ),
        (e) => 'PRESENCE_UPDATE' !== e && 'GUILD_MEMBERS_CHUNK' !== e
    ),
    U = {};
function G(e, t) {
    for (let n of e)
        U[n] = {
            preload: () => null,
            dispatch: t
        };
}
function B(e, t, n) {
    for (let i of e)
        U[i] = {
            preload: t,
            dispatch: n
        };
}
function Z(e) {
    return U[e];
}
function F(e) {
    s.Z.dispatch(e).catch((t) =>
        L.Wb.resetSocketOnDispatchError({
            error: t,
            action: e.type
        })
    );
}
function V(e, t, n) {
    var i;
    let { roles: a, nick: s, avatar: o, avatar_decoration_data: l, flags: u, premium_since: d, pending: f, joined_at: _, communication_disabled_until: p, unusual_dm_activity_until: h } = n,
        m = T.ZP.getMember(e, t.id);
    (!(null != m && m.nick === s && m.avatar === o && r().isEqual(m.roles, a) && (0, c.sr)(m.avatarDecoration, l)) || m.premiumSince !== d || m.isPending !== f || m.joinedAt !== _ || m.communicationDisabledUntil !== p || m.flags !== u || (null !== (i = m.unusualDMActivityUntil) && void 0 !== i ? i : null) !== (null != h ? h : null)) &&
        F({
            type: 'GUILD_MEMBER_ADD',
            guildId: e,
            user: t,
            roles: a,
            nick: s,
            avatar: o,
            avatarDecoration: l,
            premiumSince: d,
            isPending: f,
            joinedAt: _,
            communicationDisabledUntil: p,
            unusualDMActivityUntil: h,
            flags: u
        });
}
function j(e) {
    let { member: t, mentions: n, author: i, guild_id: r } = e;
    null != t && null != r && V(r, i, t),
        null != n &&
            n.forEach((e) => {
                if (null != e.member && null != r) {
                    let { member: t } = e;
                    delete e.member, V(r, e, t);
                }
            });
}
function H(e) {
    return e.map((e) => ({
        sessionId: e.session_id,
        lastModified: e.last_modified,
        status: e.status,
        activities: e.activities,
        active: !!e.active,
        clientInfo: e.client_info
    }));
}
function Y(e) {
    let { guildId: t, user: n, status: i, activities: r, hiddenActivities: a, clientStatus: s } = e;
    k.add({
        guildId: t,
        user: n,
        status: i,
        clientStatus: s,
        activities: r,
        hiddenActivities: a
    });
}
B(
    ['INITIAL_GUILD'],
    (e) => ('full' === e.data_mode ? null : I.o.loadGuildIds([e.id])),
    (e) => {
        m.Z.initialGuild.measure(() => {
            a.ZP.Emitter.batched(() => {
                let t = O.Fx(e, L.Wb.identifyStartTime);
                null != S.default.getCurrentUser() &&
                    (F({
                        type: 'GUILD_CREATE',
                        guild: t
                    }),
                    F({
                        type: 'VOICE_STATE_UPDATES',
                        voiceStates: t.voice_states.map((e) => {
                            var n, i;
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
                                requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null,
                                discoverable: null === (i = e.discoverable) || void 0 === i || i
                            };
                        })
                    }),
                    x.log('Dispatched INITIAL_GUILD '.concat(e.id)));
            });
        });
    }
),
    G(['READY_SUPPLEMENTAL'], (e) => {
        m.Z.readySupplemental.measure(() => {
            a.ZP.Emitter.batched(() => {
                var t, n;
                e = m.Z.hydrateReadySupplemental.measure(() => O.r$(e, L.Wb.identifyStartTime));
                let i = (e) =>
                        e.map((e) => ({
                            user: e.user,
                            status: e.status,
                            clientStatus: e.client_status,
                            activities: e.activities,
                            hiddenActivities: e.hidden_activities
                        })),
                    r = e.guilds.filter((e) => !0 !== e.unavailable);
                r.forEach((e) => {
                    e.presences = i(e.presences || []);
                });
                let a = e.presences ? i(e.presences) : [],
                    s = (null !== (t = e.lazy_private_channels) && void 0 !== t ? t : []).map((e) => (0, E.q_)(e)),
                    o = null !== (n = e.game_invites) && void 0 !== n ? n : [];
                m.Z.dispatchReadySupplemental.measure(() => {
                    F({
                        type: 'CONNECTION_OPEN_SUPPLEMENTAL',
                        guilds: r,
                        presences: a,
                        lazyPrivateChannels: s,
                        gameInvites: o
                    });
                });
                let l = [];
                r.forEach((e) => {
                    e.voice_states.forEach((t) => {
                        var n, i;
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
                            requestToSpeakTimestamp: null !== (n = t.request_to_speak_timestamp) && void 0 !== n ? n : null,
                            discoverable: null === (i = t.discoverable) || void 0 === i || i
                        });
                    });
                }),
                    F({
                        type: 'VOICE_STATE_UPDATES',
                        voiceStates: l,
                        initial: !0
                    }),
                    L.GC.update();
            });
        }),
            setTimeout(() => F({ type: 'POST_CONNECTION_OPEN' }), 2000);
    }),
    B(
        ['READY'],
        (e) => {
            var t;
            let n = O.Eb(),
                i = e.guilds
                    .filter((e) => {
                        var t, n;
                        return !e.unavailable && 'partial' === e.data_mode && ((null !== (t = e.partial_updates.channels) && void 0 !== t ? t : []).length > 0 || (null !== (n = e.partial_updates.deleted_channel_ids) && void 0 !== n ? n : []).length > 0 || void 0);
                    })
                    .map((e) => e.id);
            return Promise.all([n, null !== (t = I.o.loadGuildIds(i)) && void 0 !== t ? t : Promise.resolve()]).then((e) => {
                let [t] = e;
                return t;
            });
        },
        (e, t, n) => {
            if (e.user.bot) {
                F({ type: 'LOGOUT' });
                return;
            }
            m.Z.ready.measure(() => {
                a.ZP.Emitter.batched(() => {
                    let t = (e = m.Z.hydrateReady.measure(() => O.IM(e, L.Wb.identifyStartTime, n))).private_channels.map((e) => (0, E.q_)(e)),
                        i = e.guilds.filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted).map((e) => e.id),
                        r = e.guilds.filter((e) => !0 !== e.unavailable),
                        a = e.guilds.filter((e) => !0 === e.geo_restricted);
                    r.forEach((e) => {
                        e.presences = [];
                    });
                    let s = null == e.user_settings_proto ? void 0 : (0, g.ac)(e.user_settings_proto);
                    m.Z.dispatchReady.measure(() => {
                        var n;
                        F({
                            type: 'CONNECTION_OPEN',
                            sessionId: e.session_id,
                            authSessionIdHash: e.auth_session_id_hash,
                            staticAuthSessionId: e.static_client_session_id,
                            user: e.user,
                            users: e.users,
                            guilds: r,
                            initialPrivateChannels: t,
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
                            sessions: H(e.sessions || []),
                            pendingPayments: e.pending_payments,
                            countryCode: null !== (n = e.country_code) && void 0 !== n ? n : void 0,
                            guildJoinRequests: e.guild_join_requests || [],
                            userSettingsProto: s,
                            apiCodeVersion: e.api_code_version,
                            auth: e.auth,
                            notificationSettings: { flags: e.notification_settings.flags },
                            geoRestrictedGuilds: a,
                            explicitContentScanVersion: e.explicit_content_scan_version
                        });
                    }),
                        null != e.auth_token &&
                            F({
                                type: 'UPDATE_TOKEN',
                                token: e.auth_token,
                                userId: e.user.id
                            }),
                        L.RR.update(),
                        L.GC.update();
                });
            });
        }
    ),
    G(['RESUMED'], () => {
        L.RR.forceUpdate(), L.GC.forceUpdate(), F({ type: 'CONNECTION_RESUMED' });
    }),
    G(['TYPING_START'], (e) => {
        null != e.member && V(e.guild_id, e.member.user, e.member),
            F({
                type: 'TYPING_START',
                channelId: e.channel_id,
                userId: e.user_id
            });
    }),
    G(['GUILD_RING_START'], (e) => {
        F({
            type: 'GUILD_RING_START',
            ringing: e.ringing,
            channelId: e.channel_id,
            guildId: e.guild_id
        });
    }),
    G(['GUILD_RING_STOP'], (e) => {
        F({
            type: 'GUILD_RING_STOP',
            ringing: e.ringing,
            channelId: e.channel_id,
            guildId: e.guild_id
        });
    }),
    G(['ACTIVITY_START'], (e) => {
        F({
            type: 'ACTIVITY_START',
            userId: e.user_id,
            activity: e.activity
        });
    }),
    G(['ACTIVITY_USER_ACTION'], (e) => {
        F({
            type: 'ACTIVITY_USER_ACTION',
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id
        });
    }),
    B(
        ['MESSAGE_CREATE'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e) => {
            j(e),
                null != e.author &&
                    F({
                        type: 'MESSAGE_CREATE',
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1
                    });
        }
    ),
    B(
        ['MESSAGE_UPDATE'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e) => {
            j(e),
                F({
                    type: 'MESSAGE_UPDATE',
                    guildId: e.guild_id,
                    message: e
                });
        }
    ),
    B(
        ['MESSAGE_DELETE'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e) => {
            F({
                type: 'MESSAGE_DELETE',
                guildId: e.guild_id,
                id: e.id,
                channelId: e.channel_id
            });
        }
    ),
    B(
        ['MESSAGE_DELETE_BULK'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e) => {
            F({
                type: 'MESSAGE_DELETE_BULK',
                guildId: e.guild_id,
                ids: e.ids,
                channelId: e.channel_id
            });
        }
    ),
    B(
        ['MESSAGE_ACK'],
        (e) => I.o.loadGuildFromChannelId(e.channel_id),
        (e) => {
            F({
                type: 'MESSAGE_ACK',
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version
            });
        }
    ),
    G(['GUILD_FEATURE_ACK'], (e) => {
        F({
            type: 'GUILD_FEATURE_ACK',
            id: e.resource_id,
            ackType: e.ack_type,
            ackedId: e.entity_id
        });
    }),
    G(['USER_NON_CHANNEL_ACK'], (e) => {
        F({
            type: 'USER_NON_CHANNEL_ACK',
            ackType: e.ack_type,
            ackedId: e.entity_id
        });
    }),
    B(
        ['CHANNEL_PINS_ACK'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e) => {
            F({
                type: 'CHANNEL_PINS_ACK',
                channelId: e.channel_id,
                timestamp: e.timestamp,
                version: e.version
            });
        }
    ),
    B(
        ['CHANNEL_PINS_UPDATE'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e) => {
            F({
                type: 'CHANNEL_PINS_UPDATE',
                channelId: e.channel_id,
                lastPinTimestamp: e.last_pin_timestamp
            });
        }
    ),
    B(
        ['CHANNEL_CREATE', 'CHANNEL_DELETE'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            F({
                type: t,
                channel: (0, E.q_)(e)
            });
        }
    ),
    G(['VOICE_CHANNEL_STATUS_UPDATE'], (e, t) => {
        F({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            status: e.status
        });
    }),
    G(['CHANNEL_STATUSES'], (e, t) => {
        F({
            type: t,
            guildId: e.guild_id,
            channels: e.channels
        });
    }),
    B(
        ['CHANNEL_UPDATE'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e) => {
            P.add(e);
        }
    ),
    B(
        ['THREAD_CREATE', 'THREAD_UPDATE', 'THREAD_DELETE'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n, ...i } = e;
            F({
                type: t,
                isNewlyCreated: n,
                channel: (0, E.q_)(i)
            });
        }
    ),
    B(
        ['THREAD_LIST_SYNC'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e) => {
            F({
                type: 'THREAD_LIST_SYNC',
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = I.Z.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, E.q_)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? r().map(e.members, h.Z) : void 0,
                channelIds: e.channel_ids
            });
        }
    ),
    G(['THREAD_MEMBER_UPDATE'], (e) => {
        F({
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
    G(['THREAD_MEMBERS_UPDATE'], (e) => {
        var t;
        F({
            type: 'THREAD_MEMBERS_UPDATE',
            id: e.id,
            guildId: e.guild_id,
            memberCount: e.member_count,
            addedMembers:
                null === (t = e.added_members) || void 0 === t
                    ? void 0
                    : t.map((t) => ({
                          id: t.id,
                          guildId: e.guild_id,
                          userId: t.user_id,
                          flags: t.flags,
                          joinTimestamp: t.join_timestamp
                      })),
            removedMemberIds: e.removed_member_ids,
            memberIdsPreview: e.member_ids_preview
        });
    }),
    G(['FORUM_UNREADS'], (e) => {
        e.permission_denied ||
            F({
                type: 'FORUM_UNREADS',
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({
                    threadId: e.thread_id,
                    missing: e.missing,
                    count: e.count
                }))
            });
    }),
    G(['SOUNDBOARD_SOUNDS'], (e) => {
        w.add(e);
    }),
    G(['CHANNEL_RECIPIENT_ADD', 'CHANNEL_RECIPIENT_REMOVE'], (e, t) => {
        let n = I.Z.getBasicChannel(e.channel_id);
        F({
            type: t,
            channelId: e.channel_id,
            user: e.user,
            nick: e.nick,
            isMember: null != n
        });
    }),
    B(
        ['GUILD_CREATE'],
        (e) => ('full' === e.data_mode ? null : I.o.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable)
                F({
                    type: 'GUILD_UNAVAILABLE',
                    guildId: e.id
                });
            else {
                let t = O.J2(e);
                o.Z.createGuild(t),
                    F({
                        type: 'VOICE_STATE_UPDATES',
                        voiceStates: t.voice_states.map((e) => {
                            var n, i;
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
                                requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null,
                                discoverable: null === (i = e.discoverable) || void 0 === i || i
                            };
                        })
                    });
            }
        }
    ),
    G(['GUILD_UPDATE'], (e) => {
        F({
            type: 'GUILD_UPDATE',
            guild: e
        }),
            e.unavailable &&
                F({
                    type: 'GUILD_UNAVAILABLE',
                    guildId: e.id
                });
    }),
    G(['GUILD_DELETE'], (e) => {
        F({
            type: 'GUILD_DELETE',
            guild: e
        }),
            e.geo_restricted
                ? F({
                      type: 'GUILD_GEO_RESTRICTED',
                      guildId: e.id,
                      icon: e.icon,
                      name: e.name
                  })
                : e.unavailable &&
                  F({
                      type: 'GUILD_UNAVAILABLE',
                      guildId: e.id
                  });
    }),
    G(['GUILD_MEMBERS_CHUNK'], (e) => {
        a.ZP.Emitter.batched(() => {
            M.add({
                guildId: e.guild_id,
                members: e.members,
                notFound: e.not_found
            }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let { user: n, status: i, client_status: r, activities: a, hidden_activities: s } = t;
                        return Y({
                            guildId: e.guild_id,
                            user: n,
                            status: i,
                            activities: a,
                            hiddenActivities: s,
                            clientStatus: r
                        });
                    }),
                D.Z.flush('GUILD_MEMBERS_CHUNK');
        });
    }),
    G(['THREAD_MEMBER_LIST_UPDATE'], (e) => {
        a.ZP.Emitter.batched(() => {
            F({
                type: 'THREAD_MEMBER_LIST_UPDATE',
                guildId: e.guild_id,
                threadId: e.thread_id,
                members: e.members
            }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let { user: n, status: i, client_status: r, activities: a, hidden_activities: s } = t;
                        return Y({
                            guildId: e.guild_id,
                            user: n,
                            status: i,
                            activities: a,
                            hiddenActivities: s,
                            clientStatus: r
                        });
                    }),
                D.Z.flush();
        });
    }),
    G(['GUILD_BAN_ADD', 'GUILD_BAN_REMOVE', 'GUILD_MEMBER_ADD', 'GUILD_MEMBER_UPDATE', 'GUILD_MEMBER_REMOVE'], (e, t) => {
        F({
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
            flags: e.flags
        });
    }),
    B(
        ['GUILD_ROLE_CREATE', 'GUILD_ROLE_UPDATE'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            F({
                type: t,
                guildId: e.guild_id,
                role: e.role
            });
        }
    ),
    B(
        ['GUILD_ROLE_DELETE'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e) => {
            F({
                type: 'GUILD_ROLE_DELETE',
                guildId: e.guild_id,
                roleId: e.role_id,
                version: e.version
            });
        }
    ),
    G(['GUILD_EMOJIS_UPDATE'], (e) => {
        F({
            type: 'GUILD_EMOJIS_UPDATE',
            guildId: e.guild_id,
            emojis: e.emojis
        });
    }),
    G(['GUILD_STICKERS_UPDATE'], (e) => {
        F({
            type: 'GUILD_STICKERS_UPDATE',
            guildId: e.guild_id,
            stickers: e.stickers
        });
    }),
    G(['GUILD_INTEGRATIONS_UPDATE'], (e) => {
        F({
            type: 'GUILD_INTEGRATIONS_UPDATE',
            guildId: e.guild_id
        });
    }),
    G(['INTEGRATION_CREATE'], (e) => {
        F({
            type: 'INTEGRATION_CREATE',
            application: e.application,
            guildId: e.guild_id
        });
    }),
    G(['INTEGRATION_DELETE'], (e) => {
        F({
            type: 'INTEGRATION_DELETE',
            applicationId: e.application_id,
            guildId: e.guild_id
        });
    }),
    G(['USER_UPDATE'], (e) => {
        F({
            type: 'CURRENT_USER_UPDATE',
            user: e
        });
    }),
    G(['USER_SETTINGS_PROTO_UPDATE'], (e) => {
        let t = (0, g.kI)(e.settings.type, e.settings.proto);
        if (null != t) {
            if ('string' == typeof t)
                throw (
                    (console.error('Invalid proto: |'.concat(t, '| |').concat(e.settings.proto, '|')),
                    console.error({
                        parsed: t,
                        wire: e.settings.proto,
                        type: e.settings.type
                    }),
                    Error('UserSettingsProto must not be a string'))
                );
            F({
                type: 'USER_SETTINGS_PROTO_UPDATE',
                settings: {
                    proto: t,
                    type: e.settings.type
                },
                partial: e.partial
            });
        }
    }),
    G(['USER_GUILD_SETTINGS_UPDATE'], (e) => {
        F({
            type: 'USER_GUILD_SETTINGS_FULL_UPDATE',
            userGuildSettings: [e]
        });
    }),
    G(['USER_CONNECTIONS_UPDATE'], () => {
        F({ type: 'USER_CONNECTIONS_UPDATE' });
    }),
    G(['USER_REQUIRED_ACTION_UPDATE'], (e) => {
        F({
            type: 'USER_REQUIRED_ACTION_UPDATE',
            requiredAction: e.required_action
        });
    }),
    G(['USER_NOTE_UPDATE'], (e) => {
        F({
            type: 'USER_NOTE_UPDATE',
            ...e
        });
    }),
    G(['RELATIONSHIP_ADD'], (e) => {
        F({
            type: 'RELATIONSHIP_ADD',
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                since: e.since,
                nickname: e.nickname,
                isSpamRequest: e.is_spam_request || !1,
                isStrangerRequest: e.is_stranger_request || !1,
                userIgnored: e.user_ignored || !1,
                originApplicationId: e.origin_application_id
            },
            shouldNotify: !0 === e.should_notify
        });
    }),
    G(['RELATIONSHIP_REMOVE'], (e) => {
        F({
            type: 'RELATIONSHIP_REMOVE',
            relationship: e
        });
    }),
    G(['RELATIONSHIP_UPDATE'], (e) => {
        F({
            type: 'RELATIONSHIP_UPDATE',
            relationship: {
                id: e.id,
                type: e.type,
                user: e.user,
                nickname: e.nickname,
                since: e.since,
                isSpamRequest: e.is_spam_request || !1,
                isStrangerRequest: e.is_stranger_request || !1,
                userIgnored: e.user_ignored || !1,
                originApplicationId: e.origin_application_id
            }
        });
    }),
    G(['GAME_RELATIONSHIP_ADD'], (e) => {
        F({
            type: 'GAME_RELATIONSHIP_ADD',
            gameRelationship: {
                id: e.id,
                applicationId: e.application_id,
                type: e.type,
                since: e.since,
                dmAccessType: e.dm_access_type,
                user: e.user
            }
        });
    }),
    G(['GAME_RELATIONSHIP_REMOVE'], (e) => {
        F({
            type: 'GAME_RELATIONSHIP_REMOVE',
            userId: e.id,
            applicationId: e.application_id
        });
    }),
    G(['PRESENCE_UPDATE'], (e) => {
        Y({
            guildId: e.guild_id,
            user: e.user,
            status: e.status,
            activities: e.activities,
            hiddenActivities: e.hidden_activities,
            clientStatus: e.client_status
        });
    }),
    G(['PRESENCES_REPLACE'], (e) => {
        F({
            type: 'PRESENCES_REPLACE',
            presences: e
        });
    }),
    G(['SESSIONS_REPLACE'], (e) => {
        F({
            type: 'SESSIONS_REPLACE',
            sessions: H(e)
        });
    }),
    G(['VOICE_STATE_UPDATE'], (e) => {
        var t, n;
        null != e.member && V(e.guild_id, e.member.user, e.member),
            F({
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
                        requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
                        discoverable: null === (n = e.discoverable) || void 0 === n || n,
                        oldChannelId: A.Z.getUserVoiceChannelId(e.guild_id, e.user_id)
                    }
                ]
            });
    }),
    G(['VOICE_SERVER_UPDATE'], (e) => {
        F({
            type: 'VOICE_SERVER_UPDATE',
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token
        });
    }),
    G(['CALL_CREATE'], (e) => {
        F({
            type: 'CALL_CREATE',
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        });
        let t = e.voice_states;
        null != t &&
            F({
                type: 'VOICE_STATE_UPDATES',
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
                        requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
                        discoverable: null === (n = e.discoverable) || void 0 === n || n
                    };
                })
            });
    }),
    G(['CALL_UPDATE'], (e) => {
        F({
            type: 'CALL_UPDATE',
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        });
    }),
    G(['CALL_DELETE'], (e) => {
        F({
            type: 'CALL_DELETE',
            channelId: e.channel_id,
            unavailable: e.unavailable
        });
    }),
    G(['OAUTH2_TOKEN_REVOKE'], (e) => {
        F({
            type: 'OAUTH2_TOKEN_REVOKE',
            accessToken: e.access_token
        });
    }),
    G(['RECENT_MENTION_DELETE'], (e) => {
        F({
            type: 'RECENT_MENTION_DELETE',
            id: e.message_id
        });
    }),
    G(['SAVED_MESSAGE_CREATE'], (e) => {
        F({
            type: 'SAVED_MESSAGE_CREATE',
            savedMessage: (0, p.jk)(e)
        });
    }),
    G(['SAVED_MESSAGE_DELETE'], (e) => {
        F({
            type: 'SAVED_MESSAGE_DELETE',
            savedMessageData: (0, p.$_)(e)
        });
    }),
    G(['FRIEND_SUGGESTION_CREATE'], (e) => {
        F({
            type: 'FRIEND_SUGGESTION_CREATE',
            suggestion: e
        });
    }),
    G(['FRIEND_SUGGESTION_DELETE'], (e) => {
        F({
            type: 'FRIEND_SUGGESTION_DELETE',
            suggestedUserId: e.suggested_user_id
        });
    }),
    G(['WEBHOOKS_UPDATE'], (e) => {
        F({
            type: 'WEBHOOKS_UPDATE',
            guildId: e.guild_id,
            channelId: e.channel_id
        });
    }),
    G(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'], (e, t) => {
        F({
            type: t,
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: e.emoji,
            colors: e.burst_colors,
            reactionType: e.type,
            messageAuthorId: e.message_author_id
        });
    }),
    G(['MESSAGE_POLL_VOTE_ADD', 'MESSAGE_POLL_VOTE_REMOVE'], (e, t) => {
        F({
            type: 'MESSAGE_POLL_VOTE_ADD' === t ? 'MESSAGE_REACTION_ADD' : 'MESSAGE_REACTION_REMOVE',
            channelId: e.channel_id,
            messageId: e.message_id,
            userId: e.user_id,
            emoji: {
                id: e.answer_id,
                name: ''
            },
            reactionType: _.O.VOTE
        });
    }),
    G(['MESSAGE_REACTION_REMOVE_ALL'], (e) => {
        F({
            type: 'MESSAGE_REACTION_REMOVE_ALL',
            channelId: e.channel_id,
            messageId: e.message_id
        });
    }),
    G(['MESSAGE_REACTION_REMOVE_EMOJI'], (e) => {
        F({
            type: 'MESSAGE_REACTION_REMOVE_EMOJI',
            channelId: e.channel_id,
            messageId: e.message_id,
            emoji: e.emoji
        });
    }),
    G(['MESSAGE_REACTION_ADD_MANY'], (e) => {
        F({
            type: 'MESSAGE_REACTION_ADD_MANY',
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions
        });
    }),
    G(['PAYMENT_UPDATE'], (e) => {
        F({
            type: 'PAYMENT_UPDATE',
            payment: e
        });
    }),
    G(['ENTITLEMENT_CREATE', 'ENTITLEMENT_UPDATE', 'ENTITLEMENT_DELETE'], (e, t) => {
        F({
            type: t,
            entitlement: e
        });
    }),
    G(['USER_PAYMENT_SOURCES_UPDATE'], () => {
        b.Z.hasLayers() && (n(355467).tZ(), l.Gn(N.Z.getFetchedSKUIDs()));
    }),
    G(['USER_SUBSCRIPTIONS_UPDATE'], () => {
        u.k(), b.Z.hasLayers() && n(355467).jg();
    }),
    G(['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE'], (e) => {
        F({
            type: 'GUILD_BOOST_SLOT_CREATE',
            guildBoostSlot: v.Z.createFromServer(e, C.ZP.getSubscriptionById(e.subscription_id))
        });
    }),
    G(['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE'], (e) => {
        F({
            type: 'GUILD_BOOST_SLOT_UPDATE',
            guildBoostSlot: v.Z.createFromServer(e, C.ZP.getSubscriptionById(e.subscription_id))
        });
    }),
    G(['BILLING_POPUP_BRIDGE_CALLBACK'], (e) => {
        F({
            type: 'BILLING_POPUP_BRIDGE_CALLBACK',
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query
        });
    }),
    G(['USER_PAYMENT_BROWSER_CHECKOUT_DONE'], (e) => {
        F({
            type: 'USER_PAYMENT_BROWSER_CHECKOUT_DONE',
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id
        });
    }),
    G(['USER_PAYMENT_CLIENT_ADD'], (e) => {
        (0, R.L)().then((t) => {
            let n = e.purchase_token_hash;
            n === t &&
                F({
                    type: 'USER_PAYMENT_CLIENT_ADD',
                    purchaseTokenHash: n,
                    expiresAt: e.expires_at
                });
        });
    }),
    G(['GUILD_MEMBER_LIST_UPDATE'], (e) => {
        a.ZP.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((V(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: i } = n;
                Y({
                    guildId: e.guild_id,
                    user: i.user,
                    status: i.status,
                    activities: i.activities,
                    hiddenActivities: i.hidden_activities,
                    clientStatus: i.client_status
                });
            };
            e.ops.forEach((e) => {
                let { op: n, items: i, item: r } = e;
                switch (n) {
                    case 'SYNC':
                        i.forEach(t);
                        break;
                    case 'UPDATE':
                    case 'INSERT':
                        t(r);
                }
            }),
                D.Z.flush(),
                F({
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
    G(['GIFT_CODE_UPDATE'], (e) => {
        F({
            type: 'GIFT_CODE_UPDATE',
            uses: e.uses,
            code: e.code
        });
    }),
    G(['GIFT_CODE_CREATE'], (e) => {
        F({
            type: 'GIFT_CODE_CREATE',
            giftCode: e
        });
    }),
    G(['LIBRARY_APPLICATION_UPDATE'], (e) => {
        F({
            type: 'LIBRARY_APPLICATION_UPDATE',
            libraryApplication: e
        });
    }),
    G(['STREAM_CREATE'], (e) => {
        F({
            type: 'STREAM_CREATE',
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            paused: e.paused
        });
    }),
    G(['STREAM_SERVER_UPDATE'], (e) => {
        F({
            type: 'STREAM_SERVER_UPDATE',
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token
        });
    }),
    G(['STREAM_UPDATE'], (e) => {
        F({
            type: 'STREAM_UPDATE',
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused
        });
    }),
    G(['STREAM_DELETE'], (e) => {
        F({
            type: 'STREAM_DELETE',
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason
        });
    }),
    G(['GENERIC_PUSH_NOTIFICATION_SENT'], (e) => {
        F({
            type: 'GENERIC_PUSH_NOTIFICATION_SENT',
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag
        });
    }),
    G(['REACTION_NOTIFICATION_SENT'], (e) => {
        F({
            type: 'REACTION_NOTIFICATION_SENT',
            route: e.route,
            message: e.message,
            emoji: e.emoji,
            reactorUserId: e.reactor_user_id
        });
    }),
    G(['NOTIFICATION_CENTER_ITEM_CREATE'], (e) => {
        F({
            type: 'NOTIFICATION_CENTER_ITEM_CREATE',
            item: e
        });
    }),
    G(['NOTIFICATION_CENTER_ITEM_DELETE'], (e) => {
        F({
            type: 'NOTIFICATION_CENTER_ITEM_DELETE',
            id: e.id
        });
    }),
    G(['NOTIFICATION_CENTER_ITEMS_ACK'], (e) => {
        F({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK',
            ids: [e.id],
            optimistic: !1
        });
    }),
    G(['NOTIFICATION_CENTER_ITEM_COMPLETED'], (e) => {
        F({
            type: 'NOTIFICATION_CENTER_ITEM_COMPLETED',
            item_enum: e.item_enum
        });
    }),
    G(['QUESTS_USER_STATUS_UPDATE'], (e) => {
        F({
            type: 'QUESTS_USER_STATUS_UPDATE',
            user_status: e.user_status
        });
    }),
    G(['APPLICATION_COMMAND_PERMISSIONS_UPDATE'], (e, t) => {
        F({
            type: t,
            guildId: e.guild_id
        });
    }),
    G(['GUILD_APPLICATION_COMMAND_INDEX_UPDATE'], (e) => {
        F({
            type: 'GUILD_APPLICATION_COMMAND_INDEX_UPDATE',
            guildId: e.guild_id,
            version: e.version
        });
    }),
    G(['GUILD_JOIN_REQUEST_CREATE'], (e) => {
        F({
            type: 'GUILD_JOIN_REQUEST_CREATE',
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        });
    }),
    G(['GUILD_JOIN_REQUEST_UPDATE'], (e) => {
        F({
            type: 'GUILD_JOIN_REQUEST_UPDATE',
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        });
    }),
    G(['GUILD_JOIN_REQUEST_DELETE'], (e) => {
        F({
            type: 'GUILD_JOIN_REQUEST_DELETE',
            id: e.id,
            userId: e.user_id,
            guildId: e.guild_id
        });
    }),
    G(['INTERACTION_CREATE'], (e) => {
        F({
            type: 'INTERACTION_CREATE',
            interactionId: e.id,
            nonce: e.nonce
        });
    }),
    G(['INTERACTION_SUCCESS'], (e) => {
        F({
            type: 'INTERACTION_SUCCESS',
            interactionId: e.id,
            nonce: e.nonce
        });
    }),
    G(['INTERACTION_FAILURE'], (e) => {
        F({
            type: 'INTERACTION_FAILURE',
            nonce: e.nonce,
            reasonCode: e.reason_code
        });
    }),
    G(['APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE'], (e) => {
        F({
            type: 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE',
            choices: e.choices,
            nonce: e.nonce
        });
    }),
    G(['INTERACTION_MODAL_CREATE'], (e) => {
        F({
            type: 'INTERACTION_MODAL_CREATE',
            id: e.id,
            channelId: e.channel_id,
            customId: e.custom_id,
            application: e.application,
            title: e.title,
            components: (0, f.uZ)(e.components),
            nonce: e.nonce
        });
    }),
    G(['INTERACTION_IFRAME_MODAL_CREATE'], (e) => {
        F({
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
    G(['STAGE_INSTANCE_CREATE'], (e) => {
        F({
            type: 'STAGE_INSTANCE_CREATE',
            instance: e
        });
    }),
    G(['STAGE_INSTANCE_UPDATE'], (e) => {
        F({
            type: 'STAGE_INSTANCE_UPDATE',
            instance: e
        });
    }),
    G(['STAGE_INSTANCE_DELETE'], (e) => {
        F({
            type: 'STAGE_INSTANCE_DELETE',
            instance: e
        });
    }),
    G(['GUILD_SCHEDULED_EVENT_CREATE'], (e) => {
        F({
            type: 'GUILD_SCHEDULED_EVENT_CREATE',
            guildScheduledEvent: e
        });
    }),
    G(['GUILD_SCHEDULED_EVENT_UPDATE'], (e) => {
        F({
            type: 'GUILD_SCHEDULED_EVENT_UPDATE',
            guildScheduledEvent: e
        });
    }),
    G(['GUILD_SCHEDULED_EVENT_DELETE'], (e) => {
        F({
            type: 'GUILD_SCHEDULED_EVENT_DELETE',
            guildScheduledEvent: e
        });
    }),
    G(['GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE'], (e) => {
        F({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE',
            eventException: e
        });
    }),
    G(['GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE'], (e) => {
        F({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE',
            eventException: e
        });
    }),
    G(['GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE'], (e) => {
        F({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE',
            eventException: e
        });
    }),
    G(['GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE'], (e) => {
        F({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE',
            eventId: e.event_id
        });
    }),
    G(['GUILD_SCHEDULED_EVENT_USER_ADD'], (e) => {
        F({
            type: 'GUILD_SCHEDULED_EVENT_USER_ADD',
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        });
    }),
    G(['GUILD_SCHEDULED_EVENT_USER_REMOVE'], (e) => {
        F({
            type: 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        });
    }),
    G(['GUILD_DIRECTORY_ENTRY_CREATE'], (e) => {
        F({
            type: 'GUILD_DIRECTORY_ENTRY_CREATE',
            channelId: e.directory_channel_id,
            entry: e
        });
    }),
    G(['GUILD_DIRECTORY_ENTRY_UPDATE'], (e) => {
        F({
            type: 'GUILD_DIRECTORY_ENTRY_UPDATE',
            channelId: e.directory_channel_id,
            entry: e
        });
    }),
    G(['GUILD_DIRECTORY_ENTRY_DELETE'], (e) => {
        F({
            type: 'GUILD_DIRECTORY_ENTRY_DELETE',
            channelId: e.directory_channel_id,
            guildId: e.entity_id
        });
    }),
    G(['AUTO_MODERATION_MENTION_RAID_DETECTION'], (e) => {
        F({
            type: 'AUTO_MODERATION_MENTION_RAID_DETECTION',
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
        });
    }),
    G(['VOICE_CHANNEL_EFFECT_SEND'], (e) => {
        F({
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
    G(['GUILD_SOUNDBOARD_SOUND_CREATE'], (e) => {
        F({
            type: 'GUILD_SOUNDBOARD_SOUND_CREATE',
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new y.Z(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        });
    }),
    G(['GUILD_SOUNDBOARD_SOUND_UPDATE'], (e) => {
        F({
            type: 'GUILD_SOUNDBOARD_SOUND_UPDATE',
            sound: {
                guildId: e.guild_id,
                name: e.name,
                soundId: e.sound_id,
                user: new y.Z(e.user),
                userId: e.user_id,
                volume: e.volume,
                emojiId: e.emoji_id,
                emojiName: e.emoji_name,
                available: e.available
            }
        });
    }),
    G(['GUILD_SOUNDBOARD_SOUND_DELETE'], (e) => {
        F({
            type: 'GUILD_SOUNDBOARD_SOUND_DELETE',
            guildId: e.guild_id,
            soundId: e.sound_id
        });
    }),
    G(['GUILD_SOUNDBOARD_SOUNDS_UPDATE'], (e) => {
        F({
            type: 'GUILD_SOUNDBOARD_SOUNDS_UPDATE',
            guildId: e.guild_id,
            soundboardSounds: e.soundboard_sounds.map((t) => ({
                name: t.name,
                soundId: t.sound_id,
                emojiName: t.emoji_name,
                emojiId: t.emoji_id,
                userId: t.user_id,
                volume: t.volume,
                available: t.available,
                guildId: e.guild_id
            }))
        });
    }),
    B(
        ['EMBEDDED_ACTIVITY_UPDATE_V2'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e) => {
            F({
                type: 'EMBEDDED_ACTIVITY_UPDATE_V2',
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants
            });
        }
    ),
    G(['AUTH_SESSION_CHANGE'], (e) => {
        F({
            type: 'AUTH_SESSION_CHANGE',
            authSessionIdHash: e.auth_session_id_hash
        });
    }),
    G(['USER_CONNECTIONS_LINK_CALLBACK'], (e) => {
        F({
            type: 'USER_CONNECTIONS_LINK_CALLBACK',
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state
        });
    }),
    G(['USER_CONNECTIONS_CALLBACK'], (e) => {
        F({
            type: 'USER_CONNECTIONS_CALLBACK',
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params
        });
    }),
    G(['DELETED_ENTITY_IDS'], (e) => {
        F({
            type: 'DELETED_ENTITY_IDS',
            ...e
        });
    }),
    B(
        ['CHANNEL_SYNC'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e) => {
            e.channels.forEach((e) => {
                P.add(e);
            }),
                F({
                    type: 'CHANNEL_SYNC',
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check
                });
        }
    ),
    G(['CONSOLE_COMMAND_UPDATE'], (e) => {
        F({
            type: 'CONSOLE_COMMAND_UPDATE',
            id: e.id,
            result: e.result,
            error: e.error
        });
    }),
    B(
        ['PASSIVE_UPDATE_V2'],
        (e) => I.o.loadGuildIds([e.guild_id]),
        (e) => {
            F({
                type: 'PASSIVE_UPDATE_V2',
                guildId: e.guild_id,
                members: e.updated_members,
                channels: e.updated_channels.map((e) => ({
                    id: e.id,
                    lastMessageId: e.last_message_id,
                    lastPinTimestamp: e.last_pin_timestamp
                })),
                voiceStates: e.updated_voice_states.map((e) => {
                    var t, n;
                    return {
                        channelId: e.channel_id,
                        deaf: e.deaf || !1,
                        mute: e.mute || !1,
                        requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
                        selfDeaf: e.self_deaf || !1,
                        selfMute: e.self_mute || !1,
                        selfStream: e.self_stream || !1,
                        selfVideo: e.self_video || !1,
                        sessionId: e.session_id,
                        suppress: e.suppress,
                        userId: e.user_id,
                        discoverable: null === (n = e.discoverable) || void 0 === n || n
                    };
                }),
                removedVoiceStateUsers: e.removed_voice_states
            });
        }
    ),
    G(['CREATOR_MONETIZATION_RESTRICTIONS_UPDATE'], (e) => {
        F({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS',
            guildId: e.guild_id,
            restrictions: e.restrictions
        });
    }),
    G(['BILLING_REFERRAL_TRIAL_OFFER_UPDATE'], (e) => {
        F({
            type: 'BILLING_REFERRAL_TRIAL_OFFER_UPDATE',
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id
        });
    }),
    G(['LAST_MESSAGES'], (e) => {
        F({
            type: 'MESSAGE_PREVIEWS_LOADED',
            guildId: e.guild_id,
            messages: e.messages
        });
    }),
    G(['AUTHENTICATOR_UPDATE'], (e) => {
        F({
            type: 'AUTHENTICATOR_UPDATE',
            credential: e
        });
    }),
    G(['AUTHENTICATOR_CREATE'], (e) => {
        F({
            type: 'AUTHENTICATOR_CREATE',
            credential: e
        });
    }),
    G(['AUTHENTICATOR_DELETE'], (e) => {
        F({
            type: 'AUTHENTICATOR_DELETE',
            credential: e
        });
    }),
    G(['NOTIFICATION_SETTINGS_UPDATE'], (e) => {
        F({
            type: 'NOTIFICATION_SETTINGS_UPDATE',
            settings: { flags: e.flags }
        });
    }),
    G(['GAME_INVITE_CREATE'], (e) => {
        F({
            type: 'GAME_INVITE_CREATE',
            gameInvite: e
        });
    }),
    G(['GAME_INVITE_DELETE'], (e) => {
        F({
            type: 'GAME_INVITE_DELETE',
            inviteId: e.invite_id
        });
    }),
    G(['GAME_INVITE_DELETE_MANY'], (e) => {
        F({
            type: 'GAME_INVITE_DELETE_MANY',
            inviteIds: e.invite_ids
        });
    }),
    G(['CONVERSATION_SUMMARY_UPDATE'], (e) => {
        F({
            type: 'CONVERSATION_SUMMARY_UPDATE',
            ...e
        });
    }),
    G(['PREMIUM_MARKETING_PREVIEW'], (e) => {
        F({
            type: 'PREMIUM_MARKETING_PREVIEW',
            properties: e.properties
        });
    }),
    G(['USER_APPLICATION_UPDATE'], (e) => {
        F({
            type: 'USER_APPLICATION_UPDATE',
            applicationId: e.application_id
        });
    }),
    G(['USER_APPLICATION_REMOVE'], (e) => {
        F({
            type: 'USER_APPLICATION_REMOVE',
            applicationId: e.application_id
        });
    }),
    G(['DM_SETTINGS_UPSELL_SHOW'], (e) => {
        F({
            type: 'DM_SETTINGS_UPSELL_SHOW',
            guildId: e.guild_id
        });
    }),
    G(['CONTENT_INVENTORY_INBOX_STALE'], (e) => {
        F({
            type: 'CONTENT_INVENTORY_INBOX_STALE',
            refreshAfterMs: e.refresh_after_ms
        });
    }),
    G(['VIRTUAL_CURRENCY_BALANCE_UPDATE'], (e) => {
        F({
            type: 'VIRTUAL_CURRENCY_BALANCE_UPDATE',
            balance: e.balance
        });
    });
