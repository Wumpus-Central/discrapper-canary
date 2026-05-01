i.d(t, { Ok: () => a, Zc: () => s, _u: () => u, gk: () => o });
var n = i(540185),
    l = i(587895),
    r = i(985018);
let s = [n.x.APPLICATION, n.x.FAVORITE_GAMES, n.x.PLAYED_GAMES, n.x.CURRENT_GAMES, n.x.WANT_TO_PLAY_GAMES],
    a = {
        [n.x.FAVORITE_GAMES]: () => r.intl.string(r.t.sUQar8),
        [n.x.CURRENT_GAMES]: () => r.intl.string(r.t.SqNnus),
        [n.x.WANT_TO_PLAY_GAMES]: () => r.intl.string(r.t.bWSQwW),
        [n.x.PLAYED_GAMES]: () => r.intl.string(r.t.scOKET),
        [n.x.APPLICATION]: (e) => l.A.getApplication(e.applicationId)?.name ?? "",
    },
    u = [n.x.FAVORITE_GAMES],
    o = [n.x.CURRENT_GAMES, n.x.FAVORITE_GAMES];
