a.d(e, { Z: () => u });
var c = a(200651);
a(192379);
var d = a(442837),
    s = a(481060),
    n = a(594174),
    f = a(5192),
    i = a(371583),
    o = a(864138),
    p = a(986398),
    r = a(69589),
    l = a(388032),
    b = a(734842);
function u(t) {
    let { userId: e, leaderboard: a } = t,
        u = (0, d.e7)([n.default], () => n.default.getUser(e));
    if (null == u) return null;
    let m = (0, i.r)(a),
        g = f.ZP.getName(a.guild_id, void 0, u);
    return (0, c.jsx)(o.z, {
        imageUrl: m,
        children: (0, c.jsxs)('div', {
            className: b.userContainer,
            children: [
                (0, c.jsx)(r.Z, {
                    user: u,
                    rank: 1,
                    rankBadgeVisibility: 'hidden'
                }),
                (0, c.jsx)(s.LZC, {
                    size: 8,
                    horizontal: !0
                }),
                (0, c.jsxs)('div', {
                    children: [
                        (0, c.jsxs)('div', {
                            className: b.userNameContainer,
                            children: [
                                (0, c.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    className: b.userName,
                                    children: g
                                }),
                                (0, c.jsx)(s.LZC, {
                                    size: 4,
                                    horizontal: !0
                                }),
                                (0, c.jsx)(p.Z, {
                                    className: b.winnerImage,
                                    leaderboard: a
                                })
                            ]
                        }),
                        (0, c.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            className: b.userSubtitle,
                            children: l.NW.string(l.t['0ScUkZ'])
                        })
                    ]
                })
            ]
        })
    });
}
