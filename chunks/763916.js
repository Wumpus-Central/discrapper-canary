n.d(t, { Z: () => o });
var i = n(570140),
    l = n(812206),
    r = n(877481),
    a = n(592745);
function s(e) {
    let { gameId: t } = e;
    !(function (e) {
        let t;
        let n = a.Z.launchableGames[e],
            s = l.Z.getApplication(e);
        (null != s ? r.Z.isLaunchable(s) : r.Z.isGameLaunchable(e)).then((t) => {
            t !== n &&
                i.Z.dispatch({
                    type: 'GAME_LAUNCHABLE_UPDATE',
                    gameId: e,
                    isLaunchable: t
                });
        });
    })(t);
}
let o = {
    initialize() {
        i.Z.subscribe('CHECK_LAUNCHABLE_GAME', s);
    }
};
