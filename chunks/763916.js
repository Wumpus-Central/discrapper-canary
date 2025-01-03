var i = n(570140),
    r = n(812206),
    l = n(877481),
    a = n(592745);
function s(e) {
    let { gameId: t } = e;
    !(function (e) {
        let t;
        let n = a.Z.launchableGames[e],
            s = r.Z.getApplication(e);
        (t = null != s ? l.Z.isLaunchable(s) : l.Z.isGameLaunchable(e)).then((t) => {
            t !== n &&
                i.Z.dispatch({
                    type: 'GAME_LAUNCHABLE_UPDATE',
                    gameId: e,
                    isLaunchable: t
                });
        });
    })(t);
}
t.Z = {
    initialize() {
        i.Z.subscribe('CHECK_LAUNCHABLE_GAME', s);
    }
};
