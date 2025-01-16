r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(594174),
    l = r(5192),
    u = r(371583),
    c = r(864138),
    d = r(986398),
    f = r(69589),
    _ = r(388032),
    h = r(352682);
function p(e) {
    let { userId: n, leaderboard: r } = e,
        p = (0, a.e7)([o.default], () => o.default.getUser(n));
    if (null == p) return null;
    let m = (0, u.r)(r),
        g = l.ZP.getName(r.guild_id, void 0, p);
    return (0, i.jsx)(c.z, {
        imageUrl: m,
        children: (0, i.jsxs)('div', {
            className: h.userContainer,
            children: [
                (0, i.jsx)(f.Z, {
                    user: p,
                    rank: 1,
                    rankBadgeVisibility: 'hidden'
                }),
                (0, i.jsx)(s.Spacer, {
                    size: 8,
                    horizontal: !0
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.userNameContainer,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/semibold',
                                    className: h.userName,
                                    children: g
                                }),
                                (0, i.jsx)(s.Spacer, {
                                    size: 4,
                                    horizontal: !0
                                }),
                                (0, i.jsx)(d.Z, {
                                    className: h.winnerImage,
                                    leaderboard: r
                                })
                            ]
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            className: h.userSubtitle,
                            children: _.intl.string(_.t['0ScUkZ'])
                        })
                    ]
                })
            ]
        })
    });
}
