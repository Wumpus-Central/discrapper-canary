"use strict";
n.d(t, { Ok: () => l, Zc: () => s, _u: () => o, gk: () => d });
var i = n(540185),
    r = n(587895),
    a = n(375708);
let s = [
        i.x.PERSONAL,
        i.x.APPLICATION,
        i.x.FAVORITE_GAMES,
        i.x.PLAYED_GAMES,
        i.x.CURRENT_GAMES,
        i.x.WANT_TO_PLAY_GAMES,
    ],
    l = {
        [i.x.FAVORITE_GAMES]: () => a.intl.string(a.t.sUQar8),
        [i.x.CURRENT_GAMES]: () => a.intl.string(a.t.SqNnus),
        [i.x.WANT_TO_PLAY_GAMES]: () => a.intl.string(a.t.bWSQwW),
        [i.x.PLAYED_GAMES]: () => a.intl.string(a.t.scOKET),
        [i.x.APPLICATION]: (e) => r.A.getApplication(e.applicationId)?.name ?? "",
        [i.x.PERSONAL]: () => a.intl.string(a.t.AVkYMx),
    },
    o = [i.x.FAVORITE_GAMES],
    d = [i.x.CURRENT_GAMES, i.x.FAVORITE_GAMES];
