n.d(t, {
    Ky: function () {
        return a;
    },
    P7: function () {
        return l;
    }
}),
    n(411104);
var i = n(570140),
    s = n(358085),
    r = n(998502);
function a() {
    if (!(0, s.isDesktop)()) throw Error('Attempted to observe candidate games on a non-desktop platform');
    r.ZP.setCandidateGamesCallback((e) => {
        i.Z.dispatch({
            type: 'CANDIDATE_GAMES_CHANGE',
            games: e
        });
    }),
        i.Z.dispatch({ type: 'GAME_DETECTION_WATCH_CANDIDATE_GAMES_START' });
}
function l() {
    if (!(0, s.isDesktop)()) throw Error('Attempted to stop observing candidate games on a non-desktop platform');
    r.ZP.clearCandidateGamesCallback(), i.Z.dispatch({ type: 'GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP' });
}
n(189451).l.ALL;
