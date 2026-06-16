"use strict";
n.d(t, { Ok: () => o, Zc: () => a, _u: () => l, gk: () => u });
var i = n(540185),
    r = n(587895),
    s = n(375708);
let a = [i.x.APPLICATION, i.x.FAVORITE_GAMES, i.x.PLAYED_GAMES, i.x.CURRENT_GAMES, i.x.WANT_TO_PLAY_GAMES],
    o = {
        [i.x.FAVORITE_GAMES]: () => s.intl.string(s.t.sUQar8),
        [i.x.CURRENT_GAMES]: () => s.intl.string(s.t.SqNnus),
        [i.x.WANT_TO_PLAY_GAMES]: () => s.intl.string(s.t.bWSQwW),
        [i.x.PLAYED_GAMES]: () => s.intl.string(s.t.scOKET),
        [i.x.APPLICATION]: (e) => r.A.getApplication(e.applicationId)?.name ?? "",
    },
    l = [i.x.FAVORITE_GAMES],
    u = [i.x.CURRENT_GAMES, i.x.FAVORITE_GAMES];
