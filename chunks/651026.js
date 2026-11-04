n.d(t, { Hc: () => s, Xf: () => o });
var l = n(927813);
n(251812);
var r = n(518782),
    i = n(880098),
    a = n(105292);
function s(e) {
    let t = e.winningStreak ?? 0;
    if (t > 1) return a.intl.formatToPlainString(i.default["ZCFDN+"], { streakCount: t });
    let n = e.winningValue;
    if (null == n || !Number.isFinite(n) || n < 0) return null;
    switch (e.winningStat) {
        case r.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED: {
            let e = Math.floor(n / l.A.Millis.MINUTE),
                t = Math.floor(e / l.A.Minutes.HOUR),
                r = e % l.A.Minutes.HOUR;
            if (0 === t) return a.intl.formatToPlainString(i.default["/272et"], { minutes: r });
            return a.intl.formatToPlainString(i.default.GC7N5H, { hours: t, minutes: r });
        }
        case r.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return a.intl.formatToPlainString(i.default.IXdbVJ, { days: n });
        case r.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return a.intl.formatToPlainString(i.default["/VAMco"], { count: n });
        default:
            return null;
    }
}
function o() {
    return a.intl.string(i.default.jCZgxQ);
}
