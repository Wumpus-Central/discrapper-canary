c.d(e, {
    M: () => h,
    Z: () => j
});
var d = c(200651),
    a = c(192379),
    s = c(512722),
    n = c.n(s),
    o = c(442837),
    f = c(481060),
    i = c(297781),
    p = c(594174),
    r = c(5192),
    b = c(709737),
    u = c(986398),
    l = c(69589),
    m = c(388032),
    g = c(968281);
let h = [c(191420), c(774621), c(49274), c(904141)];
function j(t) {
    var e, c;
    let { generateImageRef: s, leaderboard: h, userId: j, guildId: _ } = t,
        v = (0, o.e7)([p.default], () => p.default.getUser(j)),
        x = h.guild_settings.sort_by_statistic_id,
        N = a.useMemo(() => h.users.findIndex((t) => t.user_id === j) + 1, [h, j]),
        Z = a.useMemo(() => h.users.find((t) => t.user_id === j), [h, j]);
    n()(null != Z, 'User row should not be null'), n()(null != v, 'User must exist');
    let T = r.ZP.getName(_, void 0, v),
        E = null !== (c = null === (e = Z.statistics[x]) || void 0 === e ? void 0 : e.value) && void 0 !== c ? c : 0;
    return (0, d.jsxs)('div', {
        ref: s,
        className: g.container,
        children: [
            (0, d.jsx)(l.Z, {
                user: v,
                rank: N,
                avatarClassName: g.avatar,
                rankBadgeVisibility: 'visibleWithoutBorder'
            }),
            (0, d.jsxs)('div', {
                children: [
                    (0, d.jsxs)('div', {
                        className: g.gameTitleContainer,
                        children: [
                            (0, d.jsx)(u.Z, {
                                className: g.winnerImage,
                                leaderboard: h
                            }),
                            (0, d.jsx)(f.Text, {
                                variant: 'text-sm/medium',
                                className: g.gameTitle,
                                children: 'League of Legends'
                            })
                        ]
                    }),
                    (0, d.jsx)(f.LZC, { size: 4 }),
                    (0, d.jsx)(f.Text, {
                        className: g.title,
                        variant: 'text-md/semibold',
                        children: m.intl.format(m.t.tluICw, {
                            username: T,
                            rank: N
                        })
                    }),
                    (0, d.jsx)(f.LZC, { size: 2 }),
                    (0, d.jsxs)(i.Gk, {
                        location: i.Gt.EMBED,
                        children: [
                            (0, d.jsx)(b.DC, {
                                value: E,
                                statisticId: x
                            }),
                            (0, d.jsx)(b.Js, {
                                intervalStart: h.interval_start,
                                intervalEnd: h.interval_end
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
