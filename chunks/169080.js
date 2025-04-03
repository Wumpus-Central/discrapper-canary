a.d(e, {
    M: () => j,
    Z: () => h
});
var c = a(200651),
    d = a(192379),
    s = a(512722),
    n = a.n(s),
    f = a(442837),
    i = a(481060),
    o = a(297781),
    p = a(594174),
    r = a(5192),
    l = a(709737),
    b = a(986398),
    u = a(69589),
    m = a(388032),
    g = a(588799);
let j = [a(191420), a(774621), a(49274), a(904141)];
function h(t) {
    var e, a;
    let { generateImageRef: s, leaderboard: j, userId: h, guildId: y } = t,
        _ = (0, f.e7)([p.default], () => p.default.getUser(h)),
        B = j.guild_settings.sort_by_statistic_id,
        x = d.useMemo(() => j.users.findIndex((t) => t.user_id === h) + 1, [j, h]),
        v = d.useMemo(() => j.users.find((t) => t.user_id === h), [j, h]);
    n()(null != v, 'User row should not be null'), n()(null != _, 'User must exist');
    let O = r.ZP.getName(y, void 0, _),
        N = null != (a = null == (e = v.statistics[B]) ? void 0 : e.value) ? a : 0;
    return (0, c.jsxs)('div', {
        ref: s,
        className: g.container,
        children: [
            (0, c.jsx)(u.Z, {
                user: _,
                rank: x,
                avatarClassName: g.avatar,
                rankBadgeVisibility: 'visibleWithoutBorder'
            }),
            (0, c.jsxs)('div', {
                children: [
                    (0, c.jsxs)('div', {
                        className: g.gameTitleContainer,
                        children: [
                            (0, c.jsx)(b.Z, {
                                className: g.winnerImage,
                                leaderboard: j
                            }),
                            (0, c.jsx)(i.Text, {
                                variant: 'text-sm/medium',
                                className: g.gameTitle,
                                children: 'League of Legends'
                            })
                        ]
                    }),
                    (0, c.jsx)(i.LZC, { size: 4 }),
                    (0, c.jsx)(i.Text, {
                        className: g.title,
                        variant: 'text-md/semibold',
                        children: m.NW.format(m.t.tluICw, {
                            username: O,
                            rank: x
                        })
                    }),
                    (0, c.jsx)(i.LZC, { size: 2 }),
                    (0, c.jsxs)(o.Gk, {
                        location: o.Gt.EMBED,
                        children: [
                            (0, c.jsx)(l.DC, {
                                value: N,
                                statisticId: B
                            }),
                            (0, c.jsx)(l.Js, {
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
