"use strict";
n.d(t, { A: () => d, K: () => u }), n(321073);
var i,
    r = n(635377),
    s = n.n(r),
    a = n(439372),
    o = n(174459),
    l = n(652215),
    u =
        (((i = {}).ANNOUNCEMENT = "announcement"),
        (i.APP_EMBED = "app_embed"),
        (i.OFFICIAL_MESSAGE = "official_message"),
        i);
class c extends a.A {
    currentlyVisibleMessageTimers = {};
    viewsInCurrentChannel = new Set();
    recentViewTimes = new (s())({ max: 500, maxAge: 6e4 });
    batchBuffer = [];
    batchTimerId = null;
    actions = { CHANNEL_SELECT: () => this.handleChannelSelect() };
    handleMessageBecameVisible(e) {
        let { type: t, messageId: n } = e,
            i = `${n}-${t}`;
        if (null != this.currentlyVisibleMessageTimers[i] || this.viewsInCurrentChannel.has(i)) return;
        let r = this.recentViewTimes.get(i);
        if (null != r && Date.now() - r < 6e4) return;
        let s = setTimeout(() => {
            delete this.currentlyVisibleMessageTimers[i],
                this.viewsInCurrentChannel.add(i),
                this.recentViewTimes.set(i, Date.now()),
                this.bufferViewTrack(e);
        }, 1e3);
        this.currentlyVisibleMessageTimers[i] = s;
    }
    handleMessageLostVisibility(e, t) {
        let n = `${e}-${t}`,
            i = this.currentlyVisibleMessageTimers[n];
        null != i && (clearTimeout(i), delete this.currentlyVisibleMessageTimers[n]);
    }
    handleMessageListVisibilityChange(e, t) {
        for (let t of e) this.handleMessageBecameVisible(t);
        let n = Object.keys(this.currentlyVisibleMessageTimers);
        if (n.length > 0) {
            let i = new Set(e.map((e) => `${e.messageId}-${e.type}`));
            for (let e of n)
                if (e.endsWith(`-${t}`) && !i.has(e)) {
                    let n = e.slice(0, e.lastIndexOf("-"));
                    this.handleMessageLostVisibility(n, t);
                }
        }
    }
    handleChannelSelect() {
        for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(e);
        (this.currentlyVisibleMessageTimers = {}), this.viewsInCurrentChannel.clear(), this.drainBuffer();
    }
    drainBuffer() {
        for (let e of this.batchBuffer) {
            let t = (function (e) {
                if ("announcement" === e.type)
                    return {
                        event: l.HAw.ANNOUNCEMENT_MESSAGE_VIEWED,
                        properties: {
                            message_id: e.messageId,
                            channel_id: e.channelId,
                            guild_id: e.guildId,
                            source_channel_id: e.sourceChannelId,
                            source_guild_id: e.sourceGuildId,
                        },
                    };
                if ("app_embed" === e.type)
                    return {
                        event: l.HAw.APP_EMBED_VIEWED,
                        properties: {
                            application_id: e.applicationId,
                            link_type: e.linkType,
                            message_id: e.messageId,
                            channel_id: e.channelId,
                            guild_id: e.guildId,
                        },
                    };
                if ("official_message" === e.type)
                    return {
                        event: l.HAw.OFFICIAL_MESSAGE_VIEWED,
                        properties: { message_id: e.messageId, channel_id: e.channelId, guild_id: e.guildId },
                    };
                throw Error("Invalid message type for message view tracking");
            })(e);
            o.default.track(t.event, t.properties);
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
let d = new c();
