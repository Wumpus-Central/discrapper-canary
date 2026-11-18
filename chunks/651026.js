var i = n(927813);
n(251812);
var r = n(518782),
    a = n(135294),
    l = n(792996);
n.d(
    t,
    {},
    {
        Hc: function (e) {
            let t = e.winningStreak ?? 0;
            if (t > 1) return l.intl.formatToPlainString(a.default["ZCFDN+"], { streakCount: t });
            let n = e.winningValue;
            if (null == n || !Number.isFinite(n) || n < 0) return null;
            switch (e.winningStat) {
                case r.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED: {
                    let e = Math.floor(n / i.A.Millis.MINUTE),
                        t = Math.floor(e / i.A.Minutes.HOUR),
                        r = e % i.A.Minutes.HOUR;
                    if (0 === t) return l.intl.formatToPlainString(a.default["/272et"], { minutes: r });
                    return l.intl.formatToPlainString(a.default.GC7N5H, { hours: t, minutes: r });
                }
                case r.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                    return l.intl.formatToPlainString(a.default.IXdbVJ, { days: n });
                case r.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                    return l.intl.formatToPlainString(a.default["/VAMco"], { count: n });
                default:
                    return null;
            }
        },
        Xf: function () {
            return l.intl.string(a.default.jCZgxQ);
        },
    },
);
