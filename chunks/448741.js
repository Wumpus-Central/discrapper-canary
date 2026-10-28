n.d(t, { _: () => r, w: () => i });
class i extends Error {
    name = "JoinGuildRefusedError";
    constructor(e) {
        super("joinGuild was refused and already showed the user an error", e);
    }
}
function r(e) {
    if (!(e instanceof i)) throw e;
}
