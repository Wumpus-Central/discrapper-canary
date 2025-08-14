n.d(t, { Z: () => s });
var r = n(570140),
    i = n(812206),
    l = n(877481),
    a = n(592745);
function o(e) {
    let { gameId: t } = e;
    var n = t;
    let o = a.Z.launchableGames[n],
        s = i.Z.getApplication(n);
    (null != s ? l.Z.isLaunchable(s) : l.Z.isGameLaunchable(n)).then((e) => {
        e !== o &&
            r.Z.dispatch({
                type: "GAME_LAUNCHABLE_UPDATE",
                gameId: n,
                isLaunchable: e,
            });
    });
}
let s = {
    initialize() {
        r.Z.subscribe("CHECK_LAUNCHABLE_GAME", o);
    },
};
