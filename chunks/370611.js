n.d(t, { Z: () => P }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(195302),
    l = n(206295),
    u = n(134432),
    c = n(706454),
    d = n(314897),
    f = n(158776),
    _ = n(594174),
    p = n(302221),
    h = n(5192),
    m = n(358085),
    g = n(998502),
    E = n(528567),
    v = n(371583),
    y = n(246627),
    I = n(249268),
    b = n(864138),
    T = n(473188),
    S = n(169080),
    A = n(986398),
    N = n(463031),
    C = n(206583),
    R = n(388032),
    O = n(508806);
let D = 10,
    x = 15,
    L = 'leaderboard.png';
function P(e) {
    let { leaderboard: t, previewMode: n = !1, trackRankingItemInteraction: o } = e,
        f = (0, a.e7)([d.default], () => d.default.getId()),
        _ = (0, a.e7)([c.default], () => c.default.locale),
        { rankChanges: h } = (0, y.Z)({
            guildId: t.guild_id,
            leaderboardId: t.leaderboard_id,
            intervalStart: t.interval_start
        }),
        m = r.useMemo(() => {
            let e = new Map();
            h.forEach((t) => {
                let { userId: n, previousRank: i } = t;
                e.set(n, i);
            });
            let { sort_by_statistic_id: n } = t.guild_settings;
            return t.users.map((t, i) => {
                var r, a;
                return {
                    userId: t.user_id,
                    value: null !== (a = null === (r = t.statistics[n]) || void 0 === r ? void 0 : r.value) && void 0 !== a ? a : 0,
                    rank: i + 1,
                    previousRank: e.get(t.user_id)
                };
            });
        }, [t, h]),
        g = (0, v.r)(t),
        { primaryColor: b } = (0, l.Z)(g),
        T = r.useMemo(() => {
            let e = (0, p.oo)(b),
                t = {
                    ...(0, p.pz)(e.r, e.g, e.b),
                    l: x
                };
            return (0, p.ZJ)(t.h, t.s, t.l);
        }, [b]),
        A = r.useMemo(() => null == m.find((e) => e.userId === f) && m.length <= D, [m, f]);
    if (
        (r.useEffect(() => {
            S.M.forEach((e) => (0, u.po)(e));
        }),
        0 === t.users.length)
    )
        return (0, i.jsx)(w, { leaderboard: t });
    let { sort_by_statistic_id: N, sort_desc: C } = t.guild_settings,
        L = t.settings.statistics[N];
    return (0, i.jsxs)('div', {
        className: O.container,
        style: { background: T },
        children: [
            (0, i.jsx)(I.Z, {
                userId: m[0].userId,
                leaderboard: t
            }),
            n
                ? null
                : (0, i.jsx)(i.Fragment, {
                      children: (0, i.jsxs)('div', {
                          className: O.table,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: O.headerRow,
                                  children: [
                                      (0, i.jsx)(s.Text, {
                                          variant: 'text-xxs/medium',
                                          className: O.headerRank,
                                          children: '#'
                                      }),
                                      (0, i.jsx)(s.Text, {
                                          variant: 'text-xxs/medium',
                                          className: O.headerPlayer,
                                          children: R.intl.string(R.t['6ii1+/'])
                                      }),
                                      (0, i.jsx)(s.Text, {
                                          variant: 'text-xxs/medium',
                                          className: O.headerValue,
                                          children: (0, E.s)({
                                              statisticId: N,
                                              sortDesc: C,
                                              aggregationType: null == L ? void 0 : L.aggregation_type
                                          })
                                      })
                                  ]
                              }),
                              (0, i.jsxs)(s.u2D, {
                                  className: O.rows,
                                  children: [
                                      m.map((e) =>
                                          (0, r.createElement)(M, {
                                              ...e,
                                              key: e.userId,
                                              guildId: t.guild_id,
                                              locale: _,
                                              leaderboard: t,
                                              trackRankingItemInteraction: o
                                          })
                                      ),
                                      A ? (0, i.jsx)(k, { leaderboard: t }) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function w(e) {
    let { leaderboard: t } = e,
        n = (0, v.r)(t);
    return (0, i.jsx)(b.z, {
        imageUrl: n,
        children: (0, i.jsxs)('span', {
            className: O.emptyTitleContainer,
            children: [
                (0, i.jsx)(s.Text, {
                    tag: 'span',
                    variant: 'text-lg/normal',
                    className: O.emptyTitle,
                    children: R.intl.string(R.t.BfRGk5)
                }),
                (0, i.jsx)(A.Z, {
                    className: O.emptyWinnerImage,
                    leaderboard: t
                })
            ]
        })
    });
}
function M(e) {
    let { userId: t, rank: n, value: l, guildId: u, previousRank: c, locale: d, leaderboard: p, trackRankingItemInteraction: E } = e,
        v = (0, a.e7)([_.default], () => _.default.getUser(t)),
        y = h.ZP.getName(u, void 0, v),
        I = null != c && c > n,
        [b, D] = r.useState('default'),
        x = (0, a.e7)([f.Z], () => {
            let e = f.Z.getPrimaryActivity(t);
            return (null == e ? void 0 : e.application_id) != null && N.T.includes(e.application_id);
        }),
        { generatingImage: P, generateImage: w } = (0, o.d)({
            renderComponent: (e) =>
                (0, i.jsx)(S.Z, {
                    ...e,
                    userId: t,
                    leaderboard: p,
                    guildId: u
                }),
            imageOptions: { pixelRatio: 4 }
        }),
        M = async () => {
            try {
                let e = await w();
                await g.ZP.copyImageBlob(e, L), D('copied'), null == E || E(C.xP.COPIED_LEADERBOARD_ROW);
            } catch (e) {
                D('error');
            }
        },
        k = (0, i.jsx)(s.Text, {
            className: O.tooltip,
            variant: 'text-sm/medium',
            children:
                'copied' === b
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(s.kSu, {
                                  size: 'xs',
                                  color: s.TVs.colors.STATUS_POSITIVE
                              }),
                              R.intl.string(R.t.ZO0ku7)
                          ]
                      })
                    : 'error' === b
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(s.P$X, {
                                    size: 'xs',
                                    color: s.TVs.colors.STATUS_DANGER
                                }),
                                R.intl.string(R.t.j2d6Ki)
                            ]
                        })
                      : (0, i.jsx)(i.Fragment, { children: R.intl.string(R.t.mikfoa) })
        });
    return (0, i.jsxs)('div', {
        className: O.userRow,
        children: [
            I ? (0, i.jsx)('div', { className: O.rankChangeIndicator }) : null,
            (0, i.jsx)('div', {
                className: O.userRank,
                children:
                    n <= 3
                        ? (0, i.jsx)(T._, { rank: n })
                        : (0, i.jsx)(s.Text, {
                              tabularNumbers: !0,
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: n
                          })
            }),
            (0, i.jsxs)('div', {
                className: O.userPlayer,
                children: [
                    (0, i.jsx)(s.qEK, {
                        src: null == v ? void 0 : v.getAvatarURL(u, 16),
                        size: s.EFr.SIZE_16,
                        'aria-label': 'avatar'
                    }),
                    (0, i.jsx)(s.LZC, {
                        size: 6,
                        horizontal: !0
                    }),
                    (0, i.jsx)(s.X6q, {
                        lineClamp: 1,
                        variant: 'heading-sm/medium',
                        color: 'header-primary',
                        children: y
                    }),
                    1 === n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(s.LZC, {
                                      size: 4,
                                      horizontal: !0
                                  }),
                                  (0, i.jsx)(A.Z, {
                                      className: O.userWinnerImage,
                                      leaderboard: p
                                  })
                              ]
                          })
                        : null,
                    I ? (0, i.jsx)(U, { rankChange: c - n }) : null
                ]
            }),
            (0, i.jsxs)('div', {
                className: O.badgesContainer,
                children: [
                    x &&
                        (0, i.jsx)(s.iWm, {
                            size: 'xs',
                            color: s.TVs.colors.TEXT_POSITIVE,
                            className: O.liveIcon
                        }),
                    m.isPlatformEmbedded &&
                        (0, i.jsx)(s.ua7, {
                            text: k,
                            'aria-label': !1,
                            shouldShow: !P,
                            onTooltipHide: () => D('default'),
                            children: (e) =>
                                (0, i.jsx)(s.P3F, {
                                    ...e,
                                    onClick: P ? void 0 : M,
                                    'aria-busy': P,
                                    className: O.copyLinkContainer,
                                    children: P
                                        ? (0, i.jsx)(s.$jN, {
                                              type: s.$jN.Type.SPINNING_CIRCLE_SIMPLE,
                                              className: O.copySpinner
                                          })
                                        : (0, i.jsx)(s.xPt, {
                                              size: 'xs',
                                              className: O.copyLink
                                          })
                                })
                        })
                ]
            }),
            (0, i.jsx)(s.X6q, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                tabularNumbers: !0,
                children: l.toLocaleString(d)
            })
        ]
    });
}
function k(e) {
    let { leaderboard: t } = e;
    return (0, i.jsxs)('div', {
        className: O.joinLeaderboardCTAContainer,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-xs/normal',
                children: R.intl.string(R.t.BfRGk5)
            }),
            (0, i.jsx)(A.Z, {
                className: O.joinLeaderboardCTAWinnerImage,
                leaderboard: t
            })
        ]
    });
}
function U(e) {
    let { rankChange: t } = e;
    return (0, i.jsxs)('div', {
        className: O.rankChangeBadge,
        children: [
            (0, i.jsx)(s.wj7, {
                size: 'xxs',
                color: s.TVs.colors.TEXT_MUTED
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: t
            })
        ]
    });
}
