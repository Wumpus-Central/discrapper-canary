n.r(t),
    n.d(t, {
        DISCORD_EPOCH: () => o.cj,
        SnowflakeSequence: () => o.Tk,
        default: () => s
    });
var r = n(392711),
    i = n.n(r),
    o = n(67423);
function a(e) {
    return e;
}
let s = {
    age: function (e) {
        return o.B_(e);
    },
    extractTimestamp: function (e) {
        return o.Lm(e);
    },
    compare: function (e, t) {
        return o.qu(e, t);
    },
    atPreviousMillisecond: function (e) {
        return o.cO(e);
    },
    fromTimestamp: function (e) {
        return o.Ol(e);
    },
    fromTimestampWithSequence: function (e, t) {
        return o.P4(e, t);
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
        return o.qi(e);
    },
    castChannelIdAsMessageId: function (e) {
        return a(e);
    },
    castMessageIdAsChannelId: function (e) {
        return a(e);
    },
    castGuildIdAsEveryoneGuildRoleId: function (e) {
        return a(e);
    },
    cast: a
};
