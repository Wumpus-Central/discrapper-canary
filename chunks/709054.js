n.r(t),
    n.d(t, {
        DISCORD_EPOCH: () => a.cj,
        SnowflakeSequence: () => a.Tk,
        default: () => s
    });
var r = n(392711),
    i = n.n(r),
    a = n(67423);
function o(e) {
    return e;
}
let s = {
    age: function (e) {
        return a.B_(e);
    },
    extractTimestamp: function (e) {
        return a.Lm(e);
    },
    compare: function (e, t) {
        return a.qu(e, t);
    },
    atPreviousMillisecond: function (e) {
        return a.cO(e);
    },
    fromTimestamp: function (e) {
        return a.Ol(e);
    },
    fromTimestampWithSequence: function (e, t) {
        return a.P4(e, t);
    },
    keys: function (e) {
        return Object.keys(e);
    },
    forEach: function (e, t) {
        i().forEach(e, (e, n) => t(e, n));
    },
    forEachKey: function (e, t) {
        for (let n in e) t(n);
    },
    entries: function (e) {
        return Object.entries(e);
    },
    isProbablyAValidSnowflake: function (e) {
        return a.qi(e);
    },
    castChannelIdAsMessageId: function (e) {
        return o(e);
    },
    castMessageIdAsChannelId: function (e) {
        return o(e);
    },
    castGuildIdAsEveryoneGuildRoleId: function (e) {
        return o(e);
    },
    cast: o
};
