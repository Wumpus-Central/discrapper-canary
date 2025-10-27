n.d(t, { Z: () => o });
var r = n(570140),
    i = n(812206),
    l = n(877481),
    a = n(592745);
function s(e) {
    let { gameId: t } = e;
    var n = t;
    let s = a.Z.launchableGames[n],
        o = i.Z.getApplication(n);
    (null != o ? l.Z.isLaunchable(o) : l.Z.isGameLaunchable(n)).then((e) => {
        e !== s &&
            r.Z.dispatch({
                type: "GAME_LAUNCHABLE_UPDATE",
                gameId: n,
                isLaunchable: e,
            });
    });
}
let o = {
    initialize() {
        r.Z.subscribe("CHECK_LAUNCHABLE_GAME", s);
    },
};
