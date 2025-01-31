n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(594174),
    o = n(5192),
    l = n(371583),
    u = n(864138),
    c = n(986398),
    d = n(69589),
    f = n(388032),
    _ = n(352682);
function p(e) {
    let { userId: t, leaderboard: n } = e,
        p = (0, r.e7)([s.default], () => s.default.getUser(t));
    if (null == p) return null;
    let h = (0, l.r)(n),
        m = o.ZP.getName(n.guild_id, void 0, p);
    return (0, i.jsx)(u.z, {
        imageUrl: h,
        children: (0, i.jsxs)('div', {
            className: _.userContainer,
            children: [
                (0, i.jsx)(d.Z, {
                    user: p,
                    rank: 1,
                    rankBadgeVisibility: 'hidden'
                }),
                (0, i.jsx)(a.LZC, {
                    size: 8,
                    horizontal: !0
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsxs)('div', {
                            className: _.userNameContainer,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    className: _.userName,
                                    children: m
                                }),
                                (0, i.jsx)(a.LZC, {
                                    size: 4,
                                    horizontal: !0
                                }),
                                (0, i.jsx)(c.Z, {
                                    className: _.winnerImage,
                                    leaderboard: n
                                })
                            ]
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            className: _.userSubtitle,
                            children: f.intl.string(f.t['0ScUkZ'])
                        })
                    ]
                })
            ]
        })
    });
}
