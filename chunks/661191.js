var i = n(435558),
    r = n.n(i),
    a = n(363270);
n.d(
    t,
    { Z: () => a.ZY, g: () => a.gg },
    {
        default: {
            age: function (e) {
                return a.KW(e);
            },
            extractTimestamp: function (e) {
                return a.uL(e);
            },
            getNonTimestampBits: function (e) {
                return a.SL(e);
            },
            setNonTimestampBits: function (e, t) {
                return a.Iw(e, t);
            },
            compare: function (e, t) {
                return a.UD(e, t);
            },
            atPreviousMillisecond: function (e) {
                return a.QQ(e);
            },
            atNextMillisecond: function (e) {
                return a.Uk(e);
            },
            fromTimestamp: function (e) {
                return a.z(e);
            },
            fromTimestampWithSequence: function (e, t) {
                return a.M0(e, t);
            },
            keys: function (e) {
                return Object.keys(e);
            },
            forEach: function (e, t) {
                r().forEach(e, (e, n) => t(e, n));
            },
            forEachKey: function (e, t) {
                for (let n in e) t(n);
            },
            entries: function (e) {
                return Object.entries(e);
            },
            isProbablyAValidSnowflake: function (e) {
                return a.Nl(e);
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
        },
    },
);
