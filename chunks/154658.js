r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(381338),
    l = r(442837),
    u = r(481060),
    c = r(206295),
    d = r(594174),
    f = r(5192),
    _ = r(528567),
    h = r(371583),
    p = r(388032),
    m = r(828980);
function g(e) {
    switch (e) {
        case o.q.DAILY:
            return p.intl.string(p.t.UfbhDA);
        case o.q.WEEKLY:
            return p.intl.string(p.t['9x5Nam']);
        case o.q.MONTHLY:
            return p.intl.string(p.t.xB2Co6);
        default:
            return p.intl.string(p.t['4N67JS']);
    }
}
function E(e) {
    var n, r, a, o;
    let { guildId: E, leaderboard: v, className: I } = e,
        T = null == v ? void 0 : null === (n = v.users) || void 0 === n ? void 0 : n[0],
        { sort_by_statistic_id: b } = v.guild_settings,
        y = null !== (o = null == T ? void 0 : null === (a = T.statistics) || void 0 === a ? void 0 : null === (r = a[b]) || void 0 === r ? void 0 : r.value) && void 0 !== o ? o : 0,
        S = p.intl.formatToPlainString(p.t.yhdo8v, {
            value: y,
            statisticName: (0, _.C)(b)
        }),
        A = (0, h.j)(v),
        { primaryColor: N, secondaryColor: C } = (0, c.Z)(''.concat(A, '?forColors')),
        R = (0, l.e7)([d.default], () => d.default.getUser(null == T ? void 0 : T.user_id));
    if (null == R) return null;
    let O = f.ZP.getName(E, void 0, R);
    return (0, i.jsxs)('div', {
        className: s()(m.container, I),
        style: { backgroundImage: 'linear-gradient(90deg, '.concat(C, ' 0%, ').concat(N, ' 100%)') },
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
