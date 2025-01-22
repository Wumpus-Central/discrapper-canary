r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(381338),
    l = r(442837),
    u = r(481060),
    c = r(206295),
    d = r(594174),
    f = r(5192),
    p = r(528567),
    h = r(371583),
    _ = r(388032),
    m = r(828980);
function g(e) {
    switch (e) {
        case s.q.DAILY:
            return _.intl.string(_.t.UfbhDA);
        case s.q.WEEKLY:
            return _.intl.string(_.t['9x5Nam']);
        case s.q.MONTHLY:
            return _.intl.string(_.t.xB2Co6);
        default:
            return _.intl.string(_.t['4N67JS']);
    }
}
function E(e) {
    var n, r, a, s;
    let { guildId: E, leaderboard: v, className: y } = e,
        b = null == v ? void 0 : null === (n = v.users) || void 0 === n ? void 0 : n[0],
        { sort_by_statistic_id: I } = v.guild_settings,
        T = null !== (s = null == b ? void 0 : null === (a = b.statistics) || void 0 === a ? void 0 : null === (r = a[I]) || void 0 === r ? void 0 : r.value) && void 0 !== s ? s : 0,
        S = _.intl.formatToPlainString(_.t.yhdo8v, {
            value: T,
            statisticName: (0, p.C)(I)
        }),
        A = (0, h.j)(v),
        { primaryColor: C, secondaryColor: N } = (0, c.Z)(''.concat(A, '?forColors')),
        R = (0, l.e7)([d.default], () => d.default.getUser(null == b ? void 0 : b.user_id));
    if (null == R) return null;
    let O = f.ZP.getName(E, void 0, R);
    return (0, i.jsxs)('div', {
        className: o()(m.container, y),
        style: { backgroundImage: 'linear-gradient(90deg, '.concat(N, ' 0%, ').concat(C, ' 100%)') },
        children: [
            (0, i.jsx)(u.Text, {
                variant: 'text-xs/medium',
                className: m.title,
                children: g(v.settings.interval_type)
            }),
            (0, i.jsx)(u.Avatar, {
                src: R.getAvatarURL(E, 16),
                size: u.AvatarSizes.SIZE_16,
                'aria-label': 'avatar'
            }),
            (0, i.jsx)(u.Spacer, {
                size: 6,
                horizontal: !0
            }),
            (0, i.jsxs)('div', {
                className: m.textContainer,
                children: [
                    (0, i.jsx)(u.Text, {
                        className: m.username,
                        variant: 'text-xs/semibold',
                        color: 'header-primary',
                        children: O
                    }),
                    (0, i.jsx)(u.Text, {
                        className: m.statsText,
                        variant: 'text-xxs/medium',
                        color: 'text-secondary',
                        children: S
                    })
                ]
            }),
            null != A &&
                (0, i.jsx)('div', {
                    className: m.heroArtContainer,
                    children: (0, i.jsx)('img', {
                        className: m.heroArt,
                        src: A,
                        alt: ''
                    })
                })
        ]
    });
}
