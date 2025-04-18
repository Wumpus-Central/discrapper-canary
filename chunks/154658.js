n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(381338),
    s = n(442837),
    l = n(481060),
    c = n(206295),
    u = n(594174),
    d = n(5192),
    f = n(528567),
    _ = n(371583),
    p = n(388032),
    h = n(131718);
function m(e) {
    switch (e) {
        case a.q.DAILY:
            return p.NW.string(p.t.UfbhDA);
        case a.q.WEEKLY:
            return p.NW.string(p.t['9x5Nam']);
        case a.q.MONTHLY:
            return p.NW.string(p.t.xB2Co6);
        default:
            return p.NW.string(p.t['4N67JS']);
    }
}
function g(e) {
    var t, n, i, a;
    let { guildId: g, leaderboard: E, className: b } = e,
        y = null == E || null == (t = E.users) ? void 0 : t[0],
        { sort_by_statistic_id: v } = E.guild_settings,
        O = null != (a = null == y || null == (i = y.statistics) || null == (n = i[v]) ? void 0 : n.value) ? a : 0,
        I = p.NW.formatToPlainString(p.t.yhdo8v, {
            value: O,
            statisticName: (0, f.C)(v)
        }),
        S = (0, _.j)(E),
        { primaryColor: T, secondaryColor: N } = (0, c.Z)(''.concat(S, '?forColors')),
        A = (0, s.e7)([u.default], () => u.default.getUser(null == y ? void 0 : y.user_id));
    if (null == A) return null;
    let C = d.ZP.getName(g, void 0, A);
    return (0, r.jsxs)('div', {
        className: o()(h.container, b),
        style: { backgroundImage: 'linear-gradient(90deg, '.concat(N, ' 0%, ').concat(T, ' 100%)') },
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/medium',
                className: h.title,
                children: m(E.settings.interval_type)
            }),
            (0, r.jsx)(l.qEK, {
                src: A.getAvatarURL(g, 16),
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
