var i = a(554146),
    r = a(826673),
    n = a(263775),
    s = a(142617),
    c = a(49999);
let d = "guilds_bar";
a.d(
    t,
    {},
    {
        $L: function (e) {
            let t = (0, s.Pr)(e),
                [a, r] = (0, n.kn)(t ? [i.M.BUILD_A_BEAR_INTRO] : []);
            return { visible: a === i.M.BUILD_A_BEAR_INTRO, markAsDismissed: r };
        },
        G5: d,
        rX: function (e) {
            (0, r.Dr)(i.M.BUILD_A_BEAR_INTRO, { dismissAction: e === d ? c.i.TAKE_ACTION : c.i.INDIRECT_ACTION });
        },
    },
);
