n.d(t, { R: () => r, i: () => a });
var i,
    r =
        (((i = {})[(i.GAMING_LEADERBOARD_STAT_UNSPECIFIED = 0)] = "GAMING_LEADERBOARD_STAT_UNSPECIFIED"),
        (i[(i.GAMING_LEADERBOARD_STAT_HOURS_PLAYED = 1)] = "GAMING_LEADERBOARD_STAT_HOURS_PLAYED"),
        (i[(i.GAMING_LEADERBOARD_STAT_DAYS_PLAYED = 2)] = "GAMING_LEADERBOARD_STAT_DAYS_PLAYED"),
        (i[(i.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED = 3)] = "GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED"),
        i);
function a(e) {
    if (null == e) return null;
    let t = e.winning_stat ?? null,
        n = e.winning_streak ?? null,
        i = e.winning_week ?? null;
    return null == t && null == n && null == i
        ? null
        : { winningStat: t, winningStreak: n, winningWeek: i, winningValue: e.winning_value ?? null };
}
