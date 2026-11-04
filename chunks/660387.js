n(855986);
var i = n(812808),
    r = n(943577),
    a = n(129230);
n.d(
    t,
    {},
    {
        F: function () {
            var e, t;
            let n,
                s = (0, i.B)();
            return (
                (e = r.A.nowPlayingCards),
                (t = s),
                (n = e.reduce((e, t) => {
                    let n =
                        t.party.currentActivities
                            .filter((e) => null != e.application.name && (0, a.Jt)(e.application.type))
                            .map((e) => e.application.name) ?? [];
                    return e.concat(n);
                }, [])),
                { now_playing_visible: t, now_playing_num_cards: e.length, now_playing_games_detected: n }
            );
        },
    },
);
