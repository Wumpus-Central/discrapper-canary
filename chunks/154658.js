a.d(e, { Z: () => g });
var c = a(200651);
a(192379);
var d = a(120356),
    s = a.n(d),
    n = a(381338),
    f = a(442837),
    i = a(481060),
    o = a(206295),
    p = a(594174),
    r = a(5192),
    l = a(528567),
    b = a(371583),
    u = a(388032),
    m = a(445232);
function g(t) {
    var e, a, d, g;
    let { guildId: j, leaderboard: h, className: y } = t,
        _ = null == h || null == (e = h.users) ? void 0 : e[0],
        { sort_by_statistic_id: B } = h.guild_settings,
        x = null != (g = null == _ || null == (d = _.statistics) || null == (a = d[B]) ? void 0 : a.value) ? g : 0,
        v = u.NW.formatToPlainString(u.t.yhdo8v, {
            value: x,
            statisticName: (0, l.C)(B)
        }),
        O = (0, b.j)(h),
        { primaryColor: N, secondaryColor: S } = (0, o.Z)(''.concat(O, '?forColors')),
        Z = (0, f.e7)([p.default], () => p.default.getUser(null == _ ? void 0 : _.user_id));
    if (null == Z) return null;
    let P = r.ZP.getName(j, void 0, Z);
    return (0, c.jsxs)('div', {
        className: s()(m.container, y),
        style: { backgroundImage: 'linear-gradient(90deg, '.concat(S, ' 0%, ').concat(N, ' 100%)') },
        children: [
            (0, c.jsx)(i.Text, {
                variant: 'text-xs/medium',
                className: m.title,
                children: (function (t) {
                    switch (t) {
                        case n.q.DAILY:
                            return u.NW.string(u.t.UfbhDA);
                        case n.q.WEEKLY:
                            return u.NW.string(u.t['9x5Nam']);
                        case n.q.MONTHLY:
                            return u.NW.string(u.t.xB2Co6);
                        default:
                            return u.NW.string(u.t['4N67JS']);
                    }
                })(h.settings.interval_type)
            }),
            (0, c.jsx)(i.qEK, {
                src: Z.getAvatarURL(j, 16),
                size: i.EFr.SIZE_16,
                'aria-label': 'avatar'
            }),
            (0, c.jsx)(i.LZC, {
                size: 6,
                horizontal: !0
            }),
            (0, c.jsxs)('div', {
                className: m.textContainer,
                children: [
                    (0, c.jsx)(i.Text, {
                        className: m.username,
                        variant: 'text-xs/semibold',
                        color: 'header-primary',
                        children: P
                    }),
                    (0, c.jsx)(i.Text, {
                        className: m.statsText,
                        variant: 'text-xxs/medium',
                        color: 'text-secondary',
                        children: v
                    })
                ]
            }),
            null != O &&
                (0, c.jsx)('div', {
                    className: m.heroArtContainer,
                    children: (0, c.jsx)('img', {
                        className: m.heroArt,
                        src: O,
                        alt: ''
                    })
                })
        ]
    });
}
