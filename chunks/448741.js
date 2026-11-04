class i extends Error {
    name = "JoinGuildRefusedError";
    constructor(e) {
        super("joinGuild was refused and already showed the user an error", e);
    }
}
n.d(
    t,
    {},
    {
        _: function (e) {
            if (!(e instanceof i)) throw e;
        },
        w: i,
    },
);
