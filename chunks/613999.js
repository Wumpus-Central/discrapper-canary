"use strict";
n.d(t, { $l: () => o, Ay: () => d, O_: () => u, xx: () => l }), n(321073);
var r = n(543531),
    i = n(407689),
    a = n(853742),
    s = n(759735);
function o(e) {
    return `${i.mG.FORUM_CHANNEL}_${e}`;
}
function l(e, t, n) {
    (0, r.wR)(o(e), t, n);
}
function u(e, t, n) {
    (0, r.zK)(o(e), t, n);
}
function c(e) {
    let { guildId: t, channelId: n, sessionId: r, trackedFeedItems: i, isForcedFlush: s } = e,
        o = [],
        l = [];
    for (let e of Object.keys(i)) {
        let t = i[e].computeSeenTimeDestructive(s);
        t > 0 && (o.push(e), l.push(t));
    }
    0 !== o.length && (0, a.Z_)({ guildId: t, channelId: n, sessionId: r, postIds: o, additionalTimes: l });
}
class d extends i.id {
    guildId;
    channelId;
    sessionId;
    constructor({ guildId: e, channelId: t, windowId: n, isPaused: r }) {
        super({ windowId: n, isPaused: r, id: o(t) }),
            (this.guildId = e),
            (this.channelId = t),
            (this.sessionId = (0, s.cr)(t));
    }
    createFlushSeenItemsFunction = (e) => {
        let t = this.trackedFeedItems,
            n = this.channelId,
            r = {
                guildId: this.guildId,
                channelId: n,
                sessionId: this.sessionId,
                trackedFeedItems: t,
                isForcedFlush: null != e,
            };
        return () => c(r);
    };
}
