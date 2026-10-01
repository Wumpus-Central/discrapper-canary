n.d(t, { Sx: () => d, U_: () => o });
var i = n(927813),
    r = n(518782),
    a = n(61567),
    s = n(375708);
let l = {
    [r.zu.COMPETITION_ENDED]: {
        [r.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED]: a.default.unVTUQ,
        [r.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED]: a.default["/JyaTi"],
        [r.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED]: a.default["5D7LjH"],
    },
    [r.zu.COMPETITION_STARTED]: {
        [r.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED]: a.default.ptD18B,
        [r.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED]: a.default["2IbyWO"],
        [r.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED]: a.default.Y6K3qc,
    },
    [r.zu.LEADER_CHANGED]: {
        [r.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED]: a.default["8MO3bp"],
        [r.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED]: a.default["+aHNgn"],
        [r.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED]: a.default.CHYFwK,
    },
};
function o(e, t, n) {
    if (null == e || null == t) return null;
    let i = n ?? null;
    return e.event === r.zu.LEADER_CHANGED && null == i ? null : { data: e, subject: t, previousLeader: i };
}
function d(e, t) {
    let n,
        o,
        d,
        c = (function (e) {
            let { event: t, stat: n } = e;
            return t === r.zu.UNSPECIFIED || n === r.RE.GAMING_LEADERBOARD_STAT_UNSPECIFIED
                ? null
                : { event: t, stat: n };
        })(e);
    return null == c
        ? null
        : {
              message: l[c.event][c.stat],
              values:
                  ((o = Math.floor((n = Math.floor(Math.max(e.value, 0) / i.A.Millis.MINUTE)) / i.A.Minutes.HOUR)),
                  (d = n % i.A.Minutes.HOUR),
                  {
                      ...t,
                      value: e.value,
                      gameTime:
                          0 === o
                              ? s.intl.formatToPlainString(a.default["5AjG8l"], { minutes: d })
                              : s.intl.formatToPlainString(a.default["Sa+h68"], { hours: o, minutes: d }),
                  }),
          };
}
(r.zu.COMPETITION_ENDED,
    r.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
    a.default.Wwu6IA,
    r.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
    a.default.f6TxHV,
    r.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED,
    a.default.mhO0Bz,
    r.zu.COMPETITION_STARTED,
    r.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
    a.default.T7CcFq,
    r.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
    a.default.jUJ7IO,
    r.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED,
    a.default.PLdF3A,
    r.zu.LEADER_CHANGED,
    r.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
    a.default.fVm1Zn,
    r.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
    a.default.exTWBN,
    r.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED,
    a.default.dX9B32);
