n.d(t, { Z: () => c });
var r = n(379405),
    l = n(296009),
    o = n(442837),
    i = n(187162),
    a = n(570911);
function c() {
    let e = (0, o.e7)([i.Z], () => i.Z.getOverrideWidgets());
    if (null !== e) return e;
    let t = {
            applicationId: a.J6['23'],
            comment: 'Hands down the best RPG ever'
        },
        n = [
            {
                applicationId: a.J6['58'],
                tags: [r._.NOOB]
            },
            {
                applicationId: a.J6['31'],
                tags: [r._.LFG, r._.GOD_TIER]
            },
            {
                applicationId: a.J6['50'],
                tags: [r._.LIKE_IT, r._.OPEN_TO_PLAY, r._.NOOB, r._.GOD_TIER, r._.LFG, r._.GETTING_GOOD, r._.LEARNING_THE_ROPES, r._.LOOKING_FOR_TIPS]
            }
        ],
        c = [{ applicationId: a.J6['0'] }, { applicationId: a.J6['1'] }, { applicationId: a.J6['2'] }, { applicationId: a.J6['3'] }, { applicationId: a.J6['4'] }, { applicationId: a.J6['5'] }, { applicationId: a.J6['6'] }],
        s = [{ applicationId: a.J6['14'] }, { applicationId: a.J6['15'] }, { applicationId: a.J6['16'] }, { applicationId: a.J6['17'] }, { applicationId: a.J6['18'] }, { applicationId: a.J6['19'] }, { applicationId: a.J6['20'] }];
    return [
        {
            id: '1',
            type: l.l.FAVORITE_GAMES,
            game: t
        },
        {
            id: '2',
            type: l.l.CURRENT_GAMES,
            games: n
        },
        {
            id: '3',
            type: l.l.WANT_TO_PLAY_GAMES,
            games: c
        },
        {
            id: '4',
            type: l.l.PLAYED_GAMES,
            games: s
        }
    ];
}
