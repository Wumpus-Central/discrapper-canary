n.d(t, { Z: () => T }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(835473),
    l = n(297781),
    c = n(443487),
    u = n(314897),
    d = n(594174),
    f = n(626135),
    _ = n(5192),
    p = n(873128),
    h = n(246627),
    m = n(709737),
    g = n(69589),
    E = n(531501),
    b = n(981631),
    y = n(701488),
    v = n(388032),
    O = n(24158);
function I(e) {
    let { application: t } = e,
        n = t.getIconURL(y.Si.LARGE),
        i =
            null == n
                ? null
                : (0, r.jsx)('img', {
                      className: O.gameIcon,
                      src: n,
                      'aria-hidden': !0,
                      alt: ''
                  });
    return (0, r.jsxs)('div', {
        className: O.gameTitleContainer,
        children: [
            i,
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/medium',
                className: O.gameTitle,
                children: t.name
            })
        ]
    });
}
function S(e) {
    let { leaderboard: t, guildId: n } = e,
        r = null == t ? void 0 : t.leaderboard_id;
    i.useEffect(() => {
        null != r &&
            f.default.track(b.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
                leaderboard_id: r,
                guild_id: n
            });
    }, [r, n]);
}
function T(e) {
    var t, n, f, E, b;
    let y,
        { selected: O, channel: T, entry: A } = e,
        C = T.guild_id,
        R = (0, p.Z)({
            guildId: C,
            leaderboardId: A.extra.leaderboard_id,
            intervalOffset: 0
        }),
        { rankChanges: P } = (0, h.Z)({
            guildId: C,
            leaderboardId: A.extra.leaderboard_id,
            intervalStart: null != (E = null == R ? void 0 : R.interval_start) ? E : ''
        }),
        w = (0, o.e7)([u.default], () => u.default.getId()),
        [D, L] = i.useMemo(() => {
            let e = P.find((e) => e.userId === w),
                t = P[0],
                n = null != e ? e : t,
                r = null == R ? void 0 : R.users.find((e) => e.user_id === (null == n ? void 0 : n.userId));
            return [n, r];
        }, [R, P, w]),
        x = (0, o.e7)([d.default], () => d.default.getUser(null == D ? void 0 : D.userId)),
        M = _.ZP.getName(C, void 0, x);
    S({
        leaderboard: R,
        guildId: C
    });
    let k = (0, s.q)(null == R || null == (t = R.settings) ? void 0 : t.application_id);
    if (null == R || null == k) return null;
    if (0 === R.users.length || null == D || null == x)
        return (0, r.jsx)(N, {
            application: k,
            selected: O
        });
    let { sort_by_statistic_id: j } = R.guild_settings,
        U = null != (b = null == L || null == (f = L.statistics) || null == (n = f[j]) ? void 0 : n.value) ? b : 0,
        { currentRank: G } = D;
    return (
        (y =
            D.userId === w
                ? v.NW.formatToPlainString(v.t['eU+JxM'], { rank: G })
                : v.NW.formatToPlainString(v.t['8BLSQ0'], {
                      rank: G,
                      username: M
                  })),
        (0, r.jsxs)(c.Zb, {
            selected: O,
            children: [
                (0, r.jsxs)(c.e$, {
                    children: [
                        (0, r.jsx)(I, { application: k }),
                        (0, r.jsx)(a.LZC, { size: 2 }),
                        (0, r.jsx)(c.ll, { children: y }),
                        (0, r.jsx)(l.Gk, {
                            location: l.Gt.CARD,
                            children: (0, r.jsx)(m.DC, {
                                value: U,
                                statisticId: j
                            })
                        })
                    ]
                }),
                (0, r.jsx)(g.Z, {
                    user: x,
                    rank: G
                })
            ]
        })
    );
}
function N(e) {
    let { selected: t, application: n } = e;
    return (0, r.jsxs)(c.Zb, {
        selected: t,
        children: [
            (0, r.jsxs)(c.e$, {
                children: [
                    (0, r.jsx)(I, { application: n }),
                    (0, r.jsx)(a.LZC, { size: 2 }),
                    (0, r.jsx)(c.ll, { children: v.NW.string(v.t['t+b0DA']) }),
                    (0, r.jsx)(l.Gk, {
                        location: l.Gt.CARD,
                        children: (0, r.jsx)(m.ZR, { text: v.NW.string(v.t.zX8HUl) })
                    })
                ]
            }),
            (0, r.jsx)(E.Z, {
                color: '#5B5A56',
                children: (0, r.jsx)('img', {
                    src: 'https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png',
                    alt: '',
                    className: O.emptyStateImage
                })
            })
        ]
    });
}
