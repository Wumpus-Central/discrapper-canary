c.d(e, { Z: () => A }), c(47120);
var d = c(200651),
    a = c(192379),
    s = c(442837),
    n = c(481060),
    o = c(195302),
    f = c(206295),
    i = c(134432),
    p = c(706454),
    r = c(314897),
    b = c(158776),
    u = c(594174),
    l = c(302221),
    m = c(5192),
    g = c(358085),
    h = c(998502),
    j = c(528567),
    _ = c(371583),
    v = c(246627),
    x = c(249268),
    N = c(864138),
    Z = c(473188),
    T = c(169080),
    E = c(986398),
    I = c(463031),
    S = c(206583),
    R = c(388032),
    L = c(991419);
function A(t) {
    let { leaderboard: e, previewMode: c = !1, trackRankingItemInteraction: o } = t,
        b = (0, s.e7)([r.default], () => r.default.getId()),
        u = (0, s.e7)([p.default], () => p.default.locale),
        { rankChanges: m } = (0, v.Z)({
            guildId: e.guild_id,
            leaderboardId: e.leaderboard_id,
            intervalStart: e.interval_start
        }),
        g = a.useMemo(() => {
            let t = new Map();
            m.forEach((e) => {
                let { userId: c, previousRank: d } = e;
                t.set(c, d);
            });
            let { sort_by_statistic_id: c } = e.guild_settings;
            return e.users.map((e, d) => {
                var a, s;
                return {
                    userId: e.user_id,
                    value: null !== (s = null === (a = e.statistics[c]) || void 0 === a ? void 0 : a.value) && void 0 !== s ? s : 0,
                    rank: d + 1,
                    previousRank: t.get(e.user_id)
                };
            });
        }, [e, m]),
        h = (0, _.r)(e),
        { primaryColor: N } = (0, f.Z)(h),
        Z = a.useMemo(() => {
            let t = (0, l.oo)(N),
                e = {
                    ...(0, l.pz)(t.r, t.g, t.b),
                    l: 15
                };
            return (0, l.ZJ)(e.h, e.s, e.l);
        }, [N]),
        E = a.useMemo(() => null == g.find((t) => t.userId === b) && g.length <= 10, [g, b]);
    if (
        (a.useEffect(() => {
            T.M.forEach((t) => (0, i.po)(t));
        }),
        0 === e.users.length)
    )
        return (0, d.jsx)(y, { leaderboard: e });
    let { sort_by_statistic_id: I, sort_desc: S } = e.guild_settings,
        A = e.settings.statistics[I];
    return (0, d.jsxs)('div', {
        className: L.container,
        style: { background: Z },
        children: [
            (0, d.jsx)(x.Z, {
                userId: g[0].userId,
                leaderboard: e
            }),
            c
                ? null
                : (0, d.jsx)(d.Fragment, {
                      children: (0, d.jsxs)('div', {
                          className: L.table,
                          children: [
                              (0, d.jsxs)('div', {
                                  className: L.headerRow,
                                  children: [
                                      (0, d.jsx)(n.Text, {
                                          variant: 'text-xxs/medium',
                                          className: L.headerRank,
                                          children: '#'
                                      }),
                                      (0, d.jsx)(n.Text, {
                                          variant: 'text-xxs/medium',
                                          className: L.headerPlayer,
                                          children: R.intl.string(R.t['6ii1+/'])
                                      }),
                                      (0, d.jsx)(n.Text, {
                                          variant: 'text-xxs/medium',
                                          className: L.headerValue,
                                          children: (0, j.s)({
                                              statisticId: I,
                                              sortDesc: S,
                                              aggregationType: null == A ? void 0 : A.aggregation_type
                                          })
                                      })
                                  ]
                              }),
                              (0, d.jsxs)(n.u2D, {
                                  className: L.rows,
                                  children: [
                                      g.map((t) =>
                                          (0, a.createElement)(k, {
                                              ...t,
                                              key: t.userId,
                                              guildId: e.guild_id,
                                              locale: u,
                                              leaderboard: e,
                                              trackRankingItemInteraction: o
                                          })
                                      ),
                                      E ? (0, d.jsx)(D, { leaderboard: e }) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function y(t) {
    let { leaderboard: e } = t,
        c = (0, _.r)(e);
    return (0, d.jsx)(N.z, {
        imageUrl: c,
        children: (0, d.jsxs)('span', {
            className: L.emptyTitleContainer,
            children: [
                (0, d.jsx)(n.Text, {
                    tag: 'span',
                    variant: 'text-lg/normal',
                    className: L.emptyTitle,
                    children: R.intl.string(R.t.BfRGk5)
                }),
                (0, d.jsx)(E.Z, {
                    className: L.emptyWinnerImage,
                    leaderboard: e
                })
            ]
        })
    });
}
function k(t) {
    let { userId: e, rank: c, value: f, guildId: i, previousRank: p, locale: r, leaderboard: l, trackRankingItemInteraction: j } = t,
        _ = (0, s.e7)([u.default], () => u.default.getUser(e)),
        v = m.ZP.getName(i, void 0, _),
        x = null != p && p > c,
        [N, A] = a.useState('default'),
        y = (0, s.e7)([b.Z], () => {
            let t = b.Z.getPrimaryActivity(e);
            return (null == t ? void 0 : t.application_id) != null && I.T.includes(t.application_id);
        }),
        { generatingImage: k, generateImage: D } = (0, o.d)({
            renderComponent: (t) =>
                (0, d.jsx)(T.Z, {
                    ...t,
                    userId: e,
                    leaderboard: l,
                    guildId: i
                }),
            imageOptions: { pixelRatio: 4 }
        }),
        C = async () => {
            try {
                let t = await D();
                await h.ZP.copyImageBlob(t, 'leaderboard.png'), A('copied'), null == j || j(S.xP.COPIED_LEADERBOARD_ROW);
            } catch (t) {
                A('error');
            }
        },
        U = (0, d.jsx)(n.Text, {
            className: L.tooltip,
            variant: 'text-sm/medium',
            children:
                'copied' === N
                    ? (0, d.jsxs)(d.Fragment, {
                          children: [
                              (0, d.jsx)(n.kSu, {
                                  size: 'xs',
                                  color: n.TVs.colors.STATUS_POSITIVE
                              }),
                              R.intl.string(R.t.ZO0ku7)
                          ]
                      })
                    : 'error' === N
                      ? (0, d.jsxs)(d.Fragment, {
                            children: [
                                (0, d.jsx)(n.P$X, {
                                    size: 'xs',
                                    color: n.TVs.colors.STATUS_DANGER
                                }),
                                R.intl.string(R.t.j2d6Ki)
                            ]
                        })
                      : (0, d.jsx)(d.Fragment, { children: R.intl.string(R.t.mikfoa) })
        });
    return (0, d.jsxs)('div', {
        className: L.userRow,
        children: [
            x ? (0, d.jsx)('div', { className: L.rankChangeIndicator }) : null,
            (0, d.jsx)('div', {
                className: L.userRank,
                children:
                    c <= 3
                        ? (0, d.jsx)(Z._, { rank: c })
                        : (0, d.jsx)(n.Text, {
                              tabularNumbers: !0,
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: c
                          })
            }),
            (0, d.jsxs)('div', {
                className: L.userPlayer,
                children: [
                    (0, d.jsx)(n.qEK, {
                        src: null == _ ? void 0 : _.getAvatarURL(i, 16),
                        size: n.EFr.SIZE_16,
                        'aria-label': 'avatar'
                    }),
                    (0, d.jsx)(n.LZC, {
                        size: 6,
                        horizontal: !0
                    }),
                    (0, d.jsx)(n.X6q, {
                        lineClamp: 1,
                        variant: 'heading-sm/medium',
                        color: 'header-primary',
                        children: v
                    }),
                    1 === c
                        ? (0, d.jsxs)(d.Fragment, {
                              children: [
                                  (0, d.jsx)(n.LZC, {
                                      size: 4,
                                      horizontal: !0
                                  }),
                                  (0, d.jsx)(E.Z, {
                                      className: L.userWinnerImage,
                                      leaderboard: l
                                  })
                              ]
                          })
                        : null,
                    x ? (0, d.jsx)(O, { rankChange: p - c }) : null
                ]
            }),
            (0, d.jsxs)('div', {
                className: L.badgesContainer,
                children: [
                    y &&
                        (0, d.jsx)(n.iWm, {
                            size: 'xs',
                            color: n.TVs.colors.TEXT_POSITIVE,
                            className: L.liveIcon
                        }),
                    g.isPlatformEmbedded &&
                        (0, d.jsx)(n.ua7, {
                            text: U,
                            'aria-label': !1,
                            shouldShow: !k,
                            onTooltipHide: () => A('default'),
                            children: (t) =>
                                (0, d.jsx)(n.P3F, {
                                    ...t,
                                    onClick: k ? void 0 : C,
                                    'aria-busy': k,
                                    className: L.copyLinkContainer,
                                    children: k
                                        ? (0, d.jsx)(n.$jN, {
                                              type: n.$jN.Type.SPINNING_CIRCLE_SIMPLE,
                                              className: L.copySpinner
                                          })
                                        : (0, d.jsx)(n.xPt, {
                                              size: 'xs',
                                              className: L.copyLink
                                          })
                                })
                        })
                ]
            }),
            (0, d.jsx)(n.X6q, {
                variant: 'heading-sm/medium',
                color: 'header-primary',
                tabularNumbers: !0,
                children: f.toLocaleString(r)
            })
        ]
    });
}
function D(t) {
    let { leaderboard: e } = t;
    return (0, d.jsxs)('div', {
        className: L.joinLeaderboardCTAContainer,
        children: [
            (0, d.jsx)(n.Text, {
                variant: 'text-xs/normal',
                children: R.intl.string(R.t.BfRGk5)
            }),
            (0, d.jsx)(E.Z, {
                className: L.joinLeaderboardCTAWinnerImage,
                leaderboard: e
            })
        ]
    });
}
function O(t) {
    let { rankChange: e } = t;
    return (0, d.jsxs)('div', {
        className: L.rankChangeBadge,
        children: [
            (0, d.jsx)(n.wj7, {
                size: 'xxs',
                color: n.TVs.colors.TEXT_MUTED
            }),
            (0, d.jsx)(n.Text, {
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: e
            })
        ]
    });
}
