n.d(t, {
    Z: () => g,
    k: () => _,
}),
    n(415506),
    n(388685),
    n(35282),
    n(539854);
var r = n(31775),
    i = n.n(r),
    a = n(147913),
    o = n(626135),
    s = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = 60000,
    u = 1000,
    d = 10,
    f = 2000,
    p = 500;
var _ = (function (e) {
    return (e.ANNOUNCEMENT = "announcement"), (e.APP_EMBED = "app_embed"), e;
})({});
function m(e) {
    if ("announcement" === e.type)
        return {
            event: s.rMx.ANNOUNCEMENT_MESSAGE_VIEWED,
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
            event: s.rMx.APP_EMBED_VIEWED,
            properties: {
                application_id: e.applicationId,
                link_type: e.linkType,
                message_id: e.messageId,
                channel_id: e.channelId,
                guild_id: e.guildId,
            },
        };
    throw Error("Invalid message type for message view tracking");
}
class h extends a.Z {
    handleMessageBecameVisible(e) {
        let { type: t, messageId: n } = e,
            r = "".concat(n, "-").concat(t);
        if (null != this.currentlyVisibleMessageTimers[r] || this.viewsInCurrentChannel.has(r)) return;
        let i = this.recentViewTimes.get(r);
        if (null != i && Date.now() - i < c) return;
        let a = setTimeout(() => {
            delete this.currentlyVisibleMessageTimers[r],
                this.viewsInCurrentChannel.add(r),
                this.recentViewTimes.set(r, Date.now()),
                this.bufferViewTrack(e);
        }, u);
        this.currentlyVisibleMessageTimers[r] = a;
    }
    handleMessageLostVisibility(e, t) {
        let n = "".concat(e, "-").concat(t),
            r = this.currentlyVisibleMessageTimers[n];
        null != r && (clearTimeout(r), delete this.currentlyVisibleMessageTimers[n]);
    }
    handleMessageListVisibilityChange(e) {
        for (let t of e) this.handleMessageBecameVisible(t);
        let t = new Set(e.map((e) => "".concat(e.messageId, "-").concat(e.type)));
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
            let t = m(e);
            o.default.track(t.event, t.properties);
        }
        (this.batchBuffer = []),
            null != this.batchTimerId && (clearTimeout(this.batchTimerId), (this.batchTimerId = null));
    }
    bufferViewTrack(e) {
        this.batchBuffer.length >= d && this.drainBuffer(),
            this.batchBuffer.push(e),
            null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), f));
    }
    constructor(...e) {
        super(...e),
            l(this, "currentlyVisibleMessageTimers", {}),
            l(this, "viewsInCurrentChannel", new Set()),
            l(
                this,
                "recentViewTimes",
                new (i())({
                    max: p,
                    maxAge: c,
                }),
            ),
            l(this, "batchBuffer", []),
            l(this, "batchTimerId", null),
            l(this, "actions", { CHANNEL_SELECT: () => this.handleChannelSelect() });
    }
}
let g = new h();
