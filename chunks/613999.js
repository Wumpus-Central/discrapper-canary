n.d(t, { $l: () => l, Ay: () => c, O_: () => d, xx: () => o }), n(321073);
var i = n(543531),
    a = n(407689),
    r = n(853742),
    s = n(759735);
function l(e) {
    return `${a.mG.FORUM_CHANNEL}_${e}`;
}
function o(e, t, n) {
    (0, i.wR)(l(e), t, n);
}
function d(e, t, n) {
    (0, i.zK)(l(e), t, n);
}
class c extends a.id {
    guildId;
    channelId;
    sessionId;
    constructor({ guildId: e, channelId: t, windowId: n, isPaused: i }) {
        super({ windowId: n, isPaused: i, id: l(t) }),
            (this.guildId = e),
            (this.channelId = t),
            (this.sessionId = (0, s.cr)(t));
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
                let { guildId: t, channelId: n, sessionId: i, trackedFeedItems: a, isForcedFlush: s } = e,
                    l = [],
                    o = [];
                for (let e of Object.keys(a)) {
                    let t = a[e].computeSeenTimeDestructive(s);
                    t > 0 && (l.push(e), o.push(t));
                }
                0 !== l.length && (0, r.Z_)({ guildId: t, channelId: n, sessionId: i, postIds: l, additionalTimes: o });
            })(i);
    };
}
