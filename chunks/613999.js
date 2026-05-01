"use strict";
n.d(t, { $l: () => o, Ay: () => c, O_: () => u, xx: () => l }), n(321073);
var i = n(543531),
    r = n(407689),
    s = n(853742),
    a = n(935505);
function o(e) {
    return `${r.mG.FORUM_CHANNEL}_${e}`;
}
function l(e, t, n) {
    (0, i.wR)(o(e), t, n);
}
function u(e, t, n) {
    (0, i.zK)(o(e), t, n);
}
class c extends r.id {
    guildId;
    channelId;
    sessionId;
    constructor({ guildId: e, channelId: t, windowId: n, isPaused: i }) {
        super({ windowId: n, isPaused: i, id: o(t) }),
            (this.guildId = e),
            (this.channelId = t),
            (this.sessionId = (0, a.cr)(t));
    }
    createFlushSeenItemsFunction = (e) => {
        let t = this.trackedFeedItems,
            n = this.channelId,
            i = {
                guildId: this.guildId,
                channelId: n,
                sessionId: this.sessionId,
                trackedFeedItems: t,
                isForcedFlush: null != e,
            };
        return () =>
            (function (e) {
                let { guildId: t, channelId: n, sessionId: i, trackedFeedItems: r, isForcedFlush: a } = e,
                    o = [],
                    l = [];
                for (let e of Object.keys(r)) {
                    let t = r[e].computeSeenTimeDestructive(a);
                    t > 0 && (o.push(e), l.push(t));
                }
                0 !== o.length && (0, s.Z_)({ guildId: t, channelId: n, sessionId: i, postIds: o, additionalTimes: l });
            })(i);
    };
}
