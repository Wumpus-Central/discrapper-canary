c.d(e, { Z: () => w }), c(47120);
var d = c(200651),
    a = c(192379),
    s = c(442837),
    n = c(481060),
    o = c(195302),
    f = c(206295),
    p = c(134432),
    i = c(706454),
    r = c(314897),
    b = c(158776),
    u = c(594174),
    l = c(302221),
    m = c(5192),
    g = c(358085),
    j = c(998502),
    h = c(528567),
    _ = c(371583),
    v = c(246627),
    x = c(249268),
    O = c(864138),
    y = c(473188),
    N = c(169080),
    S = c(986398),
    Z = c(463031),
    P = c(206583),
    E = c(388032),
    T = c(991838);
function I(t) {
    for (var e = 1; e < arguments.length; e++) {
        var c = null != arguments[e] ? arguments[e] : {},
            d = Object.keys(c);
        'function' == typeof Object.getOwnPropertySymbols &&
            (d = d.concat(
                Object.getOwnPropertySymbols(c).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(c, t).enumerable;
                })
            )),
            d.forEach(function (e) {
                var d;
                (d = c[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: d,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = d);
            });
    }
    return t;
}
function R(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var c = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var d = Object.getOwnPropertySymbols(t);
                      c.push.apply(c, d);
                  }
                  return c;
              })(Object(e)).forEach(function (c) {
                  Object.defineProperty(t, c, Object.getOwnPropertyDescriptor(e, c));
              }),
        t
    );
}
function w(t) {
    let { leaderboard: e, previewMode: c = !1, trackRankingItemInteraction: o } = t,
        b = (0, s.e7)([r.default], () => r.default.getId()),
        u = (0, s.e7)([i.default], () => i.default.locale),
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
        j = (0, _.r)(e),
        { primaryColor: O } = (0, f.Z)(j),
        y = a.useMemo(() => {
            let t = (0, l.oo)(O),
                e = R(I({}, (0, l.pz)(t.r, t.g, t.b)), { l: 15 });
            return (0, l.ZJ)(e.h, e.s, e.l);
        }, [O]),
        S = a.useMemo(() => null == g.find((t) => t.userId === b) && g.length <= 10, [g, b]);
    if (
        (a.useEffect(() => {
            N.M.forEach((t) => (0, p.po)(t));
        }),
        0 === e.users.length)
    )
        return (0, d.jsx)(D, { leaderboard: e });
    let { sort_by_statistic_id: Z, sort_desc: P } = e.guild_settings,
        w = e.settings.statistics[Z];
    return (0, d.jsxs)('div', {
        className: T.container,
        style: { background: y },
        children: [
            (0, d.jsx)(x.Z, {
                userId: g[0].userId,
                leaderboard: e
            }),
            c
                ? null
                : (0, d.jsx)(d.Fragment, {
                      children: (0, d.jsxs)('div', {
                          className: T.table,
                          children: [
                              (0, d.jsxs)('div', {
                                  className: T.headerRow,
                                  children: [
                                      (0, d.jsx)(n.Text, {
                                          variant: 'text-xxs/medium',
                                          className: T.headerRank,
                                          children: '#'
                                      }),
                                      (0, d.jsx)(n.Text, {
                                          variant: 'text-xxs/medium',
                                          className: T.headerPlayer,
                                          children: E.NW.string(E.t['6ii1+/'])
                                      }),
                                      (0, d.jsx)(n.Text, {
                                          variant: 'text-xxs/medium',
                                          className: T.headerValue,
                                          children: (0, h.s)({
                                              statisticId: Z,
                                              sortDesc: P,
                                              aggregationType: null == w ? void 0 : w.aggregation_type
                                          })
                                      })
                                  ]
                              }),
                              (0, d.jsxs)(n.u2D, {
                                  className: T.rows,
                                  children: [
                                      g.map((t) =>
                                          (0, a.createElement)(
                                              k,
                                              R(I({}, t), {
                                                  key: t.userId,
                                                  guildId: e.guild_id,
                                                  locale: u,
                                                  leaderboard: e,
                                                  trackRankingItemInteraction: o
                                              })
                                          )
                                      ),
                                      S ? (0, d.jsx)(L, { leaderboard: e }) : null
                                  ]
                              })
                          ]
                      })
                  })
        ]
    });
}
function D(t) {
    let { leaderboard: e } = t,
        c = (0, _.r)(e);
    return (0, d.jsx)(O.z, {
        imageUrl: c,
        children: (0, d.jsxs)('span', {
            className: T.emptyTitleContainer,
            children: [
                (0, d.jsx)(n.Text, {
                    tag: 'span',
                    variant: 'text-lg/normal',
                    className: T.emptyTitle,
                    children: E.NW.string(E.t.BfRGk5)
                }),
                (0, d.jsx)(S.Z, {
                    className: T.emptyWinnerImage,
                    leaderboard: e
                })
            ]
        })
    });
}
function k(t) {
    let { userId: e, rank: c, value: f, guildId: p, previousRank: i, locale: r, leaderboard: l, trackRankingItemInteraction: h } = t,
        _ = (0, s.e7)([u.default], () => u.default.getUser(e)),
        v = m.ZP.getName(p, void 0, _),
        x = null != i && i > c,
        [O, w] = a.useState('default'),
        D = (0, s.e7)([b.Z], () => {
            let t = b.Z.getPrimaryActivity(e);
            return (null == t ? void 0 : t.application_id) != null && Z.T.includes(t.application_id);
        }),
        { generatingImage: k, generateImage: L } = (0, o.d)({
            renderComponent: (t) =>
                (0, d.jsx)(
                    N.Z,
                    R(I({}, t), {
                        userId: e,
                        leaderboard: l,
                        guildId: p
                    })
                ),
            imageOptions: { pixelRatio: 4 }
        }),
        C = async () => {
            try {
                let t = await L();
                await j.ZP.copyImageBlob(t, 'leaderboard.png'), w('copied'), null == h || h(P.xP.COPIED_LEADERBOARD_ROW);
            } catch (t) {
                w('error');
            }
        },
        U = (0, d.jsx)(n.Text, {
            className: T.tooltip,
            variant: 'text-sm/medium',
            children:
                'copied' === O
                    ? (0, d.jsxs)(d.Fragment, {
                          children: [
                              (0, d.jsx)(n.kSu, {
                                  size: 'xs',
                                  color: n.TVs.colors.STATUS_POSITIVE
                              }),
                              E.NW.string(E.t.ZO0ku7)
                          ]
                      })
                    : 'error' === O
                      ? (0, d.jsxs)(d.Fragment, {
                            children: [
                                (0, d.jsx)(n.P$X, {
                                    size: 'xs',
                                    color: n.TVs.colors.STATUS_DANGER
                                }),
                                E.NW.string(E.t.j2d6Ki)
                            ]
                        })
                      : (0, d.jsx)(d.Fragment, { children: E.NW.string(E.t.mikfoa) })
        });
    return (0, d.jsxs)('div', {
        className: T.userRow,
        children: [
            x ? (0, d.jsx)('div', { className: T.rankChangeIndicator }) : null,
            (0, d.jsx)('div', {
                className: T.userRank,
                children:
                    c <= 3
                        ? (0, d.jsx)(y._, { rank: c })
                        : (0, d.jsx)(n.Text, {
                              tabularNumbers: !0,
                              color: 'text-muted',
                              variant: 'text-xs/medium',
                              children: c
                          })
            }),
            (0, d.jsxs)('div', {
                className: T.userPlayer,
                children: [
                    (0, d.jsx)(n.qEK, {
                        src: null == _ ? void 0 : _.getAvatarURL(p, 16),
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
                                  (0, d.jsx)(S.Z, {
                                      className: T.userWinnerImage,
                                      leaderboard: l
                                  })
                              ]
                          })
                        : null,
                    x ? (0, d.jsx)(A, { rankChange: i - c }) : null
                ]
            }),
            (0, d.jsxs)('div', {
                className: T.badgesContainer,
                children: [
                    D &&
                        (0, d.jsx)(n.iWm, {
                            size: 'xs',
                            color: n.TVs.colors.TEXT_POSITIVE,
                            className: T.liveIcon
                        }),
                    g.isPlatformEmbedded &&
                        (0, d.jsx)(n.ua7, {
                            text: U,
                            'aria-label': !1,
                            shouldShow: !k,
                            onTooltipHide: () => w('default'),
                            children: (t) =>
                                (0, d.jsx)(
                                    n.P3F,
                                    R(I({}, t), {
                                        onClick: k ? void 0 : C,
                                        'aria-busy': k,
                                        className: T.copyLinkContainer,
                                        children: k
                                            ? (0, d.jsx)(n.$jN, {
                                                  type: n.$jN.Type.SPINNING_CIRCLE_SIMPLE,
                                                  className: T.copySpinner
                                              })
                                            : (0, d.jsx)(n.xPt, {
                                                  size: 'xs',
                                                  className: T.copyLink
                                              })
                                    })
                                )
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
function L(t) {
    let { leaderboard: e } = t;
    return (0, d.jsxs)('div', {
        className: T.joinLeaderboardCTAContainer,
        children: [
            (0, d.jsx)(n.Text, {
                variant: 'text-xs/normal',
                children: E.NW.string(E.t.BfRGk5)
            }),
            (0, d.jsx)(S.Z, {
                className: T.joinLeaderboardCTAWinnerImage,
                leaderboard: e
            })
        ]
    });
}
function A(t) {
    let { rankChange: e } = t;
    return (0, d.jsxs)('div', {
        className: T.rankChangeBadge,
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
