var i = r(47120);
var a = r(653041);
var o = r(31775),
    s = r.n(o),
    l = r(147913),
    u = r(626135),
    c = r(709054),
    d = r(981631);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let p = 60000,
    h = 1000,
    _ = 10,
    m = 2000,
    g = 500;
class E extends l.Z {
    handleMessageBecameVisible(e) {
        let { messageId: n } = e;
        if (null != this.currentlyVisibleMessageTimers[n] || this.viewsInCurrentChannel.has(n)) return;
        let r = this.recentViewTimes.get(n);
        if (null != r && Date.now() - r < p) return;
        let i = setTimeout(() => {
            delete this.currentlyVisibleMessageTimers[n], this.viewsInCurrentChannel.add(n), this.recentViewTimes.set(n, Date.now()), this.bufferViewTrack(e);
        }, h);
        this.currentlyVisibleMessageTimers[n] = i;
    }
    handleMessageLostVisibility(e) {
        let n = this.currentlyVisibleMessageTimers[e];
        null != n && (clearTimeout(n), delete this.currentlyVisibleMessageTimers[e]);
    }
    handleMessageListVisibilityChange(e) {
        for (let n of e) this.handleMessageBecameVisible(n);
        let n = new Set(e.map((e) => e.messageId));
        for (let e of c.default.keys(this.currentlyVisibleMessageTimers)) !n.has(e) && this.handleMessageLostVisibility(e);
    }
    handleChannelSelect() {
        for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(e);
        (this.currentlyVisibleMessageTimers = {}), this.viewsInCurrentChannel.clear(), this.drainBuffer();
    }
    drainBuffer() {
        for (let e of this.batchBuffer)
            u.default.track(d.rMx.ANNOUNCEMENT_MESSAGE_VIEWED, {
                message_id: e.messageId,
                channel_id: e.channelId,
                guild_id: e.guildId,
                source_channel_id: e.sourceChannelId,
                source_guild_id: e.sourceGuildId
            });
        (this.batchBuffer = []), null != this.batchTimerId && (clearTimeout(this.batchTimerId), (this.batchTimerId = null));
    }
    bufferViewTrack(e) {
        this.batchBuffer.length >= _ && this.drainBuffer(), this.batchBuffer.push(e), null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), m));
    }
    constructor(...e) {
        super(...e),
            f(this, 'currentlyVisibleMessageTimers', {}),
            f(this, 'viewsInCurrentChannel', new Set()),
            f(
                this,
                'recentViewTimes',
                new (s())({
                    max: g,
                    maxAge: p
                })
            ),
            f(this, 'batchBuffer', []),
            f(this, 'batchTimerId', null),
            f(this, 'actions', { CHANNEL_SELECT: () => this.handleChannelSelect() });
    }
}
n.Z = new E();
