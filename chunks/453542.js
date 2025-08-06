n.d(t, { X: () => a }), n(442837);
var r = n(868854),
    i = n(801077),
    o = n(626135);
function a() {
    let e = (0, r.a)();
    return s(i.Z.nowPlayingCards, e);
}
function s(e, t) {
    let n = e.reduce((e, t) => {
        var n;
        let r =
            null !=
            (n = t.party.currentActivities
                .filter((e) => null != e.game.name && (0, o.isGameApplicationType)(e.game.type))
                .map((e) => e.game.name))
                ? n
                : [];
        return e.concat(r);
    }, []);
    return {
        now_playing_visible: t,
        now_playing_num_cards: e.length,
        now_playing_games_detected: n,
    };
}
