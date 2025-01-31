n.d(t, {
    Z: () => l,
    j: () => o
}),
    n(789020),
    n(47120);
var i = n(836560),
    r = n(936349),
    a = n(709054);
let s = 15360;
var o = (function (e) {
    return (e[(e.DISPATCH = 0)] = 'DISPATCH'), (e[(e.HEARTBEAT = 1)] = 'HEARTBEAT'), (e[(e.IDENTIFY = 2)] = 'IDENTIFY'), (e[(e.PRESENCE_UPDATE = 3)] = 'PRESENCE_UPDATE'), (e[(e.VOICE_STATE_UPDATE = 4)] = 'VOICE_STATE_UPDATE'), (e[(e.VOICE_SERVER_PING = 5)] = 'VOICE_SERVER_PING'), (e[(e.RESUME = 6)] = 'RESUME'), (e[(e.RECONNECT = 7)] = 'RECONNECT'), (e[(e.REQUEST_GUILD_MEMBERS = 8)] = 'REQUEST_GUILD_MEMBERS'), (e[(e.INVALID_SESSION = 9)] = 'INVALID_SESSION'), (e[(e.HELLO = 10)] = 'HELLO'), (e[(e.HEARTBEAT_ACK = 11)] = 'HEARTBEAT_ACK'), (e[(e.CALL_CONNECT = 13)] = 'CALL_CONNECT'), (e[(e.GUILD_SUBSCRIPTIONS = 14)] = 'GUILD_SUBSCRIPTIONS'), (e[(e.STREAM_CREATE = 18)] = 'STREAM_CREATE'), (e[(e.STREAM_DELETE = 19)] = 'STREAM_DELETE'), (e[(e.STREAM_WATCH = 20)] = 'STREAM_WATCH'), (e[(e.STREAM_PING = 21)] = 'STREAM_PING'), (e[(e.STREAM_SET_PAUSED = 22)] = 'STREAM_SET_PAUSED'), (e[(e.REQUEST_GUILD_APPLICATION_COMMANDS = 24)] = 'REQUEST_GUILD_APPLICATION_COMMANDS'), (e[(e.REQUEST_FORUM_UNREADS = 28)] = 'REQUEST_FORUM_UNREADS'), (e[(e.REMOTE_COMMAND = 29)] = 'REMOTE_COMMAND'), (e[(e.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30)] = 'GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH'), (e[(e.REQUEST_SOUNDBOARD_SOUNDS = 31)] = 'REQUEST_SOUNDBOARD_SOUNDS'), (e[(e.REQUEST_LAST_MESSAGES = 34)] = 'REQUEST_LAST_MESSAGES'), (e[(e.SEARCH_RECENT_MEMBERS = 35)] = 'SEARCH_RECENT_MEMBERS'), (e[(e.REQUEST_CHANNEL_STATUSES = 36)] = 'REQUEST_CHANNEL_STATUSES'), (e[(e.GUILD_SUBSCRIPTIONS_BULK = 37)] = 'GUILD_SUBSCRIPTIONS_BULK'), (e[(e.GUILD_CHANNELS_RESYNC = 38)] = 'GUILD_CHANNELS_RESYNC'), e;
})({});
class l extends i.EventEmitter {
    presenceUpdate(e, t, n, i) {
        this.send(3, {
            status: e,
            since: t,
            activities: n,
            afk: i
        });
    }
    voiceStateUpdate(e) {
        let { guildId: t = null, channelId: n = null, selfMute: i = !1, selfDeaf: a = !1, selfVideo: s = !1, preferredRegion: o = null, preferredRegions: l = null, videoStreamParameters: u = null, flags: c = 0 } = e,
            d = {
                guild_id: t,
                channel_id: n,
                self_mute: i,
                self_deaf: a,
                self_video: s,
                flags: c
            };
        null != n && r.Z.shouldIncludePreferredRegion() && ((d.preferred_region = o), (d.preferred_regions = l)),
            null != u &&
                (d.tracks =
                    null == u
                        ? void 0
                        : u.map((e) => ({
                              type: e.type,
                              rid: e.rid,
                              quality: e.quality
                          }))),
            this.send(4, d);
    }
    voiceServerPing() {
        this.send(5, null);
    }
    requestGuildMembers(e, t) {
        let { query: n, limit: i, userIds: r, presences: a } = t;
        this.send(8, {
            guild_id: e,
            query: n,
            limit: i,
            user_ids: r,
            presences: a
        });
    }
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: i } = t;
        this.send(35, {
            guild_id: e,
            query: null != n ? n : '',
            continuation_token: null != i ? i : null
        });
    }
    updateGuildSubscriptions(e) {
        let t = {},
            n = 0;
        a.default.keys(e).forEach((i) => {
            let r = e[i],
                a = JSON.stringify([i, r]).length;
            n + a > s && (this.send(37, { subscriptions: t }), (t = {}), (n = 0)), (t[i] = r), (n += a);
        }),
            n > 0 && this.send(37, { subscriptions: t });
    }
    callConnect(e) {
        this.send(13, { channel_id: e });
    }
    streamCreate(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.send(18, {
            type: e,
            guild_id: t,
            channel_id: n,
            preferred_region: i
        });
    }
    streamWatch(e) {
        this.send(20, { stream_key: e });
    }
    streamPing(e) {
        this.send(21, { stream_key: e });
    }
    streamDelete(e) {
        this.send(19, { stream_key: e });
    }
    streamSetPaused(e, t) {
        this.send(22, {
            stream_key: e,
            paused: t
        });
    }
    requestForumUnreads(e, t, n) {
        this.send(28, {
            guild_id: e,
            channel_id: t,
            threads: n.map((e) => ({
                thread_id: e.threadId,
                ack_message_id: e.ackMessageId
            }))
        });
    }
    requestSoundboardSounds(e) {
        this.send(31, { guild_ids: e });
    }
    requestLastMessages(e, t) {
        this.send(34, {
            guild_id: e,
            channel_ids: t
        });
    }
    getDeletedEntityIdsNotMatchingHash(e, t, n, i, r) {
        this.send(30, {
            guild_id: e,
            channel_ids_hash: t,
            role_ids_hash: n,
            emoji_ids_hash: i,
            sticker_ids_hash: r
        });
    }
    triggerGuildChannelResync(e, t) {
        this.send(38, {
            guild_id: e,
            obfuscated_channel_ids: t
        });
    }
    requestChannelStatuses(e) {
        this.send(36, { guild_id: e });
    }
    remoteCommand(e, t) {
        this.send(29, {
            target_session_id: e,
            payload: t
        });
    }
}
