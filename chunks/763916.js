n.d(t, { Z: () => s });
var r = n(570140),
    i = n(812206),
    l = n(877481),
    o = n(592745);
function a(e) {
    let { gameId: t } = e;
    !(function (e) {
        let t;
        let n = o.Z.launchableGames[e],
            a = i.Z.getApplication(e);
        (null != a ? l.Z.isLaunchable(a) : l.Z.isGameLaunchable(e)).then((t) => {
            t !== n &&
                r.Z.dispatch({
                    type: 'GAME_LAUNCHABLE_UPDATE',
                    gameId: e,
                    isLaunchable: t
                });
        });
    })(t);
}
let s = {
    initialize() {
        r.Z.subscribe('CHECK_LAUNCHABLE_GAME', a);
    }
};
