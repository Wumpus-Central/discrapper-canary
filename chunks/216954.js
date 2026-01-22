n.d(t, {
    A: () => o,
});
var r = n(73153),
    i = n(587895),
    l = n(25171),
    a = n(651743);

function s(e) {
    let t,
        n,
        { gameId: s } = e;
    (t = a.A.launchableGames[s]),
        (null != (n = i.A.getApplication(s)) ? l.A.isLaunchable(n) : l.A.isGameLaunchable(s)).then((e) => {
            e !== t &&
                r.h.dispatch({
                    type: "GAME_LAUNCHABLE_UPDATE",
                    gameId: s,
                    isLaunchable: e,
                });
        });
}
let o = {
    initialize() {
        r.h.subscribe("CHECK_LAUNCHABLE_GAME", s);
    },
};
