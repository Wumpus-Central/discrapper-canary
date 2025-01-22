r.d(n, {
    M: function () {
        return E;
    },
    Z: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(512722),
    s = r.n(o),
    l = r(442837),
    u = r(481060),
    c = r(297781),
    d = r(594174),
    f = r(5192),
    p = r(709737),
    h = r(986398),
    _ = r(69589),
    m = r(388032),
    g = r(417776);
let E = [r(191420), r(774621), r(49274), r(904141)];
function v(e) {
    var n, r;
    let { generateImageRef: o, leaderboard: E, userId: v, guildId: y } = e,
        b = (0, l.e7)([d.default], () => d.default.getUser(v)),
        I = E.guild_settings.sort_by_statistic_id,
        T = a.useMemo(() => E.users.findIndex((e) => e.user_id === v) + 1, [E, v]),
        S = a.useMemo(() => E.users.find((e) => e.user_id === v), [E, v]);
    s()(null != S, 'User row should not be null'), s()(null != b, 'User must exist');
    let A = f.ZP.getName(y, void 0, b),
        C = null !== (r = null === (n = S.statistics[I]) || void 0 === n ? void 0 : n.value) && void 0 !== r ? r : 0;
    return (0, i.jsxs)('div', {
        ref: o,
        className: g.container,
        children: [
            (0, i.jsx)(_.Z, {
                user: b,
                rank: T,
                avatarClassName: g.avatar,
                rankBadgeVisibility: 'visibleWithoutBorder'
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsxs)('div', {
                        className: g.gameTitleContainer,
                        children: [
                            (0, i.jsx)(h.Z, {
                                className: g.winnerImage,
                                leaderboard: E
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                className: g.gameTitle,
                                children: 'League of Legends'
                            })
                        ]
                    }),
                    (0, i.jsx)(u.Spacer, { size: 4 }),
                    (0, i.jsx)(u.Text, {
                        className: g.title,
                        variant: 'text-md/semibold',
                        children: m.intl.format(m.t.tluICw, {
                            username: A,
                            rank: T
                        })
                    }),
                    (0, i.jsx)(u.Spacer, { size: 2 }),
                    (0, i.jsxs)(c.Gk, {
                        location: c.Gt.EMBED,
                        children: [
                            (0, i.jsx)(p.DC, {
                                value: C,
                                statisticId: I
                            }),
                            (0, i.jsx)(p.Js, {
                                intervalStart: E.interval_start,
                                intervalEnd: E.interval_end
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
