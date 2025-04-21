n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(381338),
    s = n(442837),
    l = n(481060),
    c = n(206295),
    u = n(594174),
    d = n(5192),
    f = n(528567),
    _ = n(371583),
    p = n(388032),
    h = n(445232);
function m(e) {
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
function g(e) {
    var t, n, i, o;
    let { guildId: g, leaderboard: E, className: b } = e,
        y = null == E || null == (t = E.users) ? void 0 : t[0],
        { sort_by_statistic_id: v } = E.guild_settings,
        O = null != (o = null == y || null == (i = y.statistics) || null == (n = i[v]) ? void 0 : n.value) ? o : 0,
        I = p.intl.formatToPlainString(p.t.yhdo8v, {
            value: O,
            statisticName: (0, f.C)(v)
        }),
        S = (0, _.j)(E),
        { primaryColor: T, secondaryColor: A } = (0, c.Z)(''.concat(S, '?forColors')),
        N = (0, s.e7)([u.default], () => u.default.getUser(null == y ? void 0 : y.user_id));
    if (null == N) return null;
    let C = d.ZP.getName(g, void 0, N);
    return (0, r.jsxs)('div', {
        className: a()(h.container, b),
        style: { backgroundImage: 'linear-gradient(90deg, '.concat(A, ' 0%, ').concat(T, ' 100%)') },
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                className: h.title,
                children: m(E.settings.interval_type)
            }),
            (0, r.jsx)(l.qEK, {
                src: N.getAvatarURL(g, 16),
                size: l.EFr.SIZE_16,
                'aria-label': 'avatar'
            }),
            (0, r.jsx)(l.LZC, {
                size: 6,
                horizontal: !0
            }),
            (0, r.jsxs)('div', {
                className: h.textContainer,
                children: [
                    (0, r.jsx)(l.Text, {
                        className: h.username,
                        variant: 'text-xs/semibold',
                        color: 'header-primary',
                        children: C
                    }),
                    (0, r.jsx)(l.Text, {
                        className: h.statsText,
                        variant: 'text-xxs/medium',
                        color: 'text-secondary',
                        children: I
                    })
                ]
            }),
            null != S &&
                (0, r.jsx)('div', {
                    className: h.heroArtContainer,
                    children: (0, r.jsx)('img', {
                        className: h.heroArt,
                        src: S,
                        alt: ''
                    })
                })
        ]
    });
}
