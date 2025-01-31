n.d(t, { Z: () => h }), n(47120);
var i = n(192379),
    l = n(661869),
    a = n(876215),
    r = n(442837),
    s = n(592125),
    o = n(994752),
    c = n(463031);
let d = '1221458499993600000',
    u = {
        content_type: a.s.LEADERBOARD,
        extra: {
            type: 'leaderboard_extra',
            leaderboard_id: c.z
        },
        id: d,
        author_id: d,
        author_type: l.i.USER,
        participants: [],
        traits: []
    };
function h(e) {
    let { entries: t, channelId: n } = e,
        l = (0, r.e7)([s.Z], () => s.Z.getChannel(n)),
        a = null == l ? void 0 : l.guild_id,
        c = (0, r.e7)([o.Z], () => null != a && null != o.Z.getLeaderboards(a), [a]);
    return {
        entriesWithLeaderboard: i.useMemo(() => (c ? [u, ...(null != t ? t : [])] : t), [c, t]),
        hasLeaderboardEntry: c
    };
}
