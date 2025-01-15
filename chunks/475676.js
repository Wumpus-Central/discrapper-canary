n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120);
var l = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(481060),
    o = n(835473),
    s = n(297781),
    u = n(443487),
    c = n(314897),
    d = n(594174),
    m = n(626135),
    x = n(5192),
    h = n(873128),
    p = n(246627),
    C = n(709737),
    v = n(69589),
    g = n(531501),
    f = n(981631),
    I = n(701488),
    j = n(388032),
    Z = n(991971);
function P(e) {
    let { application: t } = e,
        n = t.getIconURL(I.Si.LARGE),
        a =
            null == n
                ? null
                : (0, l.jsx)('img', {
                      className: Z.gameIcon,
                      src: n,
                      'aria-hidden': !0,
                      alt: ''
                  });
    return (0, l.jsxs)('div', {
        className: Z.gameTitleContainer,
        children: [
            a,
            (0, l.jsx)(r.Text, {
                variant: 'text-sm/medium',
                className: Z.gameTitle,
                children: t.name
            })
        ]
    });
}
function L(e) {
    var t, n, g, I, Z;
    let L,
        { selected: T, channel: y, entry: _ } = e,
        A = y.guild_id,
        E = (0, h.Z)({
            guildId: A,
            leaderboardId: _.extra.leaderboard_id,
            intervalOffset: 0
        }),
        { rankChanges: S } = (0, p.Z)({
            guildId: A,
            leaderboardId: _.extra.leaderboard_id,
            intervalStart: null !== (I = null == E ? void 0 : E.interval_start) && void 0 !== I ? I : ''
        }),
        R = (0, i.e7)([c.default], () => c.default.getId()),
        [M, k] = a.useMemo(() => {
            let e = S.find((e) => e.userId === R),
                t = S[0],
                n = null != e ? e : t,
                l = null == E ? void 0 : E.users.find((e) => e.user_id === (null == n ? void 0 : n.userId));
            return [n, l];
        }, [E, S, R]),
        w = (0, i.e7)([d.default], () => d.default.getUser(null == M ? void 0 : M.userId)),
        O = x.ZP.getName(A, void 0, w);
    !(function (e) {
        let { leaderboard: t, guildId: n } = e,
            l = null == t ? void 0 : t.leaderboard_id;
        a.useEffect(() => {
            null != l &&
                m.default.track(f.rMx.LEADERBOARD_MEMBERLIST_CARD_VIEWED, {
                    leaderboard_id: l,
                    guild_id: n
                });
        }, [l, n]);
    })({
        leaderboard: E,
        guildId: A
    });
    let b = (0, o.q)(null == E ? void 0 : null === (t = E.settings) || void 0 === t ? void 0 : t.application_id);
    if (null == E || null == b) return null;
    if (0 === E.users.length || null == M || null == w)
        return (0, l.jsx)(N, {
            application: b,
            selected: T
        });
    let { sort_by_statistic_id: H } = E.guild_settings,
        V = null !== (Z = null == k ? void 0 : null === (g = k.statistics) || void 0 === g ? void 0 : null === (n = g[H]) || void 0 === n ? void 0 : n.value) && void 0 !== Z ? Z : 0,
        { currentRank: B } = M;
    return (
        (L =
            M.userId === R
                ? j.intl.formatToPlainString(j.t['eU+JxM'], { rank: B })
                : j.intl.formatToPlainString(j.t['8BLSQ0'], {
                      rank: B,
                      username: O
                  })),
        (0, l.jsxs)(u.Zb, {
            selected: T,
            children: [
                (0, l.jsxs)(u.e$, {
                    children: [
                        (0, l.jsx)(P, { application: b }),
                        (0, l.jsx)(r.Spacer, { size: 2 }),
                        (0, l.jsx)(u.ll, { children: L }),
                        (0, l.jsx)(s.Gk, {
                            location: s.Gt.CARD,
                            children: (0, l.jsx)(C.DC, {
                                value: V,
                                statisticId: H
                            })
                        })
                    ]
                }),
                (0, l.jsx)(v.Z, {
                    user: w,
                    rank: B
                })
            ]
        })
    );
}
function N(e) {
    let { selected: t, application: n } = e;
    return (0, l.jsxs)(u.Zb, {
        selected: t,
        children: [
            (0, l.jsxs)(u.e$, {
                children: [
                    (0, l.jsx)(P, { application: n }),
                    (0, l.jsx)(r.Spacer, { size: 2 }),
                    (0, l.jsx)(u.ll, { children: j.intl.string(j.t['t+b0DA']) }),
                    (0, l.jsx)(s.Gk, {
                        location: s.Gt.CARD,
                        children: (0, l.jsx)(C.ZR, { text: j.intl.string(j.t.zX8HUl) })
                    })
                ]
            }),
            (0, l.jsx)(g.Z, {
                color: '#5B5A56',
                children: (0, l.jsx)('img', {
                    src: 'https://cdn.discordapp.com/assets/content/173a83bdbe0a455bf0d251f4cc9c2c027cd3da855384773916f3eb08298a880c.png',
                    alt: '',
                    className: Z.emptyStateImage
                })
            })
        ]
    });
}
