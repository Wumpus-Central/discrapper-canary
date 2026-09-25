n.d(t, { Nu: () => l, RE: () => a, Rt: () => o, zu: () => s });
var i,
    r,
    a =
        (((i = {})[(i.GAMING_LEADERBOARD_STAT_UNSPECIFIED = 0)] = "GAMING_LEADERBOARD_STAT_UNSPECIFIED"),
        (i[(i.GAMING_LEADERBOARD_STAT_HOURS_PLAYED = 1)] = "GAMING_LEADERBOARD_STAT_HOURS_PLAYED"),
        (i[(i.GAMING_LEADERBOARD_STAT_DAYS_PLAYED = 2)] = "GAMING_LEADERBOARD_STAT_DAYS_PLAYED"),
        (i[(i.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED = 3)] = "GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED"),
        i),
    s =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.COMPETITION_ENDED = 1)] = "COMPETITION_ENDED"),
        (r[(r.COMPETITION_STARTED = 2)] = "COMPETITION_STARTED"),
        (r[(r.LEADER_CHANGED = 3)] = "LEADER_CHANGED"),
        r);
function l(e) {
    return null != e &&
        null != e.user_id &&
        null != e.value &&
        null != e.event &&
        0 !== e.event &&
        e.event in s &&
        null != e.stat &&
        0 !== e.stat &&
        e.stat in a
        ? {
              event: e.event,
              stat: e.stat,
              userId: e.user_id,
              previousUserId: e.previous_user_id ?? null,
              value: e.value,
          }
        : null;
}
function o(e) {
    if (null == e) return null;
    let t = e.winning_stat ?? null,
        n = e.winning_streak ?? null,
        i = e.winning_week ?? null;
    return null == t && null == n && null == i
        ? null
        : { winningStat: t, winningStreak: n, winningWeek: i, winningValue: e.winning_value ?? null };
}
