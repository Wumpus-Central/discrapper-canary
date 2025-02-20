c.d(e, { Z: () => l });
var d = c(200651);
c(192379);
var a = c(442837),
    s = c(481060),
    n = c(594174),
    o = c(5192),
    f = c(371583),
    p = c(864138),
    i = c(986398),
    r = c(69589),
    b = c(388032),
    u = c(214188);
function l(t) {
    let { userId: e, leaderboard: c } = t,
        l = (0, a.e7)([n.default], () => n.default.getUser(e));
    if (null == l) return null;
    let m = (0, f.r)(c),
        g = o.ZP.getName(c.guild_id, void 0, l);
    return (0, d.jsx)(p.z, {
        imageUrl: m,
        children: (0, d.jsxs)('div', {
            className: u.userContainer,
            children: [
                (0, d.jsx)(r.Z, {
                    user: l,
                    rank: 1,
                    rankBadgeVisibility: 'hidden'
                }),
                (0, d.jsx)(s.LZC, {
                    size: 8,
                    horizontal: !0
                }),
                (0, d.jsxs)('div', {
                    children: [
                        (0, d.jsxs)('div', {
                            className: u.userNameContainer,
                            children: [
                                (0, d.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    className: u.userName,
                                    children: g
                                }),
                                (0, d.jsx)(s.LZC, {
                                    size: 4,
                                    horizontal: !0
                                }),
                                (0, d.jsx)(i.Z, {
                                    className: u.winnerImage,
                                    leaderboard: c
                                })
                            ]
                        }),
                        (0, d.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            className: u.userSubtitle,
                            children: b.NW.string(b.t['0ScUkZ'])
                        })
                    ]
                })
            ]
        })
    });
}
