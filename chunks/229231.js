n.d(t, { Ok: () => s, Zc: () => a, _u: () => u, gk: () => o });
var i = n(540185),
    l = n(587895),
    r = n(985018);
let a = [i.x.APPLICATION, i.x.FAVORITE_GAMES, i.x.PLAYED_GAMES, i.x.CURRENT_GAMES, i.x.WANT_TO_PLAY_GAMES],
    s = {
        [i.x.FAVORITE_GAMES]: () => r.intl.string(r.t.sUQar8),
        [i.x.CURRENT_GAMES]: () => r.intl.string(r.t.SqNnus),
        [i.x.WANT_TO_PLAY_GAMES]: () => r.intl.string(r.t.bWSQwW),
        [i.x.PLAYED_GAMES]: () => r.intl.string(r.t.scOKET),
        [i.x.APPLICATION]: (e) => l.A.getApplication(e.applicationId)?.name ?? "",
    },
    u = [i.x.FAVORITE_GAMES],
    o = [i.x.CURRENT_GAMES, i.x.FAVORITE_GAMES];
