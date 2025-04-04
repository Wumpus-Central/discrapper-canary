n.d(t, { Z: () => m }), n(47120), n(653041);
var r = n(31775),
    i = n.n(r),
    o = n(147913),
    a = n(626135),
    s = n(709054),
    l = n(981631);
function c(e, t, n) {
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
let u = 60000,
    d = 1000,
    f = 10,
    _ = 2000,
    p = 500;
class h extends o.Z {
    handleMessageBecameVisible(e) {
        let { messageId: t } = e;
        if (null != this.currentlyVisibleMessageTimers[t] || this.viewsInCurrentChannel.has(t)) return;
        let n = this.recentViewTimes.get(t);
        if (null != n && Date.now() - n < u) return;
        let r = setTimeout(() => {
            delete this.currentlyVisibleMessageTimers[t], this.viewsInCurrentChannel.add(t), this.recentViewTimes.set(t, Date.now()), this.bufferViewTrack(e);
        }, d);
        this.currentlyVisibleMessageTimers[t] = r;
    }
    handleMessageLostVisibility(e) {
        let t = this.currentlyVisibleMessageTimers[e];
        null != t && (clearTimeout(t), delete this.currentlyVisibleMessageTimers[e]);
    }
    handleMessageListVisibilityChange(e) {
        for (let t of e) this.handleMessageBecameVisible(t);
        let t = new Set(e.map((e) => e.messageId));
        for (let e of s.default.keys(this.currentlyVisibleMessageTimers)) t.has(e) || this.handleMessageLostVisibility(e);
    }
    handleChannelSelect() {
        for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(e);
        (this.currentlyVisibleMessageTimers = {}), this.viewsInCurrentChannel.clear(), this.drainBuffer();
    }
    drainBuffer() {
        for (let e of this.batchBuffer)
            a.default.track(l.rMx.ANNOUNCEMENT_MESSAGE_VIEWED, {
                message_id: e.messageId,
                channel_id: e.channelId,
                guild_id: e.guildId,
                source_channel_id: e.sourceChannelId,
                source_guild_id: e.sourceGuildId
            });
        (this.batchBuffer = []), null != this.batchTimerId && (clearTimeout(this.batchTimerId), (this.batchTimerId = null));
    }
    bufferViewTrack(e) {
        this.batchBuffer.length >= f && this.drainBuffer(), this.batchBuffer.push(e), null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), _));
    }
    constructor(...e) {
        super(...e),
            c(this, 'currentlyVisibleMessageTimers', {}),
            c(this, 'viewsInCurrentChannel', new Set()),
            c(
                this,
                'recentViewTimes',
                new (i())({
                    max: p,
                    maxAge: u
                })
            ),
            c(this, 'batchBuffer', []),
            c(this, 'batchTimerId', null),
            c(this, 'actions', { CHANNEL_SELECT: () => this.handleChannelSelect() });
    }
}
let m = new h();
