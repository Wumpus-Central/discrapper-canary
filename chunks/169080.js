n.d(t, {
    M: () => g,
    Z: () => E
});
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(297781),
    c = n(594174),
    d = n(5192),
    f = n(709737),
    _ = n(986398),
    p = n(69589),
    h = n(388032),
    m = n(417776);
let g = [n(191420), n(774621), n(49274), n(904141)];
function E(e) {
    var t, n;
    let { generateImageRef: a, leaderboard: g, userId: E, guildId: v } = e,
        y = (0, o.e7)([c.default], () => c.default.getUser(E)),
        I = g.guild_settings.sort_by_statistic_id,
        T = r.useMemo(() => g.users.findIndex((e) => e.user_id === E) + 1, [g, E]),
        b = r.useMemo(() => g.users.find((e) => e.user_id === E), [g, E]);
    s()(null != b, 'User row should not be null'), s()(null != y, 'User must exist');
    let S = d.ZP.getName(v, void 0, y),
        A = null !== (n = null === (t = b.statistics[I]) || void 0 === t ? void 0 : t.value) && void 0 !== n ? n : 0;
    return (0, i.jsxs)('div', {
        ref: a,
        className: m.container,
        children: [
            (0, i.jsx)(p.Z, {
                user: y,
                rank: T,
                avatarClassName: m.avatar,
                rankBadgeVisibility: 'visibleWithoutBorder'
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        className: m.gameTitleContainer,
                        children: [
                            (0, i.jsx)(_.Z, {
                                className: m.winnerImage,
                                leaderboard: g
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                className: m.gameTitle,
                                children: 'League of Legends'
                            })
                        ]
                    }),
                    (0, i.jsx)(l.LZC, { size: 4 }),
                    (0, i.jsx)(l.Text, {
                        className: m.title,
                        variant: 'text-md/semibold',
                        children: h.intl.format(h.t.tluICw, {
                            username: S,
                            rank: T
                        })
                    }),
                    (0, i.jsx)(l.LZC, { size: 2 }),
                    (0, i.jsxs)(u.Gk, {
                        location: u.Gt.EMBED,
                        children: [
                            (0, i.jsx)(f.DC, {
                                value: A,
                                statisticId: I
                            }),
                            (0, i.jsx)(f.Js, {
                                intervalStart: g.interval_start,
                                intervalEnd: g.interval_end
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
