n.d(t, { Hc: () => s, Xf: () => u });
var l = n(927813);
n(251812);
var r = n(518782),
    a = n(880098),
    i = n(105292);
function s(e) {
    let t = e.winningStreak ?? 0;
    if (t > 1) return i.intl.formatToPlainString(a.default["ZCFDN+"], { streakCount: t });
    let n = e.winningValue;
    if (null == n || !Number.isFinite(n) || n < 0) return null;
    switch (e.winningStat) {
        case r.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED: {
            let e = Math.floor(n / l.A.Millis.MINUTE),
                t = Math.floor(e / l.A.Minutes.HOUR),
                r = e % l.A.Minutes.HOUR;
            if (0 === t) return i.intl.formatToPlainString(a.default["/272et"], { minutes: r });
            return i.intl.formatToPlainString(a.default.GC7N5H, { hours: t, minutes: r });
        }
        case r.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
            return i.intl.formatToPlainString(a.default.IXdbVJ, { days: n });
        case r.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
            return i.intl.formatToPlainString(a.default["/VAMco"], { count: n });
        default:
            return null;
    }
}
function u() {
    return i.intl.string(a.default.jCZgxQ);
}
