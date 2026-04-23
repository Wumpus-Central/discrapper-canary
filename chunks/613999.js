n.d(t, { $l: () => _, Ay: () => E, O_: () => o, xx: () => l }), n(321073);
var i = n(543531),
    r = n(407689),
    a = n(853742),
    s = n(759735);
function _(e) {
    return `${r.mG.FORUM_CHANNEL}_${e}`;
}
function l(e, t, n) {
    (0, i.wR)(_(e), t, n);
}
function o(e, t, n) {
    (0, i.zK)(_(e), t, n);
}
class E extends r.id {
    guildId;
    channelId;
    sessionId;
    constructor({ guildId: e, channelId: t, windowId: n, isPaused: i }) {
        super({ windowId: n, isPaused: i, id: _(t) }),
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
                let { guildId: t, channelId: n, sessionId: i, trackedFeedItems: r, isForcedFlush: s } = e,
                    _ = [],
                    l = [];
                for (let e of Object.keys(r)) {
                    let t = r[e].computeSeenTimeDestructive(s);
                    t > 0 && (_.push(e), l.push(t));
                }
                0 !== _.length && (0, a.Z_)({ guildId: t, channelId: n, sessionId: i, postIds: _, additionalTimes: l });
            })(i);
    };
}
