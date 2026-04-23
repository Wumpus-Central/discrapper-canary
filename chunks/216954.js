n.d(t, { A: () => o });
var i = n(73153),
    r = n(587895),
    a = n(25171),
    l = n(651743);
function s(e) {
    let t,
        n,
        { gameId: s } = e;
    (t = l.A.launchableGames[s]),
        (null != (n = r.A.getApplication(s)) ? a.A.isLaunchable(n) : a.A.isGameLaunchable(s)).then((e) => {
            e !== t && i.h.dispatch({ type: "GAME_LAUNCHABLE_UPDATE", gameId: s, isLaunchable: e });
        });
}
let o = {
    initialize() {
        i.h.subscribe("CHECK_LAUNCHABLE_GAME", s);
    },
};
