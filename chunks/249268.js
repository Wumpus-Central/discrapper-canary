n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(594174),
    s = n(5192),
    l = n(371583),
    c = n(864138),
    u = n(986398),
    d = n(69589),
    _ = n(388032),
    f = n(734842);
function p(e) {
    let { userId: t, leaderboard: n } = e,
        p = (0, i.e7)([o.default], () => o.default.getUser(t));
    if (null == p) return null;
    let h = (0, l.r)(n),
        m = s.ZP.getName(n.guild_id, void 0, p);
    return (0, r.jsx)(c.z, {
        imageUrl: h,
        children: (0, r.jsxs)('div', {
            className: f.userContainer,
            children: [
                (0, r.jsx)(d.Z, {
                    user: p,
                    rank: 1,
                    rankBadgeVisibility: 'hidden'
                }),
                (0, r.jsx)(a.LZC, {
                    size: 8,
                    horizontal: !0
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)('div', {
                            className: f.userNameContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    className: f.userName,
                                    children: m
                                }),
                                (0, r.jsx)(a.LZC, {
                                    size: 4,
                                    horizontal: !0
                                }),
                                (0, r.jsx)(u.Z, {
                                    className: f.winnerImage,
                                    leaderboard: n
                                })
                            ]
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            className: f.userSubtitle,
                            children: _.intl.string(_.t['0ScUkZ'])
                        })
                    ]
                })
            ]
        })
    });
}
