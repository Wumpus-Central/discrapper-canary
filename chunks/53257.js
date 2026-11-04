var l = e(350835);
e.d(
    n,
    {},
    {
        A: function (t) {
            return (
                (t.type === l.$.LISTENING || t.type === l.$.WATCHING) &&
                t.timestamps?.start != null &&
                null != t.timestamps.end
            );
        },
    },
);
