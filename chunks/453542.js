n.d(t, { X: () => o }), n(442837);
var r = n(868854),
    i = n(801077),
    l = n(674563);
function o() {
    let e = (0, r.a)();
    var t = i.Z.nowPlayingCards,
        n = e;
    let o = t.reduce((e, t) => {
        var n;
        let r = null != (n = t.party.currentActivities.filter((e) => null != e.game.name && e.game.type === l.wW.GAME).map((e) => e.game.name)) ? n : [];
        return e.concat(r);
    }, []);
    return {
        now_playing_visible: n,
        now_playing_num_cards: t.length,
        now_playing_games_detected: o
    };
}
