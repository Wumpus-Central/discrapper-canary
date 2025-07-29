n.d(t, { Z: () => i });
var r = n(836197),
    o = n(570911);
function i() {
    let e = {
            applicationId: o.J6['23'],
            comment: 'Hands down the best RPG ever'
        },
        t = [
            {
                applicationId: o.J6['58'],
                tags: [r._m.CASUAL]
            },
            {
                applicationId: o.J6['31'],
                tags: [r._m.COMPETITIVE, r._m.LFG]
            },
            {
                applicationId: o.J6['50'],
                tags: [r._m.CASUAL, r._m.LFG]
            }
        ],
        n = [{ applicationId: o.J6['0'] }, { applicationId: o.J6['1'] }, { applicationId: o.J6['2'] }, { applicationId: o.J6['3'] }, { applicationId: o.J6['4'] }, { applicationId: o.J6['5'] }, { applicationId: o.J6['6'] }],
        i = [{ applicationId: o.J6['14'] }, { applicationId: o.J6['15'] }, { applicationId: o.J6['16'] }, { applicationId: o.J6['17'] }, { applicationId: o.J6['18'] }, { applicationId: o.J6['19'] }, { applicationId: o.J6['20'] }];
    return [
        {
            id: '1',
            type: r.l9.GAMES,
            gameWidgetType: r.g.FAVORITE,
            game: e
        },
        {
            id: '2',
            type: r.l9.GAMES,
            gameWidgetType: r.g.CURRENT,
            games: t
        },
        {
            id: '3',
            type: r.l9.GAMES,
            gameWidgetType: r.g.WANT_TO_PLAY,
            games: n
        },
        {
            id: '4',
            type: r.l9.GAMES,
            gameWidgetType: r.g.PLAYED,
            games: i
        }
    ];
}
