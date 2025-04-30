n.d(t, {
    M: () => g,
    Z: () => E
});
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(297781),
    u = n(594174),
    d = n(5192),
    f = n(709737),
    _ = n(986398),
    p = n(69589),
    h = n(388032),
    m = n(588799);
let g = [n(191420), n(774621), n(49274), n(904141)];
function E(e) {
    var t, n;
    let { generateImageRef: o, leaderboard: g, userId: E, guildId: b } = e,
        y = (0, s.e7)([u.default], () => u.default.getUser(E)),
        O = g.guild_settings.sort_by_statistic_id,
        v = i.useMemo(() => g.users.findIndex((e) => e.user_id === E) + 1, [g, E]),
        I = i.useMemo(() => g.users.find((e) => e.user_id === E), [g, E]);
    a()(null != I, 'User row should not be null'), a()(null != y, 'User must exist');
    let S = d.ZP.getName(b, void 0, y),
        T = null != (n = null == (t = I.statistics[O]) ? void 0 : t.value) ? n : 0;
    return (0, r.jsxs)('div', {
        ref: o,
        className: m.container,
        children: [
            (0, r.jsx)(p.Z, {
                user: y,
                rank: v,
                avatarClassName: m.avatar,
                rankBadgeVisibility: 'visibleWithoutBorder'
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsxs)('div', {
                        className: m.gameTitleContainer,
                        children: [
                            (0, r.jsx)(_.Z, {
                                className: m.winnerImage,
                                leaderboard: g
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                className: m.gameTitle,
                                children: 'League of Legends'
                            })
                        ]
                    }),
                    (0, r.jsx)(l.LZC, { size: 4 }),
                    (0, r.jsx)(l.Text, {
                        className: m.title,
                        variant: 'text-md/semibold',
                        children: h.intl.format(h.t.tluICw, {
                            username: S,
                            rank: v
                        })
                    }),
                    (0, r.jsx)(l.LZC, { size: 2 }),
                    (0, r.jsxs)(c.Gk, {
                        location: c.Gt.EMBED,
                        children: [
                            (0, r.jsx)(f.DC, {
                                value: T,
                                statisticId: O
                            }),
                            (0, r.jsx)(f.Js, {
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
