var l = n(350835);
n.d(
    t,
    {},
    {
        A: function (e) {
            return (
                (e.type === l.$.LISTENING || e.type === l.$.WATCHING) &&
                e.timestamps?.start != null &&
                null != e.timestamps.end
            );
        },
    },
);
