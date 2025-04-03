n.d(t, { Z: () => s });
var r = n(570140),
    i = n(812206),
    l = n(877481),
    a = n(592745);
function o(e) {
    let t,
        { gameId: n } = e;
    var o = n;
    let s = a.Z.launchableGames[o],
        c = i.Z.getApplication(o);
    (null != c ? l.Z.isLaunchable(c) : l.Z.isGameLaunchable(o)).then((e) => {
        e !== s &&
            r.Z.dispatch({
                type: 'GAME_LAUNCHABLE_UPDATE',
                gameId: o,
                isLaunchable: e
            });
    });
}
let s = {
    initialize() {
        r.Z.subscribe('CHECK_LAUNCHABLE_GAME', o);
    }
};
