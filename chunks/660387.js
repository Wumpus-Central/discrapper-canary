"use strict";
n.d(t, { F: () => s }), n(311907);
var r = n(812808),
    i = n(943577),
    a = n(954571);
function s() {
    let e = (0, r.B)();
    return o(i.A.nowPlayingCards, e);
}
function o(e, t) {
    let n = e.reduce((e, t) => {
        let n =
            t.party.currentActivities
                .filter((e) => null != e.game.name && (0, a.isGameApplicationType)(e.game.type))
                .map((e) => e.game.name) ?? [];
        return e.concat(n);
    }, []);
    return { now_playing_visible: t, now_playing_num_cards: e.length, now_playing_games_detected: n };
}
