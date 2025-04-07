n.d(t, { Z: () => N }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    l = n(481060),
    s = n(835473),
    a = n(297781),
    c = n(443487),
    u = n(314897),
    d = n(594174),
    _ = n(626135),
    p = n(5192),
    h = n(873128),
    f = n(246627),
    m = n(709737),
    g = n(69589),
    b = n(531501),
    E = n(981631),
    C = n(701488),
    O = n(388032),
    y = n(24158);
function v(e) {
    let { application: t } = e,
        n = t.getIconURL(C.Si.LARGE),
        i =
            null == n
                ? null
                : (0, r.jsx)('img', {
                      className: y.gameIcon,
                      src: n,
                      'aria-hidden': !0,
                      alt: ''
                  });
    return (0, r.jsxs)('div', {
        className: y.gameTitleContainer,
        children: [
            i,
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                className: y.gameTitle,
                children: t.name
            })
        ]
    });
}
function N(e) {
    var t, n, b, C, y;
    let N,
        { selected: x, channel: I, entry: T } = e,
        L = I.guild_id,
        P = (0, h.Z)({
            guildId: L,
            leaderboardId: T.extra.leaderboard_id,
            intervalOffset: 0
        }),
        { rankChanges: A } = (0, f.Z)({
            guildId: L,
            leaderboardId: T.extra.leaderboard_id,
            intervalStart: null != (C = null == P ? void 0 : P.interval_start) ? C : ''
        }),
        j = (0, o.e7)([u.default], () => u.default.getId()),
        [R, w] = i.useMemo(() => {
            let e = A.find((e) => e.userId === j),
                t = A[0],
                n = null != e ? e : t,
                r = null == P ? void 0 : P.users.find((e) => e.user_id === (null == n ? void 0 : n.userId));
            return [n, r];
        }, [P, A, j]),
        k = (0, o.e7)([d.default], () => d.default.getUser(null == R ? void 0 : R.userId)),
        M = p.ZP.getName(L, void 0, k);
    !(function (e) {
        let { leaderboard: t, guildId: n } = e,
            r = null == t ? void 0 : t.leaderboard_id;
        i.useEffect(() => {
            null != r &&
                _.default.track(E.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
                    leaderboard_id: r,
                    guild_id: n
                });
        }, [r, n]);
    })({
        leaderboard: P,
        guildId: L
    });
    let Z = (0, s.q)(null == P || null == (t = P.settings) ? void 0 : t.application_id);
    if (null == P || null == Z) return null;
    if (0 === P.users.length || null == R || null == k)
        return (0, r.jsx)(S, {
            application: Z,
            selected: x
        });
    let { sort_by_statistic_id: D } = P.guild_settings,
        U = null != (y = null == w || null == (b = w.statistics) || null == (n = b[D]) ? void 0 : n.value) ? y : 0,
        { currentRank: V } = R;
    return (
        (N =
            R.userId === j
                ? O.NW.formatToPlainString(O.t['eU+JxM'], { rank: V })
                : O.NW.formatToPlainString(O.t['8BLSQ0'], {
                      rank: V,
                      username: M
                  })),
        (0, r.jsxs)(c.Zb, {
            selected: x,
            children: [
                (0, r.jsxs)(c.e$, {
                    children: [
                        (0, r.jsx)(v, { application: Z }),
                        (0, r.jsx)(l.LZC, { size: 2 }),
                        (0, r.jsx)(c.ll, { children: N }),
                        (0, r.jsx)(a.Gk, {
                            location: a.Gt.CARD,
                            children: (0, r.jsx)(m.DC, {
                                value: U,
                                statisticId: D
                            })
                        })
                    ]
                }),
                (0, r.jsx)(g.Z, {
                    user: k,
                    rank: V
                })
            ]
        })
    );
}
function S(e) {
    let { selected: t, application: n } = e;
    return (0, r.jsxs)(c.Zb, {
        selected: t,
        children: [
            (0, r.jsxs)(c.e$, {
                children: [
                    (0, r.jsx)(v, { application: n }),
                    (0, r.jsx)(l.LZC, { size: 2 }),
                    (0, r.jsx)(c.ll, { children: O.NW.string(O.t['t+b0DA']) }),
                    (0, r.jsx)(a.Gk, {
                        location: a.Gt.CARD,
                        children: (0, r.jsx)(m.ZR, { text: O.NW.string(O.t.zX8HUl) })
                    })
                ]
            }),
            (0, r.jsx)(b.Z, {
                color: '#5B5A56',
                children: (0, r.jsx)('img', {
                    src: 'https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png',
                    alt: '',
                    className: y.emptyStateImage
                })
            })
        ]
    });
}
