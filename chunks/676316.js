(n.d(t, { Z: () => h }), n(388685));
var r = n(73800),
    i = n(661869),
    l = n(876215),
    a = n(442837),
    s = n(592125),
    o = n(994752),
    c = n(463031);
let d = '1221458499993600000',
    u = {
        content_type: l.s.LEADERBOARD,
        extra: {
            type: 'leaderboard_extra',
            leaderboard_id: c.z
        },
        id: d,
        author_id: d,
        author_type: i.i.USER,
        participants: [],
        traits: []
    };
function h(e) {
    let { entries: t, channelId: n } = e,
        i = (0, a.e7)([s.Z], () => s.Z.getChannel(n)),
        l = null == i ? void 0 : i.guild_id,
        c = (0, a.e7)([o.Z], () => null != l && null != o.Z.getLeaderboards(l), [l]);
    return {
        entriesWithLeaderboard: r.useMemo(() => (c ? [u, ...(null != t ? t : [])] : t), [c, t]),
        hasLeaderboardEntry: c
    };
}
