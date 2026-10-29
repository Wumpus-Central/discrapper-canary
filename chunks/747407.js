n.d(t, { X: () => u });
var i = n(383233),
    r = n(287809),
    a = n(562153),
    s = n(523154),
    l = n(518782),
    o = n(72216),
    d = n(825476),
    c = n(105292);
function u(e, t) {
    let n = e.channel_id,
        u = (0, d.x)(e instanceof i.Ay ? e.guildSpaceData?.music : e.guild_space_data?.music);
    if (null != u) {
        let i = r.default.getUser(u.userId),
            s = (0, o.O)(u, null != i ? a.Ay.getName(t.getGuildId(), n, i) : null);
        return null == s ? e.content : c.intl.formatToPlainString(s.message, { ...s.values, usernameHook: (e) => e });
    }
    let _ = (0, l.Nu)(e instanceof i.Ay ? e.guildSpaceData?.leaderboard : e.guild_space_data?.leaderboard),
        E = (0, s.U_)(_, r.default.getUser(_?.userId), r.default.getUser(_?.secondaryUserId));
    if (null == E) return e.content;
    let A = t.getGuildId(),
        h = (0, s.Sx)(E.data, {
            username: a.Ay.getName(A, n, E.subject),
            previousUsername: E.data.event === l.zu.LEADER_CHANGED ? a.Ay.getName(A, n, E.previousLeader) : "",
        });
    return null == h
        ? e.content
        : c.intl.formatToPlainString(h.message, {
              ...h.values,
              usernameHook: (e) => e,
              previousUsernameHook: (e) => e,
          });
}
