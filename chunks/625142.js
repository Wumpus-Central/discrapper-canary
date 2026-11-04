n.d(
    e,
    {},
    {
        d: (t) => {
            let { guildId: e, guildEventId: n } = t;
            return `https://discord.com/events/${e}/${n}`;
        },
        y: function (t, e, n) {
            return t && e && null != n;
        },
    },
);
