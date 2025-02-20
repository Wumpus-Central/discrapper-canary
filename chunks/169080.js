c.d(e, {
    M: () => j,
    Z: () => h
});
var d = c(200651),
    a = c(192379),
    s = c(512722),
    n = c.n(s),
    o = c(442837),
    f = c(481060),
    p = c(297781),
    i = c(594174),
    r = c(5192),
    b = c(709737),
    u = c(986398),
    l = c(69589),
    m = c(388032),
    g = c(972311);
let j = [c(191420), c(774621), c(49274), c(904141)];
function h(t) {
    var e, c;
    let { generateImageRef: s, leaderboard: j, userId: h, guildId: _ } = t,
        v = (0, o.e7)([i.default], () => i.default.getUser(h)),
        x = j.guild_settings.sort_by_statistic_id,
        O = a.useMemo(() => j.users.findIndex((t) => t.user_id === h) + 1, [j, h]),
        y = a.useMemo(() => j.users.find((t) => t.user_id === h), [j, h]);
    n()(null != y, 'User row should not be null'), n()(null != v, 'User must exist');
    let N = r.ZP.getName(_, void 0, v),
        S = null !== (c = null === (e = y.statistics[x]) || void 0 === e ? void 0 : e.value) && void 0 !== c ? c : 0;
    return (0, d.jsxs)('div', {
        ref: s,
        className: g.container,
        children: [
            (0, d.jsx)(l.Z, {
                user: v,
                rank: O,
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
                                leaderboard: j
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
                        children: m.NW.format(m.t.tluICw, {
                            username: N,
                            rank: O
                        })
                    }),
                    (0, d.jsx)(f.LZC, { size: 2 }),
                    (0, d.jsxs)(p.Gk, {
                        location: p.Gt.EMBED,
                        children: [
                            (0, d.jsx)(b.DC, {
                                value: S,
                                statisticId: x
                            }),
                            (0, d.jsx)(b.Js, {
                                intervalStart: j.interval_start,
                                intervalEnd: j.interval_end
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
