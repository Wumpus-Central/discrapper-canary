n.d(t, {
    Ky: () => r,
    P7: () => a
}),
    n(411104);
var i = n(570140),
    s = n(358085),
    l = n(998502);
function r() {
    if (!(0, s.isDesktop)()) throw Error('Attempted to observe candidate games on a non-desktop platform');
    l.ZP.setCandidateGamesCallback((e) => {
        i.Z.dispatch({
            type: 'CANDIDATE_GAMES_CHANGE',
            games: e
        });
    }),
        i.Z.dispatch({ type: 'GAME_DETECTION_WATCH_CANDIDATE_GAMES_START' });
}
function a() {
    if (!(0, s.isDesktop)()) throw Error('Attempted to stop observing candidate games on a non-desktop platform');
    l.ZP.clearCandidateGamesCallback(), i.Z.dispatch({ type: 'GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP' });
}
n(189451).l.ALL;
