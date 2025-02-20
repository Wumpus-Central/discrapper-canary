c.d(e, { Z: () => g });
var d = c(200651);
c(192379);
var a = c(120356),
    s = c.n(a),
    n = c(381338),
    o = c(442837),
    f = c(481060),
    p = c(206295),
    i = c(594174),
    r = c(5192),
    b = c(528567),
    u = c(371583),
    l = c(388032),
    m = c(268828);
function g(t) {
    var e, c, a, g;
    let { guildId: j, leaderboard: h, className: _ } = t,
        v = null == h ? void 0 : null === (e = h.users) || void 0 === e ? void 0 : e[0],
        { sort_by_statistic_id: x } = h.guild_settings,
        O = null !== (g = null == v ? void 0 : null === (a = v.statistics) || void 0 === a ? void 0 : null === (c = a[x]) || void 0 === c ? void 0 : c.value) && void 0 !== g ? g : 0,
        y = l.NW.formatToPlainString(l.t.yhdo8v, {
            value: O,
            statisticName: (0, b.C)(x)
        }),
        N = (0, u.j)(h),
        { primaryColor: S, secondaryColor: Z } = (0, p.Z)(''.concat(N, '?forColors')),
        P = (0, o.e7)([i.default], () => i.default.getUser(null == v ? void 0 : v.user_id));
    if (null == P) return null;
    let E = r.ZP.getName(j, void 0, P);
    return (0, d.jsxs)('div', {
        className: s()(m.container, _),
        style: { backgroundImage: 'linear-gradient(90deg, '.concat(Z, ' 0%, ').concat(S, ' 100%)') },
        children: [
            (0, d.jsx)(f.Text, {
                variant: 'text-xs/medium',
                className: m.title,
                children: (function (t) {
                    switch (t) {
                        case n.q.DAILY:
                            return l.NW.string(l.t.UfbhDA);
                        case n.q.WEEKLY:
                            return l.NW.string(l.t['9x5Nam']);
                        case n.q.MONTHLY:
                            return l.NW.string(l.t.xB2Co6);
                        default:
                            return l.NW.string(l.t['4N67JS']);
                    }
                })(h.settings.interval_type)
            }),
            (0, d.jsx)(f.qEK, {
                src: P.getAvatarURL(j, 16),
                size: f.EFr.SIZE_16,
                'aria-label': 'avatar'
            }),
            (0, d.jsx)(f.LZC, {
                size: 6,
                horizontal: !0
            }),
            (0, d.jsxs)('div', {
                className: m.textContainer,
                children: [
                    (0, d.jsx)(f.Text, {
                        className: m.username,
                        variant: 'text-xs/semibold',
                        color: 'header-primary',
                        children: E
                    }),
                    (0, d.jsx)(f.Text, {
                        className: m.statsText,
                        variant: 'text-xxs/medium',
                        color: 'text-secondary',
                        children: y
                    })
                ]
            }),
            null != N &&
                (0, d.jsx)('div', {
                    className: m.heroArtContainer,
                    children: (0, d.jsx)('img', {
                        className: m.heroArt,
                        src: N,
                        alt: ''
                    })
                })
        ]
    });
}
