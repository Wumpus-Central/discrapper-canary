"use strict";
n.d(t, { F: () => a }), n(17928);
var i = n(812808),
    r = n(943577),
    s = n(954571);
function a() {
    var e, t;
    let n,
        a = (0, i.B)();
    return (
        (e = r.A.nowPlayingCards),
        (t = a),
        (n = e.reduce((e, t) => {
            let n =
                t.party.currentActivities
                    .filter((e) => null != e.game.name && (0, s.isGameApplicationType)(e.game.type))
                    .map((e) => e.game.name) ?? [];
            return e.concat(n);
        }, [])),
        { now_playing_visible: t, now_playing_num_cards: e.length, now_playing_games_detected: n }
    );
}
