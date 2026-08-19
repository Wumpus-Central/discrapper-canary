"use strict";
n.d(t, { Ok: () => l, Zc: () => s, _u: () => o, gk: () => d });
var i = n(540185),
    r = n(587895),
    a = n(375708);
let s = [
        i.x.PERSONAL,
        i.x.CLIPS_GALLERY,
        i.x.APPLICATION,
        i.x.FAVORITE_GAMES,
        i.x.PLAYED_GAMES,
        i.x.CURRENT_GAMES,
        i.x.WANT_TO_PLAY_GAMES,
    ],
    l = {
        [i.x.FAVORITE_GAMES]: () => a.intl.string(a.t.Rpf6Ak),
        [i.x.CURRENT_GAMES]: () => a.intl.string(a.t.zs6NsE),
        [i.x.WANT_TO_PLAY_GAMES]: () => a.intl.string(a.t.I509Dl),
        [i.x.PLAYED_GAMES]: () => a.intl.string(a.t.QTq6Pf),
        [i.x.APPLICATION]: (e) => r.A.getApplication(e.applicationId)?.name ?? "",
        [i.x.PERSONAL]: () => a.intl.string(a.t.AVkYMx),
        [i.x.CLIPS_GALLERY]: () => a.intl.string(a.t.zY8Ghg),
    },
    o = [i.x.FAVORITE_GAMES],
    d = [i.x.CURRENT_GAMES, i.x.FAVORITE_GAMES, i.x.CLIPS_GALLERY];
