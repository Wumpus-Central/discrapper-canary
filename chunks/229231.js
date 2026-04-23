"use strict";
n.d(t, { Ok: () => o, Zc: () => a, _u: () => l, gk: () => u });
var r = n(540185),
    i = n(587895),
    s = n(985018);
let a = [r.x.APPLICATION, r.x.FAVORITE_GAMES, r.x.PLAYED_GAMES, r.x.CURRENT_GAMES, r.x.WANT_TO_PLAY_GAMES],
    o = {
        [r.x.FAVORITE_GAMES]: () => s.intl.string(s.t.sUQar8),
        [r.x.CURRENT_GAMES]: () => s.intl.string(s.t.SqNnus),
        [r.x.WANT_TO_PLAY_GAMES]: () => s.intl.string(s.t.bWSQwW),
        [r.x.PLAYED_GAMES]: () => s.intl.string(s.t.scOKET),
        [r.x.APPLICATION]: (e) => i.A.getApplication(e.applicationId)?.name ?? "",
    },
    l = [r.x.FAVORITE_GAMES],
    u = [r.x.CURRENT_GAMES, r.x.FAVORITE_GAMES];
