var l = n(927813);
n(251812);
var i = n(518782),
    r = n(135294),
    a = n(792996);
n.d(
    t,
    {},
    {
        Hc: function (e) {
            let t = e.winningStreak ?? 0;
            if (t > 1) return a.intl.formatToPlainString(r.default["ZCFDN+"], { streakCount: t });
            let n = e.winningValue;
            if (null == n || !Number.isFinite(n) || n < 0) return null;
            switch (e.winningStat) {
                case i.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED: {
                    let e = Math.floor(n / l.A.Millis.MINUTE),
                        t = Math.floor(e / l.A.Minutes.HOUR),
                        i = e % l.A.Minutes.HOUR;
                    if (0 === t) return a.intl.formatToPlainString(r.default["/272et"], { minutes: i });
                    return a.intl.formatToPlainString(r.default.GC7N5H, { hours: t, minutes: i });
                }
                case i.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                    return a.intl.formatToPlainString(r.default.IXdbVJ, { days: n });
                case i.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                    return a.intl.formatToPlainString(r.default["/VAMco"], { count: n });
                default:
                    return null;
            }
        },
        Xf: function () {
            return a.intl.string(r.default.jCZgxQ);
        },
    },
);
