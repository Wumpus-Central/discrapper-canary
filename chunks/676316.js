n.d(t, { Z: () => p }), n(47120);
var r = n(192379),
    i = n(661869),
    l = n(876215),
    o = n(442837),
    a = n(592125),
    s = n(994752),
    c = n(463031);
let u = '1221458499993600000',
    d = {
        content_type: l.s.LEADERBOARD,
        extra: {
            type: 'leaderboard_extra',
            leaderboard_id: c.z
        },
        id: u,
        author_id: u,
        author_type: i.i.USER,
        participants: [],
        traits: []
    };
function p(e) {
    let { entries: t, channelId: n } = e,
        i = (0, o.e7)([a.Z], () => a.Z.getChannel(n)),
        l = null == i ? void 0 : i.guild_id,
        c = (0, o.e7)([s.Z], () => null != l && null != s.Z.getLeaderboards(l), [l]);
    return {
        entriesWithLeaderboard: r.useMemo(() => (c ? [d, ...(null != t ? t : [])] : t), [c, t]),
        hasLeaderboardEntry: c
    };
}
