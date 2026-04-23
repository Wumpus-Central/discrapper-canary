"use strict";
n.d(t, { F: () => a }), n(311907);
var r = n(812808),
    i = n(943577),
    s = n(954571);
function a() {
    var e, t;
    let n,
        a = (0, r.B)();
    return (
        (e = i.A.nowPlayingCards),
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
