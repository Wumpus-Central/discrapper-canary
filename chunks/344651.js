n.d(t, { Z: () => Y }), n(653041), n(47120), n(789020), n(411104);
var r = n(392711),
    i = n.n(r);
n(724522);
var o = n(442837),
    a = n(570140),
    s = n(749210),
    l = n(821849),
    c = n(232567),
    u = n(864106),
    d = n(710845),
    f = n(292419),
    _ = n(566006),
    p = n(686478),
    h = n(952537),
    m = n(218543),
    g = n(48481),
    E = n(131704),
    b = n(209747),
    y = n(598077),
    v = n(592125),
    O = n(271383),
    I = n(819640),
    S = n(594174),
    T = n(979651),
    N = n(509545),
    A = n(78839),
    C = n(936101),
    R = n(868158),
    P = n(483012),
    w = n(955132);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = j(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let U = new d.Z('ConnectionStore'),
    G = new P.Z(
        w.Wb,
        (e, t) => {
            var n;
            e =
                null != e
                    ? e
                    : {
                          type: 'CHANNEL_UPDATES',
                          channels: []
                      };
            let r = (0, E.q_)(t),
                i = v.Z.getChannel(t.id),
                o =
                    null == i
                        ? void 0
                        : i.merge(
                              M(L({}, r), {
                                  recipients: i.recipients,
                                  bitrate: null != (n = r.bitrate) ? n : i.bitrate
                              })
                          );
            return e.channels.push(null != o ? o : r), e;
        },
        (e) => 'CHANNEL_UPDATE' !== e
    ),
    B = new P.Z(
        w.Wb,
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
    F = new P.Z(
        w.Wb,
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
    V = new P.Z(
        w.Wb,
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
    Z = {};
function H(e, t) {
    for (let n of e)
        Z[n] = {
            preload: () => null,
            dispatch: t
        };
}
function W(e, t, n) {
    for (let r of e)
        Z[r] = {
            preload: t,
            dispatch: n
        };
}
function Y(e) {
    return Z[e];
}
function K(e) {
    a.Z.dispatch(e).catch((t) =>
        w.Wb.resetSocketOnDispatchError({
            error: t,
            action: e.type
        })
    );
}
function z(e, t, n) {
    var r, o;
    let { roles: a, nick: s, avatar: l, avatar_decoration_data: c, flags: d, premium_since: f, pending: _, joined_at: p, communication_disabled_until: h, unusual_dm_activity_until: m } = n,
        g = O.ZP.getMember(e, t.id);
    (null != g && g.nick === s && g.avatar === l && i().isEqual(g.roles, a) && (0, u.sr)(null != (r = g.avatarDecoration) ? r : null, null != c ? c : null) && g.premiumSince === f && g.isPending === _ && g.joinedAt === p && g.communicationDisabledUntil === h && g.flags === d && (null != (o = g.unusualDMActivityUntil) ? o : null) === (null != m ? m : null)) ||
        K({
            type: 'GUILD_MEMBER_ADD',
            guildId: e,
            user: t,
            roles: a,
            nick: s,
            avatar: l,
            avatarDecoration: c,
            premiumSince: f,
            isPending: _,
            joinedAt: p,
            communicationDisabledUntil: h,
            unusualDMActivityUntil: m,
            flags: d
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
function Q(e) {
    return e.map((e) => {
        var t;
        return {
            sessionId: e.session_id,
            lastModified: e.last_modified,
            status: e.status,
            activities: e.activities,
            hiddenActivities: null != (t = e.hidden_activities) ? t : [],
            active: !!e.active,
            clientInfo: e.client_info
        };
    });
}
function X(e) {
    let { guildId: t, user: n, status: r, activities: i, hiddenActivities: o, clientStatus: a } = e;
    V.add({
        guildId: t,
        user: n,
        status: r,
        clientStatus: a,
        activities: i,
        hiddenActivities: o
    });
}
W(
    ['INITIAL_GUILD'],
    (e) => ('full' === e.data_mode ? null : v.o.loadGuildIds([e.id])),
    (e) => {
        m.Z.initialGuild.measure(() => {
            o.ZP.Emitter.batched(() => {
                let t = R.Fx(e, w.Wb.identifyStartTime);
                null != S.default.getCurrentUser() &&
                    (K({
                        type: 'GUILD_CREATE',
                        guild: t
                    }),
                    K({
                        type: 'VOICE_STATE_UPDATES',
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
                                discoverable: null == (r = e.discoverable) || r
                            };
                        })
                    }),
                    U.log('Dispatched INITIAL_GUILD '.concat(e.id)));
            });
        });
    }
),
    H(['READY_SUPPLEMENTAL'], (e) => {
        m.Z.readySupplemental.measure(() => {
            o.ZP.Emitter.batched(() => {
                var t, n;
                e = m.Z.hydrateReadySupplemental.measure(() => R.r$(e, w.Wb.identifyStartTime));
                let r = (e) =>
                        e.map((e) => ({
                            user: e.user,
                            status: e.status,
                            clientStatus: e.client_status,
                            activities: e.activities,
                            hiddenActivities: e.hidden_activities
                        })),
                    i = e.guilds.filter((e) => !0 !== e.unavailable);
                i.forEach((e) => {
                    e.presences = r(e.presences || []);
                });
                let o = e.presences ? r(e.presences) : [],
                    a = (null != (t = e.lazy_private_channels) ? t : []).map((e) => (0, E.q_)(e)),
                    s = null != (n = e.game_invites) ? n : [];
                m.Z.dispatchReadySupplemental.measure(() => {
                    K({
                        type: 'CONNECTION_OPEN_SUPPLEMENTAL',
                        guilds: i,
                        presences: o,
                        lazyPrivateChannels: a,
                        gameInvites: s
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
                            discoverable: null == (r = t.discoverable) || r
                        });
                    });
                }),
                    K({
                        type: 'VOICE_STATE_UPDATES',
                        voiceStates: l,
                        initial: !0
                    }),
                    w.GC.update();
            });
        }),
            setTimeout(() => K({ type: 'POST_CONNECTION_OPEN' }), 2000);
    }),
    W(
        ['READY'],
        (e) => {
            var t;
            let n = R.Eb(),
                r = e.guilds
                    .filter((e) => {
                        var t, n;
                        return !e.unavailable && 'partial' === e.data_mode && ((null != (t = e.partial_updates.channels) ? t : []).length > 0 || (null != (n = e.partial_updates.deleted_channel_ids) ? n : []).length > 0 || void 0);
                    })
                    .map((e) => e.id);
            return Promise.all([n, null != (t = v.o.loadGuildIds(r)) ? t : Promise.resolve()]).then((e) => {
                let [t] = e;
                return t;
            });
        },
        (e, t, n) => {
            if (e.user.bot) return void K({ type: 'LOGOUT' });
            m.Z.ready.measure(() => {
                o.ZP.Emitter.batched(() => {
                    let t = (e = m.Z.hydrateReady.measure(() => R.IM(e, w.Wb.identifyStartTime, n))).private_channels.map((e) => (0, E.q_)(e)),
                        r = e.guilds.filter((e) => !0 === e.unavailable && !0 !== e.geo_restricted).map((e) => e.id),
                        i = e.guilds.filter((e) => !0 !== e.unavailable),
                        o = e.guilds.filter((e) => !0 === e.geo_restricted);
                    i.forEach((e) => {
                        e.presences = [];
                    });
                    let a = null == e.user_settings_proto ? void 0 : (0, g.ac)(e.user_settings_proto);
                    m.Z.dispatchReady.measure(() => {
                        var n;
                        K({
                            type: 'CONNECTION_OPEN',
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
                            requiredAction: e.required_action,
                            consents: e.consents,
                            sessions: Q(e.sessions || []),
                            pendingPayments: e.pending_payments,
                            countryCode: null != (n = e.country_code) ? n : void 0,
                            guildJoinRequests: e.guild_join_requests || [],
                            userSettingsProto: a,
                            apiCodeVersion: e.api_code_version,
                            auth: e.auth,
                            notificationSettings: { flags: e.notification_settings.flags },
                            geoRestrictedGuilds: o,
                            explicitContentScanVersion: e.explicit_content_scan_version,
                            failedStates: e.failed_states
                        });
                    }),
                        null != e.auth_token &&
                            K({
                                type: 'UPDATE_TOKEN',
                                token: e.auth_token,
                                userId: e.user.id
                            }),
                        w.RR.update(),
                        w.GC.update();
                });
            });
        }
    ),
    H(['STATE_UPDATE'], (e) => {
        K({ type: 'STATE_UPDATE' });
    }),
    H(['RESUMED'], () => {
        w.RR.forceUpdate(), w.GC.forceUpdate(), K({ type: 'CONNECTION_RESUMED' });
    }),
    H(['TYPING_START'], (e) => {
        null != e.member && z(e.guild_id, e.member.user, e.member),
            K({
                type: 'TYPING_START',
                channelId: e.channel_id,
                userId: e.user_id
            });
    }),
    H(['GUILD_RING_START'], (e) => {
        K({
            type: 'GUILD_RING_START',
            ringing: e.ringing,
            channelId: e.channel_id,
            guildId: e.guild_id
        });
    }),
    H(['GUILD_RING_STOP'], (e) => {
        K({
            type: 'GUILD_RING_STOP',
            ringing: e.ringing,
            channelId: e.channel_id,
            guildId: e.guild_id
        });
    }),
    H(['ACTIVITY_START'], (e) => {
        K({
            type: 'ACTIVITY_START',
            userId: e.user_id,
            activity: e.activity
        });
    }),
    H(['ACTIVITY_USER_ACTION'], (e) => {
        K({
            type: 'ACTIVITY_USER_ACTION',
            actionType: e.action_type,
            user: e.user,
            applicationId: e.application_id,
            channelId: e.channel_id,
            messageId: e.message_id
        });
    }),
    W(
        ['MESSAGE_CREATE'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            q(e),
                null != e.author &&
                    K({
                        type: 'MESSAGE_CREATE',
                        guildId: e.guild_id,
                        channelId: e.channel_id,
                        message: e,
                        optimistic: !1,
                        isPushNotification: !1
                    });
        }
    ),
    W(
        ['MESSAGE_UPDATE'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            q(e),
                K({
                    type: 'MESSAGE_UPDATE',
                    guildId: e.guild_id,
                    message: e
                });
        }
    ),
    W(
        ['MESSAGE_DELETE'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            K({
                type: 'MESSAGE_DELETE',
                guildId: e.guild_id,
                id: e.id,
                channelId: e.channel_id
            });
        }
    ),
    W(
        ['MESSAGE_DELETE_BULK'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            K({
                type: 'MESSAGE_DELETE_BULK',
                guildId: e.guild_id,
                ids: e.ids,
                channelId: e.channel_id
            });
        }
    ),
    W(
        ['MESSAGE_ACK'],
        (e) => v.o.loadGuildFromChannelId(e.channel_id),
        (e) => {
            K({
                type: 'MESSAGE_ACK',
                channelId: e.channel_id,
                messageId: e.message_id,
                manual: e.manual,
                newMentionCount: e.mention_count,
                version: e.version
            });
        }
    ),
    H(['GUILD_FEATURE_ACK'], (e) => {
        K({
            type: 'GUILD_FEATURE_ACK',
            id: e.resource_id,
            ackType: e.ack_type,
            ackedId: e.entity_id
        });
    }),
    H(['USER_NON_CHANNEL_ACK'], (e) => {
        K({
            type: 'USER_NON_CHANNEL_ACK',
            ackType: e.ack_type,
            ackedId: e.entity_id
        });
    }),
    W(
        ['CHANNEL_PINS_ACK'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            K({
                type: 'CHANNEL_PINS_ACK',
                channelId: e.channel_id,
                timestamp: e.timestamp,
                version: e.version
            });
        }
    ),
    W(
        ['CHANNEL_PINS_UPDATE'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            K({
                type: 'CHANNEL_PINS_UPDATE',
                channelId: e.channel_id,
                lastPinTimestamp: e.last_pin_timestamp
            });
        }
    ),
    W(
        ['CHANNEL_CREATE', 'CHANNEL_DELETE'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            K({
                type: t,
                channel: (0, E.q_)(e)
            });
        }
    ),
    H(['VOICE_CHANNEL_STATUS_UPDATE'], (e, t) => {
        K({
            type: t,
            id: e.id,
            guildId: e.guild_id,
            status: e.status
        });
    }),
    H(['CHANNEL_STATUSES'], (e, t) => {
        K({
            type: t,
            guildId: e.guild_id,
            channels: e.channels
        });
    }),
    H(['CHANNEL_MEMBER_COUNT_UPDATE'], (e, t) => {
        K({
            type: t,
            guildId: e.guild_id,
            channelId: e.channel_id,
            online: e.presence_count,
            total: e.member_count
        });
    }),
    W(
        ['CHANNEL_UPDATE'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            G.add(e);
        }
    ),
    W(
        ['THREAD_CREATE', 'THREAD_UPDATE', 'THREAD_DELETE'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            let { newly_created: n } = e,
                r = k(e, ['newly_created']);
            K({
                type: t,
                isNewlyCreated: n,
                channel: (0, E.q_)(r)
            });
        }
    ),
    W(
        ['THREAD_LIST_SYNC'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            K({
                type: 'THREAD_LIST_SYNC',
                guildId: e.guild_id,
                threads: e.threads.map((e) => {
                    let t = v.Z.getChannel(e.parent_id);
                    return null != t && ((e.nsfw = t.nsfw), (e.parentChannelThreadType = t.type)), (0, E.q_)(e);
                }),
                mostRecentMessages: e.most_recent_messages,
                members: e.members ? i().map(e.members, h.Z) : void 0,
                channelIds: e.channel_ids
            });
        }
    ),
    H(['THREAD_MEMBER_UPDATE'], (e) => {
        K({
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
    H(['THREAD_MEMBERS_UPDATE'], (e) => {
        var t;
        K({
            type: 'THREAD_MEMBERS_UPDATE',
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
                          joinTimestamp: t.join_timestamp
                      })),
            removedMemberIds: e.removed_member_ids,
            memberIdsPreview: e.member_ids_preview
        });
    }),
    H(['FORUM_UNREADS'], (e) => {
        e.permission_denied ||
            K({
                type: 'FORUM_UNREADS',
                channelId: e.channel_id,
                threads: e.threads.map((e) => ({
                    threadId: e.thread_id,
                    missing: e.missing,
                    count: e.count
                }))
            });
    }),
    H(['SOUNDBOARD_SOUNDS'], (e) => {
        B.add(e);
    }),
    H(['CHANNEL_RECIPIENT_ADD', 'CHANNEL_RECIPIENT_REMOVE'], (e, t) => {
        let n = v.Z.getBasicChannel(e.channel_id);
        K({
            type: t,
            channelId: e.channel_id,
            user: e.user,
            nick: e.nick,
            isMember: null != n
        });
    }),
    W(
        ['GUILD_CREATE'],
        (e) => ('full' === e.data_mode ? null : v.o.loadGuildIds([e.id])),
        (e) => {
            if (e.unavailable)
                K({
                    type: 'GUILD_UNAVAILABLE',
                    guildId: e.id
                });
            else {
                let t = R.J2(e);
                s.Z.createGuild(t),
                    K({
                        type: 'VOICE_STATE_UPDATES',
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
                                discoverable: null == (r = e.discoverable) || r
                            };
                        })
                    });
            }
        }
    ),
    H(['GUILD_UPDATE'], (e) => {
        K({
            type: 'GUILD_UPDATE',
            guild: e
        }),
            e.unavailable &&
                K({
                    type: 'GUILD_UNAVAILABLE',
                    guildId: e.id
                });
    }),
    H(['GUILD_DELETE'], (e) => {
        K({
            type: 'GUILD_DELETE',
            guild: e
        }),
            e.geo_restricted
                ? K({
                      type: 'GUILD_GEO_RESTRICTED',
                      guildId: e.id,
                      icon: e.icon,
                      name: e.name
                  })
                : e.unavailable &&
                  K({
                      type: 'GUILD_UNAVAILABLE',
                      guildId: e.id
                  });
    }),
    H(['GUILD_MEMBERS_CHUNK'], (e) => {
        o.ZP.Emitter.batched(() => {
            F.add({
                guildId: e.guild_id,
                members: e.members,
                notFound: e.not_found
            }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let { user: n, status: r, client_status: i, activities: o, hidden_activities: a } = t;
                        return X({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: o,
                            hiddenActivities: a,
                            clientStatus: i
                        });
                    }),
                P.Z.flush('GUILD_MEMBERS_CHUNK');
        });
    }),
    H(['THREAD_MEMBER_LIST_UPDATE'], (e) => {
        o.ZP.Emitter.batched(() => {
            K({
                type: 'THREAD_MEMBER_LIST_UPDATE',
                guildId: e.guild_id,
                threadId: e.thread_id,
                members: e.members
            }),
                null != e.presences &&
                    e.presences.forEach((t) => {
                        let { user: n, status: r, client_status: i, activities: o, hidden_activities: a } = t;
                        return X({
                            guildId: e.guild_id,
                            user: n,
                            status: r,
                            activities: o,
                            hiddenActivities: a,
                            clientStatus: i
                        });
                    }),
                P.Z.flush();
        });
    }),
    H(['GUILD_BAN_ADD', 'GUILD_BAN_REMOVE', 'GUILD_MEMBER_ADD', 'GUILD_MEMBER_UPDATE', 'GUILD_MEMBER_REMOVE'], (e, t) => {
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
            flags: e.flags
        });
    }),
    W(
        ['GUILD_ROLE_CREATE', 'GUILD_ROLE_UPDATE'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e, t) => {
            K({
                type: t,
                guildId: e.guild_id,
                role: e.role
            });
        }
    ),
    W(
        ['GUILD_ROLE_DELETE'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            K({
                type: 'GUILD_ROLE_DELETE',
                guildId: e.guild_id,
                roleId: e.role_id,
                version: e.version
            });
        }
    ),
    H(['GUILD_EMOJIS_UPDATE'], (e) => {
        K({
            type: 'GUILD_EMOJIS_UPDATE',
            guildId: e.guild_id,
            emojis: e.emojis
        });
    }),
    H(['GUILD_STICKERS_UPDATE'], (e) => {
        K({
            type: 'GUILD_STICKERS_UPDATE',
            guildId: e.guild_id,
            stickers: e.stickers
        });
    }),
    H(['GUILD_INTEGRATIONS_UPDATE'], (e) => {
        K({
            type: 'GUILD_INTEGRATIONS_UPDATE',
            guildId: e.guild_id
        });
    }),
    H(['INTEGRATION_CREATE'], (e) => {
        K({
            type: 'INTEGRATION_CREATE',
            application: e.application,
            guildId: e.guild_id
        });
    }),
    H(['INTEGRATION_DELETE'], (e) => {
        K({
            type: 'INTEGRATION_DELETE',
            applicationId: e.application_id,
            guildId: e.guild_id
        });
    }),
    H(['USER_UPDATE'], (e) => {
        K({
            type: 'CURRENT_USER_UPDATE',
            user: e
        });
    }),
    H(['USER_SETTINGS_PROTO_UPDATE'], (e) => {
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
            K({
                type: 'USER_SETTINGS_PROTO_UPDATE',
                settings: {
                    proto: t,
                    type: e.settings.type
                },
                partial: e.partial
            });
        }
    }),
    H(['USER_GUILD_SETTINGS_UPDATE'], (e) => {
        K({
            type: 'USER_GUILD_SETTINGS_FULL_UPDATE',
            userGuildSettings: [e]
        });
    }),
    H(['USER_CONNECTIONS_UPDATE'], () => {
        K({ type: 'USER_CONNECTIONS_UPDATE' });
    }),
    H(['USER_REQUIRED_ACTION_UPDATE'], (e) => {
        K({
            type: 'USER_REQUIRED_ACTION_UPDATE',
            requiredAction: e.required_action
        });
    }),
    H(['USER_NOTE_UPDATE'], (e) => {
        K(L({ type: 'USER_NOTE_UPDATE' }, e));
    }),
    H(['RELATIONSHIP_ADD'], (e) => {
        K({
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
    H(['RELATIONSHIP_REMOVE'], (e) => {
        K({
            type: 'RELATIONSHIP_REMOVE',
            relationship: e
        });
    }),
    H(['RELATIONSHIP_UPDATE'], (e) => {
        K({
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
    H(['GAME_RELATIONSHIP_ADD'], (e) => {
        K({
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
    H(['GAME_RELATIONSHIP_REMOVE'], (e) => {
        K({
            type: 'GAME_RELATIONSHIP_REMOVE',
            userId: e.id,
            applicationId: e.application_id
        });
    }),
    H(['PRESENCE_UPDATE'], (e) => {
        X({
            guildId: e.guild_id,
            user: e.user,
            status: e.status,
            activities: e.activities,
            hiddenActivities: e.hidden_activities,
            clientStatus: e.client_status
        });
    }),
    H(['PRESENCES_REPLACE'], (e) => {
        K({
            type: 'PRESENCES_REPLACE',
            presences: e
        });
    }),
    H(['SESSIONS_REPLACE'], (e) => {
        K({
            type: 'SESSIONS_REPLACE',
            sessions: Q(e)
        });
    }),
    H(['VOICE_STATE_UPDATE'], (e) => {
        var t, n;
        null != e.member && z(e.guild_id, e.member.user, e.member),
            K({
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
                        requestToSpeakTimestamp: null != (t = e.request_to_speak_timestamp) ? t : null,
                        discoverable: null == (n = e.discoverable) || n,
                        oldChannelId: T.Z.getUserVoiceChannelId(e.guild_id, e.user_id)
                    }
                ]
            });
    }),
    H(['VOICE_SERVER_UPDATE'], (e) => {
        K({
            type: 'VOICE_SERVER_UPDATE',
            guildId: e.guild_id,
            channelId: e.channel_id,
            endpoint: e.endpoint,
            token: e.token
        });
    }),
    H(['CALL_CREATE'], (e) => {
        K({
            type: 'CALL_CREATE',
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        });
        let t = e.voice_states;
        null != t &&
            K({
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
                        requestToSpeakTimestamp: null != (t = e.request_to_speak_timestamp) ? t : null,
                        discoverable: null == (n = e.discoverable) || n
                    };
                })
            });
    }),
    H(['CALL_UPDATE'], (e) => {
        K({
            type: 'CALL_UPDATE',
            channelId: e.channel_id,
            messageId: e.message_id,
            region: e.region,
            ringing: e.ringing
        });
    }),
    H(['CALL_DELETE'], (e) => {
        K({
            type: 'CALL_DELETE',
            channelId: e.channel_id,
            unavailable: e.unavailable
        });
    }),
    H(['OAUTH2_TOKEN_REVOKE'], (e) => {
        K({
            type: 'OAUTH2_TOKEN_REVOKE',
            accessToken: e.access_token
        });
    }),
    H(['RECENT_MENTION_DELETE'], (e) => {
        K({
            type: 'RECENT_MENTION_DELETE',
            id: e.message_id
        });
    }),
    H(['SAVED_MESSAGE_CREATE'], (e) => {
        K({
            type: 'SAVED_MESSAGE_CREATE',
            savedMessage: (0, p.jk)(e)
        });
    }),
    H(['SAVED_MESSAGE_DELETE'], (e) => {
        K({
            type: 'SAVED_MESSAGE_DELETE',
            savedMessageData: (0, p.$_)(e)
        });
    }),
    H(['FRIEND_SUGGESTION_CREATE'], (e) => {
        K({
            type: 'FRIEND_SUGGESTION_CREATE',
            suggestion: e
        });
    }),
    H(['FRIEND_SUGGESTION_DELETE'], (e) => {
        K({
            type: 'FRIEND_SUGGESTION_DELETE',
            suggestedUserId: e.suggested_user_id
        });
    }),
    H(['WEBHOOKS_UPDATE'], (e) => {
        K({
            type: 'WEBHOOKS_UPDATE',
            guildId: e.guild_id,
            channelId: e.channel_id
        });
    }),
    H(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'], (e, t) => {
        K({
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
    H(['MESSAGE_POLL_VOTE_ADD', 'MESSAGE_POLL_VOTE_REMOVE'], (e, t) => {
        K({
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
    H(['MESSAGE_REACTION_REMOVE_ALL'], (e) => {
        K({
            type: 'MESSAGE_REACTION_REMOVE_ALL',
            channelId: e.channel_id,
            messageId: e.message_id
        });
    }),
    H(['MESSAGE_REACTION_REMOVE_EMOJI'], (e) => {
        K({
            type: 'MESSAGE_REACTION_REMOVE_EMOJI',
            channelId: e.channel_id,
            messageId: e.message_id,
            emoji: e.emoji
        });
    }),
    H(['MESSAGE_REACTION_ADD_MANY'], (e) => {
        K({
            type: 'MESSAGE_REACTION_ADD_MANY',
            channelId: e.channel_id,
            messageId: e.message_id,
            reactions: e.reactions
        });
    }),
    H(['PAYMENT_UPDATE'], (e) => {
        K({
            type: 'PAYMENT_UPDATE',
            payment: e
        });
    }),
    H(['ENTITLEMENT_CREATE', 'ENTITLEMENT_UPDATE', 'ENTITLEMENT_DELETE'], (e, t) => {
        K({
            type: t,
            entitlement: e
        });
    }),
    H(['USER_PAYMENT_SOURCES_UPDATE'], () => {
        I.Z.hasLayers() && (n(355467).tZ(), l.Gn(N.Z.getFetchedSKUIDs()));
    }),
    H(['USER_SUBSCRIPTIONS_UPDATE'], () => {
        c.k(), I.Z.hasLayers() && n(355467).jg();
    }),
    H(['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE'], (e) => {
        K({
            type: 'GUILD_BOOST_SLOT_CREATE',
            guildBoostSlot: b.Z.createFromServer(e, A.ZP.getSubscriptionById(e.subscription_id))
        });
    }),
    H(['USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE'], (e) => {
        K({
            type: 'GUILD_BOOST_SLOT_UPDATE',
            guildBoostSlot: b.Z.createFromServer(e, A.ZP.getSubscriptionById(e.subscription_id))
        });
    }),
    H(['BILLING_POPUP_BRIDGE_CALLBACK'], (e) => {
        K({
            type: 'BILLING_POPUP_BRIDGE_CALLBACK',
            paymentSourceType: e.payment_source_type,
            state: e.state,
            path: e.path,
            query: e.query
        });
    }),
    H(['USER_PAYMENT_BROWSER_CHECKOUT_DONE'], (e) => {
        K({
            type: 'USER_PAYMENT_BROWSER_CHECKOUT_DONE',
            loadId: e.load_id,
            skuId: e.sku_id,
            skuSubscriptionPlanId: e.sku_subscription_plan_id
        });
    }),
    H(['USER_PAYMENT_CLIENT_ADD'], (e) => {
        (0, C.L)().then((t) => {
            let n = e.purchase_token_hash;
            n === t &&
                K({
                    type: 'USER_PAYMENT_CLIENT_ADD',
                    purchaseTokenHash: n,
                    expiresAt: e.expires_at
                });
        });
    }),
    H(['GUILD_MEMBER_LIST_UPDATE'], (e) => {
        o.ZP.Emitter.batched(() => {
            let t = (t) => {
                if (null == t.member) return;
                let { member: n } = t;
                if ((z(e.guild_id, n.user, n), null == n.presence)) return;
                let { presence: r } = n;
                X({
                    guildId: e.guild_id,
                    user: r.user,
                    status: r.status,
                    activities: r.activities,
                    hiddenActivities: r.hidden_activities,
                    clientStatus: r.client_status
                });
            };
            e.ops.forEach((e) => {
                let { op: n, items: r, item: i } = e;
                switch (n) {
                    case 'SYNC':
                        r.forEach(t);
                        break;
                    case 'UPDATE':
                    case 'INSERT':
                        t(i);
                }
            }),
                P.Z.flush(),
                K({
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
    H(['GIFT_CODE_UPDATE'], (e) => {
        K({
            type: 'GIFT_CODE_UPDATE',
            uses: e.uses,
            code: e.code
        });
    }),
    H(['GIFT_CODE_CREATE'], (e) => {
        K({
            type: 'GIFT_CODE_CREATE',
            giftCode: e
        });
    }),
    H(['LIBRARY_APPLICATION_UPDATE'], (e) => {
        K({
            type: 'LIBRARY_APPLICATION_UPDATE',
            libraryApplication: e
        });
    }),
    H(['STREAM_CREATE'], (e) => {
        K({
            type: 'STREAM_CREATE',
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            rtcServerId: e.rtc_server_id,
            paused: e.paused
        });
    }),
    H(['STREAM_SERVER_UPDATE'], (e) => {
        K({
            type: 'STREAM_SERVER_UPDATE',
            streamKey: e.stream_key,
            endpoint: e.endpoint,
            token: e.token
        });
    }),
    H(['STREAM_UPDATE'], (e) => {
        K({
            type: 'STREAM_UPDATE',
            streamKey: e.stream_key,
            region: e.region,
            viewerIds: e.viewer_ids,
            paused: e.paused
        });
    }),
    H(['STREAM_DELETE'], (e) => {
        K({
            type: 'STREAM_DELETE',
            streamKey: e.stream_key,
            unavailable: e.unavailable,
            reason: e.reason
        });
    }),
    H(['GENERIC_PUSH_NOTIFICATION_SENT'], (e) => {
        K({
            type: 'GENERIC_PUSH_NOTIFICATION_SENT',
            title: e.title,
            body: e.body,
            trackingType: e.tracking_type,
            icon: e.icon,
            route: e.route,
            tag: e.tag
        });
    }),
    H(['REACTION_NOTIFICATION_SENT'], (e) => {
        K({
            type: 'REACTION_NOTIFICATION_SENT',
            route: e.route,
            message: e.message,
            emoji: e.emoji,
            reactorUserId: e.reactor_user_id
        });
    }),
    H(['NOTIFICATION_CENTER_ITEM_CREATE'], (e) => {
        K({
            type: 'NOTIFICATION_CENTER_ITEM_CREATE',
            item: e
        });
    }),
    H(['NOTIFICATION_CENTER_ITEM_DELETE'], (e) => {
        K({
            type: 'NOTIFICATION_CENTER_ITEM_DELETE',
            id: e.id
        });
    }),
    H(['NOTIFICATION_CENTER_ITEMS_ACK'], (e) => {
        K({
            type: 'NOTIFICATION_CENTER_ITEMS_ACK',
            ids: [e.id],
            optimistic: !1
        });
    }),
    H(['NOTIFICATION_CENTER_ITEM_COMPLETED'], (e) => {
        K({
            type: 'NOTIFICATION_CENTER_ITEM_COMPLETED',
            item_enum: e.item_enum
        });
    }),
    H(['QUESTS_USER_STATUS_UPDATE'], (e) => {
        K({
            type: 'QUESTS_USER_STATUS_UPDATE',
            user_status: e.user_status
        });
    }),
    H(['APPLICATION_COMMAND_PERMISSIONS_UPDATE'], (e, t) => {
        K({
            type: t,
            guildId: e.guild_id
        });
    }),
    H(['GUILD_APPLICATION_COMMAND_INDEX_UPDATE'], (e) => {
        K({
            type: 'GUILD_APPLICATION_COMMAND_INDEX_UPDATE',
            guildId: e.guild_id,
            version: e.version
        });
    }),
    H(['GUILD_JOIN_REQUEST_CREATE'], (e) => {
        K({
            type: 'GUILD_JOIN_REQUEST_CREATE',
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        });
    }),
    H(['GUILD_JOIN_REQUEST_UPDATE'], (e) => {
        K({
            type: 'GUILD_JOIN_REQUEST_UPDATE',
            request: e.request,
            status: e.status,
            guildId: e.guild_id
        });
    }),
    H(['GUILD_JOIN_REQUEST_DELETE'], (e) => {
        K({
            type: 'GUILD_JOIN_REQUEST_DELETE',
            id: e.id,
            userId: e.user_id,
            guildId: e.guild_id
        });
    }),
    H(['INTERACTION_CREATE'], (e) => {
        K({
            type: 'INTERACTION_CREATE',
            interactionId: e.id,
            nonce: e.nonce
        });
    }),
    H(['INTERACTION_SUCCESS'], (e) => {
        K({
            type: 'INTERACTION_SUCCESS',
            interactionId: e.id,
            nonce: e.nonce
        });
    }),
    H(['INTERACTION_FAILURE'], (e) => {
        K({
            type: 'INTERACTION_FAILURE',
            nonce: e.nonce,
            reasonCode: e.reason_code
        });
    }),
    H(['APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE'], (e) => {
        K({
            type: 'APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE',
            choices: e.choices,
            nonce: e.nonce
        });
    }),
    H(['INTERACTION_MODAL_CREATE'], (e) => {
        K({
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
    H(['INTERACTION_IFRAME_MODAL_CREATE'], (e) => {
        K({
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
    H(['STAGE_INSTANCE_CREATE'], (e) => {
        K({
            type: 'STAGE_INSTANCE_CREATE',
            instance: e
        });
    }),
    H(['STAGE_INSTANCE_UPDATE'], (e) => {
        K({
            type: 'STAGE_INSTANCE_UPDATE',
            instance: e
        });
    }),
    H(['STAGE_INSTANCE_DELETE'], (e) => {
        K({
            type: 'STAGE_INSTANCE_DELETE',
            instance: e
        });
    }),
    H(['GUILD_SCHEDULED_EVENT_CREATE'], (e) => {
        K({
            type: 'GUILD_SCHEDULED_EVENT_CREATE',
            guildScheduledEvent: e
        });
    }),
    H(['GUILD_SCHEDULED_EVENT_UPDATE'], (e) => {
        K({
            type: 'GUILD_SCHEDULED_EVENT_UPDATE',
            guildScheduledEvent: e
        });
    }),
    H(['GUILD_SCHEDULED_EVENT_DELETE'], (e) => {
        K({
            type: 'GUILD_SCHEDULED_EVENT_DELETE',
            guildScheduledEvent: e
        });
    }),
    H(['GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE'], (e) => {
        K({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE',
            eventException: e
        });
    }),
    H(['GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE'], (e) => {
        K({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE',
            eventException: e
        });
    }),
    H(['GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE'], (e) => {
        K({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE',
            eventException: e
        });
    }),
    H(['GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE'], (e) => {
        K({
            type: 'GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE',
            eventId: e.event_id
        });
    }),
    H(['GUILD_SCHEDULED_EVENT_USER_ADD'], (e) => {
        K({
            type: 'GUILD_SCHEDULED_EVENT_USER_ADD',
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        });
    }),
    H(['GUILD_SCHEDULED_EVENT_USER_REMOVE'], (e) => {
        K({
            type: 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
            userId: e.user_id,
            guildId: e.guild_id,
            guildEventId: e.guild_scheduled_event_id,
            guildEventExceptionId: e.guild_scheduled_event_exception_id,
            response: e.response
        });
    }),
    H(['GUILD_DIRECTORY_ENTRY_CREATE'], (e) => {
        K({
            type: 'GUILD_DIRECTORY_ENTRY_CREATE',
            channelId: e.directory_channel_id,
            entry: e
        });
    }),
    H(['GUILD_DIRECTORY_ENTRY_UPDATE'], (e) => {
        K({
            type: 'GUILD_DIRECTORY_ENTRY_UPDATE',
            channelId: e.directory_channel_id,
            entry: e
        });
    }),
    H(['GUILD_DIRECTORY_ENTRY_DELETE'], (e) => {
        K({
            type: 'GUILD_DIRECTORY_ENTRY_DELETE',
            channelId: e.directory_channel_id,
            guildId: e.entity_id
        });
    }),
    H(['AUTO_MODERATION_MENTION_RAID_DETECTION'], (e) => {
        K({
            type: 'AUTO_MODERATION_MENTION_RAID_DETECTION',
            guildId: e.guild_id,
            decisionId: e.decision_id,
            suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
        });
    }),
    H(['VOICE_CHANNEL_EFFECT_SEND'], (e) => {
        K({
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
    H(['GUILD_SOUNDBOARD_SOUND_CREATE'], (e) => {
        K({
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
    H(['GUILD_SOUNDBOARD_SOUND_UPDATE'], (e) => {
        K({
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
    H(['GUILD_SOUNDBOARD_SOUND_DELETE'], (e) => {
        K({
            type: 'GUILD_SOUNDBOARD_SOUND_DELETE',
            guildId: e.guild_id,
            soundId: e.sound_id
        });
    }),
    H(['GUILD_SOUNDBOARD_SOUNDS_UPDATE'], (e) => {
        K({
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
    W(
        ['EMBEDDED_ACTIVITY_UPDATE_V2'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            K({
                type: 'EMBEDDED_ACTIVITY_UPDATE_V2',
                applicationId: e.application_id,
                launchId: e.launch_id,
                compositeInstanceId: e.composite_instance_id,
                location: e.location,
                participants: e.participants
            });
        }
    ),
    H(['AUTH_SESSION_CHANGE'], (e) => {
        K({
            type: 'AUTH_SESSION_CHANGE',
            authSessionIdHash: e.auth_session_id_hash
        });
    }),
    H(['USER_CONNECTIONS_LINK_CALLBACK'], (e) => {
        K({
            type: 'USER_CONNECTIONS_LINK_CALLBACK',
            provider: e.provider,
            callbackCode: e.callback_code,
            callbackState: e.callback_state
        });
    }),
    H(['USER_CONNECTIONS_CALLBACK'], (e) => {
        K({
            type: 'USER_CONNECTIONS_CALLBACK',
            provider: e.provider,
            code: e.code,
            state: e.state,
            openid_params: e.openid_params
        });
    }),
    H(['DELETED_ENTITY_IDS'], (e) => {
        K(L({ type: 'DELETED_ENTITY_IDS' }, e));
    }),
    W(
        ['CHANNEL_SYNC'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            e.channels.forEach((e) => {
                G.add(e);
            }),
                K({
                    type: 'CHANNEL_SYNC',
                    guild_id: e.guild_id,
                    channels: e.channels,
                    integrity_check: e.integrity_check
                });
        }
    ),
    H(['CONSOLE_COMMAND_UPDATE'], (e) => {
        K({
            type: 'CONSOLE_COMMAND_UPDATE',
            id: e.id,
            result: e.result,
            error: e.error
        });
    }),
    W(
        ['PASSIVE_UPDATE_V2'],
        (e) => v.o.loadGuildIds([e.guild_id]),
        (e) => {
            K({
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
                        requestToSpeakTimestamp: null != (t = e.request_to_speak_timestamp) ? t : null,
                        selfDeaf: e.self_deaf || !1,
                        selfMute: e.self_mute || !1,
                        selfStream: e.self_stream || !1,
                        selfVideo: e.self_video || !1,
                        sessionId: e.session_id,
                        suppress: e.suppress,
                        userId: e.user_id,
                        discoverable: null == (n = e.discoverable) || n
                    };
                }),
                removedVoiceStateUsers: e.removed_voice_states
            });
        }
    ),
    H(['CREATOR_MONETIZATION_RESTRICTIONS_UPDATE'], (e) => {
        K({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS',
            guildId: e.guild_id,
            restrictions: e.restrictions
        });
    }),
    H(['BILLING_REFERRAL_TRIAL_OFFER_UPDATE'], (e) => {
        K({
            type: 'BILLING_REFERRAL_TRIAL_OFFER_UPDATE',
            userTrialOfferId: e.user_trial_offer_id,
            recipientId: e.recipient_id
        });
    }),
    H(['LAST_MESSAGES'], (e) => {
        K({
            type: 'MESSAGE_PREVIEWS_LOADED',
            guildId: e.guild_id,
            messages: e.messages
        });
    }),
    H(['AUTHENTICATOR_UPDATE'], (e) => {
        K({
            type: 'AUTHENTICATOR_UPDATE',
            credential: e
        });
    }),
    H(['AUTHENTICATOR_CREATE'], (e) => {
        K({
            type: 'AUTHENTICATOR_CREATE',
            credential: e
        });
    }),
    H(['AUTHENTICATOR_DELETE'], (e) => {
        K({
            type: 'AUTHENTICATOR_DELETE',
            credential: e
        });
    }),
    H(['NOTIFICATION_SETTINGS_UPDATE'], (e) => {
        K({
            type: 'NOTIFICATION_SETTINGS_UPDATE',
            settings: { flags: e.flags }
        });
    }),
    H(['GAME_INVITE_CREATE'], (e) => {
        K({
            type: 'GAME_INVITE_CREATE',
            gameInvite: e
        });
    }),
    H(['GAME_INVITE_DELETE'], (e) => {
        K({
            type: 'GAME_INVITE_DELETE',
            inviteId: e.invite_id
        });
    }),
    H(['GAME_INVITE_DELETE_MANY'], (e) => {
        K({
            type: 'GAME_INVITE_DELETE_MANY',
            inviteIds: e.invite_ids
        });
    }),
    H(['CONVERSATION_SUMMARY_UPDATE'], (e) => {
        K(L({ type: 'CONVERSATION_SUMMARY_UPDATE' }, e));
    }),
    H(['PREMIUM_MARKETING_PREVIEW'], (e) => {
        K({
            type: 'PREMIUM_MARKETING_PREVIEW',
            properties: e.properties
        });
    }),
    H(['USER_APPLICATION_UPDATE'], (e) => {
        K({
            type: 'USER_APPLICATION_UPDATE',
            applicationId: e.application_id
        });
    }),
    H(['USER_APPLICATION_REMOVE'], (e) => {
        K({
            type: 'USER_APPLICATION_REMOVE',
            applicationId: e.application_id
        });
    }),
    H(['DM_SETTINGS_UPSELL_SHOW'], (e) => {
        K({
            type: 'DM_SETTINGS_UPSELL_SHOW',
            guildId: e.guild_id
        });
    }),
    H(['CONTENT_INVENTORY_INBOX_STALE'], (e) => {
        K({
            type: 'CONTENT_INVENTORY_INBOX_STALE',
            refreshAfterMs: e.refresh_after_ms
        });
    }),
    H(['VIRTUAL_CURRENCY_BALANCE_UPDATE'], (e) => {
        K({
            type: 'VIRTUAL_CURRENCY_BALANCE_UPDATE',
            balance: e.balance
        });
    }),
    H(['GUILD_POWERUP_ENTITLEMENTS_CREATE', 'GUILD_POWERUP_ENTITLEMENTS_DELETE'], (e, t) => {
        K({
            type: t,
            guildId: e.guild_id,
            entitlements: e.entitlements
        });
    });
