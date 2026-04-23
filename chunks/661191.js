"use strict";
n.r(t), n.d(t, { DISCORD_EPOCH: () => s.ZY, SnowflakeSequence: () => s.gg, default: () => a });
var r = n(735438),
    i = n.n(r),
    s = n(363270);
let a = {
    age: function (e) {
        return s.KW(e);
    },
    extractTimestamp: function (e) {
        return s.uL(e);
    },
    compare: function (e, t) {
        return s.UD(e, t);
    },
    atPreviousMillisecond: function (e) {
        return s.QQ(e);
    },
    atNextMillisecond: function (e) {
        return s.Uk(e);
    },
    fromTimestamp: function (e) {
        return s.z(e);
    },
    fromTimestampWithSequence: function (e, t) {
        return s.M0(e, t);
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
        return s.Nl(e);
    },
    castChannelIdAsMessageId: function (e) {
        return e;
    },
    castMessageIdAsChannelId: function (e) {
        return e;
    },
    castGuildIdAsEveryoneGuildRoleId: function (e) {
        return e;
    },
    cast: function (e) {
        return e;
    },
};
