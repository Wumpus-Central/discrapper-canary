t.d(l, { Z: () => j }), t(47120);
var i = t(200651),
    n = t(192379),
    L = t(442837),
    d = t(481060),
    s = t(835473),
    r = t(297781),
    a = t(443487),
    C = t(314897),
    c = t(594174),
    u = t(626135),
    o = t(5192),
    H = t(873128),
    Z = t(246627),
    V = t(709737),
    M = t(69589),
    x = t(531501),
    h = t(981631),
    v = t(701488),
    _ = t(388032),
    f = t(498322);
function m(e) {
    let { application: l } = e,
        t = l.getIconURL(v.Si.LARGE),
        n =
            null == t
                ? null
                : (0, i.jsx)('img', {
                      className: f.gameIcon,
                      src: t,
                      'aria-hidden': !0,
                      alt: ''
                  });
    return (0, i.jsxs)('div', {
        className: f.gameTitleContainer,
        children: [
            n,
            (0, i.jsx)(d.Text, {
                variant: 'text-sm/medium',
                className: f.gameTitle,
                children: l.name
            })
        ]
    });
}
function j(e) {
    var l, t, x, v, f;
    let j,
        { selected: p, channel: I, entry: b } = e,
        E = I.guild_id,
        N = (0, H.Z)({
            guildId: E,
            leaderboardId: b.extra.leaderboard_id,
            intervalOffset: 0
        }),
        { rankChanges: R } = (0, Z.Z)({
            guildId: E,
            leaderboardId: b.extra.leaderboard_id,
            intervalStart: null !== (v = null == N ? void 0 : N.interval_start) && void 0 !== v ? v : ''
        }),
        k = (0, L.e7)([C.default], () => C.default.getId()),
        [A, D] = n.useMemo(() => {
            let e = R.find((e) => e.userId === k),
                l = R[0],
                t = null != e ? e : l,
                i = null == N ? void 0 : N.users.find((e) => e.user_id === (null == t ? void 0 : t.userId));
            return [t, i];
        }, [N, R, k]),
        y = (0, L.e7)([c.default], () => c.default.getUser(null == A ? void 0 : A.userId)),
        S = o.ZP.getName(E, void 0, y);
    !(function (e) {
        let { leaderboard: l, guildId: t } = e,
            i = null == l ? void 0 : l.leaderboard_id;
        n.useEffect(() => {
            null != i &&
                u.default.track(h.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
                    leaderboard_id: i,
                    guild_id: t
                });
        }, [i, t]);
    })({
        leaderboard: N,
        guildId: E
    });
    let T = (0, s.q)(null == N ? void 0 : null === (l = N.settings) || void 0 === l ? void 0 : l.application_id);
    if (null == N || null == T) return null;
    if (0 === N.users.length || null == A || null == y)
        return (0, i.jsx)(g, {
            application: T,
            selected: p
        });
    let { sort_by_statistic_id: G } = N.guild_settings,
        w = null !== (f = null == D ? void 0 : null === (x = D.statistics) || void 0 === x ? void 0 : null === (t = x[G]) || void 0 === t ? void 0 : t.value) && void 0 !== f ? f : 0,
        { currentRank: P } = A;
    return (
        (j =
            A.userId === k
                ? _.NW.formatToPlainString(_.t['eU+JxM'], { rank: P })
                : _.NW.formatToPlainString(_.t['8BLSQ0'], {
                      rank: P,
                      username: S
                  })),
        (0, i.jsxs)(a.Zb, {
            selected: p,
            children: [
                (0, i.jsxs)(a.e$, {
                    children: [
                        (0, i.jsx)(m, { application: T }),
                        (0, i.jsx)(d.LZC, { size: 2 }),
                        (0, i.jsx)(a.ll, { children: j }),
                        (0, i.jsx)(r.Gk, {
                            location: r.Gt.CARD,
                            children: (0, i.jsx)(V.DC, {
                                value: w,
                                statisticId: G
                            })
                        })
                    ]
                }),
                (0, i.jsx)(M.Z, {
                    user: y,
                    rank: P
                })
            ]
        })
    );
}
function g(e) {
    let { selected: l, application: t } = e;
    return (0, i.jsxs)(a.Zb, {
        selected: l,
        children: [
            (0, i.jsxs)(a.e$, {
                children: [
                    (0, i.jsx)(m, { application: t }),
                    (0, i.jsx)(d.LZC, { size: 2 }),
                    (0, i.jsx)(a.ll, { children: _.NW.string(_.t['t+b0DA']) }),
                    (0, i.jsx)(r.Gk, {
                        location: r.Gt.CARD,
                        children: (0, i.jsx)(V.ZR, { text: _.NW.string(_.t.zX8HUl) })
                    })
                ]
            }),
            (0, i.jsx)(x.Z, {
                color: '#5B5A56',
                children: (0, i.jsx)('img', {
                    src: 'https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png',
                    alt: '',
                    className: f.emptyStateImage
                })
            })
        ]
    });
}
