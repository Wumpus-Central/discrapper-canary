"use strict";
n.d(t, { A: () => c, K: () => u }), n(321073);
var r,
    i = n(635377),
    s = n.n(i),
    a = n(439372),
    o = n(954571),
    l = n(652215),
    u = (((r = {}).ANNOUNCEMENT = "announcement"), (r.APP_EMBED = "app_embed"), r);
class d extends a.A {
    currentlyVisibleMessageTimers = {};
    viewsInCurrentChannel = new Set();
    recentViewTimes = new (s())({ max: 500, maxAge: 6e4 });
    batchBuffer = [];
    batchTimerId = null;
    actions = { CHANNEL_SELECT: () => this.handleChannelSelect() };
    handleMessageBecameVisible(e) {
        let { type: t, messageId: n } = e,
            r = `${n}-${t}`;
        if (null != this.currentlyVisibleMessageTimers[r] || this.viewsInCurrentChannel.has(r)) return;
        let i = this.recentViewTimes.get(r);
        if (null != i && Date.now() - i < 6e4) return;
        let s = setTimeout(() => {
            delete this.currentlyVisibleMessageTimers[r],
                this.viewsInCurrentChannel.add(r),
                this.recentViewTimes.set(r, Date.now()),
                this.bufferViewTrack(e);
        }, 1e3);
        this.currentlyVisibleMessageTimers[r] = s;
    }
    handleMessageLostVisibility(e, t) {
        let n = `${e}-${t}`,
            r = this.currentlyVisibleMessageTimers[n];
        null != r && (clearTimeout(r), delete this.currentlyVisibleMessageTimers[n]);
    }
    handleMessageListVisibilityChange(e) {
        for (let t of e) this.handleMessageBecameVisible(t);
        let t = new Set(e.map((e) => `${e.messageId}-${e.type}`));
        for (let e of Object.keys(this.currentlyVisibleMessageTimers))
            if (!t.has(e)) {
                let [t, n] = e.split("-");
                this.handleMessageLostVisibility(t, n);
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
let c = new d();
