n.d(t, {
    $l: () => l,
    Ay: () => f,
    O_: () => u,
    xx: () => c,
}),
    n(321073),
    n(896048);
var r = n(543531),
    i = n(407689),
    a = n(853742),
    s = n(759735);

function o(e, t, n) {
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

function l(e) {
    return "".concat(i.mG.FORUM_CHANNEL, "_").concat(e);
}

function c(e, t, n) {
    (0, r.wR)(l(e), t, n);
}

function u(e, t, n) {
    (0, r.zK)(l(e), t, n);
}

function d(e) {
    let { guildId: t, channelId: n, sessionId: r, trackedFeedItems: i, isForcedFlush: s } = e,
        o = [],
        l = [];
    for (let e of Object.keys(i)) {
        let t = i[e].computeSeenTimeDestructive(s);
        t > 0 && (o.push(e), l.push(t));
    }
    0 !== o.length &&
        (0, a.Z_)({
            guildId: t,
            channelId: n,
            sessionId: r,
            postIds: o,
            additionalTimes: l,
        });
}
class f extends i.id {
    constructor({ guildId: e, channelId: t, windowId: n, isPaused: r }) {
        super({
            windowId: n,
            isPaused: r,
            id: l(t),
        }),
            o(this, "guildId", void 0),
            o(this, "channelId", void 0),
            o(this, "sessionId", void 0),
            o(this, "createFlushSeenItemsFunction", (e) => {
                let t = this.trackedFeedItems,
                    n = this.channelId,
                    r = {
                        guildId: this.guildId,
                        channelId: n,
                        sessionId: this.sessionId,
                        trackedFeedItems: t,
                        isForcedFlush: null != e,
                    };
                return () => d(r);
            }),
            (this.guildId = e),
            (this.channelId = t),
            (this.sessionId = (0, s.cr)(t));
    }
}
