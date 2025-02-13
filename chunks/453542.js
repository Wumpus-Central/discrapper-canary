n.d(t, { X: () => o }), n(724458), n(442837);
var i = n(868854),
    l = n(801077),
    r = n(674563);
function o() {
    let e = (0, i.a)();
    return (function (e, t) {
        let n = e.reduce((e, t) => {
            var n;
            let i = null !== (n = t.party.currentActivities.filter((e) => null != e.game.name && e.game.type === r.wW.GAME).map((e) => e.game.name)) && void 0 !== n ? n : [];
            return e.concat(i);
        }, []);
        return {
            now_playing_visible: t,
            now_playing_num_cards: e.length,
            now_playing_games_detected: n
        };
    })(l.Z.nowPlayingCards, e);
}
