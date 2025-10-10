n.d(t, {
    S5: () => l,
    Wk: () => s,
    rR: () => o,
    uX: () => c,
});
var r = n(296009),
    i = n(812206),
    a = n(388032);
let o = [r.l.APPLICATION, r.l.FAVORITE_GAMES, r.l.PLAYED_GAMES, r.l.CURRENT_GAMES, r.l.WANT_TO_PLAY_GAMES],
    s = {
        [r.l.FAVORITE_GAMES]: () => a.intl.string(a.t.sUQar6),
        [r.l.CURRENT_GAMES]: () => a.intl.string(a.t.SqNnur),
        [r.l.WANT_TO_PLAY_GAMES]: () => a.intl.string(a.t.bWSQwc),
        [r.l.PLAYED_GAMES]: () => a.intl.string(a.t.scOKER),
        [r.l.APPLICATION]: (e) => {
            var t, n;
            return null != (n = null == (t = i.Z.getApplication(e.applicationId)) ? void 0 : t.name) ? n : "";
        },
    },
    l = [r.l.FAVORITE_GAMES],
    c = [r.l.CURRENT_GAMES];
