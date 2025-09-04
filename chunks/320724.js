n.d(t, {
    Ky: () => o,
    P7: () => s,
}),
    n(415506);
var r = n(570140),
    i = n(358085),
    a = n(998502);
function o() {
    if (!(0, i.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
    a.ZP.setCandidateGamesCallback((e) => {
        r.Z.dispatch({
            type: "CANDIDATE_GAMES_CHANGE",
            games: e,
        });
    }),
        r.Z.dispatch({ type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START" });
}
function s() {
    if (!(0, i.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
    a.ZP.clearCandidateGamesCallback(), r.Z.dispatch({ type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP" });
}
n(189451).ls.ALL;
