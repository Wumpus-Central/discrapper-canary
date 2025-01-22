r.d(n, {
    Z: function () {
        return d;
    },
    j: function () {
        return i;
    }
});
var i,
    a = r(789020);
var o = r(47120);
var s = r(836560);
var l = r(936349),
    u = r(709054);
let c = 15360;
!(function (e) {
    (e[(e.DISPATCH = 0)] = 'DISPATCH'), (e[(e.HEARTBEAT = 1)] = 'HEARTBEAT'), (e[(e.IDENTIFY = 2)] = 'IDENTIFY'), (e[(e.PRESENCE_UPDATE = 3)] = 'PRESENCE_UPDATE'), (e[(e.VOICE_STATE_UPDATE = 4)] = 'VOICE_STATE_UPDATE'), (e[(e.VOICE_SERVER_PING = 5)] = 'VOICE_SERVER_PING'), (e[(e.RESUME = 6)] = 'RESUME'), (e[(e.RECONNECT = 7)] = 'RECONNECT'), (e[(e.REQUEST_GUILD_MEMBERS = 8)] = 'REQUEST_GUILD_MEMBERS'), (e[(e.INVALID_SESSION = 9)] = 'INVALID_SESSION'), (e[(e.HELLO = 10)] = 'HELLO'), (e[(e.HEARTBEAT_ACK = 11)] = 'HEARTBEAT_ACK'), (e[(e.CALL_CONNECT = 13)] = 'CALL_CONNECT'), (e[(e.GUILD_SUBSCRIPTIONS = 14)] = 'GUILD_SUBSCRIPTIONS'), (e[(e.STREAM_CREATE = 18)] = 'STREAM_CREATE'), (e[(e.STREAM_DELETE = 19)] = 'STREAM_DELETE'), (e[(e.STREAM_WATCH = 20)] = 'STREAM_WATCH'), (e[(e.STREAM_PING = 21)] = 'STREAM_PING'), (e[(e.STREAM_SET_PAUSED = 22)] = 'STREAM_SET_PAUSED'), (e[(e.REQUEST_GUILD_APPLICATION_COMMANDS = 24)] = 'REQUEST_GUILD_APPLICATION_COMMANDS'), (e[(e.REQUEST_FORUM_UNREADS = 28)] = 'REQUEST_FORUM_UNREADS'), (e[(e.REMOTE_COMMAND = 29)] = 'REMOTE_COMMAND'), (e[(e.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30)] = 'GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH'), (e[(e.REQUEST_SOUNDBOARD_SOUNDS = 31)] = 'REQUEST_SOUNDBOARD_SOUNDS'), (e[(e.REQUEST_LAST_MESSAGES = 34)] = 'REQUEST_LAST_MESSAGES'), (e[(e.SEARCH_RECENT_MEMBERS = 35)] = 'SEARCH_RECENT_MEMBERS'), (e[(e.REQUEST_CHANNEL_STATUSES = 36)] = 'REQUEST_CHANNEL_STATUSES'), (e[(e.GUILD_SUBSCRIPTIONS_BULK = 37)] = 'GUILD_SUBSCRIPTIONS_BULK'), (e[(e.GUILD_CHANNELS_RESYNC = 38)] = 'GUILD_CHANNELS_RESYNC');
})(i || (i = {}));
class d extends s.EventEmitter {
    presenceUpdate(e, n, r, i) {
        this.send(3, {
            status: e,
            since: n,
            activities: r,
            afk: i
        });
    }
    voiceStateUpdate(e) {
        let { guildId: n = null, channelId: r = null, selfMute: i = !1, selfDeaf: a = !1, selfVideo: o = !1, preferredRegion: s = null, preferredRegions: u = null, videoStreamParameters: c = null, flags: d = 0 } = e,
            f = {
                guild_id: n,
                channel_id: r,
                self_mute: i,
                self_deaf: a,
                self_video: o,
                flags: d
            };
        null != r && l.Z.shouldIncludePreferredRegion() && ((f.preferred_region = s), (f.preferred_regions = u)),
            null != c &&
                (f.tracks =
                    null == c
                        ? void 0
                        : c.map((e) => ({
                              type: e.type,
                              rid: e.rid,
                              quality: e.quality
                          }))),
            this.send(4, f);
    }
    voiceServerPing() {
        this.send(5, null);
    }
    requestGuildMembers(e, n) {
        let { query: r, limit: i, userIds: a, presences: o } = n;
        this.send(8, {
            guild_id: e,
            query: r,
            limit: i,
            user_ids: a,
            presences: o
        });
    }
    searchRecentMembers(e, n) {
        let { query: r, continuationToken: i } = n;
        this.send(35, {
            guild_id: e,
            query: null != r ? r : '',
            continuation_token: null != i ? i : null
        });
    }
    updateGuildSubscriptions(e) {
        let n = {},
            r = 0;
        u.default.keys(e).forEach((i) => {
            let a = e[i],
                o = JSON.stringify([i, a]).length;
            r + o > c && (this.send(37, { subscriptions: n }), (n = {}), (r = 0)), (n[i] = a), (r += o);
        }),
            r > 0 && this.send(37, { subscriptions: n });
    }
    callConnect(e) {
        this.send(13, { channel_id: e });
    }
    streamCreate(e, n, r) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.send(18, {
            type: e,
            guild_id: n,
            channel_id: r,
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
    streamSetPaused(e, n) {
        this.send(22, {
            stream_key: e,
            paused: n
        });
    }
    requestForumUnreads(e, n, r) {
        this.send(28, {
            guild_id: e,
            channel_id: n,
            threads: r.map((e) => ({
                thread_id: e.threadId,
                ack_message_id: e.ackMessageId
            }))
        });
    }
    requestSoundboardSounds(e) {
        this.send(31, { guild_ids: e });
    }
    requestLastMessages(e, n) {
        this.send(34, {
            guild_id: e,
            channel_ids: n
        });
    }
    getDeletedEntityIdsNotMatchingHash(e, n, r, i, a) {
        this.send(30, {
            guild_id: e,
            channel_ids_hash: n,
            role_ids_hash: r,
            emoji_ids_hash: i,
            sticker_ids_hash: a
        });
    }
    triggerGuildChannelResync(e, n) {
        this.send(38, {
            guild_id: e,
            obfuscated_channel_ids: n
        });
    }
    requestChannelStatuses(e) {
        this.send(36, { guild_id: e });
    }
    remoteCommand(e, n) {
        this.send(29, {
            target_session_id: e,
            payload: n
        });
    }
}
