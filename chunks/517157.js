n.d(t, { Z: () => s });
var r = n(924322),
    o = n(379405),
    i = n(296009),
    a = n(442837),
    l = n(187162),
    c = n(570911);
function s() {
    let e = (0, a.e7)([l.Z], () => l.Z.getOverrideWidgets());
    if (null !== e) return e;
    let t = {
            applicationId: c.J6['23'],
            comment: 'Hands down the best RPG ever'
        },
        n = [
            {
                applicationId: c.J6['58'],
                tags: [o._.NOOB]
            },
            {
                applicationId: c.J6['31'],
                tags: [o._.LFG, o._.GOD_TIER]
            },
            {
                applicationId: c.J6['50'],
                tags: [o._.LIKE_IT, o._.OPEN_TO_PLAY, o._.NOOB, o._.GOD_TIER, o._.LFG, o._.GETTING_GOOD, o._.LEARNING_THE_ROPES, o._.LOOKING_FOR_TIPS]
            }
        ],
        s = [{ applicationId: c.J6['0'] }, { applicationId: c.J6['1'] }, { applicationId: c.J6['2'] }, { applicationId: c.J6['3'] }, { applicationId: c.J6['4'] }, { applicationId: c.J6['5'] }, { applicationId: c.J6['6'] }],
        d = [{ applicationId: c.J6['14'] }, { applicationId: c.J6['15'] }, { applicationId: c.J6['16'] }, { applicationId: c.J6['17'] }, { applicationId: c.J6['18'] }, { applicationId: c.J6['19'] }, { applicationId: c.J6['20'] }];
    return [
        {
            id: '1',
            type: i.l.GAME,
            gameWidgetType: r.g.FAVORITE,
            game: t
        },
        {
            id: '2',
            type: i.l.GAME,
            gameWidgetType: r.g.CURRENT,
            games: n
        },
        {
            id: '3',
            type: i.l.GAME,
            gameWidgetType: r.g.WANT_TO_PLAY,
            games: s
        },
        {
            id: '4',
            type: i.l.GAME,
            gameWidgetType: r.g.PLAYED,
            games: d
        }
    ];
}
