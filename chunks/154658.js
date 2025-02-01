n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(381338),
    o = n(442837),
    l = n(481060),
    u = n(206295),
    c = n(594174),
    d = n(5192),
    f = n(528567),
    _ = n(371583),
    p = n(388032),
    h = n(828980);
function m(e) {
    switch (e) {
        case s.q.DAILY:
            return p.intl.string(p.t.UfbhDA);
        case s.q.WEEKLY:
            return p.intl.string(p.t['9x5Nam']);
        case s.q.MONTHLY:
            return p.intl.string(p.t.xB2Co6);
        default:
            return p.intl.string(p.t['4N67JS']);
    }
}
function g(e) {
    var t, n, r, s;
    let { guildId: g, leaderboard: E, className: v } = e,
        y = null == E ? void 0 : null === (t = E.users) || void 0 === t ? void 0 : t[0],
        { sort_by_statistic_id: I } = E.guild_settings,
        T = null !== (s = null == y ? void 0 : null === (r = y.statistics) || void 0 === r ? void 0 : null === (n = r[I]) || void 0 === n ? void 0 : n.value) && void 0 !== s ? s : 0,
        b = p.intl.formatToPlainString(p.t.yhdo8v, {
            value: T,
            statisticName: (0, f.C)(I)
        }),
        S = (0, _.j)(E),
        { primaryColor: A, secondaryColor: N } = (0, u.Z)(''.concat(S, '?forColors')),
        C = (0, o.e7)([c.default], () => c.default.getUser(null == y ? void 0 : y.user_id));
    if (null == C) return null;
    let R = d.ZP.getName(g, void 0, C);
    return (0, i.jsxs)('div', {
        className: a()(h.container, v),
        style: { backgroundImage: 'linear-gradient(90deg, '.concat(N, ' 0%, ').concat(A, ' 100%)') },
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-xs/medium',
                className: h.title,
                children: m(E.settings.interval_type)
            }),
            (0, i.jsx)(l.qEK, {
                src: C.getAvatarURL(g, 16),
                size: l.EFr.SIZE_16,
                'aria-label': 'avatar'
            }),
            (0, i.jsx)(l.LZC, {
                size: 6,
                horizontal: !0
            }),
            (0, i.jsxs)('div', {
                className: h.textContainer,
                children: [
                    (0, i.jsx)(l.Text, {
                        className: h.username,
                        variant: 'text-xs/semibold',
                        color: 'header-primary',
                        children: R
                    }),
                    (0, i.jsx)(l.Text, {
                        className: h.statsText,
                        variant: 'text-xxs/medium',
                        color: 'text-secondary',
                        children: b
                    })
                ]
            }),
            null != S &&
                (0, i.jsx)('div', {
                    className: h.heroArtContainer,
                    children: (0, i.jsx)('img', {
                        className: h.heroArt,
                        src: S,
                        alt: ''
                    })
                })
        ]
    });
}
