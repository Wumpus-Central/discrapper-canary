c.d(e, { Z: () => g });
var d = c(200651);
c(192379);
var a = c(120356),
    s = c.n(a),
    n = c(381338),
    o = c(442837),
    f = c(481060),
    i = c(206295),
    p = c(594174),
    r = c(5192),
    b = c(528567),
    u = c(371583),
    l = c(388032),
    m = c(347871);
function g(t) {
    var e, c, a, g;
    let { guildId: h, leaderboard: j, className: _ } = t,
        v = null == j ? void 0 : null === (e = j.users) || void 0 === e ? void 0 : e[0],
        { sort_by_statistic_id: x } = j.guild_settings,
        N = null !== (g = null == v ? void 0 : null === (a = v.statistics) || void 0 === a ? void 0 : null === (c = a[x]) || void 0 === c ? void 0 : c.value) && void 0 !== g ? g : 0,
        Z = l.intl.formatToPlainString(l.t.yhdo8v, {
            value: N,
            statisticName: (0, b.C)(x)
        }),
        T = (0, u.j)(j),
        { primaryColor: E, secondaryColor: I } = (0, i.Z)(''.concat(T, '?forColors')),
        S = (0, o.e7)([p.default], () => p.default.getUser(null == v ? void 0 : v.user_id));
    if (null == S) return null;
    let R = r.ZP.getName(h, void 0, S);
    return (0, d.jsxs)('div', {
        className: s()(m.container, _),
        style: { backgroundImage: 'linear-gradient(90deg, '.concat(I, ' 0%, ').concat(E, ' 100%)') },
        children: [
            (0, d.jsx)(f.Text, {
                variant: 'text-xs/medium',
                className: m.title,
                children: (function (t) {
                    switch (t) {
                        case n.q.DAILY:
                            return l.intl.string(l.t.UfbhDA);
                        case n.q.WEEKLY:
                            return l.intl.string(l.t['9x5Nam']);
                        case n.q.MONTHLY:
                            return l.intl.string(l.t.xB2Co6);
                        default:
                            return l.intl.string(l.t['4N67JS']);
                    }
                })(j.settings.interval_type)
            }),
            (0, d.jsx)(f.qEK, {
                src: S.getAvatarURL(h, 16),
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
                        children: R
                    }),
                    (0, d.jsx)(f.Text, {
                        className: m.statsText,
                        variant: 'text-xxs/medium',
                        color: 'text-secondary',
                        children: Z
                    })
                ]
            }),
            null != T &&
                (0, d.jsx)('div', {
                    className: m.heroArtContainer,
                    children: (0, d.jsx)('img', {
                        className: m.heroArt,
                        src: T,
                        alt: ''
                    })
                })
        ]
    });
}
