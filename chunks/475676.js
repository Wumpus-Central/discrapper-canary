n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    s = n(481060),
    a = n(835473),
    o = n(297781),
    c = n(443487),
    d = n(314897),
    u = n(594174),
    _ = n(626135),
    E = n(5192),
    h = n(873128),
    p = n(246627),
    I = n(709737),
    m = n(69589),
    C = n(531501),
    T = n(981631),
    N = n(701488),
    g = n(388032),
    S = n(51130);
function R(e) {
    let { application: t } = e,
        n = t.getIconURL(N.Si.LARGE),
        l =
            null == n
                ? null
                : (0, i.jsx)('img', {
                      className: S.gameIcon,
                      src: n,
                      'aria-hidden': !0,
                      alt: ''
                  });
    return (0, i.jsxs)('div', {
        className: S.gameTitleContainer,
        children: [
            l,
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                className: S.gameTitle,
                children: t.name
            })
        ]
    });
}
function f(e) {
    var t, n, C, N, S;
    let f,
        { selected: O, channel: L, entry: b } = e,
        P = L.guild_id,
        x = (0, h.Z)({
            guildId: P,
            leaderboardId: b.extra.leaderboard_id,
            intervalOffset: 0
        }),
        { rankChanges: D } = (0, p.Z)({
            guildId: P,
            leaderboardId: b.extra.leaderboard_id,
            intervalStart: null !== (N = null == x ? void 0 : x.interval_start) && void 0 !== N ? N : ''
        }),
        M = (0, r.e7)([d.default], () => d.default.getId()),
        [v, U] = l.useMemo(() => {
            let e = D.find((e) => e.userId === M),
                t = D[0],
                n = null != e ? e : t,
                i = null == x ? void 0 : x.users.find((e) => e.user_id === (null == n ? void 0 : n.userId));
            return [n, i];
        }, [x, D, M]),
        k = (0, r.e7)([u.default], () => u.default.getUser(null == v ? void 0 : v.userId)),
        y = E.ZP.getName(P, void 0, k);
    !(function (e) {
        let { leaderboard: t, guildId: n } = e,
            i = null == t ? void 0 : t.leaderboard_id;
        l.useEffect(() => {
            null != i &&
                _.default.track(T.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
                    leaderboard_id: i,
                    guild_id: n
                });
        }, [i, n]);
    })({
        leaderboard: x,
        guildId: P
    });
    let Z = (0, a.q)(null == x ? void 0 : null === (t = x.settings) || void 0 === t ? void 0 : t.application_id);
    if (null == x || null == Z) return null;
    if (0 === x.users.length || null == v || null == k)
        return (0, i.jsx)(A, {
            application: Z,
            selected: O
        });
    let { sort_by_statistic_id: V } = x.guild_settings,
        j = null !== (S = null == U ? void 0 : null === (C = U.statistics) || void 0 === C ? void 0 : null === (n = C[V]) || void 0 === n ? void 0 : n.value) && void 0 !== S ? S : 0,
        { currentRank: F } = v;
    return (
        (f =
            v.userId === M
                ? g.intl.formatToPlainString(g.t['eU+JxM'], { rank: F })
                : g.intl.formatToPlainString(g.t['8BLSQ0'], {
                      rank: F,
                      username: y
                  })),
        (0, i.jsxs)(c.Zb, {
            selected: O,
            children: [
                (0, i.jsxs)(c.e$, {
                    children: [
                        (0, i.jsx)(R, { application: Z }),
                        (0, i.jsx)(s.LZC, { size: 2 }),
                        (0, i.jsx)(c.ll, { children: f }),
                        (0, i.jsx)(o.Gk, {
                            location: o.Gt.CARD,
                            children: (0, i.jsx)(I.DC, {
                                value: j,
                                statisticId: V
                            })
                        })
                    ]
                }),
                (0, i.jsx)(m.Z, {
                    user: k,
                    rank: F
                })
            ]
        })
    );
}
function A(e) {
    let { selected: t, application: n } = e;
    return (0, i.jsxs)(c.Zb, {
        selected: t,
        children: [
            (0, i.jsxs)(c.e$, {
                children: [
                    (0, i.jsx)(R, { application: n }),
                    (0, i.jsx)(s.LZC, { size: 2 }),
                    (0, i.jsx)(c.ll, { children: g.intl.string(g.t['t+b0DA']) }),
                    (0, i.jsx)(o.Gk, {
                        location: o.Gt.CARD,
                        children: (0, i.jsx)(I.ZR, { text: g.intl.string(g.t.zX8HUl) })
                    })
                ]
            }),
            (0, i.jsx)(C.Z, {
                color: '#5B5A56',
                children: (0, i.jsx)('img', {
                    src: 'https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png',
                    alt: '',
                    className: S.emptyStateImage
                })
            })
        ]
    });
}
