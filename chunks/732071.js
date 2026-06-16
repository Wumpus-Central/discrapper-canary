"use strict";
n.d(t, { A: () => p, K: () => _ }), n(321073);
var i,
    r = n(635377),
    s = n.n(r),
    a = n(562708),
    o = n(439372),
    l = n(793574),
    u = n(174459),
    c = n(403362),
    d = n(652215),
    _ =
        (((i = {}).ANNOUNCEMENT = "announcement"),
        (i.APP_EMBED = "app_embed"),
        (i.OFFICIAL_MESSAGE = "official_message"),
        (i.VOICE_INVITE_EMBED = "voice_invite_embed"),
        i);
function h(e) {
    return "voice_invite_embed" === e.type ? `${e.messageId}-${e.inviteCode}-${e.type}` : `${e.messageId}-${e.type}`;
}
class f extends o.A {
    currentlyVisibleMessageTimers = {};
    viewsInCurrentChannel = new Set();
    recentViewTimes = new (s())({ max: 500, maxAge: 6e4 });
    batchBuffer = [];
    batchTimerId = null;
    actions = { CHANNEL_SELECT: () => this.handleChannelSelect() };
    handleMessageBecameVisible(e) {
        let t = h(e);
        if (null != this.currentlyVisibleMessageTimers[t] || this.viewsInCurrentChannel.has(t)) return;
        let n = this.recentViewTimes.get(t);
        if (null != n && Date.now() - n < 6e4) return;
        let i = setTimeout(() => {
            delete this.currentlyVisibleMessageTimers[t],
                this.viewsInCurrentChannel.add(t),
                this.recentViewTimes.set(t, Date.now()),
                this.bufferViewTrack(e);
        }, 1e3);
        this.currentlyVisibleMessageTimers[t] = i;
    }
    handleMessageLostVisibility(e, t, n) {
        let i = null != n ? `${e}-${n}-${t}` : `${e}-${t}`,
            r = this.currentlyVisibleMessageTimers[i];
        null != r && (clearTimeout(r), delete this.currentlyVisibleMessageTimers[i]);
    }
    handleMessageListVisibilityChange(e, t) {
        for (let t of e) this.handleMessageBecameVisible(t);
        let n = Object.keys(this.currentlyVisibleMessageTimers);
        if (n.length > 0) {
            let i = new Set(e.map(h));
            for (let e of n) e.endsWith(`-${t}`) && !i.has(e) && this.clearTimer(e);
        }
    }
    clearTimer(e) {
        let t = this.currentlyVisibleMessageTimers[e];
        null != t && (clearTimeout(t), delete this.currentlyVisibleMessageTimers[e]);
    }
    handleChannelSelect() {
        for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(e);
        (this.currentlyVisibleMessageTimers = {}), this.viewsInCurrentChannel.clear(), this.drainBuffer();
    }
    drainBuffer() {
        for (let e of this.batchBuffer) {
            let t = (function (e) {
                switch (e.type) {
                    case "announcement":
                        return {
                            event: d.HAw.ANNOUNCEMENT_MESSAGE_VIEWED,
                            properties: {
                                message_id: e.messageId,
                                channel_id: e.channelId,
                                guild_id: e.guildId,
                                source_channel_id: e.sourceChannelId,
                                source_guild_id: e.sourceGuildId,
                            },
                        };
                    case "app_embed":
                        return {
                            event: d.HAw.APP_EMBED_VIEWED,
                            properties: {
                                application_id: e.applicationId,
                                link_type: e.linkType,
                                message_id: e.messageId,
                                channel_id: e.channelId,
                                guild_id: e.guildId,
                            },
                        };
                    case "official_message":
                        return {
                            event: d.HAw.OFFICIAL_MESSAGE_VIEWED,
                            properties: { message_id: e.messageId, channel_id: e.channelId, guild_id: e.guildId },
                        };
                    case "voice_invite_embed":
                        return {
                            event: a.ImpressionNames.VOICE_INVITE_EMBED,
                            properties: {
                                impression_type: a.ImpressionTypes.VIEW,
                                invite_code: e.inviteCode,
                                invite_guild_id: e.inviteGuildId,
                                invite_channel_id: e.inviteChannelId,
                                invite_instance_id: e.inviteInstanceId,
                                has_active_stream: e.hasActiveStream,
                                location_stack: e.treatmentRendered
                                    ? [l.A.INVITE_EMBED, l.A.VOICE_CHANNEL_LIST_INVITE_EMBED]
                                    : [l.A.INVITE_EMBED],
                            },
                        };
                    default:
                        return (0, c.xb)(e);
                }
            })(e);
            u.default.track(t.event, t.properties);
        }
        (this.batchBuffer = []),
            null != this.batchTimerId && (clearTimeout(this.batchTimerId), (this.batchTimerId = null));
    }
    bufferViewTrack(e) {
        this.batchBuffer.length >= 10 && this.drainBuffer(),
            this.batchBuffer.push(e),
            null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), 2e3));
    }
}
let p = new f();
