r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(481060),
    s = r(594174),
    l = r(5192),
    u = r(371583),
    c = r(864138),
    d = r(986398),
    f = r(69589),
    p = r(388032),
    h = r(352682);
function _(e) {
    let { userId: n, leaderboard: r } = e,
        _ = (0, a.e7)([s.default], () => s.default.getUser(n));
    if (null == _) return null;
    let m = (0, u.r)(r),
        g = l.ZP.getName(r.guild_id, void 0, _);
    return (0, i.jsx)(c.z, {
        imageUrl: m,
        children: (0, i.jsxs)('div', {
            className: h.userContainer,
            children: [
                (0, i.jsx)(f.Z, {
                    user: _,
                    rank: 1,
                    rankBadgeVisibility: 'hidden'
                }),
                (0, i.jsx)(o.Spacer, {
                    size: 8,
                    horizontal: !0
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.userNameContainer,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/semibold',
                                    className: h.userName,
                                    children: g
                                }),
                                (0, i.jsx)(o.Spacer, {
                                    size: 4,
                                    horizontal: !0
                                }),
                                (0, i.jsx)(d.Z, {
                                    className: h.winnerImage,
                                    leaderboard: r
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/normal',
                            className: h.userSubtitle,
                            children: p.intl.string(p.t['0ScUkZ'])
                        })
                    ]
                })
            ]
        })
    });
}
