n.d(t, {
    Ky: () => a,
    P7: () => l
}),
    n(411104);
var r = n(570140),
    i = n(358085),
    s = n(998502);
function a() {
    if (!(0, i.isDesktop)()) throw Error('Attempted to observe candidate games on a non-desktop platform');
    s.ZP.setCandidateGamesCallback((e) => {
        r.Z.dispatch({
            type: 'CANDIDATE_GAMES_CHANGE',
            games: e
        });
    }),
        r.Z.dispatch({ type: 'GAME_DETECTION_WATCH_CANDIDATE_GAMES_START' });
}
function l() {
    if (!(0, i.isDesktop)()) throw Error('Attempted to stop observing candidate games on a non-desktop platform');
    s.ZP.clearCandidateGamesCallback(), r.Z.dispatch({ type: 'GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP' });
}
n(189451).l.ALL;
